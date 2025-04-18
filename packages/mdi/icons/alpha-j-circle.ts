import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAlphaJCircleIcon],svg[mdi-alpha-j-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m1 5v8h-2v-1H9v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V7z"></svg:path>`,
})
export class MdiAlphaJCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
