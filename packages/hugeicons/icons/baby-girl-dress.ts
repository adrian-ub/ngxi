import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBabyGirlDressIcon],svg[hugeicons-baby-girl-dress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8.212 9l-3.933 7.475C2.458 19.936 10.079 21 12 21s9.542-1.064 7.721-4.525L15.788 9"></svg:path><svg:path d="M10.134 12.22c.67-.365 1.256-.217 1.607.017c.145.097.217.145.259.145s.114-.048.259-.145c.351-.234.936-.382 1.607-.016c.88.48 1.079 2.062-.95 3.397c-.387.255-.58.382-.916.382c-.335 0-.529-.127-.915-.382c-2.03-1.335-1.83-2.917-.95-3.397M7 10.814c-2 .977-5.526-2.183-4.934-2.94L5.57 3.39c.19-.244.502-.39.834-.39h2.103a.57.57 0 0 1 .533.376c.383 1.067 1.722 2.347 2.96 2.347s2.577-1.28 2.96-2.347A.57.57 0 0 1 15.493 3h2.103c.332 0 .643.146.834.39l3.504 4.483c.592.758-2.934 3.918-4.932 2.941"></svg:path></svg:g>`,
})
export class HugeiconsBabyGirlDressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
