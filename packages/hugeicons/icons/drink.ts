import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDrinkIcon],svg[hugeicons-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8.205 15.358l-3.688-4.277C2.625 8.887 1.68 7.79 2.098 6.895S3.98 6 6.901 6h4.198c2.922 0 4.383 0 4.803.895c.42.894-.527 1.992-2.42 4.186l-3.687 4.277C9.425 15.786 9.24 16 9 16s-.426-.214-.795-.642M8.5 6l-.401-2.406a1 1 0 0 0-.67-.784L5 2m4 14v6m-1.5 0h3"></svg:path><svg:path d="M15.86 8.833A3.52 3.52 0 0 0 18.482 10A3.51 3.51 0 0 0 22 6.5C22 4.567 20.425 3 18.482 3A3.51 3.51 0 0 0 15 6"></svg:path></svg:g>`,
})
export class HugeiconsDrinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
