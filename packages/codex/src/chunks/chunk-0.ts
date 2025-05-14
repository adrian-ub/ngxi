import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexAddBackgroundIcon],svg[codex-add-background-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="M11 19c-1.864 0-2.796 0-3.53-.305a4 4 0 0 1-2.166-2.164C5 15.796 5 14.864 5 13v-1c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 5 9.19 5 12 5h1.5c1.396 0 2.093 0 2.661.172a4 4 0 0 1 2.667 2.667C19 8.407 19 9.104 19 10.5v0"></svg:path><svg:path d="M16 13v3m0 3v-3m3 0h-3m0 0h-3"></svg:path><svg:path stroke-linejoin="round" d="m6.5 17.5l11-11m1.492 4h.01m-8.01 8.5h.01M5 13l8-8"></svg:path></svg:g>`,
})
export class CodexAddBackgroundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexAddBorderIcon],svg[codex-add-border-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18.992 9.5h.01M14.5 5h.01"></svg:path><svg:path stroke-linecap="round" d="M14.625 5H15a4 4 0 0 1 4 4v.375"></svg:path><svg:path d="M9.375 5H9a4 4 0 0 0-4 4v.375"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9.373 5h.01M5 9.5h.01"></svg:path><svg:path d="M9.375 19H9a4 4 0 0 1-4-4v-.375"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9.373 19h.01M5 14.55h.01"></svg:path><svg:path stroke-linecap="round" d="M16 13v3m0 3v-3m3 0h-3m0 0h-3"></svg:path></svg:g>`,
})
export class CodexAddBorderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexAlignJustifyIcon],svg[codex-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7H6m12 10H6m12-5H6"></svg:path>`,
})
export class CodexAlignJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexAlignCenterIcon],svg[codex-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7H6m12 10H6m10-5H8"></svg:path>`,
})
export class CodexAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexAlignRightIcon],svg[codex-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 7H7m12 10H7m12-5h-8"></svg:path>`,
})
export class CodexAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexAlignLeftIcon],svg[codex-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7H5m12 10H5m8-5H5"></svg:path>`,
})
export class CodexAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexBoldIcon],svg[codex-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12V7.1a.1.1 0 0 1 .1-.1h1.3c1.1 0 3.6.1 3.6 2.5c0 0 0 2.5-3 2.5m-2 0v4.8c0 .11.09.2.2.2h3.3c1.5 0 2.5-1 2.5-2.5c0-2.795-4-2.5-4-2.5m-2 0h2"></svg:path>`,
})
export class CodexBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexBracketsIcon],svg[codex-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 8l-4 4l4 4m6-8l4 4l-4 4"></svg:path>`,
})
export class CodexBracketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexBracketsVerticalIcon],svg[codex-brackets-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M13.333 7.5L10 4.167L6.667 7.5m6.666 5L10 15.833L6.667 12.5"></svg:path>`,
})
export class CodexBracketsVerticalIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexChecklistIcon],svg[codex-checklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" d="m9.2 12l1.859 1.859a.2.2 0 0 0 .282 0L14.7 10.5"></svg:path><svg:rect width="14" height="14" x="5" y="5" rx="4"></svg:rect></svg:g>`,
})
export class CodexChecklistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexCheckIcon],svg[codex-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m7 12l3.488 3.837a.2.2 0 0 0 .296 0L17 9"></svg:path>`,
})
export class CodexCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexChevronLeftIcon],svg[codex-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m14.5 17.5l-4.859-4.859a.2.2 0 0 1 0-.282L14.5 7.5"></svg:path>`,
})
export class CodexChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexChevronDownIcon],svg[codex-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m7 10l4.859 4.859a.2.2 0 0 0 .282 0L17 10"></svg:path>`,
})
export class CodexChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexChevronRightIcon],svg[codex-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m9.583 17.5l4.858-4.859a.2.2 0 0 0 0-.282L9.583 7.5"></svg:path>`,
})
export class CodexChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexChevronUpIcon],svg[codex-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m7 15l4.859-4.859a.2.2 0 0 1 .282 0L17 15"></svg:path>`,
})
export class CodexChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexCollapseIcon],svg[codex-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9l3 3m0 0l-3 3m3-3H4m13-3l-3 3m0 0l3 3m-3-3h6"></svg:path>`,
})
export class CodexCollapseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexClipboardIcon],svg[codex-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9.429 7H7.714c-.454 0-.89.158-1.212.44A1.41 1.41 0 0 0 6 8.5v9c0 .398.18.78.502 1.06c.322.282.758.44 1.212.44h8.572c.454 0 .89-.158 1.212-.44A1.41 1.41 0 0 0 18 17.5v-9c0-.398-.18-.78-.502-1.06A1.85 1.85 0 0 0 16.286 7H14.57"></svg:path><svg:rect width="5.158" height="3.368" x="9.421" y="5" rx="1.5"></svg:rect></svg:g>`,
})
export class CodexClipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexCopyIcon],svg[codex-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17.25 8.5h-7a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 19 17.25v-7a1.75 1.75 0 0 0-1.75-1.75"></svg:path><svg:path d="M15.5 8.5V6.75A1.75 1.75 0 0 0 13.75 5h-7A1.75 1.75 0 0 0 5 6.75v7a1.75 1.75 0 0 0 1.75 1.75H8.5M12 12h3.5M12 15.5h3.5"></svg:path></svg:g>`,
})
export class CodexCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexColorIcon],svg[codex-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M5.243 11.408a3 3 0 0 1 .878-2.165l3.536-3.536a1 1 0 0 1 1.414 0l4.95 4.95a1 1 0 0 1 .292.75m-11.07 0a3 3 0 0 0 .878 2.078L8 15.364m-2.757-3.956h6.714m4.356 0a1 1 0 0 1-.292.663l-3.536 3.536a3 3 0 0 1-4.242 0L8 15.364m8.313-3.956h-4.356M8 15.364l3.957-3.956M20 17.462c0 .85-.672 1.538-1.5 1.538s-1.5-.689-1.5-1.538s.9-1.847 1.5-2.462c.6.615 1.5 1.612 1.5 2.462Z"></svg:path>`,
})
export class CodexColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexCrossIcon],svg[codex-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m8 8l4 4m0 0l4 4m-4-4l4-4m-4 4l-4 4"></svg:path>`,
})
export class CodexCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexCurlyBracketsIcon],svg[codex-curly-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17c-2 0-2-1.746-2-3.5L5.5 12L7 10.5C7 8.746 7 7 9 7m6 10c2 0 2-1.746 2-3.5l1.5-1.5l-1.5-1.5C17 8.746 17 7 15 7"></svg:path>`,
})
export class CodexCurlyBracketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexDelimiterIcon],svg[codex-delimiter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 12h4m4 0h4"></svg:path>`,
})
export class CodexDelimiterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexDirectionDownRightIcon],svg[codex-direction-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.883 9.167l3.334 3.333m0 0l-3.334 3.333m3.334-3.333H10.05a3.333 3.333 0 0 1-3.333-3.333"></svg:path>`,
})
export class CodexDirectionDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexDirectionLeftDownIcon],svg[codex-direction-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.917 14.917l-3.334 3.333m0 0L8.25 14.917m3.333 3.333v-8.167a3.333 3.333 0 0 1 3.334-3.333"></svg:path>`,
})
export class CodexDirectionLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexDirectionRightDownIcon],svg[codex-direction-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9.133 14.917l3.334 3.333m0 0l3.333-3.333m-3.333 3.333v-8.167A3.333 3.333 0 0 0 9.133 6.75"></svg:path>`,
})
export class CodexDirectionRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexDirectionUpRightIcon],svg[codex-direction-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.883 15.833l3.334-3.333m0 0l-3.334-3.333m3.334 3.333H10.05a3.333 3.333 0 0 0-3.333 3.333"></svg:path>`,
})
export class CodexDirectionUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexDotCircleIcon],svg[codex-dot-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"></svg:circle>`,
})
export class CodexDotCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexEtcHorisontalIcon],svg[codex-etc-horisontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M7.305 11.995v.01m4.7-.01v.01m4.7-.01v.01"></svg:path>`,
})
export class CodexEtcHorisontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexEtcVerticalIcon],svg[codex-etc-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M12.01 7.3H12m.01 4.7H12m.01 4.7H12"></svg:path>`,
})
export class CodexEtcVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexFileIcon],svg[codex-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.324 8.436L9.495 12.19c-.364.36-.564.852-.556 1.369a2 2 0 0 0 .6 1.387c.375.371.88.584 1.403.593a1.92 1.92 0 0 0 1.386-.55l3.828-3.754a3.75 3.75 0 0 0 1.112-2.738a4 4 0 0 0-1.198-2.775a4.1 4.1 0 0 0-2.808-1.185a3.85 3.85 0 0 0-2.77 1.098L6.661 9.39a5.63 5.63 0 0 0-1.667 4.107a6 6 0 0 0 1.798 4.161a6.15 6.15 0 0 0 4.21 1.778a5.77 5.77 0 0 0 4.157-1.646l3.829-3.756"></svg:path>`,
})
export class CodexFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexGiftIcon],svg[codex-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="12" height="6" x="6" y="13" rx="2"></svg:rect><svg:path d="M12 9v10m-7-8a2 2 0 0 1 2-2h10a2 2 0 1 1 0 4H7a2 2 0 0 1-2-2Zm11-2c0-1.105 0-3-2-3s-2 1.895-2 3c0-1.105 0-3-2-3S8 7.895 8 9"></svg:path></svg:g>`,
})
export class CodexGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexGlobeIcon],svg[codex-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M18 12a6 6 0 0 1-12 0m12 0a6 6 0 0 0-12 0m12 0H6m5.7-6s-2 1.638-2 6c0 4.9 2 6 2 6m.6-12s2 1.638 2 6c0 4.9-2 6-2 6"></svg:path>`,
})
export class CodexGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexH1Icon],svg[codex-h1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7v5m0 5v-5m0 0h6m0-5v5m0 5v-5m7 5v-6.786a.1.1 0 0 0-.164-.077L16 12.5"></svg:path>`,
})
export class CodexH1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexH2Icon],svg[codex-h2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7v5m0 5v-5m0 0h6m0-5v5m0 5v-5m4-1c0-1 3-1.5 3 1c0 1.977-2.932 2-2.999 4.898A.1.1 0 0 0 16.1 17h3.2"></svg:path>`,
})
export class CodexH2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexH3Icon],svg[codex-h3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7v5m0 5v-5m0 0h6m0-5v5m0 5v-5m4-1c0-.5.832-1 1.6-1s1.9.311 1.9 1.5a1.535 1.535 0 0 1-.952 1.482c-.01.004-.008.023.002.024c.261.04 1.45.3 1.45 1.794c0 1.2-.5 2.2-2.2 2.2c0 0-1.8 0-1.8-.7"></svg:path>`,
})
export class CodexH3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexH4Icon],svg[codex-h4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7v5m0 5v-5m0 0h6m0-5v5m0 5v-5m6-2l-2.717 4.851a.1.1 0 0 0 .087.149h4.83M19 17v-3.4"></svg:path>`,
})
export class CodexH4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexH5Icon],svg[codex-h5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7v5m0 5v-5m0 0h6m0-5v5m0 5v-5m4 3.9s.377 1.1 1.8 1.1c1.7 0 2.2-1.38 2.2-2.3c0-1.968-2.326-2.651-3.837-1.71c-.069.043-.163-.005-.163-.087V10.1a.1.1 0 0 1 .1-.1h3.7"></svg:path>`,
})
export class CodexH5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexH6Icon],svg[codex-h6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7v5m0 5v-5m0 0h6m0-5v5m0 5v-5m7.5-2c-3 .5-3.5 3.329-3.5 5m0 0v0a2 2 0 0 0 2 2h.325c1 0 1.994-.65 1.927-1.65C20.062 12.497 16 12.662 16 15Z"></svg:path>`,
})
export class CodexH6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexHeadingIcon],svg[codex-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7v5m0 5v-5m0 0h6m0-5v5m0 5v-5"></svg:path>`,
})
export class CodexHeadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexHeartIcon],svg[codex-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M6.6 7.5c-1.325 1.325-1.4 3.1 0 4.8s5.6 5.6 5.6 5.6s4.3-3.9 5.6-5.6s1.325-3.475 0-4.8a3.394 3.394 0 0 0-4.8 0l-.8.8l-.8-.8a3.394 3.394 0 0 0-4.8 0Z"></svg:path>`,
})
export class CodexHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexHiddenIcon],svg[codex-hidden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.778 6L18.5 17.722M10.687 10A2.342 2.342 0 1 0 14 13.314"></svg:path><svg:path d="M13 7c4 4.167 7 4.17 7 4.67s-1 1.5-1 1.5M8.242 8.81q-.973.628-1.84 1.615c-.698.794-1.047 1.191-1.047 1.945s.35 1.151 1.047 1.945Q8.793 17.037 12 17.037q1.665 0 3.111-.735"></svg:path></svg:g>`,
})
export class CodexHiddenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexHtmlIcon],svg[codex-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16.695 5a2 2 0 0 1 1.98 2.282l-1.249 8.784a2 2 0 0 1-1.365 1.621l-3.446 1.114a2 2 0 0 1-1.23 0l-3.446-1.114a2 2 0 0 1-1.365-1.621l-1.25-8.784A2 2 0 0 1 7.305 5z"></svg:path><svg:path d="M15 8.4H9l.429 3.394h5.142l-.214 1.485l-.214 1.485L12 15.4l-2.143-.636l-.086-.425"></svg:path></svg:g>`,
})
export class CodexHtmlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexInstagramIcon],svg[codex-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="14" height="14" x="5" y="5" rx="4"></svg:rect><svg:path stroke-linecap="round" d="M15.9 8.1v.01"></svg:path><svg:circle cx="12" cy="12" r="3"></svg:circle></svg:g>`,
})
export class CodexInstagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexItalicIcon],svg[codex-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10c-.918 2.734-2.34 7-2.34 7m3.21-10h-.01"></svg:path>`,
})
export class CodexItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexLinkIcon],svg[codex-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="m7.7 12.6l-.021.02a2.795 2.795 0 0 0-.044 4.005v0a2.795 2.795 0 0 0 3.936.006l1.455-1.438a3 3 0 0 0 .34-3.866l-.146-.207"></svg:path><svg:path d="m16.22 11.12l.136-.14c.933-.953.992-2.46.135-3.483v0a2.597 2.597 0 0 0-3.664-.32L11.39 8.386a3 3 0 0 0-.301 4.3l.031.034"></svg:path></svg:g>`,
})
export class CodexLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexLinkedinIcon],svg[codex-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="14" height="14" x="5" y="5" rx="4"></svg:rect><svg:path stroke-linecap="round" d="M9 11.4v4m0-6.7v.01m3 2.69v.6m0 3.4V12m0 0c2-.5 3-.639 3 .5v2.9"></svg:path></svg:g>`,
})
export class CodexLinkedinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexListBulletedIcon],svg[codex-list-bulleted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7h10M9 12h10M9 17h10M5 17h-.01M5 12h-.01M5 7h-.01"></svg:path>`,
})
export class CodexListBulletedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexListNumberedIcon],svg[codex-list-numbered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7h7m-7 5h7m-7 5h7M7.8 14V7.214a.1.1 0 0 0-.164-.077L4.8 9.5"></svg:path>`,
})
export class CodexListNumberedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexLoaderIcon],svg[codex-loader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 6.99998C9.1747 6.99987 6.99997 9.24998 7 12C7.00003 14.55 9.02119 17 12 17C14.7712 17 17 14.75 17 12"><svg:animatetransform attributeName="transform" attributeType="XML" dur="560ms" from="0,12,12" repeatCount="indefinite" to="360,12,12" type="rotate"></svg:animatetransform></svg:path>`,
})
export class CodexLoaderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexMarkerIcon],svg[codex-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="m11.354 9.318l1.414-1.414a2 2 0 1 1 2.828 2.828l-1.414 1.414m-2.828-2.828l-3.387 3.386a4 4 0 0 0-1.094 2.044l-.175.877a1 1 0 0 0 1.177 1.177l.877-.175a4 4 0 0 0 2.044-1.094l3.386-3.387m-2.828-2.828l2.828 2.828"></svg:path><svg:path stroke-linecap="round" d="M15 17h4"></svg:path></svg:g>`,
})
export class CodexMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexMenuIcon],svg[codex-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.41 7.3H9.4m5.2 0h-.01M9.31 12H9.3m5.3 0h-.01m-5.18 4.7H9.4m5.2 0h-.01"></svg:path>`,
})
export class CodexMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexMenuSmallIcon],svg[codex-menu-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.41 9.66H9.4m5.2 0h-.01m-5.28 4.7H9.3m5.3 0h-.01"></svg:path>`,
})
export class CodexMenuSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexPictureIcon],svg[codex-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="14" height="14" x="5" y="5" rx="4"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="m5.14 15.32l3.55-3.754A1.75 1.75 0 0 1 9.969 11c.479 0 .938.204 1.277.566L15.387 16m-1.806-1.934l1.432-1.533a1.75 1.75 0 0 1 1.277-.566c.48 0 .939.204 1.277.566l1.274 1.43m-5.063-4.63h.009"></svg:path></svg:g>`,
})
export class CodexPictureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexPlayIcon],svg[codex-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M10 10.56v2.88a1.3 1.3 0 0 0 2.021 1.081l2.16-1.44a1.3 1.3 0 0 0-.001-2.163L12.021 9.48A1.3 1.3 0 0 0 10 10.561Z"></svg:path><svg:rect width="14" height="14" x="5" y="5" rx="4"></svg:rect></svg:g>`,
})
export class CodexPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexPlusIcon],svg[codex-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7v5m0 5v-5m5 0h-5m0 0H7"></svg:path>`,
})
export class CodexPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexQuestionIcon],svg[codex-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="14" height="14" x="5" y="5" rx="4"></svg:rect><svg:path stroke-linecap="round" d="M12 15.52v-.01m-1.998-5.533C10.157 9.019 11 8.5 12 8.5s1.686.672 1.87 1.207c.183.535.144 1.344-.363 1.809s-.773.316-1.229.8a1.8 1.8 0 0 0-.278.432"></svg:path></svg:g>`,
})
export class CodexQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexQuoteIcon],svg[codex-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.818H9c-.198 0-.391-.053-.556-.153a.93.93 0 0 1-.368-.408a.83.83 0 0 1-.057-.525a.9.9 0 0 1 .274-.466c.14-.127.318-.213.512-.249c.194-.035.395-.017.578.052a1 1 0 0 1 .448.335c.11.15.169.325.169.505v2.273c0 .482-.21.944-.586 1.285A2.1 2.1 0 0 1 8 14m8-3.182h-1c-.198 0-.391-.053-.556-.153a.93.93 0 0 1-.368-.408a.83.83 0 0 1-.057-.525a.9.9 0 0 1 .274-.466c.14-.127.318-.213.512-.249c.194-.035.395-.017.578.052a1 1 0 0 1 .449.335a.85.85 0 0 1 .168.505v2.273c0 .482-.21.944-.586 1.285A2.1 2.1 0 0 1 14 14"></svg:path>`,
})
export class CodexQuoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexRedoIcon],svg[codex-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.667 13.667L18 10.333L14.667 7M18 10.333H8.833a3.333 3.333 0 0 0 0 6.667h.834"></svg:path>`,
})
export class CodexRedoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexRemoveBackgroundIcon],svg[codex-remove-background-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path stroke-linejoin="round" d="M11 19c-1.864 0-2.796 0-3.53-.305a4 4 0 0 1-2.166-2.164C5 15.796 5 14.864 5 13v-1c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 5 9.19 5 12 5h1.5c1.396 0 2.093 0 2.661.172a4 4 0 0 1 2.667 2.667C19 8.407 19 9.104 19 10.5v0"></svg:path><svg:path d="M19.119 14.879L16.997 17m-2.121 2.121L16.997 17m2.122 2.121L16.997 17m0 0l-2.121-2.121"></svg:path><svg:path stroke-linejoin="round" d="m6.5 17.5l11-11m1.492 4h.01m-8.01 8.5h.01M5 13l8-8"></svg:path></svg:g>`,
})
export class CodexRemoveBackgroundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexReplaceIcon],svg[codex-replace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.5 17.5L5 11m0 0v4.5M5 11h4.5m3-4.5L19 13m0 0V8.5m0 4.5h-4.5"></svg:path>`,
})
export class CodexReplaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexSaveIcon],svg[codex-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="m15.078 5.626l.537-.843l-.537.843c.348.222.661.528 1.493 1.36l.707-.708l-.707.707l.954.954c.31.31.425.426.524.543a4 4 0 0 1 .938 2.264c.012.153.013.316.013.754v.5c0 1.417 0 2.419-.065 3.203c-.063.772-.182 1.243-.371 1.613a4 4 0 0 1-1.748 1.748c-.37.189-.841.308-1.613.371C14.419 19 13.417 19 12 19s-2.419 0-3.203-.065c-.771-.063-1.243-.182-1.613-.371a4 4 0 0 1-1.748-1.748c-.189-.37-.308-.841-.371-1.613C5 14.419 5 13.417 5 12v-.222c0-1.31 0-2.238.056-2.965c.054-.716.157-1.156.319-1.504a4 4 0 0 1 1.934-1.934c.348-.162.788-.265 1.504-.32C9.54 5.002 10.467 5 11.778 5c1.176 0 1.614.006 2.017.095c.455.1.89.28 1.283.531Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2-9.5V7a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5.2"></svg:path></svg:g>`,
})
export class CodexSaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexSearchIcon],svg[codex-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="10.5" cy="10.5" r="5.5"></svg:circle><svg:path stroke-linecap="round" d="M15.414 15L19 18.586"></svg:path></svg:g>`,
})
export class CodexSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexStarIcon],svg[codex-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M11.82 6.044a.2.2 0 0 1 .36 0l1.798 3.741a.2.2 0 0 0 .153.112l4.114.553a.2.2 0 0 1 .111.343l-3.003 2.865a.2.2 0 0 0-.058.18l.745 4.084a.2.2 0 0 1-.292.212L12 16.112l-3.748 2.022a.2.2 0 0 1-.292-.212l.745-4.083a.2.2 0 0 0-.058-.18l-3.003-2.866a.2.2 0 0 1 .111-.343l4.114-.553a.2.2 0 0 0 .153-.112z"></svg:path>`,
})
export class CodexStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexStretchIcon],svg[codex-stretch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 9l3 3l-3 3m-3-3h6M7 9l-3 3l3 3m-3-3h6"></svg:path>`,
})
export class CodexStretchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexStrikethroughIcon],svg[codex-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 8.5c-1-1.5-3.565-1.835-4.747-.703A2.4 2.4 0 0 0 9 9.54c0 .654.27 1.28.753 1.742c1.23 1.179 3.264.265 4.494 1.443c.482.463.753 1.09.753 1.742c0 .654-.27 1.28-.753 1.743C12.866 17.532 10 17.5 9 16m-3-4h12"></svg:path>`,
})
export class CodexStrikethroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexTableIcon],svg[codex-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M10 5v13.5M5 10h14"></svg:path><svg:rect width="14" height="14" x="5" y="5" rx="4"></svg:rect></svg:g>`,
})
export class CodexTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexTableWithHeadingsIcon],svg[codex-table-with-headings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M5 10h14"></svg:path><svg:rect width="14" height="14" x="5" y="5" rx="4"></svg:rect></svg:g>`,
})
export class CodexTableWithHeadingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexTableWithoutHeadingsIcon],svg[codex-table-without-headings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M10 5v13.5M14 5v13.5M5 10h14M5 14h14"></svg:path><svg:rect width="14" height="14" x="5" y="5" rx="4"></svg:rect></svg:g>`,
})
export class CodexTableWithoutHeadingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexTextIcon],svg[codex-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2c0-.11.09-.2.2-.2H12m4 2V7.2a.2.2 0 0 0-.2-.2H12m0 0v10m0 0h-2m2 0h2"></svg:path>`,
})
export class CodexTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexTranslateIcon],svg[codex-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M7 17c1-2.5 5-5 6-8"></svg:path><svg:path d="M8.5 11s1.5 3 4 4M6 7.7h10m-5 0v-2M14.5 18l.714-2m0 0l1.702-4.765a.355.355 0 0 1 .668 0L19.286 16m-4.072 0h4.072M20 18l-.714-2"></svg:path></svg:g>`,
})
export class CodexTranslateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexTrashIcon],svg[codex-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.133 7.723q.435.06.867.128m-.867-.128l-.906 9.68c-.037.434-.254.84-.607 1.136a2.02 2.02 0 0 1-1.297.461H8.677c-.48 0-.944-.164-1.297-.46a1.67 1.67 0 0 1-.607-1.138l-.906-9.679m12.266 0a45 45 0 0 0-2.951-.305m-9.315.305q-.435.06-.867.127m.867-.127a45 45 0 0 1 2.951-.305m6.364 0a45.5 45.5 0 0 0-6.364 0m6.364 0c0-2.114-1.455-3.07-3.182-3.07S8.818 5.44 8.818 7.418M10.5 15.5L10 11m4 0l-.5 4.5"></svg:path>`,
})
export class CodexTrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexTwitterIcon],svg[codex-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M16.79 7.877C17.5 8 18.5 8 18.5 8s-1 1.5-1 2c1 8.5-6 10.5-12 6.5c1.5.171 2.546.016 3.752-.898C7.995 15.58 5.365 13.603 5 12.5c1.5.5 3-.5 3-.5c-1.479-.955-3.07-2.759-2.025-4.492a8.25 8.25 0 0 0 5.92 2.902c-.675-2.802 3.027-4.457 4.894-2.533Z"></svg:path>`,
})
export class CodexTwitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexUnderlineIcon],svg[codex-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7.5v4a3 3 0 0 0 6 0v-4M7.714 18h8.572"></svg:path>`,
})
export class CodexUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexUndoIcon],svg[codex-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.333 13.667L6 10.333L9.333 7M6 10.333h9.167a3.333 3.333 0 0 1 0 6.667h-.834"></svg:path>`,
})
export class CodexUndoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexUnlinkIcon],svg[codex-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.78 11.5s.273-.304.77-.828c.894-.943.92-2.424.028-3.37v0a2.404 2.404 0 0 0-3.45-.051L11.88 8.5m-3.635 3.888s-.273.304-.77.828c-.894.944-.92 2.425-.028 3.37v0c.93.987 2.49 1.01 3.449.052l1.25-1.25m5.634-.285l-1.183-.16a1 1 0 0 0-1.134.954l-.043 1.185m-9.03-8.05l1.194.035a1 1 0 0 0 1.027-1.07l-.084-1.183m3.587 5.386l-.414-.414"></svg:path>`,
})
export class CodexUnlinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexUserIcon],svg[codex-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M12 10c.714 0 1.239-.434 1.54-.885c.304-.457.46-1.03.46-1.615c0-.584-.156-1.158-.46-1.615C13.238 5.435 12.714 5 12 5s-1.239.434-1.54.885c-.304.457-.46 1.03-.46 1.615c0 .584.156 1.158.46 1.615c.301.45.825.885 1.54.885Z"></svg:path><svg:ellipse cx="12" cy="16" rx="3" ry="5" transform="rotate(-90 12 16)"></svg:ellipse></svg:g>`,
})
export class CodexUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexUsersGroupIcon],svg[codex-users-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M10 10c.714 0 1.239-.434 1.54-.885c.304-.457.46-1.03.46-1.615c0-.584-.156-1.158-.46-1.615C11.238 5.435 10.714 5 10 5s-1.239.434-1.54.885C8.157 6.342 8 6.915 8 7.5c0 .584.156 1.158.46 1.615c.301.45.825.885 1.54.885Z"></svg:path><svg:ellipse cx="10" cy="16" rx="3" ry="5" transform="rotate(-90 10 16)"></svg:ellipse><svg:path stroke-linecap="round" d="M15.556 10.222a1.778 1.778 0 1 0 0-3.555M17.5 13c3.5 1.5 3 5 .5 5.5"></svg:path></svg:g>`,
})
export class CodexUsersGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[codexWarningIcon],svg[codex-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="14" height="14" x="5" y="5" rx="4"></svg:rect><svg:path stroke-linecap="round" d="M12 9v3m0 3.02v-.01"></svg:path></svg:g>`,
})
export class CodexWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
