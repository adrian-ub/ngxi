import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSunCloudBigRain02Icon],svg[hugeicons-sun-cloud-big-rain-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.478 11h.022a4.5 4.5 0 0 1 4.5 4.5c0 2.325-1.738 4.263-4 4.5m-.522-9q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 11a5.5 5.5 0 0 1-1.235 3M6.52 10.023A5 5 0 0 0 2 15c0 2.419 1.718 4.512 4 4.975m.52-9.952Q6.757 10 7 10c1.126 0 2.165.372 3 1m-.5 8.503c0-1.255 1.053-2.495 1.792-3.211a1.004 1.004 0 0 1 1.416 0c.739.716 1.792 1.956 1.792 3.211C14.5 20.734 13.553 22 12 22s-2.5-1.266-2.5-2.497"></svg:path><svg:path d="M2.96 9.194c-.741-2.722.9-5.52 3.664-6.25m-3.665 6.25L2 9.447m.96-.253c.184.677.498 1.285.908 1.806m2.756-8.055L6.367 2m.257.945A5.23 5.23 0 0 1 12 4.67m-8.523.653l-1.013-.577m8.677-2.289l-.584.998"></svg:path></svg:g>`,
})
export class HugeiconsSunCloudBigRain02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
