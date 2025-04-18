import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingWrenchCrescentToolConstructionToolsWrenchSettingEditAdjustIcon],svg[streamline-interface-setting-wrench-crescent-tool-construction-tools-wrench-setting-edit-adjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.43 3.59a.76.76 0 0 0-.35-.51l-2 2a1 1 0 0 1-1.44 0l-.76-.68a1 1 0 0 1 0-1.4l2-2a.76.76 0 0 0-.48-.43A3.8 3.8 0 0 0 6.26 6L.8 11.41a1 1 0 0 0 0 1.43l.36.36a1 1 0 0 0 1.43 0l5.46-5.45a3.81 3.81 0 0 0 5.38-4.16Z"></svg:path>`,
})
export class StreamlineInterfaceSettingWrenchCrescentToolConstructionToolsWrenchSettingEditAdjustIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
