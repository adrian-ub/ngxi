import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCleanupIcon],svg[arcticons-cleanup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.619 18.911V37.35a3.67 3.67 0 0 0 3.677 3.68h3.616v-8.11c0-1.019.65-1.84 1.458-1.84s1.458.821 1.458 1.84v8.11h4.714v-8.11c0-1.019.65-1.84 1.458-1.84s1.458.821 1.458 1.84v8.11h4.714v-8.11c0-1.019.65-1.84 1.458-1.84c.809 0 1.458.821 1.458 1.84v8.11h3.616a3.67 3.67 0 0 0 3.677-3.68V18.911M7.952 10.565h32.096a2.447 2.447 0 0 1 2.452 2.453v3.328a2.447 2.447 0 0 1-2.452 2.453H7.952A2.447 2.447 0 0 1 5.5 16.346v-3.328a2.447 2.447 0 0 1 2.452-2.453m12.82-.137l-.004-.154c0-1.824 1.447-3.304 3.232-3.304s3.232 1.48 3.232 3.304h0q0 .078-.004.154"></svg:path>`,
})
export class ArcticonsCleanupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
