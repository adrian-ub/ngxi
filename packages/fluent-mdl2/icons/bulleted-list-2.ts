import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BulletedList2Icon],svg[fluent-mdl2-bulleted-list-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 384v128H512V384zM512 896h1536v128H512zm0 512h1536v128H512zM0 256h384v384H0zm128 256h128V384H128zM0 768h384v384H0zm128 256h128V896H128zM0 1280h384v384H0zm128 256h128v-128H128z"></svg:path>`,
})
export class FluentMdl2BulletedList2Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
