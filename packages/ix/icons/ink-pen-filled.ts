import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixInkPenFilledIcon],svg[ix-ink-pen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m362.667 64l-35.135 35.135l85.333 85.333L448 149.333zM160 160l148.67-49.557l92.887 92.887L352 352L86.916 440.362l163.569-163.748c1.759.469 3.608.719 5.515.719c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.333-21.333-21.333s-21.333 9.551-21.333 21.333c0 1.915.252 3.771.725 5.537L71.446 425.661z" clip-rule="evenodd"></svg:path>`,
})
export class IxInkPenFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
