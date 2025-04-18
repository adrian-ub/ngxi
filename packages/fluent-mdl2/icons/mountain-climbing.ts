import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MountainClimbingIcon],svg[fluent-mdl2-mountain-climbing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1408 817l616 1231H24L768 561V0h512v384H896v177l320 640zM896 128v128h256V128zm93 905L832 719l-157 314l157 156zm443 887l-383-767l-217 218l-217-218l-383 767zm144 0h240l-408-817l-120 241z"></svg:path>`,
})
export class FluentMdl2MountainClimbingIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
