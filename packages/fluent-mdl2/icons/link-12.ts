import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Link12Icon],svg[fluent-mdl2-link-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1707 715q76 27 139 75t108 111t69 138t25 156q0 106-40 199t-110 162t-163 110t-199 41h-512q-106 0-199-40t-162-110t-110-163t-41-199t40-199t110-162t163-110t199-41h171q0 35-13 66t-37 54t-55 36t-66 14q-71 0-133 27t-108 73t-73 109t-27 133q0 71 27 133t73 108t108 73t133 27h512q70 0 132-27t109-73t73-108t27-133q0-92-46-168t-124-123zM171 683q0 91 46 167t124 124v189q-76-27-139-75T94 977T25 839T0 683q0-106 40-199t110-162t163-110t199-41h512q106 0 199 40t162 110t110 163t41 199t-40 199t-110 162t-163 110t-199 41H853q0-35 13-66t37-54t54-37t67-14q70 0 132-27t109-73t73-108t27-133q0-70-26-132t-73-109t-109-74t-133-27H512q-71 0-133 27t-108 73t-73 109t-27 133"></svg:path>`,
})
export class FluentMdl2Link12Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
