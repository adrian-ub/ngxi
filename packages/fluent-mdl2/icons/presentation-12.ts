import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Presentation12Icon],svg[fluent-mdl2-presentation-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1877 0v171h-170v853q0 35-13 66t-37 55t-55 36t-66 14h-512v512h341v170H512v-170h341v-512H341q-35 0-66-13t-54-37t-36-54t-14-67V171H0V0zm-341 1024V171H341v853zm-171-512v171H512V512z"></svg:path>`,
})
export class FluentMdl2Presentation12Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
