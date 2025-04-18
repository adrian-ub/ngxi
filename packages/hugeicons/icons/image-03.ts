import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsImage03Icon],svg[hugeicons-image-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2.813c3.97 0 5.97 0 7.36 1.39s1.39 3.38 1.39 7.36v2c0 3.97 0 5.97-1.39 7.36s-3.39 1.39-7.36 1.39h-4c-3.97 0-5.97 0-7.36-1.39s-1.39-3.38-1.39-7.36v-2c0-3.97 0-5.97 1.39-7.36s3.39-1.39 7.36-1.39zM3.7 5.263c-.95.95-.95 2.74-.95 6.3h-.01v2c0 1.44.01 2.59.07 3.51l2.78-3.12c.69-.79 2.04-.83 2.78-.08l1.63 1.63l4.13-4.13c.73-.73 2.05-.71 2.77.06l4.33 4.72c.02-.74.02-1.59.02-2.59v-2c0-3.56 0-5.35-.95-6.3s-2.74-.95-6.3-.95h-4c-3.56 0-5.35 0-6.3.95m6.3 15.55h4v-.01c3.56 0 5.35 0 6.3-.95c.4-.39.63-.95.76-1.71l-.11-.08l-5.15-5.62c-.16-.17-.45-.18-.61-.02l-4.66 4.66c-.28.28-.78.28-1.06 0l-2.16-2.16a.414.414 0 0 0-.59.02l-3.57 4.02c.13.36.31.66.55.9c.95.95 2.74.95 6.3.95m.75-11.75c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25m-1.5 0c0-.41-.34-.75-.75-.75s-.75.34-.75.75s.34.75.75.75s.75-.34.75-.75" color="currentColor"></svg:path>`,
})
export class HugeiconsImage03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
