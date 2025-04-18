import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiUbiquitiUxIcon],svg[cbi-ubiquiti-ux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.098 8.243h23.805c.043 0 .097.043.097.088c-.005.974-.001 4.782-.001 5.756c0 .134-.165.224-.274.295c-.376.243-1.871 1.109-2.233 1.319a.3.3 0 0 1-.154.053c-.688.002-17.933.003-18.675 0a.3.3 0 0 1-.154-.053c-.362-.21-1.857-1.077-2.233-1.319c-.109-.07-.274-.16-.274-.295c0-.974.004-4.782-.001-5.756c0-.045.054-.088.097-.088m14.554 2.908c0-.696-.565-1.261-1.261-1.261h-2.783a1.262 1.262 0 0 0 0 2.522h2.783c.696 0 1.261-.565 1.261-1.261"></svg:path>`,
})
export class CbiUbiquitiUxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
