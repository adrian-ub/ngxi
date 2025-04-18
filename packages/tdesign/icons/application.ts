import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignApplicationIcon],svg[tdesign-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .845l9.66 5.578v11.154L12 23.155l-9.66-5.578V6.423zm0 2.31L4.34 7.577v8.846L12 20.845l7.66-4.422V7.577zM8.723 8.613L12 10.798l3.277-2.185l1.11 1.664L13 12.535V16h-2v-3.465l-3.387-2.258z"></svg:path>`,
})
export class TdesignApplicationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
