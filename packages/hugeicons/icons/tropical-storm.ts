import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTropicalStormIcon],svg[hugeicons-tropical-storm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m17.447 7.857l-1.168-1.441l3.932-2.569C7.27 1.803 5.343 9.75 5.264 10.107l-.008.034l-.012.047a6.5 6.5 0 0 0-.071 3.117a6.8 6.8 0 0 0 1.384 2.836l1.167 1.44l-3.935 2.572c12.94 2.056 14.871-5.905 14.95-6.262l.008-.034l.012-.047a6.5 6.5 0 0 0 .071-3.117a6.8 6.8 0 0 0-1.383-2.836"></svg:path><svg:circle cx="12" cy="12" r="3"></svg:circle></svg:g>`,
})
export class HugeiconsTropicalStormIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
