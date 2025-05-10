import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciOctagonIcon],svg[ci-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.405 21H9.594c-.49 0-.734 0-.964-.056a2 2 0 0 1-.578-.239c-.202-.123-.374-.296-.72-.642L3.938 16.67c-.346-.346-.52-.519-.643-.72a2 2 0 0 1-.24-.579C3 15.14 3 14.895 3 14.405V9.594c0-.49 0-.734.055-.964q.075-.308.24-.578c.122-.2.293-.37.633-.71l.01-.01l3.394-3.394l.01-.01c.34-.34.51-.51.71-.633q.27-.165.578-.24C8.86 3 9.105 3 9.594 3h4.811c.49 0 .735 0 .965.055c.204.05.4.13.578.24c.202.124.375.297.72.643l3.395 3.394c.346.346.519.518.642.72q.165.27.24.578c.055.23.055.475.055.964v4.811m0 .001c0 .49 0 .734-.056.964a2 2 0 0 1-.239.578c-.123.202-.296.375-.642.72l-3.394 3.395c-.346.346-.519.519-.72.642q-.271.165-.579.24c-.23.055-.475.055-.964.055"></svg:path>`,
})
export class CiOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciOctagonCheckIcon],svg[ci-octagon-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 10l-4 4l-2-2M7.332 3.938L3.938 7.332l-.004.003c-.343.343-.516.516-.64.717q-.164.27-.239.578C3 8.86 3 9.105 3 9.594v4.812c0 .489 0 .733.055.964a2 2 0 0 0 .24.578c.124.201.297.375.643.72l3.394 3.395c.346.346.518.518.72.642q.27.165.578.24c.23.055.474.055.962.055h4.816c.487 0 .732 0 .962-.055c.204-.05.4-.13.578-.24c.202-.124.375-.296.72-.642l3.395-3.394c.346-.346.519-.52.642-.721q.165-.271.24-.578c.055-.23.055-.475.055-.964V9.594c0-.489 0-.733-.056-.964a2 2 0 0 0-.239-.578c-.123-.202-.296-.374-.642-.72L16.67 3.938c-.346-.346-.519-.52-.72-.643a2 2 0 0 0-.579-.24C15.14 3 14.895 3 14.405 3H9.594c-.49 0-.734 0-.964.055q-.308.075-.578.24c-.2.122-.37.293-.71.633z"></svg:path>`,
})
export class CiOctagonCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciOctagonHelpIcon],svg[ci-octagon-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.146 9.074a2.998 2.998 0 0 1 5.28-.838A3 3 0 0 1 12 13v1m.05 3v.1h-.1V17zM7.332 3.938L3.938 7.332l-.004.003c-.343.343-.516.516-.64.717q-.164.27-.239.578C3 8.86 3 9.105 3 9.594v4.812c0 .489 0 .733.055.964a2 2 0 0 0 .24.578c.124.201.297.375.643.72l3.394 3.395c.346.346.518.518.72.642q.27.165.578.24c.23.055.474.055.962.055h4.816c.487 0 .732 0 .962-.055c.204-.05.4-.13.578-.24c.202-.124.375-.296.72-.642l3.395-3.394c.346-.346.519-.52.642-.721q.165-.271.24-.578c.055-.23.055-.475.055-.964V9.594c0-.489 0-.733-.056-.964a2 2 0 0 0-.239-.578c-.123-.202-.296-.374-.642-.72L16.67 3.938c-.346-.346-.519-.52-.72-.643a2 2 0 0 0-.579-.24C15.14 3 14.895 3 14.405 3H9.594c-.49 0-.734 0-.964.055q-.308.075-.578.24c-.2.122-.37.293-.71.633z"></svg:path>`,
})
export class CiOctagonHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciOctagonWarningIcon],svg[ci-octagon-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8.45v4M7.332 3.938L3.938 7.332l-.004.003c-.343.343-.516.516-.64.717q-.164.27-.239.578C3 8.86 3 9.105 3 9.594v4.812c0 .489 0 .733.055.964a2 2 0 0 0 .24.578c.124.201.297.375.643.72l3.394 3.395c.346.346.518.518.72.642q.27.165.578.24c.23.055.474.055.962.055h4.816c.487 0 .732 0 .962-.055c.204-.05.4-.13.578-.24c.202-.124.375-.296.72-.642l3.395-3.394c.346-.346.519-.52.642-.721q.165-.271.24-.578c.055-.23.055-.475.055-.964V9.594c0-.489 0-.733-.056-.964a2 2 0 0 0-.239-.578c-.123-.202-.296-.374-.642-.72L16.67 3.938c-.346-.346-.519-.52-.72-.643a2 2 0 0 0-.579-.24C15.14 3 14.895 3 14.405 3H9.594c-.49 0-.734 0-.964.055q-.308.075-.578.24c-.2.122-.37.293-.71.633zM12.05 15.45v.1h-.1v-.1z"></svg:path>`,
})
export class CiOctagonWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciOffCloseIcon],svg[ci-off-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22A9.99 9.99 0 0 1 2 12v-.2a10.005 10.005 0 0 1 17.074-6.874A10 10 0 0 1 12 22Zm0-8.59L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.411v-.001Z"></svg:path>`,
})
export class CiOffCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciOffOutlineCloseIcon],svg[ci-off-outline-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22A10 10 0 0 1 4.926 4.926a10.004 10.004 0 1 1 14.148 14.148A9.936 9.936 0 0 1 12 22Zm-8-9.828A8 8 0 1 0 4 12v.172ZM9.409 16l-1.41-1.41L10.59 12L8 9.41L9.41 8L12 10.59L14.59 8L16 9.41L13.41 12L16 14.59L14.592 16L12 13.41L9.41 16h-.001Z"></svg:path>`,
})
export class CiOffOutlineCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciOptionIcon],svg[ci-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h5.094c.33 0 .495 0 .643.047q.2.064.357.202c.117.103.202.245.372.528l5.068 8.446c.17.284.255.425.372.528q.156.137.356.202c.148.047.314.047.644.047H21M15 7h6"></svg:path>`,
})
export class CiOptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPaperPlaneIcon],svg[ci-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10.308 13.692l4.846-4.846M20.11 5.89l-4.09 13.294c-.367 1.192-.55 1.788-.867 1.985a1 1 0 0 1-.912.076c-.344-.143-.624-.7-1.182-1.816l-2.59-5.182a2 2 0 0 0-.193-.342a1 1 0 0 0-.18-.181a2 2 0 0 0-.331-.186L4.572 10.94c-1.115-.558-1.673-.837-1.816-1.181a1 1 0 0 1 .076-.913c.197-.316.793-.5 1.985-.867l13.295-4.09c.937-.289 1.405-.433 1.722-.316a1 1 0 0 1 .594.594c.116.316-.028.784-.316 1.72z"></svg:path>`,
})
export class CiPaperPlaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPaperclipAttechmentHorizontalIcon],svg[ci-paperclip-attechment-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6h9.75a5.25 5.25 0 1 1 0 10.5H5.5a3.5 3.5 0 1 1 0-7h11.25a1.75 1.75 0 1 1 0 3.5H7"></svg:path>`,
})
export class CiPaperclipAttechmentHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPaperclipAttechmentTiltIcon],svg[ci-paperclip-attechment-tilt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.536 11.465L11.43 4.57a5.25 5.25 0 1 1 7.424 7.425L10.9 19.95A3.5 3.5 0 0 1 5.95 15l7.956-7.954A1.75 1.75 0 0 1 16.38 9.52l-6.895 6.894"></svg:path>`,
})
export class CiPaperclipAttechmentTiltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciParagraphIcon],svg[ci-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v8m0-8h4m-4 0h-1a4 4 0 1 0 0 8h1m0 0v6m4-14v14m0-14h1"></svg:path>`,
})
export class CiParagraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPathIcon],svg[ci-path-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.121 15.879a3 3 0 1 0-4.243 4.243a3 3 0 0 0 4.243-4.243m0 0L15.88 8.12m0 0a3 3 0 1 0 4.243-4.243A3 3 0 0 0 15.88 8.12m0 0l.004-.004"></svg:path>`,
})
export class CiPathIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPauseIcon],svg[ci-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5.5v13c0 .465 0 .697.038.89a2 2 0 0 0 1.571 1.572c.194.038.426.038.89.038c.465 0 .698 0 .892-.038a2 2 0 0 0 1.57-1.572c.039-.19.039-.42.039-.878V5.488c0-.457 0-.687-.038-.879a2 2 0 0 0-1.572-1.57C18.197 3 17.965 3 17.5 3s-.697 0-.89.038a2 2 0 0 0-1.572 1.571C15 4.803 15 5.035 15 5.5m-11 0v13c0 .465 0 .697.038.89a2 2 0 0 0 1.571 1.572c.194.038.426.038.89.038c.465 0 .698 0 .892-.038a2 2 0 0 0 1.57-1.572C9 19.2 9 18.97 9 18.512V5.488c0-.457 0-.687-.038-.879A2 2 0 0 0 7.39 3.04C7.197 3 6.965 3 6.5 3s-.697 0-.89.038A2 2 0 0 0 4.037 4.61C4 4.803 4 5.035 4 5.5"></svg:path>`,
})
export class CiPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPauseCircleIcon],svg[ci-pause-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 9v6m-4-6v6m2 6a9 9 0 1 1 0-18a9 9 0 0 1 0 18"></svg:path>`,
})
export class CiPauseCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPauseCircleFilledIcon],svg[ci-pause-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm1-14v8h2V8h-2ZM9 8v8h2V8H9Z"></svg:path>`,
})
export class CiPauseCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPauseCircleOutlineIcon],svg[ci-pause-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22Zm-.016-2H12a8 8 0 1 0-.016 0ZM15 16h-2V8h2v8Zm-4 0H9V8h2v8Z"></svg:path>`,
})
export class CiPauseCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPaypalIcon],svg[ci-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.398 21.009H8.874a.392.392 0 0 1-.33-.15a.459.459 0 0 1-.09-.363c.04-.241.09-.559.152-.963l.114-.727a313.336 313.336 0 0 1 .348-2.188v-.02l.188-1.164l.1-.619v-.005c.072-.445.129-.798.17-1.061a.39.39 0 0 1 .433-.371h1.52a10.08 10.08 0 0 0 2.171-.212a6.09 6.09 0 0 0 2.886-1.449a6.084 6.084 0 0 0 1.56-2.473c.152-.436.27-.884.352-1.338c.007-.042.015-.066.025-.074a.03.03 0 0 1 .025-.012h.01a.31.31 0 0 1 .062.035c.525.397.876.982.98 1.632c.118.68.105 1.376-.04 2.051a5.406 5.406 0 0 1-1.857 3.35a6.053 6.053 0 0 1-3.825 1.116h-.439a.662.662 0 0 0-.444.166a.722.722 0 0 0-.239.427l-.04.194l-.554 3.478l-.02.151a.706.706 0 0 1-.249.427a.67.67 0 0 1-.445.162Zm-3.578-2H4.855a.473.473 0 0 1-.369-.165a.466.466 0 0 1-.115-.39l2.331-14.79a.775.775 0 0 1 .277-.483a.783.783 0 0 1 .518-.19h6.014c.33.013.658.057.98.131c.382.073.758.18 1.122.32a3.425 3.425 0 0 1 1.645 1.238a3.41 3.41 0 0 1 .568 1.972a7.11 7.11 0 0 1-.46 2.374a4.909 4.909 0 0 1-3.042 3.165a8.046 8.046 0 0 1-2.535.425c-.01.006-.44.007-.9.007l-.9-.007a1.083 1.083 0 0 0-1.187.964c-.013.054-.317 1.947-.855 5.329a.107.107 0 0 1-.128.105l.001-.005Z"></svg:path>`,
})
export class CiPaypalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPhoneIcon],svg[ci-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.502 4.257A2 2 0 0 0 7.646 3H4.895A1.895 1.895 0 0 0 3 4.895C3 13.789 10.21 21 19.106 21A1.895 1.895 0 0 0 21 19.105v-2.751a2 2 0 0 0-1.257-1.857l-2.636-1.054a2 2 0 0 0-2.023.32l-.68.568a2 2 0 0 1-2.696-.122L9.792 12.29a2 2 0 0 1-.123-2.694l.567-.68a2 2 0 0 0 .322-2.024z"></svg:path>`,
})
export class CiPhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPhoneOutlineIcon],svg[ci-phone-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.742 8.682c-1.073.912-1.466 2.575-.54 3.909a12.818 12.818 0 0 0 3.208 3.207c1.334.926 2.997.533 3.909-.54l.01.005A13.38 13.38 0 0 0 19 16.36V19h-.004C11.022 19.011 4.991 12.911 5 5.004V5h2.64v.001c.188 1.27.558 2.506 1.097 3.67l.005.01ZM19 21h1a1 1 0 0 0 1-1v-4.502a1 1 0 0 0-.853-.99l-.854-.126a11.416 11.416 0 0 1-3.123-.934l-.753-.349a1 1 0 0 0-1.234.326l-.341.477c-.299.419-.87.546-1.291.253a10.819 10.819 0 0 1-2.706-2.705c-.293-.422-.165-.993.253-1.291l.477-.34a1 1 0 0 0 .326-1.235l-.35-.754a11.424 11.424 0 0 1-.933-3.123l-.127-.854A1 1 0 0 0 8.501 3H4a1 1 0 0 0-1 1v1.001C2.99 14.008 9.91 21.013 18.999 21Z"></svg:path>`,
})
export class CiPhoneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPieChart25Icon],svg[ci-pie-chart-25-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22Zm-8-9.828A8 8 0 1 0 20 12h-8V4a8.01 8.01 0 0 0-8 8v.172Z"></svg:path>`,
})
export class CiPieChart25Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPieChart50Icon],svg[ci-pie-chart-50-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm-.016-2H12V4a8 8 0 1 0-.016 16Z"></svg:path>`,
})
export class CiPieChart50Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPieChart75Icon],svg[ci-pie-chart-75-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22Zm0-18a8.008 8.008 0 0 0-8 8h8V4Z"></svg:path>`,
})
export class CiPieChart75Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPieChartOutlineIcon],svg[ci-pie-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10ZM11 4.062a8 8 0 1 0 5.419 14.608l-.1.071l.094-.065l.059-.041l.064-.045l.016-.011l.009-.007l-5.128-5.13A1.51 1.51 0 0 1 11 12.379V4.062ZM13.829 13l4.227 4.227l.007-.008l.005-.006l-.01.011A7.944 7.944 0 0 0 19.938 13h-6.109ZM13 4.062V11h6.938A8 8 0 0 0 13 4.062Z"></svg:path>`,
})
export class CiPieChartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPieChartOutline25Icon],svg[ci-pie-chart-outline-25-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10ZM11 4.062a8 8 0 1 0 8.915 9.1V13H11V4.062Zm2 0V11h6.938A8 8 0 0 0 13 4.062Z"></svg:path>`,
})
export class CiPieChartOutline25Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPlanetIcon],svg[ci-planet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.898 18.162a8 8 0 0 0 12.93-7.821m-12.93 7.82a8 8 0 1 1 12.93-7.821m-12.93 7.822c1.955-.447 4.282-1.38 6.628-2.734c2.73-1.576 4.951-3.416 6.302-5.088m-12.93 7.822c-2.43.555-4.286.362-4.898-.698c-.63-1.091.196-2.867 2-4.755m15.828-2.369c1.252-1.55 1.756-2.956 1.224-3.876c-.539-.933-2.043-1.195-4.052-.865"></svg:path>`,
})
export class CiPlanetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPlayIcon],svg[ci-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17.334V6.667c0-.88 0-1.32.185-1.58a1 1 0 0 1 .687-.412c.317-.04.705.166 1.48.58l10 5.333l.004.002c.857.457 1.286.686 1.427.99c.122.266.122.573 0 .839c-.141.305-.571.535-1.43.993l-10 5.333c-.777.414-1.164.62-1.48.58a1 1 0 0 1-.688-.412C5 18.653 5 18.213 5 17.333"></svg:path>`,
})
export class CiPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPlayArrowIcon],svg[ci-play-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 19l11-7L8 5v14Z"></svg:path>`,
})
export class CiPlayArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPlayCircleIcon],svg[ci-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"></svg:path><svg:path d="M10 15V9l5 3z"></svg:path></svg:g>`,
})
export class CiPlayCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPlayCircleFilledIcon],svg[ci-play-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22ZM10 7.5v9l6-4.5l-6-4.5Z"></svg:path>`,
})
export class CiPlayCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPlayCircleOutlineIcon],svg[ci-play-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm-8-9.828A8 8 0 1 0 4 12v.172Zm6 4.328v-9l6 4.5l-6 4.5Z"></svg:path>`,
})
export class CiPlayCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPlayStoreIcon],svg[ci-play-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.4 21c-.17.003-.34-.026-.5-.086l8.054-8.057l2.666 2.669l-9.255 5.2A1.998 1.998 0 0 1 5.4 21Zm-1.164-.665a1.9 1.9 0 0 1-.236-.97V4.66a2.13 2.13 0 0 1 .1-.658l8.233 8.235l-8.1 8.1l.003-.002Zm12.179-5.258l-2.841-2.839l3.133-3.132l2.783 1.563c.534.24.892.755.928 1.339a1.574 1.574 0 0 1-.929 1.34l-3.074 1.729Zm-3.461-3.463l-8.34-8.339c.229-.17.506-.26.791-.261c.336.012.664.107.955.277l9.551 5.368l-2.956 2.955h-.001Z"></svg:path>`,
})
export class CiPlayStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPlusIcon],svg[ci-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13v6h-2v-6H5v-2h6V5h2v6h6v2h-6Z"></svg:path>`,
})
export class CiPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPlusCircleIcon],svg[ci-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22ZM7 11v2h4v4h2v-4h4v-2h-4V7h-2v4H7Z"></svg:path>`,
})
export class CiPlusCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPlusCircleOutlineIcon],svg[ci-plus-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm-8-9.828A8 8 0 1 0 4 12v.172ZM13 17h-2v-4H7v-2h4V7h2v4h4v2h-4v4Z"></svg:path>`,
})
export class CiPlusCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPlusSquareIcon],svg[ci-plus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2ZM5 5v14h14V5H5Zm8 12h-2v-4H7v-2h4V7h2v4h4v2h-4v4Z"></svg:path>`,
})
export class CiPlusSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPrinterIcon],svg[ci-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 17c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 15.398 21 14.932 21 14v-3.803c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C19.506 7.013 18.988 7.001 18 7m0 0H6m12 0H6m12 0v-.803c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C16.48 3 15.92 3 14.8 3H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 4.52 6 5.08 6 6.2V7m0 0c-.988 0-1.507.013-1.908.218a2 2 0 0 0-.874.874C3 8.52 3 9.08 3 10.2V14c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.082 1.083C4.602 17 5.068 17 6 17m4-6h4m-5 4h6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.082C18 16.602 18 17.068 18 18s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C16.398 21 15.932 21 15 21H9c-.932 0-1.398 0-1.766-.152a2 2 0 0 1-1.082-1.082C6 19.398 6 18.932 6 18s0-1.398.152-1.766a2 2 0 0 1 1.082-1.082C7.602 15 8.068 15 9 15"></svg:path>`,
})
export class CiPrinterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciPuzzleIcon],svg[ci-puzzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7h-2.151C17.35 7 17 6.498 17 6a3 3 0 1 0-6 0c0 .498-.351 1-.849 1H8a1 1 0 0 0-1 1v2.151C7 10.65 6.498 11 6 11a3 3 0 1 0 0 6c.498 0 1 .351 1 .849V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.151c0-.498-.503-.849-1-.849a3 3 0 1 1 0-6c.497 0 1-.351 1-.849V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class CiPuzzleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciQrCodeIcon],svg[ci-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20h1m-4 0h-2v-3m3 0h3v-3h-1m-5 0h2M4 17c0-.932 0-1.398.152-1.766a2 2 0 0 1 1.082-1.082C5.602 14 6.068 14 7 14s1.398 0 1.766.152c.49.203.879.592 1.082 1.082c.152.368.152.834.152 1.766s0 1.398-.152 1.765a2 2 0 0 1-1.082 1.083C8.398 20 7.932 20 7 20s-1.398 0-1.766-.152a2 2 0 0 1-1.082-1.082C4 18.398 4 17.932 4 17M14 7c0-.932 0-1.398.152-1.766a2 2 0 0 1 1.082-1.082C15.602 4 16.068 4 17 4s1.398 0 1.766.152c.49.203.879.592 1.082 1.082C20 5.602 20 6.068 20 7s0 1.398-.152 1.765a2 2 0 0 1-1.082 1.083C18.398 10 17.932 10 17 10s-1.398 0-1.766-.152a2 2 0 0 1-1.082-1.082C14 8.398 14 7.932 14 7M4 7c0-.932 0-1.398.152-1.766a2 2 0 0 1 1.082-1.082C5.602 4 6.068 4 7 4s1.398 0 1.766.152c.49.203.879.592 1.082 1.082C10 5.602 10 6.068 10 7s0 1.398-.152 1.765a2 2 0 0 1-1.082 1.083C8.398 10 7.932 10 7 10s-1.398 0-1.766-.152a2 2 0 0 1-1.082-1.082C4 8.398 4 7.932 4 7"></svg:path>`,
})
export class CiQrCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciQrCode1Icon],svg[ci-qr-code-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11V3h8v8H3Zm3-5v2h2V6H6Zm7 5V3h8v8h-8Zm3-5v2h2V6h-2ZM3 13v8h8v-8H3Zm5 3v2H6v-2h2Zm8-3h-3v2h3v4h-1v-2h-2v4h4v-2h2v2h2v-3h-2v-1h-1v-1h3v-3h-3v2h-2v-2Z"></svg:path>`,
})
export class CiQrCode1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciRadioIcon],svg[ci-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19a7 7 0 1 1 7-7a7.008 7.008 0 0 1-7 7Zm0-12a5 5 0 1 0 0 10a5 5 0 0 0 0-10Z"></svg:path>`,
})
export class CiRadioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciRadioFillIcon],svg[ci-radio-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16"></svg:path><svg:path d="M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path></svg:g>`,
})
export class CiRadioFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciRadioFilledIcon],svg[ci-radio-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19a7 7 0 1 1 7-7a7.008 7.008 0 0 1-7 7Zm0-12a5 5 0 1 0 0 10a5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"></svg:path>`,
})
export class CiRadioFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciRadioUncheckedIcon],svg[ci-radio-unchecked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16"></svg:path>`,
})
export class CiRadioUncheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciRainbowIcon],svg[ci-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 17v-2a9 9 0 1 1 18 0v2M6 17v-2a6 6 0 0 1 12 0v2m-9 0v-2a3 3 0 1 1 6 0v2"></svg:path>`,
})
export class CiRainbowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciRedditIcon],svg[ci-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10ZM6.807 10.543a1.46 1.46 0 0 0-.608 2.787a2.562 2.562 0 0 0 0 .439c0 2.24 2.615 4.062 5.829 4.062c3.214 0 5.83-1.822 5.83-4.062a2.773 2.773 0 0 0 0-.439a1.441 1.441 0 0 0-.648-2.737h-.053A1.456 1.456 0 0 0 16.2 11a7.116 7.116 0 0 0-3.85-1.23L13 6.65l2.138.45a1 1 0 0 0 1.102.886a1 1 0 0 0-.1-1.995a.847.847 0 0 0-.113.009a1 1 0 0 0-.759.492L12.82 6a.31.31 0 0 0-.366.237l-.748 3.473a7.123 7.123 0 0 0-3.9 1.229a1.45 1.45 0 0 0-.999-.396Zm5.373 5.981h-.338a3.852 3.852 0 0 1-2.3-.773a.269.269 0 0 1 .379-.38c.56.41 1.238.631 1.933.629h.324a3.268 3.268 0 0 0 1.912-.614a.28.28 0 0 1 .4 0a.284.284 0 0 1-.005.4v-.04a3.837 3.837 0 0 1-2.305.777v.001Zm2.127-2.444h-.016l.008-.039a.939.939 0 1 1 .736-.281a.988.988 0 0 1-.694.32h-.035h.001ZM9.67 14a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"></svg:path>`,
})
export class CiRedditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciRedoIcon],svg[ci-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 8h5V3m-.29 13.357a8 8 0 1 1-.19-8.991"></svg:path>`,
})
export class CiRedoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciRefreshIcon],svg[ci-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.995 4a8 8 0 1 0 7.735 10h-2.081a6 6 0 1 1-5.654-8a5.92 5.92 0 0 1 4.223 1.78L13 11h7V4l-2.351 2.35A7.965 7.965 0 0 0 11.995 4Z"></svg:path>`,
})
export class CiRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciRefresh02Icon],svg[ci-refresh-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-7h7l-3.217 3.22A5.917 5.917 0 0 0 12 18a6 6 0 0 0 5.648-4h.018c.114-.325.201-.66.259-1h2.012A8 8 0 0 1 12 20h-.01a7.941 7.941 0 0 1-5.653-2.34L4 20Zm2.074-9H4.062a8 8 0 0 1 7.933-7H12a7.94 7.94 0 0 1 5.654 2.34L20 4v7h-7l3.222-3.22A5.916 5.916 0 0 0 12 6a6 6 0 0 0-5.648 4h-.018c-.115.325-.202.66-.259 1h-.001Z"></svg:path>`,
})
export class CiRefresh02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciRemoveMinusIcon],svg[ci-remove-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12h12"></svg:path>`,
})
export class CiRemoveMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciRemoveMinusCircleIcon],svg[ci-remove-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h8m-4 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18"></svg:path>`,
})
export class CiRemoveMinusCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciRepeatIcon],svg[ci-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 22l-4-4l4-4v3h10v-4h2v5a1 1 0 0 1-1 1H7v3Zm0-11H5V6a1 1 0 0 1 1-1h11V2l4 4l-4 4V7H7v4Z"></svg:path>`,
})
export class CiRepeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciRewindIcon],svg[ci-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12l9 5V7zm0 0V7l-9 5l9 5z"></svg:path>`,
})
export class CiRewindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciRowsIcon],svg[ci-rows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 19h11c.465 0 .697 0 .89-.039a2 2 0 0 0 1.571-1.57c.039-.194.039-.426.039-.891s0-.697-.039-.89a2 2 0 0 0-1.57-1.572C18.196 14 17.964 14 17.5 14h-11c-.465 0-.697 0-.89.038a2 2 0 0 0-1.572 1.572C4 15.803 4 16.035 4 16.5s0 .697.038.89a2 2 0 0 0 1.572 1.571c.193.039.425.039.89.039m0-9h11c.465 0 .697 0 .89-.039a2 2 0 0 0 1.571-1.57C20 8.196 20 7.964 20 7.5s0-.697-.039-.89a2 2 0 0 0-1.57-1.572C18.196 5 17.964 5 17.5 5h-11c-.465 0-.697 0-.89.038A2 2 0 0 0 4.038 6.61C4 6.803 4 7.035 4 7.5s0 .697.038.89A2 2 0 0 0 5.61 9.961c.193.039.425.039.89.039"></svg:path>`,
})
export class CiRowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciRulerIcon],svg[ci-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.344 12l2.121 2.122m.707-4.95l2.121 2.12M12 6.344l2.122 2.122M5.07 13.273l8.202-8.203c.792-.792 1.188-1.188 1.645-1.336a2 2 0 0 1 1.236 0c.456.148.852.544 1.643 1.335L18.93 6.2c.792.792 1.188 1.19 1.337 1.646c.13.402.13.834 0 1.235c-.149.457-.545.853-1.337 1.645l-8.202 8.203c-.792.792-1.189 1.188-1.645 1.336c-.402.13-.834.13-1.235 0c-.457-.148-.854-.544-1.646-1.336l-1.133-1.133c-.79-.791-1.187-1.187-1.335-1.643a2 2 0 0 1 0-1.236c.148-.457.545-.853 1.337-1.645"></svg:path>`,
})
export class CiRulerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSadIcon],svg[ci-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm0-18a8 8 0 1 0 8 8a8.009 8.009 0 0 0-8-8Zm-2 14c-.014 0-.14-.005-1-.005H8v-.066c0-.033 0-.078.007-.133a4.7 4.7 0 0 1 .472-1.743a3.6 3.6 0 0 1 1.23-1.414l.014-.009l.016-.012l.015-.008h.025l.011-.007A4.117 4.117 0 0 1 12 14a4.06 4.06 0 0 1 2.29.635c.527.355.951.843 1.23 1.414c.204.414.346.855.419 1.311c.032.188.046.339.052.432c0 .044.006.088.007.133v.062h-2v-.059c0-.055-.013-.14-.031-.246a2.698 2.698 0 0 0-.236-.747a1.638 1.638 0 0 0-.551-.645A2.11 2.11 0 0 0 12 16a2.11 2.11 0 0 0-1.18.3a1.647 1.647 0 0 0-.551.645a2.716 2.716 0 0 0-.266.993v.058H10V18Zm-1.5-6a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm6.993-.014a1.493 1.493 0 1 1 0-2.986a1.493 1.493 0 0 1 0 2.986Z"></svg:path>`,
})
export class CiSadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSaveIcon],svg[ci-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 21H7m10 0h.803c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.427.218-.987.218-2.105V9.22c0-.45 0-.675-.048-.889a2 2 0 0 0-.209-.545c-.106-.19-.256-.355-.55-.682l-2.755-3.062c-.341-.378-.514-.57-.721-.708a2 2 0 0 0-.61-.271C15.863 3 15.6 3 15.075 3H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 4.52 3 5.08 3 6.2v11.6c0 1.12 0 1.68.218 2.107c.192.377.497.683.874.875c.427.218.987.218 2.105.218H7m10 0v-3.803c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C15.48 14 14.92 14 13.8 14h-3.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7 15.52 7 16.08 7 17.2V21m8-14H9"></svg:path>`,
})
export class CiSaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSearchIcon],svg[ci-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.677 19.607l-5.715-5.716a6 6 0 0 1-7.719-9.133a6 6 0 0 1 9.134 7.718l5.715 5.716l-1.414 1.414l-.001.001ZM9.485 5a4 4 0 1 0 2.917 1.264l.605.6l-.682-.68l-.012-.012A3.972 3.972 0 0 0 9.485 5Z"></svg:path>`,
})
export class CiSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSearchMagnifyingGlassIcon],svg[ci-search-magnifying-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 15l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14"></svg:path>`,
})
export class CiSearchMagnifyingGlassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSearchSmallIcon],svg[ci-search-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.577 19l-4.767-4.766a5.035 5.035 0 0 1-6.336-7.76a5.035 5.035 0 0 1 7.761 6.335L19 17.577L17.577 19ZM10.034 7.014a3.02 3.02 0 1 0-.004 6.04a3.02 3.02 0 0 0 .004-6.04Z"></svg:path>`,
})
export class CiSearchSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSearchSmallMinusIcon],svg[ci-search-small-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.577 20l-5.767-5.766a5.035 5.035 0 0 1-6.336-7.76a5.035 5.035 0 0 1 7.761 6.335L18 18.576L16.577 20ZM8.034 7.014a3.02 3.02 0 1 0-.004 6.04a3.02 3.02 0 0 0 .004-6.04ZM21 9h-6V7h6v2Z"></svg:path>`,
})
export class CiSearchSmallMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSearchSmallPlusIcon],svg[ci-search-small-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.577 20l-5.767-5.766a5.035 5.035 0 0 1-6.336-7.76a5.035 5.035 0 0 1 7.761 6.335L18 18.576L16.577 20ZM8.034 7.014a3.02 3.02 0 1 0-.004 6.04a3.02 3.02 0 0 0 .004-6.04ZM19 11h-2V9h-2V7h2V5h2v2h2v2h-2v2Z"></svg:path>`,
})
export class CiSearchSmallPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSelectMultipleIcon],svg[ci-select-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9v10.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.598 21H15m2-13l-4 4l-2-2m-4 3.8V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C8.52 3 9.08 3 10.2 3h7.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 4.52 21 5.08 21 6.2v7.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.986.218-2.104.218h-7.607c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C7 15.48 7 14.92 7 13.8"></svg:path>`,
})
export class CiSelectMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSettingsIcon],svg[ci-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m20.35 8.923l-.366-.204l-.113-.064a2 2 0 0 1-.67-.66c-.018-.027-.034-.056-.066-.112a2 2 0 0 1-.3-1.157l.006-.425c.012-.68.018-1.022-.078-1.328a2 2 0 0 0-.417-.736c-.214-.24-.511-.412-1.106-.754l-.494-.285c-.592-.341-.889-.512-1.204-.577a2 2 0 0 0-.843.007c-.313.07-.606.246-1.191.596l-.003.002l-.354.211c-.056.034-.085.05-.113.066c-.278.155-.588.24-.907.25c-.032.002-.065.002-.13.002l-.13-.001a2 2 0 0 1-.91-.252c-.028-.015-.055-.032-.111-.066l-.357-.214c-.589-.354-.884-.53-1.199-.601a2 2 0 0 0-.846-.006c-.316.066-.612.238-1.205.582l-.003.001l-.488.283l-.005.004c-.588.34-.883.512-1.095.751a2 2 0 0 0-.415.734c-.095.307-.09.649-.078 1.333l.007.424c0 .065.003.097.002.128a2 2 0 0 1-.301 1.027c-.033.056-.048.084-.065.11a2 2 0 0 1-.675.664l-.112.063l-.361.2c-.602.333-.903.5-1.121.738a2 2 0 0 0-.43.73c-.1.307-.1.65-.099 1.338l.002.563c.001.683.003 1.024.104 1.329a2 2 0 0 0 .427.726c.218.236.516.402 1.113.734l.358.199c.061.034.092.05.121.068a2 2 0 0 1 .74.781l.067.12a2 2 0 0 1 .23 1.038l-.007.407c-.012.686-.017 1.03.079 1.337c.085.272.227.523.417.736c.214.24.512.411 1.106.754l.494.285c.593.341.889.512 1.204.577a2 2 0 0 0 .843-.007c.314-.07.607-.246 1.194-.598l.354-.212l.113-.066c.278-.154.588-.24.907-.25l.13-.001h.13c.318.01.63.097.91.252l.092.055l.376.226c.59.354.884.53 1.199.6a2 2 0 0 0 .846.008c.315-.066.613-.239 1.206-.583l.495-.287c.588-.342.883-.513 1.095-.752c.19-.213.33-.463.415-.734c.095-.305.09-.644.078-1.318l-.008-.44v-.127a2 2 0 0 1 .3-1.028l.065-.11a2 2 0 0 1 .675-.664l.11-.061l.002-.001l.361-.2c.602-.334.903-.5 1.122-.738c.194-.21.34-.46.429-.73c.1-.305.1-.647.098-1.327l-.002-.574c-.001-.683-.002-1.025-.103-1.33a2 2 0 0 0-.428-.725c-.217-.236-.515-.402-1.111-.733z"></svg:path><svg:path d="M8 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0"></svg:path></svg:g>`,
})
export class CiSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSettingsFilledIcon],svg[ci-settings-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.82 22h-3.64a1 1 0 0 1-.977-.786l-.407-1.884a8.002 8.002 0 0 1-1.535-.887l-1.837.585a1 1 0 0 1-1.17-.453L2.43 15.424a1.006 1.006 0 0 1 .193-1.239l1.425-1.3a8.1 8.1 0 0 1 0-1.772L2.623 9.816a1.006 1.006 0 0 1-.193-1.24l1.82-3.153a1 1 0 0 1 1.17-.453l1.837.585c.244-.18.498-.348.76-.5c.253-.142.513-.271.779-.386l.408-1.882A1 1 0 0 1 10.18 2h3.64a1 1 0 0 1 .976.787l.412 1.883a8.192 8.192 0 0 1 1.535.887l1.838-.585a1 1 0 0 1 1.169.453l1.82 3.153c.232.407.152.922-.193 1.239l-1.425 1.3a8.1 8.1 0 0 1 0 1.772l1.425 1.3c.345.318.425.832.193 1.239l-1.82 3.153a1 1 0 0 1-1.17.453l-1.837-.585a7.98 7.98 0 0 1-1.534.886l-.413 1.879a1 1 0 0 1-.976.786ZM11.996 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z"></svg:path>`,
})
export class CiSettingsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSettingsFutureIcon],svg[ci-settings-future-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m13.6 21.076l5.46-3.152c.584-.337.875-.505 1.087-.74a2 2 0 0 0 .416-.72c.097-.301.097-.637.097-1.307V8.843c0-.67 0-1.006-.098-1.307a2 2 0 0 0-.416-.72c-.21-.234-.5-.402-1.079-.736L13.6 2.924c-.583-.337-.874-.505-1.184-.57a2 2 0 0 0-.832 0c-.31.065-.601.233-1.184.57L4.938 6.077c-.582.336-.873.504-1.084.739a2 2 0 0 0-.416.72c-.098.302-.098.638-.098 1.311v6.305c0 .673 0 1.01.098 1.311a2 2 0 0 0 .416.72c.211.236.503.404 1.085.74l5.46 3.153c.584.337.875.505 1.185.57c.274.059.558.059.832 0c.31-.065.602-.233 1.185-.57"></svg:path><svg:path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path></svg:g>`,
})
export class CiSettingsFutureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciShareIcon],svg[ci-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 15a3.478 3.478 0 0 0 2.357-.93l6.26 3.577a3.52 3.52 0 1 0 1.026-1.717l-6.26-3.577c.066-.25.102-.509.108-.768l6.15-3.515A3.489 3.489 0 1 0 14 5.5c.004.288.043.575.117.853L8.433 9.6A3.5 3.5 0 1 0 5.5 15Z"></svg:path>`,
})
export class CiShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciShareAndroidIcon],svg[ci-share-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 13.5l6 3m0-9l-6 3M18 21a3 3 0 1 1 0-6a3 3 0 0 1 0 6M6 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6m12-6a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class CiShareAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciShareIosExportIcon],svg[ci-share-ios-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 6l3-3m0 0l3 3m-3-3v10m-5-3c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C4 11.602 4 12.068 4 13v4.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.607c1.118 0 1.677 0 2.104-.218c.376-.192.682-.498.874-.874c.218-.428.218-.987.218-2.105V13c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C18.398 10 17.932 10 17 10"></svg:path>`,
})
export class CiShareIosExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciShareOutlineIcon],svg[ci-share-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 22a3.46 3.46 0 0 1-3.383-4.352l-6.26-3.578a3.494 3.494 0 1 1 .576-4.47l5.683-3.249A3.494 3.494 0 0 1 14 5.5a3.531 3.531 0 1 1 1.142 2.57l-6.15 3.515c-.007.26-.043.517-.109.768l6.26 3.577A3.495 3.495 0 1 1 17.5 22Zm0-5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm-12-7a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm12-6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z"></svg:path>`,
})
export class CiShareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciShieldIcon],svg[ci-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.926 20.631C15.032 19.678 20 16.733 20 10.165V6.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 3 17.92 3 16.8 3H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 4.52 4 5.08 4 6.2v3.965c0 6.568 4.968 9.513 7.074 10.466c.223.102.335.152.588.195c.16.028.518.028.677 0c.252-.043.363-.093.585-.194z"></svg:path>`,
})
export class CiShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciShieldCheckIcon],svg[ci-shield-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9l-4 4l-2-2m11-.835c0 6.568-4.968 9.513-7.074 10.466l-.003.002c-.221.1-.332.15-.584.193c-.16.028-.518.028-.677 0a2 2 0 0 1-.588-.195C8.968 19.678 4 16.733 4 10.165V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 3 6.08 3 7.2 3h9.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105z"></svg:path>`,
})
export class CiShieldCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciShieldWarningIcon],svg[ci-shield-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m8-1.835c0 6.568-4.968 9.513-7.074 10.466l-.003.002c-.221.1-.332.15-.584.193c-.16.028-.518.028-.677 0a2 2 0 0 1-.588-.195C8.968 19.678 4 16.733 4 10.165V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 3 6.08 3 7.2 3h9.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105zM12.05 15v.1h-.1V15z"></svg:path>`,
})
export class CiShieldWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciShoppingBag01Icon],svg[ci-shopping-bag-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8a3 3 0 1 0 6 0M3 16.8V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v9.607c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.874c-.427.218-.986.218-2.104.218H6.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C3 18.48 3 17.92 3 16.8"></svg:path>`,
})
export class CiShoppingBag01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciShoppingBag02Icon],svg[ci-shopping-bag-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8H6.777c-1.3 0-1.949 0-2.41.265c-.406.233-.718.6-.881 1.039c-.185.499-.079 1.14.135 2.42v.002l.933 5.6c.159.95.238 1.425.475 1.782c.21.314.503.562.847.717c.39.175.872.175 1.835.175h8.578c.963 0 1.444 0 1.835-.175c.344-.155.638-.403.847-.717c.237-.357.316-.832.474-1.782l.934-5.6v-.004c.214-1.28.32-1.92.135-2.418a2 2 0 0 0-.88-1.039C19.173 8 18.523 8 17.223 8H16M8 8h8M8 8a4 4 0 1 1 8 0"></svg:path>`,
})
export class CiShoppingBag02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciShoppingCart01Icon],svg[ci-shopping-cart-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0H9.294c-.461 0-.692 0-.882-.082a1 1 0 0 1-.418-.337c-.12-.167-.167-.39-.261-.83L5.27 4.265c-.096-.451-.145-.677-.265-.845a1 1 0 0 0-.419-.338C4.397 3 4.167 3 3.707 3H3m3 3h12.873c.722 0 1.082 0 1.325.15a1 1 0 0 1 .435.579c.077.274-.022.621-.222 1.314l-1.385 4.8c-.12.415-.18.622-.3.776a1 1 0 0 1-.409.307c-.18.074-.396.074-.825.074H7.73M8 21a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class CiShoppingCart01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciShoppingCart02Icon],svg[ci-shopping-cart-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h.268c.474 0 .711 0 .905.085c.17.076.316.197.42.351c.12.174.163.407.248.871L7 16h10.422c.453 0 .68 0 .868-.08a1 1 0 0 0 .415-.331c.12-.165.171-.385.273-.826v-.003l1.57-6.8v-.001c.154-.669.232-1.004.147-1.267a1 1 0 0 0-.44-.55C20.019 6 19.676 6 18.99 6H5.5M18 21a1 1 0 1 1 0-2a1 1 0 0 1 0 2M8 21a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class CiShoppingCart02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciShortDownIcon],svg[ci-short-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 16.17l-3.59-3.58L6 14l6 6l6-6l-1.41-1.41L13 16.17V4h-2v12.17Z"></svg:path>`,
})
export class CiShortDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciShortLeftIcon],svg[ci-short-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.83 11l3.58-3.59L10 6l-6 6l6 6l1.41-1.41L7.83 13H20v-2H7.83Z"></svg:path>`,
})
export class CiShortLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciShortRightIcon],svg[ci-short-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.17 13l-3.58 3.59L14 18l6-6l-6-6l-1.41 1.41L16.17 11H4v2h12.17Z"></svg:path>`,
})
export class CiShortRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciShortUpIcon],svg[ci-short-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 7.83l3.59 3.58L18 10l-6-6l-6 6l1.41 1.41L11 7.83V20h2V7.83Z"></svg:path>`,
})
export class CiShortUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciShowIcon],svg[ci-show-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3.587 13.779c1.78 1.769 4.883 4.22 8.413 4.22s6.634-2.451 8.413-4.22c.47-.467.705-.7.854-1.159c.107-.327.107-.913 0-1.24c-.15-.458-.385-.692-.854-1.159C18.633 8.452 15.531 6 12 6c-3.53 0-6.634 2.452-8.413 4.221c-.47.467-.705.7-.854 1.159c-.107.327-.107.913 0 1.24c.15.458.384.692.854 1.159"></svg:path><svg:path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path></svg:g>`,
})
export class CiShowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciShrinkIcon],svg[ci-shrink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14h5v5m9-9h-5V5"></svg:path>`,
})
export class CiShrinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciShuffleIcon],svg[ci-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 20l3-3m0 0l-3-3m3 3h-4a5 5 0 0 1-5-5a5 5 0 0 0-5-5H3m15-3l3 3m0 0l-3 3m3-3h-4a4.98 4.98 0 0 0-3 1M3 17h4a4.98 4.98 0 0 0 3-1"></svg:path>`,
})
export class CiShuffleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSingleQuotesLIcon],svg[ci-single-quotes-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 12v3.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.053.109h1.803c.559 0 .838 0 1.052-.109c.188-.096.341-.25.437-.437C15 16.24 15 15.96 15 15.4v-1.803c0-.559 0-.838-.109-1.052a1 1 0 0 0-.437-.437C14.24 12 13.96 12 13.4 12zm0 0v-2a3 3 0 0 1 3-3"></svg:path>`,
})
export class CiSingleQuotesLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSingleQuotesRIcon],svg[ci-single-quotes-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17a3 3 0 0 0 3-3v-2m0 0V8.598c0-.559 0-.838-.109-1.052a1 1 0 0 0-.437-.437C14.24 7 13.96 7 13.4 7h-1.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C10 7.76 10 8.04 10 8.6v1.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.053.109z"></svg:path>`,
})
export class CiSingleQuotesRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSketchIcon],svg[ci-sketch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21h-.051a.712.712 0 0 1-.491-.253L2.168 9.673a.676.676 0 0 1-.149-.289c0-.013-.006-.026-.009-.039a.677.677 0 0 1 .1-.482l.019-.028L5.759 3.7a.7.7 0 0 1 .541-.3l5.65-.4h.099l5.651.4a.7.7 0 0 1 .535.294l3.637 5.144a.676.676 0 0 1 .106.577a.667.667 0 0 1-.142.259l-9.293 11.072a.716.716 0 0 1-.441.247A.74.74 0 0 1 12 21ZM7.946 9.911L12 18.663l4.054-8.752H7.946Zm9.64 0l-2.762 5.963l5-5.963h-2.238Zm-13.413 0l5 5.963l-2.759-5.963H4.173Zm13.995-3.917l-.26 2.551h2.062l-1.802-2.551ZM12 4.869L8.872 8.545h6.256L12 4.869ZM5.832 5.994L4.03 8.545h2.062l-.26-2.551Zm7.645-1.523l3.074 3.613l.349-3.373l-3.423-.24Zm-2.956 0l-3.421.24l.345 3.373l3.076-3.613Z"></svg:path>`,
})
export class CiSketchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSkipBackIcon],svg[ci-skip-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 5v14m11-8.429v2.858c0 1.827 0 2.74-.384 3.267a2 2 0 0 1-1.413.811c-.648.066-1.437-.394-3.015-1.315L10.73 14.76c-1.551-.905-2.328-1.358-2.59-1.949a2 2 0 0 1 0-1.62c.263-.591 1.041-1.045 2.598-1.954l2.45-1.428l.002-.002c1.576-.92 2.365-1.38 3.013-1.313a2 2 0 0 1 1.413.812C18 7.83 18 8.745 18 10.57"></svg:path>`,
})
export class CiSkipBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSkipForwardIcon],svg[ci-skip-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 5v14M6 10.571v2.858c0 1.827 0 2.74.384 3.267a2 2 0 0 0 1.413.811c.648.066 1.437-.394 3.016-1.315l2.449-1.428l.008-.005c1.552-.905 2.328-1.358 2.59-1.949a2 2 0 0 0 0-1.62c-.263-.591-1.041-1.045-2.598-1.954l-2.45-1.428c-1.578-.921-2.367-1.381-3.015-1.315a2 2 0 0 0-1.413.812C6 7.83 6 8.745 6 10.57"></svg:path>`,
})
export class CiSkipForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSkipNextIcon],svg[ci-skip-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18h-2V6h2v12ZM6 18V6l8.5 6L6 18Z"></svg:path>`,
})
export class CiSkipNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSkipPreviousIcon],svg[ci-skip-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 18l-8.5-6L18 6v12ZM8 18H6V6h2v12Z"></svg:path>`,
})
export class CiSkipPreviousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSlackIcon],svg[ci-slack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.641 22.024a2.107 2.107 0 0 1-2.1-2.106v-2.107h2.1a2.107 2.107 0 1 1 0 4.214v-.001Zm-5.282 0a2.107 2.107 0 0 1-2.1-2.106v-5.274a2.104 2.104 0 0 1 4.207 0v5.274a2.107 2.107 0 0 1-2.107 2.106Zm10.55-5.273h-5.268a2.106 2.106 0 1 1 0-4.213h5.268a2.106 2.106 0 1 1 0 4.213Zm-15.817 0a2.106 2.106 0 1 1 0-4.213h2.1v2.106a2.107 2.107 0 0 1-2.105 2.107h.005Zm15.817-5.289h-2.1V9.356a2.1 2.1 0 1 1 2.1 2.106Zm-5.268 0a2.107 2.107 0 0 1-2.1-2.106V4.082a2.103 2.103 0 1 1 4.207 0v5.274a2.107 2.107 0 0 1-2.107 2.106Zm-5.282 0H4.092a2.106 2.106 0 1 1 0-4.213H9.36a2.106 2.106 0 1 1 0 4.213Zm2.1-5.273h-2.1a2.106 2.106 0 1 1 2.1-2.107v2.107Z"></svg:path>`,
})
export class CiSlackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSlider01Icon],svg[ci-slider-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 15h7M3 15h2m0 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0m15-6h1M3 9h7m6.5 2.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class CiSlider01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSlider02Icon],svg[ci-slider-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 18h7M3 18h2m0 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0m15-6h1M3 12h7m3-6h8m-8 0a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0M3 6h1m12.5 8.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class CiSlider02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSlider03Icon],svg[ci-slider-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 18h11M3 18h3m0 0v2m0-2v-2m14-4h1M3 12h13m0 0v2m0-2v-2m-2-4h7M3 6h7m0 0v2m0-2V4"></svg:path>`,
})
export class CiSlider03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSmallLongDownIcon],svg[ci-small-long-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18h-3V2h-2v16H8l4 4l4-4Z"></svg:path>`,
})
export class CiSmallLongDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSmallLongLeftIcon],svg[ci-small-long-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16v-3h16v-2H6V8l-4 4l4 4Z"></svg:path>`,
})
export class CiSmallLongLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSmallLongRightIcon],svg[ci-small-long-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8v3H2v2h16v3l4-4l-4-4Z"></svg:path>`,
})
export class CiSmallLongRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSmallLongUpIcon],svg[ci-small-long-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6h3v16h2V6h3l-4-4l-4 4Z"></svg:path>`,
})
export class CiSmallLongUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSnapchatIcon],svg[ci-snapchat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.935 6.073a9.646 9.646 0 0 1 .24 3.9v.047c-.011.146-.018.278-.024.41a.62.62 0 0 0 .322.072c.29-.026.572-.108.831-.241a.812.812 0 0 1 .373-.084a1.1 1.1 0 0 1 .409.072c.321.074.56.346.59.674c.013.361-.312.674-.975.939c-.071.023-.169.061-.276.1c-.363.109-.917.289-1.073.651a.836.836 0 0 0 .1.7l.012.013a5.678 5.678 0 0 0 3.854 3.229a.4.4 0 0 1 .337.409a.515.515 0 0 1-.036.181c-.193.457-1.023.8-2.53 1.021a2.23 2.23 0 0 0-.132.459c-.025.15-.06.299-.107.444a.42.42 0 0 1-.446.325h-.024a2.45 2.45 0 0 1-.433-.059a4.802 4.802 0 0 0-1.756-.048a3.613 3.613 0 0 0-1.386.71a4.392 4.392 0 0 1-2.651 1.027c-.048 0-.1-.012-.146-.012h-.121a4.28 4.28 0 0 1-2.633-1.036a3.565 3.565 0 0 0-1.373-.711a5.514 5.514 0 0 0-.745-.06a5.06 5.06 0 0 0-1.023.12a2.27 2.27 0 0 1-.435.059a.451.451 0 0 1-.47-.337c-.048-.154-.071-.313-.107-.456a2.268 2.268 0 0 0-.133-.458c-1.543-.179-2.373-.517-2.565-.986a.4.4 0 0 1 .288-.59a5.675 5.675 0 0 0 3.854-3.232l.009-.025a.8.8 0 0 0 .1-.7c-.156-.349-.711-.529-1.07-.65a1.759 1.759 0 0 1-.279-.1c-.89-.35-1.011-.748-.962-1.024a.95.95 0 0 1 .94-.626c.106 0 .21.02.308.06c.276.142.578.224.888.241c.13.004.26-.027.375-.089l-.041-.458a9.608 9.608 0 0 1 .241-3.889a5.057 5.057 0 0 1 4.728-3.054L12.117 3h.049a5.142 5.142 0 0 1 4.769 3.073Z"></svg:path>`,
})
export class CiSnapchatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSortAscendingIcon],svg[ci-sort-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17h6m-6-5h9m5-1v8m0 0l3-3m-3 3l-3-3M4 7h12"></svg:path>`,
})
export class CiSortAscendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSortDescendingIcon],svg[ci-sort-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17h12M4 12h9M4 7h6m8 6V5m0 0l3 3m-3-3l-3 3"></svg:path>`,
})
export class CiSortDescendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSpectrumIcon],svg[ci-spectrum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 22.001l-1.2-.006c-3.725-.04-5.982-.3-7.238-1.556c-1.256-1.256-1.515-3.515-1.556-7.238L2 11.691l.006-.89c-.028-1.568.09-3.135.35-4.681a4.715 4.715 0 0 1 1.3-2.648c1.317-1.218 3.637-1.451 7.732-1.471l1.812.005c3.961.043 6.2.325 7.415 1.748C21.793 5.128 22 7.508 22 12.001l-.005 1.2c-.043 3.961-.325 6.2-1.749 7.415c-1.374 1.177-3.754 1.385-8.246 1.385Zm-4.333-15a.669.669 0 0 0-.661.569L7 7.667v3.666a.67.67 0 0 0 .568.66l.1.007h.582A3.752 3.752 0 0 1 12 15.55v.782c.002.33.242.61.568.661l.1.007h3.667a.67.67 0 0 0 .66-.569l.007-.1v-.582a8.749 8.749 0 0 0-8.494-8.748h-.841Z"></svg:path>`,
})
export class CiSpectrumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSpotifyIcon],svg[ci-spotify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.01 22A9.978 9.978 0 0 1 4.954 4.954a9.978 9.978 0 1 1 14.111 14.111A9.919 9.919 0 0 1 12.01 22Zm-1.482-6.728a9.794 9.794 0 0 1 5.227 1.384a.59.59 0 0 0 .33.1a.632.632 0 0 0 .521-.3a.7.7 0 0 0 .042-.545a.519.519 0 0 0-.293-.3a11.039 11.039 0 0 0-5.88-1.549c-1.283.01-2.56.16-3.81.449a.628.628 0 0 0-.45.749a.656.656 0 0 0 .591.472a.56.56 0 0 0 .157-.023a16.12 16.12 0 0 1 3.565-.437Zm-.19-2.976a12.648 12.648 0 0 1 6.416 1.661c.111.08.245.124.383.124c.27-.01.518-.15.668-.373a.71.71 0 0 0 .1-.586a.622.622 0 0 0-.3-.412a14.262 14.262 0 0 0-7.268-1.911a13.768 13.768 0 0 0-3.972.56a.773.773 0 0 0-.5.952a.738.738 0 0 0 .741.523a.85.85 0 0 0 .213-.025a11.66 11.66 0 0 1 3.52-.513Zm.19-3.088a14.987 14.987 0 0 1 7.376 1.7c.153.084.326.127.5.125a1 1 0 0 0 .8-.373a.985.985 0 0 0 .088-.724a.91.91 0 0 0-.436-.574a16.838 16.838 0 0 0-8.337-1.964a17.36 17.36 0 0 0-4.758.614a.915.915 0 0 0 .287 1.789a.916.916 0 0 0 .262-.038a14.7 14.7 0 0 1 4.217-.556v.001Z"></svg:path>`,
})
export class CiSpotifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSquareIcon],svg[ci-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6.2v11.6c0 1.12 0 1.68.218 2.107c.192.377.497.683.874.875c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218a2 2 0 0 0 .875-.875c.218-.427.218-.986.218-2.104V6.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C19.48 3 18.92 3 17.8 3H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 4.52 3 5.08 3 6.2"></svg:path>`,
})
export class CiSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSquareCheckIcon],svg[ci-square-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 9l-5.333 6L8 12m-5 5.8V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 3 5.08 3 6.2 3h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v11.607c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.874c-.427.218-.986.218-2.104.218H6.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C3 19.48 3 18.92 3 17.8"></svg:path>`,
})
export class CiSquareCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSquareHelpIcon],svg[ci-square-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.146 9.074a2.998 2.998 0 0 1 5.28-.838A3 3 0 0 1 12 13v1m.05 3v.1h-.1V17zM3 17.8V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 3 5.08 3 6.2 3h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v11.607c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.874c-.427.218-.986.218-2.104.218H6.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C3 19.48 3 18.92 3 17.8"></svg:path>`,
})
export class CiSquareHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSquareWarningIcon],svg[ci-square-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8.45v4m.05 3v.1h-.1v-.1zM3 17.8V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 3 5.08 3 6.2 3h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v11.607c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.874c-.427.218-.986.218-2.104.218H6.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C3 19.48 3 18.92 3 17.8"></svg:path>`,
})
export class CiSquareWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciStackOverflowIcon],svg[ci-stack-overflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.84 20.999H4.381v-6.4h1.6v4.8h11.26v-4.8h1.6v6.4Zm-3.2-3.2H7.581v-1.6h8.055v1.6h.004Zm0-2L7.781 14.16l.338-1.552l7.861 1.642l-.343 1.549h.003Zm.44-2.037l-7.28-3.4v-.006l.673-1.457l7.281 3.4l-.673 1.464l-.002-.001Zm.922-1.845l-6.17-5.14h.01l1.012-1.214l6.162 5.136L17 11.918l.003-.001Zm1.308-1.5l-4.807-6.449l1.31-.969L19.62 9.45l-1.312.971l.003-.004Z"></svg:path>`,
})
export class CiStackOverflowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciStarIcon],svg[ci-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.335 10.337a.5.5 0 0 1 .28-.864l6.004-.712a.5.5 0 0 0 .396-.287l2.532-5.49a.5.5 0 0 1 .908 0l2.532 5.49a.5.5 0 0 0 .395.287l6.004.712a.5.5 0 0 1 .28.864l-4.438 4.105a.5.5 0 0 0-.15.464l1.177 5.93a.5.5 0 0 1-.735.534l-5.275-2.953a.5.5 0 0 0-.488 0l-5.276 2.952a.5.5 0 0 1-.735-.533l1.178-5.93a.5.5 0 0 0-.15-.464z"></svg:path>`,
})
export class CiStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciStopIcon],svg[ci-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8.2v7.6c0 1.12 0 1.68.218 2.107c.192.377.497.683.874.875c.427.218.987.218 2.105.218h7.607c1.118 0 1.676 0 2.104-.218c.376-.192.682-.498.874-.875c.218-.427.218-.986.218-2.104V8.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.874-.874C17.48 5 16.92 5 15.8 5H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 6.52 5 7.08 5 8.2"></svg:path>`,
})
export class CiStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciStopCircleIcon],svg[ci-stop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0"></svg:path><svg:path d="M15 13.4v-2.8c0-.56 0-.84-.11-1.054a1 1 0 0 0-.436-.437C14.24 9 13.96 9 13.4 9h-2.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C9 9.76 9 10.04 9 10.6v2.8c0 .56 0 .84.109 1.054c.096.188.249.34.437.437C9.76 15 10.04 15 10.6 15h2.8c.56 0 .84 0 1.054-.11a1 1 0 0 0 .437-.436C15 14.24 15 13.96 15 13.4"></svg:path></svg:g>`,
})
export class CiStopCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciStopSignIcon],svg[ci-stop-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5.75 5.75l12.5 12.5M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18"></svg:path>`,
})
export class CiStopSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciStopwatchIcon],svg[ci-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8Zm0-14a6 6 0 1 0 6 6a6.007 6.007 0 0 0-6-6Zm1 7h-2V9h2v5Zm6.293-6.293l-2-2l1.414-1.414l2 2l-1.413 1.413l-.001.001ZM15 4H9V2h6v2Z"></svg:path>`,
})
export class CiStopwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciStrikethroughIcon],svg[ci-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12c.896 0 1.775.193 2.546.557q.524.248.955.587c.347.272.645.585.881.93c.432.627.644 1.336.616 2.052s-.296 1.412-.776 2.017s-1.154 1.096-1.952 1.42a6.1 6.1 0 0 1-2.583.43a5.9 5.9 0 0 1-2.497-.685c-.74-.402-1.332-.957-1.713-1.605M12 12H4m8 0h8m-3.476-5.703c-.381-.648-.973-1.202-1.714-1.605a5.9 5.9 0 0 0-2.496-.684a6.1 6.1 0 0 0-2.584.428c-.798.325-1.472.816-1.952 1.42c-.48.606-.747 1.303-.776 2.019q-.011.315.037.625"></svg:path>`,
})
export class CiStrikethroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSubLeftIcon],svg[ci-sub-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5v8H7.83l2.58-2.59L9 9l-5 5l5 5l1.41-1.41L7.83 15H20V5h-2Z"></svg:path>`,
})
export class CiSubLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSubRightIcon],svg[ci-sub-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v8h10.17l-2.58-2.59L15 9l5 5l-5 5l-1.41-1.41L16.17 15H4V5h2Z"></svg:path>`,
})
export class CiSubRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSuitcaseIcon],svg[ci-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 9.52 3 10.08 3 11.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104v-5.607c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C19.48 8 18.92 8 17.8 8H16M8 8h8M8 8a4 4 0 1 1 8 0"></svg:path>`,
})
export class CiSuitcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSunIcon],svg[ci-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4V2m0 18v2M6.414 6.414L5 5m12.728 12.728l1.414 1.414M4 12H2m18 0h2m-4.271-5.586L19.143 5M6.415 17.728L5 19.142M12 17a5 5 0 1 1 0-10a5 5 0 0 1 0 10"></svg:path>`,
})
export class CiSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSwatchesPaletteIcon],svg[ci-swatches-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 21h13.97a.53.53 0 0 0 .53-.53v-5.94M7.98 20.67l12.662-5.904a.53.53 0 0 0 .256-.703l-2.51-5.385a.53.53 0 0 0-.704-.256l-5.654 2.636m-2.148 7.346a3.5 3.5 0 0 1-6.762-1.812L6.736 3.1a.53.53 0 0 1 .648-.375l5.74 1.538a.53.53 0 0 1 .373.648zM6.5 17.6h.002v.002H6.5z"></svg:path>`,
})
export class CiSwatchesPaletteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSwichtLeftIcon],svg[ci-swicht-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 18h8a6 6 0 0 0 0-12H8a6 6 0 1 0 0 12"></svg:path><svg:path d="M8 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path></svg:g>`,
})
export class CiSwichtLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciSwichtRightIcon],svg[ci-swicht-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 18h8a6 6 0 0 0 0-12H8a6 6 0 1 0 0 12"></svg:path><svg:path d="M16 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path></svg:g>`,
})
export class CiSwichtRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTableIcon],svg[ci-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v1.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218H12m-8-5V9m0 6h8M4 9V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4H12M4 9h8m0-5h4.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V9m-8-5v5m0 0v6m0-6h8m-8 6v5m0-5h8m-8 5h4.804c1.118 0 1.677 0 2.104-.218c.376-.192.682-.498.874-.874c.218-.428.218-.986.218-2.104V15m0 0V9"></svg:path>`,
})
export class CiTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTableAddIcon],svg[ci-table-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4h4.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V9h-8m0-5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 5.52 3 6.08 3 7.2V9m8-5v5M3 9v6m0-6h8m-8 6v1.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218H11V9m-8 6h8m4 1h3m0 0h3m-3 0v3m0-3v-3"></svg:path>`,
})
export class CiTableAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTableDeleteIcon],svg[ci-table-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10h-6v11H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h-2v-3Zm-8 0H5v4h6v-4Zm0 9v-3H5v3h6Zm2-14v3h6V5h-6Zm-2 0H5v3h6V5Z"></svg:path><svg:path fill="currentColor" d="M16 18v-2h8v2h-8Z"></svg:path>`,
})
export class CiTableDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTableRemoveIcon],svg[ci-table-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4h4.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.987.218 2.105V9h-8m0-5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 5.52 3 6.08 3 7.2V9m8-5v5M3 9v6m0-6h8m-8 6v1.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218H11V9m-8 6h8m4 1h6"></svg:path>`,
})
export class CiTableRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTabletIcon],svg[ci-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V6.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 3 17.92 3 16.8 3H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 4.52 4 5.08 4 6.2"></svg:path>`,
})
export class CiTabletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTabletButtonIcon],svg[ci-tablet-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V6.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C19.48 3 18.92 3 17.8 3H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 4.52 3 5.08 3 6.2"></svg:path>`,
})
export class CiTabletButtonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTagIcon],svg[ci-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m4.748 7.645l-.331 3.644c-.05.54-.074.811-.03 1.07a2 2 0 0 0 .238.655c.131.228.325.422.711.808l5.176 5.176c.787.787 1.18 1.18 1.636 1.328c.402.131.835.131 1.237 0c.456-.148.853-.544 1.645-1.336l3.96-3.96c.792-.792 1.187-1.188 1.336-1.644a2 2 0 0 0-.001-1.236c-.148-.457-.543-.853-1.335-1.645l-5.163-5.163c-.39-.39-.584-.584-.813-.716a2 2 0 0 0-.656-.238c-.26-.045-.535-.02-1.084.03l-3.63.33c-.944.086-1.417.129-1.787.335a2 2 0 0 0-.775.775c-.205.368-.248.838-.333 1.773z"></svg:path><svg:path d="M9.713 9.713a1 1 0 1 0-1.415-1.414a1 1 0 0 0 1.415 1.414"></svg:path></svg:g>`,
})
export class CiTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTagOutlineIcon],svg[ci-tag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.897 21.968a1.987 1.987 0 0 1-1.415-.586l-7.834-7.835a1.994 1.994 0 0 1-.58-1.567l.5-6.566a1.989 1.989 0 0 1 1.846-1.841l6.566-.5c.051-.011.103-.011.154-.011a2.01 2.01 0 0 1 1.413.586l7.835 7.834a2 2 0 0 1 0 2.829l-7.07 7.071a1.987 1.987 0 0 1-1.415.586Zm-.764-16.906l-6.57.5l-.5 6.571l7.834 7.835l7.07-7.07l-7.834-7.836Zm-3.479 5.592a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"></svg:path>`,
})
export class CiTagOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTennisIcon],svg[ci-tennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.847 15.827c2.643 1.113 6.116-.372 7.98-3.505c1.974-3.317 1.397-7.226-1.29-8.731c-2.685-1.505-6.463-.036-8.437 3.282c-1.636 2.749-1.52 5.905.098 7.762L5 20.009l1.769.99l3.078-5.172Zm6.236-4.482a6.647 6.647 0 0 1-1.346 1.633V5.04c.288.051.55.142.778.27c1.375.77 2.205 3.284.568 6.035ZM11.674 14.2V5.84c.678-.47 1.386-.732 2.042-.817v8.657c-.7.37-1.41.532-2.042.52Zm-1.021-.2a2.203 2.203 0 0 1-.24-.116c-1.376-.77-2.205-3.284-.568-6.035c.248-.418.52-.785.808-1.104V14Z"></svg:path>`,
})
export class CiTennisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTennisMatchIcon],svg[ci-tennis-match-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.85 6.594c.107-.226.224-.45.353-.672l.027-.046l.015-.026c.227-.384.478-.742.748-1.075c1.05-1.29 2.395-2.18 3.77-2.562a8.06 8.06 0 0 1 .014-.005c1.304-.36 2.634-.265 3.77.371l.03.018c2.646 1.51 3.212 5.417 1.265 8.733c-1.721 2.93-4.83 4.419-7.361 3.694L17 21.01l-1.744.99L12 16.462L8.748 22L7 21.008l4.326-7.364c-.894-1.04-1.324-2.486-1.246-4.04a8.05 8.05 0 0 1 .77-3.01Zm6.938-2.545v7.916a6.662 6.662 0 0 0 1.314-1.622c1.623-2.763.79-5.268-.548-6.027a2.388 2.388 0 0 0-.766-.267Zm-1.009 8.625V4.036c-.647.087-1.347.35-2.018.825v8.34c.623.01 1.324-.153 2.018-.527Zm-4.018-.477c.15.205.318.38.5.52a2.135 2.135 0 0 0 .479.282l.012.005v-7.23a7.03 7.03 0 0 0-.783 1.089l-.015.026l-.023.039c-.06.104-.117.209-.17.313c-1.044 2.038-.775 3.895 0 4.956Z"></svg:path><svg:path fill="currentColor" d="M9.422 5.006c-.728-.567-1.502-.876-2.211-.97v8.607c.5.269 1.003.429 1.477.493a7.1 7.1 0 0 0 .277.579l-.799 1.36c-1.9-.362-3.799-1.709-5.01-3.769C1.21 7.995 1.78 4.092 4.428 2.59c1.842-1.045 4.205-.654 6.128.795a10.51 10.51 0 0 0-1.134 1.62ZM4.896 10.32a6.636 6.636 0 0 0 1.308 1.614V4.048c-.283.05-.54.14-.762.266c-1.334.756-2.165 3.251-.546 6.006Z"></svg:path>`,
})
export class CiTennisMatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTennisMatchAltIcon],svg[ci-tennis-match-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.828 11.322c-1.865 3.133-5.338 4.618-7.981 3.505L3.769 20L2 19.01l3.198-5.375C3.58 11.778 3.464 8.622 5.1 5.873c1.974-3.318 5.752-4.787 8.438-3.282a4.551 4.551 0 0 1 1.742 1.748a5.55 5.55 0 0 1 .64 1.87c.254 1.596-.091 3.43-1.092 5.113Zm-.841-4.003a4.64 4.64 0 0 0-.01-.31c-.083-1.274-.686-2.265-1.462-2.7a2.466 2.466 0 0 0-.778-.269v7.938c.07-.06.137-.122.205-.186c.41-.392.798-.872 1.14-1.447c.64-1.075.903-2.113.904-3.026Zm-3.98 5.667c.222-.075.445-.168.667-.283l.042-.022V4.024c-.655.085-1.364.346-2.042.816v8.36a3.97 3.97 0 0 0 1.334-.214Zm-2.594-.1c.076.042.156.08.24.115V5.746a6.93 6.93 0 0 0-.808 1.104c-1.637 2.751-.808 5.265.568 6.035Z"></svg:path><svg:path fill="currentColor" d="M16.716 14.681c-.91.48-1.837.61-2.586.462c-1.122.912-2.412 1.57-3.754 1.873L8 21.01l1.769.99l3.078-5.172c2.643 1.113 6.116-.372 7.98-3.505c1.974-3.317 1.397-7.226-1.29-8.731a4.693 4.693 0 0 0-2.175-.589c.283.654.467 1.354.56 2.077c.215.053.415.13.593.23c1.375.77 2.205 3.285.568 6.035a6.646 6.646 0 0 1-1.346 1.634v-4.6a10.402 10.402 0 0 1-1.02 2.67v2.633Z"></svg:path>`,
})
export class CiTennisMatchAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTerminalIcon],svg[ci-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 15h-5m-5-5l3 2.5L7 15m-4 .8V8.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v7.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.875c-.427.218-.986.218-2.104.218H6.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.875C3 17.48 3 16.92 3 15.8"></svg:path>`,
})
export class CiTerminalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTextIcon],svg[ci-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19h2m0 0h2m-2 0V5m0 0H6v1m6-1h6v1"></svg:path>`,
})
export class CiTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTextAlignCenterIcon],svg[ci-text-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 18H7m13-4H4m13-4H7m13-4H4"></svg:path>`,
})
export class CiTextAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTextAlignJustifyIcon],svg[ci-text-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 18H4m16-4H4m16-4H4m16-4H4"></svg:path>`,
})
export class CiTextAlignJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTextAlignLeftIcon],svg[ci-text-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18h10M4 14h16M4 10h10M4 6h16"></svg:path>`,
})
export class CiTextAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTextAlignRightIcon],svg[ci-text-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 18H10m10-4H4m16-4H10m10-4H4"></svg:path>`,
})
export class CiTextAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciThinBigDownIcon],svg[ci-thin-big-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 17.5L13 24l6.5-6.5l-.707-.707l-5.293 5.293V0h-1v22.086l-5.293-5.293l-.707.707Z"></svg:path>`,
})
export class CiThinBigDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciThinBigLeftIcon],svg[ci-thin-big-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 5.5L0 12l6.5 6.5l.707-.707L1.914 12.5H24v-1H1.914l5.293-5.293L6.5 5.5Z"></svg:path>`,
})
export class CiThinBigLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciThinBigRightIcon],svg[ci-thin-big-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 18.5L24 12l-6.5-6.5l-.707.707l5.293 5.293H0v1h22.086l-5.293 5.293l.707.707Z"></svg:path>`,
})
export class CiThinBigRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciThinBigUpIcon],svg[ci-thin-big-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#ciThinBigUp0)"><svg:path fill="currentColor" d="M19.5 6.5L13 0L6.5 6.5l.707.707L12.5 1.914V24h1V1.914l5.293 5.293l.707-.707Z"></svg:path></svg:g><svg:defs><svg:clippath id="ciThinBigUp0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class CiThinBigUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciThinLong02DownIcon],svg[ci-thin-long-02-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 16l3 3l3-3l-.707-.707l-1.793 1.793V5h-1v12.086l-1.793-1.793L9 16Z"></svg:path>`,
})
export class CiThinLong02DownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciThinLong02LeftIcon],svg[ci-thin-long-02-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 9l-3 3l3 3l.707-.707L6.914 12.5H19v-1H6.914l1.793-1.793L8 9Z"></svg:path>`,
})
export class CiThinLong02LeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciThinLong02RightIcon],svg[ci-thin-long-02-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 15l3-3l-3-3l-.707.707l1.793 1.793H5v1h12.086l-1.793 1.793L16 15Z"></svg:path>`,
})
export class CiThinLong02RightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciThinLong02UpIcon],svg[ci-thin-long-02-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 8l-3-3l-3 3l.707.707L11.5 6.914V19h1V6.914l1.793 1.793L15 8Z"></svg:path>`,
})
export class CiThinLong02UpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciThinLongDownIcon],svg[ci-thin-long-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 18.5L12 22l3.5-3.5l-.707-.707l-2.293 2.293V2h-1v18.086l-2.293-2.293l-.707.707Z"></svg:path>`,
})
export class CiThinLongDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciThinLongLeftIcon],svg[ci-thin-long-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 8.5L2 12l3.5 3.5l.707-.707L3.914 12.5H22v-1H3.914l2.293-2.293L5.5 8.5Z"></svg:path>`,
})
export class CiThinLongLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciThinLongRightIcon],svg[ci-thin-long-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 15.5L22 12l-3.5-3.5l-.707.707l2.293 2.293H2v1h18.086l-2.293 2.293l.707.707Z"></svg:path>`,
})
export class CiThinLongRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciThinLongUpIcon],svg[ci-thin-long-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 5.5L12 2L8.5 5.5l.707.707L11.5 3.914V22h1V3.914l2.293 2.293l.707-.707Z"></svg:path>`,
})
export class CiThinLongUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTicketVoucherIcon],svg[ci-ticket-voucher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 6H6c-.932 0-1.398 0-1.766.152a2 2 0 0 0-1.082 1.083C3 7.602 3 8.068 3 9a3 3 0 1 1 0 6c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.082 1.083C4.602 18 5.068 18 6 18h8m0-12h4c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C21 7.602 21 8.068 21 9a3 3 0 1 0 0 6c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 18 18.932 18 18 18h-4m0-12v12"></svg:path>`,
})
export class CiTicketVoucherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTimerIcon],svg[ci-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V9m9-3l-2-2m-9-2h4m-2 19a8 8 0 1 1 0-16a8 8 0 0 1 0 16"></svg:path>`,
})
export class CiTimerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTimerAddIcon],svg[ci-timer-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16v-3m0 0v-3m0 3H9m3 0h3m6-7l-2-2m-9-2h4m-2 19a8 8 0 1 1 0-16a8 8 0 0 1 0 16"></svg:path>`,
})
export class CiTimerAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTimerCloseIcon],svg[ci-timer-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 15l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-9l-2-2m-9-2h4m-2 19a8 8 0 1 1 0-16a8 8 0 0 1 0 16"></svg:path>`,
})
export class CiTimerCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTimerRemoveIcon],svg[ci-timer-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m6-7l-2-2m-9-2h4m-2 19a8 8 0 1 1 0-16a8 8 0 0 1 0 16"></svg:path>`,
})
export class CiTimerRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTransferIcon],svg[ci-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 20l-5-4l5-4v3h13v2H9v3Zm6-8V9H2V7h13V4l5 4l-5 4Z"></svg:path>`,
})
export class CiTransferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTrashEmptyIcon],svg[ci-trash-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6v11.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.987.218-2.105V6M6 6h2M6 6H4m4 0h8M8 6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.082-1.083C9.602 3 10.068 3 11 3h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C16 4.602 16 5.068 16 6m0 0h2m0 0h2"></svg:path>`,
})
export class CiTrashEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTrashFullIcon],svg[ci-trash-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10v7m-4-7v7M6 6v11.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.987.218-2.105V6M6 6h2M6 6H4m4 0h8M8 6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.082-1.083C9.602 3 10.068 3 11 3h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C16 4.602 16 5.068 16 6m0 0h2m0 0h2"></svg:path>`,
})
export class CiTrashFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTrelloIcon],svg[ci-trello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.75 21H5.25A2.253 2.253 0 0 1 3 18.75V5.25A2.253 2.253 0 0 1 5.25 3h13.5A2.253 2.253 0 0 1 21 5.25v13.5A2.253 2.253 0 0 1 18.75 21ZM6.42 5.34a1.08 1.08 0 0 0-1.08 1.08v10.215c0 .596.484 1.08 1.08 1.08h3.33a1.08 1.08 0 0 0 1.08-1.08V6.42a1.08 1.08 0 0 0-1.08-1.08H6.42Zm7.83 0a1.08 1.08 0 0 0-1.08 1.08v5.715c0 .596.484 1.08 1.08 1.08h3.33a1.08 1.08 0 0 0 1.08-1.08V6.42a1.08 1.08 0 0 0-1.08-1.08h-3.33Z"></svg:path>`,
})
export class CiTrelloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTrendingDownIcon],svg[ci-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 17l-5.846-5.937a5 5 0 0 0-.205-.203a2 2 0 0 0-2.667 0c-.047.042-.1.096-.205.203c-.105.106-.158.16-.205.202a2 2 0 0 1-2.667 0A5 5 0 0 1 8 11.062L4 7m16 10v-6m0 6h-6"></svg:path>`,
})
export class CiTrendingDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTrendingUpIcon],svg[ci-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 7l-5.846 5.938c-.105.106-.158.16-.205.202c-.76.68-1.907.68-2.667 0a5 5 0 0 1-.205-.203c-.105-.106-.158-.16-.205-.202a2 2 0 0 0-2.667 0a5 5 0 0 0-.204.202L4 17M20 7v6m0-6h-6"></svg:path>`,
})
export class CiTrendingUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTriangleIcon],svg[ci-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.379 15.2c-.91 1.575-1.364 2.363-1.296 3.01a2 2 0 0 0 .813 1.408C4.422 20 5.331 20 7.15 20h9.703c1.817 0 2.726 0 3.251-.382a2 2 0 0 0 .814-1.408c.068-.647-.386-1.435-1.296-3.01l-4.85-8.4c-.909-1.575-1.364-2.363-1.958-2.627a2 2 0 0 0-1.627 0c-.593.264-1.048 1.052-1.957 2.625z"></svg:path>`,
})
export class CiTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTriangleCheckIcon],svg[ci-triangle-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 13l-4 4l-2-2m-4.621.2c-.91 1.575-1.364 2.363-1.296 3.01a2 2 0 0 0 .813 1.408C4.422 20 5.331 20 7.15 20h9.703c1.817 0 2.726 0 3.251-.382a2 2 0 0 0 .814-1.409c.068-.646-.386-1.434-1.296-3.01l-4.85-8.4c-.909-1.574-1.364-2.362-1.958-2.626a2 2 0 0 0-1.627 0c-.593.264-1.048 1.052-1.957 2.625z"></svg:path>`,
})
export class CiTriangleCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTriangleWarningIcon],svg[ci-triangle-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v4m-7.621 2.2c-.91 1.575-1.364 2.363-1.296 3.01a2 2 0 0 0 .813 1.408C4.422 20 5.331 20 7.15 20h9.703c1.817 0 2.726 0 3.251-.382a2 2 0 0 0 .814-1.409c.068-.646-.386-1.434-1.296-3.01l-4.85-8.4c-.909-1.574-1.364-2.362-1.958-2.626a2 2 0 0 0-1.627 0c-.593.264-1.048 1.052-1.957 2.625zm7.672.8v.1h-.1V16z"></svg:path>`,
})
export class CiTriangleWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciTwitterIcon],svg[ci-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.995 6.688a4.3 4.3 0 0 0 1.887-2.374a8.59 8.59 0 0 1-2.725 1.041a4.3 4.3 0 0 0-7.316 3.915a12.184 12.184 0 0 1-8.844-4.484a4.3 4.3 0 0 0 1.328 5.73a4.276 4.276 0 0 1-1.943-.538v.054a4.294 4.294 0 0 0 3.443 4.208a4.3 4.3 0 0 1-1.938.074a4.3 4.3 0 0 0 4.009 2.98a8.61 8.61 0 0 1-5.33 1.837c-.343 0-.685-.02-1.025-.059A12.148 12.148 0 0 0 8.12 21A12.127 12.127 0 0 0 20.33 8.789c0-.186-.004-.371-.013-.555a8.718 8.718 0 0 0 2.142-2.222a8.58 8.58 0 0 1-2.464.676Z"></svg:path>`,
})
export class CiTwitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUnderlineIcon],svg[ci-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 19h12M8 5v6a4 4 0 0 0 8 0V5"></svg:path>`,
})
export class CiUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUndoIcon],svg[ci-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 8H5V3m.291 13.357a8 8 0 1 0 .188-8.991"></svg:path>`,
})
export class CiUndoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUnfoldLessIcon],svg[ci-unfold-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 19l4-4l4 4m0-14l-4 4l-4-4"></svg:path>`,
})
export class CiUnfoldLessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUnfoldMoreIcon],svg[ci-unfold-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 15l-4 4l-4-4m0-6l4-4l4 4"></svg:path>`,
})
export class CiUnfoldMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUnlinkIcon],svg[ci-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.292 21.707L11.586 13H7v-2h2.586l-2-2H7a3 3 0 1 0 0 6h3v2H7a5 5 0 0 1-1.255-9.841L2.292 3.707l1.415-1.414l18 18l-1.414 1.413v.001Zm-.156-5.814l-1.428-1.427A3 3 0 0 0 17 9h-3V7h3a5 5 0 0 1 3.137 8.893Z"></svg:path>`,
})
export class CiUnlinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUnsplashIcon],svg[ci-unsplash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21H3V10.875h5.625v5.063h6.75v-5.063H21V21ZM15.375 8.063h-6.75V3h6.75v5.063Z"></svg:path>`,
})
export class CiUnsplashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUserIcon],svg[ci-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8a5 5 0 1 1 10 0A5 5 0 0 1 7 8Zm5 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-5.657 5.343A8 8 0 0 0 4 22h2a6 6 0 1 1 12 0h2a8 8 0 0 0-13.657-5.657Z"></svg:path>`,
})
export class CiUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUser01Icon],svg[ci-user-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21a7 7 0 1 0-14 0m7-10a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class CiUser01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUser02Icon],svg[ci-user-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21c0-2.761-3.582-5-8-5s-8 2.239-8 5m8-8a5 5 0 1 1 0-10a5 5 0 0 1 0 10"></svg:path>`,
})
export class CiUser02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUser03Icon],svg[ci-user-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 19c0-2.21-2.686-4-6-4s-6 1.79-6 4m6-7a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class CiUser03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUserAddIcon],svg[ci-user-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19c0-2.21-2.686-4-6-4s-6 1.79-6 4m16-3v-3m0 0v-3m0 3h-3m3 0h3M9 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class CiUserAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUserCardIdIcon],svg[ci-user-card-id-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18h6m-6 0c-.988 0-1.507-.013-1.908-.218a2 2 0 0 1-.874-.875C3 16.48 3 15.92 3 14.8V9.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 6 5.08 6 6.2 6h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v5.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.875c-.427.218-.986.218-2.104.218H12m-6 0c0-1.105 1.343-2 3-2s3 .895 3 2m-6 0q0 0 0 0m12-4h-4m4-3h-3m-6 2a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class CiUserCardIdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUserCheckIcon],svg[ci-user-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19c0-2.21-2.686-4-6-4s-6 1.79-6 4m18-9l-4 4l-2-2m-6 0a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class CiUserCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUserCircleIcon],svg[ci-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.217 19.332A6.98 6.98 0 0 0 12 17c-2.073 0-3.935.9-5.217 2.332M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18m0-7a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class CiUserCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUserCloseIcon],svg[ci-user-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19c0-2.21-2.686-4-6-4s-6 1.79-6 4m14-5l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M9 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class CiUserCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUserHeartIcon],svg[ci-user-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19h2a4 4 0 0 1 8 0h2a6 6 0 0 0-12 0ZM4 8a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm2.002-.029A2 2 0 0 0 10 8.09V8a2 2 0 0 0-3.998-.029ZM18.339 15a22.972 22.972 0 0 0-.692-.583l-.047-.038l-.006-.004C16.438 13.432 15 12.258 15 10.799A1.8 1.8 0 0 1 16.839 9a2.008 2.008 0 0 1 1.5.667a2.009 2.009 0 0 1 1.5-.667a1.8 1.8 0 0 1 1.835 1.8c0 1.465-1.45 2.647-2.615 3.598l-.003.002l-.057.047l-.018.015c-.23.189-.448.367-.643.54l.001-.003Z"></svg:path>`,
})
export class CiUserHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUserMinusIcon],svg[ci-user-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19H2a6 6 0 0 1 12 0h-2a4 4 0 0 0-8 0Zm18-6h-8v-2h8v2ZM8 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8Zm0-6a2 2 0 1 0 2 2.09v.4V8a2 2 0 0 0-2-2Z"></svg:path>`,
})
export class CiUserMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUserPinIcon],svg[ci-user-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 22l-3-3H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-4l-3 3ZM5 4v13h5l2 2l2-2h5V4H5Zm11 10.986H8V14.6a3.82 3.82 0 0 1 4-3.6a3.82 3.82 0 0 1 4 3.6v.386ZM12 10a1.934 1.934 0 0 1-2-2a1.935 1.935 0 0 1 2-2a1.935 1.935 0 0 1 2 2a1.934 1.934 0 0 1-2 2Z"></svg:path>`,
})
export class CiUserPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUserPlusIcon],svg[ci-user-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19H2a6 6 0 0 1 12 0h-2a4 4 0 0 0-8 0Zm15-3h-2v-3h-3v-2h3V8h2v3h3v2h-3v3ZM8 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8Zm0-6a2 2 0 1 0 2 2.09v.4V8a2 2 0 0 0-2-2Z"></svg:path>`,
})
export class CiUserPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUserRemoveIcon],svg[ci-user-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19c0-2.21-2.686-4-6-4s-6 1.79-6 4m12-6h6M9 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class CiUserRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUserSquareIcon],svg[ci-user-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 21a5 5 0 0 0-10 0m10 0h.803c1.118 0 1.677 0 2.104-.218a2 2 0 0 0 .875-.875c.218-.427.218-.986.218-2.104V6.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C19.48 3 18.92 3 17.8 3H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 4.52 3 5.08 3 6.2v11.6c0 1.12 0 1.68.218 2.107c.192.377.497.683.874.875c.427.218.987.218 2.105.218H7m10 0H7m5-8a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class CiUserSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUserVoiceIcon],svg[ci-user-voice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19c0-2.21-2.686-4-6-4s-6 1.79-6 4M16.828 5.172a4 4 0 0 1 0 5.657M19 3a7.07 7.07 0 0 1 0 10M9 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class CiUserVoiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUsersIcon],svg[ci-users-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 20c0-1.742-1.67-3.223-4-3.773M15 20c0-2.21-2.686-4-6-4s-6 1.79-6 4m12-7a4 4 0 0 0 0-8m-6 8a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class CiUsersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciUsersGroupIcon],svg[ci-users-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20c0-1.657-2.239-3-5-3s-5 1.343-5 3m14-3c0-1.23-1.234-2.287-3-2.75M3 17c0-1.23 1.234-2.287 3-2.75m12-4.014a3 3 0 1 0-4-4.472m-8 4.472a3 3 0 0 1 4-4.472M12 14a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class CiUsersGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciVolumeMaxIcon],svg[ci-volume-max-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.82 4.687a10 10 0 0 1 .05 14.579M16.093 7.612a6 6 0 0 1 .03 8.748m-8.642-.953l1.676 2.073c.873 1.08 1.31 1.621 1.692 1.68a1 1 0 0 0 .891-.315c.261-.286.261-.981.261-2.37v-8.95c0-1.389 0-2.083-.26-2.37a1 1 0 0 0-.892-.315c-.383.059-.82.6-1.692 1.68L7.48 8.593c-.176.219-.264.328-.373.406a1 1 0 0 1-.32.153c-.13.036-.27.036-.551.036H4.813c-.757 0-1.135 0-1.44.1A2 2 0 0 0 2.1 10.56c-.1.306-.1.684-.1 1.44s0 1.134.1 1.44a2 2 0 0 0 1.273 1.272c.305.1.683.1 1.44.1h1.423c.28 0 .42 0 .55.036a1 1 0 0 1 .32.153c.11.078.198.188.374.406"></svg:path>`,
})
export class CiVolumeMaxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciVolumeMinIcon],svg[ci-volume-min-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.41 8.343a5 5 0 0 1 .025 7.29m-8.955-.226l1.676 2.073c.873 1.08 1.31 1.62 1.692 1.68a1 1 0 0 0 .891-.316c.261-.286.261-.98.261-2.37V7.525c0-1.39 0-2.084-.26-2.37a1 1 0 0 0-.892-.315c-.383.059-.82.599-1.692 1.68L7.48 8.593c-.176.218-.264.327-.373.406a1 1 0 0 1-.32.153c-.13.035-.27.035-.551.035H4.813c-.757 0-1.135 0-1.44.101A2 2 0 0 0 2.1 10.56c-.1.305-.1.683-.1 1.44s0 1.134.1 1.44a2 2 0 0 0 1.273 1.271c.305.101.683.101 1.44.101h1.423c.28 0 .42 0 .55.036a1 1 0 0 1 .32.152c.11.079.198.188.374.406"></svg:path>`,
})
export class CiVolumeMinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciVolumeMinusIcon],svg[ci-volume-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12h6M7.48 15.406l1.676 2.074c.873 1.08 1.31 1.62 1.692 1.68a1 1 0 0 0 .891-.316c.261-.286.261-.98.261-2.37V7.525c0-1.39 0-2.084-.26-2.37a1 1 0 0 0-.892-.315c-.383.059-.82.599-1.692 1.68L7.48 8.593c-.176.218-.264.327-.373.406a1 1 0 0 1-.32.153c-.13.035-.27.035-.551.035H4.813c-.757 0-1.135 0-1.44.101A2 2 0 0 0 2.1 10.56c-.1.305-.1.683-.1 1.44s0 1.134.1 1.44a2 2 0 0 0 1.273 1.271c.305.101.683.101 1.44.101h1.423c.28 0 .42 0 .55.036a1 1 0 0 1 .32.152c.11.079.198.188.374.406"></svg:path>`,
})
export class CiVolumeMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciVolumeOffIcon],svg[ci-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16.172 9.171l5.656 5.657m-5.656 0l5.656-5.657M7.48 15.407l1.676 2.073c.873 1.08 1.31 1.62 1.692 1.68a1 1 0 0 0 .891-.316c.261-.286.261-.98.261-2.37V7.525c0-1.39 0-2.084-.26-2.37a1 1 0 0 0-.892-.315c-.383.059-.82.599-1.692 1.68L7.48 8.593c-.176.218-.264.327-.373.406a1 1 0 0 1-.32.153c-.13.035-.27.035-.551.035H4.813c-.757 0-1.135 0-1.44.101A2 2 0 0 0 2.1 10.56c-.1.305-.1.683-.1 1.44s0 1.134.1 1.44a2 2 0 0 0 1.273 1.271c.305.101.683.101 1.44.101h1.423c.28 0 .42 0 .55.036a1 1 0 0 1 .32.152c.11.079.198.188.374.406"></svg:path>`,
})
export class CiVolumeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciVolumeOff02Icon],svg[ci-volume-off-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9.187H8.813c-.757 0-1.135 0-1.44.101A2 2 0 0 0 6.1 10.56c-.1.305-.1.683-.1 1.44s0 1.134.1 1.44a2 2 0 0 0 1.273 1.271c.305.101.683.101 1.44.101h1.423c.28 0 .42 0 .55.036a1 1 0 0 1 .32.153c.11.078.198.187.374.406l1.675 2.073c.874 1.08 1.31 1.62 1.693 1.68a1 1 0 0 0 .891-.316c.261-.286.261-.98.261-2.37V15m0-4.5V6.977c0-.936 0-1.404-.122-1.628a1 1 0 0 0-1.26-.445c-.235.097-.53.461-1.118 1.19l-.625.773M6 5l14 14"></svg:path>`,
})
export class CiVolumeOff02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciVolumePlusIcon],svg[ci-volume-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12h6m-3 3V9M7.48 15.406l1.676 2.074c.873 1.08 1.31 1.62 1.692 1.68a1 1 0 0 0 .891-.316c.261-.286.261-.98.261-2.37V7.525c0-1.39 0-2.084-.26-2.37a1 1 0 0 0-.892-.315c-.383.059-.82.599-1.692 1.68L7.48 8.593c-.176.218-.264.327-.373.406a1 1 0 0 1-.32.153c-.13.035-.27.035-.551.035H4.813c-.757 0-1.135 0-1.44.101A2 2 0 0 0 2.1 10.56c-.1.305-.1.683-.1 1.44s0 1.134.1 1.44a2 2 0 0 0 1.273 1.271c.305.101.683.101 1.44.101h1.423c.28 0 .42 0 .55.036a1 1 0 0 1 .32.152c.11.079.198.188.374.406"></svg:path>`,
})
export class CiVolumePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWarningIcon],svg[ci-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v8m.05 4v.1h-.1V18z"></svg:path>`,
})
export class CiWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWarningOutlineIcon],svg[ci-warning-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.266 20.998H2.733a1 1 0 0 1-.866-1.5l9.266-16a1 1 0 0 1 1.73 0l9.267 16a1 1 0 0 1-.865 1.5ZM12 5.998l-7.531 13h15.064L12 5.998Zm.995 9.001h-2V9.998h2v5.001Z"></svg:path><svg:path fill="currentColor" d="M11 16h2v2h-2v-2Z"></svg:path>`,
})
export class CiWarningOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWaterDropIcon],svg[ci-water-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 13.385a4.68 4.68 0 0 1-1.318 3.263A4.5 4.5 0 0 1 13 17.736m6-4.044C19 7.115 12 2 12 2S5 7.115 5 13.692c0 1.938.737 3.797 2.05 5.168S10.144 21 12 21s3.637-.77 4.95-2.14S19 15.63 19 13.691"></svg:path>`,
})
export class CiWaterDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWavyIcon],svg[ci-wavy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18.92 17.158l.128-1.599a1.92 1.92 0 0 1 .453-1.092l1.04-1.222a1.92 1.92 0 0 0 0-2.491L19.5 9.533a1.92 1.92 0 0 1-.454-1.093l-.127-1.6a1.92 1.92 0 0 0-1.762-1.761l-1.599-.128a1.9 1.9 0 0 1-1.092-.452l-1.221-1.04a1.92 1.92 0 0 0-2.492 0l-1.221 1.04c-.308.262-.69.42-1.093.453l-1.6.128m12.08 12.079a1.92 1.92 0 0 1-1.76 1.762m-.001-.001l-1.6.127a1.92 1.92 0 0 0-1.092.453l-1.221 1.04a1.92 1.92 0 0 1-2.492 0l-1.22-1.04a1.92 1.92 0 0 0-1.094-.452l-1.6-.128m.002 0a1.92 1.92 0 0 1-1.761-1.76l-.128-1.6a1.92 1.92 0 0 0-.453-1.092l-1.04-1.221a1.92 1.92 0 0 1 0-2.492l1.04-1.221c.263-.308.42-.69.452-1.093l.128-1.6m.001.002A1.92 1.92 0 0 1 6.842 5.08"></svg:path>`,
})
export class CiWavyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWavyCheckIcon],svg[ci-wavy-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 10l-4 4l-2-2m4.246-8.541l1.221 1.04c.308.262.69.42 1.092.453l1.6.128a1.92 1.92 0 0 1 1.761 1.76l.127 1.6c.033.403.192.786.454 1.093l1.04 1.22a1.92 1.92 0 0 1 0 2.492l-1.04 1.221c-.262.308-.421.69-.453 1.093l-.128 1.6a1.92 1.92 0 0 1-1.76 1.761l-1.6.128a1.92 1.92 0 0 0-1.093.452l-1.221 1.04a1.92 1.92 0 0 1-2.492 0l-1.22-1.04a1.92 1.92 0 0 0-1.094-.452l-1.6-.128a1.92 1.92 0 0 1-1.76-1.762l-.128-1.599a1.92 1.92 0 0 0-.453-1.092l-1.04-1.222a1.92 1.92 0 0 1 0-2.49l1.04-1.222c.263-.308.42-.69.452-1.093l.128-1.599A1.92 1.92 0 0 1 6.842 5.08l1.598-.127A1.92 1.92 0 0 0 9.533 4.5l1.221-1.04a1.92 1.92 0 0 1 2.492 0"></svg:path>`,
})
export class CiWavyCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWavyHelpIcon],svg[ci-wavy-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.146 9.073a2.999 2.999 0 0 1 5.844.691A3 3 0 0 1 12 13v1m.05 3v.1h-.1V17zm1.196-13.541l1.221 1.04c.308.262.69.42 1.092.453l1.6.128a1.92 1.92 0 0 1 1.761 1.76l.127 1.6c.033.403.192.786.454 1.093l1.04 1.22a1.92 1.92 0 0 1 0 2.492l-1.04 1.221c-.262.308-.421.69-.453 1.093l-.128 1.6a1.92 1.92 0 0 1-1.76 1.761l-1.6.128a1.92 1.92 0 0 0-1.093.452l-1.221 1.04a1.92 1.92 0 0 1-2.492 0l-1.22-1.04a1.92 1.92 0 0 0-1.094-.452l-1.6-.128a1.92 1.92 0 0 1-1.76-1.762l-.128-1.599a1.92 1.92 0 0 0-.453-1.092l-1.04-1.222a1.92 1.92 0 0 1 0-2.49l1.04-1.222c.263-.308.42-.69.452-1.093l.128-1.599A1.92 1.92 0 0 1 6.842 5.08l1.598-.127A1.92 1.92 0 0 0 9.533 4.5l1.221-1.04a1.92 1.92 0 0 1 2.492 0"></svg:path>`,
})
export class CiWavyHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWavyWarningIcon],svg[ci-wavy-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8.45v4m1.246-8.991l1.221 1.04c.308.262.69.42 1.092.453l1.6.128a1.92 1.92 0 0 1 1.761 1.76l.127 1.6c.033.403.192.786.454 1.093l1.04 1.22a1.92 1.92 0 0 1 0 2.492l-1.04 1.221c-.262.308-.421.69-.453 1.093l-.128 1.6a1.92 1.92 0 0 1-1.76 1.761l-1.6.128a1.92 1.92 0 0 0-1.093.452l-1.221 1.04a1.92 1.92 0 0 1-2.492 0l-1.22-1.04a1.92 1.92 0 0 0-1.094-.452l-1.6-.128a1.92 1.92 0 0 1-1.76-1.762l-.128-1.599a1.92 1.92 0 0 0-.453-1.092l-1.04-1.222a1.92 1.92 0 0 1 0-2.49l1.04-1.222c.263-.308.42-.69.452-1.093l.128-1.599A1.92 1.92 0 0 1 6.842 5.08l1.598-.127A1.92 1.92 0 0 0 9.533 4.5l1.221-1.04a1.92 1.92 0 0 1 2.492 0M12.05 15.45v.1h-.1v-.1z"></svg:path>`,
})
export class CiWavyWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWifiHighIcon],svg[ci-wifi-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.343 14.59a5 5 0 0 1 7.29-.025m-9.484-3.021a8 8 0 0 1 11.664-.04M3.223 8.816a12 12 0 0 1 17.497-.06M12 19a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class CiWifiHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWifiLowIcon],svg[ci-wifi-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.343 14.59a5 5 0 0 1 7.29-.025M12 19a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class CiWifiLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWifiMediumIcon],svg[ci-wifi-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.344 14.59a5 5 0 0 1 7.289-.025m-9.484-3.021a8 8 0 0 1 11.664-.042M12 19a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class CiWifiMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWifiNoneIcon],svg[ci-wifi-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 18a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class CiWifiNoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWifiOffIcon],svg[ci-wifi-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.85 11.544a8 8 0 0 0-2.88-1.972m5.806-.756a12 12 0 0 0-9.488-3.795m-2.945 9.57a5 5 0 0 1 4.902-1.434m-7.096-1.613A8 8 0 0 1 9.623 9.36m-6.4-.545a12 12 0 0 1 3.11-2.393M4.413 4l14.142 14.142M12 19a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class CiWifiOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWifiProblemIcon],svg[ci-wifi-problem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.343 14.59a5 5 0 0 1 7.29-.025m-9.484-3.021A8 8 0 0 1 11.96 9m-8.735-.184A12 12 0 0 1 11.959 5M16 9l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m-8 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class CiWifiProblemIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWindowIcon],svg[ci-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h.02m0 0h17.96M3.02 6C3 6.314 3 6.702 3 7.2v9.6c0 1.12 0 1.68.218 2.107c.192.377.497.683.874.875c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218a2 2 0 0 0 .875-.875c.218-.427.218-.986.218-2.104V7.197c0-.497 0-.883-.02-1.197M3.02 6c.023-.392.077-.67.198-.908c.192-.377.497-.682.874-.874C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.121.237.175.516.199.908m0 0H21"></svg:path>`,
})
export class CiWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWindowCheckIcon],svg[ci-window-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h.02m0 0h17.96M3.02 6C3 6.314 3 6.702 3 7.2v9.6c0 1.12 0 1.68.218 2.107c.192.377.497.683.874.875c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218a2 2 0 0 0 .875-.875c.218-.427.218-.986.218-2.104V7.197c0-.497 0-.883-.02-1.197M3.02 6c.023-.392.077-.67.198-.908c.192-.377.497-.682.874-.874C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.121.237.175.516.199.908m0 0H21m-6 5l-4 4l-2-2"></svg:path>`,
})
export class CiWindowCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWindowCloseIcon],svg[ci-window-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h.02m0 0h17.96M3.02 6C3 6.314 3 6.702 3 7.2v9.6c0 1.12 0 1.68.218 2.107c.192.377.497.683.874.875c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218a2 2 0 0 0 .875-.875c.218-.427.218-.986.218-2.104V7.197c0-.497 0-.883-.02-1.197M3.02 6c.023-.392.077-.67.198-.908c.192-.377.497-.682.874-.874C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.121.237.175.516.199.908m0 0H21m-11 9l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></svg:path>`,
})
export class CiWindowCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWindowCodeBlockIcon],svg[ci-window-code-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h.02m0 0h17.96M3.02 6C3 6.314 3 6.702 3 7.2v9.6c0 1.12 0 1.68.218 2.107c.192.377.497.683.874.875c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218a2 2 0 0 0 .875-.875c.218-.427.218-.986.218-2.104V7.197c0-.497 0-.883-.02-1.197M3.02 6c.023-.392.077-.67.198-.908c.192-.377.497-.682.874-.874C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.121.237.175.516.199.908m0 0H21m-7 5l2 2l-2 2m-4 0l-2-2l2-2"></svg:path>`,
})
export class CiWindowCodeBlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWindowSidebarIcon],svg[ci-window-sidebar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h.02m0 0H9M3.02 6C3 6.314 3 6.702 3 7.2v9.6c0 1.12 0 1.68.218 2.107c.192.377.497.683.874.875c.427.218.987.218 2.105.218H9M3.02 6c.023-.392.077-.67.198-.908c.192-.377.497-.682.874-.874C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.121.237.175.516.199.908M9 6h11.98M9 6v14M20.98 6H21m-.02 0c.02.314.02.7.02 1.197v9.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.875c-.427.218-.986.218-2.104.218H9"></svg:path>`,
})
export class CiWindowSidebarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciWindowTerminalIcon],svg[ci-window-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16m-4 10h-3m-5-4l2 2l-2 2m-5 .8V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 4 5.08 4 6.2 4h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v9.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.875c-.427.218-.986.218-2.104.218H6.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.875C3 18.48 3 17.92 3 16.8"></svg:path>`,
})
export class CiWindowTerminalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ciYoutubeIcon],svg[ci-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.006 19.012h-.02c-.062 0-6.265-.012-7.83-.437a2.5 2.5 0 0 1-1.764-1.765A26.494 26.494 0 0 1 1.986 12a26.646 26.646 0 0 1 .417-4.817A2.564 2.564 0 0 1 4.169 5.4c1.522-.4 7.554-.4 7.81-.4H12c.063 0 6.282.012 7.831.437c.859.233 1.53.904 1.762 1.763c.29 1.594.427 3.211.407 4.831a26.568 26.568 0 0 1-.418 4.811a2.51 2.51 0 0 1-1.767 1.763c-1.52.403-7.553.407-7.809.407Zm-2-10.007l-.005 6l5.212-3l-5.207-3Z"></svg:path>`,
})
export class CiYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
