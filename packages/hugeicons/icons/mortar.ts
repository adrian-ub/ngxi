import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMortarIcon],svg[hugeicons-mortar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.963 12h14.074c.977 0 1.466 0 1.768.375c.302.376.209.787.023 1.609a9.02 9.02 0 0 1-4.075 5.676c-.392.24-.559.738-.347 1.144A.82.82 0 0 1 15.674 22H8.326a.82.82 0 0 1-.732-1.196c.212-.406.045-.903-.347-1.144a9.02 9.02 0 0 1-4.075-5.676c-.186-.822-.279-1.233.023-1.609S3.985 12 4.963 12"></svg:path><svg:path d="m17.459 12l1.55-3.719c.175-.419.606-.629 1.038-.701c.374-.062.672-.239.831-.527c.397-.718-.21-1.859-1.355-2.55s-2.397-.668-2.793.05c-.16.289-.157.646-.022 1.015c.156.427.197.92-.063 1.288L13 12M6.502 5.502L10 9M8.6 3.403c1.546 1.546 1.16 3.039 0 4.198c-1.158 1.159-2.651 1.545-4.197 0c-1.546-1.546-1.4-5.597-1.4-5.597s4.052-.147 5.598 1.399"></svg:path></svg:g>`,
})
export class HugeiconsMortarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
