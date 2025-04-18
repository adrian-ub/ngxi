import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteCubeSolidIcon],svg[flowbite-cube-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.982 4.506a4.28 4.28 0 0 1 4.036 0l3.964 2.142c.363.196.686.44.961.722l-6.929 3.602l-6.807-3.747a4 4 0 0 1 .811-.577zM4.167 8.844A3.6 3.6 0 0 0 4 9.918v4.283c0 1.35.77 2.597 2.018 3.271l3.964 2.142c.32.173.66.302 1.009.386v-7.4zM13.009 20a4.2 4.2 0 0 0 1.01-.386l3.963-2.142C19.23 16.798 20 15.551 20 14.202V9.917q-.001-.451-.11-.88l-6.881 3.578z"></svg:path>`,
})
export class FlowbiteCubeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
