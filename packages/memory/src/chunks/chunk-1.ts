import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryMenuLeftRightIcon],svg[memory-menu-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4h2v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2zm-2 0v14H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-2h1V9h1V8h1V7h1V6h1V5h1V4zm4 4v6h1v-1h1v-1h1v-2h-1V9h-1V8zM8 8H7v1H6v1H5v2h1v1h1v1h1z"></svg:path>`,
})
export class MemoryMenuLeftRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMenuRightIcon],svg[memory-menu-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18V4h2v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1H9v1zm2-4h1v-1h1v-1h1v-2h-1V9h-1V8H9z"></svg:path>`,
})
export class MemoryMenuRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMenuRightFillIcon],svg[memory-menu-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5H8v12h1v-1h1v-1h1v-1h1v-1h1v-1h1v-2h-1V9h-1V8h-1V7h-1V6H9"></svg:path>`,
})
export class MemoryMenuRightFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMenuTopLeftIcon],svg[memory-menu-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H7V7zm-4 2H9v5h1v-1h1v-1h1v-1h1v-1h1z"></svg:path>`,
})
export class MemoryMenuTopLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMenuTopRightIcon],svg[memory-menu-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18h-2v-1h-1v-1h-1v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5V9H4V7h11zm-2-4V9H8v1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class MemoryMenuTopRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMenuUpIcon],svg[memory-menu-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14H4v-2h1v-1h1v-1h1V9h1V8h1V7h1V6h2v1h1v1h1v1h1v1h1v1h1v1h1zm-4-2v-1h-1v-1h-1V9h-2v1H9v1H8v1z"></svg:path>`,
})
export class MemoryMenuUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMenuUpDownIcon],svg[memory-menu-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10V8h1V7h1V6h1V5h1V4h1V3h1V2h2v1h1v1h1v1h1v1h1v1h1v1h1v2zm0 2h14v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4zm4-4h6V7h-1V6h-1V5h-2v1H9v1H8zm0 6v1h1v1h1v1h2v-1h1v-1h1v-1z"></svg:path>`,
})
export class MemoryMenuUpDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMenuUpFillIcon],svg[memory-menu-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13v1h12v-1h-1v-1h-1v-1h-1v-1h-1V9h-1V8h-2v1H9v1H8v1H7v1H6v1"></svg:path>`,
})
export class MemoryMenuUpFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMessageIcon],svg[memory-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h18v1h1v14h-1v1H5v1H4v1H3v1H2v1H1V2h1zm1 2v13h1v-1h15V3z"></svg:path>`,
})
export class MemoryMessageIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMessageProcessingIcon],svg[memory-message-processing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h18v1h1v14h-1v1H5v1H4v1H3v1H2v1H1V2h1zm2 14h15V3H3v13h1zm2-7h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class MemoryMessageProcessingIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMessageTextIcon],svg[memory-message-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h18v1h1v14h-1v1H5v1H4v1H3v1H2v1H1V2h1zm1 2v13h1v-1h15V3zm2 3h12v2H5zm0 4h9v2H5z"></svg:path>`,
})
export class MemoryMessageTextIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMessageUserIcon],svg[memory-message-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9h-2V8H9V6h1V5h2v1h1v2h-1m3 5H7v-2h1v-1h6v1h1M3 16h1v-1h15V3H3M2 21H1V2h1V1h18v1h1v14h-1v1H5v1H4v1H3v1H2Z"></svg:path>`,
})
export class MemoryMessageUserIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMicrophoneIcon],svg[memory-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21v-3H8v-1H6v-1H5v-1H4v-2H3V9h2v3h1v2h1v1h2v1h4v-1h2v-1h1v-2h1V9h2v4h-1v2h-1v1h-1v1h-2v1h-2v3zm-2-8v-1H7V3h1V2h1V1h4v1h1v1h1v9h-1v1h-1v1H9v-1zm1-2h1v1h2v-1h1V4h-1V3h-2v1H9z"></svg:path>`,
})
export class MemoryMicrophoneIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMinusIcon],svg[memory-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12H5v-2h12Z"></svg:path>`,
})
export class MemoryMinusIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMinusBoxIcon],svg[memory-minus-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12H6v-2h10Zm2 8H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1Zm-1-2v-1h1V5h-1V4H5v1H4v12h1v1Z"></svg:path>`,
})
export class MemoryMinusBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMinusBoxFillIcon],svg[memory-minus-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1Zm-2-8v-2H6v2Z"></svg:path>`,
})
export class MemoryMinusBoxFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMinusCircleIcon],svg[memory-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8v1h2v1h1v1h1v1h1v2zm-4-1V5h-1V4h-2V3H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6zm-1 4v2H6v-2z"></svg:path>`,
})
export class MemoryMinusCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMinusCircleFillIcon],svg[memory-minus-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2m1-8v-2H6v2Z"></svg:path>`,
})
export class MemoryMinusCircleFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMonitorIcon],svg[memory-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h18v1h1v12h-1v1h-7v2h2v2H7v-2h2v-2H2v-1H1V3h1zm1 2v10h16V4z"></svg:path>`,
})
export class MemoryMonitorIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMonitorImageIcon],svg[memory-monitor-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6h2v1h1v2h-1v1h-2V9h-1V7h1zM2 2h18v1h1v12h-1v1h-7v2h2v2H7v-2h2v-2H2v-1H1V3h1zm1 2v5h1V8h1V7h1V6h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h4V4zm7 7H9v-1H8V9H6v1H5v1H4v1H3v2h9v-1h-1v-1h-1z"></svg:path>`,
})
export class MemoryMonitorImageIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMultiplyIcon],svg[memory-multiply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16h-2v-1h-1v-1h-1v-1h-2v1H9v1H8v1H6v-2h1v-1h1v-1h1v-2H8V9H7V8H6V6h2v1h1v1h1v1h2V8h1V7h1V6h2v2h-1v1h-1v1h-1v2h1v1h1v1h1Z"></svg:path>`,
})
export class MemoryMultiplyIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryMusicNoteIcon],svg[memory-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h7v5h-5v11h-1v1h-1v1H7v-1H6v-1H5v-4h1v-1h1v-1h4zm0 13h-1v-1H8v1H7v2h1v1h2v-1h1z"></svg:path>`,
})
export class MemoryMusicNoteIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryNecklaceIcon],svg[memory-necklace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17h1v-1h2v1h1v2h-1v1h-2v-1H9zm1-2v-1H9v-1h-.91v-1H7v-2H6V8H5V6H4V3h1V2h12v1h1v3h-1v2h-1v2h-1v2h-1v1h-1v1h-1v1zM7 5v2h1v2h1v2h1.09v1H12v-1h1V9h1V7h1V5h1V4H6v1z"></svg:path>`,
})
export class MemoryNecklaceIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryNoteIcon],svg[memory-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3v1h1v1h1v1h1v1h1v1h1v1h1v9h-1v1H2v-1H1V4h1V3zm0 3h-1v4h4V9h-1V8h-1V7h-1zM3 5v12h16v-5h-6v-1h-1V5z"></svg:path>`,
})
export class MemoryNoteIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryNoteNailedIcon],svg[memory-note-nailed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12H8v-2h6m0 6H8v-2h5v1h1m5 6h-4v-1h-1v1h-4v-1H8v1H6v-1H5v-2H4v-2H3v-5h1V6H3V4h7V3H9V2h4v1h-1v1h7v8h-1v3h1m-6 4v-1h4v-2h-1v-5h1V6h-5v2h-1v1h-1V6H6v6H5v3h1v2h1v1h4v1Z"></svg:path>`,
})
export class MemoryNoteNailedIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryNotebookIcon],svg[memory-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2v18h-1v1H4v-1H3v-2H1v-2h2v-4H1v-2h2V6H1V4h2V2h1V1h14v1zm-5 7h-1V8h-1v1h-1v1h-1V3H7v16h10V3h-2v7h-1zM3 4v2h2V4zm2 6H3v2h2zm0 6H3v2h2z"></svg:path>`,
})
export class MemoryNotebookIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryNotificationIcon],svg[memory-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20v1h-2v-1H8v-2h6v2zM2 15h1v-1h1V6h1V4h1V3h2V2h2V1h2v1h2v1h2v1h1v2h1v8h1v1h1v2H2zm4 0h10V7h-1V5h-2V4H9v1H7v2H6z"></svg:path>`,
})
export class MemoryNotificationIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryNumberIcon],svg[memory-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14H4v-1H3v-1H2V4h1V3h1V2h5v1h1v1h1v8h-1v1H9m10 7h-6v-2h2v-6h-2v-2h1V9h1V8h2v10h2M8 12v-1h1V5H8V4H5v1H4v6h1v1Z"></svg:path>`,
})
export class MemoryNumberIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryOctagonIcon],svg[memory-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h1V5h1V4h1V3h1V2h1V1h8v1h1v1h1v1h1v1h1v1h1v1h1v8h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1V7h1zm13 11h1v-1h1v-1h1v-1h1V8h-1V7h-1V6h-1V5h-1V4h-1V3H8v1H7v1H6v1H5v1H4v1H3v6h1v1h1v1h1v1h1v1h1v1h6v-1h1z"></svg:path>`,
})
export class MemoryOctagonIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryPaperclipIcon],svg[memory-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21H8v-1H7v-1H6V3h1V2h1V1h4v1h1v1h1v14h-1v1h-3v-1H9V5h2v11h1V4h-1V3H9v1H8v14h1v1h5v-1h1V5h2v14h-1v1h-1Z"></svg:path>`,
})
export class MemoryPaperclipIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryPauseIcon],svg[memory-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4h3v14H6zm7 14V4h3v14z"></svg:path>`,
})
export class MemoryPauseIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryPeaceIcon],svg[memory-peace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15h1v-1h1v-1h1v-1h1v-1h1v-1h1V3H8v1H6v1H5v1H4v2H3v6h1m13 1h1v-1h1V8h-1V6h-1V5h-1V4h-2V3h-2v7h1v1h1v1h1v1h1v1h1m-2 7H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2m-5-1v-6H9v1H8v1H7v1H6v2h2v1m6 0v-1h2v-2h-1v-1h-1v-1h-1v-1h-1v6Z"></svg:path>`,
})
export class MemoryPeaceIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryPencilIcon],svg[memory-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2h1v1h1v1h1v1h1v1h-1v1h-1v1h-1V7h-1V6h-1V5h-1V4h1V3h1m-4 3h2v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H2v-4h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1"></svg:path>`,
})
export class MemoryPencilIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryPickaxeIcon],svg[memory-pickaxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h3v1h2v1h2v1h2v2h1v2h1v2h1v3h-2v-2h-1v-1h-1v-1h-2V9h-1V8h-1V6h-1V5h-1V4H8m3 5h1v1h1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v1H2v-1H1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1"></svg:path>`,
})
export class MemoryPickaxeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryPictogrammersIcon],svg[memory-pictogrammers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0h14v1h1v1h1v18h-1v1h-1v1H4v-1H3v-1H2V2h1V1h1zm0 18v1h1v1h12v-1h1v-1zM17 2H5v1H4v12h1v1h12v-1h1V3h-1zm-4 2v1h1v1h1v2h-1v1h-1v1h-3v4H8V4zm-1 2h-2v2h2z"></svg:path>`,
})
export class MemoryPictogrammersIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryPikeIcon],svg[memory-pike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19H4v-1H3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9H9V8h1V7h1v1h2V7h-1V5h2V4h2V3h3v3h-1v2h-1v2h-2V9h-1v2h1v1h-1v1h-1v-1h-2v1h-1v1H9v1H8v1H7v1H6v1H5Z"></svg:path>`,
})
export class MemoryPikeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryPlayIcon],svg[memory-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H7V4h2v1zm2 5h-1V9h-1V8H9v6h1v-1h1v-1h1z"></svg:path>`,
})
export class MemoryPlayIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryPlusIcon],svg[memory-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17h-2v-5H5v-2h5V5h2v5h5v2h-5Z"></svg:path>`,
})
export class MemoryPlusIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryPlusBoxIcon],svg[memory-plus-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16h-2v-4H6v-2h4V6h2v4h4v2h-4Zm6 4H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1Zm-1-2v-1h1V5h-1V4H5v1H4v12h1v1Z"></svg:path>`,
})
export class MemoryPlusBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryPlusBoxFillIcon],svg[memory-plus-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20H4v-1H3v-1H2V4h1V3h1V2h14v1h1v1h1v14h-1v1h-1Zm-6-4v-4h4v-2h-4V6h-2v4H6v2h4v4Z"></svg:path>`,
})
export class MemoryPlusBoxFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryPlusCircleIcon],svg[memory-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8v1h2v1h1v1h1v1h1v2zm-4-1V5h-1V4h-2V3H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6zm-7 0h2v4h4v2h-4v4h-2v-4H6v-2h4z"></svg:path>`,
})
export class MemoryPlusCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryPlusCircleFillIcon],svg[memory-plus-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 21H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2Zm-3-5v-4h4v-2h-4V6h-2v4H6v2h4v4Z"></svg:path>`,
})
export class MemoryPlusCircleFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryPollIcon],svg[memory-poll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18H4V8h3m5 10H9V4h3m5 14h-3v-7h3Z"></svg:path>`,
})
export class MemoryPollIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryPoundIcon],svg[memory-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19h-2v-4H8v4H6v-4H3v-2h4V9H4V7h4V3h2v4h4V3h2v4h3v2h-4v4h3v2h-4m-1-2V9H9v4Z"></svg:path>`,
})
export class MemoryPoundIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryQuarterstaffIcon],svg[memory-quarterstaff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20H3v-1H2v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5v1H4Z"></svg:path>`,
})
export class MemoryQuarterstaffIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryRadioboxIcon],svg[memory-radiobox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h6v1h2v1h1v1h1v1h1v2h1v6h-1v2h-1v1h-1v1h-1v1h-2v1H8v-1H6v-1H5v-1H4v-1H3v-2H2V8h1V6h1V5h1V4h1V3h2zm1 2v1H7v1H6v1H5v2H4v4h1v2h1v1h1v1h2v1h4v-1h2v-1h1v-1h1v-2h1V9h-1V7h-1V6h-1V5h-2V4z"></svg:path>`,
})
export class MemoryRadioboxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryRadioboxMarkedIcon],svg[memory-radiobox-marked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h6v1h2v1h1v1h1v1h1v2h1v6h-1v2h-1v1h-1v1h-1v1h-2v1H8v-1H6v-1H5v-1H4v-1H3v-2H2V8h1V6h1V5h1V4h1V3h2zm1 2v1H7v1H6v1H5v2H4v4h1v2h1v1h1v1h2v1h4v-1h2v-1h1v-1h1v-2h1V9h-1V7h-1V6h-1V5h-2V4zm4 3v1h1v1h1v4h-1v1h-1v1H9v-1H8v-1H7V9h1V8h1V7z"></svg:path>`,
})
export class MemoryRadioboxMarkedIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryRangeIcon],svg[memory-range-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8H5V7H4V6H3V4h6v2H8v1H7m-4 5H1v-2h2m9 2H9v-2h3m9 2h-3v-2h3M7 13H5v-1H4v-2h1V9h2v1h1v2H7m9 1h-2v-1h-1v-2h1V9h2v1h1v2h-1m2 6h-6v-2h1v-1h1v-1h2v1h1v1h1Z"></svg:path>`,
})
export class MemoryRangeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryRelativeScaleIcon],svg[memory-relative-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 10H5V9h1V8h2v1H7m4 1H9V9h1V8h2v1h-1m4 1h-2V9h1V8h2v1h-1m0 5h-1v-2h1v-1h1v2h-1m4 6H3v-1H2V4h1V3h16v1h1v14h-1m-1-1V5H4v12h10v-1h1v-1h1v2Z"></svg:path>`,
})
export class MemoryRelativeScaleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryRemoveCircleIcon],svg[memory-remove-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8v1h2v1h1v1h1v1h1v2zm-4-1V5h-1V4h-2V3H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6zm-3 1v1h1v1h-1v1h-1v2h1v1h1v1h-1v1h-1v-1h-1v-1h-2v1H9v1H8v-1H7v-1h1v-1h1v-2H8V9H7V8h1V7h1v1h1v1h2V8h1V7z"></svg:path>`,
})
export class MemoryRemoveCircleIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryRingIcon],svg[memory-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21H8v-1H6v-1H5v-1H4v-2H3v-6h1V8h1V7h1V6h2V5H7V4H6V3h1V2h8v1h1v1h-1v1h-1v1h2v1h1v1h1v2h1v6h-1v2h-1v1h-1v1h-2M12 6V5h1V4H9v1h1v1m3 12v-1h2v-2h1v-4h-1V9h-2V8H9v1H7v2H6v4h1v2h2v1Z"></svg:path>`,
})
export class MemoryRingIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryRotateClockwiseIcon],svg[memory-rotate-clockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-1h-1v-1h3V9h-1V7h-1V6h-2V5H9v1H7v1H6v2H5v4h1v2h1v1h2v1h4v-1h3v2h-2v1H8v-1H6v-1H5v-1H4v-2H3V8h1V6h1V5h1V4h2V3h6v1h2v1h1v1h1v2h1v3z"></svg:path>`,
})
export class MemoryRotateClockwiseIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryRotateCounterclockwiseIcon],svg[memory-rotate-counterclockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 11v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1H5V9h1V7h1V6h2V5h4v1h2v1h1v2h1v4h-1v2h-1v1h-2v1H9v-1H6v2h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2V3H8v1H6v1H5v1H4v2H3v3z"></svg:path>`,
})
export class MemoryRotateCounterclockwiseIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryScimitarIcon],svg[memory-scimitar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19H9v-1H8v-1H7v1H6v1H4v-2h1v-1h1v-1H5v-1H4v-1h1v-1h1v1h1v1h1v-1h1v-1h1v-1h1v-1h1V9h1V7h1V4h-1V3h3v1h1v4h-1v2h-1v1h-1v1h-1v1h-1v1h-2v1H9v1h1v1h1v1h-1Z"></svg:path>`,
})
export class MemoryScimitarIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryScriptIcon],svg[memory-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 1H5v1H4v13h2V3h9v16h-2v-1h-1v-1H1v3h1v1h14v-1h1V3h2v2h2V2h-1"></svg:path>`,
})
export class MemoryScriptIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memorySearchIcon],svg[memory-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-2v1H6v-1H4v-1H3v-2H2V6h1V4h1V3h2V2h5v1h2v1h1v2h1v5h-1v2h1v1h1v1h1v1h1v1h1v1h1v1h-1m-8-6v-1h1v-1h1V6h-1V5h-1V4H6v1H5v1H4v5h1v1h1v1Z"></svg:path>`,
})
export class MemorySearchIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryShieldIcon],svg[memory-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h2V3h2V2h2V1h4v1h2v1h2v1h2v10h-1v2h-1v2h-1v1h-1v1h-2v1H9v-1H7v-1H6v-1H5v-2H4v-2H3zm7-1v1H8v1H6v1H5v7h1v2h1v2h1v1h2v1h2v-1h2v-1h1v-2h1v-2h1V6h-1V5h-2V4h-2V3z"></svg:path>`,
})
export class MemoryShieldIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryShovelIcon],svg[memory-shovel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19H4v-1H3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h-2V6h1V5h1V4h1V3h3v1h1v1h1v1h1v3h-1v1h-1v1h-1v1h-2v-2h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5Z"></svg:path>`,
})
export class MemoryShovelIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memorySkullIcon],svg[memory-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h2V1h6v1h2v1h1v1h1v1h1v2h1v7h-1v2h-1v4h-1v1H5v-1H4v-4H3v-2H2V8h1V5h1V4h1V3h1zm9 3V4h-2V3H9v1H7v1H6v1H5v3H4v4h1v2h1v4h2v-2h2v2h2v-2h2v2h2v-4h1v-2h1V8h-1V6h-1V5zM7 8h3v3H7zm5 3V8h3v3zm-2 2h2v2h-2z"></svg:path>`,
})
export class MemorySkullIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memorySliderEndIcon],svg[memory-slider-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12H1v-2h4m4 3H7v-1H6v-2h1V9h2v1h1v2H9m10 3h-2v-3h-6v-2h6V7h2m-8 11H5v-2h1v-1h1v-1h2v1h1v1h1Z"></svg:path>`,
})
export class MemorySliderEndIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memorySliderRightIcon],svg[memory-slider-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12h-4v-2h4m-6 3h-2v-1h-1v-2h1V9h2v1h1v2h-1M5 15H3V7h2v3h6v2H5m12 6h-6v-2h1v-1h1v-1h2v1h1v1h1Z"></svg:path>`,
})
export class MemorySliderRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memorySpeakerIcon],svg[memory-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 1h14v1h1v18h-1v1H4v-1H3V2h1zm1 2v16h12V3zm4 2h1V4h2v1h1v2h-1v1h-2V7H9zm0 13v-1H8v-1H7v-4h1v-1h1v-1h4v1h1v1h1v4h-1v1h-1v1zm1-5H9v2h1v1h2v-1h1v-2h-1v-1h-2z"></svg:path>`,
})
export class MemorySpeakerIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memorySpearIcon],svg[memory-spear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19H4v-1H3v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h-1V5h2V4h2V3h3v3h-1v2h-1v2h-2V9h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1H7v1H6v1H5Z"></svg:path>`,
})
export class MemorySpearIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryStoolIcon],svg[memory-stool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 19h-2v-2h-1v-4h-1V9h-1V8h-1v11h-2V8H9v1H8v4H7v4H6v2H4v-2h1v-4h1V9h1V8H5V6h12v2h-2v1h1v4h1v4h1Z"></svg:path>`,
})
export class MemoryStoolIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryStopIcon],svg[memory-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5v1h1v10h-1v1H6v-1H5V6h1V5zM7 7v8h8V7z"></svg:path>`,
})
export class MemoryStopIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memorySwordIcon],svg[memory-sword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20H3v-1H2v-2h1v-1h1v-1h1v-1H4v-1H3v-2h2v1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h5v5h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h1v2H9v-1H8v-1H7v1H6v1H5m5-6v-1h1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h-2v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H9v1H8v1Z"></svg:path>`,
})
export class MemorySwordIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopDoorHorizontalIcon],svg[memory-table-top-door-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15H4v-3H0v-2h4V7h14v3h4v2h-4m-2 1V9H6v4Z"></svg:path>`,
})
export class MemoryTableTopDoorHorizontalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopDoorOneWayDownIcon],svg[memory-table-top-door-one-way-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12H0v-2h4V6h14v4h4M12 20h-2v-1H9v-1H8v-1H7v-1h3v-3h2v3h3v1h-1v1h-1v1h-1m4-8V8H6v3Z"></svg:path>`,
})
export class MemoryTableTopDoorOneWayDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopDoorOneWayLeftIcon],svg[memory-table-top-door-one-way-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15H5v-1H4v-1H3v-1H2v-2h1V9h1V8h1V7h1v3h3v2H6m6 10h-2V0h2v4h4v14h-4m2-2V6h-3v10Z"></svg:path>`,
})
export class MemoryTableTopDoorOneWayLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopDoorOneWayRightIcon],svg[memory-table-top-door-one-way-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15h-1v-3h-3v-2h3V7h1v1h1v1h1v1h1v2h-1v1h-1v1h-1m-5 8h-2v-4H6V4h4V0h2m-1 16V6H8v10Z"></svg:path>`,
})
export class MemoryTableTopDoorOneWayRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopDoorOneWayUpIcon],svg[memory-table-top-door-one-way-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9h-2V6H7V5h1V4h1V3h1V2h2v1h1v1h1v1h1v1h-3m6 10H4v-4H0v-2h22v2h-4m-2 2v-3H6v3Z"></svg:path>`,
})
export class MemoryTableTopDoorOneWayUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopDoorSecretHorizontalIcon],svg[memory-table-top-door-secret-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14h-2v-4h-2v3h-1v1H7v-1H6V8h2v4h2V9h1V8h4v1h1m2 8H6v-1H4v-1H3v-3H0v-2h3V6h1V5h12v1h2v2h1v2h3v2h-3v4h-1m-1-1V8h-1V7H5v7h1v1Z"></svg:path>`,
})
export class MemoryTableTopDoorSecretHorizontalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopDoorSecretVerticalIcon],svg[memory-table-top-door-secret-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 16H8v-2h4v-2H9v-1H8V7h1V6h5v2h-4v2h3v1h1v4h-1m-1 7h-2v-3H6v-1H5V6h1V4h1V3h3V0h2v3h4v1h1v12h-1v2h-2v1h-2m2-2v-1h1V5H8v1H7v11Z"></svg:path>`,
})
export class MemoryTableTopDoorSecretVerticalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopDoorVerticalIcon],svg[memory-table-top-door-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22h-2v-4H7V4h3V0h2v4h3v14h-3m1-2V6H9v10Z"></svg:path>`,
})
export class MemoryTableTopDoorVerticalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopHorizontalRotateClockwiseIcon],svg[memory-table-top-horizontal-rotate-clockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8h-1V5H9v1H7v1H6v1H4V6h1V5h1V4h2V3h3V0h1v1h1v1h1v1h1v2h-1v1h-1v1h-1M2 12H0v-2h2m7 2H3v-2h6m3 2h-2v-2h2m7 2h-6v-2h6m3 2h-2v-2h2m-8 9H8v-1H6v-1H5v-1H4v-2h2v1h1v1h2v1h4v-1h2v-1h1v-1h2v2h-1v1h-1v1h-2Z"></svg:path>`,
})
export class MemoryTableTopHorizontalRotateClockwiseIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopHorizontalRotateCounterclockwiseIcon],svg[memory-table-top-horizontal-rotate-counterclockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8h-2V7h-1V6h-2V5h-2v3h-1V7H9V6H8V5H7V3h1V2h1V1h1V0h1v3h3v1h2v1h1v1h1M2 12H0v-2h2m7 2H3v-2h6m3 2h-2v-2h2m7 2h-6v-2h6m3 2h-2v-2h2m-8 9H8v-1H6v-1H5v-1H4v-2h2v1h1v1h2v1h4v-1h2v-1h1v-1h2v2h-1v1h-1v1h-2Z"></svg:path>`,
})
export class MemoryTableTopHorizontalRotateCounterclockwiseIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopHorizontalStairsAscendLeftIcon],svg[memory-table-top-horizontal-stairs-ascend-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-2V0h2m0 17h-2V5h2M9 18H7V4h2M6 19H4V3h2M3 20H1V2h2m9 20h-2v-2h2Z"></svg:path>`,
})
export class MemoryTableTopHorizontalStairsAscendLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopHorizontalStairsAscendRightIcon],svg[memory-table-top-horizontal-stairs-ascend-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-2V0h2m0 17h-2V5h2m3 13h-2V4h2m3 15h-2V3h2m3 17h-2V2h2m-9 20h-2v-2h2Z"></svg:path>`,
})
export class MemoryTableTopHorizontalStairsAscendRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopHorizontalStairsDescendDownIcon],svg[memory-table-top-horizontal-stairs-descend-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12H0v-2h2m16 2H4v-2h14m4 2h-2v-2h2m-5 5H5v-2h12m-1 5H6v-2h10m-1 5H7v-2h8Z"></svg:path>`,
})
export class MemoryTableTopHorizontalStairsDescendDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopHorizontalStairsDescendLeftIcon],svg[memory-table-top-horizontal-stairs-descend-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-2V0h2M3 15H1V7h2m3 9H4V6h2m3 11H7V5h2m3 13h-2V4h2m0 18h-2v-2h2Z"></svg:path>`,
})
export class MemoryTableTopHorizontalStairsDescendLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopHorizontalStairsDescendRightIcon],svg[memory-table-top-horizontal-stairs-descend-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-2V0h2m9 15h-2V7h2m-3 9h-2V6h2m-3 11h-2V5h2m-3 13h-2V4h2m0 18h-2v-2h2Z"></svg:path>`,
})
export class MemoryTableTopHorizontalStairsDescendRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopHorizontalStairsDescendUpIcon],svg[memory-table-top-horizontal-stairs-descend-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H7V1h8m1 5H6V4h10m1 5H5V7h12M2 12H0v-2h2m16 2H4v-2h14m4 2h-2v-2h2Z"></svg:path>`,
})
export class MemoryTableTopHorizontalStairsDescendUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopSpiralStairsDownIcon],svg[memory-table-top-spiral-stairs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3h1V2h-1m2 1h1V2h-1m2 1h1V2h-1m2 1h1V2h-1m-5 2h1V3h-1m2 1h1V3h-1m2 1h1V3h-1m-5 2h1V4h-1m2 1h1V4h-1m2 1h1V4h-1m-3 2h1V5h-1m2 1h1V5h-1m4 2h-1V6h1m-7 1h1V6h-1m2 1h1V6h-1m-1 2h1V7h-1m4 2h-1V8h1m2 1h-1V8h1m-7 1h1V8h-1M2 19h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1H2m17 7h1v-8h-8v1h1v1h1v1h1v1h1v1h1v1h1v1h1m3 4H0V0h2v2h8V0h12M10 5V3H2v2m8 3V6H2v2m18 2V3h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1m-3 1V9H2v2m9 9v-8h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v1m16 0v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v7Z"></svg:path>`,
})
export class MemoryTableTopSpiralStairsDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopSpiralStairsLeftIcon],svg[memory-table-top-spiral-stairs-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9h1V2H3v1h1v1h1v1h1v1h1v1h1v1h1m4 5h1v-1h-1m2 1h1v-1h-1m2 1h1v-1h-1m2 1h1v-1h-1m-5 2h1v-1h-1m2 1h1v-1h-1m2 1h1v-1h-1m-3 2h1v-1h-1m2 1h1v-1h-1m2 1h1v-1h-1m-5 3h-1v-1h1m2 0h1v-1h-1m2 1h1v-1h-1m-1 2h1v-1h-1m2 1h1v-1h-1m-5 3h-1v-1h1m2 1h-1v-1h1m2 0h1v-1h-1M2 19h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1H2m17 7h1v-1h-1m3 4H0V0h22v2h-2v8h2m-9 0V2h-2v8m5 0V2h-2v8m5 0V2h-2v8m-7 1v-1H9V9H8V8H7V7H6V6H5V5H4V4H3V3H2v8m9 9v-8h-1v1H9v1H8v1H7v1H6v1H5v1H4v1H3v1m16 0v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v7Z"></svg:path>`,
})
export class MemoryTableTopSpiralStairsLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopSpiralStairsRightIcon],svg[memory-table-top-spiral-stairs-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4H6V3h1m2 1H8V3h1M2 4h1V3H2m1 2h1V4H3m6 2H8V5h1M2 6h1V5H2m2 1h1V5H4M3 7h1V6H3m2 1h1V6H5M2 8h1V7H2m2 1h1V7H4m2 1h1V7H6M3 9h1V8H3m2 1h1V8H5m2 1h1V8H7m2 1h1V2H3v1h1v1h1v1h1v1h1v1h1v1h1m-7 2h1V9H2m2 1h1V9H4m2 1h1V9H6m2 1h1V9H8m3 1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h-8m8 17h1v-8h-8v1h1v1h1v1h1v1h1v1h1v1h1v1h1m3 4H0v-2h2v-8H0V0h22m-2 10V3h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1M5 20v-8H3v8m5 0v-8H6v8m5 0v-8H9v8m10 0v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v7Z"></svg:path>`,
})
export class MemoryTableTopSpiralStairsRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopSpiralStairsRoundDownIcon],svg[memory-table-top-spiral-stairs-round-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3h1V2h-1m1 2h1V3h-1m2 1h1V3h-1m-3 2h1V4h-1m2 1h1V4h-1m2 1h1V4h-1m-3 2h1V5h-1m2 1h1V5h-1m-3 2h1V6h-1m2 1h1V6h-1m-1 2h1V7h-1m4 2h-1V8h1V7h1v1h-1m-5 1h1V8h-1m-8 9h1v-1h1v-1h1v-1h1v-1h1v-1H2v2h1v2h1m13 1h1v-1h1v-2h1v-3h-8v1h1v1h1v1h1v1h1v1h1m-3 6H8v-1H5v-1H4v-1H3v-1H2v-1H1v-3H0V0h2v2h8V0h4v1h3v1h1v1h1v1h1v1h1v3h1v6h-1v3h-1v1h-1v1h-1v1h-1v1h-3M10 5V3H2v2m8 3V6H2v2m18 2V8h-1V6h-1V5h-1v1h-1v1h-1v1h-1v1h-1v1m-3 1V9H2v2m9 9v-8h-1v1H9v1H8v1H7v1H6v1H5v1h1v1h2v1m6 0v-1h2v-1h1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v7Z"></svg:path>`,
})
export class MemoryTableTopSpiralStairsRoundDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopSpiralStairsRoundLeftIcon],svg[memory-table-top-spiral-stairs-round-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9h1V2H8v1H6v1H5v1h1v1h1v1h1v1h1m4 5h1v-1h-1m2 1h1v-1h-1m2 1h1v-1h-1m2 1h1v-1h-1m-5 2h1v-1h-1m2 1h1v-1h-1m2 1h1v-1h-1m-3 2h1v-1h-1m2 1h1v-1h-1m-1 2h1v-1h-1m2 1h1v-1h-1M4 17h1v-1h1v-1h1v-1h1v-1h1v-1H2v2h1v2h1m11 2h-1v-1h-1v-1h1v1h1m2 0h1v-1h-1m-3 6H8v-1H5v-1H4v-1H3v-1H2v-1H1v-3H0V8h1V5h1V4h1V3h1V2h1V1h3V0h14v2h-2v8h2v4h-1v3h-1v1h-1v1h-1v1h-1v1h-3m-1-11V2h-2v8m5 0V2h-2v8m5 0V2h-2v8m-7 1v-1H9V9H8V8H7V7H6V6H5V5H4v1H3v2H2v3m9 9v-8h-1v1H9v1H8v1H7v1H6v1H5v1h1v1h2v1m6 0v-1h2v-1h1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v7Z"></svg:path>`,
})
export class MemoryTableTopSpiralStairsRoundLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopSpiralStairsRoundRightIcon],svg[memory-table-top-spiral-stairs-round-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6H8V5H7V4h1v1h1M4 6h1V5H4M3 7h1V6H3m2 1h1V6H5M4 8h1V7H4m2 1h1V7H6M3 9h1V8H3m2 1h1V8H5m2 1h1V8H7m2 1h1V2H8v1H6v1H5v1h1v1h1v1h1v1h1m-7 2h1V9H2m2 1h1V9H4m2 1h1V9H6m2 1h1V9H8m3 1h1V9h1V8h1V7h1V6h1V5h1V4h-1V3h-2V2h-3m6 15h1v-1h1v-2h1v-3h-8v1h1v1h1v1h1v1h1v1h1m-3 6H0v-2h2v-8H0V8h1V5h1V4h1V3h1V2h1V1h3V0h6v1h3v1h1v1h1v1h1v1h1v3h1v6h-1v3h-1v1h-1v1h-1v1h-1v1h-3m6-11V8h-1V6h-1V5h-1v1h-1v1h-1v1h-1v1h-1v1M5 20v-8H3v8m5 0v-8H6v8m5 0v-8H9v8m5 0v-1h2v-1h1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1v7Z"></svg:path>`,
})
export class MemoryTableTopSpiralStairsRoundRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopSpiralStairsRoundUpIcon],svg[memory-table-top-spiral-stairs-round-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9h1V2H8v1H6v1H5v1h1v1h1v1h1v1h1m2 2h1V9h1V8h1V7h1V6h1V5h1V4h-1V3h-2V2h-3M5 15H4v-1h1v-1h1v1H5m4 0h1v-1H9m-1 2h1v-1H8m-1 2h1v-1H7m2 1h1v-1H9m-5 2h1v-1h1v-1h1v-1h1v-1h1v-1H2v2h1v2h1m2 1h1v-1H6m2 1h1v-1H8m-3 2h1v-1H5m2 1h1v-1H7m2 1h1v-1H9m-3 2h1v-1H6m2 1h1v-1H8m1 2h1v-1H9m13 3h-2v-2h-8v2H8v-1H5v-1H4v-1H3v-1H2v-1H1v-3H0V8h1V5h1V4h1V3h1V2h1V1h3V0h6v1h3v1h1v1h1v1h1v1h1v3h1m-2 2V8h-1V6h-1V5h-1v1h-1v1h-1v1h-1v1h-1v1m-3 1v-1H9V9H8V8H7V7H6V6H5V5H4v1H3v2H2v3m18 2v-2h-8v2m8 3v-2h-8v2m8 3v-2h-8v2Z"></svg:path>`,
})
export class MemoryTableTopSpiralStairsRoundUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopSpiralStairsUpIcon],svg[memory-table-top-spiral-stairs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9h1V2H3v1h1v1h1v1h1v1h1v1h1v1h1m2 2h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h-8M4 14H3v-1h1m2 1H5v-1h1m3 1h1v-1H9m-5 3H3v-1h1m4 0h1v-1H8m-1 2h1v-1H7m2 1h1v-1H9m-3 2h1v-1H6m2 1h1v-1H8m-3 2h1v-1H5m2 1h1v-1H7m2 1h1v-1H9m-7 2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1H2m2 7h1v-1H4m2 1h1v-1H6m2 1h1v-1H8m-5 2h1v-1H3m2 1h1v-1H5m2 1h1v-1H7m2 1h1v-1H9m13 3h-2v-2h-8v2H0V0h22m-2 10V3h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1m-3 1v-1H9V9H8V8H7V7H6V6H5V5H4V4H3V3H2v8m18 2v-2h-8v2m8 3v-2h-8v2m8 3v-2h-8v2Z"></svg:path>`,
})
export class MemoryTableTopSpiralStairsUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopStairsDownIcon],svg[memory-table-top-stairs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4H7V2h8m1 6H6V6h10m1 6H5v-2h12m1 6H4v-2h14m1 6H3v-2h16Z"></svg:path>`,
})
export class MemoryTableTopStairsDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopStairsLeftIcon],svg[memory-table-top-stairs-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15h-2V7h2m-4 9h-2V6h2m-4 11h-2V5h2M8 18H6V4h2M4 19H2V3h2Z"></svg:path>`,
})
export class MemoryTableTopStairsLeftIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopStairsRightIcon],svg[memory-table-top-stairs-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15H2V7h2m4 9H6V6h2m4 11h-2V5h2m4 13h-2V4h2m4 15h-2V3h2Z"></svg:path>`,
})
export class MemoryTableTopStairsRightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopStairsUpIcon],svg[memory-table-top-stairs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4H3V2h16m-1 6H4V6h14m-1 6H5v-2h12m-1 6H6v-2h10m-1 6H7v-2h8Z"></svg:path>`,
})
export class MemoryTableTopStairsUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopVerticalRotateClockwiseIcon],svg[memory-table-top-vertical-rotate-clockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-2V0h2m0 9h-2V3h2m0 9h-2v-2h2m7 5h-2v-1h-1v-1h-1v-1h-1v-1h3V9h-1V7h-1V6h-1V4h2v1h1v1h1v2h1v3h3v1h-1v1h-1v1h-1M8 18H6v-1H5v-1H4v-2H3V8h1V6h1V5h1V4h2v2H7v1H6v2H5v4h1v2h1v1h1m4 3h-2v-6h2m0 9h-2v-2h2Z"></svg:path>`,
})
export class MemoryTableTopVerticalRotateClockwiseIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopVerticalRotateCounterclockwiseIcon],svg[memory-table-top-vertical-rotate-counterclockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2h-2V0h2m0 9h-2V3h2m0 9h-2v-2h2m-7 5H3v-1H2v-1H1v-1H0v-1h3V8h1V6h1V5h1V4h2v2H7v1H6v2H5v2h3v1H7v1H6v1H5m11 4h-2v-2h1v-1h1v-2h1V9h-1V7h-1V6h-1V4h2v1h1v1h1v2h1v6h-1v2h-1v1h-1m-4 2h-2v-6h2m0 9h-2v-2h2Z"></svg:path>`,
})
export class MemoryTableTopVerticalRotateCounterclockwiseIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopVerticalStairsAscendDownIcon],svg[memory-table-top-vertical-stairs-ascend-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12H0v-2h2m15 2H5v-2h12m5 2h-2v-2h2m-4 5H4v-2h14m1 5H3v-2h16m1 5H2v-2h18Z"></svg:path>`,
})
export class MemoryTableTopVerticalStairsAscendDownIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTableTopVerticalStairsAscendUpIcon],svg[memory-table-top-vertical-stairs-ascend-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H2V1h18m-1 5H3V4h16m-1 5H4V7h14M2 12H0v-2h2m15 2H5v-2h12m5 2h-2v-2h2Z"></svg:path>`,
})
export class MemoryTableTopVerticalStairsAscendUpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTagIcon],svg[memory-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h1V1h9v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1zm2 8h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-2h-1v-1h-1V9h-1V8h-1V7h-1V6h-1V5h-1V4h-1V3H3zm2-6h2v1h1v2H7v1H5V7H4V5h1z"></svg:path>`,
})
export class MemoryTagIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTagTextIcon],svg[memory-tag-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h1V1h9v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1zm2 8h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1v-2h-1v-1h-1V9h-1V8h-1V7h-1V6h-1V5h-1V4h-1V3H3zm11 1h1v2h-1v-1h-1v-1h-1v-1h-1V9h-1V7h1v1h1v1h1v1h1zm-4 1h1v1h1v2h-1v-1h-1v-1H9v-1H8v-2h1v1h1zM5 4h2v1h1v2H7v1H5V7H4V5h1z"></svg:path>`,
})
export class MemoryTagTextIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTargetIcon],svg[memory-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13h-2v-1H9v-2h1V9h2v1h1v2h-1Zm2 4H8v-1H7v-1H6v-1H5V8h1V7h1V6h1V5h6v1h1v1h1v1h1v6h-1v1h-1v1h-1Zm1 4H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2Zm-2-6v-1h1v-1h1V9h-1V8h-1V7H9v1H8v1H7v4h1v1h1v1Zm1 4v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2V3H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1Z"></svg:path>`,
})
export class MemoryTargetIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTentIcon],svg[memory-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H3v-2h7V8H9v2H8v2H7v2H6v2H3v-1h1v-2h1v-2h1v-1h1V8h1V6h1V4h1V3h2v1h1v2h1v2h1v2h1v1h1v2h1v2h1v1h-3v-2h-1v-2h-1v-2h-1V8h-1v9h7Z"></svg:path>`,
})
export class MemoryTentIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTerminalIcon],svg[memory-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3v16h-1v1H3v-1H2V3h1V2h16v1zm-2 3H4v12h14zM9 9v1h1v1h1v2h-1v1H9v1H8v1H6v-2h1v-1h1v-2H7v-1H6V8h2v1zm2 7v-2h5v2z"></svg:path>`,
})
export class MemoryTerminalIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTextBoxIcon],svg[memory-text-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h14v1h1v1h1v14h-1v1h-1v1H4v-1H3v-1H2V4h1V3h1zm13 3V4H5v1H4v12h1v1h12v-1h1V5zM6 8h10v2H6zm0 4h7v2H6z"></svg:path>`,
})
export class MemoryTextBoxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTextImageIcon],svg[memory-text-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h10v10H2zm2 2v6h6V6zm10-2h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM2 16h16v2H2z"></svg:path>`,
})
export class MemoryTextImageIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTileCautionHeavyIcon],svg[memory-tile-caution-heavy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10H0V6h1V5h2V4h2V3h2V2h2V1h2V0h9v1h-2v1h-2v1h-2v1h-2v1h-2v1H8v1H6v1H4v1H2m0 12H0v-4h1v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2V9h2V8h2V7h2V6h1v5h-2v1h-2v1h-2v1h-2v1h-2v1h-2v1H8v1H6v1H4v1H2m20 2h-9v-1h2v-1h2v-1h2v-1h2v-1h1Z"></svg:path>`,
})
export class MemoryTileCautionHeavyIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTileCautionThinIcon],svg[memory-tile-caution-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 10H0V8h1V7h2V6h2V5h2V4h2V3h2V2h2V1h2V0h5v1h-2v1h-2v1h-2v1h-2v1h-2v1H8v1H6v1H4v1H2m0 12H0v-2h1v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2v-1h2V9h2V8h1v3h-2v1h-2v1h-2v1h-2v1h-2v1h-2v1H8v1H6v1H4v1H2m20 2h-5v-1h2v-1h2v-1h1Z"></svg:path>`,
})
export class MemoryTileCautionThinIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTileDiamondHexIcon],svg[memory-tile-diamond-hex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22h-2v-4H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H0v-2h4V9h1V8h1V7h1V6h1V5h1V4h1V0h2v4h1v1h1v1h1v1h1v1h1v1h1v1h4v2h-4v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1m0-2v-1h1v-1h1v-1h1v-1h1v-2h-1V9h-1V8h-1V7h-1V6h-2v1H9v1H8v1H7v1H6v2h1v1h1v1h1v1h1v1Z"></svg:path>`,
})
export class MemoryTileDiamondHexIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTimeSandIcon],svg[memory-time-sand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8h1V7h-1m-2 3h1V9h1V8h-1V7H9V6h1v1h1V6h1v1h1v1h1V7h1V5h1V4H6v1h1v1h1v2h1m1 3h1v-1h-1m1 2h1v-1h-1m8 9H3v-3h1v-1h1v-2h1v-2h1v-2H6V8H5V6H4V5H3V2h16v3h-1v1h-1v2h-1v2h-1v2h1v2h1v2h1v1h1m-6-7V8h-1v1h-1v1m5 8v-1h-1v-2h-1v-2h-1v-1h-1v2h1v2h1v1H8v-1h1v-2h1v-1h1v-1H9v1H8v2H7v2H6v1Z"></svg:path>`,
})
export class MemoryTimeSandIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryToggleSwitchOffIcon],svg[memory-toggle-switch-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8h4v1h1v4H9v1H5v-1H4V9h1zm14-3v1h1v1h1v8h-1v1h-1v1H3v-1H2v-1H1V7h1V6h1V5zm-1 2H4v1H3v6h1v1h14v-1h1V8h-1z"></svg:path>`,
})
export class MemoryToggleSwitchOffIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryToggleSwitchOnIcon],svg[memory-toggle-switch-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h16v1h1v1h1v8h-1v1h-1v1H3v-1H2v-1H1V7h1V6h1zm10 3v1h-1v4h1v1h4v-1h1V9h-1V8z"></svg:path>`,
})
export class MemoryToggleSwitchOnIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryToolboxIcon],svg[memory-toolbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h5V3h1V2h6v1h1v3h5v1h1v12h-1v1H2v-1H1V7h1zm7 0h4V4H9zm10 2H3v4h3v-2h3v2h4v-2h3v2h3zM3 18h16v-4h-3v2h-3v-2H9v2H6v-2H3z"></svg:path>`,
})
export class MemoryToolboxIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipAboveIcon],svg[memory-tooltip-above-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h18v1h1v14h-1v1h-5v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H2v-1H1V2h1zm1 2v12h5v1h1v1h1v1h2v-1h1v-1h1v-1h5V3z"></svg:path>`,
})
export class MemoryTooltipAboveIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipAboveAlertIcon],svg[memory-tooltip-above-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5h2v5h-2zm0 6h2v2h-2zM2 1h18v1h1v14h-1v1h-5v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H2v-1H1V2h1zm1 2v12h5v1h1v1h1v1h2v-1h1v-1h1v-1h5V3z"></svg:path>`,
})
export class MemoryTooltipAboveAlertIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipAboveHelpIcon],svg[memory-tooltip-above-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11h-2V9h1V8h1V7h-2v1H8V6h1V5h4v1h1v3h-1v1h-1m0 4h-2v-2h2m0 9h-2v-1H9v-1H8v-1H7v-1H2v-1H1V2h1V1h18v1h1v14h-1v1h-5v1h-1v1h-1v1h-1m0-2v-1h1v-1h1v-1h5V3H3v12h5v1h1v1h1v1Z"></svg:path>`,
})
export class MemoryTooltipAboveHelpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipAboveTextIcon],svg[memory-tooltip-above-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h18v1h1v14h-1v1h-5v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1H7v-1H2v-1H1V2h1zm1 2v12h5v1h1v1h1v1h2v-1h1v-1h1v-1h5V3zm2 3h12v2H5zm0 4h10v2H5z"></svg:path>`,
})
export class MemoryTooltipAboveTextIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipBelowIcon],svg[memory-tooltip-below-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21h18v-1h1V6h-1V5h-5V4h-1V3h-1V2h-1V1h-2v1H9v1H8v1H7v1H2v1H1v14h1zm1-2V7h5V6h1V5h1V4h2v1h1v1h1v1h5v12z"></svg:path>`,
})
export class MemoryTooltipBelowIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipBelowAlertIcon],svg[memory-tooltip-below-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17h2v-2h-2zm0-3h2V9h-2zm-8 7h18v-1h1V6h-1V5h-5V4h-1V3h-1V2h-1V1h-2v1H9v1H8v1H7v1H2v1H1v14h1zm1-2V7h5V6h1V5h1V4h2v1h1v1h1v1h5v12z"></svg:path>`,
})
export class MemoryTooltipBelowAlertIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipBelowHelpIcon],svg[memory-tooltip-below-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14h-2v-2h1v-1h1v-1h-2v1H8V9h1V8h4v1h1v3h-1v1h-1m0 4h-2v-2h2m8 6H2v-1H1V6h1V5h5V4h1V3h1V2h1V1h2v1h1v1h1v1h1v1h5v1h1v14h-1m-1-1V7h-5V6h-1V5h-1V4h-2v1H9v1H8v1H3v12Z"></svg:path>`,
})
export class MemoryTooltipBelowHelpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipBelowTextIcon],svg[memory-tooltip-below-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21h18v-1h1V6h-1V5h-5V4h-1V3h-1V2h-1V1h-2v1H9v1H8v1H7v1H2v1H1v14h1zm1-2V7h5V6h1V5h1V4h2v1h1v1h1v1h5v12zm2-3h10v-2H5zm0-4h12v-2H5z"></svg:path>`,
})
export class MemoryTooltipBelowTextIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipEndIcon],svg[memory-tooltip-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20V2h-1V1H6v1H5v5H4v1H3v1H2v1H1v2h1v1h1v1h1v1h1v5h1v1h14v-1zm-2-1H7v-5H6v-1H5v-1H4v-2h1V9h1V8h1V3h12z"></svg:path>`,
})
export class MemoryTooltipEndIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipEndAlertIcon],svg[memory-tooltip-end-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15h-2v-2h2zm0-3h-2V7h2zm7-10v18h-1v1H6v-1H5v-5H4v-1H3v-1H2v-1H1v-2h1V9h1V8h1V7h1V2h1V1h14v1zm-2 1H7v5H6v1H5v1H4v2h1v1h1v1h1v5h12z"></svg:path>`,
})
export class MemoryTooltipEndAlertIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipEndHelpIcon],svg[memory-tooltip-end-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13h-2v-2h1v-1h1V8h-2v2h-2V7h1V6h4v1h1v4h-1v1h-1m0 4h-2v-2h2m6 7H6v-1H5v-5H4v-1H3v-1H2v-1H1v-2h1V9h1V8h1V7h1V2h1V1h14v1h1v18h-1m-1-1V3H7v5H6v1H5v1H4v2h1v1h1v1h1v5Z"></svg:path>`,
})
export class MemoryTooltipEndHelpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipEndTextIcon],svg[memory-tooltip-end-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8V6H9v2zm-2 8v-2H9v2zm2-4v-2H9v2zm4 8V2h-1V1H6v1H5v5H4v1H3v1H2v1H1v2h1v1h1v1h1v1h1v5h1v1h14v-1zm-2-1H7v-5H6v-1H5v-1H4v-2h1V9h1V8h1V3h12z"></svg:path>`,
})
export class MemoryTooltipEndTextIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipStartIcon],svg[memory-tooltip-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20V2h1V1h14v1h1v5h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v5h-1v1H2v-1zm2-1h12v-5h1v-1h1v-1h1v-2h-1V9h-1V8h-1V3H3z"></svg:path>`,
})
export class MemoryTooltipStartIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipStartAlertIcon],svg[memory-tooltip-start-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15h2v-2H8zm0-3h2V7H8zM1 2v18h1v1h14v-1h1v-5h1v-1h1v-1h1v-1h1v-2h-1V9h-1V8h-1V7h-1V2h-1V1H2v1zm2 1h12v5h1v1h1v1h1v2h-1v1h-1v1h-1v5H3z"></svg:path>`,
})
export class MemoryTooltipStartAlertIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipStartHelpIcon],svg[memory-tooltip-start-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13H8v-2h1v-1h1V8H8v2H6V7h1V6h4v1h1v4h-1v1h-1m0 4H8v-2h2m6 7H2v-1H1V2h1V1h14v1h1v5h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v5h-1m-1-1v-5h1v-1h1v-1h1v-2h-1V9h-1V8h-1V3H3v16Z"></svg:path>`,
})
export class MemoryTooltipStartHelpIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTooltipStartTextIcon],svg[memory-tooltip-start-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8V6h8v2zm0 8v-2h6v2zm0-4v-2h8v2zm-4 8V2h1V1h14v1h1v5h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v5h-1v1H2v-1zm2-1h12v-5h1v-1h1v-1h1v-2h-1V9h-1V8h-1V3H3z"></svg:path>`,
})
export class MemoryTooltipStartTextIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTorchIcon],svg[memory-torch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8h1V6h-1m2 4h-3V9h-1V6h2V4h-1V3h-1V2h2v1h1v1h1v2h1v2h-1M6 18H4v-1h1v-1h1v-1h1v-1h1v-2h1v-1h1v-1h1V9h1v1h1v1h2v1h-1v1h-2v1h-1v1H9v1H8v1H6Z"></svg:path>`,
})
export class MemoryTorchIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryToyBrickIcon],svg[memory-toy-brick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7h1V6H7m7 1h1V6h-1m5 12H3V7h2V5h1V4h3v1h1v2h2V5h1V4h3v1h1v2h2m-2 9V9H5v7Z"></svg:path>`,
})
export class MemoryToyBrickIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTrashIcon],svg[memory-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7v9H8V7zm2 0h2v9h-2zM8 2h6v1h5v2h-1v14h-1v1H5v-1H4V5H3V3h5zM6 5v13h10V5z"></svg:path>`,
})
export class MemoryTrashIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryTridentIcon],svg[memory-trident-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18H4v-2h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1V5h1V4h1V3h1V2h2v1h-1v1h-1v1h-1v2h1V6h1V5h1V4h2v2h-1v1h-1v1h-1v1h2V8h1V7h1V6h1v2h-1v1h-1v1h-1v1h-5v1h-1v1h-1v1H9v1H8v1H7v1H6Z"></svg:path>`,
})
export class MemoryTridentIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryUmbrellaIcon],svg[memory-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20H7v-1H6v-3h2v2h2v-6H3V7h1V6h1V5h1V4h2V3h6v1h2v1h1v1h1v1h1v5h-7v7h-1m6-9V8h-1V7h-1V6h-2V5H9v1H7v1H6v1H5v2Z"></svg:path>`,
})
export class MemoryUmbrellaIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryUploadIcon],svg[memory-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17v2H4v-2zM8 15V9H4V8h1V7h1V6h1V5h1V4h1V3h1V2h2v1h1v1h1v1h1v1h1v1h1v1h1v1h-4v6zm2-2h2V7h1V6h-1V5h-2v1H9v1h1z"></svg:path>`,
})
export class MemoryUploadIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryVolumeHighIcon],svg[memory-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h2v1h1v1h1v1h1v1h1v2h1v6h-1v2h-1v1h-1v1h-1v1h-1v1h-2v-2h1v-1h1v-1h1v-1h1v-2h1V9h-1V7h-1V6h-1V5h-1V4h-1zm1 5v1h1v2h1v2h-1v2h-1v1h-1V7zM2 8h4V7h1V6h1V5h1V4h1V3h1v16h-1v-1H9v-1H8v-1H7v-1H6v-1H2zm2 2v2h3v1h1v1h1V8H8v1H7v1z"></svg:path>`,
})
export class MemoryVolumeHighIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryVolumeLowIcon],svg[memory-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8h4V7h1V6h1V5h1V4h1V3h1v16h-1v-1h-1v-1h-1v-1h-1v-1h-1v-1H6zm2 2v2h3v1h1v1h1V8h-1v1h-1v1z"></svg:path>`,
})
export class MemoryVolumeLowIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryVolumeMediumIcon],svg[memory-volume-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7v1h1v2h1v2h-1v2h-1v1h-1V7zM8 8V7h1V6h1V5h1V4h1V3h1v16h-1v-1h-1v-1h-1v-1H9v-1H8v-1H4V8zm-2 2v2h3v1h1v1h1V8h-1v1H9v1z"></svg:path>`,
})
export class MemoryVolumeMediumIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryVolumeMuteIcon],svg[memory-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7h2v1h1v1h2V8h1V7h2v2h-1v1h-1v2h1v1h1v2h-2v-1h-1v-1h-2v1h-1v1h-2v-2h1v-1h1v-2h-1V9h-1zM6 8V7h1V6h1V5h1V4h1V3h1v16h-1v-1H9v-1H8v-1H7v-1H6v-1H2V8zm1 2H4v2h3v1h1v1h1V8H8v1H7z"></svg:path>`,
})
export class MemoryVolumeMuteIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryWallIcon],svg[memory-wall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20H4v-5H1V7h3V2h15v5h2v8h-2ZM12 7V4H6v3Zm5 0V4h-3v3Zm-9 6V9H3v4Zm11 0V9h-9v4Zm-8 5v-3H6v3Zm6 0v-3h-4v3Z"></svg:path>`,
})
export class MemoryWallIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryWallFillIcon],svg[memory-wall-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h6v4H5m8-4h5v4h-5m-8 8v4h6v-4m2 0h5v4h-5M8 9H3v4h5m2-4h10v4H10"></svg:path>`,
})
export class MemoryWallFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryWallFrontIcon],svg[memory-wall-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18H2V4h2v2h2V4h2v2h2V4h2v2h2V4h2v2h2V4h2m-2 12V8H4v8Z"></svg:path>`,
})
export class MemoryWallFrontIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryWallFrontDamagedIcon],svg[memory-wall-front-damaged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16h1v-2h1v-1h1v-1h1v-1h2v-1h5v1h1v2h1v2h1V8H4m16 10h-4v-2h-1v-2h-1v-2h-3v1H9v1H8v1H7v2H6v1H2V4h2v2h2V4h2v2h2V4h2v2h2V4h2v2h2V4h2m-9 16H6v-1h1v-1h3v1h1m5 1h-4v-2h1v-1h1v1h1v1h1Z"></svg:path>`,
})
export class MemoryWallFrontDamagedIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryWallFrontGateIcon],svg[memory-wall-front-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18h-7v-5h-1v-1h-2v1H9v5H2V4h2v2h2V4h2v2h2V4h2v2h2V4h2v2h2V4h2m-2 12V8H4v8h3v-4h1v-1h1v-1h4v1h1v1h1v4Z"></svg:path>`,
})
export class MemoryWallFrontGateIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryWaterIcon],svg[memory-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21H8v-1H6v-1H5v-1H4v-2H3v-3h1v-2h1V9h1V7h1V6h1V4h1V3h1V1h2v2h1v1h1v2h1v1h1v2h1v2h1v2h1v3h-1v2h-1v1h-1v1h-2Zm-1-2v-1h2v-1h1v-2h1v-1h-1v-2h-1v-2h-1V8h-1V7h-1V5h-2v2H9v1H8v2H7v2H6v2H5v1h1v2h1v1h2v1Z"></svg:path>`,
})
export class MemoryWaterIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryWaterFillIcon],svg[memory-water-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21H8v-1H6v-1H5v-1H4v-2H3v-3h1v-2h1V9h1V7h1V6h1V4h1V3h1V1h2v2h1v1h1v2h1v1h1v2h1v2h1v2h1v3h-1v2h-1v1h-1v1h-2Z"></svg:path>`,
})
export class MemoryWaterFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryWeightIcon],svg[memory-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20H2v-2h1v-4h1v-3h1V8h3V7H7V4h1V3h1V2h4v1h1v1h1v3h-1v1h3v3h1v3h1v4h1ZM12 7V6h1V5h-1V4h-2v1H9v1h1v1Zm5 11v-2h-1v-4h-1v-2H7v2H6v4H5v2Z"></svg:path>`,
})
export class MemoryWeightIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryWeightFillIcon],svg[memory-weight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20H2v-2h1v-4h1v-3h1V8h3V7H7V4h1V3h1V2h4v1h1v1h1v3h-1v1h3v3h1v3h1v4h1M12 7V6h1V5h-1V4h-2v1H9v1h1v1Z"></svg:path>`,
})
export class MemoryWeightFillIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryWellIcon],svg[memory-well-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H3v-5H1v-2h20v2h-2zM5 16v3h12v-3zM2 7V5h1V4h1V3h1V2h1V1h10v1h1v1h1v1h1v1h1v2h-2v6h-2V7h-4v2h2v4H8V9h2V7H6v6H4V7zm5-4v1H6v1h10V4h-1V3z"></svg:path>`,
})
export class MemoryWellIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryWhipIcon],svg[memory-whip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 18h-3v-1h-1v-1H9v-5h1V8h1V7h4v1h1v3h-1v1h-1v1h-2v-1h1v-1h1V9h-2v2h-1v4h1v1h1v-1h2v-1h1v-2h1V6h-1V5h-1V4h-3v1h-1v1h-1v1H9v1H8v1H7v2H6v1H5v1H4v1H3v-1H2v-2h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h2V2h4v1h1v1h1v1h1v8h-1v2h-1v1h-1v1h-2Z"></svg:path>`,
})
export class MemoryWhipIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryWindIcon],svg[memory-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10H2V8h6V7h1V6H8V5H7v2H6V6H5V4h1V3h3v1h1v1h1v3h-1v1H9m6 4H2v-2h11v-1h3V9h1V8h-1V7h-2v2h-1V8h-1V6h1V5h4v1h1v1h1v3h-1v1h-1v1h-2m-1 9h-4v-1H9v-3h2v2h2v-2h-1v-1H4v-1H3v-1h10v1h1v1h1v1h1v2h-1v1h-1Z"></svg:path>`,
})
export class MemoryWindIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[memoryAlignVerticalDistributeIcon],svg[memory-align-vertical-distribute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H2V2h18m-4 12H6V8h10m4 12H2v-2h18Z"></svg:path>`,
})
export class MemoryAlignVerticalDistributeIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
