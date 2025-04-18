import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TaskGroupIcon],svg[fluent-mdl2-task-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 256v896H0V256zm-128 128H128v640h1792zm-128 256H768V512h1024zm-384 256H768V768h640zm-768 0H256V512h384zM512 640H384v128h128zm-256 640h1536v128H256zm256 256h1024v128H512z"></svg:path>`,
})
export class FluentMdl2TaskGroupIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
