import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRectangular01Icon],svg[hugeicons-rectangular-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.69 2.438L5.353 4.22c-.972.741-1.458 1.112-1.335 1.446C4.142 6 4.764 6 6.009 6H16c.364 0 .547 0 .715-.056c.169-.057.311-.165.596-.382l2.335-1.781c.972-.741 1.458-1.112 1.335-1.447S20.236 2 18.991 2H9c-.364 0-.547 0-.715.056c-.169.057-.311.165-.596.382"></svg:path><svg:path d="M4.019 21.666c.123.334.745.334 1.99.334H16c.364 0 .547 0 .715-.056M4.02 21.666c-.123-.335.363-.705 1.335-1.446l2.335-1.781c.285-.217.427-.326.596-.382M4.02 21.666v-16m4.266 12.39C8.453 18 8.635 18 9 18h5m-5.715.057V9m8.43 12.944c.169-.056.311-.165.596-.382l2.335-1.78c.972-.742 1.458-1.113 1.335-1.447v-16m-4.266 19.61v-16"></svg:path></svg:g>`,
})
export class HugeiconsRectangular01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
