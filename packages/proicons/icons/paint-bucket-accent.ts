import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPaintBucketAccentIcon],svg[proicons-paint-bucket-accent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.677 13.35l-1.923 3.17c-.985 2.092 1.314 4.206 3.317 3.05a2.36 2.36 0 0 0 .864-3.225zm-7.325 1.578l4.398-4.398H2.748c0 .237.037.475.112.703c.168.52.619.97 1.52 1.871l1.824 1.824c.9.9 1.351 1.351 1.87 1.52c.458.149.95.149 1.407 0c.52-.169.97-.62 1.871-1.52"></svg:path>`,
})
export class ProiconsPaintBucketAccentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
