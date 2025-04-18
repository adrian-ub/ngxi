import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChair03Icon],svg[hugeicons-chair-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 12h10M7 15h10M7.5 6L6 22M16.5 6L18 22M12 2c-1.522 0-3.13.292-4.392.684c-.95.294-1.714 1.638-1.596 2.729c.044.404.357.587.686.587h10.604c.33 0 .642-.183.686-.587c.118-1.091-.646-2.435-1.596-2.73C15.131 2.294 13.522 2 12 2" color="currentColor"></svg:path>`,
})
export class HugeiconsChair03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
