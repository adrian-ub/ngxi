import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2UndoIcon],svg[fluent-mdl2-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1088 4q96 0 185 25t167 71t142 110t110 142t71 167t25 185q0 137-52 264t-150 225l-837 836l-90-90l836-837q79-79 122-182t43-216q0-117-45-221t-124-182t-182-123t-221-46q-108 0-190 32t-153 86t-134 122t-136 140h421v128H256V0h128v421q55-56 105-108t101-99t103-85t112-66t129-43t154-16"></svg:path>`,
})
export class FluentMdl2UndoIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
