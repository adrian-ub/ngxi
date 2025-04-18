import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCraneIcon],svg[hugeicons-crane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.254 16.001H5.25a3 3 0 1 0 0 6h10.003a3 3 0 1 0 0-6m-2.177-9.388l-1.67-1.546c-.568-.527-.852-.79-1.205-.928c-.352-.138-1.175-.138-1.95-.138h.004c-1.886 0-2.83 0-3.415.586c-.586.586-.586 1.528-.586 3.414v1c0 1.886 0 2.828.586 3.414s1.529.586 3.415.586h2.316c1.581 0 2.372 0 2.914-.422q.196-.153.35-.35c.422-.541.422-1.332.422-2.913c0-.724-.104-1.324-.223-1.653c-.161-.312-.427-.558-.958-1.05m0 0s3.041-3.372 3.498-3.792c.505-.404.78-.822 2.52-.816c.331-.007.72-.006 1.165-.006m0 3.498v.504m-.048 5.496v.444c0 .094.024.048.024.048c.122.005.48.096.48.096s1.092.336 1.032 1.536c-.033.66-.556 1.203-1.188 1.344c-.698.155-1.525-.204-1.8-.96m1.5-5.502v.498m-10.011 10h.009m-4.006 0h.009m7.984 0h.01" color="currentColor"></svg:path>`,
})
export class HugeiconsCraneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
