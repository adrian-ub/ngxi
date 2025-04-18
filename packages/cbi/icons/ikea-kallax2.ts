import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiIkeaKallax2Icon],svg[cbi-ikea-kallax2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.924 6.761L5.968 6.33L2 7.092v8.678l8.654.986h.008l8.066.919L22 15.741V7.159Zm-3.969 9.122L2.823 15.1V7.945l.246.016l.034 6.953l6.693.72v-1.883L6.55 13.37V8.177l3.45.216Zm8.076.915l-6.279-.692l.2-.115l5.854.63v-1.883l-3.879-.455V8.495l4.158.179z"></svg:path>`,
})
export class CbiIkeaKallax2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
