import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorLoading01Icon],svg[hugeicons-cursor-loading-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.085 3.505c-3.625-.678-7.31-.75-8.32.26c-2.172 2.172.66 16.729 3.77 16.426c1.706-.172 2.897-2.912 4.3-3.768c.551-.337 1.041.005 1.387.455l3.347 4.357c.583.759.994.985 1.873.535c1.352-.692 2.636-1.979 3.328-3.328c.45-.88.224-1.29-.535-1.873L18 14.852"></svg:path><svg:path d="M20.6 2h-5.2c-.73 0-1.37.492-1.398 1.202c-.037.892.59 1.485 1.25 2.042h0c.912.77 1.368 1.154 1.416 1.641a1 1 0 0 1 0 .23c-.048.487-.504.872-1.416 1.641c-.677.572-1.289 1.104-1.25 2.042c.029.71.668 1.202 1.397 1.202h5.202c.729 0 1.368-.492 1.397-1.202a1.9 1.9 0 0 0-.63-1.518c-.203-.178-.414-.35-.62-.524c-.912-.77-1.368-1.154-1.416-1.641a1 1 0 0 1 0-.23c.048-.487.504-.872 1.416-1.641c.67-.566 1.288-1.115 1.25-2.042C21.97 2.492 21.33 2 20.601 2"></svg:path></svg:g>`,
})
export class HugeiconsCursorLoading01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
