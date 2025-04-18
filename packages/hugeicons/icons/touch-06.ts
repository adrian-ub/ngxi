import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouch06Icon],svg[hugeicons-touch-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.6 13.545V8.97m0 0V3.427c0-.822.716-1.425 1.554-1.425c.84 0 1.511.603 1.511 1.425l.068 5.073M7.6 8.97c-1.345 1.194-2.817 2.576-3.012 2.962c-.906 1.353-.835 2.564.709 4.635a46 46 0 0 0 2.223 2.735c.8.773.584 1.819.584 2.695M10.734 8.5v2.53m0-2.53c.716-.842 2.641-.543 3.045 1.177m.036 1.348v-1.002q0-.12-.015-.237m-.021-.109l.02.109m-.02-.109a1 1 0 0 0 .02.109m-.02-.109c.228-1.177 2.958-.907 3.085 1.202v1.146m.98 9.969v-1.04c.039-1.226 1.077-1.597 1.694-2.937c.624-1.232.435-4.362.435-5.86c.027-.356-.216-1.39-1.342-1.781c-.354-.168-1.15-.41-1.834.073" color="currentColor"></svg:path>`,
})
export class HugeiconsTouch06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
