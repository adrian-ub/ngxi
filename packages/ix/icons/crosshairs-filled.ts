import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCrosshairsFilledIcon],svg[ix-crosshairs-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 42.667v43.987c77.2 9.626 138.387 70.813 148.013 148.013h43.987v42.666h-43.987c-9.626 77.2-70.813 138.387-148.013 148.013v43.987h-42.666v-43.987c-77.2-9.626-138.387-70.813-148.013-148.013H42.667v-42.666h43.987c9.626-77.2 70.813-138.387 148.013-148.013V42.667zm-42.666 362.666h42.666v-64h-42.666zm64-149.333c0 23.564-19.103 42.667-42.667 42.667S213.333 279.564 213.333 256s19.103-42.667 42.667-42.667s42.667 19.103 42.667 42.667m-128-21.333h-64v42.666h64zm106.666-128v64h-42.666v-64zm128 128h-64v42.666h64z" clip-rule="evenodd"></svg:path>`,
})
export class IxCrosshairsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
