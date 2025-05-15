import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAddChatFilledIcon],svg[lsicon-add-chat-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a6 6 0 0 0-6 6v6h6A6 6 0 0 0 8 2m-.5 3v2.5H5v1h2.5V11h1V8.5H11v-1H8.5V5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAddChatFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAddOneFilledIcon],svg[lsicon-add-one-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 7.5V3h1v4.5H13v1H8.5V13h-1V8.5H3v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAddOneFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAdjustHightFilledIcon],svg[lsicon-adjust-hight-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1h10v1H3zm5 1.293l2.354 2.353l-.708.708L8.5 4.207V7h-1V4.207L6.354 5.354l-.708-.708zM8.5 9v2.793l1.146-1.147l.708.708L8 13.707l-2.354-2.353l.708-.708L7.5 11.793V9zM3 15v-1h10v1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAdjustHightFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAdjustWidthFilledIcon],svg[lsicon-adjust-width-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 13V3h1v10zm14 0h-1V3h1zM4.207 8.5l1.147 1.146l-.708.708L2.293 8l2.353-2.354l.708.708L4.207 7.5H7v1zm7.147-2.854L13.707 8l-2.353 2.354l-.708-.708L11.793 8.5H9v-1h2.793l-1.147-1.146z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAdjustWidthFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAddChatTwoFilledIcon],svg[lsicon-add-chat-two-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 10.943-.794l.99-.143a6.501 6.501 0 1 0-12.279 3.782v3.03l3.04-.01a6.54 6.54 0 0 0 3.889.546l-.166-.987a5.54 5.54 0 0 1-3.383-.506l-.107-.054l-2.273.008v-2.265L3.1 10.5A5.5 5.5 0 0 1 2.5 8m9.5-.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m-.5 2v1h-1v1h1v1h1v-1h1v-1h-1v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAddChatTwoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAlignTxtCenterFilledIcon],svg[lsicon-align-txt-center-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM4 6h8V5H4zm2 2.5h4v-1H6zM4 11h8v-1H4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAlignTxtCenterFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAlignTxtBothFilledIcon],svg[lsicon-align-txt-both-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM12 6H4V5h8zm0 2.5H4v-1h8zM4 11h8v-1H4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAlignTxtBothFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAlignTxtLeftFilledIcon],svg[lsicon-align-txt-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM12 6H4V5h8zM9 8.5H4v-1h5zM4 11h8v-1H4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAlignTxtLeftFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAlignTxtRightFilledIcon],svg[lsicon-align-txt-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM4 6h8V5H4zm3 2.5h5v-1H7zM4 11h8v-1H4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAlignTxtRightFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAmountDollarFilledIcon],svg[lsicon-amount-dollar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m-.5 3.5v1C6.674 5.5 6 6.174 6 7s.674 1.5 1.5 1.5h1c.274 0 .5.226.5.5s-.226.5-.5.5H6v1h1.5v1h1v-1c.826 0 1.5-.674 1.5-1.5s-.674-1.5-1.5-1.5h-1A.503.503 0 0 1 7 7c0-.274.226-.5.5-.5H10v-1H8.5v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAmountDollarFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAmountDownFilledIcon],svg[lsicon-amount-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 12.363V2h1v10.363l1.662-1.524l.676.737L4.5 14.178l-2.838-2.602l.676-.737zM14 4H9V3h5zm0 3H9V6h5zm0 3.5H9v-1h5zm0 3.5H9v-1h5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAmountDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAmountDownTwoFilledIcon],svg[lsicon-amount-down-two-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.954 12.274V1.91h1v10.363l1.662-1.525l.676.737l-2.838 2.603l-2.838-2.603l.676-.737zM7.708 4.16h-6v-1h6zm0 3h-5v-1h5zm0 3h-4v-1h4zm0 3h-3v-1h3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAmountDownTwoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAmountUpFilledIcon],svg[lsicon-amount-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.5 1.91l2.838 2.604l-.676.737L5 3.726V14.09H4V3.726L2.338 5.251l-.676-.737zM13 4H8V3h5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAmountUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAmountUpTwoFilledIcon],svg[lsicon-amount-up-two-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.454 1.91l2.838 2.604l-.676.737l-1.662-1.525V14.09h-1V3.726L9.292 5.251l-.676-.737zM7.708 4.16h-3v-1h3zm0 3h-4v-1h4zm0 3h-5v-1h5zm0 3h-6v-1h6z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAmountUpTwoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAmountYuanFilledIcon],svg[lsicon-amount-yuan-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m1.146 3.646L8 5.793L6.854 4.646l-.708.708L7.293 6.5H6v1h1.5v1H6v1h1.5V11h1V9.5H10v-1H8.5v-1H10v-1H8.707l1.147-1.146z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAmountYuanFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAnnularFilledIcon],svg[lsicon-annular-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.5.993l.576.09a7.002 7.002 0 0 1 4.632 10.97l-.326.458l-3.336-3.023l.177-.342a2.5 2.5 0 0 0-1.39-3.504L8.5 5.524zm-1 0v4.531l-.333.118a2.501 2.501 0 1 0 2.083 4.524l.374-.217l2.782 3.517l-.44.303A7 7 0 1 1 6.924 1.082z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAnnularFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAnticlockwise90FilledIcon],svg[lsicon-anticlockwise-90-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.207 4l1.147 1.146l-.708.708L3.293 3.5l2.353-2.354l.708.708L5.207 3H9.5A4.5 4.5 0 0 1 14 7.5V10h-1V7.5A3.5 3.5 0 0 0 9.5 4zM2 7.5h4V14H2v-1h3v-2H2zM5 10V8.5H3V10zm2-2.5h4V14H7zm1 1V13h2V8.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAnticlockwise90FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAppsFilledIcon],svg[lsicon-apps-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5H2.5A.5.5 0 0 1 2 7zm6.5 0A.5.5 0 0 1 9 2h4.5a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5zM2 9a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5H2.5a.5.5 0 0 1-.5-.5zm6.5 0a.5.5 0 0 1 .5-.5h4.5a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAppsFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAreaChartFilledIcon],svg[lsicon-area-chart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h1v11h11v1H2zm1.5 2.598l4.474 2.796l2.073-1.554L14 9.793V12.5H3.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAreaChartFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconArrowDownFilledIcon],svg[lsicon-arrow-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.479 12.064V3.021h1v9.043l2.646-2.646l.707.707l-3.853 3.854l-3.854-3.854l.707-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconArrowDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconArrowLeftFilledIcon],svg[lsicon-arrow-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.854 4.146l.707.708L3.914 7.5h9.043v1H3.914l2.647 2.646l-.707.708L2 8z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconArrowLeftFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconArrowRightFilledIcon],svg[lsicon-arrow-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.043 7.5L9.396 4.854l.708-.708L13.957 8l-3.853 3.854l-.708-.707L12.043 8.5H3v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconArrowRightFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconArrowUpFilledIcon],svg[lsicon-arrow-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.979 2.021l3.853 3.854l-.707.707l-2.646-2.646v9.043h-1V3.936L4.832 6.582l-.707-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconArrowUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconAttachmentsFilledIcon],svg[lsicon-attachments-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.05 8A3.5 3.5 0 0 1 8 3.05L12.95 8A3.5 3.5 0 0 1 8 12.95l-1.944-1.945A1.75 1.75 0 1 1 8.53 8.53l2.299 2.298l-.708.708l-2.298-2.299a.75.75 0 1 0-1.06 1.061l1.944 1.945a2.5 2.5 0 0 0 3.536-3.536l-4.95-4.95a2.5 2.5 0 1 0-3.536 3.536l.354.353l-.707.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAttachmentsFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconBackSquareFilledIcon],svg[lsicon-back-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.656 6.938A.4.4 0 0 1 8.5 7H6V5h2.5c.656 0 .887.171.963.271c.075.099.114.28.02.579c-.092.29-.286.6-.513.833a1.5 1.5 0 0 1-.314.255M8.5 8H6v3h2.5c.336 0 .72-.173 1.067-.492c.344-.318.6-.735.698-1.13c.097-.389.033-.699-.165-.915C9.89 8.234 9.431 8 8.5 8"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zm3 2a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3c.664 0 1.28-.327 1.745-.758c.47-.432.839-1.015.99-1.62c.153-.611.092-1.301-.398-1.835q-.368-.401-.978-.6c.247-.299.46-.661.578-1.037c.142-.451.175-1.02-.178-1.484C9.908 4.204 9.29 4 8.5 4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBackSquareFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconBadgeNewFilledIcon],svg[lsicon-badge-new-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#lsiconBadgeNewFilled0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M10.062 1.654L8 .417L5.938 1.654l-2.395.211L2.6 4.078L.788 5.657L1.327 8l-.539 2.343l1.813 1.58l.942 2.212l2.395.211L8 15.583l2.062-1.237l2.395-.211l.942-2.213l1.813-1.579L14.673 8l.539-2.343l-1.813-1.58l-.942-2.212zM3 10V6h1.5s0 .014.006.049q.008.054.026.144q.038.18.108.446c.092.353.215.784.34 1.224L5 7.93V6h1v4H4.5q.002.002-.006-.049l-.026-.144a10 10 0 0 0-.108-.446a59 59 0 0 0-.34-1.224L4 8.07V10zm6-4H6.5v4H9V9H7.5v-.5h1.1v-1H7.5V7H9zm1.5 0h-1v4h1v-.5c0-.352.127-.72.307-.996c.09-.136.182-.234.259-.293a.3.3 0 0 1 .09-.054c.015.004.061.02.14.072c.1.067.216.173.326.313c.227.285.378.64.378.958v.5h1V6h-1v1.507a2 2 0 0 0-.147-.108c-.19-.128-.434-.244-.7-.244c-.254 0-.478.105-.653.23z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="lsiconBadgeNewFilled0"><svg:path fill="#fff" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class LsiconBadgeNewFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconBadgePromotionFilledIcon],svg[lsicon-badge-promotion-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.744 2.072L7.818.917L5.892 2.072l-2.237.198l-.88 2.066l-1.693 1.475L1.585 8l-.503 2.189l1.693 1.475l.88 2.066l2.237.198l1.926 1.155l1.926-1.155l2.237-.198l.88-2.066l1.694-1.475L14.05 8l.504-2.189l-1.694-1.475l-.88-2.066zM5.5 6.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M6 5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-.146 5.854l5-5l-.708-.708l-5 5zM9.5 10a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m.5-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBadgePromotionFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconBarCodeFilledIcon],svg[lsicon-bar-code-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 13V3h2v10zm3 0V3h1v10zm2.5 0V3h1v10zm2 0V3H11v10zm3.5 0V3h1v10zm2 0V3h1v10z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBarCodeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconBarFilledIcon],svg[lsicon-bar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h1v1h10v4H3v1h6v4H3v1h11v1H2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBarFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconBasketFilledIcon],svg[lsicon-basket-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.277 3.084a.5.5 0 0 0-.554 0L4.849 5H1v1h1.066l.939 6.57A.5.5 0 0 0 3.5 13h9a.5.5 0 0 0 .495-.43L13.934 6H15V5h-3.849zM8 4.101L9.349 5H6.65zM5.5 10.5v-3h1v3zm2 0v-3h1v3zm2-3v3h1v-3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBasketFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconBatchAddFilledIcon],svg[lsicon-batch-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zM2 4v9.5a.5.5 0 0 0 .5.5H12v-1H3V4zm6.5.5v2h-2v1h2v2h1v-2h2v-1h-2v-2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBatchAddFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconBatchCheckFilledIcon],svg[lsicon-batch-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zM2 4v9.5a.5.5 0 0 0 .5.5H12v-1H3V4zm9.147 1.146L8.5 7.793L7.354 6.646l-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBatchCheckFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconBbqFilledIcon],svg[lsicon-bbq-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.611 2.156a2.286 2.286 0 1 1 .349 3.52v2.559a.5.5 0 0 1-.5.5H7.962l.83.83a.5.5 0 0 1 0 .707L6.69 12.375a.5.5 0 0 1-.708 0l-.825-.825l-2.6 2.6l-.707-.707l2.6-2.6l-.825-.825a.5.5 0 0 1 0-.707l2.103-2.103a.5.5 0 0 1 .707 0l.83.83V5.541a.5.5 0 0 1 .5-.5h2.56a2.29 2.29 0 0 1 .286-2.885" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBbqFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconBedFilledIcon],svg[lsicon-bed-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5V7h.5a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-.5.5H14V14h-1v-1.5H3V14H2v-1.5h-.5A.5.5 0 0 1 1 12V7.5a.5.5 0 0 1 .5-.5H2zM3 7h1v-.5a1.5 1.5 0 1 1 3 0V7h2v-.5a1.5 1.5 0 1 1 3 0V7h1V4.5A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5zm7 0h1v-.5a.5.5 0 0 0-1 0zM5 7h1v-.5a.5.5 0 0 0-1 0z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBedFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconBottomAlignFilledIcon],svg[lsicon-bottom-align-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm5 9.5H2v-1h12z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBottomAlignFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconBuildingFilledIcon],svg[lsicon-building-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h7v5h5v7H2zm3 3.5H4v-1h1zm2 0H6v-1h1zm-3 3h1v-1H4zm3 0H6v-1h1zm-3 3h1v-1H4zm3 0H6v-1h1zM8 9v4h1v-3h2v3h1V9z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconBuildingFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCalculatorFilledIcon],svg[lsicon-calculator-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm1 2v2h6V4zm1 3v1H5V7zm2.5 0v1h-1V7zM11 8V7h-1v1zM6 9v1H5V9zm2.5 1V9h-1v1zM11 9v3h-1V9zm-5 3v-1H5v1zm1.5 0v-1h1v1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCalculatorFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCalendarFilledIcon],svg[lsicon-calendar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 2v1H2.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H11V2h-1v1H6V2zM3 4h2v1h1V4h4v1h1V4h2v2H3zm1.5 4.5v1h1v-1zm3 0v1h1v-1zm3 1v-1h1v1zm-6 1v1h1v-1zm3 1v-1h1v1zm3-1v1h1v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCalendarFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCameraFilledIcon],svg[lsicon-camera-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.136 2H5.864l-.928 1.5H1V13h14V3.5h-3.936zM8 5a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.5 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class LsiconCameraFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCenterHorizontallyFilledIcon],svg[lsicon-center-horizontally-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h2v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3h2v1h-2v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3H7v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-4H1v-1h2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCenterHorizontallyFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCheckCorrectFilledIcon],svg[lsicon-check-correct-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zm4.854 8.354l4.5-4.5l-.707-.708L7 9.293L4.854 7.146l-.708.708l2.5 2.5a.5.5 0 0 0 .708 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCheckCorrectFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCheckDisabledFilledIcon],svg[lsicon-check-disabled-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM4 8.5h8v-1H4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCheckDisabledFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCheckFilledIcon],svg[lsicon-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.354 4.354l-7 7a.5.5 0 0 1-.708 0l-4-4l.708-.708L7 10.293l6.647-6.647z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCheckFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCheckStandFilledIcon],svg[lsicon-check-stand-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zM5 14h6v-1H5zM7.5 3.5v1C6.674 4.5 6 5.174 6 6s.674 1.5 1.5 1.5h1c.274 0 .5.226.5.5s-.226.5-.5.5H6v1h1.5v1h1v-1c.826 0 1.5-.674 1.5-1.5s-.674-1.5-1.5-1.5h-1A.503.503 0 0 1 7 6c0-.274.226-.5.5-.5H10v-1H8.5v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCheckStandFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCheckboxFilledIcon],svg[lsicon-checkbox-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5zM3 3v10h10V3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCheckboxFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconChefFilledIcon],svg[lsicon-chef-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1C5.987 1 3.897 2.377 3.55 4.418a.17.17 0 0 1-.133.13A2.55 2.55 0 0 0 1.62 5.756C1.203 6.427 1 7.344 1 8.5V9h.5a2 2 0 0 1 2 2v2.475c0 .29.235.525.525.525h7.964a.51.51 0 0 0 .511-.511V11a2 2 0 0 1 2-2h.5v-.5c0-1.156-.203-2.073-.619-2.744a2.55 2.55 0 0 0-1.798-1.208a.17.17 0 0 1-.132-.13C12.103 2.377 10.014 1 8 1M4.5 13v-1h7v1zm1-5V6h1v2zm2 0V6h1v2zm2-2v2h1V6z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconChefFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconChipsFilledIcon],svg[lsicon-chips-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.987 1.064l-.324 4.381l-.163.014V2.61h-1v2.848a7 7 0 0 1-.358-.035l-.517-4.272l-.993.12l.476 3.934a6 6 0 0 1-.457-.158l-.49-2.195l-.975.217l.302 1.357a5 5 0 0 0 .388.248c.686.397 1.725.801 3.124.801s2.438-.404 3.124-.802l-.168.094l.412-1.886l-.977-.214l-.558 2.555l-.154.043l.305-4.129z"></svg:path><svg:path fill="currentColor" d="m12.985 4.412l-.071.106l-.035.046l-.38-.327l.38.327h-.001l-.001.002l-.002.002l-.006.007l-.019.02l-.064.068a4 4 0 0 1-.24.223a6 6 0 0 1-.92.653c-.814.472-2.025.937-3.626.937s-2.812-.465-3.626-.937a6 6 0 0 1-.92-.653a4 4 0 0 1-.304-.29l-.02-.021l-.005-.007l-.002-.002l-.001-.001l.378-.328l-.379.327l-.035-.046l-.071-.106l.987 10.137A.5.5 0 0 0 4.5 15h7a.5.5 0 0 0 .498-.451z"></svg:path>`,
})
export class LsiconChipsFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleAddFilledIcon],svg[lsicon-circle-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m-.5 3v3.5H4v1h3.5V12h1V8.5H12v-1H8.5V4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCircleAddFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleCloseFilledIcon],svg[lsicon-circle-close-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m2.646 3.646L8 7.293L5.354 4.646l-.708.708L7.293 8l-2.647 2.646l.708.708L8 8.707l2.646 2.647l.708-.707L8.707 8l2.647-2.646z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCircleCloseFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleHelpFilledIcon],svg[lsicon-circle-help-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6.5 6.5c0-.823.683-1.5 1.517-1.5A1.48 1.48 0 0 1 9.5 6.465v.504a.82.82 0 0 1-.621.796A1.82 1.82 0 0 0 7.5 9.53V10h1v-.47a.82.82 0 0 1 .621-.795A1.82 1.82 0 0 0 10.5 6.97v-.504C10.5 5.098 9.373 4 8.017 4C6.642 4 5.5 5.114 5.5 6.5zm1.5 4A.75.75 0 1 0 8 12a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCircleHelpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleInformationFilledIcon],svg[lsicon-circle-information-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 3a.75.75 0 1 0 0 1.5A.75.75 0 0 0 8 4M7 7.5h.5V11h-1v1h3v-1h-1V6.5H7z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCircleInformationFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleMoreFilledIcon],svg[lsicon-circle-more-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m3 0a.75.75 0 1 1 1.5 0A.75.75 0 0 1 4 8m3.25 0a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m3.25.005a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCircleMoreFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleStarFilledIcon],svg[lsicon-circle-star-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m1.287 5.478L8 3.87L6.713 6.478l-2.878.419l2.082 2.03l-.491 2.866L8 10.44l2.574 1.353l-.491-2.866l2.082-2.03z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCircleStarFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleSucceedFilledIcon],svg[lsicon-circle-succeed-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m-.646 9.354l4.5-4.5l-.708-.708L7 9.293L4.854 7.146l-.708.708l2.5 2.5a.5.5 0 0 0 .708 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCircleSucceedFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleWarningFilledIcon],svg[lsicon-circle-warning-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m-.5 2v7h1V3zm.5 8a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCircleWarningFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconClearFilledIcon],svg[lsicon-clear-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3a.5.5 0 0 0-.395.193l-3.5 4.5a.5.5 0 0 0 0 .614l3.5 4.5A.5.5 0 0 0 5 13h9.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm1.646 3.354L8.293 8L6.646 9.646l.708.708L9 8.707l1.646 1.647l.708-.708L9.707 8l1.647-1.646l-.707-.708L9 7.293L7.354 5.646z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconClearFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconClockwise90FilledIcon],svg[lsicon-clockwise-90-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.354 1.146L11.707 3.5L9.354 5.854l-.708-.708L9.793 4H6.5A3.5 3.5 0 0 0 3 7.5V10H2V7.5A4.5 4.5 0 0 1 6.5 3h3.293L8.646 1.854zM5 7.5h4V14H5v-1h3v-2H5zM8 10V8.5H6V10zm2-2.5h4V14h-4zm1 1V13h2V8.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconClockwise90FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCloseSmallFilledIcon],svg[lsicon-close-small-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 7.293l3.146-3.147l.708.708L8.707 8l3.147 3.146l-.707.707L8 8.708l-3.146 3.146l-.708-.707L7.293 8L4.146 4.854l.708-.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCloseSmallFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconClothesFilledIcon],svg[lsicon-clothes-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.76 2H6v.473c.005.01.026.059.102.147c.103.12.265.263.473.4c.422.277.952.48 1.425.48s1.004-.203 1.425-.48c.208-.137.37-.28.474-.4c.075-.088.096-.137.101-.147V2h2.24l2.312 2.89l-1.237 4.327l-1.815-.908V14h-7V8.309l-1.815.908l-1.237-4.328z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconClothesFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCloudyFilledIcon],svg[lsicon-cloudy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.282 4.068C5.996 3.37 6.948 3 8 3s2.004.37 2.718 1.068c.712.697 1.157 1.69 1.26 2.89a.07.07 0 0 0 .02.043a.1.1 0 0 0 .048.023c1.153.106 1.929.562 2.395 1.257c.448.668.559 1.484.559 2.219c0 .95-.49 1.599-1.11 1.986c-.598.374-1.322.514-1.89.514H4c-.568 0-1.292-.14-1.89-.514C1.49 12.1 1 11.452 1 10.5c0-1.192.413-2.033 1.02-2.591c.591-.544 1.323-.78 1.91-.866a.12.12 0 0 0 .067-.035a.1.1 0 0 0 .026-.05c.102-1.2.547-2.193 1.26-2.89" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCloudyFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconColumnFilledIcon],svg[lsicon-column-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h1v11h1V3h4v10h1V7h4v6h1v1H2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconColumnFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconColumnLineFilledIcon],svg[lsicon-column-line-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 13.5V2h1v11h1V7h4v6h1V9h4v4h1v1H2.5a.5.5 0 0 1-.5-.5M13.854 2.854L9.5 7.207L7.386 5.093L4.197 6.46l-.394-.92l3.811-1.633L9.5 5.793l3.646-3.647z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconColumnLineFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCommentsFilledIcon],svg[lsicon-comments-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 2H1v10h2v2.434L6.651 12H15zM3 6.75a1 1 0 1 1 2 0a1 1 0 0 1-2 0m4 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m5-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCommentsFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCompilingFilledIcon],svg[lsicon-compiling-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM9 7H7V6h2zm-4.854.646l1.5-1.5l.708.708L5.207 8l1.147 1.146l-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708m5.5-.792L10.793 8L9.646 9.146l.708.708l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5zM9 8.5H7v-1h2zM7 10h1V9H7z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCompilingFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconComputerAcrossFilledIcon],svg[lsicon-computer-across-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h5v2H5v1h6v-1H9.5v-2h5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zm6 11v-2h1v2zm0-9v3h1V4zM8 7.745a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconComputerAcrossFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconComputerExclamationFilledIcon],svg[lsicon-computer-exclamation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h5v2H5v1h6v-1H9.5v-2h5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zm6 11v-2h1v2zm.354-4.428l3.5-3.5l-.707-.707L7.5 7.512L5.854 5.865l-.708.707l2 2a.5.5 0 0 0 .708 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconComputerExclamationFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconComputerFilledIcon],svg[lsicon-computer-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-4v2H11v1H5v-1h1.5v-2h-4a.5.5 0 0 1-.5-.5zM7.5 13h1v-2h-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconComputerFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconConstituteFilledIcon],svg[lsicon-constitute-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5zM8 13h2V7.5H8zm3-5.5V13h2V7.5zm-8 1V3h4v5.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconConstituteFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconConsumeFilledIcon],svg[lsicon-consume-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m2.833-5L8 3.2L5.167 10H3.5v1h2.333L8 5.8l2.167 5.2H12.5v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconConsumeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconContractAcrossFilledIcon],svg[lsicon-contract-across-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v5h-1V2H4v12h3v1H3.5a.5.5 0 0 1-.5-.5zm8.213 3.229l-3.5 3.5a.5.5 0 0 1-.707 0l-2-2l.707-.708l1.646 1.647l3.147-3.147zM9.605 8.592C9.91 8.197 10.389 8 11 8c.61 0 1.09.197 1.395.592c.287.37.355.831.355 1.22c0 .398-.072.798-.135 1.109l-.047.223a12 12 0 0 0-.063.314l-.005.043V12h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1v-.499l-.005-.043l-.024-.132l-.039-.182l-.047-.223a5.6 5.6 0 0 1-.135-1.108c0-.39.068-.85.355-1.22" clip-rule="evenodd"></svg:path>`,
})
export class LsiconContractAcrossFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconContractExclamationFilledIcon],svg[lsicon-contract-exclamation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v5h-1V2H4v12h3v1H3.5a.5.5 0 0 1-.5-.5zM7.5 7V3.04h1V7zm-.25 1.495a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m2.355.097C9.91 8.197 10.389 8 11 8c.61 0 1.09.197 1.395.592c.287.37.355.831.355 1.22c0 .398-.072.798-.135 1.109l-.047.223a12 12 0 0 0-.063.314l-.005.043V12h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1v-.499l-.005-.043l-.024-.132l-.039-.182l-.047-.223a5.6 5.6 0 0 1-.135-1.108c0-.39.068-.85.355-1.22" clip-rule="evenodd"></svg:path>`,
})
export class LsiconContractExclamationFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconContractFilledIcon],svg[lsicon-contract-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V7h-1V2H4v12h3v1H3.5a.5.5 0 0 1-.5-.5zM11 5H5V4h6zM9 7H5V6h4zm.381 1.695C9.717 8.223 10.274 8 11 8s1.283.223 1.618.695c.313.44.352.991.318 1.466c-.034.485-.154.992-.255 1.41q-.059.243-.101.429h.92a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.92l-.101-.43c-.1-.417-.22-.924-.255-1.41c-.034-.474.005-1.025.317-1.465" clip-rule="evenodd"></svg:path>`,
})
export class LsiconContractFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconControlFilledIcon],svg[lsicon-control-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.95 4a2.5 2.5 0 0 0-4.9 0H2v1h2.05a2.5 2.5 0 0 0 4.9 0H14V4zm-1.9 7H2v1h5.05a2.5 2.5 0 0 0 4.9 0H14v-1h-2.05a2.5 2.5 0 0 0-4.9 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconControlFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCopyOneFilledIcon],svg[lsicon-copy-one-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 2.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H12v-1h1V3H6v1H5zm-3 3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCopyOneFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCopyTwoFilledIcon],svg[lsicon-copy-two-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2H5v2h1V3h7v7h-1v1h2zm-3 3H2v9h9zM6 7v2H4v1h2v2h1v-2h2V9H7V7z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCopyTwoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCouponFilledIcon],svg[lsicon-coupon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 3a.5.5 0 0 0-.5.5V6a.5.5 0 0 0 .342.474c.18.06.483.219.733.483c.242.255.425.595.425 1.043c0 .286-.07.472-.155.605c-.09.138-.215.25-.372.354c-.08.053-.16.1-.249.151l-.02.012a4 4 0 0 0-.247.15C1.316 9.365 1 9.591 1 10v2.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.342-.474a1.9 1.9 0 0 1-.733-.483A1.48 1.48 0 0 1 13.5 8c0-.286.07-.472.155-.605c.09-.138.215-.25.372-.354c.08-.053.16-.1.248-.151l.022-.012c.077-.045.166-.097.246-.15c.141-.094.457-.32.457-.728V3.5a.5.5 0 0 0-.5-.5zm4 1h1v1.5h-1zm0 2.5h1V10h-1zm1 4.5h-1v1h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCouponFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconCoverageFilledIcon],svg[lsicon-coverage-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.793 2.045a.5.5 0 0 1 .414 0l5.5 2.5a.5.5 0 0 1 0 .91L11.408 6.5l2.299 1.045a.5.5 0 0 1 0 .91L11.408 9.5l2.299 1.045a.5.5 0 0 1 0 .91l-5.5 2.5a.5.5 0 0 1-.414 0l-5.5-2.5a.5.5 0 0 1 0-.91L4.592 9.5L2.293 8.455a.5.5 0 0 1 0-.91L4.592 6.5L2.293 5.455a.5.5 0 0 1 0-.91zM5.8 10.049L3.708 11L8 12.95L12.292 11l-2.092-.95l-1.993.905a.5.5 0 0 1-.414 0zM3.708 5L8 6.95L12.292 5L8 3.05z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCoverageFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDataFilledIcon],svg[lsicon-data-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zm8 0a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM2 7a.5.5 0 0 1 .5-.5h6A.5.5 0 0 1 9 7v2a.5.5 0 0 1-.5.5h-6A.5.5 0 0 1 2 9zm.5 4a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDataFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDataScreenFilledIcon],svg[lsicon-data-screen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 4H2V3h12zM1 4.948l.55.054C3.228 5.17 6.83 5.5 8 5.5s4.772-.33 6.45-.498l.55-.054v6.105l-.55-.056C12.772 10.83 9.17 10.5 8 10.5s-4.772.33-6.45.498l-.55.055zM14 12v1H2v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDataScreenFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDatabaseFilledIcon],svg[lsicon-database-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 11.5c0 .439.202.82.491 1.123c.287.302.679.55 1.124.748c.892.397 2.09.629 3.385.629c1.296 0 2.493-.232 3.385-.629c.445-.198.837-.447 1.124-.748c.289-.304.491-.684.491-1.123V3.919l-.026-.077L12.5 4c.474-.158.474-.16.474-.16l-.001-.003l-.002-.005l-.005-.012a1 1 0 0 0-.052-.116a2 2 0 0 0-.16-.245a2.7 2.7 0 0 0-.747-.638C11.281 2.385 10.058 2 8 2s-3.28.385-4.007.821a2.7 2.7 0 0 0-.747.638a1.7 1.7 0 0 0-.2.33l-.012.03l-.005.013l-.002.005v.003h-.001s0 .002.474.16l-.474-.158L3 3.919zm9-5.96a4.3 4.3 0 0 1-.615.331c-.892.397-2.09.629-3.385.629c-1.296 0-2.493-.232-3.385-.629A4.4 4.4 0 0 1 4 5.54V7.5c0 .113.05.26.216.434c.168.177.436.36.805.523C5.758 8.785 6.811 9 8 9s2.242-.215 2.979-.543c.369-.164.637-.346.805-.523c.166-.175.216-.32.216-.434zm0 3.5a4.3 4.3 0 0 1-.615.331C10.493 9.768 9.295 10 8 10c-1.296 0-2.493-.232-3.385-.629A4.4 4.4 0 0 1 4 9.041V11.5c0 .114.05.26.216.434c.168.177.436.36.805.523c.737.328 1.79.543 2.979.543s2.242-.215 2.979-.543c.369-.164.637-.346.805-.523c.166-.175.216-.32.216-.434zM9.25 7.5a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m0 3.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDatabaseFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDealFilledIcon],svg[lsicon-deal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5V11h1v3h10.5a.5.5 0 0 0 .5-.5V5h-1V3h-1V2zm5 2.5v1C6.674 5.5 6 6.174 6 7s.674 1.5 1.5 1.5h1c.274 0 .5.226.5.5s-.226.5-.5.5H6v1h1.5v1h1v-1c.826 0 1.5-.674 1.5-1.5s-.674-1.5-1.5-1.5h-1A.503.503 0 0 1 7 7c0-.274.226-.5.5-.5H10v-1H8.5v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDealFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDecimalFilledIcon],svg[lsicon-decimal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 3.5h5v9h-5zm1 1v7h3v-7zm7-1H14v1h-3.5v3H14v5H9.5v-1H13v-3H9.5zm-2.25 8.495a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDecimalFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDecorateFilledIcon],svg[lsicon-decorate-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 2.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V5H3v3h5a.5.5 0 0 1 .5.5V10H9a.5.5 0 0 1 .5.5V14a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-3.5A.5.5 0 0 1 7 10h.5V9h-5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5H4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDecorateFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDeleteFilledIcon],svg[lsicon-delete-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 3h4V2H6zM2 5h1v8.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V5h1V4H2zm4 2v4h1V7zm3 0v4h1V7z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDeleteFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDensityLFilledIcon],svg[lsicon-density-l-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 3h14v4H1zm0 6h14v4H1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDensityLFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDensityMFilledIcon],svg[lsicon-density-m-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 2h14v3H1zm0 4h14v3H1zm0 4h14v3H1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDensityMFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDensitySFilledIcon],svg[lsicon-density-s-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 4H1V3h14zm0 2H1V5h14zm0 2H1V7h14zm0 2H1V9h14zm0 2H1v-1h14z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDensitySFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDisableFilledIcon],svg[lsicon-disable-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m3.354 9.647l-6-6l-.708.707l6 6z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDisableFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDistributionFilledIcon],svg[lsicon-distribution-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2h7v2h3.25L15 6.333V12.5h-1.063a2 2 0 0 1-3.874 0H5.437a2 2 0 1 1 0-1h4.626a2 2 0 0 1 3.874 0H14V7H9V3H3zm3.5 4H2V5h4.5zm-1 3H1V8h4.5zm-2 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2m8.5 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDistributionFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDoubleArrowDownFilledIcon],svg[lsicon-double-arrow-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m11.497 7.554l-3.5 3.5l-3.5-3.5m7-3l-3.5 3.5l-3.5-3.5"></svg:path>`,
})
export class LsiconDoubleArrowDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDoubleArrowLeftFilledIcon],svg[lsicon-double-arrow-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.207 8l3.147-3.146l-.707-.708L3.793 8l3.854 3.854l.707-.707zm3 0l3.147-3.146l-.707-.708L6.792 8l3.853 3.854l.708-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDoubleArrowLeftFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDoubleArrowRightFilledIcon],svg[lsicon-double-arrow-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.293 8L4.146 4.854l.708-.708L8.707 8l-3.853 3.854l-.708-.707zm3 0L7.146 4.854l.708-.708L11.707 8l-3.853 3.854l-.708-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDoubleArrowRightFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDoubleArrowUpFilledIcon],svg[lsicon-double-arrow-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 4.293l3.854 3.853l-.707.708L8 5.707L4.854 8.854l-.708-.708zm0 3l3.854 3.853l-.707.708L8 8.707l-3.146 3.147l-.708-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDoubleArrowUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDownFilledIcon],svg[lsicon-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 10.207l3.854-3.853l-.707-.708L8 8.793L4.854 5.646l-.708.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDownloadFilledIcon],svg[lsicon-download-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.481 9.143L7.5 1.999L8.5 2l-.019 7.137l2.43-2.43l.706.708L8.332 10.7a.5.5 0 0 1-.707 0L4.34 7.416l.707-.707zm-4.48 3.882V9.53h-1v3.996a.5.5 0 0 0 .5.5h11.05a.5.5 0 0 0 .5-.5V9.53h-1v3.496z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDownloadFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconDragFilledIcon],svg[lsicon-drag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 4.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m3.5 0a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M5.5 7.995a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m3.5 0a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M5.5 11.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m3.5 0a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDragFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconEarthFilledIcon],svg[lsicon-earth-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 1c-.516 0-1.141.474-1.667 1.613q-.216.467-.383 1.034C6.6 4.55 7.289 4.5 8 4.5s1.4.051 2.05.147a8 8 0 0 0-.383-1.034C9.142 2.474 8.516 2 8 2m3.142 2.858a9 9 0 0 0-.567-1.664a6 6 0 0 0-.444-.805a6.02 6.02 0 0 1 3.48 3.48a6 6 0 0 0-.805-.444a9 9 0 0 0-1.664-.567M10.3 5.7A13 13 0 0 0 8 5.5c-.817 0-1.593.072-2.3.2c-.128.707-.2 1.483-.2 2.3s.072 1.593.201 2.299c.706.129 1.482.201 2.299.201s1.593-.072 2.299-.201A13 13 0 0 0 10.5 8c0-.817-.072-1.593-.201-2.299m1.054 4.35C11.45 9.4 11.5 8.71 11.5 8s-.051-1.4-.147-2.05q.567.167 1.034.383C13.526 6.859 14 7.484 14 8s-.474 1.142-1.613 1.667q-.467.216-1.034.383m-1.303 1.302c-.65.096-1.339.147-2.05.147s-1.4-.051-2.05-.147q.167.567.383 1.034C6.859 13.526 7.484 14 8 14s1.142-.474 1.667-1.613q.216-.467.383-1.034m-4.18 2.258a6.02 6.02 0 0 1-3.48-3.48c.248.165.52.313.804.444a9 9 0 0 0 1.664.567c.148.611.34 1.172.567 1.664c.13.284.28.556.445.805m-1.223-3.56a8 8 0 0 1-1.034-.384C2.474 9.142 2 8.516 2 8s.474-1.141 1.613-1.667q.467-.216 1.034-.383C4.55 6.6 4.5 7.289 4.5 8s.051 1.4.147 2.05" clip-rule="evenodd"></svg:path>`,
})
export class LsiconEarthFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconEditFilledIcon],svg[lsicon-edit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.639 1.646a.5.5 0 0 1 .707 0l2.121 2.122a.5.5 0 0 1 0 .707l-6.32 6.32l-3.432.743l.567-3.403a.5.5 0 0 1 .14-.272zM14 14H2v-1h12z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconEditFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconEducationFilledIcon],svg[lsicon-education-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 1.958l6.5 2.709V9.5h-1V5.809l-.5.25v5.799l-.338.115l-.162-.473l.162.473l-.003.001l-.007.002l-.026.01l-.098.032a31 31 0 0 1-1.557.465c-.928.25-2.11.517-2.97.517s-2.044-.268-2.971-.517a31 31 0 0 1-1.656-.498l-.026-.009l-.007-.002H3.34l.16-.474l-.16.473l-.34-.116V6.06L.8 4.96zM4 6.56v4.579a29 29 0 0 0 1.29.38c.929.25 1.996.482 2.71.482s1.781-.232 2.71-.483a30 30 0 0 0 1.29-.38V6.56l-4 2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconEducationFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconEmailSendFilledIcon],svg[lsicon-email-send-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-10v-1H14V4.6L9.777 7.417a.5.5 0 0 1-.554 0L5 4.601V6.5a.5.5 0 0 1-.5.5H1V6h3zM7 8v1H2V8zm1 3H3v-1h5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconEmailSendFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconEquipmentFilledIcon],svg[lsicon-equipment-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2a.5.5 0 0 0-.5.5V13H2v1h6v-1.5H4V3h8v1h1V2.5a.5.5 0 0 0-.5-.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zm1.5 7.5h1v-1h-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconEquipmentFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconExclamationFilledIcon],svg[lsicon-exclamation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 10V3h1v7zm-.25 1.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconExclamationFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconExportFilledIcon],svg[lsicon-export-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h5.063v1H3v10h10V9h1v5H2zm7.969.08h4.043V6h-1V3.788L8.275 8.525l-.707-.707l4.737-4.737H9.969z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconExportFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFileAviFilledIcon],svg[lsicon-file-avi-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 12 4v2h-1V5H8.5a.5.5 0 0 1-.5-.5V2H3v12h8v-.5h1v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm7 .707V4h1.793zm-.95 5.216A3 3 0 0 1 8 7h1c0-.002 0 .017.007.069q.01.07.029.182c.025.15.063.34.11.56c.092.44.216.982.34 1.512A166 166 0 0 0 9.892 11h.21c.117-.511.247-1.049.371-1.56q.1-.405.188-.778c.1-.42.187-.796.249-1.096c.065-.318.091-.5.091-.566h1c0 .185-.05.47-.111.767c-.066.317-.155.705-.256 1.128q-.091.382-.192.793c-.154.638-.317 1.308-.453 1.92A.5.5 0 0 1 10.5 12h-1a.5.5 0 0 1-.485-.379l-.043-.174a174 174 0 0 1-.459-1.895a71 71 0 0 1-.346-1.535a18 18 0 0 1-.117-.594m-3.035-.044A.5.5 0 0 1 5.5 7h1a.5.5 0 0 1 .485.379l.043.174a176 176 0 0 1 .459 1.895c.125.533.251 1.084.346 1.535c.047.225.088.429.117.594c.026.151.05.31.05.423H7l-.007-.069l-.029-.182a13 13 0 0 0-.11-.56a49 49 0 0 0-.15-.689H5.296a49 49 0 0 0-.151.689c-.047.22-.085.41-.11.56a4 4 0 0 0-.036.25L4 12c0-.113.024-.272.05-.423c.03-.165.07-.369.117-.594c.095-.451.221-1.002.346-1.535a166 166 0 0 1 .459-1.895zM5.89 8a187 187 0 0 0-.363 1.5h.944A171 171 0 0 0 6.109 8zM14 12h-1V7h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFileAviFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFileCdrFilledIcon],svg[lsicon-file-cdr-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 12 4v2h-1V5H8.5a.5.5 0 0 1-.5-.5V2H3v12h8v-.5h1v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm7 .707V4h1.793zM4 8a1 1 0 0 1 1-1h2v1H5v3h2v1H5a1 1 0 0 1-1-1zm3.5-.5A.5.5 0 0 1 8 7h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H8a.5.5 0 0 1-.5-.5zm1 .5v3H10V8zm3-1h3a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-.5.5h-.103l.037.064c.129.226.263.477.367.71c.092.207.199.483.199.726h-1v.002s-.003-.025-.02-.084a2 2 0 0 0-.093-.238a7 7 0 0 0-.321-.62a15 15 0 0 0-.333-.55l-.005-.01H12.5V12h-1zm1 2.5H14V8h-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFileCdrFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFileCsvFilledIcon],svg[lsicon-file-csv-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 1 2 1h6.5a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 11.5 4v2h-1V5H8a.5.5 0 0 1-.5-.5V2h-5v12h8v-.5h1v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zm7 .707V4h1.793zm2.55 5.216A3 3 0 0 1 11 7h1q-.001.004.007.069q.01.07.029.182c.026.15.063.34.11.56c.092.44.216.982.34 1.512s.25 1.043.343 1.425l.062.252h.218l.062-.252c.093-.382.218-.896.342-1.425c.125-.53.249-1.072.341-1.512c.047-.22.085-.41.11-.56q.02-.111.029-.182L14 7h1c0 .113-.024.272-.05.423c-.03.165-.07.369-.117.594a70 70 0 0 1-.346 1.535a167 167 0 0 1-.459 1.895l-.043.174A.5.5 0 0 1 13.5 12h-1a.5.5 0 0 1-.485-.379l-.043-.174a192 192 0 0 1-.459-1.895a70 70 0 0 1-.346-1.535a18 18 0 0 1-.117-.594M4 8a1 1 0 0 1 1-1h2v1H5v3h2v1H5a1 1 0 0 1-1-1zm3.5 0a1 1 0 0 1 1-1h2v1h-2v1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2v-1h2v-1h-1a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFileCsvFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFileDocFilledIcon],svg[lsicon-file-doc-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 12 4v2h-1V5H8.5a.5.5 0 0 1-.5-.5V2H3v12h8v-.5h1v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm7 .707V4h1.793zM4 7.5a.5.5 0 0 1 .5-.5h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a.5.5 0 0 1-.5-.5zM5 8v3h1.5V8zm3 0a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm2.5 0H9v3h1.5zM12 8a1 1 0 0 1 1-1h2v1h-2v3h2v1h-2a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFileDocFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFileExportFilledIcon],svg[lsicon-file-export-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l3.5 3.5A.5.5 0 0 1 13 5v2.5h-1v-2H9a.5.5 0 0 1-.5-.5V2H4v12h5.5v1h-6a.5.5 0 0 1-.5-.5zm6.5 1.207L11.293 4.5H9.5zm2.854 6.44l2 2a.5.5 0 0 1 0 .707l-2 2l-.708-.708L12.793 12H8v-1h4.793l-1.147-1.146z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFileExportFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFileImportFilledIcon],svg[lsicon-file-import-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l3.5 3.5A.5.5 0 0 1 13 5v2.5h-1v-2H9a.5.5 0 0 1-.5-.5V2H4v12h5.5v1h-6a.5.5 0 0 1-.5-.5zm6.5 1.207L11.293 4.5H9.5zm-2.854 7.94l2-2l.708.707L8.207 10.5H13v1H8.207l1.147 1.146l-.708.708l-2-2a.5.5 0 0 1 0-.708" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFileImportFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFileJpgFilledIcon],svg[lsicon-file-jpg-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 12 4v2h-1V5H8.5a.5.5 0 0 1-.5-.5V2H3v12h8v-.5h1v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm7 .707V4h1.793zM5 8H4V7h3v1H6v3.5a.5.5 0 0 1-.5.5H4v-1h1zm2.5-1v5h1v-1.5h2a.5.5 0 0 0 .5-.5V7.5a.5.5 0 0 0-.5-.5zm1 2.5H10V8H8.5zm3-2A.5.5 0 0 1 12 7h3v1h-2.5v3H14v-1h-1V9h1.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFileJpgFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFileMovFilledIcon],svg[lsicon-file-mov-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 12 4v2h-1V5H8.5a.5.5 0 0 1-.5-.5V2H3v12h8v-.5h1v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm7 .707V4h1.793zm3.05 5.216A3 3 0 0 1 12 7h1q-.001.005.007.069q.01.07.029.182c.026.15.063.34.11.56c.092.44.216.982.34 1.512l.008.03l.166-.69c.1-.421.187-.797.249-1.097c.065-.318.091-.5.091-.566h1c0 .185-.05.47-.111.767c-.066.317-.155.705-.256 1.128q-.091.382-.192.793c-.154.638-.317 1.308-.453 1.92a.5.5 0 0 1-.973.013l-.043-.174a192 192 0 0 1-.459-1.895a70 70 0 0 1-.346-1.535a18 18 0 0 1-.117-.594M4 7.5a.5.5 0 0 1 .5-.5H5a.5.5 0 0 1 .464.314L6 8.654l.536-1.34A.5.5 0 0 1 7 7h.5a.5.5 0 0 1 .5.5V12H7V8.846l-.536 1.34a.5.5 0 0 1-.928 0L5 8.846V12H4zm4.5 0A.5.5 0 0 1 9 7h2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5zm1 .5v3h1V8z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFileMovFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFileMovieFilledIcon],svg[lsicon-file-movie-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM3 4V3h3.191l-.5 1zm3.809 0l.5-1h1.882l-.5 1zm3 0l.5-1H13v1zM6.724 6.553A.5.5 0 0 0 6 7v4a.5.5 0 0 0 .724.447l4-2a.5.5 0 0 0 0-.894z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7 7.809v2.382L9.382 9z"></svg:path>`,
})
export class LsiconFileMovieFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFileMp3FilledIcon],svg[lsicon-file-mp3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M9.5 10H11V7.5H9V12m3-4.5h2.5v2m0 0h-2m2 0v2H12m-7.5.5V7.5H5l1 3l1-3h.5V12m4 1.5v1h-9v-13h6m0 0v3h3m-3-3H9L11.5 4v.5m0 0V6"></svg:path>`,
})
export class LsiconFileMp3FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFileMp4FilledIcon],svg[lsicon-file-mp4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 12 4v2h-1V5H8.5a.5.5 0 0 1-.5-.5V2H3v12h8v-.5h1v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm7 .707V4h1.793zM4 7.5a.5.5 0 0 1 .5-.5H5a.5.5 0 0 1 .474.342L6 8.919l.526-1.577A.5.5 0 0 1 7 7h.5a.5.5 0 0 1 .5.5V12H7V9.081l-.526 1.577a.5.5 0 0 1-.948 0L5 9.081V12H4zM9 7h2a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-.5.5H9.5V12h-1V7.5A.5.5 0 0 1 9 7m.5 1v1.5h1V8zm2.5 2V7h1v2.5h.5V7h1v2.5h.5v1h-.5V12h-1v-1.5h-1a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFileMp4FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFilePdfFilledIcon],svg[lsicon-file-pdf-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 12 4v2h-1V5H8.5a.5.5 0 0 1-.5-.5V2H3v12h8v-.5h1v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm7 .707V4h1.793zM4 7.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-.5.5H5V12H4zm1 2h1.5V8H5zM8 12V7h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm1-4v3h1.5V8zm3-.5a.5.5 0 0 1 .5-.5H15v1h-2v1.5h2v1h-2V12h-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFilePdfFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFilePngFilledIcon],svg[lsicon-file-png-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 12 4v2h-1V5H8.5a.5.5 0 0 1-.5-.5V2H3v12h8v-.5h1v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm7 .707V4h1.793zM4 7v5h1v-1.5h2a.5.5 0 0 0 .5-.5V7.5A.5.5 0 0 0 7 7zm1 2.5h1.5V8H5zM9 7v.5c0 .266.09.56.258.89s.398.662.646 1.003l.096.131V7h1v5h-1v-.5c0-.102-.058-.28-.238-.574c-.138-.224-.312-.46-.507-.727L9 9.849V12H8V7zm2.5.5A.5.5 0 0 1 12 7h3v1h-2.5v3H14v-1h-1V9h1.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFilePngFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFilePptFilledIcon],svg[lsicon-file-ppt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 12 4v2h-1V5H8.5a.5.5 0 0 1-.5-.5V2H3v12h8v-.5h1v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm7 .707V4h1.793zM4 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-.5.5H5V12H4zM5 8v1.5h1V8zm3-.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-.5.5H9V12H8zM9 8v1.5h1V8zm3-1h3v1h-1v4h-1V8h-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFilePptFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFileRarFilledIcon],svg[lsicon-file-rar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 12 4v2h-1V5H8.5a.5.5 0 0 1-.5-.5V2H3v12h8v-.5h1v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm7 .707V4h1.793zM4 7.5a.5.5 0 0 1 .5-.5H6a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.712.958l.078.18c.093.221.19.465.263.692c.069.21.138.463.138.676h-1c0-.04-.021-.16-.089-.366a8 8 0 0 0-.234-.612c-.084-.2-.17-.388-.235-.528H5V12H4zm1 2h1V8H5zm3.51-2.104A.5.5 0 0 1 9 7h1a.5.5 0 0 1 .486.384l.042.173a142 142 0 0 1 .438 1.896c.12.532.24 1.083.332 1.534c.045.225.084.429.111.594c.025.151.048.309.048.419h-1a5 5 0 0 0-.034-.255a41 41 0 0 0-.249-1.245H8.83c-.08.353-.15.67-.2.93a4 4 0 0 0-.088.57h-1c0-.182.048-.465.106-.763c.063-.316.149-.705.245-1.127l.183-.793c.148-.638.304-1.308.434-1.921M9.062 9.5h.89A178 178 0 0 0 9.606 8h-.202c-.108.492-.228 1.007-.342 1.5M12 7.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.642.934c.195.396.409.964.409 1.572h-1c0-.393-.144-.804-.31-1.138a4 4 0 0 0-.206-.368H13V12h-1zm1 2h1V8h-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFileRarFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFileTxtFilledIcon],svg[lsicon-file-txt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 12 4v2h-1V5H8.5a.5.5 0 0 1-.5-.5V2H3v12h8v-.5h1v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm7 .707V4h1.793zM8.875 9.5c-.298.4-.593.803-.827 1.167a5.5 5.5 0 0 0-.374.664c-.091.2-.174.436-.174.669h1a.8.8 0 0 1 .084-.253q.102-.225.305-.54c.173-.267.383-.561.611-.87c.228.309.438.603.61.87q.203.315.306.54a1.3 1.3 0 0 1 .082.233l.002.015v.004l1 .001c0-.233-.083-.469-.174-.669a5.5 5.5 0 0 0-.374-.664a21 21 0 0 0-.827-1.167c.298-.4.593-.803.827-1.167c.147-.228.278-.454.374-.664c.091-.2.174-.435.174-.669h-1v.005l-.002.015l-.013.053a1.3 1.3 0 0 1-.069.18q-.102.225-.305.54a17 17 0 0 1-.611.87a17 17 0 0 1-.61-.87a4.5 4.5 0 0 1-.306-.54A.8.8 0 0 1 8.5 7h-1c0 .234.083.469.174.669c.096.21.227.436.374.664c.234.364.529.767.827 1.167M4 7h3v1H6v4H5V8H4zm8 0h3v1h-1v4h-1V8h-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFileTxtFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFileXlsFilledIcon],svg[lsicon-file-xls-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 12 4v2h-1V5H8.5a.5.5 0 0 1-.5-.5V2H3v12h8v-.5h1v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm7 .707V4h1.793zM5.4 9.5c-.312.468-.617.929-.856 1.314c-.143.23-.268.443-.359.618a3 3 0 0 0-.118.255A.9.9 0 0 0 4 12h1a.3.3 0 0 1-.007.067l.007-.02q.018-.049.073-.155c.073-.14.182-.327.32-.55c.173-.278.382-.6.607-.939c.225.34.434.66.606.939c.139.223.248.41.321.55a2 2 0 0 1 .08.175A.3.3 0 0 1 7 12h1a.9.9 0 0 0-.067-.313a3 3 0 0 0-.118-.255a10 10 0 0 0-.359-.618c-.24-.385-.544-.846-.855-1.314c.311-.468.616-.929.855-1.314c.143-.23.268-.443.359-.618q.07-.132.118-.255A.9.9 0 0 0 8 7H7c0-.034.005-.057.007-.067L7 6.953a2 2 0 0 1-.073.155a9 9 0 0 1-.32.55c-.173.278-.382.6-.607.939c-.225-.34-.434-.66-.606-.939a9 9 0 0 1-.321-.55a2 2 0 0 1-.08-.175Q4.998 6.95 5 7H4c0 .13.042.248.067.313c.031.081.073.168.118.255c.09.175.216.387.359.618c.24.385.544.846.855 1.314M9.5 11V7h-1v4.5a.5.5 0 0 0 .5.5h1.5v-1zm2-3a1 1 0 0 1 1-1h2v1h-2v1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2v-1h2v-1h-1a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFileXlsFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFileZipFilledIcon],svg[lsicon-file-zip-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l2.5 2.5A.5.5 0 0 1 12 4v2h-1V5H8.5a.5.5 0 0 1-.5-.5V2H3v12h8v-.5h1v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm7 .707V4h1.793zM6.35 8H4V7h3a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.116.32L5.151 11H7.5v1h-3a.5.5 0 0 1-.5-.5V11a.5.5 0 0 1 .116-.32zm2.15 4V7h1v5zm2-5v5h1v-1.5h2a.5.5 0 0 0 .5-.5V7.5a.5.5 0 0 0-.5-.5zm1 2.5H13V8h-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFileZipFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFilterFilledIcon],svg[lsicon-filter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.111.314L9.364 9.177V13.5a.5.5 0 0 1-.672.47l-2.728-1a.5.5 0 0 1-.328-.47V9.177L2.111 4.814A.5.5 0 0 1 2 4.5zm12 7v1h-4v-1zm-1 3h-3v-1h3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFilterFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFindFilledIcon],svg[lsicon-find-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 4H2V3h12zM9.456 6.005a2.451 2.451 0 1 0 0 4.902a2.451 2.451 0 0 0 0-4.902m-3.451 2.45a3.451 3.451 0 1 1 6.219 2.062l1.717 1.716l-.708.707l-1.716-1.716a3.451 3.451 0 0 1-5.512-2.768M5 8.5H2v-1h3zM6 13H2v-1h4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFindFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFireFilledIcon],svg[lsicon-fire-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5 .579l.772.502C7.552 2.237 8.253 3.6 8.49 4.708q.048.223.07.427C8.803 4.722 9 4.178 9 3.5V2.45l.815.662c1.715 1.393 2.646 2.673 3.142 3.796c.499 1.127.543 2.06.543 2.717C13.5 12.605 11.026 15 8 15s-5.5-2.395-5.5-5.375c0-1.134.164-1.973.422-2.664c.255-.679.593-1.192.902-1.66l.009-.014c.314-.476.596-.907.808-1.474C4.851 3.251 5 2.533 5 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFireFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFitScreenFilledIcon],svg[lsicon-fit-screen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5H4v1H2v2H1zM12 3h2.5a.5.5 0 0 1 .5.5V6h-1V4h-2zM3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zM2 12v-2H1v2.5a.5.5 0 0 0 .5.5H4v-1zm13-2v2.5a.5.5 0 0 1-.5.5H12v-1h2v-2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFitScreenFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFlagFilledIcon],svg[lsicon-flag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .424.765L11.59 6.5l2.334 3.735A.5.5 0 0 1 13.5 11H4v4H3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFlagFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFolderFilesFilledIcon],svg[lsicon-folder-files-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v3h.5a.5.5 0 0 1 .5.5v6.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5H3zM3 5v2.5h10v-1H7.5a.5.5 0 0 1-.354-.146L5.793 5zm9 .5V3H4v1h2a.5.5 0 0 1 .354.146L7.707 5.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFolderFilesFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFolderFilledIcon],svg[lsicon-folder-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 .354.146L7.707 4.5H13.5a.5.5 0 0 1 .5.5v7.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5zM3 4v2.5h10v-1H7.5a.5.5 0 0 1-.354-.146L5.793 4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFolderFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFormatPainterFilledIcon],svg[lsicon-format-painter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V5h3.5a.5.5 0 0 1 .5.5V7H2V5.5a.5.5 0 0 1 .5-.5H6zM2 8v5.5a.5.5 0 0 0 .5.5h3v-3.5h1V14h1V9.5h1V14h1v-3.5h1V14h3a.5.5 0 0 0 .5-.5V8z"></svg:path>`,
})
export class LsiconFormatPainterFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconFrontSquareFilledIcon],svg[lsicon-front-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zm3 2a.5.5 0 0 0-.5.5V12h1V8h3.5V7H6V5h4.5V4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconFrontSquareFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconGatherFilledIcon],svg[lsicon-gather-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h4v1H3v5.5h3a.5.5 0 0 1 .5.5a1.5 1.5 0 1 0 3 0a.5.5 0 0 1 .5-.5h3V3H9.5V2h4a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5zm5.5 3.793V2h1v4.293l1.146-1.147l.708.708l-2 2a.5.5 0 0 1-.708 0l-2-2l.708-.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconGatherFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconGiftFilledIcon],svg[lsicon-gift-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.49 2.995c-.14.09-.144.16-.144.17c0 .6.523 1.066 1.314 1.41a6.4 6.4 0 0 0 1.37.41h.004a7 7 0 0 0-.405-1.132c-.38-.768-1.004-1.022-1.517-1.019a1.2 1.2 0 0 0-.621.161M4.385 5c-.561-.408-1.038-.999-1.038-1.836c0-.457.282-.802.601-1.008c.322-.209.734-.32 1.159-.322c.868-.005 1.859.441 2.42 1.576c.125.254.304.706.474 1.317c.17-.611.35-1.063.475-1.317c.553-1.12 1.545-1.563 2.41-1.563c.424 0 .838.106 1.161.31c.321.204.608.546.608 1.007c0 .551-.316.995-.663 1.32c-.203.192-.44.364-.684.516H13.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-.423v4.5a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5V9h-.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5zm2.879.964A.5.5 0 0 1 7.077 6H3v2h4.49a13.5 13.5 0 0 0-.227-2.036M8.509 8H13V6H8.923a.5.5 0 0 1-.186-.036c-.112.59-.2 1.275-.228 2.036m.464-3.04a10 10 0 0 0 1.34-.548c.384-.195.74-.418.994-.656c.259-.244.347-.442.347-.592c0-.006-.002-.072-.143-.161a1.2 1.2 0 0 0-.626-.156c-.52 0-1.144.258-1.514 1.006a7 7 0 0 0-.398 1.107" clip-rule="evenodd"></svg:path>`,
})
export class LsiconGiftFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconGoodsFilledIcon],svg[lsicon-goods-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4H4zm4 2V3h1v2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 8v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8h-3v2h-1V8H6v2H5V8z"></svg:path>`,
})
export class LsiconGoodsFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconGoodsSearchFilledIcon],svg[lsicon-goods-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.207 2H4.793L2 4.793V14h12V4.793zm-7.5 2.5l1.5-1.5h5.586l1.5 1.5zM8 7a2 2 0 1 0 1.016 3.723l1.13 1.13l.708-.707l-1.13-1.13A2 2 0 0 0 8 7" clip-rule="evenodd"></svg:path>`,
})
export class LsiconGoodsSearchFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconGotoFilledIcon],svg[lsicon-goto-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.874 1.81l.707.707l-1.514 1.514h5.464a4.5 4.5 0 1 1 0 9H3.063v-1H9.53a3.5 3.5 0 1 0 0-7H3.967l1.702 1.702l-.707.707l-2.86-2.859z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconGotoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconHandShakeFilledIcon],svg[lsicon-hand-shake-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 4a2 2 0 1 1 4 0a2 2 0 0 1-4 0M9 4a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-.61 7.875A.76.76 0 0 1 8 12a.76.76 0 0 1-.39-.125a2 2 0 0 1-.25-.186a8 8 0 0 1-.556-.538a51 51 0 0 1-1.451-1.604c-.307-.347-.6-.68-.853-.957V14h-1V7.5a.53.53 0 0 1 .644-.526c.09.019.16.057.197.079q.066.04.117.08c.13.1.29.26.458.436c.322.337.746.818 1.18 1.31l.091.103c.47.533.948 1.071 1.337 1.476c.192.199.353.356.476.461c.123-.105.284-.262.476-.461c.39-.405.866-.943 1.337-1.476l.09-.103a52 52 0 0 1 1.18-1.31c.169-.176.33-.335.459-.435q.052-.042.117-.081a.7.7 0 0 1 .197-.08a.53.53 0 0 1 .644.527V14h-1V8.59c-.253.278-.546.61-.853.957l-.085.096c-.467.53-.958 1.085-1.366 1.508c-.202.211-.394.4-.557.537c-.08.069-.165.135-.249.187m-.54-.842l.01-.006zm.29-.006l.01.006z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconHandShakeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconHazeFilledIcon],svg[lsicon-haze-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 3H2V2h12zM8 6.533a3.5 3.5 0 0 0-.674-.694C6.671 5.325 5.815 5 5 5a3 3 0 0 0 0 6c.815 0 1.671-.325 2.326-.839A3.4 3.4 0 0 0 8 9.467c.19.264.422.497.674.694c.655.514 1.511.839 2.326.839a3 3 0 1 0 0-6c-.815 0-1.671.325-2.326.839A3.4 3.4 0 0 0 8 6.533M14 13v1H2v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconHazeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconHeavyRainFilledIcon],svg[lsicon-heavy-rain-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.282 4.068C5.996 3.37 6.948 3 8 3s2.004.37 2.718 1.068c.712.697 1.157 1.69 1.26 2.89a.07.07 0 0 0 .02.043a.1.1 0 0 0 .048.023c1.153.106 1.929.562 2.395 1.257c.448.668.559 1.484.559 2.219c0 .95-.49 1.599-1.11 1.986c-.598.374-1.322.514-1.89.514h-1v-1h1c.431 0 .958-.11 1.36-.361c.38-.238.64-.59.64-1.139c0-.66-.105-1.237-.39-1.662c-.266-.398-.74-.734-1.655-.818a1.08 1.08 0 0 1-.974-.977L11.479 7l-.498.043c-.085-1-.448-1.756-.963-2.26C9.505 4.281 8.811 4 8 4s-1.505.28-2.018.783c-.515.504-.878 1.26-.963 2.26a1.106 1.106 0 0 1-.944.99c-.462.067-.981.246-1.378.612C2.314 8.997 2 9.56 2 10.5c0 .55.26.901.64 1.139c.402.25.928.361 1.36.361h1v1H4c-.568 0-1.292-.14-1.89-.514C1.49 12.1 1 11.452 1 10.5c0-1.192.413-2.033 1.02-2.591c.591-.544 1.323-.78 1.91-.866a.12.12 0 0 0 .067-.035a.1.1 0 0 0 .026-.05c.102-1.2.547-2.193 1.26-2.89M5.13 13.82l.776-2.898l.966.258l-.776 2.898zm2 0l.776-2.898l.966.258l-.776 2.898zm2 0l.776-2.898l.966.258l-.776 2.898z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconHeavyRainFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconHeavySnowFilledIcon],svg[lsicon-heavy-snow-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 2.793V1h1v1.793l1.146-1.147l.707.708L8.5 4.207v2.927l2.535-1.463l.678-2.532l.966.258l-.42 1.566l1.553-.896l.5.866l-1.553.896l1.566.42l-.258.966l-2.532-.678L9 8l2.535 1.463l2.532-.678l.258.966l-1.566.42l1.553.896l-.5.866l-1.553-.896l.42 1.566l-.966.258l-.678-2.532L8.5 8.866v2.927l1.853 1.853l-.707.708L8.5 13.207V15h-1v-1.793l-1.147 1.147l-.707-.708L7.5 11.793V8.866l-2.535 1.463l-.678 2.532l-.966-.258l.42-1.566l-1.553.896l-.5-.866l1.552-.896l-1.566-.42l.26-.966l2.531.678L7 8L4.465 6.537l-2.532.678l-.259-.966l1.566-.42l-1.552-.896l.5-.866l1.552.896l-.42-1.566l.967-.258l.678 2.532L7.5 7.134V4.207L5.646 2.354l.707-.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconHeavySnowFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconHightLessenFilledIcon],svg[lsicon-hight-lessen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 1l2.354 2.354l-.708.707L8.5 2.914V5.5h-1V2.914L6.354 4.061l-.708-.707zM3 6.5h10v1H3zm0 2h10v1H3zm5.5 4.793l1.146-1.147l.708.707L8 15.208l-2.354-2.354l.708-.707L7.5 13.293V10.5h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconHightLessenFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconHomeFilledIcon],svg[lsicon-home-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.268 2.078a.5.5 0 0 0-.536 0l-5.5 3.5A.5.5 0 0 0 2 6v7.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.232-.422zM5 11h6v-1H5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconHomeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconHospitalFilledIcon],svg[lsicon-hospital-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.768 1.833a2.5 2.5 0 0 0-3.536 0L1.697 6.368a2.5 2.5 0 0 0 0 3.536l4.535 4.535a2.5 2.5 0 0 0 3.536 0l4.535-4.535a2.5 2.5 0 0 0 0-3.536zM7.5 5v2.5H5v1h2.5V11h1V8.5H11v-1H8.5V5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconHospitalFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconHouseFilledIcon],svg[lsicon-house-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.27 2.08a.5.5 0 0 0-.54 0l-7 4.5l.54.84l.73-.468V13.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V6.952l.73.469l.54-.842zM6.5 9a.5.5 0 0 0-.5.5V13h1v-3h2v3h1V9.5a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconHouseFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconIncubatorFilledIcon],svg[lsicon-incubator-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 2a.5.5 0 0 0-.354.146l-2.5 2.5A.5.5 0 0 0 1 5v8.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.146-.354l-2.5-2.5A.5.5 0 0 0 12 2zM2.707 4.5l1.5-1.5h7.586l1.5 1.5zm1.793 2a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m3 2.5a1.5 1.5 0 0 1 2.684-.921l.789-.615a2.5 2.5 0 1 0 .193 2.787L10.3 9.75A1.5 1.5 0 0 1 7.5 9" clip-rule="evenodd"></svg:path>`,
})
export class LsiconIncubatorFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconInfuseOneFilledIcon],svg[lsicon-infuse-one-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .354.146l3.5 3.5A.5.5 0 0 1 13 5v2.5h-1v-2H9a.5.5 0 0 1-.5-.5V2H4v12h5.5v1h-6a.5.5 0 0 1-.5-.5zm5.646 9.646l2-2l.708.708L10.207 11H14.5v1h-4.293l1.147 1.146l-.708.708l-2-2a.5.5 0 0 1 0-.708" clip-rule="evenodd"></svg:path>`,
})
export class LsiconInfuseOneFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconInfuseTwoFilledIcon],svg[lsicon-infuse-two-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7 8.293l5.646-5.647l.708.708L7.707 9H11v1H6.5a.5.5 0 0 1-.5-.5V5h1zm-3.999 4.733V9.529h-1v3.997a.5.5 0 0 0 .5.5h11.05a.5.5 0 0 0 .5-.5V9.529h-1v3.497z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconInfuseTwoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconIntegralDistributeFilledIcon],svg[lsicon-integral-distribute-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 11.5c0 .439.202.82.491 1.123c.287.302.679.55 1.124.748c.892.397 2.09.629 3.385.629v-1c-1.19 0-2.242-.215-2.979-.543c-.369-.164-.637-.346-.805-.523C4.05 11.759 4 11.614 4 11.5v-.96q.284.184.615.331c.892.397 2.09.629 3.385.629v-1c-1.19 0-2.242-.215-2.979-.543c-.369-.164-.637-.346-.805-.523C4.05 9.259 4 9.114 4 9v-.96q.284.184.615.331C5.507 8.768 6.705 9 8 9c1.296 0 2.493-.232 3.385-.629q.332-.147.615-.33V9h1V3.919l-.026-.077L12.5 4c.474-.158.474-.16.474-.16l-.001-.003l-.002-.005l-.005-.012a1 1 0 0 0-.052-.116a2 2 0 0 0-.16-.245a2.7 2.7 0 0 0-.747-.638C11.281 2.385 10.058 2 8 2s-3.28.385-4.007.821a2.7 2.7 0 0 0-.747.638a1.7 1.7 0 0 0-.2.33l-.012.03l-.005.013l-.002.005v.003h-.001s0 .002.474.16l-.474-.158L3 3.919zm9-5.96a4.3 4.3 0 0 1-.615.331c-.892.397-2.09.629-3.385.629c-1.296 0-2.493-.232-3.385-.629A4.4 4.4 0 0 1 4 5.54v.96c0 .113.05.26.216.434c.168.177.436.36.805.523C5.758 7.785 6.811 8 8 8s2.242-.215 2.979-.543c.369-.164.637-.346.805-.523c.166-.175.216-.32.216-.434zM11.293 13l-2.647-2.646l.708-.707L12 12.293V10h1v4H9v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconIntegralDistributeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconIntegralFilledIcon],svg[lsicon-integral-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 11.5c0 .439.202.82.491 1.123c.287.302.679.55 1.124.748c.892.397 2.09.629 3.385.629v-1c-1.19 0-2.242-.215-2.979-.543c-.369-.164-.637-.346-.805-.523C4.05 11.759 4 11.614 4 11.5v-.96q.284.184.615.331c.892.397 2.09.629 3.385.629v-1c-1.19 0-2.242-.215-2.979-.543c-.369-.164-.637-.346-.805-.523C4.05 9.259 4 9.114 4 9v-.96q.284.184.615.331C5.507 8.768 6.705 9 8 9c1.296 0 2.493-.232 3.385-.629q.332-.147.615-.33V9h1V3.919l-.026-.077L12.5 4c.474-.158.474-.16.474-.16l-.001-.003l-.002-.005l-.005-.012a1 1 0 0 0-.052-.116a2 2 0 0 0-.16-.245a2.7 2.7 0 0 0-.747-.638C11.281 2.385 10.058 2 8 2s-3.28.385-4.007.821a2.7 2.7 0 0 0-.747.638a1.7 1.7 0 0 0-.2.33l-.012.03l-.005.013l-.002.005v.003h-.001s0 .002.474.16l-.474-.158L3 3.919zm9-5.96a4.3 4.3 0 0 1-.615.331c-.892.397-2.09.629-3.385.629c-1.296 0-2.493-.232-3.385-.629A4.4 4.4 0 0 1 4 5.54v.96c0 .113.05.26.216.434c.168.177.436.36.805.523C5.758 7.785 6.811 8 8 8s2.242-.215 2.979-.543c.369-.164.637-.346.805-.523c.166-.175.216-.32.216-.434zM10.5 10H9v2.5h3v.5H9v1h1.5v.5h1V14H13v-2.5h-3V11h3v-1h-1.5v-.5h-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconIntegralFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconInventoryFilledIcon],svg[lsicon-inventory-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.658 2.092a1 1 0 0 1 .684 0l5 1.818a1 1 0 0 1 .658.94V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4.85a1 1 0 0 1 .658-.94zm.342.94L3 4.85V10h2a1 1 0 0 1 1 1v2h3V9a1 1 0 0 1 1-1h3V4.85z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconInventoryFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconKeyboardFilledIcon],svg[lsicon-keyboard-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 3H1v10h14zM4 6H3V5h1zm3 0H6V5h1zm2 0h1V5H9zm4 0h-1V5h1zM4 7H3v1h1zm2 0h1v1H6zm4 0H9v1h1zm2 0h1v1h-1zm-9 4h10v-1H3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconKeyboardFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconLabelFilledIcon],svg[lsicon-label-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .743.437L8 12.572l4.257 2.365A.5.5 0 0 0 13 14.5v-13a.5.5 0 0 0-.5-.5zM5 4h6V3H5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLabelFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconLeafFilledIcon],svg[lsicon-leaf-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.912 5.205c-1.301-1.302-2.927-1.847-4.198-2.07a10 10 0 0 0-1.6-.152a8 8 0 0 0-.608.015l-.037.003h-.01l-.004.001h-.002l-.38.036l-.065.376v.001l-.001.004l-.002.012l-.008.045l-.023.163A13.4 13.4 0 0 0 .89 6.172c.098 1.511.508 3.434 1.844 4.77c1.306 1.306 2.898 1.815 4.14 2.001a9 9 0 0 0 1.625.095v-.83L4.646 8.353l.708-.708L8.5 10.793V5.926q-.258-.39-.588-.72M1.5 3.5l-.047-.498zm-.492-.086L1.5 3.5zM9.5 7.3v3.66l1.688-1.35l.624.78L9.5 12.24v.788a8 8 0 0 0 1.094-.062c.909-.117 2.09-.442 2.968-1.32c.886-.887 1.227-2.226 1.362-3.259a11 11 0 0 0 .078-1.878L15 6.477v-.01l-.001-.002v-.001l-.03-.402l-.398-.057h-.004l-.009-.002l-.03-.004l-.111-.013a10 10 0 0 0-1.682-.028c-.977.072-2.265.331-3.095 1.196l-.04.04zm5-.8l.5-.036zm.071-.495l-.07.495z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLeafFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconLeftAlignFilledIcon],svg[lsicon-left-align-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 14V2h1v12zM4 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm0 6a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLeftAlignFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconLeftFilledIcon],svg[lsicon-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.293 8l3.854 3.854l.707-.707L6.707 8l3.147-3.146l-.707-.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLeftFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconLeftSquareFilledIcon],svg[lsicon-left-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm3 2H5v8h6v-1H6z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLeftSquareFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconLightRainFilledIcon],svg[lsicon-light-rain-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5 12.5H4c-1 0-2.5-.5-2.5-2c0-2.131 1.454-2.81 2.502-2.963A.606.606 0 0 0 4.521 7C4.708 4.801 6.137 3.5 8 3.5s3.292 1.301 3.48 3.5a.58.58 0 0 0 .52.522c2.068.19 2.5 1.584 2.5 2.978c0 1.5-1.5 2-2.5 2h-1M6.776 11L6 13.898M9.553 11l-.777 2.898"></svg:path>`,
})
export class LsiconLightRainFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconLightSnowFilledIcon],svg[lsicon-light-snow-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.282 4.068C5.996 3.37 6.948 3 8 3s2.004.37 2.718 1.068c.712.697 1.157 1.69 1.26 2.89a.07.07 0 0 0 .02.043a.1.1 0 0 0 .048.023c1.153.106 1.929.562 2.395 1.257c.448.668.559 1.484.559 2.219c0 .95-.49 1.599-1.11 1.986c-.598.374-1.322.514-1.89.514h-1v-1h1c.431 0 .958-.11 1.36-.361c.38-.238.64-.59.64-1.139c0-.66-.105-1.237-.39-1.662c-.266-.398-.74-.734-1.655-.818a1.08 1.08 0 0 1-.974-.977L11.479 7l-.498.043c-.085-1-.448-1.756-.963-2.26C9.505 4.281 8.811 4 8 4s-1.505.28-2.018.783c-.515.504-.878 1.26-.963 2.26a1.106 1.106 0 0 1-.944.99c-.462.067-.981.246-1.378.612C2.314 8.997 2 9.56 2 10.5c0 .55.26.901.64 1.139c.402.25.928.361 1.36.361h1v1H4c-.568 0-1.292-.14-1.89-.514C1.49 12.1 1 11.452 1 10.5c0-1.192.413-2.033 1.02-2.591c.591-.544 1.323-.78 1.91-.866a.12.12 0 0 0 .067-.035a.1.1 0 0 0 .026-.05c.102-1.2.547-2.193 1.26-2.89m2.28 7.257V10h1v1.232l1.152-.665l.5.866l-1.232.711l1.165.673l-.5.866l-1.085-.626V14h-1v-1.036l-1.245.719l-.5-.866l1.165-.673l-1.232-.711l.5-.866z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLightSnowFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconLightningFilledIcon],svg[lsicon-lightning-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.663 1.027A.5.5 0 0 1 9 1.5V7h3a.5.5 0 0 1 .393.809l-5.5 7A.5.5 0 0 1 6 14.5V9H3a.5.5 0 0 1-.393-.809l5.5-7a.5.5 0 0 1 .556-.164" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLightningFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconLineChartFilledIcon],svg[lsicon-line-chart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h1v11h11v1H2zm12.354 2.354L9.5 9.207l-2-2l-3.146 3.147l-.708-.708L7.5 5.793l2 2l4.146-4.147z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLineChartFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconLinecapButtFilledIcon],svg[lsicon-linecap-butt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h12v4.573a1.5 1.5 0 0 1 0 2.814V14H2v-1h11V9.402a1.5 1.5 0 0 1-.927-.902H2v-1h10.058c.15-.442.5-.792.942-.942V3H2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLinecapButtFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconLinecapRoundFilledIcon],svg[lsicon-linecap-round-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2 2h6a6 6 0 0 1 0 12H2v-1h6A5 5 0 0 0 8 3H2zm0 5.5h6v1H2z"></svg:path><svg:path d="M6.48 7.98a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path></svg:g>`,
})
export class LsiconLinecapRoundFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconLinecapSquareFilledIcon],svg[lsicon-linecap-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h12v12H2v-1h11V3H2zm4.558 5.5a1.5 1.5 0 1 1 .015 1H2v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLinecapSquareFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconLinejoinBevelFilledIcon],svg[lsicon-linejoin-bevel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h6.207L14 7.793V14H7.5V8.5H2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLinejoinBevelFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconLinejoinMiterFilledIcon],svg[lsicon-linejoin-miter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h12v12H7.5V8.5H2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLinejoinMiterFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconLinejoinRoundFilledIcon],svg[lsicon-linejoin-round-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h6a6 6 0 0 1 6 6v6H7.5V8.5H2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLinejoinRoundFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconLinkFilledIcon],svg[lsicon-link-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.249 3.028a2.627 2.627 0 1 1 3.715 3.715L11.048 8.66l-.707-.707l1.916-1.916a1.627 1.627 0 0 0-2.3-2.3L7.853 5.836l-.707-.707zm1.097 3.333L6.35 10.357l-.708-.708L9.64 5.654zM5.688 8.004L3.772 9.92a1.627 1.627 0 0 0 2.3 2.3l1.916-1.915l.707.707l-1.916 1.916a2.627 2.627 0 0 1-3.715-3.715L4.98 7.297z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLinkFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconListFilledIcon],svg[lsicon-list-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM4 6h6V5H4zm7 0h1V5h-1zm-1 2.5H4v-1h6zm1 0h1v-1h-1zM10 11H4v-1h6zm1 0h1v-1h-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconListFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconLocationFilledIcon],svg[lsicon-location-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a5 5 0 0 0-5 5c0 1.14.56 2.488 1.377 3.934c.827 1.463 1.967 3.107 3.216 4.857l.407.57l.407-.57c1.25-1.75 2.389-3.394 3.216-4.857C12.44 8.488 13 7.14 13 6a5 5 0 0 0-5-5m0 2.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLocationFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconLockFilledIcon],svg[lsicon-lock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a3 3 0 0 0-3 3v3H3v8h10V7h-2V4a3 3 0 0 0-3-3M6 4a2 2 0 1 1 4 0v3H6zm2 5.5a1 1 0 0 0-.5 1.866V12.5h1v-1.134A1 1 0 0 0 8 9.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLockFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconManagementFilledIcon],svg[lsicon-management-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 1a.5.5 0 0 0-.485.621L5.11 2H3.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.61l.095-.379A.5.5 0 0 0 10.5 1zm.64 1h3.72l-.25 1H6.39zM8.5 6.5V7H5v1h3.5v.5h1V8H11V7H9.5v-.5zm-2 3v.5H5v1h1.5v.5h1V11H11v-1H7.5v-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconManagementFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconManagementStockoutFilledIcon],svg[lsicon-management-stockout-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.207 1.128a.5.5 0 0 0-.414 0L1.377 4.045a.5.5 0 0 0-.294.455v6.417a.5.5 0 0 0 .261.439l6.417 3.5a.5.5 0 0 0 .479 0l1.76-.96V9.5h1v3.85l1-.545V8.5h1v3.759l1.656-.903a.5.5 0 0 0 .26-.44V4.5a.5.5 0 0 0-.292-.455zM2.083 10.62V5.277L7.5 7.739v5.835zM8 6.867L13.21 4.5L8 2.133L2.792 4.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconManagementStockoutFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconMapFilledIcon],svg[lsicon-map-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.763 2.075A.5.5 0 0 1 15 2.5v9a.5.5 0 0 1-.276.447l-4 2a.5.5 0 0 1-.41.017l-4.791-1.916l-3.8 1.9A.5.5 0 0 1 1 13.5v-9a.5.5 0 0 1 .276-.447l4-2a.5.5 0 0 1 .41-.017l4.791 1.916l3.8-1.9a.5.5 0 0 1 .486.023M11 12.69l3-1.5V3.309l-3 1.5zm-6-1.5V3.309l-3 1.5v7.882z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMapFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconMapLocationFilledIcon],svg[lsicon-map-location-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 2.02V1h1v1.02a6 6 0 0 1 5.48 5.48H15v1h-1.02a6 6 0 0 1-5.48 5.48V15h-1v-1.02A6 6 0 0 1 2.02 8.5H1v-1h1.02A6 6 0 0 1 7.5 2.02m0 1.005A5 5 0 0 0 3.025 7.5H4v1h-.975A5 5 0 0 0 7.5 12.975V12h1v.975A5 5 0 0 0 12.975 8.5H12v-1h.975A5 5 0 0 0 8.5 3.025V4h-1z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6 8a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path>`,
})
export class LsiconMapLocationFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconMarketingFilledIcon],svg[lsicon-marketing-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a5.5 5.5 0 0 0-5.5 5.5v1c0 .528.215 1.035.443 1.426c.231.399.509.733.703.928l1.417 1.416L5.64 13h4.72l.577-1.73l1.417-1.416c.194-.195.472-.53.703-.928c.228-.391.443-.898.443-1.426v-1A5.5 5.5 0 0 0 8 1m1.354 4.354l-.708-.708L6.793 6.5l1 1l-1.147 1.146l.708.708L9.207 7.5l-1-1z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10 15v-1H6v1z"></svg:path>`,
})
export class LsiconMarketingFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconMarketplaceFilledIcon],svg[lsicon-marketplace-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 2a.5.5 0 0 0-.447.276l-1.5 3A.5.5 0 0 0 2 5.5v2a.5.5 0 0 0 .5.5H3v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V8h.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.053-.224l-1.5-3A.5.5 0 0 0 12 2zm9 3.618V7h-2V6h-1v1H8.5V6h-1v1H6V6H5v1H3V5.618L4.309 3h7.382zM6.5 10h1V9h-1zm2 0h1V9h-1zm-1 1.5h-1v-1h1zm1 0h1v-1h-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMarketplaceFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconMeasureFilledIcon],svg[lsicon-measure-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.121 2.343a1 1 0 0 1 1.415 0l2.12 2.121a1 1 0 0 1 0 1.415L5.88 13.657a1 1 0 0 1-1.414 0l-2.122-2.121a1 1 0 0 1 0-1.415zm-5.785 7.2L3.05 10.828l2.122 2.122l7.778-7.778l-2.121-2.122l-1.286 1.286L10.707 5.5L10 6.207L8.836 5.043l-.793.793L9.207 7l-.707.707l-1.164-1.164l-.793.793L7.707 8.5L7 9.207L5.836 8.043l-.793.793L6.207 10l-.707.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMeasureFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconMenuEndwaysFilledIcon],svg[lsicon-menu-endways-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 14V2h1v12zm3 0V2h1v12zm3 0V2h1v12zm3 0V2h1v12z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMenuEndwaysFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconMenuThwartwiseFilledIcon],svg[lsicon-menu-thwartwise-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 4H2V3h12zm0 3H2V6h12zm0 3H2V9h12zm0 3H2v-1h12z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMenuThwartwiseFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconMenu2FilledIcon],svg[lsicon-menu2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 4H2V3h12zm0 4.5H2v-1h12zm0 4.5H2v-1h12z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMenu2FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconMicrophoneFilledIcon],svg[lsicon-microphone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 3.5a2.5 2.5 0 0 1 5 0V8a2.5 2.5 0 0 1-5 0zM4.5 6v2a3.5 3.5 0 1 0 7 0V6h1v2a4.5 4.5 0 0 1-4 4.473V14H12v1H4v-1h3.5v-1.527A4.5 4.5 0 0 1 3.5 8V6z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMicrophoneFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconMinusFilledIcon],svg[lsicon-minus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M4 7.5v1h8v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMinusFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconMobileFilledIcon],svg[lsicon-mobile-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zm3 12h3v-1h-3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMobileFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconMonitoringFilledIcon],svg[lsicon-monitoring-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M1.5 7a6.5 6.5 0 1 1 7 6.481V14H11v1H5v-1h2.5v-.519A6.5 6.5 0 0 1 1.5 7M8 1.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11"></svg:path><svg:path d="M4.5 7a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M8 4.5a2.5 2.5 0 1 0 2.436 1.935a1.5 1.5 0 1 1-1.871-1.87A2.5 2.5 0 0 0 8 4.5"></svg:path></svg:g>`,
})
export class LsiconMonitoringFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconMoreFilledIcon],svg[lsicon-more-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 8a1 1 0 1 1 2 0a1 1 0 0 1-2 0m4 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m3.99 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMoreFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconMotorcycleFilledIcon],svg[lsicon-motorcycle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4H9V3h3a1.5 1.5 0 0 1 0 3h-.924l.444 3.105L9.783 12H6a2 2 0 1 1-4 0H1v-1.5A2.5 2.5 0 0 1 3.5 8h2.61l-.5-2H3V5h3.39l1.5 6h1.327l1.263-2.105L10.066 6H10V5h2a.5.5 0 0 0 0-1m1 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-8 0a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMotorcycleFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconMoveDownFilledIcon],svg[lsicon-move-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.479 3H2V2h12v1H8.479v9.086l2.668-2.668l.707.707L7.979 14l-3.875-3.875l.707-.707l2.668 2.668zM6.5 7H2V6h4.5zM14 7H9.5V6H14z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMoveDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconMoveFilledIcon],svg[lsicon-move-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 1.293l2.229 2.228l-.708.708L8.5 3.207V7.5h4.293l-1.021-1.021l.707-.708L14.707 8l-2.228 2.229l-.707-.708l1.02-1.021H8.5v4.293l1.021-1.021l.708.707L8 14.707L5.771 12.48l.708-.707l1.021 1.02V8.5H3.207L4.23 9.521l-.708.708L1.293 8L3.52 5.771l.708.708L3.207 7.5H7.5V3.207L6.479 4.23l-.709-.71z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMoveFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconMoveUpFilledIcon],svg[lsicon-move-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.979 2l3.875 3.875l-.707.707l-2.668-2.668V13H14v1H2v-1h5.479V3.914L4.81 6.582l-.707-.707zM6.5 10H2V9h4.5zm7.5 0H9.5V9H14z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMoveUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconMusicFilledIcon],svg[lsicon-music-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 1.933v8.419h-.002l.002.097a2 2 0 1 1-1-1.732V5.3l-7 1v5.698a2 2 0 1 1-1-1.733V3.07zM6 5.29l7-1V3.067l-7 .884z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconMusicFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconNumberFilledIcon],svg[lsicon-number-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 4.5h1v7m0 0H2m1 0h1m1-7h4V8H5.5v3.5h4m1-7H14V8m0 0h-3m3 0v3.5h-3.5"></svg:path>`,
})
export class LsiconNumberFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconOclockFilledIcon],svg[lsicon-oclock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M7.5 3v1h1V3zM8 6.5c.267 0 .518.07.735.192l2.936-2.568l.658.752l-2.935 2.569a1.5 1.5 0 1 1-2.81.062L5.187 6.39l.624-.78l1.396 1.116c.23-.143.501-.226.792-.226m-5 2h1v-1H3zm9 0h1v-1h-1zM7.5 12v1h1v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOclockFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconOfflineGatewayFilledIcon],svg[lsicon-offline-gateway-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h2V2h1v5h3.5v1H3v5h10v-3h1v4H2zm9-5v2h1V2z"></svg:path><svg:path fill="currentColor" d="M12 4.5a2.5 2.5 0 0 0-2.086 3.879l3.465-3.465A2.5 2.5 0 0 0 12 4.5m2.086 1.121L10.62 9.086a2.5 2.5 0 0 0 3.465-3.464M6 11v-1H4v1zm1 0h2v-1H7zm5 0v-1h-2v1z"></svg:path>`,
})
export class LsiconOfflineGatewayFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconOneToOneFilledIcon],svg[lsicon-one-to-one-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5H4v1H2v2H1zM12 3h2.5a.5.5 0 0 1 .5.5V6h-1V4h-2zM6.236 5.06a.5.5 0 0 1 .264.44V11h-1V6.434l-.723.482l-.554-.832l1.5-1a.5.5 0 0 1 .513-.025m5 0a.5.5 0 0 1 .264.44V11h-1V6.434l-.723.482l-.554-.832l1.5-1a.5.5 0 0 1 .513-.025M7.5 7V6h1v1zm0 3V9h1v1zM2 12v-2H1v2.5a.5.5 0 0 0 .5.5H4v-1zm13-2v2.5a.5.5 0 0 1-.5.5H12v-1h2v-2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOneToOneFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconOnlineGatewayFilledIcon],svg[lsicon-online-gateway-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 7H4V2h1v5h6V2h1v5h1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5M6 10v1H4v-1zm3 1H7v-1h2zm3 0v-1h-2v1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOnlineGatewayFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconOpenNewFilledIcon],svg[lsicon-open-new-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 4H12v6.5h-1V5.707l-6.146 6.147l-.708-.708L10.293 5H5.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOpenNewFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconOperationFilledIcon],svg[lsicon-operation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2H2v10h5.5v1H5v1h6v-1H8.5v-1H14zM4.812 8.89l2.15-1.72L8.47 8.676l3.35-2.792l-.64-.768l-2.648 2.208L7.037 5.83l-2.85 2.28z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOperationFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconOrderAbnormalFilledIcon],svg[lsicon-order-abnormal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.18 2a1 1 0 0 1 1-1h3.64a1 1 0 0 1 1 1H12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm4.64 0H6.18l.313 1h3.014zm-2.57 9.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M7.5 5.5V10h1V5.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOrderAbnormalFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconOrderCloseFilledIcon],svg[lsicon-order-close-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H7v-1H4V2h8v5h1V1.5a.5.5 0 0 0-.5-.5z"></svg:path><svg:path fill="currentColor" d="M5 5h6V4H5zm0 2h4V6H5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 8a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m-1.354 2.854l.647.646l-.647.646l.708.707l.646-.646l.646.646l.708-.707l-.647-.646l.647-.646l-.707-.708l-.647.647l-.646-.647z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOrderCloseFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconOrderDoneFilledIcon],svg[lsicon-order-done-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 1a.5.5 0 0 0-.477.65l.11.35H3.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.632l.11-.35A.5.5 0 0 0 10.5 1zm.68 1h3.64l-.313 1H6.493zm1.674 8.854l3.5-3.5l-.707-.708L7.5 9.793L5.854 8.146l-.708.708l2 2a.5.5 0 0 0 .708 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOrderDoneFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconOrderEditFilledIcon],svg[lsicon-order-edit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.106 1.192A.5.5 0 0 1 5.5 1h5a.5.5 0 0 1 .485.621L10.89 2h1.61a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h1.61l-.095-.379a.5.5 0 0 1 .09-.429M9.86 2H6.14l.25 1h3.22zM11 12H5v-1h6zm-5-2l1.5-.5l3-3l-1-1l-3 3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOrderEditFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconOrderFilledIcon],svg[lsicon-order-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 1a.5.5 0 0 0-.477.65l.11.35H3.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.632l.11-.35A.5.5 0 0 0 10.5 1zm.68 1h3.64l-.313 1H6.493zM11 7H5V6h6zm0 2.5H5v-1h6zM5 12h4v-1H5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOrderFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconOrderIntegralFilledIcon],svg[lsicon-order-integral-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.097 1.204A.5.5 0 0 1 5.5 1h5a.5.5 0 0 1 .477.65l-.11.35H12.5a.5.5 0 0 1 .5.5v5h-1V3h-1.445l-.203.65a.5.5 0 0 1-.477.35h-3.75a.5.5 0 0 1-.477-.35L5.445 3H4v11h4.5v1h-5a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h1.632l-.11-.35a.5.5 0 0 1 .075-.446M6.18 2l.313 1h3.014l.313-1zM9 9.5v4c0 .411.288.801.757 1.062c.477.265 1.196.438 2.243.438c1.068 0 1.789-.223 2.26-.51a1.9 1.9 0 0 0 .527-.459q.089-.115.143-.234A.7.7 0 0 0 15 13.5v-4c0-.3-.15-.545-.326-.72a2.1 2.1 0 0 0-.665-.427C13.495 8.133 12.8 8 12 8s-1.495.133-2.01.353c-.256.11-.488.25-.664.426C9.151 8.955 9 9.2 9 9.5m5 1.18c-.468.197-1.117.32-2 .32s-1.532-.123-2-.32v.798c.008.018.051.104.243.21c.273.152.804.312 1.757.312s1.484-.16 1.757-.312c.192-.107.235-.192.243-.21zm-4 2v.798c.008.018.051.104.243.21c.273.152.804.312 1.757.312c.932 0 1.461-.194 1.74-.364a1 1 0 0 0 .254-.214l.006-.008v-.734c-.468.197-1.117.32-2 .32s-1.532-.123-2-.32" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOrderIntegralFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconOutOfWarehouseFilledIcon],svg[lsicon-out-of-warehouse-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.853 3.022a.5.5 0 0 1 .294 0l6.5 2A.5.5 0 0 1 15 5.5v7a.5.5 0 0 1-.5.5H11v-1h3V5.87L8 4.022L2 5.87V8H1V5.5a.5.5 0 0 1 .353-.478zM2.707 11.5l1.147 1.146l-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2l.708.708L2.707 10.5H9.5v1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOutOfWarehouseFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconOvertimeFilledIcon],svg[lsicon-overtime-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8a6 6 0 1 1 12 0h1a7 7 0 1 0-7 7v-1a6 6 0 0 1-6-6m5.5-4v3.5H4v1h4.5V4zm4 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M11 9.5v2h1v-2zm.5 2.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOvertimeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPackingBoxFilledIcon],svg[lsicon-packing-box-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.793 1.128a.5.5 0 0 1 .414 0l6.417 2.917a.5.5 0 0 1 .293.455v6.417a.5.5 0 0 1-.26.439l-6.417 3.5a.5.5 0 0 1-.48 0l-6.416-3.5a.5.5 0 0 1-.26-.44V4.5a.5.5 0 0 1 .293-.455zm.707 6.61v5.836l5.417-2.954V5.277zM13.21 4.5L8 6.867l-1.894-.86l4.96-2.48zM9.895 2.994l-4.96 2.48L2.791 4.5L8 2.133z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPackingBoxFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPadFilledIcon],svg[lsicon-pad-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zM13 9.5v-3h-1v3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPadFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconParkFilledIcon],svg[lsicon-park-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 8H6V5h3.5a1.5 1.5 0 0 1 0 3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m1.5 3H5v8h1V9h3.5a2.5 2.5 0 0 0 0-5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconParkFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPasteFilledIcon],svg[lsicon-paste-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 2a.5.5 0 0 0-.5.5V4h1V3h7v7h-1v1h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zm-3 3a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zM4 9h5V8H4zm0 2h5v-1H4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPasteFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPathFilledIcon],svg[lsicon-path-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.145 2.75a2 2 0 1 1-.13 1H5a1.5 1.5 0 1 0 0 3h7a2.5 2.5 0 0 1 0 5H6.485a2 2 0 1 1-.13-1H12a1.5 1.5 0 0 0 0-3H5a2.5 2.5 0 0 1 0-5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPathFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPercentFilledIcon],svg[lsicon-percent-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 4.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m.146 8.146l10-10l.708.708l-10 10zM9.5 11.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPercentFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPhoneFilledIcon],svg[lsicon-phone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2.192c0-.382.31-.692.692-.692h3.652a.73.73 0 0 1 .678.46l.63 1.572c.263.66.109 1.415-.394 1.918a.78.78 0 0 0 0 1.1L9.45 9.243a.78.78 0 0 0 1.1 0a1.78 1.78 0 0 1 1.918-.394l1.572.629c.278.11.46.38.46.678v4.16a.684.684 0 0 1-.684.684C7.014 15 1.5 9.486 1.5 2.684z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPhoneFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPickingFilledIcon],svg[lsicon-picking-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 11.563V2h1v9.563c.703.18 1.256.734 1.437 1.437H14v1H4.437A2 2 0 1 1 2 11.563M4 3h7v4H4zm0 5h9v4H4zm-1.5 4.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPickingFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPickingGuidanceFilledIcon],svg[lsicon-picking-guidance-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .447.276l5.5 11a.5.5 0 0 1-.618.694L8 12.032L2.67 13.97a.5.5 0 0 1-.617-.694l5.5-11A.5.5 0 0 1 8 2" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPickingGuidanceFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPickingPathFilledIcon],svg[lsicon-picking-path-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 4a2 2 0 1 1 2.5 1.937V11.5a1.5 1.5 0 0 0 3 0v-7a2.5 2.5 0 0 1 5 0v3h-1v-3a1.5 1.5 0 0 0-3 0v7a2.5 2.5 0 0 1-5 0V5.937A2 2 0 0 1 2 4m8 6.5a2 2 0 1 1 4 0a3.67 3.67 0 0 1-1.565 3.006L12 13.81l-.435-.304A3.67 3.67 0 0 1 10 10.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPickingPathFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPictureFilledIcon],svg[lsicon-picture-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zm5.854 9.854L13 7.207V13H3v-1.793l2-2l2.646 2.647a.5.5 0 0 0 .708 0M5 3.99a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPictureFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPictureOffFilledIcon],svg[lsicon-picture-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2 2.707l-.854-.853l.708-.708l13 13l-.707.708l-.854-.854H2.5a.5.5 0 0 1-.5-.5zm7.75 7.75l-1.396 1.397a.5.5 0 0 1-.708 0L5 9.207l-2 2V13h9.293zm.703-2.117L4.629 2H13.5a.5.5 0 0 1 .5.5v8.849h-1V7.207l-1.84 1.84z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPictureOffFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPieOneFilledIcon],svg[lsicon-pie-one-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 1H8a7 7 0 0 1 7 7v.5H8.5a1 1 0 0 1-1-1zM6.447 2.204a6 6 0 1 0 7.349 7.349l.966.259a7 7 0 1 1-8.574-8.573z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPieOneFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPieTwoFilledIcon],svg[lsicon-pie-two-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 1H9a6 6 0 0 1 6 6v.5H8.5zM7.497 1v7.503h7.504l-.09.576A6.998 6.998 0 0 1 1 8.004a7 7 0 0 1 5.921-6.915zm-1 7.84V2.196a6 6 0 0 0-2.585 10.198zM4.7 13.013a6 6 0 0 0 9.106-3.51H7.252z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPieTwoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPinFilledIcon],svg[lsicon-pin-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 12V4h1v1.05l6.326.659l.847-.733a.5.5 0 0 1 .827.378v5a.5.5 0 0 1-.828.377l-.834-.724L7 10.932V12zM1 7.5h5v1H1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPinFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPinPreFilledIcon],svg[lsicon-pin-pre-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.702 2.269a.5.5 0 0 1 .528.115l3.536 3.535a.5.5 0 0 1-.319.853l-1.108.078l-3.925 5.046l.755.756l-.707.707l-2.475-2.475l-3.181 3.182l-.708-.707l3.182-3.182l-2.475-2.475l.708-.707l.74.741l5.045-3.923l.08-1.111a.5.5 0 0 1 .324-.433" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPinPreFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPlaceOrderFilledIcon],svg[lsicon-place-order-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h.11a1 1 0 0 1 .97.757l.25 1A1 1 0 0 1 12.36 7H12v.5h.5a1 1 0 0 1 1 1V9a1 1 0 0 1-1 1H12v2a1 1 0 0 1-1 1H8.707l-.296.296l-.826 1.651a1 1 0 0 1-.894.553h-3.04a1 1 0 0 1-.554-.168l-1.152-.768a1 1 0 0 1-.445-.832v-3.696a1 1 0 0 1 .01-.142l.934-6.535a1 1 0 0 1 .99-.859H4zm0 1.5h-.566L2.5 10.036v3.696l1.151.768H4.5v-1.333a1 1 0 0 1 .2-.6l2.64-3.52l-.84-.84l-2.146 2.147l-.708-.708L4 9.293zm1 4.793l.793-.793a1 1 0 0 1 1.414 0l.84.84a1 1 0 0 1 .093 1.307L6.375 12H11V2H5zM12 6h.36l-.25-1H12zm0 2.5V9h.5v-.5zM5.625 13l-.125.167V14.5h1.191l.75-1.5zM7.5 3.5V3h1v.5zm.5 0A1.5 1.5 0 0 0 6.5 5H6v1h4V5h-.5A1.5 1.5 0 0 0 8 3.5m0 1a.5.5 0 0 0-.5.5h1a.5.5 0 0 0-.5-.5M6.146 9.854l-.5-.5l.708-.708l.5.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPlaceOrderFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPlayFilledIcon],svg[lsicon-play-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m3.901 7L6 4.066v7.868z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPlayFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPointerFilledIcon],svg[lsicon-pointer-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.832 1.302L14.394 10H8.777l-3.086 4.937z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPointerFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPowerFilledIcon],svg[lsicon-power-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 8V2h1v6zM5.273 3.808a5 5 0 1 0 5.454 0l.546-.837a6 6 0 1 1-6.546 0z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPowerFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPrintFilledIcon],svg[lsicon-print-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3h8V2H4zm10 1H2v7h2v3h8v-3h2zm-3 9H5V9h6zM4 7h3V6H4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPrintFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconProcessModeFilledIcon],svg[lsicon-process-mode-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.146-.354l-3.5-3.5A.5.5 0 0 0 9 1zm7.793 3.5L9.5 2.707V4.5zM7.5 5.5H5v-1h2.5zm3.5 3H5v-1h6zm-6 3h6v-1H5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconProcessModeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPurseFilledIcon],svg[lsicon-purse-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 3c.35 0 .633-.085.871-.226c.22-.13.385-.299.502-.42l.006-.005c.13-.135.208-.212.297-.267A.57.57 0 0 1 8 2c.28 0 .402.109.646.354l.013.013C8.915 2.622 9.292 3 10 3c.18 0 .486.037.77.135c.3.104.461.235.515.343c.035.07.136.395-.638 1.168l.043.043A5.55 5.55 0 0 0 8 4a5.54 5.54 0 0 0-2.688.69l.042-.044c-.785-.785-.722-1.125-.692-1.198c.036-.086.163-.21.464-.312C5.407 3.04 5.741 3 6 3m6.18.035c.327.66.035 1.407-.696 2.184c1.28 1.015 2.214 2.63 2.51 4.71c.236 1.648-.3 2.958-1.434 3.83C11.46 14.609 9.852 15 8 15s-3.459-.392-4.56-1.24c-1.135-.873-1.67-2.183-1.435-3.83c.297-2.082 1.231-3.696 2.51-4.71c-.723-.766-1.05-1.498-.777-2.155c.204-.49.677-.744 1.066-.876A3.9 3.9 0 0 1 6 2c.177 0 .283-.04.363-.087a1.5 1.5 0 0 0 .3-.262l.018-.02c.112-.114.268-.275.47-.4C7.382 1.088 7.657 1 8 1c.708 0 1.085.378 1.34.633l.013.013C9.598 1.891 9.72 2 10 2s.697.053 1.094.19c.379.13.855.377 1.086.845M9.146 6.646L8 7.793L6.854 6.646l-.708.708L7.293 8.5H6v1h1.5v1H6v1h1.5V13h1v-1.5H10v-1H8.5v-1H10v-1H8.707l1.147-1.146z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPurseFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPushMgtFilledIcon],svg[lsicon-push-mgt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 2a.5.5 0 0 0-.5.5V12h1V3h9V2zm7.37 8.81l-.74-1.232l1.224-1.224l-.708-.708L8.422 8.87L7.19 8.13l4.02-1.34z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm7.974 2.158a.5.5 0 0 0-.632-.632l-6 2a.5.5 0 0 0-.1.903l2.394 1.435l1.435 2.393a.5.5 0 0 0 .903-.099z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPushMgtFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconPuzzleFilledIcon],svg[lsicon-puzzle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.05 3.5a2.5 2.5 0 0 1 4.9 0H13V7a2 2 0 1 1 0 4v3H9v-.5a1.5 1.5 0 0 0-3 0v.5H2V9h2a1 1 0 0 0 0-2H2V3.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPuzzleFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconQrCodeFilledIcon],svg[lsicon-qr-code-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zM3 3v3h3V3zm6-.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm-7 7a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm9 .5h1V9H9v1h1v1H9v3h2v-1h-1v-2h1v1h2v1h-1v1h2v-2h-1v-1h1V9h-1v2h-2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconQrCodeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconQuestionFilledIcon],svg[lsicon-question-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.75 3A2.75 2.75 0 0 0 5 5.75V6H4v-.25A3.75 3.75 0 0 1 7.75 2h.543A3.207 3.207 0 0 1 11.5 5.207v.772c0 1.122-.811 2.08-1.918 2.264A1.295 1.295 0 0 0 8.5 9.521V11h-1V9.52c0-1.121.811-2.079 1.918-2.263A1.295 1.295 0 0 0 10.5 5.979v-.772A2.207 2.207 0 0 0 8.293 3zm-.5 9.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconQuestionFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRadarChartFilledIcon],svg[lsicon-radar-chart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.125 6.953L8.5 4.766V1.27l6.011 4.836zm3.702.106l-3.505.876L10.083 10l2.528 4.214zM11.917 15l-2.621-4.368l-2.97 1.273L4.113 15zm-8.512-.727l2.033-2.847L4.12 7.912l-2.962-.83zM1.242 6.068l3.163.885L7.5 4.743v-3.49zm5.042 4.766l-1.181-3.15L7.976 5.63l2.375 1.979l-1.197 1.994z"></svg:path>`,
})
export class LsiconRadarChartFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRadioSelectedFilledIcon],svg[lsicon-radio-selected-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"></svg:path><svg:path d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0Z"></svg:path><svg:path d="M12.5 8a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Z"></svg:path><svg:path d="M11.5 8a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path></svg:g>`,
})
export class LsiconRadioSelectedFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRadioUnselectedFilledIcon],svg[lsicon-radio-unselected-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRadioUnselectedFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRailFilledIcon],svg[lsicon-rail-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 .793L13.707 4.5l-3 3l2.5 2.5L8.5 14.707L2.293 8.5zM9.793 7l1-1H6.207l-1 1zM4.207 8l-.5.5l.5.5h6.586l-1-1zm7.586 2H5.207l1 1h4.586zm-2 2H7.207L8.5 13.293zM7.207 5h4.586l.5-.5l-.5-.5H8.207zm2-2h1.586L10 2.207z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRailFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconReceiptFilledIcon],svg[lsicon-receipt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2H2v12.434l2.036-1.357L6 14.059l2-1l2 1l1.964-.982L14 14.434zM5 6.5h6v-1H5zM5 9h6V8H5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconReceiptFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRefreshDoingFilledIcon],svg[lsicon-refresh-doing-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.245 7.995a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0"></svg:path><svg:path d="M8 2a6 6 0 0 0-5.324 8.769l-.887.462a7 7 0 0 1 10.52-8.749l.652.51L9 4.774v-2.69A6 6 0 0 0 8 2m5.383 3.346a6 6 0 0 0-.393-.679l.831-.556q.255.38.458.792A7 7 0 0 1 3.606 13.45l-.703-.567L7.5 11.3v2.68q.248.02.5.02a6 6 0 0 0 5.383-8.654"></svg:path></svg:g>`,
})
export class LsiconRefreshDoingFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRefreshDoneFilledIcon],svg[lsicon-refresh-done-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.354 6.207L7.5 10.061L5.146 7.707L5.854 7L7.5 8.646L10.646 5.5z"></svg:path><svg:path d="M8 2a6 6 0 0 0-5.324 8.769l-.887.462a7 7 0 0 1 10.52-8.749l.652.51L9 4.774v-2.69A6 6 0 0 0 8 2m5.383 3.346a6 6 0 0 0-.393-.679l.831-.556q.255.38.458.792A7 7 0 0 1 3.606 13.45l-.703-.567L7.5 11.3v2.68q.248.02.5.02a6 6 0 0 0 5.383-8.654"></svg:path></svg:g>`,
})
export class LsiconRefreshDoneFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRefreshFilledIcon],svg[lsicon-refresh-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a6 6 0 0 0-5.324 8.769l-.887.462a7 7 0 0 1 10.52-8.749l.652.51L9 4.774v-2.69A6 6 0 0 0 8 2m5.383 3.346a6 6 0 0 0-.393-.679l.831-.556q.255.38.458.792A7 7 0 0 1 3.606 13.45l-.703-.567L7.5 11.3v2.68q.248.02.5.02a6 6 0 0 0 5.383-8.654" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRefreshFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRemindCloseFilledIcon],svg[lsicon-remind-close-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.715 4.422L1.646 2.354l.708-.708l12 12l-.707.708L12.293 13h-2.195a2.1 2.1 0 0 1-4.196 0H2v-1h1V7c0-.943.261-1.825.715-2.578M6.905 13a1.1 1.1 0 0 0 2.19 0zM7.5 2.025V1h1v1.025A5 5 0 0 1 13 7v4L5 3c.732-.585 1.516-.877 2.5-.975" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRemindCloseFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRemindFilledIcon],svg[lsicon-remind-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 2.025V1h1v1.025A5 5 0 0 1 13 7v5h1v1h-3.902a2.1 2.1 0 0 1-4.196 0H2v-1h1V7a5 5 0 0 1 4.5-4.975M6.904 13a1.1 1.1 0 0 0 2.192 0z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRemindFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconReplenishmentFilledIcon],svg[lsicon-replenishment-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 2a.5.5 0 0 0-.354.146l-2.5 2.5A.5.5 0 0 0 2 5v8.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.146-.354l-2.5-2.5A.5.5 0 0 0 11 2zM3.707 4.5l1.5-1.5h5.586l1.5 1.5zm3.793 2v2h-2v1h2v2h1v-2h2v-1h-2v-2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconReplenishmentFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconReportFilledIcon],svg[lsicon-report-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 1.045a.5.5 0 0 0-.5.5v10.91a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V5.364a.5.5 0 0 0-.152-.36L7.911 1.188a.5.5 0 0 0-.348-.142zm7.766 3.819L8.063 2.727v2.137zM6 5.5H4v-1h2zM10 8H4V7h6zm-6 2.5h6v-1H4z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13 7.5V14H4.5v1h9a.5.5 0 0 0 .5-.5v-7z"></svg:path>`,
})
export class LsiconReportFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRiceFilledIcon],svg[lsicon-rice-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.595 6.494h8.73c-.272-1.88-2.061-3.4-4.325-3.417V4H7v-.83c-1.815.357-3.17 1.706-3.405 3.324M8 5V4h1v1zm0 0H7v1h1zm5.334 1.494c-.277-2.519-2.62-4.417-5.374-4.417S2.863 3.975 2.586 6.494H1.46v.5a6.52 6.52 0 0 0 3.438 5.745v1.201h6.157v-1.201a6.52 6.52 0 0 0 3.438-5.745v-.5zM6.5 5h-1V4h1zm4 0h-1V4h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRiceFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRightAlignFilledIcon],svg[lsicon-right-align-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 14V2h1v12zM2 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm2 6a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRightAlignFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRightFilledIcon],svg[lsicon-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.207 8l-3.854 3.854l-.707-.707L8.793 8L5.646 4.854l.707-.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRightFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRightSquareFilledIcon],svg[lsicon-right-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7H6V5h3a1 1 0 0 1 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm2 2v8h1V8h1.24a41 41 0 0 1 1.086 1.64c.309.494.612 1.01.836 1.459q.169.338.26.589c.062.175.078.274.078.312h1a2 2 0 0 0-.137-.649a7 7 0 0 0-.306-.7a20 20 0 0 0-.883-1.541A40 40 0 0 0 8.452 8H9a2 2 0 1 0 0-4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRightSquareFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRollbackFilledIcon],svg[lsicon-rollback-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m-.771 4.979L6.52 5.27L4.293 7.5L6.52 9.729l.708-.708L6.207 8H10.5v3h1V7H6.207z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRollbackFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRotationLeftFilledIcon],svg[lsicon-rotation-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.736 3.626l1.5-1.593l.728.685l-.707.75H9.5a4.5 4.5 0 0 1 4.5 4.5v.061h-1v-.06a3.5 3.5 0 0 0-3.5-3.5H8.258l.706.75l-.728.685l-1.5-1.593a.5.5 0 0 1 0-.685m-4.59 3.547a.5.5 0 0 1 .354-.146h8a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .146-.354" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRotationLeftFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRotationRightFilledIcon],svg[lsicon-rotation-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.743 3.469l-.707-.75l.728-.686l1.5 1.593a.5.5 0 0 1 0 .685l-1.5 1.593l-.728-.685l.707-.75H6.5a3.5 3.5 0 0 0-3.5 3.5v.06H2v-.06a4.5 4.5 0 0 1 4.5-4.5zM5 7.527a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRotationRightFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRowHeightLFilledIcon],svg[lsicon-row-height-l-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.5 1.822l2.838 2.602l-.676.737L5 3.637v8.726l1.662-1.524l.676.737L4.5 14.178l-2.838-2.602l.676-.737L4 12.363V3.637L2.338 5.161l-.676-.737zM14 3.5v5H9v-5zm0 9H9v-1h5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRowHeightLFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRowHeightMFilledIcon],svg[lsicon-row-height-m-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.5 1.822l2.838 2.602l-.676.737L5 3.637v8.726l1.662-1.524l.676.737L4.5 14.178l-2.838-2.602l.676-.737L4 12.363V3.637L2.338 5.161l-.676-.737zM14 3.5v3H9v-3zm0 5H9v-1h5zm0 4H9v-1h5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRowHeightMFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconRowHeightSFilledIcon],svg[lsicon-row-height-s-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.5 1.822l2.838 2.602l-.676.737L5 3.637v8.726l1.662-1.524l.676.737L4.5 14.178l-2.838-2.602l.676-.737L4 12.363V3.637L2.338 5.161l-.676-.737zM14 4.5H9v-1h5zm0 4H9v-1h5zm0 4H9v-1h5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRowHeightSFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSalesReturnFilledIcon],svg[lsicon-sales-return-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.207 2H3.793L1 4.793V14h14V4.793zm-9.5 2.5l1.5-1.5h7.586l1.5 1.5zm4 3.5l.647-.646l-.707-.708L4.293 9H10a.5.5 0 0 1 0 1H6v1h4a1.5 1.5 0 0 0 0-3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSalesReturnFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSandFilledIcon],svg[lsicon-sand-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.268 5H4v1h3a2 2 0 1 0-1.732-1M3 6H2V5h1zm8.085 1H9v1h3.5a1.5 1.5 0 1 0-1.415-1M8 7v1H2V7zM6 9v1H2V9zm3.5 1H7V9h4.5a2.5 2.5 0 1 1-2 1" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSandFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSandGlassFilledIcon],svg[lsicon-sand-glass-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2h1v4.207L5.793 8L4 9.793V14H3v1h10v-1h-1V9.793L10.207 8L12 6.207V2h1V1H3zm4 4h2V5H7zm-1 6h4v-1H6z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSandGlassFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSaveAsFilledIcon],svg[lsicon-save-as-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.146-.354l-2-2A.5.5 0 0 0 11.5 2zM6 5V3h4v2zm3.854 4.146l-2-2l-.708.708L8.293 9H5v1h3.293l-1.147 1.146l.708.707l2-2a.5.5 0 0 0 0-.707" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSaveAsFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSaveFilledIcon],svg[lsicon-save-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .354.146l2 2A.5.5 0 0 1 14 4.5v9a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5zM3 3v10h2V8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V13h2V4.707L11.293 3H11v2.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V3zm3 0v2h4V3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSaveFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconScaleFilledIcon],svg[lsicon-scale-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5zM5 9a3 3 0 0 1 6 0h1a4 4 0 0 0-8 0zm1.426-1.44l1.713 1.786l.722-.692l-1.714-1.787z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconScaleFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconScanFilledIcon],svg[lsicon-scan-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5H6v1H3v3H2zM13 3h-3V2h3.5a.5.5 0 0 1 .5.5V6h-1zm1 5.5H2v-1h12zM3 13v-3H2v3.5a.5.5 0 0 0 .5.5H6v-1zm10 0v-3h1v3.5a.5.5 0 0 1-.5.5H10v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconScanFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconScatterDiagramFilledIcon],svg[lsicon-scatter-diagram-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h1v11h11v1H2zm8 3.5a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M6.98 7.98a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m4.77-.485a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M4.25 9.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m6.25.005a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconScatterDiagramFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconScreenFullFilledIcon],svg[lsicon-screen-full-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.293 4H9.848V3H13v3.152h-1V4.707L9.354 7.354l-.708-.708zM4 11.293l2.646-2.647l.708.708L4.707 12h1.445v1H3V9.848h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconScreenFullFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconScreenOffFilledIcon],svg[lsicon-screen-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10 5.293l2.646-2.647l.708.708L10.707 6h1.445v1H9V3.848h1zM5.293 10H3.849V9H7v3.152H6v-1.445l-2.646 2.647l-.708-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconScreenOffFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSearchFilledIcon],svg[lsicon-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 2a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M1 6.5a5.5 5.5 0 1 1 9.727 3.52l3.127 3.126l-.708.708l-3.126-3.127A5.5 5.5 0 0 1 1 6.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSearchFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSendFilledIcon],svg[lsicon-send-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="lsiconSendFilled0" d="M12.97 2.67a.5.5 0 0 0-.64-.64l-11 4a.5.5 0 0 0-.016.934l4.433 1.773l2.9-3.09l.707.707l-2.98 3.176l1.662 4.156a.5.5 0 0 0 .934-.015z"></svg:path></svg:defs><svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:use href="#lsiconSendFilled0"></svg:use><svg:use href="#lsiconSendFilled0"></svg:use></svg:g>`,
})
export class LsiconSendFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconServiceFilledIcon],svg[lsicon-service-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.884 8H3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.492-.41c-.343-1.885-.427-4.735.474-7.14c.453-1.21 1.164-2.33 2.237-3.145C4.797 1.485 6.205 1 8 1c1.796 0 3.204.486 4.282 1.305c1.073.816 1.784 1.934 2.237 3.145c.901 2.405.816 5.255.474 7.14a.5.5 0 0 1-.492.41h-.946c-1.479 1.738-3.713 2.108-5.074 2H7.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.517c.964-.012 2.214-.295 3.217-1.105A.5.5 0 0 1 12 12.5v-4a.5.5 0 0 1 .5-.5h1.615c-.1-.752-.271-1.5-.533-2.2c-.405-1.08-1.02-2.025-1.907-2.699C10.794 2.431 9.606 2 8 2s-2.793.43-3.676 1.101c-.887.674-1.5 1.618-1.906 2.7A10 10 0 0 0 1.884 8" clip-rule="evenodd"></svg:path>`,
})
export class LsiconServiceFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSettingFilledIcon],svg[lsicon-setting-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.873 1h2.23c.336-.005.665.105.93.312c.267.21.452.505.52.837l.195.935q.127.068.25.14l.945-.31a1.48 1.48 0 0 1 1.181.119c.22.124.405.302.534.52l1.125 1.856a1.41 1.41 0 0 1-.281 1.83H14.5l-.742.633v.258l.733.653a1.41 1.41 0 0 1 .297 1.8l-1.09 1.86v.002a1.46 1.46 0 0 1-1.255.711a1.5 1.5 0 0 1-.461-.07l-.005-.002l-.937-.309q-.125.074-.254.141l-.194.934a1.43 1.43 0 0 1-.52.838A1.47 1.47 0 0 1 9.14 15H6.892a1.47 1.47 0 0 1-.93-.312a1.43 1.43 0 0 1-.52-.837l-.195-.936a6 6 0 0 1-.25-.14l-.945.31a1.48 1.48 0 0 1-1.181-.119a1.44 1.44 0 0 1-.534-.518l-1.126-1.86a1.41 1.41 0 0 1 .259-1.794l.747-.942l-.713-.635a1.41 1.41 0 0 1-.296-1.802l.002-.002l1.127-1.86a1.45 1.45 0 0 1 1.239-.709q.226-.012.446.043l.022.006l.935.329q.123-.072.25-.138l.194-.934a1.43 1.43 0 0 1 .52-.838c.264-.207.594-.317.93-.312M8 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4M5 8a3 3 0 1 1 6 0a3 3 0 0 1-6 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSettingFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSettingSearchFilledIcon],svg[lsicon-setting-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.873 1h2.23c.336-.005.665.105.93.312a1.43 1.43 0 0 1 .52.837l.195.935q.127.068.25.14l.945-.31a1.48 1.48 0 0 1 1.181.119c.22.124.405.302.534.52l1.125 1.856a1.41 1.41 0 0 1-.281 1.83H14.5l-.742.633v.258l.733.653a1.41 1.41 0 0 1 .297 1.8l-1.09 1.86v.002a1.46 1.46 0 0 1-1.257.711l-.001-1a.5.5 0 0 0 .232-.06a.44.44 0 0 0 .165-.16l1.092-1.865a.41.41 0 0 0-.092-.531l-.008-.007l-1.071-.955V7.411l1.092-.931a.41.41 0 0 0 .085-.54l-.005-.009l-1.131-1.866a.44.44 0 0 0-.165-.16a.5.5 0 0 0-.233-.061h-.003a.5.5 0 0 0-.148.022h-.002l-1.385.456l-.2-.13a5 5 0 0 0-.57-.317l-.225-.107l-.294-1.416V2.35a.43.43 0 0 0-.157-.25a.47.47 0 0 0-.3-.1H6.86a.47.47 0 0 0-.3.1a.43.43 0 0 0-.158.25v.002l-.295 1.417l-.225.106q-.298.141-.575.318l-.205.132l-1.344-.473a.5.5 0 0 0-.132-.01l-.016.002h-.016a.5.5 0 0 0-.233.06a.44.44 0 0 0-.165.16l-.002.005l-1.128 1.86a.41.41 0 0 0 .092.531l.008.007l1.071.955v.752L2.193 9.491l-.039.033a.41.41 0 0 0-.092.54l.003.005l1.131 1.866a.45.45 0 0 0 .165.16q.107.06.233.061h.003q.075 0 .148-.022h.002l1.385-.456l.2.13q.274.177.57.317l.225.107l.295 1.418c.02.096.073.186.156.25c.084.066.19.102.3.1h2.277a.47.47 0 0 0 .3-.1l.617.788A1.47 1.47 0 0 1 9.14 15H6.892a1.47 1.47 0 0 1-.93-.312a1.43 1.43 0 0 1-.52-.837l-.195-.936a6 6 0 0 1-.25-.14l-.945.31a1.48 1.48 0 0 1-1.181-.119a1.44 1.44 0 0 1-.534-.518l-1.126-1.86a1.41 1.41 0 0 1 .259-1.794l.747-.942l-.713-.635a1.41 1.41 0 0 1-.296-1.802l.002-.002l1.127-1.86a1.45 1.45 0 0 1 1.239-.709q.226-.012.446.043l.022.006l.935.329q.123-.072.25-.138l.194-.934a1.43 1.43 0 0 1 .52-.838c.264-.207.594-.317.93-.312M3.591 13.156H3.59l.004-.5v.5zm8.813-10.312h.002l-.004.5v-.5zM8 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4M5 8a3 3 0 1 1 4.845 2.366l1.571 2.357l-.832.554l-1.623-2.434A3 3 0 0 1 5 8" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSettingSearchFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShareFilledIcon],svg[lsicon-share-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.592 2.446a.5.5 0 0 1 .707 0l1.875 1.875l-.707.707l-.967-.966V8.5h-1V3.952L6.424 5.028l-.707-.707zM3 6.5a.5.5 0 0 1 .5-.5h1.636v1H4v6h8V7h-1.136V6H12.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShareFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShelfDownFilledIcon],svg[lsicon-shelf-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.207 2H4.793L2 4.793V14h12V4.793zm-7.5 2.5l1.5-1.5h5.586l1.5 1.5zM7.5 7v3.293L6.354 9.146l-.708.708L8 12.207l2.354-2.353l-.708-.708L8.5 10.293V7z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShelfDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShelfFilledIcon],svg[lsicon-shelf-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h3v4.5H2zm4.5 0h3v4.5h-3zM11 2h3v4.5h-3zm3 6.5H2v-1h12zm-12 1h3V14H2zm4.5 0h3V14h-3zm4.5 0h3V14h-3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShelfFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShelfUpFilledIcon],svg[lsicon-shelf-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.207 2H4.793L2 4.793V14h12V4.793zm-7.5 2.5l1.5-1.5h5.586l1.5 1.5zm5.94 5.354l.707-.708L8 6.793L5.646 9.146l.708.708L7.5 8.707V12h1V8.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShelfUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShellWindowMaximizeFilledIcon],svg[lsicon-shell-window-maximize-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.146 4.146A.5.5 0 0 1 3.5 4h9a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShellWindowMaximizeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShellWindowMinimizeFilledIcon],svg[lsicon-shell-window-minimize-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 8.5H3v-1h10z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShellWindowMinimizeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShieldFilledIcon],svg[lsicon-shield-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2H2v7a6 6 0 0 0 12 0zM5.854 7.146l-.708.708L7.5 10.207l3.854-3.853l-.707-.708L7.5 8.793z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShieldFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShoppingBagFilledIcon],svg[lsicon-shopping-bag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a3 3 0 0 0-3 3H3.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H11a3 3 0 0 0-3-3m0 1a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2M6 5H5v2h1zm5 0h-1v2h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShoppingBagFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconShoppingCartFilledIcon],svg[lsicon-shopping-cart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 2h1.5a.5.5 0 0 1 .496.438L3.941 10h8.135l.834-5H4V4h9.5a.5.5 0 0 1 .493.582l-1 6A.5.5 0 0 1 12.5 11h-9a.5.5 0 0 1-.496-.438L2.059 3H1zm9 5H6V6h4zm0 2H6V8h4zm-6.104 2.896a1.56 1.56 0 1 1 2.208 2.208a1.56 1.56 0 0 1-2.208-2.208m1.5.708a.56.56 0 1 0-.792.792a.56.56 0 0 0 .792-.792m4.5-.708a1.56 1.56 0 1 1 2.208 2.208a1.56 1.56 0 0 1-2.208-2.208m1.5.708a.56.56 0 1 0-.792.792a.56.56 0 0 0 .792-.792" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShoppingCartFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSortAToZFilledIcon],svg[lsicon-sort-a-to-z-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.338 12.274V1.91h1v10.363L7 10.749l.676.737l-2.838 2.603L2 11.486l.676-.737zM10.628 2h1.744l.981 3.271l.02.051a23 23 0 0 1 .29.796c.08.232.161.487.223.72c.058.216.114.465.114.662h-1c0-.053-.022-.187-.08-.404a11 11 0 0 0-.203-.655a20 20 0 0 0-.181-.506h-2.072c-.053.142-.117.319-.181.506c-.076.222-.15.453-.203.655c-.058.217-.08.351-.08.404H9c0-.197.056-.446.114-.663c.062-.232.143-.487.223-.719a22 22 0 0 1 .29-.796l.02-.05zm.164 2.935h1.416L11.628 3h-.256zM9 9h5v1.25L10.333 13H14v1H9v-1.25L12.667 10H9z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSortAToZFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSortFilledIcon],svg[lsicon-sort-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .374.168l4 4.5A.5.5 0 0 1 12 7.5H4a.5.5 0 0 1-.374-.832l4-4.5A.5.5 0 0 1 8 2M3.544 8.795A.5.5 0 0 1 4 8.5h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5a.5.5 0 0 1-.082-.537" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSortFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSortFilterFilledIcon],svg[lsicon-sort-filter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.5 1.529l2.838 2.603l-.676.737L5 3.344V14H4V3.344L2.338 4.869l-.676-.737zm6.454 10.745V1.91h1v10.363l1.662-1.525l.676.737l-2.838 2.603l-2.838-2.603l.676-.737z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSortFilterFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSortZToAFilledIcon],svg[lsicon-sort-z-to-a-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.338 12.274V1.91h1v10.363L7 10.749l.676.737l-2.838 2.603L2 11.486l.676-.737zM9 2h4.5v1.207L10.207 6.5H13.5v1H9V6.293L12.293 3H9zm1.662 6.5h1.21l1 3.336l.02.047a20 20 0 0 1 .281.767c.077.224.156.471.216.698c.057.212.111.455.111.652h-1a2 2 0 0 0-.077-.395a10 10 0 0 0-.196-.63c-.06-.175-.12-.341-.17-.475h-1.952c-.07.141-.16.325-.25.52a8 8 0 0 0-.259.624q-.052.145-.076.246l-.017.08L9.5 14h-1c0-.22.079-.48.154-.69a9 9 0 0 1 .291-.705a17 17 0 0 1 .377-.77l.024-.045zm-.123 3h1.189l-.51-1.7z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSortZToAFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSoupFilledIcon],svg[lsicon-soup-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.12 2.093a.5.5 0 0 1 .697.117l-.407.29l.407-.29v.001l.002.002l.005.006l.013.02a3 3 0 0 1 .169.285c.082.159.208.437.208.726s-.126.567-.208.726a3 3 0 0 1-.17.285l-.012.02l-.004.004l-.005.009a2 2 0 0 0-.106.183a.8.8 0 0 0-.095.267c0 .037.026.137.095.275a2 2 0 0 0 .107.189l.006.009m0 0a.5.5 0 0 1-.825.566L5.41 5.5l-.413.283V5.78l-.002-.002l-.004-.006l-.013-.02a3 3 0 0 1-.165-.289c-.08-.16-.201-.44-.199-.728c.003-.282.124-.555.203-.711a3 3 0 0 1 .162-.281l.013-.02l.004-.006l.002-.002L5.41 4l-.411-.285l.003-.005l.007-.01a2 2 0 0 0 .109-.184a.8.8 0 0 0 .096-.266a.8.8 0 0 0-.096-.266a2 2 0 0 0-.11-.185l-.005-.009h-.001a.5.5 0 0 1 .117-.697m2.976-1a.5.5 0 0 0-.698.117l.407.29l-.407-.29v.001l-.002.002l-.005.006l-.013.02a3 3 0 0 0-.169.285C7.126 1.683 7 1.961 7 2.25s.126.567.208.726a3 3 0 0 0 .17.285l.012.02l.004.004l.005.009a2 2 0 0 1 .106.183a.8.8 0 0 1 .095.267a.8.8 0 0 1-.094.275a2 2 0 0 1-.108.189l-.006.009m0 0a.5.5 0 0 0 .825.566L7.804 4.5l.413.283V4.78l.002-.002l.004-.006l.013-.02a3 3 0 0 0 .165-.289c.08-.16.201-.44.199-.728c-.003-.282-.124-.555-.203-.711a3 3 0 0 0-.162-.281l-.013-.02l-.004-.005l-.002-.003L7.803 3l.411-.285l-.003-.005l-.007-.01a2 2 0 0 1-.109-.184A.8.8 0 0 1 8 2.25c0-.034.026-.13.096-.266a2 2 0 0 1 .11-.185l.005-.009h.001a.5.5 0 0 0-.117-.697m3 1a.5.5 0 0 0-.698.117l.407.29l-.407-.29v.001l-.002.002l-.005.006l-.013.02l-.043.065c-.034.054-.08.13-.126.22c-.082.159-.208.437-.208.726s.126.567.208.726a3 3 0 0 0 .17.285l.012.02l.003.004l.006.009a2 2 0 0 1 .106.183a.8.8 0 0 1 .095.267a.8.8 0 0 1-.095.275a2 2 0 0 1-.107.189l-.006.009m0 0a.5.5 0 0 0 .825.566l-.413-.283l.413.283V5.78l.002-.002l.004-.006l.013-.02a3 3 0 0 0 .165-.289c.08-.16.201-.44.199-.728c-.002-.282-.123-.555-.203-.711a3 3 0 0 0-.162-.281l-.013-.02l-.004-.005l-.002-.003l-.412.284l.411-.285l-.004-.005l-.005-.01l-.027-.04a2 2 0 0 1-.083-.144A.8.8 0 0 1 11 3.25c0-.034.026-.13.096-.266a2 2 0 0 1 .11-.185l.005-.009h.001a.5.5 0 0 0-.117-.697"></svg:path><svg:path d="M1 6.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5c0 1.325-.514 2.663-1.277 3.785c-.697 1.025-1.626 1.906-2.628 2.452v.763a.5.5 0 0 1-.5.5H5.438a.5.5 0 0 1-.5-.5v-.763c-1.002-.546-1.938-1.425-2.643-2.45C1.524 9.166 1 7.827 1 6.5"></svg:path></svg:g>`,
})
export class LsiconSoupFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconStampFilledIcon],svg[lsicon-stamp-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 5.5a3.5 3.5 0 1 1 5.405 2.936c-.254.166-.388.377-.403.564H12.5a1.5 1.5 0 0 1 1.5 1.5V12H2v-1.5A1.5 1.5 0 0 1 3.5 9h2.998c-.015-.187-.149-.398-.403-.564A3.5 3.5 0 0 1 4.5 5.5M14 13v1H2v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconStampFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconStarFilledIcon],svg[lsicon-star-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 1.91l2.035 3.943l3.938.845l-2.71 2.868l.3 4.33L8 11.867l-3.563 2.029l.299-4.33l-2.71-2.868l3.938-.845z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconStarFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconStopFilledIcon],svg[lsicon-stop-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6 5.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconStopFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconStoreFilledIcon],svg[lsicon-store-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 2a.5.5 0 0 0-.447.276l-1.5 3A.5.5 0 0 0 2 5.5v3a.5.5 0 0 0 .5.5H3v5h1V9h1.5v4.5a.5.5 0 0 0 .5.5h6.5a.5.5 0 0 0 .5-.5V9h.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.053-.224l-1.5-3A.5.5 0 0 0 12 2zm2.5 11V9H12v4zM6 6H5v2h1zm1.5 0h1v2h-1zM11 6h-1v2h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconStoreFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSubmitFilledIcon],svg[lsicon-submit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V7h-1V3H3v10h2.005v1H2.5a.5.5 0 0 1-.5-.5zm11.994 6.832l-4.52 4.519a.5.5 0 0 1-.706 0l-2.51-2.51l.706-.708l2.157 2.157l4.166-4.166z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSubmitFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSunnyFilledIcon],svg[lsicon-sunny-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 3V1h1v2zm-4.146-.354l1.5 1.5l-.708.708l-1.5-1.5zm10 .708l-1.5 1.5l-.708-.708l1.5-1.5zM4.5 8a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0M3 8.5H1v-1h2zm12 0h-2v-1h2zM2.646 12.646l1.5-1.5l.708.708l-1.5 1.5zm10 .708l-1.5-1.5l.708-.708l1.5 1.5zM7.5 15v-2h1v2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSunnyFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSurfaceFrontFilledIcon],svg[lsicon-surface-front-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.26 2h7.48L14 4.825V14H2V4.825zm.48 1l-1.2 1.5h8.92L11.26 3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSurfaceFrontFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSurfaceLeftFilledIcon],svg[lsicon-surface-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 .95l7 3.23v7.64l-7 3.23l-7-3.23V4.18zm.5 12.769L14 11.18V5.281L8.5 7.82zM8 6.949L13.307 4.5L8 2.05L2.693 4.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSurfaceLeftFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSurfaceRightFilledIcon],svg[lsicon-surface-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 .95l7 3.23v7.64l-7 3.23l-7-3.23V4.18zM2 5.28v5.9l5.5 2.538v-5.9zm11.307-.78L8 2.05L2.693 4.5L8 6.95z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSurfaceRightFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSurfaceTopFilledIcon],svg[lsicon-surface-top-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 .95l1.293.596L15 4.18v7.64l-7 3.23l-7-3.23V4.18zM2 5.28v5.9l5.5 2.538v-5.9zm6.5 2.54v5.899L14 11.18V5.281z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSurfaceTopFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSuspendFilledIcon],svg[lsicon-suspend-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6 11h1V5H6zm4-6H9v6h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSuspendFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSwerveFilledIcon],svg[lsicon-swerve-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5.5a7 7 0 1 0 0 14a7 7 0 0 0 0-14m1.271 5.479L9.793 7H5.5a.5.5 0 0 0-.5.5V11h1V8h3.793L8.77 9.021l.708.708l1.875-1.875a.5.5 0 0 0 0-.708L9.479 5.271z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSwerveFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconSwitchFilledIcon],svg[lsicon-switch-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.33 2.624l5 4.376H2V6h9.67l-3-2.624zM1.5 9H14v1H4.5l2.8 2.1l-.6.8z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconSwitchFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTableFilledIcon],svg[lsicon-table-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm1 2.5v2h2.5v-2zm3.5 0v2h3v-2zm6.5-1H3V3h10zm0 4h-2.5v2H13zM9.5 13v-1.5h-3V13zm-4 0v-1.5H3V13zm1-4.5v2h3v-2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTableFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTextFilledIcon],svg[lsicon-text-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 4H4v1H3V3h10v2h-1V4H8.5v8H10v1H6v-1h1.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTextFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconThermoDynamicFilledIcon],svg[lsicon-thermo-dynamic-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 2c-.71 0-1.284.552-1.737 1.387C7.533 4.737 6.21 6 4.5 6a2.5 2.5 0 0 0 0 5h.516c1.424 0 2.562.934 3.331 1.927C8.858 13.587 9.578 14 10.5 14a3.5 3.5 0 0 0 2.48-5.97c-.163-.167-.353-.36-.518-.58c-.654-.872-.765-1.945-.53-2.94Q12 4.24 12 4a2 2 0 0 0-2-2m-2.616.91C7.874 2.006 8.704 1 10 1a3 3 0 0 1 3 3c0 .26-.04.51-.095.741c-.183.775-.08 1.526.357 2.109c.125.166.274.319.452.5l.003.004A4.5 4.5 0 0 1 10.5 15c-1.263 0-2.263-.583-2.943-1.46c-.695-.897-1.574-1.54-2.54-1.54H4.5a3.5 3.5 0 1 1 0-7c1.185 0 2.237-.894 2.884-2.09m3.665 1.034c-.02.1-.06.195-.102.28c-.064.128-.102.362-.074.72c.028.346.113.749.233 1.169c.24.84.602 1.685.841 2.163c.074.149.14.269.206.391c.048.09.097.18.15.283c.115.221.227.459.303.725c.159.557.142 1.162-.132 1.983c-.268.806-.896 1.19-1.505 1.34a3.5 3.5 0 0 1-1.56-.006a.99.99 0 0 1-.753-.548c-.131-.255-.175-.555-.191-.82a8 8 0 0 1 .006-.847l.008-.166c.011-.22.021-.423.021-.611c0-.4-.092-.904-.206-1.525l-.036-.198C8.133 7.589 8 6.8 8 6c0-.51.21-.983.468-1.366c.261-.386.597-.72.913-.966a3.4 3.4 0 0 1 .47-.31c.142-.077.31-.15.477-.173a.7.7 0 0 1 .338.028a.6.6 0 0 1 .357.34c.06.152.046.296.026.391M6.89 7.375c.42.525.354 1.255.057 1.849c-.32.642-1.015.836-1.55.886a4.8 4.8 0 0 1-1.518-.125a.5.5 0 0 1-.233-.131c-.27-.272-.486-.552-.593-.849a1.08 1.08 0 0 1 .08-.95c.161-.267.423-.46.697-.61c.28-.154.625-.29 1.012-.42c.837-.279 1.607-.202 2.048.35" clip-rule="evenodd"></svg:path>`,
})
export class LsiconThermoDynamicFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconThumbDownFilledIcon],svg[lsicon-thumb-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.58 2h.443l-.02 9.545l1.089 2.179a.5.5 0 0 0 .447.276h.254a2.5 2.5 0 0 0 2.48-2.81l-.152-1.221h3.303a1.5 1.5 0 0 0 1.482-1.732l-.647-4.124A2.5 2.5 0 0 0 11.79 2zm-.574 7.969L5.023 2H2.5a.5.5 0 0 0-.5.5v6.969a.5.5 0 0 0 .5.5z"></svg:path>`,
})
export class LsiconThumbDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconThumbUpFilledIcon],svg[lsicon-thumb-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.539 2a.5.5 0 0 0-.447.276L5.5 5.46V14h6.289a2.5 2.5 0 0 0 2.47-2.113l.647-4.124a1.5 1.5 0 0 0-1.482-1.732h-3.303l.152-1.22A2.5 2.5 0 0 0 7.793 2zM4.5 14V6.031h-2a.5.5 0 0 0-.5.5V13.5a.5.5 0 0 0 .5.5z"></svg:path>`,
})
export class LsiconThumbUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTimeOneFilledIcon],svg[lsicon-time-one-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m.5 6.793V4h-1v4.207l3.146 3.147l.708-.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTimeOneFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTimeTwoFilledIcon],svg[lsicon-time-two-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7.5-4v3.793l2.854 2.853l-.708.708L7.5 8.207V4zm0-1V2h-1v1zm0 11v-1h-1v1zM13 7.5h1v1h-1zm-10 0H2v1h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTimeTwoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTimingShelfDownFilledIcon],svg[lsicon-timing-shelf-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a6 6 0 1 1 12 0h1v-.084a7 7 0 1 0-7.084 7.083l.012-1A6 6 0 0 1 2 8"></svg:path><svg:path fill="currentColor" d="M8.5 8V4h-1v3.5H4v1h4a.5.5 0 0 0 .5-.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 8a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M11 9.5v2.293l-.646-.647l-.708.708l1.854 1.853l1.854-1.853l-.707-.708l-.647.647V9.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTimingShelfDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconToBottomFilledIcon],svg[lsicon-to-bottom-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2 3h12M2 2h12M7.979 2v11M11.5 9.729L7.979 13.25L4.457 9.729"></svg:path>`,
})
export class LsiconToBottomFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconToTopFilledIcon],svg[lsicon-to-top-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.979 2l3.875 3.875l-.707.707l-2.668-2.668V12.5H14v2H2v-2h5.479V3.914L4.81 6.582l-.707-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconToTopFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconToggleFilledIcon],svg[lsicon-toggle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .374.168l4 4.5l-.748.664L8 2.252l-3.626 4.08l-.748-.664l4-4.5A.5.5 0 0 1 8 1m0 12.747l-3.626-4.08l-.748.665l4 4.5a.5.5 0 0 0 .748 0l4-4.5l-.748-.664z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconToggleFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconToggleWarehouseXFilledIcon],svg[lsicon-toggle-warehouse-x-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M11 12.5h3.5v-7L8 3.5l-6.5 2V8m3-1.5v6m0 0l-2-2m2 2l2-2m1.5-1l2-2m0 0l2 2m-2-2V12"></svg:path>`,
})
export class LsiconToggleWarehouseXFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconToggleWarehouseYFilledIcon],svg[lsicon-toggle-warehouse-y-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 2.977l7 2.154V13h-4v-1h3V5.87L8 4.022L2 5.87V8H1V5.13zm3.354 3.17L13.707 8.5l-2.353 2.354l-.708-.708L11.793 9H7V8h4.793l-1.147-1.146zM3.207 11l1.147 1.146l-.708.708L1.293 10.5l2.353-2.354l.708.708L3.207 10H8v1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconToggleWarehouseYFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTopAlignFilledIcon],svg[lsicon-top-align-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 3H2V2h12zM3 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTopAlignFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTopFilledIcon],svg[lsicon-top-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 3H2V2h12zM7.979 4.008l4.484 4.484l-.707.707l-3.277-3.277v7.984h-1V5.922L4.2 9.199l-.707-.707z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTopFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTranslateFilledIcon],svg[lsicon-translate-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3V2h1v1h2v1h-.691L6.036 6.546l1.284 1.07l-.64.768l-1.286-1.071l-1.54 1.54l-.708-.707L4.623 6.67l-.943-.786l.64-.768l.927.772L6.19 4H3V3zm6.5 1h-2V3h2A1.5 1.5 0 0 1 13 4.5v2h-1v-2a.5.5 0 0 0-.5-.5m-.03 3.83L11 8l-.47-.17l.47-1.293zm.577 4.67q.088.266.164.504c.093.29.169.539.221.728q.039.141.057.224l.011.06V14h1c0-.09-.019-.187-.034-.255a5 5 0 0 0-.07-.28a21 21 0 0 0-.232-.766a92 92 0 0 0-.692-2.05a228 228 0 0 0-.916-2.582l-.086-.237L11 8l-.47-.17l-.086.237a248 248 0 0 0-.916 2.581a92 92 0 0 0-.692 2.051a21 21 0 0 0-.232.767a5 5 0 0 0-.07.279A1.3 1.3 0 0 0 8.5 14h1v.016l.011-.06q.017-.083.057-.224c.052-.19.128-.437.22-.728l.165-.504zm-.338-1A149 149 0 0 0 11 9.479a220 220 0 0 0-.709 2.021zM3 11.5V10h1v1.5a.5.5 0 0 0 .5.5H7v1H4.5A1.5 1.5 0 0 1 3 11.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTranslateFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTreeFilledIcon],svg[lsicon-tree-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.146 2.153a.5.5 0 0 1 .354-.146h3a.5.5 0 0 1 .5.5V4.51a.5.5 0 0 1-.5.5H8.497V7h4.5a.5.5 0 0 1 .5.5V10H14.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.997V8h-4v2H9.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.997V8h-4v2H4.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h.997V7.5a.5.5 0 0 1 .5-.5h4.5V5.01H6.5a.5.5 0 0 1-.5-.5V2.508a.5.5 0 0 1 .146-.354" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTreeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleDownFilledIcon],svg[lsicon-triangle-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.554 5.773A.5.5 0 0 1 4 5.5h8a.5.5 0 0 1 .404.794l-4 5.5a.5.5 0 0 1-.808 0l-4-5.5a.5.5 0 0 1-.042-.52" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTriangleDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleLeftFilledIcon],svg[lsicon-triangle-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.227 3.554A.5.5 0 0 1 10.5 4v8a.5.5 0 0 1-.794.404l-5.5-4a.5.5 0 0 1 0-.808l5.5-4a.5.5 0 0 1 .52-.042" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTriangleLeftFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleRightFilledIcon],svg[lsicon-triangle-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.773 3.554a.5.5 0 0 1 .521.042l5.5 4a.5.5 0 0 1 0 .808l-5.5 4A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .273-.446" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTriangleRightFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleUpFilledIcon],svg[lsicon-triangle-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .404.206l4 5.5A.5.5 0 0 1 12 10.5H4a.5.5 0 0 1-.404-.794l4-5.5A.5.5 0 0 1 8 4" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTriangleUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconTriangleWarningFilledIcon],svg[lsicon-triangle-warning-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.842 14L8 1.456L1.158 14zM7.5 6v4h1V6zm.5 4.745a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconTriangleWarningFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUndoFilledIcon],svg[lsicon-undo-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 3a5 5 0 0 0-4.325 2.489H5.49v1h-3.5V3.01h1V4.7a6 6 0 1 1 .282 6.993l.787-.615A5 5 0 1 0 8 3" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUndoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUnlinkFilledIcon],svg[lsicon-unlink-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 2v2H6V2zm2.297.98a2.625 2.625 0 0 1 3.712 3.712l-1.561 1.562l-.707-.707l1.561-1.562a1.625 1.625 0 0 0-2.298-2.298L8.443 5.25l-.707-.707zM3.44 2.732l1.415 1.414l-.708.708l-1.414-1.415zM2 6h2v1H2zm3.379 2.313L3.817 9.874a1.625 1.625 0 0 0 2.298 2.298l1.562-1.561l.707.707l-1.562 1.562A2.625 2.625 0 0 1 3.11 9.167l1.562-1.561zM14 10h-2V9h2zm-2.146 1.146l1.414 1.415l-.707.707l-1.415-1.415zM9 14v-2h1v2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUnlinkFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUnlockFilledIcon],svg[lsicon-unlock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a3 3 0 0 0-3 3v3H3v8h10V7H6V4a2 2 0 1 1 4 0v1h1V4a3 3 0 0 0-3-3m0 8.5a1 1 0 0 0-.5 1.866V12.5h1v-1.134A1 1 0 0 0 8 9.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUnlockFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUpFilledIcon],svg[lsicon-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 5.293l3.854 3.853l-.707.708L8 6.707L4.854 9.854l-.708-.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUploadingFilledIcon],svg[lsicon-uploading-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M13.55 9.529v3.996H2.501V9.53M8 11.053l-.022-8.097m3.286 3.035L7.979 2.706L4.693 5.99"></svg:path>`,
})
export class LsiconUploadingFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUrgencyFilledIcon],svg[lsicon-urgency-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.083.739v6.205h3.357l-5.523 8.192V9.61H5.603zM6.5 4H2V3h4.5zm-1 4.5H2v-1h3.5zm1 4.5H2v-1h4.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUrgencyFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserAllFilledIcon],svg[lsicon-user-all-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m10-1h-3V3h3zm0 2h-3V5h3zm0 2h-3V7h3zM2 14v-.5A4.5 4.5 0 0 1 6.5 9h1a4.5 4.5 0 0 1 4.5 4.5v.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserAllFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserBlackFilledIcon],svg[lsicon-user-black-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a6 6 0 0 0-4.383 10.098A3.5 3.5 0 0 1 7 9.5h2c.38 0 .748.061 1.092.174l-.311.95A2.5 2.5 0 0 0 9 10.5H7a2.5 2.5 0 0 0-2.497 2.376a6.02 6.02 0 0 0 4.956.946l.242.97a7 7 0 1 1 5.123-5.226l-.975-.223Q14 8.695 14 8a6 6 0 0 0-6-6m0 2.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M5.5 6a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m6.293 6.5l-1.147-1.146l.708-.708l1.146 1.147l1.146-1.147l.708.708l-1.147 1.146l1.147 1.146l-.708.708l-1.146-1.147l-1.146 1.147l-.708-.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserBlackFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserCrowdFilledIcon],svg[lsicon-user-crowd-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.195 4.105a2.105 2.105 0 1 1 4.21 0a2.105 2.105 0 0 1-4.21 0m7.5 0a2.105 2.105 0 1 1 4.21 0a2.105 2.105 0 0 1-4.21 0m-3.8 3a2.105 2.105 0 1 1 4.21 0a2.105 2.105 0 0 1-4.21 0M5 6.8H3.5A2.5 2.5 0 0 0 1 9.3v1.2h4zm6 0h1.5A2.5 2.5 0 0 1 15 9.3v1.2h-4zm-6.3 5.5a2.5 2.5 0 0 1 2.5-2.5h1.6a2.5 2.5 0 0 1 2.5 2.5V14H4.7z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserCrowdFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserFilledIcon],svg[lsicon-user-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-2 9v-.5A4.5 4.5 0 0 1 7.5 9h1a4.5 4.5 0 0 1 4.5 4.5v.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserLeaveFilledIcon],svg[lsicon-user-leave-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m8.5 1.293V4h1v2.293l.646-.647l.708.708l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5l.708-.708zM2 14v-.5A4.5 4.5 0 0 1 6.5 9h1a4.5 4.5 0 0 1 4.5 4.5v.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserLeaveFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserLikeFilledIcon],svg[lsicon-user-like-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m9.92-1.5c.218 0 .43.048.627.14c.196.092.37.225.513.388c.287.328.44.758.44 1.196s-.153.868-.44 1.195v.002l-1.684 1.91a.5.5 0 0 1-.75 0L10.94 6.42l-.002-.002a1.82 1.82 0 0 1-.439-1.195c0-.438.153-.867.44-1.195a1.6 1.6 0 0 1 .513-.388A1.47 1.47 0 0 1 13 3.822q.136-.107.295-.182c.196-.092.409-.14.626-.14M2 14v-.5A4.5 4.5 0 0 1 6.5 9h1a4.5 4.5 0 0 1 4.5 4.5v.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserLikeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserNewFilledIcon],svg[lsicon-user-new-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m8-.54V4h-1v4h1V6.175l.103.129l.007.008c.253.317.492.616.669.867q.133.189.193.303L13 7.54V8h1V4h-1v1.825l-.103-.129l-.007-.008a20 20 0 0 1-.669-.867a3 3 0 0 1-.193-.303zM2 14v-.5A4.5 4.5 0 0 1 6.5 9h1a4.5 4.5 0 0 1 4.5 4.5v.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserNewFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserPortrayalFilledIcon],svg[lsicon-user-portrayal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 14.064A6.97 6.97 0 0 1 8 15c-1.275 0-2.47-.34-3.5-.937V13A2.5 2.5 0 0 1 7 10.5h2a2.5 2.5 0 0 1 2.5 2.5zM8 4.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 13.362V13A3.5 3.5 0 0 0 9 9.5H7A3.5 3.5 0 0 0 3.5 13v.362a7 7 0 1 1 9 0M5.5 6a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserPortrayalFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserSilenceFilledIcon],svg[lsicon-user-silence-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m8.793 0H11V4h3v1a.5.5 0 0 1-.146.354L12.207 7H14v1h-3V7a.5.5 0 0 1 .146-.354zM2 14v-.5A4.5 4.5 0 0 1 6.5 9h1a4.5 4.5 0 0 1 4.5 4.5v.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconUserSilenceFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconUserWhiteFilledIcon],svg[lsicon-user-white-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" d="M10 12.286L11.454 14L14 11"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a6 6 0 0 0-4.383 10.098A3.5 3.5 0 0 1 7 9.5h2c.38 0 .748.061 1.092.174l-.311.95A2.5 2.5 0 0 0 9 10.5H7a2.5 2.5 0 0 0-2.497 2.376a6.02 6.02 0 0 0 4.956.946l.242.97a7 7 0 1 1 5.123-5.226l-.975-.223Q14 8.695 14 8a6 6 0 0 0-6-6m0 2.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M5.5 6a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LsiconUserWhiteFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVerticalCenterFilledIcon],svg[lsicon-vertical-center-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 3V1h1v2h4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-4v2h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3v2h-1v-2h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3V7h-4a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVerticalCenterFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVerticalSplitFilledIcon],svg[lsicon-vertical-split-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 3H2V2h12zM3 6h10v4H3zm11 8H2v-1h12z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVerticalSplitFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconViewFilledIcon],svg[lsicon-view-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.5 8l.415-.208V7.79l-.003-.003l-.006-.012l-.021-.04l-.08-.144a8 8 0 0 0-.311-.494a9.4 9.4 0 0 0-1.255-1.485C12.113 4.532 10.38 3.43 8 3.43c-2.378 0-4.112 1.101-5.238 2.182a9.4 9.4 0 0 0-1.255 1.485a8 8 0 0 0-.412.678l-.006.012l-.002.003v.001s-.001.001.414.209l-.415-.209a.47.47 0 0 0 0 .417L1.5 8l-.415.208v.002l.003.003l.006.012a3 3 0 0 0 .1.184a9.4 9.4 0 0 0 1.566 1.98c1.127 1.08 2.86 2.18 5.24 2.18c2.379 0 4.113-1.1 5.24-2.181a9.5 9.5 0 0 0 1.254-1.485a8 8 0 0 0 .391-.638l.021-.04l.006-.012l.002-.003v-.001s.001-.001-.414-.209m0 0l.415.209a.47.47 0 0 0 0-.417zM7.94 6.464a1.536 1.536 0 1 0 0 3.072a1.536 1.536 0 0 0 0-3.072M5.478 8a2.464 2.464 0 1 1 4.928 0a2.464 2.464 0 0 1-4.928 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconViewFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconViewOffFilledIcon],svg[lsicon-view-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.428 7.163C4.436 8.13 5.944 9.076 8 9.076s3.564-.946 4.572-1.913a8.5 8.5 0 0 0 1.124-1.332a7 7 0 0 0 .34-.55l.014-.028l.003-.006l.447.224l.447.224l-.001.002l-.002.003l-.006.012a4 4 0 0 1-.102.185c-.07.122-.174.293-.313.497a9.5 9.5 0 0 1-1.259 1.49a8.5 8.5 0 0 1-1.358 1.065l1.22 2.636l-.908.42l-1.194-2.58a7.2 7.2 0 0 1-2.56.637V13h-1v-2.943a7.2 7.2 0 0 1-2.468-.623l-1.205 2.573l-.905-.425l1.228-2.621a8.4 8.4 0 0 1-1.378-1.077a9.5 9.5 0 0 1-1.26-1.49a8 8 0 0 1-.414-.682L1.056 5.7l-.002-.003v-.002l.446-.224l.447-.224l.003.006l.015.028q.02.039.065.116a8.5 8.5 0 0 0 1.398 1.766" clip-rule="evenodd"></svg:path>`,
})
export class LsiconViewOffFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVipConsumeFilledIcon],svg[lsicon-vip-consume-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.624 2.17A.5.5 0 0 1 5 2h6a.5.5 0 0 1 .376.17l3.5 4a.5.5 0 0 1-.022.684l-1.5 1.5l-.708-.708l1.17-1.169L10.773 3H5.227L2.173 6.49l5.84 6.29l1.133-1.134l.708.708l-1.5 1.5a.5.5 0 0 1-.72-.014l-6.5-7a.5.5 0 0 1-.01-.67zm3.002 8.662l-4-4.5l.748-.664L8 9.748l3.626-4.08l.748.664l-4 4.5a.5.5 0 0 1-.748 0M12.5 9v2.293l.646-.647l.708.708l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5l.708-.708l.646.647V9z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVipConsumeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVipFilledIcon],svg[lsicon-vip-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.227 2H4.773L.827 6.51L8 14.235l7.173-7.725zM4.374 5.668l-.748.664L8 11.252l4.374-4.92l-.748-.664L8 9.748z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVipFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVolumeDownFilledIcon],svg[lsicon-volume-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.709 2.046A.5.5 0 0 1 9 2.5v11a.5.5 0 0 1-.825.38L4.815 11H2.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h2.315l3.36-2.88a.5.5 0 0 1 .534-.074M14 8.5h-4v-1h4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVolumeDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVolumeFilledIcon],svg[lsicon-volume-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 1.413v13.174L4.815 11H2V5h2.815zm4.053 1.99a6.5 6.5 0 0 1 0 9.193l-.707-.707a5.5 5.5 0 0 0 0-7.778zm-2.078 2.122a3.5 3.5 0 0 1 0 4.95l-.707-.707a2.5 2.5 0 0 0 0-3.536z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVolumeFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVolumeMuteFilledIcon],svg[lsicon-volume-mute-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 1.416v4.66H8l-1.245-1.43l-.649-.761zM4.293 5L1.646 2.354l.708-.708l12 12l-.707.707L9 9.708v4.88L4.815 11H2V5zm8.76-1.596a6.5 6.5 0 0 1 1.36 7.202c-.153.373-.233.566-.533.972l-.804-.595c.226-.305.268-.407.411-.754l.051-.124a5.5 5.5 0 0 0-1.192-5.994zm-2.078 2.121A3.5 3.5 0 0 1 12 8c0 .281-.079.553-.143.733a3 3 0 0 1-.126.3l-.01.021l-.004.007v.002l-.001.001l-.444-.23l-.444-.23l.004-.009a2 2 0 0 0 .083-.199c.05-.138.085-.283.085-.396a2.5 2.5 0 0 0-.732-1.768z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVolumeMuteFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconVolumeUpFilledIcon],svg[lsicon-volume-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.709 2.046A.5.5 0 0 1 9 2.5v11a.5.5 0 0 1-.825.38L4.815 11H2.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h2.315l3.36-2.88a.5.5 0 0 1 .534-.074M11.5 7.5V6h1v1.5H14v1h-1.5V10h-1V8.5H10v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconVolumeUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWarehouseFilledIcon],svg[lsicon-warehouse-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.658 2.092a1 1 0 0 1 .684 0l5 1.818a1 1 0 0 1 .658.94V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4.85a1 1 0 0 1 .658-.94zm.342.94L3 4.85V10h4V9a1 1 0 0 1 1-1h5V4.85zM5.5 12v1h-1v-1zm4.5 1h1v-2h-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWarehouseFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWarehouseIntoFilledIcon],svg[lsicon-warehouse-into-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.853 3.022a.5.5 0 0 1 .294 0l6.5 2A.5.5 0 0 1 15 5.5v7a.5.5 0 0 1-.5.5H11v-1h3V5.87L8 4.022L2 5.87V8H1V5.5a.5.5 0 0 1 .353-.478zm-.5 5.624l2 2a.5.5 0 0 1 0 .708l-2 2l-.707-.708L7.793 11.5H1v-1h6.793L6.646 9.354z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWarehouseIntoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWarehousePreFilledIcon],svg[lsicon-warehouse-pre-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.658 2.092a1 1 0 0 1 .684 0l5 1.818a1 1 0 0 1 .658.94V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4.85a1 1 0 0 1 .658-.94zM5 13h1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2h1V7H5zm7 0V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v6H3V4.85l5-1.818l5 1.818V13z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWarehousePreFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWifiAbnormalFilledIcon],svg[lsicon-wifi-abnormal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 10.5V2h1v8.5zM4.209 3.264a9.8 9.8 0 0 1 2.737-.707l.108.994a8.8 8.8 0 0 0-2.458.635A8.9 8.9 0 0 0 1.71 6.143L.998 5.44a9.9 9.9 0 0 1 3.211-2.176m4.843-.707a9.8 9.8 0 0 1 2.738.707A9.9 9.9 0 0 1 15 5.44l-.712.703a8.9 8.9 0 0 0-2.887-1.957a8.8 8.8 0 0 0-2.457-.635zM7.081 6.752a5.74 5.74 0 0 0-3.156 1.637l-.712-.702a6.74 6.74 0 0 1 3.706-1.922zm4.993 1.637a5.74 5.74 0 0 0-3.156-1.637l.161-.987a6.74 6.74 0 0 1 3.707 1.922zm-2.682.746a3.6 3.6 0 0 1 1.178.798l-.711.702a2.6 2.6 0 0 0-.854-.578zm-3.964.798a3.6 3.6 0 0 1 1.179-.798l.387.922c-.319.133-.61.33-.854.578zM6.99 12.49a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWifiAbnormalFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWifiCloseFilledIcon],svg[lsicon-wifi-close-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.105 3.812L1.646 2.354l.708-.708l12 12l-.708.708L9.893 10.6l-.034.034a2.597 2.597 0 0 0-3.719 0l-.712-.702A3.6 3.6 0 0 1 8.15 8.857L6.247 6.954A5.75 5.75 0 0 0 3.925 8.39l-.712-.702a6.8 6.8 0 0 1 2.255-1.512L3.84 4.547a8.9 8.9 0 0 0-2.13 1.595L.998 5.44a10 10 0 0 1 2.107-1.628m1.912-.846a9.78 9.78 0 0 1 6.773.298A9.9 9.9 0 0 1 15 5.44l-.712.702a8.9 8.9 0 0 0-2.887-1.956a8.8 8.8 0 0 0-6.08-.268zm7.057 5.423a5.72 5.72 0 0 0-4.075-1.712v-1c1.797 0 3.519.724 4.787 2.01zM6.99 12.49a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWifiCloseFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWifiFilledIcon],svg[lsicon-wifi-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.209 3.264a9.8 9.8 0 0 1 7.58 0a9.9 9.9 0 0 1 3.212 2.176l-.712.702a8.9 8.9 0 0 0-2.887-1.956a8.8 8.8 0 0 0-6.806 0A8.9 8.9 0 0 0 1.71 6.143L.998 5.44a9.9 9.9 0 0 1 3.211-2.176m3.79 3.413A5.72 5.72 0 0 0 3.925 8.39l-.712-.702a6.72 6.72 0 0 1 4.786-2.01c1.797 0 3.519.724 4.787 2.01l-.712.702a5.72 5.72 0 0 0-4.075-1.712M6.607 9.135a3.6 3.6 0 0 1 3.963.798l-.711.702a2.6 2.6 0 0 0-.854-.578a2.6 2.6 0 0 0-2.865.578l-.712-.702a3.6 3.6 0 0 1 1.179-.798m.383 3.355a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWifiFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWordCloudFilledIcon],svg[lsicon-word-cloud-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a5 5 0 0 0-5 5v.541A3 3 0 0 0 .5 10.5v1A2.5 2.5 0 0 0 3 14h10a2.5 2.5 0 0 0 2.5-2.5v-1A3 3 0 0 0 13 7.541V7a5 5 0 0 0-5-5M5.5 7.5h2V11h1V7.5h2v-1h-5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWordCloudFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderAbnormalFilledIcon],svg[lsicon-work-order-abnormal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H7v-1H4V2h8v5h1V1.5a.5.5 0 0 0-.5-.5z"></svg:path><svg:path fill="currentColor" d="M5 5h6V4H5zm0 2h4V6H5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 8a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m.5 3.5v-2h-1v2zm-.5.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWorkOrderAbnormalFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderAppointmentFilledIcon],svg[lsicon-work-order-appointment-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h3v-1H4V2h8v5h1V1.5a.5.5 0 0 0-.5-.5z"></svg:path><svg:path fill="currentColor" d="M5 5h6V4H5zm0 2h4V6H5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 8a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M10 9.5v2a.5.5 0 0 0 .146.354l1.5 1.5l.708-.708L11 11.293V9.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWorkOrderAppointmentFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderCheckFilledIcon],svg[lsicon-work-order-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V7h-1V2H4v12h2.5v1h-3a.5.5 0 0 1-.5-.5zM11 5H5V4h6zM9 7H5V6h4zm1 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-3 2a3 3 0 1 1 5.445 1.738l1.409 1.408l-.708.708l-1.408-1.409A3 3 0 0 1 7 11" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWorkOrderCheckFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderFilledIcon],svg[lsicon-work-order-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM11 5.5H5v-1h6zm0 3H5v-1h6zm-6 3h4v-1H5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWorkOrderFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkOrderInfoFilledIcon],svg[lsicon-work-order-info-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v5h-1V2H4v12h3v1H3.5a.5.5 0 0 1-.5-.5zM11 5H5V4h6zM9 7H5V6h4zm1.5 2V8h1v1H13v1h-2.5c-.274 0-.5.226-.5.5s.226.5.5.5h1c.826 0 1.5.674 1.5 1.5s-.674 1.5-1.5 1.5v1h-1v-1H9v-1h2.5c.274 0 .5-.226.5-.5s-.226-.5-.5-.5h-1c-.826 0-1.5-.674-1.5-1.5S9.674 9 10.5 9M7 12H5v-1h2z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWorkOrderInfoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkingOddFilledIcon],svg[lsicon-working-odd-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V7h-1V2H4v12h3v1H3.5a.5.5 0 0 1-.5-.5zM11 5H5V4h6zM9 7H5V6h4zm-2 4.5A3.5 3.5 0 0 1 10.5 8a.5.5 0 0 1 .5.5V11h2.5a.5.5 0 0 1 .5.5a3.5 3.5 0 1 1-7 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWorkingOddFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconZoomInFilledIcon],svg[lsicon-zoom-in-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 2a5.5 5.5 0 1 0 3.52 9.727l2.626 2.627l.708-.708l-2.627-2.626A5.5 5.5 0 0 0 7.5 2M7 4.5V7H4.5v1H7v2.5h1V8h2.5V7H8V4.5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconZoomInFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lsiconZoomOutFilledIcon],svg[lsicon-zoom-out-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 2a5.5 5.5 0 1 0 3.52 9.727l2.626 2.627l.708-.708l-2.627-2.626A5.5 5.5 0 0 0 7.5 2m-3 6h6V7h-6z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconZoomOutFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
