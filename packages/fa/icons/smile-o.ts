import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSmileOIcon],svg[fa-smile-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1134 947q-37 121-138 195t-228 74t-228-74t-138-195q-8-25 4-48.5t38-31.5q25-8 48.5 4t31.5 38q25 80 92.5 129.5T768 1088t151.5-49.5T1012 909q8-26 32-38t49-4t37 31.5t4 48.5M640 512q0 53-37.5 90.5T512 640t-90.5-37.5T384 512t37.5-90.5T512 384t90.5 37.5T640 512m512 0q0 53-37.5 90.5T1024 640t-90.5-37.5T896 512t37.5-90.5T1024 384t90.5 37.5T1152 512m256 256q0-130-51-248.5t-136.5-204t-204-136.5T768 128t-248.5 51t-204 136.5t-136.5 204T128 768t51 248.5t136.5 204t204 136.5t248.5 51t248.5-51t204-136.5t136.5-204t51-248.5m128 0q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768"></svg:path>`,
})
export class FaSmileOIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
