import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhForkIcon],svg[whh-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M990.5 988.5q-25.5 25.5-58.5 32t-70.5-9.5t-72.5-54L499 617q-64 30-136.5 17.5T237 569L16 347Q0 332 0 309.5T16 271t38.5-16T92 271l234 234q38-9 73-30L144 220q-16-16-16-38.5t16-38.5t38-16t38 16l256 255q21-34 30-72L272 92q-16-16-16-38.5t15.5-38t38-15.5T348 16l223 220q52 53 64.5 126T618 499l340 288q38 34 54.5 72t10 71t-32 58.5"></svg:path>`,
})
export class WhhForkIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
