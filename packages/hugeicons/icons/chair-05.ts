import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChair05Icon],svg[hugeicons-chair-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8 17l-1 5m9-5l1 5m-5-9c-1.522 0-3.13.293-4.392.684c-.95.294-1.714 1.638-1.596 2.729c.044.404.357.587.686.587h10.604c.33 0 .642-.183.686-.587c.118-1.091-.646-2.435-1.596-2.73C15.131 13.294 13.522 13 12 13"></svg:path><svg:path d="M15.773 14C17.013 12.432 18 10.368 18 8.355C18 4.305 15.314 2 12 2S6 4.305 6 8.355c0 2.013.988 4.077 2.227 5.645"></svg:path><svg:path d="M13.67 2c.209 1.133.33 2.568.33 4.274c0 2.419-.364 4.904-.806 6.726M10.33 2C10.121 3.133 10 4.568 10 6.274c0 2.419.364 4.904.806 6.726"></svg:path></svg:g>`,
})
export class HugeiconsChair05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
