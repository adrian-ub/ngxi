import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTlajoappIcon],svg[arcticons-tlajoapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.257 27.341c1.917 6.293 9.287 12.018 9.287 12.018s9.74-7.565 9.74-14.862a9.748 9.748 0 0 0-11.667-9.55"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.544 29.682v-6.378c0-11.592-7.34-15.341-21.044-14.565c0 13.402 1.896 17.884 14.036 18.84c5.946.469 7.008 2.103 7.008 2.103m6.114-12.766c2.395-2.217 6.386-2.95 11.842-2.642c0 8.824-1.194 12.03-8.61 12.87"></svg:path>`,
})
export class ArcticonsTlajoappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
