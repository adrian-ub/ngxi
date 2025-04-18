import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiSignatureLtrIcon],svg[ooui-signature-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 18h20v1H0zm-.003-6.155l1.06-1.06l4.363 4.362l-1.06 1.06z"></svg:path><svg:path fill="currentColor" d="m.004 15.147l4.363-4.363l1.06 1.061l-4.362 4.363zM17 5c0 9-11 9-11 9v-1.5s8 .5 9.5-6.5C16 4 15 2.5 14 2.5S11 4 10.75 10c-.08 2 .75 4.5 3.25 4.5c1.5 0 2-1 3.5-1a2.07 2.07 0 0 1 2.25 2.5h-1.5s.13-1-.5-1C16 15 16 16 14 16c0 0-4.75 0-4.75-6S12 1 14 1c.5 0 3 0 3 4"></svg:path>`,
})
export class OouiSignatureLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
