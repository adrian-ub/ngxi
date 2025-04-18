import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamEjectIcon],svg[jam-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.31 6.51c.843.728.925 1.988.182 2.814a2.05 2.05 0 0 1-1.526.676H2.034C.911 10 0 9.107 0 8.006c0-.573.251-1.118.69-1.496L7.656.498a2.065 2.065 0 0 1 2.688 0zM2.034 8.006h13.932L9 1.994zM18 14v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2m-2 0H2v2h14z"></svg:path>`,
})
export class JamEjectIcon {
  readonly viewBox = input("-3 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
