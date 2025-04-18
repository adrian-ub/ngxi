import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Lock12Icon],svg[fluent-mdl2-lock-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 853h171v1195H341V853h171V512q0-106 40-199t109-163T824 40t200-40t199 40t163 109t110 163t40 200zM683 512v341h682V512q0-70-27-132t-73-109t-108-73t-133-27q-71 0-133 27t-108 73t-73 108t-27 133m853 1365v-853H512v853z"></svg:path>`,
})
export class FluentMdl2Lock12Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
