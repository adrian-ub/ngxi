import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqKnifeIcon],svg[marketeq-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m21.69 31.264l-5.893-5.892l-9.56 9.56l5.892 5.893z"></svg:path><svg:path stroke="#306CFE" d="m34.286 9.805l8.839 8.839a2.083 2.083 0 0 1 0 2.946L29.042 35.673a2.083 2.083 0 0 1-2.947 0L15.783 25.361L31.34 9.805a2.083 2.083 0 0 1 2.946 0"></svg:path></svg:g>`,
})
export class MarketeqKnifeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
