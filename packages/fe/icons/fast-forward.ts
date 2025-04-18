import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feFastForwardIcon],svg[fe-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12c0 .228-.106.45-.293.57l-6.86 4.348a.5.5 0 0 1-.277.082c-.315 0-.57-.291-.57-.651v-4.35c0 .23-.106.451-.293.57l-6.86 4.35A.5.5 0 0 1 3.57 17c-.315 0-.57-.291-.57-.651V7.651c0-.11.025-.22.072-.316c.152-.314.5-.428.775-.253l6.86 4.349c.093.059.17.147.221.253c.049.1.072.209.072.315V7.651c0-.11.025-.22.072-.316c.152-.314.5-.428.775-.253l6.86 4.349c.093.059.17.147.221.253c.049.1.072.209.072.315V8a1 1 0 0 1 2 0v8c0 .552-.5 1-1 1s-1-.448-1-1z"></svg:path>`,
})
export class FeFastForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
