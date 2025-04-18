import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCopilotIcon],svg[hugeicons-copilot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.846 4c.822 0 1.534.624 1.712 1.5l.213 1.048C16.005 7.688 16.93 8.5 18 8.5h-6.617M13.846 4c-.79 0-1.484.578-1.692 1.412L11.383 8.5M13.846 4H7.98c-1.653 0-3.1 1.207-3.534 2.948l-1.38 6.026c-.318 1.272.559 2.526 1.766 2.526h2.83c1.238 0 2.324-.905 2.65-2.21l1.07-4.79"></svg:path><svg:path d="M10.154 20c-.822 0-1.534-.624-1.712-1.5l-.214-1.048C7.996 16.312 7.07 15.5 6 15.5h6.617M10.154 20c.79 0 1.484-.578 1.692-1.412l.771-3.088M10.154 20h5.867c1.652 0 3.099-1.207 3.534-2.948l1.38-6.026c.317-1.272-.56-2.526-1.767-2.526h-2.83c-1.238 0-2.324.905-2.65 2.21l-1.07 4.79"></svg:path></svg:g>`,
})
export class HugeiconsCopilotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
