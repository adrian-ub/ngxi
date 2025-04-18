import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelVideoIcon],svg[raphael-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.188 4.875V5.97h-4.5V4.874H8.062V5.97h-4.5V4.874h-1v21.25h1V25.03h4.5v1.095h14.625V25.03h4.5v1.095h1.25V4.875h-1.25zM8.062 23.72h-4.5v-3.126h4.5v3.125zm0-4.44h-4.5v-3.124h4.5zm0-4.436h-4.5V11.72h4.5zm0-4.438h-4.5V7.28h4.5zm3.185 10.184V9.754l9.382 5.418zm15.94 3.13h-4.5v-3.126h4.5v3.125zm0-4.44h-4.5v-3.124h4.5zm0-4.436h-4.5V11.72h4.5zm0-4.438h-4.5V7.28h4.5z"></svg:path>`,
})
export class RaphaelVideoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
