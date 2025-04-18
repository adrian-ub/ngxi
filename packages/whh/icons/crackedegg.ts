import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCrackedeggIcon],svg[whh-crackedegg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 512L512 640L320 512L192 640L11 519q11-69 31.5-139t54-139t74-122T267 33T384 0q56 0 107 27t90 72.5T652.5 203t55 123T744 453.5T764 574zM192 704l128-128l192 128l128-128l128 64q0 104-51.5 192.5t-140 140T384 1024t-192.5-51.5t-140-140T0 640q0-25 3-62z"></svg:path>`,
})
export class WhhCrackedeggIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
