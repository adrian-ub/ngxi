import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSunCloud02Icon],svg[hugeicons-sun-cloud-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.478 12h.022a4.5 4.5 0 1 1 0 9H7a5 5 0 0 1-.48-9.977M17.478 12q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 12a5.5 5.5 0 0 1-1.235 3M6.52 11.023Q6.757 11 7 11c1.126 0 2.165.372 3 1"></svg:path><svg:path d="M2.96 10.194c-.741-2.722.9-5.52 3.664-6.25m-3.665 6.25L2 10.447m.96-.253c.184.677.498 1.285.908 1.806m2.756-8.055L6.367 3m.257.945A5.23 5.23 0 0 1 12 5.67m-8.523.653l-1.013-.577m8.677-2.289l-.584.998"></svg:path></svg:g>`,
})
export class HugeiconsSunCloud02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
