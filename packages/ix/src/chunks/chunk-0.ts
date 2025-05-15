import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAboutIcon],svg[ix-about-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667C138.18 42.667 42.667 138.179 42.667 256c0 117.82 95.513 213.334 213.333 213.334c117.822 0 213.334-95.513 213.334-213.334S373.822 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334c94.107 0 170.667 76.56 170.667 170.666S350.107 426.667 256 426.667m26.714-256c0 15.468-11.262 26.667-26.497 26.667c-15.851 0-26.837-11.2-26.837-26.963c0-15.15 11.283-26.37 26.837-26.37c15.235 0 26.497 11.22 26.497 26.666m-48 64h42.666v128h-42.666z"></svg:path>`,
})
export class IxAboutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAboutFilledIcon],svg[ix-about-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.822 0 213.334 95.512 213.334 213.333c0 117.82-95.512 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334S138.18 42.667 256 42.667m21.38 192h-42.666v128h42.666zM256.217 144c-15.554 0-26.837 11.22-26.837 26.371c0 15.764 10.986 26.963 26.837 26.963c15.235 0 26.497-11.2 26.497-26.667c0-15.446-11.262-26.667-26.497-26.667"></svg:path>`,
})
export class IxAboutFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAddIcon],svg[ix-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.119 65.93v168.951h168.952v42.238H277.119v168.952h-42.238V277.119H65.93v-42.238h168.951V65.93z"></svg:path>`,
})
export class IxAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAddApplicationIcon],svg[ix-add-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path fill-rule="nonzero" d="M234.667 64v170.667H64V64zM192 106.667h-85.333V192H192zm42.667 170.666V448H64V277.333zM192 320h-85.333v85.333H192zM448 64v170.667H277.333V64zm-42.667 42.667H320V192h85.333z"></svg:path><svg:path d="M341.333 277.333H384V448h-42.667z"></svg:path><svg:path d="M277.333 341.333H448V384H277.333z"></svg:path></svg:g>`,
})
export class IxAddApplicationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAddCircleFilledIcon],svg[ix-add-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.334 106.667h-42.667v85.333h-85.333v42.667l85.333-.001v85.334h42.667l-.001-85.334h85.334v-42.666h-85.334z"></svg:path>`,
})
export class IxAddCircleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAddCircleIcon],svg[ix-add-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m0 42.667c-94.256 0-170.666 76.41-170.666 170.666c0 94.257 76.41 170.667 170.666 170.667A170.667 170.667 0 0 0 426.667 256c0-94.256-76.41-170.666-170.667-170.666m21.334 64l-.001 85.333h85.334v42.667l-85.334-.001v85.334h-42.666v-85.334h-85.333v-42.666h85.333v-85.333z"></svg:path>`,
})
export class IxAddCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAddCircleSmallFilledIcon],svg[ix-add-circle-small-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 85.333c-94.257 0-170.667 76.41-170.667 170.667S161.743 426.667 256 426.667S426.667 350.257 426.667 256S350.257 85.333 256 85.333m-21.333 149.334v-64h42.666v64h64v42.666h-64v64h-42.666v-64h-64v-42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxAddCircleSmallFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAddCircleSmallIcon],svg[ix-add-circle-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 256c0-94.257 76.41-170.667 170.667-170.667S426.667 161.743 426.667 256S350.257 426.667 256 426.667S85.333 350.257 85.333 256M128 256c0-70.692 57.308-128 128-128s128 57.308 128 128s-57.308 128-128 128s-128-57.308-128-128m106.667-21.333v-64h42.666v64h64v42.666h-64v64h-42.666v-64h-64v-42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxAddCircleSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAddEyeFilledIcon],svg[ix-add-eye-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 320v64h64v42.666h-64v64H384v-64h-64V384h64v-64zM256 85.333C405.334 85.333 469.334 256 469.334 256s-6.86 18.294-21.33 42.902l-.004-.236h-85.333v64h-64l.003 59.127c-13.367 3.131-27.583 4.873-42.67 4.873C106.667 426.666 42.667 256 42.667 256S106.667 85.333 256 85.333m0 96c-41.237 0-74.666 33.43-74.666 74.667s33.43 74.666 74.666 74.666c41.237 0 74.667-33.43 74.667-74.666c0-41.237-33.43-74.667-74.667-74.667M256 224c17.645 0 32 14.355 32 32c0 17.644-14.355 32-32 32c-17.644 0-32-14.356-32-32c0-17.645 14.356-32 32-32"></svg:path>`,
})
export class IxAddEyeFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAddEyeIcon],svg[ix-add-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 320v64h64v42.666h-64v64H384v-64h-64V384h64v-64zM256 85.333C405.334 85.333 469.334 256 469.334 256s-6.86 18.294-21.33 42.902l-.004-.236h-50.682c11.606-16.455 20.01-31.9 25.303-42.674C404.597 219.303 350.262 128 256.001 128c-94.22 0-148.549 91.222-166.62 128.006C107.404 292.696 161.739 384 256 384c15.264 0 29.481-2.395 42.668-6.564v44.357c-13.367 3.131-27.582 4.873-42.669 4.873C106.667 426.666 42.667 256 42.667 256S106.667 85.333 256 85.333m0 96c41.237 0 74.667 33.43 74.667 74.667s-33.43 74.666-74.667 74.666s-74.666-33.43-74.666-74.666c0-41.237 33.43-74.667 74.666-74.667M256 224c-17.644 0-32 14.355-32 32c0 17.644 14.356 32 32 32c17.645 0 32-14.356 32-32c0-17.645-14.355-32-32-32"></svg:path>`,
})
export class IxAddEyeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAddFilterIcon],svg[ix-add-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 267.333v122h42.667v-122L384 85.333H42.667zM293.781 128H132.864l80.469 98.048zm132.885 192v64h64v42.667h-64v64H384v-64h-64V384h64v-64z" clip-rule="evenodd"></svg:path>`,
})
export class IxAddFilterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAddFilterFilledIcon],svg[ix-add-filter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.667 267.333L384 85.333H42.667l149.333 182v122h42.667zM426.666 320v64h64v42.667h-64v64H384v-64h-64V384h64v-64z" clip-rule="evenodd"></svg:path>`,
})
export class IxAddFilterFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAddSelectionIcon],svg[ix-add-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 106.667h-21.333V128H64V64h64zm-64 64v64h42.667v-64zm0 170.666v-64h42.667v64zm341.333-170.666v64H448v-64zM170.667 64h64v42.667h-64zm170.666 0h-64v42.667h64zM170.667 405.333h64V448h-64zm-64 0V384H64v64h64v-42.667zm298.666-298.666V128H448V64h-64v42.667zM426.667 384v-64H384v64h-64v42.667h64v64h42.667v-64h64V384z" clip-rule="evenodd"></svg:path>`,
})
export class IxAddSelectionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAddTaskIcon],svg[ix-add-task-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 320l-.001 64h64.001v42.667l-64.001-.001l.001 64H384v-64h-64V384h64v-64zM192 128v149.333H42.667V128zm-42.666 42.667h-64v64h64zM256 192h213.334v42.667H256z"></svg:path>`,
})
export class IxAddTaskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAddShieldHalfIcon],svg[ix-add-shield-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 120.242L256 42.667L85.333 120.242v116.364c0 107.637 72.818 208.29 170.667 232.727l5.617-1.493c12.843-3.627 25.231-8.567 37.05-14.664v-90.509h64v-64h55.942c5.252-20.069 8.058-40.93 8.058-62.061zM128 147.712l128-58.197v335.424l-4.661-1.598C180.854 397.666 128 319.868 128 236.606zm256 342.955v-64h-64V384h64v-64h42.667v64h64v42.667h-64v64z" clip-rule="evenodd"></svg:path>`,
})
export class IxAddShieldHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAddTaskListIcon],svg[ix-add-task-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 85.334h170.666V128H256zm0 149.333h170.666v42.667H256zM189.814 46.126l25.364 19.51l-76.032 98.843l-68.617-60.04l21.072-24.082l42.968 37.574zm0 149.333l25.364 19.511l-76.032 98.842l-68.617-60.04l21.072-24.082l42.968 37.574zM426.666 320v64h64v42.667h-64v64H384v-64h-64V384h64v-64z"></svg:path>`,
})
export class IxAddTaskListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAddUserIcon],svg[ix-add-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 320v64h64v42.667h-64v64H384v-64h-64V384h64v-64zm-176-85.333c60.31 0 109.485 49.03 111.906 110.451l.094 4.749v12.8H320v-12.8c0-38.933-29.192-70.302-65.425-72.42l-3.908-.113H176c-36.708 0-67.166 30.026-69.223 68.392l-.11 4.141V384h192v42.667H64v-76.8c0-62.033 47.668-112.614 107.383-115.104l4.617-.096zm-37.334-192c41.238 0 74.667 33.43 74.667 74.667c0 39.862-31.238 72.429-70.57 74.556l-4.097.11c-41.237 0-74.666-33.43-74.666-74.666c0-39.863 31.238-72.43 70.57-74.557zm0 42.667c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32"></svg:path>`,
})
export class IxAddUserIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAddUserFilledIcon],svg[ix-add-user-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 320v64h64v42.667h-64v64H384v-64h-64V384h64v-64zm-176-85.333c60.31 0 109.485 49.03 111.906 110.451l.094 4.749v12.8h-64v64H64v-76.8c0-62.033 47.668-112.614 107.383-115.104l4.617-.096zm-37.334-192c41.238 0 74.667 33.43 74.667 74.667c0 39.862-31.238 72.429-70.57 74.556l-4.097.11c-41.237 0-74.666-33.43-74.666-74.666c0-39.863 31.238-72.43 70.57-74.557z"></svg:path>`,
})
export class IxAddUserFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAgentIcon],svg[ix-agent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M159.991 213.334c11.839 0 21.447-10.42 21.447-23.273s-9.608-23.272-21.447-23.272s-21.448 10.419-21.448 23.272s9.609 23.273 21.448 23.273m-35.369-61.652l-20.204-21.932c14.241-15.451 33.902-25.022 55.578-25.022s41.337 9.571 55.578 25.024l-20.203 21.93c-9.066-9.833-21.577-15.924-35.375-15.924s-26.309 6.091-35.374 15.924m-40.418-43.866L64 85.886c24.593-26.69 58.552-43.219 96-43.219s71.407 16.53 96 43.219l-20.204 21.93C216.379 86.746 189.569 73.697 160 73.697s-56.379 13.05-75.796 34.119M64 234.667h384V448H64zm42.667 42.667v128h298.666v-128zM128 320h85.333v42.667H128zm170.667 42.667c11.782 0 21.333-9.551 21.333-21.333S310.449 320 298.667 320s-21.334 9.552-21.334 21.334s9.552 21.333 21.334 21.333M384 341.334c0 11.782-9.551 21.333-21.333 21.333s-21.334-9.551-21.334-21.333S350.885 320 362.667 320S384 329.552 384 341.334" clip-rule="evenodd"></svg:path>`,
})
export class IxAgentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAgentFilledIcon],svg[ix-agent-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M159.991 213.334c11.839 0 21.447-10.42 21.447-23.273s-9.608-23.272-21.447-23.272s-21.448 10.419-21.448 23.272s9.609 23.273 21.448 23.273m-35.369-61.652l-20.204-21.932c14.241-15.451 33.902-25.022 55.578-25.022s41.337 9.571 55.578 25.024l-20.203 21.93c-9.066-9.833-21.577-15.924-35.375-15.924s-26.309 6.091-35.374 15.924m-40.418-43.866L64 85.886c24.593-26.69 58.552-43.219 96-43.219s71.407 16.53 96 43.219l-20.204 21.93C216.379 86.746 189.569 73.697 160 73.697s-56.379 13.05-75.796 34.119M64 448V234.667h384V448zm64-128h85.333v42.667H128zm170.667 42.667c11.782 0 21.333-9.551 21.333-21.333S310.449 320 298.667 320s-21.334 9.552-21.334 21.334s9.552 21.333 21.334 21.333M384 341.334c0 11.782-9.551 21.333-21.333 21.333s-21.334-9.551-21.334-21.333S350.885 320 362.667 320S384 329.552 384 341.334" clip-rule="evenodd"></svg:path>`,
})
export class IxAgentFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAiIcon],svg[ix-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m320 192l-85.333-32L320 127.968l32-85.301l32.03 85.301L469.333 160l-85.303 32L352 277.333zM149.333 362.667L42.667 320l106.666-42.667L192 170.667l42.667 106.666L341.333 320l-106.666 42.667L192 469.333z"></svg:path>`,
})
export class IxAiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlarmIcon],svg[ix-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.61 0 213.334 95.723 213.334 213.333S373.61 469.334 256 469.334S42.667 373.61 42.667 256S138.39 42.667 256 42.667m0 42.667c-94.458 0-170.666 76.208-170.666 170.666c0 94.46 76.208 170.667 170.666 170.667c94.46 0 170.667-76.208 170.667-170.667c0-94.458-76.208-170.666-170.667-170.666m0 229.376c15.238 0 26.667 11.264 26.667 26.624S271.238 367.958 256 367.958c-15.584 0-26.666-11.264-26.666-26.966c0-15.018 11.428-26.282 26.666-26.282M277.334 128v149.334h-42.667V128z"></svg:path>`,
})
export class IxAlarmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlarmBellIcon],svg[ix-alarm-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 384c0 23.564-19.103 42.667-42.667 42.667S213.333 407.564 213.333 384zM256 42.667c-82.56 0-149.333 76.373-149.333 170.667v48.853L64 384h106.667c0 47.129 38.205 85.334 85.333 85.334s85.333-38.205 85.333-85.334H448l-42.667-121.813V219.52c0-80.853-47.146-154.88-116.266-170.666A138.7 138.7 0 0 0 256 42.667M124.16 341.334l22.827-64l2.346-7.894v-56.106c0-70.614 47.787-128 106.667-128a94 94 0 0 1 22.827 2.773c47.786 11.733 83.84 67.84 83.84 130.347v50.986l2.346 6.827l22.827 65.067z"></svg:path>`,
})
export class IxAlarmBellIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlarmBellCancelledIcon],svg[ix-alarm-bell-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m452.419 422.249l-30.17 30.17L353.83 384h-12.496c0 46.657-37.445 84.569-83.923 85.322l-1.41.012c-46.658 0-84.57-37.445-85.323-83.923l-.011-1.41H64l42.667-121.814v-48.853c0-23.104 4.008-45.131 11.276-65.223l-58.361-58.36l30.17-30.169l48.588 48.59v-.002l16.353 16.354l216.81 216.809zM298.667 384h-85.333c0 23.564 19.102 42.667 42.666 42.667s42.667-19.103 42.667-42.667M256 42.667a138.7 138.7 0 0 1 33.067 6.187c68.429 15.628 115.321 88.338 116.252 168.243l.015 2.423v42.667l28.375 81.012l-69.619-69.619l-1.423-4.14v-50.986c0-62.507-36.053-118.614-83.84-130.347A94 94 0 0 0 256 85.334c-21.758 0-42 7.836-58.877 21.28L166.86 76.352c24.868-21.163 55.71-33.685 89.14-33.685m55.163 298.666L152.434 182.604a152.4 152.4 0 0 0-3.097 29.753l-.003.977v56.106l-2.347 7.894l-22.827 64z"></svg:path>`,
})
export class IxAlarmBellCancelledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlarmBellCancelledFilledIcon],svg[ix-alarm-bell-cancelled-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M325.492 405.334c-5.176 36.184-36.294 64-73.91 64s-68.734-27.816-73.91-64ZM452.42 422.25l-30.17 30.17L353.83 384H64l42.667-121.813v-48.853c0-23.103 4.008-45.13 11.275-65.221l-58.36-58.361l30.17-30.17l48.588 48.59v-.002zM256 42.667a138.7 138.7 0 0 1 33.067 6.187c69.12 15.786 116.267 89.813 116.267 170.666v42.667l28.375 81.012L166.862 76.351c24.254-20.64 54.19-33.06 86.666-33.661Z"></svg:path>`,
})
export class IxAlarmBellCancelledFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlarmBellFilledIcon],svg[ix-alarm-bell-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M325.492 405.334c-5.176 36.184-36.295 64-73.91 64c-37.616 0-68.735-27.816-73.91-64ZM64 384l42.667-121.813v-48.853c0-94.294 66.773-170.667 149.333-170.667a138.7 138.7 0 0 1 33.067 6.187c69.12 15.786 116.266 89.813 116.266 170.666v42.667L448 384z"></svg:path>`,
})
export class IxAlarmBellFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlarmClockIcon],svg[ix-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 64c106.039 0 192 85.961 192 192c0 52.298-20.91 99.712-54.824 134.339l33.131 57.386l-36.95 21.334l-29.69-51.424C329.768 436.853 294.186 448 256 448c-38.243 0-73.874-11.18-103.804-30.452L122.3 469.332l-36.95-21.333l33.356-57.78C84.861 355.601 64 308.236 64 256c0-106.039 85.96-192 192-192m0 42.667c-82.475 0-149.333 66.859-149.333 149.333S173.525 405.334 256 405.334S405.333 338.474 405.333 256S338.474 106.667 256 106.667m21.333 42.666V268.48l57.752 57.769l-30.17 30.17l-70.248-70.249V149.333zM398.018 42.98a257.4 257.4 0 0 1 71.012 71.01l-35.507 23.666a214.5 214.5 0 0 0-59.159-59.16zm-284.047.012l23.672 35.503A214.5 214.5 0 0 0 78.49 137.65l-35.503-23.672a257.4 257.4 0 0 1 70.985-70.985"></svg:path>`,
})
export class IxAlarmClockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlarmClockCancelledIcon],svg[ix-alarm-clock-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M447.998 256.001c0-106.039-85.961-192-192-192c-106.038 0-192 85.961-192 192c0 52.238 20.862 99.604 54.709 134.22l-33.36 57.778l36.951 21.333l29.889-51.788c29.931 19.274 65.565 30.457 103.811 30.457c8.643 0 17.152-.571 25.453-1.687a117.2 117.2 0 0 1-21.065-41.043q-2.186.063-4.388.063c-82.474 0-149.333-66.859-149.333-149.333s66.859-149.334 149.333-149.334s149.334 66.859 149.334 149.334l-.083 4.393c15.155 4.274 29.065 11.516 41.076 21.065a194 194 0 0 0 1.673-25.458m-192.427-26.759l-67.726-67.725l-30.17 30.17l67.617 67.865l30.435 30.187l30.009-30.332l59.481-59.441l-30.17-30.17zm213.458-115.251a257.4 257.4 0 0 0-71.012-71.01l-23.654 35.515a214.5 214.5 0 0 1 59.159 59.161zM137.642 78.496L113.97 42.993a257.4 257.4 0 0 0-70.986 70.985l35.503 23.672a214.5 214.5 0 0 1 59.155-59.154m235.691 358.839c11.87 0 22.984-3.231 32.513-8.862l-87.651-87.651c-5.631 9.529-8.862 20.643-8.862 32.513c0 35.346 28.654 64 64 64m-32.51-119.14l87.65 87.65c5.63-9.528 8.86-20.642 8.86-32.51c0-35.347-28.653-64-64-64c-11.868 0-22.982 3.23-32.51 8.86m32.51 151.14c53.02 0 96-42.981 96-96c0-53.02-42.98-96-96-96c-53.019 0-96 42.98-96 96c0 53.019 42.981 96 96 96" clip-rule="evenodd"></svg:path>`,
})
export class IxAlarmClockCancelledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlarmClockFilledIcon],svg[ix-alarm-clock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 64c106.039 0 192 85.961 192 192c0 52.298-20.91 99.712-54.824 134.339l33.131 57.386l-36.95 21.334l-29.69-51.424C329.768 436.853 294.186 448 256 448c-38.243 0-73.874-11.18-103.804-30.452L122.3 469.332l-36.95-21.333l33.356-57.78C84.861 355.601 64 308.236 64 256c0-106.039 85.96-192 192-192m21.333 85.333h-42.666V286.17l70.248 70.248l30.17-30.17l-57.752-57.768zM398.018 42.98a257.4 257.4 0 0 1 71.012 71.01l-35.507 23.666a214.5 214.5 0 0 0-59.159-59.16zm-284.047.012l23.672 35.503A214.5 214.5 0 0 0 78.49 137.65l-35.503-23.672a257.4 257.4 0 0 1 70.985-70.985"></svg:path>`,
})
export class IxAlarmClockFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlarmClockSuccessIcon],svg[ix-alarm-clock-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M447.998 256.001c0-106.039-85.961-192-192-192c-106.038 0-192 85.961-192 192c0 52.238 20.862 99.604 54.709 134.22l-33.36 57.778l36.951 21.333l29.889-51.788c29.931 19.274 65.565 30.457 103.811 30.457c8.643 0 17.152-.571 25.453-1.687a117.2 117.2 0 0 1-21.065-41.043q-2.186.063-4.388.063c-82.474 0-149.333-66.859-149.333-149.333s66.859-149.334 149.333-149.334s149.334 66.859 149.334 149.334l-.083 4.393c15.155 4.274 29.065 11.516 41.076 21.065a194 194 0 0 0 1.673-25.458m-192.427-26.759l-67.726-67.725l-30.17 30.17l67.617 67.865l30.435 30.187l30.009-30.332l59.481-59.441l-30.17-30.17zm213.458-115.251a257.4 257.4 0 0 0-71.012-71.01l-23.654 35.515a214.5 214.5 0 0 1 59.159 59.161zM137.642 78.496L113.97 42.993a257.4 257.4 0 0 0-70.986 70.985l35.503 23.672a214.5 214.5 0 0 1 59.155-59.154m235.691 198.837c-53.019 0-96 42.981-96 96c0 53.02 42.981 96 96 96c53.02 0 96-42.98 96-96c0-53.019-42.98-96-96-96m62.763 62.763l-84.095 84.095l-41.428-41.429l18.856-18.856l22.572 22.572l65.239-65.238z" clip-rule="evenodd"></svg:path>`,
})
export class IxAlarmClockSuccessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlarmFilledIcon],svg[ix-alarm-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.61 0 213.334 95.723 213.334 213.333S373.61 469.334 256 469.334S42.667 373.61 42.667 256S138.39 42.667 256 42.667m0 272.043c-15.238 0-26.666 11.264-26.666 26.282c0 15.702 11.082 26.966 26.666 26.966c15.238 0 26.667-11.264 26.667-26.624S271.238 314.71 256 314.71M277.334 128h-42.667v149.334h42.667z"></svg:path>`,
})
export class IxAlarmFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlignCenterHorizontallyIcon],svg[ix-align-center-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h384v384H64zm42.667 42.667v128H192v-85.334h128v85.334h85.333v-128zm298.666 170.666H320v85.334H192v-85.334h-85.333v128h298.666zM234.667 320h42.666V192h-42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxAlignCenterHorizontallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlignCenterVerticallyIcon],svg[ix-align-center-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 64H64v384h384V64zm21.334 192V106.667h128V192h-85.334v128h85.334v85.333h-128zm170.666 149.333h128V106.667h-128V192h85.334v128h-85.334zm42.667-128H192v-42.666h128z" clip-rule="evenodd"></svg:path>`,
})
export class IxAlignCenterVerticallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectDimensionsIcon],svg[ix-align-object-dimensions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 149.333V448H149.333V149.333zM405.333 192H192v213.333h213.333zm-320-21.333H64v-21.334h64v21.334h-21.333v256H128V448H64v-21.333h21.333zM170.667 128h-21.334V64h21.334v21.333h256v21.334h-256zm256-64H448v64h-21.333z"></svg:path>`,
})
export class IxAlignObjectDimensionsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectHeightIcon],svg[ix-align-object-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405.333 64v384H192V64zm-42.666 42.667h-128v298.666h128zM128 85.333h21.333v341.334h21.334V448h-64v-21.333H128zm-21.333 0V64h64v21.333z"></svg:path>`,
})
export class IxAlignObjectHeightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectWidthIcon],svg[ix-align-object-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 127.999v21.333H64v-21.333h384v21.333h21.333v-64H448v21.333H64V85.332H42.667zm0 64h426.666v234.666H42.667zm42.666 42.666v149.334h341.334V234.665z" clip-rule="evenodd"></svg:path>`,
})
export class IxAlignObjectWidthIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectsIcon],svg[ix-align-objects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218.325 381.952L256 419.641l35.157-35.15l30.187 30.186L256 480l-67.861-67.861zM320 170.667v170.666H192V170.667zm92.139 17.472L480 256l-68.16 68.16l-30.187-30.187l38.004-37.988l-37.684-37.681zm-314.795 2.538l30.144 30.144l-35.145 35.164l35.465 35.471l-30.165 30.187L32 256zm179.989 22.656h-42.666v85.334h42.666zM256 32l65.643 65.643l-30.166 30.144L256 92.328l-37.995 37.997l-30.165-30.165z"></svg:path>`,
})
export class IxAlignObjectsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectsBottomIcon],svg[ix-align-objects-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 384v42.667H42.667V384zM234.667 170.667v192H85.333v-192zm192-85.334v277.334H277.333V85.333zM192 213.333h-64V320h64zM384 128h-64v192h64z"></svg:path>`,
})
export class IxAlignObjectsBottomIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectsCenteredIcon],svg[ix-align-objects-centered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.667 405.333v-128h-128v-42.666h128v-128h64v-64h42.666v64h64v128h128v42.666h-128v128h-64v64h-42.666v-64zm42.666-42.666h85.334V149.333h-85.334z"></svg:path>`,
})
export class IxAlignObjectsCenteredIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectsHorizontallyIcon],svg[ix-align-objects-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 277.333v-42.666H42.667v42.666zm170.667 0v-42.666h-85.334v42.666zm128 149.334V277.333h42.666v-42.666h-42.666V85.333H277.333v341.334zM384 384h-64V128h64zm-149.333-21.333V149.333H85.333v213.334zM192 320h-64V192h64z"></svg:path>`,
})
export class IxAlignObjectsHorizontallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectsLeftIcon],svg[ix-align-objects-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 469.333H85.333V42.667H128zm213.333-234.666h-192V85.333h192zm85.334 192H149.333V277.333h277.334zM298.667 192v-64H192v64zM384 384v-64H192v64z"></svg:path>`,
})
export class IxAlignObjectsLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectsRightIcon],svg[ix-align-objects-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 469.333h42.667V42.667H384zM170.667 234.667h192V85.333h-192zm-85.334 192h277.334V277.333H85.333zm128-234.667v-64H320v64zM128 384v-64h192v64z"></svg:path>`,
})
export class IxAlignObjectsRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectsTopIcon],svg[ix-align-objects-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 128V85.333H42.667V128zM234.667 341.333v-192H85.333v192zm192 85.334V149.333H277.333v277.334zM192 298.667h-64V192h64zM384 384h-64V192h64z"></svg:path>`,
})
export class IxAlignObjectsTopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAlignObjectsVerticallyIcon],svg[ix-align-objects-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.667 128h42.666V42.667h-42.666zm0 170.667h42.666v-85.334h-42.666zm-149.334 128h149.334v42.666h42.666v-42.666h149.334V277.333H85.333zM128 384v-64h256v64zm21.333-149.333h213.334V85.333H149.333zM192 192v-64h128v64z"></svg:path>`,
})
export class IxAlignObjectsVerticallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAnalysisIcon],svg[ix-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h384v384H64zm42.667 277.332v64.001h298.666v-64.001h-69.089l-27.723-90.1l-48.569 145.707l-57.285-114.571l-29.482 58.964zm298.666-42.666h-37.577l-57.61-187.234l-58.098 174.294l-49.381-98.763l-55.852 111.703h-40.148V106.667h298.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxAnalysisIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAnalysisFilledIcon],svg[ix-analysis-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64H64v234.666h82.815l55.852-111.703l49.381 98.763l58.098-174.294l57.61 187.234H448zm0 277.332H336.244l-27.723-90.1l-48.569 145.707l-57.285-114.571l-29.482 58.964H64V448h384z" clip-rule="evenodd"></svg:path>`,
})
export class IxAnalysisFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAnalyzeIcon],svg[ix-analyze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M309.334 192c64.801 0 117.333 52.532 117.333 117.333c0 24.694-7.628 47.605-20.656 66.507l59.884 59.885l-30.17 30.17l-59.884-59.884c-18.903 13.028-41.814 20.656-66.507 20.656c-64.802 0-117.334-52.532-117.334-117.334C192 244.532 244.532 192 309.334 192m0 42.667c-41.238 0-74.667 33.43-74.667 74.666c0 41.238 33.43 74.667 74.667 74.667S384 350.57 384 309.333s-33.43-74.666-74.666-74.666M171.07 298.666q-.403 5.282-.404 10.667c0 11.015 1.284 21.729 3.71 32.002l-131.71-.002v-42.666zM128.001 64v213.333H64V64zm85.333 85.333l-.003 59.94c-18.93 18.168-32.716 41.655-38.953 68.059l-25.044.001v-128zm85.333-42.666v64.404a137.85 137.85 0 0 0-64 21.395v-85.8zM384 128l.001 64.466a137.85 137.85 0 0 0-64-21.395V128z"></svg:path>`,
})
export class IxAnalyzeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAnomalyIcon],svg[ix-anomaly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.334 42.667C307.438 42.667 384 119.23 384 213.334c0 39.373-13.534 75.573-36.018 104.481l121.315 121.316l-30.166 30.166l-121.316-121.315C288.907 370.466 252.707 384 213.334 384c-94.104 0-170.667-76.562-170.667-170.666S119.23 42.667 213.334 42.667m0 148.928l-37.259 91.072l-70.296.001c22.817 35.275 62.504 58.666 107.555 58.666c45.05 0 84.737-23.39 107.555-58.666l-70.297-.001zm0-106.261c-70.584 0-128 57.416-128 128c0 12.982 1.942 25.518 5.551 37.334l63.697-.001l58.752-143.59l58.73 143.59l63.718.001c3.61-11.816 5.552-24.352 5.552-37.334c0-70.584-57.417-128-128-128"></svg:path>`,
})
export class IxAnomalyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAnomalyFoundIcon],svg[ix-anomaly-found-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.334 42.667C307.438 42.667 384 119.23 384 213.334c0 39.373-13.534 75.573-36.018 104.481l121.315 121.316l-30.166 30.166l-121.316-121.315C288.907 370.466 252.707 384 213.334 384c-94.104 0-170.667-76.562-170.667-170.666S119.23 42.667 213.334 42.667m0 42.667c-70.584 0-128 57.416-128 128c0 70.583 57.416 128 128 128c70.583 0 128-57.417 128-128c0-70.584-57.417-128-128-128m0 160c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32m21.333-138.667v106.667H192V106.667z"></svg:path>`,
})
export class IxAnomalyFoundIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAnomalyNoneIcon],svg[ix-anomaly-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m469.297 439.13l-30.167 30.167l-121.315-121.315C288.906 370.466 252.707 384 213.333 384c-94.104 0-170.666-76.562-170.666-170.667c0-94.104 76.562-170.666 170.666-170.666S384 119.229 384 213.333c0 39.374-13.534 75.573-36.018 104.482zM339.556 192C329.371 131.536 276.65 85.333 213.333 85.333S97.295 131.536 87.111 192zm0 42.667H87.111c10.184 60.464 62.906 106.666 126.222 106.666c63.317 0 116.038-46.202 126.223-106.666" clip-rule="evenodd"></svg:path>`,
})
export class IxAnomalyNoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAppDocumentIcon],svg[ix-app-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 42.664H85.333v234.667H128v-192h174.293L384 167.037v110.294h42.667v-128zM125.135 418.071h47.37l10.802 29.926h29.927L163.65 322.534h-29.484L86.265 447.997h28.156zm30.016-48.343l9.916 27.093h-32.583l9.739-27.093q4.25-11.867 6.464-19.57q3.276 10.625 6.464 19.57m74.02-47.194v125.463h28.246v-47.812h11.865q12.926.001 21.073-1.948q8.234-2.037 13.988-6.641q13.284-10.624 13.283-30.547q-.001-12.217-5.579-21.337q-6.906-11.423-20.011-14.787q-9.474-2.392-27.537-2.391zm35.682 56.401h-8.145v-35.151h8.145q11.776 0 17.178 3.277q7.35 4.425 7.349 14.963q0 10.713-7.614 14.432q-5.136 2.48-16.913 2.479m70.569-56.401v125.463h28.245v-47.812h11.864q12.928.001 21.073-1.948q8.233-2.037 13.99-6.641q13.28-10.624 13.28-30.547q0-12.217-5.576-21.337q-6.908-11.423-20.011-14.787q-9.474-2.392-27.537-2.391zm35.682 56.401h-8.145v-35.151h8.145q11.776 0 17.178 3.277q7.348 4.425 7.349 14.963q0 10.713-7.616 14.432q-5.134 2.48-16.911 2.479" clip-rule="evenodd"></svg:path>`,
})
export class IxAppDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAppDocumentFilledIcon],svg[ix-app-document-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M319.646 43.836H84.979v234.667h341.333v-128zM124.781 419.243h47.369l10.802 29.926h29.928l-49.584-125.463h-29.484L85.911 449.169h28.156zm30.015-48.344l9.917 27.094H132.13l9.739-27.094q4.25-11.866 6.464-19.569q3.276 10.625 6.463 19.569m74.021-47.193v125.463h28.245v-47.812h11.866q12.925 0 21.073-1.948q8.234-2.037 13.988-6.641q13.283-10.623 13.282-30.547q0-12.218-5.578-21.338q-6.906-11.423-20.011-14.786q-9.474-2.392-27.537-2.391zm35.682 56.401h-8.145v-35.151h8.145q11.776 0 17.178 3.277q7.35 4.425 7.349 14.963q0 10.713-7.614 14.432q-5.136 2.48-16.913 2.479m70.569-56.401v125.463h28.245v-47.812h11.864q12.928 0 21.073-1.948q8.233-2.037 13.99-6.641q13.28-10.623 13.28-30.547q0-12.218-5.577-21.338q-6.907-11.423-20.01-14.786q-9.475-2.392-27.537-2.391zm35.682 56.401h-8.145v-35.151h8.145q11.775 0 17.177 3.277q7.35 4.425 7.35 14.963q0 10.713-7.616 14.432q-5.135 2.48-16.911 2.479" clip-rule="evenodd"></svg:path>`,
})
export class IxAppDocumentFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAppMenuIcon],svg[ix-app-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.666 106.667h426.667v42.666H42.666zm0 128H320v42.666H42.666zm426.667 128H42.666v42.666h426.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxAppMenuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixApplicationScreenIcon],svg[ix-application-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 106.667V384H64V106.667zm-42.667 106.667H106.667v128h298.666zm0-64H106.667v21.333h298.666z"></svg:path>`,
})
export class IxApplicationScreenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixApplicationScreenAlarmClassesIcon],svg[ix-application-screen-alarm-classes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 85.336v246.649l-19.885-34.798a39.4 39.4 0 0 0-14.655-14.655a39.5 39.5 0 0 0-8.127-3.508v-87.021H106.667v149.333h51.542c-5.709 13.066-8.876 27.496-8.876 42.667H64V85.336zm-341.333 42.667h298.666v21.333H106.667zm225.484 217.438c-.443-.854-.825-1.576-1.137-2.151c-14.457-26.58-42.629-44.621-75.014-44.621c-47.128 0-85.333 38.205-85.333 85.334c0 47.128 38.205 85.333 85.333 85.333c8.309 0 16.34-1.188 23.934-3.402a39.3 39.3 0 0 1-2.601-14.103a39.4 39.4 0 0 1 5.19-19.54l2.43-4.254l-1.54-1.538L256 399.085l-32 32.003l-15.085-15.085l31.981-32l-31.981-32L224 336.918l32 31.981l32-31.981l15.085 15.085l-32.002 32l23.296 23.296s.533.583 1.511 1.599zm77.442-37.669a18.05 18.05 0 0 0-6.717-6.717c-8.656-4.947-19.683-1.939-24.629 6.717l-77.202 135.103a18.05 18.05 0 0 0-2.378 8.956c0 9.97 8.082 18.051 18.051 18.051h154.404c3.142 0 6.229-.819 8.956-2.378c8.656-4.946 11.663-15.973 6.717-24.629zm-2.438 89.822h-27.077V343.44h27.077zm-13.538 18.051c10.315 0 18.051 7.637 18.051 18.051c0 10.415-7.736 18.052-18.051 18.052c-10.55 0-18.052-7.637-18.052-18.283c0-10.183 7.737-17.82 18.052-17.82" clip-rule="evenodd"></svg:path>`,
})
export class IxApplicationScreenAlarmClassesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixApplicationScreenGlobeIcon],svg[ix-application-screen-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ixApplicationScreenGlobe0" fill="#000"><svg:path fill-rule="evenodd" d="M106.667 341.336h132.416a117.4 117.4 0 0 0-4.416 32q.001 5.395.478 10.667H64V85.336h384v220.521a117.9 117.9 0 0 0-42.667-37.061v-76.793H106.667zm0-213.333h298.666v21.333H106.667zM352 277.336c53.019 0 96 42.981 96 96s-42.981 96-96 96s-96-42.981-96-96s42.981-96 96-96m-21.046 85.333c1.075-19.691 5.058-36.599 10.37-48.551c3.136-7.057 6.318-11.447 8.774-13.784c.874-.832 1.506-1.275 1.901-1.503c.395.228 1.027.671 1.901 1.503c2.456 2.337 5.638 6.727 8.774 13.784c5.312 11.952 9.295 28.86 10.37 48.551zm-8.88 79.095c-6.807-15.07-11.375-35.242-12.481-57.762h-31.504c3.711 25.948 20.763 47.592 43.985 57.762m19.25-9.21c-5.312-11.952-9.295-28.861-10.37-48.552h42.09c-1.075 19.691-5.058 36.6-10.37 48.552c-3.136 7.057-6.318 11.447-8.774 13.784c-.874.831-1.506 1.274-1.901 1.503c-.395-.229-1.027-.672-1.901-1.503c-2.456-2.337-5.638-6.727-8.774-13.784m40.6 9.21c6.807-15.07 11.375-35.242 12.481-57.762h31.505c-3.712 25.948-20.764 47.592-43.986 57.762m43.986-79.095h-31.505c-1.106-22.519-5.674-42.691-12.481-57.761c23.222 10.169 40.274 31.814 43.986 57.761m-147.821 0h31.504c1.106-22.519 5.674-42.691 12.481-57.761c-23.222 10.169-40.274 31.814-43.985 57.761" clip-rule="evenodd"></svg:path></svg:mask><svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 341.336h132.416a117.4 117.4 0 0 0-4.416 32q.001 5.395.478 10.667H64V85.336h384v220.521a117.9 117.9 0 0 0-42.667-37.061v-76.793H106.667zm0-213.333h298.666v21.333H106.667zM352 277.336c53.019 0 96 42.981 96 96s-42.981 96-96 96s-96-42.981-96-96s42.981-96 96-96m-21.046 85.333c1.075-19.691 5.058-36.599 10.37-48.551c3.136-7.057 6.318-11.447 8.774-13.784c.874-.832 1.506-1.275 1.901-1.503c.395.228 1.027.671 1.901 1.503c2.456 2.337 5.638 6.727 8.774 13.784c5.312 11.952 9.295 28.86 10.37 48.551zm-8.88 79.095c-6.807-15.07-11.375-35.242-12.481-57.762h-31.504c3.711 25.948 20.763 47.592 43.985 57.762m19.25-9.21c-5.312-11.952-9.295-28.861-10.37-48.552h42.09c-1.075 19.691-5.058 36.6-10.37 48.552c-3.136 7.057-6.318 11.447-8.774 13.784c-.874.831-1.506 1.274-1.901 1.503c-.395-.229-1.027-.672-1.901-1.503c-2.456-2.337-5.638-6.727-8.774-13.784m40.6 9.21c6.807-15.07 11.375-35.242 12.481-57.762h31.505c-3.712 25.948-20.764 47.592-43.986 57.762m43.986-79.095h-31.505c-1.106-22.519-5.674-42.691-12.481-57.761c23.222 10.169 40.274 31.814 43.986 57.761m-147.821 0h31.504c1.106-22.519 5.674-42.691 12.481-57.761c-23.222 10.169-40.274 31.814-43.985 57.761" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m239.083 341.336l.963.272l.359-1.272h-1.322zm-132.416 0h-1v1h1zm128.478 42.667v1h1.094l-.098-1.09zm-171.145 0h-1v1h1zm0-298.667v-1h-1v1zm384 0h1v-1h-1zm0 220.521l-.818.576l1.818 2.581v-3.157zm-42.667-37.061h-1v.612l.545.279zm0-76.793h1v-1h-1zm-298.666 0v-1h-1v1zm298.666-64h1v-1h-1zm-298.666 0v-1h-1v1zm298.666 21.333v1h1v-1zm-298.666 0h-1v1h1zm234.657 164.782l-.914-.406zm-10.37 48.551l-.998-.054l-.058 1.054h1.056zm19.144-62.335l-.689-.725zm1.901-1.503l.501-.866l-.501-.29l-.501.29zm1.901 1.503l.689-.725zm8.774 13.784l.914-.406zm10.37 48.551v1h1.056l-.058-1.054zm-63.451 21.333l.999-.049l-.047-.951h-.952zm12.481 57.762l-.401.916l2.383 1.044l-1.071-2.372zm-43.985-57.762v-1h-1.154l.164 1.142zm52.865 0v-1h-1.056l.058 1.055zm10.37 48.552l-.914.406zm31.72-48.552l.998.055l.058-1.055h-1.056zm-10.37 48.552l.914.406zm-8.774 13.784l-.689-.725zm-1.901 1.503l-.501.865l.501.29l.501-.29zm-1.901-1.503l.69-.725zm44.307-62.336v-1h-.952l-.046.951zm-12.481 57.762l-.911-.412l-1.071 2.372l2.384-1.044zm43.986-57.762l.99.142l.163-1.142h-1.153zm-31.505-21.333l-.998.049l.046.951h.952zm31.505 0v1h1.153l-.163-1.142zm-43.986-57.761l.402-.916l-2.384-1.044l1.071 2.371zm-72.331 57.761v1h.952l.047-.951zm-31.504 0l-.99-.142l-.164 1.142h1.154zm43.985-57.761l.911.411l1.071-2.371l-2.383 1.044zm-82.991 35.428H106.667v2h132.416zm-3.416 33c0-11.001 1.526-21.643 4.379-31.728l-1.925-.544a118.4 118.4 0 0 0-4.454 32.272zm.474 10.577a118 118 0 0 1-.474-10.577h-2q.002 5.44.482 10.756zM64 385.003h171.145v-2H64zM63 85.336v298.667h2V85.336zm385-1H64v2h384zm1 221.521V85.336h-2v220.521zm-44.122-36.17a116.86 116.86 0 0 1 42.304 36.746l1.636-1.152a118.9 118.9 0 0 0-43.029-37.375zm-.545-77.684v76.793h2v-76.793zm-297.666 1h298.666v-2H106.667zm1 148.333V192.003h-2v149.333zm297.666-214.333H106.667v2h298.666zm1 22.333v-21.333h-2v21.333zm-299.666 1h298.666v-2H106.667zm-1-22.333v21.333h2v-21.333zM449 373.336c0-53.572-43.428-97-97-97v2c52.467 0 95 42.533 95 95zm-97 97c53.572 0 97-43.428 97-97h-2c0 52.467-42.533 95-95 95zm-97-97c0 53.572 43.428 97 97 97v-2c-52.467 0-95-42.533-95-95zm97-97c-53.572 0-97 43.428-97 97h2c0-52.467 42.533-95 95-95zm-11.59 37.376c-5.372 12.087-9.374 29.119-10.454 48.903l1.997.109c1.07-19.599 5.033-36.383 10.285-48.2zm8.999-14.103c-2.58 2.456-5.829 6.969-8.999 14.103l1.828.812c3.102-6.981 6.218-11.247 8.55-13.466zm2.089-1.644c-.477.276-1.171.771-2.089 1.644l1.379 1.449c.829-.789 1.399-1.18 1.712-1.362zm3.091 1.644c-.917-.873-1.612-1.368-2.089-1.644l-1.002 1.731c.314.182.883.573 1.713 1.362zm8.999 14.103c-3.17-7.134-6.419-11.647-8.999-14.103l-1.378 1.449c2.331 2.219 5.447 6.485 8.55 13.466zm10.454 48.903c-1.08-19.784-5.082-36.816-10.454-48.903l-1.827.812c5.251 11.817 9.214 28.601 10.284 48.2zm-43.088 1.054h42.09v-2h-42.09zm-22.36 20.382c1.111 22.615 5.699 42.915 12.568 58.124l1.823-.823c-6.743-14.931-11.292-34.974-12.393-57.399zm-30.505.951h31.504v-2h-31.504zm44.386 55.846c-22.912-10.035-39.735-31.39-43.397-56.987l-1.979.283c3.761 26.298 21.042 48.23 44.574 58.536zm7.481-56.791c1.08 19.783 5.082 36.816 10.454 48.903l1.828-.812c-5.252-11.817-9.215-28.601-10.285-48.2zm43.088-1.055h-42.09v2h42.09zm-9.456 49.958c5.372-12.087 9.374-29.12 10.454-48.903l-1.997-.109c-1.07 19.599-5.033 36.383-10.284 48.2zm-8.999 14.102c2.58-2.455 5.829-6.969 8.999-14.102l-1.827-.812c-3.103 6.98-6.219 11.246-8.55 13.465zm-2.089 1.644c.477-.276 1.172-.77 2.089-1.644l-1.378-1.449c-.83.79-1.399 1.181-1.713 1.362zm-3.091-1.644c.918.874 1.612 1.368 2.089 1.644l1.002-1.731c-.313-.181-.883-.572-1.712-1.362zm-8.999-14.102c3.17 7.133 6.419 11.647 8.999 14.102l1.379-1.449c-2.332-2.219-5.448-6.485-8.55-13.465zm52.997-49.007c-1.102 22.425-5.651 42.468-12.394 57.399l1.823.823c6.869-15.209 11.457-35.509 12.568-58.124zm32.503-.951h-31.505v2h31.505zm-43.584 59.678c23.531-10.306 40.812-32.238 44.574-58.536l-1.98-.283c-3.662 25.597-20.485 46.952-43.397 56.987zm12.079-79.011h31.505v-2h-31.505zm-13.392-58.35c6.743 14.931 11.292 34.975 12.394 57.399l1.997-.098c-1.111-22.614-5.699-42.915-12.568-58.124zm45.887 57.208c-3.762-26.298-21.043-48.23-44.574-58.535l-.803 1.832c22.912 10.034 39.735 31.39 43.397 56.987zm-117.307-.858h-31.504v2h31.504zm11.569-57.173c-6.869 15.209-11.457 35.51-12.568 58.124l1.998.098c1.101-22.424 5.65-42.468 12.393-57.399zm-42.084 58.315c3.662-25.597 20.485-46.953 43.397-56.987l-.802-1.832c-23.532 10.305-40.813 32.237-44.574 58.535z" mask="url(#ixApplicationScreenGlobe0)"></svg:path>`,
})
export class IxApplicationScreenGlobeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixApplicationScreenPlayIcon],svg[ix-application-screen-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 85.336v341.333H42.667V85.336zm-42.666 106.667H85.333v192h341.334zm-213.334 32l111.304 64l-111.304 64zm213.334-96H85.333v21.333h341.334z"></svg:path>`,
})
export class IxApplicationScreenPlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixApplicationScreensIcon],svg[ix-application-screens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 85.336H42.667v277.333h42.666V128.003h320zm64 341.333V149.336H106.667v277.333zm-320-170.666h277.334v128H149.333zm0-64h277.334v21.333H149.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxApplicationScreensIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixApplicationsIcon],svg[ix-applications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.667 64v170.667H64V64zM192 106.667h-85.333V192H192zm42.667 170.666V448H64V277.333zM192 320h-85.333v85.333H192zM448 64v170.667H277.333V64zm-42.667 42.667H320V192h85.333zM448 277.333V448H277.333V277.333zM405.333 320H320v85.333h85.333z"></svg:path>`,
})
export class IxApplicationsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAppsIcon],svg[ix-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 96c0 17.664-14.336 32-32 32s-32-14.336-32-32s14.336-32 32-32s32 14.336 32 32m160 0c0 17.664-14.336 32-32 32s-32-14.336-32-32s14.336-32 32-32s32 14.336 32 32M128 416c0 17.664-14.336 32-32 32s-32-14.336-32-32s14.336-32 32-32s32 14.336 32 32m160 0c0 17.664-14.336 32-32 32s-32-14.336-32-32s14.336-32 32-32s32 14.336 32 32M128 256c0 17.664-14.336 32-32 32s-32-14.336-32-32s14.336-32 32-32s32 14.336 32 32m160 0c0 17.664-14.336 32-32 32s-32-14.336-32-32s14.336-32 32-32s32 14.336 32 32M448 96c0 17.664-14.336 32-32 32s-32-14.336-32-32s14.336-32 32-32s32 14.336 32 32m0 320c0 17.664-14.336 32-32 32s-32-14.336-32-32s14.336-32 32-32s32 14.336 32 32m0-160c0 17.664-14.336 32-32 32s-32-14.336-32-32s14.336-32 32-32s32 14.336 32 32"></svg:path>`,
})
export class IxAppsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixArchiveDocumentIcon],svg[ix-archive-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 42.664H85.333v234.667H128v-192h174.293L384 167.037v110.294h42.667v-128zM124.426 428.076v19.921h98.637v-22.135h-63.308l61.182-83.407v-19.921H126.64v22.135h59.057zm118.381-105.542v125.463h28.246V322.534zm58.083 0v125.463h28.245v-47.812h11.866q12.924.001 21.073-1.948q8.234-2.037 13.988-6.641q13.282-10.624 13.282-30.547q0-12.217-5.579-21.337q-6.905-11.423-20.01-14.787q-9.474-2.392-27.535-2.391zm35.684 56.401h-8.147v-35.151h8.147q11.775 0 17.175 3.277q7.35 4.425 7.35 14.963q0 10.713-7.614 14.432q-5.135 2.48-16.911 2.479" clip-rule="evenodd"></svg:path>`,
})
export class IxArchiveDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixArchiveDocumentFilledIcon],svg[ix-archive-document-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320.354 42.664H85.334v234.667h341.333v-128zM124.426 428.076v19.921h98.637v-22.135h-63.308l61.182-83.407v-19.921H126.64v22.135h59.057zm118.381-105.542v125.463h28.246V322.534zm58.083 0v125.463h28.245v-47.812h11.866q12.924.001 21.073-1.948q8.234-2.037 13.988-6.641q13.282-10.624 13.282-30.547q0-12.217-5.579-21.337q-6.905-11.423-20.01-14.787q-9.474-2.392-27.535-2.391zm35.684 56.401h-8.147v-35.151h8.147q11.775 0 17.175 3.277q7.35 4.425 7.35 14.963q0 10.714-7.614 14.432q-5.135 2.48-16.911 2.479" clip-rule="evenodd"></svg:path>`,
})
export class IxArchiveDocumentFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAreachartIcon],svg[ix-areachart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 362.667V64L292.437 197.333H142.706l-79.353 79.353l.647 85.981zm-.001 42.666h-384V448h384z" clip-rule="evenodd"></svg:path>`,
})
export class IxAreachartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixArrowDiagonalBottomLeftIcon],svg[ix-arrow-diagonal-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M346.51 135.32L192.001 289.829v-97.83h-42.667v170.667H320V320l-97.829-.001l154.509-154.51z"></svg:path>`,
})
export class IxArrowDiagonalBottomLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixArrowDiagonalBottomRightIcon],svg[ix-arrow-diagonal-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m165.49 135.32l154.509 154.509v-97.83h42.667v170.667H192V320l97.829-.001l-154.509-154.51z"></svg:path>`,
})
export class IxArrowDiagonalBottomRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixArrowDiagonalTopLeftIcon],svg[ix-arrow-diagonal-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.334 149.333V320H192l.001-97.831l154.51 154.51l30.169-30.17L222.171 192h97.83v-42.666z"></svg:path>`,
})
export class IxArrowDiagonalTopLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixArrowDiagonalTopRightIcon],svg[ix-arrow-diagonal-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.666 149.333V320H320l-.001-97.831l-154.51 154.51l-30.169-30.17L289.829 192h-97.83v-42.666z"></svg:path>`,
})
export class IxArrowDiagonalTopRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixArrowDownIcon],svg[ix-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.672 106.68v216.973l-70.25-70.25l-30.167 30.167l121.75 121.75l121.74-121.75l-30.167-30.167l-70.24 70.247V106.68z"></svg:path>`,
})
export class IxArrowDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixArrowDownRightIcon],svg[ix-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 298.667l-128 128l-30.293-30.294L344.96 320H106.667V64h42.667v213.333H344.96l-76.586-76.373l30.293-30.293z"></svg:path>`,
})
export class IxArrowDownRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixArrowLeftIcon],svg[ix-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.32 234.672H188.347l70.25-70.25l-30.167-30.167l-121.75 121.75l121.75 121.74l30.167-30.167l-70.248-70.24H405.32z"></svg:path>`,
})
export class IxArrowLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixArrowRightIcon],svg[ix-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.68 277.328h216.973l-70.25 70.25l30.167 30.167l121.75-121.75l-121.75-121.74l-30.167 30.167l70.247 70.239H106.68z"></svg:path>`,
})
export class IxArrowRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixArrowRightDownIcon],svg[ix-arrow-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m298.666 426.666l128-128l-30.293-30.293L320 344.96V106.666H64v42.667h213.333V344.96l-76.373-76.587l-30.294 30.293z"></svg:path>`,
})
export class IxArrowRightDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixArrowUpIcon],svg[ix-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.328 405.32V188.347l70.25 70.25l30.167-30.167l-121.75-121.75l-121.74 121.75l30.167 30.167l70.239-70.248V405.32z"></svg:path>`,
})
export class IxArrowUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixArrowUpLeftIcon],svg[ix-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m85.333 213.333l128-128l30.294 30.294L167.04 192h238.293v256h-42.666V234.667H167.04l76.587 76.373l-30.294 30.293z" clip-rule="evenodd"></svg:path>`,
})
export class IxArrowUpLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAspectsIcon],svg[ix-aspects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 85.767v63.566h115.667l2.606-6.814c9.377-30.74 36.646-53.385 69.326-56.752l4.292-.33l4.172-.104c44.885 0 81.27 36.083 81.27 80.593s-36.385 80.592-81.27 80.592c-34.968 0-65.203-22.029-76.524-53.38L310.273 192h-51.855c5.138 9.044 5.816 13.911 7.124 24.405l.481 5.285l.136 4.68v80.593c0 21.243 16.576 38.647 37.602 40.185l3.033.111h2.58l.899-3.259c9.377-30.739 36.646-53.385 69.326-56.752l4.292-.329l4.172-.105c44.885 0 81.27 36.083 81.27 80.593S432.948 448 388.063 448c-34.968 0-65.203-22.03-76.524-53.38l-1.266-3.806l-.899-3.259h-2.58c-42.12 0-76.756-31.775-80.863-72.471l-.308-4.099l-.099-4.022V226.37c0-12.744-6.013-24.265-15.526-31.694l-2.68-1.923L192 192v64H42.667V85.333zM388.063 327.11c-22.442 0-40.634 18.041-40.634 40.296s18.192 40.296 40.634 40.296c22.443 0 40.635-18.041 40.635-40.296s-18.192-40.296-40.635-40.296M149.333 128h-64v85.333h64zm238.73-2.371c-22.442 0-40.634 18.042-40.634 40.297s18.192 40.296 40.634 40.296c22.443 0 40.635-18.041 40.635-40.296s-18.192-40.297-40.635-40.297" clip-rule="evenodd"></svg:path>`,
})
export class IxAspectsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAspectsFilledIcon],svg[ix-aspects-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 85.767v63.566h115.667l2.606-6.814c9.377-30.74 36.646-53.385 69.326-56.752l4.292-.33l4.172-.104c44.885 0 81.27 36.083 81.27 80.593s-36.385 80.592-81.27 80.592c-34.968 0-65.203-22.029-76.524-53.38L310.273 192h-51.855c5.138 9.044 5.816 13.911 7.124 24.405l.481 5.285l.136 4.68v80.593c0 21.243 16.576 38.647 37.602 40.185l3.033.111h2.58l.899-3.259c9.377-30.739 36.646-53.385 69.326-56.752l4.292-.329l4.172-.105c44.885 0 81.27 36.083 81.27 80.593S432.948 448 388.063 448c-34.968 0-65.203-22.03-76.524-53.38l-1.266-3.806l-.899-3.259h-2.58c-42.12 0-76.756-31.775-80.863-72.471l-.308-4.099l-.099-4.022V226.37c0-12.744-6.013-24.265-15.526-31.694l-2.68-1.923L192 192v64H42.667V85.333zM388.063 327.11c-22.442 0-40.634 18.041-40.634 40.296s18.192 40.296 40.634 40.296c22.443 0 40.635-18.041 40.635-40.296s-18.192-40.296-40.635-40.296M149.333 128h-64v85.333h64zm238.73-2.371c-22.442 0-40.634 18.042-40.634 40.297s18.192 40.296 40.634 40.296c22.443 0 40.635-18.041 40.635-40.296s-18.192-40.297-40.635-40.297" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M149.333 128h-64v85.333h64zm238.73-2.371c-22.442 0-40.634 18.042-40.634 40.297s18.192 40.296 40.634 40.296c22.443 0 40.635-18.041 40.635-40.296s-18.192-40.297-40.635-40.297m0 201.482c-22.442 0-40.634 18.041-40.634 40.296s18.192 40.296 40.634 40.296c22.443 0 40.635-18.041 40.635-40.296s-18.192-40.296-40.635-40.296"></svg:path>`,
})
export class IxAspectsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAssetIndoorIcon],svg[ix-asset-indoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 128v298.667H42.667V85.333h426.666v341.334h-42.667L426.667 128zm149.334 213.333V256h42.666v85.333zm-64-92.827L256 198.729l85.333 49.777v100.321L256 398.605l-85.333-49.778zM256 149.333L384 224v149.333L256 448l-128-74.667V224z" clip-rule="evenodd"></svg:path>`,
})
export class IxAssetIndoorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAssetNetworkIcon],svg[ix-asset-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 90.166L149.333 151.75v123.168L256 336.502l106.667-61.584V151.75zm149.333 36.95L256 40.898l-149.333 86.218v172.435l120.863 69.781c-14.788 7.357-26.327 20.267-31.888 36.001H42.667V448h152.975c8.786 24.857 32.492 42.667 60.358 42.667s51.572-17.81 60.358-42.667h152.975v-42.667H316.358c-5.561-15.734-17.1-28.644-31.888-36.001l120.863-69.781zM256 448c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.334-21.333-21.334s-21.333 9.552-21.333 21.334S244.218 448 256 448m-42.667-277.333h-42.666V256h42.666zm85.334 0h42.666V256h-42.666zM277.333 128h-42.666v170.667h42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxAssetNetworkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAssetNetworkFilledIcon],svg[ix-asset-network-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 127.116L256 40.898l-149.333 86.218v172.435l120.863 69.781c-14.788 7.357-26.327 20.267-31.888 36.001H42.667V448h152.975c8.786 24.857 32.492 42.667 60.358 42.667s51.572-17.81 60.358-42.667h152.975v-42.667H316.358c-5.561-15.734-17.1-28.644-31.888-36.001l120.863-69.781zm-256 43.551H192V256h-42.667zm213.334 0H320V256h42.667zM277.333 128v170.667h-42.666V128zm0 298.667c0 11.782-9.551 21.333-21.333 21.333s-21.333-9.551-21.333-21.333s9.551-21.334 21.333-21.334s21.333 9.552 21.333 21.334" clip-rule="evenodd"></svg:path>`,
})
export class IxAssetNetworkFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAssetOutdoorIcon],svg[ix-asset-outdoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 163.173L256 113.395l85.333 49.778v100.321L256 313.271l-85.333-49.777zM256 64l128 74.667V288l-128 74.667L128 288V138.667zm-21.333 192v-85.333h42.666V256zM128 426.667V384h256v42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxAssetOutdoorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAsteriskIcon],svg[ix-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.676 85.31v144.35l-135.31-43.965l-13.185 40.578L218.296 269.2l-81.028 111.526l34.518 25.078l82.92-114.129l83.814 115.357l34.518-25.079l-81.379-112.008l134.179-43.598l-13.184-40.579l-135.312 43.965V85.31z" clip-rule="evenodd"></svg:path>`,
})
export class IxAsteriskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAttachIcon],svg[ix-attach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M175.541 451.418c-34.837 0-67.605-13.568-92.245-38.208c-50.859-50.859-50.859-133.632 0-184.49L257.269 54.745l27.158 27.179l-173.974 173.952c-35.882 35.904-35.882 94.293 0 130.176c17.387 17.386 40.512 26.965 65.088 26.965s47.702-9.579 65.088-26.965l172.118-172.118c21.397-21.397 21.397-56.192 0-77.589c-20.736-20.757-56.896-20.693-77.59-.021L166.603 304.75c-3.542 3.542-5.483 8.256-5.483 13.27s1.941 9.728 5.504 13.269c7.083 7.147 19.477 7.104 26.56 0l141.504-141.483l27.157 27.179l-141.482 141.483c-22.336 22.293-58.603 22.25-80.896 0c-22.294-22.294-22.294-58.603 0-80.875L308.02 109.189c17.579-17.6 41.024-27.307 65.942-27.307c24.896 0 48.32 9.685 65.962 27.307c36.352 36.373 36.352 95.552 0 131.925L267.787 413.21c-24.64 24.64-57.387 38.208-92.246 38.208"></svg:path>`,
})
export class IxAttachIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAttachmentUploadIcon],svg[ix-attachment-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m401.797 311.04l94.17 94.17l-30.17 30.17l-42.667-42.654v97.838h-42.667v-97.839l-42.666 42.655l-30.17-30.17zM257.269 54.746l27.158 27.179l-173.974 173.952c-35.882 35.904-35.882 94.293 0 130.176c17.387 17.386 40.512 26.965 65.088 26.965s47.702-9.579 65.088-26.965l172.118-172.118c21.397-21.397 21.397-56.192 0-77.589c-20.736-20.757-56.896-20.693-77.59-.021L166.603 304.75c-3.542 3.542-5.483 8.256-5.483 13.27s1.941 9.728 5.504 13.269c7.083 7.147 19.477 7.104 26.56 0l141.504-141.483l27.157 27.179l-141.482 141.483c-22.336 22.293-58.603 22.25-80.896 0c-22.294-22.294-22.294-58.603 0-80.875L308.02 109.189c17.579-17.6 41.024-27.307 65.942-27.307c24.896 0 48.32 9.685 65.962 27.307c36.352 36.373 36.352 95.552 0 131.925L267.787 413.21c-24.64 24.64-57.387 38.208-92.246 38.208c-34.837 0-67.605-13.568-92.245-38.208c-50.859-50.859-50.859-133.632 0-184.49z"></svg:path>`,
})
export class IxAttachmentUploadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAudioDescription1Icon],svg[ix-audio-description1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m91.947 192l-49.28 128h29.227l10.88-30.506H131.2L142.294 320H172.8l-50.56-128zm-1.493 75.947L100.48 240a202 202 0 0 0 6.4-19.84c3.2 10.027 3.84 12.16 6.614 19.84l10.026 27.947zM224.64 192h-35.626v128h33.493a90.45 90.45 0 0 0 50.347-9.6a60.16 60.16 0 0 0 24.32-54.4a64 64 0 0 0-17.707-48.853A73.4 73.4 0 0 0 224.64 192m28.16 98.987a51.63 51.63 0 0 1-29.226 6.613h-5.547v-83.2h5.547c17.92 0 24.96 1.92 32 8.32A43.95 43.95 0 0 1 267.307 256a40.96 40.96 0 0 1-14.507 34.987m171.734-161.28l-32 24.747c45.806 59.949 45.806 143.144 0 203.093l32 24.747c57.195-74.482 57.195-178.105 0-252.587m-100.48 77.013c20.89 29.533 20.89 69.028 0 98.56l32.213 24.534c31.857-44.132 31.857-103.709 0-147.84z"></svg:path>`,
})
export class IxAudioDescription1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAudioDescription2Icon],svg[ix-audio-description2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M354.346 87.68a156.8 156.8 0 0 1 50.987 113.706a144 144 0 0 1-52.267 114.134a113.28 113.28 0 0 0-34.986 65.493a88.32 88.32 0 0 1-34.134 57.6a113.7 113.7 0 0 1-61.186 21.296l-.894.037h-8.533a94.93 94.93 0 0 1-63.514-32.71l-.486-.57l32.213-27.306a52.27 52.27 0 0 0 36.907 18.986A51.84 51.84 0 0 0 256 405.333a58.24 58.24 0 0 0 21.333-32.853a151.9 151.9 0 0 1 48.213-88.107a102.19 102.19 0 0 0 39.254-82.987a119.9 119.9 0 0 0-34.56-82.986a106.67 106.67 0 0 0-87.254-26.24c-47.661 7.072-85.309 43.976-93.416 91.36l-.237 1.44l-40.96-5.76c10.13-66.044 61.956-117.87 128-128a153.6 153.6 0 0 1 117.973 36.48m-138.453 96.853c42.214 55.31 42.636 131.81 1.266 187.544l-1.266 1.683l-32.64-25.174c31.24-40.507 31.552-96.824.937-137.647l-.937-1.233zm-62.08 47.573c20.456 28.025 20.456 66.056 0 94.08l-32.427-24.96a39.04 39.04 0 0 0 0-44.16Z"></svg:path>`,
})
export class IxAudioDescription2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAuditReportIcon],svg[ix-audit-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m384 85.334l85.333 85.333v256H42.666l-.001-232.67c10.098 15.352 24.215 33.107 42.667 48.165L85.333 384h341.333V181.334L373.333 128l-39.736.002c-5.44-10.653-14.584-26.49-27.734-42.668zM384 320v21.334H128V320zm0-64v21.334H256v-20.371q.811-.477 1.615-.963zM181.333 42.667C278.4 42.667 320 149.334 320 149.334S278.4 256 181.333 256S42.666 149.334 42.666 149.334s41.6-106.667 138.667-106.667m0 26.667c-61.29 0-97.067 57.066-108.299 80c11.232 22.933 47.008 80 108.3 80c61.29 0 97.066-57.067 108.298-80c-11.232-22.934-47.008-80-108.299-80m0 33.333c26.804 0 48.533 20.893 48.533 46.667c0 25.773-21.729 46.666-48.533 46.666S132.8 175.107 132.8 149.334c0-25.774 21.729-46.667 48.533-46.667m0 26.667c-11.487 0-20.8 8.954-20.8 20s9.313 20 20.8 20s20.8-8.955 20.8-20s-9.312-20-20.8-20"></svg:path>`,
})
export class IxAuditReportIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAverageIcon],svg[ix-average-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m422.536 60.491l30.17 30.17l-61.36 61.36c22.15 28.79 35.32 64.846 35.32 103.979c0 94.256-76.41 170.666-170.666 170.666c-39.133 0-75.19-13.17-103.979-35.32L90.667 452.7l-30.17-30.17l61.205-61.204C98.92 332.317 85.334 295.746 85.334 256c0-94.257 76.41-170.667 170.666-170.667c39.745 0 76.317 13.586 105.325 36.367zm-61.704 122.044L182.535 360.83C203.33 375.431 228.664 384 256 384c70.693 0 128-57.308 128-128c0-27.337-8.57-52.672-23.168-73.465M256 128c-70.692 0-128 57.307-128 128c0 27.952 8.96 53.811 24.164 74.863l178.699-178.7C309.81 136.96 283.953 128 256 128"></svg:path>`,
})
export class IxAverageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAxesSynchronousIcon],svg[ix-axes-synchronous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m347.582 178.975l6.286 32.171c14.071 4.703 26.834 12.375 37.588 22.296l30.326-10.509L448 269.53l-24.015 21.675a110.8 110.8 0 0 1 2.251 22.283c0 7.639-.776 15.093-2.251 22.283L448 357.446l-26.218 46.596l-30.326-10.509c-10.754 9.921-23.517 17.594-37.588 22.296L347.582 448h-52.436l-6.267-32.165c-14.082-4.703-26.856-12.38-37.616-22.31l-30.317 10.517l-26.218-46.596l24.019-21.656a110.8 110.8 0 0 1-2.255-22.302c0-7.64.776-15.094 2.251-22.283l-24.015-21.675l26.218-46.597l30.317 10.517c10.765-9.934 23.545-17.614 37.635-22.316l6.248-32.159zm-26.218 67.257c-36.199 0-65.545 30.111-65.545 67.256s29.346 67.256 65.545 67.256s65.545-30.112 65.545-67.256s-29.346-67.256-65.545-67.256M216.854 64l6.286 32.171c14.071 4.702 26.835 12.375 37.588 22.296l30.326-10.509l26.218 46.596l-5.774 5.2l-31.714.005l-3.004 15.459l-4.241 21.705l-.188.107a122 122 0 0 0-16.594 8.957c.287-2.435.424-4.938.424-7.475c0-37.144-29.346-67.256-65.545-67.256s-65.545 30.112-65.545 67.256c0 32.034 21.826 58.837 51.051 65.606l-5.305 9.441l11.523 10.4l16.263 14.675l-.191 1.614a132 132 0 0 0-.667 13.24l.167 6.65q.168 3.314.501 6.601l.19 1.603l-5.219 4.683h-28.986l-6.267-32.165c-14.082-4.703-26.855-12.381-37.616-22.31l-30.317 10.517L64 242.47l24.02-21.655a110.8 110.8 0 0 1-2.256-22.303c0-7.64.776-15.093 2.251-22.283L64 154.554l26.218-46.596l30.317 10.517c10.765-9.934 23.545-17.614 37.635-22.317L164.418 64z" clip-rule="evenodd"></svg:path>`,
})
export class IxAxesSynchronousIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAxisPositioningIcon],svg[ix-axis-positioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m168.139 256.044l5.159 25.506a86.2 86.2 0 0 1 30.85 17.671l24.899-8.326l21.521 36.943l-19.711 17.195a85 85 0 0 1 1.846 17.656c0 6.053-.636 11.959-1.846 17.655l19.711 17.196l-21.521 36.942l-24.899-8.326a86.2 86.2 0 0 1-30.85 17.672l-5.159 25.505h-43.043l-5.137-25.498a86.2 86.2 0 0 1-30.871-17.679l-24.9 8.326l-21.521-36.942l19.715-17.174a85 85 0 0 1-1.85-17.677c0-6.061.638-11.974 1.85-17.677l-19.715-17.174l21.521-36.943l24.9 8.326a86.2 86.2 0 0 1 30.871-17.678l5.137-25.499zm-21.521 53.322c-29.715 0-53.804 23.874-53.804 53.323s24.089 53.322 53.804 53.322c29.714 0 53.803-23.873 53.803-53.322s-24.089-53.323-53.803-53.323M448 64v149.303h-43.043l-.014-76.593l-136.505 135.31l-30.436-30.164l136.402-135.198h-77.053V64z" clip-rule="evenodd"></svg:path>`,
})
export class IxAxisPositioningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixAxisRotationIcon],svg[ix-axis-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 64c60.324 0 114.151 27.82 149.35 71.331l-.017-49.998H448v128H320v-42.666l58.562-.007c-26.986-38.684-71.818-63.993-122.562-63.993c-82.475 0-149.333 66.858-149.333 149.333S173.525 405.333 256 405.333c76.196 0 139.064-57.067 148.194-130.793l42.342 5.286C434.803 374.622 353.971 448 256 448c-106.039 0-192-85.961-192-192S149.961 64 256 64m21.251 85.417l5.114 25.511a85 85 0 0 1 16.333 7.305l-.012 41.982c-9.724-13.029-25.261-21.465-42.769-21.465c-29.455 0-53.333 23.878-53.333 53.334c0 29.455 23.878 53.333 53.333 53.333s53.334-23.878 53.334-53.333a53.2 53.2 0 0 0-4.474-21.416l38.903-.003l-4.259 3.759a85.7 85.7 0 0 1 1.83 17.66c0 6.054-.631 11.961-1.83 17.659l19.539 17.199l-21.333 36.95l-24.682-8.328a85.25 85.25 0 0 1-30.58 17.675l-5.114 25.511h-42.667l-5.093-25.504a85.2 85.2 0 0 1-30.601-17.682l-24.682 8.328l-21.333-36.95l19.543-17.178a85.7 85.7 0 0 1-1.834-17.68a85.7 85.7 0 0 1 1.834-17.681l-19.543-17.177l21.333-36.951l24.682 8.328a85.2 85.2 0 0 1 30.601-17.682l5.093-25.504z" clip-rule="evenodd"></svg:path>`,
})
export class IxAxisRotationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBackupIcon],svg[ix-backup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M352 168.296c64.802 0 117.334 29.715 117.334 66.37q0 1.34-.093 2.665l.028-.294h.065v165.925c0 36.656-52.532 66.37-117.334 66.37c-63.361 0-114.992-28.408-117.256-63.936l-.077-2.434V237.037h.073a38 38 0 0 1-.073-2.37c0-36.656 52.532-66.371 117.333-66.371m0 218.074c-28.365 0-54.38-5.694-74.667-15.171v22.317l.018 1.196c.684 12.202 32.466 31.954 74.657 31.954c23.075 0 44.362-5.789 59.26-15.367c10.256-6.594 14.782-12.873 15.34-16.01l.059-.623V371.2c-20.286 9.477-46.3 15.17-74.667 15.17m0-85.333c-28.361 0-54.373-5.693-74.658-15.167l-.002 35.906l1.446-.01c1.73 1.73 5.179 4.59 11.254 8.027c15.143 8.566 37.48 13.91 61.96 13.91s46.818-5.344 61.96-13.91c7.501-4.242 11-7.608 12.2-9.05l.507-.003l.003-34.875c-20.287 9.477-46.303 15.172-74.67 15.172m0-90.075c-41.237 0-74.666 10.984-74.666 24.534s33.43 24.533 74.666 24.533c41.238 0 74.667-10.984 74.667-24.533s-33.43-24.534-74.667-24.534M101.72 51.61l30.173 30.173C109.67 104.807 96 136.14 96 170.666c0 42.82 21.026 80.728 53.316 103.965l.018-82.632H192v149.334H42.667v-42.667l68.446.001c-35.432-31.272-57.78-77.027-57.78-128c0-46.309 18.444-88.31 48.386-119.057"></svg:path>`,
})
export class IxBackupIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBackupFilledIcon],svg[ix-backup-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256.465 388.968a24.3 24.3 0 0 0-.465 4.728v25.213c0 27.848 47.757 50.424 106.667 50.424s106.667-22.576 106.667-50.424v-25.213l-.015-.833a24.5 24.5 0 0 0-.447-3.888c-6.532 5.223-14.486 10.04-23.701 14.164c-21.51 9.624-50.514 15.77-82.504 15.77c-33.258 0-63.285-6.653-85.052-16.942c-8.136-3.847-15.219-8.252-21.15-12.999m0-75.636a24.3 24.3 0 0 0-.465 4.728v25.212c0 27.849 47.757 50.424 106.667 50.424s106.667-22.575 106.667-50.424V318.06l-.015-.834a24.5 24.5 0 0 0-.447-3.887c-6.532 5.223-14.486 10.04-23.701 14.163c-21.51 9.625-50.514 15.77-82.504 15.77c-33.258 0-63.285-6.652-85.052-16.942c-8.136-3.846-15.219-8.252-21.15-12.998m106.202-121.333C303.757 192 256 214.575 256 242.424v25.212c0 27.848 47.757 50.424 106.667 50.424s106.667-22.576 106.667-50.424v-25.212l-.158-2.767C466.138 213.095 419.614 192 362.667 192M101.719 51.61l30.173 30.173C109.67 104.807 96 136.14 96 170.666c0 42.82 21.026 80.728 53.316 103.965l.018-82.632H192v149.334H42.667v-42.667l68.446.001c-35.432-31.272-57.78-77.027-57.78-128c0-46.309 18.444-88.31 48.386-119.057"></svg:path>`,
})
export class IxBackupFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBarCodeIcon],svg[ix-bar-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.334 85.333v341.333H42.667V85.333zm85.333 0v341.333H128V85.333zm85.333 0v341.333h-42.666V85.333zm213.334 0v341.333h-42.667V85.333zm-149.334 0v341.333h-21.333V85.333zm64 0v341.333h-21.333V85.333z"></svg:path>`,
})
export class IxBarCodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBarchartIcon],svg[ix-barchart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h64v298.667H64zm106.667 149.333h64v149.334h-64zM448 170.667h-64v192h64zm-170.667-64h64v256h-64zM448 405.333H64V448h384z" clip-rule="evenodd"></svg:path>`,
})
export class IxBarchartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBarchartHorizontalIcon],svg[ix-barchart-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 64H85.333v64H192zM85.333 170.667h341.334v64H85.333zm256 106.666h-256v64h256zM256 384H85.333v64H256z" clip-rule="evenodd"></svg:path>`,
})
export class IxBarchartHorizontalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryChargeIcon],svg[ix-battery-charge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M330.667 234.667H256l42.667-149.334l-160 192h74.666l-42.666 149.334zM85.334 341.334l87.527-.001L160.67 384H42.667V128h192.674l-35.555 42.666l-114.452.001zM426.667 384H233.992l35.556-42.667l114.452.001V170.667l-87.527-.001L308.663 128h118.004v85.333l42.667.001v85.333h-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryChargeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryCheckIcon],svg[ix-battery-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 213.333h42.667v85.334h-42.667V384h-384V128h384zm-341.333 128H384V170.667H85.334zm228.295-136.332l-35.501-23.668l-50.744 76.07l-39.339-39.322l-30.17 30.17l76.152 76.152z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryEmptyIcon],svg[ix-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 213.333h-42.667V128h-384v256h384v-85.333h42.667zm-85.334 128H85.334V170.667H384z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryEmptyQuestionIcon],svg[ix-battery-empty-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.877 389.333c14.728 0 26.667 11.939 26.667 26.667s-11.939 26.667-26.667 26.667S208.21 430.728 208.21 416s11.939-26.667 26.667-26.667M426.667 128v82.589l42.667.001v88.077h-42.667V384H286.925l-.004-10.667l.001-.603c.009-2.895.146-6.85 2.204-9.409q2.205-2.742 3.54-3.815c8.432-6.246 15.629-12.248 21.717-18.173H384V170.667H85.334v170.666h97.456c-1.75 9.216-2.534 19.838-2.534 32L180.24 384H42.667V128zm-195.349 72.001c18.161 0 34.093 3.534 47.799 10.589c22.803 11.703 34.195 31.571 34.195 59.581c0 13.515-3.435 25.317-10.288 35.397c-5.651 8.47-15.121 17.648-28.436 27.534c-7.664 5.247-12.711 10.183-15.126 14.822c-3.04 5.649-4.541 14.114-4.541 25.409h-42.665c0-17.136 1.824-29.639 5.454-37.504c4.229-9.483 13.407-19.064 27.521-28.742c6.664-5.045 11.503-10.184 14.529-15.426c3.625-5.851 5.449-12.502 5.449-19.966c0-11.898-3.539-20.765-10.594-26.623c-5.636-4.228-12.502-6.345-20.569-6.345c-13.108 0-22.59 4.338-28.436 13.009c-4.236 6.449-6.359 14.718-6.359 24.799v.305h-45.362c0-26.422 8.359-46.383 25.091-59.899c14.12-11.282 31.573-16.94 52.338-16.94" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryEmptyQuestionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryExclamationIcon],svg[ix-battery-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.667 341.333c17.664 0 32 14.328 32 32s-14.336 32-32 32s-32-14.327-32-32c0-17.672 14.336-32 32-32m-64-213.333v42.667H85.333v170.666h85.334V384h-128V128zm256 0v85.333h42.666v85.334h-42.666V384h-128v-42.667H384V170.667h-85.333V128zM256 106.667v208h-42.667v-208z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryExclamationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryFullIcon],svg[ix-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 128v85.333h42.666v85.334h-42.666V384h-384V128zM384 170.667H85.333v170.666H384zm-42.667 42.666v85.334H128v-85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryFullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryFullCheckIcon],svg[ix-battery-full-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 213.333h-42.666V128h-384v256h384v-82.667h42.666zm-178.413-32l35.501 23.668l-79.602 119.402l-76.152-76.152l30.17-30.17l39.338 39.322z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryFullCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryHalfIcon],svg[ix-battery-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 213.333H128.001v85.334H256z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 213.333h-42.667V128h-384v256h384v-85.333h42.667zm-85.333 128H85.334V170.667H384z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryLowIcon],svg[ix-battery-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.667 213.333H128v85.334h42.667z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 213.333h-42.667V128h-384v256h384v-85.333h42.667zm-85.334 128H85.334V170.667H384z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryLowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryQuarterIcon],svg[ix-battery-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.333 213.333h-85.332v85.334h85.332z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 213.333h-42.667V128h-384v256h384v-85.333h42.667zm-85.333 128H85.334V170.667H384z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryQuarterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatterySlashIcon],svg[ix-battery-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m200.897 170.666l170.668 170.667l80.854 80.854l-30.17 30.17l-68.358-68.358L42.667 384V128l55.225-.001l-38.31-38.31l30.17-30.169zm110.328 170.667L140.559 170.666l-55.225.001v170.666zM426.667 128v85.333h42.667v85.333h-42.667v37.429L384 293.429V170.667l-122.763-.001l-42.667-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatterySlashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryThreeQuarterIcon],svg[ix-battery-three-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M298.667 213.333H128.001v85.334h170.666z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 213.333h-42.667V128h-384v256h384v-85.333h42.667zm-85.333 128H85.334V170.667H384z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryThreeQuarterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightChargeIcon],svg[ix-battery-upright-charge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 85.333V42.667h-85.334v42.666H128v384h256v-384zm-128 42.667h170.666v298.667H170.667zM320 256h-53.333l32-106.667L192 298.667h53.333l-32 106.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightChargeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightCheckIcon],svg[ix-battery-upright-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.334 85.333h-85.333v384h256v-384h-85.334l.001-42.666h-85.333zm-42.667 341.334V128h170.667v298.667zm127.417-221.584l35.501 23.667l-79.602 119.402L177.831 272l30.17-30.17l39.338 39.322z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightEmptyIcon],svg[ix-battery-upright-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 85.333h85.333l.001-42.666h85.333v42.666H384v384H128zM170.667 128v298.667h170.667V128z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightExclamationIcon],svg[ix-battery-upright-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 42.667v42.666H384v384H128v-384h85.333V42.667zM341.333 128H170.667v298.667h170.666zM256 341.333c17.664 0 32 14.328 32 32s-14.336 32-32 32s-32-14.327-32-32c0-17.672 14.336-32 32-32m21.333-192v165.334h-42.666V149.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightExclamationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightFullIcon],svg[ix-battery-upright-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 85.333h85.333V42.667h85.334v42.666H384v384H128zM170.667 128v298.667h170.666V128zm42.666 42.667h85.334V384h-85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightFullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightFullCheckIcon],svg[ix-battery-upright-full-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 85.333V42.667h-85.334v42.666H128v384h256v-384zm-.581 119.75l35.501 23.668l-79.601 119.402l-76.153-76.152l30.17-30.17l39.339 39.322z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightFullCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightHalfIcon],svg[ix-battery-upright-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 85.333h85.333V42.667h85.334v42.666H384v384H128zM170.667 128v298.667h170.666V128zm42.666 149.333h85.334V384h-85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightLowIcon],svg[ix-battery-upright-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 85.333h85.333V42.667h85.334v42.666H384v384H128zM170.667 128v298.667h170.666V128zm42.666 213.333h85.334V384h-85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightLowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightQuarterIcon],svg[ix-battery-upright-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 85.333h85.333V42.667h85.334v42.666H384v384H128zM170.667 128v298.667h170.666V128zm42.666 192h85.334v64h-85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightQuarterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightQuestionIcon],svg[ix-battery-upright-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M305.917 42.667v42.666H384l.003 114.271c-11.439-1.366-26.75-1.75-42.651-1.156L341.333 128H170.667v298.667l113.176.007a59 59 0 0 0-.966 10.659c0 11.813 3.491 22.81 9.497 32.016L128 469.333v-384h85.333V42.667zm35.626 368c14.728 0 26.667 11.939 26.667 26.666S356.271 464 341.543 464s-26.666-11.939-26.666-26.667c0-14.727 11.938-26.666 26.666-26.666m-3.558-189.332c18.16 0 34.092 3.534 47.798 10.588c22.803 11.703 34.195 31.572 34.195 59.581c0 13.516-3.435 25.318-10.287 35.397c-5.651 8.47-15.121 17.649-28.437 27.534c-7.664 5.247-12.711 10.184-15.126 14.823c-3.039 5.648-4.54 14.113-4.54 25.409h-42.666c0-17.137 1.824-29.639 5.455-37.504c4.229-9.483 13.406-19.064 27.521-28.742c6.664-5.046 11.502-10.184 14.528-15.426c3.625-5.852 5.449-12.503 5.449-19.966c0-11.899-3.539-20.766-10.593-26.624c-5.637-4.228-12.503-6.345-20.569-6.345c-13.108 0-22.59 4.339-28.437 13.009c-4.235 6.449-6.359 14.719-6.359 24.8v.304h-45.362c0-26.422 8.359-46.382 25.091-59.898c14.12-11.283 31.573-16.94 52.339-16.94" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightQuestionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightSlashIcon],svg[ix-battery-upright-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m89.751 59.52l38.247 38.25v-.02l42.666 42.666v.021l170.667 170.667v-.021l42.667 42.666l68.42 68.438l-30.17 30.17l-38.25-38.256l.002 55.232H128l-.002-311.232L59.581 89.69zm80.913 141.248l.002 225.899h170.667l-.002-55.232zM298.667 42.667l-.002 42.666H384l-.002 208.086l-42.667-42.667l.002-122.752H218.558l-42.667-42.667h37.441l.002-42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightSlashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightThreeQuarterIcon],svg[ix-battery-upright-three-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 85.333h85.333V42.667h85.334v42.666H384v384H128zM170.667 128v298.667h170.666V128zm42.666 85.333h85.334V384h-85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightThreeQuarterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightXmarkIcon],svg[ix-battery-upright-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 85.333h89.749V42.667h78.635v42.666H384v384H128zM170.667 128v298.667h170.666V128zm16.917 111.083l30.165-30.166L256 247.168l38.251-38.251l30.165 30.166l-38.251 38.25l40.384 38.251l-30.165 30.165L256 307.499l-38.251 38.25l-30.165-30.165l38.251-38.251z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightXmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBatteryXmarkIcon],svg[ix-battery-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 128v85.333h42.667v85.334h-42.667V384h-384V128zM384 170.667H85.334v170.666H384zm-111.082 16.917l30.165 30.165L264.832 256l38.251 38.251l-30.165 30.165l-38.251-38.251l-38.251 40.384l-30.165-30.165L204.502 256l-38.251-38.251l30.165-30.165l38.251 38.251z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryXmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBezierCurveIcon],svg[ix-bezier-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.334 74.667c0 17.673-14.328 32-32 32c-4.941 0-9.62-1.12-13.797-3.118l-36.367 36.367c41.827-16.333 82.362-13.858 115.902-4.498c25.775 7.192 47.292 18.345 62.285 27.593c7.535 4.648 13.525 8.878 17.696 12.001a168 168 0 0 1 4.883 3.789c.58.467 1.04.846 1.372 1.125l.408.344l.134.113l.049.042l.02.017c.008.007.016.014-13.92 16.167s-13.927 16.16-13.92 16.165l-.13-.109l-.32-.265l-.502-.408a127 127 0 0 0-3.646-2.826c-3.292-2.464-8.222-5.954-14.522-9.84c-12.678-7.82-30.491-16.989-51.353-22.812c-33.652-9.39-75.531-10.365-118.377 18.869q.103-1.678.105-3.383c0-10.87-3.252-20.98-8.837-29.411l-15.616 15.615a31.9 31.9 0 0 1 3.12 13.796c0 17.674-14.327 32-32 32c-4.94 0-9.62-1.12-13.797-3.119l-15.615 15.616c8.43 5.585 18.541 8.837 29.411 8.837q1.704-.001 3.383-.105c-29.236 42.846-28.26 84.728-18.87 118.379c5.823 20.862 14.992 38.675 22.811 51.351c3.887 6.302 7.377 11.232 9.84 14.522a125 125 0 0 0 2.827 3.648c.314.388.541.661.673.82l.109.13c-.006-.007-.012-.014-16.165 13.921s-16.16 13.929-16.167 13.919l-.017-.02l-.042-.05l-.113-.131l-.344-.408c-.279-.335-.658-.793-1.125-1.372a171 171 0 0 1-3.789-4.883c-3.123-4.17-7.353-10.16-12-17.696c-9.25-14.995-20.401-36.512-27.594-62.282c-9.36-33.543-11.835-74.08 4.498-115.907l-36.366 36.367a31.9 31.9 0 0 1 3.118 13.797c0 17.672-14.327 32-32 32s-32-14.328-32-32s14.327-32 32-32c4.94 0 9.62 1.12 13.797 3.119l74.655-74.656A31.9 31.9 0 0 1 160 192c0-17.673 14.327-32 32-32c4.94 0 9.62 1.12 13.797 3.12l74.656-74.656a31.9 31.9 0 0 1-3.12-13.797c0-17.673 14.328-32 32-32s32 14.327 32 32"></svg:path>`,
})
export class IxBezierCurveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBilibiliLogoIcon],svg[ix-bilibili-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.667 261.333v32a26.666 26.666 0 0 1-45.523 18.856a26.67 26.67 0 0 1-7.811-18.856v-32a26.667 26.667 0 0 1 53.334 0m266.666-58.666v170.666A74.667 74.667 0 0 1 394.667 448H117.333a74.67 74.67 0 0 1-74.666-74.667V202.667A74.67 74.67 0 0 1 117.333 128h32l-24.106-23.893A26.551 26.551 0 0 1 144 58.784a26.55 26.55 0 0 1 18.773 7.776L224.427 128h64l61.653-61.44a26.55 26.55 0 1 1 37.547 37.547L362.667 128h32a74.67 74.67 0 0 1 74.666 74.667m-53.333 0a21.335 21.335 0 0 0-21.333-21.334H117.333A21.333 21.333 0 0 0 96 202.667v170.666a21.335 21.335 0 0 0 21.333 21.334h277.334A21.333 21.333 0 0 0 416 373.333zm-80 32a26.666 26.666 0 0 0-26.667 26.666v32a26.666 26.666 0 0 0 45.523 18.856a26.67 26.67 0 0 0 7.811-18.856v-32A26.667 26.667 0 0 0 336 234.667"></svg:path>`,
})
export class IxBilibiliLogoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBinocularsIcon],svg[ix-binoculars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.333 64C364.897 64 384 83.103 384 106.667l.001 24.022C420.805 140.162 448 173.572 448 213.333v149.334C448 409.795 409.795 448 362.667 448c-42.932 0-78.458-31.703-84.445-72.976A31.9 31.9 0 0 1 256 384c-8.633 0-16.467-3.418-22.223-8.975C227.791 416.297 192.265 448 149.333 448C102.205 448 64 409.795 64 362.667V213.333c0-39.762 27.195-73.172 64-82.645v-24.021C128 83.103 147.103 64 170.667 64s42.666 19.103 42.666 42.667v27.041c9.494 5.492 16.675 14.537 19.726 25.316c5.814-5.978 13.944-9.69 22.941-9.69s17.127 3.712 22.941 9.69c3.05-10.78 10.232-19.824 19.725-25.316v-27.041C298.667 83.103 317.77 64 341.334 64m-192 256c-23.564 0-42.666 19.103-42.666 42.667s19.102 42.666 42.666 42.666S192 386.231 192 362.667S172.897 320 149.333 320m213.334 0C339.103 320 320 339.103 320 362.667s19.103 42.666 42.667 42.666s42.666-19.102 42.666-42.666S386.231 320 362.667 320M256 192a31.88 31.88 0 0 0-21.334 8.149v128A31.88 31.88 0 0 1 256 320a31.88 31.88 0 0 1 21.334 8.15V200.148A31.88 31.88 0 0 0 256 192m-64-21.333h-42.667c-22.493 0-40.92 17.405-42.55 39.482l-.116 3.184v75.416c12.551-7.26 27.123-11.416 42.666-11.416c15.544 0 30.116 4.156 42.668 11.417zm170.667 0H320v118.082c12.551-7.26 27.124-11.416 42.667-11.416s30.116 4.156 42.667 11.417v-75.417c0-22.493-17.406-40.92-39.483-42.55z"></svg:path>`,
})
export class IxBinocularsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBinocularsFilledIcon],svg[ix-binoculars-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.333 64C364.897 64 384 83.103 384 106.667l.001 24.022C420.805 140.162 448 173.572 448 213.333v149.334C448 409.795 409.795 448 362.667 448s-85.334-38.205-85.334-85.333l.001-8.15a31.88 31.88 0 0 1-21.334 8.15a31.88 31.88 0 0 1-21.334-8.15v8.15c0 47.128-38.204 85.333-85.333 85.333S64 409.795 64 362.667V213.333c0-39.762 27.195-73.172 64-82.645v-24.021C128 83.103 147.103 64 170.667 64s42.666 19.103 42.666 42.667v27.041c9.494 5.492 16.675 14.537 19.726 25.316c5.814-5.978 13.944-9.69 22.941-9.69s17.127 3.712 22.941 9.69c3.05-10.78 10.232-19.824 19.725-25.316v-27.041C298.667 83.103 317.77 64 341.334 64m-192 256c-23.564 0-42.666 19.103-42.666 42.667s19.102 42.666 42.666 42.666S192 386.231 192 362.667S172.897 320 149.333 320m213.334 0C339.103 320 320 339.103 320 362.667s19.103 42.666 42.667 42.666s42.666-19.102 42.666-42.666S386.231 320 362.667 320"></svg:path>`,
})
export class IxBinocularsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBlazorIcon],svg[ix-blazor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M446.614 63.538c.394.229.724.553.96.942a191.63 191.63 0 0 1 18.809 122.187v.018C447.335 306.086 344.749 394.212 223.841 395.04a179.7 179.7 0 0 1-35.45-2.133c-50.49-8.576-88.136-51.25-90.346-102.418c.22-57.814 46.933-104.68 104.746-105.09c57.813-.408 105.185 45.792 106.223 103.597c.444 17.476-7.129 32.818-22.702 33.262c-16.64 0-24.427-11.875-24.427-27.858v-44.444c.02-14.97-12.053-27.146-27.022-27.253H197.6c-29.854-.197-55.984 20.012-63.302 48.955s6.069 59.143 32.428 73.159c26.36 14.015 58.882 8.226 78.785-14.025l1.298-1.956l1.315 2.151a45.87 45.87 0 0 0 39.111 18.631c27.988-2.032 49.249-26.014 47.911-54.044a140.7 140.7 0 0 0-3.857-34.365c-14.271-65.86-75.98-110.306-142.969-102.97c-66.988 7.334-117.618 64.08-117.298 131.468c.857 71.68 58.258 129.843 129.92 131.645c0 0 7.17.653 16.138.671h.82c1.237-.003 2.504-.018 3.789-.05a280.94 280.94 0 0 0 150.666-44.941c.64-.445 1.28.444.854 1.084a221.16 221.16 0 0 1-172.267 70.453A155.45 155.45 0 0 1 42.72 289.067a160.87 160.87 0 0 1 64.622-128.836a157.57 157.57 0 0 1 92.96-30.684h50.009a140.7 140.7 0 0 0 103.804-45.831a1.96 1.96 0 0 1 1.05-.605a1.99 1.99 0 0 1 2.399 2.133a141.05 141.05 0 0 1-21.813 63.094a1.9 1.9 0 0 0-.25 1.067c.062.77.57 1.431 1.299 1.689c.352.13.735.155 1.102.07a151.2 151.2 0 0 0 105.12-86.684c.242-.39.578-.714.978-.942a2.67 2.67 0 0 1 2.613 0M237.032 249.316a2.81 2.81 0 0 1 2.666 2.667v36.302c0 21.482-17.415 38.898-38.897 38.898c-21.483 0-38.898-17.416-38.898-38.898s17.415-38.898 38.898-38.898Z"></svg:path>`,
})
export class IxBlazorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBookIcon],svg[ix-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M218.37 106.667L256 125.462l37.63-18.795h175.704v320H303.68L256 450.518l-47.7-23.851H42.667v-320zm-10.071 42.667H85.334V384H218.37l16.297 8.14V162.518zm218.368 0H303.68l-26.347 13.179V392.14l16.298-8.14h133.036zm-21.333 128v32H298.667v-32zm-192 0v32H106.667v-32zm192-85.334v32H298.667v-32zm-192 0v32H106.667v-32z"></svg:path>`,
})
export class IxBookIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBookmarkIcon],svg[ix-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 64v384l-128-85.333L128 448V64zm-42.667 42.667H170.667v261.589L256 311.388l85.333 56.868z"></svg:path>`,
})
export class IxBookmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBookmarkFilledIcon],svg[ix-bookmark-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 64v384l-128-85.333L128 448V64z"></svg:path>`,
})
export class IxBookmarkFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBoundarySignalsIcon],svg[ix-boundary-signals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m85.333 42.667l168 96l-168 96zm213.333 0l168 96l-168 96zm42.667 73.515v44.949l39.339-22.464zm-42.667 161.152l168 96l-168 96zm42.667 73.514v44.95l39.339-22.464zm-256-73.514l168 96l-168 96z"></svg:path>`,
})
export class IxBoundarySignalsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBoxClosedIcon],svg[ix-box-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 42.667l192 106.666v213.334L256 469.333L64 362.667V149.333zM405.333 190.4l-128 73.899v143.914l128-73.637zm-298.666 1.195v143.006l128 73.612v-142.72zm69.12-55.531l-40.043 23.04l119.232 68.843l39.979-23.083zM256 89.947l-37.461 21.541l119.082 68.736l37.59-21.696z"></svg:path>`,
})
export class IxBoxClosedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBoxIpcIcon],svg[ix-box-ipc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 106.667v298.666H42.666V106.667zM128 149.333H85.333v213.334H128zm170.667 0h-21.334v213.334h21.334zm64 0h-21.334v213.334h21.334zm64 0h-21.334v213.334h21.334zm-192 0h-21.334v213.334h21.334z"></svg:path>`,
})
export class IxBoxIpcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBoxIpcFailIcon],svg[ix-box-ipc-fail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m469.342 305.866l-.009-199.199H42.666v298.666l217.752.004A117.4 117.4 0 0 1 256 373.333c0-25.122 7.895-48.4 21.339-67.488l-.006-156.512h21.334l.009 133.479c12.355-10.202 26.834-17.923 42.675-22.4l-.018-111.079h21.334l.008 107.145c3.51-.316 7.065-.478 10.658-.478c11.095 0 21.83 1.54 32.004 4.418l-.004-111.085h21.334l.008 119.465a117.9 117.9 0 0 1 42.667 37.068M85.333 149.333H128v213.334H85.333zm128 0h21.334v213.334h-21.334zm160 128c-53.019 0-96 42.981-96 96c0 53.02 42.981 96 96 96s96-42.98 96-96c0-53.019-42.981-96-96-96m-18.855 96.001l-38.572-38.571l18.856-18.857l38.572 38.572l38.572-38.572l18.856 18.857l-38.572 38.571l38.572 38.572l-18.856 18.857l-38.572-38.572l-38.572 38.572l-18.856-18.857z" clip-rule="evenodd"></svg:path>`,
})
export class IxBoxIpcFailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBoxIpcQuestionIcon],svg[ix-box-ipc-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m469.342 305.866l-.009-199.199H42.666v298.666l217.752.004A117.4 117.4 0 0 1 256 373.333c0-25.122 7.895-48.4 21.339-67.488l-.006-156.512h21.334l.009 133.479c12.355-10.202 26.834-17.923 42.675-22.4l-.018-111.079h21.334l.008 107.145c3.51-.316 7.065-.478 10.658-.478c11.095 0 21.83 1.54 32.004 4.418l-.004-111.085h21.334l.008 119.465a117.9 117.9 0 0 1 42.667 37.068M85.333 149.333H128v213.334H85.333zm128 0h21.334v213.334h-21.334zm64.007 225.372c0-53.02 42.981-96 96-96s96 42.98 96 96c0 53.019-42.981 96-96 96s-96-42.981-96-96m140.957-8.868c4.271-6.282 6.412-13.638 6.412-22.063c0-17.458-6.412-28.417-21.314-37.136c-8.543-4.397-18.473-6.6-29.793-6.6c-12.943 0-23.821 3.526-32.622 10.559c-10.429 8.424-15.64 22.684-15.64 37.334h28.274v-.19c0-6.283 1.324-11.437 3.964-15.457q5.467-8.107 17.725-8.109c5.027 0 9.307 1.32 12.82 3.955c4.397 3.652 6.603 9.178 6.603 16.595c0 4.652-1.137 8.797-3.396 12.445c-1.886 3.267-4.902 6.47-9.056 9.614c-8.797 6.033-14.518 12.005-17.154 17.915c-2.262 4.903-3.399 12.695-3.399 23.377h26.593c0-7.041.936-12.317 2.83-15.838c1.505-2.891 4.651-5.968 9.428-9.239c8.3-6.161 14.202-11.882 17.725-17.162m-42.476 52.211c-9.18 0-16.621 7.442-16.621 16.622s7.441 16.621 16.621 16.621s16.621-7.441 16.621-16.621s-7.441-16.622-16.621-16.622" clip-rule="evenodd"></svg:path>`,
})
export class IxBoxIpcQuestionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBoxIpcSuccessIcon],svg[ix-box-ipc-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m469.342 305.866l-.009-199.199H42.666v298.666l217.752.004A117.4 117.4 0 0 1 256 373.333c0-25.122 7.895-48.4 21.339-67.488l-.006-156.512h21.334l.009 133.479c12.355-10.202 26.834-17.923 42.675-22.4l-.018-111.079h21.334l.008 107.145c3.51-.316 7.065-.478 10.658-.478c11.095 0 21.83 1.54 32.004 4.418l-.004-111.085h21.334l.008 119.465a117.9 117.9 0 0 1 42.667 37.068M85.333 149.333H128v213.334H85.333zm128 0h21.334v213.334h-21.334zm160 128c-53.019 0-96 42.981-96 96c0 53.02 42.981 96 96 96s96-42.98 96-96c0-53.019-42.981-96-96-96m62.763 62.763l-84.095 84.095l-41.428-41.428l18.856-18.857l22.572 22.572l65.238-65.238z" clip-rule="evenodd"></svg:path>`,
})
export class IxBoxIpcSuccessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBoxOpenIcon],svg[ix-box-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m426.645 273.941l.022 99.392l-170.667 96l-170.667-96l-.021-97.749l42.667 24.939l.021 47.85l106.667 59.99l-.022-74.027l21.502-13.189l21.165 13.018l.021 74.198L384 348.352l-.021-49.493zM208.019 57.681l47.391 27.99l.59-.338l.263.146l44.881-26.492l179.404 104.569l-45.042 27.651l45.05 26.593l-180.519 105.42l-44.008-27.032l-45.39 27.898l-180.518-105.42l46.046-27.203l-47.552-29.212zM406.934 192l-151.039-83.072L107.892 192l148.003 83.072z"></svg:path>`,
})
export class IxBoxOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBoxPlotIcon],svg[ix-box-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 85.33h42.666v42.667h-64v213.334h64v42.666h-42.666v42.667h128v-42.667H384v-42.666h64V127.997h-64V85.331h42.667V42.664h-128zm106.666 85.334H320v128h85.333zm-234.666 21.333h42.666v-42.666h-128v42.666H128v42.667H64v149.333h64v42.667H85.333v42.667h128v-42.667h-42.666v-42.667h64V234.664h-64zm-64 149.334v-64H192v64z" clip-rule="evenodd"></svg:path>`,
})
export class IxBoxPlotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBoxPlotFilledIcon],svg[ix-box-plot-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 85.33h42.666v42.667h-64v213.334h64v42.666h-42.666v42.667h128v-42.667H384v-42.666h64V127.997h-64V85.331h42.667V42.664h-128zm-128 106.667h42.666v-42.666h-128v42.666H128v42.667H64v149.333h64v42.667H85.333v42.667h128v-42.667h-42.666v-42.667h64V234.664h-64z" clip-rule="evenodd"></svg:path>`,
})
export class IxBoxPlotFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBringForwardIcon],svg[ix-bring-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.333 192v42.666H128V384h149.333v-21.334H320v64H85.333V192zM426.667 85.333v256h-256v-256z"></svg:path>`,
})
export class IxBringForwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBringToFrontIcon],svg[ix-bring-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 298.667v42.666h-21.333v64h64V384h42.666v64H64V298.667zm234.667 64H149.333V149.333h213.334zM448 64v149.333h-64v-42.666h21.333v-64h-64V128h-42.666V64z"></svg:path>`,
})
export class IxBringToFrontIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBrushIcon],svg[ix-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M298.667 42.667v106.667h128V256h-21.334v76.47c0 37.985-9.635 75.304-27.944 108.485L373.333 448H64a190.17 190.17 0 0 0 45.511-123.445L109.504 256h-24.17V149.334h127.999V42.667zM152.171 256l.007 68.555c0 24.625-3.903 48.89-11.397 71.953l-3.096 8.826h60.267a298.7 298.7 0 0 0 13.809-63.992l42.863.011a341.3 341.3 0 0 1-12.001 64.007l19.329-.026a298.8 298.8 0 0 0 15.19-83.905l.191-10.691l-.021-33.404h42.667l.021 33.404c0 32.035-4.51 63.887-13.377 94.622l40.769-.026l2.439-5.747a181.9 181.9 0 0 0 12.674-59.444l.162-7.673V256zM384 192H128v21.334h256z"></svg:path>`,
})
export class IxBrushIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBugIcon],svg[ix-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 64c43.76 0 81.366 26.352 97.814 64.052l37.95-37.986l30.17 30.169l-54.851 54.848L384 192v42.645l85.333.022v42.666H384c0 22.098-5.6 42.888-15.458 61.029l53.392 53.402l-30.17 30.17l-49.795-49.766c-22.72 20.609-52.878 33.165-85.969 33.165s-63.249-12.556-85.969-33.165l-49.796 49.766l-30.17-30.17l53.392-53.402C133.6 320.221 128 299.431 128 277.333H42.667v-42.666l85.333-.022V192l16.917-16.917l-54.851-54.848l30.169-30.17l37.957 37.973C174.643 90.345 212.245 64 256 64m85.333 149.333H170.667v64c0 45.701 35.924 83.01 81.074 85.229l4.259.105c47.128 0 85.333-38.205 85.333-85.334zM256 106.667c-35.346 0-64 28.653-64 64h128c0-35.347-28.654-64-64-64"></svg:path>`,
})
export class IxBugIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBugFilledIcon],svg[ix-bug-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 64c43.76 0 81.366 26.352 97.814 64.052l37.95-37.986l30.17 30.169l-54.851 54.848L384 192v42.645l85.333.022v42.666H384c0 22.098-5.6 42.888-15.458 61.029l53.392 53.402l-30.17 30.17l-49.795-49.766c-22.72 20.609-52.878 33.165-85.969 33.165s-63.249-12.556-85.969-33.165l-49.796 49.766l-30.17-30.17l53.392-53.402C133.6 320.221 128 299.431 128 277.333H42.667v-42.666l85.333-.022V192l16.917-16.917l-54.851-54.848l30.169-30.17l37.957 37.973C174.643 90.345 212.245 64 256 64m0 42.667c-35.346 0-64 28.653-64 64h128c0-35.347-28.654-64-64-64"></svg:path>`,
})
export class IxBugFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBugRuntimeIcon],svg[ix-bug-runtime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 64c43.76 0 81.366 26.352 97.814 64.052l37.95-37.986l30.17 30.169l-54.851 54.848L384 192v42.645l85.333.022v42.666H384v.002l-8.937-.002a106.2 106.2 0 0 0-33.906 5.522q.176-2.738.176-5.522v-64H170.667v64c0 45.2 35.142 82.192 79.594 85.144l22.719 41.74a129 129 0 0 1-16.98 1.116c-33.091 0-63.249-12.556-85.969-33.165l-49.796 49.766l-30.17-30.17l53.392-53.402C133.6 320.221 128 299.431 128 277.333H42.667v-42.666l85.333-.022V192l16.917-16.917l-54.852-54.848l30.17-30.17l37.957 37.973C174.643 90.345 212.245 64 256 64m0 42.667c-35.346 0-64 28.653-64 64h128c0-35.347-28.654-64-64-64m213.331 277.347c0 15.547-4.158 30.122-11.421 42.676l-18.478-10.669c5.448-9.415 8.566-20.347 8.566-32.007c0-18.954-8.24-35.984-21.333-47.703v15.703h-21.334v-53.333h53.334v21.333h-18.223c17.716 15.637 28.889 38.514 28.889 64m-128-73.9c13.464-7.774 28.165-11.46 42.669-11.447v21.337c-10.878-.011-21.904 2.755-32.002 8.585c-16.415 9.477-27.044 25.128-30.646 42.327l13.6-7.852l10.666 18.475l-46.188 26.667l-26.666-46.188l18.475-10.667l9.111 15.782c4.684-23.161 18.909-44.276 40.981-57.019m0 147.801c-13.464-7.773-24.007-18.661-31.247-31.228l18.479-10.669c5.429 9.426 13.337 17.592 23.435 23.422c16.415 9.477 35.284 10.856 51.979 5.377l-13.6-7.852l10.667-18.475l46.188 26.666l-26.667 46.188l-18.475-10.666l9.112-15.782c-22.4 7.525-47.798 5.763-69.871-6.981" clip-rule="evenodd"></svg:path>`,
})
export class IxBugRuntimeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBugRuntimeFilledIcon],svg[ix-bug-runtime-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 64c43.76 0 81.366 26.352 97.814 64.052l37.95-37.986l30.17 30.169l-54.851 54.848L384 192v42.645l85.333.022v42.666H384v.002l-8.937-.002c-18.153-.016-36.555 4.606-53.354 14.305c-14.448 8.342-26.207 19.561-34.971 32.507l-44.257 24.038l30.499 56.034a129 129 0 0 1-16.98 1.116c-33.091 0-63.249-12.556-85.969-33.165l-49.796 49.766l-30.17-30.17l53.392-53.402C133.6 320.221 128 299.431 128 277.333H42.667v-42.666l85.333-.022V192l16.917-16.917l-54.852-54.848l30.17-30.17l37.957 37.973C174.643 90.345 212.245 64 256 64m0 42.667c-35.346 0-64 28.653-64 64h128c0-35.347-28.654-64-64-64m213.331 277.347c0 15.547-4.158 30.122-11.421 42.676l-18.478-10.669c5.448-9.415 8.566-20.347 8.566-32.007c0-18.954-8.24-35.984-21.333-47.703v15.703h-21.334v-53.333h53.334v21.333h-18.223c17.716 15.637 28.889 38.514 28.889 64m-128-73.9c13.464-7.774 28.165-11.46 42.669-11.447v21.337c-10.878-.011-21.904 2.755-32.002 8.585c-16.415 9.477-27.044 25.128-30.646 42.327l13.6-7.852l10.666 18.475l-46.188 26.667l-26.666-46.188l18.475-10.667l9.111 15.782c4.684-23.161 18.909-44.276 40.981-57.019m0 147.801c-13.464-7.773-24.007-18.661-31.247-31.228l18.479-10.669c5.429 9.426 13.337 17.592 23.435 23.422c16.415 9.477 35.284 10.856 51.979 5.377l-13.6-7.852l10.667-18.475l46.188 26.666l-26.667 46.188l-18.475-10.666l9.112-15.782c-22.4 7.525-47.798 5.763-69.871-6.981" clip-rule="evenodd"></svg:path>`,
})
export class IxBugRuntimeFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBuildingBlockIcon],svg[ix-building-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.737 212.895H85.97v170.083h340.767zm0-42.521h42.596l-.707 256.292H42.666V170.375H85.97V85.333h127.788v85.042h85.192V85.333h127.787zm-42.596.001v-42.521h-43.344v42.521zm-255.575 0h42.596v-42.521h-42.596z" clip-rule="evenodd"></svg:path>`,
})
export class IxBuildingBlockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBuildingBlockFilledIcon],svg[ix-building-block-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m42.667 426.667l.707-235.011h425.959l-.707 235.011zm42.666-256V85.333h128v85.334zm213.617-.275V85.333h127.787v85.059z" clip-rule="evenodd"></svg:path>`,
})
export class IxBuildingBlockFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBuilding1Icon],svg[ix-building1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 64v85.333H448v256h21.334V448l-106.667-.001V448H149.334l-.001-.001L42.667 448v-42.667H64v-192h85.333V64zM320 106.667H192v298.666h42.667v-64h42.667v64H320zM405.334 192h-42.667v213.333h42.667zm-256 64h-42.667v149.333h42.667zm128-21.333v42.666h-42.667v-42.666zm0-85.334V192h-42.667v-42.667z"></svg:path>`,
})
export class IxBuilding1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBuilding1FilledIcon],svg[ix-building1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m362.667 64l-.001 341.333H384v-256h64v256h21.334V448l-106.668-.001l.001.001H149.334l-.001-.001L42.667 448v-42.667H64v-192h64v192h21.333V64zm-85.333 277.333h-42.667v64h42.667zm0-106.666h-42.667v42.666h42.667zm0-85.334h-42.667V192h42.667z"></svg:path>`,
})
export class IxBuilding1FilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBuilding2Icon],svg[ix-building2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.334 64v341.333h128V192H320v-42.667h128v256h21.334V448H64v-.001L42.667 448v-42.667H64V64zm-42.667 42.667h-128v298.666h42.667v-64H192v64h42.667zm128 213.333v42.667H320V320zM192 234.667v42.666h-42.666v-42.666zm170.667 0v42.666H320v-42.666zM192 149.333V192h-42.666v-42.667z"></svg:path>`,
})
export class IxBuilding2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBuilding2FilledIcon],svg[ix-building2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m277.334 64l-.001 341.333h21.334v-256H448v256h21.334V448l-192.001-.001V448H64v-.001L42.667 448v-42.667H64V64zM192 341.333h-42.666v64H192zM384 320h-42.666v42.667H384zm0-85.333h-42.666v42.666H384zm-192 0h-42.666v42.666H192zm0-85.334h-42.666V192H192z"></svg:path>`,
})
export class IxBuilding2FilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBulbIcon],svg[ix-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 106.666c70.693 0 128 57.308 128 128c0 47.378-25.74 88.744-64 110.876v81.124L298.667 448h-21.333c0 11.782-9.552 21.333-21.334 21.333s-21.333-9.551-21.333-21.333h-21.333L192 426.666v-81.124c-38.26-22.132-64-63.498-64-110.876c0-70.692 57.308-128 128-128m21.335 254.23a129 129 0 0 1-21.335 1.77c-7.269 0-14.396-.606-21.334-1.77l.001 44.437h42.667zm-138.243-31.949l22.627 22.628l-45.254 45.254l-22.628-22.627zm233.817 0l45.254 45.255l-22.627 22.627l-45.255-45.254zM256 149.333c-47.128 0-85.333 38.205-85.333 85.333S208.872 320 256 320s85.334-38.205 85.334-85.334c0-47.128-38.205-85.333-85.334-85.333m213.334 69.333v32h-64v-32zm-362.667 0v32h-64v-32zm288.87-146.163l22.626 22.628l-45.254 45.254l-22.628-22.627zm-279.072 0l45.254 45.255l-22.627 22.627l-45.255-45.254zM272 21.333v64h-32v-64z"></svg:path>`,
})
export class IxBulbIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixBulbFilledIcon],svg[ix-bulb-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 106.666c70.693 0 128 57.308 128 128c0 47.378-25.74 88.744-64 110.876v81.124L298.667 448h-21.333c0 11.782-9.552 21.333-21.334 21.333s-21.333-9.551-21.333-21.333h-21.333L192 426.666v-81.124c-38.26-22.132-64-63.498-64-110.876c0-70.692 57.308-128 128-128m21.335 254.23a129 129 0 0 1-21.335 1.77c-7.269 0-14.396-.606-21.334-1.77l.001 44.437h42.667zm-138.243-31.949l22.627 22.628l-45.254 45.254l-22.628-22.627zm233.817 0l45.254 45.255l-22.627 22.627l-45.255-45.254zm96.425-110.28v32h-64v-32zm-362.667 0v32h-64v-32zm288.87-146.164l22.626 22.628l-45.254 45.254l-22.628-22.627zm-279.072 0l45.254 45.255l-22.627 22.627l-45.255-45.254zM272 21.333v64h-32v-64z"></svg:path>`,
})
export class IxBulbFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCalculatorIcon],svg[ix-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.334 42.667h341.333v426.666H85.334zM128 85.333h256v85.334H128zm64 128h-42.667V256H192zm42.667 0h42.666V256h-42.666zm42.666 85.334h-42.666v42.666h42.666zm42.667 0h42.667v42.666H320zm-128 0h-42.667v42.666H192zM234.667 384h42.666v42.667h-42.666zm128 0H320v42.667h42.667zm-213.334 0H192v42.667h-42.667zm213.334-170.667H320V256h42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxCalculatorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCalendarIcon],svg[ix-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-42.667 128H106.667v213.333h298.666zM192 320v42.667h-42.667V320zm85.333 0v42.667h-42.666V320zm85.334 0v42.667H320V320zM192 234.667v42.666h-42.667v-42.666zm85.333 0v42.666h-42.666v-42.666zm85.334 0v42.666H320v-42.666zm42.666-128H106.667v42.666h298.666z"></svg:path>`,
})
export class IxCalendarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCalendarDayIcon],svg[ix-calendar-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h384v384H64zm341.333 42.667v42.666H106.667v-42.666zM106.667 192h298.666v213.333H106.667zM192 234.667h-42.667v42.666H192z" clip-rule="evenodd"></svg:path>`,
})
export class IxCalendarDayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCalendarDayFilledIcon],svg[ix-calendar-day-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 170.667V448H64V170.667zM448 128V64H64v64zM149.333 234.667H192v42.666h-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxCalendarDayFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCalendarFilledIcon],svg[ix-calendar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 170.667V448H64V170.667zM192 320h-42.667v42.667H192zm85.333 0h-42.666v42.667h42.666zm85.334 0H320v42.667h42.667zM192 234.667h-42.667v42.666H192zm85.333 0h-42.666v42.666h42.666zm85.334 0H320v42.666h42.667zM64 64h384v64H64z"></svg:path>`,
})
export class IxCalendarFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCalendarSettingsIcon],svg[ix-calendar-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m392.18 256l.001 22.836a88.8 88.8 0 0 1 28.134 16.267l19.797-11.43l29.63 51.32l-19.784 11.424a89.4 89.4 0 0 1 1.482 16.25c0 5.55-.509 10.981-1.482 16.25l19.784 11.423l-29.63 51.32l-19.797-11.43a88.8 88.8 0 0 1-28.134 16.267v22.836h-59.26v-22.836a88.8 88.8 0 0 1-28.134-16.266L284.99 441.66l-29.63-51.32l19.784-11.423a89.4 89.4 0 0 1-1.482-16.25c0-5.55.509-10.983 1.482-16.251l-19.784-11.423l29.63-51.32l19.796 11.43a88.8 88.8 0 0 1 28.135-16.267V256zM448 64l.003 203.262c-12.312-11.02-26.77-19.692-42.669-25.312V192H106.666v213.333l135.283.001c5.62 15.9 14.292 30.356 25.311 42.668L64 448V64zm-85.45 263.111c-19.636 0-35.555 15.919-35.555 35.556s15.92 35.555 35.556 35.555c19.637 0 35.555-15.919 35.555-35.555c0-19.637-15.918-35.556-35.555-35.556M192 320v42.667h-42.667V320zm0-85.333v42.666h-42.667v-42.666zm85.333 0l-.002 32.595a129 129 0 0 0-10.07 10.069l-32.594.002v-42.666zm128-128H106.667v42.666h298.666z"></svg:path>`,
})
export class IxCalendarSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCalendarWeekIcon],svg[ix-calendar-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64H64v384h384zm-42.667 85.333v-42.666H106.667v42.666zm0 42.667H106.667v213.333h298.666zm-192 42.667H384v42.666H213.333zm0 85.333H128v42.667h85.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxCalendarWeekIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCalendarWeekFilledIcon],svg[ix-calendar-week-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 128V64H64v64zm0 42.667H64V448h384zm-42.667 64H192v42.666h213.333zM106.667 320H192v42.667h-85.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxCalendarWeekFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCamIcon],svg[ix-cam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 384H42.667v-42.667h128V128h170.666v213.333h128V384H298.667V170.667h-85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxCamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCamDiskIcon],svg[ix-cam-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M298.667 85.333c112 0 170.666 85.333 170.666 170.667c0 83.723-56.473 167.446-164.384 170.576l-6.282.09c-112 0-256-85.333-256-170.666c0-85.334 144-170.667 256-170.667m0 42.667c-96.688 0-213.334 74.653-213.334 128S201.98 384 298.667 384c78.437 0 128-55.326 128-128s-49.563-128-128-128M320 192c35.346 0 64 28.653 64 64c0 35.346-28.654 64-64 64h-42.667c-35.346 0-64-28.654-64-64s28.654-64 64-64zm0 42.666h-42.667C265.551 234.666 256 244.218 256 256s9.551 21.333 21.333 21.333H320c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.334-21.333-21.334"></svg:path>`,
})
export class IxCamDiskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCamDisk10kIcon],svg[ix-cam-disk-10k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M424.094 334.146q29.306 0 41.699 22.432q8.32 15.196 8.321 43.96q0 31.477-10.221 46.944q-12.754 19.357-39.799 19.357q-29.216 0-41.698-22.432q-8.322-15.105-8.322-44.683q0-30.754 10.221-46.221q12.754-19.357 39.799-19.357m-75.179 2.261v128.171h-27.95v-98.141l-24.784 15.468l-13.025-21.438l40.975-24.06zm75.179 20.352q-10.764 0-15.965 10.583q-5.2 10.582-5.201 32.653q0 22.884 5.066 33.377q5.246 10.854 16.1 10.854t16.01-10.628t5.156-33.06q0-22.523-4.975-32.925q-5.246-10.854-16.191-10.854M298.667 64c112 0 170.666 85.333 170.666 170.667c0 28.468-6.529 56.937-19.39 82.237c-7.837-2.724-16.493-4.092-25.849-4.092l-4.915.131c-6.629.355-12.884 1.439-18.712 3.243c16.909-21.842 26.2-50.055 26.2-81.519c0-72.674-49.563-128-128-128c-96.688 0-213.334 74.653-213.334 128c0 45.831 86.095 107.388 171.662 123.823l7.929 13.055l13.026 21.437l7.245 11.954c-109.728-6.374-242.528-88.322-242.528-170.269c0-85.334 144-170.667 256-170.667M320 170.667c35.346 0 64 28.653 64 64c0 35.346-28.654 64-64 64h-42.667c-35.346 0-64-28.654-64-64s28.654-64 64-64zm0 42.666h-42.667c-11.782 0-21.333 9.552-21.333 21.334S265.551 256 277.333 256H320c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.334-21.333-21.334"></svg:path>`,
})
export class IxCamDisk10kIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCamTrackIcon],svg[ix-cam-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 341.334H192v-128h-42.667v128H42.667v-42.667h64v-128h128v128h42.666v-128h128v128h64v42.667H362.667v-128H320z" clip-rule="evenodd"></svg:path>`,
})
export class IxCamTrackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCancelIcon],svg[ix-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M420.48 121.813L390.187 91.52L256 225.92L121.813 91.52L91.52 121.813L225.92 256L91.52 390.187l30.293 30.293L256 286.08l134.187 134.4l30.293-30.293L286.08 256z"></svg:path>`,
})
export class IxCancelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCancelledIcon],svg[ix-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667M85.334 256c0 94.257 76.41 170.667 170.666 170.667c39.44 0 75.754-13.378 104.654-35.843L121.177 151.347C98.71 180.247 85.334 216.56 85.334 256M256 85.334c-39.439 0-75.753 13.377-104.653 35.843l239.477 239.477c22.465-28.9 35.843-65.214 35.843-104.654c0-94.256-76.41-170.666-170.667-170.666"></svg:path>`,
})
export class IxCancelledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCapacityIcon],svg[ix-capacity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 64H64v384h384V234.667H277.333zm-42.666 341.333h-128v-128h128zm0-170.666h-128v-128h128zm170.666 42.666v128h-128v-128zM448 64v128H320V64zm-42.667 42.667h-42.666v42.666h42.666z"></svg:path>`,
})
export class IxCapacityIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCapacityCheckIcon],svg[ix-capacity-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 64H64v384h213.333v-27.311l-33.484-29.298l33.484-38.268zm-42.666 341.333h-128v-128h128zm0-170.666h-128v-128h128zM448 192H320V64h128zm-42.667-85.333h-42.666v42.666h42.666zm91.578 215.67l-33.819-26.014l-92.829 120.655l-68.214-59.703l-28.096 32.11l102.435 89.631z" clip-rule="evenodd"></svg:path>`,
})
export class IxCapacityCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCapacityCheckFilledIcon],svg[ix-capacity-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.667 85.334H64V256h170.667zm192 0h-128v127.999h128zM64 277.333h170.667V448H64zm432.911 45.004l-33.819-26.014l-92.829 120.655l-68.214-59.703l-28.096 32.11l102.435 89.631z" clip-rule="evenodd"></svg:path>`,
})
export class IxCapacityCheckFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCapacityFilledIcon],svg[ix-capacity-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 277.333h170.667V448H64zm192 0h170.667V448H256zm-192-192h170.667V256H64zm234.667 0h128v128h-128z"></svg:path>`,
})
export class IxCapacityFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCapacityLockedIcon],svg[ix-capacity-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h213.333v384H64zm42.667 341.333h128v-128h-128zm0-170.666h128v-128h-128zM320 192h128V64H320zm42.667-85.333h42.666v42.666h-42.666zM448 320c0-35.346-28.654-64-64-64s-64 28.654-64 64v42.667h-21.333v106.666h170.666V362.667H448zm-85.19-2.488c1.232-10.61 10.25-18.845 21.19-18.845l2.488.143c10.61 1.233 18.845 10.25 18.845 21.19v42.667h-42.666V320z" clip-rule="evenodd"></svg:path>`,
})
export class IxCapacityLockedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCapacityLockedFilledIcon],svg[ix-capacity-locked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.667 85.334H64V256h170.667zm192 0h-128v127.999h128zM64 277.333h170.667V448H64zM448 320c0-35.346-28.654-64-64-64s-64 28.654-64 64v42.667h-21.333v106.667h170.666V362.667H448zm-85.19-2.488c1.232-10.61 10.25-18.845 21.19-18.845l2.488.143c10.61 1.233 18.845 10.25 18.845 21.19v42.667h-42.666V320z" clip-rule="evenodd"></svg:path>`,
})
export class IxCapacityLockedFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCapacityPenIcon],svg[ix-capacity-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 64H64v384h170.667v-42.667h-128v-128h128v107.162l42.666-42.667zm-42.666 170.667h-128v-128h128zM448 192H320V64h128zm-42.667-85.333h-42.666v42.666h42.666zm4 133.333L464 294.667l-34.458 34.457l-54.666-54.666zm-49.542 49.542l54.667 54.667L310.667 448H256v-54.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxCapacityPenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCapacityPenFilledIcon],svg[ix-capacity-pen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.667 85.334H64V256h170.667zm192 0h-128v127.999h128zM64 277.333h170.667V448H64zm366.667-15.999L485.333 316l-34.457 34.458l-54.667-54.667zm-49.543 49.542l54.667 54.667L332 469.334h-54.667v-54.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxCapacityPenFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCaptureIcon],svg[ix-capture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106.667 341.333v64h64V448H64V341.333zm341.333 0V448H341.333v-42.667h64v-64zm-192-192c58.91 0 106.667 47.757 106.667 106.667S314.91 362.667 256 362.667S149.333 314.91 149.333 256S197.09 149.333 256 149.333M448 64v106.667h-42.667v-64h-64V64zm-277.333 0v42.667h-64v64H64V64z"></svg:path>`,
})
export class IxCaptureIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCarIcon],svg[ix-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 298.666c23.564 0 42.667 19.103 42.667 42.667S151.564 384 128 384s-42.666-19.103-42.666-42.667s19.102-42.667 42.666-42.667m245.334 0c23.564 0 42.666 19.103 42.666 42.667S396.898 384 373.334 384s-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667m-64 42.667c0 7.48 1.283 14.661 3.642 21.334H188.358A63.9 63.9 0 0 0 192 341.333c0-7.48-1.283-14.661-3.642-21.334h124.618a63.9 63.9 0 0 0-3.642 21.334m-24.89-192l5.69 4.267l81.856 61.397l65.025 16.266c17.877 4.47 30.731 19.85 32.182 37.966l.137 3.427v74.667l-16.16 4.04l-17.466 4.367a64.2 64.2 0 0 0 1.626-14.397c0-13.085-3.927-25.252-10.666-35.388l-.001-33.289l-69.174-17.293l-4.18-1.045l-.835-.627l-11.144 11.145a42.67 42.67 0 0 1-30.17 12.497l-225.831-.001v16.299C72.24 305.349 64 322.379 64 341.333c0 3.244.242 6.431.707 9.545l-22.04-22.042V226.943l4.945-5.934l53.333-64l6.397-7.676zM270.23 192H127.318l-35.55 42.666h219.396l6.835-6.836z"></svg:path>`,
})
export class IxCarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCarFilledIcon],svg[ix-car-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 298.666c23.564 0 42.667 19.103 42.667 42.667S151.564 384 128 384s-42.666-19.103-42.666-42.667s19.102-42.667 42.666-42.667m245.334 0c23.564 0 42.666 19.103 42.666 42.667S396.898 384 373.334 384s-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667m-88.89-149.333l5.69 4.267l81.856 61.397l65.025 16.266c17.877 4.47 30.731 19.85 32.182 37.966l.137 3.427v74.667l-16.16 4.04l-17.466 4.367a64.2 64.2 0 0 0 1.626-14.397c0-35.346-28.654-64-64-64s-64 28.654-64 64c0 7.48 1.283 14.661 3.642 21.334H188.358A63.9 63.9 0 0 0 192 341.333c0-35.346-28.653-64-64-64c-35.346 0-64 28.654-64 64c0 3.244.242 6.431.707 9.545l-22.04-22.042V226.943l4.945-5.934l53.333-64l6.397-7.676zM270.23 192H127.318l-35.55 42.666h206.899l12.192-12.192z"></svg:path>`,
})
export class IxCarFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCardLayoutIcon],svg[ix-card-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 85.333v149.333h-128V85.333zM128 128H85.334v64H128zm341.334 149.333v149.333h-128V277.333zM426.667 320H384v64h42.667zm42.667-234.667v149.333h-256V85.333zM426.667 128H256v64h170.667zm-128 149.333v149.333h-256V277.333zM256 320H85.334v64H256z"></svg:path>`,
})
export class IxCardLayoutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCardLayoutFilledIcon],svg[ix-card-layout-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 85.333v149.333h-128V85.333zm298.667 192v149.333h-128V277.333zm0-192v149.333h-256V85.333zm-170.667 192v149.333h-256V277.333z"></svg:path>`,
})
export class IxCardLayoutFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCertificateIcon],svg[ix-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 42.667v42.672c22.493 0 40.921 17.407 42.55 39.487l.117 3.185l-.117 298.703l149.45-.047v-42.625H149.333V128.011c0-12.498-2.686-24.368-7.512-35.065l-2.198-4.511l-1.703-3.096h203.413c22.493 0 40.921 17.407 42.55 39.487l.117 3.185v109.345c16.774 4.316 31.55 13.604 42.667 26.198V128.011c0-45.706-35.925-83.02-81.075-85.24l-4.259-.104zm277.333 170.687v24c-13.228 3.404-25.215 9.9-35.144 18.672H192v-42.672zM192 298.698l88.019-.026a85.5 85.5 0 0 0-2.686 21.327a85.5 85.5 0 0 0 2.69 21.341l-88.023.03zM192 128v42.672h106.667V128zm170.663 128c35.354 0 64.004 28.653 64.004 63.999c0 35.35-28.651 64.001-64.004 64.001c-35.347 0-63.996-28.651-63.996-64.001c0-35.346 28.648-63.999 63.996-63.999m-77.981 193.129l26.063-61.4c11.219 8.613 24.64 14.501 39.274 16.675L323.957 465.8zm129.907-61.403c-11.219 8.613-24.639 14.502-39.273 16.676l26.061 61.396l39.275-16.671zM384 320c0-11.782-9.55-21.333-21.335-21.333c-11.782 0-21.332 9.551-21.332 21.333c0 11.783 9.55 21.334 21.332 21.334C374.45 341.334 384 331.783 384 320" clip-rule="evenodd"></svg:path>`,
})
export class IxCertificateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCertificateErrorIcon],svg[ix-certificate-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m283.735 52.918l31.295 26.614a42.7 42.7 0 0 0 24.213 10.03l40.947 3.309c20.86 1.686 37.42 18.246 39.106 39.106l3.31 40.947a42.7 42.7 0 0 0 10.029 24.213l26.614 31.294c13.557 15.942 13.557 39.362 0 55.304l-26.614 31.295a42.7 42.7 0 0 0-10.03 24.213l-3.31 40.947c-1.685 20.86-18.246 37.42-39.105 39.106l-40.947 3.31a42.7 42.7 0 0 0-24.213 10.029l-31.295 26.614c-15.942 13.557-39.362 13.557-55.304 0l-31.294-26.614a42.7 42.7 0 0 0-24.213-10.03l-40.947-3.31c-20.86-1.685-37.42-18.246-39.106-39.105l-3.31-40.947a42.7 42.7 0 0 0-10.03-24.213l-26.613-31.295c-13.557-15.942-13.557-39.362 0-55.304l26.614-31.294a42.7 42.7 0 0 0 10.03-24.213l3.309-40.947c1.686-20.86 18.246-37.42 39.106-39.106l40.947-3.31a42.7 42.7 0 0 0 24.213-10.03l31.294-26.613c15.942-13.557 39.362-13.557 55.304 0m-27.64 32.503l-31.317 26.613a85.35 85.35 0 0 1-48.417 20.055l-40.947 3.31l-3.325 40.962a85.35 85.35 0 0 1-20.055 48.417l-26.613 31.295l26.613 31.316a85.35 85.35 0 0 1 20.055 48.416l3.31 40.947l40.962 3.326a85.35 85.35 0 0 1 48.417 20.054l31.295 26.614l31.316-26.614a85.35 85.35 0 0 1 48.416-20.054l40.947-3.31l3.326-40.963a85.35 85.35 0 0 1 20.054-48.416l26.614-31.295l-26.614-31.316a85.35 85.35 0 0 1-20.054-48.417l-3.31-40.947l-40.963-3.325a85.35 85.35 0 0 1-48.416-20.055zm48.822 91.496l30.165 30.165L286.165 256l48.917 48.917l-30.165 30.165L256 286.165l-48.918 48.917l-30.165-30.165L225.834 256l-48.917-48.918l30.165-30.165L256 225.834z"></svg:path>`,
})
export class IxCertificateErrorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCertificateErrorFilledIcon],svg[ix-certificate-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m283.735 52.918l31.295 26.614a42.7 42.7 0 0 0 24.213 10.03l40.947 3.309c20.86 1.686 37.42 18.246 39.106 39.106l3.31 40.947a42.7 42.7 0 0 0 10.029 24.213l26.614 31.294c13.557 15.942 13.557 39.362 0 55.304l-26.614 31.295a42.7 42.7 0 0 0-10.03 24.213l-3.31 40.947c-1.685 20.86-18.246 37.42-39.105 39.106l-40.947 3.31a42.7 42.7 0 0 0-24.213 10.029l-31.295 26.614c-15.942 13.557-39.362 13.557-55.304 0l-31.294-26.614a42.7 42.7 0 0 0-24.213-10.03l-40.947-3.31c-20.86-1.685-37.42-18.246-39.106-39.105l-3.31-40.947a42.7 42.7 0 0 0-10.03-24.213l-26.613-31.295c-13.557-15.942-13.557-39.362 0-55.304l26.614-31.294a42.7 42.7 0 0 0 10.03-24.213l3.309-40.947c1.686-20.86 18.246-37.42 39.106-39.106l40.947-3.31a42.7 42.7 0 0 0 24.213-10.03l31.294-26.613c15.942-13.557 39.362-13.557 55.304 0m21.182 124L256 225.833l-48.918-48.917l-30.165 30.165L225.834 256l-48.917 48.917l30.165 30.165L256 286.165l48.917 48.917l30.165-30.165L286.165 256l48.917-48.918z"></svg:path>`,
})
export class IxCertificateErrorFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCertificateExclamationIcon],svg[ix-certificate-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m283.735 52.918l31.295 26.614a42.7 42.7 0 0 0 24.213 10.03l40.947 3.309c20.86 1.686 37.42 18.246 39.106 39.106l3.31 40.947a42.7 42.7 0 0 0 10.029 24.213l26.614 31.294c13.557 15.942 13.557 39.362 0 55.304l-26.614 31.295a42.7 42.7 0 0 0-10.03 24.213l-3.31 40.947c-1.685 20.86-18.246 37.42-39.105 39.106l-40.947 3.31a42.7 42.7 0 0 0-24.213 10.029l-31.295 26.614c-15.942 13.557-39.362 13.557-55.304 0l-31.294-26.614a42.7 42.7 0 0 0-24.213-10.03l-40.947-3.31c-20.86-1.685-37.42-18.246-39.106-39.105l-3.31-40.947a42.7 42.7 0 0 0-10.03-24.213l-26.613-31.295c-13.557-15.942-13.557-39.362 0-55.304l26.614-31.294a42.7 42.7 0 0 0 10.03-24.213l3.309-40.947c1.686-20.86 18.246-37.42 39.106-39.106l40.947-3.31a42.7 42.7 0 0 0 24.213-10.03l31.294-26.613c15.942-13.557 39.362-13.557 55.304 0m-27.64 32.503l-31.317 26.613a85.35 85.35 0 0 1-48.417 20.055l-40.947 3.31l-3.325 40.962a85.35 85.35 0 0 1-20.055 48.417l-26.613 31.295l26.613 31.316a85.35 85.35 0 0 1 20.055 48.416l3.31 40.947l40.962 3.326a85.35 85.35 0 0 1 48.417 20.054l31.295 26.614l31.316-26.614a85.35 85.35 0 0 1 48.416-20.054l40.947-3.31l3.326-40.963a85.35 85.35 0 0 1 20.054-48.416l26.614-31.295l-26.614-31.316a85.35 85.35 0 0 1-20.054-48.417l-3.31-40.947l-40.963-3.325a85.35 85.35 0 0 1-48.416-20.055zM256 314.709c15.238 0 26.666 11.264 26.666 26.624S271.238 367.957 256 367.957c-15.585 0-26.667-11.264-26.667-26.965c0-15.019 11.429-26.283 26.667-26.283M277.333 128v149.334h-42.667V128z"></svg:path>`,
})
export class IxCertificateExclamationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCertificateExclamationFilledIcon],svg[ix-certificate-exclamation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m283.735 52.918l31.295 26.614a42.7 42.7 0 0 0 24.213 10.03l40.947 3.309c20.86 1.686 37.42 18.246 39.106 39.106l3.31 40.947a42.7 42.7 0 0 0 10.029 24.213l26.614 31.294c13.557 15.942 13.557 39.362 0 55.304l-26.614 31.295a42.7 42.7 0 0 0-10.03 24.213l-3.31 40.947c-1.685 20.86-18.246 37.42-39.105 39.106l-40.947 3.31a42.7 42.7 0 0 0-24.213 10.029l-31.295 26.614c-15.942 13.557-39.362 13.557-55.304 0l-31.294-26.614a42.7 42.7 0 0 0-24.213-10.03l-40.947-3.31c-20.86-1.685-37.42-18.246-39.106-39.105l-3.31-40.947a42.7 42.7 0 0 0-10.03-24.213l-26.613-31.295c-13.557-15.942-13.557-39.362 0-55.304l26.614-31.294a42.7 42.7 0 0 0 10.03-24.213l3.309-40.947c1.686-20.86 18.246-37.42 39.106-39.106l40.947-3.31a42.7 42.7 0 0 0 24.213-10.03l31.294-26.613c15.942-13.557 39.362-13.557 55.304 0M256 314.71c-15.238 0-26.667 11.264-26.667 26.283c0 15.701 11.082 26.965 26.667 26.965c15.238 0 26.666-11.264 26.666-26.624S271.238 314.71 256 314.71M277.333 128h-42.667v149.334h42.667z"></svg:path>`,
})
export class IxCertificateExclamationFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCertificateSuccessIcon],svg[ix-certificate-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m283.735 52.918l31.295 26.614a42.7 42.7 0 0 0 24.213 10.03l40.947 3.309c20.86 1.686 37.42 18.246 39.106 39.106l3.31 40.947a42.7 42.7 0 0 0 10.029 24.213l26.614 31.294c13.557 15.942 13.557 39.362 0 55.304l-26.614 31.295a42.7 42.7 0 0 0-10.03 24.213l-3.31 40.947c-1.685 20.86-18.246 37.42-39.105 39.106l-40.947 3.31a42.7 42.7 0 0 0-24.213 10.029l-31.295 26.614c-15.942 13.557-39.362 13.557-55.304 0l-31.294-26.614a42.7 42.7 0 0 0-24.213-10.03l-40.947-3.31c-20.86-1.685-37.42-18.246-39.106-39.105l-3.31-40.947a42.7 42.7 0 0 0-10.03-24.213l-26.613-31.295c-13.557-15.942-13.557-39.362 0-55.304l26.614-31.294a42.7 42.7 0 0 0 10.03-24.213l3.309-40.947c1.686-20.86 18.246-37.42 39.106-39.106l40.947-3.31a42.7 42.7 0 0 0 24.213-10.03l31.294-26.613c15.942-13.557 39.362-13.557 55.304 0m-27.64 32.503l-31.317 26.613a85.35 85.35 0 0 1-48.417 20.055l-40.947 3.31l-3.325 40.962a85.35 85.35 0 0 1-20.055 48.417l-26.613 31.295l26.613 31.316a85.35 85.35 0 0 1 20.055 48.416l3.31 40.947l40.962 3.326a85.35 85.35 0 0 1 48.417 20.054l31.295 26.614l31.316-26.614a85.35 85.35 0 0 1 48.416-20.054l40.947-3.31l3.326-40.963a85.35 85.35 0 0 1 20.054-48.416l26.614-31.295l-26.614-31.316a85.35 85.35 0 0 1-20.054-48.417l-3.31-40.947l-40.963-3.325a85.35 85.35 0 0 1-48.416-20.055zm80.24 94.36l30.167 30.167l-131.836 132.388l-79.083-79.084l30.167-30.166l48.916 48.916z"></svg:path>`,
})
export class IxCertificateSuccessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCertificateSuccessFilledIcon],svg[ix-certificate-success-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m283.735 52.918l31.295 26.614a42.7 42.7 0 0 0 24.213 10.03l40.947 3.309c20.86 1.686 37.42 18.246 39.106 39.106l3.31 40.947a42.7 42.7 0 0 0 10.029 24.213l26.614 31.294c13.557 15.942 13.557 39.362 0 55.304l-26.614 31.295a42.7 42.7 0 0 0-10.03 24.213l-3.31 40.947c-1.685 20.86-18.246 37.42-39.105 39.106l-40.947 3.31a42.7 42.7 0 0 0-24.213 10.029l-31.295 26.614c-15.942 13.557-39.362 13.557-55.304 0l-31.294-26.614a42.7 42.7 0 0 0-24.213-10.03l-40.947-3.31c-20.86-1.685-37.42-18.246-39.106-39.105l-3.31-40.947a42.7 42.7 0 0 0-10.03-24.213l-26.613-31.295c-13.557-15.942-13.557-39.362 0-55.304l26.614-31.294a42.7 42.7 0 0 0 10.03-24.213l3.309-40.947c1.686-20.86 18.246-37.42 39.106-39.106l40.947-3.31a42.7 42.7 0 0 0 24.213-10.03l31.294-26.613c15.942-13.557 39.362-13.557 55.304 0m52.6 126.863L234.667 282.002l-48.916-48.916l-30.167 30.166l79.083 79.084l131.836-132.388z"></svg:path>`,
})
export class IxCertificateSuccessFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChainAlternativeIcon],svg[ix-chain-alternative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 320V192H352v-42.667H160V192h74.667v128H160v42.667h192V320zM192 234.667H85.333v42.666H192zm234.667 0H320v42.666h106.667zm-32 170.666H277.333v64h-42.666v-64H117.333V320H42.667V192h74.666v-85.333h117.334v-64h42.666v64h117.334V192h74.666v128h-74.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxChainAlternativeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChainParallelIcon],svg[ix-chain-parallel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 192v128h-74.666v85.333H448V448H64v-42.667h53.333V320H42.667V192h74.666v-85.333H64V64h384v42.667h-53.333V192zM192 234.667H85.333v42.666H192zm234.667 0H320v42.666h106.667zm-74.667-128H160V192h74.667v128H160v85.333h192V320h-74.667V192H352z" clip-rule="evenodd"></svg:path>`,
})
export class IxChainParallelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChainStepIcon],svg[ix-chain-step-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 320V192h85.334V42.666h42.666V192h85.334v128h-85.334v149.333h-42.666V320zM320 234.667H192v42.666h128z" clip-rule="evenodd"></svg:path>`,
})
export class IxChainStepIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChartCursorIcon],svg[ix-chart-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 149.333h42.667V192H64zm85.333 0H192V192h-42.667zM362.667 64v46.309c18.185 6.427 32.597 20.84 39.024 39.024H448V192h-46.309c-6.427 18.185-20.84 32.597-39.024 39.025v46.308H320v-46.308c-18.185-6.427-32.597-20.84-39.025-39.025h-46.308v-42.667h46.308c6.428-18.185 20.84-32.597 39.025-39.025V64zM320 320h42.667v42.667H320zm0 85.333h42.667V448H320z"></svg:path>`,
})
export class IxChartCursorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChartCurveLinearIcon],svg[ix-chart-curve-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m106.667 64l-.001 341.333H448V448H64V64zm188.585 52.403l1.342 2.425l106.667 224l-38.522 18.344l-87.406-183.593l-87.405 183.593l-38.522-18.344l106.666-224c7.315-15.362 28.414-16.17 37.18-2.425"></svg:path>`,
})
export class IxChartCurveLinearIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChartCurveSplineIcon],svg[ix-chart-curve-spline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m106.667 64l-.001 341.333H448V448H64V64zm170.666 42.667c29.222 0 49.877 16.812 63.332 45.645l1.425 3.129l2.643 6.29q.63 1.591 1.235 3.216l2.338 6.699q.566 1.731 1.121 3.538l2.188 7.582l2.172 8.435l2.225 9.499l2.346 10.773l6.423 31.316l2.457 11.229l2.404 10.19l2.373 9.192a284 284 0 0 0 2.36 8.232l2.37 7.31c7.536 21.734 15.503 30.203 26.78 30.996l1.808.062v42.667c-29.221 0-49.876-16.813-63.332-45.645l-1.425-3.13l-2.642-6.29q-.63-1.592-1.235-3.215l-2.338-6.7a201 201 0 0 1-1.121-3.537l-2.188-7.583l-2.172-8.435l-2.225-9.498l-2.346-10.773l-6.423-31.317l-2.457-11.229l-2.404-10.19l-2.373-9.192a284 284 0 0 0-2.36-8.231l-2.37-7.31c-7.933-22.878-16.343-31.059-28.589-31.059s-20.655 8.18-28.589 31.058l-2.369 7.31a261 261 0 0 0-1.18 3.999l-2.364 8.707a439 439 0 0 0-1.189 4.718l-2.404 10.19l-2.457 11.23l-6.423 31.316l-2.346 10.773l-2.225 9.498l-2.172 8.435l-2.188 7.583q-.555 1.805-1.12 3.537l-2.34 6.7a165 165 0 0 1-1.234 3.214l-2.643 6.291a182 182 0 0 1-1.425 3.13c-12.747 27.315-31.956 43.842-58.789 45.506l-4.543.139V320c12.246 0 20.656-8.18 28.59-31.058l2.368-7.31a261 261 0 0 0 1.18-3.999l2.365-8.706q.592-2.297 1.189-4.718l2.404-10.191l2.457-11.229l6.423-31.316l2.346-10.773l2.225-9.499l2.172-8.435l2.188-7.582q.555-1.807 1.12-3.538l2.34-6.7a165 165 0 0 1 1.234-3.214l2.642-6.291q.694-1.562 1.425-3.13c13.456-28.832 34.11-45.644 63.332-45.644"></svg:path>`,
})
export class IxChartCurveSplineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChartCurveSteppedIcon],svg[ix-chart-curve-stepped-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m106.667 64l-.001 341.333H448V448H64V64zm298.666 42.667v256h-42.666V149.333h-85.334v213.334h-128V320h85.334V106.667z"></svg:path>`,
})
export class IxChartCurveSteppedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChartDiagramIcon],svg[ix-chart-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-42.667 42.667H106.667v298.666h298.666zM298.666 266.666H192v-53.333h-42.667v-64H256v64h-42.667v32H320v53.334h42.667v64H256v-64h42.667z"></svg:path>`,
})
export class IxChartDiagramIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChartDiagramAddIcon],svg[ix-chart-diagram-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 64l-.001 234.666H384v-192H106.667V384h191.999v42.666H64V64zm0 256l-.001 64h64v42.667l-64-.001v64H384v-64h-64V384h64v-64zM256 149.333v64h-42.667v21.333h85.334l-.001 42.667h42.667v64H234.667v-64h42.666V256H192v-42.667h-42.667v-64z"></svg:path>`,
})
export class IxChartDiagramAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChartDiagramsIcon],svg[ix-chart-diagrams-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 128v320H128V128zm-42.667 42.667H170.667v234.666h234.666zM320 298.666h-85.333L234.666 256H192v-64h106.667v64H256v21.333h85.333V320H384v64H277.333v-64H320zM384 64v42.667H106.667V384H64V64z"></svg:path>`,
})
export class IxChartDiagramsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChartDurationCurveIcon],svg[ix-chart-duration-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 85.332v298.667h384v42.666H42.667V85.332zm56.269 21.333c23.052 0 45.449 4.222 66.277 12.087a63.8 63.8 0 0 1 37.454-12.087c35.347 0 64 28.654 64 64c0 9.991-2.289 19.448-6.372 27.873a166 166 0 0 1 5.224 9.348l2.837 5.702a265 265 0 0 0 14.687 26.729c8.025-3.639 16.923-5.652 26.291-5.652c35.346 0 64 28.654 64 64c0 9.252-1.963 18.045-5.496 25.986a259 259 0 0 0 23.847 13.157l7.093 3.316l4.636 2.084l-17.493 38.915l-4.636-2.084a307 307 0 0 1-43.579-24.003c-8.542 4.246-18.179 6.629-28.372 6.629c-35.346 0-64-28.653-64-64c0-10.09 2.335-19.635 6.495-28.124a301 301 0 0 1-18.414-31.343l-3.574-7.25l-1.359-2.702c-7.896 3.484-16.629 5.419-25.815 5.419c-35.346 0-64-28.653-64-64c0-5.249.632-10.351 1.825-15.234a143.8 143.8 0 0 0-35.982-5.992l-5.574-.107h-34.935v-42.667zM352 277.332c-11.782 0-21.333 9.551-21.333 21.333s9.551 21.334 21.333 21.334s21.333-9.552 21.333-21.334s-9.551-21.333-21.333-21.333m-106.667-128c-11.782 0-21.333 9.551-21.333 21.333s9.551 21.334 21.333 21.334s21.334-9.552 21.334-21.334s-9.552-21.333-21.334-21.333" clip-rule="evenodd"></svg:path>`,
})
export class IxChartDurationCurveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChartLabelsIcon],svg[ix-chart-labels-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 277.333V448H149.333L64 362.667l85.333-85.334zM405.333 320H166.997l-42.645 42.667l42.667 42.666h238.314zM448 64v170.667H149.333L64 149.333L149.333 64zm-42.667 42.667H166.997l-42.645 42.666L167.019 192h238.314z"></svg:path>`,
})
export class IxChartLabelsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChartLabelsFilledIcon],svg[ix-chart-labels-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 277.333V448H149.333L64 362.667l85.333-85.334zM448 64v170.667H149.333L64 149.333L149.333 64z"></svg:path>`,
})
export class IxChartLabelsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChartTypesIcon],svg[ix-chart-types-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M403.942 257.822c-10.834 13.797-24.995 24.856-41.275 31.969v8.876h61.845c27.659-27.105 44.821-64.882 44.821-106.667c0-82.475-66.858-149.333-149.333-149.333S170.667 109.525 170.667 192h42.666c0-51.604 36.646-94.65 85.334-104.533v117.718zm19.101-38.152l-81.71-40.855V87.467c48.688 9.883 85.334 52.929 85.334 104.533c0 9.57-1.261 18.846-3.624 27.67M64 85.333h64V448H64zm106.667 128h64V448h-64zm106.666 64h64V448h-64zM448 320h-64v128h64z" clip-rule="evenodd"></svg:path>`,
})
export class IxChartTypesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChartTypesFilledIcon],svg[ix-chart-types-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.333 44.179v130.329l122.806 56.68c3.387-12.489 5.194-25.627 5.194-39.188c0-75.231-55.631-137.47-128-147.821M320 42.667v145.491l137.048 63.253c-7.738 17.826-18.853 33.847-32.536 47.256H320v-85.334H192v-98.295c26.131-43.367 73.678-72.371 128-72.371M170.667 85.333H64V448h106.667zM192 234.667h106.667V448H192zM426.667 320H320v128h106.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxChartTypesFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChartValueHorizontalIcon],svg[ix-chart-value-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 106.667H106.667v298.666h298.666zM106.667 64H64v384h384V64zm107.021 65.667q18.52 0 27.416 13.125Q250 155.844 250 183.042q0 24.645-7.073 37.187q-9.115 16.115-29.239 16.115q-18.594 0-27.49-13.125q-8.823-13.198-8.823-40.761q0-24.208 7.073-36.75q9.114-16.041 29.24-16.041m0 14.583q-9.189 0-13.636 9.479q-4.448 9.406-4.448 28.875q0 20.052 4.156 29.094q4.667 10.062 13.928 10.062q9.187 0 13.635-9.479q4.448-9.552 4.448-29.239t-4.156-28.73q-4.594-10.062-13.927-10.062m57.166 90.927l1.386-15.167q7.364 1.896 12.031 1.896q15.166 0 23.26-11.812q5.834-8.386 7.073-20.49q-8.677 8.896-21.364 8.896q-14.51 0-22.678-9.99q-6.927-8.386-6.927-22.822q0-16.042 8.823-25.667q9.48-10.354 26.032-10.354q18.666 0 27.635 12.25q8.02 11.01 8.021 31.062q0 21.584-7.438 37.406q-12.176 25.959-42.146 25.959q-5.03 0-13.708-1.167m27.708-91.365q-7.656 0-12.25 5.615q-4.52 5.614-4.52 15.094q0 8.677 4.01 13.854q4.448 5.906 12.323 5.906q7.802 0 12.687-5.541q4.886-5.542 4.886-14.365q0-9.77-4.667-15.094q-4.812-5.469-12.469-5.469M263.627 388.36l-18.566-18.566l30.101-30.102h-78.24v-26.256h78.24l-30.101-30.102l18.566-18.566l61.796 61.796z" clip-rule="evenodd"></svg:path>`,
})
export class IxChartValueHorizontalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChartValueVerticalIcon],svg[ix-chart-value-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 106.667H106.667v298.666h298.666zM106.667 64H64v384h384V64zm107.021 65.667q18.52 0 27.416 13.125Q250 155.844 250 183.042q0 24.645-7.073 37.187q-9.115 16.115-29.239 16.115q-18.594 0-27.49-13.125q-8.823-13.198-8.823-40.761q0-24.208 7.073-36.75q9.114-16.041 29.24-16.041m0 14.583q-9.189 0-13.636 9.479q-4.448 9.406-4.448 28.875q0 20.052 4.156 29.094q4.667 10.062 13.928 10.062q9.187 0 13.635-9.479q4.448-9.552 4.448-29.239t-4.156-28.73q-4.594-10.062-13.927-10.062m57.166 90.927l1.386-15.167q7.364 1.896 12.031 1.896q15.166 0 23.26-11.812q5.834-8.386 7.073-20.49q-8.677 8.896-21.364 8.896q-14.51 0-22.678-9.99q-6.927-8.386-6.927-22.822q0-16.042 8.823-25.667q9.48-10.354 26.032-10.354q18.666 0 27.635 12.25q8.02 11.01 8.021 31.062q0 21.584-7.438 37.406q-12.176 25.959-42.146 25.959q-5.03 0-13.708-1.167m27.708-91.365q-7.656 0-12.25 5.615q-4.52 5.614-4.52 15.094q0 8.677 4.01 13.854q4.448 5.906 12.323 5.906q7.802 0 12.687-5.541q4.886-5.542 4.886-14.365q0-9.77-4.667-15.094q-4.812-5.469-12.469-5.469m25.801 168.561l-18.567 18.566l-30.101-30.101v78.24h-26.256v-78.24l-30.102 30.101l-18.566-18.566l61.796-61.796z" clip-rule="evenodd"></svg:path>`,
})
export class IxChartValueVerticalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCheckIcon],svg[ix-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M237.866 438.827L48.853 249.814l30.293-30.294l152.32 152.32L430.293 73.387l35.413 23.68z"></svg:path>`,
})
export class IxCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCheckInIcon],svg[ix-check-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M428.18 256v42.662h-99.348l132.09 132.09l-30.17 30.17l-132.088-132.088l.006 99.34h-42.662L256 256zM213.335 42.667C307.59 42.667 384 80.872 384 128v85.333h-42.666v-28.889l.382-.219l-.694.396c-31.265 17.613-76.884 28.713-127.688 28.713c-51.303 0-97.319-11.319-128.604-29.233l.596.339l-.007 50.227h.015c0 3.819 7.561 12.758 26.401 22.178c25.542 12.77 62.038 20.489 101.599 20.489V320c-50.986 0-96.75-11.178-128.023-28.901l-.005 48.7l.03 1.596C86.508 357.665 140.997 384 213.334 384v42.667c-92.162 0-167.262-36.526-170.554-82.205l-.113-3.128V128c0-47.128 76.41-85.333 170.667-85.333m0 42.667c-39.56 0-76.057 7.718-101.599 20.489c-18.84 9.42-26.401 18.358-26.401 22.177c0 3.82 7.561 12.758 26.401 22.178c25.542 12.77 62.038 20.489 101.599 20.489c39.56 0 76.057-7.718 101.598-20.49c18.84-9.42 26.402-18.358 26.402-22.177s-7.562-12.757-26.402-22.177c-25.541-12.771-62.038-20.49-101.598-20.49"></svg:path>`,
})
export class IxCheckInIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCheckOutIcon],svg[ix-check-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m273.248 243.079l132.088 132.087l.002-97.832H448V448H277.334v-42.662h97.834l-132.09-132.09zM213.334 42.667C307.59 42.667 384 80.872 384 128v106.667h-42.666v-50.223l.382-.219l-.694.396c-31.265 17.613-76.884 28.713-127.688 28.713c-51.303 0-97.319-11.319-128.604-29.233l.596.339l-.007 50.227h.015c0 3.819 7.561 12.758 26.401 22.178c19.421 9.71 45.176 16.5 73.796 19.196l43.595 43.599c-5.2.238-10.468.36-15.792.36c-50.986 0-96.75-11.178-128.023-28.901l-.005 48.7l.03 1.596C86.508 357.665 140.997 384 213.334 384c7.23 0 14.357-.257 21.334-.757v42.764a344 344 0 0 1-21.334.66c-92.162 0-167.262-36.526-170.554-82.205l-.113-3.128V128c0-47.128 76.41-85.333 170.667-85.333m0 42.667c-39.56 0-76.057 7.718-101.599 20.489c-18.84 9.42-26.401 18.358-26.401 22.177c0 3.82 7.561 12.758 26.401 22.178c25.542 12.77 62.038 20.489 101.599 20.489c39.56 0 76.057-7.718 101.598-20.49c18.84-9.42 26.402-18.358 26.402-22.177s-7.562-12.757-26.402-22.177c-25.541-12.771-62.038-20.49-101.598-20.49"></svg:path>`,
})
export class IxCheckOutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxIcon],svg[ix-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-42.667 42.667H106.667v298.666h298.666zm-59.325 61.44l33.317 26.653l-141.327 165.992l-91.325-79.46l26.654-33.317l57.99 52.818z"></svg:path>`,
})
export class IxCheckboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxComponentCheckedIcon],svg[ix-checkbox-component-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-21.333 21.333H85.333v341.334h341.334zm-54.16 56.242l22.986 15.516l-153.408 227.271l-123.89-123.89l19.61-19.61L237.91 340.97z"></svg:path>`,
})
export class IxCheckboxComponentCheckedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxComponentMixedIcon],svg[ix-checkbox-component-mixed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-21.333 21.333H85.333v341.334h341.334zm-64 149.334v42.666H149.333v-42.666z"></svg:path>`,
})
export class IxCheckboxComponentMixedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxComponentUncheckedIcon],svg[ix-checkbox-component-unchecked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-21.333 21.333H85.333v341.334h341.334z"></svg:path>`,
})
export class IxCheckboxComponentUncheckedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxEmptyIcon],svg[ix-checkbox-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64H64v384h384zm-42.667 42.667H106.667v298.666h298.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxCheckboxEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxEmptyFilledIcon],svg[ix-checkbox-empty-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 64h384v384H64z"></svg:path>`,
})
export class IxCheckboxEmptyFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxFilledIcon],svg[ix-checkbox-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-80.659 82.773l-136.024 154.02l-68.657-63.485l-26.653 33.317l101.991 90.127l162.66-187.325z"></svg:path>`,
})
export class IxCheckboxFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxMixedIcon],svg[ix-checkbox-mixed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h384v384H64zm42.667 42.667h298.666v298.666H106.667zm256 128H149.333v42.666h213.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxCheckboxMixedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxMixedFilledIcon],svg[ix-checkbox-mixed-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64H64v384h384zm-85.333 170.667H149.333v42.666h213.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxCheckboxMixedFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxesIcon],svg[ix-checkboxes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h298.667v42.667h-256v256H64zm315.325 183.993l-98.66 123.326l-59.325-47.46l26.653-33.318l25.991 20.819l72.024-90.02zM448 149.333H149.333V448H448zM405.333 192v213.333H192V192z" clip-rule="evenodd"></svg:path>`,
})
export class IxCheckboxesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxesEmptyIcon],svg[ix-checkboxes-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 64H64v298.667h42.667v-256h256zM448 149.333H149.333V448H448zM405.333 192v213.333H192V192z" clip-rule="evenodd"></svg:path>`,
})
export class IxCheckboxesEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxesEmptyFilledIcon],svg[ix-checkboxes-empty-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 64H64v298.667h42.667v-256h256zm-213.334 85.333H448V448H149.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxCheckboxesEmptyFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCheckboxesFilledIcon],svg[ix-checkboxes-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 64H64v298.667h42.667v-256h256zM448 149.333H149.333V448H448zm-80.659 61.44l33.318 26.654l-119.994 144.659l-80.658-68.794l26.653-33.317l47.324 42.152z" clip-rule="evenodd"></svg:path>`,
})
export class IxCheckboxesFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChevronDownIcon],svg[ix-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m400.915 149.333l30.17 30.17L256 354.588L80.915 179.503l30.17-30.17L256 294.231z"></svg:path>`,
})
export class IxChevronDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChevronDownBarIcon],svg[ix-chevron-down-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M431.084 158.17L400.914 128L255.999 272.898L111.084 128l-30.17 30.17L256 333.255zM85.334 384h341.333v-42.667H85.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxChevronDownBarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChevronDownBarSmallIcon],svg[ix-chevron-down-bar-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m134.188 196.48l121.813 121.6l121.813-121.6l-30.293-30.293l-91.52 91.733l-91.52-91.733zM128 362.667h256V320H128z" clip-rule="evenodd"></svg:path>`,
})
export class IxChevronDownBarSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChevronDownSmallIcon],svg[ix-chevron-down-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 339.413l-121.813-121.6l30.293-30.293L256 279.253l91.52-91.733l30.294 30.293z"></svg:path>`,
})
export class IxChevronDownSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChevronLeftIcon],svg[ix-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m362.695 400.853l-30.17 30.17L157.44 255.938L332.525 80.853l30.17 30.17l-144.898 144.915z"></svg:path>`,
})
export class IxChevronLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChevronLeftBarIcon],svg[ix-chevron-left-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m353.858 431.023l30.17-30.17L239.13 255.938l144.898-144.915l-30.17-30.17l-175.085 175.085zM128 426.667h42.667V85.333H128z" clip-rule="evenodd"></svg:path>`,
})
export class IxChevronLeftBarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChevronLeftBarSmallIcon],svg[ix-chevron-left-bar-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 384H192V128h-42.667zm44.586-127.999l121.6 121.813l30.294-30.293l-91.734-91.52l91.734-91.52l-30.294-30.293z" clip-rule="evenodd"></svg:path>`,
})
export class IxChevronLeftBarSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChevronLeftSmallIcon],svg[ix-chevron-left-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M294.187 377.814L172.587 256l121.6-121.813l30.293 30.293L232.747 256l91.733 91.52z"></svg:path>`,
})
export class IxChevronLeftSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChevronRightIcon],svg[ix-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m149.333 400.853l30.17 30.17l175.085-175.085L179.503 80.853l-30.17 30.17l144.898 144.915z"></svg:path>`,
})
export class IxChevronRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChevronRightBarIcon],svg[ix-chevron-right-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M158.17 431.023L128 400.853l144.898-144.915L128 111.023l30.17-30.17l175.085 175.085zm183.163-4.356H384V85.333h-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxChevronRightBarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChevronRightBarSmallIcon],svg[ix-chevron-right-bar-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 384h42.667V128H320zm-153.812-36.48l30.293 30.293L318.081 256l-121.6-121.814l-30.293 30.294L257.921 256z" clip-rule="evenodd"></svg:path>`,
})
export class IxChevronRightBarSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChevronRightSmallIcon],svg[ix-chevron-right-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M217.813 377.814L187.52 347.52L279.253 256l-91.733-91.52l30.293-30.293L339.413 256z"></svg:path>`,
})
export class IxChevronRightSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChevronUpIcon],svg[ix-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m400.853 362.695l30.17-30.17L255.938 157.44L80.853 332.525l30.17 30.17l144.915-144.898z"></svg:path>`,
})
export class IxChevronUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChevronUpBarIcon],svg[ix-chevron-up-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 170.667h341.333V128H85.333zm345.691 183.191l-30.17 30.17L255.939 239.13L111.024 384.028l-30.17-30.17l175.085-175.085z" clip-rule="evenodd"></svg:path>`,
})
export class IxChevronUpBarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChevronUpBarSmallIcon],svg[ix-chevron-up-bar-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 192h256v-42.667H128zm128.001 62.081l91.52 91.733l30.293-30.293l-121.813-121.6l-121.813 121.6l30.293 30.293z" clip-rule="evenodd"></svg:path>`,
})
export class IxChevronUpBarSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixChevronUpSmallIcon],svg[ix-chevron-up-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M347.52 324.48L256 232.747l-91.52 91.733l-30.293-30.293L256 172.587l121.814 121.6z"></svg:path>`,
})
export class IxChevronUpSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCircleIcon],svg[ix-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m0 42.667c-94.256 0-170.666 76.41-170.666 170.666c0 94.257 76.41 170.667 170.666 170.667c94.257 0 170.667-76.41 170.667-170.667c0-94.256-76.41-170.666-170.667-170.666"></svg:path>`,
})
export class IxCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCircleDotIcon],svg[ix-circle-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m0 42.667c-94.256 0-170.666 76.41-170.666 170.666c0 94.257 76.41 170.667 170.666 170.667c94.257 0 170.667-76.41 170.667-170.667c0-94.256-76.41-170.666-170.667-170.666m0 64c58.91 0 106.667 47.756 106.667 106.666S314.911 362.667 256 362.667c-58.91 0-106.666-47.756-106.666-106.667c0-58.91 47.756-106.666 106.666-106.666"></svg:path>`,
})
export class IxCircleDotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCircleDotFilledIcon],svg[ix-circle-dot-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m0 106.667c-58.91 0-106.666 47.756-106.666 106.666S197.09 362.667 256 362.667S362.667 314.911 362.667 256c0-58.91-47.756-106.666-106.667-106.666"></svg:path>`,
})
export class IxCircleDotFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCircleFilledIcon],svg[ix-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667"></svg:path>`,
})
export class IxCircleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCirclePauseIcon],svg[ix-circle-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m0 42.667c-94.256 0-170.666 76.41-170.666 170.666c0 94.257 76.41 170.667 170.666 170.667c94.257 0 170.667-76.41 170.667-170.667c0-94.256-76.41-170.666-170.667-170.666m-21.333 85.333v170.667H192V170.667zm85.333 0v170.667h-42.666V170.667z"></svg:path>`,
})
export class IxCirclePauseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCirclePauseFilledIcon],svg[ix-circle-pause-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 469.334c117.821 0 213.334-95.513 213.334-213.334c0-117.82-95.513-213.333-213.334-213.333C138.18 42.667 42.667 138.18 42.667 256c0 117.821 95.513 213.334 213.333 213.334m-64-298.667h42.667v170.667H192zm85.334 0H320v170.667h-42.666z"></svg:path>`,
})
export class IxCirclePauseFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCirclePlayIcon],svg[ix-circle-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m0 42.667c-94.256 0-170.666 76.41-170.666 170.666c0 94.257 76.41 170.667 170.666 170.667c94.257 0 170.667-76.41 170.667-170.667c0-94.256-76.41-170.666-170.667-170.666m-64 85.333L362.667 256L192 341.334z"></svg:path>`,
})
export class IxCirclePlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCirclePlayFilledIcon],svg[ix-circle-play-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667M192 160v192l192-96z"></svg:path>`,
})
export class IxCirclePlayFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCircleStopIcon],svg[ix-circle-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m0 42.667c-94.256 0-170.666 76.41-170.666 170.666c0 94.257 76.41 170.667 170.666 170.667c94.257 0 170.667-76.41 170.667-170.667c0-94.256-76.41-170.666-170.667-170.666m85.334 85.333v170.667H170.667V170.667z"></svg:path>`,
})
export class IxCircleStopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCircleStopFilledIcon],svg[ix-circle-stop-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 469.334c117.821 0 213.334-95.513 213.334-213.334c0-117.82-95.513-213.333-213.334-213.333C138.18 42.667 42.667 138.18 42.667 256c0 117.821 95.513 213.334 213.333 213.334m-85.333-298.667h170.667v170.667H170.667z"></svg:path>`,
})
export class IxCircleStopFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixClearIcon],svg[ix-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m0 42.667c-94.256 0-170.666 76.41-170.666 170.666c0 94.257 76.41 170.667 170.666 170.667c94.257 0 170.667-76.41 170.667-170.667c0-94.256-76.41-170.666-170.667-170.666m75.425 65.072l30.17 30.17L286.169 256l75.426 75.425l-30.17 30.17L256 286.169l-75.424 75.426l-30.17-30.17L225.83 256l-75.424-75.424l30.17-30.17L256 225.83z"></svg:path>`,
})
export class IxClearIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixClearFilterIcon],svg[ix-clear-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 389.333v-122l-149.334-182H384l-149.333 182v122zM132.864 128h160.917l-80.448 98.048zM448 373.333C448 414.571 414.57 448 373.333 448s-74.666-33.429-74.666-74.667s33.429-74.666 74.666-74.666S448 332.096 448 373.333m21.333 0c0 53.02-42.98 96-96 96c-53.019 0-96-42.98-96-96c0-53.019 42.981-96 96-96c53.02 0 96 42.981 96 96m-62.057-48.923l15.085 15.085l-33.944 33.944l33.953 33.954l-15.085 15.085l-33.953-33.954l-33.942 33.942l-15.085-15.085l33.942-33.942l-33.957-33.957l15.085-15.085l33.957 33.957z" clip-rule="evenodd"></svg:path>`,
})
export class IxClearFilterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixClearFilterFilledIcon],svg[ix-clear-filter-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m384 85.333l-149.333 182v122H192v-122l-149.334-182zm64 288C448 414.571 414.57 448 373.333 448s-74.666-33.429-74.666-74.667s33.429-74.666 74.666-74.666S448 332.096 448 373.333m21.333 0c0 53.02-42.98 96-96 96c-53.019 0-96-42.98-96-96c0-53.019 42.981-96 96-96c53.02 0 96 42.981 96 96m-62.057-48.923l15.085 15.085l-33.944 33.944l33.953 33.954l-15.085 15.085l-33.953-33.954l-33.942 33.942l-15.085-15.085l33.942-33.942l-33.957-33.957l15.085-15.085l33.957 33.957z" clip-rule="evenodd"></svg:path>`,
})
export class IxClearFilterFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixClientInterfaceIcon],svg[ix-client-interface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M277.333 64v384H106.667c-22.493 0-40.921-17.405-42.55-39.482L64 405.333V106.667c0-22.493 17.405-40.921 39.482-42.55l3.185-.117zm-42.666 42.615h-128v298.666l128 .052zm127.052 192c19.881 0 36.586 13.597 41.322 31.999h66.292v42.719l-66.297-.03c-4.744 18.392-21.444 31.978-41.317 31.978h-63.052V298.615zm0-192c19.881 0 36.586 13.597 41.322 31.999h66.292v42.689h-66.297c-4.744 18.392-21.444 31.978-41.317 31.978h-63.052V106.667z"></svg:path>`,
})
export class IxClientInterfaceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixClipboardIcon],svg[ix-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 42.664h170.666v42.667h85.334v384H85.333v-384h85.334zm170.666 85.333H384v298.667H128V127.997h42.667v42.667h170.666zm-42.666 0V85.331h-85.334v42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxClipboardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixClipboardFilledIcon],svg[ix-clipboard-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 85.33v85.334h213.334V85.331h64v384H85.333v-384zm170.667 0v42.667H192V42.664h128z" clip-rule="evenodd"></svg:path>`,
})
export class IxClipboardFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixClockIcon],svg[ix-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.803 0 213.334 95.53 213.334 213.333S373.803 469.334 256 469.334S42.667 373.803 42.667 256S138.197 42.667 256 42.667m0 42.667c-94.1 0-170.666 76.565-170.666 170.666c0 94.102 76.565 170.667 170.666 170.667c94.102 0 170.667-76.565 170.667-170.667c0-94.101-76.565-170.666-170.667-170.666m21.334 64V268.48l57.751 57.769l-30.17 30.17l-70.248-70.249V149.334z"></svg:path>`,
})
export class IxClockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixClockFilledIcon],svg[ix-clock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.803 0 213.334 95.53 213.334 213.333S373.803 469.334 256 469.334S42.667 373.803 42.667 256S138.197 42.667 256 42.667m21.334 106.667h-42.667V286.17l70.248 70.249l30.17-30.17l-57.751-57.769z"></svg:path>`,
})
export class IxClockFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixClockPersonIcon],svg[ix-clock-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M437.333 85.333c0 23.564-19.102 42.667-42.667 42.667C371.102 128 352 108.897 352 85.333s19.102-42.666 42.666-42.666c23.565 0 42.667 19.102 42.667 42.666m-115.247 93.451C360.153 213.869 384 264.149 384 320c0 31.736-7.7 61.674-21.334 88.047V448c0 11.782 9.552 21.333 21.334 21.333h21.333c11.782 0 21.333-9.551 21.333-21.333V320H448c11.782 0 21.333-9.551 21.333-21.333V192c0-23.564-19.102-42.667-42.667-42.667h-64c-18.951 0-35.016 12.356-40.58 29.451m-108.753 66.549v65.83l51.504 51.503l-30.17 30.17l-64-64v-83.503zM298.667 320c0 58.91-47.757 106.667-106.667 106.667S85.333 378.91 85.333 320S133.09 213.333 192 213.333S298.667 261.089 298.667 320m42.666 0c0 82.474-66.858 149.333-149.333 149.333S42.667 402.474 42.667 320S109.526 170.667 192 170.667S341.333 237.525 341.333 320" clip-rule="evenodd"></svg:path>`,
})
export class IxClockPersonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloseIcon],svg[ix-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m390.249 91.582l30.17 30.17L286.169 256l134.25 134.249l-30.17 30.17L256 286.169l-134.248 134.25l-30.17-30.17L225.83 256L91.582 121.752l30.17-30.17L256 225.83z"></svg:path>`,
})
export class IxCloseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloseSmallIcon],svg[ix-close-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m347.581 134.248l30.17 30.17l-91.582 91.581l91.582 91.582l-30.17 30.17L256 286.17l-91.581 91.582l-30.17-30.17L225.83 256l-91.582-91.581l30.17-30.17l91.581 91.582z"></svg:path>`,
})
export class IxCloseSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudIcon],svg[ix-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m143.679 249.716l-25.044 10.161c-19.603 7.955-33.302 27.157-33.302 49.456c0 29.456 23.878 53.334 53.334 53.334h132.32l77.841.002c42.989 0 77.839-34.85 77.839-77.84c0-42.989-34.85-77.839-77.839-77.839c-4.872 0-9.603.442-14.166 1.278l-29.378 5.382l-15.112-25.761c-13.587-23.16-38.638-38.556-67.238-38.556c-41.503 0-75.447 32.493-77.741 73.398zm84.641 155.62l-89.653-.003c-53.02 0-96-42.98-96-96c0-40.26 24.783-74.732 59.926-88.991c3.555-63.378 56.074-113.675 120.341-113.675c44.353 0 83.11 23.955 104.039 59.633a121 121 0 0 1 21.855-1.977c66.554 0 120.506 53.953 120.506 120.506c0 66.554-53.952 120.507-120.506 120.507z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudCancelledIcon],svg[ix-cloud-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M452.42 422.25L89.753 59.583l-30.17 30.17l66.154 66.153c-13.404 18.244-21.796 40.399-23.144 64.435c-35.143 14.26-59.926 48.732-59.926 88.992c0 53.02 42.98 96 96 96l89.653.003h120.508c8.203 0 16.214-.82 23.957-2.381l49.465 49.465zm-119.921-59.581l-61.512-.002h-132.32c-29.455 0-53.334-23.878-53.334-53.334c0-22.299 13.7-41.502 33.302-49.456l25.044-10.161l1.514-26.985a77.3 77.3 0 0 1 11.263-36.105zm-133.177-253.69l42.698 42.708c20.438 5.144 37.692 18.372 48.152 36.202l15.112 25.761l29.378-5.382a78.5 78.5 0 0 1 14.166-1.278c42.989 0 77.84 34.85 77.84 77.839c0 14.756-4.106 28.552-11.237 40.309l30.737 30.745c14.567-19.922 23.166-44.484 23.166-71.054c0-66.553-53.952-120.506-120.506-120.506c-7.463 0-14.767.678-21.855 1.977c-20.929-35.678-59.686-59.633-104.039-59.633c-8.081 0-15.976.795-23.612 2.312" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudCancelledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudCancelledFilledIcon],svg[ix-cloud-cancelled-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M452.42 422.25L89.753 59.583l-30.17 30.17l66.154 66.153c-13.404 18.244-21.796 40.399-23.144 64.435c-35.143 14.26-59.926 48.732-59.926 88.992c0 53.02 42.98 96 96 96h89.653v.003h120.508c8.203 0 16.214-.82 23.957-2.381l49.465 49.465zM199.322 108.979l246.846 246.904c14.567-19.922 23.166-44.484 23.166-71.054c0-66.553-53.952-120.506-120.506-120.506c-7.463 0-14.767.678-21.855 1.977c-20.929-35.678-59.686-59.633-104.039-59.633c-8.081 0-15.976.795-23.612 2.312" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudCancelledFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudDownloadIcon],svg[ix-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m149.57 185.444l-32.378 8.4c-18.354 4.762-31.859 21.49-31.859 41.264c0 23.541 19.084 42.625 42.625 42.625h143.029l77.841.001c42.989 0 77.839-34.85 77.839-77.84s-34.85-77.84-77.839-77.84c-10.847 0-21.072 2.194-30.34 6.122l-31.574 13.383l-19.86-27.956c-11.838-16.665-31.162-27.396-52.991-27.396c-35.859 0-64.928 29.069-64.928 64.928l.006.862zm85.097 211.038l-42.666-42.655l-30.17 30.17l94.157 94.157l94.179-94.153l-30.166-30.174l-42.668 42.656V320.4h71.495c66.553 0 120.506-53.952 120.506-120.506S415.381 79.387 348.828 79.387c-16.671 0-32.551 3.385-46.991 9.506c-19.497-27.446-51.544-45.352-87.774-45.352c-59.423 0-107.594 48.171-107.594 107.594q0 .705.009 1.409c-36.707 9.523-63.811 42.879-63.811 82.564c0 47.106 38.186 85.292 85.291 85.292h106.709z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudDownloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudDownloadAddIcon],svg[ix-cloud-download-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m109.486 171.624l31.181-7.824l1.077-32.13c.862-25.725 22.019-46.337 47.972-46.337c15.867 0 29.94 7.656 38.748 19.659l20.399 27.8l31.461-14.111c7.508-3.367 15.859-5.262 24.767-5.262c33.482 0 60.625 27.143 60.625 60.625s-27.143 60.625-60.625 60.625l-60.625-.004H117.333c-17.673 0-32-14.326-32-32c0-14.92 10.251-27.552 24.153-31.041m7.847 105.708l53.334.003v76.484L128 311.164l-30.17 30.169l94.17 94.17l94.17-94.17L256 311.164l-42.667 42.655v-76.483h91.758c57.046 0 103.291-46.245 103.291-103.292c0-57.046-46.245-103.291-103.291-103.291c-15.044 0-29.336 3.216-42.228 8.998c-16.5-22.486-43.118-37.084-73.147-37.084c-49.039 0-88.984 38.932-90.615 87.574c-32.424 8.136-56.434 37.476-56.434 72.424c0 41.238 33.43 74.667 74.666 74.667M426.667 320v64h64v42.667h-64v64H384v-64h-64V384h64v-64z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudDownloadAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudDownloadAddFilledIcon],svg[ix-cloud-download-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M189.716 42.667c-49.039 0-88.984 38.932-90.615 87.574c-32.424 8.136-56.434 37.477-56.434 72.424c0 41.238 33.43 74.667 74.666 74.667h53.334v76.487L128 311.164l-30.17 30.169l94.17 94.17l94.17-94.17L256 311.164l-42.667 42.655v-76.483h91.758c57.046 0 103.291-46.245 103.291-103.292c0-57.046-46.245-103.291-103.291-103.291c-15.044 0-29.336 3.216-42.228 8.998c-16.5-22.486-43.118-37.084-73.147-37.084M426.667 320v64h64v42.667h-64v64H384v-64h-64V384h64v-64z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudDownloadAddFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudDownloadFilledIcon],svg[ix-cloud-download-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.478 152.546q-.009-.704-.009-1.41c0-59.423 48.171-107.594 107.594-107.594c36.23 0 68.277 17.906 87.774 45.352c14.44-6.12 30.32-9.505 46.991-9.505c66.553 0 120.506 53.952 120.506 120.506s-53.953 120.507-120.506 120.507h-71.495v76.082l42.668-42.656l30.169 30.17l-94.169 94.17l-94.17-94.17l30.17-30.17l42.666 42.655v-76.081h-6.347v-.001H127.958c-47.105 0-85.291-38.186-85.291-85.292c0-39.685 27.104-73.04 63.811-82.563" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudDownloadFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudDownloadListIcon],svg[ix-cloud-download-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m109.486 171.624l31.181-7.824l1.077-32.13c.862-25.725 22.019-46.337 47.972-46.337c15.867 0 29.94 7.656 38.748 19.659l20.399 27.8l31.461-14.111c7.508-3.367 15.859-5.262 24.767-5.262c33.482 0 60.625 27.143 60.625 60.625s-27.143 60.625-60.625 60.625l-60.625-.004H117.333c-17.673 0-32-14.326-32-32c0-14.92 10.251-27.552 24.153-31.041m7.847 105.708l53.334.003v76.484L128 311.164l-30.17 30.169l94.17 94.17l94.17-94.17L256 311.164l-42.667 42.655v-76.483h91.758c57.046 0 103.291-46.245 103.291-103.292c0-57.046-46.245-103.291-103.291-103.291c-15.044 0-29.336 3.216-42.228 8.998c-16.5-22.486-43.118-37.084-73.147-37.084c-49.039 0-88.984 38.932-90.615 87.574c-32.424 8.136-56.434 37.476-56.434 72.424c0 41.238 33.43 74.667 74.666 74.667M384 320h106.667v42.667H384zm-64 0h42.667v42.667H320zm170.667 106.667V384H384v42.667zm-128-42.667v42.667H320V384zm128 106.667V448H384v42.667zm-128-42.667v42.667H320V448z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudDownloadListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudDownloadListFilledIcon],svg[ix-cloud-download-list-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M189.716 42.667c-49.039 0-88.984 38.932-90.615 87.574c-32.424 8.136-56.434 37.477-56.434 72.424c0 41.238 33.43 74.667 74.666 74.667h53.334v76.487L128 311.164l-30.17 30.169l94.17 94.17l94.17-94.17L256 311.164l-42.667 42.655v-76.483h91.758c57.046 0 103.291-46.245 103.291-103.292c0-57.046-46.245-103.291-103.291-103.291c-15.044 0-29.336 3.216-42.228 8.998c-16.5-22.486-43.118-37.084-73.147-37.084M384 320h106.667v42.667H384zm-64 0h42.667v42.667H320zm170.667 106.667V384H384v42.667zm-128-42.667v42.667H320V384zm128 106.667V448H384v42.667zm-128-42.667v42.667H320V448z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudDownloadListFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudFailIcon],svg[ix-cloud-fail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M222.866 106.667c27.509 0 53.1 14.72 67.175 38.613l15.141 25.813l29.428-5.333a81 81 0 0 1 14.288-1.28c20.686 0 40.305 8.107 54.807 22.613c21.457 21.466 27.71 52.573 18.758 79.657a117.6 117.6 0 0 1 35.908 25.739c20.431-44.491 12.303-98.774-24.384-135.476c-23.458-23.466-54.167-35.2-85.089-35.2c-7.463 0-14.714.64-21.965 1.92C306.035 87.893 267.436 64 223.079 64h-.213c-64.19 0-116.65 50.347-120.062 113.707c-35.187 14.293-60.137 48.64-60.137 88.96c0 53.12 42.864 96 95.964 96h117.847a116.6 116.6 0 0 1 12.415-42.86l-130.262.406c-29.429 0-53.314-23.893-53.314-53.333c0-21.76 13.222-41.173 33.481-49.28l25.164-10.24l1.493-27.093c2.346-41.174 36.253-73.6 77.411-73.6m54.467 266.666c0-53.019 42.981-96 96-96s96 42.981 96 96c0 53.02-42.981 96-96 96s-96-42.98-96-96m38.573-38.571l38.572 38.572l-38.572 38.572l18.856 18.856l38.572-38.571l38.572 38.571l18.856-18.856l-38.572-38.572l38.572-38.572l-18.856-18.856l-38.572 38.572l-38.572-38.572z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudFailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudFailFilledIcon],svg[ix-cloud-fail-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M222.866 64c-64.19 0-116.65 50.347-120.062 113.707c-35.187 14.293-60.137 48.64-60.137 88.96c0 53.12 42.864 96 95.964 96h117.847C261.867 302.864 312.127 256 373.333 256c33.468 0 63.662 14.012 85.038 36.489c20.431-44.491 12.303-98.774-24.384-135.476c-23.458-23.466-54.167-35.2-85.089-35.2c-7.463 0-14.714.64-21.965 1.92C306.035 87.893 267.436 64 223.079 64zm150.467 213.333c-53.019 0-96 42.981-96 96c0 53.02 42.981 96 96 96s96-42.98 96-96c0-53.019-42.981-96-96-96m-18.855 96.001l-38.572-38.572l18.856-18.856l38.572 38.572l38.572-38.572l18.856 18.856l-38.572 38.572l38.572 38.572l-18.856 18.856l-38.572-38.571l-38.572 38.571l-18.856-18.856z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudFailFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudFilledIcon],svg[ix-cloud-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M102.593 220.342c3.555-63.378 56.075-113.675 120.341-113.675c44.353 0 83.11 23.955 104.039 59.633a121 121 0 0 1 21.855-1.977c66.554 0 120.506 53.953 120.506 120.507c0 66.553-53.952 120.506-120.506 120.506H228.32v-.003h-89.653c-53.02 0-96-42.98-96-96c0-40.26 24.783-74.732 59.926-88.991" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudNewIcon],svg[ix-cloud-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M222.866 106.667c27.509 0 53.1 14.72 67.174 38.613l15.141 25.813l29.429-5.333a81 81 0 0 1 14.288-1.28c20.686 0 40.305 8.107 54.806 22.613c21.458 21.466 27.711 52.573 18.759 79.657a117.6 117.6 0 0 1 35.908 25.739c20.431-44.491 12.303-98.774-24.385-135.476c-23.457-23.466-54.166-35.2-85.088-35.2c-7.464 0-14.714.64-21.965 1.92C306.034 87.893 267.436 64 223.079 64h-.213c-64.19 0-116.65 50.347-120.062 113.707c-35.187 14.293-60.137 48.64-60.137 88.96c0 53.12 42.863 96 95.964 96h117.847a116.6 116.6 0 0 1 12.415-42.86l-130.262.406c-29.429 0-53.314-23.893-53.314-53.333c0-21.76 13.222-41.173 33.481-49.28l25.164-10.24l1.493-27.093c2.345-41.174 36.253-73.6 77.411-73.6m218.349 198.784c-37.49-37.49-98.274-37.49-135.764 0s-37.49 98.274 0 135.765s98.274 37.49 135.764 0s37.491-98.275 0-135.765m-83.882 51.882v-58.666h32v58.666H448v32h-58.667V448h-32v-58.667h-58.666v-32z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudNewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudNewFilledIcon],svg[ix-cloud-new-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M222.866 64c-64.19 0-116.65 50.347-120.062 113.707c-35.187 14.293-60.137 48.64-60.137 88.96c0 53.12 42.863 96 95.964 96h117.847C261.867 302.864 312.127 256 373.333 256c33.468 0 63.662 14.012 85.038 36.489c20.431-44.491 12.303-98.774-24.385-135.476c-23.457-23.466-54.166-35.2-85.088-35.2c-7.464 0-14.714.64-21.965 1.92C306.034 87.893 267.436 64 223.079 64zm218.349 241.451c-37.49-37.49-98.274-37.49-135.764 0s-37.49 98.274 0 135.765s98.274 37.49 135.764 0s37.491-98.275 0-135.765m-83.882 51.882v-58.666h32v58.666H448v32h-58.667V448h-32v-58.667h-58.666v-32z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudNewFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudRainIcon],svg[ix-cloud-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m143.679 228.382l-25.044 10.162C99.032 246.498 85.333 265.7 85.333 288c0 29.455 23.878 53.333 53.334 53.333h10.666V384h-10.666c-53.02 0-96-42.981-96-96c0-40.26 24.783-74.732 59.926-88.992c3.555-63.377 56.074-113.675 120.341-113.675c44.352 0 83.11 23.956 104.039 59.633a121 121 0 0 1 21.854-1.976c66.554 0 120.507 53.952 120.507 120.506c0 61.874-46.631 112.856-106.667 119.721v-43.108c36.387-6.529 64-38.346 64-76.613c0-42.99-34.85-77.84-77.84-77.84c-4.871 0-9.602.443-14.165 1.279L307.011 192h-1.913l-14.927-25.445C276.585 143.395 251.534 128 222.934 128c-41.503 0-75.447 32.493-77.742 73.398zM149.333 384h21.334v-85.333h42.666v128h-42.666v-42.666zm192 0h8.294q-.4.003-.8.003h-7.494v42.664h-42.667v-128h42.667zm-106.666-42.667h42.666v128h-42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudRainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudRainFilledIcon],svg[ix-cloud-rain-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M222.934 85.333c-64.267 0-116.786 50.298-120.341 113.675C67.45 213.268 42.666 247.74 42.666 288c0 53.019 42.981 96 96.001 96h10.666V277.333h85.334V320h42.666v-42.667h85.333v105.884c60.037-6.865 106.668-57.847 106.668-119.721c0-66.554-53.953-120.506-120.507-120.506c-7.462 0-14.766.678-21.854 1.976c-20.929-35.677-59.687-59.633-104.039-59.633m-52.267 213.334h42.666v128h-42.666zm106.666 42.666h-42.666v128h42.666zm21.333-42.666h42.667v128h-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudRainFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudSnowIcon],svg[ix-cloud-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m118.635 238.544l25.044-10.162l1.513-26.984C147.487 160.493 181.431 128 222.934 128c28.6 0 53.651 15.395 67.237 38.555l15.113 25.761l29.378-5.381a78.5 78.5 0 0 1 14.165-1.279c42.99 0 77.84 34.85 77.84 77.84s-34.85 77.84-77.84 77.84h-8.574a75 75 0 0 1-5.118 4.575c17.335 6.384 31.649 19.016 40.21 35.165c53.797-12.081 93.989-60.137 93.989-117.58c0-66.554-53.953-120.506-120.507-120.506c-7.462 0-14.766.678-21.854 1.976c-20.929-35.677-59.687-59.633-104.039-59.633c-64.267 0-116.786 50.298-120.341 113.675C67.45 213.268 42.666 247.74 42.666 288c0 41.867 26.802 77.475 64.183 90.602a76 76 0 0 1-.182-5.269c0-13.406 3.533-25.987 9.719-36.863c-18.33-8.439-31.053-26.968-31.053-48.47c0-22.3 13.7-41.502 33.302-49.456m187.84 38.683l17.428-30.188l-18.475-10.667l-17.429 30.188l-17.429-30.188l-18.475 10.667l17.429 30.188h-34.857v21.333h34.857l-17.429 30.188l18.475 10.667l17.429-30.188l17.429 30.188l18.475-10.667l-17.429-30.188h34.859v-21.333zm-89.238 55.145l-17.429 30.188h34.859v21.333h-34.86l17.43 30.189l-18.475 10.666l-17.429-30.188l-17.43 30.188l-18.475-10.666l17.43-30.189H128V362.56h34.857l-17.429-30.188l18.475-10.666l17.43 30.188l17.429-30.188zm110.571 72.855l17.429-30.188l-18.475-10.667l-17.429 30.188l-17.43-30.188l-18.475 10.667l17.429 30.188H256v21.333h34.858l-17.43 30.188l18.475 10.667l17.43-30.188l17.429 30.188l18.475-10.667l-17.43-30.188h34.859v-21.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudSnowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudSnowFilledIcon],svg[ix-cloud-snow-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M222.934 85.333c-64.267 0-116.786 50.298-120.341 113.675C67.45 213.268 42.666 247.74 42.666 288c0 41.867 26.802 77.475 64.183 90.602a76 76 0 0 1-.182-5.269c0-41.237 33.429-74.666 74.666-74.666c12.43 0 24.15 3.037 34.459 8.409A74.8 74.8 0 0 1 213.333 288c0-41.237 33.43-74.667 74.667-74.667s74.666 33.43 74.666 74.667c0 23.363-10.73 44.22-27.531 57.911c17.335 6.384 31.649 19.016 40.21 35.165c53.797-12.081 93.989-60.137 93.989-117.58c0-66.554-53.953-120.506-120.507-120.506c-7.462 0-14.766.678-21.854 1.976c-20.929-35.677-59.687-59.633-104.039-59.633m83.541 191.894l17.428-30.188l-18.475-10.667l-17.429 30.188l-17.429-30.188l-18.475 10.667l17.429 30.188h-34.857v21.333h34.857l-17.429 30.188l18.475 10.667l17.429-30.188l17.429 30.188l18.475-10.667l-17.429-30.188h34.859v-21.333zm-89.238 55.145l-17.429 30.188h34.859v21.333h-34.86l17.43 30.189l-18.475 10.666l-17.429-30.188l-17.43 30.188l-18.475-10.666l17.43-30.189H128V362.56h34.857l-17.429-30.188l18.475-10.666l17.43 30.188l17.429-30.188zm110.571 72.855l17.429-30.188l-18.475-10.667l-17.429 30.188l-17.43-30.188l-18.475 10.667l17.429 30.188H256v21.333h34.858l-17.43 30.188l18.475 10.667l17.43-30.188l17.429 30.188l18.475-10.667l-17.43-30.188h34.859v-21.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudSnowFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudSuccessIcon],svg[ix-cloud-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M222.866 106.667c27.509 0 53.1 14.72 67.175 38.613l15.141 25.813l29.428-5.333a81 81 0 0 1 14.288-1.28c20.686 0 40.305 8.107 54.807 22.613c21.457 21.466 27.71 52.573 18.758 79.657a117.6 117.6 0 0 1 35.908 25.739c20.431-44.491 12.303-98.774-24.384-135.476c-23.458-23.466-54.167-35.2-85.089-35.2c-7.463 0-14.714.64-21.965 1.92C306.035 87.893 267.436 64 223.079 64h-.213c-64.19 0-116.65 50.347-120.062 113.707c-35.187 14.293-60.137 48.64-60.137 88.96c0 53.12 42.864 96 95.964 96h117.847a116.6 116.6 0 0 1 12.415-42.86l-130.262.406c-29.429 0-53.314-23.893-53.314-53.333c0-21.76 13.222-41.173 33.481-49.28l25.164-10.24l1.493-27.093c2.346-41.174 36.253-73.6 77.411-73.6m54.467 266.666c0-53.019 42.981-96 96-96s96 42.981 96 96c0 53.02-42.981 96-96 96s-96-42.98-96-96m74.668 50.858l84.095-84.095l-18.856-18.856l-65.239 65.238l-22.572-22.572l-18.856 18.856z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudSuccessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudSuccessFilledIcon],svg[ix-cloud-success-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M222.866 64c-64.189 0-116.65 50.347-120.062 113.707c-35.187 14.293-60.137 48.64-60.137 88.96c0 53.12 42.864 96 95.964 96h117.847C261.867 302.864 312.128 256 373.333 256c33.468 0 63.662 14.012 85.038 36.489c20.431-44.491 12.303-98.774-24.384-135.476c-23.458-23.466-54.167-35.2-85.088-35.2c-7.464 0-14.715.64-21.966 1.92C306.035 87.893 267.436 64 223.079 64zm150.467 213.333c-53.019 0-96 42.981-96 96c0 53.02 42.981 96 96 96c53.02 0 96-42.98 96-96c0-53.019-42.98-96-96-96m62.763 62.763l-84.095 84.095l-41.428-41.429l18.856-18.856l22.572 22.572l65.239-65.238z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudSuccessFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudThunderIcon],svg[ix-cloud-thunder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m143.679 228.382l-25.044 10.162C99.032 246.498 85.333 265.7 85.333 288c0 29.455 23.879 53.333 53.334 53.333h46.512L176.646 384h41.363l-.001.002l-79.341-.002c-53.02 0-96-42.981-96-96c0-40.26 24.783-74.732 59.926-88.992c3.555-63.377 56.075-113.675 120.341-113.675c44.353 0 83.11 23.956 104.039 59.633a121.3 121.3 0 0 1 21.855-1.976c66.554 0 120.506 53.952 120.506 120.506s-53.952 120.507-120.506 120.507H327.53l35.805-44.017c36.057-6.797 63.333-38.458 63.333-76.49c0-42.99-34.851-77.84-77.84-77.84c-4.872 0-9.603.443-14.166 1.279l-29.378 5.381l-15.112-25.761C276.586 143.395 251.534 128 222.934 128c-41.503 0-75.447 32.493-77.741 73.398zm133.654 112.951L298.667 256H224l-21.333 106.667h42.666l-32.014 128l117.348-149.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudThunderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudThunderFilledIcon],svg[ix-cloud-thunder-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M102.593 199.008c3.555-63.377 56.075-113.675 120.341-113.675c44.353 0 83.11 23.956 104.039 59.633a121.3 121.3 0 0 1 21.855-1.976c66.554 0 120.506 53.952 120.506 120.506s-53.952 120.507-120.506 120.507H327.53L379.594 320h-74.936l21.334-85.333H206.513L176.646 384h-37.979c-53.02 0-96-42.981-96-96c0-40.26 24.783-74.732 59.926-88.992m174.74 142.325L298.667 256H224l-21.333 106.667h42.666l-32.014 128l117.348-149.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudThunderFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudUploadIcon],svg[ix-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M222.866 106.667c27.509 0 53.1 14.72 67.174 38.613l15.141 25.813l29.429-5.333a81 81 0 0 1 14.288-1.28c20.686 0 40.305 8.107 54.806 22.613c30.282 30.294 30.282 79.787 0 110.08c-14.287 14.294-33.694 22.4-54.592 22.4h-5.545l-24.536.077l41.226 41.63c26.397-3.733 54.927-15.004 73.729-33.813c47.129-47.147 47.129-123.307 0-170.454c-23.457-23.466-54.166-35.2-85.088-35.2c-7.464 0-14.714.64-21.965 1.92C306.034 87.893 267.436 64 223.079 64h-.213c-64.19 0-116.65 50.347-120.062 113.707c-35.187 14.293-60.137 48.64-60.137 88.96c0 53.12 42.863 96 95.964 96h11.739l42.207-42.622l-53.946.168c-29.429 0-53.314-23.893-53.314-53.333c0-21.76 13.222-41.173 33.481-49.28l25.164-10.24l1.493-27.093c2.345-41.174 36.253-73.6 77.411-73.6m54.759 362.666v-97.844l42.67 42.658l30.17-30.169l-94.17-94.168l-94.17 94.168l30.17 30.169l42.663-42.651v97.837z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudUploadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCloudUploadFilledIcon],svg[ix-cloud-upload-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M222.866 64c-64.19 0-116.65 50.347-120.062 113.707c-35.187 14.293-60.137 48.64-60.137 88.96c0 53.12 42.863 96 95.964 96h11.739L256 256l104.257 105.28c26.397-3.733 54.927-15.004 73.729-33.813c47.129-47.147 47.129-123.307 0-170.454c-23.457-23.466-54.166-35.2-85.088-35.2c-7.464 0-14.714.64-21.965 1.92C306.034 87.893 267.436 64 223.079 64zm54.759 405.333v-97.844l42.67 42.658l30.17-30.169l-94.17-94.168l-94.17 94.168l30.17 30.169l42.663-42.651v97.837z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudUploadFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCodeIcon],svg[ix-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m148.418 144.864l30.17 30.17l-80.898 80.915l80.898 80.915l-30.17 30.17L37.333 255.948zm214.978.037l-30.17 30.17l80.899 80.915l-80.899 80.915l30.17 30.17l111.085-111.085zm-94.918-16.759l41.213 11.043l-66.257 247.277l-41.213-11.043z"></svg:path>`,
})
export class IxCodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCodeDocumentCheckIcon],svg[ix-code-document-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M307.503 42.668H85.333v426.667h226.255l-48.761-42.667H128V85.335h161.813L384 179.52v156.892l42.667-55.456V161.831zm129.472 256l32.358 24.302l-115.32 146.365L256 385.603l26.883-29.996l65.269 55.774zM262.24 192.074l20.606 5.522l-33.129 123.639l-20.606-5.521zm-44.487 23.448l-15.086-15.085l-55.543 55.543l55.543 55.542l15.086-15.085l-40.45-40.457zm74.285 0l15.085-15.086l55.544 55.542l-55.544 55.544l-15.085-15.085l40.451-40.459z" clip-rule="evenodd"></svg:path>`,
})
export class IxCodeDocumentCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCodeFunctionIcon],svg[ix-code-function-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m448 64l-21.333 330.667L256 469.333L85.333 394.667L64 64zm-45.504 42.667H109.483l16.746 259.306L256 422.741l129.749-56.768zM278.281 298.719l-21.333 64h-21.334l10.667-64zm-64-170.667v42.667h-21.333v33.83a42.67 42.67 0 0 1-12.497 30.17a42.67 42.67 0 0 1 12.332 26.418l.165 3.751v33.831h21.333v42.666h-21.333c-22.493 0-40.921-17.405-42.55-39.482l-.117-3.184v-33.831l-21.333-21.337v-17.686l21.333-21.316v-33.83c0-22.494 17.405-40.921 39.482-42.55l3.185-.117zm106.667 0c22.493 0 40.921 17.405 42.549 39.482l.117 3.185v33.83l21.334 21.338v17.664l-21.334 21.337v33.831c0 22.493-17.405 40.92-39.482 42.549l-3.184.117h-21.334v-42.666h21.334v-33.831a42.66 42.66 0 0 1 9.961-27.4l2.535-2.769a42.67 42.67 0 0 1-12.331-26.419l-.165-3.751v-33.83h-21.334v-42.667zm-64 106.667c11.782 0 21.333 9.551 21.333 21.333s-9.551 21.333-21.333 21.333s-21.334-9.551-21.334-21.333s9.552-21.333 21.334-21.333"></svg:path>`,
})
export class IxCodeFunctionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCodeScriptIcon],svg[ix-code-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m279.376 121.305l40.477 13.492l-85.333 256l-40.478-13.492zm99.999 45.01l89.752 89.752l-89.752 89.751l-30.17-30.17l59.565-59.581l-59.565-59.582zm-246.87-.014l30.169 30.17l-59.573 59.572l59.573 59.591l-30.169 30.17l-89.752-89.752z"></svg:path>`,
})
export class IxCodeScriptIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCoffeeIcon],svg[ix-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 170.666v42.666h21.334c35.346 0 64 28.654 64 64v21.334c0 35.346-28.654 64-64 64L384 362.665v21.334c0 47.129-38.205 85.334-85.333 85.334H192c-47.128 0-85.333-38.205-85.333-85.334V170.666zm-42.666 42.667h-192v170.666c0 22.493 17.405 40.921 39.482 42.55l3.184.117h106.667c23.564 0 42.667-19.103 42.667-42.667zm64 42.666H384v64h21.334c11.782 0 21.333-9.551 21.333-21.333v-21.333c0-11.783-9.551-21.334-21.333-21.334M167.624 40.93c22.083 12.75 29.649 40.987 16.9 63.07c-3.914 6.777-1.591 15.443 5.186 19.356l-16 27.712c-22.083-12.748-29.65-40.986-16.9-63.068c3.914-6.777 1.591-15.443-5.186-19.356zm64 0c22.083 12.75 29.649 40.987 16.9 63.07c-3.913 6.777-1.591 15.443 5.186 19.356l-16 27.712c-22.083-12.748-29.65-40.986-16.9-63.068c3.913-6.777 1.591-15.443-5.186-19.356zm64 0c22.083 12.75 29.649 40.987 16.9 63.07c-3.913 6.777-1.591 15.443 5.186 19.356l-16 27.712c-22.083-12.748-29.65-40.986-16.9-63.068c3.913-6.777 1.591-15.443-5.186-19.356z"></svg:path>`,
})
export class IxCoffeeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCoffeeEmptyIcon],svg[ix-coffee-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 170.667v42.666h21.334c35.346 0 64 28.654 64 64v21.334c0 35.346-28.654 64-64 64H384V384c0 47.129-38.205 85.334-85.333 85.334H192c-47.128 0-85.333-38.205-85.333-85.334V170.667zm-42.666 42.667h-192V384c0 22.493 17.405 40.921 39.482 42.55l3.184.117h106.667c23.564 0 42.667-19.103 42.667-42.667zm64 42.666H384v64h21.334c11.782 0 21.333-9.55 21.333-21.333v-21.333c0-11.782-9.551-21.334-21.333-21.334"></svg:path>`,
})
export class IxCoffeeEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCoffeeEmptyFilledIcon],svg[ix-coffee-empty-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 170.667v42.666h21.334c35.346 0 64 28.654 64 64v21.334c0 35.346-28.654 64-64 64H384V384c0 47.129-38.205 85.334-85.333 85.334H192c-47.128 0-85.333-38.205-85.333-85.334V170.667zm-42.666 42.667h-192v149.333h192zm64 42.666H384v64h21.334c11.782 0 21.333-9.55 21.333-21.333v-21.333c0-11.782-9.551-21.334-21.333-21.334"></svg:path>`,
})
export class IxCoffeeEmptyFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCoffeeFilledIcon],svg[ix-coffee-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 170.666v42.666h21.334c35.346 0 64 28.654 64 64v21.334c0 35.346-28.654 64-64 64L384 362.665v21.334c0 47.129-38.205 85.334-85.333 85.334H192c-47.128 0-85.333-38.205-85.333-85.334V170.666zm21.334 85.333H384v64h21.334c11.782 0 21.333-9.551 21.333-21.333v-21.333c0-11.783-9.551-21.334-21.333-21.334M167.624 40.93c22.083 12.75 29.649 40.987 16.9 63.07c-3.914 6.777-1.591 15.443 5.186 19.356l-16 27.712c-22.083-12.748-29.65-40.986-16.9-63.068c3.914-6.777 1.591-15.443-5.186-19.356zm64 0c22.083 12.75 29.649 40.987 16.9 63.07c-3.913 6.777-1.591 15.443 5.186 19.356l-16 27.712c-22.083-12.748-29.65-40.986-16.9-63.068c3.913-6.777 1.591-15.443-5.186-19.356zm64 0c22.083 12.75 29.649 40.987 16.9 63.07c-3.913 6.777-1.591 15.443 5.186 19.356l-16 27.712c-22.083-12.748-29.65-40.986-16.9-63.068c3.913-6.777 1.591-15.443-5.186-19.356z"></svg:path>`,
})
export class IxCoffeeFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCogwheelIcon],svg[ix-cogwheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M332.792 42.667v51.541a178 178 0 0 1 24.96 14.379l7.637-4.437l36.97-21.312l21.334 36.928l34.112 59.136l21.333 36.949l-36.928 21.333l-7.637 4.374c.427 4.842.64 9.642.64 14.442s-.213 9.6-.64 14.443l7.637 4.373l36.928 21.334l-21.333 36.949l-34.112 59.136l-21.333 36.928l-36.971-21.312l-7.637-4.437a178 178 0 0 1-24.96 14.378v51.542H179.213v-51.542a178 178 0 0 1-24.96-14.378l-7.659 4.437l-36.949 21.312l-21.333-36.928l-34.134-59.136l-21.333-36.95l36.95-21.333l7.615-4.373A173 173 0 0 1 76.792 256c0-4.8.213-9.6.618-14.442l-7.616-4.374l-36.949-21.333l21.333-36.95l34.134-59.135l21.333-36.928l36.95 21.312l7.658 4.437a178 178 0 0 1 24.96-14.379V42.667zm-42.667 42.667H221.88v38.613c-24.384 6.272-46.144 19.008-63.254 36.437L125.261 141.1l-34.133 59.136l33.408 19.285c-3.2 11.627-5.078 23.83-5.078 36.48c0 12.651 1.878 24.854 5.078 36.48l-33.408 19.286l34.133 59.136l33.365-19.286c17.11 17.43 38.87 30.166 63.254 36.438v38.613h68.245v-38.613c24.384-6.272 46.144-19.008 63.253-36.438l33.344 19.286l34.155-59.136l-33.408-19.286c3.2-11.626 5.077-23.829 5.077-36.48s-1.877-24.853-5.077-36.48l33.408-19.285l-34.155-59.136l-33.344 19.285c-17.109-17.429-38.869-30.165-63.253-36.437zM256 170.667c47.132 0 85.334 38.202 85.334 85.333S303.132 341.334 256 341.334c-47.131 0-85.333-38.202-85.333-85.334c0-47.131 38.202-85.333 85.333-85.333m0 42.667c-23.567 0-42.666 19.1-42.666 42.666c0 23.568 19.099 42.667 42.666 42.667s42.667-19.1 42.667-42.667s-19.1-42.666-42.667-42.666"></svg:path>`,
})
export class IxCogwheelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCogwheelFilledIcon],svg[ix-cogwheel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m320 42.667l.003 49.332a175.8 175.8 0 0 1 45.988 26.596l42.761-24.687l64 110.851l-42.743 24.68A177.4 177.4 0 0 1 432 256c0 9.03-.68 17.9-1.991 26.562l42.743 24.68l-64 110.85l-42.76-24.687a175.8 175.8 0 0 1-45.99 26.596L320 469.334H192v-49.332a175.8 175.8 0 0 1-45.99-26.596l-42.761 24.687l-64-110.852l42.743-24.678A177.4 177.4 0 0 1 80.001 256c0-9.029.679-17.9 1.99-26.562l-42.743-24.679l64-110.851l42.76 24.687A175.8 175.8 0 0 1 191.999 92L192 42.667zM256 192c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.653 64-64c0-35.346-28.654-64-64-64"></svg:path>`,
})
export class IxCogwheelFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCoinIcon],svg[ix-coin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 43.839c117.821 0 213.333 95.512 213.333 213.333S373.821 470.505 256 470.505S42.667 374.993 42.667 257.172S138.179 43.838 256 43.838m0 42.666c-94.257 0-170.667 76.41-170.667 170.667c0 94.256 76.41 170.667 170.667 170.667s170.667-76.411 170.667-170.667c0-94.257-76.41-170.667-170.667-170.667m21.333 20.162v43.838H320v42.667h-64c-35.346 0-64 28.654-64 64c0 34.084 26.644 61.945 60.24 63.891l3.76.109h64v42.667h-42.667v41.494h-42.67v-43.629c-48.686-9.885-85.33-52.929-85.33-104.532s36.644-94.648 85.33-104.532v-45.973z"></svg:path>`,
})
export class IxCoinIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCoinFilledIcon],svg[ix-coin-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 43.839c117.821 0 213.333 95.512 213.333 213.333S373.821 470.505 256 470.505S42.667 374.993 42.667 257.172S138.179 43.838 256 43.838m21.333 62.828h-42.67v45.973c-48.686 9.884-85.33 52.929-85.33 104.532s36.644 94.647 85.33 104.532v43.629h42.67v-41.494H320v-42.667h-64l-3.76-.109c-33.596-1.946-60.24-29.807-60.24-63.891c0-35.346 28.654-64 64-64h64v-42.667h-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxCoinFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCoinStackIcon],svg[ix-coin-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M70.993 307.529C66.436 291.131 64 273.85 64 256c0-106.039 85.961-192 192-192c17.85 0 35.131 2.436 51.529 6.993c-26.996-17.9-59.378-28.326-94.196-28.326c-94.256 0-170.666 76.41-170.666 170.666c0 34.818 10.426 67.2 28.326 94.196m35.674-8.862c0 17.849 2.435 35.13 6.993 51.528C95.76 323.2 85.333 290.817 85.333 256c0-94.257 76.41-170.667 170.667-170.667c34.817 0 67.2 10.426 94.195 28.327c-16.398-4.558-33.679-6.993-51.528-6.993c-106.039 0-192 85.961-192 192m320 0c0 70.692-57.308 128-128 128s-128-57.308-128-128s57.307-128 128-128c70.692 0 128 57.307 128 128m42.666 0c0 94.256-76.41 170.666-170.666 170.666c-94.257 0-170.667-76.41-170.667-170.666C128 204.41 204.41 128 298.667 128c94.256 0 170.666 76.41 170.666 170.667m-117.333-64h-32V192h-42.667v42.667c-35.346 0-64 28.653-64 64c0 35.346 28.654 64 64 64v42.666H320v-42.666h32V320h-74.667C265.551 320 256 310.449 256 298.667s9.551-21.334 21.333-21.334H352z" clip-rule="evenodd"></svg:path>`,
})
export class IxCoinStackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCoinStackFilledIcon],svg[ix-coin-stack-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 256c0 17.85 2.436 35.131 6.993 51.529c-17.9-26.996-28.326-59.378-28.326-94.196c0-94.256 76.41-170.666 170.666-170.666c34.818 0 67.2 10.426 94.196 28.326C291.131 66.436 273.85 64 256 64C149.961 64 64 149.961 64 256m49.66 94.195c-4.558-16.398-6.993-33.679-6.993-51.528c0-106.039 85.961-192 192-192c17.849 0 35.13 2.435 51.528 6.993C323.2 95.76 290.817 85.333 256 85.333c-94.257 0-170.667 76.41-170.667 170.667c0 34.817 10.426 67.2 28.327 94.195m355.673-51.528c0 94.256-76.41 170.666-170.666 170.666c-94.257 0-170.667-76.41-170.667-170.666C128 204.41 204.41 128 298.667 128c94.256 0 170.666 76.41 170.666 170.667m-117.333-64h-32V192h-42.667v42.667c-35.346 0-64 28.653-64 64c0 35.346 28.654 64 64 64v42.666H320v-42.666h32V320h-74.667C265.551 320 256 310.449 256 298.667s9.551-21.334 21.333-21.334H352z" clip-rule="evenodd"></svg:path>`,
})
export class IxCoinStackFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCoinsIcon],svg[ix-coins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M188.927 111.141c-59.602 15.534-103.594 69.726-103.594 134.192c0 6.528.451 12.951 1.324 19.239A205 205 0 0 0 85.317 288c0 36.133 9.456 70.059 26.028 99.436c-41.844-33.218-68.678-84.526-68.678-142.103C42.667 145.186 123.852 64 224 64c31.913 0 61.9 8.244 87.948 22.718a205 205 0 0 0-23.948-1.4c-35.985 0-69.78 9.377-99.073 25.823M288 426.667c76.583 0 138.667-62.084 138.667-138.667S364.583 149.333 288 149.333S149.333 211.417 149.333 288S211.417 426.667 288 426.667m0 42.666c100.148 0 181.333-81.185 181.333-181.333S388.148 106.667 288 106.667S106.667 187.852 106.667 288S187.852 469.333 288 469.333m-10.667-224h64v-42.666H320v-32h-42.667v32C230.205 202.667 192 240.872 192 288s38.205 85.333 85.333 85.333v32H320v-32h21.333v-42.666h-64c-23.564 0-42.666-19.103-42.666-42.667s19.102-42.667 42.666-42.667" clip-rule="evenodd"></svg:path>`,
})
export class IxCoinsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCoinsFilledIcon],svg[ix-coins-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 245.333c0-64.466 43.992-118.658 103.594-134.192C218.22 94.695 252.015 85.318 288 85.318c8.103 0 16.094.475 23.948 1.4C285.9 72.244 255.913 64 224 64C123.852 64 42.667 145.186 42.667 245.333c0 57.577 26.834 108.885 68.678 142.103C94.773 358.059 85.318 324.133 85.318 288c0-7.924.454-15.741 1.34-23.428a140 140 0 0 1-1.325-19.239m202.667 224c100.148 0 181.333-81.185 181.333-181.333S388.148 106.667 288 106.667S106.667 187.852 106.667 288S187.852 469.333 288 469.333m-10.667-298.666H320v32h21.333v42.666h-64c-23.564 0-42.666 19.103-42.666 42.667s19.102 42.667 42.666 42.667h64v42.666H320v32h-42.667v-32C230.205 373.333 192 335.128 192 288s38.205-85.333 85.333-85.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxCoinsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCombineIcon],svg[ix-combine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 85.333v85.333h-42.667V128h-64v256h64v-42.667H192v85.333H42.667V85.333zm277.334 0v341.333H320v-85.333h42.666l.001 42.667h64V128h-64v42.666H320V85.333zm-192 64l-.001 85.333h85.334v42.667h-85.334v85.333h-42.666v-85.333h-85.333v-42.667h85.333v-85.333z"></svg:path>`,
})
export class IxCombineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCommentAltIcon],svg[ix-comment-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 85.334v298.667H341.333v85.333L192 384.001H64V85.334zm-42.667 42.667H106.667v213.333h96.664l95.336 54.464v-54.464h106.666zm-256 42.666h213.334v42.667H149.333zM256 256.001H149.333v42.666H256z" clip-rule="evenodd"></svg:path>`,
})
export class IxCommentAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCommentAltFilledIcon],svg[ix-comment-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 384.001V85.334H64v298.667h128l149.333 85.333v-85.333zM149.333 170.667h213.334v42.667H149.333zm0 85.334H256v42.666H149.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxCommentAltFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCommunicationIcon],svg[ix-communication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 64h298.666v64h-42.666v-21.333H85.333V256H128v42.667l21.333-16V336l-64 48v-85.333H42.667zm128 85.333h298.666V384h-42.666v85.333L312.889 384H170.667zm213.333 192h42.667V192H213.333v149.333h113.778L384 384z" clip-rule="evenodd"></svg:path>`,
})
export class IxCommunicationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCommunicationFilledIcon],svg[ix-communication-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 64h298.666v64h-192v208l-64 48v-85.333H42.667zm128 85.333h298.666V384h-42.666v85.333L312.889 384H170.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxCommunicationFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCompactDiscIcon],svg[ix-compact-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 42.667c25.614 0 50.173 4.514 72.926 12.79l.62.226l.358.132l-.978-.358a212 212 0 0 1 25.247 11.091a213 213 0 0 1 22.491 13.498a214 214 0 0 1 23.232 18.456a214.6 214.6 0 0 1 34.01 39.724a214 214 0 0 1 5.053 7.998a212.2 212.2 0 0 1 23.373 55.365a212 212 0 0 1 5.22 26.708a214 214 0 0 1 1.332 13.742a216 216 0 0 1 .445 12.602l.005 1.36c0 117.82-95.513 213.333-213.334 213.333c-25.613 0-50.173-4.514-72.926-12.79l-.658-.241l-.287-.106l.945.347a212 212 0 0 1-25.163-11.048a213 213 0 0 1-22.584-13.548a214 214 0 0 1-23.143-18.377a214.6 214.6 0 0 1-24.338-26.272l-.057-.074a213 213 0 0 1-5.917-7.945a214 214 0 0 1-8.831-13.504a212.2 212.2 0 0 1-21.43-48.458l-.055-.182l-.081-.272l.136.454a212 212 0 0 1-6.699-30.255a213 213 0 0 1-1.995-20.642a216 216 0 0 1-.221-6.893L42.667 256C42.667 138.18 138.18 42.667 256 42.667M320 256c0 35.347-28.653 64-64 64a63.9 63.9 0 0 1-21.878-3.837l-36.463 100.272c18.202 6.62 37.85 10.232 58.341 10.232c94.257 0 170.667-76.41 170.667-170.667zm-125.317 18.395L92.49 305.055a169.8 169.8 0 0 0 17.143 38.765l91.48-54.888a63.7 63.7 0 0 1-6.429-14.537M256 234.667c-11.782 0-21.333 9.551-21.333 21.333s9.551 21.334 21.333 21.334s21.334-9.552 21.334-21.334s-9.552-21.333-21.334-21.333m0-149.333c-94.256 0-170.666 76.41-170.666 170.666H192l.009-1.057C192.574 220.084 221.008 192 256 192a63.9 63.9 0 0 1 21.877 3.837L314.34 95.565c-18.202-6.62-37.849-10.231-58.34-10.231m146.367 82.845l-91.48 54.887a63.7 63.7 0 0 1 6.43 14.539l102.196-30.658a169.8 169.8 0 0 0-17.146-38.768"></svg:path>`,
})
export class IxCompactDiscIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCompactDiscFilledIcon],svg[ix-compact-disc-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m-54.888 246.265l-91.48 54.889c20.005 33.269 51.031 59.157 88.027 72.614l36.463-100.272c-13.874-5.046-25.509-14.755-33.01-27.231M192 255.999L85.334 256c0 17.051 2.5 33.518 7.154 49.054l102.195-30.66A64 64 0 0 1 192 256zm64-21.332c-11.782 0-21.333 9.551-21.333 21.333s9.551 21.334 21.333 21.334s21.334-9.552 21.334-21.334s-9.552-21.333-21.334-21.333m163.513-27.72l-102.196 30.658A64 64 0 0 1 320 255.999l106.667.001c0-17.05-2.5-33.517-7.154-49.053M314.34 95.565l-36.464 100.272c13.874 5.046 25.509 14.754 33.01 27.23l91.48-54.887c-20.004-33.27-51.03-59.158-88.026-72.615"></svg:path>`,
})
export class IxCompactDiscFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCompareIcon],svg[ix-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m313.848 441.686l30.166-30.166l-48.916-48.917h174.235v-42.667H295.098l48.916-48.917l-30.166-30.166l-100.515 100.416zM198.144 70.185l100.523 100.418l-100.523 100.415l-30.166-30.166l48.915-48.916H42.667v-42.667h174.229l-48.918-48.918z" clip-rule="evenodd"></svg:path>`,
})
export class IxCompareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCompoundBlockIcon],svg[ix-compound-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 85.333v149.333h64v42.667h-64v149.334H106.667v-64h-64V320h64V192h-64v-42.667h64v-64zM362.667 128H149.333v256h213.334zm-97.532 42.667q14.193 0 25.827 2.617t26.409 9.25l-12.448 27.92l-.77-.416q-19.245-10.287-36.924-10.287q-21.755 0-33.272 14.891q-12.1 15.589-12.1 41.183q0 26.525 12.682 41.475q12.68 14.949 35.017 14.949q10.121 0 18.614-2.734t20.592-9.947l10.82 29.666l-.886.426q-14.105 6.747-24.709 9.172q-10.935 2.501-26.99 2.501q-24.198 0-40.02-6.98q-22.104-9.772-33.389-30.83q-10.121-18.846-10.121-46.069q0-45.952 28.037-69.57q20.36-17.217 53.631-17.217"></svg:path>`,
})
export class IxCompoundBlockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConfigurationIcon],svg[ix-configuration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m234.67 85.33l-.004 213.338h-21.333v42.666h21.333l.005 85.33h42.666l-.004-85.33h21.333v-42.666h-21.333l.004-213.338zm-128.006 0v85.355H85.331v42.645h21.333v213.333h42.667V213.33h21.333v-42.645h-21.333V85.33zm255.981.004v128h-21.333l.013 42.663h21.333v170.666h42.688V255.997h21.333l-.013-42.663h-21.333l.013-128.004z"></svg:path>`,
})
export class IxConfigurationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConfigureIcon],svg[ix-configure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-42.667 42.667H106.667v298.666h298.666zM129.86 268.108l94.43-86.561l69.812 95.979l59.21-54.248l28.83 31.451l-94.43 86.562l-69.834-96l-59.187 54.27z"></svg:path>`,
})
export class IxConfigureIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConfigureFilledIcon],svg[ix-configure-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zM224.29 181.547l-94.431 86.561l28.83 31.452l59.188-54.269l69.833 96l94.431-86.562l-28.83-31.451l-59.21 54.248z"></svg:path>`,
})
export class IxConfigureFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectedIcon],svg[ix-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m180.575 150.405l15.085 15.085c36.49-36.49 92.839-41.015 134.255-13.577l85.77-85.769l30.17 30.17l-85.769 85.771C387.525 223.501 383 279.85 346.51 316.34l15.085 15.085l-30.17 30.17l-15.085-15.085c-36.49 36.49-92.84 41.015-134.255 13.576l-85.771 85.77l-30.17-30.17l85.77-85.771C124.474 288.499 129 232.15 165.49 195.66l-15.085-15.085zm15.085 75.425c-24.993 24.994-24.993 65.516 0 90.51c24.101 24.1 62.642 24.961 87.774 2.582l2.736-2.582zm30.17-30.17l90.51 90.51c24.993-24.994 24.993-65.516 0-90.51c-24.101-24.1-62.642-24.962-87.774-2.582z"></svg:path>`,
})
export class IxConnectedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectionBulbIcon],svg[ix-connection-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 42.666v32h48l2.171.146c7.1.963 12.72 6.583 13.683 13.683l.146 2.171l-.146 2.171c-.963 7.1-6.583 12.72-13.683 13.683l-2.171.146h-48v42.667h48l2.171.146c7.1.963 12.72 6.583 13.683 13.683l.146 2.171l-.146 2.171c-.963 7.099-6.583 12.719-13.683 13.683l-2.171.146h-48v32h-64l-4.259-.105c-37.866-1.861-69.243-28.404-78.381-63.879l-27.687-.016l-2.804.185a21.33 21.33 0 0 0-12.28 6.063c-7.691 7.69-8.282 19.791-1.775 28.16l1.775 2.01l82.094 82.094a128.5 128.5 0 0 0-26.555 33.786l-85.709-85.71l-2.88-3.072c-22.074-25.139-21.114-63.444 2.88-87.438a64 64 0 0 1 41.028-18.605l4.226-.14l27.681.005c9.12-35.444 40.441-61.977 78.255-63.894l4.391-.111zM256 362.671c.001 14.962 2.568 29.325 7.287 42.672l-9.98.006c-9.138 35.475-40.515 62.018-78.381 63.879l-4.259.105h-64v-32h-48c-8.1 0-14.795-6.02-15.854-13.829l-.146-2.171c0-8.1 6.019-14.795 13.829-15.854l2.17-.146h48.001v-42.667h-48c-8.1 0-14.795-6.019-15.854-13.829l-.146-2.171c0-8.1 6.019-14.794 13.829-15.854l2.17-.146h48.001v-32h64c39.763 0 73.175 27.198 82.646 64.005zm-85.333-21.338h-21.334v85.333h21.334l3.184-.117c20.973-1.547 37.73-18.256 39.353-39.208l.129-3.342l-.117-3.184c-1.547-20.973-18.255-37.73-39.207-39.353zm192-256h-21.334l-3.342.129c-19.787 1.533-35.79 16.565-38.811 35.898l-.396 3.455l-.117 3.184l.129 3.342c1.533 19.788 16.565 35.791 35.898 38.812l3.455.396l3.184.117h21.334zm10.666 170.666h21.334v21.334h-21.334zM448 362.666c0-35.346-28.654-64-64-64s-64 28.654-64 64c0 23.689 12.87 44.372 32 55.438v13.895h64v-13.895c19.13-11.066 32-31.749 32-55.438m-32 96v-10.667h-64v10.667l10.667 10.667h10.666c0 5.891 4.776 10.666 10.667 10.666s10.667-4.775 10.667-10.666h10.666zm65.71-51.904l-18.476-10.666l-10.666 18.475l18.475 10.667zm-29.142-96l18.475-10.666l10.667 18.475l-18.476 10.667zm-137.134 0l-18.476-10.666l-10.666 18.475l18.475 10.667zm-29.142 96l18.475-10.666l10.667 18.475l-18.476 10.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxConnectionBulbIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectionFailIcon],svg[ix-connection-fail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 74.668v-32h-64l-4.391.111c-37.814 1.917-69.135 28.45-78.255 63.894l-27.681-.005l-4.226.14a64 64 0 0 0-41.028 18.605c-23.994 23.994-24.954 62.299-2.88 87.438l2.88 3.072l87.92 87.921a107.3 107.3 0 0 1 30.17-30.17l-87.92-87.921l-1.775-2.01c-6.507-8.369-5.916-20.47 1.775-28.16a21.33 21.33 0 0 1 12.28-6.063l2.804-.185l27.687.016c9.138 35.475 40.515 62.018 78.381 63.879l4.259.105h64v-32h48l2.171-.146c7.1-.964 12.72-6.584 13.683-13.683l.146-2.171l-.146-2.171c-.963-7.1-6.583-12.72-13.683-13.683l-2.171-.146h-48v-42.667h48l2.171-.146c7.1-.963 12.72-6.583 13.683-13.683l.146-2.171l-.146-2.171c-.963-7.1-6.583-12.72-13.683-13.683l-2.171-.146zm-152.02 288.005H256c.001 15.172 3.169 29.604 8.88 42.671l-11.573.007c-9.138 35.475-40.515 62.018-78.381 63.879l-4.259.105h-64v-32h-48c-8.1 0-14.795-6.02-15.854-13.829l-.146-2.171c0-8.101 6.019-14.795 13.829-15.854l2.17-.146h48.001v-42.667h-48c-8.1 0-14.795-6.019-15.854-13.829l-.146-2.171c0-8.1 6.019-14.795 13.829-15.854l2.17-.146h48.001v-32h64c39.763 0 73.175 27.198 82.646 64.005m-103.98-21.338h21.334l3.342.129c20.952 1.623 37.66 18.38 39.207 39.353l.117 3.184l-.129 3.342c-1.623 20.952-18.38 37.661-39.353 39.208l-3.184.117h-21.334zm192-256h21.334v85.333h-21.334l-3.184-.117l-3.455-.396c-19.333-3.021-34.365-19.024-35.898-38.812l-.129-3.342l.117-3.184l.396-3.455c3.021-19.333 19.024-34.365 38.811-35.898zm32 192c-53.019 0-96 42.98-96 96c0 53.019 42.981 96 96 96c53.02 0 96-42.981 96-96c0-53.02-42.98-96-96-96m-18.855 96.001l-38.572-38.572l18.856-18.856l38.572 38.571l38.572-38.571l18.856 18.856l-38.571 38.572l38.571 38.572l-18.856 18.856l-38.572-38.572l-38.572 38.572l-18.856-18.856z" clip-rule="evenodd"></svg:path>`,
})
export class IxConnectionFailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectionLocalIcon],svg[ix-connection-local-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m480 149.333l-85.333 213.334H117.333l34.134-85.334l-29.188.023c-6.88 11.876-19.321 20.128-33.761 21.194l-3.185.117c-23.564 0-42.666-19.103-42.666-42.667s19.102-42.667 42.666-42.667c15.792 0 29.581 8.58 36.958 21.332l46.242.002l34.134-85.334zM416.981 192h-185.45l-51.2 128h185.45z" clip-rule="evenodd"></svg:path>`,
})
export class IxConnectionLocalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectionSignalIcon],svg[ix-connection-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 149.333c58.91 0 106.666 47.757 106.666 106.667s-47.756 106.667-106.666 106.667h-85.334c-51.595 0-94.635-36.633-104.527-85.308l-50.527-.003c-7.381 12.741-21.162 21.311-36.946 21.311c-23.564 0-42.666-19.103-42.666-42.667s19.102-42.667 42.666-42.667c15.792 0 29.581 8.58 36.958 21.332l50.51-.002c9.885-48.686 52.929-85.33 104.532-85.33zm0 42.667h-85.334c-35.346 0-64 28.654-64 64c0 34.084 26.644 61.945 60.24 63.891l3.76.109h85.334c35.346 0 64-28.654 64-64c0-34.084-26.644-61.945-60.24-63.891z" clip-rule="evenodd"></svg:path>`,
})
export class IxConnectionSignalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectionSuccessIcon],svg[ix-connection-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 74.668v-32h-64l-4.391.111c-37.814 1.917-69.135 28.45-78.255 63.894l-27.681-.005l-4.226.14a64 64 0 0 0-41.028 18.605c-23.994 23.994-24.954 62.299-2.88 87.438l2.88 3.072l87.92 87.921a107.3 107.3 0 0 1 30.17-30.17l-87.92-87.921l-1.775-2.01c-6.507-8.369-5.916-20.47 1.775-28.16a21.33 21.33 0 0 1 12.28-6.063l2.804-.185l27.687.016c9.138 35.475 40.515 62.018 78.381 63.879l4.259.105h64v-32h48l2.171-.146c7.1-.964 12.72-6.584 13.683-13.683l.146-2.171l-.146-2.171c-.963-7.1-6.583-12.72-13.683-13.683l-2.171-.146h-48v-42.667h48l2.171-.146c7.1-.963 12.72-6.583 13.683-13.683l.146-2.171l-.146-2.171c-.963-7.1-6.583-12.72-13.683-13.683l-2.171-.146zm-152.02 288.005H256c.001 15.172 3.169 29.604 8.88 42.671l-11.573.007c-9.138 35.475-40.515 62.018-78.381 63.879l-4.259.105h-64v-32h-48c-8.1 0-14.795-6.02-15.854-13.829l-.146-2.171c0-8.101 6.019-14.795 13.829-15.854l2.17-.146h48.001v-42.667h-48c-8.1 0-14.795-6.019-15.854-13.829l-.146-2.171c0-8.1 6.019-14.794 13.829-15.854l2.17-.146h48.001v-32h64c39.763 0 73.175 27.198 82.646 64.005m-103.98-21.338h21.334l3.342.129c20.952 1.623 37.66 18.38 39.207 39.353l.117 3.184l-.129 3.342c-1.623 20.952-18.38 37.661-39.353 39.208l-3.184.117h-21.334zm192-256h21.334v85.333h-21.334l-3.184-.117l-3.455-.396c-19.333-3.021-34.365-19.024-35.898-38.812l-.129-3.342l.117-3.184l.396-3.455c3.021-19.333 19.024-34.365 38.811-35.898zm32 192c-53.019 0-96 42.98-96 96c0 53.019 42.981 96 96 96c53.02 0 96-42.981 96-96c0-53.02-42.98-96-96-96m62.763 62.762l-84.095 84.095l-41.428-41.428l18.856-18.856l22.572 22.571l65.239-65.238z" clip-rule="evenodd"></svg:path>`,
})
export class IxConnectionSuccessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectionsIcon],svg[ix-connections-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405.333 42.666v32h48l2.171.146c7.1.963 12.72 6.583 13.683 13.683l.146 2.171l-.146 2.171c-.963 7.1-6.583 12.72-13.683 13.683l-2.171.146h-48v42.667h48l2.171.146c7.1.963 12.72 6.583 13.683 13.683l.146 2.171l-.146 2.171c-.963 7.099-6.583 12.719-13.683 13.683l-2.171.146h-48v32h-64l-4.259-.105c-37.866-1.861-69.243-28.404-78.381-63.879l-27.687-.016l-2.804.185a21.33 21.33 0 0 0-12.28 6.063c-7.691 7.69-8.282 19.791-1.775 28.16l1.775 2.01l110.326 110.327l2.891 3.087a64 64 0 0 1 15.855 42.168c0 34.084-26.644 61.944-60.24 63.891l-3.76.109l-27.687.016c-9.138 35.475-40.515 62.018-78.381 63.879l-4.259.105h-64v-32h-48c-8.1 0-14.795-6.02-15.854-13.829l-.146-2.171c0-8.1 6.019-14.795 13.829-15.854l2.17-.146h48.001v-42.667h-48c-8.1 0-14.795-6.019-15.854-13.829l-.146-2.171c0-8.1 6.019-14.794 13.829-15.854l2.17-.146h48.001v-32h64c39.763 0 73.175 27.198 82.646 64.005l27.681-.005l2.487-.143c10.61-1.233 18.846-10.25 18.846-21.19a21.34 21.34 0 0 0-4.396-12.972l-1.852-2.113l-110.327-110.327l-2.88-3.072c-22.074-25.139-21.114-63.444 2.88-87.438a64 64 0 0 1 41.028-18.605l4.226-.14l27.681.005c9.12-35.444 40.441-61.977 78.255-63.894l4.391-.111zM170.667 341.333h-21.334v85.333h21.334l3.184-.117c20.973-1.547 37.73-18.256 39.353-39.208l.129-3.342l-.117-3.184c-1.547-20.973-18.255-37.73-39.207-39.353zm192-256h-21.334l-3.342.129c-19.787 1.533-35.79 16.565-38.811 35.898l-.396 3.455l-.117 3.184l.129 3.342c1.533 19.788 16.565 35.791 35.898 38.812l3.455.396l3.184.117h21.334z"></svg:path>`,
})
export class IxConnectionsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectionsSettingsIcon],svg[ix-connections-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 42.666v32h48l2.171.146c7.1.963 12.72 6.583 13.683 13.683l.146 2.171l-.146 2.171c-.963 7.1-6.583 12.72-13.683 13.683l-2.171.146h-48v42.667h48l2.171.146c7.1.963 12.72 6.583 13.683 13.683l.146 2.171l-.146 2.171c-.963 7.099-6.583 12.719-13.683 13.683l-2.171.146h-48v32h-64l-4.259-.105c-37.866-1.861-69.243-28.404-78.381-63.879l-27.687-.016l-2.804.185a21.33 21.33 0 0 0-12.28 6.063c-7.691 7.69-8.282 19.791-1.775 28.16l1.775 2.01l72.579 72.579a128.7 128.7 0 0 0-30.17 30.17l-72.579-72.579l-2.88-3.072c-22.074-25.139-21.114-63.444 2.88-87.438a64 64 0 0 1 41.028-18.605l4.226-.14l27.681.005c9.12-35.444 40.441-61.977 78.255-63.894l4.391-.111zm-170.666 320c0 20.556 4.845 39.979 13.456 57.192c-12.984 27.998-40.701 47.773-73.197 49.37l-4.259.105h-64v-32h-48c-8.1 0-14.795-6.02-15.854-13.829l-.146-2.171c0-8.1 6.019-14.795 13.829-15.854l2.17-.146h48.001v-42.667h-48c-8.1 0-14.795-6.019-15.854-13.829l-.146-2.171c0-8.1 6.019-14.794 13.829-15.854l2.17-.146h48.001v-32h64c27.571 0 52.089 13.076 67.689 33.365a128.3 128.3 0 0 0-3.689 30.635m-64-21.333h-21.334v85.333h21.334l3.184-.117c20.973-1.547 37.73-18.256 39.353-39.208l.129-3.342l-.117-3.184c-1.547-20.973-18.255-37.73-39.207-39.353zm192-256h-21.334l-3.342.129c-19.787 1.533-35.79 16.565-38.811 35.898l-.396 3.455l-.117 3.184l.129 3.342c1.533 19.788 16.565 35.791 35.898 38.812l3.455.396l3.184.117h21.334zm-29.746 170.666h59.259v22.836a88.8 88.8 0 0 1 28.134 16.268l19.798-11.43l29.629 51.32l-19.784 11.422a89.4 89.4 0 0 1 1.482 16.251c0 5.551-.509 10.982-1.482 16.251l19.784 11.422l-29.63 51.32l-19.797-11.429a88.8 88.8 0 0 1-28.134 16.267v22.836h-59.259v-22.836a88.8 88.8 0 0 1-28.135-16.267l-19.797 11.429l-29.63-51.32l19.785-11.422a89.3 89.3 0 0 1-1.483-16.251c0-5.55.509-10.982 1.483-16.251l-19.785-11.422l29.63-51.32l19.797 11.43a88.8 88.8 0 0 1 28.135-16.268zm65.185 106.667c0 19.637-15.919 35.556-35.556 35.556s-35.555-15.919-35.555-35.556s15.918-35.556 35.555-35.556s35.556 15.919 35.556 35.556" clip-rule="evenodd"></svg:path>`,
})
export class IxConnectionsSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectivityIcon],svg[ix-connectivity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 42.668c23.564 0 42.667 19.103 42.667 42.667S343.564 128 320 128a43 43 0 0 1-6.671-.518L297.6 170.668h43.733v115.413l48.191 12.908c7.331-12.93 21.218-21.654 37.143-21.654c23.564 0 42.666 19.102 42.666 42.666s-19.102 42.667-42.666 42.667S384 343.565 384 320.001l.021-.405l-42.688-11.435v33.174H304.96l11.489 42.812a44 44 0 0 1 3.551-.146c23.564 0 42.667 19.103 42.667 42.667S343.564 469.335 320 469.335s-42.667-19.103-42.667-42.667c0-14.77 7.505-27.787 18.91-35.446l-13.363-49.887H170.667v-18.688l-42.844 14.771q.176 1.935.177 3.917c0 23.564-19.102 42.666-42.667 42.666c-23.564 0-42.666-19.102-42.666-42.666c0-23.565 19.102-42.667 42.666-42.667c14.667 0 27.605 7.4 35.285 18.67l50.049-17.241V183.703l-41.059-41.055a42.47 42.47 0 0 1-22.941 6.687C83.103 149.335 64 130.232 64 106.668s19.103-42.667 42.667-42.667s42.666 19.103 42.666 42.667a42.5 42.5 0 0 1-5.168 20.372l43.632 43.628h87.104l18.836-51.705c-9.985-7.81-16.404-19.97-16.404-33.628c0-23.564 19.103-42.667 42.667-42.667m0 362.667c-11.782 0-21.333 9.551-21.333 21.333s9.551 21.333 21.333 21.333s21.333-9.551 21.333-21.333s-9.551-21.333-21.333-21.333M85.333 320.001c-11.782 0-21.333 9.552-21.333 21.334s9.551 21.333 21.333 21.333s21.334-9.551 21.334-21.333s-9.552-21.334-21.334-21.334m341.334-21.333c-11.782 0-21.334 9.551-21.334 21.333s9.552 21.334 21.334 21.334S448 331.783 448 320.001s-9.551-21.333-21.333-21.333m-128-85.333h-85.334v85.333h85.334zm-192-128c-11.782 0-21.334 9.55-21.334 21.333s9.552 21.333 21.334 21.333S128 118.45 128 106.668s-9.551-21.333-21.333-21.333M320 64c-11.782 0-21.333 9.552-21.333 21.334s9.551 21.333 21.333 21.333s21.333-9.551 21.333-21.333S331.782 64 320 64" clip-rule="evenodd"></svg:path>`,
})
export class IxConnectivityIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectorIcon],svg[ix-connector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M245.333 64c53.02 0 96 42.98 96 96c0 51.504-40.56 93.536-91.48 95.896l-4.52.104h-64C151.878 256 128 279.878 128 309.333c0 28.277 22.006 51.414 49.827 53.22l3.506.114l77.356-.001c9.36-36.368 42.094-63.353 81.233-63.988l1.411-.011h64v32h64v32h-64v42.666h64v32h-64v32h-64c-39.761 0-73.171-27.194-82.644-63.999h-77.356c-53.019 0-96-42.981-96-96c0-51.505 40.56-93.536 91.481-95.896l4.52-.105h64c29.455 0 53.333-23.878 53.333-53.333c0-28.277-22.006-51.414-49.827-53.22l-3.507-.113H64V64zm117.334 277.333h-21.334l-3.184.117c-21.856 1.613-39.134 19.69-39.477 41.876l-.005.674l.117 3.184c1.612 21.857 19.69 39.134 41.876 39.477l.673.006h21.334z"></svg:path>`,
})
export class IxConnectorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectorChartIcon],svg[ix-connector-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 234.667v42.666H202.667v64c0 10.94 8.236 19.958 18.845 21.19l2.488.144l34.689-.001c9.379-36.437 42.217-63.454 81.454-63.991l1.19-.008h64v31.999h64v32h-64v42.667h64v32h-64v32h-64c-39.76 0-73.17-27.194-82.644-63.999H224c-34.084 0-61.944-26.644-63.891-60.24l-.109-3.76v-64H42.667v-42.667zm42.667 106.666h-21.333l-3.185.117c-21.856 1.613-39.133 19.69-39.477 41.876l-.005.674l.117 3.184c1.613 21.857 19.69 39.134 41.876 39.477l.674.006h21.333zm-128-256v128H192v-128zm64 21.334v106.666H256V106.667zm-128 21.333v85.333H128V128zm-64-64v149.333H64V64z"></svg:path>`,
})
export class IxConnectorChartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectorChartFilledIcon],svg[ix-connector-chart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.333 64v213.333H202.667v64c0 10.94 8.235 19.958 18.845 21.19l2.488.144l34.689-.001c9.378-36.437 42.217-63.454 81.453-63.991l1.191-.008h64v31.999h64v32h-64v42.667h64v32h-64v32h-64c-39.761 0-73.171-27.194-82.644-63.999H224c-34.084 0-61.945-26.644-63.891-60.24l-.109-3.76v-64H64V64zm-96 42.667h-32v128h32zm64 21.333h-32v106.667h32zm-128 21.333h-32v85.334h32zm-64-64h-32v149.334h32z"></svg:path>`,
})
export class IxConnectorChartFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectorFilledIcon],svg[ix-connector-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M245.333 64c53.02 0 96 42.98 96 96c0 51.504-40.56 93.536-91.48 95.896l-4.52.104h-64C151.878 256 128 279.878 128 309.333c0 28.277 22.006 51.414 49.827 53.22l3.506.114l77.356-.001c9.36-36.368 42.094-63.353 81.233-63.988l1.411-.011h64v32h64v32h-64v42.666h64v32h-64v32h-64c-39.761 0-73.171-27.194-82.644-63.999h-77.356c-53.019 0-96-42.981-96-96c0-51.505 40.56-93.536 91.481-95.896l4.52-.105h64c29.455 0 53.333-23.878 53.333-53.333c0-28.277-22.006-51.414-49.827-53.22l-3.507-.113H64V64z"></svg:path>`,
})
export class IxConnectorFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectorHexIcon],svg[ix-connector-hex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m170.667 42.667l128 73.9V264.37L192 325.953v15.38c0 10.941 8.236 19.958 18.846 21.19l2.488.144h45.355c9.378-36.437 42.217-63.455 81.454-63.992l1.19-.008h64v32h64v32h-64v42.666h64v32h-64v32h-64c-39.76 0-73.17-27.194-82.644-63.998l-45.355-.001c-34.084 0-61.945-26.644-63.892-60.24l-.108-3.76l-.001-15.381L42.667 264.37V116.568zm192 298.667h-21.333l-3.185.117c-21.856 1.612-39.133 19.69-39.477 41.876l-.005.673l.117 3.185c1.613 21.856 19.69 39.133 41.876 39.477l.674.005h21.333zm-192-249.408l-85.333 49.28v98.538l85.333 49.259L256 239.723v-98.517z"></svg:path>`,
})
export class IxConnectorHexIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectorHexFilledIcon],svg[ix-connector-hex-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m170.667 42.667l128 73.9V264.37L192 325.953v15.38c0 10.941 8.236 19.958 18.846 21.19l2.488.144h45.355c9.378-36.437 42.217-63.455 81.454-63.992l1.19-.008h64v32h64v32h-64v42.666h64v32h-64v32h-64c-39.76 0-73.17-27.194-82.644-63.998l-45.355-.001c-34.084 0-61.945-26.644-63.892-60.24l-.108-3.76l-.001-15.381L42.667 264.37V116.568z"></svg:path>`,
})
export class IxConnectorHexFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectorRectIcon],svg[ix-connector-rect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 64v213.333H192v64c0 10.94 8.236 19.958 18.845 21.19l2.488.144l45.356-.001c9.378-36.437 42.217-63.454 81.453-63.991l1.191-.008h64v31.999h48c8.732 0 15.83 6.995 15.997 15.686l.003.315c0 8.836-7.163 16-16 16l-48-.001v42.667h48c8.732 0 15.83 6.994 15.997 15.685l.003.315c0 8.837-7.163 16-16 16h-48v32h-64c-39.761 0-73.171-27.194-82.644-63.999h-45.356c-34.084 0-61.944-26.644-63.891-60.24l-.109-3.76v-64.001H64V64zm85.334 277.333h-21.334l-3.184.117c-21.856 1.613-39.134 19.69-39.477 41.876l-.005.674l.117 3.184c1.612 21.857 19.69 39.134 41.876 39.477l.673.006h21.334zm-128-234.666h-128v128h128z"></svg:path>`,
})
export class IxConnectorRectIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectorRectFilledIcon],svg[ix-connector-rect-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 64v213.333H192v64c0 10.94 8.236 19.958 18.845 21.19l2.488.144l45.356-.001c9.378-36.437 42.217-63.454 81.453-63.991l1.191-.008h64v31.999h48c8.732 0 15.83 6.995 15.997 15.686l.003.315c0 8.836-7.163 16-16 16l-48-.001v42.667h48c8.732 0 15.83 6.994 15.997 15.685l.003.315c0 8.837-7.163 16-16 16h-48v32h-64c-39.761 0-73.171-27.194-82.644-63.999h-45.356c-34.084 0-61.944-26.644-63.891-60.24l-.109-3.76v-64.001H64V64z"></svg:path>`,
})
export class IxConnectorRectFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectorRhombIcon],svg[ix-connector-rhomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 42.667L341.334 192L213.333 320v21.334c0 10.94 8.236 19.957 18.846 21.19l2.488.143h24.022c9.378-36.437 42.217-63.455 81.454-63.992l1.19-.008h64v32h64v32h-64v42.666h64v32h-64v32h-64c-39.76 0-73.17-27.194-82.644-63.998l-24.022-.001c-34.084 0-61.945-26.644-63.891-60.24l-.109-3.76V320l-128-128zm170.667 298.667h-21.333l-3.185.117c-21.856 1.612-39.133 19.69-39.477 41.876l-.005.673l.117 3.185c1.613 21.856 19.69 39.133 41.876 39.477l.674.005h21.333zM192 103.019L103.02 192L192 280.982L280.982 192z"></svg:path>`,
})
export class IxConnectorRhombIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConnectorRhombFilledIcon],svg[ix-connector-rhomb-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 42.667L341.334 192L213.333 320v21.334c0 10.94 8.236 19.957 18.846 21.19l2.488.143h24.022c9.378-36.437 42.217-63.455 81.454-63.992l1.19-.008h64v32h64v32h-64v42.666h64v32h-64v32h-64c-39.76 0-73.17-27.194-82.644-63.998l-24.022-.001c-34.084 0-61.945-26.644-63.891-60.24l-.109-3.76V320l-128-128z"></svg:path>`,
})
export class IxConnectorRhombFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConsistencyCheckIcon],svg[ix-consistency-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m234.667 34.347l192 110.851V312.85l33.85 22.567l-11.833 17.75l-71.111 106.667l-14.435 21.652l-18.4-18.4l-71.974-71.975l30.17-30.17l53.568 53.566l56.681-85.007l11.834-17.75l1.65 1.099v-35.515L384 277.333v-85.331l-128 73.9v199.533l-21.333 12.317l-192-110.851V145.198zM85.333 192.001v150.266l128 73.9V265.902zM234.667 83.614L108.8 156.284l125.867 72.669l125.867-72.67z"></svg:path>`,
})
export class IxConsistencyCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixContactDetailsIcon],svg[ix-contact-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667V85.333zM426.667 128H85.334v256h341.333zM384 298.666v32H277.334v-32zm-194.666-57.6c30.826 0 56 25.6 56 57.6h-128c0-32 25.072-57.6 56-57.6zm194.666-6.4v32H277.334v-32zM181.334 163.96c15.464 0 28 12.536 28 28s-12.536 28-28 28s-28-12.536-28-28s12.536-28 28-28M384 170.666v32H277.334v-32z"></svg:path>`,
})
export class IxContactDetailsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixContactDetailsFilledIcon],svg[ix-contact-details-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667V85.333zm-64 213.333h-128v32h128zM168 241.066h-16c-30.928 0-56 25.6-56 57.6h128c0-32-25.173-57.6-56-57.6m237.334-6.4h-128v32h128zM160 163.96c-15.464 0-28 12.536-28 28s12.536 28 28 28s28-12.536 28-28s-12.536-28-28-28m245.334 6.707h-128v32h128z"></svg:path>`,
})
export class IxContactDetailsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixContextMenuIcon],svg[ix-context-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 117.333c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m0 341.333c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32M256 288c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32"></svg:path>`,
})
export class IxContextMenuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixControlButtonIcon],svg[ix-control-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M430.545 128c21.422 0 38.788 19.103 38.788 42.667v170.666c0 23.564-17.366 42.667-38.788 42.667H81.455c-21.422 0-38.788-19.103-38.788-42.667V170.667c0-23.564 17.366-42.667 38.788-42.667zm-3.878 42.667H85.333v170.666h341.334z"></svg:path>`,
})
export class IxControlButtonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixControlCheckboxIcon],svg[ix-control-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m259.669 277.331l-41.621 42.666H128v106.667h106.667v-17.237l42.666-42.347v102.251h-192v-192zm19.213 2.972l30.368 29.971l-109.84 111.292l-61.046-58.049l29.401-30.919l30.678 29.17zm190.451 82.361v42.667H298.667v-42.667zm-209.664-320l-41.621 42.667H128v106.666h106.667V174.76l42.666-42.347v102.251h-192v-192zm19.213 2.972l30.368 29.97L199.41 186.9l-61.046-58.05l29.401-30.919l30.678 29.17zm190.451 82.361v42.667H298.667v-42.667z"></svg:path>`,
})
export class IxControlCheckboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixControlIoFieldIcon],svg[ix-control-io-field-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M430.545 128c21.422 0 38.788 19.103 38.788 42.667v170.666c0 23.564-17.366 42.667-38.788 42.667H81.455c-21.422 0-38.788-19.103-38.788-42.667V170.667c0-23.564 17.366-42.667 38.788-42.667zm-3.878 42.667H85.333v170.666h341.334zm-277.334 42.666H128V192h64v21.333h-21.333v85.334H192V320h-64v-21.333h21.333z"></svg:path>`,
})
export class IxControlIoFieldIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixControlLabelIcon],svg[ix-control-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336.813 313.438h-143l-47.125 134.333h-44.959L238.229 64h56.063l137.583 383.771h-47.937zm-13.271-36.563l-34.125-101.021q-13-38.459-23.563-73.937q-9.75 32.77-23.833 74.208l-34.938 100.75z"></svg:path>`,
})
export class IxControlLabelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixControlListBoxIcon],svg[ix-control-list-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h384v384H64zm42.667 42.667v298.666h298.666V106.667zm234.667 0l42.666 64h-85.333zm-.002 298.666l-42.665-64H384zM256 192H128v-42.667h128zm-128 85.333h128v-42.666H128zm128 85.334H128V320h128zM384 192h-85.333v85.333H384z" clip-rule="evenodd"></svg:path>`,
})
export class IxControlListBoxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixControlRadiobuttonIcon],svg[ix-control-radiobutton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M138.667 277.331c53.019 0 96 42.98 96 96c0 53.019-42.981 96-96 96c-53.02 0-96-42.981-96-96c0-53.02 42.98-96 96-96m0 42.666c-29.455 0-53.334 23.879-53.334 53.334s23.879 53.333 53.334 53.333S192 402.786 192 373.331s-23.878-53.334-53.333-53.334m330.666 42.667v42.667H298.667v-42.667zm-330.666-320c53.019 0 96 42.98 96 96c0 53.019-42.981 96-96 96c-53.02 0-96-42.981-96-96c0-53.02 42.98-96 96-96m0 42.667c-29.455 0-53.334 23.878-53.334 53.333s23.879 53.333 53.334 53.333S192 168.119 192 138.664s-23.878-53.333-53.333-53.333m330.666 42.666v42.667H298.667v-42.667zm-330.666-21.333c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32"></svg:path>`,
})
export class IxControlRadiobuttonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixControlSelectIcon],svg[ix-control-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M430.545 128c21.422 0 38.788 19.103 38.788 42.667v170.666c0 23.564-17.366 42.667-38.788 42.667H81.455c-21.422 0-38.788-19.103-38.788-42.667V170.667c0-23.564 17.366-42.667 38.788-42.667zm-3.878 42.667H85.333v170.666h341.334zm-50.209 56.457l15.085 15.085l-50.21 50.209l-50.209-50.209l15.085-15.085l35.124 35.127z"></svg:path>`,
})
export class IxControlSelectIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixControlSliderIcon],svg[ix-control-slider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M171.628 42.664H128v64H64v85.333h64v277.334h43.628V191.997h63.039v-85.333h-63.039zm233.706 0v42.667H298.668V42.664zm-42.666 106.667v-42.667h-64v42.667zm-64 21.333h64v42.667h-64zm149.333 106.667v-42.667H298.668v42.667zm-85.333 21.333v42.667h-64v-42.667zm0 106.667v-42.667h-64v42.667zm42.666 64v-42.667H298.668v42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxControlSliderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixControlSpinnerIcon],svg[ix-control-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 64C149.961 64 64 149.961 64 256c0 39.476 11.913 76.169 32.341 106.681l35.48-23.707c-15.888-23.731-25.154-52.271-25.154-82.974c0-82.475 66.858-149.333 149.333-149.333zm0 405.333c117.821 0 213.333-95.512 213.333-213.333S373.821 42.667 256 42.667S42.667 138.179 42.667 256S138.179 469.333 256 469.333M256 384c70.692 0 128-57.308 128-128s-57.308-128-128-128s-128 57.308-128 128s57.308 128 128 128" clip-rule="evenodd"></svg:path>`,
})
export class IxControlSpinnerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixControlSwitchIcon],svg[ix-control-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341.333 128c70.693 0 128 57.308 128 128s-57.307 128-128 128H170.667c-70.693 0-128-57.308-128-128s57.307-128 128-128zm0 42.667H170.667c-47.129 0-85.334 38.205-85.334 85.333c0 45.7 35.925 83.01 81.075 85.229l4.259.104h170.666c47.129 0 85.334-38.205 85.334-85.333c0-45.7-35.925-83.01-81.075-85.229zM170.667 192c35.346 0 64 28.654 64 64s-28.654 64-64 64s-64-28.654-64-64s28.653-64 64-64"></svg:path>`,
})
export class IxControlSwitchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixControlTextButtonIcon],svg[ix-control-text-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M430.545 128c21.422 0 38.788 19.103 38.788 42.667v170.666c0 23.564-17.366 42.667-38.788 42.667H81.455c-21.422 0-38.788-19.103-38.788-42.667V170.667c0-23.564 17.366-42.667 38.788-42.667zm-3.878 42.667H85.333v170.666h341.334zM320 192v38.4h-19.2l-6.4-12.8h-25.6v76.8l25.6 6.4V320h-76.8v-19.2l25.6-6.4v-76.8h-25.6l-6.4 12.8H192V192z"></svg:path>`,
})
export class IxControlTextButtonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixControlTextboxIcon],svg[ix-control-textbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 64v149.333h21.333v85.334H448V448H64V298.667H42.667v-85.334H64V64zm-42.667 42.667H106.667v106.666H128v85.334h-21.333v106.666h298.666V298.667H384v-85.334h21.333zm-125.497 21.048l94.148 256.001h-46.371l-25.645-73.35h-93.445l-25.469 73.35h-43.737l92.04-256.001zm-24.591 42.818q-4.39 15.808-11.222 35.881l-23.732 68.903h69.733l-20.902-60.702l-4.821-14.534a1023 1023 0 0 1-9.056-29.548"></svg:path>`,
})
export class IxControlTextboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixControlTouchAreaIcon],svg[ix-control-touch-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M447.881 213.686v234.666L362.667 448v-42.667h42.666l-.119-152.028zM195.1 142.907l2.656.064l3.701.278l1.045.149c27.866 3.946 48.483 26.72 49.683 53.884l.045 3.567v66.112l89.103 33.536v168.768H148.038l-12.288-11.456l-71.872-68.31a55 55 0 0 1-3.306-3.392c-11.094-12.266-19.136-29.632-17.75-45.973c1.26-14.914 7.211-28.259 18.124-38.303l3.978-3.34l.576-.405c10.858-8 22.976-12.565 36.586-12.331c10.335.171 20.248 4.134 31.523 11.725l4.296 3.017V199.291c-.043-16.49 7.232-32.106 19.861-42.752c10.368-8.789 23.638-13.632 37.334-13.632m-.96 38.059c-9.374 0-17.093 6.998-18.225 16.045l-.143 2.302v158.378l-17.963 7.616l-34.901-31.701l-2.048-1.941l-.427-.299l-3.947-3.584c-2.88-2.624-6.357-3.904-9.92-4.565c-.917-.235-1.792-.342-2.73-.406c-1.131-.042-2.176-.085-3.286.043c-1.088.149-2.09.448-3.136.768c-3.541.981-6.912 2.603-9.578 5.525c-6.952 7.641-6.977 19.153-.413 26.802l1.778 1.828l54.293 49.301l21.355 19.52h.149l.128.128l.128-.128l132.837-1.003l.426-93.888l-86.031-32.576v-99.818c0-10.134-8.213-18.347-18.346-18.347M320 64v42.667l-213.333-.001v128l-42.667 32V64zm58.697-15.031l100.416 100.416l-100.416 100.416l-30.165-30.166l48.874-48.917H278.281v-42.667h119.125l-48.874-48.917z"></svg:path>`,
})
export class IxControlTouchAreaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixControlValueBarIcon],svg[ix-control-value-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M277.333 42.664v426.667h-192V42.664zm149.334 384v42.667H320v-42.667zm-42.667-64v42.667h-64v-42.667zm0-64v42.667h-64v-42.667zm85.333-64v42.667H320v-42.667zM234.667 85.331H128v170.666h106.667zM384 170.664v42.667h-64v-42.667zm0-64v42.667h-64v-42.667zm42.667-64v42.667H320V42.664z"></svg:path>`,
})
export class IxControlValueBarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixControlledDeviceIcon],svg[ix-controlled-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 469.334v-192h63.999v128h170.667V106.667H192l-.001 128.001h-64v-192H85.334v426.666zm192-106.667h-85.334V149.334H320zm-21.334-149.333v-42.667H256v42.667zm0 64v-42.667H256v42.667z"></svg:path>`,
})
export class IxControlledDeviceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixControllerDeviceIcon],svg[ix-controller-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.334 42.667v426.667H106.667V42.667zm-42.667 42.667H149.334v341.333h213.333zm-85.333 256V384h-42.667v-42.666zm64-234.667v192H170.667v-192zm-42.667 42.667h-85.333V256h85.333z"></svg:path>`,
})
export class IxControllerDeviceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConversationIcon],svg[ix-conversation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 362.667v-64H42.667V85.334h234.666v64h-42.666v-21.333H85.333v128H128v31.309l52.182-31.309h33.151v42.666H192zm384 21.334h-42.666v64l-106.667-64h-85.333V170.667h234.666zM384 341.334v31.309l-52.182-31.309h-54.485v-128h149.334v128z" clip-rule="evenodd"></svg:path>`,
})
export class IxConversationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixConversationFilledIcon],svg[ix-conversation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.334v213.333h42.666v64l106.667-64h21.333V149.334h64v-64zm426.666 298.667V170.667H234.667v213.334H320l106.667 64v-64z" clip-rule="evenodd"></svg:path>`,
})
export class IxConversationFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCopyIcon],svg[ix-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.666 128v320h-256V128zM384 170.667H213.333v234.667H384zm-64-128v42.667H128v256H85.333V42.667z"></svg:path>`,
})
export class IxCopyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCopyFilledIcon],svg[ix-copy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.334 384V42.667h255.999v42.666H128V384zm341.333-256h-256v341.333h256z" clip-rule="evenodd"></svg:path>`,
})
export class IxCopyFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCornerArrowUpLeftIcon],svg[ix-corner-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m85.333 213.333l128-128l30.293 30.293L167.04 192h238.293v256h-42.667V234.666H167.04l76.586 76.374l-30.293 30.293z"></svg:path>`,
})
export class IxCornerArrowUpLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCouchIcon],svg[ix-couch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 128c34.084 0 61.945 26.644 63.891 60.24l.109 3.76v21.333l3.184.117c20.973 1.548 37.73 18.256 39.354 39.208l.129 3.342v85.333c0 22.493-17.406 40.921-39.483 42.55l-3.184.117v42.667h-85.333L341.333 384H170.667v42.667H85.334V384c-22.493 0-40.921-17.405-42.55-39.482l-.117-3.185V256c0-22.493 17.405-40.92 39.482-42.55l3.185-.117V192c0-34.084 26.643-61.945 60.24-63.891l3.76-.109zM85.334 341.333h341.333v-85.312l-.574-.021h-20.76v64H106.668v-64H85.334zm277.333-170.666H149.334c-10.94 0-19.958 8.235-21.19 18.845L128 192l.001 27.042c11.888 6.877 20.15 19.325 21.216 33.774l.117 3.184v21.333h213.333V256c0-15.793 8.58-29.581 21.333-36.958V192c0-10.94-8.235-19.957-18.845-21.19z"></svg:path>`,
})
export class IxCouchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCouchFilledIcon],svg[ix-couch-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M435.626 192c17.97-.023 32.797 14.054 33.707 32v100.054A37.973 37.973 0 0 1 432 362.667l-5.334-.001v42.668h-85.333v-42.668H170.666v42.668H85.333v-42.668H80a37.973 37.973 0 0 1-37.334-38.612V224c.91-17.946 15.738-32.023 33.707-32c16.725 1.497 29.715 15.219 30.293 32v74.667h298.667V224c.484-16.82 13.524-30.595 30.293-32m-72.96-85.333c35.347 0 64 28.654 64 64c-23.564 0-42.666 19.103-42.666 42.667v64H128v-64c0-23.564-19.103-42.667-42.667-42.667c0-35.346 28.654-64 64-64z"></svg:path>`,
})
export class IxCouchFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCounterIcon],svg[ix-counter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M105.21 256c0-82.475 64.576-149.333 144.235-149.333c79.658 0 144.234 66.858 144.234 149.333v12.501l-26.642-27.584l-29.135 30.166l76.382 79.082l76.383-79.082l-29.136-30.166l-26.642 27.584V256c0-106.048-83.017-192-185.444-192C147.017 64 64 149.952 64 256s83.017 192 185.445 192c43.826 0 84.171-15.765 115.923-42.112l-25.777-33.301c-24.705 20.501-56.025 32.746-90.146 32.746c-79.659 0-144.235-66.858-144.235-149.333m129.457-43.833v129.166h42.666V170.667h-38.291l-56.625 33.25l18 29.625z" clip-rule="evenodd"></svg:path>`,
})
export class IxCounterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCreatePlantIcon],svg[ix-create-plant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 64v170.667l128-69.334v69.334l128-70.119v59.873l-42.666 42.537v-35.257l-128 70.135v-69.645l-84.596 45.817l-43.404 23.508v61.151H64V64zM64 405.333h42.667V448H64zm85.333 0H192V448h-42.667zM474.667 316l-65.334-65.333L256 404v65.333h65.333zM288 417.237l79.972-79.971l20.074 20.074l-79.993 79.993H288zm122.674-82.524l-20.075-20.075l18.724-18.723l20.074 20.074z" clip-rule="evenodd"></svg:path>`,
})
export class IxCreatePlantIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCreatePlantFilledIcon],svg[ix-create-plant-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 234.667v-192H64v384h42.667V384h42.666v42.667H192V384h42.667v-42.666h42.666v-42.667h53.334l74.666-74.295v-59.823l-128 70.118v-69.333zM192 341.334V384h-42.667v-42.666zm0 0h42.667v-42.667H192zM474.667 316l-65.334-65.333L256 404v65.334h65.333zM288 417.238l79.972-79.972l20.074 20.075l-79.993 79.993H288zm122.674-82.525l-20.075-20.074l18.724-18.724l20.074 20.075z" clip-rule="evenodd"></svg:path>`,
})
export class IxCreatePlantFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCrosshairsIcon],svg[ix-crosshairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m277.333 42.667l.021 43.99c77.183 9.633 138.356 70.806 147.99 147.989l43.989.021v42.666l-43.987-.001c-9.625 77.193-70.802 138.377-147.992 148.012l-.021 43.989h-42.666l.001-43.987c-77.2-9.626-138.388-70.814-148.014-148.014l-43.987.001v-42.666l43.99-.021c9.634-77.19 70.818-138.367 148.011-147.992l-.001-43.987zm.018 87.106l-.018 40.894h-42.666l.004-40.898c-53.596 8.99-95.899 51.287-104.898 104.88l40.894.018v42.666l-40.898-.004c8.991 53.604 51.298 95.911 104.902 104.902l-.004-40.898h42.666l.018 40.894c53.593-8.998 95.89-51.301 104.88-104.898l-40.898.004v-42.666l40.894-.018c-8.997-53.586-51.29-95.879-104.876-104.876M256 213.333c23.564 0 42.667 19.103 42.667 42.667S279.564 298.667 256 298.667S213.333 279.564 213.333 256s19.103-42.667 42.667-42.667"></svg:path>`,
})
export class IxCrosshairsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCrosshairsFilledIcon],svg[ix-crosshairs-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 42.667v43.987c77.2 9.626 138.387 70.813 148.013 148.013h43.987v42.666h-43.987c-9.626 77.2-70.813 138.387-148.013 148.013v43.987h-42.666v-43.987c-77.2-9.626-138.387-70.813-148.013-148.013H42.667v-42.666h43.987c9.626-77.2 70.813-138.387 148.013-148.013V42.667zm-42.666 362.666h42.666v-64h-42.666zm64-149.333c0 23.564-19.103 42.667-42.667 42.667S213.333 279.564 213.333 256s19.103-42.667 42.667-42.667s42.667 19.103 42.667 42.667m-128-21.333h-64v42.666h64zm106.666-128v64h-42.666v-64zm128 128h-64v42.666h64z" clip-rule="evenodd"></svg:path>`,
})
export class IxCrosshairsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCustomerIcon],svg[ix-customer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.667 42.667c41.237 0 74.667 33.429 74.667 74.666c0 39.863-31.238 72.43-70.57 74.556l-4.097.111C193.43 192 160 158.571 160 117.333c0-39.862 31.238-72.43 70.57-74.556zm-149.334 384h187.791A127.2 127.2 0 0 1 257.77 384H128v-34.133l.111-4.142c2.057-38.365 32.515-68.392 69.222-68.392H272l3.908.114c3.809.223 7.54.769 11.168 1.612a128.5 128.5 0 0 1 38.566-30.345c-15.93-8.956-34.208-14.047-53.642-14.047h-74.667l-4.616.096c-59.715 2.49-107.384 53.071-107.384 115.104zm117.334-309.334c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32m118.636 331.629L384 410.667l62.697 38.295l-17.046-71.463l55.795-47.794l-73.232-5.871L384 256l-28.214 67.834l-73.232 5.871l55.795 47.794z" clip-rule="evenodd"></svg:path>`,
})
export class IxCustomerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCustomerFilledIcon],svg[ix-customer-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M309.334 117.333c0-41.237-33.43-74.666-74.667-74.666l-4.097.11C191.238 44.904 160 77.471 160 117.333C160 158.571 193.43 192 234.667 192l4.097-.111c39.332-2.126 70.57-34.693 70.57-74.556M256 362.667c0 23.314 6.233 45.173 17.124 64H85.334v-76.8c0-62.033 47.668-112.614 107.383-115.104l4.616-.096H272c19.434 0 37.712 5.091 53.642 14.047C284.293 269.933 256 312.996 256 362.667m65.303 86.295L384 410.667l62.697 38.295l-17.046-71.463l55.795-47.794l-73.232-5.871L384 256l-28.214 67.834l-73.232 5.871l55.795 47.794z" clip-rule="evenodd"></svg:path>`,
})
export class IxCustomerFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCutIcon],svg[ix-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m118.486 42.801l217.664 271.19c13.909-9.366 30.058-14.294 46.784-14.294c46.464 0 84.266 37.782 84.266 84.267s-37.802 84.267-84.266 84.267s-84.267-37.782-84.267-84.267c0-13.44 3.413-26.645 10.155-39.275l-53.867-67.349l-53.888 67.392c6.741 12.63 10.133 25.813 10.133 39.232c0 46.485-37.802 84.267-84.266 84.267s-84.267-37.782-84.267-84.267s37.803-84.267 84.267-84.267c16.725 0 32.896 4.928 46.826 14.315l55.34-68.992L103.829 88.583zm264.448 297.43c-24.107 0-43.734 19.626-43.734 43.733s19.627 43.733 43.734 43.733c24.106 0 43.733-19.626 43.733-43.733s-19.627-43.733-43.733-43.733m-256 0c-24.107 0-43.734 19.626-43.734 43.733s19.627 43.733 43.734 43.733c24.106 0 43.733-19.626 43.733-43.733s-19.627-43.733-43.733-43.733M391.569 42.667l14.635 45.781l-96.192 120.086l-25.813-32.171l.533-.661z"></svg:path>`,
})
export class IxCutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCutFilledIcon],svg[ix-cut-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m96 150.5l21.333-106.667l219.936 269.922c13.423-8.802 29.479-13.922 46.731-13.922c47.127 0 85.333 38.206 85.333 85.334S431.127 470.5 384 470.5c-47.128 0-85.333-38.206-85.333-85.333c0-12.218 2.568-23.838 7.193-34.345l-48.2-46.012l-51.2 46.748c4.424 10.315 6.873 21.675 6.873 33.609c0 47.127-38.205 85.333-85.333 85.333s-85.333-38.206-85.333-85.333c0-47.128 38.204-85.334 85.333-85.334c17.251 0 33.307 5.12 46.731 13.922l40.379-49.559zm53.333 234.667c0 11.782-9.551 21.333-21.333 21.333s-21.333-9.551-21.333-21.333c0-11.783 9.551-21.334 21.333-21.334s21.333 9.551 21.333 21.334m256 0c0 11.782-9.551 21.333-21.333 21.333c-11.783 0-21.333-9.551-21.333-21.333c0-11.783 9.55-21.334 21.333-21.334s21.333 9.551 21.333 21.334M426.667 150.5l-32-106.667l-111.316 136.615l47.241 57.773z" clip-rule="evenodd"></svg:path>`,
})
export class IxCutFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCycleIcon],svg[ix-cycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 234.667V256c0 70.693-57.308 128-128 128H161.849l38.988 39.007l-30.17 30.17l-90.51-90.51l90.51-90.51l30.17 30.17l-38.988 39.006H320c46.657 0 84.568-37.444 85.322-83.922l.011-1.41v-21.334zM341.333 58.824l90.51 90.51l-90.51 90.51l-30.17-30.17l38.987-39.007H192c-46.657 0-84.568 37.445-85.322 83.922l-.011 1.411l-.001 21.333H64V256c0-69.985 56.167-126.852 125.883-127.983L192 128h158.151l-38.988-39.006z"></svg:path>`,
})
export class IxCycleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixCycleAltIcon],svg[ix-cycle-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405.333 128c22.493 0 40.921 13.685 42.55 36.505l.117 3.291v176.408c0 23.249-20.59 38.112-42.667 39.796h-97.792l27.544 32.815L304.915 448l-79.085-81.745l79.085-81.745l30.17 31.184l-27.544 25.639h97.792V170.667H320V128zM207.085 64l79.085 81.745l-79.085 81.745l-30.17-31.184l25.752-25.639h-96v170.666H192V384h-85.333c-22.493 0-40.921-13.685-42.55-36.505L64 344.204V167.796c0-23.249 9.923-38.112 32-39.796h106.667l-25.752-32.815z"></svg:path>`,
})
export class IxCycleAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDashboardIcon],svg[ix-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M426.667 125.489H85.333v20.078h341.334zM85.333 386.508V185.724h341.334v200.784zM42.667 85.332v341.333h426.666V85.332zm320 149.333v128h42.666v-128zm-64 128v-85.333h42.666v85.333zm-64-21.333v21.333h42.666v-21.333z"></svg:path><svg:path d="M170.667 362.665c41.237 0 74.666-33.429 74.666-74.666c0-41.238-33.429-74.667-74.666-74.667c-41.238 0-74.667 33.429-74.667 74.667s33.429 74.666 74.667 74.666m35.476-50.962a42.67 42.67 0 0 0 7.19-23.704h-42.666v-42.667a42.66 42.66 0 0 0-39.419 26.339a42.664 42.664 0 0 0 31.095 58.175a42.67 42.67 0 0 0 43.8-18.143"></svg:path></svg:g>`,
})
export class IxDashboardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDashboardFilledIcon],svg[ix-dashboard-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.332h426.666v341.333H42.667zm192 256h42.666v21.333h-42.666zm106.666-64h-42.666v85.333h42.666zm21.334-42.667h42.666v128h-42.666zm64-106.666H85.333v42.666h341.334zm-192 160c0 41.237-33.43 74.666-74.667 74.666s-74.667-33.429-74.667-74.666c0-41.238 33.43-74.667 74.667-74.667s74.667 33.429 74.667 74.667m-51.394-47.988A53.3 53.3 0 0 0 160 234.665v53.334l51.862 12.44a53.336 53.336 0 0 0-28.589-60.428" clip-rule="evenodd"></svg:path>`,
})
export class IxDashboardFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDashboardPenIcon],svg[ix-dashboard-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 125.49H85.333v20.079h341.334zM85.333 386.51V185.726h341.334v51.462l42.666 42.666V85.334H42.667v341.333h158.578l40.157-40.157zm320-173.177v9.245l-42.666 42.667v-51.912zm-64 42.667v30.578l-42.666 42.667V256zm-64 85.333v9.245l-12.088 12.089h-30.578v-21.334zm-106.666 21.334c41.237 0 74.666-33.43 74.666-74.667s-33.429-74.667-74.666-74.667C129.429 213.333 96 246.763 96 288s33.429 74.667 74.667 74.667m35.476-50.963a42.67 42.67 0 0 0 7.19-23.704h-42.666v-42.667a42.67 42.67 0 0 0-39.419 26.339a42.67 42.67 0 0 0 9.249 46.498a42.66 42.66 0 0 0 46.498 9.249a42.66 42.66 0 0 0 19.148-15.715M474.667 316l-65.334-65.333L256 404v65.334h65.333zM288 417.237l79.972-79.971l20.074 20.075l-79.993 79.993H288zm122.674-82.524l-20.075-20.075l18.724-18.723l20.074 20.075z" clip-rule="evenodd"></svg:path>`,
})
export class IxDashboardPenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDashboardPenFilledIcon],svg[ix-dashboard-pen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.334h426.666v203.854l-59.994-59.995l-4.006 4.005v-19.865h-42.666v62.532l-21.334 21.333V256h-42.666v83.865l-21.334 21.333v-19.865h-42.666v21.334h41.198l-64 64H42.667zm384 42.666H85.333v42.667h341.334zm-192 160c0 41.237-33.43 74.667-74.667 74.667S85.333 329.237 85.333 288s33.43-74.667 74.667-74.667s74.667 33.43 74.667 74.667m-51.394-47.988A53.35 53.35 0 0 0 160 234.667V288l51.862 12.441a53.33 53.33 0 0 0-9.981-45.463a53.3 53.3 0 0 0-18.608-14.966m226.06 21.322L464 316l-34.457 34.458l-54.667-54.667zm-49.542 49.542l54.667 54.667l-103.791 103.791H256v-54.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxDashboardPenFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDataEgressIcon],svg[ix-data-egress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m320 85.333l149.333 85.333v170.667L320 426.666l-149.333-85.333v-42.667h43.09l.001 18.006L320 377.386l106.22-60.714V195.306L320 134.592l-106.242 60.714v18.027h-43.091v-42.667zm-207.085 91.582l30.17 30.17l-27.573 27.58l225.821.001v42.667H115.512l27.573 27.582l-30.17 30.17L33.83 256z"></svg:path>`,
})
export class IxDataEgressIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDataIngressIcon],svg[ix-data-ingress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m320 85.333l149.333 85.333v170.667L320 426.666l-149.333-85.333v-42.667h43.09l.001 18.006L320 377.386l106.22-60.714V195.306L320 134.592l-106.242 60.714v18.027h-43.091v-42.667zm-27.582 91.582L371.503 256l-79.085 79.085l-30.17-30.17l27.571-27.582H64v-42.667h225.82l-27.572-27.581z"></svg:path>`,
})
export class IxDataIngressIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDataIngressEgressIcon],svg[ix-data-ingress-egress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m320 85.333l149.333 85.333v170.667L320 426.666l-149.333-85.333v-42.667h43.09l.001 18.006L320 377.386l106.22-60.714V195.306L320 134.592l-106.242 60.714v18.027h-43.091v-42.667zm-27.582 91.582L371.503 256l-79.085 79.085l-30.17-30.17l27.572-27.582H115.512l27.573 27.582l-30.17 30.17L33.83 256l79.085-79.085l30.17 30.17l-27.573 27.58H289.82l-27.572-27.58z"></svg:path>`,
})
export class IxDataIngressEgressIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDataManagementIcon],svg[ix-data-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 102.4V64h44.747v46.387a151.5 151.5 0 0 1 21.476 12.941l6.572-3.994l31.81-19.18l18.356 33.235l29.35 53.222L448 219.866l-31.774 19.2l-6.571 3.936c.367 4.358.551 8.678.551 12.998s-.184 8.64-.551 12.998l6.571 3.936l31.774 19.2l-18.356 33.255l-29.35 53.222l-18.356 33.235l-31.81-19.18l-6.572-3.994a151.5 151.5 0 0 1-21.476 12.941V448h-44.747v-38.4h8.039v-34.752c20.981-5.645 39.703-17.107 54.425-32.794l28.689 17.357l29.388-53.222l-28.745-17.357c2.753-10.464 4.369-21.446 4.369-32.832s-1.616-22.368-4.369-32.832l28.745-17.357l-29.388-53.222l-28.689 17.357c-14.722-15.687-33.444-27.149-54.425-32.794V102.4zm52.1 153.6c0 34.661-21.947 63.957-52.1 73.512v-42.248c9.317-6.964 15.389-18.371 15.389-31.264s-6.072-24.3-15.389-31.264v-42.248c30.153 9.555 52.1 38.851 52.1 73.512m-244.1-106.665c0-43.516 65.146-79.425 149.334-84.673v42.763c-31.201 2.233-59.391 9.295-80.265 19.732c-18.841 9.42-26.402 18.359-26.402 22.178s7.561 12.757 26.402 22.177c20.874 10.437 49.064 17.5 80.265 19.732v42.764c-42.323-2.639-79.834-13.026-106.674-28.233l-.007 50.226H128c0 3.819 7.561 12.758 26.402 22.178c20.874 10.437 49.064 17.499 80.265 19.732v42.763c-42.331-2.639-79.847-13.029-106.688-28.241l-.007 48.701l.03 1.595c1.054 14.627 45.2 37.389 106.665 41.837v42.775c-82.162-5.123-146.187-39.447-149.221-81.545l-.113-3.128z" clip-rule="evenodd"></svg:path>`,
})
export class IxDataManagementIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDataManagementFilledIcon],svg[ix-data-management-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 64v131.642C302.191 204.428 320 228.134 320 256s-17.809 51.572-42.667 60.358V448h44.747v-46.387a151.5 151.5 0 0 0 21.476-12.941l6.572 3.994l31.81 19.18l18.356-33.235l29.35-53.222L448 292.134l-31.774-19.2l-6.571-3.936c.367-4.358.551-8.678.551-12.998s-.184-8.64-.551-12.998l6.571-3.936l31.774-19.2l-18.356-33.255l-29.35-53.222l-18.356-33.235l-31.81 19.18l-6.572 3.994a151.5 151.5 0 0 0-21.476-12.941V64zm-192 85.335c0-43.516 65.146-79.425 149.334-84.673v169.346c-82.162-5.123-146.187-39.447-149.221-81.545zm.113 45.795c3.034 42.098 67.059 76.422 149.221 81.544v64c-82.162-5.122-146.187-39.446-149.221-81.544l-.113-3.129v-64zm0 106.666c3.034 42.098 67.059 76.422 149.221 81.545v64c-82.162-5.123-146.187-39.447-149.221-81.545l-.113-3.128v-64z" clip-rule="evenodd"></svg:path>`,
})
export class IxDataManagementFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDataTypeBooleanIcon],svg[ix-data-type-boolean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m262.247 313.75l-80.915-80.915l-80.915 80.915l-30.17-30.17l80.915-80.915l-80.915-80.915l30.17-30.17l80.915 80.915l80.915-80.915l30.17 30.17l-80.915 80.915l80.915 80.915zm30.17 128l170.667-170.667l-30.17-30.17l-155.582 155.582l-91.581-91.582l-30.17 30.17L262.247 441.75l15.085 15.085z" clip-rule="evenodd"></svg:path>`,
})
export class IxDataTypeBooleanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDataTypeDoubleIcon],svg[ix-data-type-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M276.625 384v-36.938q52.688-48.375 80.25-78.937q25.313-27.938 34.875-44.813q9.75-16.875 9.75-33.187q0-17.25-11.813-27.563q-13.312-11.436-33.562-11.437q-27.75 0-63.75 20.063l-11.25-38.626q39.562-18.561 80.062-18.562q39.375 0 62.25 17.812q24.938 19.5 24.938 55.688q0 24.375-11.438 46.5q-11.437 22.125-40.687 54q-25.688 28.313-58.313 58.5h112.5V384zm-155.167 0V169.875L72.896 202.5L53.02 165.938l73.5-47.626h40.125V384zm117.209-41.667q-7.5-7.666-18.834-7.666q-11.166 0-18.833 7.5q-7.5 7.5-7.5 18.666q0 11.834 7.333 19.5q7.5 7.5 19.167 7.5q11.166 0 18.667-7.5q7.5-7.667 7.5-19.166q0-11.334-7.5-18.834" clip-rule="evenodd"></svg:path>`,
})
export class IxDataTypeDoubleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDataTypeEnumIcon],svg[ix-data-type-enum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 149.333c0-23.564 19.103-42.666 42.667-42.666s42.667 19.102 42.667 42.666S151.564 192 128 192s-42.667-19.103-42.667-42.667M128 64c-47.128 0-85.333 38.205-85.333 85.333S80.872 234.667 128 234.667s85.333-38.205 85.333-85.334C213.333 102.205 175.128 64 128 64m341.333 106.667H234.667V128h234.666zM234.667 341.333h234.666V384H234.667zM128 448c47.128 0 85.333-38.206 85.333-85.333c0-47.128-38.205-85.334-85.333-85.334s-85.333 38.206-85.333 85.334S80.872 448 128 448" clip-rule="evenodd"></svg:path>`,
})
export class IxDataTypeEnumIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDataTypeIntegerIcon],svg[ix-data-type-integer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M166.521 298.666v-30.781q43.906-40.312 66.875-65.781q21.094-23.281 29.062-37.344q8.125-14.063 8.125-27.656q0-14.376-9.843-22.969q-11.094-9.531-27.969-9.531q-23.125 0-53.125 16.718l-9.375-32.187q32.969-15.47 66.719-15.469q32.812 0 51.875 14.844q20.781 16.25 20.781 46.406q0 20.313-9.531 38.75t-33.907 45q-21.406 23.593-48.593 48.75h93.75v31.25zm-61.75 85.333V205.562l-40.469 27.187l-16.562-30.468l61.25-39.688h33.437v221.406zm217.177-18.354l-8.125 31.719q30.156 11.719 63.437 11.719q37.657 0 57.969-16.563q22.656-18.436 22.656-50.469q0-45-47.656-52.031q22.5-4.218 33.906-17.344q11.407-13.28 11.407-35.156q0-27.812-19.844-42.812q-18.75-14.375-52.188-14.375q-32.5 0-62.968 11.875l7.5 31.25q29.375-12.188 50.625-12.188q17.812 0 27.812 7.969q10 7.812 10 22.031q0 16.563-15.469 26.094q-13.437 8.437-42.5 8.437q-6.405 0-14.687-.781v30.156q11.406-.624 18.437-.625q56.563 0 56.563 36.25q0 15.157-9.688 25.469q-11.093 11.875-34.531 11.875q-25.938 0-52.656-12.5" clip-rule="evenodd"></svg:path>`,
})
export class IxDataTypeIntegerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDataTypeStringIcon],svg[ix-data-type-string-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M431.261 380.864q-11.778 13.44-23.716 18.956q-11.775 5.513-28.232 5.513q-26.134 0-40.169-14.818q-14.198-14.649-14.198-39.637q0-33.774 25.653-49.628q16.131-9.996 50.978-9.996q9.195 0 27.587 1.035v-3.274q0-40.842-37.266-40.841q-21.136 0-45.494 14.993l-10.324-29.641q29.36-15.853 60.817-15.853q40.816 0 58.4 23.435q7.099 9.653 9.68 22.402q2.743 12.752 2.743 38.256v53.766c0 19.07.538 38.313 1.613 49.801h-38.072zm-2.097-62.727q-9.519-.862-17.424-.862q-23.392 0-33.716 6.893q-13.07 8.79-13.068 25.849q0 12.237 7.098 19.817q7.098 7.411 19.037 7.411q22.101 0 38.073-25.159zm-206.202-1.205H119.38L96 405.333H42.667L144.69 106.666h53.738l110.904 298.667H256zm-13.24-40.349l-23.17-69.88a1199 1199 0 0 1-15.381-50.746q-5.841 21.837-15.577 50.746l-23.169 69.88z"></svg:path>`,
})
export class IxDataTypeStringIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDataTypeStringListIcon],svg[ix-data-type-string-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 191.999v-42.666H448v42.666zm0 192v-42.064H448v42.064z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M156.16 408.326q-10.209 10.072-20.558 14.208q-10.209 4.132-24.473 4.132q-22.656 0-34.823-11.107Q64 404.579 64 385.85q0-25.315 22.236-37.198q13.985-7.492 44.192-7.492q7.971 0 23.914.775v-2.453q0-30.613-32.305-30.612q-18.32 0-39.437 11.237l-8.95-22.216q25.452-11.883 52.722-11.884q35.382 0 50.626 17.566q6.153 7.236 8.39 16.792q2.378 9.557 2.378 28.674v40.299q0 21.441 1.398 34.358h-31.745zm-1.818-47.016q-8.251-.646-15.104-.646q-20.277 0-29.228 5.166q-11.327 6.588-11.327 19.375q0 9.173 6.153 14.853q6.153 5.555 16.502 5.555q19.16 0 33.004-18.858zm1.818-144.984q-10.209 10.076-20.558 14.208q-10.209 4.133-24.473 4.133q-22.656 0-34.823-11.108Q64 212.581 64 193.852q0-25.316 22.236-37.199q13.985-7.492 44.192-7.492q7.971 0 23.914.775v-2.454q0-30.612-32.305-30.612q-18.32 0-39.437 11.238l-8.95-22.216q25.452-11.883 52.722-11.883q35.382 0 50.626 17.566q6.153 7.233 8.39 16.791q2.378 9.558 2.378 28.674v40.299q0 21.441 1.398 34.358h-31.745zm-1.818-47.015q-8.251-.646-15.104-.646q-20.277 0-29.228 5.166q-11.327 6.588-11.327 19.375q0 9.17 6.153 14.854q6.153 5.554 16.502 5.554q19.16 0 33.004-18.858z"></svg:path>`,
})
export class IxDataTypeStringListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDatabaseIcon],svg[ix-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m127.977 312.432l-.005 48.7l.03 1.596c1.172 16.27 55.661 42.605 127.998 42.605c39.56 0 76.057-7.718 101.598-20.489c17.584-8.792 25.343-17.165 26.3-21.347l.102-.83v-50.223c-31.272 17.716-77.026 28.89-128 28.89c-50.986 0-96.75-11.18-128.023-28.902m259.234-108.527l-1.627.962c-31.3 18.243-77.743 29.8-129.584 29.8c-51.821 0-98.248-11.548-129.548-29.778q.764.444 1.54.884L127.985 256H128c0 3.819 7.561 12.758 26.401 22.178c25.542 12.77 62.038 20.489 101.599 20.489c39.56 0 76.057-7.719 101.598-20.49C376.438 268.758 384 259.82 384 256v-50.223q1.633-.924 3.21-1.872M256 106.667c-39.56 0-76.057 7.718-101.599 20.489c-18.84 9.42-26.401 18.358-26.401 22.177c0 3.82 7.561 12.758 26.401 22.178C179.943 184.28 216.44 192 256 192s76.057-7.718 101.598-20.49c18.84-9.42 26.402-18.358 26.402-22.177s-7.562-12.757-26.402-22.177c-25.541-12.771-62.038-20.49-101.598-20.49m170.666 256C426.666 409.795 350.256 448 256 448c-92.162 0-167.262-36.526-170.554-82.205l-.113-3.128V149.333q0 .678.021 1.352l-.021-1.352C85.333 102.205 161.743 64 256 64c94.256 0 170.666 38.205 170.666 85.333z"></svg:path>`,
})
export class IxDatabaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDatabaseArrowLeftIcon],svg[ix-database-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 64C307.59 64 384 102.205 384 149.333v85.812a119 119 0 0 0-10.667-.478a117.4 117.4 0 0 0-32 4.416v-33.305c-31.272 17.715-77.026 28.889-128 28.889c-50.977 0-96.735-11.176-128.007-28.894L85.319 256h.014c0 3.819 7.562 12.758 26.402 22.178c25.541 12.77 62.038 20.489 101.598 20.489c20.822 0 40.794-2.138 58.768-6.026a116.6 116.6 0 0 0-15.338 45.905c-13.867 1.819-28.422 2.787-43.43 2.787c-50.985 0-96.748-11.178-128.02-28.901l-.007 48.701l.03 1.595c1.172 16.269 55.661 42.605 127.997 42.605c18.662 0 36.641-1.717 53.111-4.872a117.7 117.7 0 0 0 27.082 37.551C269.619 444.387 242.32 448 213.333 448c-92.162 0-167.261-36.526-170.554-82.205l-.112-3.128V149.333c0-47.128 76.41-85.333 170.666-85.333m0 42.667c-39.56 0-76.057 7.718-101.598 20.489c-18.84 9.42-26.402 18.358-26.402 22.177s7.562 12.758 26.402 22.178C137.276 184.282 173.773 192 213.333 192s76.057-7.718 101.599-20.489c18.84-9.42 26.401-18.359 26.401-22.178s-7.561-12.757-26.401-22.177c-25.542-12.771-62.038-20.489-101.599-20.489m155.589 155.736l30.17 30.17l-48.914 48.915h119.155v42.666H350.177l48.915 48.916l-30.17 30.17l-100.418-100.419z" clip-rule="evenodd"></svg:path>`,
})
export class IxDatabaseArrowLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDatabaseFilledIcon],svg[ix-database-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.666 298.667v64C426.666 409.795 350.256 448 256 448c-92.162 0-167.262-36.526-170.554-82.205l-.113-3.128v-64l.113 3.128C88.738 347.475 163.838 384 256 384c94.256 0 170.666-38.205 170.666-85.333M85.446 195.128c3.292 45.68 78.392 82.205 170.554 82.205c94.256 0 170.666-38.205 170.666-85.333v64l-.023 1.411c-1.507 46.478-77.33 83.922-170.643 83.922c-92.162 0-167.262-36.526-170.554-82.205L85.333 256v-64ZM256 64c92.162 0 167.262 36.526 170.554 82.205l.112 3.128l-.023 1.411c-1.507 46.478-77.33 83.923-170.643 83.923c-92.162 0-167.262-36.526-170.554-82.205l-.113-3.129C85.333 102.205 161.743 64 256 64"></svg:path>`,
})
export class IxDatabaseFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDetailsIcon],svg[ix-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 128v320H128V128zm-42.667 42.667H170.667v234.666h234.666zM384 64v42.667l-277.334-.001V384H64V64zm-21.333 234.667v42.666H213.333v-42.666zm0-85.334V256H213.333v-42.667z"></svg:path>`,
})
export class IxDetailsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDeviceDriverIcon],svg[ix-device-driver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.312 63.979v149.333l-42.645.021l-.007-79.895c-38.684 26.986-63.993 71.819-63.993 122.562c0 25.481 6.382 49.472 17.634 70.461l14.592 27.096l3.163-1.803l23.381-13.546l22.24 15.346a117.4 117.4 0 0 0 16.477 9.49l24.422 11.552l-.019 30.737h52.885l.021-30.737l24.422-11.552a117.4 117.4 0 0 0 16.477-9.49l22.271-15.367l23.396 13.593l3.098 1.799l26.411-45.846l-3.007-1.709l-23.696-13.569l2.396-27.201c.276-3.124.412-6.194.412-9.254s-.136-6.13-.412-9.254l-2.396-27.201l23.696-13.569l3.028-1.731l-26.432-45.824l-3.098 1.799l-23.396 13.593l-22.271-15.367a117.4 117.4 0 0 0-16.477-9.49l-24.422-11.552l-.021-30.737h-46.775V64h89.463v46.387a160 160 0 0 1 22.464 12.941l6.874-3.994l33.273-19.18l19.2 33.235l30.701 53.222l19.2 33.255l-33.235 19.2l-6.874 3.936c.384 4.358.576 8.678.576 12.998s-.192 8.64-.576 12.999l6.874 3.935l33.235 19.2l-19.2 33.255l-30.701 53.222l-19.2 33.235l-33.273-19.18l-6.874-3.994a160 160 0 0 1-22.464 12.941V448H185.909v-46.387a160 160 0 0 1-22.464-12.941l-6.892 3.994l-33.255 19.18l-19.2-33.235l-17.357-32.094C72.202 319.594 64 288.755 64 256c0-60.324 27.82-114.151 71.331-149.35L64 106.667V64zM256 213.333c23.564 0 42.667 19.103 42.667 42.667S279.564 298.667 256 298.667S213.333 279.564 213.333 256s19.103-42.667 42.667-42.667" clip-rule="evenodd"></svg:path>`,
})
export class IxDeviceDriverIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDeviceFanIcon],svg[ix-device-fan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m434.664 368.229l.001 4.391c-30.467 46.582-78.659 80.521-134.997 92.24l-.985 1.462c21.846-30.951 24.616-94.66 7.277-128.344C333.565 321.141 352 290.723 352 256l-.008-.969c41.113 13.564 79.327 70.059 82.672 113.198M256 352c10.804 0 21.191-1.785 30.883-5.076c-.397 43.207-42.193 96.75-82.073 113.215a79 79 0 0 1-5.132 1.658c-55.214-15.054-101.495-51.745-129.195-100.391l-.985-.281c36.015 11.16 97.051-5.679 123.929-32.357C210.191 343.247 232.073 352 256 352m0-160.05c35.374 0 64.05 28.676 64.05 64.05s-28.676 64.05-64.05 64.05s-64.05-28.676-64.05-64.05s28.676-64.05 64.05-64.05M98.753 111.83l-.03-1.181c.516 37.649 35.295 90.4 68.93 107.793C162.721 229.955 160 242.66 160 256c0 21.42 7.015 41.202 18.873 57.172c-41.224 12.612-104.64-10.536-132.503-43.236a79 79 0 0 1-3.51-4.89l-.111-3.075l-.083-5.971c0-55.584 21.258-106.203 56.087-144.17m319.529 9.393l4.197 1.363c29.316 36.535 46.854 82.927 46.854 133.414c0 7.784-.417 15.47-1.229 23.038l1.449 1.823c-22.726-30.396-82.633-52.743-120.013-46.549c-7.627-33.018-32.279-59.515-64.211-69.749c25.726-34.711 91.011-53.461 132.953-43.34M256 42.667c31.454 0 61.318 6.807 88.2 19.029l1.771-.652c-35.804 12.177-75.416 61.937-81.295 99.358A92 92 0 0 0 256 160c-32.064 0-60.457 15.72-77.892 39.873c-24.713-35.326-22.296-102.792.194-139.399a79 79 0 0 1 3.24-4.437c23.172-8.65 48.264-13.37 74.458-13.37" clip-rule="evenodd"></svg:path>`,
})
export class IxDeviceFanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDeviceManagerIcon],svg[ix-device-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 64H64v298.667h192V320H106.667V106.667H256zM128 405.333h128V448H128zM298.667 448v-38.4h18.217v-34.752c21.946-5.645 41.53-17.107 56.928-32.794l30.01 17.357l30.739-53.222l-30.067-17.357c2.88-10.464 4.569-21.446 4.569-32.832s-1.689-22.368-4.569-32.832l30.067-17.357l-30.739-53.222l-30.01 17.357c-15.398-15.687-34.982-27.149-56.928-32.794V102.4h-18.217V64h56.618v46.387a160 160 0 0 1 22.464 12.941l6.874-3.994l33.273-19.18l19.2 33.235l30.701 53.222l19.2 33.255l-33.235 19.2l-6.874 3.936c.384 4.358.576 8.678.576 12.998s-.192 8.64-.576 12.998l6.874 3.936l33.235 19.2l-19.2 33.255l-30.701 53.222l-19.2 33.235l-33.273-19.18l-6.874-3.994a160 160 0 0 1-22.464 12.941V448zm64.307-192c0 38.164-27.831 69.823-64.307 75.789v-39.472c15.077-5.182 25.909-19.486 25.909-36.323c0-16.838-10.832-31.141-25.909-36.324v-39.459c36.476 5.966 64.307 37.625 64.307 75.789" clip-rule="evenodd"></svg:path>`,
})
export class IxDeviceManagerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDevicePlayIcon],svg[ix-device-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m405.333 260.418l-.003-217.75H64v256h218.819c21.521-26.059 54.078-42.667 90.514-42.667a117.4 117.4 0 0 1 32 4.417M106.667 85.335h256V256h-256zm362.666 288c0-53.02-42.98-96-96-96c-53.019 0-96 42.98-96 96c0 53.019 42.981 96 96 96c53.02 0 96-42.981 96-96m-127.778-46.736l85.333 48l-85.333 48z" clip-rule="evenodd"></svg:path>`,
})
export class IxDevicePlayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDevicePlayFilledIcon],svg[ix-device-play-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m405.33 42.668l.003 217.75a117.4 117.4 0 0 0-32-4.417c-36.436 0-68.993 16.608-90.514 42.667H64v-256zm64.003 330.667c0-53.02-42.98-96-96-96c-53.019 0-96 42.98-96 96c0 53.019 42.981 96 96 96c53.02 0 96-42.981 96-96m-127.778-46.736l85.333 48l-85.333 48z" clip-rule="evenodd"></svg:path>`,
})
export class IxDevicePlayFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDeviceViewFlatIcon],svg[ix-device-view-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 362.667v106.666H213.333V362.667zm-42.667 42.666H256v21.334h149.333zM64 106.667h128V128H85.333v128H192v21.333H85.333v128H192v21.334H64zm384 106.666V320H213.333V213.333zM405.333 256H256v21.333h149.333zM448 64v106.667H213.333V64zm-42.667 42.667H256V128h149.333z"></svg:path>`,
})
export class IxDeviceViewFlatIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDeviceViewHierarchicalIcon],svg[ix-device-view-hierarchical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 341.333V448H256V341.333zM405.333 384H298.667v21.333h106.666zm-256-192h21.334v42.667h64V256h-64v128h64v21.333h-85.334zM448 192v106.667H256V192zm-42.667 42.667H298.667V256h106.666zM256 64v106.667H64V64zm-42.667 42.667H106.667V128h106.666z"></svg:path>`,
})
export class IxDeviceViewHierarchicalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDiagramModuleIcon],svg[ix-diagram-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h298.667l64 64v320H128l-64-64zm277.333 42.667H106.667v256h234.666zM192 149.333v21.334h42.667l-.001 106.666H256V256h64v64h-64v-21.333h-64V320h-64v-64h64v21.333h21.333V192H192v21.333h-64v-64z"></svg:path>`,
})
export class IxDiagramModuleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDiagramModuleLibraryIcon],svg[ix-diagram-module-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 298.667L426.667 320v149.333H277.333L256 448V298.667zM384 320H277.333v106.667H384zm-64 21.333v8.534h12.8v42.666h8.533V384h21.334v21.333h-21.334V396.8H320v8.533h-21.333V384H320v8.533h8.533v-38.4H320v8.534h-21.333v-21.334zm-85.334-42.667v42.667H64v-42.666zm89.57-208.827l38.359 187.494H307.11l-33.296-176.38zM128 64v213.333H85.333V64zm64 21.333v192h-42.667v-192zm64 0v192h-42.667v-192z"></svg:path>`,
})
export class IxDiagramModuleLibraryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDiagramModuleNewIcon],svg[ix-diagram-module-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 320l-.001 63.999l64 .001v42.667l-64-.001v64H384l-.001-64H320V384l63.999-.001L384 320zM341.333 42.667l64 64v192h-42.666v64h-64l-.001 64h-192l-64-64v-320zM320 85.333H85.333v256H320zM170.667 128v21.333h42.666V256h21.334v-21.333h64v64h-64v-21.334h-64v21.334h-64v-64h64V256H192v-85.334h-21.333V192h-64v-64z"></svg:path>`,
})
export class IxDiagramModuleNewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDiamondIcon],svg[ix-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 85.333L469.334 192L256 480L42.667 192L128 85.333zm-78.77 122.666h-98.46l49.23 192zm-134.86 0h-63.164l119.767 179.796zm234.402 0h-63.143l-56.567 179.683zm-193.216-80H148.48l-38.409 48h66.818zm55.111 0h-21.334l-31.999 48h85.332zm96.832 0h-63.055l34.666 48h66.798z"></svg:path>`,
})
export class IxDiamondIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDisconnectedIcon],svg[ix-disconnected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m109.72 221.26l37.711 37.712l25.065-25.064l30.17 30.17l-25.065 25.064l45.255 45.255l25.065-25.064l30.17 30.17l-25.065 25.064l37.713 37.712l-30.17 30.17l-15.085-15.085c-36.49 36.49-92.839 41.015-134.255 13.577l-36.25 36.247l-30.169-30.17l36.248-36.249c-27.438-41.416-22.913-97.765 13.577-134.255L79.55 251.43zM89.75 59.58l362.668 362.668l-30.17 30.17L59.58 89.75zm35.055 237.104c-24.994 24.994-24.994 65.516 0 90.51c24.1 24.1 62.641 24.962 87.773 2.582l2.736-2.582zM437.019 44.81l30.17 30.17l-46.915 46.916c27.438 41.416 22.913 97.765-13.577 134.255l15.085 15.085l-30.17 30.17l-181.02-181.02l30.17-30.17l15.086 15.085c36.49-36.49 92.839-41.015 134.254-13.576zm-148.266 88.079l-2.735 2.582l89.377 89.377c17.735-26.918 22.652-67.857 1.132-89.377c-24.1-24.1-62.641-24.961-87.774-2.582"></svg:path>`,
})
export class IxDisconnectedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDiskIcon],svg[ix-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m328.832 85.333l97.834 97.835v243.498H85.333V85.333zM298.666 320h-85.333v64.021h85.333zm-128-192H128v256h42.666V277.333h170.667V384H384V200.832l-42.667-42.646v76.48H170.666zm128 0h-85.333v64.021h85.333z"></svg:path>`,
})
export class IxDiskIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDiskFilledIcon],svg[ix-disk-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 341.354v85.334h-64v-85.334zm51.499-256.021l97.834 97.835v243.498h-85.333V298.688H170.666v127.978H85.333V85.333zM341.333 128H170.666v106.666h170.667z"></svg:path>`,
})
export class IxDiskFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDiskPenIcon],svg[ix-disk-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m307.499 85.333l22.499 22.5l-52.665 52.664V128H192v64.021h53.808l-32.475 32.476v10.169h-64V128h-42.666v256h42.666V277.333h64v42.666L192 320v64.021h85.333V320h31.504L320 308.836V384h42.667l-.001-117.83l42.667-42.667v203.164H64V85.333zM388 80l65.333 65.333L300 298.667h-65.333v-65.334zm-41.362 86.599l-79.971 79.972v20.096h20.053l79.993-79.994zm41.351-41.351l-18.723 18.723l20.074 20.075l18.724-18.723z"></svg:path>`,
})
export class IxDiskPenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDistributeObjectsHorizontallyIcon],svg[ix-distribute-objects-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 448V64h42.667v384zm341.333 0V64H448v384zM192 128h-21.333v256h170.666V128zm21.333 213.333V170.667h85.334v170.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxDistributeObjectsHorizontallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDistributeObjectsVerticallyIcon],svg[ix-distribute-objects-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 106.667H64V64h384zM448 448H64v-42.667h384zm-64-256v-21.333H128v170.666h256zm-213.333 21.333h170.666v85.334H170.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxDistributeObjectsVerticallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDistributionIcon],svg[ix-distribution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.334 64c35.346 0 64 28.654 64 64s-28.654 64-64 64c-11.632 0-22.54-3.103-31.939-8.526l-57.684 49.443a63.8 63.8 0 0 1 4.29 23.083a64.3 64.3 0 0 1-1.017 11.42l44.543 25.453c11.215-9.683 25.827-15.54 41.807-15.54c35.346 0 64 28.654 64 64s-28.654 64-64 64s-64-28.653-64-64c0-3.896.348-7.711 1.015-11.416L297.8 304.465l.059-.052l-.497.426C286.208 314.296 271.77 320 256 320c-11.7 0-22.666-3.14-32.103-8.622l.159.092l-57.68 49.444A63.8 63.8 0 0 1 170.668 384c0 35.346-28.654 64-64 64s-64-28.654-64-64s28.654-64 64-64c11.632 0 22.539 3.103 31.939 8.527l57.684-49.443l-.248-.65A63.9 63.9 0 0 1 192 256a64.3 64.3 0 0 1 1.016-11.42l-44.543-25.453c-11.214 9.683-25.826 15.54-41.806 15.54c-35.346 0-64-28.654-64-64s28.654-64 64-64s64 28.653 64 64c0 3.894-.348 7.708-1.014 11.41l44.552 25.453q-.27.232-.536.468C224.951 198.041 239.77 192 256 192c11.64 0 22.555 3.108 31.96 8.539l-.036-.021l57.696-49.442A63.8 63.8 0 0 1 341.334 128c0-35.346 28.653-64 64-64M256 234.667c-11.782 0-21.333 9.55-21.333 21.333s9.551 21.333 21.333 21.333s21.334-9.55 21.334-21.333s-9.552-21.333-21.334-21.333m-149.333-85.334c-11.782 0-21.333 9.552-21.333 21.334S94.884 192 106.667 192S128 182.449 128 170.667s-9.55-21.334-21.333-21.334m298.667-42.666c-11.782 0-21.334 9.55-21.334 21.333s9.552 21.333 21.334 21.333s21.333-9.55 21.333-21.333s-9.551-21.333-21.333-21.333"></svg:path>`,
})
export class IxDistributionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocDocumentIcon],svg[ix-doc-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M100.642 425.75h5.504c13.141 0 22.87-2.155 29.205-6.422c5.547-3.69 9.558-9.365 12.011-17.088c1.813-5.717 2.73-11.797 2.73-18.261c0-6.933-1.045-13.355-3.157-19.264c-2.133-5.91-5.013-10.517-8.682-13.845c-3.499-3.115-7.488-5.248-11.947-6.358s-11.179-1.685-20.16-1.685h-5.504zm-28.864 22.613V320.235h35.456c15.083 0 27.115 1.45 36.16 4.352c11.819 3.797 20.843 10.837 27.115 21.099c6.272 10.282 9.429 23.168 9.429 38.656c0 15.914-3.157 28.906-9.43 38.976c-7.829 12.693-19.925 20.437-36.33 23.146c-7.53 1.259-17.173 1.899-28.928 1.899zm186.39-107.78c-10.433 0-18.475 4.33-24.15 13.013c-5.12 7.85-7.68 17.899-7.68 30.187c0 14.23 3.03 25.28 9.13 33.11c5.718 7.423 13.334 11.114 22.785 11.114c10.368 0 18.453-4.352 24.234-13.12c5.12-7.702 7.68-17.878 7.68-30.55c0-13.93-3.05-24.789-9.13-32.64c-5.718-7.402-13.355-11.114-22.87-11.114m.086-22.614c20.138 0 35.562 6.38 46.293 19.18c10.304 12.223 15.445 27.946 15.445 47.188q0 31.552-18.24 50.176c-10.496 10.731-25.002 16.086-43.498 16.086c-20.118 0-35.563-6.379-46.294-19.158c-10.304-12.224-15.466-28.202-15.466-47.914c0-20.608 6.101-37.142 18.282-49.558c10.539-10.666 25.046-16 43.478-16m176.27 100.175l8.427 23.062c-7.616 3.69-14.23 6.165-19.904 7.466c-5.674 1.28-12.672 1.92-20.97 1.92c-12.544 0-22.912-1.792-31.104-5.397c-11.478-5.077-20.118-13.056-25.942-23.957c-5.248-9.771-7.872-21.718-7.872-35.819c0-23.787 7.254-41.835 21.782-54.059c10.538-8.917 24.448-13.376 41.685-13.376c7.36 0 14.037.662 20.075 2.006c6.016 1.365 12.864 3.754 20.5 7.189l-9.663 21.717c-10.176-5.546-19.947-8.32-29.29-8.32c-11.265 0-19.883 3.862-25.857 11.563c-6.272 8.085-9.408 18.752-9.408 32.021c0 13.739 3.286 24.491 9.856 32.235S392.476 428 404.06 428c5.226 0 10.069-.682 14.464-2.112q6.592-2.112 16-7.744M320 42.667H85.333v234.667H128v-192h174.293L384 167.04v110.294h42.667v-128z"></svg:path>`,
})
export class IxDocDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocumentIcon],svg[ix-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 64h-192v384h298.667V170.667zm64 341.333H149.334V106.667h85.333v128h128zm0-213.333h-85.333v-85.333h3.626l81.707 81.706z"></svg:path>`,
})
export class IxDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocumentBulkIcon],svg[ix-document-bulk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.666 170.667L320 256v213.334H85.333V170.667zm-17.685 42.667H128v213.333h149.333V273.686zm81.685-106.667L384 192v213.334l-42.667-.001V209.686l-60.352-60.352l-131.648-.001v-42.666zm64-64L448 128v213.334l-42.667-.001V145.686l-60.352-60.352l-131.648-.001V42.667z"></svg:path>`,
})
export class IxDocumentBulkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocumentCodeIcon],svg[ix-document-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m307.503 42.668l119.164 119.163v307.504H85.333V42.668zm-17.69 42.667H128v341.333h256V179.521zm-23.302 83.231l20.696 5.174l-42.667 170.667l-20.696-5.174zm-72.174 27.439l16.659 13.326l-37.343 46.649l37.343 46.691l-16.659 13.327l-47.997-59.997zm123.405 0l47.998 59.996l-47.998 59.997l-16.658-13.327l37.342-46.691l-37.342-46.649z"></svg:path>`,
})
export class IxDocumentCodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocumentCodeFilledIcon],svg[ix-document-code-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 161.831L307.503 42.668H85.333v426.667h341.334zM287.208 173.74l-20.696-5.174l-42.667 170.667l20.697 5.174zm-97.544 35.592l-16.659-13.327l-47.997 59.997l47.997 59.996l16.659-13.327l-37.343-46.691zm149.413-13.327l47.997 59.997l-47.997 59.996l-16.659-13.327l37.343-46.691l-37.343-46.648z" clip-rule="evenodd"></svg:path>`,
})
export class IxDocumentCodeFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocumentFailIcon],svg[ix-document-fail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M307.503 42.667L426.666 161.83v307.504H85.333V42.667zm-17.69 42.667H128v341.333h256V179.52zm4.437 123.669l30.166 30.165l-38.251 38.251l38.25 38.25l-30.165 30.166l-38.25-38.25l-38.251 40.383l-30.165-30.165l38.25-40.384l-38.25-38.25l30.165-30.166l38.25 38.25z"></svg:path>`,
})
export class IxDocumentFailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocumentFilledIcon],svg[ix-document-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 64H106.667v384h298.666V192h-128zm128 85.333L320 64v85.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxDocumentFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocumentInfoIcon],svg[ix-document-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.667 362.667v-128h42.666v128zM256 213.333c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.333-21.333-21.333s-21.333 9.551-21.333 21.333s9.551 21.333 21.333 21.333"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M307.503 42.667H85.333v426.666h341.334V161.83zm-17.69 42.666L384 179.52v247.147H128V85.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxDocumentInfoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocumentLinkIcon],svg[ix-document-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M307.503 42.667L426.666 161.83v307.504H85.333V42.667zm-17.69 42.667H128v341.333h256V179.52zm-49.814 128v32h-26.666c-17.673 0-32 14.327-32 32c0 16.633 12.69 30.303 28.918 31.853l3.082.147h26.666v32h-26.666c-35.346 0-64-28.654-64-64s28.654-64 64-64zm58.667 0c35.347 0 64 28.653 64 64c0 35.346-28.653 64-64 64H272v-32h26.667c17.673 0 32-14.327 32-32c0-16.634-12.69-30.303-28.918-31.854l-3.082-.146H272v-32zm-5.333 48v32h-74.667v-32z"></svg:path>`,
})
export class IxDocumentLinkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocumentManagementIcon],svg[ix-document-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M286.17 42.667L405.333 161.83l.002 57.807c-13.079-3.366-27.512-5.42-42.669-6.075V179.52L268.48 85.334H106.667v341.333l127.999-.001v42.667H64V42.668zm161.41 358.666q.346 1.631.406 3.295l.013.706v21.333c0 23.564-42.98 42.667-96 42.667c-52.49 0-95.14-18.723-95.987-41.961l-.013-.706v-21.333l.013-.706q.06-1.66.402-3.288c5.88 4.419 13.038 8.494 21.332 11.983c19.358 8.144 45.462 13.344 74.253 13.344c29.932 0 56.957-5.629 76.547-14.335c7.322-3.255 13.696-6.982 19.034-10.999m0-64q.346 1.631.406 3.295l.013.706v21.333c0 23.564-42.98 42.667-96 42.667c-52.49 0-95.14-18.723-95.987-41.961l-.013-.706v-21.333l.013-.706q.06-1.66.402-3.288c5.88 4.419 13.038 8.494 21.332 11.983c19.358 8.144 45.462 13.344 74.253 13.344c29.932 0 56.957-5.629 76.547-14.335c7.322-3.255 13.696-6.982 19.034-10.999M352 234.667c52.49 0 95.14 18.722 95.987 41.961l.013.706v21.333c0 23.564-42.98 42.667-96 42.667c-52.49 0-95.14-18.723-95.987-41.961l-.013-.706v-21.333l.142-2.341c2.735-22.476 44.606-40.326 95.858-40.326"></svg:path>`,
})
export class IxDocumentManagementIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocumentMappingIcon],svg[ix-document-mapping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m307.503 42.668l119.164 119.163v307.504H85.333V42.668zm-17.69 42.667H128v341.333h256V179.521zm72.854 149.333v128h-128v-42.667H256v21.334h85.333v-85.334H234.667v-21.333zm-85.334-64v42.667H256v-21.334h-85.333v85.334h106.666v21.333h-128v-128z"></svg:path>`,
})
export class IxDocumentMappingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocumentMappingFilledIcon],svg[ix-document-mapping-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 161.831L307.503 42.668H85.333v426.667h341.334zm-277.334 8.837h128v42.667H256v-21.334h-85.333v85.334h106.666v21.333h-128zm85.334 64h128v128h-128v-42.667H256v21.334h85.333v-85.334H234.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxDocumentMappingFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocumentPlusMinusIcon],svg[ix-document-plus-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M307.503 42.667L426.667 161.83v307.503H85.333V42.666zm-17.69 42.666H128v341.334h256V179.52zM277.333 192v-42.667h-42.666V192H192v42.667h42.667v42.666h42.666v-42.666H320V192zM320 320v42.666H192V320z" clip-rule="evenodd"></svg:path>`,
})
export class IxDocumentPlusMinusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocumentPlusMinusFilledIcon],svg[ix-document-plus-minus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M307.503 42.667L426.667 161.83v307.503H85.333V42.666zM277.333 192v-42.667h-42.666V192H192v42.667h42.667v42.666h42.666v-42.666H320V192zM320 320v42.666H192V320z" clip-rule="evenodd"></svg:path>`,
})
export class IxDocumentPlusMinusFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocumentProgramIcon],svg[ix-document-program-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m307.503 42.668l119.164 119.163v307.504H85.333V42.668zm-17.69 42.667H128v341.333h256V179.521zm-70.231 57.768l15.085 15.085l-45.26 45.246l45.312 45.314l-15.085 15.085l-60.339-60.339zm72.131 127.174L352 330.668l-60.34 60.34l-15.085-15.085l45.312-45.315l-45.259-45.246zm-41.046-67.609c0-8.837 7.163-16 16-16s16 7.163 16 16s-7.164 16-16 16s-16-7.163-16-16m58.666-16c-8.836 0-16 7.163-16 16s7.164 16 16 16s16-7.163 16-16s-7.163-16-16-16m-144 144c0-8.837 7.164-16 16-16s16 7.163 16 16s-7.163 16-16 16s-16-7.163-16-16m58.667-16c-8.837 0-16 7.163-16 16s7.163 16 16 16s16-7.163 16-16s-7.163-16-16-16" clip-rule="evenodd"></svg:path>`,
})
export class IxDocumentProgramIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocumentProgramFilledIcon],svg[ix-document-program-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 161.831L307.503 42.668H85.333v426.667h341.334zm-160 24.837c-8.837 0-16 7.163-16 16s7.163 16 16 16s16-7.163 16-16s-7.164-16-16-16m26.666 16c0-8.837 7.164-16 16-16s16 7.163 16 16s-7.163 16-16 16s-16-7.163-16-16m-112 112c-8.836 0-16 7.163-16 16s7.164 16 16 16s16-7.163 16-16s-7.163-16-16-16m26.667 16c0-8.837 7.163-16 16-16s16 7.163 16 16s-7.163 16-16 16s-16-7.163-16-16m11.584-187.565l15.085 15.085l-45.26 45.246l45.313 45.314l-15.085 15.085l-60.34-60.34zm72.131 127.174l60.287 60.391l-60.34 60.34l-15.085-15.085l45.313-45.315l-45.26-45.246z" clip-rule="evenodd"></svg:path>`,
})
export class IxDocumentProgramFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocumentReferenceIcon],svg[ix-document-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M307.503 42.667L426.666 161.83v307.504H85.333V42.667zm-17.69 42.667H128v341.333h256V179.52zm-97.813 128v21.333c0 34.084 26.643 61.945 60.24 63.891l3.76.109h33.819l-38.238-38.248l30.17-30.17L371.503 320l-89.752 89.752l-30.17-30.17l38.238-38.249h-33.82c-57.36 0-104.145-45.275-106.567-102.039l-.099-4.627v-21.333z"></svg:path>`,
})
export class IxDocumentReferenceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocumentSettingsIcon],svg[ix-document-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M307.503 42.667L426.666 161.83v89.961a127.2 127.2 0 0 0-42.665-15.354L384 179.52l-94.187-94.186H128v341.333h123.79a128.65 128.65 0 0 0 40.097 42.667H85.333V42.667zM392.18 256v22.836a88.8 88.8 0 0 1 28.135 16.268l19.797-11.43l29.63 51.32l-19.785 11.423a89.4 89.4 0 0 1 1.482 16.25c0 5.55-.508 10.982-1.482 16.25l19.784 11.423l-29.63 51.32l-19.796-11.43a88.8 88.8 0 0 1-28.134 16.268v22.836h-59.26v-22.836a88.8 88.8 0 0 1-28.134-16.267l-19.798 11.43l-29.63-51.32l19.785-11.424a89.4 89.4 0 0 1-1.482-16.25c0-5.55.508-10.982 1.482-16.251l-19.784-11.422l29.63-51.32l19.796 11.43a88.8 88.8 0 0 1 28.134-16.268V256zm-29.63 71.111c-19.636 0-35.555 15.92-35.555 35.556c0 19.637 15.919 35.556 35.556 35.556s35.555-15.92 35.555-35.556c0-19.637-15.919-35.556-35.555-35.556"></svg:path>`,
})
export class IxDocumentSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDocumentSuccessIcon],svg[ix-document-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M307.503 42.667L426.666 161.83v307.504H85.333V42.667zm-17.69 42.667H128v341.333h256V179.52zm15.104 134.252l30.165 30.166l-100.416 100.416l-57.749-57.75l30.165-30.165l27.584 27.584z"></svg:path>`,
})
export class IxDocumentSuccessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDoubleCheckIcon],svg[ix-double-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m73.36 235.2l88.709 84.31l22.599-32.158l31.283 29.719l-47.382 67.428L43.973 266.133zm362.518-92.8l34.91 24.531l-152.886 217.567l-124.596-118.366l29.387-30.933l88.71 84.31zm-149.333 0l34.91 24.531l-55.915 79.57l-31.269-29.726z"></svg:path>`,
})
export class IxDoubleCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDoubleChevronDownIcon],svg[ix-double-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M377.814 281.813L256 403.413l-121.813-121.6l30.293-30.293L256 343.253l91.52-91.733zm0-128L256 275.413l-121.813-121.6l30.293-30.293L256 215.253l91.52-91.733z"></svg:path>`,
})
export class IxDoubleChevronDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDoubleChevronLeftIcon],svg[ix-double-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M236.583 256.007L358.204 377.82l30.272-30.315l-91.712-91.498l91.712-91.52l-30.272-30.315zm-127.979 0L230.183 377.82l30.293-30.315l-91.733-91.498l91.733-91.52l-30.293-30.315z"></svg:path>`,
})
export class IxDoubleChevronLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDoubleChevronRightIcon],svg[ix-double-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M281.813 134.187L403.413 256l-121.6 121.814l-30.293-30.294L343.253 256l-91.733-91.52zm-128 0L275.413 256l-121.6 121.814l-30.293-30.294L215.253 256l-91.733-91.52z"></svg:path>`,
})
export class IxDoubleChevronRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDoubleChevronUpIcon],svg[ix-double-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M134.186 230.187L256 108.587l121.813 121.6l-30.293 30.293L256 168.747l-91.52 91.733zm0 128L256 236.587l121.813 121.6l-30.293 30.293L256 296.747l-91.52 91.733z"></svg:path>`,
})
export class IxDoubleChevronUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDoubletIcon],svg[ix-doublet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m384 170.667l64 64v234.667H192V170.667zm-17.685 42.667H234.667v213.333h170.666V252.352zM320 359.949c13.283 0 24.052 10.768 24.052 24.051c0 13.284-10.769 24.052-24.052 24.052S295.948 397.284 295.948 384s10.769-24.05 24.052-24.05m21.333-125.282v106.667h-42.666V234.667zM256 42.667l64 64v42.666h-42.667v-24.98l-39.018-39.02H106.667v213.334h63.999v42.666H64V42.668z"></svg:path>`,
})
export class IxDoubletIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDoubletFilledIcon],svg[ix-doublet-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m384 170.667l64 64v234.667H192V170.667zM320 370.56c-13.283 0-24.052 10.769-24.052 24.052c0 13.284 10.769 24.052 24.052 24.052s24.052-10.768 24.052-24.052S333.283 370.56 320 370.56m21.333-135.893h-42.666v106.667h42.666zM256 42.667l64 64v42.666h-42.667v-24.98l-39.018-39.02H106.667v213.334h63.999v42.666H64V42.668z"></svg:path>`,
})
export class IxDoubletFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDoughnutchartIcon],svg[ix-doughnutchart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 43.836c117.821 0 213.333 95.513 213.333 213.333c0 117.821-95.512 213.334-213.333 213.334S42.667 374.99 42.667 257.169c0-117.82 95.512-213.333 213.333-213.333M85.333 257.169c0 94.257 76.41 170.667 170.667 170.667c39.428 0 75.734-13.37 104.63-35.825l-45.804-45.848c-16.863 11.169-37.085 17.673-58.826 17.673c-58.91 0-106.667-47.756-106.667-106.667c0-51.603 36.644-94.647 85.33-104.532l.005-64.814C150.479 98.32 85.333 170.137 85.333 257.169m340.011 21.354l-64.816.005a106.1 106.1 0 0 1-15.535 37.467l45.849 45.804c18.336-23.596 30.614-52.133 34.502-83.276M256 193.169c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.653 64-64c0-35.346-28.654-64-64-64m21.352-105.344l-.009 64.813c41.789 8.487 74.705 41.404 83.189 83.194l64.814.005c-9.625-77.193-70.803-138.377-147.994-148.012" clip-rule="evenodd"></svg:path>`,
})
export class IxDoughnutchartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDoughnutchartFilledIcon],svg[ix-doughnutchart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m235.14 42.664l.007 129.954c-36.898 9.495-64.163 42.989-64.163 82.851c0 47.245 38.299 85.545 85.544 85.545c15.865 0 30.721-4.319 43.457-11.844l91.894 91.888c-36.867 30.171-83.995 48.273-135.351 48.273c-118.112 0-213.861-95.749-213.861-213.862c0-110.894 84.403-202.074 192.473-212.805m186.988 348.143l-91.888-91.901a85 85 0 0 0 9.138-22.052l129.955.004c-4.27 43.007-21.281 82.266-47.205 113.949m47.205-156.726l-129.96-.014c-7.74-30.047-31.395-53.703-61.442-61.443l.007-129.958c101.025 10.042 181.364 90.387 191.395 191.415" clip-rule="evenodd"></svg:path>`,
})
export class IxDoughnutchartFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDownloadIcon],svg[ix-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m397.653 208.427l-27.307-32.853l-93.013 77.653V42.667h-42.667v210.56l-93.013-77.653l-27.307 32.853L256 326.4zM85.333 384h341.333v42.667H85.333z"></svg:path>`,
})
export class IxDownloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDownloadAddIcon],svg[ix-download-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 320l-.001 64h64v42.667h-64v64H384v-64h-64V384h64v-64zm-128.001 64v42.666L64 426.667V384zM256 42.667v210.56l93.013-77.653l27.307 32.853L234.667 326.4L93.013 208.427l27.307-32.853l93.013 77.653V42.667z"></svg:path>`,
})
export class IxDownloadAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDownloadDeltaIcon],svg[ix-download-delta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M426.667 426.666v42.667H85.333v-42.667zm-149.32-213.179v119.168l48.915-48.92l30.17 30.17l-100.419 100.419l-100.418-100.419l30.17-30.17l48.915 48.877V213.487zm-106.68-106.821v64h-64v-64zm234.666 0v64h-64v-64zM288 42.666v64h-64v-64z"></svg:path>`,
})
export class IxDownloadDeltaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDownloadFullIcon],svg[ix-download-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M426.667 426.666v42.667H85.333v-42.667zm-149.32-213.179v119.168l48.915-48.92l30.17 30.17l-100.419 100.419l-100.418-100.419l30.17-30.17l48.915 48.877V213.487zm-96.014-85.488v64h-64v-64zm106.667 0v64h-64v-64zm106.667 0v64h-64v-64zM181.333 42.666v64h-64v-64zm106.667 0v64h-64v-64zm106.667 0v64h-64v-64z"></svg:path>`,
})
export class IxDownloadFullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDownloadListIcon],svg[ix-download-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M490.667 448v42.667H384V448zm-128 0v42.667H320V448zm128-64v42.667H384V384zm-128 0v42.667H320V384zm-64 0v42.667H64V384zm192-64v42.667H384V320zm-128 0v42.667H320V320zM256 42.667v210.56l93.013-77.653l27.307 32.853L234.667 326.4L93.013 208.427l27.307-32.853l93.013 77.653V42.667z"></svg:path>`,
})
export class IxDownloadListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDowntimeIcon],svg[ix-downtime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405.347 277.488v119.168l48.915-48.919l30.17 30.17l-100.419 100.418l-100.418-100.418l30.17-30.17l48.915 48.877V277.488zm-149.666-213.8c106.038 0 192 85.961 192 192v.32l-21.001.147l-21.667-.017l.001-.45c0-82.475-66.859-149.334-149.333-149.334s-149.334 66.859-149.334 149.334c0 82.474 66.859 149.333 149.334 149.333c7.85 0 15.559-.606 23.082-1.773l35.368 35.38c-18.43 5.884-38.069 9.06-58.45 9.06c-106.039 0-192-85.962-192-192c0-106.039 85.961-192 192-192m21.652 85.646v95.147l54.4 36.48l-23.466 35.413l-73.6-48.853V149.334z"></svg:path>`,
})
export class IxDowntimeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDragAndDropIcon],svg[ix-drag-and-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 128H320V42.667H42.667V320H128v-42.667H85.333v-192h192zM192 181.333h-10.667V192h-32v-42.667H192zm-42.667 53.334v42.666h32v-42.666zm0 128V320h32v42.667zM416 320v42.667h32V320zm32-42.667h-32v-42.666h32zm-170.667-128h-42.666v32h42.666zm42.667 0h42.667v32H320zM277.333 448v-32h-42.666v32zM320 416h42.667v32H320zm-138.667 0v-10.667h-32V448H192v-32zM416 181.333V192h32v-42.667h-42.667v32zM416 416h-10.667v32H448v-42.667h-32zm-74.225-181.333L298.667 192L256 234.667zm-43.108 170.666L256 362.667h85.775zm-64-149.333L192 298.667l42.667 42.666zm170.666 42.667l-42.666 42.666V256z" clip-rule="evenodd"></svg:path>`,
})
export class IxDragAndDropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDragGripperIcon],svg[ix-drag-gripper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M181.333 149.333c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m149.334 0c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.326 32 32 32m-117.334 96c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32m117.334 32c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.326 32 32 32m-117.334 96c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32m117.334 32c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.326 32 32 32" clip-rule="evenodd"></svg:path>`,
})
export class IxDragGripperIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDrawCircleIcon],svg[ix-draw-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 42.666c117.821 0 213.333 95.513 213.333 213.333c0 117.821-95.512 213.334-213.333 213.334S42.667 373.82 42.667 255.999c0-117.82 95.512-213.333 213.333-213.333m0 42.667c-94.257 0-170.667 76.41-170.667 170.666c0 94.257 76.41 170.667 170.667 170.667s170.667-76.41 170.667-170.667c0-94.256-76.41-170.666-170.667-170.666"></svg:path>`,
})
export class IxDrawCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDrawCircleArcIcon],svg[ix-draw-circle-arc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 469.333c-117.821 0-213.333-95.513-213.333-213.334c0-117.82 95.512-213.333 213.333-213.333v42.667c-94.257 0-170.667 76.41-170.667 170.666c0 94.257 76.41 170.667 170.667 170.667s170.667-76.41 170.667-170.667h42.666c0 117.821-95.512 213.334-213.333 213.334"></svg:path>`,
})
export class IxDrawCircleArcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDrawCircleSegmentIcon],svg[ix-draw-circle-segment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 42.666c7.208 0 14.333.358 21.357 1.056l-.024 190.944l190.947-.002a216 216 0 0 1 1.053 21.335c0 117.821-95.512 213.334-213.333 213.334S42.667 373.82 42.667 255.999c0-117.82 95.512-213.333 213.333-213.333M85.333 255.999c0 94.257 76.41 170.667 170.667 170.667c87.025 0 158.837-65.135 169.344-149.313l-190.677-.02l.001-190.68C150.479 97.151 85.333 168.967 85.333 255.999"></svg:path>`,
})
export class IxDrawCircleSegmentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDrawEllipseSegmentIcon],svg[ix-draw-ellipse-segment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 255.999c0 82.475-95.512 149.334-213.333 149.334S42.667 338.474 42.667 255.999c0-82.474 95.512-149.333 213.333-149.333c7.206 0 14.329.25 21.352.739l-.019 127.261l189.842.008a106.4 106.4 0 0 1 2.158 21.325m-387.878 0c0 53.832 75.478 106.667 174.545 106.667c85.869 0 154.017-39.696 170.65-85.329l-191.983-.004l.01-127.174c-88.373 6.902-153.222 55.943-153.222 105.84"></svg:path>`,
})
export class IxDrawEllipseSegmentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDrawerDocumentsIcon],svg[ix-drawer-documents-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" d="M106.667 298.164h-.5v107.1h299.666v-107.1zm298.166-178.796v114.228h-41.666v-96.952l-.147-.147l-51.52-51.52l-.146-.146h-98.521v148.765h-41.666V43.164h157.462zM64.5 446.931V256.497h383v190.434zm276.333-254.434v41.667H235.167v-41.667zm-42.666-63.432v41.667h-63v-41.667zm-191-65.135h41.666v169.666h-41.666zM192.5 320.497h127v41.667h-127z"></svg:path>`,
})
export class IxDrawerDocumentsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDrawingDocumentIcon],svg[ix-drawing-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m320 42.664l106.667 106.667v320h-192v-42.667H384V167.037l-81.707-81.706H128v234.666H85.333V42.664zM114.325 413.523l7.147-32.171c3.925-17.6 18.475-30.848 36.373-33.088l1.046-.128c27.626-3.456 51.093 20.011 47.637 47.637l-.128 1.046c-2.24 17.898-15.488 32.448-33.088 36.373l-32.171 7.147l-34.474 7.658zm29.91-3.094l23.722-5.269a14.42 14.42 0 0 0 11.179-12.288l.192-1.451c1.152-9.322-6.763-17.237-16.107-16.085l-1.429.192a14.42 14.42 0 0 0-12.288 11.179zm90.432-47.765l-12.502-12.501l-17.664-17.664L192 319.997l30.165-30.165l87.168-87.168c11.776-11.776 30.891-11.776 42.667 0s11.776 30.891 0 42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxDrawingDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDrawingDocumentFilledIcon],svg[ix-drawing-document-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 42.664H320l106.667 106.667v320H85.333zm36.144 338.686l-14.811 66.647l66.648-14.811c17.602-3.911 30.845-18.466 33.082-36.359l.132-1.062c3.452-27.61-20.02-51.081-47.629-47.631l-1.064.134c-17.892 2.236-32.447 15.48-36.358 33.082m70.522-61.353l42.668 42.667L352 245.331c11.782-11.783 11.782-30.885 0-42.667s-30.884-11.782-42.667 0z" clip-rule="evenodd"></svg:path>`,
})
export class IxDrawingDocumentFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDropIcon],svg[ix-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256.001 40.292l34.654 37.914l28.09 31.139l14.803 16.65l17.35 19.835l7.654 8.907l13.27 15.798l8.175 10.09l4.604 5.892c34.234 44.599 50.023 101.19 36.996 153.437c-19.075 76.509-87.82 129.478-165.957 129.413l-5.808-.106c-75.415-2.698-140.875-54.995-159.403-129.307c-13.03-52.263 2.755-108.871 37.002-153.445l7.167-9.09l8.688-10.594l13.956-16.473l12.25-14.121l13.782-15.64l15.317-17.16l22.817-25.26zm0 63.238l-25.37 28.08l-19.735 22.149l-20.83 23.86l-13.582 16.012l-10.835 13.27l-4.385 5.603c-26.854 34.952-39.034 78.631-29.436 117.128c13.897 55.736 63.002 94.968 119.14 96.98l5.063.091c58.29.047 109.86-39.69 124.167-97.07c9.594-38.48-2.59-82.155-29.442-117.136l-4.406-5.634l-7.912-9.753l-9.476-11.312l-15.06-17.5l-13.109-14.935l-19.893-22.316zm85.333 195.136C341.334 345.813 303.147 384 256 384v-42.667c23.467 0 42.667-19.2 42.667-42.667Z"></svg:path>`,
})
export class IxDropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDropZoneIcon],svg[ix-drop-zone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m134.4 72.96l121.813 121.6l121.813-121.6l-30.293-30.293l-91.52 91.733l-91.52-91.733zM106.667 64v64H64V64zM64 170.667v64h42.667v-64zm0 170.666v-64h42.667v64zm341.333-64v64H448v-64zm0-42.666v-64H448v64zM234.667 405.333h-64V448h64zm42.666 0h64V448h-64zm-170.666 0V384H64v64h64v-42.667zm298.666-298.666V128H448V64h-42.667zm0 298.666H384V448h64v-64h-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxDropZoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDuplicateIcon],svg[ix-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 149.333V448H149.333V149.333zM405.333 192H192v213.333h213.333zM320 234.667v42.666h42.667V320h-42.668l.001 42.667h-42.667v-42.668l-42.666.001v-42.667h42.666v-42.666zM362.667 64l-.001 64H320v-21.333H106.667V320H128v42.666H64V64z"></svg:path>`,
})
export class IxDuplicateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDuplicateDocumentIcon],svg[ix-duplicate-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m384 170.667l64 64v234.667H192V170.667zm-17.685 42.667H234.667v213.333h170.666V252.352zM341.333 256v42.667H384v42.667l-42.667-.001V384h-42.666l-.001-42.667H256v-42.666h42.666V256zM256 42.667l64 64v42.666h-42.667v-24.98l-39.018-39.02H106.667v213.334h63.999v42.666H64V42.668z"></svg:path>`,
})
export class IxDuplicateDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixDuplicateFilledIcon],svg[ix-duplicate-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128.495 362.667h-64V64H363.16v64h-42.666v-21.333H107.161V320h21.334zm320 85.333V149.333H149.828V448zM384 277.333h-64v-64h-42.667v64h-64V320h64v64H320v-64h64z" clip-rule="evenodd"></svg:path>`,
})
export class IxDuplicateFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEMailIcon],svg[ix-e-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 64v298.667h171.07a141 141 0 0 1-.404-10.667c0-11.014 1.284-21.728 3.711-32H85.334V128l149.333 129.013L384 128v89.044a137.9 137.9 0 0 1 42.667 18.088V64zm304 42.667l-112 96l-112-96zm62.157 328.822l4.453 24.701q-27.797 9.143-56.67 9.143q-53.137 0-86.464-30.957q-35.476-32.722-35.476-86.617q0-50.847 33.633-83.569q34.708-33.523 88-33.523q48.224 0 79.707 25.985q15.665 12.992 24.419 31.919q8.907 19.57 8.907 43.148q0 37.374-20.733 59.669q-18.582 19.89-41.926 19.89q-24.88 0-27.337-22.616q-15.358 22.616-41.466 22.616q-21.04 0-33.327-12.19q-13.36-13.153-13.361-36.091q0-15.238 6.067-29.914q6.066-14.677 16.816-25.424q20.426-20.37 52.524-20.371q24.265 0 45.305 7.86l-10.289 66.727q-1.536 9.784-1.536 14.275q0 11.068 9.368 11.068q12.286 0 21.962-14.917q11.825-18.126 11.825-42.988q0-34.166-23.037-53.253q-25.493-21.012-63.274-21.012q-29.18 0-53.137 14.436q-22.577 13.634-33.941 36.892q-9.061 18.928-9.061 42.025q0 43.79 30.408 69.454q26.722 22.616 67.882 22.616q23.496 0 49.759-8.982M379.797 315.83q-7.832-2.247-12.746-2.246q-8.754 0-17.355 4.571q-8.6 4.572-14.743 12.592q-12.594 16.2-12.594 36.25q0 11.229 5.529 17.725t15.051 6.496q13.822 0 22.883-11.87q4.76-6.095 7.525-23.579z" clip-rule="evenodd"></svg:path>`,
})
export class IxEMailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEMailFilledIcon],svg[ix-e-mail-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m75.354 64l159.324 137.19L394.003 64zm-32.662 0h-.025v.03zm-.025 28.16v270.507h171.07a141 141 0 0 1-.404-10.667c0-76.583 62.083-138.667 138.667-138.667c27.491 0 53.114 8 74.667 21.799V92.179L234.678 257.503zm384-28.157V64h-.003zm-17.843 371.486l4.453 24.701q-27.797 9.143-56.67 9.143q-53.137 0-86.464-30.957q-35.476-32.722-35.476-86.617q0-50.847 33.633-83.569q34.708-33.523 88-33.523q48.224 0 79.707 25.985q15.665 12.992 24.419 31.919q8.907 19.57 8.907 43.148q0 37.374-20.733 59.669q-18.582 19.89-41.926 19.89q-24.88 0-27.337-22.616q-15.358 22.616-41.466 22.616q-21.04 0-33.327-12.19q-13.36-13.153-13.361-36.091q0-15.238 6.067-29.914q6.066-14.677 16.816-25.424q20.426-20.37 52.524-20.371q24.265 0 45.305 7.86l-10.289 66.727q-1.536 9.784-1.536 14.275q0 11.068 9.368 11.068q12.286 0 21.962-14.917q11.825-18.126 11.825-42.988q0-34.166-23.037-53.253q-25.493-21.012-63.274-21.012q-29.18 0-53.137 14.436q-22.577 13.633-33.941 36.892q-9.061 18.928-9.061 42.025q0 43.79 30.408 69.454q26.722 22.616 67.882 22.616q23.496 0 49.759-8.982M379.797 315.83q-7.832-2.247-12.746-2.246q-8.754 0-17.355 4.571q-8.6 4.572-14.743 12.592q-12.594 16.2-12.594 36.25q0 11.229 5.529 17.725t15.051 6.496q13.822 0 22.883-11.87q4.76-6.095 7.525-23.579z" clip-rule="evenodd"></svg:path>`,
})
export class IxEMailFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEarthIcon],svg[ix-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m0 42.667q-5.375 0-10.667.328v48.047l-96 79.625l-48.161-29.23c-10.164 21.85-15.838 46.21-15.838 71.896c0 67.48 39.161 125.811 95.997 153.509l.003-53.093l-41.826-41.824l-12.018-60.089l16.692-33.385l60.554 24.216h71.182l12.446 87.123l-46.804 93.608c4.76.399 9.577.602 14.44.602c60.21 0 113.137-31.178 143.517-78.27l-34.12-113.73h-31.285l-25.794-64.486l28.879-57.758l47.869 31.908C353.772 108.194 307.556 85.334 256 85.334m-94.272 177.258l7.254 36.203l44.352 44.366v51.485h8.149l33.792-67.563l-7.125-49.77l-49.575.02zm187.883-103.445l-6.25 12.48l12.415 31.04h33.43l12.821 42.773l-15.424-61.61zm-136.299-41.813h-31.68l-38.954 54.528l3.776 2.282l66.858-55.466z"></svg:path>`,
})
export class IxEarthIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEarthFilledIcon],svg[ix-earth-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m0 42.667q-5.375 0-10.667.328v48.047l-96 79.625l-48.161-29.23c-10.164 21.85-15.838 46.21-15.838 71.896c0 67.48 39.161 125.811 95.997 153.509l.003-53.093l-41.826-41.824l-12.018-60.089l16.692-33.385l60.554 24.216h71.182l12.446 87.123l-46.804 93.608c4.76.399 9.577.602 14.44.602c60.21 0 113.137-31.178 143.517-78.27l-34.12-113.73h-31.285l-25.794-64.486l28.879-57.758l47.869 31.908C353.772 108.194 307.556 85.334 256 85.334"></svg:path>`,
})
export class IxEarthFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEditDocumentIcon],svg[ix-edit-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 224L373.334 42.667l96 96L288 320h-96zm217.003-85.333l-35.669-35.67l-29.387 29.386l35.67 35.67zM234.667 241.664l79.111-79.111l35.669 35.67l-79.111 79.11h-35.669zm106.666 163.669V295.006L384 252.34V448H85.334V64H320l-42.667 42.667H128v298.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxEditDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEditDocumentFilledIcon],svg[ix-edit-document-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m396.445 42.667l72.889 72.889l-45.944 45.943l-72.889-72.89zm-66.057 66.056l72.889 72.889L264.889 320H192v-72.889zM277.333 64h67.608L170.667 238.275v103.058h103.059L384 231.059V448H85.334V64z" clip-rule="evenodd"></svg:path>`,
})
export class IxEditDocumentFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEditPlantIcon],svg[ix-edit-plant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 234.667V64H64v362.667h170.667v-26.17l16.497-16.498H106.667v-82.483l43.404-23.508l84.596-45.817v69.645l128-70.135v40.796l42.666-42.667v-65.282l-128 70.119v-69.334zM474.667 316l-65.334-65.333L256 404v65.333h65.333zM288 417.237l79.972-79.971l20.074 20.074l-79.993 79.993H288zm122.674-82.524l-20.075-20.075l18.724-18.723l20.074 20.074z" clip-rule="evenodd"></svg:path>`,
})
export class IxEditPlantIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEditPlantFilledIcon],svg[ix-edit-plant-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 64v170.667l128-69.334v69.334l128-70.119v70.615L234.667 405.83v20.837H64V64zm260 197.333L464 316l-34.458 34.458l-54.666-54.667zm-49.542 49.543l54.667 54.666l-103.791 103.791H256v-54.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxEditPlantFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEditorGridIcon],svg[ix-editor-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.667 64v64h64V64h42.666v64h64V64H384v64h64v42.667h-64v64h64v42.666h-64v64h64V384h-64v64h-42.667v-64h-64v64h-42.666v-64h-64v64H128v-64H64v-42.667h64v-64H64v-42.666h64v-64H64V128h64V64zm64 213.333h-64v64h64zm106.666 0h-64v64h64zM234.667 170.667h-64v64h64zm106.666 0h-64v64h64z"></svg:path>`,
})
export class IxEditorGridIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEditorGridDotsIcon],svg[ix-editor-grid-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 448H64V64h384zm-341.333-42.667h298.666V106.667H106.667zM192 320v42.667h-42.667V320zm85.333 0v42.667h-42.666V320zm85.334 0v42.667H320V320zM192 234.667v42.666h-42.667v-42.666zm85.333 0v42.666h-42.666v-42.666zm85.334 0v42.666H320v-42.666zM192 149.333V192h-42.667v-42.667zm85.333 0V192h-42.666v-42.667zm85.334 0V192H320v-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxEditorGridDotsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEditorGridLinesIcon],svg[ix-editor-grid-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-42.667 42.667H106.667v298.666h298.666zM384 213.333h-64v85.334h64V320h-64v64h-21.333v-64h-85.334v64H192v-64h-64v-21.333h64v-85.334h-64V192h64v-64h21.333v64h85.334v-64H320v64h64zm-170.667 0h85.334v85.334h-85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxEditorGridLinesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEditorGridMagnetIcon],svg[ix-editor-grid-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 405.335v64h-42.667v-64zm53.333-128c53.02 0 96 42.98 96 96c0 53.019-42.98 96-96 96h-32v-64h32c17.673 0 32-14.327 32-32s-14.327-32-32-32h-32v-64zm-224-234.667v64h64v-64H256v64h64v-64h42.667v64h64v42.667h-64v64h64v42.666H256v170.667h-42.667v-64h-64v64h-42.666v-64h-64v-42.667h64v-64h-64v-42.666h64v-64h-64v-42.667h64v-64zM320 277.335v64h-42.667v-64zm-106.667-21.334h-64v64h64zm0-106.666h-64v64h64zm106.667 0h-64v64h64z"></svg:path>`,
})
export class IxEditorGridMagnetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEditorGridNoneIcon],svg[ix-editor-grid-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 64v384H64V64zm-42.667 42.667H106.667v298.666h298.666z"></svg:path>`,
})
export class IxEditorGridNoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEditorGuideLinesMagnetIcon],svg[ix-editor-guide-lines-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 405.335v64h-42.667v-64zm53.333-128c53.02 0 96 42.98 96 96c0 53.019-42.98 96-96 96h-32v-64h32c17.673 0 32-14.327 32-32s-14.327-32-32-32h-32v-64zM128 42.668v106.667h42.667V42.668h42.666v106.667h256v42.666h-256v277.334h-42.666V192.001H128v277.334H85.333V192.001H42.667v-42.666h42.666V42.668zm192 234.667v64h-42.667v-64z"></svg:path>`,
})
export class IxEditorGuideLinesMagnetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEditorGuidesIcon],svg[ix-editor-guides-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 106.667H192v42.666h42.667v-42.666H448V64H64v384h42.667V234.667h42.666V192h-42.666zM192 192h42.667v42.667H192zm42.667 85.333H192V320h42.667zM192 362.667h42.667v42.666H192zM320 192h-42.667v42.667H320zm42.667 0h42.666v42.667h-42.666zm55.544 115.123l-15.085 15.085l-19.123-19.123v59.582h59.583l-19.125-19.125l15.085-15.085l44.876 44.876l-44.876 44.875l-15.085-15.085L443.585 384h-59.582v59.584l19.125-19.125l15.085 15.084l-44.876 44.876l-44.876-44.876l15.085-15.084l19.123 19.123V384h-59.583l19.125 19.125l-15.085 15.085l-44.876-44.876l44.876-44.876l15.085 15.085l-19.124 19.124h59.582v-59.584l-19.125 19.125l-15.085-15.085l44.876-44.876z" clip-rule="evenodd"></svg:path>`,
})
export class IxEditorGuidesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEditorResourcesIcon],svg[ix-editor-resources-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 256v64h-32l-6.391-25.6h-38.391v115.2l34.115 9.6V448H298.667v-28.8l34.161-9.6V294.4h-38.391L288 320h-31.954v-64zM341.333 64v170.667h-94.44l-42.797 40.023l-53.045-68.38l-44.384 71.023v21.334h128v42.666H64V64zm-42.666 42.667h-192v106.666l41.633-78.93l60.99 78.647l37.603-34.485l51.774 34.768zM236.759 121.6c10.601 0 19.195 8.596 19.195 19.2S247.36 160 236.759 160s-19.196-8.596-19.196-19.2s8.594-19.2 19.196-19.2"></svg:path>`,
})
export class IxEditorResourcesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixElectricalEnergyIcon],svg[ix-electrical-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m341.333 42.667l-31.96 128h106.676L149.497 469.334L202.727 256h-85.312l53.251-213.333zm-20.569 170.667h-63.416l-13.224 52.996l-11.402 45.649zm-34.069-128h-82.71l-31.957 128h82.714l13.235-53.003z"></svg:path>`,
})
export class IxElectricalEnergyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixElectricalEnergyFilledIcon],svg[ix-electrical-energy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 42.667L325.51 192h106.667L171.17 469.334l58.389-234.667h-85.333l47.773-192z"></svg:path>`,
})
export class IxElectricalEnergyFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixElementIcon],svg[ix-element-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 85.335h106.667V192H320zm-42.667-42.667h192v192h-192zM106.667 149.335h106.666v106.666H106.667zm256 106.666H256V106.668H64v341.333h341.333v-192zm-149.334 42.667v106.667H106.667V298.668zm149.334 106.667H256V298.668h106.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxElementIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixElementFilledIcon],svg[ix-element-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64H298.667v149.333H448zM234.667 85.333H85.333v149.334h149.334zm-149.334 192h149.334v149.334H85.333zm341.334 0H277.333v149.334h149.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxElementFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEllipseIcon],svg[ix-ellipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 106.667c117.824 0 213.334 66.859 213.334 149.333S373.824 405.334 256 405.334S42.667 338.475 42.667 256c0-82.474 95.51-149.333 213.333-149.333m0 42.667c-96.853 0-170.666 52.842-170.666 106.666S159.147 362.667 256 362.667c96.854 0 170.667-52.843 170.667-106.667S352.854 149.334 256 149.334"></svg:path>`,
})
export class IxEllipseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEllipseArcIcon],svg[ix-ellipse-arc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 405.334c-117.824 0-213.333-66.859-213.333-149.334c0-82.474 95.51-149.333 213.333-149.333v42.88c-96.896 0-170.666 52.608-170.666 106.453S159.147 362.624 256 362.624c96.854 0 170.582-52.778 170.603-106.602l42.73-.022c0 82.475-95.509 149.334-213.333 149.334"></svg:path>`,
})
export class IxEllipseArcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEllipseFilledIcon],svg[ix-ellipse-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 106.667c117.824 0 213.334 66.859 213.334 149.333S373.824 405.334 256 405.334S42.667 338.475 42.667 256c0-82.474 95.51-149.333 213.333-149.333"></svg:path>`,
})
export class IxEllipseFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEmailDocumentIcon],svg[ix-email-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 42.664H64v192l42.667-21.333v-128H280.96L384 170.664v256h-85.333v42.667h128v-320zm-60.51 392.822l4.454 24.702q-27.798 9.143-56.67 9.143q-53.139 0-86.465-30.958Q64.001 405.652 64 351.757q0-50.848 33.634-83.569q34.708-33.524 87.999-33.524q48.223 0 79.707 25.985q15.666 12.993 24.419 31.92q8.908 19.568 8.908 43.148q0 37.373-20.733 59.669q-18.583 19.89-41.927 19.89q-24.88 0-27.337-22.617q-15.357 22.617-41.466 22.617q-21.04 0-33.326-12.191q-13.362-13.153-13.361-36.09q0-15.238 6.066-29.915t16.817-25.423q20.426-20.371 52.523-20.371q24.265 0 45.306 7.859l-10.29 66.727q-1.536 9.785-1.536 14.276q0 11.067 9.368 11.067q12.287 0 21.962-14.917q11.826-18.125 11.825-42.987q0-34.166-23.036-53.253q-25.494-21.013-63.274-21.013q-29.18 0-53.138 14.436q-22.576 13.635-33.94 36.892q-9.062 18.928-9.062 42.025q0 43.79 30.409 69.454q26.723 22.617 67.881 22.617q23.497 0 49.759-8.983m-29.026-119.659q-7.833-2.246-12.747-2.246q-8.754 0-17.354 4.572q-8.6 4.571-14.744 12.591q-12.593 16.201-12.593 36.251q0 11.228 5.529 17.724t15.05 6.496q13.823 0 22.883-11.869q4.761-6.096 7.526-23.579z" clip-rule="evenodd"></svg:path>`,
})
export class IxEmailDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEmailDocumentFilledIcon],svg[ix-email-document-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 149.331L320 42.664H85.333v426.667h341.334zM280.824 414.153l4.453 24.702q-27.796 9.142-56.67 9.142q-53.137 0-86.464-30.957q-35.476-32.722-35.476-86.617q0-50.847 33.633-83.568q34.709-33.525 88-33.524q48.224 0 79.707 25.985q15.665 12.992 24.419 31.919q8.907 19.57 8.907 43.148q0 37.374-20.733 59.67q-18.582 19.889-41.926 19.889q-24.88 0-27.337-22.616q-15.358 22.616-41.466 22.616q-21.04 0-33.326-12.19q-13.362-13.153-13.362-36.09q0-15.239 6.067-29.915q6.066-14.677 16.816-25.424q20.426-20.37 52.524-20.371q24.266 0 45.305 7.86l-10.289 66.727q-1.536 9.784-1.536 14.275q0 11.068 9.368 11.068q12.286 0 21.962-14.917q11.825-18.126 11.825-42.988q0-34.166-23.036-53.253q-25.494-21.012-63.274-21.012q-29.18 0-53.138 14.436q-22.577 13.634-33.941 36.892q-9.061 18.928-9.061 42.025q0 43.79 30.408 69.454q26.722 22.616 67.882 22.616q23.497 0 49.759-8.982m-29.026-119.659q-7.833-2.246-12.747-2.246q-8.754 0-17.355 4.571q-8.6 4.572-14.743 12.592q-12.593 16.2-12.593 36.251q0 11.228 5.528 17.724q5.529 6.496 15.051 6.496q13.822 0 22.883-11.87q4.76-6.095 7.525-23.578z" clip-rule="evenodd"></svg:path>`,
})
export class IxEmailDocumentFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEmergencyStopIcon],svg[ix-emergency-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 213.333V256H448v192H64V256h149.333v-42.667zm106.666 85.334H106.667v106.666h298.666zM256 64c79.529 0 151.726 58.258 170.667 128H85.333C104.274 122.258 176.471 64 256 64m0 40.421c-37.383 0-72.377 20.088-96 44.912h192c-22.498-23.642-55.387-43.432-90.682-44.808z" clip-rule="evenodd"></svg:path>`,
})
export class IxEmergencyStopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEmoteHappyIcon],svg[ix-emote-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 257.171c0-94.256 76.41-170.666 170.667-170.666s170.667 76.41 170.667 170.666c0 94.257-76.41 170.667-170.667 170.667S85.333 351.428 85.333 257.171M256 43.838c-117.821 0-213.333 95.512-213.333 213.333c0 117.82 95.512 213.334 213.333 213.334c117.82 0 213.333-95.514 213.333-213.334S373.82 43.838 256 43.838m-74.667 169.495c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m181.334-32c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32M197.111 289.628c10.965 19.557 33.24 32.874 58.889 32.874s47.924-13.317 58.889-32.874a56.5 56.5 0 0 0 5.113-12.295l42.665 10.011a94.6 94.6 0 0 1-8.551 20.566c-18.202 32.461-55.284 54.756-98.116 54.756s-79.914-22.295-98.116-54.756a94.6 94.6 0 0 1-8.551-20.566l42.665-10.011a56.5 56.5 0 0 0 5.113 12.295" clip-rule="evenodd"></svg:path>`,
})
export class IxEmoteHappyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEmoteHappyFilledIcon],svg[ix-emote-happy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 257.171c0 117.82-95.513 213.334-213.333 213.334c-117.821 0-213.333-95.514-213.333-213.334S138.179 43.838 256 43.838c117.82 0 213.333 95.512 213.333 213.333m-288-43.838c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32M256 322.502c-25.649 0-47.924-13.317-58.889-32.874a56.5 56.5 0 0 1-5.113-12.295l-42.665 10.011a94.6 94.6 0 0 0 8.551 20.566c18.202 32.461 55.284 54.756 98.116 54.756s79.914-22.295 98.116-54.756a94.6 94.6 0 0 0 8.551-20.566l-42.665-10.011a56.5 56.5 0 0 1-5.113 12.295c-10.965 19.557-33.24 32.874-58.889 32.874m74.667-109.169c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32" clip-rule="evenodd"></svg:path>`,
})
export class IxEmoteHappyFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEmoteNeutralIcon],svg[ix-emote-neutral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 257.171c0-94.256 76.41-170.666 170.667-170.666s170.667 76.41 170.667 170.666c0 94.257-76.41 170.667-170.667 170.667S85.333 351.428 85.333 257.171M256 43.838c-117.821 0-213.333 95.512-213.333 213.333c0 117.82 95.512 213.334 213.333 213.334c117.82 0 213.333-95.514 213.333-213.334S373.82 43.838 256 43.838m-85.333 256v42.667h170.666v-42.667z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M213.333 203.838c0 17.672-14.326 32-32 32c-17.673 0-32-14.328-32-32s14.327-32 32-32s32 14.327 32 32m149.334 0c0 17.672-14.328 32-32 32s-32-14.328-32-32s14.327-32 32-32c17.672 0 32 14.327 32 32"></svg:path>`,
})
export class IxEmoteNeutralIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEmoteNeutralFilledIcon],svg[ix-emote-neutral-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 470.505c117.82 0 213.333-95.514 213.333-213.334S373.82 43.838 256 43.838c-117.821 0-213.333 95.512-213.333 213.333c0 117.82 95.512 213.334 213.333 213.334m-74.667-234.667c17.674 0 32-14.328 32-32s-14.326-32-32-32c-17.673 0-32 14.327-32 32c0 17.672 14.327 32 32 32m149.334 0c17.672 0 32-14.328 32-32s-14.328-32-32-32s-32 14.327-32 32c0 17.672 14.327 32 32 32m32 85.333v42.667H149.333v-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxEmoteNeutralFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEmoteSadIcon],svg[ix-emote-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 86.505c-94.257 0-170.667 76.41-170.667 170.666c0 94.257 76.41 170.667 170.667 170.667s170.667-76.41 170.667-170.667c0-94.256-76.41-170.666-170.667-170.666M42.667 257.17c0-117.82 95.512-213.332 213.333-213.332c117.82 0 213.333 95.512 213.333 213.333c0 117.82-95.513 213.334-213.333 213.334c-117.821 0-213.333-95.514-213.333-213.334m170.666-53.333c0 17.672-14.326 32-32 32c-17.673 0-32-14.328-32-32s14.327-32 32-32s32 14.327 32 32m117.334 32c17.672 0 32-14.328 32-32s-14.328-32-32-32s-32 14.327-32 32c0 17.672 14.327 32 32 32M198.964 354.922c10.62-20.776 32.193-34.923 57.034-34.923c24.84 0 46.413 14.147 57.033 34.923a63.4 63.4 0 0 1 4.952 13.062l41.32-10.635a106 106 0 0 0-8.281-21.848c-17.629-34.484-53.542-58.168-95.024-58.168s-77.396 23.684-95.024 58.168a106 106 0 0 0-8.281 21.848l41.32 10.635a63.4 63.4 0 0 1 4.951-13.062" clip-rule="evenodd"></svg:path>`,
})
export class IxEmoteSadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEmoteSadFilledIcon],svg[ix-emote-sad-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 257.171c0 117.82-95.513 213.334-213.333 213.334c-117.821 0-213.333-95.514-213.333-213.334S138.179 43.838 256 43.838c117.82 0 213.333 95.512 213.333 213.333m-256.001-53.333c0 17.672-14.327 32-32 32s-32-14.328-32-32s14.327-32 32-32s32 14.327 32 32m117.335 32c17.672 0 32-14.328 32-32s-14.328-32-32-32c-17.675 0-32 14.327-32 32c0 17.672 14.325 32 32 32M198.964 354.922c10.62-20.776 32.193-34.923 57.034-34.923c24.84 0 46.413 14.147 57.033 34.923a63.4 63.4 0 0 1 4.952 13.062l41.32-10.635a106 106 0 0 0-8.281-21.848c-17.629-34.484-53.542-58.168-95.024-58.168s-77.396 23.684-95.024 58.168a106 106 0 0 0-8.281 21.848l41.32 10.635a63.4 63.4 0 0 1 4.951-13.062" clip-rule="evenodd"></svg:path>`,
})
export class IxEmoteSadFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixErrorIcon],svg[ix-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.803 0 213.334 95.53 213.334 213.333S373.803 469.334 256 469.334S42.667 373.803 42.667 256S138.197 42.667 256 42.667m0 42.667c-94.1 0-170.666 76.565-170.666 170.666c0 94.102 76.565 170.667 170.666 170.667c94.102 0 170.667-76.565 170.667-170.667c0-94.101-76.565-170.666-170.667-170.666m48.918 91.584l30.165 30.165L286.166 256l48.917 48.918l-30.165 30.165L256 286.166l-48.917 48.917l-30.165-30.165L225.835 256l-48.917-48.917l30.165-30.165L256 225.835z"></svg:path>`,
})
export class IxErrorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixErrorFilledIcon],svg[ix-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.803 0 213.334 95.53 213.334 213.333S373.803 469.334 256 469.334S42.667 373.803 42.667 256S138.197 42.667 256 42.667m48.918 134.25L256 225.836l-48.917-48.917l-30.165 30.165L225.835 256l-48.917 48.918l30.165 30.165L256 286.166l48.918 48.917l30.165-30.165L286.166 256l48.917-48.917z"></svg:path>`,
})
export class IxErrorFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixErrorMultipleIcon],svg[ix-error-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 266.667c0 30.622 6.792 59.659 18.951 85.685c-25.25-32.504-40.284-73.339-40.284-117.685c0-106.039 85.961-192 192-192c44.346 0 85.181 15.034 117.685 40.284C326.326 70.791 297.289 64 266.667 64C154.737 64 64 154.737 64 266.667m405.333 10.666c0 106.039-85.961 192-192 192s-192-85.961-192-192s85.961-192 192-192s192 85.961 192 192m-341.773 0c0 82.718 67.056 149.773 149.773 149.773c82.718 0 149.773-67.055 149.773-149.773S360.051 127.56 277.333 127.56S127.56 194.616 127.56 277.333m228.855-48.918L326.25 198.25l-48.917 48.917l-48.918-48.917l-30.165 30.165l48.917 48.918l-48.917 48.917l30.165 30.165l48.918-48.917l48.917 48.917l30.165-30.165l-48.917-48.917z" clip-rule="evenodd"></svg:path>`,
})
export class IxErrorMultipleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixErrorMultipleFilledIcon],svg[ix-error-multiple-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M82.951 352.352C70.791 326.326 64 297.289 64 266.667C64 154.737 154.737 64 266.667 64c30.622 0 59.659 6.792 85.685 18.951c-32.504-25.25-73.339-40.284-117.685-40.284c-106.039 0-192 85.961-192 192c0 44.346 15.034 85.181 40.284 117.685m386.382-75.019c0 106.039-85.961 192-192 192s-192-85.961-192-192s85.961-192 192-192s192 85.961 192 192M326.25 198.25l30.165 30.165l-48.917 48.918l48.917 48.917l-30.165 30.165l-48.917-48.917l-48.918 48.917l-30.165-30.165l48.917-48.917l-48.917-48.918l30.165-30.165l48.918 48.917z" clip-rule="evenodd"></svg:path>`,
})
export class IxErrorMultipleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixExclamationMarkIcon],svg[ix-exclamation-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.667 297.173h42.666L277.312 128h-42.666zm48 54.827c-.356-15.116-11.382-26.675-26.608-26.675c-15.362 0-27.073 11.628-26.718 26.675c-.355 15.116 11.356 26.676 26.718 26.676c15.268 0 26.252-11.56 26.608-26.676" clip-rule="evenodd"></svg:path>`,
})
export class IxExclamationMarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixExploreIcon],svg[ix-explore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m380.656 106.622l-35.01 23.344l37.117 92.733l42.309-12.418zm-71.28 47.49L97.67 295.272l4.928 9.857l239.035-70.334zm90.3-111.445l83.57 194.995l-157.166 46.221l63.256 168.168l-39.95 14.982l-64.351-171.075l-28.928 8.49l-59.662 162.6l-39.217-16.808l47.999-130.816l-124.824 36.721l-37.736-75.472z"></svg:path>`,
})
export class IxExploreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixExploreFilledIcon],svg[ix-explore-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m293.596 113.387l63.385 161.408l-30.9 9.088l63.255 168.168l-39.95 14.982l-64.351-171.075l-28.928 8.49l-59.662 162.6l-39.217-16.808l47.999-130.816l-124.824 36.721l-37.736-75.472zm106.08-70.72l83.57 194.995l-85.172 25.048l-68.15-173.542z"></svg:path>`,
})
export class IxExploreFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixExportIcon],svg[ix-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.667 85.333V128h-128v277.333h298.666v-128H448V448H64V85.333zm143.085-36.418L478.17 149.333L377.752 249.752l-30.17-30.17l48.903-48.916h-55.152c-34.084 0-61.944 26.644-63.891 60.24l-.109 3.76v106.667h-42.666V234.667c0-57.36 45.276-104.146 102.04-106.569l4.626-.098l55.151-.001l-48.902-48.914z"></svg:path>`,
})
export class IxExportIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixExportCheckIcon],svg[ix-export-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m370.905 42.667l-29.572 32.047L390.492 128h-81.159l-5.089.108C241.803 130.773 192 182.237 192 245.333v117.334h42.667V245.333c0-42.666 37.174-74.666 74.666-74.666h81.159l-49.159 53.286L370.905 256l98.428-106.667zM64 64v384h192l-48.819-42.667H106.667V106.667h128V64zm411.577 258.337l-33.818-26.014l-92.83 120.655l-68.213-59.703l-28.096 32.11l102.435 89.631z" clip-rule="evenodd"></svg:path>`,
})
export class IxExportCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixExportFailedIcon],svg[ix-export-failed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m341.333 74.714l29.572-32.047l98.428 106.666l-79.625 86.29a140 140 0 0 0-16.375-.956c-7.034 0-13.945.523-20.698 1.534l-11.302-12.248l49.159-53.286h-81.159c-37.492 0-74.666 32-74.666 74.666v117.334H192V245.333c0-63.096 49.803-114.56 112.244-117.225l5.089-.108h81.159zM256.465 448a137.9 137.9 0 0 1-18.088-42.667h-131.71V106.667h128V64H64v384zm116.868-170.667c-53.019 0-96 42.981-96 96s42.981 96 96 96c53.02 0 96-42.981 96-96s-42.98-96-96-96m-18.855 96.001l-38.572-38.572l18.856-18.856l38.572 38.572l38.572-38.572l18.856 18.856l-38.571 38.572l38.571 38.572l-18.856 18.856l-38.572-38.572l-38.572 38.572l-18.856-18.856z" clip-rule="evenodd"></svg:path>`,
})
export class IxExportFailedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixExportProgressIcon],svg[ix-export-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m341.333 74.714l29.572-32.047l98.428 106.666l-79.625 86.29a140 140 0 0 0-16.375-.956c-7.034 0-13.945.523-20.698 1.534l-11.302-12.248l49.159-53.286h-81.159c-37.492 0-74.666 32-74.666 74.666v117.334H192V245.333c0-63.096 49.803-114.56 112.244-117.225l5.089-.108h81.159zM256.465 448a137.9 137.9 0 0 1-18.088-42.667h-131.71V106.667h128V64H64v384zm167.208-74.667c0 27.802-22.538 50.34-50.34 50.34s-50.34-22.538-50.34-50.34h-45.66c0 53.019 42.981 96 96 96c53.02 0 96-42.981 96-96s-42.98-96-96-96v45.66c27.802 0 50.34 22.538 50.34 50.34" clip-rule="evenodd"></svg:path>`,
})
export class IxExportProgressIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixExtensionIcon],svg[ix-extension-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 64H448v149.333H298.667zm42.666 42.667h64v64h-64zm-234.666 42.666h106.666V256H106.667zm256 106.667H256V106.666H64V448h341.333V256zm-149.334 42.666v106.667H106.667V298.666zm149.334 106.667H256V298.666h106.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxExtensionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixExternalEncoderIcon],svg[ix-external-encoder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 192.003H128v42.666H42.667zM469.333 85.336v256h-256v-256zm-170.666 42.667H256v170.666h42.667zm128 0H320v170.666h106.667zm-234.667 0v170.666h-42.667V128.003zm149.333 234.666h128v64h-128z" clip-rule="evenodd"></svg:path>`,
})
export class IxExternalEncoderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEyeIcon],svg[ix-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 85.333C106.667 85.333 42.667 256 42.667 256s64 170.666 213.333 170.666C405.334 426.666 469.334 256 469.334 256S405.334 85.333 256 85.333M256 384c-94.261 0-148.596-91.304-166.62-127.994C107.453 219.222 161.783 128 256 128c94.262 0 148.597 91.303 166.621 127.992C404.55 292.777 350.22 384 256.001 384m0-202.667c-41.237 0-74.666 33.43-74.666 74.667s33.43 74.666 74.666 74.666c41.237 0 74.667-33.43 74.667-74.666c0-41.237-33.43-74.667-74.667-74.667M256 288c-17.644 0-32-14.356-32-32c0-17.645 14.356-32 32-32c17.645 0 32 14.355 32 32c0 17.644-14.355 32-32 32"></svg:path>`,
})
export class IxEyeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEyeCancelledIcon],svg[ix-eye-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m89.752 59.582l138.656 138.656C236.763 194.239 246.12 192 256 192c35.346 0 64 28.654 64 64c0 9.881-2.239 19.239-6.237 27.594l138.656 138.655l-30.17 30.17l-59.207-59.208c-29.128 19.7-64.646 33.456-107.042 33.456C106.667 426.667 42.667 256 42.667 256s22.862-60.965 73.14-110.02L59.583 89.751zm56.355 116.695c-28.73 27.818-47.477 60.904-56.726 79.73C107.404 292.697 161.739 384 256 384c29.106 0 54.406-8.706 76.006-21.823l-48.414-48.414C275.238 317.761 265.881 320 256 320c-35.346 0-64-28.654-64-64c0-9.88 2.24-19.238 6.238-27.592ZM256 85.334C405.334 85.334 469.334 256 469.334 256s-14.239 37.97-44.955 78.09l-30.56-30.567c13.43-18.244 22.99-35.702 28.802-47.53C404.597 219.302 350.262 128 256.001 128c-11.838 0-23.046 1.44-33.631 4.031l-34.04-34.049c20.25-7.905 42.775-12.648 67.67-12.648"></svg:path>`,
})
export class IxEyeCancelledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEyeCancelledFilledIcon],svg[ix-eye-cancelled-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m89.752 59.582l362.667 362.667l-30.17 30.17l-59.207-59.208c-29.128 19.7-64.646 33.456-107.042 33.456C106.667 426.667 42.667 256 42.667 256s22.862-60.965 73.141-110.02L59.582 89.751zM256 85.334C405.334 85.334 469.334 256 469.334 256s-14.239 37.97-44.955 78.09l-95.84-95.863c-6.582-26.955-27.796-48.173-54.748-54.76l-85.462-85.485c20.252-7.905 42.776-12.648 67.671-12.648M181.334 256c0 41.238 33.43 74.667 74.666 74.667c12.86 0 24.959-3.25 35.522-8.975l-33.741-33.74q-.885.048-1.78.048c-17.674 0-32-14.327-32-32q0-.896.048-1.781l-33.74-33.74c-5.725 10.563-8.975 22.662-8.975 35.521"></svg:path>`,
})
export class IxEyeCancelledFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixEyeDropperIcon],svg[ix-eye-dropper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m300.907 90.285l-70.409 70.409l-15.085-15.085l-30.169 30.17l30.169 30.169l-150.849 150.85v90.509h90.51l150.848-150.848l30.172 30.169l30.169-30.169l-15.084-15.085l70.408-70.41S476.339 156.211 416 95.871s-115.093-5.586-115.093-5.586m-25.155 176.004l-30.169-30.172l-138.352 138.354v30.169H137.4zm45.257-15.085l70.17-70.171c.104-.115.322-.356.629-.715a52 52 0 0 0 3.196-4.189c2.752-3.989 5.644-9.245 7.323-15.049c1.637-5.646 1.895-10.951.636-16.065c-1.18-4.79-4.36-12.236-14.116-21.991c-9.754-9.755-17.201-12.937-21.991-14.116c-5.113-1.258-10.419-1-16.066.635c-5.802 1.68-11.059 4.573-15.048 7.324a52 52 0 0 0-4.188 3.196c-.36.307-.599.524-.715.63l-70.171 70.17z" clip-rule="evenodd"></svg:path>`,
})
export class IxEyeDropperIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
