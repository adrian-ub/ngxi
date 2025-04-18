import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PresentationIcon],svg[fluent-mdl2-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h1920v128h-128v896q0 26-10 49t-27 41t-41 28t-50 10h-640v640h512v128H384v-128h512v-640H256q-26 0-49-10t-41-27t-28-41t-10-50V128H0zm1664 1024V128H256v896zm-256-512v128H512V512z"></svg:path>`,
})
export class FluentMdl2PresentationIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
