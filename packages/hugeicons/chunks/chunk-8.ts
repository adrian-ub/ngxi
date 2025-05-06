import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreadIcon],svg[hugeicons-thread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 7.5h12c1.886 0 2.828 0 3.414.586s.586 1.528.586 3.414v1m-4-2h-12m12 3h-12m12 3h-12m11 3h-10a2 2 0 0 0-2 2h14a2 2 0 0 0-2-2m-10-15h10a2 2 0 0 0 2-2h-14a2 2 0 0 0 2 2" color="currentColor"></svg:path>`,
})
export class HugeiconsThreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreadsIcon],svg[hugeicons-threads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4" color="currentColor"></svg:path>`,
})
export class HugeiconsThreadsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreadsEllipseIcon],svg[hugeicons-threads-ellipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M17 9.59c-1.088-4.047-4.828-3.794-4.828-3.794S7 5.452 7 12s5.172 6.204 5.172 6.204s3.075.204 4.483-2.702c.46-1.281.345-3.844-4.138-3.844c0 0-2.069 0-2.069 1.725c0 .673.69 1.379 1.724 1.379a2.45 2.45 0 0 0 2.414-2.07c.69-4.137-3.103-4.482-4.138-2.758"></svg:path></svg:g>`,
})
export class HugeiconsThreadsEllipseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreadsRectangleIcon],svg[hugeicons-threads-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M17 9.59c-1.088-4.047-4.828-3.794-4.828-3.794S7 5.452 7 12s5.172 6.204 5.172 6.204s3.075.204 4.483-2.702c.46-1.281.345-3.844-4.138-3.844c0 0-2.069 0-2.069 1.725c0 .673.69 1.379 1.724 1.379a2.45 2.45 0 0 0 2.414-2.07c.69-4.137-3.103-4.482-4.138-2.758"></svg:path></svg:g>`,
})
export class HugeiconsThreadsRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreeCircleIcon],svg[hugeicons-three-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.5 12h-1m1 0a2.5 2.5 0 0 0 0-5h-1A2.5 2.5 0 0 0 9 9.5m3.5 2.5a2.5 2.5 0 0 1 0 5h-1A2.5 2.5 0 0 1 9 14.5"></svg:path><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class HugeiconsThreeCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreeDMoveIcon],svg[hugeicons-three-d-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 14l5.5 4.5M12 14l-5.5 4.5M12 14V7m-1.609-3.31C11.105 2.563 11.462 2 12 2s.895.563 1.609 1.69l.512.81c.705 1.112 1.057 1.668.79 2.084C14.642 7 13.932 7 12.512 7h-1.026c-1.42 0-2.13 0-2.397-.416c-.268-.416.084-.972.789-2.084zm10.841 15.45c.624 1.21.936 1.815.677 2.285c-.26.47-.915.49-2.227.529l-.942.028c-1.294.038-1.941.058-2.17-.392s.114-1.071.799-2.313l.494-.896c.684-1.242 1.026-1.863 1.513-1.88c.486-.019.793.578 1.409 1.771zm-18.464 0c-.624 1.21-.936 1.815-.677 2.285c.26.47.915.49 2.227.529l.942.028c1.294.038 1.941.058 2.17-.392s-.114-1.071-.799-2.313l-.494-.896c-.684-1.242-1.026-1.863-1.513-1.88c-.486-.019-.793.578-1.409 1.771z" color="currentColor"></svg:path>`,
})
export class HugeiconsThreeDMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreeDPrinterIcon],svg[hugeicons-three-d-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M8 2H2v.5a2 2 0 0 0 2 2h4zm14 0h-6v2.5h4a2 2 0 0 0 2-2zm-6 0H8v8h8zm-2.5 11h-3L8 10h8zm0 0h-3v1.757a3 3 0 0 0 .879 2.122L12 17.5l.621-.621a3 3 0 0 0 .879-2.122zM2 22h8a2 2 0 0 0 2-2m2-15v.01m0 2.49v.01" color="currentColor"></svg:path>`,
})
export class HugeiconsThreeDPrinterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreeDRotateIcon],svg[hugeicons-three-d-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M2 12c5.185 4.827 14.464 4.388 20 .356"></svg:path><svg:path d="M11.537 2c-4.548 4.5-5.053 15 .457 20"></svg:path></svg:g>`,
})
export class HugeiconsThreeDRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreeDScaleIcon],svg[hugeicons-three-d-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 13l5 4.5M12 13l-5 4.5m5-4.5V8m6.192 8.446c.516-.298.774-.446 1.058-.446s.542.148 1.058.446l.634.364c.516.297.774.445.916.69s.142.542.142 1.136v.728c0 .594 0 .891-.142 1.136s-.4.393-.916.69l-.634.364c-.516.298-.774.446-1.058.446s-.542-.148-1.058-.446l-.634-.364c-.516-.297-.774-.445-.916-.69s-.142-.542-.142-1.136v-.728c0-.594 0-.891.142-1.136s.4-.393.916-.69zm-14.5 0c.516-.298.774-.446 1.058-.446s.542.148 1.058.446l.634.364c.516.297.774.445.916.69s.142.542.142 1.136v.728c0 .594 0 .891-.142 1.136s-.4.393-.916.69l-.634.364c-.516.298-.774.446-1.058.446s-.542-.148-1.058-.446l-.634-.364c-.516-.297-.774-.445-.916-.69S2 19.958 2 19.364v-.728c0-.594 0-.891.142-1.136s.4-.393.916-.69zm7.25-14C11.458 2.149 11.715 2 12 2s.542.149 1.059.446l.633.364c.516.297.774.445.916.69s.142.542.142 1.136v.728c0 .594 0 .891-.142 1.136s-.4.393-.917.69l-.633.364C12.543 7.851 12.285 8 12 8s-.542-.149-1.059-.446l-.633-.364c-.516-.297-.774-.445-.916-.69s-.142-.542-.142-1.136v-.728c0-.594 0-.891.142-1.136s.4-.393.917-.69z" color="currentColor"></svg:path>`,
})
export class HugeiconsThreeDScaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreeDViewIcon],svg[hugeicons-three-d-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 11.5c.495 0 .956-.198 1.877-.595l.665-.287C16.181 9.912 17 9.559 17 9s-.82-.912-2.458-1.618l-.665-.287C12.958 6.7 12.496 6.5 12 6.5s-.956.199-1.877.595l-.665.287C7.819 8.088 7 8.441 7 9s.82.912 2.458 1.618l.665.287c.92.397 1.382.595 1.877.595m0 0v6"></svg:path><svg:path d="M17 9v6c0 .559-.82.912-2.458 1.618l-.665.287c-.92.396-1.382.595-1.877.595s-.956-.198-1.877-.596l-.665-.286C7.819 15.912 7 15.559 7 15V9m2.144-6.5c-2.657.06-4.209.315-5.27 1.375S2.562 6.487 2.5 9.145M14.856 2.5c2.657.06 4.209.315 5.27 1.375s1.313 2.612 1.374 5.27M14.856 21.5c2.657-.06 4.209-.315 5.27-1.375s1.313-2.612 1.374-5.27M9.144 21.5c-2.657-.06-4.209-.315-5.27-1.375s-1.313-2.612-1.374-5.27"></svg:path></svg:g>`,
})
export class HugeiconsThreeDViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreeFinger01Icon],svg[hugeicons-three-finger-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.182 5.5c0-.828.65-1.5 1.454-1.5s1.455.672 1.455 1.5V11m-2.91 0V3.5c0-.828-.65-1.5-1.454-1.5s-1.454.672-1.454 1.5V5m5.818 7v-1m0 0c0-.524.456-.922.956-.836l.332.057c.936.161 1.621.995 1.621 1.973v1.473c0 2.173 0 3.26-.321 4.125c-.187.502-.678 1.142-1.07 1.604c-.34.4-.549.908-.549 1.44V22M11.273 5c0-.828-.652-1.5-1.455-1.5S8.364 4.173 8.364 5v8.462l-1.572-1.625a1.6 1.6 0 0 0-2.434.14a1.74 1.74 0 0 0-.03 2.072l3.49 4.598c.668.88 1.03 2.236 1.03 3.353m2.425-17v5" color="currentColor"></svg:path>`,
})
export class HugeiconsThreeFinger01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreeFinger02Icon],svg[hugeicons-three-finger-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.76 13.48l-.018-8.451a1.5 1.5 0 1 1 3.001-.003m0 0v4.98m0-4.98V3.497a1.5 1.5 0 1 1 3.002.004v7.51m3 .987v-1.853m0 0V5.483a1.5 1.5 0 1 0-3-.003m3 4.665c.807-.121 2.78 0 3.003 1.857v3.682c0 1.36-.23 2.46-1.619 4.057c-.515.675-.444 1.354-.444 2.261M7.751 8.999c-.638.556-2.249 2.079-3.152 3.457c-1.254 1.913 1.223 4.407 2.248 5.796c1.517 1.813 1.415 1.762 1.415 3.743" color="currentColor"></svg:path>`,
})
export class HugeiconsThreeFinger02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreeFinger03Icon],svg[hugeicons-three-finger-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 6a1.5 1.5 0 1 0-3 0v7.963l-1.62-1.626a1.683 1.683 0 0 0-2.51.14a1.696 1.696 0 0 0-.033 2.072l3.004 4.018c.682.912 1.023 1.367 1.433 1.722c.626.54 1.376.917 2.183 1.094c.528.117 1.096.117 2.233.117c2.166 0 3.25 0 4.112-.332a5 5 0 0 0 2.867-2.876c.331-.865.331-1.952.331-4.125V11.5a2 2 0 0 0-2-2h-1m-6-3.5V4a1.5 1.5 0 0 1 3 0v2m-3 0v4.5m3-4.5v4.5m0-4.5a1.5 1.5 0 0 1 3 0v3.5m0 0v2" color="currentColor"></svg:path>`,
})
export class HugeiconsThreeFinger03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreeFinger04Icon],svg[hugeicons-three-finger-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.766 13.99V5.983c-.002-.83.628-1.5 1.458-1.5c.829 0 1.525.674 1.525 1.503m0 0v4.496m0-4.496V4a1.5 1.5 0 1 1 3.001.003v6.473m3.002 1.003V5.986a1.5 1.5 0 1 0-3.002-.003m3.002 3.643c.806-.121 2.792 0 2.995 1.857v3.662c0 1.36.103 2.997-1.063 4.39c-.7 1.04-2.193 1.61-2.193 1.61c-1.54.509-2.934.303-3.847.337c-1.035.037-1.744.04-2.612-.152c0 0-1.98-.337-3.238-2.465c-.967-1.633-3.48-3.934-2.175-6.012c.842-1.341 2.505-2.808 3.147-3.37" color="currentColor"></svg:path>`,
})
export class HugeiconsThreeFinger04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreeFinger05Icon],svg[hugeicons-three-finger-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.81 5.71a1.5 1.5 0 0 0-2.954-.522L9.074 9.62l-.927 5.078l-2.258-2.361a1.692 1.692 0 0 0-2.55 2.212l3.013 4.018c.684.912 1.026 1.367 1.437 1.722a5 5 0 0 0 2.19 1.095c.53.116 1.1.116 2.24.116H14.7a5 5 0 0 0 4.88-3.913l1.31-5.883l.088-.493a1.5 1.5 0 1 0-2.955-.52M12.81 5.709l.347-1.97a1.5 1.5 0 1 1 2.955.522l-.347 1.97m-2.955-.522l-.781 4.432m3.736-3.91l-.782 4.431m.781-4.432a1.5 1.5 0 1 1 2.955.521l-.695 3.94m0 0l-.087.492" color="currentColor"></svg:path>`,
})
export class HugeiconsThreeFinger05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThreeSquareIcon],svg[hugeicons-three-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M12.5 12h-1m1 0a2.5 2.5 0 0 0 0-5h-1A2.5 2.5 0 0 0 9 9.5m3.5 2.5a2.5 2.5 0 0 1 0 5h-1A2.5 2.5 0 0 1 9 14.5"></svg:path></svg:g>`,
})
export class HugeiconsThreeSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThumbsDownIcon],svg[hugeicons-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 11.5a2 2 0 0 0 2 2a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3a2 2 0 0 0-2 2zm13.479 4.694l-.267-.86c-.218-.705-.327-1.057-.243-1.336a.98.98 0 0 1 .42-.547c.251-.158.63-.158 1.39-.158h.404c2.57 0 3.855 0 4.462-.76q.104-.131.185-.277c.467-.848-.064-1.991-1.126-4.277c-.974-2.098-1.462-3.147-2.366-3.764a4 4 0 0 0-.27-.17c-.952-.545-2.132-.545-4.492-.545h-.511c-2.86 0-4.289 0-5.177.86C7 5.222 7 6.607 7 9.377v.974c0 1.455 0 2.183.258 2.85c.259.666.753 1.213 1.743 2.309l4.091 4.53c.103.114.154.17.2.21a1.033 1.033 0 0 0 1.442-.091c.04-.045.083-.108.17-.234a9 9 0 0 0 .261-.392a3.8 3.8 0 0 0 .446-2.89a8 8 0 0 0-.132-.448" color="currentColor"></svg:path>`,
})
export class HugeiconsThumbsDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThumbsDownEllipseIcon],svg[hugeicons-thumbs-down-ellipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></svg:path><svg:path d="m13.153 15.214l-.178-.557c-.146-.456-.218-.684-.162-.864a.64.64 0 0 1 .28-.354c.167-.102.42-.102.926-.102h.27c1.713 0 2.57 0 2.974-.492q.07-.085.123-.18c.312-.548-.042-1.288-.75-2.767c-.65-1.357-.974-2.036-1.577-2.435a3 3 0 0 0-.18-.11C14.244 7 13.457 7 11.884 7h-.34c-1.907 0-2.86 0-3.452.557S7.5 9.01 7.5 10.802v.63c0 .942 0 1.413.172 1.844s.502.786 1.162 1.495l2.727 2.931c.069.073.103.11.133.136a.704.704 0 0 0 .962-.06c.027-.028.055-.07.113-.15c.09-.128.135-.191.175-.254a2.4 2.4 0 0 0 .297-1.87a5 5 0 0 0-.088-.29"></svg:path></svg:g>`,
})
export class HugeiconsThumbsDownEllipseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThumbsDownRectangleIcon],svg[hugeicons-thumbs-down-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="m12.653 14.714l-.178-.557c-.146-.456-.218-.684-.162-.864a.64.64 0 0 1 .28-.354c.167-.102.42-.102.926-.102h.27c1.713 0 2.57 0 2.974-.492q.07-.085.123-.18c.312-.548-.042-1.288-.75-2.767c-.65-1.357-.974-2.036-1.577-2.435a3 3 0 0 0-.18-.11c-.635-.353-1.422-.353-2.995-.353h-.34c-1.907 0-2.86 0-3.452.557S7 8.51 7 10.302v.63c0 .942 0 1.413.172 1.844s.502.786 1.162 1.495l2.727 2.931c.069.073.103.11.133.136a.704.704 0 0 0 .962-.06c.027-.028.055-.07.113-.15c.09-.128.135-.191.175-.254a2.4 2.4 0 0 0 .297-1.87a5 5 0 0 0-.088-.29"></svg:path></svg:g>`,
})
export class HugeiconsThumbsDownRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThumbsUpIcon],svg[hugeicons-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12.5a2 2 0 0 1 2-2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3a2 2 0 0 1-2-2zm13.479-4.694l-.267.86c-.218.705-.327 1.057-.243 1.336a1 1 0 0 0 .42.547c.251.158.63.158 1.39.158h.404c2.57 0 3.855 0 4.462.76q.104.131.185.277c.467.848-.064 1.991-1.126 4.277c-.974 2.098-1.462 3.147-2.366 3.764q-.132.09-.27.17c-.952.545-2.132.545-4.492.545h-.511c-2.86 0-4.289 0-5.177-.86C7 18.779 7 17.394 7 14.624v-.974c0-1.455 0-2.183.258-2.85c.259-.666.753-1.213 1.743-2.309l4.091-4.53c.103-.114.154-.17.2-.21a1.033 1.033 0 0 1 1.442.091c.04.045.083.108.17.234c.135.196.202.294.261.392c.528.871.687 1.906.446 2.89c-.027.109-.062.222-.132.448" color="currentColor"></svg:path>`,
})
export class HugeiconsThumbsUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThumbsUpDownIcon],svg[hugeicons-thumbs-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.653 4.786l-.178.557c-.146.456-.218.684-.162.864a.64.64 0 0 0 .28.354c.167.102.42.102.926.102h.27c1.713 0 2.57 0 2.974.492q.07.085.123.18c.312.548-.042 1.288-.75 2.767c-.65 1.357-.974 2.036-1.577 2.435a3 3 0 0 1-.18.11C8.744 13 7.957 13 6.384 13h-.34c-1.907 0-2.86 0-3.452-.557S2 10.99 2 9.198v-.63c0-.942 0-1.413.172-1.844s.502-.786 1.162-1.494L6.06 2.298a2 2 0 0 1 .133-.136a.704.704 0 0 1 .962.06c.027.028.055.07.113.15c.09.128.135.191.175.254c.351.564.458 1.234.297 1.87c-.018.07-.042.144-.088.29m8.696 14.428l.177-.557c.146-.456.218-.684.162-.864a.64.64 0 0 0-.28-.354c-.167-.102-.42-.102-.926-.102h-.27c-1.713 0-2.57 0-2.974-.492a1.3 1.3 0 0 1-.123-.18c-.312-.548.042-1.288.75-2.767c.65-1.357.974-2.036 1.577-2.435q.089-.06.18-.11C15.256 11 16.043 11 17.616 11h.34c1.907 0 2.86 0 3.452.557S22 13.01 22 14.802v.63c0 .942 0 1.413-.172 1.844s-.502.786-1.162 1.494l-2.727 2.932c-.069.073-.103.11-.133.136a.704.704 0 0 1-.962-.06a2 2 0 0 1-.113-.15c-.09-.128-.135-.191-.175-.254a2.4 2.4 0 0 1-.297-1.87c.018-.07.042-.144.088-.29" color="currentColor"></svg:path>`,
})
export class HugeiconsThumbsUpDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThumbsUpEllipseIcon],svg[hugeicons-thumbs-up-ellipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></svg:path><svg:path d="m13.153 8.786l-.178.557c-.146.456-.218.684-.162.864a.64.64 0 0 0 .28.354c.167.102.42.102.926.102h.27c1.713 0 2.57 0 2.974.492q.07.085.123.18c.312.548-.042 1.288-.75 2.767c-.65 1.357-.974 2.036-1.577 2.436a3 3 0 0 1-.18.109c-.635.353-1.422.353-2.995.353h-.34c-1.907 0-2.86 0-3.452-.557S7.5 14.99 7.5 13.198v-.63c0-.942 0-1.413.172-1.844s.502-.786 1.162-1.494l2.727-2.932a2 2 0 0 1 .133-.136a.704.704 0 0 1 .962.06c.027.028.055.07.113.15c.09.128.135.191.175.254c.351.564.458 1.234.297 1.87a5 5 0 0 1-.088.29"></svg:path></svg:g>`,
})
export class HugeiconsThumbsUpEllipseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsThumbsUpRectangleIcon],svg[hugeicons-thumbs-up-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="m12.653 9.286l-.178.557c-.146.456-.218.684-.162.864a.64.64 0 0 0 .28.354c.167.102.42.102.926.102h.27c1.713 0 2.57 0 2.974.492q.07.085.123.18c.312.548-.042 1.288-.75 2.767c-.65 1.357-.974 2.036-1.577 2.436a3 3 0 0 1-.18.109c-.635.353-1.422.353-2.995.353h-.34c-1.907 0-2.86 0-3.452-.557S7 15.49 7 13.698v-.63c0-.942 0-1.413.172-1.844s.502-.786 1.162-1.494l2.727-2.932a2 2 0 0 1 .133-.136a.704.704 0 0 1 .962.06c.027.028.055.07.113.15c.09.128.135.191.175.254c.351.564.458 1.234.297 1.87a5 5 0 0 1-.088.29"></svg:path></svg:g>`,
})
export class HugeiconsThumbsUpRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTicTacToeIcon],svg[hugeicons-tic-tac-toe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2v20m10-10H2m6 6.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M16 3l5 5m0-5l-5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsTicTacToeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTick01Icon],svg[hugeicons-tick-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 14.5s1.5 0 3.5 3.5c0 0 5.559-9.167 10.5-11" color="currentColor"></svg:path>`,
})
export class HugeiconsTick01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTick02Icon],svg[hugeicons-tick-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 14l3.5 3.5L19 6.5" color="currentColor"></svg:path>`,
})
export class HugeiconsTick02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTick03Icon],svg[hugeicons-tick-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.474 17.306c3.013-3.224 5.922-5.411 9.576-8.508c1.094-.927 1.263-2.552.405-3.703c-.912-1.224-2.645-1.469-3.817-.496c-3.347 2.776-5.951 5.45-8.421 8.306c-.13.15-.195.225-.262.267a.52.52 0 0 1-.555.003c-.068-.041-.133-.115-.263-.262l-1.316-1.49a2.748 2.748 0 0 0-4.358.304a2.79 2.79 0 0 0 .253 3.406l2.064 2.29C6.323 19.135 7.095 19.992 8.022 20c.926.008 1.768-.892 3.452-2.694" color="currentColor"></svg:path>`,
})
export class HugeiconsTick03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTick04Icon],svg[hugeicons-tick-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.86 5.392c.428 1.104-.171 1.86-1.33 2.606c-.935.6-2.126 1.252-3.388 2.365c-1.238 1.091-2.445 2.406-3.518 3.7a55 55 0 0 0-2.62 3.437c-.414.591-.993 1.473-.993 1.473A2.25 2.25 0 0 1 8.082 20a2.24 2.24 0 0 1-1.9-1.075c-.999-1.677-1.769-2.34-2.123-2.577C3.112 15.71 2 15.618 2 14.134C2 12.955 2.995 12 4.222 12c.867.032 1.672.373 2.386.853c.456.306.939.712 1.441 1.245a58 58 0 0 1 2.098-2.693c1.157-1.395 2.523-2.892 3.988-4.184c1.44-1.27 3.105-2.459 4.87-3.087c1.15-.41 2.429.153 2.856 1.258" color="currentColor"></svg:path>`,
})
export class HugeiconsTick04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTickDouble01Icon],svg[hugeicons-tick-double-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 13.333S4.5 14 6.5 17c0 0 .285-.48.821-1.247M17 6c-2.291 1.146-4.688 3.552-6.612 5.822M8 13.333S9.5 14 11.5 17c0 0 5.5-8.5 10.5-11" color="currentColor"></svg:path>`,
})
export class HugeiconsTickDouble01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTickDouble02Icon],svg[hugeicons-tick-double-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 13.833L6 17.5l1.024-1.073M16.5 6.5l-6.063 6.352m-2.937.981L11 17.5l10.5-11" color="currentColor"></svg:path>`,
})
export class HugeiconsTickDouble02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTickDouble03Icon],svg[hugeicons-tick-double-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.326 18.092c-.327.275-.61.41-.906.408c-.68-.007-1.247-.703-2.38-2.094l-1.515-1.86c-.624-.766-.7-1.907-.185-2.767c.588-.984 1.717-1.259 2.596-.766M10.922 8.5a52 52 0 0 1 2.556-2.513A1.77 1.77 0 0 1 15 5.527m-.894 10.784c2.26-2.62 4.441-4.396 7.182-6.913c.82-.753.947-2.073.303-3.009c-.684-.994-1.983-1.193-2.863-.402c-2.51 2.255-4.463 4.427-6.315 6.748c-.098.122-.146.183-.197.217a.37.37 0 0 1-.416.003c-.051-.034-.1-.094-.197-.213l-.987-1.21c-.9-1.106-2.516-.983-3.268.246c-.527.861-.449 2.002.189 2.768l1.548 1.86c1.157 1.391 1.736 2.087 2.431 2.094s1.327-.725 2.59-2.189" color="currentColor"></svg:path>`,
})
export class HugeiconsTickDouble03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTickDouble04Icon],svg[hugeicons-tick-double-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.897 6.63c.32.898-.13 1.513-.998 2.118c-.702.488-1.595 1.017-2.542 1.922c-.928.887-1.834 1.955-2.639 3.006a39 39 0 0 0-2.71 3.99a1.65 1.65 0 0 1-1.446.834a1.66 1.66 0 0 1-1.426-.873c-.748-1.363-1.326-1.901-1.592-2.094c-.737-.537-1.544-.63-1.544-1.8C7 12.776 7.746 12 8.667 12c.658.027 1.262.309 1.789.693c.342.249.705.578 1.082 1.012c.442-.654.975-1.408 1.573-2.189c.868-1.133 1.892-2.35 2.99-3.399c1.08-1.032 2.33-1.998 3.653-2.508c.863-.333 1.822.124 2.143 1.022M4.44 12.076a2.7 2.7 0 0 0-.6-.125l-.141-.006c-.938 0-1.699.783-1.699 1.748c0 .874.623 1.598 1.437 1.728q.042.02.137.087c.27.195.86.737 1.623 2.111c.298.538.851.873 1.453.88a1.67 1.67 0 0 0 1.112-.407M15 5.5c-1.35.515-2.622 1.489-3.723 2.53c-.384.363-.76.746-1.123 1.139" color="currentColor"></svg:path>`,
})
export class HugeiconsTickDouble04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTicket01Icon],svg[hugeicons-ticket-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.464 9.344c-.248 0-.475-.202-.464-.465c.067-1.542.255-2.546.78-3.34a4.7 4.7 0 0 1 1.11-1.174C5.055 3.5 6.7 3.5 9.992 3.5h4.014c3.292 0 4.937 0 6.104.865c.431.32.807.717 1.109 1.174c.525.794.713 1.798.78 3.34c.011.263-.216.465-.465.465c-1.386 0-2.51 1.189-2.51 2.656s1.124 2.656 2.51 2.656c.249 0 .476.202.465.466c-.067 1.541-.255 2.545-.78 3.34a4.7 4.7 0 0 1-1.11 1.173c-1.166.865-2.811.865-6.103.865H9.993c-3.292 0-4.937 0-6.104-.865a4.7 4.7 0 0 1-1.109-1.174c-.525-.794-.713-1.798-.78-3.34c-.011-.263.216-.465.464-.465c1.386 0 2.51-1.189 2.51-2.656S3.85 9.344 2.464 9.344M9 3.5v17" color="currentColor"></svg:path>`,
})
export class HugeiconsTicket01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTicket02Icon],svg[hugeicons-ticket-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.709 7.65c.157-.157.428-.173.587 0c.932 1.018 1.449 1.772 1.619 2.606c.097.48.111.968.04 1.443c-.19 1.285-1.23 2.325-3.312 4.406l-2.538 2.538c-2.08 2.081-3.121 3.122-4.406 3.313c-.475.07-.963.056-1.443-.041c-.834-.17-1.588-.686-2.605-1.619c-.174-.16-.158-.43 0-.588c.876-.876.834-2.338-.093-3.266c-.928-.927-2.39-.969-3.266-.093c-.157.158-.429.174-.588 0c-.933-1.017-1.449-1.77-1.619-2.605a4.2 4.2 0 0 1-.04-1.443c.19-1.285 1.23-2.325 3.312-4.406l2.538-2.538c2.08-2.081 3.121-3.122 4.406-3.313c.475-.07.963-.056 1.443.041c.835.17 1.588.687 2.605 1.62c.174.159.158.43 0 .586c-.876.877-.834 2.339.094 3.266c.927.928 2.39.97 3.265.093M19 15L9 5" color="currentColor"></svg:path>`,
})
export class HugeiconsTicket02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTicket03Icon],svg[hugeicons-ticket-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 8.879c-.067-1.542-.254-2.546-.78-3.34a4.7 4.7 0 0 0-1.109-1.174C18.945 3.5 17.3 3.5 14.008 3.5H9.993c-3.291 0-4.937 0-6.103.865c-.432.32-.807.717-1.11 1.174c-.525.794-.712 1.798-.78 3.34c-.01.263.216.465.465.465c1.386 0 2.51 1.189 2.51 2.656s-1.124 2.656-2.51 2.656c-.249 0-.476.202-.464.466c.067 1.541.254 2.545.78 3.34a4.7 4.7 0 0 0 1.109 1.173c1.166.865 2.812.865 6.103.865h4.015c3.291 0 4.937 0 6.103-.865c.432-.32.807-.717 1.11-1.174c.525-.794.712-1.798.779-3.34zM13 12h4m-8 4h8" color="currentColor"></svg:path>`,
})
export class HugeiconsTicket03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTicketStarIcon],svg[hugeicons-ticket-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m15.018 9.433l.528 1.065c.072.148.264.29.426.318l.957.16c.612.103.756.55.315.992l-.744.75a.66.66 0 0 0-.156.547l.213.929c.168.735-.219 1.02-.864.635l-.897-.535a.64.64 0 0 0-.594 0l-.896.535c-.642.384-1.032.097-.864-.635l.213-.929a.66.66 0 0 0-.156-.547l-.744-.75c-.438-.442-.297-.89.315-.992l.957-.16a.65.65 0 0 0 .423-.318l.527-1.065c.288-.577.756-.577 1.041 0M8 17v3.5m0-17V7"></svg:path><svg:path d="M22 8.879c-.067-1.542-.254-2.546-.78-3.34a4.7 4.7 0 0 0-1.109-1.174C18.945 3.5 17.3 3.5 14.008 3.5H9.993c-3.291 0-4.937 0-6.103.865c-.432.32-.807.717-1.11 1.174c-.525.794-.712 1.798-.78 3.34c-.01.263.216.465.465.465c1.386 0 2.51 1.189 2.51 2.656s-1.124 2.656-2.51 2.656c-.249 0-.476.202-.464.466c.067 1.541.254 2.545.78 3.34a4.7 4.7 0 0 0 1.109 1.173c1.166.865 2.812.865 6.103.865h4.015c3.291 0 4.937 0 6.103-.865c.432-.32.807-.717 1.11-1.174c.525-.794.712-1.798.779-3.34z"></svg:path></svg:g>`,
})
export class HugeiconsTicketStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTieIcon],svg[hugeicons-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.721 5.61c-.559-.99-.838-1.486-.674-1.936s.692-.638 1.748-1.012l.9-.319C11.341 2.114 11.665 2 12 2s.659.114 1.305.343l.9.32c1.056.373 1.584.56 1.748 1.01c.165.45-.115.946-.674 1.936l-.516.915c-.265.469-.397.703-.63.887c-.23.184-.445.245-.875.368c-.411.118-.88.221-1.258.221s-.847-.103-1.258-.221c-.43-.123-.644-.184-.876-.368s-.364-.418-.629-.887zM10.08 8l-1.66 7.144c-.36 1.55-.539 2.324-.333 3.052l.012.043c.216.725.782 1.278 1.912 2.385c.933.913 1.4 1.37 1.973 1.376h.032c.574-.007 1.04-.463 1.973-1.376c1.13-1.107 1.696-1.66 1.912-2.385l.012-.043c.206-.728.026-1.503-.334-3.052L13.921 8" color="currentColor"></svg:path>`,
})
export class HugeiconsTieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTiff01Icon],svg[hugeicons-tiff-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.992 13.05c0 .41.34.75.75.75l.01.01c.41 0 .75-.34.75-.75v-2.34c0-.89 0-1.38-.21-1.89c-.2-.49-.55-.84-1.18-1.47l-4.74-4.74c-.54-.55-.84-.85-1.25-1.03l-.13-.06q-.004 0-.014-.007a.6.6 0 0 0-.146-.063c-.45-.15-.86-.15-1.618-.15h-.002c-3.42 0-5.14 0-6.45 1.06c-.26.21-.5.45-.71.71c-1.06 1.3-1.06 3.02-1.06 6.44v3.54c0 .41.34.75.75.75s.75-.34.75-.75V9.52c0-3.07 0-4.61.72-5.5c.14-.18.31-.34.49-.49c.9-.72 2.43-.72 5.5-.72h.79v.24c0 3.03 0 4.55 1.1 5.65s2.62 1.1 5.649 1.1h.231c.02.21.02.49.02.91zm-4.84-5.41c-.59-.59-.66-1.7-.66-3.78l4.44 4.44c-2.09-.01-3.19-.07-3.78-.66m2.34 14.41c0 .41.34.75.75.75s.75-.34.75-.75V19.8h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.75v-1.5h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.5c-.41 0-.75.34-.75.75zm-5 0c0 .41.34.75.75.75s.75-.34.75-.75V19.8h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.75v-1.5h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.5c-.41 0-.75.34-.75.75zm-2.5 0c0 .41.34.75.75.75s.75-.34.75-.75v-6c0-.41-.34-.75-.75-.75s-.75.34-.75.75zm-4.25 0c0 .41.34.75.75.75s.75-.34.75-.75V16.8h1c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-3.5c-.41 0-.75.34-.75.75s.34.75.75.75h1z" color="currentColor"></svg:path>`,
})
export class HugeiconsTiff01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTiff02Icon],svg[hugeicons-tiff-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.75 22.799h8l.01.01c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-8c-3.56 0-5.35 0-6.3-.95s-.95-2.74-.95-6.3v-4.54c0-3.07 0-4.61.72-5.5c.14-.18.31-.34.49-.49c.9-.72 2.43-.72 5.5-.72h.79v.24c0 3.03 0 4.55 1.1 5.65s2.62 1.1 5.649 1.1h.221c.03.36.03.84.03 1.25s.34.75.75.75s.75-.34.75-.75c0-1.07-.01-1.74-.21-2.23s-.55-.84-1.18-1.47l-4.74-4.74c-.54-.55-.84-.85-1.25-1.03l-.13-.06l-.013-.007a.6.6 0 0 0-.147-.063c-.45-.15-.86-.15-1.62-.15c-3.42 0-5.14 0-6.45 1.06c-.26.21-.5.45-.71.71C3 4.369 3 6.089 3 9.509v4.54c0 3.98 0 5.97 1.39 7.36s3.38 1.39 7.36 1.39m2.41-15.16c-.59-.59-.66-1.7-.66-3.78l4.44 4.44c-2.09-.01-3.19-.07-3.78-.66M19 19.049c0 .41.34.75.75.75s.75-.34.75-.75v-1.75h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H20.5v-1h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2c-.41 0-.75.34-.75.75zm-4.5 0c0 .41.34.75.75.75s.75-.34.75-.75v-1.75h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H16v-1h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2c-.41 0-.75.34-.75.75zm-2.5 0c0 .41.34.75.75.75s.75-.34.75-.75v-5c0-.41-.34-.75-.75-.75s-.75.34-.75.75zm-4 0c0 .41.34.75.75.75s.75-.34.75-.75v-4.25h.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-3c-.41 0-.75.34-.75.75s.34.75.75.75H8z" color="currentColor"></svg:path>`,
})
export class HugeiconsTiff02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTiktokIcon],svg[hugeicons-tiktok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M10.536 11.008c-.82-.116-2.69.075-3.606 1.77s.007 3.459.584 4.129c.569.627 2.378 1.814 4.297.655c.476-.287 1.069-.502 1.741-2.747l-.078-8.834c-.13.973.945 3.255 4.004 3.525"></svg:path></svg:g>`,
})
export class HugeiconsTiktokIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTiltifyIcon],svg[hugeicons-tiltify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.956 21.406c.38.43.92.67 1.49.67c1 0 1.85-.75 1.98-1.75l1.17-9.33l3.19 1.41c.95.41 2.05.02 2.51-.9s.13-2.05-.75-2.57l-10-5.99c-.62-.37-1.35-.47-2.05-.29s-1.28.62-1.64 1.25c-.38.66-.46 1.45-.22 2.16c.23.71.76 1.3 1.45 1.6l3.65 1.62l-1.27 10.56c-.07.57.11 1.13.49 1.56m-2.09-17.29c.1-.03.2-.04.3-.04l.01.01c.21 0 .42.06.6.17l10 5.99c.2.11.28.39.17.6c-.11.2-.36.29-.57.2l-4.1-1.82a.72.72 0 0 0-.67.03c-.21.12-.35.32-.38.56l-1.29 10.33c-.03.24-.24.43-.49.43a.495.495 0 0 1-.49-.55l1.33-11.11a.75.75 0 0 0-.44-.77l-4.16-1.84c-.3-.14-.53-.38-.63-.7c-.11-.32-.07-.65.09-.94c.16-.28.41-.47.72-.55m10.13 1.71c0 1.24 1.01 2.25 2.25 2.25s2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25s-2.25 1.01-2.25 2.25m1.5 0c0-.41.34-.75.75-.75s.75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75" color="currentColor"></svg:path>`,
})
export class HugeiconsTiltifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTime01Icon],svg[hugeicons-time-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M12.008 10.508a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 0V7m3.007 8.02l-1.949-1.948"></svg:path></svg:g>`,
})
export class HugeiconsTime01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTime02Icon],svg[hugeicons-time-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M12.008 10.508a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m0 0V7m3.007 8.02l-1.949-1.948"></svg:path></svg:g>`,
})
export class HugeiconsTime02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTime03Icon],svg[hugeicons-time-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12M9 9l4 4m3-5l-5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsTime03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTime04Icon],svg[hugeicons-time-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M9.5 9.5L13 13m3-5l-5 5"></svg:path></svg:g>`,
})
export class HugeiconsTime04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimeHalfPassIcon],svg[hugeicons-time-half-pass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.77 2.5q-.41.146-.8.324M5.425 4.466a10 10 0 0 0-.652.624M3.032 7.565q-.28.56-.487 1.157m-.529 2.67c-.022.389-.021.786.002 1.175m.55 2.699q.2.56.464 1.09m1.659 2.387q.366.393.773.746m2.312 1.517A10 10 0 0 0 9 21.5m3 .5c5.523 0 10-4.477 10-10S17.523 2 12 2"></svg:path><svg:path d="M12 13.5a1.5 1.5 0 0 0 0-3m0 3a1.5 1.5 0 0 1 0-3m0 3V16m0-5.5V6"></svg:path></svg:g>`,
})
export class HugeiconsTimeHalfPassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimeManagementIcon],svg[hugeicons-time-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 19.5c0-1.178 0-1.768.44-2.134C2.878 17 3.585 17 5 17s2.121 0 2.56.366s.44.956.44 2.134s0 1.768-.44 2.134C7.122 22 6.415 22 5 22s-2.121 0-2.56-.366S2 20.678 2 19.5m14 0c0-1.178 0-1.768.44-2.134C16.878 17 17.585 17 19 17s2.121 0 2.56.366s.44.956.44 2.134s0 1.768-.44 2.134C21.122 22 20.415 22 19 22s-2.121 0-2.56-.366S16 20.678 16 19.5m3-2.5c0-2.482-.744-3-4.308-3H9.308C5.744 14 5 14.518 5 17m7-10.5L13 5m3.5 1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0" color="currentColor"></svg:path>`,
})
export class HugeiconsTimeManagementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimeManagementCircleIcon],svg[hugeicons-time-management-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 19.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m15 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M19.5 17c-.168-2.453-1.105-3-4.273-3H8.773c-3.168 0-4.105.547-4.273 3M12 6.5L13 5m3.5 1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"></svg:path></svg:g>`,
})
export class HugeiconsTimeManagementCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimeQuarterIcon],svg[hugeicons-time-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 15q.215.641.5 1.245m1.625 2.501q.476.553 1.016 1.035M9 22a11 11 0 0 1-1.304-.518M12 13.5a1.5 1.5 0 1 0-1.5-1.5m1.5 1.5a1.5 1.5 0 0 1-1.5-1.5m1.5 1.5V16m-1.5-4H6"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12"></svg:path></svg:g>`,
})
export class HugeiconsTimeQuarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimeQuarter02Icon],svg[hugeicons-time-quarter-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.28 9.212a.76.76 0 0 0 .94.5c.4-.12.62-.54.5-.94c-.16-.53-.36-1.05-.6-1.55a.745.745 0 0 0-1-.36c-.37.18-.54.62-.36 1c.2.44.38.89.52 1.35m-2.03-3.58c.15.18.37.27.58.27c.17 0 .34-.05.48-.17c.31-.27.36-.74.09-1.06c-.17-.2-.34-.38-.52-.56q-.27-.27-.54-.51a.747.747 0 0 0-1.06.06c-.28.31-.25.79.06 1.06q.24.21.48.45c.15.14.29.3.43.46m-2.845-2.34h.005h-.01zm-.315-.07c.098.05.206.07.315.07a.752.752 0 0 0 .325-1.43c-.54-.26-1.03-.45-1.52-.59a.75.75 0 1 0-.42 1.44c.41.12.83.29 1.3.51M12 22.742c-5.93 0-10.75-4.82-10.75-10.75S6.07 1.242 12 1.242c.41 0 .75.34.75.75s-.34.75-.75.75c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25c0-.41.34-.75.75-.75s.75.34.75.75c0 5.93-4.82 10.75-10.75 10.75m4-10h-4c-.41 0-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75v5.25H16c.41 0 .75.34.75.75s-.34.75-.75.75" color="currentColor"></svg:path>`,
})
export class HugeiconsTimeQuarter02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimeQuarterPassIcon],svg[hugeicons-time-quarter-pass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.376 3q-.322.12-.631.261m12.973 13.04q.153-.332.282-.676m-2.501 3.74q.258-.24.497-.499m-3.727 2.506q.291-.11.573-.237m-3.686.859q-.346.012-.694 0m-3.675-.854q.272.123.551.228m-3.665-2.447q.204.217.423.422m-2.463-3.678q.113.296.243.583m-.871-3.743a10 10 0 0 1 0-.626m.62-3.142q.111-.293.24-.577m1.791-2.68q.217-.232.449-.449M13.5 12a1.5 1.5 0 1 1-1.5-1.5m1.5 1.5a1.5 1.5 0 0 0-1.5-1.5m1.5 1.5H16m-4-1.5V6m10 6c0-5.523-4.477-10-10-10" color="currentColor"></svg:path>`,
})
export class HugeiconsTimeQuarterPassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimeScheduleIcon],svg[hugeicons-time-schedule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 8v4l1.5 1.5m6.045 2.953C21.182 17.337 22 17.78 22 18.5s-.818 1.163-2.455 2.047l-1.114.601c-1.257.679-1.885 1.018-2.187.772c-.74-.605.413-2.164.696-2.716c.288-.56.282-.858 0-1.408c-.283-.552-1.436-2.111-.696-2.716c.302-.246.93.093 2.187.772z"></svg:path><svg:path d="M13.026 21.948Q12.52 21.999 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10q-.002 1.03-.2 2"></svg:path></svg:g>`,
})
export class HugeiconsTimeScheduleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimeSetting01Icon],svg[hugeicons-time-setting-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 8v4l2.804 1.5"></svg:path><svg:path d="M22 13.967v-3.934c-2.857 0-4.714-3.103-3.268-5.566L15.268 2.5c-1.464 2.494-5.07 2.494-6.534 0L5.27 4.467C6.716 6.93 4.857 10.033 2 10.033v3.934c2.857 0 4.714 3.103 3.268 5.566L8.732 21.5c1.465-2.495 5.073-2.495 6.538 0l3.464-1.967c-1.447-2.463.41-5.566 3.266-5.566"></svg:path></svg:g>`,
})
export class HugeiconsTimeSetting01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimeSetting02Icon],svg[hugeicons-time-setting-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m21.318 7.141l-.494-.856c-.373-.648-.56-.972-.878-1.101c-.317-.13-.676-.027-1.395.176l-1.22.344c-.459.106-.94.046-1.358-.17l-.337-.194a2 2 0 0 1-.788-.967l-.334-.998c-.22-.66-.33-.99-.591-1.178c-.261-.19-.609-.19-1.303-.19h-1.115c-.694 0-1.041 0-1.303.19c-.261.188-.37.518-.59 1.178l-.334.998a2 2 0 0 1-.789.967l-.337.195c-.418.215-.9.275-1.358.17l-1.22-.345c-.719-.203-1.078-.305-1.395-.176c-.318.129-.505.453-.878 1.1l-.493.857c-.35.608-.525.911-.491 1.234c.034.324.268.584.736 1.105l1.031 1.153c.252.319.431.875.431 1.375s-.179 1.056-.43 1.375l-1.032 1.152c-.468.521-.702.782-.736 1.105s.14.627.49 1.234l.494.857c.373.647.56.971.878 1.1s.676.028 1.395-.176l1.22-.344a2 2 0 0 1 1.359.17l.336.194c.36.23.636.57.788.968l.334.997c.22.66.33.99.591 1.18c.262.188.609.188 1.303.188h1.115c.694 0 1.042 0 1.303-.189s.371-.519.59-1.179l.335-.997c.152-.399.428-.738.788-.968l.336-.194c.42-.215.9-.276 1.36-.17l1.22.344c.718.204 1.077.306 1.394.177c.318-.13.505-.454.878-1.101l.493-.857c.35-.607.525-.91.491-1.234s-.268-.584-.736-1.105l-1.031-1.152c-.252-.32-.431-.875-.431-1.375s.179-1.056.43-1.375l1.032-1.153c.468-.52.702-.781.736-1.105s-.14-.626-.49-1.234"></svg:path><svg:path d="M12 8v4l2.804 1.5"></svg:path></svg:g>`,
})
export class HugeiconsTimeSetting02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimeSetting03Icon],svg[hugeicons-time-setting-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.308 4.384c-.59 0-.886 0-1.155-.1l-.111-.046c-.261-.12-.47-.328-.888-.746c-.962-.962-1.443-1.443-2.034-1.488a2 2 0 0 0-.24 0c-.591.045-1.072.526-2.034 1.488c-.418.418-.627.627-.888.746l-.11.046c-.27.1-.565.1-1.156.1h-.11c-1.507 0-2.261 0-2.73.468s-.468 1.223-.468 2.73v.11c0 .59 0 .886-.1 1.155q-.022.057-.046.111c-.12.261-.328.47-.746.888c-.962.962-1.443 1.443-1.488 2.034a2 2 0 0 0 0 .24c.045.591.526 1.072 1.488 2.034c.418.418.627.627.746.888q.025.054.046.11c.1.27.1.565.1 1.156v.11c0 1.507 0 2.261.468 2.73s1.223.468 2.73.468h.11c.59 0 .886 0 1.155.1q.057.021.111.046c.261.12.47.328.888.746c.962.962 1.443 1.443 2.034 1.488q.12.009.24 0c.591-.045 1.072-.526 2.034-1.488c.418-.418.627-.626.888-.746q.054-.025.11-.046c.27-.1.565-.1 1.156-.1h.11c1.507 0 2.261 0 2.73-.468s.468-1.223.468-2.73v-.11c0-.59 0-.886.1-1.155q.021-.057.046-.111c.12-.261.328-.47.746-.888c.962-.962 1.443-1.443 1.488-2.034q.009-.12 0-.24c-.045-.591-.526-1.072-1.488-2.034c-.418-.418-.626-.627-.746-.888l-.046-.11c-.1-.27-.1-.565-.1-1.156v-.11c0-1.507 0-2.261-.468-2.73s-1.223-.468-2.73-.468z"></svg:path><svg:path d="M12 8v4l2.804 1.5"></svg:path></svg:g>`,
})
export class HugeiconsTimeSetting03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimer01Icon],svg[hugeicons-timer-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.08 13.152L8 7l5.42 4.28c.77.608.774 1.767.008 2.38a1.547 1.547 0 0 1-2.347-.508"></svg:path><svg:path d="M5 4.82a10 10 0 0 0-3 7.157C2 17.513 6.477 22 12 22s10-4.487 10-10.023a10.02 10.02 0 0 0-8.013-9.824c-.836-.17-1.254-.254-1.62.047C12 2.5 12 2.987 12 3.96v1.002"></svg:path></svg:g>`,
})
export class HugeiconsTimer01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimer02Icon],svg[hugeicons-timer-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 22h11a9 9 0 1 0 0-18c-4.633 0-8.503 3.5-9 8m14.5-6.5l1-1m-14 0l1 1"></svg:path><svg:path d="m16.5 9l-2.94 2.94m0 0a1.5 1.5 0 1 0-2.121 2.121a1.5 1.5 0 0 0 2.122-2.122M12.5 3.5V2m-2 0h4M2 15h3m-3 4h5"></svg:path></svg:g>`,
})
export class HugeiconsTimer02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTinderIcon],svg[hugeicons-tinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.256 8.515c3.128 5.904.177 13.06-6.818 13.485C3.44 22 .307 11.364 7.38 6.455C7.38 14.5 14.13 7.5 12 2c3 1 5.794 3.562 7.256 6.515" color="currentColor"></svg:path>`,
})
export class HugeiconsTinderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTinderSquareIcon],svg[hugeicons-tinder-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M16.324 9.9c1.6 3.146.313 7.361-3.363 7.974C8.147 18.939 4.936 13 8.552 9.519c.193-.193.726-.692.948-.852c0 .491.286 2 .625 2c2.02 0 2.5-2.667 2.242-4.667c1.687.891 3.117 2.132 3.957 3.9"></svg:path></svg:g>`,
})
export class HugeiconsTinderSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTipsIcon],svg[hugeicons-tips-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 8a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path d="M14.831 4.923A3.502 3.502 0 0 0 8 6a3.5 3.5 0 0 0 5.169 3.077M4 13.5h2.395c.294 0 .584.066.847.194l2.042.988c.263.127.553.193.848.193h1.042c1.008 0 1.826.791 1.826 1.767c0 .04-.027.074-.066.085l-2.541.703a1.95 1.95 0 0 1-1.368-.124L6.842 16.25M13 16l4.593-1.411a1.985 1.985 0 0 1 2.204.753c.369.51.219 1.242-.319 1.552l-7.515 4.337a2 2 0 0 1-1.568.187L4 19.52"></svg:path></svg:g>`,
})
export class HugeiconsTipsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTireIcon],svg[hugeicons-tire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 12.063c0-5.11 4.14-9.25 9.25-9.25s9.25 4.14 9.25 9.25s-4.14 9.25-9.25 9.25s-9.25-4.14-9.25-9.25M12 1.313c-5.94 0-10.75 4.81-10.75 10.75S6.06 22.813 12 22.813s10.75-4.81 10.75-10.75S17.94 1.313 12 1.313m-4.56 7.25l3.1 1.79c.21-.18.45-.32.71-.41v-3.58a5.74 5.74 0 0 0-3.81 2.2m2.35 3.09l-3.1-1.79c-.28.68-.44 1.42-.44 2.2s.16 1.52.44 2.2l3.1-1.79a2 2 0 0 1-.04-.41c0-.14.01-.28.04-.41m.75 2.12l-3.1 1.79c.91 1.18 2.26 2 3.81 2.2v-3.58c-.26-.09-.5-.23-.71-.41m2.21.41v3.58c1.55-.2 2.91-1.02 3.81-2.2l-3.1-1.79c-.21.18-.45.32-.71.41m1.46-1.71l3.1 1.79c.28-.68.44-1.42.44-2.2s-.16-1.52-.44-2.2l-3.1 1.79c.03.13.04.27.04.41s-.01.28-.04.41m-.75-2.12l3.1-1.79c-.9-1.18-2.26-2-3.81-2.2v3.58c.26.09.5.23.71.41m-2.1 1.32c.13-.21.37-.36.64-.36c.41 0 .75.34.75.75s-.34.75-.75.75c-.27 0-.51-.14-.64-.36c0 0-.01-.01-.01-.02s-.01-.01-.01-.02a.74.74 0 0 1-.09-.36q0-.195.09-.36s.01-.01.01-.02s.01-.01.01-.02zm-6.61.39c0-4 3.25-7.25 7.25-7.25s7.25 3.25 7.25 7.25s-3.25 7.25-7.25 7.25s-7.25-3.25-7.25-7.25" color="currentColor"></svg:path>`,
})
export class HugeiconsTireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTired01Icon],svg[hugeicons-tired-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M7 8c.21.583.775 1 1.44 1s1.229-.417 1.438-1m4.244 0c.21.583.774 1 1.439 1c.664 0 1.23-.417 1.439-1m-5 5.5c1.673 0 3.11.956 3.73 2.32c.25.552.375.828.159 1.055c-.217.227-.598.116-1.362-.105c-.723-.21-1.625-.4-2.527-.4s-1.804.19-2.527.4c-.764.221-1.145.332-1.362.105c-.216-.227-.091-.503.16-1.055c.62-1.364 2.056-2.32 3.729-2.32"></svg:path></svg:g>`,
})
export class HugeiconsTired01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTired02Icon],svg[hugeicons-tired-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8 8c.423.317 1.192.71 1.29 1.341q.008.056.01.111c.024.429-.286.802-.905 1.548M16 8c-.423.317-1.192.71-1.29 1.341q-.008.056-.01.111c-.024.429.286.802.905 1.548M12 13.5c1.673 0 3.11.956 3.73 2.32c.25.552.375.828.159 1.055c-.217.227-.598.116-1.362-.105c-.723-.21-1.625-.4-2.527-.4s-1.804.19-2.527.4c-.764.221-1.145.332-1.362.105c-.216-.227-.091-.503.16-1.055c.62-1.364 2.056-2.32 3.729-2.32"></svg:path></svg:g>`,
})
export class HugeiconsTired02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTissuePaperIcon],svg[hugeicons-tissue-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 9.5c0 3.038-1.79 5.5-4 5.5s-4-2.462-4-5.5S3.79 4 6 4s4 2.462 4 5.5"></svg:path><svg:path d="M21.813 10.694c.12-.529.187-1.1.187-1.694c0-2.761-1.424-5-3.182-5H6c3.155 0 4.57 3.955 4.023 6.567c-.567 2.7-2.844 5.802-2.634 8.564c.037.491.41.869.858.869H18.36c.492 0 .878-.462.837-1c-.204-2.692 2.015-5.687 2.616-8.306M6.008 9.5h-.009"></svg:path></svg:g>`,
})
export class HugeiconsTissuePaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsToggleOffIcon],svg[hugeicons-toggle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path d="M16 6H8a6 6 0 1 0 0 12h8a6 6 0 0 0 0-12"></svg:path></svg:g>`,
})
export class HugeiconsToggleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsToggleOnIcon],svg[hugeicons-toggle-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path d="M16 6H8a6 6 0 1 0 0 12h8a6 6 0 0 0 0-12"></svg:path></svg:g>`,
})
export class HugeiconsToggleOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsToilet01Icon],svg[hugeicons-toilet-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 11h9.135c1.465 0 2.198 0 2.64.735c.442.736.182 1.204-.34 2.142A6.1 6.1 0 0 1 14.09 17a6.12 6.12 0 0 1-4.028-1.5M8 11V4c0-.943 0-1.414-.293-1.707S6.943 2 6 2s-1.414 0-1.707.293S4 3.057 4 4v7c0 .943 0 1.414.293 1.707S5.057 13 6 13s1.414 0 1.707-.293S8 11.943 8 11M7 7h3"></svg:path><svg:path d="M16 17c-1 1 0 4 2 5H4c1-1 2.7-4.2 1.5-9"></svg:path></svg:g>`,
})
export class HugeiconsToilet01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsToilet02Icon],svg[hugeicons-toilet-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.4 14c.972-.912 1.6-2.364 1.6-4c0-2.761-1.79-5-4-5s-4 2.239-4 5c0 1.636.628 3.088 1.6 4m-1.493 0h7.786c.586 0 1.107.414 1.107 1c0 1.51-.67 3.09-1.729 4.126c-.525.514-1.036 1.046-.4 1.743c.095.104.206.195.299.303c.328.376-.024.828-.447.828H9.277c-.423 0-.775-.452-.447-.828c.093-.108.204-.199.3-.303c.635-.697.123-1.23-.401-1.743C7.669 18.09 7 16.51 7 15c0-.586.521-1 1.107-1"></svg:path><svg:path d="M18.29 12c.594 0 1.093-.43 1.152-.994l.367-3.504c.214-2.033.32-3.05-.076-3.818c-.987-1.912-3.3-1.675-5.139-1.675H9.406c-1.84 0-4.152-.237-5.139 1.675c-.396.768-.29 1.785-.077 3.818l.368 3.504c.06.564.558.994 1.153.994"></svg:path></svg:g>`,
})
export class HugeiconsToilet02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTokenCircleIcon],svg[hugeicons-token-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.547 12.322c0-5.11 4.14-9.25 9.25-9.25s9.25 4.14 9.25 9.25s-4.14 9.25-9.25 9.25s-9.25-4.14-9.25-9.25m9.25-10.75c-5.94 0-10.75 4.81-10.75 10.75s4.81 10.75 10.75 10.75s10.75-4.81 10.75-10.75s-4.81-10.75-10.75-10.75m1.72 6.58l-.63-.98c-.51-.8-1.67-.8-2.18 0l-.63.98c-.63.99-1.46 1.82-2.45 2.45l-.98.63c-.8.51-.8 1.67 0 2.18l.98.63c.99.63 1.82 1.46 2.45 2.45l.63.98c.51.8 1.67.8 2.18 0l.63-.98c.63-.99 1.46-1.82 2.45-2.45l.98-.63c.8-.51.8-1.67 0-2.18l-.98-.63a8 8 0 0 1-2.45-2.45m-2.17.8l.45-.71l.45.71a9.5 9.5 0 0 0 2.92 2.92l.71.45l-.71.45a9.5 9.5 0 0 0-2.92 2.92l-.45.71l-.45-.71a9.5 9.5 0 0 0-2.92-2.92l-.71-.45l.71-.45a9.5 9.5 0 0 0 2.92-2.92" color="currentColor"></svg:path>`,
})
export class HugeiconsTokenCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTokenSquareIcon],svg[hugeicons-token-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.847 2.072h-.1c-2.07 0-3.7 0-4.97.16c-1.31.15-2.36.48-3.21 1.22c-.23.19-.45.41-.64.64c-.74.85-1.07 1.9-1.22 3.21c-.16 1.27-.16 2.9-.16 4.97v.1c0 2.07 0 3.7.16 4.97c.15 1.31.48 2.36 1.22 3.21c.19.23.41.45.64.64c.85.74 1.9 1.07 3.21 1.22c1.27.16 2.9.16 4.97.16h.1c2.07 0 3.7 0 4.97-.16c1.31-.15 2.36-.48 3.21-1.22c.23-.19.45-.41.64-.64c.74-.85 1.07-1.9 1.22-3.21c.16-1.27.16-2.9.16-4.97v-.1c0-2.07 0-3.7-.16-4.97c-.15-1.31-.48-2.36-1.22-3.21c-.19-.23-.41-.45-.64-.64c-.85-.74-1.9-1.07-3.21-1.22c-1.27-.16-2.9-.16-4.97-.16m-7.31 2.52c.54-.47 1.26-.73 2.42-.88c1.17-.14 2.71-.14 4.84-.14s3.67 0 4.84.14c1.16.15 1.88.41 2.42.88c.17.14.33.3.47.47c.47.54.73 1.26.88 2.42c.14 1.17.14 2.71.14 4.84s0 3.67-.14 4.84c-.15 1.16-.41 1.88-.88 2.42c-.14.17-.3.33-.47.47c-.54.47-1.26.73-2.42.88c-1.17.14-2.71.14-4.84.14s-3.67 0-4.84-.14c-1.16-.15-1.88-.41-2.42-.88c-.17-.14-.33-.3-.47-.47c-.47-.54-.73-1.26-.88-2.42c-.14-1.17-.14-2.71-.14-4.84s0-3.67.14-4.84c.15-1.16.41-1.88.88-2.42c.14-.17.3-.33.47-.47m8.35 2.58c-.51-.8-1.67-.8-2.18 0l-.63.98c-.63.99-1.46 1.82-2.45 2.45l-.98.63c-.8.51-.8 1.67 0 2.18l.98.63c.99.63 1.82 1.46 2.45 2.45l.63.98c.51.8 1.67.8 2.18 0l.63-.98c.63-.99 1.46-1.82 2.45-2.45l.98-.63c.8-.51.8-1.67 0-2.18l-.98-.63a8 8 0 0 1-2.45-2.45zm-1.54 1.78l.45-.71l.45.71a9.5 9.5 0 0 0 2.92 2.92l.71.45l-.71.45a9.5 9.5 0 0 0-2.92 2.92l-.45.71l-.45-.71a9.5 9.5 0 0 0-2.92-2.92l-.71-.45l.71-.45a9.5 9.5 0 0 0 2.92-2.92" color="currentColor"></svg:path>`,
})
export class HugeiconsTokenSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTongueIcon],svg[hugeicons-tongue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.651 12c1.171-1.114 1.924-2.527 2.259-3.244c.067-.144.09-.303.09-.462M4.349 12C3.178 10.886 2.425 9.473 2.09 8.756A1.1 1.1 0 0 1 2 8.294m20 0h-3m3 0a1.1 1.1 0 0 0-.09-.46C21.31 6.543 19.354 3 16.044 3c-1.04 0-1.91.538-2.572 1.171c-.564.54-.846.809-.908.853c-.53.373-.597.373-1.128 0c-.062-.044-.344-.314-.908-.853C9.865 3.538 8.996 3 7.956 3C4.646 3 2.69 6.545 2.09 7.833c-.067.144-.09.303-.09.461m0 0h3"></svg:path><svg:path d="m12 9l.27-.274A2.43 2.43 0 0 1 14.001 8c1.14 0 2.13.797 2.386 1.922l.97 4.257C18.152 17.67 15.535 21 12 21s-6.152-3.331-5.357-6.82l.97-4.258A2.455 2.455 0 0 1 9.999 8c.649 0 1.272.261 1.73.726zm0 0v3"></svg:path></svg:g>`,
})
export class HugeiconsTongueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTongue01Icon],svg[hugeicons-tongue-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8.009 9H8m8 0h-.009M8 14a5 5 0 0 0 4 2a5 5 0 0 0 4-2m-6 2v1.5a2 2 0 1 0 4 0V16"></svg:path></svg:g>`,
})
export class HugeiconsTongue01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTongueWinkLeftIcon],svg[hugeicons-tongue-wink-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M9 8s1 1 1 2c-.75-1-2.25-1-3 0m9.009-1H16m-8 5a5 5 0 0 0 4 2a5 5 0 0 0 4-2m-6 2v1.5a2 2 0 1 0 4 0V16"></svg:path></svg:g>`,
})
export class HugeiconsTongueWinkLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTongueWinkRightIcon],svg[hugeicons-tongue-wink-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M15 8s-1 1-1 2c.75-1 2.25-1 3 0M8.009 9H8m0 5a5 5 0 0 0 4 2a5 5 0 0 0 4-2m-6 2v1.5a2 2 0 1 0 4 0V16"></svg:path></svg:g>`,
})
export class HugeiconsTongueWinkRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsToolsIcon],svg[hugeicons-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m13 11l5-5m1 1l-2-2l2.5-1.5l1 1zM4.025 8.975a3.5 3.5 0 0 1-.79-3.74l1.422 1.422h2v-2L5.235 3.235a3.5 3.5 0 0 1 4.529 4.53l6.47 6.471a3.5 3.5 0 0 1 4.53 4.529l-1.421-1.422h-2v2l1.422 1.422a3.5 3.5 0 0 1-4.53-4.528L7.763 9.765a3.5 3.5 0 0 1-3.738-.79"></svg:path><svg:path d="m12.203 14.5l-5.604 5.604a1.35 1.35 0 0 1-1.911 0l-.792-.792a1.35 1.35 0 0 1 0-1.911L9.5 11.797"></svg:path></svg:g>`,
})
export class HugeiconsToolsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTornado01Icon],svg[hugeicons-tornado-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7c0 2.21-3.582 4-8 4S4 9.21 4 7s3.582-4 8-4s8 1.79 8 4m-2 7c0 1.657-2.686 3-6 3s-6-1.343-6-3s2.686-3 6-3m4 8c0 1.105-1.79 2-4 2s-4-.895-4-2s1.79-2 4-2" color="currentColor"></svg:path>`,
})
export class HugeiconsTornado01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTornado02Icon],svg[hugeicons-tornado-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.017 6.159c1.977-1.386 8.9-2.6 9.889 0c1.48 3.89-15.029 6.222-13.845 0C5.555 3.558 10.5 2 12.973 2M18 11.193c-2.577 1.878-9.423 2.631-12 .589m8.022 9.912c-.978.188-2.014.295-3.022.306m-4-6.834c2.077.878 5.384.791 8 .115m-6.96 3.223c1.453.356 3.247.381 4.959.16" color="currentColor"></svg:path>`,
})
export class HugeiconsTornado02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTorriGateIcon],svg[hugeicons-torri-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8v13M18 8v13M3 8h18M3 12h18M10 8v4m4-4v4m6-9c-1.46 2.963-4.494 5-8 5c-3.505 0-6.54-2.037-8-5" color="currentColor"></svg:path>`,
})
export class HugeiconsTorriGateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouch01Icon],svg[hugeicons-touch-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.893 21.988c-.052-1.913.077-2.143.214-2.569s1.093-1.96 1.431-3.057c1.095-3.548.075-4.303-1.285-5.309c-1.509-1.115-4.354-1.68-5.765-1.558V3.744a1.744 1.744 0 0 0-3.489 0v10.26l-2.06-2.18c-.64-.694-1.668-.764-2.37-.133a1.72 1.72 0 0 0-.222 2.318l1.292 1.713M8.869 22l-.019-1.05c.043-1.232-.853-2.035-2.021-3.641l-.246-.336m0 0a72 72 0 0 0-.944-1.251m.944 1.25l1.17 1.55m-1.17-1.55l-.944-1.25m0 0c-.572-.742-1.003-1.281-1.375-1.816" color="currentColor"></svg:path>`,
})
export class HugeiconsTouch01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouch02Icon],svg[hugeicons-touch-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.142 21.998c-.052-1.915.077-2.145.214-2.57c.137-.427 1.093-1.962 1.431-3.059c1.095-3.55.075-4.304-1.285-5.31c-1.509-1.117-4.354-1.682-5.765-1.56V3.746a1.744 1.744 0 1 0-3.489 0v6.22m0 12.032v-1.013c-.064-.944-1.002-2.062-2.17-3.669c-1.202-1.74-1.46-2.62-1.271-3.432c.097-.415.35-1.101 1.59-2.274l1.851-1.644m0 4.066V9.966" color="currentColor"></svg:path>`,
})
export class HugeiconsTouch02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouch03Icon],svg[hugeicons-touch-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.371 12.171L8.505 14V4.25a1.75 1.75 0 1 1 3.5 0V9.5l2.988.478c1.929.289 2.893.434 3.572.84c1.122.673 1.935 1.682 1.935 3.156c0 1.026-.254 1.715-.87 3.565c-.392 1.174-.587 1.76-.906 2.225a4 4 0 0 1-2.192 1.58c-.542.156-1.16.156-2.398.156h-1.05c-1.644 0-2.467 0-3.2-.302a4 4 0 0 1-.384-.183c-.696-.378-1.215-1.016-2.252-2.293l-3.359-4.134a1.74 1.74 0 0 1 2.482-2.417" color="currentColor"></svg:path>`,
})
export class HugeiconsTouch03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouch04Icon],svg[hugeicons-touch-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.416 14v-3.5m0 0V4.25a1.75 1.75 0 1 1 3.5 0V9.5l3.077.478c1.929.289 2.893.434 3.572.84c1.122.673 1.935 1.682 1.935 3.156c0 1.026-.254 1.715-.87 3.565c-.392 1.174-.587 1.76-.906 2.225a4 4 0 0 1-2.193 1.58c-.541.156-1.16.156-2.397.156h-1.405c-1.785 0-2.677 0-3.443-.335a4 4 0 0 1-.96-.593c-.642-.535-1.04-1.333-1.839-2.93c-.647-1.294-.97-1.94-.986-2.612a3 3 0 0 1 .115-.895c.184-.646.66-1.19 1.614-2.28z" color="currentColor"></svg:path>`,
})
export class HugeiconsTouch04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouch05Icon],svg[hugeicons-touch-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.99 22.001l-.047-.772l-.175-.745c-.552-2.186-1.324-2.428-2.552-3.994c-.555-.707-1.556-1.667-2.503-3.02c-.632-.903.154-3.058 2.075-2.433c.32.104.588.312.826.541l1.863 1.891c-.015-2.532.02-8.515-.02-10.097c-.042-1.582 2.827-2.091 2.997.072v5.594m0 0v.937m0-.937c.938-1.19 2.714-1.232 2.972.76m0 0c.042.324.045.703 0 1.14m0-1.14c.474-1.392 2.633-.848 3.047.771m0 0c.099.384-.04.886 0 1.399m0-1.399c.27-.78 3.293-.74 3.01 2.275l-.036 2.705c0 1.605-.214 2.35-.827 3.138c-.226.292-.54.583-.759.903a2.1 2.1 0 0 0-.329.837c-.066.416-.075.991-.055 1.542" color="currentColor"></svg:path>`,
})
export class HugeiconsTouch05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouch06Icon],svg[hugeicons-touch-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.6 13.545V8.97m0 0V3.427c0-.822.716-1.425 1.554-1.425c.84 0 1.511.603 1.511 1.425l.068 5.073M7.6 8.97c-1.345 1.194-2.817 2.576-3.012 2.962c-.906 1.353-.835 2.564.709 4.635a46 46 0 0 0 2.223 2.735c.8.773.584 1.819.584 2.695M10.734 8.5v2.53m0-2.53c.716-.842 2.641-.543 3.045 1.177m.036 1.348v-1.002q0-.12-.015-.237m-.021-.109l.02.109m-.02-.109a1 1 0 0 0 .02.109m-.02-.109c.228-1.177 2.958-.907 3.085 1.202v1.146m.98 9.969v-1.04c.039-1.226 1.077-1.597 1.694-2.937c.624-1.232.435-4.362.435-5.86c.027-.356-.216-1.39-1.342-1.781c-.354-.168-1.15-.41-1.834.073" color="currentColor"></svg:path>`,
})
export class HugeiconsTouch06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouch07Icon],svg[hugeicons-touch-07-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.227 7.79V3.578c0-.872-.692-1.579-1.545-1.579c-.854 0-1.546.707-1.546 1.579v10.487l-1.669-1.711a1.71 1.71 0 0 0-2.586.146a1.816 1.816 0 0 0-.033 2.182l3.095 4.23c.702.96 1.053 1.439 1.476 1.812c.645.57 1.417.965 2.248 1.152c.545.123 1.13.123 2.301.123c2.232 0 3.348 0 4.237-.35a5.2 5.2 0 0 0 2.954-3.027c.341-.91.341-2.055.341-4.342v-2.603c0-1.029-.728-1.907-1.722-2.076l-.353-.06a.88.88 0 0 0-1.016.88m-6.182-2.633l.595-.304c.287-.146.607-.24.918-.164a2.1 2.1 0 0 1 1.578 2.047m-3.09-1.579v2.632m3.09-1.053v1.053m0-1.053c0-.58.462-1.052 1.03-1.052c1.138 0 2.061.942 2.061 2.105m0 0v1.053" color="currentColor"></svg:path>`,
})
export class HugeiconsTouch07Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouch08Icon],svg[hugeicons-touch-08-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.78 13.957V9.493m0 0V3.978c0-.82.683-1.48 1.503-1.48s1.466.66 1.466 1.48v3.996m-2.97 1.52c-1.314 1.19-2.73 2.694-2.92 3.08c-.886 1.348-.793 2.001.195 3.652a41 41 0 0 0 2.033 3.032c.67.759.537.76 1.51 1.472c.867.602 2.667 1.022 6.887.602c3.437-.53 4.26-3.53 4.243-4.963v-3.54c.214-2.942-1.016-3.074-3.25-3.364m-5.728-1.491v2.523m0-2.523c.557-.909 2.582-.541 2.976 1.174m.036 1.345v-1q0-.119-.015-.236m-.02-.109l.004.022q.01.043.016.087m-.02-.109q.005.053.02.11m-.02-.11c-.14-1.196 2.891-.904 3.015 1.2v1.142" color="currentColor"></svg:path>`,
})
export class HugeiconsTouch08Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouch09Icon],svg[hugeicons-touch-09-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.112 8.685l.853-4.924c.141-.816-.394-1.594-1.195-1.738a1.476 1.476 0 0 0-1.707 1.217l-1.706 9.848l-.141.763l-1.91-2.014a1.613 1.613 0 0 0-2.446.14a1.73 1.73 0 0 0-.031 2.072l2.927 4.018c.664.912.997 1.367 1.396 1.722c.61.54 1.341.917 2.127 1.094c.515.117 1.069.117 2.176.117h2.334c2.31 0 4.301-1.676 4.76-4.007l.843-4.284l.085-.492a1.497 1.497 0 0 0-1.195-1.738a1.476 1.476 0 0 0-1.707 1.217l-.085.492m-5.378-3.503l-.256 1.477m.256-1.477a1.476 1.476 0 0 1 1.707-1.217a1.5 1.5 0 0 1 1.195 1.738l-.17.984m0 0l-.086.493m.086-.493a1.476 1.476 0 0 1 1.707-1.216c.801.144 1.336.921 1.195 1.737l-.085.493" color="currentColor"></svg:path>`,
})
export class HugeiconsTouch09Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouch10Icon],svg[hugeicons-touch-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.5 21v-9.5a5.5 5.5 0 1 1 11 0V21"></svg:path><svg:path d="M3 13v-1a9 9 0 0 1 18 0v1"></svg:path><svg:path d="M14.5 11.5a2.5 2.5 0 0 0-5 0v1.25c0 .69.56 1.25 1.25 1.25h2.5c.69 0 1.25-.56 1.25-1.25z"></svg:path></svg:g>`,
})
export class HugeiconsTouch10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouchInteraction01Icon],svg[hugeicons-touch-interaction-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 7.997h-.824c-1.497 0-2.246 0-2.71-.44C3 7.12 3 6.413 3 5s0-2.12.465-2.558c.465-.439 1.214-.439 2.711-.439h11.647c1.498 0 2.247 0 2.712.439S21 3.586 21 4.999s0 2.12-.465 2.559s-1.214.439-2.712.439H16.5"></svg:path><svg:path d="M18.03 21.992c-.05-1.714.09-1.94.221-2.32c.132-.382.947-1.735 1.273-2.718c1.052-3.178.247-3.715-1.014-4.68c-1.444-1.107-3.89-1.67-5.415-1.548v-4.09c0-.863-.826-1.614-1.752-1.614s-1.746.751-1.746 1.614v7.752L7.626 12.71c-.532-.537-1.383-.488-2-.081a1.27 1.27 0 0 0-.445.511c-.28.589-.2 1.255.242 1.8l1.12 1.445m2.985 5.613v-.946c.073-1.163-.983-2.096-2.106-3.535m0 0c-.081-.104.076.097 0 0m0 0c-.34-.43-.61-.808-.878-1.132m.878 1.132l1.107 1.354m-1.107-1.354l-.878-1.132"></svg:path></svg:g>`,
})
export class HugeiconsTouchInteraction01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouchInteraction02Icon],svg[hugeicons-touch-interaction-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8.533 13.653l1.967 1.72V6.5a1.5 1.5 0 0 1 3.001-.002l.004 4.764l2.636.427c1.702.26 2.553.389 3.152.753C20.283 13.044 21 14 21 15.266c0 .918-.224 1.534-.768 3.19c-.345 1.05-.518 1.575-.8 1.99a3.53 3.53 0 0 1-1.934 1.414c-.478.14-1.024.14-2.115.14h-.926c-1.452 0-2.177 0-2.824-.27a4 4 0 0 1-.339-.164c-.614-.338-1.072-.91-1.987-2.052l-2.963-3.698a1.57 1.57 0 0 1-.008-1.954a1.52 1.52 0 0 1 2.197-.21"></svg:path><svg:path d="M7 8h-.824C4.68 8 3.93 8 3.466 7.56C3 7.122 3 6.415 3 5s0-2.121.465-2.56S4.68 2 6.176 2h11.647c1.498 0 2.247 0 2.712.44C21 2.878 21 3.585 21 5s0 2.121-.465 2.56S19.32 8 17.823 8H17"></svg:path></svg:g>`,
})
export class HugeiconsTouchInteraction02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouchInteraction03Icon],svg[hugeicons-touch-interaction-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.546 9.722h.939c1.038 0 1.879.846 1.879 1.89m0 0v.944m0-.945c0-.522.42-.944.94-.944c1.037 0 1.878.845 1.878 1.889m0 0v.944m0-.944c0-.495.441-.871.927-.79l.321.054c.906.152 1.57.94 1.57 1.863v.447c0 2.052 0 3.079-.311 3.896c-.18.474-.657 1.078-1.037 1.515a2.08 2.08 0 0 0-.531 1.36V22m-6.575-10.389V6.417c0-.783-.631-1.417-1.41-1.417s-1.409.634-1.409 1.417v7.52l-1.522-1.535a1.576 1.576 0 0 0-2.358.131a1.61 1.61 0 0 0-.03 1.958l3.381 4.342c.647.831.999 2.112.999 3.167"></svg:path><svg:path d="M6 8h-.824C3.68 8 2.93 8 2.466 7.56C2 7.122 2 6.415 2 5s0-2.121.465-2.56S3.68 2 5.176 2h11.647c1.498 0 2.247 0 2.712.44C20 2.878 20 3.585 20 5s0 2.121-.465 2.56S18.32 8 16.823 8H16"></svg:path></svg:g>`,
})
export class HugeiconsTouchInteraction03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouchInteraction04Icon],svg[hugeicons-touch-interaction-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 13.053v.173m0 0a1.8 1.8 0 0 0-1.52-1.765l-1.207-.198v.895M21 13.226v2.213c0 1.944 0 2.916-.301 3.69a4.5 4.5 0 0 1-2.606 2.574c-.784.297-1.77.297-3.739.297c-1.033 0-1.55 0-2.03-.104a4.55 4.55 0 0 1-1.984-.98c-.373-.317-.683-.725-1.302-1.54L6.307 15.78a1.5 1.5 0 0 1 .029-1.854a1.547 1.547 0 0 1 2.282-.125L10 15.256V6.5a1.5 1.5 0 0 1 3 0v2.974m0 0h.727c1.004 0 1.819.8 1.819 1.79M13 9.473v2.684m2.546-.895v.895m0-.895v-.895h.909c1.004 0 1.818.802 1.818 1.79m0 0v.895"></svg:path><svg:path d="M7 8h-.824C4.68 8 3.93 8 3.466 7.56C3 7.122 3 6.415 3 5s0-2.121.465-2.56S4.68 2 6.176 2h11.647c1.498 0 2.247 0 2.712.44C21 2.878 21 3.585 21 5s0 2.121-.465 2.56S19.32 8 17.823 8H16.5"></svg:path></svg:g>`,
})
export class HugeiconsTouchInteraction04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouchLocked01Icon],svg[hugeicons-touch-locked-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path fill="currentColor" d="m8.5 14l-.543.517A.75.75 0 0 0 9.25 14zm-2.217-2.329l.544-.517l-.047-.045zM3.877 14.09l.599-.453l-.01-.011zm3.282 4.335l-.598.452zm-3.29-6.519l-.592-.46zM7.602 22a.75.75 0 0 0 1.5 0zm.61-1.884l.717-.223zm-.039-.119l.707-.251zM12 9.5h-.75a.75.75 0 0 0 .783.75zm6 2.56a.75.75 0 0 0 1-1.12zm-8.957 1.423l-2.216-2.329l-1.087 1.034l2.217 2.33zM3.28 14.54l3.282 4.335l1.196-.905l-3.281-4.335zm-.002-3.095a2.53 2.53 0 0 0 .011 3.107l1.179-.928a1.03 1.03 0 0 1-.005-1.26zm3.503-.337a2.4 2.4 0 0 0-3.503.337l1.185.919a.9.9 0 0 1 1.325-.132zM9.102 22c0-.913.008-1.526-.173-2.107l-1.432.445c.097.314.105.658.105 1.662zM6.56 18.876c.599.792.796 1.066.906 1.373l1.413-.503c-.205-.575-.58-1.056-1.123-1.775zm2.368 1.017l-.05-.147l-1.412.503l.03.09zM7.75 3.75V14h1.5V3.75zm3.5 0V9.5h1.5V3.75zm-2 0a1 1 0 0 1 1-1v-1.5a2.5 2.5 0 0 0-2.5 2.5zm1-1a1 1 0 0 1 1 1h1.5a2.5 2.5 0 0 0-2.5-2.5zm1.783 7.5c1.563-.07 4.089.13 5.967 1.81l1-1.12c-2.324-2.076-5.348-2.264-7.033-2.19z"></svg:path><svg:path stroke="currentColor" d="M14.5 19.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C15.598 17 16.065 17 17 17h1c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C19.402 22 18.935 22 18 22h-1c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75m1.5-4a1.5 1.5 0 0 1 3 0V17h-3z"></svg:path></svg:g>`,
})
export class HugeiconsTouchLocked01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouchLocked02Icon],svg[hugeicons-touch-locked-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path fill="currentColor" d="M6.75 14a.75.75 0 0 0 1.5 0zM11 9.5h-.75a.75.75 0 0 0 .783.75zM6.75 22a.75.75 0 0 0 1.5 0zm-1.575-4.909l-.641.39zM4.124 13.61l.708.246zm3.828-3.01a.75.75 0 0 0-.904-1.2zM17 12.059a.75.75 0 1 0 1-1.118zM6.75 3.75V14h1.5V3.75zm3.5 0V9.5h1.5V3.75zm-2 0a1 1 0 0 1 1-1v-1.5a2.5 2.5 0 0 0-2.5 2.5zm1-1a1 1 0 0 1 1 1h1.5a2.5 2.5 0 0 0-2.5-2.5zm-2.5 18.255V22h1.5v-.995zM4.534 17.48c.147.243.38.555.614.867c.245.326.51.677.761 1.035c.252.36.473.705.629 1.012c.165.327.212.524.212.61h1.5c0-.45-.182-.909-.375-1.288c-.202-.4-.47-.812-.737-1.194c-.268-.384-.552-.759-.79-1.076a11 11 0 0 1-.532-.745zm.298-3.626c.08-.23.282-.55.605-.936c.312-.372.693-.754 1.071-1.104a22 22 0 0 1 1.416-1.195l.022-.017l.006-.004L7.5 10l-.452-.599v.001l-.003.002l-.007.005l-.124.096a23 23 0 0 0-1.424 1.21a14 14 0 0 0-1.203 1.24c-.357.427-.701.917-.872 1.407zm.984 2.847c-.351-.577-.673-1.046-.881-1.553c-.196-.475-.246-.883-.103-1.294l-1.417-.493c-.303.872-.148 1.677.133 2.358c.267.65.694 1.28.986 1.76zm5.217-6.453c1.563-.07 4.089.13 5.967 1.81l1-1.118c-2.324-2.077-5.348-2.265-7.033-2.19z"></svg:path><svg:path stroke="currentColor" d="M14 19.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C15.098 17 15.565 17 16.5 17h1c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-1c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C14 20.902 14 20.435 14 19.5m1.5-4a1.5 1.5 0 0 1 3 0V17h-3z"></svg:path></svg:g>`,
})
export class HugeiconsTouchLocked02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouchLocked03Icon],svg[hugeicons-touch-locked-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.5 12c-.337-.712-.735-1.262-1.435-1.682c-.679-.406-1.643-.551-3.572-.84L11.505 9V3.75a1.75 1.75 0 1 0-3.5 0v9.75l-2.134-1.829a1.74 1.74 0 0 0-2.482 2.417l3.359 4.134C7.785 19.499 8.304 20.137 9 20.515q.187.102.385.183c.64.264 1.348.297 2.615.301m3-1.499c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C16.098 17 16.565 17 17.5 17h1c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-1c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C15 20.902 15 20.435 15 19.5"></svg:path><svg:path d="M16.5 15.5a1.5 1.5 0 0 1 3 0V17h-3z"></svg:path></svg:g>`,
})
export class HugeiconsTouchLocked03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouchLocked04Icon],svg[hugeicons-touch-locked-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.916 13.495V9.996m0 0V3.75a1.75 1.75 0 0 1 3.5 0v5.248l3.077.477c1.929.29 2.893.434 3.572.84c.7.42 1.098.97 1.435 1.682m-11.584-2L5.73 11.352c-.953 1.088-1.43 1.633-1.614 2.278a3 3 0 0 0-.115.895c.016.67.34 1.317.986 2.61c.798 1.596 1.197 2.394 1.84 2.93c.29.241.613.44.959.592c.99.433 2.154.333 3.214.333m3-1.49c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C15.098 17 15.565 17 16.5 17h1c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-1c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C14 20.902 14 20.435 14 19.5m1.5-4a1.5 1.5 0 0 1 3 0V17h-3z" color="currentColor"></svg:path>`,
})
export class HugeiconsTouchLocked04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouchpad01Icon],svg[hugeicons-touchpad-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path fill="currentColor" d="m21.448 13.97l-.527.532zm-.262 4.581l.675.328zM13 15.258l-.494.565a.75.75 0 0 0 1.244-.565zm-1.739-1.521l.494-.565h-.001zm-1.954 1.934l.594-.457l-.009-.012zm2.666 3.468l.594-.457zM9.3 13.924l-.589-.464zM19.537 22a.75.75 0 1 0 1.5 0zm-7.345 0a.75.75 0 0 0 1.5 0zm.637-1.508l.715-.226zm-.032-.094l.705-.255zM16 11.98h-.75a.75.75 0 0 0 .783.749zm4.92 2.522c.286.283.404.815.283 1.61c-.115.762-.423 1.56-.691 2.111l1.349.656c.306-.63.679-1.578.825-2.54c.141-.928.104-2.096-.71-2.902zm-.408 3.721a9 9 0 0 1-.25.46c-.096.17-.208.366-.31.568c-.199.39-.415.9-.415 1.455h1.5c0-.187.078-.434.252-.776c.083-.164.177-.328.278-.506c.097-.17.204-.36.294-.545zm-7.018-3.53l-1.739-1.52l-.987 1.129l1.738 1.52zm-4.782 1.435l2.666 3.468l1.19-.914L9.9 15.214zm-.001-2.668a2.16 2.16 0 0 0 .01 2.68l1.171-.938a.66.66 0 0 1-.003-.814zm3.043-.289a2.106 2.106 0 0 0-3.043.29l1.178.927a.606.606 0 0 1 .88-.085zm7.783 7.535V22h1.5v-1.294zM13.692 22c0-.72.008-1.24-.148-1.734l-1.43.452c.07.222.078.47.078 1.282zm-2.314-2.404c.492.64.635.84.714 1.057l1.41-.51c-.176-.488-.498-.893-.935-1.461zm2.166.67l-.042-.123l-1.41.51l.022.065zM12.25 7.5v7.758h1.5V7.5zm3 0v4.48h1.5V7.5zm.783 5.229c1.271-.056 3.36.259 4.887 1.773l1.056-1.065c-1.935-1.918-4.505-2.272-6.009-2.207zM13.75 7.5a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25z"></svg:path><svg:path stroke="currentColor" d="M22 10c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10v2c0 1.864 0 2.796.304 3.53a4 4 0 0 0 2.165 2.165c.59.245 1.307.293 2.531.303"></svg:path></svg:g>`,
})
export class HugeiconsTouchpad01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouchpad02Icon],svg[hugeicons-touchpad-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.196 14.144L13 15.762V7.5a1.5 1.5 0 0 1 3 0v4.482l1.789.315c1.475.243 2.212.365 2.731.708c.858.566 1.48 1.416 1.48 2.657c0 .864-.194 1.444-.666 3.002c-.299.989-.448 1.483-.692 1.874a3.1 3.1 0 0 1-1.677 1.33c-.414.132-.887.132-1.833.132h-.803c-1.258 0-1.887 0-2.447-.254a3 3 0 0 1-.294-.154c-.532-.319-.929-.856-1.722-1.931L9.298 16.18a1.58 1.58 0 0 1-.007-1.839c.47-.647 1.333-.736 1.905-.197"></svg:path><svg:path d="M22 10c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10v2c0 1.864 0 2.796.304 3.53a4 4 0 0 0 2.165 2.165c.59.245 1.307.293 2.531.303"></svg:path></svg:g>`,
})
export class HugeiconsTouchpad02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouchpad03Icon],svg[hugeicons-touchpad-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.818 9.444h.91c1.004 0 1.818.796 1.818 1.778m0 0v.889m0-.889a.9.9 0 0 1 .909-.889c1.004 0 1.818.796 1.818 1.778m0 0V13m0-.889c0-.465.427-.82.896-.743l.312.051c.876.143 1.519.885 1.519 1.754v.42c0 1.931 0 2.897-.301 3.666c-.175.447-.636 1.015-1.004 1.427a1.93 1.93 0 0 0-.514 1.279V21m-6.363-9.778V6.333c0-.736-.61-1.333-1.363-1.333c-.754 0-1.364.597-1.364 1.333v7.078l-1.473-1.445a1.553 1.553 0 0 0-2.282.124a1.48 1.48 0 0 0-.03 1.842l3.273 4.088c.626.782.966 1.987.966 2.98"></svg:path><svg:path d="M7.002 18c-1.224-.01-1.941-.058-2.532-.302a4 4 0 0 1-2.165-2.165C2 14.798 2 13.866 2 12.002v-2c0-3.773 0-5.659 1.172-6.83S6.231 2 10.004 2h4.001c3.773 0 5.66 0 6.832 1.172C21.78 4.115 21.964 5.52 22 8"></svg:path></svg:g>`,
})
export class HugeiconsTouchpad03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouchpad04Icon],svg[hugeicons-touchpad-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 13.579v.163m0 0c0-.823-.6-1.525-1.418-1.66l-1.128-.187v.842M22 13.742v2.083c0 1.83 0 2.745-.28 3.473a4.22 4.22 0 0 1-2.433 2.422c-.732.28-1.651.28-3.49.28c-.964 0-1.446 0-1.894-.098a4.24 4.24 0 0 1-1.852-.922c-.348-.298-.637-.682-1.216-1.45l-2.549-3.384a1.42 1.42 0 0 1 .028-1.745a1.435 1.435 0 0 1 2.13-.117l1.29 1.368v-8.24c0-.78.626-1.412 1.4-1.412c.772 0 1.4.632 1.4 1.412v2.798m0 0h.678a1.69 1.69 0 0 1 1.697 1.685m-2.376-1.684v2.526m2.376-.842v.842m0-.842v-.842h.849a1.69 1.69 0 0 1 1.697 1.684m0 0v.842"></svg:path><svg:path d="M22 8.01c-.036-2.484-.22-3.892-1.163-4.836C19.665 2 17.778 2 14.005 2h-4.001C6.23 2 4.344 2 3.172 3.174S2 6.236 2 10.014v2.003c0 1.867 0 2.8.305 3.537a4 4 0 0 0 2.165 2.168c.408.17.876.244 1.53.278"></svg:path></svg:g>`,
})
export class HugeiconsTouchpad04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTowTruckIcon],svg[hugeicons-tow-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.002 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-9.996 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="M12.004 12L6.006 3m0 0l2 10m-2-10H3.838c-.19 0-.349.161-.372.375L3.133 6.43c.62 0 1.124.575 1.124 1.285S3.754 9 3.133 9c-.49 0-.97-.358-1.125-.857M19 19c2.683 0 3-.928 3-3.488c0-1.225 0-1.837-.24-2.354c-.25-.54-.702-.877-1.652-1.565c-.943-.684-1.614-1.452-2.253-2.51c-.912-1.51-1.367-2.265-2.05-2.674C15.12 6 14.314 6 12.702 6h-.7v7"></svg:path><svg:path d="M5.007 18.996s-1.16.01-1.52-.036c-.3-.12-.664-.402-.9-.558c-.72-.479-.575-.282-.575-.714l-.004-3.682v-.96c0-.06-.062-.047.4-.04H21.48M9.005 19.002h5.998"></svg:path></svg:g>`,
})
export class HugeiconsTowTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTowelsIcon],svg[hugeicons-towels-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 5H15c1.886 0 2.828 0 3.414.586S19 7.114 19 9v3c0 1.886 0 2.828-.586 3.414S16.886 16 15 16h-3c-1.886 0-2.828 0-3.414-.586S8 13.886 8 12V8M6.5 5A1.5 1.5 0 0 0 5 6.5V8h3M6.5 5A1.5 1.5 0 0 1 8 6.5V8m9 8c0 1.886 0 2.828-.586 3.414S14.886 20 13 20H9c-1.886 0-2.828 0-3.414-.586S5 17.886 5 16v-5m17-7v1c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 8 19.932 8 19 8M2 4v1c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C3.602 8 4.068 8 5 8" color="currentColor"></svg:path>`,
})
export class HugeiconsTowelsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsToyTrainIcon],svg[hugeicons-toy-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="7" cy="18" r="2"></svg:circle><svg:circle cx="17" cy="18" r="2"></svg:circle><svg:path d="M2 4h11M6 8h2m7 4.5h.5M3 4v12c0 .465 0 .698.051.888a1.5 1.5 0 0 0 1.06 1.06C4.304 18 4.536 18 5 18m7 0V4M9 18h6m-3-8h4.86c1.364 0 1.694.27 1.962 1.608c.097.486.015.858.52.898c.84.068 1.432.633 1.749 1.373C21.546 14.94 22 15.832 22 17c0 .471 0 .707-.146.854C21.707 18 21.47 18 21 18h-2m-3-8V7m0 0h-1m1 0h1"></svg:path></svg:g>`,
})
export class HugeiconsToyTrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTractorIcon],svg[hugeicons-tractor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="6.5" cy="16.5" r="4.5"></svg:circle><svg:circle cx="19" cy="18" r="3"></svg:circle><svg:path d="M2 10.5a7.5 7.5 0 0 1 11.995 6.287c-.023.604-.034.907.113 1.06s.42.153.965.153H16m-3-9l3.106.582c2.34.44 3.511.659 4.202 1.492c.692.833.692 2.03.692 4.426M20 12h-1"></svg:path><svg:path d="M13 12.5V9.587q0-.587-.169-1.15L11.5 3M4 9V3M3 3h10m5 6.5V8a2 2 0 0 1 2-2M7 9V3"></svg:path></svg:g>`,
})
export class HugeiconsTractorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTradeDownIcon],svg[hugeicons-trade-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 11v5h-5"></svg:path><svg:path d="m20 16l-5-5c-.883-.883-1.324-1.324-1.865-1.373a1.5 1.5 0 0 0-.27 0c-.541.05-.982.49-1.865 1.373s-1.324 1.324-1.865 1.373q-.135.012-.27 0c-.541-.05-.982-.49-1.865-1.373L4 8"></svg:path></svg:g>`,
})
export class HugeiconsTradeDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTradeMarkIcon],svg[hugeicons-trade-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 12c0-4.243 0-6.364 1.464-7.682C4.93 3 7.286 3 12 3s7.071 0 8.535 1.318S22 7.758 22 12s0 6.364-1.465 7.682C19.072 21 16.714 21 12 21s-7.071 0-8.536-1.318S2 16.242 2 12"></svg:path><svg:path d="M5.5 8.5H8m2.5 0H8m5 7v-7l2.75 4l2.75-4v7M8 8.5v7"></svg:path></svg:g>`,
})
export class HugeiconsTradeMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTradeMarkCircleIcon],svg[hugeicons-trade-mark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.254 12c0 5.928 4.822 10.75 10.75 10.75s10.75-4.822 10.75-10.75s-4.822-10.75-10.75-10.75S1.254 6.072 1.254 12m1.5 0c0-5.1 4.15-9.25 9.25-9.25s9.25 4.15 9.25 9.25s-4.15 9.25-9.25 9.25s-9.25-4.15-9.25-9.25m5.01 3.495a.75.75 0 0 0 1.5 0v-5.27h1.73a.75.75 0 0 0 0-1.5h-5a.75.75 0 0 0 0 1.5h1.77zm9.5-.01c0 .415.336.75.75.75h.001a.75.75 0 0 0 .75-.75v-6.01a.75.75 0 0 0-.525-.714c-.483-.152-.935.087-2.102 1.112c-.228.2-.447.4-.633.572a36 36 0 0 0-.633-.572c-1.167-1.025-1.619-1.264-2.102-1.112a.75.75 0 0 0-.525.714v6.01a.75.75 0 0 0 1.5 0V10.88c.392.338.844.753 1.237 1.134a.75.75 0 0 0 1.045 0c.392-.381.845-.795 1.237-1.134z" color="currentColor"></svg:path>`,
})
export class HugeiconsTradeMarkCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTradeUpIcon],svg[hugeicons-trade-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 13V8h-5"></svg:path><svg:path d="m20 8l-5 5c-.883.883-1.324 1.324-1.865 1.373q-.135.012-.27 0c-.541-.05-.982-.49-1.865-1.373s-1.324-1.324-1.865-1.373a1.5 1.5 0 0 0-.27 0c-.541.05-.982.49-1.865 1.373l-3 3"></svg:path></svg:g>`,
})
export class HugeiconsTradeUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrademarkIcon],svg[hugeicons-trademark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 12c0-4.243 0-6.364 1.464-7.682C4.93 3 7.286 3 12 3s7.071 0 8.535 1.318S22 7.758 22 12s0 6.364-1.465 7.682C19.072 21 16.714 21 12 21s-7.071 0-8.536-1.318S2 16.242 2 12"></svg:path><svg:path d="M5.5 8.5H8m2.5 0H8m5 7v-7l2.75 4l2.75-4v7M8 8.5v7"></svg:path></svg:g>`,
})
export class HugeiconsTrademarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrafficIncidentIcon],svg[hugeicons-traffic-incident-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 1.998h18M10.707 21.46l.057-1.104m0 0c.297.077.816.214 1.084.355c2.337 1.24 2.876 1.685 3.812.9l3.948-3.9c.796-.925.356-1.468-.86-3.815a6 6 0 0 1-.38-1.051m-7.604 7.511c-1.129-.292-2.152-.202-2.845-.734c-.114-.087-1.211-1.222-2.018-2.036c-.606-.611.005-1.178.535-1.795c.337-.393.638-.822 1.003-1.189a321 321 0 0 1 5.403-5.339c.394-.38.86-.696 1.28-1.047c.477-.397.984-.8 1.56-.291c.86.76 1.932 1.922 2.018 2.036c.524.698.388 1.753.669 2.884m-7.605 7.511l7.605-7.511m0 0l1.116-.137m-11.46 6.99l.963-1.232m2.006-3.963l1.725-1.613m3.787-1.923l1.413-.61m-5.225-.992l-.839-.879a.997.997 0 0 1 .036-1.413l.801-.76a1 1 0 0 1 1.394.016l1.443 1.433M7.404 14.72l-.87-.849a1 1 0 0 0-1.415.017l-.771.79a.997.997 0 0 0-.002 1.392l1.417 1.46" color="currentColor"></svg:path>`,
})
export class HugeiconsTrafficIncidentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrafficJam01Icon],svg[hugeicons-traffic-jam-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.75 14.303v-.97c0-2.03 0-3.15-.8-3.94c-.07-.07-.14-.13-.21-.19v-.03l-.36-1.77c-.31-1.6-.5-2.56-1.27-3.21c-.76-.62-1.7-.62-3.39-.62h-3.64c-1.69 0-2.63 0-3.39.62c-.76.64-.95 1.6-1.26 3.19l-.041.2H7.28c-1.69 0-2.63 0-3.39.62c-.76.64-.95 1.61-1.26 3.2l-.36 1.78l-.002.01q-.108.086-.208.19c-.81.8-.81 1.91-.81 3.94v3c0 .413.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1.25h10.5v1.25c0 .413.336.75.75.75h1a.75.75 0 0 0 .75-.75v-3c0-.92 0-1.651-.074-2.25h3.574v1.25c0 .413.336.75.75.75h1a.75.75 0 0 0 .75-.75zm-7.5 3.27h-2.94l-.78-.781a.75.75 0 0 0-.53-.22H7a.75.75 0 0 0-.53.22l-.78.78H2.74v-.25c0-1.74.02-2.53.38-2.88c.35-.36 1.14-.37 2.88-.37h6c1.74 0 2.53.01 2.88.37c.36.35.37 1.14.37 2.88zM3.91 12.628c.569-.057 1.252-.057 2.09-.057h6c.844 0 1.53 0 2.1.059l-.19-.939c-.27-1.38-.41-2.06-.76-2.34c-.32-.26-.98-.28-2.43-.28H7.28c-1.45 0-2.11.01-2.43.28c-.34.28-.48.96-.75 2.33zm11.833.57a2.4 2.4 0 0 1 .379.373h5.128v-.25c0-1.74-.01-2.53-.37-2.88c-.35-.36-1.14-.37-2.88-.37h-2.9c.096.39.182.833.28 1.34l.36 1.77zm-1.279-4.626H18c.84 0 1.52 0 2.09.06l-.19-.94c-.27-1.38-.41-2.06-.76-2.34c-.32-.26-.98-.28-2.43-.28h-3.64c-1.45 0-2.11.01-2.43.28c-.332.272-.473.926-.73 2.23h.81c1.69 0 2.63 0 3.39.62q.202.17.354.37m4.286 3.26c0 .41.34.75.75.75v.01c.41 0 .75-.34.75-.76a.749.749 0 1 0-1.5 0" color="currentColor"></svg:path>`,
})
export class HugeiconsTrafficJam01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrafficJam02Icon],svg[hugeicons-traffic-jam-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.008 16.072h-.005a.755.755 0 0 0 .745-.75v-3c0-2.02 0-3.14-.8-3.94c-.07-.07-.14-.13-.21-.19v-.02l-.35-1.78c-.33-1.65-.52-2.56-1.28-3.2c-.76-.62-1.7-.62-3.39-.62h-3.24c-1.69 0-2.62 0-3.39.62c-.65.53-.89 1.33-1.114 2.406c-.81.048-1.382.189-1.886.594c-.65.53-.89 1.33-1.114 2.406c-.915.038-1.54.167-2.076.604c-.76.64-.95 1.61-1.26 3.2l-.36 1.78v.002q-.11.086-.21.188c-.81.81-.81 1.92-.81 3.95v3c0 .415.336.75.75.75h1a.75.75 0 0 0 .75-.75v-1.25h10.5v1.25c0 .415.336.75.75.75h1a.75.75 0 0 0 .75-.75v-3c0-2.03 0-3.15-.8-3.94a2 2 0 0 0-.21-.186v-.004l-.36-1.78l-.066-.34c1.532.004 2.248.042 2.576.37c.35.35.36 1.13.36 2.88v3c0 .409.338.748.745.75h-.005h.01h-.005a.755.755 0 0 0 .745-.75v-3c0-2.02 0-3.14-.8-3.94c-.07-.07-.14-.13-.21-.19v-.02l-.35-1.78l-.064-.32c1.53.004 2.246.042 2.574.37c.35.35.36 1.13.36 2.88v3c0 .409.338.748.745.75h-.005zm-6.75 2.5v-.25c0-1.74-.01-2.53-.37-2.88c-.35-.36-1.14-.38-2.88-.38h-6c-1.74 0-2.53.01-2.88.37c-.36.35-.38 1.14-.38 2.88v.25l.01.01h2.94l.78-.78a.75.75 0 0 1 .53-.22h4a.75.75 0 0 1 .53.22l.78.78zm2.75-11h-.045c-.191-.594-.437-1.028-.855-1.38c-.76-.62-1.7-.62-3.39-.62H10.52c.158-.675.293-1.038.52-1.22c.34-.27.99-.28 2.44-.28h3.24c1.45 0 2.11.02 2.43.28c.34.29.48.92.77 2.34l.19.94c-.57-.06-1.26-.06-2.1-.06m-3.042 3h.042c.84 0 1.53 0 2.1.06l-.19-.94c-.29-1.42-.43-2.05-.77-2.34c-.32-.26-.98-.28-2.43-.28h-3.24c-1.45 0-2.1.01-2.44.28c-.227.183-.363.549-.521 1.23h3.211c1.69 0 2.63 0 3.39.62c.414.35.66.79.848 1.37m-1.048 2.12l.19.939c-.57-.059-1.256-.059-2.1-.059h-6c-.838 0-1.521 0-2.09.057l.19-.947c.27-1.37.41-2.05.75-2.33c.32-.27.98-.28 2.43-.28h3.44c1.45 0 2.11.02 2.43.28c.35.28.49.96.76 2.34" color="currentColor"></svg:path>`,
})
export class HugeiconsTrafficJam02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrafficLightIcon],svg[hugeicons-traffic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.5 6.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path d="M12 17c-1.87 0-2.804 0-3.5-.402A3 3 0 0 1 7.402 15.5C7 14.804 7 13.87 7 12V7c0-1.87 0-2.804.402-3.5A3 3 0 0 1 8.5 2.402C9.196 2 10.13 2 12 2s2.804 0 3.5.402A3 3 0 0 1 16.598 3.5C17 4.196 17 5.13 17 7v5c0 1.87 0 2.804-.402 3.5a3 3 0 0 1-1.098 1.098C14.804 17 13.87 17 12 17m0 0v5M7 8l-1.044-.877C4.641 6.02 3.984 5.468 4 4.966c.007-.204.073-.4.189-.564C4.475 4 5.316 4 7 4m10 4l1.044-.877C19.358 6.02 20.016 5.468 20 4.966a1.03 1.03 0 0 0-.189-.564C19.525 4 18.684 4 17 4m0 11l1.044-.876c1.314-1.104 1.972-1.657 1.956-2.158a1.03 1.03 0 0 0-.189-.564C19.525 11 18.684 11 17 11M7 15l-1.044-.876C4.641 13.02 3.984 12.467 4 11.966c.007-.204.073-.4.189-.564C4.475 11 5.316 11 7 11"></svg:path></svg:g>`,
})
export class HugeiconsTrafficLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrain01Icon],svg[hugeicons-train-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 11v-1c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v1c0 3.771 0 5.657-1.172 6.828S15.771 19 12 19s-5.657 0-6.828-1.172S4 14.771 4 11"></svg:path><svg:path d="M4 12s3.733 1 8 1s8-1 8-1M7 19l-2 3m12-3l2 3M4.5 16h2m11 0h2M5 5h14"></svg:path></svg:g>`,
})
export class HugeiconsTrain01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrain02Icon],svg[hugeicons-train-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 10c0 4.418-3.582 10-8 10s-8-5.582-8-10a8 8 0 1 1 16 0"></svg:path><svg:path d="M8 18c.939-1.22 2.382-2 4-2s3.061.78 4 2M9.249 9.604A9.8 9.8 0 0 0 12 10c.966 0 1.893-.145 2.751-.396c1.16-.34 1.668-.994.844-2.016c-1.705-2.117-5.485-2.117-7.19 0c-.824 1.022-.315 1.676.844 2.016M5 19l-2 3m16-3l2 3"></svg:path></svg:g>`,
})
export class HugeiconsTrain02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTramIcon],svg[hugeicons-tram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 2h9m5 0h-5m0 0l-2 3M8 20l-1 2m9-2l1 2M5 13v-1c0-3.3 0-4.95 1.025-5.975S8.7 5 12 5s4.95 0 5.975 1.025S19 8.7 19 12v1c0 3.3 0 4.95-1.025 5.975S15.3 20 12 20s-4.95 0-5.975-1.025S5 16.3 5 13"></svg:path><svg:path d="M5 14s3.267 1 7 1s7-1 7-1m-2.5 3h2m-13-9h13m-13 9h2"></svg:path></svg:g>`,
})
export class HugeiconsTramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrampolineIcon],svg[hugeicons-trampoline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 10v8m10-2v4m10-10v8"></svg:path><svg:ellipse cx="12" cy="10" rx="10" ry="6"></svg:ellipse></svg:g>`,
})
export class HugeiconsTrampolineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTransactionIcon],svg[hugeicons-transaction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.58 8.607L2 8.454C3.849 3.704 9.158 1 14.333 2.344c5.513 1.433 8.788 6.918 7.314 12.25c-1.219 4.411-5.304 7.337-9.8 7.406"></svg:path><svg:path d="M12 22C6.5 22 2 17 2 11m11.604-1.278c-.352-.37-1.213-1.237-2.575-.62c-1.361.615-1.577 2.596.482 2.807c.93.095 1.537-.11 2.093.47c.556.582.659 2.198-.761 2.634s-2.341-.284-2.588-.509m1.653-6.484v.79m0 6.337v.873"></svg:path></svg:g>`,
})
export class HugeiconsTransactionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTransactionHistoryIcon],svg[hugeicons-transaction-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 10.5V10c0-3.771 0-5.657-1.172-6.828S14.771 2 11 2S5.343 2 4.172 3.172S3 6.229 3 10v4.5c0 3.287 0 4.931.908 6.038q.25.304.554.554C5.57 22 7.212 22 10.5 22M7 7h8m-8 4h4"></svg:path><svg:path d="m18 18.5l-1.5-.55V15.5m-4.5 2a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0"></svg:path></svg:g>`,
})
export class HugeiconsTransactionHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTransitionBottomIcon],svg[hugeicons-transition-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 2c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C22 3.9 22 4.6 22 6s0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.093C20.1 10 19.4 10 18 10H6c-1.4 0-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.093-1.093C2 8.1 2 7.4 2 6s0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2zm-6 16v-8m0 8c-.7 0-2.008-1.994-2.5-2.5M12 18c.7 0 2.008-1.994 2.5-2.5"></svg:path><svg:path d="M2 16c0 2.339 0 3.508.536 4.362a3.5 3.5 0 0 0 1.102 1.102C4.492 22 5.66 22 8 22h8c2.339 0 3.508 0 4.362-.537a3.5 3.5 0 0 0 1.102-1.1C22 19.507 22 18.338 22 16"></svg:path></svg:g>`,
})
export class HugeiconsTransitionBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTransitionLeftIcon],svg[hugeicons-transition-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 6c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C20.1 2 19.4 2 18 2s-2.1 0-2.635.272a2.5 2.5 0 0 0-1.092 1.093C14 3.9 14 4.6 14 6v12c0 1.4 0 2.1.273 2.635a2.5 2.5 0 0 0 1.092 1.092C15.9 22 16.6 22 18 22s2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 20.1 22 19.4 22 18zM6 12h8m-8 0c0-.7 1.994-2.008 2.5-2.5M6 12c0 .7 1.994 2.008 2.5 2.5"></svg:path><svg:path d="M8 22c-2.339 0-3.508 0-4.362-.537a3.5 3.5 0 0 1-1.102-1.1C2 19.507 2 18.338 2 16V8c0-2.339 0-3.508.536-4.362a3.5 3.5 0 0 1 1.102-1.102C4.492 2 5.66 2 8 2"></svg:path></svg:g>`,
})
export class HugeiconsTransitionLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTransitionRightIcon],svg[hugeicons-transition-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6v12c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18zm14 16c2.339 0 3.508 0 4.362-.537a3.5 3.5 0 0 0 1.102-1.1C22 19.507 22 18.338 22 16V8c0-2.339 0-3.508-.537-4.362a3.5 3.5 0 0 0-1.1-1.102C19.507 2 18.338 2 16 2"></svg:path><svg:path d="M18 12h-8m8 0c0-.7-1.994-2.008-2.5-2.5M18 12c0 .7-1.994 2.008-2.5 2.5"></svg:path></svg:g>`,
})
export class HugeiconsTransitionRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTransitionTopIcon],svg[hugeicons-transition-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 22c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 20.1 22 19.4 22 18s0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092C20.1 14 19.4 14 18 14H6c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.093 1.092C2 15.9 2 16.6 2 18s0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 22 4.6 22 6 22zM12 6v8m0-8c-.7 0-2.008 1.994-2.5 2.5M12 6c.7 0 2.008 1.994 2.5 2.5"></svg:path><svg:path d="M2 8c0-2.339 0-3.508.536-4.362a3.5 3.5 0 0 1 1.102-1.102C4.492 2 5.66 2 8 2h8c2.339 0 3.508 0 4.362.536a3.5 3.5 0 0 1 1.102 1.102C22 4.492 22 5.66 22 8"></svg:path></svg:g>`,
})
export class HugeiconsTransitionTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTranslateIcon],svg[hugeicons-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 5.828h2.7m3.3 0H9.5m-1.8 0h1.8m-1.8 0V5m1.8.828c-.316 1.131-.98 2.201-1.736 3.141M5.836 11a19 19 0 0 0 1.928-2.03m0 0c-.385-.453-.925-1.184-1.08-1.515m1.08 1.514l1.157 1.203M13.5 19l.833-2m4.167 2l-.833-2m-3.334 0L16 13l1.667 4m-3.334 0h3.334"></svg:path><svg:path d="M14 10V8c0-2.828 0-4.243-.879-5.121C12.243 2 10.828 2 8 2s-4.243 0-5.121.879C2 3.757 2 5.172 2 8s0 4.243.879 5.121C3.757 14 5.172 14 8 14h2"></svg:path><svg:path d="M10 16c0-2.828 0-4.243.879-5.121C11.757 10 13.172 10 16 10s4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22s-4.243 0-5.121-.879C10 20.243 10 18.828 10 16m-6 .5c0 1.404 0 2.107.337 2.611a2 2 0 0 0 .552.552C5.393 20 6.096 20 7.5 20M20 7.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C18.607 4 17.904 4 16.5 4"></svg:path></svg:g>`,
})
export class HugeiconsTranslateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTranslationIcon],svg[hugeicons-translation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 5.966h3.15m3.85 0h-1.75m-2.1 0h2.1m-2.1 0V5m2.1.966c-.37 1.32-1.142 2.568-2.025 3.665M5.975 12c.713-.656 1.52-1.46 2.25-2.369m0 0c-.45-.528-1.08-1.381-1.26-1.767m1.26 1.767l1.35 1.403"></svg:path><svg:path d="M7.022 16.978c.055 1.72.242 2.775.886 3.56a4 4 0 0 0 .554.554C9.57 22 11.212 22 14.5 22s4.931 0 6.038-.908q.304-.25.554-.554C22 19.43 22 17.788 22 14.5c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554c-.782-.641-1.831-.83-3.538-.885m-9.978 9.955c-1.72-.055-2.775-.242-3.56-.886a4 4 0 0 1-.554-.554C2 14.43 2 12.788 2 9.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 2 6.212 2 9.5 2c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554c.644.785.831 1.84.886 3.56l.022.001m-9.978 9.955L17 7.023"></svg:path><svg:path d="m13 19l.833-2M18 19l-.833-2m-3.334 0l1.667-4l1.667 4m-3.334 0h3.334"></svg:path></svg:g>`,
})
export class HugeiconsTranslationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTransmissionIcon],svg[hugeicons-transmission-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.6 22A1.6 1.6 0 0 0 4 20.4M8.8 22A4.8 4.8 0 0 0 4 17.2m8 4.8a8 8 0 0 0-8-8"></svg:path><svg:path d="M5 11V9.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C7.57 2 9.212 2 12.5 2c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C20 4.57 20 6.212 20 9.5V17c0 .93 0 1.394-.077 1.78a4 4 0 0 1-3.143 3.143C16.394 22 15.93 22 15 22"></svg:path></svg:g>`,
})
export class HugeiconsTransmissionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTransparencyIcon],svg[hugeicons-transparency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0"></svg:path><svg:path d="M8.026 15.607a7 7 0 0 1 7.821-7.556m3.15 1.202a7 7 0 1 1-9.744 9.744M6.5 2.5l9 9m-13-5l9 9"></svg:path></svg:g>`,
})
export class HugeiconsTransparencyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrapezoidLineHorizontalIcon],svg[hugeicons-trapezoid-line-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12c0-2.665 0-3.998.627-4.945q.103-.155.22-.296c.714-.86 1.844-1.048 4.103-1.424l2.202-.368c3.186-.531 4.78-.797 5.814.25S19 8.145 19 11.904v.192c0 3.76 0 5.639-1.034 6.687c-1.035 1.047-2.628.781-5.815.25l-2.201-.367c-2.26-.377-3.389-.566-4.103-1.425a3 3 0 0 1-.22-.296C5 15.998 5 14.665 5 12m17 0H2" color="currentColor"></svg:path>`,
})
export class HugeiconsTrapezoidLineHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrapezoidLineVerticalIcon],svg[hugeicons-trapezoid-line-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5c2.665 0 3.998 0 4.945.627q.155.103.296.22c.86.714 1.048 1.844 1.425 4.103l.367 2.202c.531 3.186.797 4.78-.25 5.814S15.854 19 12.095 19h-.192c-3.76 0-5.639 0-6.687-1.034c-1.047-1.035-.781-2.628-.25-5.815l.368-2.201c.376-2.26.566-3.39 1.425-4.103q.141-.117.296-.22C8.002 5 9.335 5 12 5m0 17V2" color="currentColor"></svg:path>`,
})
export class HugeiconsTrapezoidLineVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTravelBagIcon],svg[hugeicons-travel-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 6.5H9c-2.828 0-4.243 0-5.121.879C3 8.257 3 9.672 3 12.5V15c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15v-2.5c0-2.828 0-4.243-.879-5.121C19.243 6.5 17.828 6.5 15 6.5m-6 0V6c0-1.414 0-2.121.44-2.56C9.878 3 10.585 3 12 3s2.121 0 2.56.44C15 3.878 15 4.585 15 6v.5"></svg:path><svg:path d="M21 10.5a4 4 0 0 1-4-4M9.25 12l-.75.75l.75.75l.75-.75zM3 17a4 4 0 0 1 4 4M3 10.5a4 4 0 0 0 4-4M21 17a4 4 0 0 0-4 4m-3-4.2l-1.5-.3l1.2-1.2zm.5-5.8v.01"></svg:path></svg:g>`,
})
export class HugeiconsTravelBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTreadmill01Icon],svg[hugeicons-treadmill-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.191 21H2.931c-.578 0-.895-.479-.928-.985c-.032-.493.204-1.012.73-1.14l15.215-3.769C22.205 14.068 23.364 21 20.191 21M19 18h.009M22 2c-.3.902-.483 2.149-1.167 2.833c-.334.334-.8.49-1.73.8L15 7m0 9l5-10.5M6 21l-1 1m13-1v1" color="currentColor"></svg:path>`,
})
export class HugeiconsTreadmill01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTreadmill02Icon],svg[hugeicons-treadmill-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.868 19H3.32C2.59 19 2 18.397 2 17.653c0-.556.334-1.055.841-1.256L15.6 11.33c3.08-1.222 6.4 1.098 6.4 4.47c0 1.769-1.402 3.2-3.132 3.2M18 15h.009M6 15L4 9m1 0H2"></svg:path><svg:path d="m17 11l2-6c1.592 0 2.606-.423 3-2M6 19l-1 2m13-2v2"></svg:path></svg:g>`,
})
export class HugeiconsTreadmill02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTreatmentIcon],svg[hugeicons-treatment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 7.839c0-2.092 1.896-4.16 3.226-5.353a1.91 1.91 0 0 1 2.548 0C15.104 3.68 17 5.746 17 7.84C17 9.89 15.296 12 12.5 12S8 9.89 8 7.839M4 14h2.395c.294 0 .584.066.847.194l2.042.988c.263.127.553.193.848.193h1.042c1.008 0 1.826.791 1.826 1.767c0 .04-.027.074-.066.085l-2.541.703a1.95 1.95 0 0 1-1.368-.124L6.842 16.75"></svg:path><svg:path d="m13 16.5l4.593-1.411a1.985 1.985 0 0 1 2.204.753c.369.51.219 1.242-.319 1.552l-7.515 4.337a2 2 0 0 1-1.568.187L4 20.02"></svg:path></svg:g>`,
})
export class HugeiconsTreatmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTree01Icon],svg[hugeicons-tree-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22V9m-3 8.419A8.003 8.003 0 0 1 12 2a8 8 0 0 1 3 15.419M12 15l2.5-2.5M12 13l-2.5-2.5M10 22h4" color="currentColor"></svg:path>`,
})
export class HugeiconsTree01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTree02Icon],svg[hugeicons-tree-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22V9m3 8h1a5 5 0 0 0 .999-9.9C16.999 4.338 15 2 12 2S7.001 4.338 7.001 7.1A5.002 5.002 0 0 0 8 17h1m3-2l2.5-2.5M12 13l-2.5-2.5M10 22h4" color="currentColor"></svg:path>`,
})
export class HugeiconsTree02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTree03Icon],svg[hugeicons-tree-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22V9m3 8.197A6 6 0 0 0 18 12V8A6 6 0 0 0 6 8v4c0 2.22 1.207 4.16 3 5.197M12 15l2.5-2.5M12 13l-2.5-2.5M10 22h4" color="currentColor"></svg:path>`,
})
export class HugeiconsTree03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTree04Icon],svg[hugeicons-tree-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22V9m3 8.197A6 6 0 0 0 18 12a5.98 5.98 0 0 0-1.696-4.18a4.5 4.5 0 1 0-8.607 0A5.98 5.98 0 0 0 6 12c0 2.22 1.207 4.16 3 5.197M12 15l2.5-2.5M12 13l-2.5-2.5M10 22h4" color="currentColor"></svg:path>`,
})
export class HugeiconsTree04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTree05Icon],svg[hugeicons-tree-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22V9m3 8.484c1.676-.715 3-2.28 3-5.465c0-4.418-3-10-6-10s-6 5.582-6 10c0 3.185 1.324 4.75 3 5.465M12 15l2.5-2.5M12 13l-2.5-2.5M10 22h4" color="currentColor"></svg:path>`,
})
export class HugeiconsTree05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTree06Icon],svg[hugeicons-tree-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22V9m-2.998 9.002c-1.657 0-3-1.379-3-3.035a3.5 3.5 0 0 1-.74-6.74a3 3 0 0 1 3.844-4.016a3.001 3.001 0 0 1 5.79.001a3 3 0 0 1 3.844 4.016a3.501 3.501 0 0 1-.738 6.739c0 1.656-1.343 3.035-3 3.035M12 15l2.5-2.5M12 13l-2.5-2.5M10 22h4" color="currentColor"></svg:path>`,
})
export class HugeiconsTree06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTree07Icon],svg[hugeicons-tree-07-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22v-4M8.592 7.434C9.564 7.791 10.737 8 12 8s2.436-.209 3.408-.566c.636-.234.772-1 .347-1.518L12.89 2.417a1.155 1.155 0 0 0-1.778 0L8.245 5.916c-.425.518-.29 1.284.347 1.518"></svg:path><svg:path d="m14.79 7.623l2.45 2.822c.434.498.315 1.261-.289 1.545C15.601 12.623 14.05 13 12 13s-3.602-.377-4.951-1.01c-.604-.284-.723-1.047-.29-1.545L9.21 7.623"></svg:path><svg:path d="m7.644 12.342l-2.381 2.673c-.418.469-.334 1.192.224 1.489c1.751.932 4.026 1.495 6.513 1.495s4.762-.563 6.513-1.495c.558-.297.642-1.02.224-1.489l-2.381-2.673M10 22h4"></svg:path></svg:g>`,
})
export class HugeiconsTree07Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrelloIcon],svg[hugeicons-trello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M6 8c0-.943 0-1.414.293-1.707S7.057 6 8 6h.5c.943 0 1.414 0 1.707.293S10.5 7.057 10.5 8v7c0 .943 0 1.414-.293 1.707S9.443 17 8.5 17H8c-.943 0-1.414 0-1.707-.293S6 15.943 6 15zm7.5 0c0-.943 0-1.414.293-1.707S14.557 6 15.5 6h.5c.943 0 1.414 0 1.707.293S18 7.057 18 8v2c0 .943 0 1.414-.293 1.707S16.943 12 16 12h-.5c-.943 0-1.414 0-1.707-.293S13.5 10.943 13.5 10z"></svg:path></svg:g>`,
})
export class HugeiconsTrelloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTriangleIcon],svg[hugeicons-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.593 9.225c2.246-3.602 3.368-5.403 4.84-5.945a4.53 4.53 0 0 1 3.134 0c1.472.542 2.594 2.343 4.84 5.945c2.527 4.053 3.79 6.08 3.568 7.753a4.66 4.66 0 0 1-1.599 2.938C19.1 21 16.733 21 12 21s-7.1 0-8.376-1.084a4.66 4.66 0 0 1-1.599-2.938c-.222-1.673 1.041-3.7 3.568-7.753" color="currentColor"></svg:path>`,
})
export class HugeiconsTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTriangle01Icon],svg[hugeicons-triangle-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.898 6.733C9.712 3.578 10.619 2 12 2c1.38 0 2.288 1.578 4.102 4.733l3.757 6.532c1.726 3 2.589 4.5 1.908 5.618C21.087 20 19.31 20 15.757 20H8.243c-3.553 0-5.33 0-6.01-1.117s.182-2.618 1.908-5.618zM12 20v2m8-13l-2 1M4 9l2 1"></svg:path><svg:path d="M4 14.409c1.89.642 3.252 2.468 3.252 4.62q0 .5-.094.971m9.684 0a5 5 0 0 1-.094-.97c0-2.153 1.362-3.979 3.252-4.621M15.281 6A4.67 4.67 0 0 1 12 7.35A4.67 4.67 0 0 1 8.719 6"></svg:path></svg:g>`,
})
export class HugeiconsTriangle01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTriangle02Icon],svg[hugeicons-triangle-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.496 12.632l.363.633c1.726 3 2.589 4.5 1.908 5.618C21.087 20 19.31 20 15.757 20H15M4.505 12.632l-.364.633c-1.726 3-2.589 4.5-1.908 5.618C2.913 20 4.69 20 8.243 20H9M7.533 7.366l.365-.633C9.712 3.578 10.619 2 12 2c1.38 0 2.288 1.578 4.102 4.733l.365.633M12 18v4m7.66-13l-3.464 2M4.34 9l3.464 2" color="currentColor"></svg:path>`,
})
export class HugeiconsTriangle02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTriangle03Icon],svg[hugeicons-triangle-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 17.336V7.104c0-1.882 0-2.824.569-3.058c.568-.234 1.237.432 2.576 1.762l12.131 12.065c1.339 1.33 2.008 1.996 1.772 2.562c-.235.565-1.181.565-3.074.565H6.684c-1.737 0-2.605 0-3.144-.537c-.54-.536-.54-1.4-.54-3.127m17.916-4.499L17.48 9.42m3.436 3.417c.162-.16.042-1.484.03-2.324m-.03 2.324c-.162.16-.917.052-2.308-.019m-7.479-9.735L14.565 6.5m-3.436-3.417c-.162.16-.042 1.484-.03 2.324m.03-2.324c.162-.16.917-.052 2.308.019m7.473-.018L17.474 6.5m3.436-3.416c-.161-.162-1.493-.042-2.337-.03m2.337.03c.16.16.052.912-.019 2.295"></svg:path><svg:ellipse cx="16.088" cy="8.015" rx="1.383" ry="1.375"></svg:ellipse></svg:g>`,
})
export class HugeiconsTriangle03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrolley01Icon],svg[hugeicons-trolley-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 2h1.301c1.186 0 1.779 0 2.18.371c.402.372.48.992.637 2.233l1.128 8.925c.209 1.654.313 2.48.849 2.976c.536.495 1.326.495 2.907.495H21"></svg:path><svg:circle cx="10.5" cy="19.5" r="1.5"></svg:circle><svg:circle cx="17.5" cy="19.5" r="1.5"></svg:circle><svg:path d="M20 14h-6c-.943 0-1.414 0-1.707-.366S12 12.678 12 11.5s0-1.768.293-2.134S13.057 9 14 9h6c.943 0 1.414 0 1.707.366S22 10.322 22 11.5s0 1.768-.293 2.134S20.943 14 20 14m-2-5h-6c-.943 0-1.414 0-1.707-.366S10 7.679 10 6.5s0-1.768.293-2.134S11.057 4 12 4h6c.943 0 1.414 0 1.707.366S20 5.321 20 6.5s0 1.768-.293 2.134S18.943 9 18 9"></svg:path></svg:g>`,
})
export class HugeiconsTrolley01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrolley02Icon],svg[hugeicons-trolley-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 2h1.301c1.186 0 1.779 0 2.18.371c.402.372.48.992.637 2.233l1.128 8.925c.209 1.654.313 2.48.849 2.976c.536.495 1.326.495 2.907.495H22"></svg:path><svg:circle cx="11.5" cy="19.5" r="1.5"></svg:circle><svg:circle cx="18.5" cy="19.5" r="1.5"></svg:circle><svg:path d="M18 14h-2c-1.886 0-2.828 0-3.414-.586S12 11.886 12 10V8c0-1.886 0-2.828.586-3.414S14.114 4 16 4h2c1.886 0 2.828 0 3.414.586S22 6.114 22 8v2c0 1.886 0 2.828-.586 3.414S19.886 14 18 14m-1.5-7h1"></svg:path></svg:g>`,
})
export class HugeiconsTrolley02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTropicalStormIcon],svg[hugeicons-tropical-storm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m17.447 7.857l-1.168-1.441l3.932-2.569C7.27 1.803 5.343 9.75 5.264 10.107l-.008.034l-.012.047a6.5 6.5 0 0 0-.071 3.117a6.8 6.8 0 0 0 1.384 2.836l1.167 1.44l-3.935 2.572c12.94 2.056 14.871-5.905 14.95-6.262l.008-.034l.012-.047a6.5 6.5 0 0 0 .071-3.117a6.8 6.8 0 0 0-1.383-2.836"></svg:path><svg:circle cx="12" cy="12" r="3"></svg:circle></svg:g>`,
})
export class HugeiconsTropicalStormIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTropicalStormTracksIcon],svg[hugeicons-tropical-storm-tracks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m12.156 7.231l-.868-1.071l2.924-1.91C4.589 2.73 3.155 8.64 3.097 8.904l-.006.026l-.009.035a4.86 4.86 0 0 0-.053 2.318c.17.768.522 1.491 1.03 2.109l.867 1.071L2 16.375c9.623 1.529 11.059-4.391 11.118-4.656l.005-.026l.01-.035a4.86 4.86 0 0 0 .052-2.318a5.04 5.04 0 0 0-1.029-2.109"></svg:path><svg:circle cx="8.106" cy="10.312" r="2.231"></svg:circle><svg:path d="M19.5 7v5.5A7.5 7.5 0 0 1 12 20m7.5-13c.7 0 2.009 1.994 2.5 2.5M19.5 7c-.7 0-2.009 1.994-2.5 2.5"></svg:path></svg:g>`,
})
export class HugeiconsTropicalStormTracksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTropicalStormTracks01Icon],svg[hugeicons-tropical-storm-tracks-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m18.165 15.348l.463-1.158l1.384 1.328c.852.817 1.278 1.226 1.602 1.04s.194-.739-.069-1.846a20.6 20.6 0 0 0-1.82-4.848a8.9 8.9 0 0 0-4.377-4.03L14.19 5.37l1.273-1.327c.838-.873 1.257-1.31 1.072-1.634s-.755-.192-1.898.073c-2.007.465-4.267 1.267-6.066 2.65A8.34 8.34 0 0 0 5.833 8.65L5.37 9.808l-1.325-1.27C3.171 7.7 2.734 7.28 2.41 7.464c-.325.185-.192.757.073 1.9c.474 2.043 1.296 4.347 2.725 6.161a8.3 8.3 0 0 0 3.443 2.64l1.158.464l-1.328 1.384c-.816.85-1.225 1.276-1.039 1.6s.738.194 1.844-.068a20.6 20.6 0 0 0 4.805-1.794a8.92 8.92 0 0 0 4.074-4.403"></svg:path><svg:circle cx="12" cy="12" r="3"></svg:circle></svg:g>`,
})
export class HugeiconsTropicalStormTracks01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTropicalStormTracks02Icon],svg[hugeicons-tropical-storm-tracks-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m12.156 7.231l-.868-1.071l2.924-1.91C4.589 2.73 3.155 8.64 3.097 8.904l-.006.026l-.009.035a4.86 4.86 0 0 0-.053 2.318c.17.768.522 1.491 1.03 2.109l.867 1.071L2 16.375c9.623 1.529 11.059-4.391 11.118-4.656l.005-.026l.01-.035a4.86 4.86 0 0 0 .052-2.318a5.04 5.04 0 0 0-1.029-2.109"></svg:path><svg:circle cx="8.106" cy="10.312" r="2.231"></svg:circle><svg:path d="M19.5 7v5.5A7.5 7.5 0 0 1 12 20m7.5-13c.7 0 2.009 1.994 2.5 2.5M19.5 7c-.7 0-2.009 1.994-2.5 2.5"></svg:path></svg:g>`,
})
export class HugeiconsTropicalStormTracks02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTruckIcon],svg[hugeicons-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="17" cy="18" r="2"></svg:circle><svg:circle cx="7" cy="18" r="2"></svg:circle><svg:path d="M11 17h4M13.5 7h.943c1.31 0 1.966 0 2.521.315c.556.314.926.895 1.667 2.056c.52.814 1.064 1.406 1.831 1.931c.772.53 1.14.789 1.343 1.204c.195.398.195.869.195 1.811c0 1.243 0 1.864-.349 2.259l-.046.049c-.367.375-.946.375-2.102.375H19"></svg:path><svg:path d="m13 7l.994 2.486c.487 1.217.73 1.826 1.239 2.17c.508.344 1.163.344 2.475.344H21M4.87 17c-1.353 0-2.03 0-2.45-.44C2 16.122 2 15.415 2 14V7c0-1.414 0-2.121.42-2.56S3.517 4 4.87 4h5.26c1.353 0 2.03 0 2.45.44C13 4.878 13 5.585 13 7v10H8.696"></svg:path></svg:g>`,
})
export class HugeiconsTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTruckDeliveryIcon],svg[hugeicons-truck-delivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="17" cy="18" r="2"></svg:circle><svg:circle cx="7" cy="18" r="2"></svg:circle><svg:path d="M5 17.972c-1.097-.054-1.78-.217-2.268-.704s-.65-1.171-.704-2.268M9 18h6m4-.028c1.097-.054 1.78-.217 2.268-.704C22 16.535 22 15.357 22 13v-2h-4.7c-.745 0-1.117 0-1.418-.098a2 2 0 0 1-1.284-1.284C14.5 9.317 14.5 8.945 14.5 8.2c0-1.117 0-1.675-.147-2.127a3 3 0 0 0-1.926-1.926C11.975 4 11.417 4 10.3 4H2m0 4h6m-6 3h4"></svg:path><svg:path d="M14.5 6h1.821c1.456 0 2.183 0 2.775.354c.593.353.938.994 1.628 2.276L22 11"></svg:path></svg:g>`,
})
export class HugeiconsTruckDeliveryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTruckMonsterIcon],svg[hugeicons-truck-monster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m21 14l-.242-2.422c-.125-1.252-.188-1.877-.557-2.339s-.966-.66-2.158-1.058c-.37-.123-.62-.244-.856-.556c-.755-.998-1.843-2.939-2.66-3.367C14.038 4 13.458 4 12.298 4H11c-.943 0-1.414 0-1.707.293S9 5.057 9 6v7.5m0-4H3V14"></svg:path><svg:path d="M17.5 8H14c-.943 0-1.414 0-1.707-.293S12 6.943 12 6V4M9 5H8m4 5.5h1m.5 6.5h-3m-1-3h5m-10 0h-1c-.466 0-.699 0-.883.076C2.002 14.331 2 14.93 2 15.5s.002 1.17.617 1.424c.184.076.417.076.883.076m16-3h1c.466 0 .699 0 .883.076c.615.255.617.854.617 1.424s-.002 1.17-.617 1.424c-.184.076-.417.076-.883.076"></svg:path><svg:path d="M10.5 16.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M17 20a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path></svg:g>`,
})
export class HugeiconsTruckMonsterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTruckReturnIcon],svg[hugeicons-truck-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4M7 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="M19 11h3v2c0 2.357 0 3.535-.732 4.268c-.487.487-1.171.65-2.268.704m-14 0c-1.097-.054-1.78-.217-2.268-.704C2 16.535 2 15.357 2 13V9c0-2.357 0-3.536.732-4.268S4.643 4 7 4h3.3c1.117 0 1.675 0 2.127.147a3 3 0 0 1 1.926 1.926c.147.452.147 1.01.147 2.127c0 1.22 0 1.831-.334 2.244q-.099.122-.222.222C13.531 11 12.921 11 11.7 11H8m7 7H9m5.5-12h1.821c1.456 0 2.183 0 2.775.354c.593.353.938.994 1.628 2.276L22 11"></svg:path><svg:path d="M10 13s-.672-.556-1.263-1.084C8.32 11.58 8 11.293 8 11.005c0-.255.25-.492.656-.864C9.232 9.662 10 9 10 9"></svg:path></svg:g>`,
})
export class HugeiconsTruckReturnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrulliIcon],svg[hugeicons-trulli-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m3.672 10.547l3.808-4.7C9.557 3.282 10.596 2 12 2s2.443 1.282 4.52 3.847l3.808 4.7c.513.633.769.95.638 1.201c-.13.252-.55.252-1.391.252H4.425c-.84 0-1.26 0-1.391-.252c-.13-.252.125-.568.638-1.2"></svg:path><svg:path d="M6 8.508c3.328.899 4.821-3.277 7.58-.598C15 9.29 16.415 9.205 18 8.508M10 22v-4a2 2 0 0 1 4 0v4"></svg:path><svg:path d="M19.5 12v8c0 .943 0 1.414-.293 1.707S18.443 22 17.5 22h-11c-.943 0-1.414 0-1.707-.293S4.5 20.943 4.5 20v-8"></svg:path></svg:g>`,
})
export class HugeiconsTrulliIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTsunamiIcon],svg[hugeicons-tsunami-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.066 12.002s0 3 2.934 4m12 5.373a4.92 4.92 0 0 1-4.74 0a2.99 2.99 0 0 0-2.89 0s-.021 0-.021.019c-1.446.81-3.295.81-4.719 0c-.892-.498-2.019-.498-2.89 0m0-.019a4.92 4.92 0 0 1-4.74 0m9-14.373a9.5 9.5 0 0 0 9.5 9.5H22"></svg:path><svg:path d="M6.888 6.927c.372.216 1.092.756 2.292.54c1.44-.444 2.62-.816 3.54-.264c.9.54 1.5 1.02 1.86.78c.178.035.476-.647.414-1.62c-.042-.669-.273-1.475-.786-2.28c-.3-.42-.493-.568-.528-.6c-1.944-1.826-5.081-2.125-7.86 0c-3.12 2.52-3.54 5.7-3.72 7.26c-.3 3 .18 6.42.66 8.28"></svg:path></svg:g>`,
})
export class HugeiconsTsunamiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTulipIcon],svg[hugeicons-tulip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a6 6 0 0 1 6-6m-6 6a6 6 0 0 0-6-6m6-2v9m0-9a5 5 0 0 0 5-5V4a5 5 0 0 0-5 5m2.5-4.5C14 3 12 2 12 2s-2 1-2.5 2.5M12 13a5 5 0 0 1-5-5V4a4.98 4.98 0 0 1 3.5 1.43" color="currentColor"></svg:path>`,
})
export class HugeiconsTulipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTumblrIcon],svg[hugeicons-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.9 11.018h-.89c-.831 0-1.01-.168-1.01-1V8.266c0-.655-.012-.654.653-.975c1.706-.823 3.207-2.408 3.609-4.298c.109-.513.163-.77.302-.881c.14-.112.364-.112.813-.112h1.375c.477 0 .715 0 .863.146c.148.147.148.383.148.854v3.565c0 .831.179 1 1.01 1h1.86c.832 0 1.011.168 1.011 1v1.453c0 .832-.18 1-1.011 1h-1.86c-.832 0-1.01.169-1.01 1v4.242c0 1.76 1.56 2.34 2.932 1.733c.477-.212.484-.198.63.246l.575 1.75c.19.575.137.79-.394 1.095c-3.932 2.26-8.595.285-8.595-5.316v-3.75c0-.831-.179-1-1.01-1" color="currentColor"></svg:path>`,
})
export class HugeiconsTumblrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTurtleNeckIcon],svg[hugeicons-turtle-neck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m6.962 13.06l-2.394 7.16c-.139.417-.209.625-.38.72c-.364.2-1.859-.132-2.117-.515c-.109-.162-.076-.377-.012-.807L3.616 9.192c.265-1.775.683-2.325 2.319-3.067L9 4.517V3.01c0-.832.175-1.005 1.008-1.005L13.992 2C14.825 2 15 2.173 15 3.005v1.507l3.065 1.613c1.636.742 2.054 1.292 2.32 3.067l1.556 10.426c.064.43.097.646-.012.807c-.258.383-1.753.715-2.116.515c-.172-.095-.242-.303-.381-.72l-2.394-7.16"></svg:path><svg:path d="M6.5 10c.166.997.376 1.996.46 3.003c.19 2.312.04 4.68.04 6.997c0 1.655.345 2 2 2h6c1.655 0 2-.345 2-2c0-2.317-.15-4.685.04-6.997c.084-1.007.294-2.006.46-3.003M9 5a5 5 0 0 0 6 0"></svg:path></svg:g>`,
})
export class HugeiconsTurtleNeckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTv01Icon],svg[hugeicons-tv-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14M9 3l3 3l4-4" color="currentColor"></svg:path>`,
})
export class HugeiconsTv01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTv02Icon],svg[hugeicons-tv-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 3h-4C6.229 3 4.343 3 3.172 4.172S2 7.229 2 11s0 5.657 1.172 6.828S6.229 19 10 19h4c3.771 0 5.657 0 6.828-1.172S22 14.771 22 11s0-5.657-1.172-6.828S17.771 3 14 3m4 16l1 2M6 19l-1 2" color="currentColor"></svg:path>`,
})
export class HugeiconsTv02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTvFixIcon],svg[hugeicons-tv-fix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14"></svg:path><svg:path d="m13.333 12.667l-2.666 2.666m2.666-2.667c.737.737 1.93.737 2.667 0m-2.667 0a1.886 1.886 0 0 1 0-2.666m-2.666 5.333c.736.737.736 1.93 0 2.667m0-2.667a1.886 1.886 0 0 0-2.667 0M9 3l3 3l4-4"></svg:path></svg:g>`,
})
export class HugeiconsTvFixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTvIssueIcon],svg[hugeicons-tv-issue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m10 4h.009M12 15v-4M9 3l3 3l4-4" color="currentColor"></svg:path>`,
})
export class HugeiconsTvIssueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTvSmartIcon],svg[hugeicons-tv-smart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 3h-4C6.229 3 4.343 3 3.172 4.172S2 7.229 2 11s0 5.657 1.172 6.828S6.229 19 10 19h4c3.771 0 5.657 0 6.828-1.172S22 14.771 22 11s0-5.657-1.172-6.828S17.771 3 14 3"></svg:path><svg:path d="M16.9 15.5a1.6 1.6 0 0 1 1.6-1.6m-4.8 1.6a4.8 4.8 0 0 1 4.8-4.8m-8 4.8a8 8 0 0 1 8-8M18 19l1 2M6 19l-1 2"></svg:path></svg:g>`,
})
export class HugeiconsTvSmartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTwinTowerIcon],svg[hugeicons-twin-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m9 19l3-4l3 4m-6-5h6M2 22v-8c0-.943 0-1.414.293-1.707S3.057 12 4 12h3c.943 0 1.414 0 1.707.293S9 13.057 9 14v8M3 12v-2c0-.943 0-1.414.293-1.707S4.057 8 5 8h1c.943 0 1.414 0 1.707.293S8 9.057 8 10v2"></svg:path><svg:path d="M4 8V5.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C4.801 4 5.034 4 5.5 4s.699 0 .883.076a1 1 0 0 1 .54.541C7 4.801 7 5.034 7 5.5V8m8 14v-8c0-.943 0-1.414.293-1.707S16.057 12 17 12h3c.943 0 1.414 0 1.707.293S22 13.057 22 14v8M2 22h20M5.5 4V2M16 12v-2c0-.943 0-1.414.293-1.707S17.057 8 18 8h1c.943 0 1.414 0 1.707.293S21 9.057 21 10v2"></svg:path><svg:path d="M17 8V5.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C17.801 4 18.034 4 18.5 4s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883V8m-1.5-4V2m-13 20v-2m13 2v-2"></svg:path></svg:g>`,
})
export class HugeiconsTwinTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTwitchIcon],svg[hugeicons-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7v4m-4-4v4m4-8H8c-1.886 0-2.828 0-3.414.584C4 4.167 4 5.106 4 6.984v6.576c0 .37 0 .555.025.71a2 2 0 0 0 1.662 1.657c.156.024.341.024.713.024c.093 0 .14 0 .178.006a.5.5 0 0 1 .416.414c.006.039.006.085.006.178v1.543c0 1.182 0 1.773.335 1.89c.334.117.705-.344 1.446-1.268l1.919-2.39c.147-.183.221-.275.324-.324c.102-.049.22-.049.457-.049h3.862c.818 0 1.226 0 1.594-.152c.367-.151.656-.44 1.235-1.015l.656-.655c.579-.575.867-.863 1.02-1.23c.152-.366.152-.773.152-1.587V6.985c0-1.879 0-2.818-.586-3.401C18.828 3 17.886 3 16 3" color="currentColor"></svg:path>`,
})
export class HugeiconsTwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTwitterIcon],svg[hugeicons-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 18.5C3.765 19.521 5.814 20 8 20c6.48 0 11.762-5.137 11.992-11.562L22 4.5l-3.354.5A4 4 0 0 0 16 4c-2.572 0-4.5 2.517-3.88 4.98c-3.552.23-6.771-1.959-8.633-4.875c-1.236 4.197-.09 9.251 3.013 12.366c0 1.176-3 1.878-4.5 2.029" color="currentColor"></svg:path>`,
})
export class HugeiconsTwitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTwitterSquareIcon],svg[hugeicons-twitter-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.4 7C13.075 7 12 8.12 12 9.5q0 .318.073.613a6 6 0 0 1-.373.012c-2.02 0-3.796-1.408-4.808-3.06A7.8 7.8 0 0 0 6.6 9.188c0 2.067.802 4.25 2.1 5.607c0 .735-1.8 1.108-2.7 1.203A6.95 6.95 0 0 0 9.6 17c3.889 0 7.057-3.21 7.195-7.226L18 7.313l-2.012.312A2.34 2.34 0 0 0 14.4 7"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsTwitterSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTwoCircleIcon],svg[hugeicons-two-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 10a3 3 0 1 1 6 0c0 2.079-2.88 3.917-4.65 4.85C9.547 15.275 9 16.093 9 17h6"></svg:path><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class HugeiconsTwoCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTwoFactorAccessIcon],svg[hugeicons-two-factor-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path stroke="currentColor" d="M9.5 9.5h-2c-2.346 0-3.518 0-4.326.62a3 3 0 0 0-.554.554C2 11.482 2 12.654 2 15s0 3.518.62 4.326a3 3 0 0 0 .554.554c.808.62 1.98.62 4.326.62h2c2.346 0 3.518 0 4.326-.62a3 3 0 0 0 .554-.554c.62-.808.62-1.98.62-4.326s0-3.518-.62-4.326a3 3 0 0 0-.554-.554c-.808-.62-1.98-.62-4.326-.62m2.25 0V6.75a3.25 3.25 0 0 0-6.5 0V9.5"></svg:path><svg:path fill="currentColor" d="m21.38 19.326l.595.457zm-.554.554l.457.595zm0-9.76l.457-.595zm.554.554l.595-.457zM18 9.5a.75.75 0 0 0 1.5 0zm-.999-.75a.75.75 0 1 0-.002 1.5zm-.002 11a.75.75 0 1 0 .002 1.5zM13.653 3.2a.75.75 0 1 0 .694 1.33zM21.25 15c0 1.19-.001 2.02-.073 2.656c-.07.62-.199.962-.392 1.214l1.19.913c.427-.556.608-1.205.693-1.96c.083-.738.082-1.668.082-2.823zm-.465 3.87a2.3 2.3 0 0 1-.415.415l.913 1.19q.392-.301.692-.692zM22.75 15c0-1.155.001-2.085-.082-2.824c-.085-.754-.266-1.403-.693-1.959l-1.19.913c.193.252.322.594.392 1.214c.072.636.073 1.466.073 2.656zm-2.38-4.285q.235.181.415.415l1.19-.913q-.301-.392-.692-.692zM19.5 9.5V6.75H18V9.5zm0-2.75a4 4 0 0 0-4-4v1.5a2.5 2.5 0 0 1 2.5 2.5zm-2.501 3.5c1.018.002 1.736.014 2.289.09c.538.072.848.196 1.082.375l.913-1.19c-.515-.395-1.11-.58-1.794-.672c-.669-.09-1.49-.101-2.488-.103zm.002 11c.999-.002 1.82-.012 2.488-.103c.685-.092 1.279-.277 1.794-.672l-.913-1.19c-.234.179-.544.303-1.082.376c-.553.075-1.271.087-2.29.089zM14.347 4.53c.344-.18.736-.281 1.153-.281v-1.5c-.665 0-1.293.163-1.847.451z"></svg:path><svg:path stroke="currentColor" d="M6 15s1 .5 1.5 2c0 0 1.5-3 3.5-4"></svg:path></svg:g>`,
})
export class HugeiconsTwoFactorAccessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTwoFinger01Icon],svg[hugeicons-two-finger-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.091 11v1m0-1c0-1.105-.868-2-1.94-2c-.535 0-.969.448-.969 1v1v-7.5c0-.828-.652-1.5-1.455-1.5s-1.454.672-1.454 1.5V5m5.818 6c0-.524.456-.922.956-.836l.332.057c.936.161 1.621.995 1.621 1.973v1.473c0 2.173 0 3.26-.321 4.125c-.187.502-.678 1.142-1.07 1.604c-.34.4-.549.908-.549 1.44V22M11.273 5c0-.828-.652-1.5-1.455-1.5S8.364 4.172 8.364 5v8.462l-1.572-1.625a1.6 1.6 0 0 0-2.434.14a1.74 1.74 0 0 0-.03 2.072l3.49 4.598c.668.88 1.03 2.236 1.03 3.353m2.425-17v5" color="currentColor"></svg:path>`,
})
export class HugeiconsTwoFinger01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTwoFinger02Icon],svg[hugeicons-two-finger-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.263 22v-.864c0-.464-.013-.945-.238-1.351c-.244-.442-.63-.814-1.137-1.466q-.53-.679-1.055-1.361c-.477-.623-.985-1.4-1.298-2.068c-.343-.734-.405-1.622-.015-2.333c.186-.338.49-.773.985-1.341l2.238-2.314m0 4.539V8.902m0 0L7.704 5.2c0-.963.69-1.745 1.54-1.745s1.465.627 1.465 1.591l.1 4.953l-.1-6.254c0-.964.689-1.745 1.539-1.745s1.539.781 1.539 1.745l-.039 3.703l.012 3.555V9.998q0-.092-.008-.185m0 0l-.007-.051m.007.051c.006.03-.011-.08-.007-.051m0 0c0-1.194 2.055-.995 2.767.255M16.75 12v-1.146a1.8 1.8 0 0 0-.238-.838m0 0c2.439.046 3.074.838 3.236 2.065v3.247c-.003 1.726-.291 2.979-1.317 4.008c-.948 1.133-.725 1.767-.749 2.663" color="currentColor"></svg:path>`,
})
export class HugeiconsTwoFinger02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTwoFinger03Icon],svg[hugeicons-two-finger-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 6a1.5 1.5 0 0 0-3 0v7.962l-1.62-1.625a1.683 1.683 0 0 0-2.51.14a1.696 1.696 0 0 0-.033 2.072l3.004 4.018c.682.912 1.023 1.367 1.433 1.722c.626.54 1.376.917 2.183 1.094c.528.117 1.096.117 2.233.117c2.166 0 3.25 0 4.112-.332a5 5 0 0 0 2.867-2.876c.331-.865.331-1.952.331-4.125V11.5a2 2 0 0 0-2-2a1 1 0 0 0-1 1m-6-4.5V4a1.5 1.5 0 0 1 3 0v5m-3-3v4.5m3-1.5v1.5m0-1.5l.578-.289c.277-.139.588-.228.89-.156A2 2 0 0 1 17.5 10.5m0 0v1" color="currentColor"></svg:path>`,
})
export class HugeiconsTwoFinger03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTwoFinger04Icon],svg[hugeicons-two-finger-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.708 14.022V9.47m0 0l.039-3.362c0-.961.63-1.592 1.402-1.625c.94-.04 1.605.564 1.605 1.525l.022 4.458l-.022-6.396c0-.96.645-1.57 1.494-1.57c.85 0 1.5.562 1.5 1.523v2.942l.012 3.544v-1q0-.093-.009-.185m-6.043.146l-1.84 1.84c-.494.568-1.078 1.24-1.263 1.577c-.39.709-.448 1.334-.217 2.071c.26.664.496 1.14.972 1.761c.348.454.686 1.1 1.038 1.552c.507.65.784 1.062 1.09 1.462q.05.065.097.119c.434.503 1.041.83 1.625 1.149l.224.122c.763.248 1.83.46 3.572.348c1.28 0 2.747.136 3.717-.398q.063-.035.13-.062l.3-.125c1.414-.706 2.4-2.21 2.548-3.78c.068-.715.041-1.496.042-2.282v-3.238c-.162-1.223-.796-2.013-3.233-2.059m-2.759-.203l-.006-.051m.006.051c.006.029-.01-.08-.006-.051m0 0c0-1.19 2.053-.992 2.765.254m.237 1.98v-1.144a1.8 1.8 0 0 0-.237-.836" color="currentColor"></svg:path>`,
})
export class HugeiconsTwoFinger04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTwoFinger05Icon],svg[hugeicons-two-finger-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.811 5.71a1.5 1.5 0 1 0-2.954-.522L9.075 9.62l-.928 5.078l-2.258-2.361a1.692 1.692 0 0 0-2.55 2.212l3.013 4.018c.684.912 1.026 1.367 1.437 1.722a5 5 0 0 0 2.19 1.095c.53.116 1.1.116 2.24.116H14.7a5 5 0 0 0 4.88-3.912l1.312-5.884l.087-.493a1.5 1.5 0 1 0-2.955-.52M12.81 5.709l.347-1.97a1.5 1.5 0 0 1 2.955.522l-.868 4.924M12.81 5.709l-.781 4.432m3.215-.956l-.26 1.477m.26-1.477a1.5 1.5 0 0 1 2.954.52l-.174.986m0 0l-.086.492" color="currentColor"></svg:path>`,
})
export class HugeiconsTwoFinger05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTwoSquareIcon],svg[hugeicons-two-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M9 10a3 3 0 1 1 6 0c0 2.079-2.88 3.917-4.65 4.85C9.547 15.275 9 16.093 9 17h6"></svg:path></svg:g>`,
})
export class HugeiconsTwoSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTxt01Icon],svg[hugeicons-txt-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13v-.804c0-2.967 0-4.45.469-5.636c.754-1.905 2.348-3.407 4.37-4.118C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.264 2.497 2.353c.268.677.268 1.525.268 3.22V13"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2m-3.383 14L12 19m0 0l1.883 3M12 19l1.883-3M12 19l-1.882 3m6.618-6h1.883m0 0H20.5m-1.882 0v6M3.5 16h1.882m0 0h1.883m-1.883 0v6"></svg:path></svg:g>`,
})
export class HugeiconsTxt01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTxt02Icon],svg[hugeicons-txt-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.353 13L14 15.5m0 0l1.647 2.5M14 15.5l1.647-2.5M14 15.5L12.353 18m5.353-5h1.647m0 0H21m-1.647 0v5M7 13h1.647m0 0h1.647m-1.647 0v5M15 22h-4.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"></svg:path></svg:g>`,
})
export class HugeiconsTxt02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTypeCursorIcon],svg[hugeicons-type-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 16c-.93 0-1.395 0-1.776-.102a3 3 0 0 1-2.122-2.121C2 13.395 2 12.93 2 12s0-1.395.102-1.777a3 3 0 0 1 2.122-2.12C4.605 8 5.07 8 6 8m6 8h6c.93 0 1.395 0 1.776-.102a3 3 0 0 0 2.122-2.121C22 13.395 22 12.93 22 12s0-1.395-.102-1.777a3 3 0 0 0-2.122-2.12C19.396 8 18.93 8 18 8h-6M7 3h2m2 0H9m0 0v18m0 0H7m2 0h2" color="currentColor"></svg:path>`,
})
export class HugeiconsTypeCursorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTypescript01Icon],svg[hugeicons-typescript-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M18 12h-1.8a1.2 1.2 0 0 0-1.2 1.2v.6a1.2 1.2 0 0 0 1.2 1.2h.6a1.2 1.2 0 0 1 1.2 1.2v.6a1.2 1.2 0 0 1-1.2 1.2H15m-6.5-6h2m2 0h-2m0 0v6"></svg:path></svg:g>`,
})
export class HugeiconsTypescript01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTypescript02Icon],svg[hugeicons-typescript-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13v-.804c0-2.967 0-4.45.469-5.636c.754-1.905 2.348-3.407 4.37-4.118C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.264 2.497 2.353c.268.677.268 1.525.268 3.22V13"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2M11 16H8.5M6 16h2.5m0 0v6m9.5-6h-2.7a1.3 1.3 0 0 0-1.3 1.3v.4a1.3 1.3 0 0 0 1.3 1.3h1.4a1.3 1.3 0 0 1 1.3 1.3v.4a1.3 1.3 0 0 1-1.3 1.3H14"></svg:path></svg:g>`,
})
export class HugeiconsTypescript02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTypescript03Icon],svg[hugeicons-typescript-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 14h2m2 0h-2m0 0v5m7.5-5h-2a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-2"></svg:path><svg:path d="M15.5 22h-4.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805c-.848-1.066-.848-2.6-.848-5.67v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35c.268.676.268 1.523.268 3.216V11"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2"></svg:path></svg:g>`,
})
export class HugeiconsTypescript03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUberIcon],svg[hugeicons-uber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12"></svg:path><svg:path d="M9 10.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zM9 12H2"></svg:path></svg:g>`,
})
export class HugeiconsUberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUfoIcon],svg[hugeicons-ufo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 8c-2.989.556-5 1.595-5 2.785C2 12.56 6.477 14 12 14s10-1.44 10-3.215c0-1.19-2.011-2.23-5-2.785"></svg:path><svg:path d="M7.322 8.84c-.449-.625-.354-1.026-.164-1.827C7.685 4.79 9.62 3 12 3s4.315 1.79 4.842 4.013c.19.801.285 1.202-.164 1.827c-1.225 1.706-8.366 1.379-9.356 0M7 14l-2 7m12-7l2 7m-7-2h.009"></svg:path></svg:g>`,
})
export class HugeiconsUfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUfo01Icon],svg[hugeicons-ufo-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.048 11.586l1.048-1c.303-.29.455-.434.648-.51C5.936 10 6.15 10 6.579 10H17.42c.428 0 .643 0 .835.076c.193.076.345.22.648.51l1.048 1c.699.666 1.048 1 1.048 1.414s-.35.748-1.048 1.414l-1.049 1c-.302.29-.454.434-.647.51c-.192.076-.407.076-.835.076H6.58c-.429 0-.643 0-.835-.076c-.193-.076-.345-.22-.648-.51l-1.048-1C3.35 13.748 3 13.414 3 13s.35-.748 1.048-1.414M8.012 13H8m4.006 0h-.012M16 13h-.012M18 10a6 6 0 0 0-12 0m0 6l-.684 2.051c-.084.254-.127.38-.191.483a1 1 0 0 1-.606.437C4.4 19 4.267 19 4 19m14-3l.684 2.051c.084.254.127.38.191.483a1 1 0 0 0 .606.437C19.6 19 19.733 19 20 19" color="currentColor"></svg:path>`,
})
export class HugeiconsUfo01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUmbrellaIcon],svg[hugeicons-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 3.5V2m0 1.5c-.94 0-4.472 3.793-5.028 8.704M12 3.5c.94 0 4.472 3.793 5.028 8.704M12 3.5c4.937 0 9.055 3.436 10 8c-1.388 1.2-3.893.97-4.972.704M12 3.5c-4.937 0-9.055 3.436-10 8c1.388 1.2 3.893.97 4.972.704m0 0A10.3 10.3 0 0 0 12 13.5a10.3 10.3 0 0 0 5.028-1.296"></svg:path><svg:path d="M12 13.5v7a1.5 1.5 0 0 1-3 0V20"></svg:path></svg:g>`,
})
export class HugeiconsUmbrellaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUmbrellaDollarIcon],svg[hugeicons-umbrella-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 3.5V2m0 1.5c-.94 0-4.472 3.793-5.028 8.704M12 3.5c.94 0 4.472 3.793 5.028 8.704M12 3.5c4.937 0 9.055 3.436 10 8c-1.388 1.2-3.893.97-4.972.704M12 3.5c-4.937 0-9.055 3.436-10 8c1.388 1.2 3.893.97 4.972.704m0 0A10.3 10.3 0 0 0 12 13.5a10.3 10.3 0 0 0 5.028-1.296"></svg:path><svg:path d="M12 13.5v7a1.5 1.5 0 0 1-3 0V20m8.5-4.125c-.828 0-1.5.588-1.5 1.313c0 .724.672 1.312 1.5 1.312s1.5.588 1.5 1.313c0 .724-.672 1.312-1.5 1.312m0-5.25c.653 0 1.209.365 1.415.875m-1.415-.875V15m0 6.125c-.653 0-1.209-.365-1.415-.875m1.415.875V22"></svg:path></svg:g>`,
})
export class HugeiconsUmbrellaDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnamusedIcon],svg[hugeicons-unamused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M7 8c.21.583.775 1 1.44 1s1.229-.417 1.438-1m4.244 0c.21.583.774 1 1.439 1c.664 0 1.23-.417 1.439-1m-7 8l5-2"></svg:path></svg:g>`,
})
export class HugeiconsUnamusedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnarchive03Icon],svg[hugeicons-unarchive-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 7H3v6c0 3.771 0 5.657 1.172 6.828S7.229 21 11 21h2c3.771 0 5.657 0 6.828-1.172S21 16.771 21 13zm0 0H3l1.2-1.6c.883-1.178 1.325-1.767 1.958-2.083C6.792 3 7.528 3 9 3h6c1.472 0 2.208 0 2.842.317c.633.316 1.075.905 1.958 2.083z"></svg:path><svg:path d="M12 11v6.5m-3-4c.59-.607 2.16-3 3-3s2.41 2.393 3 3"></svg:path></svg:g>`,
})
export class HugeiconsUnarchive03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnavailableIcon],svg[hugeicons-unavailable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.75 5l14 14m3-7c0-5.523-4.477-10-10-10s-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10" color="currentColor"></svg:path>`,
})
export class HugeiconsUnavailableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnderpants01Icon],svg[hugeicons-underpants-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m14 17l.346.995c.317.944.476 1.417.844 1.697l.07.05c.383.258.884.258 1.885.258c2.288 0 3.431 0 4.166-.724c.043-.041.089-.09.128-.135c.68-.776.609-1.86.468-4.026c-.23-3.554-.683-6.41-1.121-8.415c-.264-1.209-.396-1.814-.949-2.257S18.6 4 17.231 4H6.769C5.4 4 4.716 4 4.163 4.443S3.478 5.491 3.214 6.7c-.438 2.005-.89 4.861-1.121 8.415c-.14 2.167-.211 3.25.468 4.026c.04.045.085.094.128.135C3.424 20 4.568 20 6.855 20c1.001 0 1.502 0 1.886-.259l.07-.05c.367-.28.526-.752.843-1.696L9.987 17"></svg:path><svg:path d="M8.5 15c.599 1.196 2.218 2.5 3.5 2.5s2.901-1.304 3.5-2.5M3 8h18"></svg:path></svg:g>`,
})
export class HugeiconsUnderpants01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnderpants02Icon],svg[hugeicons-underpants-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.936 12.812l-.961-4.626c-.318-1.526-.476-2.289-1.027-2.737C19.396 5 18.617 5 17.058 5H6.942c-1.559 0-2.338 0-2.89.449c-.55.448-.71 1.211-1.027 2.737l-.96 4.626c-.196.938.018 1.947 1.145 2.16c.667.126 1.377-.015 2.053.065c1.509.177 2.861.982 3.7 2.201C9.7 18.591 10.406 19 12 19s2.3-.41 3.036-1.762c.84-1.22 2.192-2.024 3.701-2.201c.677-.08 1.386.061 2.053-.065c1.127-.213 1.34-1.222 1.146-2.16M16 16l-2.109-8M8 16l2.109-8M3.5 8h17" color="currentColor"></svg:path>`,
})
export class HugeiconsUnderpants02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnderpants03Icon],svg[hugeicons-underpants-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 18.5c0-2.667 1.9-8.5 7.5-8.5M10 18.5c0-2.667-1.9-8.5-7.5-8.5m8-2h3"></svg:path><svg:path d="M2 8v1.56c0 .302.025.574.108.864c.83 2.9 3.812 7.243 7.42 8.439c.323.107.624.137.964.137h3.016c.34 0 .641-.03.965-.137c3.607-1.197 6.59-5.54 7.419-8.44c.083-.289.108-.56.108-.862V8c0-1.414 0-2.121-.44-2.56C21.122 5 20.415 5 19 5H5c-1.414 0-2.121 0-2.56.44C2 5.878 2 6.585 2 8"></svg:path></svg:g>`,
})
export class HugeiconsUnderpants03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUndoIcon],svg[hugeicons-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.758 21.795c-5.38 0-9.75-4.37-9.75-9.75c0-.41.34-.75.75-.75s.75.34.75.75c0 4.55 3.7 8.25 8.25 8.25s8.25-3.7 8.25-8.25s-3.7-8.25-8.25-8.25c-2.7 0-5.2 1.3-6.75 3.5c.35 0 .82-.05 1.43-.11l2.04-.21a.75.75 0 0 1 .15 1.49l-2.04.21c-1.53.15-2.44.24-3.18-.37c-.72-.63-.79-1.53-.93-3.15l-.18-2.04c-.04-.41.27-.78.68-.81s.78.27.81.68l.18 2.05q.045.585.09 1.02a9.71 9.71 0 0 1 7.69-3.75c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75z" color="currentColor"></svg:path>`,
})
export class HugeiconsUndoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUndo02Icon],svg[hugeicons-undo-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.988 2.557c-3.3 0-6.37 1.7-8.17 4.46c-.08-.56-.08-1.35-.08-2.42v-1.28c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.28c0 2.35 0 3.64.98 4.46c.48.41 1.05.56 1.78.56s1.62-.15 2.78-.34l1.34-.22c.41-.07.69-.45.62-.86a.755.755 0 0 0-.86-.62l-1.34.22c-1.18.2-2.05.34-2.63.32a8.29 8.29 0 0 1 7.1-4.05c4.55 0 8.25 3.7 8.25 8.25s-3.7 8.25-8.25 8.25c-.41 0-.75.34-.75.75s.34.75.75.75c5.38 0 9.75-4.37 9.75-9.75s-4.39-9.76-9.77-9.76" color="currentColor"></svg:path>`,
})
export class HugeiconsUndo02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUndo03Icon],svg[hugeicons-undo-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.992 7.549H4.142c.42-.46 1.17-1.02 2.16-1.77l1.15-.88a.749.749 0 1 0-.91-1.19l-1.15.88c-2.03 1.54-3.15 2.38-3.15 3.72s1.12 2.18 3.14 3.72l1.15.88c.14.1.3.15.46.15c.23 0 .45-.1.6-.29c.25-.33.19-.8-.14-1.05l-1.15-.88c-.99-.75-1.73-1.31-2.15-1.77h10.85c2.89 0 5.25 2.35 5.25 5.25s-2.36 5.25-5.25 5.25h-4c-.41 0-.75.34-.75.75s.34.75.75.75h4c3.72 0 6.75-3.03 6.75-6.75s-3.03-6.75-6.75-6.75z" color="currentColor"></svg:path>`,
})
export class HugeiconsUndo03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnfoldLessIcon],svg[hugeicons-unfold-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 19s-4.419-5-6-5s-6 5-6 5M18 5s-4.419 5-6 5s-6-5-6-5" color="currentColor"></svg:path>`,
})
export class HugeiconsUnfoldLessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnfoldMoreIcon],svg[hugeicons-unfold-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 14s-4.419 5-6 5s-6-5-6-5m12-4s-4.419-5-6-5s-6 5-6 5" color="currentColor"></svg:path>`,
})
export class HugeiconsUnfoldMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUngroupItemsIcon],svg[hugeicons-ungroup-items-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m16 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0M6 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0M16.5 9c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C15.699 7.5 15.466 7.5 15 7.5H9c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541C7.5 8.301 7.5 8.534 7.5 9s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h6c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883m0 6c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54c-.184-.077-.417-.077-.883-.077H9c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541c-.077.184-.077.417-.077.883s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077h6c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883" color="currentColor"></svg:path>`,
})
export class HugeiconsUngroupItemsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUngroupLayersIcon],svg[hugeicons-ungroup-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m16 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0M6 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4.65-11.52l-1.089.533C8.187 9.686 7.5 10.022 7.5 10.5s.687.814 2.061 1.487l1.089.533c.654.32.982.48 1.35.48s.696-.16 1.35-.48l1.089-.533c1.374-.673 2.061-1.009 2.061-1.487s-.687-.814-2.061-1.487L13.35 8.48C12.696 8.16 12.368 8 12 8s-.696.16-1.35.48m5.85 5.02c0 .478-.687.814-2.061 1.487l-1.089.533c-.654.32-.982.48-1.35.48s-.696-.16-1.35-.48l-1.089-.533C8.187 14.314 7.5 13.978 7.5 13.5" color="currentColor"></svg:path>`,
})
export class HugeiconsUngroupLayersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnhappyIcon],svg[hugeicons-unhappy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M9 17c.836-.628 1.874-1 3-1s2.164.372 3 1M7 8.01s1.41-.127 2.196.498m0 0l-.263.835c-.104.329.167.657.543.657c.396 0 .657-.357.453-.665a3.6 3.6 0 0 0-.733-.827M14 8.011s1.41-.128 2.196.497m0 0l-.263.835c-.104.329.167.657.543.657c.396 0 .657-.357.453-.665a3.6 3.6 0 0 0-.733-.827"></svg:path></svg:g>`,
})
export class HugeiconsUnhappyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUniversalAccessIcon],svg[hugeicons-universal-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.006 7.313c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25m0-3c-.41 0-.75.34-.75.75s.34.75.75.75s.75-.34.75-.75s-.34-.75-.75-.75m0 5.5h-.01q.378-.001.75-.026v4.025h-1.5V9.788q.373.025.75.025h-.01zm-2.26-.229c-1.57-.323-3.015-.983-4.21-1.932a.75.75 0 0 1-.12-1.05c.26-.32.73-.37 1.05-.12c1.48 1.18 3.44 1.84 5.53 1.84s4.05-.65 5.53-1.84a.74.74 0 0 1 1.05.12c.26.32.21.8-.12 1.05c-1.187.956-2.636 1.614-4.21 1.935v4.915l.99 5.94c.07.41-.21.8-.62.86q-.03 0-.06.006l-.056.005a.75.75 0 0 1-.734-.63l-.9-5.37h-1.73l-.9 5.37a.76.76 0 0 1-.86.62a.755.755 0 0 1-.62-.86l.99-5.94zM14.5 21.313h-.004h.01z" color="currentColor"></svg:path>`,
})
export class HugeiconsUniversalAccessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUniversalAccessCircleIcon],svg[hugeicons-universal-access-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12.063c0 5.93 4.82 10.75 10.75 10.75s10.75-4.82 10.75-10.75S17.93 1.313 12 1.313S1.25 6.133 1.25 12.063m1.5 0c0-5.1 4.15-9.25 9.25-9.25s9.25 4.15 9.25 9.25s-4.15 9.25-9.25 9.25s-9.25-4.15-9.25-9.25m10.75-5.25a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-3.26 3.845c-.976-.176-1.877-.5-2.63-.955a.76.76 0 0 1-.26-1.03c.21-.36.67-.47 1.03-.26c.96.58 2.24.89 3.61.89s2.66-.32 3.61-.89a.751.751 0 1 1 .77 1.29c-.754.45-1.653.775-2.63.953v3.316l.98 3.91a.748.748 0 0 1-.721.93a.76.76 0 0 1-.729-.57l-.86-3.43h-.83l-.86 3.43c-.1.4-.51.65-.91.55s-.65-.51-.55-.91l.98-3.91zM14 18.813h-.009z" color="currentColor"></svg:path>`,
})
export class HugeiconsUniversalAccessCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUniversityIcon],svg[hugeicons-university-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 22h19.5M3 13v9m18-9v9M7.5 8v14m9-14v14M2 13h5m15 0h-5M6.5 8h11M12 8V4.982m0 0V2.97c0-.474 0-.711.146-.858c.46-.463 2.354.631 3.074 1.075c.608.374.78 1.122.78 1.795zM12 22v-2m-1.5-8v.5m3-.5v.5m-3 3.5v.5m3-.5v.5" color="currentColor"></svg:path>`,
})
export class HugeiconsUniversityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnlink01Icon],svg[hugeicons-unlink-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m12.143 10.691l.207-.207a5.067 5.067 0 1 1 7.166 7.166l-2.866 2.866a5.067 5.067 0 1 1-7.166-7.166l.464-.464"></svg:path><svg:path d="m20.052 11.114l.464-.464a5.067 5.067 0 1 0-7.166-7.166L10.484 6.35a5.067 5.067 0 1 0 7.166 7.166l.207-.207M4.5 4L6 6M2 8l3 1m-2 4.5L5 12"></svg:path></svg:g>`,
})
export class HugeiconsUnlink01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnlink02Icon],svg[hugeicons-unlink-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.846 14.61l2.61-2.61A5.272 5.272 0 1 0 12 4.544l-2.61 2.61m5.22 9.692L12 19.456A5.272 5.272 0 1 1 4.544 12l2.61-2.61M22 17h-2.079M17 22v-2.079M2 7h2.079M7 2v2.079" color="currentColor"></svg:path>`,
})
export class HugeiconsUnlink02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnlink03Icon],svg[hugeicons-unlink-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.523 14.437l4.914-4.913m6.578 6.485h-2.003m-3.006 5.01v-2.004M2.982 7.992h2.004m3.006-5.01v2.004m7.115 7.583c1.14.74 2.308.542 3.163-.312l2.994-2.995a2.506 2.506 0 0 0 0-3.543l-2.985-2.986a2.504 2.504 0 0 0-3.543 0l-2.994 2.995c-.702.702-1.107 2.036-.277 3.182m1.104 6.199c.739 1.14.542 2.309-.313 3.163l-2.994 2.995a2.504 2.504 0 0 1-3.542 0l-2.985-2.986a2.506 2.506 0 0 1 0-3.543l2.994-2.995c.702-.702 2.035-1.107 3.182-.277" color="currentColor"></svg:path>`,
})
export class HugeiconsUnlink03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnlink04Icon],svg[hugeicons-unlink-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 13.229q.213.349.504.654a3.56 3.56 0 0 0 4.454.59q.391-.24.73-.59l3.239-3.372c1.43-1.49 1.43-3.904 0-5.394a3.564 3.564 0 0 0-5.183 0l-.714.743"></svg:path><svg:path d="m10.97 18.14l-.713.743a3.564 3.564 0 0 1-5.184 0c-1.43-1.49-1.43-3.905 0-5.394l3.24-3.372a3.564 3.564 0 0 1 5.183 0q.291.305.504.654M21 16h-2.079M16 21v-2.079M3 8h2.079M8 3v2.079"></svg:path></svg:g>`,
})
export class HugeiconsUnlink04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnlink05Icon],svg[hugeicons-unlink-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 17H17a5 5 0 0 0 0-10h-3.5m-3 10H7A5 5 0 0 1 7 7h3.5m5 14L14 19.5M8.5 21l1.5-1.5M8.5 3L10 4.5M15.5 3L14 4.5" color="currentColor"></svg:path>`,
})
export class HugeiconsUnlink05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnlink06Icon],svg[hugeicons-unlink-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.5 13v-1.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.44-.294-1.032-.332-2.111-.336L10 8c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C6.5 9.393 6.5 10.096 6.5 11.5v6c0 1.404 0 2.107.337 2.611a2 2 0 0 0 .552.552C7.893 21 8.596 21 10 21s2.107 0 2.611-.337c.218-.146.406-.334.552-.552c.187-.28.27-.622.307-1.111"></svg:path><svg:path d="M10.5 11v1.5c0 1.405 0 2.107.337 2.611c.146.218.334.406.552.552c.44.294 1.032.332 2.111.336L14 16c1.405 0 2.107 0 2.611-.337c.218-.146.406-.334.552-.552c.337-.504.337-1.207.337-2.611v-6c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C16.107 3 15.404 3 14 3s-2.107 0-2.611.337a2 2 0 0 0-.552.552c-.187.28-.27.622-.307 1.111M20 10.5L22 9m-2 5.5l2 1.5M4 10.5L2 9m2 5.5L2 16"></svg:path></svg:g>`,
})
export class HugeiconsUnlink06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnsplashIcon],svg[hugeicons-unsplash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 7.5v-3h5v3zM16 16v-5h3.5v8.5h-15V11H8v5z" color="currentColor"></svg:path>`,
})
export class HugeiconsUnsplashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUpload01Icon],svg[hugeicons-upload-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.095 10Q3 10.687 3 11.4c0 5.302 4.03 9.6 9 9.6s9-4.298 9-9.6q0-.714-.095-1.4M12 3v10m0-10c-.7 0-2.008 1.994-2.5 2.5M12 3c.7 0 2.008 1.994 2.5 2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsUpload01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUpload02Icon],svg[hugeicons-upload-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 14l.234.663c.91 2.578 1.365 3.868 2.403 4.602s2.406.735 5.14.735h2.445c2.735 0 4.102 0 5.14-.735c1.039-.734 1.494-2.024 2.404-4.602L21 14M12 4v10m0-10c-.7 0-2.008 1.994-2.5 2.5M12 4c.7 0 2.008 1.994 2.5 2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsUpload02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUpload03Icon],svg[hugeicons-upload-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.938 10c-.691.005-1.107.026-1.438.114c-1.508.4-2.54 1.75-2.499 3.27c.012.441.18.986.515 2.075c.807 2.62 2.164 4.895 5.202 5.44c.559.101 1.188.101 2.445.101h1.674c1.257 0 1.886 0 2.445-.1c3.038-.546 4.395-2.821 5.202-5.441c.335-1.09.503-1.634.515-2.074c.04-1.521-.991-2.872-2.499-3.271c-.33-.088-.747-.109-1.437-.114M12 3v11m0-11c.468 0 .824.438 1.536 1.314L14.5 5.5M12 3c-.468 0-.824.438-1.536 1.314L9.5 5.5" color="currentColor"></svg:path>`,
})
export class HugeiconsUpload03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUpload04Icon],svg[hugeicons-upload-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.5v10m0-10c-.7 0-2.008 1.994-2.5 2.5M12 4.5c.7 0 2.008 1.994 2.5 2.5m5.5 9.5c0 2.482-.518 3-3 3H7c-2.482 0-3-.518-3-3" color="currentColor"></svg:path>`,
})
export class HugeiconsUpload04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUpload05Icon],svg[hugeicons-upload-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5v10m0-10c-.7 0-2.008 1.994-2.5 2.5M12 5c.7 0 2.008 1.994 2.5 2.5M5 19h14" color="currentColor"></svg:path>`,
})
export class HugeiconsUpload05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUploadCircle01Icon],svg[hugeicons-upload-circle-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M12 8v8m0-8c-.7 0-2.008 1.994-2.5 2.5M12 8c.7 0 2.008 1.994 2.5 2.5"></svg:path></svg:g>`,
})
export class HugeiconsUploadCircle01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUploadCircle02Icon],svg[hugeicons-upload-circle-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M11.983 17v-5.975m0 0c-.261-.004-.52.179-.71.402L10 12.883m1.984-1.858c.252.003.508.185.71.402l1.282 1.456M14.99 8h-6"></svg:path></svg:g>`,
})
export class HugeiconsUploadCircle02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUploadSquare01Icon],svg[hugeicons-upload-square-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 8v8m0-8c-.7 0-2.008 1.994-2.5 2.5M12 8c.7 0 2.008 1.994 2.5 2.5"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsUploadSquare01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUploadSquare02Icon],svg[hugeicons-upload-square-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M11.97 17.039v-7.05m0 0c-.326-.005-.648.219-.885.493l-1.59 1.782m2.475-2.276c.315.004.633.227.885.494l1.599 1.782m1.532-5.225h-8"></svg:path></svg:g>`,
})
export class HugeiconsUploadSquare02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUpworkIcon],svg[hugeicons-upwork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 4.5v6.25c0 2.043 1.708 3.75 3.75 3.75c2.043 0 3.75-1.707 3.75-3.75V4.5c1.25 3.125 3.597 10 8.125 10c2.383 0 4.375-1.992 4.375-4.375S20.008 5.75 17.625 5.75c-2.534 0-4.034 1.875-4.375 3.75c-.303 1.662-1.875 10-1.875 10" color="currentColor"></svg:path>`,
})
export class HugeiconsUpworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUsbIcon],svg[hugeicons-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.5 6v-.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C14.107 2 13.404 2 12 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C8.5 3.393 8.5 4.096 8.5 5.5V6"></svg:path><svg:path d="M6.004 7.113C5.937 6.243 6.64 5.5 7.53 5.5h8.94c.89 0 1.593.743 1.526 1.613l-.184 2.379a9.9 9.9 0 0 1-1.68 4.785l-.6.885a3.08 3.08 0 0 1-2.548 1.338h-1.968a3.08 3.08 0 0 1-2.547-1.338l-.601-.885a9.9 9.9 0 0 1-1.68-4.785zM12 17v5M11 8.5h2"></svg:path></svg:g>`,
})
export class HugeiconsUsbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUsbBugsIcon],svg[hugeicons-usb-bugs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.5 7.5v-2c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C12.107 2 11.404 2 10 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C6.5 3.393 6.5 4.096 6.5 5.5v2m3-3h1m7.182 10.278A2.7 2.7 0 0 1 19 13.953m-7.682.825A2.7 2.7 0 0 0 10 13.953m7.682 5.27a2.7 2.7 0 0 0 1.318.824m-7.682-.825a2.7 2.7 0 0 1-1.318.825M17.682 17H19m-7.682 0H10m4.5 4c-1.757 0-3.182-1.393-3.182-3.111V16.11c0-1.718 1.425-3.111 3.182-3.111s3.182 1.393 3.182 3.111v1.778c0 1.718-1.425 3.111-3.182 3.111"></svg:path><svg:path d="M14.996 10.501c-.018-1.24-.11-1.943-.582-2.415C13.828 7.5 12.886 7.5 11 7.5H9c-1.886 0-2.828 0-3.414.586S5 9.616 5 11.502v5.502c0 .93 0 1.395.077 1.782A4 4 0 0 0 8.22 21.93c.214.043.452.061.78.07"></svg:path></svg:g>`,
})
export class HugeiconsUsbBugsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUsbConnected01Icon],svg[hugeicons-usb-connected-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.984 16.5H9.016a3.08 3.08 0 0 1-2.547-1.338l-.601-.885a9.9 9.9 0 0 1-1.68-4.785l-.184-2.379C3.937 6.243 4.64 5.5 5.53 5.5h8.94c.89 0 1.593.743 1.525 1.613L15.928 8"></svg:path><svg:path d="M13.5 6v-.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C12.107 2 11.404 2 10 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C6.5 3.393 6.5 4.096 6.5 5.5V6M10 17v5M9 8.5h2m1 5s1 0 2 2c0 0 3.177-5 6-6"></svg:path></svg:g>`,
})
export class HugeiconsUsbConnected01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUsbConnected02Icon],svg[hugeicons-usb-connected-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.66 21a4 4 0 0 1-1.868.923c-.387.077-.852.077-1.783.077s-1.397 0-1.784-.077a4 4 0 0 1-3.148-3.143C5 18.394 5 17.93 5 17v-5.5c0-1.886 0-2.828.587-3.414S7.118 7.5 9.007 7.5h2.004c1.888 0 2.833 0 3.42.586c.405.404.53.978.569 1.914m-1.5-2.5v-2c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C12.107 2 11.404 2 10 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C6.5 3.393 6.5 4.096 6.5 5.5v2m3-3h1"></svg:path><svg:path d="M11 16s1 0 2 2c0 0 3.177-5 6-6"></svg:path></svg:g>`,
})
export class HugeiconsUsbConnected02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUsbConnected03Icon],svg[hugeicons-usb-connected-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.012 11.5c0-1.885 0-2.828-.586-3.414c-.587-.586-1.53-.586-3.418-.586H9.005c-1.887 0-2.831 0-3.418.586c-.586.586-.586 1.529-.586 3.415V17c0 .929 0 1.393.077 1.78a4 4 0 0 0 3.146 3.143c.31.061.671.073 1.282.076M13.51 7.5v-2c0-1.404 0-2.106-.338-2.61a2 2 0 0 0-.552-.552C12.115 2 11.412 2 10.006 2s-2.11 0-2.614.338a2 2 0 0 0-.553.551c-.337.505-.337 1.207-.337 2.611v2m2.999-3h1"></svg:path><svg:path d="M13.644 18.426s.377.115.902.883c0 0 .768-1.658 1.834-2.234m2.62.941c0 2.2-1.786 3.984-3.988 3.984a3.986 3.986 0 0 1-3.988-3.984c0-2.2 1.786-3.983 3.988-3.983A3.985 3.985 0 0 1 19 18.016"></svg:path></svg:g>`,
})
export class HugeiconsUsbConnected03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUsbErrorIcon],svg[hugeicons-usb-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.973 10.501c-.018-1.24-.11-1.943-.58-2.415C12.81 7.5 11.868 7.5 9.986 7.5H7.99c-1.881 0-2.822 0-3.406.586s-.585 1.53-.585 3.416v5.502c0 .93 0 1.395.077 1.782a4 4 0 0 0 3.136 3.144c.213.043.451.061.778.07m4.491-14.5v-2c0-1.404 0-2.107-.336-2.611a2 2 0 0 0-.55-.552C11.09 2 10.39 2 8.988 2s-2.103 0-2.606.337a2 2 0 0 0-.55.552c-.337.504-.337 1.207-.337 2.611v2m3.004-3h1m5.475 11.851v1.292m-.008 2.107h.02M12.007 22h5.884c1.569 0 2.653-1.729 1.821-3.06l-1.44-2.554l-1.504-2.38a2.093 2.093 0 0 0-3.553 0c-.347.556-.948 1.449-1.492 2.38c-.3.512-.586 1.026-.821 1.457c-.398.727-.944 1.455-.89 2.282c.066.99.874 1.875 1.995 1.875" color="currentColor"></svg:path>`,
})
export class HugeiconsUsbErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUsbMemory01Icon],svg[hugeicons-usb-memory-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m4.038 12.539l5.938-5.94c1.4-1.4 2.1-2.099 2.97-2.099s1.57.7 2.97 2.1L17.4 8.085c1.4 1.4 2.1 2.1 2.1 2.969c0 .87-.7 1.57-2.1 2.97l-5.939 5.938a5.25 5.25 0 0 1-7.423-7.423"></svg:path><svg:path d="M8.5 17a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m6-11.65l1.383-1.383C16.861 2.99 17.35 2.5 17.958 2.5s1.097.489 2.075 1.467S21.5 5.434 21.5 6.042s-.489 1.097-1.467 2.075L18.65 9.5"></svg:path></svg:g>`,
})
export class HugeiconsUsbMemory01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUsbMemory02Icon],svg[hugeicons-usb-memory-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 11.5c0-1.886 0-2.828.586-3.414S9.114 7.5 11 7.5h2c1.886 0 2.828 0 3.414.586S17 9.614 17 11.5V17c0 .93 0 1.394-.077 1.78a4 4 0 0 1-3.143 3.143C13.394 22 12.93 22 12 22s-1.394 0-1.78-.077a4 4 0 0 1-3.143-3.143C7 18.394 7 17.93 7 17zm8.5-4v-2c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C14.107 2 13.404 2 12 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C8.5 3.393 8.5 4.096 8.5 5.5v2m3-3h1" color="currentColor"></svg:path>`,
})
export class HugeiconsUsbMemory02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUsbNotConnected01Icon],svg[hugeicons-usb-not-connected-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 6v-.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C12.607 2 11.904 2 10.5 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C7 3.393 7 4.096 7 5.5V6"></svg:path><svg:path d="M11 16.5H9.516a3.08 3.08 0 0 1-2.547-1.338l-.601-.885a9.9 9.9 0 0 1-1.68-4.785l-.184-2.379C4.437 6.243 5.14 5.5 6.03 5.5h8.94c.89 0 1.593.743 1.525 1.613L16.389 8.5M10.5 17v5m-1-13.5h2m8 2.5l-6 6m6 0l-6-6"></svg:path></svg:g>`,
})
export class HugeiconsUsbNotConnected01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUsbNotConnected02Icon],svg[hugeicons-usb-not-connected-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.014 21.464a4 4 0 0 1-1.222.46C11.405 22 10.94 22 10.01 22s-1.397 0-1.784-.077a4 4 0 0 1-3.148-3.143C5 18.394 5 17.93 5 17v-5.5c0-1.886 0-2.828.587-3.414S7.118 7.5 9.007 7.5h2.004c1.888 0 2.833 0 3.42.586c.405.404.53.978.569 1.914m4 2.5l-6 6m6 0l-6-6m.5-5v-2c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C12.107 2 11.404 2 10 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C6.5 3.393 6.5 4.096 6.5 5.5v2m3-3h1" color="currentColor"></svg:path>`,
})
export class HugeiconsUsbNotConnected02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUsdtIcon],svg[hugeicons-usdt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.5 9.022c4.811.145 8.5.975 8.5 1.978c0 1.105-4.477 2-10 2s-10-.895-10-2c0-1.003 3.689-1.833 8.5-1.978"></svg:path><svg:path d="M13.5 10.478V8c0-.943 0-1.414.293-1.707S14.557 6 15.5 6H18c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883s0-.699-.076-.883a1 1 0 0 0-.541-.54C18.699 3 18.466 3 18 3H6c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541c-.077.184-.077.417-.077.883s0 .699.076.883a1 1 0 0 0 .541.54C5.301 6 5.534 6 6 6h2.5c.943 0 1.414 0 1.707.293S10.5 7.057 10.5 8v2.478m3 2.5V19.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C12.699 21 12.466 21 12 21s-.699 0-.883-.076a1 1 0 0 1-.54-.541c-.077-.184-.077-.417-.077-.883v-6.522"></svg:path></svg:g>`,
})
export class HugeiconsUsdtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserIcon],svg[hugeicons-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.578 15.482c-1.415.842-5.125 2.562-2.865 4.715C4.816 21.248 6.045 22 7.59 22h8.818c1.546 0 2.775-.752 3.878-1.803c2.26-2.153-1.45-3.873-2.865-4.715a10.66 10.66 0 0 0-10.844 0M16.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0" color="currentColor"></svg:path>`,
})
export class HugeiconsUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUser02Icon],svg[hugeicons-user-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.75 7.5A4.26 4.26 0 0 0 12 11.75a4.26 4.26 0 0 0 4.25-4.25A4.26 4.26 0 0 0 12 3.25A4.26 4.26 0 0 0 7.75 7.5m1.5 0c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75S9.25 9.02 9.25 7.5m8.5 12.5c0 .41.34.75.75.75s.75-.34.75-.75v-2.03c0-1.65-.81-3.06-2.13-3.66c-3.07-1.38-7.16-1.39-10.24 0c-1.32.6-2.13 2-2.13 3.66V20c0 .41.34.75.75.75s.75-.34.75-.75v-2.03c0-.84.33-1.88 1.25-2.3c2.69-1.21 6.32-1.21 9 0c.92.43 1.25 1.47 1.25 2.3z" color="currentColor"></svg:path>`,
})
export class HugeiconsUser02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUser03Icon],svg[hugeicons-user-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.246 7c0 2.62 2.13 4.75 4.75 4.75s4.75-2.13 4.75-4.75s-2.13-4.75-4.75-4.75S7.246 4.38 7.246 7m1.5 0c0-1.79 1.46-3.25 3.25-3.25s3.25 1.46 3.25 3.25s-1.46 3.25-3.25 3.25S8.746 8.79 8.746 7m-4.5 12c0 1.52 1.23 2.75 2.75 2.75h10c1.52 0 2.75-1.23 2.75-2.75c0-3.17-2.58-5.75-5.75-5.75h-4c-3.17 0-5.75 2.58-5.75 5.75m1.5 0a4.26 4.26 0 0 1 4.25-4.25h4a4.26 4.26 0 0 1 4.25 4.25c0 .69-.56 1.25-1.25 1.25h-10c-.69 0-1.25-.56-1.25-1.25" color="currentColor"></svg:path>`,
})
export class HugeiconsUser03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserAccountIcon],svg[hugeicons-user-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 9h4m-4 3.5h3"></svg:path><svg:rect width="20" height="18" x="2" y="3" rx="5"></svg:rect><svg:path d="M5 16c1.208-2.581 5.712-2.75 7 0m-1.5-7a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class HugeiconsUserAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserAdd01Icon],svg[hugeicons-user-add-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 22H6.59c-1.545 0-2.774-.752-3.877-1.803c-2.26-2.153 1.45-3.873 2.865-4.715A10.65 10.65 0 0 1 15 14.78m1.5-8.28a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m2 15.5v-7M15 18.5h7" color="currentColor"></svg:path>`,
})
export class HugeiconsUserAdd01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserAdd02Icon],svg[hugeicons-user-add-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m5.5-3v5M22 6.5h-5" color="currentColor"></svg:path>`,
})
export class HugeiconsUserAdd02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserAiIcon],svg[hugeicons-user-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 2.458A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.458-3"></svg:path><svg:path d="M15 10a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-9.5 9.5l.56-.98A5 5 0 0 1 10.402 16h3.196a5 5 0 0 1 4.341 2.52l.56.98m.475-17.479c.006-.028.046-.028.052 0a3.79 3.79 0 0 0 2.953 2.953c.028.006.028.046 0 .052a3.79 3.79 0 0 0-2.953 2.953c-.006.028-.046.028-.052 0a3.79 3.79 0 0 0-2.953-2.953c-.028-.006-.028-.046 0-.052a3.79 3.79 0 0 0 2.953-2.953"></svg:path></svg:g>`,
})
export class HugeiconsUserAiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserArrowLeftRightIcon],svg[hugeicons-user-arrow-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.981.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M16 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m5.656 1.5l.747-.705C22.801 7.42 23 7.233 23 7s-.199-.42-.597-.795l-.747-.705M22.979 7H19M2.345 8.5l-.748-.705C1.199 7.42 1 7.233 1 7s.199-.42.597-.795l.748-.705M1.02 7H5" color="currentColor"></svg:path>`,
})
export class HugeiconsUserArrowLeftRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserBlock01Icon],svg[hugeicons-user-block-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 22H6.59c-1.545 0-2.774-.752-3.877-1.803c-2.26-2.153 1.45-3.873 2.865-4.715a10.67 10.67 0 0 1 7.922-1.187m3-7.795a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-.45 9.55l4.9 4.9M22 18.5a3.5 3.5 0 1 0-7 0a3.5 3.5 0 0 0 7 0" color="currentColor"></svg:path>`,
})
export class HugeiconsUserBlock01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserBlock02Icon],svg[hugeicons-user-block-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m3.732 1.268l3.534-3.537M22 6.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" color="currentColor"></svg:path>`,
})
export class HugeiconsUserBlock02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserCheck01Icon],svg[hugeicons-user-check-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 18s1 0 2 2c0 0 3.177-5 6-6"></svg:path><svg:path d="M13 22H6.59c-1.545 0-2.774-.752-3.877-1.803c-2.26-2.153 1.45-3.873 2.865-4.715c3.178-1.893 7.175-1.972 10.422-.239m.5-8.743a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"></svg:path></svg:g>`,
})
export class HugeiconsUserCheck01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserCheck02Icon],svg[hugeicons-user-check-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m3-1.286S18 6.236 18.5 7c0 0 1.5-3 3.5-4" color="currentColor"></svg:path>`,
})
export class HugeiconsUserCheck02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserCircleIcon],svg[hugeicons-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M7.5 17c2.332-2.442 6.643-2.557 9 0m-2.005-7.5c0 1.38-1.12 2.5-2.503 2.5a2.5 2.5 0 0 1-2.504-2.5c0-1.38 1.12-2.5 2.504-2.5a2.5 2.5 0 0 1 2.503 2.5"></svg:path></svg:g>`,
})
export class HugeiconsUserCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserCircle02Icon],svg[hugeicons-user-circle-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M14.75 9.5a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0M5.5 19l.56-.98a5 5 0 0 1 4.342-2.52h3.196a5 5 0 0 1 4.342 2.52l.56.98"></svg:path></svg:g>`,
})
export class HugeiconsUserCircle02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserEdit01Icon],svg[hugeicons-user-edit-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 22H6.59c-1.545 0-2.774-.752-3.877-1.803c-2.26-2.153 1.45-3.873 2.865-4.715c2.55-1.52 5.628-1.87 8.422-1.054M16.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.933 7.349c.335-.364.503-.546.681-.652a1.4 1.4 0 0 1 1.397-.02c.18.1.354.277.7.63c.345.353.518.53.616.714c.238.447.23.988-.02 1.427c-.104.182-.282.353-.638.696l-4.231 4.075c-.674.65-1.011.974-1.432 1.139c-.421.164-.885.152-1.81.128l-.127-.003c-.282-.008-.422-.012-.504-.105s-.071-.236-.049-.523l.012-.156c.063-.808.095-1.213.253-1.576c.157-.363.43-.658.974-1.248z" color="currentColor"></svg:path>`,
})
export class HugeiconsUserEdit01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserFullViewIcon],svg[hugeicons-user-full-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 5c0 1.657-1.758 3.5-3 3.5S9 6.657 9 5a3 3 0 1 1 6 0m1.042 4c1.522 1.335 2.51 3.597 1.623 5.705c-.19.454-.629.749-1.114.749c-.492 0-1.302-.158-1.46.483l-1.097 4.475A2.064 2.064 0 0 1 12 22a2.064 2.064 0 0 1-1.994-1.588l-1.098-4.475c-.157-.641-.967-.483-1.46-.483c-.484 0-.922-.295-1.113-.749c-.886-2.108.1-4.37 1.624-5.705" color="currentColor"></svg:path>`,
})
export class HugeiconsUserFullViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserGroupIcon],svg[hugeicons-user-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.774 18c.75 0 1.345-.471 1.88-1.13c1.096-1.35-.703-2.43-1.389-2.957c-.697-.537-1.476-.842-2.265-.913m-1-2a2.5 2.5 0 0 0 0-5M3.226 18c-.75 0-1.345-.471-1.88-1.13c-1.096-1.35.703-2.43 1.389-2.957C3.432 13.376 4.21 13.07 5 13m.5-2a2.5 2.5 0 0 1 0-5m2.584 9.111c-1.022.632-3.701 1.922-2.07 3.536C6.813 19.436 7.7 20 8.817 20h6.368c1.117 0 2.004-.564 2.801-1.353c1.632-1.614-1.047-2.904-2.069-3.536a7.46 7.46 0 0 0-7.832 0M15.5 7.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0" color="currentColor"></svg:path>`,
})
export class HugeiconsUserGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserGroup02Icon],svg[hugeicons-user-group-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.746 6.496c0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75s-2.75 1.23-2.75 2.75m1.5 0a1.25 1.25 0 1 1 2.501.001a1.25 1.25 0 0 1-2.5 0m-7.5 4.5c0 1.79 1.46 3.25 3.25 3.25s3.25-1.46 3.25-3.25s-1.46-3.25-3.25-3.25s-3.25 1.46-3.25 3.25m1.5 0c0-.96.79-1.75 1.75-1.75s1.75.79 1.75 1.75s-.79 1.75-1.75 1.75s-1.75-.79-1.75-1.75m5.5 8.5c0 .41.34.75.75.75v.01c.41 0 .75-.34.75-.75c0-1.35-.54-2.48-1.47-3.11c-2.25-1.5-5.31-1.5-7.57 0c-.93.62-1.46 1.76-1.46 3.1c0 .41.34.75.75.75s.75-.35.75-.75s.08-1.38.8-1.86c1.76-1.17 4.15-1.16 5.9 0c.72.49.8 1.45.8 1.86m5.75-4.3c-.41 0-.75-.29-.75-.7c0-.57-.09-1.42-.71-1.88c-.76-.57-1.64-.87-2.54-.87c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.23 0 2.42.4 3.45 1.17c.84.64 1.3 1.7 1.3 2.98c0 .41-.34.8-.75.8m-19 0c-.41 0-.75-.29-.75-.7c0-1.38.46-2.44 1.3-3.08c1.03-.77 2.22-1.17 3.45-1.17c.41 0 .75.34.75.75s-.34.75-.75.75c-.91 0-1.79.3-2.55.87c-.61.46-.7 1.31-.7 1.78c0 .41-.34.8-.75.8m1.25-8.7c0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75s-2.75 1.23-2.75 2.75m1.5 0a1.25 1.25 0 1 1 2.501.001a1.25 1.25 0 0 1-2.5 0" color="currentColor"></svg:path>`,
})
export class HugeiconsUserGroup02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserGroup03Icon],svg[hugeicons-user-group-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.78 10.49q-.15 0-.3-.06A3.73 3.73 0 0 1 4.25 7c0-2.07 1.68-3.75 3.75-3.75c.41 0 .75.34.75.75s-.34.75-.75.75C6.76 4.75 5.75 5.76 5.75 7c0 .89.52 1.7 1.33 2.05c.38.17.55.61.39.99c-.12.28-.4.45-.69.45m9.75-.45a.763.763 0 0 0 .99.39A3.751 3.751 0 0 0 16 3.25c-.41 0-.75.34-.75.75s.34.75.75.75c1.24 0 2.25 1.01 2.25 2.25c0 .89-.52 1.69-1.33 2.05c-.39.17-.56.61-.39.99M8.25 8c0 2.07 1.68 3.75 3.75 3.75s3.75-1.68 3.75-3.75S14.07 4.25 12 4.25S8.25 5.93 8.25 8m1.5 0c0-1.24 1.01-2.25 2.25-2.25S14.25 6.76 14.25 8s-1.01 2.25-2.25 2.25S9.75 9.24 9.75 8m6.53 12.75H7.71c-1.36 0-2.46-1.1-2.46-2.46c0-2.78 2.26-5.04 5.04-5.04h3.43c2.78 0 5.04 2.26 5.04 5.04c0 1.36-1.11 2.46-2.46 2.46zm-6-6c-1.95 0-3.54 1.59-3.54 3.54c0 .53.43.96.96.96h8.57c.53 0 .96-.43.96-.96c0-1.95-1.59-3.54-3.54-3.54zM19.531 19c0 .41.34.75.75.75c1.35 0 2.46-1.1 2.46-2.46c0-2.78-2.26-5.04-5.04-5.04c-.41 0-.75.34-.75.75s.34.75.75.75c1.95 0 3.54 1.59 3.54 3.54c0 .53-.43.96-.96.96c-.41 0-.75.34-.75.75M1.25 17.29c0 1.36 1.1 2.46 2.46 2.46c.41 0 .75-.34.75-.75s-.34-.75-.75-.75a.96.96 0 0 1-.96-.96c0-1.95 1.59-3.54 3.54-3.54c.41 0 .75-.34.75-.75s-.34-.75-.75-.75c-2.78 0-5.04 2.26-5.04 5.04" color="currentColor"></svg:path>`,
})
export class HugeiconsUserGroup03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserIdVerificationIcon],svg[hugeicons-user-id-verification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.134 2.5c-2.666.06-4.223.315-5.287 1.375C2.915 4.803 2.604 6.108 2.5 8.2m12.366-5.7c2.666.06 4.223.315 5.287 1.375c.932.928 1.243 2.233 1.347 4.325m-6.634 13.3c2.666-.06 4.223-.315 5.287-1.375c.932-.928 1.243-2.233 1.347-4.325M9.134 21.5c-2.666-.06-4.223-.315-5.287-1.375c-.932-.928-1.243-2.233-1.347-4.325m5 1.2c2.332-2.442 6.643-2.557 9 0m-2.005-7.5c0 1.38-1.12 2.5-2.503 2.5a2.5 2.5 0 0 1-2.504-2.5c0-1.38 1.12-2.5 2.504-2.5a2.5 2.5 0 0 1 2.503 2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsUserIdVerificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserListIcon],svg[hugeicons-user-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.08 15.296c-1.218.738-4.412 2.243-2.466 4.126c.95.92 2.009 1.578 3.34 1.578h7.593c1.33 0 2.389-.658 3.34-1.578c1.945-1.883-1.25-3.389-2.468-4.126a9.06 9.06 0 0 0-9.338 0M13.5 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0M17 5h5m-5 3h5m-2 3h2" color="currentColor"></svg:path>`,
})
export class HugeiconsUserListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserLock01Icon],svg[hugeicons-user-lock-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 22H6.59c-1.545 0-2.774-.752-3.877-1.803c-2.26-2.153 1.45-3.873 2.865-4.715a10.67 10.67 0 0 1 7.922-1.187m3-7.795a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m.26 9.878c-1.08 0-1.543.78-1.663 1.26c-.12.479-.12 2.218-.048 2.938c.24.899.84 1.27 1.428 1.39c.54.049 2.82.03 3.48.03c.96.019 1.68-.341 1.98-1.42c.06-.36.12-2.34-.03-2.939c-.318-.96-1.041-1.259-1.641-1.259m-3.506 0h3.506m-3.506 0s-.002-.826 0-1.26c0-.398-.034-.78.156-1.13c.71-1.413 2.75-1.27 3.254.17c.087.237.093.612.09.96c-.003.442.006 1.26.006 1.26" color="currentColor"></svg:path>`,
})
export class HugeiconsUserLock01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserLock02Icon],svg[hugeicons-user-lock-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m6.906-2.387V3.518C20.906 2.68 20.276 2 19.5 2c-.777 0-1.406.68-1.406 1.518v1.095M19.03 9h.938c.73 0 1.094 0 1.37-.16c.218-.125.397-.318.513-.553c.148-.299.148-.693.148-1.48c0-.788 0-1.182-.148-1.48a1.3 1.3 0 0 0-.513-.554c-.276-.16-.64-.16-1.37-.16h-.938c-.73 0-1.094 0-1.37.16a1.3 1.3 0 0 0-.513.554C17 5.625 17 6.019 17 6.807c0 .787 0 1.181.148 1.48c.116.235.295.428.513.554c.276.159.64.159 1.37.159" color="currentColor"></svg:path>`,
})
export class HugeiconsUserLock02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserLove01Icon],svg[hugeicons-user-love-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 22H6.59c-1.545 0-2.774-.752-3.877-1.803c-2.26-2.153 1.45-3.873 2.865-4.715A10.63 10.63 0 0 1 12 14.047M15.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-.485 8.887c1.073-.64 2.009-.382 2.571.028c.23.169.346.253.414.253s.183-.084.414-.253c.562-.41 1.498-.668 2.571-.028c1.408.84 1.726 3.609-1.52 5.945c-.62.445-.928.668-1.465.668s-.846-.223-1.464-.668c-3.247-2.336-2.929-5.106-1.521-5.945" color="currentColor"></svg:path>`,
})
export class HugeiconsUserLove01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserLove02Icon],svg[hugeicons-user-love-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m2.761-3.724c.805-.457 1.507-.273 1.929.02c.173.12.26.181.31.181s.137-.06.31-.18c.422-.294 1.124-.478 1.929-.02c1.056.599 1.294 2.577-1.14 4.246C19.633 7.841 19.401 8 19 8s-.634-.159-1.098-.477c-2.436-1.669-2.197-3.647-1.14-4.247" color="currentColor"></svg:path>`,
})
export class HugeiconsUserLove02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserMinus01Icon],svg[hugeicons-user-minus-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 22H6.59c-1.545 0-2.774-.752-3.877-1.803c-2.26-2.153 1.45-3.873 2.865-4.715A10.65 10.65 0 0 1 15 14.78m.5-8.28a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-.5 12h7" color="currentColor"></svg:path>`,
})
export class HugeiconsUserMinus01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserMinus02Icon],svg[hugeicons-user-minus-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m8-.5h-5" color="currentColor"></svg:path>`,
})
export class HugeiconsUserMinus02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserMultipleIcon],svg[hugeicons-user-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.616 20h.49c1.15 0 2.065-.524 2.886-1.256C24.078 16.883 19.174 15 17.5 15m-2-9.931Q15.841 5 16.205 5c1.82 0 3.295 1.343 3.295 3s-1.475 3-3.295 3q-.364 0-.705-.069m-11.019 5.18c-1.179.632-4.27 1.922-2.387 3.536c.92.789 1.944 1.353 3.232 1.353h7.348c1.288 0 2.312-.564 3.232-1.353c1.883-1.614-1.208-2.904-2.387-3.536c-2.765-1.481-6.273-1.481-9.038 0M13 7.5a4 4 0 1 1-8 0a4 4 0 0 1 8 0" color="currentColor"></svg:path>`,
})
export class HugeiconsUserMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserMultiple02Icon],svg[hugeicons-user-multiple-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m2 4a4 4 0 0 0 0-8m-4 11H7a5 5 0 0 0-5 5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2a5 5 0 0 0-5-5m6 0a5 5 0 0 1 5 5a2 2 0 0 1-2 2h-1.5" color="currentColor"></svg:path>`,
})
export class HugeiconsUserMultiple02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserMultiple03Icon],svg[hugeicons-user-multiple-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.992 11.75a4.26 4.26 0 0 1-4.25-4.25a4.26 4.26 0 0 1 4.25-4.25a4.26 4.26 0 0 1 4.25 4.25a4.26 4.26 0 0 1-4.25 4.25m0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75M15.742 20c0 .41.34.75.75.75s.75-.34.75-.75v-2.03c0-1.65-.81-3.06-2.13-3.66c-3.07-1.38-7.16-1.39-10.24 0c-1.32.6-2.13 2-2.13 3.66V20c0 .41.34.75.75.75s.75-.34.75-.75v-2.03c0-.84.33-1.88 1.25-2.3c2.69-1.21 6.32-1.21 9 0c.92.43 1.25 1.47 1.25 2.3zm4 0c0 .41.34.75.75.75l.01-.01c.41 0 .75-.34.75-.75v-2.03c0-1.66-.82-3.06-2.13-3.65c-.28-.12-.57-.24-.87-.35a.74.74 0 0 0-.96.45c-.14.39.06.82.45.96c.25.1.5.2.75.31c.92.42 1.25 1.46 1.25 2.29zm-5.47-8.94c.1.33.4.54.72.54v.01q.105 0 .21-.03c1.82-.54 3.04-2.2 3.04-4.07s-1.25-3.55-3.04-4.08c-.39-.12-.81.1-.93.5c-.12.39.1.81.5.93a2.76 2.76 0 0 1 1.96 2.64c0 1.22-.79 2.28-1.96 2.63c-.39.12-.62.53-.5.93" color="currentColor"></svg:path>`,
})
export class HugeiconsUserMultiple03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserQuestion01Icon],svg[hugeicons-user-question-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 15.846c0-1.02.895-1.846 2-1.846s2 .827 2 1.846c0 .368-.116.71-.317.998C20.085 17.7 19 18.519 19 19.538V20m-.01 2H19m-3 0H6.59c-1.545 0-2.774-.752-3.877-1.803c-2.26-2.153 1.45-3.873 2.865-4.715c2.55-1.52 5.628-1.87 8.422-1.054M16.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0" color="currentColor"></svg:path>`,
})
export class HugeiconsUserQuestion01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserQuestion02Icon],svg[hugeicons-user-question-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.981.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M15 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m3-1.462C18 4.688 18.672 4 19.5 4s1.5.689 1.5 1.538c0 .307-.087.592-.238.832c-.448.714-1.262 1.396-1.262 2.245V9m0 2h.009" color="currentColor"></svg:path>`,
})
export class HugeiconsUserQuestion02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserRemove01Icon],svg[hugeicons-user-remove-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 22H6.59c-1.545 0-2.774-.752-3.877-1.803c-2.26-2.153 1.45-3.873 2.865-4.715a10.67 10.67 0 0 1 7.922-1.187m3-7.795a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M16 22l3-3m0 0l3-3m-3 3l-3-3m3 3l3 3" color="currentColor"></svg:path>`,
})
export class HugeiconsUserRemove01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserRemove02Icon],svg[hugeicons-user-remove-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m8-2.5L19.5 7m0 0L17 9.5M19.5 7L22 9.5M19.5 7L17 4.5" color="currentColor"></svg:path>`,
})
export class HugeiconsUserRemove02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserRoadsideIcon],svg[hugeicons-user-roadside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.998 6.5h-1.996c-2.87 0-4.805 3.07-3.674 5.828a1 1 0 0 0 .918.633h.703c.237 0 .444.17.501.41l.905 3.786c.189.79.867 1.343 1.645 1.343s1.456-.554 1.645-1.343l.905-3.786a.52.52 0 0 1 .5-.41h.704a1 1 0 0 0 .918-.633c1.131-2.759-.804-5.828-3.674-5.828"></svg:path><svg:path d="M14.5 4a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M7 16.5H6m6 5v1m6-6h-1"></svg:path></svg:g>`,
})
export class HugeiconsUserRoadsideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserSearch01Icon],svg[hugeicons-user-search-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 22H6.59c-1.545 0-2.774-.752-3.877-1.803c-2.26-2.153 1.45-3.873 2.865-4.715A10.63 10.63 0 0 1 12 14.047M15.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m4.9 13.9L22 22m-.8-4.4a3.6 3.6 0 1 0-7.2 0a3.6 3.6 0 0 0 7.2 0" color="currentColor"></svg:path>`,
})
export class HugeiconsUserSearch01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserSearch02Icon],svg[hugeicons-user-search-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.257.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126c-2.949-1.728-6.69-1.728-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m6.801.8l1.2 1.2m-.6-3.3a2.7 2.7 0 1 0-5.4 0a2.7 2.7 0 0 0 5.4 0" color="currentColor"></svg:path>`,
})
export class HugeiconsUserSearch02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserSettings01Icon],svg[hugeicons-user-settings-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 14.012a10.6 10.6 0 0 0-5.922 1.47c-1.415.842-5.125 2.562-2.865 4.715C3.816 21.248 5.045 22 6.59 22H12m3.5-15.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M18 20.714V22m0-1.286a3.36 3.36 0 0 1-2.774-1.43M18 20.713a3.36 3.36 0 0 0 2.774-1.43M18 14.285c1.157 0 2.176.568 2.774 1.43M18 14.287a3.36 3.36 0 0 0-2.774 1.43M18 14.287V13m4 1.929l-1.226.788M14 20.07l1.226-.788M14 14.93l1.226.788M22 20.07l-1.226-.788m0-3.566a3.12 3.12 0 0 1 0 3.566m-5.548-3.566a3.12 3.12 0 0 0 0 3.566" color="currentColor"></svg:path>`,
})
export class HugeiconsUserSettings01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserSettings02Icon],svg[hugeicons-user-settings-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m5.5.143V8m0-.857c-.723 0-1.36-.379-1.734-.954m1.734.954c.723 0 1.36-.379 1.734-.954M19.5 2.857c.723 0 1.36.379 1.734.954M19.5 2.857c-.723 0-1.36.379-1.734.954m1.734-.954V2M22 3.286l-.766.525M17 6.714l.766-.525M17 3.286l.766.525M22 6.714l-.766-.525m0-2.378c.22.34.35.75.35 1.189s-.13.849-.35 1.189M17.766 3.81c-.22.34-.35.75-.35 1.189s.13.849.35 1.189" color="currentColor"></svg:path>`,
})
export class HugeiconsUserSettings02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserSharingIcon],svg[hugeicons-user-sharing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.783 17.111c-1.1.632-3.986 1.922-2.229 3.536C6.413 21.436 7.37 22 8.571 22h6.858c1.202 0 2.158-.564 3.017-1.353c1.757-1.614-1.128-2.904-2.229-3.536c-2.58-1.481-5.854-1.481-8.434 0M15.5 10a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path d="M2.854 16A9.9 9.9 0 0 1 2 11.965C2 6.46 6.477 2 12 2s10 4.461 10 9.965A9.9 9.9 0 0 1 21.146 16"></svg:path></svg:g>`,
})
export class HugeiconsUserSharingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserShield01Icon],svg[hugeicons-user-shield-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14.047a10.63 10.63 0 0 0-6.422 1.435c-1.415.842-5.125 2.562-2.865 4.715C3.816 21.248 5.045 22 6.59 22H13m2.5-15.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M18 14c-1.267 0-2.088.808-3.06 1.102c-.394.12-.592.18-.672.264s-.103.207-.15.454c-.5 2.638.594 5.078 3.204 6.027c.28.102.42.153.679.153c.257 0 .398-.051.678-.153c2.61-.95 3.704-3.389 3.203-6.027c-.047-.247-.07-.37-.15-.454s-.278-.144-.673-.264C20.088 14.808 19.266 14 18 14" color="currentColor"></svg:path>`,
})
export class HugeiconsUserShield01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserShield02Icon],svg[hugeicons-user-shield-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m5-4c-.95 0-1.566.606-2.295.826c-.296.09-.444.135-.504.198c-.06.064-.077.156-.112.341c-.376 1.979.445 3.808 2.403 4.52c.21.077.315.115.508.115c.194 0 .299-.038.51-.115c1.957-.712 2.777-2.541 2.401-4.52c-.035-.185-.052-.277-.112-.34c-.06-.064-.208-.109-.505-.199C20.566 3.606 19.95 3 19 3" color="currentColor"></svg:path>`,
})
export class HugeiconsUserShield02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserSquareIcon],svg[hugeicons-user-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M7.5 17c2.332-2.442 6.643-2.557 9 0m-2.005-7.5c0 1.38-1.12 2.5-2.503 2.5a2.5 2.5 0 0 1-2.504-2.5c0-1.38 1.12-2.5 2.504-2.5a2.5 2.5 0 0 1 2.503 2.5"></svg:path></svg:g>`,
})
export class HugeiconsUserSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserStar01Icon],svg[hugeicons-user-star-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 22H6.59c-1.545 0-2.774-.752-3.877-1.803c-2.26-2.153 1.45-3.873 2.865-4.715A10.66 10.66 0 0 1 13 14.188M15.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m3.191 8.078l.704 1.42a.87.87 0 0 0 .568.423l1.276.213c.816.137 1.008.734.42 1.323l-.992 1a.88.88 0 0 0-.208.73l.284 1.238c.224.98-.292 1.359-1.152.847l-1.196-.714a.86.86 0 0 0-.792 0l-1.196.714c-.856.512-1.376.129-1.152-.847l.284-1.238a.88.88 0 0 0-.208-.73l-.992-1c-.583-.589-.395-1.186.42-1.323l1.276-.213a.87.87 0 0 0 .564-.424l.704-1.42c.384-.77 1.008-.77 1.388 0" color="currentColor"></svg:path>`,
})
export class HugeiconsUserStar01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserStar02Icon],svg[hugeicons-user-star-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m5.518-3.567l.528 1.065c.072.148.264.29.426.317l.957.16c.612.104.756.551.315.993l-.744.75a.66.66 0 0 0-.156.547l.213.929c.168.735-.219 1.019-.864.635l-.897-.535a.64.64 0 0 0-.594 0l-.897.535c-.641.384-1.031.097-.863-.635l.213-.929a.66.66 0 0 0-.156-.547l-.744-.75c-.438-.442-.297-.89.315-.992l.956-.16a.65.65 0 0 0 .424-.318l.527-1.065c.288-.577.756-.577 1.041 0" color="currentColor"></svg:path>`,
})
export class HugeiconsUserStar02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserStatusIcon],svg[hugeicons-user-status-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13 21.95q-.493.05-1 .05C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10q0 .507-.05 1"></svg:path><svg:path d="M7.5 17c1.402-1.469 3.521-2.096 5.5-1.806M14.495 9.5c0 1.38-1.12 2.5-2.503 2.5a2.5 2.5 0 0 1-2.504-2.5c0-1.38 1.12-2.5 2.504-2.5a2.5 2.5 0 0 1 2.503 2.5"></svg:path><svg:circle cx="18.5" cy="18.5" r="3.5"></svg:circle></svg:g>`,
})
export class HugeiconsUserStatusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserStoryIcon],svg[hugeicons-user-story-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2c5.524 0 10 4.478 10 10s-4.476 10-10 10m-3-.5a11 11 0 0 1-3.277-1.754m0-15.492A11.3 11.3 0 0 1 9 2.5m-7 7.746a9.6 9.6 0 0 1 1.296-3.305M2 13.754a9.6 9.6 0 0 0 1.296 3.305"></svg:path><svg:path d="M8 16.5c2.073-2.198 5.905-2.301 8 0m-1.782-6.75c0 1.243-.996 2.25-2.226 2.25s-2.225-1.007-2.225-2.25s.996-2.25 2.226-2.25s2.225 1.007 2.225 2.25"></svg:path></svg:g>`,
})
export class HugeiconsUserStoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserSwitchIcon],svg[hugeicons-user-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.789 9.037c-.708.383-2.562 1.165-1.433 2.143c.552.478 1.167.82 1.94.82h4.409c.772 0 1.387-.342 1.939-.82c1.13-.978-.725-1.76-1.433-2.143c-1.659-.898-3.763-.898-5.422 0M8.75 4.273A2.26 2.26 0 0 1 6.5 6.545a2.26 2.26 0 0 1-2.25-2.272A2.26 2.26 0 0 1 6.5 2a2.26 2.26 0 0 1 2.25 2.273M4 15c0 3.317 2.683 6 6 6l-.857-1.714M20 9c0-3.317-2.683-6-6-6l.857 1.714m-.068 14.323c-.708.383-2.562 1.165-1.433 2.143c.552.478 1.167.82 1.94.82h4.409c.772 0 1.387-.342 1.939-.82c1.13-.978-.725-1.76-1.433-2.143c-1.659-.898-3.763-.898-5.422 0m4.961-4.764a2.26 2.26 0 0 1-2.25 2.273a2.26 2.26 0 0 1-2.25-2.273A2.26 2.26 0 0 1 17.5 12a2.26 2.26 0 0 1 2.25 2.273" color="currentColor"></svg:path>`,
})
export class HugeiconsUserSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserTime01Icon],svg[hugeicons-user-time-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.5 8a5 5 0 1 0-10 0a5 5 0 0 0 10 0"></svg:path><svg:path d="M2.5 20a7 7 0 0 1 10-6.326M19 18l-1-.5V16m3.5 1.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path></svg:g>`,
})
export class HugeiconsUserTime01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserTime02Icon],svg[hugeicons-user-time-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m18.5 18.5l-1.5-.6v-2.4m-4 2a4 4 0 1 0 8 0a4 4 0 0 0-8 0m-10 1v-2.03c0-1.242.56-2.46 1.69-2.975c1.378-.629 3.032-.995 4.81-.995c1.054 0 2.065.129 3 .364" color="currentColor"></svg:path>`,
})
export class HugeiconsUserTime02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserTime03Icon],svg[hugeicons-user-time-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M14 6a4 4 0 1 1-8 0a4 4 0 0 1 8 0m4.5 13l-1.5-.6V16m-4 2a4 4 0 1 0 8 0a4 4 0 0 0-8 0m-2.5 2H5a2 2 0 0 1-2-2a5 5 0 0 1 5-5h4.5" color="currentColor"></svg:path>`,
})
export class HugeiconsUserTime03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserUnlock01Icon],svg[hugeicons-user-unlock-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.531 16.36v-1.408A1.96 1.96 0 0 1 18.5 13c.489 0 .936.177 1.28.469M17.844 22h1.312c1.022 0 1.532 0 1.919-.205c.305-.162.555-.41.718-.712c.207-.384.207-.89.207-1.903s0-1.52-.207-1.903a1.74 1.74 0 0 0-.718-.712c-.387-.205-.897-.205-1.919-.205h-1.312c-1.022 0-1.532 0-1.919.205c-.305.162-.555.41-.718.712c-.207.384-.207.89-.207 1.903s0 1.52.207 1.903c.163.302.413.55.718.712c.387.205.897.205 1.919.205M12.5 22H6.59c-1.545 0-2.774-.752-3.877-1.803c-2.26-2.153 1.45-3.873 2.865-4.715a10.67 10.67 0 0 1 7.922-1.187m3-7.795a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0" color="currentColor"></svg:path>`,
})
export class HugeiconsUserUnlock01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserUnlock02Icon],svg[hugeicons-user-unlock-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m4.094-2.387V3.518c0-.838.63-1.518 1.406-1.518c.564 0 1.05.358 1.274.875M19.031 9h.938c.73 0 1.094 0 1.37-.16c.218-.125.397-.318.513-.553c.148-.299.148-.693.148-1.48c0-.788 0-1.182-.148-1.48a1.3 1.3 0 0 0-.513-.554c-.276-.16-.64-.16-1.37-.16h-.938c-.73 0-1.094 0-1.37.16a1.3 1.3 0 0 0-.513.554C17 5.625 17 6.019 17 6.807c0 .787 0 1.181.148 1.48c.116.235.295.428.513.554c.276.159.64.159 1.37.159" color="currentColor"></svg:path>`,
})
export class HugeiconsUserUnlock02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserWarning01Icon],svg[hugeicons-user-warning-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M19.506 18.936c2.046-1.866-2.921-4.38-2.921-4.38A10.3 10.3 0 0 0 12 13.5a10.3 10.3 0 0 0-4.585 1.057s-4.967 2.514-2.92 4.38c.999.911 2.112 1.563 3.512 1.563h7.986c1.4 0 2.513-.652 3.513-1.564M15.5 7a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M19 5v4m0 3v.01" color="currentColor"></svg:path>`,
})
export class HugeiconsUserWarning01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserWarning02Icon],svg[hugeicons-user-warning-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M18 20v-2.03c0-1.242-.56-2.46-1.69-2.975c-1.378-.629-3.032-.995-4.81-.995s-3.431.366-4.81.995C5.56 15.51 5 16.728 5 17.97V20M19 6v4m0 3v.01" color="currentColor"></svg:path>`,
})
export class HugeiconsUserWarning02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserWarning03Icon],svg[hugeicons-user-warning-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M15.5 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 7h-4a5 5 0 0 0-5 5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2a5 5 0 0 0-5-5m6-8v4m0 3v.01" color="currentColor"></svg:path>`,
})
export class HugeiconsUserWarning03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUv01Icon],svg[hugeicons-uv-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.04 10.368c-1.115-.574-1.28-1.03-.908-2.192c.196-.61.786-1.784.343-2.409c-.581-.819-1.936-.128-2.651.1c-1.194.383-1.633.177-2.192-.907C13.312 4.338 12.88 3 12 3s-1.312 1.338-1.632 1.96c-.559 1.084-.998 1.29-2.192.908c-.715-.229-2.07-.92-2.65-.1c-.444.624.146 1.797.342 2.408c.372 1.162.207 1.618-.908 2.192C4.338 10.688 3 11.12 3 12s1.338 1.312 1.96 1.632c1.115.575 1.28 1.03.908 2.192c-.213.667-.855 1.92-.23 2.542c.622.62 1.873-.021 2.538-.234c1.194-.382 1.633-.176 2.192.908c.32.622.752 1.96 1.632 1.96s1.312-1.338 1.632-1.96c.559-1.084.998-1.29 2.192-.908c.665.213 1.916.854 2.538.233c.625-.622-.016-1.874-.23-2.541c-.372-1.162-.207-1.617.908-2.192c.622-.32 1.96-.752 1.96-1.632s-1.338-1.312-1.96-1.632" color="currentColor"></svg:path>`,
})
export class HugeiconsUv01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUv02Icon],svg[hugeicons-uv-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v1.5m5 8.5a5 5 0 0 0-10 0M5.988 6.99l-1.06-1.061M22 13h-1.5m-17 0H2m17.07-7.071l-1.06 1.06M6.5 16v3c0 .943 0 1.414.293 1.707S7.557 21 8.5 21v0c.943 0 1.414 0 1.707-.293s.293-.764.293-1.707v-3m3 0l2 5l2-5" color="currentColor"></svg:path>`,
})
export class HugeiconsUv02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUv03Icon],svg[hugeicons-uv-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 13a5 5 0 0 0-10 0m5-9h.009m6.358 2.633l.006.006M5.637 6.64l.006-.007m15.361 6.363v.009m-18-.009v.009M6.5 16v3c0 .943 0 1.414.293 1.707S7.557 21 8.5 21v0c.943 0 1.414 0 1.707-.293s.293-.764.293-1.707v-3m3 0l2 5l2-5" color="currentColor"></svg:path>`,
})
export class HugeiconsUv03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVaccineIcon],svg[hugeicons-vaccine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 2c0 .51 0 .765.068 1.002q.056.196.155.375c.12.216.3.396.66.757l1.983 1.982c.36.36.54.54.757.661q.178.1.375.155C21.235 7 21.49 7 22 7M11.693 7l-4.928 4.928c-1.065 1.065-1.597 1.597-1.724 2.235c-.055.276-.055.56 0 .837c.127.638.66 1.17 1.724 2.235S8.362 18.832 9 18.959M11 6l6 6m-9 6.637l-1.17.835c-.47.337-.705.505-.964.525q-.15.012-.298-.025c-.251-.062-.455-.267-.864-.675c-.41-.41-.614-.614-.676-.865a1 1 0 0 1-.025-.298c.02-.259.188-.494.524-.965L5.363 16M13.5 8l5-4M16 10.5l4-5m-15.5 14L2 22m11.4-4l.58.58c.29.29.435.435.611.427c.177-.008.308-.165.57-.48L16.6 16.8M19 18a4 4 0 1 1-8 0a4 4 0 0 1 8 0" color="currentColor"></svg:path>`,
})
export class HugeiconsVaccineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVacuumCleanerIcon],svg[hugeicons-vacuum-cleaner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 21a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path><svg:path d="M10 21h1.974c.64 0 1.124-.565 1.01-1.179l-.914-4.9C11.538 12.07 8.994 10 6.024 10C5.458 10 5 10.447 5 10.999V14.5"></svg:path><svg:path d="M19.5 21L12.858 6.934A6.87 6.87 0 0 0 6.649 3A4.65 4.65 0 0 0 2 7.65v.188A4.39 4.39 0 0 0 5 12m17 9h-5.5"></svg:path></svg:g>`,
})
export class HugeiconsVacuumCleanerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsValidationIcon],svg[hugeicons-validation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m17.603 8.583l1.212-.808c.641-.427 1.419-.634 2.056-1.067q.199-.135.375-.31a2.576 2.576 0 1 0-3.953-3.269c-.433.637-.64 1.415-1.067 2.056l-.808 1.212m2.185 2.186l-2.185-2.186m2.185 2.186l1.698 2.669a1.98 1.98 0 0 1-.27 2.46a.99.99 0 0 1-1.398 0L10.29 6.369a.99.99 0 0 1 0-1.399a1.98 1.98 0 0 1 2.46-.27l2.668 1.698M16 16.894A7.148 7.148 0 1 1 7.106 8"></svg:path><svg:path d="M7 15.667s.625 0 1.25 1.333c0 0 1.985-3.333 3.75-4"></svg:path></svg:g>`,
})
export class HugeiconsValidationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsValidationApprovalIcon],svg[hugeicons-validation-approval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m18 18.5l.278-1.386c.146-.733.538-1.41.678-2.144q.045-.229.044-.47a2.5 2.5 0 1 0-4.956.47c.14.735.532 1.41.679 2.144L15 18.5m3 0h-3m3 0l2.497.666A1.92 1.92 0 0 1 22 21.04c0 .53-.43.96-.96.96h-9.08a.96.96 0 0 1-.96-.96c0-.9.625-1.679 1.503-1.874L15 18.5M17 9V8c0-2.828 0-4.243-.879-5.121C15.243 2 13.828 2 11 2H8c-2.828 0-4.243 0-5.121.879C2 3.757 2 5.172 2 8v8c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22"></svg:path><svg:path d="M7 8.667s.625 0 1.25 1.333c0 0 1.985-3.333 3.75-4m-6 8h4m-4 3h4"></svg:path></svg:g>`,
})
export class HugeiconsValidationApprovalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVanIcon],svg[hugeicons-van-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m12 6l.954 3.86A1.5 1.5 0 0 0 14.41 11H20"></svg:path><svg:path d="M2 6h11.069c1.549 0 2.323 0 2.98.346c.656.346 1.094.985 1.97 2.262c.613.896 1.258 1.546 2.164 2.125c.912.582 1.346.867 1.586 1.324c.231.437.231.955.231 1.992c0 1.367 0 2.05-.413 2.484l-.054.054C21.1 17 20.416 17 19.05 17M5 17c-.32 0-.615 0-.77-.033c-.156-.034-.302-.1-.595-.231L2 16c0-3.194.479-5.038 1.106-6.55c.41-.992.616-1.488.53-1.93C3.553 7.08 2.5 6 2.5 6M9 17h6"></svg:path><svg:circle cx="17" cy="17" r="2"></svg:circle><svg:circle cx="7" cy="17" r="2"></svg:circle></svg:g>`,
})
export class HugeiconsVanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVariableIcon],svg[hugeicons-variable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m0-3h19M7 6h.009M11 6h.009"></svg:path><svg:path d="M17.11 12c.563.863.89 1.893.89 3a5.47 5.47 0 0 1-.89 3M6.89 12A5.47 5.47 0 0 0 6 15c0 1.107.327 2.137.89 3M10 13l4 4m0-4l-4 4"></svg:path></svg:g>`,
})
export class HugeiconsVariableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVegetarianFoodIcon],svg[hugeicons-vegetarian-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 13.23s-.91-.46-1.818-.46c-1.364 0-3.182 1.845-3.182 4.615C12 20.154 14.49 22 17 22s5-1.846 5-4.615s-1.818-4.616-3.182-4.616c-.909 0-1.818.462-1.818.462m0 0c0-1.384.91-3.23 2.727-3.23M10.655 5c.896 0 1.623-.672 1.623-1.5S11.55 2 10.655 2h-5.41c-.896 0-1.622.672-1.622 1.5S4.349 5 5.246 5m5.923-.077c.956 1.766 1.74 3.36 2.22 5.077q.059.21.111.423M10.428 22h-4.1C2.747 22 2 21.31 2 18v-4.223c0-3.4 1.098-5.891 2.705-8.862" color="currentColor"></svg:path>`,
})
export class HugeiconsVegetarianFoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVersusIcon],svg[hugeicons-versus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.252 12.748a.76.76 0 0 1-.67-.41l-4-8a.745.745 0 0 1 .34-1.01c.37-.18.82-.03 1.01.34l3.33 6.66l3.33-6.66c.19-.37.64-.52 1.01-.34c.37.19.52.64.34 1.01l-4 8a.76.76 0 0 1-.67.41zm-1 8h-.005a.74.74 0 0 0 .635-.35l10-16a.747.747 0 1 0-1.27-.79l-10 16c-.22.35-.11.81.24 1.03q.19.107.395.11h-.005zm9 0h3c.96 0 1.75-.79 1.75-1.75v-2c0-.96-.79-1.75-1.75-1.75h-3c-.14 0-.25-.11-.25-.25v-2c0-.14.11-.25.25-.25h3c.14 0 .25.11.25.25v.5c0 .41.34.75.75.75s.75-.34.75-.75v-.5c0-.96-.79-1.75-1.75-1.75h-3c-.96 0-1.75.79-1.75 1.75v2c0 .96.79 1.75 1.75 1.75h3c.14 0 .25.11.25.25v2c0 .14-.11.25-.25.25h-3c-.14 0-.25-.11-.25-.25v-.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.5c0 .96.79 1.75 1.75 1.75" color="currentColor"></svg:path>`,
})
export class HugeiconsVersusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVerticalResizeIcon],svg[hugeicons-vertical-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 10h16M4 14h16m-8-4V6m-.05-4c1.035-.03 3.47 4.008 2.987 4.389c-.548.431-2.177-.6-2.695-.832c-.312-.14-.448-.136-.76.023c-1.406.717-2.11 1.075-2.414.856l-.003-.002C8.58 6.08 10.939 2.03 11.95 2m.1 20c-1.035.03-3.47-4.008-2.987-4.389c.548-.431 2.177.6 2.695.832c.312.14.448.136.76-.023c1.406-.717 2.11-1.075 2.414-.856l.003.002c.485.354-1.874 4.404-2.885 4.434M12 18v-4" color="currentColor"></svg:path>`,
})
export class HugeiconsVerticalResizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVerticalScrollPointIcon],svg[hugeicons-vertical-scroll-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0M8 7s2.946-4 4-4s4 4 4 4m0 10s-2.946 4-4 4s-4-4-4-4" color="currentColor"></svg:path>`,
})
export class HugeiconsVerticalScrollPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVestIcon],svg[hugeicons-vest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.51 10.83c2.392-1.644 2.593-4.277 1.866-6.047c-.3-.731-.45-1.097-.37-1.289C6.295 2.81 8.368 2.29 9 2l4.172 9.726c.597 1.46.895 2.189.815 2.938s-.525 1.402-1.416 2.71l-2.44 3.581c-.785 1.15-1.211 1.265-2.501.76l-2.324-.91C4.236 20.388 4 20.077 4 18.92v-7.182c0-.554-.014-.545.51-.906M11.009 14H11"></svg:path><svg:path d="M12 8.994L15 2c.632.29 2.705.81 2.994 1.495c.08.19-.07.557-.37 1.288c-.727 1.77-.526 4.403 1.866 6.048c.524.36.51.352.51.906v7.182c0 1.157-.235 1.468-1.306 1.887l-2.324.909c-1.29.505-1.717.39-2.5-.76L12 18.212M9 2h6"></svg:path></svg:g>`,
})
export class HugeiconsVestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsViberIcon],svg[hugeicons-viber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 10.5c0 6.5-3 8-9 8q-.515 0-1-.015l-2.896 2.91a.353.353 0 0 1-.604-.248v-3.121c-3-.834-4.5-2.93-4.5-7.526c0-6.5 3-8 9-8s9 1.5 9 8"></svg:path><svg:path d="M12.774 13.862c.771.42 1.466.69 1.915.843c.324.11.675.013.917-.229l.644-.644l-1.735-1.157a.49.49 0 0 0-.615.061zm0 0a10.4 10.4 0 0 1-2.383-1.753a10.4 10.4 0 0 1-1.753-2.383m0 0c-.42-.771-.69-1.466-.843-1.915a.89.89 0 0 1 .229-.917l.644-.644l1.157 1.735a.49.49 0 0 1-.061.615zm-.315-2.442l.69 1.379m6.203 5.514l-1.378-.69M14 9.5a1 1 0 0 0-1-1m2.5 1A2.5 2.5 0 0 0 13 7m4 2.5a4 4 0 0 0-4-4"></svg:path></svg:g>`,
})
export class HugeiconsViberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVictoryFinger01Icon],svg[hugeicons-victory-finger-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.518 13l-.553-2.957m0 0L6.85 4.076a1.752 1.752 0 0 1 3.44-.667l1.213 6.072l1.22-6.073a1.75 1.75 0 0 1 2.065-1.375c.938.19 1.483 1.105 1.306 2.048L15.068 9.83m-7.103.213c-1.893 1.775-3.053 2.817-3.291 3.753c-.265 1.044-.484 2.19 1.404 4.486c.622.756 1.146 1.28 1.267 1.48c.212.349.659.61.659 2.24m7.08-12.153c2.262.642 3.733 1.861 4.154 2.73c.47.97.337 2.427-.648 4.827c-.388.947-.864 1.486-.943 1.706c-.183.514-.462 1.067-.333 2.866" color="currentColor"></svg:path>`,
})
export class HugeiconsVictoryFinger01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVictoryFinger02Icon],svg[hugeicons-victory-finger-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.334 10.5l-1.148 1.35c-.935 1.098-1.403 1.648-1.58 2.297c-.076.28-.112.57-.105.862c.015.672.336 1.32.978 2.616c.799 1.613 1.199 2.42 1.844 2.958c.28.234.59.427.922.575c.766.342 1.66.342 3.446.342h1.459c1.245 0 1.868 0 2.413-.16a3.97 3.97 0 0 0 2.145-1.561c.324-.47.52-1.067.914-2.26l.409-1.237c.242-.732.363-1.098.414-1.406c.325-1.957-.82-3.859-2.692-4.468c-.294-.096-.672-.156-1.427-.276M14.98 11.5l1.4-6.877c.222-1.096-.607-2.123-1.716-2.123c-.782 0-1.47.523-1.684 1.282L11.362 9.5L9.748 3.8A1.78 1.78 0 0 0 8.04 2.5c-1.108 0-1.945 1.013-1.747 2.113l1.6 8.887" color="currentColor"></svg:path>`,
})
export class HugeiconsVictoryFinger02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVictoryFinger03Icon],svg[hugeicons-victory-finger-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6.978 13.52l-.595-3.45m0 0l-1.06-6.145c-.152-.983.379-1.687 1.189-1.886c.82-.2 1.67.444 1.783 1.15l1.695 6.88l1.647-6.705c.164-.992 1.108-1.434 1.928-1.233c.81.198 1.244.81 1.092 1.794l-1.177 6.632m-7.097-.487c-.685.683-1.788 1.91-2.134 2.686a3.4 3.4 0 0 0-.201.595c-.23.973.329 2.077 1.904 4.151c.63.74 1.74 2.099 1.806 2.32c.007.023.312.394.233 2.176M13.873 8.34c.645-.467 2.374-.635 3.049 1.132c.024.129.062.23.075.358m0 0c.059.577 0 1.13 0 1.199m0-1.2c.384-.75 2.627.17 2.918 2.894c.252 1.373-.106 3.242-.322 3.902c-.322.98-1.212 2.502-1.412 2.73c-.832 1.127-.746 2.093-.746 2.627" color="currentColor"></svg:path>`,
})
export class HugeiconsVictoryFinger03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVideo01Icon],svg[hugeicons-video-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 11c0-3.3 0-4.95 1.025-5.975S5.7 4 9 4h1c3.3 0 4.95 0 5.975 1.025S17 7.7 17 11v2c0 3.3 0 4.95-1.025 5.975S13.3 20 10 20H9c-3.3 0-4.95 0-5.975-1.025S2 16.3 2 13zm15-2.094l.126-.104c2.116-1.746 3.174-2.619 4.024-2.197c.85.421.85 1.819.85 4.613v1.564c0 2.794 0 4.192-.85 4.613s-1.908-.451-4.024-2.197L17 15.094"></svg:path><svg:circle cx="11.5" cy="9.5" r="1.5"></svg:circle></svg:g>`,
})
export class HugeiconsVideo01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVideo02Icon],svg[hugeicons-video-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 8h2M2 11c0-3.3 0-4.95 1.025-5.975S5.7 4 9 4h1c3.3 0 4.95 0 5.975 1.025S17 7.7 17 11v2c0 3.3 0 4.95-1.025 5.975S13.3 20 10 20H9c-3.3 0-4.95 0-5.975-1.025S2 16.3 2 13zm15-2.094l.126-.104c2.116-1.746 3.174-2.619 4.024-2.197c.85.421.85 1.819.85 4.613v1.564c0 2.794 0 4.192-.85 4.613s-1.908-.451-4.024-2.197L17 15.094" color="currentColor"></svg:path>`,
})
export class HugeiconsVideo02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVideoAiIcon],svg[hugeicons-video-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.974 15.022a.026.026 0 0 1 .052 0a3.79 3.79 0 0 0 2.953 2.952c.028.006.028.046 0 .052a3.79 3.79 0 0 0-2.953 2.953c-.006.028-.046.028-.052 0a3.79 3.79 0 0 0-2.953-2.953c-.028-.006-.028-.046 0-.052a3.79 3.79 0 0 0 2.953-2.953m-4.327-2.348c.741-.52 1.112-.78 1.26-1.157a1.5 1.5 0 0 0 0-1.032c-.148-.377-.519-.637-1.26-1.157a28 28 0 0 0-1.53-1.01a27 27 0 0 0-1.324-.74c-.788-.414-1.182-.621-1.563-.57a1.32 1.32 0 0 0-.842.513c-.234.323-.264.787-.322 1.715C9.027 9.845 9 10.466 9 11s.027 1.155.066 1.765c.058.928.088 1.392.322 1.715c.195.268.525.469.842.512c.381.052.775-.155 1.563-.57c.466-.245.93-.5 1.324-.739a28 28 0 0 0 1.53-1.01"></svg:path><svg:path d="M21.872 14.836C22 13.923 22 12.728 22 11c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C18.2 3 16.8 3 14 3h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 5.73C2 6.8 2 8.2 2 11s0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C5.8 19 7.2 19 10 19h3.426"></svg:path></svg:g>`,
})
export class HugeiconsVideoAiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVideoCameraAiIcon],svg[hugeicons-video-camera-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 15.5v-2l2.6-3.467a1.333 1.333 0 0 1 2.4.8v7.334a1.333 1.333 0 0 1-2.4.8zm-6.53-9.475c.006-.033.054-.033.06 0a4.42 4.42 0 0 0 3.445 3.444c.033.007.033.055 0 .062a4.42 4.42 0 0 0-3.444 3.444c-.007.033-.055.033-.062 0A4.42 4.42 0 0 0 7.025 9.53c-.033-.007-.033-.055 0-.062a4.42 4.42 0 0 0 3.444-3.444"></svg:path><svg:path d="M5.552 7c-.903.117-1.558.344-2.09.78a4 4 0 0 0-.554.555C2 9.44 2 11.085 2 14.372s0 5.06.908 6.166q.25.304.554.554C4.57 22 6.212 22 9.5 22c3.287 0 4.931 0 6.038-.908q.304-.25.554-.554C17 19.43 17 17.788 17 14.5c0-2.182 0-3.64-.265-4.697"></svg:path><svg:path fill="currentColor" d="M15.12 2.31c.085-.413.675-.413.76 0a2.32 2.32 0 0 0 1.81 1.81c.413.085.413.675 0 .76a2.32 2.32 0 0 0-1.81 1.81c-.085.413-.675.413-.76 0a2.32 2.32 0 0 0-1.81-1.81c-.413-.085-.413-.675 0-.76a2.32 2.32 0 0 0 1.81-1.81"></svg:path></svg:g>`,
})
export class HugeiconsVideoCameraAiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVideoConsoleIcon],svg[hugeicons-video-console-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14zm7 8l-1.5-1.5m0 0L7 15m1.5 1.5L7 18m1.5-1.5L10 15m6.991 0h.01M15 18h.009M3 12h18" color="currentColor"></svg:path>`,
})
export class HugeiconsVideoConsoleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVideoOffIcon],svg[hugeicons-video-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.002 2l19.975 20m-5.125-5.132c-.13.938-.386 1.599-.892 2.107C14.936 20 13.288 20 9.992 20h-.999c-3.295 0-4.943 0-5.967-1.026C2.002 17.95 2.002 16.3 2.002 13v-2c0-3.3 0-4.95 1.024-5.975c.342-.343.755-.571 1.275-.723M8.236 4h1.755c3.296 0 4.944 0 5.968 1.025C16.982 6.05 16.982 7.7 16.982 11v1.757m0-3.526l2.32-1.702c1.47-.988 2.147-.357 2.366.12c.451 1.28.309 3.745.309 6.893c-.107 2.013-.382 2.23-.663 2.452l-.003.002" color="currentColor"></svg:path>`,
})
export class HugeiconsVideoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVideoReplayIcon],svg[hugeicons-video-replay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.7 21.335c-1.172.165-2.7.165-4.75.165h-1.9c-4.03 0-6.046 0-7.298-1.252S2.5 16.98 2.5 12.95v-1.9c0-4.03 0-6.046 1.252-7.298S7.02 2.5 11.05 2.5h1.9c4.03 0 6.046 0 7.298 1.252S21.5 7.019 21.5 11.05v1.9c0 1.208 0 2.235-.034 3.115c-.027.705-.04 1.057-.307 1.19c-.267.13-.566-.08-1.163-.503L18.65 15.8"></svg:path><svg:path d="M14.945 12.395c-.176.627-1.012 1.07-2.682 1.955c-1.615.856-2.422 1.285-3.073 1.113a1.66 1.66 0 0 1-.712-.393C8 14.62 8 13.746 8 12s0-2.62.478-3.07c.198-.186.443-.321.712-.392c.65-.173 1.458.256 3.073 1.112c1.67.886 2.506 1.329 2.682 1.955c.073.259.073.531 0 .79"></svg:path></svg:g>`,
})
export class HugeiconsVideoReplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsViewIcon],svg[hugeicons-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.544 11.045c.304.426.456.64.456.955c0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045"></svg:path><svg:path d="M15 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></svg:path></svg:g>`,
})
export class HugeiconsViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsViewOffIcon],svg[hugeicons-view-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 8s-4 6-10 6S2 8 2 8m13 5.5l1.5 2.5m3.5-5l2 2M2 13l2-2m5 2.5L7.5 16" color="currentColor"></svg:path>`,
})
export class HugeiconsViewOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsViewOffSlashIcon],svg[hugeicons-view-off-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.439 15.439a19.5 19.5 0 0 0 2.105-2.484c.304-.426.456-.64.456-.955c0-.316-.152-.529-.456-.955C20.178 9.129 16.689 5 12 5c-.908 0-1.77.155-2.582.418m-2.67 1.33c-2.017 1.36-3.506 3.195-4.292 4.297c-.304.426-.456.64-.456.955c0 .316.152.529.456.955C3.822 14.871 7.311 19 12 19c1.99 0 3.765-.744 5.253-1.747"></svg:path><svg:path d="M9.858 10A2.929 2.929 0 1 0 14 14.142M3 3l18 18"></svg:path></svg:g>`,
})
export class HugeiconsViewOffSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVimeoIcon],svg[hugeicons-vimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.346 4.654c-2.309-1.833-5.885.99-6.75 2.473c1.301.305 3.904.416 1.404 4.9c-1 1.662-3.3 3.788-4.5-.996C10 5.051 10 .567 2 7.543c.476.948 1.766 1.045 2.741.627c.887-.38 1.802-.229 2.259 1.367c1 3.487 1.5 10.45 5 10.45c3.634.494 12.461-12.86 9.346-15.333" color="currentColor"></svg:path>`,
})
export class HugeiconsVimeoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVineIcon],svg[hugeicons-vine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.043 4.415c-.33 4.584 1.224 12.713 5.93 16.672c1.433 1.206 2.928 1.23 4.354-.001c2.346-2.026 3.977-5.146 4.894-6.792c0 0 1.164.393 2.131.49c.579.059 1.11-3.045 0-3.052c-2.936-.02-6.214-.314-6.674-3.585c-.505-3.586 3.534-3.074 3.029.049c1.01.975 3.03.975 3.03.975C20.745 6.098 18.726 2 15.696 2c-4.04 0-5.554 2.952-5.554 5.122c0 5.635 4.544 6.66 4.544 6.66c-.737 1.87-2.014 3.208-2.846 3.983c-.57.532-.815.54-1.334-.05c-3.346-3.8-4.292-9.724-3.954-13.197c.075-.777-3.444-1.03-3.51-.103" color="currentColor"></svg:path>`,
})
export class HugeiconsVineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVineSquareIcon],svg[hugeicons-vine-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 7.94c0 2.194.923 7.083 3.387 9.636a1.34 1.34 0 0 0 1.931.028c1.074-1.046 2.217-2.716 2.995-4.441m0 0c-3.18-.854-3.284-3.274-2.813-4.608c1.158-2.766 3.763-1.455 3.763.921c0 .438-.058.906-.165 1.39m-.785 2.297c.726.194 1.611.307 2.687.307"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsVineSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVintageClockIcon],svg[hugeicons-vintage-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 6c.821 0 1.42-.472 1.739-1.046c.302-.544.453-.816.57-.885C6.428 4 6.619 4 7 4h.571c.281 0 .422 0 .514-.038c.092-.039.36-.308.894-.846C9.714 2.376 11.254 2 12 2s2.286.375 3.02 1.116c.535.538.803.807.895.846s.233.038.514.038H17c.382 0 .573 0 .69.07c.118.068.269.34.571.884C18.58 5.528 19.18 6 20 6m0 12c-.821 0-1.42.472-1.739 1.046c-.302.544-.453.816-.57.885c-.119.069-.31.069-.691.069h-.571c-.281 0-.422 0-.514.038c-.092.039-.36.308-.894.846C14.286 21.624 12.746 22 12 22s-2.286-.375-3.02-1.116c-.535-.538-.803-.807-.895-.846S7.852 20 7.571 20H7c-.382 0-.573 0-.69-.07c-.118-.068-.269-.34-.571-.884C5.42 18.472 4.82 18 4 18"></svg:path><svg:path d="M16.004 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0m3-4v12m-14-12v12m7-8l1-1m-1 5v4m-1 0h2"></svg:path></svg:g>`,
})
export class HugeiconsVintageClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVirtualRealityVr01Icon],svg[hugeicons-virtual-reality-vr-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 9H7c-1.87 0-2.804 0-3.5.442c-.456.29-.835.706-1.098 1.208C2 11.416 2 12.444 2 14.5s0 3.084.402 3.85c.263.502.642.918 1.098 1.208C4.196 20 5.13 20 7 20c.613 0 .92 0 1.21-.047a3.85 3.85 0 0 0 2.083-1.073c.219-.215.415-.474.808-.993l.334-.44c.198-.263.298-.394.42-.446a.46.46 0 0 1 .315-.015c.125.039.235.16.454.4l.962 1.058c.238.263.357.394.482.51c.638.596 1.43.957 2.264 1.031c.162.015.33.015.668.015c1.87 0 2.804 0 3.5-.442c.456-.29.835-.706 1.098-1.208c.402-.766.402-1.794.402-3.85s0-3.084-.402-3.85A3.17 3.17 0 0 0 20.5 9.442C19.804 9 18.87 9 17 9m-1 4h2"></svg:path><svg:path d="M22 15v-2.548c0-.98 0-1.47-.077-1.943a6 6 0 0 0-.157-.69c-.133-.455-.339-.875-.751-1.715c-.827-1.685-1.24-2.527-1.843-3.093a3.9 3.9 0 0 0-.97-.67C17.495 4 16.692 4 15.084 4H8.916c-1.607 0-2.41 0-3.117.34a3.9 3.9 0 0 0-.97.671c-.602.566-1.016 1.408-1.843 3.093c-.412.84-.618 1.26-.751 1.715a6 6 0 0 0-.157.69C2 10.982 2 11.472 2 12.452V15"></svg:path></svg:g>`,
})
export class HugeiconsVirtualRealityVr01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVirtualRealityVr02Icon],svg[hugeicons-virtual-reality-vr-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13 3h-2C6.757 3 4.636 3 3.318 4.318S2 7.758 2 12s0 6.364 1.318 7.682S6.758 21 11 21h2c4.243 0 6.364 0 7.682-1.318S22 16.242 22 12s0-6.364-1.318-7.682S17.242 3 13 3"></svg:path><svg:path d="m11 10l-1.755 3.912C8.92 14.637 8.758 15 8.5 15s-.42-.363-.745-1.088L6 10m8 5v-2m0 0v-2c0-.471 0-.707.146-.854C14.293 10 14.53 10 15 10h1.5a1.5 1.5 0 0 1 0 3M14 13h2.5m0 0l1 2"></svg:path></svg:g>`,
})
export class HugeiconsVirtualRealityVr02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVisionIcon],svg[hugeicons-vision-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 8.187c.104-2.1.415-3.41 1.347-4.34c.93-.932 2.24-1.243 4.34-1.347M21.5 8.187c-.104-2.1-.415-3.41-1.347-4.34c-.93-.932-2.24-1.243-4.34-1.347m0 19c2.1-.104 3.41-.415 4.34-1.347c.932-.93 1.243-2.24 1.347-4.34M8.187 21.5c-2.1-.104-3.41-.415-4.34-1.347c-.932-.93-1.243-2.24-1.347-4.34m17.135-4.495c.243.304.365.457.365.682s-.122.378-.365.682C18.542 14.05 15.751 17 12 17s-6.542-2.95-7.635-4.318C4.122 12.378 4 12.225 4 12s.122-.378.365-.682C5.458 9.95 8.249 7 12 7s6.542 2.95 7.635 4.318"></svg:path><svg:path d="M14 12a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path></svg:g>`,
})
export class HugeiconsVisionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVisualStudioCodeIcon],svg[hugeicons-visual-studio-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M17.016 16.5v4.782c0 .32-.21.592-.499.684m.499-5.466L10.877 12m6.139 4.5v-9m-9.27 2.205L4.252 7.03a.995.995 0 0 0-1.31.088l-.649.652c-.398.4-.388 1.05.023 1.436L5.283 12m2.464-2.295L10.877 12m-3.13-2.295l8.066-7.513a.72.72 0 0 1 .704-.158M10.877 12l6.139-4.5m0 0V2.718c0-.32-.21-.592-.499-.684m-8.77 12.26L4.25 16.97a.995.995 0 0 1-1.31-.088l-.649-.652c-.398-.4-.388-1.05.023-1.436L5.283 12m2.464 2.295l8.066 7.513a.71.71 0 0 0 .704.158m-8.77-7.671L5.283 12m11.234-9.966l4.894 2.201a1 1 0 0 1 .59.913v13.705a1 1 0 0 1-.59.912l-4.894 2.201" color="currentColor"></svg:path>`,
})
export class HugeiconsVisualStudioCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVkIcon],svg[hugeicons-vk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10.749V7.053c0-.833-.151-1-.98-1L10.67 6c-.732 0-1.098 0-1.246.237s.016.562.343 1.21c.182.36.28.621.28 1.025v2.66c0 .84 0 1.261-.32 1.386c-.32.124-.585-.158-1.117-.722c-1.3-1.384-1.978-3.112-2.423-4.996c-.092-.39-.138-.585-.276-.693S5.576 6 5.184 6h-2.2c-.482 0-.723 0-.874.17c-.15.171-.121.389-.063.824c.528 3.927 3.981 10.366 10.36 10.98c1.13.108 1.593-.197 1.593-1.435c0-.702-.015-1.836.868-1.985c.463-.078.774.087 1.291.52c.896.752 1.366 1.67 1.693 2.367c.217.462.378.559.888.559h2.074c1.048 0 1.333-.256.866-1.24a9 9 0 0 0-2.196-2.893c-.636-.547-.953-.82-.97-1.022c-.019-.201.214-.486.68-1.056c.9-1.102 2.126-2.831 2.698-4.666c.284-.91.017-1.123-.904-1.123h-1.863c-.903 0-.902-.031-1.115.993c-.346 1.661-1.478 3.258-2.542 4.345c-.505.516-.81.827-1.125.7S14 11.524 14 10.748" color="currentColor"></svg:path>`,
})
export class HugeiconsVkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVkSquareIcon],svg[hugeicons-vk-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M11.5 8h1v4.5M6.5 8c0 5.2 4 7.5 6 8v-3.5m0 0a5.8 5.8 0 0 0 1.648-.5m0 0c1.32-.613 2.81-1.832 3.352-4m-3.352 4c1.117.333 3.352 1.6 3.352 4"></svg:path></svg:g>`,
})
export class HugeiconsVkSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVoiceIcon],svg[hugeicons-voice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12M12 8v8m-3-6v4m-3-3v2m9-3v4m3-3v2" color="currentColor"></svg:path>`,
})
export class HugeiconsVoiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVoiceIdIcon],svg[hugeicons-voice-id-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 8.187c.104-2.1.415-3.41 1.347-4.34c.93-.932 2.24-1.243 4.34-1.347M21.5 8.187c-.104-2.1-.415-3.41-1.347-4.34c-.93-.932-2.24-1.243-4.34-1.347m0 19c2.1-.104 3.41-.415 4.34-1.347c.932-.93 1.243-2.24 1.347-4.34M8.187 21.5c-2.1-.104-3.41-.415-4.34-1.347c-.932-.93-1.243-2.24-1.347-4.34M12 7v10M8 9v6m8 0V9" color="currentColor"></svg:path>`,
})
export class HugeiconsVoiceIdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVolleyballIcon],svg[hugeicons-volleyball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M8.12 3c-.445 1.619-.356 5.586 3.568 8.5m0 0c4.942-1.33 8.437-.85 10.312.85m-10.312-.85C12.252 16.188 8.875 19.15 7 20"></svg:path><svg:path d="M9 8c2.087-1.886 7.326-2.872 11.5-.986M16.889 11c.589 2.895-1.175 8.188-4.889 11m-2-5c-2.625-1.26-5.842-6.04-6-11"></svg:path></svg:g>`,
})
export class HugeiconsVolleyballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVolumeHighIcon],svg[hugeicons-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 14.814V9.186c0-3.145 0-4.717-.925-5.109c-.926-.391-2.015.72-4.193 2.945c-1.128 1.152-1.771 1.407-3.376 1.407c-1.403 0-2.105 0-2.61.344C1.85 9.487 2.01 10.882 2.01 12s-.159 2.513.888 3.227c.504.344 1.206.344 2.609.344c1.605 0 2.248.255 3.376 1.407c2.178 2.224 3.267 3.336 4.193 2.945c.925-.392.925-1.964.925-5.11M17 9c.625.82 1 1.863 1 3s-.375 2.18-1 3m3-8c1.25 1.366 2 3.106 2 5s-.75 3.634-2 5" color="currentColor"></svg:path>`,
})
export class HugeiconsVolumeHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVolumeLowIcon],svg[hugeicons-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9c.625.82 1 1.863 1 3s-.375 2.18-1 3m-3-.186V9.186c0-3.145 0-4.717-.925-5.109c-.926-.391-2.015.72-4.193 2.945c-1.128 1.152-1.771 1.407-3.376 1.407c-1.403 0-2.105 0-2.61.344C3.85 9.487 4.01 10.882 4.01 12s-.159 2.513.888 3.227c.504.344 1.206.344 2.609.344c1.605 0 2.248.255 3.376 1.407c2.178 2.224 3.267 3.336 4.193 2.945c.925-.392.925-1.964.925-5.11" color="currentColor"></svg:path>`,
})
export class HugeiconsVolumeLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVolumeMinusIcon],svg[hugeicons-volume-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 14.814V9.186c0-3.145 0-4.717-.925-5.109c-.926-.391-2.015.72-4.193 2.945c-1.128 1.152-1.771 1.407-3.376 1.407c-1.403 0-2.105 0-2.61.344C1.85 9.487 2.01 10.882 2.01 12s-.159 2.513.888 3.227c.504.344 1.206.344 2.609.344c1.605 0 2.248.255 3.376 1.407c2.178 2.224 3.267 3.336 4.193 2.945c.925-.392.925-1.964.925-5.11M17 12h5" color="currentColor"></svg:path>`,
})
export class HugeiconsVolumeMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVolumeMute01Icon],svg[hugeicons-volume-mute-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 14.814V9.186c0-3.145 0-4.717-.926-5.109c-.926-.391-2.016.72-4.195 2.945c-1.13 1.152-1.773 1.407-3.379 1.407c-1.112 0-2.473-.148-3.163.907C6 9.85 6 10.566 6 12c0 1.433 0 2.15.337 2.664c.69 1.055 2.05.907 3.163.907c1.606 0 2.25.255 3.379 1.407c2.18 2.224 3.27 3.336 4.195 2.945c.926-.392.926-1.964.926-5.11" color="currentColor"></svg:path>`,
})
export class HugeiconsVolumeMute01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVolumeMute02Icon],svg[hugeicons-volume-mute-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 14.814V9.186c0-3.145 0-4.717-.925-5.109c-.926-.391-2.015.72-4.193 2.945c-1.128 1.152-1.771 1.407-3.376 1.407c-1.403 0-2.105 0-2.61.344C1.85 9.487 2.01 10.882 2.01 12s-.159 2.513.888 3.227c.504.344 1.206.344 2.609.344c1.605 0 2.248.255 3.376 1.407c2.178 2.224 3.267 3.336 4.193 2.945c.925-.392.925-1.964.925-5.11M18 10l4 4m-4 0l4-4" color="currentColor"></svg:path>`,
})
export class HugeiconsVolumeMute02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVolumeOffIcon],svg[hugeicons-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 22L2 2m15 8c.63.767 1 1.705 1 2.72c0 .444-.071.873-.204 1.28M20 8c1.25 1.23 2 2.795 2 4.5c0 1.416-.517 2.737-1.41 3.848M14 14c0 3.145 0 5.531-.926 5.923c-.926.391-2.016-.72-4.195-2.945c-1.13-1.152-1.773-1.407-3.379-1.407c-1.112 0-2.473.148-3.163-.907C2 14.15 2 13.434 2 12c0-1.433 0-2.15.337-2.664c.69-1.055 2.05-.907 3.163-.907c1.107 0 1.857.01 2.46-.469M14 9.5c0-3.145.026-5.031-.9-5.423c-.77-.326-1.568.39-3.1 1.923" color="currentColor"></svg:path>`,
})
export class HugeiconsVolumeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVolumeUpIcon],svg[hugeicons-volume-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 14.814V9.186c0-3.145 0-4.717-.925-5.109c-.926-.391-2.015.72-4.193 2.945c-1.128 1.152-1.771 1.407-3.376 1.407c-1.403 0-2.105 0-2.61.344C1.85 9.487 2.01 10.882 2.01 12s-.159 2.513.888 3.227c.504.344 1.206.344 2.609.344c1.605 0 2.248.255 3.376 1.407c2.178 2.224 3.267 3.336 4.193 2.945c.925-.392.925-1.964.925-5.11M17 12h5m-2.5 2.5v-5" color="currentColor"></svg:path>`,
})
export class HugeiconsVolumeUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVomitingIcon],svg[hugeicons-vomiting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.4 18.5A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.96 9.96 0 0 1-2.4 6.5"></svg:path><svg:path d="M7.5 8c.476.317 1.341.71 1.45 1.341a1 1 0 0 1 .014.111c.025.429-.323.802-1.02 1.548M16.5 8c-.476.317-1.341.71-1.45 1.341a1 1 0 0 0-.014.111c-.025.429.323.802 1.02 1.548M7 19c.473-2.282 2.532-4 5-4s4.527 1.718 5 4m-5 0v2"></svg:path><svg:path d="M8.465 16.5c0 1.988.393 4.233-1.465 5.5m8.534-5.5c0 1.98-.39 4.234 1.466 5.5"></svg:path></svg:g>`,
})
export class HugeiconsVomitingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVoucherIcon],svg[hugeicons-voucher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.563 5.558L7.4 8m0 0l3.6 3M7.4 8l-2.895 2.387M7.4 8L11 5m-9-.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m0 7a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m6 3.577V14m11.846-6.73c.495.14.885.353 1.208.676s.535.713.675 1.208m0 9.692c-.14.495-.352.885-.675 1.208s-.713.535-1.208.675m-9.692 0c-.495-.14-.885-.352-1.208-.675s-.535-.713-.675-1.208M13.923 21h2.154M22 15.077v-2.154M16.077 7h-2.154" color="currentColor"></svg:path>`,
})
export class HugeiconsVoucherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVrIcon],svg[hugeicons-vr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 3h10c1.87 0 2.804 0 3.5.402A3 3 0 0 1 21.598 4.5C22 5.196 22 6.13 22 8s0 2.804-.402 3.5a3 3 0 0 1-1.098 1.098C19.804 13 18.87 13 17 13h-.394c-.687 0-1.03 0-1.351-.071a3 3 0 0 1-1.183-.554c-.26-.202-.48-.465-.92-.993c-.35-.42-.526-.63-.727-.725a1 1 0 0 0-.85 0c-.201.094-.376.304-.727.725c-.44.528-.66.791-.92.993a3 3 0 0 1-1.183.554C8.425 13 8.081 13 7.394 13H7c-1.87 0-2.804 0-3.5-.402A3 3 0 0 1 2.402 11.5C2 10.804 2 9.87 2 8s0-2.804.402-3.5A3 3 0 0 1 3.5 3.402C4.196 3 5.13 3 7 3M5 6h2m5.1 13l-2.02-2m2.02 2l-2.02 2m2.02-2C7.05 19 2.81 17 2 15m13.131 3.771C18.602 18.231 21.266 16.79 22 15" color="currentColor"></svg:path>`,
})
export class HugeiconsVrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVrGlassesIcon],svg[hugeicons-vr-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 9h10c1.87 0 2.804 0 3.5.402a3 3 0 0 1 1.098 1.098C22 11.196 22 12.13 22 14s0 2.804-.402 3.5a3 3 0 0 1-1.098 1.098C19.804 19 18.87 19 17 19h-.394c-.687 0-1.03 0-1.351-.071a3 3 0 0 1-1.183-.554c-.26-.202-.48-.465-.92-.993c-.35-.42-.526-.63-.727-.725a1 1 0 0 0-.85 0c-.201.094-.376.304-.727.725c-.44.528-.66.791-.92.993a3 3 0 0 1-1.183.554C8.425 19 8.081 19 7.394 19H7c-1.87 0-2.804 0-3.5-.402A3 3 0 0 1 2.402 17.5C2 16.804 2 15.87 2 14s0-2.804.402-3.5A3 3 0 0 1 3.5 9.402C4.196 9 5.13 9 7 9m-2 3h2"></svg:path><svg:path d="M22 13v-1.172c0-1.153 0-1.73-.153-2.268a4 4 0 0 0-.352-.848C21.224 8.224 20.815 7.816 20 7s-1.224-1.224-1.712-1.495a4 4 0 0 0-.848-.352C16.902 5 16.325 5 15.172 5H8.828c-1.153 0-1.73 0-2.268.153a4 4 0 0 0-.848.352C5.224 5.776 4.816 6.185 4 7S2.776 8.224 2.505 8.712a4 4 0 0 0-.352.848C2 10.098 2 10.675 2 11.828V13"></svg:path></svg:g>`,
})
export class HugeiconsVrGlassesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVynil01Icon],svg[hugeicons-vynil-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M9 6a5.3 5.3 0 0 0-3 3m8 3a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path></svg:g>`,
})
export class HugeiconsVynil01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVynil02Icon],svg[hugeicons-vynil-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.5 12.5c0 5.523-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10c1.169 0 2.29.2 3.333.569"></svg:path><svg:path d="M19.5 9a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0 0V1.5c.333.5.6 2.6 3 3m-9.5 8a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></svg:path></svg:g>`,
})
export class HugeiconsVynil02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVynil03Icon],svg[hugeicons-vynil-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="m15 11l1.828-1.828c.579-.578.867-.868 1.02-1.235C18 7.569 18 7.16 18 6.343V3"></svg:path><svg:path d="M17.197 9A6 6 0 1 1 14.5 6.544"></svg:path><svg:path d="M9 13a3.29 3.29 0 0 0 2 2"></svg:path></svg:g>`,
})
export class HugeiconsVynil03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsW3SchoolsIcon],svg[hugeicons-w-3-schools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M6 8H2l6 10l4.5-7l4.5 7l2-3.5L15 8h-5l-2 3zm13-2h3l-2 2h.5a1.5 1.5 0 0 1 0 3c-.653 0-1.294-.417-1.5-1" color="currentColor"></svg:path>`,
})
export class HugeiconsW3SchoolsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaiterIcon],svg[hugeicons-waiter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 22.002v-5.974c0-.95 0-1.423-.158-1.797a2 2 0 0 0-1.046-1.055c-.373-.162-.847-.166-1.796-.174c0 5-5 7-5 7s-5-2-5-7c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C4 14.604 4 15.07 4 16.002v6"></svg:path><svg:path d="m12 13.5l2-1v2zm0 0l-2-1v2zm3.5-7v-1a3.5 3.5 0 1 0-7 0v1a3.5 3.5 0 1 0 7 0"></svg:path></svg:g>`,
})
export class HugeiconsWaiterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaitersIcon],svg[hugeicons-waiters-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.5 21v-5.5c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C14.697 13 14 13 14 13c-.5 5-4.5 6-4.5 6s-4-1-4.5-6c0 0-.697 0-.89.038a2 2 0 0 0-1.572 1.572c-.038.193-.038.425-.038.89V21"></svg:path><svg:path d="m9.5 13.5l2-1v2zm0 0l-2-1v2zm3-6.562v-.875C12.5 4.37 11.157 3 9.5 3s-3 1.371-3 3.063v.875C6.5 8.628 7.843 10 9.5 10s3-1.371 3-3.062M21.5 21v-5.5c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C19.697 13 19.465 13 19 13m-4.5-9.826a3 3 0 0 1 1-.174c1.657 0 3 1.371 3 3.063v.875c0 1.69-1.343 3.062-3 3.062a3 3 0 0 1-1-.174"></svg:path></svg:g>`,
})
export class HugeiconsWaitersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWallLampIcon],svg[hugeicons-wall-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.999 14.003V22m0-3.697l3.96 1.545c2.517.982 3.776 1.474 4.672.922c.897-.552.897-1.818.897-4.35V8.007m.023-5.008V2"></svg:path><svg:path d="M7.078 8.006h12.924M9.349 6.211c-.648.605-.776.7-.954.865a.95.95 0 0 0-.253.939l2.054 7.798a1.34 1.34 0 0 0 1.076.98a13.2 13.2 0 0 0 4.514-.001c.494-.087.893-.45 1.025-.932l2.156-7.872c.085-.311.025-.653-.2-.885c-.182-.19-.31-.259-.989-.892c-.752-.703-1.473-1.971-1.777-2.356s-.538-.574-.924-.661a6.9 6.9 0 0 0-3.027 0c-.386.087-.585.23-.924.66c-.34.432-1.025 1.654-1.777 2.357"></svg:path></svg:g>`,
})
export class HugeiconsWallLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWallet01Icon],svg[hugeicons-wallet-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 14a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path d="M10 7h6c2.828 0 4.243 0 5.121.879C22 8.757 22 10.172 22 13v2c0 2.828 0 4.243-.879 5.121C20.243 21 18.828 21 16 21h-6c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-2c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4c.93 0 1.395 0 1.777.102a3 3 0 0 1 2.12 2.122C18 5.605 18 6.07 18 7"></svg:path></svg:g>`,
})
export class HugeiconsWallet01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWallet02Icon],svg[hugeicons-wallet-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 14a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m2.9-6q.1-.486.1-1a5 5 0 1 0-9.9 1"></svg:path><svg:path d="M7 7.993h9c2.828 0 4.243 0 5.121.88c.879.878.879 2.293.879 5.123v2.001c0 2.83 0 4.245-.879 5.124C20.243 22 18.828 22 16 22h-6c-3.771 0-5.657 0-6.828-1.172S2 17.769 2 13.996v-2c0-3.774 0-5.66 1.172-6.833C4.115 4.22 5.52 4.036 8 4h2"></svg:path></svg:g>`,
})
export class HugeiconsWallet02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWallet03Icon],svg[hugeicons-wallet-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 15a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path d="M15.004 7.803C9.576 7.426 5.104 6.62 3 6v9.061c0 1.995 0 2.992.62 3.805s1.47 1.043 3.17 1.503c2.746.742 5.634 1.184 8.22 1.436c2.682.262 4.022.393 5.006-.506c.984-.898.984-2.343.984-5.231v-2.014c0-2.805 0-4.207-.807-5.077s-2.268-.972-5.19-1.174"></svg:path><svg:path d="M17.626 8c.377-1.423.72-4.012-.299-5.297c-.645-.815-1.605-.736-2.545-.654c-4.944.435-8.437 1.318-10.389 1.918C3.553 4.225 3 5.045 3 5.96"></svg:path></svg:g>`,
})
export class HugeiconsWallet03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWallet04Icon],svg[hugeicons-wallet-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.002 3.6c.12-.07.26-.1.39-.1c.48 0 .86.39.86.86V8h-9.82zM2.252 8.75c0-.81.45-1.55 1.17-1.92l8.89-4.57a2.364 2.364 0 0 1 3.44 2.1V8c1.05 0 1.93.02 2.64.12c.9.12 1.66.38 2.26.98s.86 1.36.98 2.26c.12.87.12 1.97.12 3.34v1.1c0 1.37 0 2.47-.12 3.34c-.12.9-.38 1.66-.98 2.26s-1.36.86-2.26.98c-.87.12-1.97.12-3.34.12h-6.11c-1.37 0-2.47 0-3.34-.12c-.9-.12-1.66-.38-2.26-.98s-.86-1.36-.98-2.26c-.12-.87-.12-1.97-.12-3.34V8.75zm12.75.75c1.44 0 2.44 0 3.19.1c.73.1 1.12.28 1.4.56s.46.66.56 1.4c.1.75.1 1.75.1 3.19v1c0 1.44 0 2.44-.1 3.19c-.1.74-.28 1.12-.56 1.4s-.67.46-1.4.56c-.76.1-1.76.1-3.19.1h-6c-1.44 0-2.44 0-3.19-.1c-.73-.1-1.12-.28-1.4-.56s-.46-.66-.56-1.4c-.1-.75-.1-1.75-.1-3.19V9.5z" color="currentColor"></svg:path>`,
})
export class HugeiconsWallet04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWallet05Icon],svg[hugeicons-wallet-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.058 3.5h-4.11c-1.84 0-3.29 0-4.43.15c-1.17.16-2.12.49-2.87 1.24s-1.08 1.7-1.24 2.87c-.09.67-.13 1.46-.14 2.36c0 .05-.01.09-.01.13v2.06c0 1.83 0 3.29.15 4.43c.16 1.17.49 2.12 1.24 2.87s1.7 1.08 2.87 1.24c1.14.15 2.59.15 4.43.15h4.11c1.84 0 3.29 0 4.43-.15c1.17-.16 2.12-.49 2.87-1.24s1.08-1.7 1.24-2.87c.15-1.14.15-2.6.15-4.43v-2.06c0-.04 0-.08-.01-.13c-.02-.9-.05-1.69-.14-2.36c-.16-1.17-.49-2.12-1.24-2.87s-1.7-1.08-2.87-1.24c-1.14-.15-2.59-.15-4.43-.15m7.16 6c-.02-.59-.05-1.09-.11-1.54c-.14-1.01-.39-1.58-.81-2.01c-.42-.42-1-.67-2.01-.81c-1.03-.14-2.38-.14-4.29-.14h-4c-1.91 0-3.26 0-4.29.14c-1.01.14-1.59.39-2.01.81c-.42.43-.68 1-.81 2.01c-.06.45-.09.95-.11 1.54h3.53c.61 0 1.09 0 1.53.15c.27.1.52.23.75.41c.37.28.64.68.98 1.19l.06.08c.43.64.55.81.69.92c.1.08.22.14.34.18c.17.06.38.07 1.14.07h.39c.77 0 .97-.01 1.14-.07c.12-.04.24-.1.34-.18c.15-.11.27-.28.69-.92l.06-.08c.34-.51.6-.91.98-1.19c.23-.18.48-.31.75-.41c.44-.15.92-.15 1.53-.15zM2.748 11v1.25c0 1.91 0 3.26.14 4.29c.14 1.01.39 1.58.81 2.01c.42.42 1 .67 2.01.81c1.03.14 2.38.14 4.29.14h4c1.91 0 3.26 0 4.29-.14c1.01-.14 1.59-.39 2.01-.81c.42-.43.68-1 .81-2.01c.14-1.03.14-2.38.14-4.29V11h-3.45c-.77 0-.97.01-1.14.07c-.12.04-.24.1-.34.18c-.15.11-.27.28-.69.92l-.06.09c-.34.5-.6.9-.98 1.19c-.23.17-.48.3-.75.4c-.44.15-.92.15-1.53.15h-.61c-.61 0-1.09 0-1.53-.15c-.27-.1-.52-.23-.75-.4c-.37-.29-.64-.69-.98-1.19l-.06-.09c-.43-.64-.55-.81-.69-.92c-.1-.08-.22-.14-.34-.18c-.17-.06-.38-.07-1.14-.07z" color="currentColor"></svg:path>`,
})
export class HugeiconsWallet05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWalletAdd01Icon],svg[hugeicons-wallet-add-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.002 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path d="M2.002 11c0-3.771 0-5.657 1.172-6.828S6.23 3 10.002 3h4c.93 0 1.395 0 1.776.102A3 3 0 0 1 17.9 5.224c.102.381.102.846.102 1.776m-8 0h6c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v2c0 2.828 0 4.243-.879 5.121c-.878.879-2.293.879-5.121.879h-3.501M10 17H6m0 0H2m4 0v4m0-4v-4"></svg:path></svg:g>`,
})
export class HugeiconsWalletAdd01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWalletAdd02Icon],svg[hugeicons-wallet-add-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 15a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path d="M3 12V6c2.105.621 6.576 1.427 12.004 1.803c2.921.202 4.382.303 5.189 1.174c.807.87.807 2.273.807 5.078v2.013c0 2.889 0 4.333-.984 5.232c-.983.899-2.324.768-5.005.506a62 62 0 0 1-2.011-.23"></svg:path><svg:path d="M17.626 8c.377-1.423.72-4.012-.299-5.297c-.645-.815-1.605-.736-2.545-.654c-4.944.435-8.437 1.318-10.389 1.918C3.553 4.225 3 5.045 3 5.96M11 18H7m0 0H3m4 0v4m0-4v-4"></svg:path></svg:g>`,
})
export class HugeiconsWalletAdd02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWalletDone01Icon],svg[hugeicons-wallet-done-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 19s1 0 2 2c0 0 3.176-5 6-6m.5 6H16c2.828 0 4.243 0 5.121-.879C22 19.243 22 17.828 22 15v-2c0-2.828 0-4.243-.879-5.121C20.243 7 18.828 7 16 7h-6m-8 8v-4c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4c.93 0 1.395 0 1.777.102a3 3 0 0 1 2.12 2.122C18 5.605 18 6.07 18 7"></svg:path><svg:path d="M16 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path></svg:g>`,
})
export class HugeiconsWalletDone01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWalletDone02Icon],svg[hugeicons-wallet-done-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 15.061V6c2.105.621 6.576 1.427 12.004 1.803c2.921.202 4.382.303 5.189 1.174c.807.87.807 2.273.807 5.078v2.013c0 2.889 0 4.333-.984 5.232c-.983.899-2.324.768-5.005.506A59 59 0 0 1 11 21.277"></svg:path><svg:path d="M17.626 8c.377-1.423.72-4.012-.299-5.297c-.645-.815-1.605-.736-2.545-.654c-4.944.435-8.437 1.318-10.389 1.918C3.553 4.225 3 5.045 3 5.96M15 15a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M3 19s1 0 2 2c0 0 3.176-5 6-6"></svg:path></svg:g>`,
})
export class HugeiconsWalletDone02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWalletNotFound01Icon],svg[hugeicons-wallet-not-found-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.47 4q-.17.129-.322.282C2 5.446 2 7.32 2 11.066v1.987c0 3.746 0 5.62 1.148 6.783C4.297 21 6.145 21 9.841 21h5.881c2.092 0 3.395 0 4.278-.375M18.865 14.5c.087-.215.135-.452.135-.7c0-.994-.77-1.8-1.719-1.8c-.281 0-.546.07-.78.196"></svg:path><svg:path d="M18 7c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.121-2.122C15.395 3 14.93 3 14 3h-4c-.946 0-1.773 0-2.5.018M11.243 7H16c2.828 0 4.243 0 5.121.879C22 8.757 22 10.172 22 13v2c0 .996 0 1.816-.038 2.5M2 2l20 20"></svg:path></svg:g>`,
})
export class HugeiconsWalletNotFound01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWalletNotFound02Icon],svg[hugeicons-wallet-not-found-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.79 6.833C5.18 6.553 3.881 6.26 3 6v9.061c0 1.995 0 2.992.62 3.805s1.47 1.043 3.17 1.503c2.746.742 5.634 1.184 8.22 1.437c2.682.262 4.022.393 5.006-.506q.297-.271.484-.619M11 7.5c1.254.145 2.597.205 4.004.303c2.921.202 4.382.304 5.189 1.174S21 11.25 21 14.055v2.013q0 .495-.002.932M3 6c0-.838.385-1.603 1-2"></svg:path><svg:path d="M17.626 8c.377-1.423.719-4.012-.298-5.297c-.643-.813-1.6-.737-2.54-.654c-3.222.284-5.826.759-7.788 1.221M2 2l20 20"></svg:path></svg:g>`,
})
export class HugeiconsWalletNotFound02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWalletRemove01Icon],svg[hugeicons-wallet-remove-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.002 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M10 15l-7 7m7 0l-7-7"></svg:path><svg:path d="M10.002 7h6c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v2c0 2.828 0 4.243-.879 5.121c-.878.879-2.293.879-5.121.879h-2.501m4.501-14c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.122-2.122C15.397 3 14.932 3 14.002 3h-4C6.231 3 4.345 3 3.174 4.172S2.002 7.229 2.002 11v1"></svg:path></svg:g>`,
})
export class HugeiconsWalletRemove01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWalletRemove02Icon],svg[hugeicons-wallet-remove-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m10 16l-6 6m6 0l-6-6m11-1a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path><svg:path d="M3 12.5V6c2.105.621 6.576 1.427 12.004 1.803c2.921.202 4.382.303 5.189 1.174c.807.87.807 2.273.807 5.078v2.013c0 2.889 0 4.333-.984 5.232c-.983.899-2.324.768-5.005.506a62 62 0 0 1-2.011-.23"></svg:path><svg:path d="M17.626 8c.377-1.423.72-4.012-.299-5.297c-.645-.815-1.605-.736-2.545-.654c-4.944.435-8.437 1.318-10.389 1.918C3.553 4.225 3 5.045 3 5.96"></svg:path></svg:g>`,
})
export class HugeiconsWalletRemove02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWantedIcon],svg[hugeicons-wanted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.517 2.015H7.884c-1.038 0-2.445-.183-3.165.744c-.427.549-.427 1.36-.427 2.98c0 1.299 1.747 2.272 1.728 2.77c-.02.5-1.728 1.497-1.728 2.827v6.195c0 .594-.28 1.053-.532 1.577c-.625 1.296-.938 1.944-.655 2.418s.98.474 2.378.474h10.37c1.818 0 2.726 0 3.29-.585c.565-.586.565-1.528.565-3.412V6.483c0-.593.28-1.053.532-1.576c.625-1.296.938-1.945.655-2.419c-.282-.473-.98-.473-2.378-.473M15 18H9"></svg:path><svg:path d="M13.5 7.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-3.609 4.056c-.55.316-1.992.96-1.114 1.768c.43.394.907.676 1.508.676h3.43c.6 0 1.079-.282 1.508-.676c.879-.807-.564-1.453-1.114-1.768a4.28 4.28 0 0 0-4.218 0"></svg:path></svg:g>`,
})
export class HugeiconsWantedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWardrobe01Icon],svg[hugeicons-wardrobe-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 20v2m12-2v2M3 14V8c0-2.828 0-4.243.93-5.121S6.358 2 9.353 2h5.294c2.995 0 4.492 0 5.423.879C21 3.757 21 5.172 21 8v6c0 2.828 0 4.243-.93 5.121S17.642 20 14.647 20H9.353c-2.995 0-4.492 0-5.423-.879C3 18.243 3 16.828 3 14m9 6V2M3 14h9M3 8h9m3 3.5v-1" color="currentColor"></svg:path>`,
})
export class HugeiconsWardrobe01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWardrobe02Icon],svg[hugeicons-wardrobe-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 20v2m12-2v2M3 14V8c0-2.828 0-4.243.93-5.121S6.358 2 9.353 2h5.294c2.995 0 4.492 0 5.423.879C21 3.757 21 5.172 21 8v6c0 2.828 0 4.243-.93 5.121S17.642 20 14.647 20H9.353c-2.995 0-4.492 0-5.423-.879C3 18.243 3 16.828 3 14m9 6V2m-3 8v1m6-1v1" color="currentColor"></svg:path>`,
})
export class HugeiconsWardrobe02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWardrobe03Icon],svg[hugeicons-wardrobe-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 20v2m12-2v2M3 16h18m-9 0V2M3 14V8c0-2.828 0-4.243.93-5.121S6.358 2 9.353 2h5.294c2.995 0 4.492 0 5.423.879C21 3.757 21 5.172 21 8v6c0 2.828 0 4.243-.93 5.121S17.642 20 14.647 20H9.353c-2.995 0-4.492 0-5.423-.879C3 18.243 3 16.828 3 14m6-4V9m6 1V9" color="currentColor"></svg:path>`,
})
export class HugeiconsWardrobe03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWardrobe04Icon],svg[hugeicons-wardrobe-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 20v2m12-2v2M3 16h9m0 4V2M3 14V8c0-2.828 0-4.243.93-5.121S6.358 2 9.353 2h5.294c2.995 0 4.492 0 5.423.879C21 3.757 21 5.172 21 8v6c0 2.828 0 4.243-.93 5.121S17.642 20 14.647 20H9.353c-2.995 0-4.492 0-5.423-.879C3 18.243 3 16.828 3 14m6-4V8m6 4v-2" color="currentColor"></svg:path>`,
})
export class HugeiconsWardrobe04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWarehouseIcon],svg[hugeicons-warehouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m10.448 2.984l-5.5 2.315c-1.187.5-1.78.75-2.114 1.253S2.5 7.698 2.5 8.986V21.5h3v-10c0-.943 0-1.414.293-1.707S6.557 9.5 7.5 9.5h9c.943 0 1.414 0 1.707.293s.293.764.293 1.707v10h3V8.986c0-1.288 0-1.932-.334-2.434s-.927-.753-2.114-1.253l-5.5-2.315C12.787 2.66 12.404 2.5 12 2.5s-.787.161-1.552.484M11 6.5h2"></svg:path><svg:path d="M13 15.5h-2c-.943 0-1.414 0-1.707.293S9 16.557 9 17.5v2c0 .943 0 1.414.293 1.707s.764.293 1.707.293h2c.943 0 1.414 0 1.707-.293S15 20.443 15 19.5v-2c0-.943 0-1.414-.293-1.707S13.943 15.5 13 15.5"></svg:path></svg:g>`,
})
export class HugeiconsWarehouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWashingtonMonumentIcon],svg[hugeicons-washington-monument-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 19L8.768 6.627c.115-.809.173-1.213.333-1.583s.416-.689.928-1.325l.557-.694C11.252 2.342 11.586 2 12 2s.748.342 1.414 1.025l.557.694c.511.636.767.955.928 1.325c.16.37.218.774.333 1.583L17 19M3 22h18m-1 0l-.219-.328c-.872-1.308-1.308-1.962-1.971-2.317S16.36 19 14.789 19H9.21c-1.572 0-2.358 0-3.021.355s-1.1 1.009-1.971 2.317L4 22M9 6h6m-3 13v-6" color="currentColor"></svg:path>`,
})
export class HugeiconsWashingtonMonumentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWasteIcon],svg[hugeicons-waste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.75 5h5.43a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 13.32 2h4.488a2 2 0 0 1 1.898 1.368L20.25 5m1.5 0h-13"></svg:path><svg:path d="m20.25 5l-.62 9.906q-.031.49-.061.917M5.25 5l.605 9.897c.154 2.414.232 3.62.874 4.489c.317.429.726.791 1.2 1.063c.96.551 2.244.551 4.814.551h2.507m5.5-2a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></svg:path></svg:g>`,
})
export class HugeiconsWasteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWasteRestoreIcon],svg[hugeicons-waste-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.75 5h5.43a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 13.32 2h4.488a2 2 0 0 1 1.898 1.368L20.25 5m1.5 0h-13"></svg:path><svg:path d="m20.25 5l-.5 6.5M5.25 5l.605 10.536c.154 2.57.232 3.856.874 4.78c.317.458.726.843 1.2 1.133c.582.356 1.284.496 2.321.551m1.5-6.502l1.136 1.466a4 4 0 0 1 7.364-.901m1.5 4.435l-1.136-1.464a4 4 0 0 1-7.328.965"></svg:path></svg:g>`,
})
export class HugeiconsWasteRestoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWatch01Icon],svg[hugeicons-watch-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="7"></svg:circle><svg:path d="m16 6l-.272-1.09c-.335-1.338-.502-2.007-.978-2.42a2 2 0 0 0-.165-.129C14.07 2 13.38 2 12 2s-2.069 0-2.585.361q-.086.06-.165.129c-.476.413-.643 1.082-.978 2.42L8 6m0 12l.272 1.09c.335 1.338.502 2.007.978 2.42q.08.069.165.129C9.93 22 10.62 22 12 22s2.069 0 2.585-.361q.085-.06.165-.129c.476-.413.643-1.082.978-2.42L16 18m-4-8v2.005L13 13"></svg:path></svg:g>`,
})
export class HugeiconsWatch01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWatch02Icon],svg[hugeicons-watch-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 12c0-2.828 0-4.243.879-5.121C7.757 6 9.172 6 12 6s4.243 0 5.121.879C18 7.757 18 9.172 18 12s0 4.243-.879 5.121C16.243 18 14.828 18 12 18s-4.243 0-5.121-.879C6 16.243 6 14.828 6 12m10-6l-.272-1.09c-.335-1.338-.502-2.007-.978-2.42a2 2 0 0 0-.165-.129C14.07 2 13.38 2 12 2s-2.069 0-2.585.361q-.086.06-.165.129c-.476.413-.643 1.082-.978 2.42L8 6m0 12l.272 1.09c.335 1.338.502 2.007.978 2.42q.08.069.165.129C9.93 22 10.62 22 12 22s2.069 0 2.585-.361q.085-.06.165-.129c.476-.413.643-1.082.978-2.42L16 18"></svg:path><svg:path d="M12 10v2.005L13 13"></svg:path></svg:g>`,
})
export class HugeiconsWatch02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaterEnergyIcon],svg[hugeicons-water-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.253 19.917A9.5 9.5 0 0 0 9.89 2.736m7.364 17.18V17m0 2.917H20.5M6.722 4.1a9.5 9.5 0 0 0 7.389 17.165M6.722 4.1V7m0-2.9H3.5"></svg:path><svg:path d="M12 16a3.5 3.5 0 0 0 3.5-3.5C15.5 10 12 7 12 7s-3.5 3-3.5 5.5A3.5 3.5 0 0 0 12 16"></svg:path></svg:g>`,
})
export class HugeiconsWaterEnergyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaterPoloIcon],svg[hugeicons-water-polo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 21.192c.685 1.05 1.571 1.05 2.273 0c2.257-3.45 4.407 2.481 6 .039c2.43-3.66 4.178 2.688 6-.04c2.376-3.632 3.857 2.384 5.727.391m-4.382-4.572c.695-.604 2.327-2.298 2.745-4.919c.388-1.61.16-5.187-2.45-7.643C16.175 2.71 11.565.185 6.55 3.982c-1.002.808-2.83 3.031-3.039 5.953c-.208 2.922 1.062 4.912 1.71 5.695c.317.344.473.545.805.846c.287.26.406.344.638.532c1.406.052 4.575-.603 6.707-1.964c.473-.222 1.68-.99 2.662-2.354m-11.86.113c1.18.472 4.216 1.028 7.148-1.696m.22-.232c1.435-.302 5.048 0 7.292 3.932M7.697 3.489c-1.107 1.944-1.365 7.113.231 9.036m3.719-1.636c-.754-1.836-1.3-6.33.448-8.64m-.583 4.092c1.747-.264 6.063.581 8.977 4.16" color="currentColor"></svg:path>`,
})
export class HugeiconsWaterPoloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaterPumpIcon],svg[hugeicons-water-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path stroke="currentColor" d="M12.5 5.5h-2c-.943 0-1.414 0-1.707.293S8.5 6.557 8.5 7.5v2c0 .943 0 1.414.293 1.707s.764.293 1.707.293h2c.943 0 1.414 0 1.707-.293s.293-.764.293-1.707v-2c0-.943 0-1.414-.293-1.707S13.443 5.5 12.5 5.5m.5 6h-3v10h3zm-5.5 10h8M14.5 7h4a3 3 0 0 1 3 3v2.5h-3V10h-4z"></svg:path><svg:path stroke="currentColor" d="M14.5 2.5H9.1c-1.262 0-1.893 0-2.39.323s-.753.9-1.266 2.052L2.5 11.5"></svg:path><svg:path fill="currentColor" d="m20 15.5l.558-.5a.75.75 0 0 0-1.116 0zm.75 2.5a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 22.25 18zm-.75.75a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 20 20.25zm-.75-.75c0 .003 0-.031.027-.111q.037-.116.124-.286c.117-.227.281-.48.458-.726a12 12 0 0 1 .686-.862l.01-.012l.003-.002L20 15.5l-.558-.5h-.002l-.005.005l-.014.017a15 15 0 0 0-.233.273c-.148.178-.346.427-.547.706c-.198.275-.41.596-.573.915c-.152.294-.318.688-.318 1.083zm.75-2.5l-.558.5v.001l.002.002l.01.012a8 8 0 0 1 .203.238c.133.16.31.381.484.624c.177.246.34.499.458.726q.087.17.124.286c.026.08.027.114.027.111h1.5c0-.395-.166-.788-.317-1.083a7.5 7.5 0 0 0-.574-.916a13 13 0 0 0-.78-.978l-.015-.017L20.56 15z"></svg:path><svg:path stroke="currentColor" d="M11.5 2.5v3"></svg:path></svg:g>`,
})
export class HugeiconsWaterPumpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaterfallDown01Icon],svg[hugeicons-waterfall-down-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21H10c-3.3 0-4.95 0-5.975-1.025S3 17.3 3 14V3m17 14v-3m-4 0V8m-4 6v-3m-4 0V5" color="currentColor"></svg:path>`,
})
export class HugeiconsWaterfallDown01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaterfallDown03Icon],svg[hugeicons-waterfall-down-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 21h20m-2-3v-2m-4-1v-5m-4 3v-3m-4 0V3m-4 7V9" color="currentColor"></svg:path>`,
})
export class HugeiconsWaterfallDown03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaterfallUp01Icon],svg[hugeicons-waterfall-up-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 17v-3m4 0V9m4 0V6m4 4V4M3 3v11c0 3.3 0 4.95 1.025 5.975S6.7 21 10 21h11" color="currentColor"></svg:path>`,
})
export class HugeiconsWaterfallUp01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaterfallUp02Icon],svg[hugeicons-waterfall-up-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 21h20M4 18v-3m4-1V9m4 2V9m4 2V5m4 0V3" color="currentColor"></svg:path>`,
})
export class HugeiconsWaterfallUp02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWatermelonIcon],svg[hugeicons-watermelon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.887 4.076c1.262 1.476 2.034 3.457 2.034 5.636c0 4.56-3.385 8.257-7.56 8.257c-2.32 0-4.322-1.06-5.683-2.745"></svg:path><svg:path d="m16.418 3.573l-3.062 2.842c-.09.083-.083.227-.002.318c.677.766.694 2.41-.082 3.437c-.827 1.094-2.056.945-2.498.718l-.25.703a.6.6 0 0 1-.643.395l-1.642-.212a.4.4 0 0 0-.338.118L4.98 14.883l-1.4 1.495c-.857.918-.775 2.375.323 2.985c3.474 1.928 9.054 2.969 13.94-1.627c4.515-4.666 3.366-10.328 1.588-13.779c-.587-1.14-2.074-1.257-3.014-.384"></svg:path></svg:g>`,
})
export class HugeiconsWatermelonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWattpadIcon],svg[hugeicons-wattpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.2 6.24c1.6.792 1.334 2.968 1 3.957c2.05-4.169 7.851-8.66 7.851-1.175c.502-.84 2.008-2.722 4.016-3.522c2.51-1 4.39 1 1.396 4c0 0-1.497 1.5-2.994 4.5s-5.489 6-6.768-.836c-3.501 8.903-7.502 6.43-8.502.495s2-8.408 4-7.419" color="currentColor"></svg:path>`,
})
export class HugeiconsWattpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWattpadSquareIcon],svg[hugeicons-wattpad-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.52 8.709c.96.452.8 1.695.6 2.26c1.23-2.382 4.71-4.947 4.71-.67c.302-.481 1.205-1.556 2.41-2.013c1.506-.572 2.635.571.838 2.285c0 0-.898.858-1.796 2.572c-.899 1.714-3.294 3.428-4.062-.478c-2.1 5.087-4.5 3.674-5.1.283c-.601-3.391 1.2-4.805 2.4-4.24"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsWattpadSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWav01Icon],svg[hugeicons-wav-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 13.055c0 .41.34.75.75.75s.75-.34.75-.75v-2.34c0-.89 0-1.38-.21-1.89c-.2-.49-.55-.84-1.18-1.47l-4.74-4.74c-.54-.55-.84-.85-1.25-1.03c-.01 0-.18-.08-.18-.08l-.029-.016a.4.4 0 0 0-.081-.034c-.45-.15-.87-.15-1.619-.15h-.005c-3.417 0-5.127 0-6.436 1.06c-.26.21-.5.45-.71.71C4 4.375 4 6.095 4 9.515v3.54c0 .41.34.75.75.75s.75-.34.75-.75v-3.54c0-3.07 0-4.61.72-5.5c.14-.18.31-.34.49-.49c.9-.72 2.429-.72 5.497-.72h.027c.347 0 .59 0 .766.01v.24c0 3.03 0 4.55 1.1 5.65s2.62 1.1 5.65 1.1h.23c.02.21.02.49.02.91zm-4.84-5.41c-.59-.59-.66-1.7-.66-3.78l4.44 4.44c-2.09-.01-3.19-.07-3.78-.66m.835 15.16H16h-.01zm-.715-.54c.1.328.397.537.715.54q.102 0 .205-.03c.4-.12.63-.53.51-.93l-1.75-6a.75.75 0 0 0-.72-.54h-.5a.75.75 0 0 0-.72.54l-1.75 6c-.12.4.11.81.51.93s.81-.11.93-.51l.43-1.46h1.71zm-.87-2.96h-.84l.42-1.43zm-5.24 3.23c.15.17.36.27.58.27v-.01c.09 0 .18-.01.26-.04a.76.76 0 0 0 .49-.71v-6c0-.41-.34-.75-.75-.75s-.75.34-.75.75v3.93l-1.17-1.41c-.28-.34-.86-.34-1.15 0l-1.17 1.41v-3.93c0-.41-.34-.75-.75-.75s-.75.34-.75.75v6c0 .32.19.6.49.71s.63.02.83-.22l1.92-2.31zm8.61-.27c.09.32.39.54.72.54h.5c.33 0 .63-.22.72-.54l1.75-6c.12-.4-.11-.81-.51-.93s-.81.11-.93.51l-1.28 4.39l-1.28-4.39a.746.746 0 0 0-.93-.51c-.4.12-.63.53-.51.93z" color="currentColor"></svg:path>`,
})
export class HugeiconsWav01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWav02Icon],svg[hugeicons-wav-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.238 3.346h-.79c-1.64 0-2.81 0-3.71.11c-.87.1-1.4.29-1.79.61c-.18.15-.34.31-.49.49c-.32.39-.51.92-.61 1.79c-.11.9-.11 2.07-.11 3.71v4.54c0 1.91 0 3.26.14 4.29c.14 1.01.39 1.58.81 2.01c.43.42 1 .67 2.01.81c1.03.14 2.38.14 4.29.14h8c.41 0 .75.34.75.75s-.34.75-.75.75h-8.06c-1.83 0-3.29 0-4.43-.15c-1.17-.16-2.12-.49-2.87-1.24s-1.08-1.7-1.24-2.87c-.15-1.14-.15-2.6-.15-4.43v-4.65c0-1.58 0-2.84.12-3.83c.11-1.02.36-1.86.93-2.56q.315-.405.72-.72c.7-.57 1.54-.82 2.56-.93c.99-.12 2.25-.12 3.83-.12h.15c.6 0 1.08 0 1.53.16c.09.03.18.07.27.11c.43.2.76.54 1.19.97l.07.07l4.74 4.74l.08.08c.5.5.89.89 1.1 1.4c.13.31.17.7.19 1.04c.02.36.02.77.02 1.17c0 .42-.34.76-.75.76s-.75-.34-.75-.75s0-.78-.02-1.09c0-.06 0-.11-.01-.16h-.27c-1.37 0-2.47 0-3.34-.12c-.9-.12-1.66-.38-2.26-.98s-.86-1.36-.98-2.26c-.12-.87-.12-1.97-.12-3.34zm1.5 1.05c0 1.02.02 1.78.1 2.38c.1.74.28 1.12.56 1.4s.66.46 1.4.56c.6.08 1.36.1 2.38.1zm6 9.48c.39-.13.82.07.96.46l1.29 3.69l1.29-3.69c.14-.39.57-.59.96-.46c.39.14.59.57.46.96l-1.75 5c-.11.3-.39.5-.71.5h-.5c-.32 0-.6-.2-.71-.5l-1.75-5c-.13-.39.07-.82.46-.96m-11.75-.04c.41 0 .75.34.75.75v2.86l.66-.83a.76.76 0 0 1 1.18 0l.66.83v-2.86c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .32-.2.6-.5.71c-.3.1-.64.01-.84-.24l-1.41-1.77l-1.41 1.77c-.2.25-.54.34-.84.24c-.3-.11-.5-.39-.5-.71v-5c0-.41.34-.75.75-.75m7.54.5c.11-.3.39-.5.71-.5h.5c.32 0 .6.2.71.5l1.75 5c.13.39-.07.82-.46.96a.763.763 0 0 1-.96-.46l-.35-1h-1.88l-.35 1c-.14.39-.57.59-.96.46a.763.763 0 0 1-.46-.96zm.54 3h.84l-.42-1.19z" color="currentColor"></svg:path>`,
})
export class HugeiconsWav02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaveIcon],svg[hugeicons-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M3 12h3a2 2 0 0 0 2-2V7a2 2 0 1 1 4 0v10a2 2 0 1 0 4 0v-3a2 2 0 0 1 2-2h3" color="currentColor"></svg:path>`,
})
export class HugeiconsWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaveSquareIcon],svg[hugeicons-wave-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M3 12h4a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5a1 1 0 0 1 1-1h4" color="currentColor"></svg:path>`,
})
export class HugeiconsWaveSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaveTriangleIcon],svg[hugeicons-wave-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M3 12h4.34a1 1 0 0 1 .92.606l2.584 6.029A.603.603 0 0 0 12 18.397V5.603a.603.603 0 0 1 1.157-.238l2.583 6.029a1 1 0 0 0 .92.606H21" color="currentColor"></svg:path>`,
})
export class HugeiconsWaveTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWavingHand01Icon],svg[hugeicons-waving-hand-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.125 5.75a1.45 1.45 0 0 1 1.858-.864a1.443 1.443 0 0 1 .866 1.851l-.661 1.81M14.125 5.75l.66-1.81a1.443 1.443 0 0 0-.866-1.851a1.45 1.45 0 0 0-1.858.863l-.495 1.358m2.558 1.44l-1.817 4.978m-.741-6.418a1.443 1.443 0 0 0-.867-1.852a1.45 1.45 0 0 0-1.858.864L6.044 10.98L5.11 8.975a1.63 1.63 0 0 0-2.326-.7a1.63 1.63 0 0 0-.714 1.865l1.749 5.347c.335 1.023.226 2.374-.143 3.385m7.89-14.562L9.913 8.834M12.303 22l.385-1.054a2.12 2.12 0 0 1 .989-1.116c.52-.285 1.192-.698 1.533-1.089c.586-.674.945-1.657 1.664-3.624l2.038-5.581a1.443 1.443 0 0 0-.866-1.852a1.45 1.45 0 0 0-1.858.863M14.7 12.62l1.488-4.072M20.83 13c.547 1.635-.273 3.426-1.83 4" color="currentColor"></svg:path>`,
})
export class HugeiconsWavingHand01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWavingHand02Icon],svg[hugeicons-waving-hand-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18.915 11.7l-1.542 4.131c-.718 1.925-1.078 2.887-1.664 3.546A4.88 4.88 0 0 1 12.155 21c-.893.016-1.877-.334-3.844-1.032c-1.032-.366-1.548-.549-1.99-.823a4.74 4.74 0 0 1-1.62-1.672c-.255-.446-.414-.96-.731-1.986l-1.4-4.526a1.58 1.58 0 0 1 .714-1.824c.83-.495 1.916-.175 2.326.685l.934 1.963l2.632-7.05C9.45 4 10.282 3.622 11.034 3.89A1.404 1.404 0 0 1 11.9 5.7m0 0l.662-1.77c.273-.734 1.105-1.112 1.857-.845a1.404 1.404 0 0 1 .867 1.811l-.661 1.77M11.9 5.702l-1.487 3.984m4.212-3.017c.274-.734 1.105-1.112 1.858-.845a1.404 1.404 0 0 1 .866 1.812l-.661 1.77m-2.063-2.737l-1.488 3.984m5.449 1.933l.826-2.213a1.404 1.404 0 0 0-.866-1.811c-.752-.267-1.584.11-1.858.844m0 0l-.826 2.214M21.33 14c.547 1.635-.273 3.426-1.83 4" color="currentColor"></svg:path>`,
})
export class HugeiconsWavingHand02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWazeIcon],svg[hugeicons-waze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.5 9v.01m-7-.01v.01m0 3.99s1 2 3.5 2s3.5-2 3.5-2M11 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="M11 19.945c.684.042 1.357.055 2 .055a9 9 0 1 0-9-9c0 1.039 0 3-2 4c1.058 2.38 2.974 3.64 5.126 4.3"></svg:path><svg:path d="M17 22a2 2 0 0 0 1.163-3.627c-.935.656-2 1.139-3.15 1.401A2 2 0 0 0 17 22"></svg:path></svg:g>`,
})
export class HugeiconsWazeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWebDesign01Icon],svg[hugeicons-web-design-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m0-3h19M13 13h4m-4 4h2M7 6h.009M11 6h.009M9 9v12.5" color="currentColor"></svg:path>`,
})
export class HugeiconsWebDesign01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWebDesign02Icon],svg[hugeicons-web-design-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 10.128c0-3.832 0-5.747-1.172-6.938S15.771 2 12 2h-2C6.229 2 4.343 2 3.172 3.19S2 6.296 2 10.128s0 5.747 1.172 6.938c.47.477 1.054.763 1.828.934"></svg:path><svg:path d="M22 17.5c0-1.875 0-2.812-.477-3.47a2.5 2.5 0 0 0-.553-.553C20.312 13 19.375 13 17.5 13h-5c-1.875 0-2.812 0-3.47.477a2.5 2.5 0 0 0-.553.553C8 14.689 8 15.626 8 17.5s0 2.812.477 3.47a2.5 2.5 0 0 0 .554.553C9.688 22 10.625 22 12.5 22h5c1.875 0 2.812 0 3.47-.477a2.5 2.5 0 0 0 .553-.553C22 20.312 22 19.375 22 17.5"></svg:path><svg:path d="m16.5 16l.92.793c.387.333.58.5.58.707s-.193.374-.58.707L16.5 19m-3-3l-.92.793c-.387.333-.58.5-.58.707s.193.374.58.707l.92.793M2.5 6h17"></svg:path></svg:g>`,
})
export class HugeiconsWebDesign02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWebProgrammingIcon],svg[hugeicons-web-programming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m0-3h19M7 6h.009M11 6h.009"></svg:path><svg:path d="M9.118 13.5a1.5 1.5 0 0 0-2.618 1v1a1.5 1.5 0 0 0 2.618 1M15.5 13l2 4m-5.008-3.5h.01m-.01 3h.01"></svg:path></svg:g>`,
})
export class HugeiconsWebProgrammingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWebProtectionIcon],svg[hugeicons-web-protection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 20.5c.889-.2 1.564-.528 2.109-1.067c1.391-1.378 1.391-3.594 1.391-8.028s0-6.65-1.391-8.028C18.717 2 16.479 2 12 2C7.522 2 5.282 2 3.891 3.377S2.5 6.971 2.5 11.405s0 6.65 1.391 8.028c.545.54 1.22.867 2.109 1.067m-3.5-12h19M7 5.5h.009M11 5.5h.009"></svg:path><svg:path d="M12 13c-1.426 0-2.35.909-3.442 1.24c-.444.134-.666.202-.756.297s-.116.233-.169.51c-.563 2.969.668 5.713 3.605 6.78c.315.116.473.173.763.173s.447-.057.763-.172c2.936-1.068 4.166-3.812 3.603-6.78c-.053-.278-.08-.417-.169-.511s-.312-.163-.756-.297c-1.093-.331-2.018-1.24-3.443-1.24"></svg:path></svg:g>`,
})
export class HugeiconsWebProtectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWebSecurityIcon],svg[hugeicons-web-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 20.5c.425-.191.79-.439 1.109-.76c1.391-1.402 1.391-3.658 1.391-8.17c0-4.511 0-6.767-1.391-8.168C18.717 2 16.479 2 12 2C7.522 2 5.282 2 3.891 3.402S2.5 7.059 2.5 11.57s0 6.767 1.391 8.169c.32.321.684.569 1.109.76M2.5 8.5h19M7 5.5h.009M11 5.5h.009"></svg:path><svg:path d="M10.26 16.378c-1.08 0-1.543.78-1.663 1.26c-.12.479-.12 2.218-.048 2.938c.24.899.84 1.27 1.428 1.39c.54.049 2.82.03 3.48.03c.96.019 1.68-.341 1.98-1.42c.06-.36.12-2.34-.03-2.939c-.318-.96-1.047-1.259-1.647-1.259m-3.5 0h3.5m-3.5 0c0-.06-.002-.826 0-1.26c0-.398-.034-.78.156-1.13c.71-1.413 2.75-1.27 3.254.17c.087.237.093.612.09.96c-.003.442 0 1.26 0 1.26"></svg:path></svg:g>`,
})
export class HugeiconsWebSecurityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWebValidationIcon],svg[hugeicons-web-validation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 10c-.01-3.585-.114-5.472-1.391-6.682C18.217 2 15.979 2 11.5 2C7.022 2 4.782 2 3.391 3.318S2 6.758 2 11s0 6.364 1.391 7.682c1.227 1.162 3.112 1.3 6.609 1.316m5-2.498s.5 0 1 1c0 0 1.588-2.5 3-3"></svg:path><svg:path d="M22 17a5 5 0 1 1-10 0a5 5 0 0 1 10 0M2 8.5h19m-14.5-3h.009m3.991 0h.009"></svg:path></svg:g>`,
})
export class HugeiconsWebValidationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWebflowIcon],svg[hugeicons-webflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.233 15.295L22 5.5h-.396a5 5 0 0 0-4.744 3.419L15 14.5l-1-9h-.08a5 5 0 0 0-4.66 3.188L7 14.5l-.558-5.024A4.47 4.47 0 0 0 2 5.5l3 13c2.084 0 3.985-1.293 4.717-3.244L11.5 10.5l1.5 8h.566a5 5 0 0 0 4.667-3.205" color="currentColor"></svg:path>`,
})
export class HugeiconsWebflowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWebflowEllipseIcon],svg[hugeicons-webflow-ellipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="m7.5 9l1 7c2-1.2 3.5-5.167 4-7l1.5 7c2-1.6 3.167-5.333 3.5-7"></svg:path></svg:g>`,
})
export class HugeiconsWebflowEllipseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWebflowRectangleIcon],svg[hugeicons-webflow-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="m7.5 9l1 7c2-1.2 3.5-5.167 4-7l1.5 7c2-1.6 3.167-5.333 3.5-7"></svg:path></svg:g>`,
})
export class HugeiconsWebflowRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWebhookIcon],svg[hugeicons-webhook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.433 15.82c.2.284.317.63.317 1.002c0 .965-.786 1.75-1.75 1.75s-1.75-.785-1.75-1.75a1.753 1.753 0 0 1 1.872-1.745l1.958-3.515a4.76 4.76 0 0 1-1.82-3.74c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.79-1.46-3.25-3.25-3.25s-3.25 1.46-3.25 3.25c0 1.18.64 2.27 1.68 2.85c.36.2.49.66.29 1.02zM12 9.572c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75s1.75.79 1.75 1.75c0 .375-.12.724-.324 1.01l1.954 3.52a4.6 4.6 0 0 1 1.62-.28c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75c-1.08 0-2.14-.37-2.97-1.05a.747.747 0 0 1 .94-1.16c.58.47 1.28.71 2.03.71c1.79 0 3.25-1.46 3.25-3.25a3.256 3.256 0 0 0-4.82-2.85c-.17.1-.38.12-.57.07a.73.73 0 0 1-.45-.36l-2.29-4.114zM5.423 13.98a.75.75 0 1 0-.726-1.313a4.74 4.74 0 0 0-2.447 4.156a4.75 4.75 0 0 0 9.441.75h3.728c.282.59.885 1 1.581 1c.964 0 1.75-.785 1.75-1.75c0-.964-.786-1.75-1.75-1.75c-.696 0-1.3.41-1.58 1H11a.75.75 0 0 0-.75.75A3.25 3.25 0 0 1 7 20.072a3.25 3.25 0 0 1-3.25-3.25a3.24 3.24 0 0 1 1.673-2.843" color="currentColor"></svg:path>`,
})
export class HugeiconsWebhookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWechatIcon],svg[hugeicons-wechat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 7h.009m5.982 0H13m4.991 7.5H18m-4 0h.009M10 16c0 2.761 2.686 5 6 5c.907 0 1.767-.168 2.538-.468c.189-.073.393-.1.592-.063L22 21l-.652-2.03a1.13 1.13 0 0 1 .11-.89A4.3 4.3 0 0 0 22 16c0-2.761-2.686-5-6-5s-6 2.239-6 5"></svg:path><svg:path d="M17.873 11.249Q18 10.639 18 10c0-3.866-3.582-7-8-7s-8 3.134-8 7c0 1.112.297 2.164.824 3.098c.147.26.196.567.108.853L2 17l3.914-.76c.208-.041.422-.013.617.07a9 9 0 0 0 3.589.69"></svg:path></svg:g>`,
})
export class HugeiconsWechatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWeddingIcon],svg[hugeicons-wedding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 1.5c-1.63 0-2.75 1.36-2.75 2.89c0 1.84 1.22 3.25 2.27 4.13a11 11 0 0 0 1.96 1.31c.06.03.11.06.15.07l.04.02h.01c.2.1.44.1.64.01h.01l.04-.03c.04-.01.09-.04.15-.07a11 11 0 0 0 1.96-1.31c1.05-.88 2.27-2.29 2.27-4.13c0-1.53-1.12-2.89-2.75-2.89c-.59 0-1.12.13-1.6.42c-.14.09-.28.2-.4.31c-.12-.11-.26-.22-.4-.31c-.48-.29-1.01-.42-1.6-.42m2.24 6.77c-.09.05-.17.1-.24.14c-.07-.04-.15-.09-.24-.14a10 10 0 0 1-1.28-.9c-.95-.79-1.73-1.82-1.73-2.98C8.75 3.56 9.32 3 10 3c.36 0 .61.08.8.19c.19.12.37.32.53.64c.13.25.39.41.67.41s.54-.16.67-.41c.16-.32.34-.52.53-.64c.19-.11.44-.19.8-.19c.68 0 1.25.56 1.25 1.39c0 1.16-.78 2.19-1.73 2.98c-.46.39-.93.69-1.28.9M8.5 12c-2.62 0-4.75 2.13-4.75 4.75S5.88 21.5 8.5 21.5c.84 0 1.64-.22 2.32-.61a6.2 6.2 0 0 1-1.57-4.14c0-1.59.59-3.04 1.57-4.14c-.68-.39-1.48-.61-2.32-.61m0 11c1.3 0 2.5-.39 3.5-1.07c1 .68 2.2 1.07 3.5 1.07c3.45 0 6.25-2.8 6.25-6.25s-2.8-6.25-6.25-6.25c-1.3 0-2.5.39-3.5 1.07c-1-.68-2.2-1.07-3.5-1.07c-3.45 0-6.25 2.8-6.25 6.25S5.05 23 8.5 23m7-11c-.84 0-1.64.22-2.32.61c.98 1.1 1.57 2.55 1.57 4.14s-.59 3.04-1.57 4.14c.68.39 1.48.61 2.32.61c2.62 0 4.75-2.13 4.75-4.75S18.12 12 15.5 12m-2.25 4.75c0-1.24-.47-2.37-1.25-3.21c-.78.84-1.25 1.97-1.25 3.21s.47 2.37 1.25 3.21c.78-.84 1.25-1.97 1.25-3.21" color="currentColor"></svg:path>`,
})
export class HugeiconsWeddingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWeightScaleIcon],svg[hugeicons-weight-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.683 5c-1.365.062-2.208.254-2.804.851C3 6.731 3 8.148 3 10.981v5.009c0 2.833 0 4.25.879 5.13C4.757 22 6.172 22 9 22h6c2.828 0 4.243 0 5.121-.88S21 18.823 21 15.99v-5.01c0-2.833 0-4.25-.879-5.13c-.596-.597-1.44-.79-2.804-.851"></svg:path><svg:path d="M7.025 6.54c-.48-1.88-.72-2.82-.33-3.51a2 2 0 0 1 .394-.492C7.678 2 8.669 2 10.65 2h2.7c1.981 0 2.972 0 3.561.538c.157.143.29.31.394.493c.39.69.15 1.63-.33 3.51c-.384 1.498-.575 2.247-1.087 2.74q-.21.203-.461.353c-.614.366-1.404.366-2.983.366h-.888c-1.58 0-2.37 0-2.983-.366a2.6 2.6 0 0 1-.46-.352C7.6 8.788 7.407 8.039 7.024 6.54M10 18h4m-2.5-8l1-3"></svg:path></svg:g>`,
})
export class HugeiconsWeightScaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWeightScale01Icon],svg[hugeicons-weight-scale-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 15v3.889C19 21.114 18.264 22 15.889 22H8.11C5.886 22 5 21.264 5 18.889V15a7 7 0 1 1 14 0"></svg:path><svg:path d="M16 15a4 4 0 0 0-8 0m4 2l1-2m3.312-10H7.688c-.884 0-1.326 0-1.715-.152a2 2 0 0 1-.368-.187c-.35-.22-.595-.568-1.085-1.263c-.382-.541-.573-.812-.507-1.033a.5.5 0 0 1 .107-.19C4.28 2 4.624 2 5.313 2h13.376c.689 0 1.033 0 1.192.175q.075.084.107.19c.066.221-.125.492-.507 1.033c-.49.695-.735 1.042-1.085 1.263a2 2 0 0 1-.368.187C17.637 5 17.196 5 16.312 5M14 8V5m-4 3V5"></svg:path></svg:g>`,
})
export class HugeiconsWeightScale01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWellnessIcon],svg[hugeicons-wellness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 14.07c1.015 0 2.431-.302 3.32.35l1.762 1.29c.655.48 1.364.322 2.095.208c.962-.151 1.823.67 1.823 1.738c0 .292-2.073 1.035-2.372 1.176a1.75 1.75 0 0 1-1.798-.182l-1.988-1.457"></svg:path><svg:path d="m13 17l4.091-1.89a1.98 1.98 0 0 1 2.089.515l.67.701c.24.25.184.672-.113.844l-7.854 4.561a1.96 1.96 0 0 1-1.552.187L4 20.027M12.002 12s2.1-2.239 2.1-5s-2.1-5-2.1-5s-2.1 2.239-2.1 5s2.1 5 2.1 5m0 0s3.067-.068 5-2.04c1.933-1.973 2-5.103 2-5.103s-1.27.028-2.69.574M12.002 12s-3.067-.068-5-2.04c-1.933-1.973-2-5.103-2-5.103s1.27.028 2.69.574"></svg:path></svg:g>`,
})
export class HugeiconsWellnessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWhatsappIcon],svg[hugeicons-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.379.28 2.693.784 3.888c.279.66.418.99.436 1.24c.017.25-.057.524-.204 1.073L2 22l3.799-1.016c.549-.147.823-.22 1.073-.204c.25.018.58.157 1.24.436A10 10 0 0 0 12 22"></svg:path><svg:path d="m8.588 12.377l.871-1.081c.367-.456.82-.88.857-1.488c.008-.153-.1-.841-.315-2.218C9.916 7.049 9.41 7 8.973 7c-.57 0-.855 0-1.138.13c-.358.163-.725.622-.806 1.007c-.064.305-.016.515.079.935c.402 1.783 1.347 3.544 2.811 5.009c1.465 1.464 3.226 2.409 5.01 2.811c.42.095.629.143.934.079c.385-.08.844-.448 1.008-.806c.129-.283.129-.568.129-1.138c0-.438-.049-.943-.59-1.028c-1.377-.216-2.065-.323-2.218-.315c-.607.036-1.032.49-1.488.857l-1.081.87"></svg:path></svg:g>`,
})
export class HugeiconsWhatsappIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWhatsappBusinessIcon],svg[hugeicons-whatsapp-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.379.28 2.693.784 3.888c.279.66.418.99.436 1.24c.017.25-.057.524-.204 1.073L2 22l3.799-1.016c.549-.147.823-.22 1.073-.204c.25.018.58.157 1.24.436A10 10 0 0 0 12 22"></svg:path><svg:path d="M12.882 12C14.052 12 15 13.007 15 14.25s-.948 2.25-2.118 2.25h-2.47c-.666 0-.998 0-1.205-.203S9 15.768 9 15.115V12m3.882 0C14.052 12 15 10.993 15 9.75s-.948-2.25-2.118-2.25h-2.47c-.666 0-.998 0-1.205.203S9 8.232 9 8.885V12m3.882 0H9"></svg:path></svg:g>`,
})
export class HugeiconsWhatsappBusinessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWheelchairIcon],svg[hugeicons-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 16a5 5 0 1 1-10 0a5 5 0 0 1 10 0m6 3.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M7.008 16h-.009"></svg:path><svg:path d="m6 11l-.628-5.023c-.145-1.159-.217-1.738-.522-2.155a2 2 0 0 0-.647-.572C3.751 3 3.167 3 2 3m4 4h5.5c2.357 0 3.536 0 4.268.732S16.5 9.643 16.5 12v6"></svg:path><svg:path d="M12 14h4.024c.885 0 1.328 0 1.713.189q.14.068.267.158c.356.25.601.659 1.092 1.474c.393.653.59.98.884 1.107q.105.044.215.063c.312.052.629-.124 1.263-.475l.542-.3"></svg:path></svg:g>`,
})
export class HugeiconsWheelchairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWhiskIcon],svg[hugeicons-whisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.02 11.02c-2.332 2.334-5.8 2.65-7.745.705s-1.63-5.412.704-7.746c2.334-2.333 5.802-2.649 7.746-.704c1.945 1.944 1.63 5.412-.704 7.746"></svg:path><svg:path d="M17.923 8.923c-2.357 2.357-4.905 3.63-5.69 2.845c-.787-.786.487-3.334 2.844-5.69c2.358-2.358 4.905-3.632 5.69-2.846c.787.786-.487 3.334-2.844 5.69M7.548 18.636l-2.912 2.912a1.544 1.544 0 1 1-2.184-2.184l2.912-2.912a1.544 1.544 0 1 1 2.184 2.184M8 16l4-4"></svg:path></svg:g>`,
})
export class HugeiconsWhiskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWhistleIcon],svg[hugeicons-whistle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.103 11.525c1.449-2.087 3.965-2.66 5.434-2.524h2.523c.528.09.674.309 1.327 1.342c.12.324 2.055.106 2.563.159c.559-.541 0-1.651 1.24-1.494c2.13 0 4.169-.091 5.102.046c.386.057.571.405.627.79c.223 1.55-.043 2.685-.3 2.944c-.687 1.216-2.67 2.395-3.652 2.208c-2.834 0-3.447-.074-3.693.396l-.864 2.235c-.577 1.23-2.6 3.656-5.994 3.344s-4.87-3.026-5.172-4.314c-.303-.824-.59-3.043.86-5.132M13.49 5.003V3.002m-2.496 3.002l-.998-1m5.989 1l.998-1"></svg:path><svg:path d="M8.084 17a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class HugeiconsWhistleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWhiteboardIcon],svg[hugeicons-whiteboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.942 3.5h4.06c.41 0 .75.34.75.75s-.34.75-.75.75h-4c-1.91 0-3.26 0-4.29.14c-1.01.14-1.59.39-2.01.81c-.42.43-.68 1-.81 2.01c-.09.68-.12 1.5-.13 2.53l1.22-1.18a2.924 2.924 0 0 1 4.04 0a2.76 2.76 0 0 1 0 3.98c-.52.51-.52 1.31 0 1.82c.54.52 1.42.52 1.96 0l.5-.48c.3-.29.77-.28 1.06.02c.29.29.28.77-.02 1.06l-.5.48a2.924 2.924 0 0 1-4.04 0a2.76 2.76 0 0 1 0-3.98c.52-.51.52-1.31 0-1.82c-.54-.52-1.42-.52-1.96 0l-2.27 2.19c0 1.74 0 2.99.14 3.96c.14 1.01.39 1.58.81 2.01c.42.42 1 .67 2.01.81c1.03.14 2.38.14 4.29.14h4c1.42 0 2.43 0 3.21-.08c.77-.08 1.23-.23 1.6-.47c.35-.23.66-.54.9-.89c.24-.37.39-.83.47-1.6c.08-.78.08-1.79.08-3.21c0-.41.34-.75.75-.75s.75.34.75.75v.04c0 1.37 0 2.46-.09 3.32c-.09.89-.28 1.63-.71 2.28c-.35.52-.79.96-1.31 1.31c-.65.43-1.39.62-2.28.71c-.87.09-1.95.09-3.32.09h-4.1c-1.84 0-3.29 0-4.43-.15c-1.17-.16-2.12-.49-2.87-1.24s-1.08-1.7-1.24-2.87c-.15-1.14-.15-2.6-.15-4.43v-.12c0-1.83 0-3.29.15-4.43c.16-1.17.49-2.12 1.24-2.87s1.7-1.08 2.87-1.24c1.14-.15 2.59-.15 4.43-.15zm11.77.66c-.88-.88-2.3-.88-3.18 0l-5.48 5.47c-.52.52-.81 1.22-.81 1.95v1.67c0 .41.34.75.75.75h1.67c.73 0 1.43-.29 1.94-.81l5.48-5.47c.88-.88.88-2.3 0-3.18l-.38-.38zm-2.12 1.06c.29-.29.77-.29 1.06 0l.38.38c.29.29.29.77 0 1.06l-5.48 5.47c-.23.24-.55.37-.88.37h-.92v-.92c0-.33.13-.65.37-.89l5.48-5.47z" color="currentColor"></svg:path>`,
})
export class HugeiconsWhiteboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifi01Icon],svg[hugeicons-wifi-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.25 14.5c2-2 5.5-2 7.5 0m2.75-3c-3.768-3.333-9-3.333-13 0"></svg:path><svg:path d="M2 8.5c6.316-5.333 13.684-5.333 20 0"></svg:path><svg:circle cx="12" cy="18" r="1.5"></svg:circle></svg:g>`,
})
export class HugeiconsWifi01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifi02Icon],svg[hugeicons-wifi-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 18.5h.012m-3.762-3c2-2 5.5-2 7.5 0m2.75-3c-3.768-3.333-9-3.333-13 0"></svg:path><svg:path d="M2 9.5c6.316-5.333 13.684-5.333 20 0"></svg:path></svg:g>`,
})
export class HugeiconsWifi02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiCircleIcon],svg[hugeicons-wifi-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M8 10.314A6.8 6.8 0 0 1 11.995 9c1.478 0 2.854.486 4.005 1.321M14.174 13a4.5 4.5 0 0 0-2.18-.568a4.5 4.5 0 0 0-2.17.563M12 16h.006"></svg:path></svg:g>`,
})
export class HugeiconsWifiCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiConnected01Icon],svg[hugeicons-wifi-connected-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 20.5c-.983 0-1.714-.997-3.176-2.991L3.487 9.731c-1.079-1.473-1.619-2.209-1.46-3.154c.16-.946.79-1.36 2.053-2.19A14.36 14.36 0 0 1 12 2c2.904 0 5.617.873 7.92 2.387c1.262.83 1.893 1.244 2.053 2.19c.159.945-.381 1.681-1.46 3.154L16 16"></svg:path><svg:path d="M19 13a13.25 13.25 0 0 0-14 0m16-3C15.455 6 8.545 6 3 10m13 6a8.5 8.5 0 0 0-8 0m6 3s1 0 2 2c0 0 3.177-5 6-6"></svg:path></svg:g>`,
})
export class HugeiconsWifiConnected01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiConnected02Icon],svg[hugeicons-wifi-connected-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.5 11.5c-3.768-3.333-9-3.333-13 0M2 8c6.316-5.333 13.684-5.333 20 0M9 18s1 0 2 2c0 0 2.477-3.898 5-5.499" color="currentColor"></svg:path>`,
})
export class HugeiconsWifiConnected02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiConnected03Icon],svg[hugeicons-wifi-connected-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 20h.012M8.25 17c2-2 5.5-2 7.5 0m2.75-3c-3.768-3.333-9-3.333-13 0M2 11c3.158-2.667 6.579-4 10-4m3 .5s1 0 2 2c0 0 2.477-3.9 5-5.5" color="currentColor"></svg:path>`,
})
export class HugeiconsWifiConnected03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiDisconnected01Icon],svg[hugeicons-wifi-disconnected-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 16c.867-.867 1.92-1.358 3-1.474m-6-2.026c3.173-3.173 7.122-3.83 10.5-1.968M2 8.5c6.316-5.333 13.684-5.333 20 0m-1 5l-6 6m6 0l-6-6" color="currentColor"></svg:path>`,
})
export class HugeiconsWifiDisconnected01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiDisconnected02Icon],svg[hugeicons-wifi-disconnected-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.5 15l-5 5m5 0l-5-5m9-2c-3.768-4-9-4-13 0M2 8c6.316-5.333 13.684-5.333 20 0" color="currentColor"></svg:path>`,
})
export class HugeiconsWifiDisconnected02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiDisconnected03Icon],svg[hugeicons-wifi-disconnected-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.012M8.25 15c2-2 5.5-2 7.5 0m2.75-3a11 11 0 0 0-.231-.199M5.5 12c2.564-2.136 5.634-2.904 8.5-2.301M2 9c3.466-2.927 7.248-4.247 11-3.962M22 5l-6 6m6 0l-6-6" color="currentColor"></svg:path>`,
})
export class HugeiconsWifiDisconnected03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiDisconnected04Icon],svg[hugeicons-wifi-disconnected-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21c-.983 0-1.714-.997-3.176-2.991l-5.337-7.278c-1.079-1.473-1.619-2.209-1.46-3.154c.16-.946.79-1.36 2.053-2.19A14.36 14.36 0 0 1 12 3c2.904 0 5.617.873 7.92 2.387c1.262.83 1.893 1.244 2.053 2.19c.159.945-.381 1.681-1.46 3.154L19 12.699M21 15l-6 6m6 0l-6-6" color="currentColor"></svg:path>`,
})
export class HugeiconsWifiDisconnected04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiError01Icon],svg[hugeicons-wifi-error-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.5 9.998c-3.768-3.333-9-3.333-13 0"></svg:path><svg:path d="M2 6.999c6.316-5.332 13.684-5.332 20 0m-10.007 7.986v1.512m0 1.97v.032m.15-6.491c.35-.014 1.231.155 2.091 1.675l2.154 3.691c.822 1.218 1.227 3.404-1.801 3.568L11.999 21l-2.615-.074c-3.028-.164-2.562-2.332-1.801-3.567l2.153-3.692c.86-1.52 1.742-1.688 2.09-1.675z"></svg:path></svg:g>`,
})
export class HugeiconsWifiError01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiError02Icon],svg[hugeicons-wifi-error-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 17a5 5 0 0 1 1.44-1m6.06 1a5 5 0 0 0-1.44-1m4.19-2a10 10 0 0 0-3.5-2m-9.5 2A11 11 0 0 1 9 12.046M2 11c1.922-1.623 3.942-2.865 6-3.5M22 11c-1.922-1.623-3.942-2.865-6-3.5M12 20h.012m1.574-15.673c-.928-.436-2.244-.436-3.172 0c-.329.154-.459.518-.4.865L12 17l1.986-11.808c.059-.347-.071-.71-.4-.865" color="currentColor"></svg:path>`,
})
export class HugeiconsWifiError02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiFullSignalIcon],svg[hugeicons-wifi-full-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m20.513 10.73l-5.337 7.279C13.714 20.003 12.983 21 12 21s-1.714-.997-3.176-2.991l-5.337-7.278c-1.079-1.473-1.619-2.209-1.46-3.154c.16-.946.79-1.36 2.053-2.19A14.36 14.36 0 0 1 12 3c2.904 0 5.617.873 7.92 2.387c1.262.83 1.893 1.244 2.053 2.19c.159.945-.381 1.681-1.46 3.154"></svg:path><svg:path d="M19 14a13.25 13.25 0 0 0-14 0m16-3C15.455 7 8.545 7 3 11m13 6a8.5 8.5 0 0 0-8 0"></svg:path></svg:g>`,
})
export class HugeiconsWifiFullSignalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiLocationIcon],svg[hugeicons-wifi-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2c4.87 0 9 4.033 9 8.926c0 4.97-4.197 8.459-8.073 10.83a1.89 1.89 0 0 1-1.854 0C7.203 19.363 3 15.915 3 10.927C3 6.033 7.13 2 12 2"></svg:path><svg:path d="M8 9.478C9.149 8.543 10.52 8 11.995 8c1.478 0 2.854.547 4.005 1.487M14.174 12a4.1 4.1 0 0 0-2.18-.64a4.1 4.1 0 0 0-2.17.634M12 15h.006"></svg:path></svg:g>`,
})
export class HugeiconsWifiLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiLockIcon],svg[hugeicons-wifi-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path stroke="currentColor" d="M8.5 15.5c1.268-1.268 2.938-1.732 4.5-1.392M5.5 12c3.173-3.15 6.622-3.833 10-1.985M2 8c6.316-5.333 13.684-5.333 20 0"></svg:path><svg:path fill="currentColor" d="m16.08 20.857l-.304.686zm-.947-1.014l-.7.27zm6.734 0l.7.27zm-.947 1.014l.304.686zm0-5.34l.304-.685zm.947 1.015l.7-.27zm-5.787-1.014l-.304-.686zm-.947 1.014l-.7-.27zM16 15.375a.75.75 0 0 0 1.5 0zm3.5 0a.75.75 0 0 0 1.5 0zm-1.875.75h1.75v-1.5h-1.75zm1.75 4.125h-1.75v1.5h1.75zm-1.75 0c-.419 0-.692 0-.903-.016c-.202-.015-.288-.04-.338-.062l-.608 1.37c.272.122.551.167.837.188c.277.02.615.02 1.012.02zm-3.375-2.062c0 .427 0 .782.018 1.073c.02.297.06.578.166.852l1.399-.54c-.028-.072-.053-.18-.068-.407a17 17 0 0 1-.015-.979zm2.134 1.984a1.07 1.07 0 0 1-.551-.6l-1.4.541a2.57 2.57 0 0 0 1.343 1.43zm4.866-1.985c0 .447 0 .747-.015.979c-.014.226-.04.335-.068.406l1.4.541c.105-.274.146-.555.165-.852c.018-.29.018-.646.018-1.073zm-1.875 3.563c.397 0 .735 0 1.012-.02c.286-.02.565-.066.837-.187l-.608-1.371c-.05.022-.136.047-.338.062c-.21.015-.484.016-.903.016zm1.792-2.178c-.11.285-.314.494-.552.6l.609 1.37a2.57 2.57 0 0 0 1.342-1.429zm-1.792-3.447c.419 0 .692 0 .903.016c.202.015.288.04.338.062l.608-1.37a2.5 2.5 0 0 0-.837-.188c-.277-.02-.615-.02-1.012-.02zm3.375 2.063c0-.428 0-.783-.018-1.074a2.8 2.8 0 0 0-.166-.852l-1.399.54c.028.072.053.18.068.407c.015.232.015.532.015.979zm-2.134-1.985c.237.106.441.315.551.6l1.4-.541a2.57 2.57 0 0 0-1.343-1.43zm-2.991-1.578c-.397 0-.735 0-1.012.02c-.286.02-.565.066-.837.187l.608 1.371c.05-.022.136-.047.338-.062c.21-.015.484-.016.903-.016zm-1.875 3.563c0-.447 0-.747.015-.979c.014-.226.04-.335.068-.406l-1.4-.541a2.8 2.8 0 0 0-.165.852c-.018.29-.018.646-.018 1.073zm.026-3.356a2.57 2.57 0 0 0-1.342 1.43l1.399.54a1.07 1.07 0 0 1 .551-.599zm1.724.543v-1.687H16v1.687zm2-1.687v1.687H21v-1.687zm-1-.938c.578 0 1 .445 1 .938H21c0-1.372-1.145-2.438-2.5-2.438zm-1 .938c0-.493.422-.938 1-.938v-1.5c-1.355 0-2.5 1.066-2.5 2.438z"></svg:path></svg:g>`,
})
export class HugeiconsWifiLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiLowSignalIcon],svg[hugeicons-wifi-low-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m20.513 10.73l-5.337 7.279C13.714 20.003 12.983 21 12 21s-1.714-.997-3.176-2.991l-5.337-7.278c-1.079-1.473-1.619-2.209-1.46-3.154c.16-.946.79-1.36 2.053-2.19A14.36 14.36 0 0 1 12 3c2.904 0 5.617.873 7.92 2.387c1.262.83 1.893 1.244 2.053 2.19c.159.945-.381 1.681-1.46 3.154"></svg:path><svg:path d="M16 17a8.5 8.5 0 0 0-8 0"></svg:path></svg:g>`,
})
export class HugeiconsWifiLowSignalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiMediumSignalIcon],svg[hugeicons-wifi-medium-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m20.513 10.73l-5.337 7.279C13.714 20.003 12.983 21 12 21s-1.714-.997-3.176-2.991l-5.337-7.278c-1.079-1.473-1.619-2.209-1.46-3.154c.16-.946.79-1.36 2.053-2.19A14.36 14.36 0 0 1 12 3c2.904 0 5.617.873 7.92 2.387c1.262.83 1.893 1.244 2.053 2.19c.159.945-.381 1.681-1.46 3.154"></svg:path><svg:path d="M19 14a13.25 13.25 0 0 0-14 0m11 3a8.5 8.5 0 0 0-8 0"></svg:path></svg:g>`,
})
export class HugeiconsWifiMediumSignalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiNoSignalIcon],svg[hugeicons-wifi-no-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20.513 10.801l-5.337 6.874C13.714 19.558 12.983 20.5 12 20.5s-1.714-.942-3.176-2.825l-5.337-6.874c-1.079-1.39-1.619-2.085-1.46-2.979c.16-.893.79-1.285 2.053-2.068A14.97 14.97 0 0 1 12 3.5c2.904 0 5.617.825 7.92 2.254c1.262.783 1.893 1.175 2.053 2.068c.159.894-.381 1.589-1.46 2.98" color="currentColor"></svg:path>`,
})
export class HugeiconsWifiNoSignalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiOff01Icon],svg[hugeicons-wifi-off-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.5 14.5c1.121-1.106 2.464-1.613 4-1.479m6-1.521c-1.493-1.32-3.215-2.226-5-2.5m-8 2.5c1.093-.91 2.278-1.587 3.5-2m13-1c-3.928-3.317-8.264-4.571-12.5-3.762M2 8.5c1.224-1.034 2.5-2 3.5-2.5"></svg:path><svg:circle cx="12" cy="18" r="1.5"></svg:circle><svg:path d="m2 2l20 20"></svg:path></svg:g>`,
})
export class HugeiconsWifiOff01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiOff02Icon],svg[hugeicons-wifi-off-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18.5h.012m-3.512-3c1.629-1.629 4.002-1.931 6-.907m-9-2.093C7 11 8.427 10.354 10 10m8.5 2.5c-1.493-1.32-3.215-2.226-5-2.5M2 9.5c1.5-1.5 2.961-2.338 4.5-3m15.5 3c-3.928-3.317-8.264-4.571-12.5-3.762M2 2l20 20" color="currentColor"></svg:path>`,
})
export class HugeiconsWifiOff02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiSquareIcon],svg[hugeicons-wifi-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M8 10.314A6.8 6.8 0 0 1 11.995 9c1.478 0 2.854.486 4.005 1.321M14.174 13a4.5 4.5 0 0 0-2.18-.568a4.5 4.5 0 0 0-2.17.563M12 16h.006"></svg:path></svg:g>`,
})
export class HugeiconsWifiSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiUnlockIcon],svg[hugeicons-wifi-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.5 15.5c1.268-1.268 2.938-1.732 4.5-1.392M5.5 12c3.173-3.15 6.622-3.833 10-1.985M2 8c6.316-5.333 13.684-5.333 20 0m-5.469 7.36v-1.408A1.96 1.96 0 0 1 18.5 12c.489 0 .936.177 1.28.469M17.844 21h1.312c1.022 0 1.532 0 1.919-.205c.305-.162.555-.41.718-.712c.207-.384.207-.89.207-1.903s0-1.52-.207-1.903a1.74 1.74 0 0 0-.718-.712c-.387-.205-.897-.205-1.919-.205h-1.312c-1.022 0-1.532 0-1.919.205c-.305.162-.555.41-.718.712c-.207.384-.207.89-.207 1.903s0 1.52.207 1.903c.163.302.413.55.718.712c.387.205.897.205 1.919.205" color="currentColor"></svg:path>`,
})
export class HugeiconsWifiUnlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWikipediaIcon],svg[hugeicons-wikipedia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M5 8h1.05m0 0H7m-.95 0l2.577 6.82C9.177 16.275 9.451 17 9.9 17c.45 0 .724-.726 1.273-2.18L13.75 8h.75m-5 0h.75l2.577 6.82c.55 1.454.824 2.18 1.273 2.18c.45 0 .724-.726 1.273-2.18L17.95 8m0 0H17m.95 0H19"></svg:path></svg:g>`,
})
export class HugeiconsWikipediaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWindPowerIcon],svg[hugeicons-wind-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m7.5-.5a9.18 9.18 0 0 0-3.928-7m-10.144 0A9.18 9.18 0 0 0 3 10.5m9-1V7m-1.5 4.5l-2 1.5m4.998-1.5l2 1.5M12 12.5V22m6 0H6m4.08-18.01l.162 1.517c.058.542.086 1.111.628 1.378C11.103 7 11.402 7 12 7s.897 0 1.13-.115c.542-.267.57-.836.628-1.378l.162-1.517c.062-.585.245-1.36-.299-1.77C13.33 2 12.886 2 12 2s-1.329 0-1.621.22c-.544.41-.361 1.185-.299 1.77m9.011 8.945l-1.414-.626c-.505-.223-1.02-.486-1.529-.146c-.219.146-.37.407-.673.93s-.455.786-.473 1.048c-.04.61.446.922.892 1.246l1.25.908c.483.35 1.07.902 1.706.634c.342-.145.566-.533 1.016-1.308c.449-.776.674-1.164.628-1.53c-.084-.684-.857-.915-1.403-1.156m-14.182 0l1.414-.626c.505-.223 1.02-.486 1.529-.146c.219.146.37.407.673.93s.455.786.473 1.048c.04.61-.446.922-.892 1.246l-1.25.908c-.483.35-1.07.902-1.706.634c-.342-.145-.566-.533-1.016-1.308c-.449-.776-.673-1.164-.628-1.53c.084-.684.857-.915 1.403-1.156" color="currentColor"></svg:path>`,
})
export class HugeiconsWindPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWindPower01Icon],svg[hugeicons-wind-power-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 14v8m6 0H6"></svg:path><svg:circle cx="12" cy="12.5" r="1.5"></svg:circle><svg:ellipse cx="12" cy="5" rx="2" ry="3"></svg:ellipse><svg:path d="M17.262 17.95c-1.417-.813-2.123-2.234-1.578-3.173s2.137-1.041 3.554-.228c1.417.814 2.123 2.235 1.578 3.174s-2.136 1.041-3.554.228M6.738 17.95c1.417-.813 2.123-2.234 1.578-3.173s-2.137-1.041-3.554-.228c-1.417.814-2.123 2.235-1.578 3.174s2.137 1.041 3.554.228M12 8v3m1 2l3 2m-5-2l-3 2M7.5 3C4.81 4.507 3 7.323 3 10.548q.001.743.124 1.452M16.5 3c2.69 1.507 4.5 4.323 4.5 7.548q-.001.743-.124 1.452"></svg:path></svg:g>`,
})
export class HugeiconsWindPower01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWindPower02Icon],svg[hugeicons-wind-power-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.5 9a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M4 2.85a2.78 2.78 0 0 1 4 0l3.593 3.683a2.5 2.5 0 0 0-2.05 2zm16 12.3a2.78 2.78 0 0 1-4 0l-3.593-3.683a2.5 2.5 0 0 0 2.05-2zm0-12.3a2.78 2.78 0 0 0-4 0l-3.593 3.683a2.5 2.5 0 0 1 2.05 2zM4 15.15a2.78 2.78 0 0 0 4 0l3.594-3.683a2.5 2.5 0 0 1-2.05-2zm9.45.85l.32 2.521c.226 1.604.34 2.406.085 2.942C13.6 22 13.107 22 12.12 22h-.24c-.987 0-1.48 0-1.735-.537c-.254-.536-.141-1.338.085-2.942L10.55 16"></svg:path></svg:g>`,
})
export class HugeiconsWindPower02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWindPower03Icon],svg[hugeicons-wind-power-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 10.866a2 2 0 1 1-4.002.002A2 2 0 0 1 14 10.866"></svg:path><svg:path d="M13.99 10.684L20 14.368a3 3 0 0 1-4.098 1.099l-4.165-2.618m1.747-3.345V2.368c-1.657 0-2.967 1.344-2.967 3.002v4.134"></svg:path><svg:path d="M10.007 10.687L4 14.368a3 3 0 0 0 4.098 1.099l4.164-2.617m1.188 4.02l.32 2.022c.226 1.604.34 2.407.085 2.944s-.748.537-1.735.537h-.24c-.987 0-1.48 0-1.735-.537c-.254-.537-.141-1.34.085-2.944l.32-2.023"></svg:path></svg:g>`,
})
export class HugeiconsWindPower03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWindSurfIcon],svg[hugeicons-wind-surf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8 21l-1 1m15-3H2c5 1.714 10.975 3 15 3c3 0 5-2.265 5-3M16.01 2c2.168 5 .286 14.344-1.01 17"></svg:path><svg:path d="M16.202 3.919c-.4-.377-1.191-.908-1.267-.917c-.86-.107-.973.416-1.971 1.886c-1.266 1.66-4.155 5.164-5.168 6.023m0 0c.574 1.78 1.512 4.605 7.296 6.025M7.796 10.91c1.28 1.729 6.138 2.12 8.406 2.1"></svg:path></svg:g>`,
})
export class HugeiconsWindSurfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWindTurbineIcon],svg[hugeicons-wind-turbine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m7.5-.5a9.18 9.18 0 0 0-3.928-7m-10.144 0A9.18 9.18 0 0 0 3 10.5m9-1V7m-1.801-3.01l.152 1.517c.056.559.083.838.22 1.044a1 1 0 0 0 .369.334C11.158 7 11.439 7 12 7s.842 0 1.06-.115a1 1 0 0 0 .37-.334c.136-.206.163-.485.22-1.044l.15-1.517c.083-.827.124-1.24-.068-1.535a1 1 0 0 0-.212-.235C13.247 2 12.831 2 12 2s-1.247 0-1.521.22a1 1 0 0 0-.212.235c-.192.294-.15.708-.068 1.535m.501 7.76L8.535 13m-1.704 3.065l1.238-.89c.456-.327.684-.491.794-.712a1 1 0 0 0 .105-.487c-.01-.247-.15-.49-.43-.975c-.281-.486-.422-.73-.63-.861a1 1 0 0 0-.475-.153c-.246-.015-.502.1-1.013.332l-1.39.627c-.758.342-1.136.513-1.296.826a1 1 0 0 0-.097.301c-.053.348.154.708.57 1.428s.623 1.08.951 1.207q.15.057.31.066c.35.019.688-.224 1.363-.709M13.3 11.75L15.465 13m3.505-.055l-1.39-.627c-.511-.231-.767-.347-1.013-.332a1 1 0 0 0-.475.153c-.208.132-.349.375-.63.86c-.28.487-.42.73-.43.976c-.007.169.03.336.105.487c.11.22.338.385.794.712l1.238.89c.675.485 1.012.728 1.364.71a1 1 0 0 0 .309-.067c.328-.128.535-.488.95-1.207c.416-.72.624-1.08.57-1.428a1 1 0 0 0-.096-.3c-.16-.314-.538-.485-1.296-.827M12 12.5V22m6 0H6" color="currentColor"></svg:path>`,
})
export class HugeiconsWindTurbineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWindowsNewIcon],svg[hugeicons-windows-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22.072h1c3.98 0 5.97 0 7.36-1.39s1.39-3.38 1.39-7.36v-2c0-3.98 0-5.97-1.39-7.36s-3.38-1.39-7.36-1.39h-2c-3.98 0-5.97 0-7.36 1.39s-1.39 3.38-1.39 7.36v2c0 3.98 0 5.97 1.39 7.36s3.38 1.39 7.36 1.39zm.75-1.5H13c3.56 0 5.35 0 6.3-.95s.95-2.74.95-6.3v-.25h-7.5zm7.5-9v-.25c0-3.56 0-5.35-.95-6.3s-2.74-.95-6.3-.95h-.25v7.5zm-9 9v-7.5h-7.5v.25c0 3.56 0 5.35.95 6.3s2.74.95 6.3.95zm-7.5-9h7.5v-7.5H11c-3.56 0-5.35 0-6.3.95s-.95 2.74-.95 6.3z" color="currentColor"></svg:path>`,
})
export class HugeiconsWindowsNewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWindowsOldIcon],svg[hugeicons-windows-old-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.986 21.065c1.707.283 2.991.496 4.014.496l-.01.01c1.02 0 1.77-.21 2.43-.76c1.33-1.12 1.33-2.88 1.33-6.37v-4.24c0-3.49 0-5.24-1.33-6.37c-1.32-1.11-3.06-.83-6.52-.25l.11.74l-.12-.74l-2.91.48a.7.7 0 0 0-.197.033L7.89 4.57c-2.49.41-3.86.64-4.75 1.68c-.89 1.05-.89 2.43-.89 4.94v2.24c0 2.51 0 3.9.89 4.95c.889 1.029 2.256 1.26 4.74 1.678l.01.002l6.01.99zM3.75 13.061v.37c0 2.38.02 3.37.53 3.98c.524.613 1.616.796 3.78 1.158l.07.012l2.12.35v-5.87zm8 6.117v-6.117h8.5v1.37c0 3.04 0 4.56-.79 5.23c-.8.66-2.31.41-5.33-.09zm8.5-7.617h-8.5V5.444l2.38-.393h.01c1.72-.29 2.95-.49 3.83-.49c.67 0 1.14.11 1.48.4c.8.68.8 2.2.8 5.23zm-10-5.87v5.87h-6.5v-.37c0-2.38.02-3.37.53-3.97c.524-.623 1.617-.806 3.78-1.168l.07-.012z" color="currentColor"></svg:path>`,
})
export class HugeiconsWindowsOldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWinkIcon],svg[hugeicons-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8 14a5 5 0 0 0 4 2a5 5 0 0 0 4-2m-1-6s-1 1-1 2c.75-1 2.25-1 3 0M8.009 9H8m5.5 7l.735 1.32c.409.65 1.315.873 2.024.498c.709-.376.951-1.207.542-1.857L16 15"></svg:path></svg:g>`,
})
export class HugeiconsWinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWinkingIcon],svg[hugeicons-winking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8 15a5 5 0 0 0 4 2a5 5 0 0 0 4-2m-1-7s-1 1-1 2c.75-1 2.25-1 3 0M8.009 9H8"></svg:path></svg:g>`,
})
export class HugeiconsWinkingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWirelessIcon],svg[hugeicons-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 12.374C9.149 11.504 10.52 11 11.995 11c1.478 0 2.854.508 4.005 1.382m-1.826 2.336a4.3 4.3 0 0 0-2.18-.594c-.779 0-1.516.211-2.17.588M12 17.5h.006M7 6h.006M11 6h.006"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsWirelessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWirelessCloudAccessIcon],svg[hugeicons-wireless-cloud-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.478 8.398h.022c2.485 0 4.5 1.98 4.5 4.423a4.4 4.4 0 0 1-2 3.679m-2.522-8.102q.021-.243.022-.492C17.5 4.921 15.038 2.5 12 2.5c-2.877 0-5.238 2.171-5.48 4.937m10.958.961a5.33 5.33 0 0 1-1.235 2.949M6.52 7.437C3.984 7.675 2 9.774 2 12.33c0 1.759.94 3.302 2.352 4.17M6.52 7.437q.237-.022.48-.022c1.126 0 2.165.366 3 .983m-2 7.58c1.149-.935 2.52-1.478 3.995-1.478c1.478 0 2.854.547 4.005 1.487M14.174 18.5a4.1 4.1 0 0 0-2.18-.64a4.1 4.1 0 0 0-2.17.634M12 21.5h.006" color="currentColor"></svg:path>`,
})
export class HugeiconsWirelessCloudAccessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWiseIcon],svg[hugeicons-wise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11 22l8-20H7l2.5 4.5L5 11h7" color="currentColor"></svg:path>`,
})
export class HugeiconsWiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWomanIcon],svg[hugeicons-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.248 4.25c0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75s-2.75 1.23-2.75 2.75m1.5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-.98 18.24c.51.51 1.16.51 2.23.51v-.01c1.07 0 1.72 0 2.24-.52c.51-.51.51-1.16.51-2.23v-3.25c1.47-.01 2.31-.08 2.78-.84c.54-.85.05-1.74-.77-3.21l-1.8-3.24c-.59-1.05-1.72-1.7-2.96-1.7s-2.37.66-2.96 1.71l-1.8 3.24l-.023.041c-.797 1.446-1.283 2.327-.748 3.169c.47.76 1.32.84 2.78.84v3.25c0 1.07 0 1.71.52 2.24m.58-12.05c.33-.58.96-.94 1.65-.94v.03c.7 0 1.33.35 1.65.93l1.8 3.24l.147.27c.34.621.68 1.244.662 1.41c-.17.14-1.138.14-1.998.14h-.262c-.41 0-.75.34-.75.75v4c0 .5 0 1.11-.07 1.18c-.22.14-2.15.13-2.35 0c-.08-.09-.08-.7-.08-1.19v-4c0-.41-.34-.75-.75-.75h-.262c-.86 0-1.828 0-1.988-.12c-.03-.22.41-1.01.8-1.71z" color="currentColor"></svg:path>`,
})
export class HugeiconsWomanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWordpressIcon],svg[hugeicons-wordpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 6h1m0 0l4.457 11.492c.65 1.677.975 2.515 1.525 2.508s.853-.854 1.461-2.548l.057-.159M3 6h3.5m0 0h.957M6.5 6l4 11.294m0 0L12.816 11M10 6h1m0 0l4.457 11.492c.65 1.677.976 2.515 1.525 2.508s.853-.854 1.461-2.548l.057-.159M11 6h3.5m0 0h.957M14.5 6l4 11.294m0 0l2.029-5.65m0 0l1.009-2.41a7.7 7.7 0 0 0 .415-3.47C21.796 4.358 21.158 3 19.5 3c-1.538 0-2.29 1.723-1.311 2.894c1.58 1.888 2.982 3.981 2.339 5.75" color="currentColor"></svg:path>`,
})
export class HugeiconsWordpressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkIcon],svg[hugeicons-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.95 2.5h.1c.9 0 1.65 0 2.24.08c.63.08 1.19.27 1.65.73c.46.45.64 1.02.73 1.65c.06.43.07.95.08 1.55c.61.01 1.14.03 1.61.08c.89.09 1.63.28 2.28.71c.52.35.96.79 1.31 1.31c.43.65.62 1.39.71 2.28c.09.86.09 1.95.09 3.32v.08c0 1.37 0 2.46-.09 3.32c-.09.89-.28 1.63-.71 2.28c-.35.52-.79.96-1.31 1.31c-.65.43-1.39.62-2.28.71c-.87.09-1.95.09-3.32.09H8.96c-1.37 0-2.45 0-3.32-.09c-.89-.09-1.63-.28-2.28-.71c-.52-.35-.96-.79-1.31-1.31c-.43-.65-.62-1.39-.71-2.28c-.09-.86-.09-1.95-.09-3.32v-.08c0-1.37 0-2.46.09-3.32c.09-.89.28-1.63.71-2.28c.35-.52.79-.96 1.31-1.31c.65-.43 1.39-.62 2.28-.71c.47-.05 1-.07 1.61-.08c0-.6.02-1.12.08-1.55c.08-.63.27-1.2.73-1.65c.46-.46 1.02-.65 1.65-.73c.59-.08 1.34-.08 2.24-.08m3.23 2.66c.05.34.06.77.06 1.34h-6.5c0-.57.02-1 .06-1.34c.06-.47.17-.66.3-.79s.33-.24.79-.3C10.37 4 11.02 4 11.98 4s1.61 0 2.09.07c.46.06.66.17.79.3s.24.32.3.79zM5.79 8.08c-.77.08-1.23.23-1.6.47c-.35.23-.66.54-.9.89c-.24.37-.39.83-.47 1.6c-.08.78-.08 1.79-.08 3.21s0 2.43.08 3.21c.08.77.23 1.23.47 1.6c.24.35.54.66.9.89c.36.24.83.39 1.6.47c.78.08 1.79.08 3.21.08h6c1.42 0 2.43 0 3.21-.08c.77-.08 1.23-.23 1.6-.47c.35-.23.66-.54.9-.89c.24-.37.39-.83.47-1.6c.08-.78.08-1.79.08-3.21s0-2.43-.08-3.21c-.08-.77-.23-1.23-.47-1.6c-.24-.35-.54-.66-.9-.89c-.36-.24-.83-.39-1.6-.47C17.43 8 16.42 8 15 8H9c-1.42 0-2.43 0-3.21.08m.43 2.45a.75.75 0 0 0-.94.5c-.12.39.1.81.49.94l.65.2c1.55.48 3.18.75 4.82.82v1.26c0 .41.34.75.75.75s.75-.34.75-.75v-1.26c1.64-.07 3.27-.34 4.82-.82l.65-.2c.4-.13.62-.55.49-.94a.75.75 0 0 0-.94-.5l-.65.21a17.7 17.7 0 0 1-10.25 0l-.65-.21z" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkAlertIcon],svg[hugeicons-work-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.007 21H9.605c-3.585 0-5.377 0-6.491-1.135S2 16.903 2 13.25s0-5.48 1.114-6.615S6.02 5.5 9.605 5.5h3.803c3.585 0 5.378 0 6.492 1.135c.857.873 1.054 2.156 1.1 4.365"></svg:path><svg:path d="M17.5 19.525h.008m0-2.025v-2.025M22 17.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-6-12l-.1-.31c-.494-1.54-.742-2.31-1.331-2.75C13.979 2 13.197 2 11.632 2h-.264c-1.565 0-2.348 0-2.937.44c-.59.44-.837 1.21-1.332 2.75L7 5.5"></svg:path></svg:g>`,
})
export class HugeiconsWorkAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkHistoryIcon],svg[hugeicons-work-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.007 21H9.605c-3.585 0-5.377 0-6.491-1.135S2 16.903 2 13.25s0-5.48 1.114-6.615S6.02 5.5 9.605 5.5h3.803c3.585 0 5.378 0 6.492 1.135c.857.873 1.054 2.156 1.1 4.365"></svg:path><svg:path d="m18.85 18.85l-1.35-.9V15.7M13 17.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m3-12l-.1-.31c-.494-1.54-.742-2.31-1.331-2.75C13.979 2 13.197 2 11.632 2h-.264c-1.565 0-2.348 0-2.937.44c-.59.44-.837 1.21-1.332 2.75L7 5.5"></svg:path></svg:g>`,
})
export class HugeiconsWorkHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkUpdateIcon],svg[hugeicons-work-update-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.007 21H9.605c-3.585 0-5.377 0-6.491-1.135S2 16.903 2 13.25s0-5.48 1.114-6.615S6.02 5.5 9.605 5.5h3.803c3.585 0 5.378 0 6.492 1.135c.857.873 1.054 2.156 1.1 4.365"></svg:path><svg:path d="M17.5 22a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path><svg:path d="m19.5 18l-.586.554c-.667.63-1 .946-1.414.946m-2-1.5l.586.554c.667.63 1 .946 1.414.946m0 0v-4M16 5.5l-.1-.31c-.494-1.54-.742-2.31-1.331-2.75C13.979 2 13.197 2 11.632 2h-.264c-1.565 0-2.348 0-2.937.44c-.59.44-.837 1.21-1.332 2.75L7 5.5"></svg:path></svg:g>`,
})
export class HugeiconsWorkUpdateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowCircle01Icon],svg[hugeicons-workflow-circle-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0m12 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path d="M9 9h5c1.886 0 2.828 0 3.414.586S18 11.114 18 13v2M6 12v10M6 6V2"></svg:path></svg:g>`,
})
export class HugeiconsWorkflowCircle01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowCircle02Icon],svg[hugeicons-workflow-circle-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 19.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0-10a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-13 5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0-10a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0 0l7.5 5l-7 5l7.5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkflowCircle02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowCircle03Icon],svg[hugeicons-workflow-circle-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-3 3v1m0 0c0 .932 0 1.398.178 1.765c.236.49.69.88 1.262 1.083c.43.152.973.152 2.06.152s1.63 0 2.06.152c.571.203 1.026.593 1.262 1.083c.178.367.178.833.178 1.765v1m-7-7c0 .932 0 1.398-.178 1.765c-.236.49-.69.88-1.262 1.083C10.13 12 9.587 12 8.5 12s-1.63 0-2.06.152c-.571.203-1.026.593-1.262 1.083C5 13.602 5 14.068 5 15v1"></svg:path><svg:path d="M8 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0m14 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path></svg:g>`,
})
export class HugeiconsWorkflowCircle03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowCircle04Icon],svg[hugeicons-workflow-circle-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m12 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0M9 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-3-3V8"></svg:path><svg:path d="M18 8c0 .932 0 3.398-.152 3.765a2 2 0 0 1-1.083 1.083C16.398 13 15.932 13 15 13H9c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C6 14.602 6 15.068 6 16"></svg:path></svg:g>`,
})
export class HugeiconsWorkflowCircle04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowCircle05Icon],svg[hugeicons-workflow-circle-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m12 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0M9 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0M6 8v8"></svg:path><svg:path d="M6 12h8c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C18 10.1 18 9.4 18 8"></svg:path></svg:g>`,
})
export class HugeiconsWorkflowCircle05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowCircle06Icon],svg[hugeicons-workflow-circle-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m12 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0M9 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0M6 8v8"></svg:path><svg:path d="M15 14h-3a6 6 0 0 1-6-6"></svg:path></svg:g>`,
})
export class HugeiconsWorkflowCircle06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowSquare01Icon],svg[hugeicons-workflow-square-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 5.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C7.098 3 7.565 3 8.5 3h3c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C14 4.098 14 4.565 14 5.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C12.902 8 12.435 8 11.5 8h-3c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C6 6.902 6 6.435 6 5.5m0 10c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C7.098 13 7.565 13 8.5 13h3c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-3c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C6 16.902 6 16.435 6 15.5m14.84 1.64c.773-.773 1.16-1.16 1.16-1.64s-.387-.867-1.16-1.64l-.2-.2c-.773-.773-1.16-1.16-1.64-1.16s-.867.387-1.64 1.16l-.2.2c-.773.773-1.16 1.16-1.16 1.64s.387.867 1.16 1.64l.2.2c.773.773 1.16 1.16 1.64 1.16s.867-.387 1.64-1.16zM6.006 5.5H2.008m0 0V2m0 3.5V12c0 1.104-.152 2.468.888 3.163c.504.337 1.206.337 2.61.337m8.496 0h2m2.998-3v-3c0-1.886 0-2.828-.585-3.414c-.586-.586-1.528-.586-3.413-.586h-1M22 22c-.932 0-1.398 0-1.765-.13c-.49-.175-.88-.508-1.083-.928C19 20.627 19 20.227 19 19.429V19" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkflowSquare01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowSquare02Icon],svg[hugeicons-workflow-square-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2H5c-1.655 0-2-.345-2-2m10 9c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2h-4c-1.655 0-2-.345-2-2m0 7c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2h-4c-1.655 0-2-.345-2-2m4-9c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572c-.193-.038-.425-.038-.89-.038h-5c-.465 0-.697 0-.89-.038A2 2 0 0 1 7.038 6.89C7 6.697 7 6.465 7 6m10 9v3" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkflowSquare02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowSquare03Icon],svg[hugeicons-workflow-square-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2H5c-1.655 0-2-.345-2-2m10 9c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2h-4c-1.655 0-2-.345-2-2m-9 7c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2H6c-1.655 0-2-.345-2-2m13-9c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572c-.193-.038-.425-.038-.89-.038h-5c-.465 0-.697 0-.89-.038A2 2 0 0 1 7.038 6.89C7 6.697 7 6.465 7 6m10 9v1c0 1.886 0 2.828-.586 3.414S14.886 20 13 20h-1" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkflowSquare03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowSquare04Icon],svg[hugeicons-workflow-square-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 18c0-1.414 0-2.121.44-2.56C15.878 15 16.585 15 18 15s2.121 0 2.56.44c.44.439.44 1.146.44 2.56s0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44s-2.121 0-2.56-.44C15 20.122 15 19.415 15 18M3 9c0-1.414 0-2.121.44-2.56C3.878 6 4.585 6 6 6s2.121 0 2.56.44C9 6.878 9 7.585 9 9s0 2.121-.44 2.56C8.122 12 7.415 12 6 12s-2.121 0-2.56-.44C3 11.122 3 10.415 3 9m6 0h3c2.828 0 4.243 0 5.121.879C18 10.757 18 12.172 18 15M6 12v10M6 6V2" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkflowSquare04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowSquare05Icon],svg[hugeicons-workflow-square-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4.4c0-1.131 0-1.697.351-2.049C3.703 2 4.27 2 5.4 2h.2c1.131 0 1.697 0 2.049.351C8 2.703 8 3.27 8 4.4v.2c0 1.131 0 1.697-.351 2.049C7.297 7 6.73 7 5.6 7h-.2c-1.131 0-1.697 0-2.049-.351C3 6.297 3 5.73 3 4.6zm13 5c0-1.131 0-1.697.352-2.049C16.702 7 17.269 7 18.4 7h.2c1.131 0 1.697 0 2.048.351C21 7.703 21 8.27 21 9.4v.2c0 1.131 0 1.697-.352 2.049c-.35.351-.917.351-2.048.351h-.2c-1.131 0-1.697 0-2.048-.351C16 11.297 16 10.73 16 9.6zm-13 5c0-1.131 0-1.697.351-2.049C3.703 12 4.27 12 5.4 12h.2c1.131 0 1.697 0 2.049.351C8 12.704 8 13.27 8 14.4v.2c0 1.131 0 1.697-.351 2.048C7.297 17 6.73 17 5.6 17h-.2c-1.131 0-1.697 0-2.049-.352C3 16.298 3 15.731 3 14.6zm13 5c0-1.131 0-1.697.352-2.048c.35-.352.917-.352 2.048-.352h.2c1.131 0 1.697 0 2.048.352c.352.35.352.917.352 2.048v.2c0 1.131 0 1.697-.352 2.048c-.35.352-.917.352-2.048.352h-.2c-1.131 0-1.697 0-2.048-.352C16 21.298 16 20.731 16 19.6zM8 4.5l7 5l-6 5l7 5" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkflowSquare05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowSquare06Icon],svg[hugeicons-workflow-square-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5c0-1.414 0-2.121.44-2.56C9.878 2 10.585 2 12 2s2.121 0 2.56.44C15 2.878 15 3.585 15 5s0 2.121-.44 2.56C14.122 8 13.415 8 12 8s-2.121 0-2.56-.44C9 7.122 9 6.415 9 5M2 19c0-1.414 0-2.121.44-2.56C2.878 16 3.585 16 5 16s2.121 0 2.56.44C8 16.878 8 17.585 8 19s0 2.121-.44 2.56C7.122 22 6.415 22 5 22s-2.121 0-2.56-.44C2 21.122 2 20.415 2 19m14 0c0-1.414 0-2.121.44-2.56C16.878 16 17.585 16 19 16s2.121 0 2.56.44c.44.439.44 1.146.44 2.56s0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44s-2.121 0-2.56-.44C16 21.122 16 20.415 16 19M12 8v1m0 0c0 .932 0 1.398.178 1.765c.236.49.69.88 1.262 1.083c.43.152.973.152 2.06.152s1.63 0 2.06.152c.571.203 1.026.593 1.262 1.083c.178.367.178.833.178 1.765v1m-7-7c0 .932 0 1.398-.178 1.765c-.236.49-.69.88-1.262 1.083C10.13 12 9.587 12 8.5 12s-1.63 0-2.06.152c-.571.203-1.026.593-1.262 1.083C5 13.602 5 14.068 5 15v1" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkflowSquare06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowSquare07Icon],svg[hugeicons-workflow-square-07-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5c0-1.414 0-2.121.44-2.56C3.878 2 4.585 2 6 2s2.121 0 2.56.44C9 2.878 9 3.585 9 5s0 2.121-.44 2.56C8.122 8 7.415 8 6 8s-2.121 0-2.56-.44C3 7.122 3 6.415 3 5m0 14c0-1.414 0-2.121.44-2.56C3.878 16 4.585 16 6 16s2.121 0 2.56.44C9 16.878 9 17.585 9 19s0 2.121-.44 2.56C8.122 22 7.415 22 6 22s-2.121 0-2.56-.44C3 21.122 3 20.415 3 19M15 7c0-1.414 0-2.121.44-2.56C15.878 4 16.585 4 18 4s2.121 0 2.56.44C21 4.878 21 5.585 21 7s0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44s-2.121 0-2.56-.44C15 9.122 15 8.415 15 7m-9 9V8m12 2a3 3 0 0 1-3 3H9a3 3 0 0 0-3 3" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkflowSquare07Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowSquare08Icon],svg[hugeicons-workflow-square-08-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 19c0 1.414 0 2.121.44 2.56C3.878 22 4.585 22 6 22s2.121 0 2.56-.44C9 21.122 9 20.415 9 19s0-2.121-.44-2.56C8.122 16 7.415 16 6 16s-2.121 0-2.56.44C3 16.878 3 17.585 3 19M3 5c0 1.414 0 2.121.44 2.56C3.878 8 4.585 8 6 8s2.121 0 2.56-.44C9 7.122 9 6.415 9 5s0-2.121-.44-2.56C8.122 2 7.415 2 6 2s-2.121 0-2.56.44C3 2.878 3 3.585 3 5m12 9c0 1.414 0 2.121.44 2.56c.439.44 1.146.44 2.56.44s2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56s0-2.121-.44-2.56C20.122 11 19.415 11 18 11s-2.121 0-2.56.44C15 11.878 15 12.585 15 14M6 8v8m9-2h-3a6 6 0 0 1-6-6" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkflowSquare08Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowSquare09Icon],svg[hugeicons-workflow-square-09-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 19c0 1.414 0 2.121.44 2.56C3.878 22 4.585 22 6 22s2.121 0 2.56-.44C9 21.122 9 20.415 9 19s0-2.121-.44-2.56C8.122 16 7.415 16 6 16s-2.121 0-2.56.44C3 16.878 3 17.585 3 19M3 5c0 1.414 0 2.121.44 2.56C3.878 8 4.585 8 6 8s2.121 0 2.56-.44C9 7.122 9 6.415 9 5s0-2.121-.44-2.56C8.122 2 7.415 2 6 2s-2.121 0-2.56.44C3 2.878 3 3.585 3 5m12 0c0 1.414 0 2.121.44 2.56C15.878 8 16.585 8 18 8s2.121 0 2.56-.44C21 7.122 21 6.415 21 5s0-2.121-.44-2.56C20.122 2 19.415 2 18 2s-2.121 0-2.56.44C15 2.878 15 3.585 15 5M6 8v8m0-4h8c1.886 0 2.828 0 3.414-.586S18 9.886 18 8" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkflowSquare09Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowSquare10Icon],svg[hugeicons-workflow-square-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.694 3.62c1.122-1.087 1.683-1.63 2.37-1.62c.686.01 1.23.572 2.316 1.694c1.087 1.122 1.63 1.683 1.62 2.37c-.011.686-.572 1.229-1.694 2.316s-1.683 1.63-2.37 1.62c-.686-.011-1.23-.572-2.316-1.694C8.533 7.184 7.99 6.623 8 5.936c.011-.686.572-1.23 1.694-2.316M7 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m15 0a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0M12 10v7M9.5 8.5l-3 3m8-3l3 3m-8 7.9c0-1.131 0-1.697.351-2.049C10.203 17 10.77 17 11.9 17h.2c1.131 0 1.697 0 2.049.351c.351.352.351.918.351 2.049v.2c0 1.131 0 1.697-.351 2.048C13.797 22 13.23 22 12.1 22h-.2c-1.131 0-1.697 0-2.049-.352c-.351-.351-.351-.917-.351-2.048z" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkflowSquare10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkoutBattleRopesIcon],svg[hugeicons-workout-battle-ropes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.994 4.498a1.5 1.5 0 1 1-3-.001a1.5 1.5 0 0 1 3 0M20 8.998a1.87 1.87 0 0 1-1.484-.73l-1.026-1.35a5 5 0 0 0-.27-.338a1.88 1.88 0 0 0-2.222-.374m6.003 10.792a4.5 4.5 0 0 1-3.365-1.519l-.678-.767a6.77 6.77 0 0 0-3.713-2.149m-2.376-.136c-.31 0-.466 0-.61-.021c-1.24-.18-1.945-1.598-2.765-2.408m5.505-3.023L9.904 8.386l-2.06-.13M6.358 21.003v-4.638l-.185-.334l-.984-.909m0 0l-1.813-1.444a1 1 0 0 1-.378-.782v-.019l1.616-4.304l.076-.104a1 1 0 0 1 .891-.405l2.263.194M5.189 15.12l2.655-6.864" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkoutBattleRopesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkoutGymnasticsIcon],svg[hugeicons-workout-gymnastics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.996 9.501c0 .826-.67 1.496-1.499 1.496c-.828 0-1.499-.67-1.499-1.496c0-.825.671-1.495 1.5-1.495c.827 0 1.498.67 1.498 1.495M8.966 3l.859 5.772q.042.292.043.585v.081q0 .316-.066.622l-.05.234a1 1 0 0 1-.08.23l-2.68 5.466m3.432-7.235l5.518 2.304l.559.243c.338.147.596.432.707.783L20.002 21M9.51 11.96l5.124 2.011m0 0l-2.615 6.903m2.615-6.903l2.183-2.165" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkoutGymnasticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkoutKickingIcon],svg[hugeicons-workout-kicking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M8.948 14H8.14c-.813 0-1.22 0-1.5-.237c-.282-.237-.348-.636-.482-1.434l-.077-.459c-.072-.428-.108-.643-.055-.847c.052-.204.187-.375.457-.717l1.25-1.582M9.785 6L8.697 7.5l-.966 1.224M9.786 6l2.177-3M9.786 6l4.5 3.5m0 0L20 3m-5.714 6.5l-1.319 3M7.731 8.724l5.236 3.776m0 0V21" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkoutKickingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkoutRunIcon],svg[hugeicons-workout-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M15 21l-.664-2.616a4.9 4.9 0 0 0-1.315-2.288L11.5 14.6M6 11.153C7 9.183 8.538 8.04 12 8m0 0c.219-.003.544-.004.87-.004c.505 0 .757 0 .958.094s.408.34.82.834c.118.14.24.267.352.352M12 8l-1.27 1.958c-.697 1.076-1.046 1.615-1.06 2.18a2 2 0 0 0 .123.739c.195.53.7.927 1.707 1.721M15 9.277c1.155.866 2.963 1.214 5-1.079m-5 1.079l-3.5 5.322M4 17.73l.678.162C6.407 18.302 8.203 17.516 9 16" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkoutRunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkoutSportIcon],svg[hugeicons-workout-sport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M5 12l1.476-2.326c.26-.41.391-.616.562-.783c.17-.167.374-.29.782-.534l.922-.553c.862-.518 1.293-.777 1.77-.802s.93.187 1.839.61l1.695.792c.373.174.56.26.723.383q.174.13.318.295c.135.156.24.34.45.708c.37.647.555.97.816 1.199c.184.16.394.285.62.368c.32.118.68.118 1.398.118H19M11.5 7.5L8 14m0 0l1.447 2.026a2 2 0 0 1-.31 2.667L6.5 21M8 14h3.5m5.5 4l-2.4-3.2A2 2 0 0 0 13 14h-1.5m0 0L15 9" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkoutSportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkoutSquatsIcon],svg[hugeicons-workout-squats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M10.948 21l1.13-3.41c.404-1.215.606-1.823.304-2.244c-.301-.42-.94-.42-2.215-.42H8.933M18 8.346l-1.736.996c-.878.504-1.317.756-1.802.779c-.485.022-.945-.188-1.865-.608l-.783-.358m-2.881 5.77H7.925c-.948 0-1.423 0-1.725-.372c-.302-.374-.216-.793-.043-1.633c.29-1.406.872-3.153 1.935-4.341c.294-.328.44-.492.763-.56s.581.05 1.097.286l1.862.85m-2.881 5.77c.241-1.315 1.155-4.312 2.88-5.77" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkoutSquatsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkoutStretchingIcon],svg[hugeicons-workout-stretching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M14.36 15l.944-.546c1.075-.622 1.612-.933 1.684-1.376a1 1 0 0 0 .01-.209c-.036-.446-.546-.79-1.565-1.478l-4.707-3.177C8.877 6.966 8.452 4.69 9.75 3"></svg:path><svg:path d="M10.726 8.214C8.226 10.714 7 17.632 7 21m3.726-12.786C8.877 6.966 8.452 4.69 9.75 3m.975 5.214L13.372 10m.988 5l.944-.546c1.075-.622 1.612-.933 1.684-1.376a1 1 0 0 0 .01-.209c-.036-.446-.546-.79-1.565-1.478L13.373 10M15 21c-.973-1.135-1.974-2.7-2.95-4.142c-.683-1.01-1.025-1.516-1.065-2.045M13.373 10a15.6 15.6 0 0 0-1.77 2.894c-.44.927-.659 1.39-.618 1.92m0 0L8 14"></svg:path></svg:g>`,
})
export class HugeiconsWorkoutStretchingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkoutWarmUpIcon],svg[hugeicons-workout-warm-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.5 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M19 8.89l-5.022-.599M19 21l-.456-3.47c-.254-1.928-.38-2.892-1.053-3.4c-.672-.509-1.619-.357-3.513-.054l-1.838.295m1.838-6.08l-1.755-.209c-.803-.096-1.204-.144-1.508.062s-.416.6-.638 1.388l-.668 2.372c-.386 1.368-.579 2.053-.217 2.467c.361.414 1.054.303 2.44.081l.508-.081m1.838-6.08l-1.838 6.08M10 17l-.553 1.106a3 3 0 0 1-1.341 1.341L5 21" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkoutWarmUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorryIcon],svg[hugeicons-worry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="m16 15.6l-.27-.2c-.718-.533-1.563-.533-2.28 0l-.27.2c-.718.533-1.564.533-2.282 0l-.27-.2c-.717-.533-1.563-.533-2.28 0L8 15.658M8.009 9H8m8 0h-.009"></svg:path></svg:g>`,
})
export class HugeiconsWorryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWpsOfficeIcon],svg[hugeicons-wps-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13.5 14.5l2 4l6.5-13h-7l-3 6l-3.5 7L2 5.5h7l1.5 3" color="currentColor"></svg:path>`,
})
export class HugeiconsWpsOfficeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWpsOfficeRectangleIcon],svg[hugeicons-wps-office-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.327 14.415L14.1 16L18 8h-4.2L12 11.692L9.9 16L6 8h4.2l.488 1"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsWpsOfficeRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWrench01Icon],svg[hugeicons-wrench-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.358 13.357c-1.19 1.189-3.427 1.143-6.859 1.143a4 4 0 0 1-3.999-4c0-3.43-.046-5.67 1.143-6.859s1.715-1.14 6.984-1.14a.57.57 0 0 1 .406.973L15.32 6.187a1.763 1.763 0 1 0 2.492 2.494l2.714-2.712a.57.57 0 0 1 .974.405c0 5.268.048 5.794-1.142 6.983"></svg:path><svg:path d="m13.5 14.5l-6.172 6.172a2.829 2.829 0 0 1-4-4L9.5 10.5m-3.991 8H5.5"></svg:path></svg:g>`,
})
export class HugeiconsWrench01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWrench02Icon],svg[hugeicons-wrench-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 7.106c0 1.452-1.41 2.79-3.53 4.884a3.525 3.525 0 0 1-4.94 0C7.41 9.895 6 8.557 6 7.105s.354-1.743 3.608-4.96c.314-.312.852-.092.852.347v3.312c0 .84.689 1.523 1.54 1.523c.85 0 1.54-.681 1.54-1.522V2.494c0-.44.54-.659.852-.347C17.646 5.363 18 5.654 18 7.106"></svg:path><svg:path d="M15 12v7.165C15 20.731 13.657 22 12 22s-3-1.27-3-2.835V12m3.006 7l-.006.006"></svg:path></svg:g>`,
})
export class HugeiconsWrench02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWuduIcon],svg[hugeicons-wudu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.028 2l-2.881 2.975c-1.547 1.626-1.52 4.243.027 5.84a3.936 3.936 0 0 0 5.655-.027c1.574-1.626 1.547-4.243 0-5.84zM4 14h2.395c.294 0 .584.066.847.194l2.042.988c.263.127.553.193.848.193h1.042c1.008 0 1.826.791 1.826 1.767c0 .04-.027.074-.066.085l-2.541.703a1.95 1.95 0 0 1-1.368-.124L6.842 16.75M13 16.5l4.593-1.411a1.985 1.985 0 0 1 2.204.753c.369.51.219 1.242-.319 1.552l-7.515 4.337a2 2 0 0 1-1.568.187L4 20.02" color="currentColor"></svg:path>`,
})
export class HugeiconsWuduIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsXRayIcon],svg[hugeicons-x-ray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:rect width="20" height="18" rx="5" transform="matrix(0 -1 -1 0 21 22)"></svg:rect><svg:path d="M12 5v9m0 .332c-.953 0-1.857-.105-2.671-.294c-.875-.203-1.829.437-1.829 1.367c0 .485.266.935.707 1.099q.486.181 1.036.314c.592.143 1.112.53 1.37 1.1l.106.236c.232.516.732.846 1.281.846c.55 0 1.049-.33 1.281-.846l.107-.236c.257-.57.777-.957 1.37-1.1a9 9 0 0 0 1.035-.314c.44-.164.707-.614.707-1.1c0-.929-.954-1.57-1.829-1.366c-.813.189-1.718.294-2.671.294M15 7c-.387.619-.916 1-1.5 1s-1.113-.381-1.5-1c-.387.619-.916 1-1.5 1S9.387 7.619 9 7m-2 3c.644.619 1.527 1 2.5 1s1.856-.381 2.5-1c.644.619 1.527 1 2.5 1s1.856-.381 2.5-1"></svg:path></svg:g>`,
})
export class HugeiconsXRayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsXVariableIcon],svg[hugeicons-x-variable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 3.5c-6.367 0-9.633 17-16 17"></svg:path><svg:path d="M19 20.5c-1.618 0-2.426 0-3.108-.342a3.5 3.5 0 0 1-1.04-.8c-.53-.591-.82-1.438-1.401-3.13l-2.902-8.456c-.58-1.692-.87-2.539-1.4-3.13a3.5 3.5 0 0 0-1.04-.8C7.425 3.5 6.617 3.5 5 3.5"></svg:path></svg:g>`,
})
export class HugeiconsXVariableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsXVariableCircleIcon],svg[hugeicons-x-variable-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 8.99c-3.184 0-4.816 6.02-8 6.02"></svg:path><svg:path d="M15.54 15.01c-.809 0-1.253 0-1.594-.12a1.8 1.8 0 0 1-.52-.285c-.265-.209-.41-.508-.7-1.108l-1.451-2.995c-.29-.6-.436-.899-.7-1.108a1.8 1.8 0 0 0-.52-.284c-.342-.12-.786-.12-1.595-.12"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class HugeiconsXVariableCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsXVariableSquareIcon],svg[hugeicons-x-variable-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M16 9c-3.184 0-4.816 6.02-8 6.02"></svg:path><svg:path d="M15.54 15.02c-.809 0-1.253 0-1.594-.12a1.8 1.8 0 0 1-.52-.284c-.265-.21-.41-.509-.7-1.108l-1.451-2.995c-.29-.6-.436-.9-.7-1.108a1.8 1.8 0 0 0-.52-.284C9.712 9 9.268 9 8.46 9"></svg:path></svg:g>`,
})
export class HugeiconsXVariableSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsXingIcon],svg[hugeicons-xing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.936 2h1.719c.757 0 1.135 0 1.288.237s-.016.562-.355 1.21L15.09 13.982c-.26.497-.39.746-.375 1.01s.172.498.486.966l3.02 4.501c.457.68.685 1.02.537 1.28c-.148.261-.57.261-1.414.261h-2.096c-.591 0-.887 0-1.13-.135s-.39-.381-.683-.873l-3.02-5.063c-.272-.455-.407-.682-.415-.933c-.007-.25.115-.485.36-.953l5.709-10.937c.28-.538.421-.807.673-.957S17.31 2 17.936 2M4.277 6h1.136c.597 0 .895 0 1.134.15c.24.149.373.418.64.956l1.487 3c.217.438.326.658.326.894s-.109.456-.326.894l-1.487 3c-.267.538-.4.807-.64.957S6.01 16 5.413 16H4.277c-.718 0-1.078 0-1.223-.237s.015-.562.337-1.21l1.317-2.659c.218-.438.327-.658.327-.894s-.109-.456-.327-.894L3.391 7.447c-.322-.648-.482-.973-.337-1.21S3.559 6 4.277 6" color="currentColor"></svg:path>`,
})
export class HugeiconsXingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsXls01Icon],svg[hugeicons-xls-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13v-.804c0-2.967 0-4.45.469-5.636c.754-1.905 2.348-3.407 4.37-4.118C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.264 2.497 2.353c.268.677.268 1.525.268 3.22V13"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2m6.682 14H19.07c-.444 0-.666 0-.841.076c-.589.256-.589.853-.589 1.402v.044c0 .55 0 1.146.589 1.402c.175.076.397.076.841.076s.666 0 .841.076c.59.256.59.853.589 1.402v.044c0 .55 0 1.146-.588 1.402c-.176.076-.398.076-.842.076h-1.21M3.5 16l2 3m0 0l2 3m-2-3l2-3m-2 3l-2 3M14 22h-1c-.943 0-1.414 0-1.707-.293S11 20.943 11 20v-4"></svg:path></svg:g>`,
})
export class HugeiconsXls01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsXls02Icon],svg[hugeicons-xls-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8 13l1.708 2.5m0 0l1.708 2.5m-1.708-2.5l1.708-2.5m-1.708 2.5L8 18m8.562 0h-.854c-.805 0-1.208 0-1.458-.244s-.25-.637-.25-1.423V13m6.728 0h-.949c-.38 0-.569 0-.719.063c-.502.214-.502.71-.502 1.169v.036c0 .458 0 .955.502 1.169c.15.063.34.063.719.063c.38 0 .569 0 .718.063c.503.214.503.71.503 1.169v.036c0 .458 0 .955-.503 1.169c-.15.063-.339.063-.718.063h-1.034"></svg:path><svg:path d="M15 22h-4.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"></svg:path></svg:g>`,
})
export class HugeiconsXls02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsXml01Icon],svg[hugeicons-xml-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13v-.804c0-2.967 0-4.45.469-5.636c.754-1.905 2.348-3.407 4.37-4.118C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.264 2.497 2.353c.268.677.268 1.525.268 3.22V13"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2m-10 14l1.882 3m0 0l1.883 3m-1.883-3l1.883-3m-1.883 3L3.5 22m17 0h-.941c-.887 0-1.331 0-1.607-.293s-.276-.764-.276-1.707v-4m-7.558 6l.39-4.998c.033-.424.05-.636.172-.676s.247.127.497.459l.998 1.325c.135.18.203.27.294.27s.158-.09.294-.27l.998-1.326c.25-.332.375-.498.497-.458s.139.25.172.674l.393 5"></svg:path></svg:g>`,
})
export class HugeiconsXml01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsXml02Icon],svg[hugeicons-xml-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m7 13l1.647 2.5m0 0l1.647 2.5m-1.647-2.5l1.647-2.5m-1.647 2.5L7 18m14 0h-.823c-.777 0-1.165 0-1.406-.244c-.242-.244-.242-.637-.242-1.423V13m-6.176 5l.342-4.165c.029-.354.043-.53.15-.563s.216.105.435.382l.873 1.104c.119.15.178.225.257.225s.139-.075.257-.225l.874-1.105c.218-.276.328-.415.434-.382c.107.033.122.21.151.563L16.471 18"></svg:path><svg:path d="M15 22h-4.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"></svg:path></svg:g>`,
})
export class HugeiconsXml02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsXsl01Icon],svg[hugeicons-xsl-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13v-.804c0-2.967 0-4.45.469-5.636c.754-1.905 2.348-3.407 4.37-4.118C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.264 2.497 2.353c.268.677.268 1.525.268 3.22V13"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2m.041 14H12.43c-.444 0-.666 0-.841.076c-.597.26-.589.869-.589 1.424s-.008 1.165.588 1.424c.176.076.398.076.842.076s.666 0 .841.076c.597.26.589.869.589 1.424s.008 1.165-.589 1.424c-.175.076-.397.076-.841.076h-1.21M3.5 16l2 3m0 0l2 3m-2-3l2-3m-2 3l-2 3m17 0h-1c-.943 0-1.414 0-1.707-.293S17.5 20.943 17.5 20v-4"></svg:path></svg:g>`,
})
export class HugeiconsXsl01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsXsl02Icon],svg[hugeicons-xsl-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.662 13h-.95c-.379 0-.568 0-.718.063c-.51.216-.502.724-.502 1.187s-.007.97.502 1.187c.15.063.34.063.719.063s.569 0 .718.063c.51.216.503.724.503 1.187s.007.97-.503 1.187c-.15.063-.34.063-.718.063h-1.034M8 13l1.708 2.5m0 0l1.708 2.5m-1.708-2.5l1.708-2.5m-1.708 2.5L8 18m13 0h-.854c-.805 0-1.208 0-1.458-.244s-.25-.637-.25-1.423V13"></svg:path><svg:path d="M15 22h-4.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"></svg:path></svg:g>`,
})
export class HugeiconsXsl02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsYelpIcon],svg[hugeicons-yelp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.12 12.496a8 8 0 0 0-.103 1.899c.053.801.08 1.202.47 1.467c.388.265.831.118 1.716-.176l.81-.27c1.967-.652 2.95-.979 2.986-1.639s-.905-1.093-2.788-1.96l-.777-.36c-.848-.39-1.272-.585-1.688-.365s-.486.615-.626 1.404m14.203-.178l-.472.114c-2.228.544-3.343.816-3.738.27c-.396-.545.275-1.429 1.617-3.195l.282-.37c.566-.746.85-1.119 1.337-1.136c.488-.018.755.282 1.289.882q.503.565.882 1.216c.4.685.599 1.027.405 1.451s-.663.538-1.602.768M17.94 19.1q.317-.42.581-.885c.379-.667.568-1 .438-1.444l-.017-.054c-.152-.434-.547-.579-1.336-.869c-2.057-.755-3.085-1.133-3.47-.595l-.043.065c-.344.571.287 1.553 1.549 3.517c.484.753.726 1.13 1.142 1.163l.052.002c.417.005.646-.297 1.104-.9m-5.94.977v-.298c0-2.341 0-3.512-.585-3.744c-.585-.231-1.234.683-2.53 2.51l-.167.234c-.531.75-.797 1.124-.697 1.593c.1.47.43.64 1.09.977q.556.285 1.157.458c.704.203 1.056.304 1.394.007c.338-.296.338-.776.338-1.737m0-16.195v2.682c0 2.813 0 4.22-.777 4.415c-.778.196-1.573-1.01-3.163-3.421L6.633 5.394c-.486-.738-.73-1.106-.597-1.513c.132-.406.507-.574 1.257-.908a12 12 0 0 1 2.601-.819c.88-.169 1.321-.253 1.714.037c.392.29.392.757.392 1.69" color="currentColor"></svg:path>`,
})
export class HugeiconsYelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsYenIcon],svg[hugeicons-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3c.467 1.731 2.52 5.667 7 7.556m0 0C16.48 8.666 18.533 4.73 19 3m-7 7.556V21m-5.834-8h11.667M6.166 17h11.667" color="currentColor"></svg:path>`,
})
export class HugeiconsYenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsYenCircleIcon],svg[hugeicons-yen-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M9 7.5c.2.917 1.08 3 3 4m0 0c1.92-1 2.8-3.083 3-4m-3 4v5m2.5-3h-5"></svg:path></svg:g>`,
})
export class HugeiconsYenCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsYenReceiveIcon],svg[hugeicons-yen-receive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 3.5c.367 1.54 1.98 5.037 5.5 6.716m0 0C11.02 8.537 12.633 5.039 13 3.5m-5.5 6.716V20.5m-2.5-7h5m-5 4h5m4.5-4.5H22m-7.5 0c0 .7 1.994 2.008 2.5 2.5M14.5 13c0-.7 1.994-2.008 2.5-2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsYenReceiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsYenSendIcon],svg[hugeicons-yen-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 3.5c.367 1.54 1.98 5.037 5.5 6.716m0 0C11.02 8.537 12.633 5.039 13 3.5m-5.5 6.716V20.5m-2.5-7h5m-5 4h5M22 13h-7.5m7.5 0c0 .7-1.994 2.008-2.5 2.5M22 13c0-.7-1.994-2.008-2.5-2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsYenSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsYenSquareIcon],svg[hugeicons-yen-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.23 0-6.345 1.198-7.747q.256-.3.555-.555C5.655 2.5 7.77 2.5 12 2.5s6.345 0 7.747 1.198q.3.256.555.555C21.5 5.655 21.5 7.77 21.5 12s0 6.345-1.198 7.747q-.256.3-.555.555C18.345 21.5 16.23 21.5 12 21.5s-6.345 0-7.747-1.198q-.3-.256-.555-.555C2.5 18.345 2.5 16.23 2.5 12"></svg:path><svg:path d="M9 7.5c.2.917 1.08 3 3 4m0 0c1.92-1 2.8-3.083 3-4m-3 4v5m2.5-3h-5"></svg:path></svg:g>`,
})
export class HugeiconsYenSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
