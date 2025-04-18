import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsThoriumIcon],svg[arcticons-thorium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.184 13.534h13.773M17.2 34.465V13.534m10.193.001v20.931m0-8.634c0-2.878 2.345-5.233 5.211-5.233s5.212 2.355 5.212 5.233v8.634"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsThoriumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
