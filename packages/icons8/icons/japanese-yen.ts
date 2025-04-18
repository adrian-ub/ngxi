import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8JapaneseYenIcon],svg[icons8-japanese-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.188 5l6.875 11H10v2h5v2h-5v2h5v5h2v-5h5v-2h-5v-2h5v-2h-4.063l6.875-11h-2.375L16 15.344L9.562 5z"></svg:path>`,
})
export class Icons8JapaneseYenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
