import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeDependabotIcon],svg[vscode-icons-file-type-dependabot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0366d6" d="m4 9.5l10.785-7.134a2.2 2.2 0 0 1 2.43 0L28 9.5a2.24 2.24 0 0 1 1 1.871v9.25a2.24 2.24 0 0 1-1 1.879l-10.785 7.134a2.2 2.2 0 0 1-2.43 0L4 22.5a2.24 2.24 0 0 1-1-1.871v-9.25A2.24 2.24 0 0 1 4 9.5"></svg:path><svg:path fill="#fff" d="M16.867 11.625v-.875h-1.445a.29.29 0 0 1-.289-.291V8.417a.29.29 0 0 1 .289-.292h2.022a.29.29 0 0 1 .289.292v3.208h4.334a.87.87 0 0 1 .866.875V16h.578a.29.29 0 0 1 .289.292v2.917a.29.29 0 0 1-.289.291h-.578v1.75a.87.87 0 0 1-.866.876H9.933a.87.87 0 0 1-.866-.876V19.5h-.578a.29.29 0 0 1-.289-.291v-2.917A.29.29 0 0 1 8.489 16h.578v-3.5a.87.87 0 0 1 .866-.875Z"></svg:path><svg:path fill="#0366d6" d="M18.352 18.521a.35.35 0 0 0 .5 0l1.817-1.834a.356.356 0 0 0 0-.5l-.373-.376a.346.346 0 0 0-.494 0l-1.2 1.209l-.475-.48a.35.35 0 0 0-.5 0l-.372.376a.354.354 0 0 0 0 .5Zm-5.777 0a.346.346 0 0 0 .494 0l1.817-1.834a.356.356 0 0 0 0-.5l-.373-.376a.346.346 0 0 0-.494 0l-1.2 1.209l-.475-.48a.35.35 0 0 0-.495 0l-.372.376a.356.356 0 0 0 0 .5Z"></svg:path>`,
})
export class VscodeIconsFileTypeDependabotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
