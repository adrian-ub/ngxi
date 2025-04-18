import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTired01Icon],svg[hugeicons-tired-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M7 8c.21.583.775 1 1.44 1s1.229-.417 1.438-1m4.244 0c.21.583.774 1 1.439 1c.664 0 1.23-.417 1.439-1m-5 5.5c1.673 0 3.11.956 3.73 2.32c.25.552.375.828.159 1.055c-.217.227-.598.116-1.362-.105c-.723-.21-1.625-.4-2.527-.4s-1.804.19-2.527.4c-.764.221-1.145.332-1.362.105c-.216-.227-.091-.503.16-1.055c.62-1.364 2.056-2.32 3.729-2.32"></svg:path></svg:g>`,
})
export class HugeiconsTired01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
