import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMibewIcon],svg[whh-mibew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 320V160L896 0l128 128v480zm64 512H512V512l160-128l288 256zM384 416V160l128-96l128 128v128L480 448zm64 384l-128 96L0 576l320-96l128 32zM0 64l320 96v256L0 512z"></svg:path>`,
})
export class WhhMibewIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
