import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsHeadphonezoneIcon],svg[simple-icons-headphonezone-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.63 4.702L17.96 0L9.086 2.484c-.463 1.754-.694 4.139.133 6.655c.232-.067.463-.1.695-.133a4.724 4.724 0 0 1 5.133 4.305a4.724 4.724 0 0 1-4.305 5.133a4.724 4.724 0 0 1-5.132-4.305a4.62 4.62 0 0 1 1.159-3.543c-.86-1.325-1.987-3.609-1.954-6.49C1.107 6.623-.847 11.258.378 15.86c1.49 5.828 7.45 9.305 13.245 7.782c4.603-1.192 7.748-5.198 8.113-9.702l2.251-1.622l-6.358-7.616Z"></svg:path>`,
})
export class SimpleIconsHeadphonezoneIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
