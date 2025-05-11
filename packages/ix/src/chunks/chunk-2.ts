import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixScreenSettingsFilledIcon],svg[ix-screen-settings-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h384v298.667H277.333v42.666H320V448H192v-42.667h42.667v-42.666H64zm266.311 128.77l17.067-9.853a95.4 95.4 0 0 0-7.043-16.026l-1.71-2.961a96 96 0 0 0-10.47-14.256l-17.061 9.851c-9.63-9.805-21.87-17.037-35.595-20.571v-19.7a96.5 96.5 0 0 0-19.203-1.921c-6.574 0-12.994.661-19.197 1.92v19.699c-13.728 3.533-25.971 10.766-35.602 20.573l-17.06-9.85a96.3 96.3 0 0 0-10.4 14.14l-1.844 3.193a95.5 95.5 0 0 0-6.978 15.91l17.064 9.852a77 77 0 0 0-2.784 20.564c0 7.122.97 14.018 2.784 20.562l-17.065 9.852a95.5 95.5 0 0 0 7.002 15.953l1.796 3.109a96.3 96.3 0 0 0 10.424 14.181l17.06-9.849c9.631 9.807 21.874 17.04 35.603 20.573v19.698a96.4 96.4 0 0 0 19.197 1.92c6.577 0 12.998-.661 19.203-1.92v-19.7c13.726-3.533 25.966-10.766 35.596-20.571l17.061 9.85a96.4 96.4 0 0 0 10.497-14.301l1.656-2.869a95.4 95.4 0 0 0 7.069-16.073l-17.066-9.853a77 77 0 0 0 2.783-20.562a77 77 0 0 0-2.784-20.564m-74.007 49.364c15.906 0 28.8-12.894 28.8-28.8s-12.894-28.8-28.8-28.8s-28.8 12.894-28.8 28.8s12.894 28.8 28.8 28.8" clip-rule="evenodd"></svg:path>`,
})
export class IxScreenSettingsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixScreensIcon],svg[ix-screens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M127.998 149.333V384h138.667v42.667h-64v42.666h170.666v-42.666h-64V384H448V149.333zM170.665 192h234.688v149.333H170.665zm-128-128v234.667h64V256H85.331V106.667h234.667V128h42.667V64z"></svg:path>`,
})
export class IxScreensIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixScreensFilledIcon],svg[ix-screens-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M127.998 384V149.333H448V384H309.331v42.667h64v42.666H202.665v-42.666h64V384zm277.355-192H170.665v149.333h234.688zM42.665 298.667V64h320v64h-42.667v-21.333H85.331V256h21.334v42.667zM384 213.333H192V320h192z" clip-rule="evenodd"></svg:path>`,
})
export class IxScreensFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixScreenshotIcon],svg[ix-screenshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.334 42.667v64h256v256h64v42.667h-64v64h-42.667v-64h-256V42.667zm59.669 232.64l-59.67 63.782v23.578h213.334v-11.275l-45.568-45.557l-38.773 38.792zm153.664-125.973H149.334l-.001 127.315L208 213.96l70.315 70.328l38.8-38.789l45.552 45.553zM288 170.667c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32m-181.333-64v42.667h-64v-42.667z"></svg:path>`,
})
export class IxScreenshotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixScreenshotFilledIcon],svg[ix-screenshot-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.334 42.667v64h256v256h64v42.667h-64v64h-42.667v-64h-256V149.333h-64v-42.666h64v-64zM208 213.96l-58.666 62.69v62.44l59.669-63.783l69.323 69.32l38.773-38.792l45.568 45.556v-60.34L317.114 245.5l-38.799 38.79zM288 160c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32"></svg:path>`,
})
export class IxScreenshotFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixScriptIcon],svg[ix-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-42.667 42.667H106.667v298.666h298.666zm-176 37.333v32h-16c-8.836 0-16 7.163-16 16v49.294L182.635 256l14.698 14.706V320c0 8.837 7.164 16 16 16h16v32h-16c-26.51 0-48-21.49-48-48v-36.032l-16.647-16.654L137.373 256l11.313-11.314l16.647-16.675V192c0-25.405 19.737-46.2 44.714-47.89l3.286-.11zm69.334 0l3.286.11c24.977 1.69 44.714 22.485 44.714 47.89v36.01l16.647 16.676L374.627 256l-11.313 11.314l-16.647 16.654V320c0 26.51-21.49 48-48 48h-16v-32h16c8.836 0 16-7.163 16-16v-49.294L329.365 256l-14.698-14.706V192c0-8.837-7.164-16-16-16h-16v-32z"></svg:path>`,
})
export class IxScriptIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixScriptAddIcon],svg[ix-script-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 320l-.001 64h64v42.667l-64-.001v64H384v-64h-64V384h64v-64zm0-256l-.001 234.666h-42.667l.001-192H106.667V384l191.999-.001v42.667H64V64zm-197.334 80v32h-16a5.333 5.333 0 0 0-5.333 5.333v52.222l-5.37 4.774l-7.9 7.004l7.9 7.005l5.37 4.773v52.222a5.333 5.333 0 0 0 5.333 5.334h16v32h-16c-20.618 0-37.333-16.715-37.333-37.334v-37.845l-15.963-14.196l-13.454-11.959l13.454-11.958L176 219.157v-37.824c0-19.587 15.085-35.652 34.271-37.21l3.062-.123zm48 0l3.062.124c19.187 1.557 34.272 17.622 34.272 37.21v37.823l15.963 14.218l13.453 11.958l-13.453 11.959l-15.963 14.196v37.845c0 20.619-16.715 37.334-37.334 37.334h-16v-32h16a5.333 5.333 0 0 0 5.334-5.334v-52.222l5.37-4.773l7.899-7.005l-7.9-7.004l-5.37-4.774v-52.222a5.333 5.333 0 0 0-5.333-5.333h-16v-32z"></svg:path>`,
})
export class IxScriptAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixScriptsIcon],svg[ix-scripts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 128v320H128V128zm-42.667 42.667H170.667v234.666h234.666zm-133.333 16v32h-16a5.333 5.333 0 0 0-5.333 5.333v52.222l-5.37 4.774l-7.9 7.004l7.9 7.004l5.37 4.774V352a5.333 5.333 0 0 0 5.333 5.333h16v32h-16c-20.619 0-37.333-16.714-37.333-37.333v-37.845l-15.963-14.196L189.25 288l13.454-11.959l15.963-14.217V224c0-19.588 15.085-35.652 34.271-37.21l3.062-.123zm48 0l3.062.123c19.186 1.558 34.271 17.622 34.271 37.21v37.824l15.963 14.217L386.75 288l-13.454 11.959l-15.963 14.196V352c0 20.619-16.714 37.333-37.333 37.333h-16v-32h16a5.333 5.333 0 0 0 5.333-5.333v-52.222l5.37-4.774l7.9-7.004l-7.9-7.004l-5.37-4.774V224a5.333 5.333 0 0 0-5.333-5.333h-16v-32zM384 64v42.667H106.667V384H64V64z"></svg:path>`,
})
export class IxScriptsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSdCardIcon],svg[ix-sd-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 85.333v341.334H128V124.34l39.006-39.007zM85.333 426.667v-320l64-64h277.334v426.666H85.333zm266.667-320h-42.667V192H352zm-117.333 0h42.666V192h-42.666zm-32 0H160V192h42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxSdCardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSdCardFilledIcon],svg[ix-sd-card-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 42.667H170.667l-64 64v362.666h298.666zM192 170.667V85.333h-42.667v85.334zm42.667-85.334h42.666v85.334h-42.666zm128 0H320v85.334h42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxSdCardFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSdCardMicroIcon],svg[ix-sd-card-micro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 199.006L128 220.34v184.993h234.667V106.667H149.333zm-64 3.661l21.334-21.334V64h298.667v384h-320V320l21.333-21.333V256H85.334zm128-74.667h-32v64h32zM272 128h-32v64h32zm26.667 0h32v64h-32z" clip-rule="evenodd"></svg:path>`,
})
export class IxSdCardMicroIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSdCardMicroFilledIcon],svg[ix-sd-card-micro-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 64v120l-21.333 24v48H128v42.667L106.667 320v128H384V64zm74.667 42.667H160v64h42.667zm32 0h42.666v64h-42.666zm117.333 0h-42.667v64H352z" clip-rule="evenodd"></svg:path>`,
})
export class IxSdCardMicroFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSearchIcon],svg[ix-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.297 439.13L347.982 317.816C370.466 288.907 384 252.707 384 213.334c0-94.104-76.562-170.667-170.666-170.667S42.667 119.23 42.667 213.334S119.23 384 213.334 384c39.373 0 75.573-13.534 104.481-36.018l121.316 121.315zm-255.963-97.796c-70.584 0-128-57.417-128-128c0-70.584 57.416-128 128-128c70.583 0 128 57.416 128 128c0 70.583-57.417 128-128 128"></svg:path>`,
})
export class IxSearchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSelectAltIcon],svg[ix-select-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m106.667 64l298.666 201.671l-115.905 40.035l66.066 110.419L298.28 448l-66.067-110.419l-93.883 76.841zm52.071 87.028L174.8 328.835l60.629-49.629l74.837-25.841z"></svg:path>`,
})
export class IxSelectAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSelectAltFilledIcon],svg[ix-select-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m106.667 64l298.666 201.671l-115.905 40.035l66.066 110.419L298.28 448l-66.067-110.419l-93.883 76.841z"></svg:path>`,
})
export class IxSelectAltFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSendBackwardIcon],svg[ix-send-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 192v234.666H85.333V192zm-42.667 42.666H128V384h149.333zM426.667 85.333v256h-85.334V170.666H170.667V85.333z"></svg:path>`,
})
export class IxSendBackwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSendToBackIcon],svg[ix-send-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.333 298.667V448H64V298.667zm-42.666 42.666h-64v64h64zM277.333 128v106.667H384V384H234.667V277.333H128V128zM448 64v149.333H298.667V64zm-42.667 42.667h-64v64h64z"></svg:path>`,
})
export class IxSendToBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSeparatorLineIcon],svg[ix-separator-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 277.333H42.666v-42.666h426.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxSeparatorLineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixServerInterfaceIcon],svg[ix-server-interface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.667 64v384h170.666c22.493 0 40.921-17.405 42.55-39.482l.117-3.185V106.667c0-22.493-17.405-40.921-39.482-42.55L405.333 64zm42.666 42.615h128v298.666l-128 .052zm-127.052 192c-19.881 0-36.586 13.597-41.322 31.999H42.667v42.719l66.297-.03c4.744 18.392 21.444 31.978 41.317 31.978h63.052V298.615zm0-192c-19.881 0-36.586 13.597-41.322 31.999H42.667v42.689h66.297c4.744 18.392 21.444 31.978 41.317 31.978h63.052V106.667z"></svg:path>`,
})
export class IxServerInterfaceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShapesIcon],svg[ix-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 190.739L441.59 448H155.744zm-128-30.739c28.926 0 56.41 9.653 78.677 27.028l-23.111 36.207c-15.371-13.203-34.871-20.568-55.566-20.568c-47.129 0-85.334 38.205-85.334 85.333c0 37.369 24.235 69.946 58.99 81.196L128 405.333C72.583 390.389 42.667 346.212 42.667 288c0-70.692 57.307-128 128-128m128 118.592l-70.422 126.741h140.822zM448 64v234.667h-42.667V106.645h-192V128h-42.666V64z" clip-rule="evenodd"></svg:path>`,
})
export class IxShapesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShapesFilledIcon],svg[ix-shapes-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 320L288 128l-10.665 10.667c-21.333-21.334-42.666-32-85.333-32c-3.405 0-17.986-.219-21.335 0V64h277.335v256zm-266.664 85.333c-53.334-21.333-96-65.815-96-128c0-72.329 48.843-128 121.598-128c34.795 0 66.44 8.671 89.988 30.578zm149.331-192L426.667 448h-262.4z" clip-rule="evenodd"></svg:path>`,
})
export class IxShapesFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShareIcon],svg[ix-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M394.667 320c-21.687 0-41.047 9.396-54.688 24.162l-149.203-65.358c.654-3.973 1.224-7.98 1.224-12.137c0-7.768-1.522-15.11-3.722-22.154l151.995-76.319C353.899 182.764 373.145 192 394.667 192c41.237 0 74.667-33.43 74.667-74.666c0-41.237-33.43-74.667-74.667-74.667S320 76.097 320 117.334c0 4.34.567 8.533 1.278 12.67l-157.155 78.91C151.287 198.498 135.15 192 117.333 192c-41.236 0-74.666 33.43-74.666 74.667s33.43 74.667 74.667 74.667c21.687 0 41.046-9.396 54.687-24.162l149.203 65.358c-.653 3.973-1.224 7.98-1.224 12.137c0 41.237 33.43 74.667 74.667 74.667s74.667-33.43 74.667-74.667S435.904 320 394.667 320m0-234.666c17.645 0 32 14.355 32 32c0 17.644-14.355 32-32 32s-32-14.356-32-32c0-17.645 14.355-32 32-32M117.334 298.667c-17.645 0-32-14.355-32-32s14.355-32 32-32c17.644 0 32 14.355 32 32s-14.356 32-32 32m277.333 128c-17.645 0-32-14.355-32-32s14.355-32 32-32s32 14.355 32 32s-14.355 32-32 32"></svg:path>`,
})
export class IxShareIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShareAltIcon],svg[ix-share-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 192v42.667h-42.667v192h213.334v-192H320V192h85.333v277.333H106.667V192zm64-163.806l103.434 103.433l-30.17 30.17l-51.931-51.939v231.475h-42.666V109.858l-51.931 51.939l-30.17-30.17z" clip-rule="evenodd"></svg:path>`,
})
export class IxShareAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShareAltFilledIcon],svg[ix-share-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 192v170.667h85.334V192h106.666v277.333H106.667V192zM256 28.194l103.434 103.433l-30.17 30.17l-51.931-51.939v231.475h-42.666V109.858l-51.931 51.939l-30.17-30.17z" clip-rule="evenodd"></svg:path>`,
})
export class IxShareAltFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShareFilledIcon],svg[ix-share-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M394.667 320c-21.687 0-41.047 9.396-54.688 24.162l-149.203-65.358c.654-3.973 1.224-7.98 1.224-12.137c0-7.768-1.522-15.11-3.722-22.154l151.995-76.319C353.899 182.764 373.145 192 394.667 192c41.237 0 74.667-33.43 74.667-74.666c0-41.237-33.43-74.667-74.667-74.667S320 76.097 320 117.334c0 4.34.567 8.533 1.278 12.67l-157.155 78.91C151.287 198.498 135.15 192 117.333 192c-41.236 0-74.666 33.43-74.666 74.667s33.43 74.667 74.667 74.667c21.687 0 41.046-9.396 54.687-24.162l149.203 65.358c-.653 3.973-1.224 7.98-1.224 12.137c0 41.237 33.43 74.667 74.667 74.667s74.667-33.43 74.667-74.667S435.904 320 394.667 320"></svg:path>`,
})
export class IxShareFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShieldIcon],svg[ix-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 83.84L256.449 42.667L85.333 84.09v138.08l.274 12.587c4.7 107.416 69.051 171.735 117.398 205.151l10.839 7.169l12.434 7.468l10.821 5.872l7.222 3.59l5.725 2.644l6.403 2.682l6.125-2.563l12.416-5.962l8.181-4.374l9.239-5.345l15.418-9.91l11.037-7.917c48.792-36.631 108.311-103.827 107.749-213.459l-.119-25.42l-.049-93.284zM128.03 114.529l128.699-29.196l127.026 28.775l.065 61.328l.18 36.289l-.346 15.593c-4.141 81.816-44.749 142.237-110.437 188.397l-14.342 9.593l-2.274 1.359l-9.137-5.735l-12.049-8.152c-62.873-44.478-103.321-105.05-107.096-185.801L128 211.895z" clip-rule="evenodd"></svg:path>`,
})
export class IxShieldIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShieldBrokenIcon],svg[ix-shield-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256.449 42.667L426.667 83.84l-.221 17.259l.05 93.284l.118 25.42c.562 109.632-58.957 176.828-107.749 213.459l-11.037 7.917l-15.418 9.91l-9.239 5.345l-8.181 4.374l-12.415 5.962l-6.126 2.563l-6.403-2.682l-5.724-2.644l-7.223-3.591l-10.821-5.871l-12.434-7.468l-10.838-7.169c-48.348-33.416-112.699-97.735-117.4-205.151l-.273-12.587V84.09zm.28 42.666L128.03 114.53l-.03 97.366l.319 15.084c3.775 80.75 44.223 141.323 107.097 185.801l12.048 8.152l9.137 5.735l2.274-1.359l14.342-9.593c65.688-46.16 106.297-106.581 110.437-188.397l.346-15.593l-.18-36.289l-.064-61.328l-41.133-9.318l-38.177 60.654l45.378 19.262L186.44 352.625l74.828-148.426l-44.837-19.032l42.386-99.36z" clip-rule="evenodd"></svg:path>`,
})
export class IxShieldBrokenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShieldBrokenFilledIcon],svg[ix-shield-broken-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m311.874 171.817l65.452-99.754l-.865-.367l50.206 12.144l-.221 17.259l.049 93.284l.119 25.42c.562 109.632-58.957 176.828-107.749 213.459l-11.037 7.917l-15.418 9.91l-9.239 5.345l-8.181 4.374l-12.415 5.962l-6.126 2.563l-6.403-2.682l-5.725-2.644l-7.222-3.591l-10.821-5.871l-12.434-7.468l-10.839-7.169c-48.347-33.416-112.698-97.735-117.398-205.151l-.274-12.587V84.09L256.45 42.668l22.726 5.497l-62.978 142.683l48.901 20.757l-80.615 154.048l176.882-172.827z" clip-rule="evenodd"></svg:path>`,
})
export class IxShieldBrokenFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShieldCheckIcon],svg[ix-shield-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256.449 42.667L426.667 83.84l-.221 17.259l.05 93.284l.119 25.42c.561 109.632-58.958 176.828-107.75 213.459l-11.037 7.917l-15.418 9.91l-9.239 5.345l-8.181 4.374l-12.415 5.962l-6.126 2.563l-6.402-2.682l-5.725-2.644l-7.223-3.59l-10.82-5.872l-12.435-7.468l-10.838-7.169c-48.348-33.416-112.699-97.735-117.4-205.151l-.272-12.587V84.09zm.281 42.666l-128.7 29.196l-.03 97.366l.319 15.084c3.775 80.751 44.223 141.323 107.097 185.801l12.048 8.152l9.137 5.735l2.275-1.359l14.342-9.593c65.687-46.16 106.296-106.581 110.436-188.397l.346-15.593l-.18-36.289l-.064-61.328zm-12.024 245.109l112.438-124.119l-31.621-28.646l-80.817 89.214l-36.895-40.729l-31.621 28.645z" clip-rule="evenodd"></svg:path>`,
})
export class IxShieldCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShieldCheckFilledIcon],svg[ix-shield-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256.449 42.667L426.667 83.84l-.221 17.259l.05 93.284l.119 25.42c.561 109.632-58.958 176.828-107.75 213.459l-11.037 7.917l-15.418 9.91l-9.239 5.345l-8.181 4.374l-12.415 5.962l-6.126 2.563l-6.402-2.682l-5.725-2.644l-7.223-3.59l-10.82-5.872l-12.435-7.468l-10.838-7.169c-48.348-33.416-112.699-97.735-117.4-205.151l-.272-12.587V84.09zm100.695 163.656l-96.627 106.666l-15.811 17.454l-15.811-17.454l-52.705-58.182l31.621-28.645l36.895 40.729l80.817-89.214z" clip-rule="evenodd"></svg:path>`,
})
export class IxShieldCheckFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShieldFilledIcon],svg[ix-shield-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256.449 42.667L426.667 83.84l-.221 17.259l.049 93.284l.119 25.42c.562 109.632-58.957 176.828-107.749 213.459l-11.037 7.917l-15.418 9.91l-9.239 5.345l-8.181 4.374l-12.416 5.962l-6.125 2.563l-6.403-2.682l-5.725-2.644l-7.222-3.59l-10.821-5.872l-12.434-7.468l-10.839-7.169c-48.347-33.416-112.698-97.735-117.398-205.151l-.274-12.587V84.09z" clip-rule="evenodd"></svg:path>`,
})
export class IxShieldFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShieldHalfIcon],svg[ix-shield-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256.449 42.667L426.667 83.84l-.221 17.259l.05 93.284l.119 25.42c.561 109.632-58.958 176.828-107.75 213.459l-11.037 7.917l-15.418 9.91l-9.239 5.345l-8.181 4.374l-12.415 5.962l-6.126 2.563l-6.402-2.682l-5.725-2.644l-7.223-3.59l-10.82-5.872l-12.435-7.468l-10.838-7.169c-48.348-33.416-112.699-97.735-117.4-205.151l-.272-12.587V84.09zM256 85.499l-127.97 29.03l-.03 97.366l.319 15.084c3.775 80.751 44.223 141.323 107.097 185.801l12.048 8.152L256 426.29z" clip-rule="evenodd"></svg:path>`,
})
export class IxShieldHalfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShiftIcon],svg[ix-shift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M108.179 234.667c10.352-72.369 72.59-128 147.821-128s137.469 55.631 147.821 128H384v42.666h19.821c-9.355 65.402-61.086 117.133-126.488 126.488V384h-42.666v85.333h42.666v-22.505c88.995-9.838 159.657-80.5 169.495-169.495h22.505v-42.666h-22.505C436.216 138.668 354.828 64 256 64S75.784 138.668 65.172 234.667H42.667v42.666H128v-42.666zm169.644-86.844V266.97l57.752 57.768l-30.17 30.17l-70.249-70.249V147.823z" clip-rule="evenodd"></svg:path>`,
})
export class IxShiftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShiftFilledIcon],svg[ix-shift-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.67 257.621c-.897-117.819 93.887-214.056 211.705-214.953s214.056 93.888 214.952 211.706c.897 117.818-93.887 214.056-211.705 214.952c-117.819.897-214.056-93.887-214.953-211.705m86.771-22.957a128.344 128.344 0 0 1 151.72-104.523a128.34 128.34 0 0 1 101.402 104.523h-19.894v42.667h19.894a128.34 128.34 0 0 1-105.228 105.227v-19.893h-42.667v85.334h42.667v-22.672A170.664 170.664 0 0 0 425.33 277.331h22.673v-42.667h-22.672a170.666 170.666 0 0 0-311.145-73.62a170.65 170.65 0 0 0-27.515 73.62H64v42.667h85.334v-42.667zm147.894 9.905V149.33h-42.667v106.666l-.002.001l45.847 79.41l36.951-21.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxShiftFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShoppingCartIcon],svg[ix-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 149.333L149.333 42.667H42.667v42.666h72.32l55.68 277.334h256l42.666-213.334zM390.827 320H205.653l-25.6-128H417.28z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M256 437.333c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32m149.333 0c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32"></svg:path>`,
})
export class IxShoppingCartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShoppingCartFilledIcon],svg[ix-shopping-cart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 149.333L149.333 42.667H42.667v42.666h72.32l55.68 277.334h256l42.666-213.334z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M256 437.333c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32m149.333 0c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32"></svg:path>`,
})
export class IxShoppingCartFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShorterIcon],svg[ix-shorter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.667 384h42.666V128h-42.666zM192 255.36l-84.693 85.76l-30.294-30.293l33.067-33.067H42.667v-43.947h67.413L77.013 200.96l30.294-30.293zm212.693-84.693L320 256.427l84.693 84.693l30.294-30.293l-33.067-33.067h67.413v-43.947H401.92l33.067-32.853z"></svg:path>`,
})
export class IxShorterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShoutIcon],svg[ix-shout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 128Q384 192 384 256t-21.333 128L244.81 354.536c-3.844 28.68-28.41 50.797-58.143 50.797c-31.2 0-56.713-24.356-58.56-55.093l-.107-3.573v-18.134L42.667 320V192l106.667-10.667zm-192 208v10.667c0 8.836 7.163 16 16 16c8.1 0 14.794-6.02 15.854-13.83l.146-2.17V344zm162.048-156.544l-162.048 40.523v72.04l162.048 40.504l.879-3.783c4.429-20.84 6.952-41.622 7.582-62.369l.158-10.371c0-24.193-2.573-48.426-7.74-72.74zM128 226.346l-42.666 4.267v50.752L128 285.644zm277.334 8.32h64v42.667h-64zm-3.403 72.532l62.36 14.397l-9.598 41.573l-62.36-14.397zm-9.598-143.969l62.36-14.397l9.598 41.573l-62.36 14.397z"></svg:path>`,
})
export class IxShoutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixShoutFilledIcon],svg[ix-shout-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m128 183.466l21.334-2.133L362.667 128Q384 192 384 256t-21.333 128L244.81 354.536c-3.844 28.68-28.41 50.797-58.143 50.797c-31.2 0-56.713-24.356-58.56-55.093l-.107-3.573zm273.931 123.732l62.36 14.397l-9.598 41.573l-62.36-14.397zM170.667 336v10.667c0 8.836 7.163 16 16 16c8.1 0 14.794-6.02 15.854-13.83l.146-2.17V344zm-64-150.4v140.8l-64-6.4V192zm362.667 49.067v42.666h-64v-42.666zm-14.641-85.835l9.598 41.573l-62.36 14.397l-9.598-41.573z"></svg:path>`,
})
export class IxShoutFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSignLanguageIcon],svg[ix-sign-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M461.013 362.666a54.8 54.8 0 0 0-9.813-13.013a56.32 56.32 0 0 0 17.28-49.067a48.2 48.2 0 0 0-5.333-18.56a56.96 56.96 0 0 0-52.907-30.506h-1.707l13.44-24.96a53 53 0 0 0 5.547-12.8c6.653-24.756-3.985-50.914-26.027-64A55.7 55.7 0 0 0 387.2 144h-1.067l8.107-16c2.213-4.147 4-8.507 5.333-13.014c7.267-25.536-4.143-52.698-27.467-65.383s-52.326-7.502-69.813 12.477a47.2 47.2 0 0 0-12.16-9.814a56.1 56.1 0 0 0-42.666-5.76a56.96 56.96 0 0 0-37.12 26.24l-56.32 97.92v-1.92a57.4 57.4 0 0 0-23.894-25.386c-20.6-11.809-46.297-9.982-65.02 4.622S38.364 187.064 44.8 209.92l50.56 144l27.947-48.854l-2.987-8.746c-9.387-27.307-31.36-90.667-33.493-97.92a16.85 16.85 0 0 1 0-13.227a17.07 17.07 0 0 1 10.453-8.747a17.28 17.28 0 0 1 13.44 1.067a17.7 17.7 0 0 1 8.747 10.453c1.706 5.547 11.946 33.28 17.92 49.28v2.347h21.333L244.053 92.16c4.5-7.22 13.813-9.734 21.334-5.76c7.31 4.43 9.847 13.825 5.76 21.333l-41.174 76.587l35.414 21.333L331.093 92.16a15.36 15.36 0 0 1 10.24-8.32a16.64 16.64 0 0 1 12.374 1.706a15.15 15.15 0 0 1 7.466 9.814a16.2 16.2 0 0 1-1.706 12.16L293.973 220.8l35.2 21.333l17.494-30.293l13.013-21.334a16 16 0 0 1 9.6-7.466a16.43 16.43 0 0 1 12.587 1.92a16 16 0 0 1 7.466 9.6a15.36 15.36 0 0 1-1.92 12.16l-38.186 70.826l-53.334 27.094v-1.92a55.9 55.9 0 0 0-5.973-33.28A57.8 57.8 0 0 0 253.227 240A59.3 59.3 0 0 0 208 246.4a53.76 53.76 0 0 0-26.453 30.933l-33.92 149.333l50.773-26.453v-1.067s21.333-98.56 24.533-107.946a17.7 17.7 0 0 1 8.107-10.88a18.35 18.35 0 0 1 13.44-1.707a17.5 17.5 0 0 1 10.88 8.533a16.85 16.85 0 0 1 1.707 13.227c-1.494 5.333-7.467 33.28-9.814 44.587l16 21.333l142.08-73.387a16.64 16.64 0 0 1 12.374-1.066a16.43 16.43 0 0 1 9.6 8.106a15.15 15.15 0 0 1 0 12.16a15.57 15.57 0 0 1-7.894 9.387l-107.946 55.253L336.64 409.6l66.133-33.707a17.07 17.07 0 0 1 12.16-1.28a16.2 16.2 0 0 1 9.6 8.107a15.787 15.787 0 0 1-6.613 21.333l-59.947 33.28l26.027 32l54.4-29.653a59.3 59.3 0 0 0 11.52-8.107c18.985-17.749 23.549-46.097 11.093-68.907"></svg:path>`,
})
export class IxSignLanguageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSignalStrength0Icon],svg[ix-signal-strength-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667zm-42.667 88.747L164.267 384h262.4z"></svg:path>`,
})
export class IxSignalStrength0Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSignalStrength1Icon],svg[ix-signal-strength-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667zm-42.667 88.747L213.333 344.746v39.253h213.334z"></svg:path>`,
})
export class IxSignalStrength1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSignalStrength2Icon],svg[ix-signal-strength-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667zm-42.667 88.747L256 310.613v73.386h170.667z"></svg:path>`,
})
export class IxSignalStrength2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSignalStrength3Icon],svg[ix-signal-strength-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667zm-42.667 88.747L277.333 293.546v90.453h149.334z"></svg:path>`,
})
export class IxSignalStrength3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSignalStrength4Icon],svg[ix-signal-strength-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667zm-42.667 88.747l-128.001 102.4v107.519h128.001z"></svg:path>`,
})
export class IxSignalStrength4Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSignalStrength5Icon],svg[ix-signal-strength-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667zm-42.667 88.747l-85.334 68.266v141.653h85.334z"></svg:path>`,
})
export class IxSignalStrength5Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSignalStrength6Icon],svg[ix-signal-strength-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667zm-42.667 88.747l-64 51.199v158.72h64z"></svg:path>`,
})
export class IxSignalStrength6Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSignalStrength7Icon],svg[ix-signal-strength-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667zm-42.667 88.747L384 208.213v175.786h42.667z"></svg:path>`,
})
export class IxSignalStrength7Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSignalStrength8Icon],svg[ix-signal-strength-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667z"></svg:path>`,
})
export class IxSignalStrength8Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSimitComponentIcon],svg[ix-simit-component-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 128H128v82.815L85.333 189.48V85.333h341.334v125.482L384 189.48zm0 194.517V384H128v-82.816l-42.667 21.333v104.15h341.334V301.183zM170.667 256L64 309.333V202.666zm192 53.333L469.333 256l-106.666-53.334z"></svg:path>`,
})
export class IxSimitComponentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSimitMacroIcon],svg[ix-simit-macro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 106.667h256v82.815l42.667 21.333V64H85.333v29.482L128 114.815zm298.667 194.517L384 322.517v82.816H128v-8.149l-42.667 21.333V448h341.334zm-298.667-96v101.632l-42.667-21.333v-58.966zM170.667 160L64 213.333V106.667zM64 405.333L170.667 352L64 298.667zM469.333 256l-106.666 53.333V202.667zM192 192v128h23.614V216.39q3.922 16.53 6.805 26.556L244.512 320h21.935l22.733-79.221a385 385 0 0 0 6.244-24.389V320H320V192h-37.463l-19.853 69.195q-2.882 10.026-6.643 25.834q-3.765-15.989-6.565-25.834L229.865 192z"></svg:path>`,
})
export class IxSimitMacroIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSimitMacroComponentEditorIcon],svg[ix-simit-macro-component-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-42.667 42.667H106.667v298.666h298.666zm-182.2 147.515q9.119 0 16.592 1.74q7.475 1.663 16.966 5.972l-7.998 18.15q-12.63-6.956-24.215-6.956q-13.975 0-21.375 9.679q-7.773 10.132-7.773 26.769q0 17.241 8.147 26.995q8.146 9.68 22.496 9.68q6.502 0 11.958-1.74q5.456-1.815 13.228-6.502l6.95 19.283c-6.275 3.074-11.758 5.142-16.44 6.2q-7.026 1.664-17.34 1.664q-15.546 0-25.71-4.538q-14.2-6.352-21.45-20.038q-6.502-12.25-6.502-29.946q0-29.87 18.012-45.22q13.08-11.191 34.455-11.192M339.197 256v18.818h-39.864v24.316h37.863v18.818h-37.863v25.897h42.001v18.818h-64V256zM229.865 128l19.611 57.662q2.801 8.205 6.565 21.529c2.506-8.782 4.723-15.959 6.643-21.53L282.537 128H320v106.667h-24.576v-86.342a279 279 0 0 1-6.244 20.324l-22.733 66.018h-21.935l-22.093-64.211q-2.883-8.356-6.805-22.131v86.342H192V128z"></svg:path>`,
})
export class IxSimitMacroComponentEditorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSimulationTableIcon],svg[ix-simulation-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64v362.667h106.667V384h-64V106.667h298.666V320H448V64zm128 277.333V384h42.667v85.333h128V384h42.666v85.333h85.334v-42.666H448v-85.334H320v85.334h-42.667v-85.334zM192 128h-64v42.667h64zm32 0h64v42.667h-64zm160 0h-64v42.667h64zm-256 64h64v42.667h-64zm160 0h-64v42.667h64zm32 0h64v42.667h-64zm-128 64h-64v42.667h64zm32 0h64v42.667h-64zm160 0h-64v42.667h64z" clip-rule="evenodd"></svg:path>`,
})
export class IxSimulationTableIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSingleCheckIcon],svg[ix-single-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m396.117 94.833l35.5 23.667l-185.101 277.652L91.582 241.218l30.17-30.17l118.12 118.104z"></svg:path>`,
})
export class IxSingleCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSkipIcon],svg[ix-skip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.333 128v256H384V128zM128 128v256l213.333-128zm42.667 75.328L258.432 256l-87.765 52.65z"></svg:path>`,
})
export class IxSkipIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSkipBackIcon],svg[ix-skip-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 128v256h42.667V128zm256 0v256L170.667 256zm-42.667 75.328L253.568 256l87.765 52.65z"></svg:path>`,
})
export class IxSkipBackIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSkipBackFilledIcon],svg[ix-skip-back-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 128v256h42.667V256.005L384 384V128L170.667 255.99V128z"></svg:path>`,
})
export class IxSkipBackFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSkipFilledIcon],svg[ix-skip-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 128v256h-42.667V256.005L128 384V128l213.333 127.99V128z"></svg:path>`,
})
export class IxSkipFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSmsIcon],svg[ix-sms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 42.666c-23.564 0-42.667 19.103-42.667 42.667v341.333c0 23.564 19.103 42.667 42.667 42.667h170.667c23.564 0 42.666-19.103 42.666-42.667V319.999h-32l-10.666 10.667v96H128V85.333h170.667v42.666h42.666V85.333c0-23.564-19.102-42.667-42.666-42.667zm106.667 320v42.667H192v-42.667zm-64-256H256v21.333h-85.333zM448 149.333H256v192l42.667-42.667H448zM399.998 224c0 8.836 7.163 16 16 16s16-7.164 16-16s-7.163-16-16-16s-16 7.163-16 16M352 240c-8.837 0-16-7.163-16-16s7.163-16 16-16s16 7.164 16 16s-7.163 16-16 16m-80.002-16c0 8.837 7.163 16 16 16s16-7.163 16-16s-7.163-16-16-16s-16 7.164-16 16" clip-rule="evenodd"></svg:path>`,
})
export class IxSmsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSnowflakeIcon],svg[ix-snowflake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m277.333 42.667l-1.23 49.174l44.678-35.088l19.77 25.162l-65.486 51.453l-2.342 93.664l79.947-48.86l11.816-82.438l31.676 4.54l-8.07 56.248l41.993-25.664l21.333 36.95l-43.2 23.523l52.726 21.148l-11.906 29.703l-77.303-30.986L289.447 256l78.217 42.589l83.424-28.349l10.296 30.299l-55.505 18.858l45.54 24.795l-21.334 36.95l-44.243-27.039l11.421 57.496l-31.387 6.233l-17.162-86.42l-75.991-46.445l2.226 89.032l66.263 58.073l-21.091 24.066l-44.085-38.64l1.297 51.836h-42.667l1.295-51.835l-44.083 38.639l-21.09-24.066l66.261-58.073l2.226-89.032l-75.99 46.444l-17.162 86.421l-31.387-6.233l11.42-57.498l-44.242 27.041l-21.333-36.95l45.537-24.796l-55.503-18.857l10.296-30.299l83.424 28.348L222.55 256l-82.287-44.804l-77.302 30.986l-11.906-29.703l52.747-21.136l-43.221-23.534l21.333-36.95l41.971 25.651l-8.048-56.236l31.676-4.54l11.817 82.439l79.945 48.859l-2.342-93.665l-65.485-51.452l19.77-25.162l44.677 35.112l-1.229-49.198z"></svg:path>`,
})
export class IxSnowflakeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSolidStateDriveIcon],svg[ix-solid-state-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.333 469.333H320v-42.666h-42.667v42.666H256v-42.666h-42.667v42.666h-128V42.667h341.334v426.666H384v-42.666h-42.667zm10.667-64l32-32v-256l-32-32H160l-32 32v256l32 32zm-32-256V128H192v21.333h-42.667V192H192v21.333h-42.667V256H192v21.333h-42.667V320H192v21.333h128V320h42.667v-42.667H320V256h42.667v-42.667H320V192h42.667v-42.667zm-106.667 0h85.334V320h-85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxSolidStateDriveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSortIcon],svg[ix-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m219.52 295.985l30.166 30.167L149.27 426.666L48.853 326.152l30.167-30.167l48.916 48.917V106.666h42.667v238.236zM362.603 85.333L262.185 185.855l30.167 30.167l48.918-48.918v238.229h42.666V167.106l48.916 48.916l30.166-30.167z"></svg:path>`,
})
export class IxSortIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSortAltIcon],svg[ix-sort-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 128V85.333h426.666V128zm0 149.333v-42.666H320v42.666zm0 149.334V384h170.666v42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxSortAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSortAscendingIcon],svg[ix-sort-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m463.082 207.19l-30.167 30.166L384 188.44v238.227h-42.667v-238.23l-48.918 48.919l-30.166-30.167l100.418-100.522zm-292.415-36.523H64v42.667h106.667zm42.666 106.667H64V320h149.333zM64 426.667h192V384H64z"></svg:path>`,
})
export class IxSortAscendingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSortDescendingIcon],svg[ix-sort-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 320h106.667v42.667H64zm0-64h149.333v-42.666H64zm0-106.666h192v-42.667H64zm368.917 146.652L384 344.903V106.667h-42.667v238.236l-48.916-48.917l-30.167 30.167l100.417 100.514l100.416-100.514z"></svg:path>`,
})
export class IxSortDescendingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSoundLoudIcon],svg[ix-sound-loud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m403.966 426.944l-33.285-26.63c74.193-81.075 74.193-205.015-.001-286.09l33.285-26.628c86.612 96.712 86.61 242.635.001 339.348M319.58 155.105l-33.324 26.659c39.795 42.568 39.794 108.444.001 151.012l33.324 26.658c52.205-58.22 52.205-146.109-.001-204.329m-85.163-69.772l-110.854 87.23H42.667v170.666h81.02l110.73 85.458zM85.334 215.229h53.02l53.396-42.021v168.646l-53.52-41.292H85.333z"></svg:path>`,
})
export class IxSoundLoudIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSoundLoudFilledIcon],svg[ix-sound-loud-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m403.966 426.944l-33.285-26.63c74.193-81.075 74.193-205.015-.001-286.09l33.285-26.628c86.612 96.712 86.61 242.635.001 339.348M319.58 155.105l-33.324 26.659c39.795 42.568 39.794 108.444.001 151.012l33.324 26.658c52.205-58.22 52.205-146.109-.001-204.329m-85.163-69.772l-110.854 87.23H42.667v170.666h81.02l110.73 85.458z"></svg:path>`,
})
export class IxSoundLoudFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSoundMuteIcon],svg[ix-sound-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m403.375 257.27l59.584 59.584l-30.167 30.166l-59.583-59.583l-59.584 59.583l-30.166-30.166l59.583-59.584l-59.583-59.583l30.166-30.166l59.584 59.583l59.583-59.583l30.167 30.166zM234.417 85.333l-110.854 87.23H42.667v170.666h81.02l110.73 85.458zM85.334 215.229h53.02l53.396-42.021v168.646l-53.52-41.292H85.333z"></svg:path>`,
})
export class IxSoundMuteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSoundMuteFilledIcon],svg[ix-sound-mute-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m403.375 257.27l59.584 59.584l-30.167 30.166l-59.583-59.583l-59.584 59.583l-30.166-30.166l59.583-59.584l-59.583-59.583l30.166-30.166l59.584 59.583l59.583-59.583l30.167 30.166zM234.417 85.333l-110.854 87.23H42.667v170.666h81.02l110.73 85.458z"></svg:path>`,
})
export class IxSoundMuteFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSoundOffIcon],svg[ix-sound-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m89.752 59.582l362.667 362.667l-30.17 30.17l-187.833-187.834l.001 164.103l-110.73-85.458h-81.02V172.563h80.896l10.537-8.293l-74.518-74.518zm314.213 28.015c67.74 75.639 82.5 181.38 44.28 270.137l-32.95-32.952c23.87-71.003 8.998-151.972-44.615-210.558zM164.491 194.66l-26.137 20.57h-53.02v85.333h52.895l53.521 41.291V221.92zm155.089-39.554c28.626 31.924 41.556 72.768 38.788 112.75L309.13 218.62c-4.968-13.304-12.593-25.857-22.874-36.854Zm-85.163-69.772l-.001 58.573l-32.78-32.78z"></svg:path>`,
})
export class IxSoundOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSoundOffFilledIcon],svg[ix-sound-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m89.752 59.582l251.583 251.584l5.433 5.432l49.473 49.473v-.001l30.861 30.861h-.001l25.318 25.318l-30.17 30.17l-187.833-187.834l.001 164.103l-110.73-85.458h-81.02V172.563h80.896l10.537-8.293l-74.518-74.518zm314.213 28.015c67.74 75.639 82.5 181.38 44.28 270.136l-32.95-32.95c23.87-71.003 8.999-151.972-44.615-210.559zm-84.385 67.509c28.626 31.924 41.556 72.77 38.788 112.752l-49.236-49.236c-4.823-12.914-12.148-25.12-21.976-35.884l-.9-.973zm-85.163-69.772l-.001 58.574l-32.78-32.78z"></svg:path>`,
})
export class IxSoundOffFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSoundQuietIcon],svg[ix-sound-quiet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m319.581 359.435l-33.324-26.66c39.793-42.567 39.794-108.443-.001-151.01l33.324-26.66c52.206 58.22 52.206 146.108.001 204.33M234.417 85.333l-110.854 87.23H42.667v170.666h81.02l110.73 85.458zM85.334 215.229h53.02l53.396-42.021v168.646l-53.52-41.292H85.333z"></svg:path>`,
})
export class IxSoundQuietIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSoundQuietFilledIcon],svg[ix-sound-quiet-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m319.581 359.435l-33.324-26.66c39.793-42.567 39.794-108.443-.001-151.01l33.324-26.66c52.206 58.22 52.206 146.108.001 204.33M234.417 85.333l-110.854 87.23H42.667v170.666h81.02l110.73 85.458z"></svg:path>`,
})
export class IxSoundQuietFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSpatialIcon],svg[ix-spatial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m301.121 40.832l168.213 96.121v251.98l-258.455 82.235l-168.212-96.121v-251.98zm-3.713 258.752l-62.741 19.966v99.273l174.336-55.484zM192 333.127l-87.786 27.936L192 411.237zm234.667-154.619l-117.334 37.334v65.968l117.334 67.048zm-341.334-3.081v169.258L192 310.746V236.38zM288 222.629l-53.333 16.97v57.571L288 280.2zm0-132.876l-171.245 54.489l99.032 56.59L288 177.855zm21.333 4.905v76.409l85.873-27.323z"></svg:path>`,
})
export class IxSpatialIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSpiderchartIcon],svg[ix-spiderchart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 64l213.333 148.203L385.797 448H126.203L42.667 212.203zm-55.75 293.868l-38.498 50.206h188.482l-22.986-29.964zM95.153 235.957l54.573 154.051l34.469-44.936l-32.84-94.183zm313.517 22.937l-62.215 110.492l15.783 20.602zm-42.026-9.602l-93.302 24.773l45.743 59.668zM256 285.206l-28.066 36.59l63.947 10.201zm-56.168-21.441l14.615 41.861l24.197-31.561zm66.6-60.507l.007 51.944l85.549-22.719zm-20.878 10.481L207.933 245.2l37.621 10.001zm0-93.145l-140.171 97.377l54.448 14.453l85.723-71.726zm20.878 0v40.264l114.012 38.927z" clip-rule="evenodd"></svg:path>`,
})
export class IxSpiderchartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSpiderchartFilledIcon],svg[ix-spiderchart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m202.669 356.782l121.155 19.33L376.379 448H137.491zM42.667 219.842l106.491 27.815l34.64 99.5l-64.286 89.957zm426.666-2.889l-76.93 217.455l-46.498-63.586l79.82-141.945zm-100.668 27.53l-50.069 89.001l-45.882-62.752zm-113.089 38.274l34.076 46.616l-60.503-9.644zm-57.136-22.219l39.826 10.397l-24.333 34.062zm46.414-51.317v42.343l-38.529-10.072zm21.251-10.683l85.856 29.362l-85.844 23.501zM244.854 64v91.178l-87.705 73.475l-108.32-28.283zm21.251 0l193.368 134.498l-37.318 10.214l-156.05-53.372z" clip-rule="evenodd"></svg:path>`,
})
export class IxSpiderchartFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSplitIcon],svg[ix-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m368.917 100.42l27.58 27.58H279.163L172.497 234.667H42.667v42.666h129.83L279.163 384H396.5l-27.583 27.583l30.169 30.17l79.085-79.085l-79.085-79.085l-30.169 30.17l27.58 27.58h-99.661L211.503 256l85.333-85.333H396.5l-27.583 27.583l30.169 30.17l79.085-79.085l-79.085-79.085z" clip-rule="evenodd"></svg:path>`,
})
export class IxSplitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSplitHorizontallyIcon],svg[ix-split-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zM106.667 277.333v128h298.666v-128zm0-42.666h298.666v-128H106.667z"></svg:path>`,
})
export class IxSplitHorizontallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSplitVerticallyIcon],svg[ix-split-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-341.333 42.667v298.666h128V106.667zm170.666 298.666h128V106.667h-128z"></svg:path>`,
})
export class IxSplitVerticallyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStackedBarchartIcon],svg[ix-stacked-barchart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M170.667 128.001h64v64h-64zm-42.667 64H64v85.334h64zm0 106.667H64v128h64zm106.667-85.333h-64v213.333h64zm42.666 21.333h64v64h-64zm64 85.333h-64v106.667h64zM384 149.335h64v64h-64zm64 85.333h-64v192h64zm-277.333-160h64v32h-64zM128 149.335H64v21.333h64zm149.333 21.333h64v42.667h-64zm106.667-64h64v21.333h-64z" clip-rule="evenodd"></svg:path>`,
})
export class IxStackedBarchartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStampIcon],svg[ix-stamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 426.667v42.667H106.667v-42.667zM256 42.667c53.02 0 96 38.205 96 85.333c0 25.266-12.353 47.966-31.982 63.591L320.007 256H416l32 149.334H64L96 256h96.001l.002-64.392C172.361 175.983 160 153.275 160 128c0-47.128 42.98-85.333 96-85.333m125.504 256h-251.03l-13.717 64h278.464zM256 85.334c-30.501 0-53.333 20.295-53.333 42.666c0 11.182 5.554 21.989 15.898 30.218l16.106 12.811l-.001 20.58l-.025 64.391h42.688l.021-84.983l16.092-12.809c10.337-8.228 15.887-19.03 15.887-30.208c0-22.371-22.832-42.666-53.333-42.666"></svg:path>`,
})
export class IxStampIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStampFilledIcon],svg[ix-stamp-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 426.667h298.666v42.667H106.667ZM256 42.667c47.128 0 85.333 33.43 85.333 74.667c0 27.637-17.16 51.767-42.666 64.677L298.666 256H416l32 149.334H64L96 256h117.333v-73.989c-25.506-12.91-42.666-37.04-42.666-64.677c0-41.238 38.205-74.667 85.333-74.667"></svg:path>`,
})
export class IxStampFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStandbyIcon],svg[ix-standby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 119.073c62.546 25.317 106.666 86.636 106.666 158.26C426.666 371.59 350.256 448 256 448c-94.257 0-170.667-76.41-170.667-170.667c0-71.624 44.12-132.943 106.666-158.26v47.385c-38.259 22.132-64 63.497-64 110.875c0 70.693 57.308 128 128 128s128-57.307 128-128c0-47.378-25.74-88.743-63.999-110.875zM277.333 64v213.333h-42.667V64z"></svg:path>`,
})
export class IxStandbyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStarIcon],svg[ix-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 18.64l62.782 150.947l162.96 13.065l-124.158 106.355l37.932 159.021L256 362.812l-139.517 85.216l37.932-159.021L30.257 182.652l162.96-13.065zm33.395 191.395L256 129.728l-33.396 80.307l-86.69 6.946l66.05 56.576l-20.183 84.587L256 312.816l74.197 45.328l-20.162-84.587l66.029-56.576z"></svg:path>`,
})
export class IxStarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStarAddIcon],svg[ix-star-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.666 320v64h64v42.667l-64-.001v64H384v-64h-64V384h64v-64zm-192-301.36l56.85 136.682l147.56 11.83l-112.425 96.304l23.664 99.21h-51.649v6.711l-64-39.09l-126.332 77.163l34.348-143.994l-112.425-96.304l147.56-11.83zm0 111.067l-27.462 66.063l-71.29 5.702l54.317 46.535l-16.6 69.56l61.035-37.276l61.014 37.277l-16.578-69.561l54.295-46.535l-71.268-5.702z"></svg:path>`,
})
export class IxStarAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStarAddFilledIcon],svg[ix-star-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.666 320v64h64v42.667l-64-.001v64H384l-.001-64h-64V384h64v-64zm-192-301.36l56.85 136.682l147.56 11.83l-112.425 96.304l23.664 99.21h-51.649v6.711l-64-39.09l-126.332 77.163l34.348-143.994l-112.425-96.304l147.56-11.83z"></svg:path>`,
})
export class IxStarAddFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStarCancelledIcon],svg[ix-star-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m79.12 70.168l362.667 362.667l-30.17 30.17l-16.381-16.382l.316 1.325l-139.516-85.216l-139.517 85.216l37.932-159.021L30.293 182.572l93.402-7.489l-74.744-74.745zm84.2 144.54l-27.37 2.193L202 273.477l-20.183 84.587l74.219-45.328l13.653 8.34zM256.036 18.56l62.782 150.947l162.96 13.065L357.942 288.65l-30.262-30.262l48.42-41.487l-86.669-6.946l-33.395-80.307l-16.77 40.326l-32.634-32.634z"></svg:path>`,
})
export class IxStarCancelledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStarCancelledFilledIcon],svg[ix-star-cancelled-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m79.12 70.168l297.214 297.213l65.453 65.454l-30.17 30.17l-16.381-16.382l.316 1.325l-139.516-85.216l-139.517 85.216l37.932-159.021L30.293 182.572l93.402-7.489l-74.744-74.745zM256.037 18.56l62.782 150.947l162.96 13.065L357.942 288.65l-151.31-151.31z"></svg:path>`,
})
export class IxStarCancelledFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStarFilledIcon],svg[ix-star-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 362.812l-139.517 85.216l37.933-159.021L30.257 182.652l162.96-13.065L256 18.64l62.782 150.947l162.961 13.065l-124.159 106.355l37.933 159.021z"></svg:path>`,
})
export class IxStarFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStarHalfFilledIcon],svg[ix-star-half-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M257.749 22.844h-2.244v340.271l-139.021 84.914l37.932-159.022L30.258 182.652l162.96-13.064l62.783-150.947z" clip-rule="evenodd"></svg:path>`,
})
export class IxStarHalfFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStarListIcon],svg[ix-star-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M490.666 384v42.667H384V384zm-128 0v42.667H320V384zM234.702 18.56l56.85 136.682l147.56 11.83l-112.425 96.304l8.417 35.29h-36.438l.036 42.587v28.044l-64-39.09L108.37 407.37l34.348-143.994l-112.425-96.304l147.56-11.83zM490.666 320v42.667H384V320zm-128 0v42.667H320V320zM234.702 129.627L207.24 195.69l-71.29 5.702l54.317 46.535l-16.6 69.56l61.035-37.276l61.014 37.277l-16.578-69.561l54.295-46.535l-71.268-5.702zM490.666 448v42.667H384V448zm-128 0v42.667H320V448z"></svg:path>`,
})
export class IxStarListIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStarListFilledIcon],svg[ix-star-list-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M490.666 384v42.667H384V384zm-128 0v42.667H320V384zM234.702 18.56l56.85 136.682l147.56 11.83l-112.425 96.304l8.417 35.29h-36.438l.036 42.587v28.044l-64-39.09L108.37 407.37l34.348-143.994l-112.425-96.304l147.56-11.83zM490.666 320v42.667H384V320zm-128 0v42.667H320V320zm128 128v42.667H384V448zm-128 0v42.667H320V448z"></svg:path>`,
})
export class IxStarListFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStartDataAnalysisIcon],svg[ix-start-data-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M373.334 277.333c53.019 0 96 42.981 96 96c0 53.02-42.981 96-96 96c-53.02 0-96-42.98-96-96c0-53.019 42.98-96 96-96m-32 42.667v106.667l96-53.334zm-80.917 21.333a117.4 117.4 0 0 0-4.417 32c0 3.596.162 7.155.479 10.669L42.667 384v-42.667zM128 170.667V320H64V170.667zm106.667 64V320h-64v-85.333zm106.667-21.334l-.001 47.084c-26.217 7.415-48.704 23.715-64.002 45.44l.003-92.524zM448 234.667l.002 48.154c-17.715-14.63-39.798-24.161-64-26.343L384 234.667zM309.334 64c17.673 0 32 14.327 32 32q0 .654-.026 1.3l50.642 20.257c5.865-6.676 14.465-10.89 24.05-10.89c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32q.001-.654.026-1.302l-50.64-20.257C327.52 123.785 318.918 128 309.333 128a31.87 31.87 0 0 1-20.392-7.338l-54.912 32.955c.418 2.063.637 4.197.637 6.383c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-2.184.219-4.318.636-6.38l-54.92-32.95A31.87 31.87 0 0 1 96 128c-17.673 0-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32c0 2.185-.219 4.318-.636 6.38l54.918 32.952A31.87 31.87 0 0 1 202.667 128a31.87 31.87 0 0 1 20.384 7.331l54.919-32.95a32 32 0 0 1-.636-6.381c0-17.673 14.327-32 32-32"></svg:path>`,
})
export class IxStartDataAnalysisIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSteeringIcon],svg[ix-steering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.821 0 213.334 95.513 213.334 213.333c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667M85.334 256c0 87.032 65.145 158.848 149.332 169.346V316.358c-21.87-7.73-38.283-27.01-41.913-50.51L85.636 245.762q-.301 5.081-.302 10.238m341.031-10.238l-107.118 20.086c-3.629 23.5-20.043 42.78-41.913 50.51v108.988C361.523 414.848 426.668 343.032 426.668 256q-.001-5.156-.302-10.238M256 85.334c-76.056 0-140.493 49.75-162.541 118.484l107.16 20.085C211.699 204.827 232.352 192 256 192c23.65 0 44.302 12.827 55.382 31.903l107.16-20.085C396.493 135.084 332.057 85.334 256 85.334"></svg:path>`,
})
export class IxSteeringIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSteeringUserIcon],svg[ix-steering-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c41.237 0 74.666 33.43 74.666 74.667c0 39.862-31.238 72.429-70.57 74.556L256 192c-41.238 0-74.667-33.43-74.667-74.666c0-39.863 31.238-72.43 70.57-74.557zm0 42.667c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32m0 128c84.291 0 156.228 60.94 170.086 144.084l10.957 65.742c4.168 25.007-30.985 35.114-40.736 11.712l-20.338-48.815C357.83 434.695 310.96 469.334 256 469.334s-101.83-34.64-119.97-83.278l-13.094 31.433l-7.243 17.383c-9.75 23.402-44.903 13.295-40.735-11.712l10.957-65.742C99.77 274.273 171.708 213.334 256 213.334m-16.001 211.835V380.9c-12.82-5.19-22.545-16.43-25.63-30.181l-43.674-7.165c1.038 40.667 30.527 74.26 69.304 81.616m101.306-81.616l-43.674 7.165c-3.086 13.75-12.81 24.991-25.631 30.181v44.27c38.777-7.356 68.266-40.949 69.305-81.616M256 256c-36.81 0-68.175 23.306-80.146 55.967l43.705 7.162c7.493-12.271 21.01-20.462 36.44-20.462s28.947 8.19 36.44 20.46l43.706-7.16c-11.612-31.684-41.477-54.564-76.857-55.904z"></svg:path>`,
})
export class IxSteeringUserIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSteeringUserFilledIcon],svg[ix-steering-user-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c41.237 0 74.666 33.43 74.666 74.667c0 39.862-31.238 72.429-70.57 74.556L256 192c-41.238 0-74.667-33.43-74.667-74.666c0-39.863 31.238-72.43 70.57-74.557zm0 170.667c84.291 0 156.228 60.94 170.086 144.084l10.957 65.742c4.168 25.007-30.985 35.114-40.736 11.712l-20.338-48.815C357.83 434.695 310.96 469.334 256 469.334s-101.83-34.64-119.969-83.277l-20.338 48.815c-9.75 23.402-44.903 13.295-40.735-11.712l10.957-65.742C99.77 274.273 171.708 213.334 256 213.334m-16.001 211.835V380.9c-12.82-5.19-22.545-16.43-25.63-30.181l-43.674-7.165c1.038 40.667 30.527 74.26 69.304 81.616m101.306-81.616l-43.674 7.165c-3.086 13.75-12.81 24.991-25.631 30.181v44.27c38.777-7.356 68.266-40.949 69.305-81.616M256 256c-36.81 0-68.175 23.306-80.146 55.967l43.705 7.162c7.493-12.271 21.01-20.462 36.44-20.462s28.947 8.19 36.44 20.46l43.706-7.16c-11.612-31.684-41.477-54.564-76.857-55.904z"></svg:path>`,
})
export class IxSteeringUserFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStethoscopeIcon],svg[ix-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M288 64c17.673 0 32 14.327 32 32a32 32 0 0 1-.539 5.879c.353 1.539.539 3.141.539 4.788v64c0 63.423-46.128 116.073-106.666 126.23v44.436c0 47.129 38.204 85.334 85.333 85.334S384 388.462 384 341.333v-24.975c-24.858-8.786-42.667-32.492-42.667-60.358c0-35.346 28.654-64 64-64s64 28.654 64 64c0 27.866-17.809 51.572-42.666 60.358v24.975c0 70.693-57.308 128-128 128s-128-57.307-128-128l-.001-44.436C110.128 286.74 64 234.09 64 170.667v-64a21.4 21.4 0 0 1 .54-4.789A32 32 0 0 1 64 96c0-17.673 14.327-32 32-32s32 14.327 32 32c0 13.933-8.905 25.786-21.333 30.18v44.487C106.667 217.795 144.872 256 192 256s85.333-38.205 85.333-85.333v-44.488C264.905 121.786 256 109.933 256 96c0-17.673 14.327-32 32-32m117.333 170.667c-11.782 0-21.333 9.55-21.333 21.333s9.551 21.333 21.333 21.333s21.334-9.55 21.334-21.333s-9.552-21.333-21.334-21.333"></svg:path>`,
})
export class IxStethoscopeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStopIcon],svg[ix-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 128v256H128V128zm-42.667 42.667H170.667v170.666h170.666z"></svg:path>`,
})
export class IxStopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStopFilledIcon],svg[ix-stop-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M128 128h256v256H128z"></svg:path>`,
})
export class IxStopFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStopwatchIcon],svg[ix-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.333 42.666H170.667v42.667h64v43.987c-25.851 3.223-49.905 12.228-70.83 25.679l-48.334-48.334l-30.17 30.17l45.65 45.65c-28.326 30.466-45.65 71.3-45.65 116.181c0 94.257 76.41 170.667 170.667 170.667s170.667-76.41 170.667-170.667c0-43.141-16.007-82.543-42.406-112.592l49.239-49.239l-30.17-30.17l-51.059 51.059c-21.86-14.96-47.379-24.968-74.938-28.404V85.333h64zm42.667 256c0 70.692-57.308 128-128 128s-128-57.308-128-128s57.308-128 128-128s128 57.308 128 128m-140.502 28.171l85.669-85.668l-30.17-30.17l-85.668 85.668z" clip-rule="evenodd"></svg:path>`,
})
export class IxStopwatchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStopwatchFilledIcon],svg[ix-stopwatch-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.333 42.666H170.667v42.667h64v43.987c-25.851 3.223-49.905 12.228-70.83 25.679l-48.334-48.334l-30.17 30.17l45.65 45.65c-28.326 30.466-45.65 71.3-45.65 116.181c0 94.257 76.41 170.667 170.667 170.667s170.667-76.41 170.667-170.667c0-43.141-16.007-82.543-42.406-112.592l49.239-49.239l-30.17-30.17l-51.059 51.059c-21.86-14.96-47.379-24.968-74.938-28.404V85.333h64zm-76.496 265.172l85.668-85.669l-30.17-30.17l-85.668 85.669z" clip-rule="evenodd"></svg:path>`,
})
export class IxStopwatchFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStorageIcon],svg[ix-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 85.336v64h42.666v-21.333h213.334v21.333h42.666v-64zm320 85.333H85.333v64H128v-21.333h256v21.333h42.667zm-320 128h298.666v106.667H106.667zM448 448.003v-192H64v192zm-256-85.334h128v-42.666H192z" clip-rule="evenodd"></svg:path>`,
})
export class IxStorageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixStorageFilledIcon],svg[ix-storage-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106.667 85.336v64h42.666v-21.333h213.334v21.333h42.666v-64zm-21.334 85.333h341.334v64H384v-21.333H128v21.333H85.333z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M448 256.003v192H64v-192zM170.667 362.669h170.666v-42.666H170.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxStorageFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSubtitleIcon],svg[ix-subtitle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192.427 213.333h-64.214V256h64.214zm191.786 0h-149.76V256h149.76zm-256.64 85.334h149.76v42.666h-149.76zm256.64 0H320v42.666h64.213z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 426.667V85.333h426.666v341.334zM85.333 384h341.334V128H85.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxSubtitleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSubtitleFilledIcon],svg[ix-subtitle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.333v341.334h426.666V85.333zm85.546 128h64.213V256h-64.213zm106.24 0h149.76V256h-149.76zm-106.88 85.334h149.76v42.666h-149.76zm192.426 0h64.214v42.666h-64.214z" clip-rule="evenodd"></svg:path>`,
})
export class IxSubtitleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSuccessIcon],svg[ix-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667C138.18 42.667 42.667 138.18 42.667 256S138.18 469.334 256 469.334S469.334 373.82 469.334 256S373.821 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334S426.667 161.894 426.667 256S350.106 426.667 256 426.667m80.336-246.886l30.167 30.167l-131.836 132.388l-79.083-79.083l30.166-30.167l48.917 48.917z"></svg:path>`,
})
export class IxSuccessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSuccessFilledIcon],svg[ix-success-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667C138.18 42.667 42.667 138.18 42.667 256S138.18 469.334 256 469.334S469.334 373.82 469.334 256S373.821 42.667 256 42.667m80.336 137.114l30.167 30.167l-131.836 132.388l-79.083-79.083l30.166-30.167l48.917 48.917z"></svg:path>`,
})
export class IxSuccessFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSuccessMultipleIcon],svg[ix-success-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 266.667c0 30.622 6.792 59.659 18.951 85.685c-25.25-32.504-40.284-73.339-40.284-117.685c0-106.039 85.961-192 192-192c44.346 0 85.181 15.034 117.685 40.284C326.326 70.791 297.289 64 266.667 64C154.737 64 64 154.737 64 266.667m405.333 10.666c0 106.039-85.961 192-192 192s-192-85.961-192-192s85.961-192 192-192s192 85.961 192 192m-341.773 0c0 82.718 67.056 149.773 149.773 149.773c82.718 0 149.773-67.055 149.773-149.773S360.051 127.56 277.333 127.56S127.56 194.616 127.56 277.333m230.109-76.219l30.167 30.167L256 363.669l-79.083-79.083l30.166-30.167L256 303.336z" clip-rule="evenodd"></svg:path>`,
})
export class IxSuccessMultipleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSuccessMultipleFilledIcon],svg[ix-success-multiple-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M82.951 352.352C70.791 326.326 64 297.289 64 266.667C64 154.737 154.737 64 266.667 64c30.622 0 59.659 6.792 85.685 18.951c-32.504-25.25-73.339-40.284-117.685-40.284c-106.039 0-192 85.961-192 192c0 44.346 15.034 85.181 40.284 117.685m386.382-75.019c0 106.039-85.961 192-192 192c-106.038 0-192-85.961-192-192s85.962-192 192-192c106.039 0 192 85.961 192 192m-81.497-46.052l-30.167-30.167L256 303.336l-48.917-48.917l-30.166 30.167L256 363.669z" clip-rule="evenodd"></svg:path>`,
})
export class IxSuccessMultipleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSunIcon],svg[ix-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 405.333v85.333h-42.667v-85.333zm99.346-58.824l60.34 60.34l-30.17 30.17l-60.34-60.34zm-241.359 0l30.17 30.17l-60.34 60.34l-30.17-30.17zM256 139.353c64.422 0 116.647 52.224 116.647 116.647c0 64.422-52.225 116.647-116.647 116.647A116.427 116.427 0 0 1 139.352 256c0-64.423 52.225-116.647 116.648-116.647m0 42.666c-40.859 0-73.981 33.123-73.981 74.062a73.76 73.76 0 0 0 21.603 52.296c13.867 13.867 32.685 21.64 52.378 21.603c40.858 0 73.98-33.122 73.98-73.98s-33.122-73.98-73.98-73.98m234.666 52.647v42.667h-85.333v-42.667zm-384 0v42.667H21.333v-42.667zM105.15 74.98l60.34 60.34l-30.17 30.17l-60.34-60.34zm301.7 0l30.169 30.17l-60.34 60.34l-30.17-30.17zM277.332 21.333v85.333h-42.667V21.333z"></svg:path>`,
})
export class IxSunIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSunCloudIcon],svg[ix-sun-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 42.667V96h42.667V42.667zm89.208 72.614l37.713-37.712l30.169 30.17l-37.712 37.712zm-135.767 0l-37.712-37.712l-30.17 30.17l37.712 37.712zm121.226 98.052l-.001.157q2.852-.156 5.741-.157c12.926 0 25.294 2.374 36.696 6.705q.23-3.323.23-6.705c0-53.019-42.98-96-96-96c-53.019 0-96 42.981-96 96c0 37.623 21.642 70.19 53.156 85.933a102.8 102.8 0 0 1 15.888-39.903C170.596 250.101 160 232.955 160 213.333C160 183.878 183.878 160 213.333 160s53.334 23.878 53.334 53.333m63.999 17.971q2.369 1.618 4.64 3.363H384V192h-53.334zM42.666 192H96v42.667H42.667zm34.896 126.928l37.713-37.713l30.17 30.17l-37.713 37.713zm155.473-1.2l.836 33.929l-32.872 8.447c-9.922 2.549-17.207 11.605-17.207 22.255c0 12.688 10.285 22.974 22.974 22.974h172.308c26.283 0 47.589-21.306 47.589-47.589c0-26.284-21.306-47.59-47.589-47.59c-6.831 0-13.219 1.413-18.977 3.922l-34.548 15.053l-19.206-32.423c-6.924-11.69-19.555-19.373-33.936-19.373c-21.752 0-39.385 17.633-39.385 39.385q0 .507.013 1.01m146.039-50.241c-12.805 0-24.987 2.667-36.021 7.474c-14.288-24.121-40.578-40.294-70.646-40.294c-45.316 0-82.051 36.735-82.051 82.051q0 1.034.025 2.061c-28.324 7.278-49.256 32.985-49.256 63.58c0 36.252 29.388 65.641 65.641 65.641h172.308c49.847 0 90.256-40.409 90.256-90.256s-40.409-90.257-90.256-90.257" clip-rule="evenodd"></svg:path>`,
})
export class IxSunCloudIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSunCloudFilledIcon],svg[ix-sun-cloud-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M192 42.667V96h42.667V42.667zm89.208 72.614l37.713-37.712l30.169 30.17l-37.712 37.712zm-135.767 0l-37.712-37.712l-30.17 30.17l37.712 37.712zm163.892 98.052q0 3.382-.23 6.705c-11.402-4.331-23.77-6.705-36.696-6.705c-51.15 0-93.624 37.146-101.918 85.933c-31.514-15.743-53.156-48.31-53.156-85.933c0-53.019 42.981-96 96-96s96 42.981 96 96m21.333 17.971q2.369 1.618 4.64 3.363H384V192h-53.334zM42.666 192H96v42.667H42.667zm34.896 126.928l37.713-37.713l30.17 30.17l-37.713 37.713zm112.816-.149a83 83 0 0 1-.026-2.061c0-45.316 36.736-82.051 82.052-82.051c30.068 0 56.358 16.173 70.646 40.294c11.034-4.807 23.216-7.474 36.02-7.474c49.848 0 90.257 40.409 90.257 90.257c0 49.847-40.409 90.256-90.257 90.256H206.763c-36.253 0-65.641-29.389-65.641-65.641c0-30.595 20.931-56.302 49.256-63.58" clip-rule="evenodd"></svg:path>`,
})
export class IxSunCloudFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSunFilledIcon],svg[ix-sun-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 405.333v85.333h-42.667v-85.333zm99.346-58.824l60.34 60.34l-30.17 30.17l-60.34-60.34zm-241.359 0l30.17 30.17l-60.34 60.34l-30.17-30.17zM256 139.353c64.422 0 116.647 52.224 116.647 116.647c0 64.422-52.225 116.647-116.647 116.647A116.427 116.427 0 0 1 139.352 256c0-64.423 52.225-116.647 116.648-116.647m234.666 95.313v42.667h-85.333v-42.667zm-384 0v42.667H21.333v-42.667zM105.15 74.98l60.34 60.34l-30.17 30.17l-60.34-60.34zm301.7 0l30.169 30.17l-60.34 60.34l-30.17-30.17zM277.332 21.333v85.333h-42.667V21.333z"></svg:path>`,
})
export class IxSunFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSunriseIcon],svg[ix-sunrise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 42.668l89.751 87.837l-30.169 29.526l-38.249-37.432v95.744h-42.666v-95.744l-38.249 37.432l-30.17-29.526z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M448 448.001v-41.756h-94.208c5.709-12.788 8.875-26.91 8.875-41.757c0-57.653-47.757-104.391-106.667-104.391s-106.667 46.738-106.667 104.391c0 14.847 3.167 28.969 8.876 41.757H64v41.756zm-144.297-41.756C313.839 395.163 320 380.531 320 364.488c0-34.591-28.653-62.634-64-62.634s-64 28.043-64 62.634c0 16.043 6.162 30.675 16.296 41.757z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M405.333 364.488h64v-41.756h-64zm-298.666 0h-64v-41.756h64zm68.418-129.593L121.752 182.7l-30.17 29.526l53.333 52.197zM390.249 182.7l-53.334 52.195l30.17 29.528l53.333-52.197z"></svg:path>`,
})
export class IxSunriseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSunriseFilledIcon],svg[ix-sunrise-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m256 42.668l89.751 87.837l-30.169 29.526l-38.249-37.432v95.744h-42.666v-95.744l-38.249 37.432l-30.17-29.526zm192 405.333v-41.756h-94.208c5.709-12.788 8.875-26.91 8.875-41.757c0-57.655-47.757-104.391-106.667-104.391s-106.667 46.736-106.667 104.391c0 14.847 3.167 28.969 8.876 41.757H64v41.756z"></svg:path><svg:path fill="currentColor" d="M405.333 364.488h64v-41.756h-64zm-298.666 0h-64v-41.756h64zm68.418-129.593L121.752 182.7l-30.17 29.526l53.333 52.195zM390.249 182.7l-53.334 52.195l30.17 29.526l53.333-52.195z"></svg:path>`,
})
export class IxSunriseFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSunsetIcon],svg[ix-sunset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M277.333 42.668v97.836l38.249-38.249l30.169 30.17L256 222.176l-89.752-89.751l30.17-30.17l38.249 38.249V42.668z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M448 448.001v-42.667h-94.208c5.709-13.066 8.875-27.496 8.875-42.666C362.667 303.755 314.91 256 256 256s-106.667 47.755-106.667 106.668c0 15.17 3.167 29.6 8.876 42.666H64v42.667zm-144.297-42.667C313.839 394.011 320 379.058 320 362.668c0-35.348-28.653-64.001-64-64.001s-64 28.653-64 64.001c0 16.39 6.162 31.343 16.296 42.666z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M405.333 362.668h64v-42.667h-64zm-298.666 0h-64v-42.667h64zm68.418-132.419l-53.333-53.334l-30.17 30.17l53.333 53.334zm215.164-53.334l-53.334 53.334l30.17 30.17l53.333-53.334z"></svg:path>`,
})
export class IxSunsetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSunsetFilledIcon],svg[ix-sunset-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M277.333 42.668v97.836l38.249-38.249l30.169 30.17L256 222.178l-89.752-89.753l30.17-30.17l38.249 38.249V42.668zM448 448.001v-42.667h-94.208c5.709-13.066 8.875-27.496 8.875-42.667C362.667 303.757 314.91 256 256 256s-106.667 47.757-106.667 106.667c0 15.171 3.167 29.601 8.876 42.667H64v42.667z"></svg:path><svg:path fill="currentColor" d="M405.333 362.667h64v-42.666h-64zm-298.666 0h-64v-42.666h64zm68.418-132.419l-53.333-53.332l-30.17 30.17l53.333 53.334zm215.164-53.332l-53.334 53.332l30.17 30.172l53.333-53.334z"></svg:path>`,
})
export class IxSunsetFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSupportIcon],svg[ix-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M422.401 217.174c-6.613-67.84-46.72-174.507-170.666-174.507c-123.947 0-164.054 106.667-170.667 174.507c-23.2 8.805-38.503 31.079-38.4 55.893v29.867c0 32.99 26.744 59.733 59.733 59.733c32.99 0 59.734-26.744 59.734-59.733v-29.867c-.108-24.279-14.848-46.095-37.334-55.253c4.267-39.254 25.174-132.48 126.934-132.48s122.453 93.226 126.72 132.48c-22.44 9.178-37.106 31.009-37.12 55.253v29.867a59.95 59.95 0 0 0 33.92 53.76c-8.96 16.853-31.787 39.68-87.894 46.506c-11.215-17.03-32.914-23.744-51.788-16.023c-18.873 7.72-29.646 27.717-25.71 47.725s21.48 34.432 41.872 34.432a42.67 42.67 0 0 0 37.973-23.68c91.52-10.454 120.747-57.6 129.92-85.334c24.817-8.039 41.508-31.301 41.173-57.386v-29.867c.103-24.814-15.2-47.088-38.4-55.893m-302.933 85.76c0 9.425-7.641 17.066-17.067 17.066s-17.066-7.64-17.066-17.066v-29.867a17.067 17.067 0 1 1 34.133 0zm264.533-29.867c0-9.426 7.641-17.067 17.067-17.067s17.067 7.641 17.067 17.067v29.867c0 9.425-7.641 17.066-17.067 17.066s-17.067-7.64-17.067-17.066z"></svg:path>`,
})
export class IxSupportIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSurveillanceIcon],svg[ix-surveillance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m108.172 105.788l360.84 98.445l-34.323 34.363l23.8 6.407l-22.085 82.425l-71.345-19.117l-35.262 35.307l-88.147-24.203l-49.598 85.908l-.052-.025v.035l-85.333-.013V448H64V320h42.667v42.653h60.736l31.715-54.916L64 270.639zm30.115 52.439l-22.103 82.488l200.952 55.17l69.757-69.851z"></svg:path>`,
})
export class IxSurveillanceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSurveillanceCancelledIcon],svg[ix-surveillance-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m165.704 165.705l269.8 269.799l-30.17 30.17q-67.14-74.867-127.673-136.37l-36.011-9.888l-49.598 85.908l-.052-.025v.035l-85.333-.014V448H64V320h42.667v42.654h60.736l31.715-54.916L64 270.64l31.55-117.734a24717 24717 0 0 0-52.883-49.9l30.17-30.169zm22.165-38.174l281.143 76.703l-34.323 34.363l23.801 6.406l-22.086 82.426l-66.439-17.802l-33.298-33.299l50.227-50.294l-138.221-37.699zm-57.107 58.787l-14.578 54.397l99.71 27.375q-36.135-35.152-85.132-81.772"></svg:path>`,
})
export class IxSurveillanceCancelledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSurveillanceCancelledFilledIcon],svg[ix-surveillance-cancelled-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m72.837 72.837l362.667 362.667l-30.17 30.17q-67.14-74.867-127.673-136.37l-36.011-9.888l-49.598 85.908l-.052-.025v.035l-85.333-.014V448H64V320h42.667v42.654h60.736l31.715-54.916L64 270.64l31.55-117.734a24717 24717 0 0 0-52.883-49.9zm115.032 54.694l281.143 76.703l-34.323 34.363l23.801 6.406l-22.086 82.426l-66.439-17.802z"></svg:path>`,
})
export class IxSurveillanceCancelledFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSurveillanceFilledIcon],svg[ix-surveillance-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m108.172 105.788l360.84 98.445l-34.323 34.363l23.8 6.407l-22.085 82.425l-71.345-19.117l-35.262 35.307l-88.147-24.203l-49.598 85.908l-.052-.025v.035l-85.333-.013V448H64V320h42.667v42.653h60.736l31.715-54.916L64 270.639z"></svg:path>`,
})
export class IxSurveillanceFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSvgDocumentIcon],svg[ix-svg-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M321.838 42.667H87.17v234.667h42.667v-192H304.13l81.707 81.706v110.294h42.666v-128zM85.333 441.734l4.169-24.65q22.022 9.244 37.337 9.244q9.969 0 14.682-4.894q4.077-4.26 4.078-10.421q0-5.529-3.988-8.61t-19.665-9.515q-11.6-4.803-16.358-7.16q-4.758-2.356-8.746-5.347q-11.328-8.427-11.328-24.287q0-13.684 7.432-24.016q11.418-16.04 37.518-16.04q18.85 0 40.963 6.978l-5.8 23.562q-13.05-4.802-19.62-6.344q-6.57-1.54-13.73-1.54q-8.156 0-12.416 3.625q-4.44 3.897-4.44 9.878q0 5.166 3.76 8.11q3.761 2.946 18.08 8.837q14.229 5.89 18.85 8.201a56 56 0 0 1 8.7 5.393q11.147 8.519 11.147 26.009q0 20.663-14.047 31.266q-11.963 8.97-33.531 8.971q-22.475 0-43.047-7.25m146.722 4.985l-48.666-128.416h30.088l21.387 57.638q8.157 22.021 12.235 36.25q6.253-19.938 11.872-35.072l22.021-58.816h28.638L260.964 446.72zm197.744-71.866v65.522q-11.056 3.715-15.588 4.894q-14.046 3.715-30.178 3.715q-31.719 0-48.303-15.95q-18.397-17.58-18.397-49.028q0-36.159 22.837-54.556q16.585-13.413 44.77-13.412q24.105 0 44.859 8.79l-9.879 22.566q-9.787-4.894-17.128-6.842q-7.34-1.95-16.13-1.949q-21.027 0-30.995 13.685q-8.428 11.6-8.428 30.54q0 22.748 12.688 34.256q10.15 9.244 25.193 9.244q8.791 0 16.675-2.99v-25.829h-22.112v-22.656z"></svg:path>`,
})
export class IxSvgDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSwapLeftRightIcon],svg[ix-swap-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m341.334 213.334l128 128l-128 128l-30.294-30.294l76.587-76.373H213.334V320h174.293l-76.587-76.373zM170.667 42.667L200.96 72.96l-76.586 76.374h174.293V192H124.374l76.586 76.374l-30.293 30.293l-128-128z"></svg:path>`,
})
export class IxSwapLeftRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSwitchSliderIcon],svg[ix-switch-slider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 128h106.666V85.333H64v192h149.333v-42.667H106.667zM384 85.333H234.667v192H384zM405.333 384c0 35.347-28.652 64-64 64s-64-28.653-64-64s28.653-64 64-64s64 28.652 64 64m21.334 0a85.6 85.6 0 0 1-2.688 21.333h45.354v-42.667H423.98A85.6 85.6 0 0 1 426.667 384M128 405.333h130.688A85.6 85.6 0 0 1 256 384a85.6 85.6 0 0 1 2.688-21.334H128z"></svg:path>`,
})
export class IxSwitchSliderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixSwordSwingIcon],svg[ix-sword-swing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M255.999 42.667c37.609 0 72.944 9.731 103.626 26.814l-56.664 15.454l-73.449 88.139q-1.014-1.062-2.058-2.106c-43.584-43.585-111.239-48.43-160.176-14.536C103.05 88.772 174.14 42.667 256 42.667m150.298 152.329l34.217-125.463l-125.462 34.217l-147.049 176.459l-21.878-21.879l-30.17 30.17l37.711 37.711l-49.292 49.292c-14.234-3.801-30.05-.118-41.218 11.049c-16.662 16.662-16.662 43.677 0 60.34c16.663 16.662 43.678 16.662 60.34 0c11.168-11.167 14.85-26.985 11.049-41.22l49.291-49.291l37.713 37.714l30.17-30.17l-21.88-21.881zm-37.63-24.181L207.772 304.894l-2.618-2.619L339.233 141.38l40.472-11.037z" clip-rule="evenodd"></svg:path>`,
})
export class IxSwordSwingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTableIcon],svg[ix-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667V85.333zm-384 256V384l85.333-.001v-42.666zm213.333 0h-85.334v42.666h85.334zm128 0h-85.334v42.666h85.334zm-128-85.334h-85.334v42.667h85.334zm128 0h-85.334v42.667h85.334zm-128-85.333h-85.334v42.667h85.334zm128 0h-85.334v42.667h85.334zm-256 0H85.334v42.667h85.333zm-85.333 128h85.333v-42.667H85.334z"></svg:path>`,
})
export class IxTableIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTableAddColumnRightIcon],svg[ix-table-add-column-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m170.417 43.085l213.581-.418l.601 426.666l-213.345.419l-.171-85.334l42.667-.085l.085 42.664l128.013-.256l-.681-341.323l-127.999.256l.085 42.659l-42.666.085zm107.041 191.79l.085 42.667l-64.004.127l.128 63.998l-42.667.085l-.128-63.998l-63.995.128l-.085-42.666l63.995-.128l-.127-64.002l42.666-.086l.128 64.003z" clip-rule="evenodd"></svg:path>`,
})
export class IxTableAddColumnRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTableAddRowBelowIcon],svg[ix-table-add-row-below-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 277.333h-42.666v-64h-64v-42.666h64v-64h42.666v64h64v42.666h-64zm-192-64H128v-42.666H42.667V384h426.666V170.667H384v42.666h42.667v128H85.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxTableAddRowBelowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTableColumnsIcon],svg[ix-table-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 213.334h64v192H64zm0-106.667h64v64H64zm213.333 106.667h64v192h-64zm0-106.667h64v64h-64zM170.667 213.334h64v192h-64zm0-106.667h64v64h-64zM384 213.334h64v192h-64zm0-106.667h64v64h-64z"></svg:path>`,
})
export class IxTableColumnsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTableInsertColumnLeftIcon],svg[ix-table-insert-column-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 469.333V42.667h85.334v42.666H192v341.334h128V256h42.667v213.333zm277.334-362.666v42.666h-64v64H320v-64h-64v-42.666h64v-64h42.667v64z" clip-rule="evenodd"></svg:path>`,
})
export class IxTableInsertColumnLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTableInsertColumnRightIcon],svg[ix-table-insert-column-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 106.667v42.666h-64v64h-42.667v-64h-64v-42.666h64v-64H192v64zm21.333-64h85.334v426.666H149.333V256H192v170.667h128V85.333h-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxTableInsertColumnRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTableInsertRowAboveIcon],svg[ix-table-insert-row-above-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 234.667v-85.334h426.666v213.334H256V320h170.667V192H85.333v42.667zm64 21.333h42.666v64h64v42.667h-64v64h-42.666v-64h-64V320h64z" clip-rule="evenodd"></svg:path>`,
})
export class IxTableInsertRowAboveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTableInsertRowBelowIcon],svg[ix-table-insert-row-below-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 85.333h42.666v64h64V192h-64v64h-42.666v-64h-64v-42.667h64zm149.333 64h213.333v213.334H42.667v-85.334h42.666V320h341.334V192H256z" clip-rule="evenodd"></svg:path>`,
})
export class IxTableInsertRowBelowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTableRowsIcon],svg[ix-table-rows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 192h106.667v42.667H42.667zm0-85.333h106.667v42.667H42.667zm0 170.667h106.667V320H42.667zm0 85.333h106.667v42.667H42.667zM192 192h277.334v42.667H192zm0-85.333h277.334v42.667H192zm0 170.667h277.334V320H192zm0 85.333h277.334v42.667H192z"></svg:path>`,
})
export class IxTableRowsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTableSettingsIcon],svg[ix-table-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m392.18 256l.001 22.836a88.8 88.8 0 0 1 28.135 16.267l19.796-11.43l29.63 51.32l-19.784 11.423a89.4 89.4 0 0 1 1.482 16.25c0 5.55-.509 10.982-1.482 16.25l19.784 11.424l-29.63 51.32l-19.796-11.43a88.8 88.8 0 0 1-28.135 16.267v22.836h-59.26v-22.836a88.8 88.8 0 0 1-28.133-16.267l-19.798 11.43l-29.63-51.32l19.784-11.423a89.4 89.4 0 0 1-1.482-16.25c0-5.551.509-10.983 1.482-16.252l-19.784-11.422l29.63-51.32l19.797 11.43a88.8 88.8 0 0 1 28.134-16.267V256zm13.154-170.667V241.95c-13.345-4.717-27.706-7.284-42.667-7.284c-44.522 0-83.735 22.731-106.667 57.22V256h-64v42.667h59.791a127.2 127.2 0 0 0-15.354 42.666l-44.437.001V384l44.437.002a127.2 127.2 0 0 0 15.354 42.666H42.667V85.332zM362.55 327.111c-19.637 0-35.555 15.919-35.555 35.555c0 19.637 15.918 35.556 35.555 35.556s35.556-15.919 35.556-35.556s-15.919-35.555-35.556-35.555m-213.218 14.222h-64V384l64-.001zm0-85.334h-64v42.667h64zm0-85.333h-64v42.667h64zm106.667 0h-64v42.667h64zm106.667 0h-64.001v42.667h64.001z"></svg:path>`,
})
export class IxTableSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTableTagIcon],svg[ix-table-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 85.336H42.667v341.333h256L256 384.003h-42.667v-42.667H256v-42.667h-42.667v-42.666h213.334v42.666l42.666 42.667zM170.667 298.669v-42.666H85.333v42.666zm-85.334 42.667v42.667h85.334v-42.667zm341.334-170.667v42.667h-85.334v-42.667zm-128 0v42.667h-85.334v-42.667zm-128 0v42.667H85.333v-42.667zm320 224L373.333 277.336h-96v96l117.334 117.333zM320 320.003h21.333v21.333H320z" clip-rule="evenodd"></svg:path>`,
})
export class IxTableTagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTagIcon],svg[ix-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 64l213.333 213.333l-192 192L64 256V64zm-17.685 42.667H106.667v131.648l170.666 170.666l131.648-131.648zM160 192c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32" clip-rule="evenodd"></svg:path>`,
})
export class IxTagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTagArrowLeftIcon],svg[ix-tag-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 64l192 192h-60.352L238.315 106.667H106.667v131.648l128 128v60.352L64 256V64zm-96 128c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m239.088 121.753l-30.17-30.17L268.5 384.001l100.418 100.418l30.17-30.17l-48.915-48.915h119.163v-42.666H350.173z" clip-rule="evenodd"></svg:path>`,
})
export class IxTagArrowLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTagArrowLeftFilledIcon],svg[ix-tag-arrow-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 256V64h192l192 192H234.667v170.667zm96-64c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m239.088 121.753l-30.17-30.17L268.5 384.001l100.418 100.418l30.17-30.17l-48.915-48.915h119.163v-42.666H350.173z" clip-rule="evenodd"></svg:path>`,
})
export class IxTagArrowLeftFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTagArrowRightIcon],svg[ix-tag-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 64l192 192h-60.352L238.315 106.667H106.667v131.648l128 128v60.352L64 256V64zm-96 128c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m187.581 262.249l30.17 30.17l100.418-100.418l-100.418-100.418l-30.17 30.17l48.915 48.915H277.333v42.667h119.163z" clip-rule="evenodd"></svg:path>`,
})
export class IxTagArrowRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTagArrowRightFilledIcon],svg[ix-tag-arrow-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 256V64h192l192 192H234.667v170.667zm96-64c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m187.581 262.249l30.17 30.17l100.418-100.418l-100.418-100.418l-30.17 30.17l48.915 48.915H277.333v42.667h119.163z" clip-rule="evenodd"></svg:path>`,
})
export class IxTagArrowRightFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTagCircleArrowDownIcon],svg[ix-tag-circle-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.333 192c-5.664 0-11.255.315-16.755.93l-86.263-86.263H106.667v131.648l86.263 86.263c-.615 5.5-.93 11.091-.93 16.755c0 18.269 3.281 35.772 9.285 51.952L64 256V64h192l137.285 137.285c-16.18-6.004-33.683-9.285-51.952-9.285M192 160c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32m277.333 181.333c0-70.692-57.307-128-128-128H320V320h-42.667l64 64l64-64h-42.666l.016-61.307c36.797 9.478 63.984 42.884 63.984 82.64c0 47.129-38.205 85.334-85.334 85.334c-47.128 0-85.333-38.205-85.333-85.334c0-23.564 9.551-44.897 24.994-60.339l-30.17-30.17c-23.164 23.163-37.491 55.163-37.491 90.509c0 70.693 57.308 128 128 128s128-57.307 128-128" clip-rule="evenodd"></svg:path>`,
})
export class IxTagCircleArrowDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTagCircleArrowDownFilledIcon],svg[ix-tag-circle-arrow-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64v192l137.285 137.285c-6.004-16.18-9.285-33.683-9.285-51.952C192 258.859 258.859 192 341.333 192c18.269 0 35.772 3.281 51.952 9.285L256 64zm128 96c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32m277.333 181.333c0-70.692-57.307-128-128-128H320V320h-42.667l64 64l64-64h-42.666l.016-61.307c36.797 9.478 63.984 42.884 63.984 82.64c0 47.129-38.205 85.334-85.334 85.334c-47.128 0-85.333-38.205-85.333-85.334c0-23.564 9.551-44.897 24.994-60.339l-30.17-30.17c-23.164 23.163-37.491 55.163-37.491 90.509c0 70.693 57.308 128 128 128s128-57.307 128-128" clip-rule="evenodd"></svg:path>`,
})
export class IxTagCircleArrowDownFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTagConnectionIcon],svg[ix-tag-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 64l90.355 90.355c-13.741 5.326-25.509 14.602-33.917 26.435l-74.123-74.123H106.667v131.648l103.018 103.018H192v21.334h-10.667c-3.233 0-6.354.479-9.295 1.371L64 256V64zm-96 128c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m266.667 0v-21.333h-53.334c-25.806 0-47.332 18.329-52.269 42.679l-15.138-.013l-3.185.117c-22.077 1.629-39.482 20.057-39.482 42.55a42.67 42.67 0 0 0 10.777 28.346l75.983 85.481l1.654 2.11c6.004 8.737 4.703 20.782-3.426 28.008a21.33 21.33 0 0 1-14.173 5.388l-15.138.013c-4.937-24.35-26.463-42.679-52.269-42.679h-53.334V384h-32c-5.891 0-10.666 4.776-10.666 10.667s4.775 10.666 10.666 10.666h32v21.334h-32c-5.891 0-10.666 4.775-10.666 10.666S175.442 448 181.333 448h32v21.333h53.334c25.799 0 47.319-18.318 52.264-42.657l15.143-.009l3.898-.179a42.67 42.67 0 0 0 24.449-10.599c17.612-15.655 19.198-42.623 3.543-60.235l-75.983-85.481l-1.604-2.043a21.33 21.33 0 0 1-3.785-12.13c0-11.782 9.552-21.333 21.334-21.333l15.143.009c4.945 24.339 26.465 42.657 52.264 42.657h53.334V256h32c5.891 0 10.666-4.776 10.666-10.667s-4.775-10.666-10.666-10.666h-32v-21.334h32c5.891 0 10.666-4.775 10.666-10.666S464.558 192 458.667 192z" clip-rule="evenodd"></svg:path>`,
})
export class IxTagConnectionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTagConnectionFilledIcon],svg[ix-tag-connection-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 256V64h192l90.355 90.355c-17.832 6.912-32.34 20.475-40.496 37.645h-.317l-3.978.146l-.392.029c-33.137 2.445-59.246 30.076-59.246 63.825a64 64 0 0 0 16.165 42.519l48.116 54.131c-11.462-7.172-25.013-11.317-39.54-11.317H192v21.334h-10.667c-3.233 0-6.354.479-9.295 1.371zm96-64c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m266.667 0v-21.333h-53.334c-25.806 0-47.332 18.329-52.269 42.679l-15.138-.013l-3.185.117c-22.077 1.629-39.482 20.057-39.482 42.55a42.67 42.67 0 0 0 10.777 28.346l75.983 85.481l1.654 2.11c6.004 8.737 4.703 20.782-3.426 28.008a21.33 21.33 0 0 1-14.173 5.388l-15.138.013c-4.937-24.35-26.463-42.679-52.269-42.679h-53.334V384h-32c-5.891 0-10.666 4.776-10.666 10.667s4.775 10.666 10.666 10.666h32v21.334h-32c-5.891 0-10.666 4.775-10.666 10.666S175.442 448 181.333 448h32v21.333h53.334c25.799 0 47.319-18.318 52.264-42.657l15.143-.009l3.898-.179a42.67 42.67 0 0 0 24.449-10.599c17.612-15.655 19.198-42.623 3.543-60.235l-75.983-85.481l-1.604-2.043a21.33 21.33 0 0 1-3.785-12.13c0-11.782 9.552-21.333 21.334-21.333l15.143.009c4.945 24.339 26.465 42.657 52.264 42.657h53.334V256h32c5.891 0 10.666-4.776 10.666-10.667s-4.775-10.666-10.666-10.666h-32v-21.334h32c5.891 0 10.666-4.775 10.666-10.666S464.558 192 458.667 192z" clip-rule="evenodd"></svg:path>`,
})
export class IxTagConnectionFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTagConnectionViewIcon],svg[ix-tag-connection-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 64h42.666v64a42.66 42.66 0 0 1 36.951 21.333H192a21.33 21.33 0 0 1 17.067 8.534L330.667 320h59.048a42.67 42.67 0 0 1 36.952-21.333V64h42.666v384h-42.666v-64a42.67 42.67 0 0 1-36.952-21.333H320a21.33 21.33 0 0 1-17.067-8.534L181.333 192h-59.049a42.66 42.66 0 0 1-36.95 21.333V448H42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxTagConnectionViewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTagEyeIcon],svg[ix-tag-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 64l213.333 213.333l-29.351 29.351c-11.487-9.804-24.11-17.449-37.875-22.476l6.874-6.875l-170.666-170.666H106.667v131.648L238.55 370.198a128 128 0 0 0-2.569 6.311L233.172 384l2.809 7.491c4.741 12.642 14.077 30.568 28.751 48.628c6.4 7.877 13.259 14.995 20.578 21.237l-7.977 7.977L64 256V64zm-96 128c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m170.667 192c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32m32-90.932c79.564 0 113.664 90.931 113.664 90.931s-34.1 90.931-113.664 90.931c-79.565 0-113.664-90.931-113.664-90.931s34.099-90.931 113.664-90.931m-62.827 64.837c-7.597 9.35-13.268 18.872-17.029 26.094c3.761 7.222 9.432 16.744 17.029 26.094c15.476 19.046 36.012 34.117 62.827 34.117s47.351-15.071 62.826-34.117c7.597-9.35 13.259-18.855 17.02-26.077v-.034c-3.761-7.222-9.423-16.727-17.02-26.077c-15.475-19.047-36.012-34.117-62.826-34.117c-26.815 0-47.351 15.07-62.827 34.117" clip-rule="evenodd"></svg:path>`,
})
export class IxTagEyeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTagEyeFilledIcon],svg[ix-tag-eye-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 256V64h192l213.333 213.333l-29.351 29.351c-21.714-18.533-47.486-29.351-77.359-29.351c-39.919 0-72.516 19.317-97.891 50.548c-14.674 18.06-24.01 35.986-28.751 48.628L233.172 384l2.809 7.491c4.741 12.642 14.077 30.568 28.751 48.628c6.4 7.877 13.259 14.995 20.578 21.237l-7.977 7.977zm96-64c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m170.667 192c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32m32-90.932c79.564 0 113.664 90.931 113.664 90.931s-34.1 90.931-113.664 90.931c-79.565 0-113.664-90.931-113.664-90.931s34.099-90.931 113.664-90.931m-62.827 64.837c-7.597 9.35-13.268 18.872-17.029 26.094c3.761 7.222 9.432 16.744 17.029 26.094c15.476 19.046 36.012 34.117 62.827 34.117s47.351-15.071 62.826-34.117c7.597-9.35 13.259-18.855 17.02-26.077v-.034c-3.761-7.222-9.423-16.727-17.02-26.077c-15.475-19.047-36.012-34.117-62.826-34.117c-26.815 0-47.351 15.07-62.827 34.117" clip-rule="evenodd"></svg:path>`,
})
export class IxTagEyeFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTagFilledIcon],svg[ix-tag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 256V64h192l213.333 213.333l-192 192zm96-64c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32" clip-rule="evenodd"></svg:path>`,
})
export class IxTagFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTagLoggingIcon],svg[ix-tag-logging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 64l106.667 106.667H320v17.685l-81.685-81.685H106.667v131.648l170.666 170.666L320 366.315v60.352l-42.667 42.666L64 256V64zm-96 128c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m310.281 277.385V192.052h-128v277.333zm-85.333-64c0-11.782 9.551-21.333 21.333-21.333s21.334 9.551 21.334 21.333s-9.552 21.334-21.334 21.334s-21.333-9.552-21.333-21.334m0-170.666h42.667v106.666h-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxTagLoggingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTagLoggingFilledIcon],svg[ix-tag-logging-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 256V64h192l106.667 106.667H320v256l-42.667 42.666zm96-64c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32m310.281 277.385V192.052h-128v277.333zm-85.333-64c0-11.782 9.551-21.333 21.333-21.333s21.334 9.551 21.334 21.333s-9.552 21.334-21.334 21.334s-21.333-9.552-21.333-21.334m0-170.666h42.667v106.666h-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxTagLoggingFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTagPlusIcon],svg[ix-tag-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M469.333 277.333L256 64H64v192l213.333 213.333v-60.352L106.667 238.315V106.667h131.648l170.666 170.666zM192 160c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32"></svg:path><svg:path d="m426.667 320l-.001 64h64.001v42.667l-64.001-.001l.001 64.001H384v-64.001l-64 .001V384h64v-64z"></svg:path></svg:g>`,
})
export class IxTagPlusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTagPlusFilledIcon],svg[ix-tag-plus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m426.667 320l-.001 64h64.001v42.667l-64.001-.001l.001 64.001H384v-64.001l-64 .001V384h64v-64z"></svg:path><svg:path d="M64 64v192l213.333 213.333v-192h192L256 64zm128 96c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32"></svg:path></svg:g>`,
})
export class IxTagPlusFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTasksAllIcon],svg[ix-tasks-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 85.334h170.666V128H256zm0 149.333h170.666v42.667H256zM256 384h170.666v42.667H256zM189.814 46.126l25.364 19.51l-76.032 98.843l-68.617-60.04l21.072-24.082l42.968 37.574zm0 149.333l25.364 19.511l-76.032 98.842l-68.617-60.04l21.072-24.082l42.968 37.574zm0 149.334l25.364 19.51l-76.032 98.843l-68.617-60.04l21.072-24.082l42.968 37.574z"></svg:path>`,
})
export class IxTasksAllIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTasksDoneIcon],svg[ix-tasks-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 85.334h170.666V128H256zm0 149.333h170.666v42.667H256zM85.332 341.334h106.666V448H85.333zm32 32V416h42.666v-42.666zM255.999 384h170.667v42.667H256zM189.815 46.126l25.364 19.51l-76.032 98.843l-68.617-60.04l21.072-24.082l42.968 37.574zm0 149.333l25.364 19.511l-76.032 98.842l-68.617-60.04l21.072-24.082l42.968 37.574z"></svg:path>`,
})
export class IxTasksDoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTasksOpenIcon],svg[ix-tasks-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 42.667H192v106.667H85.333zm32 32v42.667H160V74.667zM256 85.334h170.666V128H256zM85.333 192H192v106.667H85.333zm32 32v42.667H160V224zM256 234.667h170.666v42.667H256zM85.333 341.334H192V448H85.333zm32 32V416H160v-42.666zM256 384h170.666v42.667H256z"></svg:path>`,
})
export class IxTasksOpenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTelegramLogoIcon],svg[ix-telegram-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M461.226 111.998c-4.48 29.013-34.773 226.133-44.586 288a27.1 27.1 0 0 1-12.824 23.14a27.09 27.09 0 0 1-26.43 1.18a138.9 138.9 0 0 1-36.053-18.987c-33.92-22.613-68.48-44.16-100.48-69.333c-15.36-12.16-15.573-23.467 0-36.907a3589 3589 0 0 0 109.44-104.106c4.693-4.694 15.36-15.147 9.387-21.334c-5.974-6.186-18.347 2.56-24.32 6.614c-49.92 33.28-100.267 66.346-149.334 100.48A62.5 62.5 0 0 1 128 289.918c-23.467-7.04-46.72-14.72-69.76-22.4c-9.387-2.987-34.134-13.013 11.733-31.787c117.12-48.64 236.587-97.493 354.133-145.92c28.587-10.88 40.534-1.28 37.12 22.187"></svg:path>`,
})
export class IxTelegramLogoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTextIcon],svg[ix-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.44 85.333v64h-32L362.773 128H277.44v256l42.666 10.666v32h-128v-32L234.773 384V128H149.44l-10.667 21.333h-32v-64z"></svg:path>`,
})
export class IxTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTextAlginmentCenterIcon],svg[ix-text-alginment-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 128V85.334h384V128zm106.667 149.333v-42.666h170.666v42.666zm-64 149.334V384h298.666v42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxTextAlginmentCenterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTextAlginmentJustifiedIcon],svg[ix-text-alginment-justified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 128V85.334h384V128zm0 149.333v-42.666h384v42.666zm0 149.334V384h384v42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxTextAlginmentJustifiedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTextAlginmentLeftIcon],svg[ix-text-alginment-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 128V85.333h384V128zm0 149.333v-42.666h170.667v42.666zm0 149.334V384h298.667v42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxTextAlginmentLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTextAlginmentRightIcon],svg[ix-text-alginment-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 128V85.334h384V128zm213.333 149.333v-42.666H448v42.666zm-128 149.334V384H448v42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxTextAlginmentRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTextBoldIcon],svg[ix-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.333 447.771V64h59.854q42.521 0 64.188 2.708q21.666 2.437 39.812 9.75q24.105 9.75 37.375 32.5q13.542 22.75 13.542 54.167q0 46.041-27.354 68.792q-17.063 14.083-50.375 20.312q88.292 10.021 88.292 93.438q0 63.375-49.021 88.021q-17.875 8.937-36.021 11.645q-18.145 2.438-64.188 2.438zm44.417-211.792h20.042q54.708 0 74.75-11.375q28.437-16.25 28.437-56.062q0-42.25-26.542-56.875q-20.853-11.646-76.645-11.646H193.75zm0 175.771h20.042q37.104 0 54.437-2.167q17.604-2.437 30.063-8.937q29.25-15.438 29.25-59.854q0-45.23-36.834-60.667q-22.75-9.75-76.916-9.75H193.75z"></svg:path>`,
})
export class IxTextBoldIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTextCircleRectangleIcon],svg[ix-text-circle-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 256v192H256V256zm-42.666 42.667H298.667v106.667h106.667zM255.947 128v64h-31.991l-10.665-21.333h-42.656V320l42.656 10.667v32H85.323v-32L127.979 320V170.667H85.323L74.659 192H42.667v-64zM384 42.667c47.128 0 85.334 38.205 85.334 85.333S431.128 213.334 384 213.334S298.667 175.129 298.667 128c0-47.128 38.206-85.333 85.333-85.333m0 42.667c-23.563 0-42.666 19.102-42.666 42.666s19.103 42.667 42.666 42.667c23.564 0 42.667-19.103 42.667-42.667S407.564 85.334 384 85.334"></svg:path>`,
})
export class IxTextCircleRectangleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTextCircleRectangleFilledIcon],svg[ix-text-circle-rectangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 213.334c47.128 0 85.334-38.205 85.334-85.334c0-47.128-38.206-85.333-85.334-85.333S298.667 80.872 298.667 128s38.206 85.334 85.333 85.334M255.947 192v-64H42.667v64h31.992l10.664-21.333h42.656V320l-42.656 10.667v32h127.968v-32L170.635 320V170.667h42.656L223.956 192zm.053 64v192h192V256z"></svg:path>`,
})
export class IxTextCircleRectangleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTextDocumentIcon],svg[ix-text-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.334 42.667H320l106.666 106.667v128H384V167.04l-81.707-81.706H128v192H85.334zM70.042 342.833v-22.592h103.53v22.592h-37.61V448.37h-28.864V342.833zm186.963 19.18l30.208-41.772h33.002l-46.55 63.126l47.084 65.002h-34.795l-30.379-42.773l-30.23 42.773h-34.068l47.38-65.728l-45.033-62.4h33.557zm82.336-41.772v22.592h37.077V448.37h28.864V342.833h37.59v-22.592z"></svg:path>`,
})
export class IxTextDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTextItalicIcon],svg[ix-text-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m149.333 448l2.533-17.615l42.554-1.897q7.093-34.687 17.478-104.604l18.491-124.657q13.172-88.345 15.198-115.715l-42.048-1.897L206.072 64h135.261L338.8 81.615l-43.06 1.897q-12.412 72.355-17.985 110.295l-18.237 123.844q-11.399 76.963-14.438 110.837l42.047 1.897L284.594 448z"></svg:path>`,
})
export class IxTextItalicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTextStrikeThroughIcon],svg[ix-text-strike-through-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m128 422.709l18.175-43.815q55.3 24.579 97.45 24.579q34.418 0 55.686-17.098q21.269-17.455 21.269-45.24q0-24.223-14.695-35.977q-13.33-11.284-58.886-27.825H42.667v-42.666h426.666v42.666H362.257Q384 300.423 384 337.217q0 53.433-43.698 83.711Q301.244 448 242.852 448Q186.007 448 128 422.709m106.965-209.376h-93.076q-12.342-19.993-12.342-46.031q0-48.8 41.377-78.367Q206.115 64 261.414 64q56.458 0 114.465 27.429l-18.175 43.814q-43.311-26.716-90.876-26.716q-34.804 0-54.526 14.605q-19.335 14.248-19.335 39.54q0 22.442 15.855 35.621q8.325 6.735 26.143 15.04" clip-rule="evenodd"></svg:path>`,
})
export class IxTextStrikeThroughIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTextUnderlineIcon],svg[ix-text-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M130.133 42.667V223.36q0 31.445.938 50.219q1.408 18.773 4.694 30.506q3.754 11.734 9.856 21.59q29.099 46.933 107.477 46.933q73.216 0 104.661-41.771q7.979-10.324 11.734-22.528q4.224-12.202 5.632-31.914t1.408-53.035V42.667h-49.28v198.058q0 47.403-15.019 66.646q-8.448 11.733-23.936 17.834q-15.019 6.102-35.2 6.102t-34.731-6.102q-14.548-6.1-23.466-18.304q-7.04-10.794-10.326-27.69q-2.816-16.896-2.816-42.71V42.667zm275.2 362.666H106.667V448h298.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxTextUnderlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixThermometerIcon],svg[ix-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 42.667c35.346 0 64 28.653 64 64l.047 170.694c25.882 19.462 42.62 50.429 42.62 85.306c0 58.91-47.756 106.666-106.667 106.666c-58.91 0-106.667-47.756-106.667-106.666c0-34.877 16.739-65.844 42.62-85.306L192 106.667c0-35.347 28.654-64 64-64m0 42.666c-11.782 0-21.333 9.552-21.333 21.334l.002 195.641C209.81 311.093 192 334.8 192 362.667c0 35.346 28.654 64 64 64s64-28.654 64-64c0-27.859-17.8-51.561-42.647-60.352l-.02-195.648c0-11.782-9.551-21.334-21.333-21.334M256 320c23.564 0 42.667 19.102 42.667 42.667c0 23.564-19.103 42.666-42.667 42.666s-42.667-19.102-42.667-42.666C213.333 339.102 232.436 320 256 320m128-64v21.333h-42.666V256zm0-64v21.333h-42.666V192zm0-64v21.333h-42.666V128zm0-64v21.333h-42.666V64z"></svg:path>`,
})
export class IxThermometerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixThermometerFilledIcon],svg[ix-thermometer-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c-35.346 0-64 28.653-64 64v170.658c-25.908 19.461-42.667 50.444-42.667 85.342c0 58.91 47.757 106.666 106.667 106.666s106.667-47.756 106.667-106.666c0-34.898-16.759-65.881-42.667-85.342V106.667c0-35.347-28.654-64-64-64M341.333 64H384v21.333h-42.667zm0 64H384v21.333h-42.667zM384 192h-42.667v21.333H384zm-42.667 64H384v21.333h-42.667zM256 405.333c23.564 0 42.667-19.102 42.667-42.666C298.667 339.102 279.564 320 256 320s-42.667 19.102-42.667 42.667c0 23.564 19.103 42.666 42.667 42.666" clip-rule="evenodd"></svg:path>`,
})
export class IxThermometerFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixThreadsLogoIcon],svg[ix-threads-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M349.873 238.326a147 147 0 0 0-4.191-1.93c-3.816-60.35-37.806-95.118-93.451-95.473l-.761-.002c-33.778 0-61.915 14.469-79.23 40.743l-1.364 2.069l34.423 23.614l1.416-2.148c11.999-18.205 30.969-22.027 44.769-22.027l.487.001c17.353.111 30.384 5.083 38.734 14.777c5.534 6.428 9.451 15.211 11.665 26.145c-15.223-2.298-31.691-2.961-49.019-1.967c-53.81 3.1-88.392 34.673-86.052 78.566c1.189 22.323 12.302 41.52 31.292 54.059c15.919 10.507 36.4 15.652 57.651 14.493c28.113-1.541 50.197-12.303 65.637-31.985c11.093-14.14 18.207-31.926 21.691-54.278c11.157 7.433 19.147 16.651 23.774 27.443c8.762 20.433 9.246 54.036-18.23 81.488c-24.347 24.323-53.692 34.84-98.083 35.166c-49.279-.365-86.5-16.103-110.631-46.779c-22.709-28.869-34.446-70.697-34.885-124.28c.439-53.627 12.176-95.455 34.885-124.323c24.13-30.675 61.351-46.414 110.592-46.78c49.658.369 87.55 16.196 112.621 47.042c12.223 15.038 21.559 34.057 27.75 56.528l.665 2.415l40.329-10.759l-.664-2.448c-7.638-28.152-19.782-52.601-36.093-72.669c-33.282-40.945-81.881-61.927-144.465-62.36h-.265c-62.458.432-110.528 21.502-142.876 62.623c-28.696 36.479-43.497 87.129-43.993 150.545l-.001.182l.001.151c.496 63.414 15.297 114.063 43.993 150.542c32.349 41.122 80.42 62.191 142.894 62.623h.265c55.526-.385 94.707-14.964 127.04-47.268c42.534-42.494 41.236-95.803 27.2-128.542c-10.093-23.529-29.291-42.615-55.52-55.197M208.75 298.405c-1.228-23.072 23.446-32.739 46.947-34.094c4.218-.243 8.447-.366 12.569-.366c12.534 0 24.444 1.13 35.437 3.36c-2.099 22.481-8.274 38.682-18.366 48.17c-9.984 9.388-22.663 11.106-31.33 11.582h-.004c-14.538.815-28.186-3.141-36.504-10.595c-5.425-4.861-8.369-10.937-8.749-18.057"></svg:path>`,
})
export class IxThreadsLogoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixThresholdCancelledIcon],svg[ix-threshold-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m80 48l384 384l-30.17 30.17l-14.17-14.171L64 448l-.001-355.662L49.83 78.17L63.999 64l.001-.001zm26.666 87.005v270.328h270.328L254.176 282.515l-49.512 90.818H128v-42.666h51.328l43.414-79.586zm248.135 20.702l91.669 84.617l-28.94 31.352l-47.013-43.388l-15.292 36.333l-32.58-32.566zm7.866-49.04v42.666H320v-42.666zm85.333 0v42.666h-42.667v-42.666zm-170.667 0v42.666H239.89l-5.224-5.222v-37.444z"></svg:path>`,
})
export class IxThresholdCancelledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixThresholdOffIcon],svg[ix-threshold-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m106.667 64l-.001 341.333H448V448H64V64zM354.8 155.707l91.669 84.617l-28.94 31.352l-47.013-43.388l-42.608 101.236l-66.256-60.724l-56.989 104.533H128v-42.666h51.328l70.995-130.144l61.762 56.608z"></svg:path>`,
})
export class IxThresholdOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixThresholdOnIcon],svg[ix-threshold-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m106.667 64l-.001 341.333H448V448H64V64zM354.8 155.707l91.669 84.617l-28.94 31.352l-47.013-43.388l-42.608 101.236l-66.256-60.724l-56.989 104.533H128v-42.666h51.328l70.995-130.144l61.762 56.608zM192 106.667v42.666h-42.667v-42.666zm85.333 0v42.666h-42.666v-42.666zm85.334 0v42.666H320v-42.666zm85.333 0v42.666h-42.667v-42.666z"></svg:path>`,
})
export class IxThresholdOnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixThumbDownIcon],svg[ix-thumb-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M254.571 424.759c-6.181-1.503-10.292-3.686-11.976-5.779c-2.091-2.602-3.174-9.868.06-22.463a15227 15227 0 0 0 11.446-44.992l13.354-52.844H146.968c-12.389 0-23.011-4.341-29.903-12.216c-7.777-8.892-10.724-22.372-8.345-38.057l.185-1.058c12.688-72.498 22.715-106.615 28.889-122.459c8.453-21.642 18.258-39.555 52.77-39.555c4.466 0 9.234.305 14.187.91l199.332 34.78l-.001 131.676l-70.976 39.781l-11.11 6.227l-5.914 11.058s-40.075 74.921-61.511 114.991m17.744 44.575c2.65 0 5.326-.073 8.017-.214c.007 0 74.719-139.677 74.719-139.677L448 277.347V85.337L211.45 44.062c-7.441-.958-14.389-1.396-20.886-1.396c-67.657 0-86.377 48.003-93.84 67.108C82.185 147.09 70.112 214.466 65.61 240.196l-.043.146c-4.825 28.762 1.587 54.951 18.034 73.754c15.033 17.178 37.528 27.254 63.368 27.254h64.482s-6.508 25.754-11.408 44.841c-15.331 59.725 24.497 83.143 72.273 83.143"></svg:path>`,
})
export class IxThumbDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixThumbDownFilledIcon],svg[ix-thumb-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M190.564 42.667c6.497 0 13.445.438 20.886 1.396L448 85.336v192.01l-92.949 52.098S280.339 469.12 280.332 469.12c-51.203 2.7-87.16-19.894-70.979-82.929c4.9-19.087 11.408-44.842 11.408-44.842h-73.793c-25.84 0-48.335-10.075-63.368-27.253c-16.447-18.803-22.859-44.992-18.034-73.754l.043-.146c4.503-25.73 16.576-93.107 31.115-130.421c7.463-19.105 26.184-67.108 93.84-67.108"></svg:path>`,
})
export class IxThumbDownFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixThumbUpIcon],svg[ix-thumb-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M257.429 87.241c6.181 1.503 10.292 3.686 11.976 5.78c2.091 2.601 3.174 9.867-.06 22.462c-4.916 19.152-11.446 44.992-11.446 44.992l-13.354 52.844h120.487c12.389 0 23.011 4.341 29.903 12.216c7.777 8.892 10.724 22.371 8.345 38.057l-.185 1.058c-12.688 72.498-22.715 106.615-28.889 122.459c-8.453 21.642-18.258 39.555-52.77 39.555c-4.466 0-9.234-.305-14.187-.909l-199.331-34.781V259.298l70.976-39.781l11.11-6.227l5.914-11.058s40.075-74.921 61.511-114.99m-17.744-44.575c-2.65 0-5.326.073-8.017.214c-.007 0-74.719 139.677-74.719 139.677L64 234.653v192.011l236.55 41.273c7.441.958 14.389 1.396 20.886 1.396c67.657 0 86.377-48.003 93.84-67.108c14.539-37.315 26.612-104.691 31.115-130.421l.043-.146c4.825-28.762-1.587-54.951-18.034-73.754c-15.033-17.178-37.528-27.254-63.368-27.254H300.55s6.508-25.754 11.408-44.841c15.331-59.725-24.497-83.143-72.273-83.143"></svg:path>`,
})
export class IxThumbUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixThumbUpFilledIcon],svg[ix-thumb-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M321.436 469.333c-6.497 0-13.445-.438-20.886-1.396L64 426.664v-192.01l92.949-52.098S231.661 42.88 231.668 42.88c51.203-2.7 87.16 19.894 70.979 82.929c-4.9 19.087-11.408 44.842-11.408 44.842h73.793c25.84 0 48.335 10.075 63.368 27.253c16.447 18.803 22.859 44.992 18.034 73.754l-.043.146c-4.503 25.73-16.576 93.107-31.115 130.421c-7.463 19.105-26.183 67.108-93.84 67.108"></svg:path>`,
})
export class IxThumbUpFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTicketIcon],svg[ix-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m309.224 42.668l45.924 45.936l-11.901 13.291a47.04 47.04 0 0 0-12.015 31.447c0 26.029 21.095 47.129 47.117 47.129a47 47 0 0 0 28.481-9.575l2.958-2.442l13.288-11.905l46.257 46.27l-111.936 107.678l-154.684 158.838l-46.171-46.183l11.901-13.291a47.04 47.04 0 0 0 12.015-31.447c0-26.029-21.095-47.13-47.117-47.13a47 47 0 0 0-28.481 9.576l-2.959 2.442l-13.287 11.905l-45.947-45.959l142.96-144.06l18.885-18.927zm-96.948 149.176l-105.089 105.89l2.513-.799a84.6 84.6 0 0 1 14.012-2.808l4.792-.409l4.837-.137c46.839 0 84.81 37.981 84.81 84.833c0 6.475-.735 12.859-2.158 19.045l-1.194 4.602l-.412 1.261l103.281-106.059zm85.452-84.775l-58.746 58.119L344.43 270.663l58.294-56.084l-.734.242a84.7 84.7 0 0 1-14.012 2.808l-4.792.408l-4.837.138c-46.839 0-84.811-37.981-84.811-84.833a85 85 0 0 1 2.158-19.046l1.195-4.601z" clip-rule="evenodd"></svg:path>`,
})
export class IxTicketIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTicketFilledIcon],svg[ix-ticket-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m207.046 144.956l160 160l-164.379 164.379l-48.446-48.446c15.611-7.682 26.354-23.748 26.354-42.322c0-26.035-21.105-47.141-47.14-47.141c-18.575 0-34.64 10.743-42.322 26.355l-48.446-48.446zm32.189-32.19l70.098-70.098l48.446 48.446c-15.611 7.682-26.354 23.747-26.354 42.322c0 26.035 21.105 47.141 47.14 47.141c18.575 0 34.64-10.743 42.322-26.355l48.446 48.446l-70.098 70.098z" clip-rule="evenodd"></svg:path>`,
})
export class IxTicketFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTiktokLogoIcon],svg[ix-tiktok-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 149.333A99.837 99.837 0 0 1 341.333 42.667h-74.666v288a64.005 64.005 0 0 1-44.485 61.132a64 64 0 0 1-71.719-23.928a64.005 64.005 0 0 1 1.134-75.597A64 64 0 0 1 224 270.507v-76.8A141.4 141.4 0 0 0 202.667 192a138.66 138.66 0 0 0-128.112 85.601a138.668 138.668 0 1 0 266.778 53.066v-137.6A187.53 187.53 0 0 0 448 224z"></svg:path>`,
})
export class IxTiktokLogoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTilesIcon],svg[ix-tiles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.667 64v170.667H64V64zM192 106.667h-85.333V192H192zm42.667 170.666V448H64V277.333zM192 320h-85.333v85.333H192zM448 64v170.667H277.333V64zm-42.667 42.667H320V192h85.333zM448 277.333V448H277.333V277.333zM405.333 320H320v85.333h85.333z"></svg:path>`,
})
export class IxTilesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTilesFilledIcon],svg[ix-tiles-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.667 64H64v170.667h170.667zM448 64H277.333v170.667H448zM64 277.333h170.667V448H64zm384 0H277.333V448H448z" clip-rule="evenodd"></svg:path>`,
})
export class IxTilesFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTimeZoneIcon],svg[ix-time-zone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 255.999c0-117.82 95.512-213.333 213.333-213.333s213.333 95.513 213.333 213.333c0 15.034-1.555 29.705-4.513 43.861c-21.506-26.744-54.497-43.861-91.487-43.861c-25.118 0-48.392 7.893-67.479 21.334H203.161c.257 5.538.612 10.991 1.056 16.344l1.154 11.927q.326 2.937.686 5.827l1.575 11.362c3.982 26.038 10.057 48.678 17.105 66.118l3.077 7.15c8.867 19.327 18.932 30.605 28.186 30.605c3.453 0 7.019-1.57 10.594-4.543c7.65 16.71 19.109 31.312 33.266 42.696a214 214 0 0 1-43.86 4.514c-117.821 0-213.333-95.513-213.333-213.334m43.987-21.333c7.628-61.174 47.632-112.293 102.324-135.67c-7.733 16.346-14.063 35.65-18.812 57.094l-2.337 11.396c-2.921 15.444-5.06 31.857-6.357 48.965l-.814 12.957a499 499 0 0 0-.236 5.258zm0 42.667c7.628 61.174 47.632 112.293 102.324 135.67c-7.733-16.347-14.063-35.65-18.812-57.094l-2.337-11.397c-2.921-15.443-5.06-31.857-6.357-48.965l-.814-12.956q-.131-2.62-.236-5.258zm338.692-42.667h-73.768q-.105-2.638-.236-5.258l-.814-12.957c-1.297-17.108-3.436-33.521-6.357-48.965l-2.337-11.396c-4.749-21.444-11.079-40.748-18.812-57.094c54.692 23.377 94.696 74.496 102.324 135.67m-222.185 0c.257-5.539.612-10.991 1.056-16.344l1.154-11.927q.326-2.937.686-5.827l1.575-11.362c3.982-26.038 10.057-48.679 17.105-66.118l3.077-7.15c8.867-19.327 18.932-30.605 28.186-30.605s19.319 11.278 28.186 30.605l3.077 7.15c7.048 17.439 13.123 40.08 17.105 66.118l1.575 11.362q.361 2.89.686 5.827l1.154 11.927c.444 5.353.799 10.805 1.056 16.344zm170.172 234.667c53.02 0 96-42.981 96-96c0-53.02-42.98-96-96-96c-53.019 0-96 42.98-96 96c0 53.019 42.981 96 96 96m16-170.667v58.667h37.334v32h-69.334v-90.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxTimeZoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTimeZoneFilledIcon],svg[ix-time-zone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M372.771 232.297h94.599c-9.599-86.84-71.322-157.97-153.19-181.412c35.162 55.613 54.692 118.13 58.591 181.412M256.001 42.668a343 343 0 0 1 25.624 36.693c28.569 47.212 44.698 99.731 48.388 152.936H181.988c3.69-53.205 19.82-105.724 48.388-152.936A343 343 0 0 1 256 42.668zm-57.892 7.763c-82.668 22.965-145.14 94.457-154.802 181.866h95.923c3.91-63.455 23.536-126.14 58.879-181.866M139.23 279.705H43.307c9.663 87.408 72.134 158.9 154.802 181.865c-35.342-55.726-54.969-118.411-58.879-181.865m116.771 189.628a343 343 0 0 1-25.624-36.693c-28.568-47.212-44.698-99.731-48.388-152.935h89.06c-22.594 24.669-36.381 57.539-36.381 93.629c0 32.234 10.998 61.899 29.447 85.447a347 347 0 0 1-8.113 10.552m117.332.001c53.02 0 96-42.981 96-96c0-53.02-42.98-96-96-96c-53.019 0-96 42.98-96 96c0 53.019 42.981 96 96 96m16-170.667v58.667h37.334v32h-69.334v-90.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxTimeZoneFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixToBePublishedIcon],svg[ix-to-be-published-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c14.433 0 28.531 1.433 42.16 4.165L259.62 85.37q-1.805-.038-3.62-.038c-94.256 0-170.666 76.41-170.666 170.667c0 94.256 76.41 170.667 170.666 170.667c94.2-.14 170.526-76.468 170.667-170.666c0-28.37-6.922-55.122-19.169-78.661l31.332-31.33c19.364 32.118 30.504 69.753 30.504 109.99c-.176 117.749-95.586 213.158-213.334 213.334c-117.82 0-213.333-95.512-213.333-213.333C42.667 138.18 138.18 42.667 256 42.667m85.334-8.837l89.751 89.752l-30.17 30.17l-38.249-38.239l.001 140.487c0 45.7-35.925 83.01-81.074 85.229l-89.593.104v-42.666h85.334c22.493 0 40.92-17.406 42.55-39.483L320 256V115.513l-38.248 38.239l-30.17-30.17z"></svg:path>`,
})
export class IxToBePublishedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixToSearchIcon],svg[ix-to-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M266.667 85.333c76.583 0 138.667 62.083 138.667 138.667c0 30.594-9.908 58.874-26.69 81.806l93.5 93.5l-30.17 30.17l-93.5-93.5c-22.932 16.782-51.213 26.69-81.807 26.69c-41.471 0-78.69-18.205-104.102-47.06l30.258-30.258C210.433 306.52 236.976 320 266.667 320c53.02 0 96-42.981 96-96c0-53.02-42.98-96-96-96c-24.26 0-46.42 8.999-63.32 23.841l-30.215-30.213c24.66-22.543 57.491-36.295 93.535-36.295m-121.752 38.248l89.752 89.752l-89.752 89.752l-30.17-30.17l38.237-38.249H42.667V192l110.316-.001l-38.238-38.248z"></svg:path>`,
})
export class IxToSearchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTopicIcon],svg[ix-topic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 85.333v341.333H128L21.333 256L128 85.333zM426.666 128h-275.05l-80 128l80 128h275.05zm-150.413 21.333l-9.14 60.372h33.9l9.14-60.372h32.572l-9.14 60.372h29.081v26.949H329.43l-5.982 39.595h28.749v26.949h-32.904l-8.973 59.468h-32.572l8.974-59.468h-33.9l-8.974 59.468h-32.571l8.973-59.468H192v-26.949h32.405l5.982-39.595H202.47v-26.95h32.073l9.14-60.371zm22.413 85.333H262.4l-6.4 42.667h36.266z"></svg:path>`,
})
export class IxTopicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTopicFilledIcon],svg[ix-topic-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 85.333v341.333H128L21.333 256L128 85.333zm-193.08 64h-32.571l-9.14 60.372h-32.073v26.949h27.918l-5.982 39.595H192v26.949h28.25l-8.973 59.468h32.57l8.974-59.468h33.901l-8.974 59.468h32.572l8.973-59.468h32.904v-26.949h-28.75l5.983-39.595h33.236v-26.95h-29.081l9.14-60.371h-32.571l-9.14 60.372h-33.901zm22.413 85.333l-6.4 42.667H256l6.4-42.667z"></svg:path>`,
})
export class IxTopicFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTouchIcon],svg[ix-touch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M291.746 258.115v-84.781c0-30.875-25.125-56-56-56s-56 25.125-56 56v119.43c-10.366-8.696-23.304-13.628-36.893-13.628c-16.177 0-31.708 6.854-42.573 18.812c-21.01 23.024-19.642 58.547 2.658 80.149c.028.029.039.06.067.089l94.328 91.148h208v-176zm70.92 168.552H213.333s-74.738-70.448-82.009-77.073c-8.273-7.536-8.87-20.354-1.333-28.63c7.539-8.274 20.357-8.87 28.631-1.333c5.54 5.046 41.952 35.036 41.952 35.036l16.506-8.534v-172.8c0-10.31 8.358-18.666 18.666-18.666c10.31 0 18.667 8.357 18.667 18.667v117.875l108.253 34.125zm-253.19-220.292c-2.77-10.575-4.396-21.609-4.396-33.041c0-72.042 58.614-130.667 130.666-130.667s130.667 58.625 130.667 130.667c0 11.432-1.626 22.466-4.397 33.041l-40.472-14.01c1.364-6.146 2.202-12.48 2.202-19.031c0-48.524-39.476-88-88-88s-88 39.476-88 88c0 6.552.839 12.885 2.202 19.03z"></svg:path>`,
})
export class IxTouchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTouchFilledIcon],svg[ix-touch-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M266.516 141.258C274.57 150.3 279.17 162.836 279.17 176v93.133l117.334 37.334v162.867H208.645L112.16 381.09c-9.638-9.397-15.7-22.087-16.13-34.726c-.366-10.802 3.565-21.504 13.046-29.666c4.748-4.088 13.624-7.365 26.093-7.365c15.382 0 27.231 11.8 35.83 19.506q5.157 4.62 22.837 22.888V176.191c-.05-13.045 4.981-25.446 13.336-34.454c7.717-8.32 18.334-13.737 30.41-13.737c11.775 0 21.757 5.2 28.934 13.258m-155.203 65.117c-2.77-10.575-4.397-21.609-4.397-33.041c0-72.042 58.615-130.667 130.667-130.667s130.666 58.625 130.666 130.667c0 11.432-1.626 22.466-4.397 33.041l-40.471-14.01c1.363-6.146 2.202-12.48 2.202-19.031c0-48.524-39.477-88-88-88s-88 39.476-88 88c0 6.552.838 12.885 2.201 19.03z"></svg:path>`,
})
export class IxTouchFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTraceEyeIcon],svg[ix-trace-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M329.132 276.555c-.034.202-.082.627-.142 1.442c-17.517 1.469-35.664 12.07-50.502 22.038a29 29 0 0 0 3.675-3.203c5.347-5.51 8.452-13.013 8.651-20.912a30 30 0 0 0-2.1-10.912c-1.899-5.862-5.473-10.956-10.226-14.577c-4.753-3.619-10.45-5.587-16.307-5.63c-2.874.125-5.709.74-8.398 1.819c-4.522 1.414-8.638 4.005-11.973 7.535c-3.332 3.528-5.779 7.887-7.116 12.672a30 30 0 0 0-1.145 8.285c-.017 6.102 1.729 12.063 5.005 17.084s7.923 8.861 13.32 11.003a25.6 25.6 0 0 0 10.307 2.223c5.346.003 10.541-1.577 15.024-4.499c-14.196 10.103-24.886 27.21-33.348 42.892c-11.791-3.518-22.387-10.53-30.541-20.207l-38.177 20.207a64 64 0 0 1 1.145 12.124c0 13.99-3.918 27.664-11.259 39.293c-7.341 11.631-17.775 20.696-29.983 26.048c-12.208 5.353-25.641 6.754-38.6 4.026c-12.96-2.73-24.864-9.465-34.207-19.357s-15.707-22.492-18.285-36.21c-2.577-13.721-1.254-27.941 3.802-40.863c5.057-12.924 13.62-23.969 24.607-31.741s23.903-11.92 37.117-11.92c9.16-.119 18.243 1.796 26.661 5.626c8.417 3.829 15.982 9.485 22.204 16.602l38.177-20.207a64 64 0 0 1-1.145-12.124a74.4 74.4 0 0 1 4.77-27.484c3.302-8.735 8.215-16.685 14.455-23.383c6.238-6.699 13.679-12.013 21.881-15.63a63.6 63.6 0 0 1 25.893-5.439a54.3 54.3 0 0 1 11.453 1.211l19.088-40.413c-6.616-6.431-11.911-14.235-15.556-22.926c-3.646-8.691-5.563-18.082-5.632-27.591c.226-13.942 4.341-27.503 11.826-38.977c7.486-11.475 18.007-20.35 30.245-25.511c12.237-5.162 25.641-6.379 38.53-3.498c12.888 2.88 24.684 9.73 33.906 19.688s15.456 22.579 17.922 36.277c2.464 13.698 1.048 27.862-4.07 40.711c-5.117 12.849-13.709 23.81-24.694 31.504s-23.874 11.781-37.047 11.743a54 54 0 0 1-11.453-1.213l-19.088 40.413c6.616 6.432 11.911 14.236 15.557 22.927s5.562 18.083 5.631 27.591c.06.815.108 1.241.142 1.443m.07-.001c0 .137-.023.274-.07.001c.047-.272.07-.137.07-.001m-51.997 24.369q.636-.455 1.283-.888a29 29 0 0 1-1.283.888m81.576-208.899c-5.369-5.684-12.653-8.877-20.247-8.877s-14.877 3.193-20.247 8.877s-8.385 13.394-8.385 21.433c.099 8.006 3.148 15.655 8.496 21.317s12.574 8.889 20.136 8.993a24.3 24.3 0 0 0 7.636-1.212c6.051-1.702 11.395-5.483 15.196-10.75c3.8-5.266 5.841-11.721 5.801-18.348c0-8.039-3.016-15.748-8.386-21.433M126.808 380.111c4.975-4.023 8.547-9.683 10.155-16.089a28.5 28.5 0 0 0 1.145-8.083c-.099-8.006-3.147-15.654-8.496-21.316c-5.348-5.662-12.573-8.889-20.136-8.994c-7.594 0-14.877 3.195-20.247 8.879s-8.386 13.393-8.386 21.431c0 8.041 3.017 15.75 8.386 21.434c5.37 5.684 12.653 8.877 20.247 8.877c6.26.044 12.357-2.116 17.332-6.139m203.856 3.886c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32m32-90.932c79.565 0 113.664 90.931 113.664 90.931s-34.099 90.932-113.664 90.932S249 383.996 249 383.996s34.099-90.931 113.664-90.931m-62.827 64.838c-7.597 9.35-13.267 18.872-17.029 26.093c3.762 7.222 9.432 16.744 17.029 26.094c15.476 19.047 36.013 34.118 62.827 34.118s47.351-15.071 62.827-34.118c7.597-9.35 13.259-18.855 17.02-26.076v-.035c-3.761-7.222-9.423-16.726-17.02-26.076c-15.476-19.047-36.013-34.118-62.827-34.118s-47.351 15.071-62.827 34.118" clip-rule="evenodd"></svg:path>`,
})
export class IxTraceEyeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTrainIcon],svg[ix-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 85.33c-23.564 0-42.666 19.103-42.666 42.667v170.667c0 11.783 9.551 21.333 21.333 21.333h128c11.783 0 21.333-9.55 21.333-21.333V127.997c0-23.564-19.103-42.666-42.666-42.666h-21.334c0 11.782-9.551 21.333-21.333 21.333s-21.333-9.551-21.333-21.333zm128 180.042c0-11.782-9.551-21.333-21.333-21.333s-21.333 9.551-21.333 21.333s9.551 21.334 21.333 21.334s21.333-9.553 21.333-21.334m-170.666 0c0 11.781 9.551 21.334 21.333 21.334s21.333-9.553 21.333-21.334c0-11.782-9.551-21.333-21.333-21.333s-21.333 9.551-21.333 21.333M128 127.997c0-47.128 38.205-85.333 85.333-85.333h85.334c47.127 0 85.333 38.205 85.333 85.333v170.667c0 35.347-28.653 64-64 64H192c-35.346 0-64-28.653-64-64zm192 298.667v-21.333H192v21.333zm-170.667 42.667v-21.334h213.334v21.334zm166.224-275.818c-.755 7.287-5.466 13.32-12.031 14.729c-10.469 2.244-27.661 5.089-47.526 5.089c-19.864 0-37.057-2.845-47.526-5.089c-6.564-1.409-11.276-7.442-12.029-14.729l-4.339-41.983c-.963-9.309 4.75-17.829 13.207-19.165c12.624-1.993 31.656-4.368 50.687-4.368c19.032 0 38.064 2.375 50.688 4.368c8.455 1.336 14.169 9.856 13.206 19.165z" clip-rule="evenodd"></svg:path>`,
})
export class IxTrainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTrainFilledIcon],svg[ix-train-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 42.664C166.205 42.664 128 80.87 128 127.997v170.667c0 35.347 28.654 64 64 64h128c35.347 0 64-28.653 64-64V127.997c0-47.128-38.206-85.333-85.333-85.333zm42.667 64c11.782 0 21.333-9.551 21.333-21.333S267.782 63.997 256 63.997s-21.333 9.552-21.333 21.334s9.551 21.333 21.333 21.333m77.474 99.054c-.981 8.645-7.11 15.803-15.65 17.473c-13.619 2.662-35.983 6.037-61.824 6.037s-48.205-3.375-61.824-6.037c-8.54-1.67-14.669-8.828-15.649-17.473l-5.645-49.803c-1.251-11.044 6.181-21.152 17.182-22.736c16.422-2.365 41.179-5.182 65.936-5.182s49.515 2.817 65.937 5.182c11 1.584 18.432 11.692 17.18 22.736zm-162.807 80.989c11.782 0 21.333-9.553 21.333-21.334c0-11.782-9.551-21.333-21.333-21.333s-21.334 9.551-21.334 21.333s9.552 21.334 21.334 21.334m192-21.334c0 11.781-9.551 21.334-21.334 21.334S320 277.154 320 265.373c0-11.782 9.551-21.333 21.333-21.333c11.783 0 21.334 9.551 21.334 21.333M320 426.664v-21.333H192v21.333zm-170.667 42.667v-21.334h213.334v21.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxTrainFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTrashcanIcon],svg[ix-trashcan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 85.334H192V42.667h128zm-85.333 128H192V384h42.667zm85.333 0h-42.667V384H320zM448 128v42.667h-42.667v298.667H106.667V170.667H64V128zm-85.333 42.667H149.333v256h213.334z"></svg:path>`,
})
export class IxTrashcanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTrashcanFilledIcon],svg[ix-trashcan-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 85.334H192V42.667h128zm-85.333 128H192V384h42.667zm85.333 0h-42.667V384H320zM448 128v42.667h-42.667v298.667H106.667V170.667H64V128z"></svg:path>`,
})
export class IxTrashcanFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTreeIcon],svg[ix-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 64h128v64h-128zM192 170.667h128v64H192zm0 106.666h128v64H192zM298.666 384h128v64h-128zM160 149.333v32h10.666v32H128v-64zm106.666 213.334v32h10.667v32h-42.667v-64zM160 234.667V288h10.666v32H128v-85.333z"></svg:path>`,
})
export class IxTreeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTreeTwoLevelIcon],svg[ix-tree-two-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.333H256v64H42.667zm213.333 128h192v64H256zm-106.667 21.334v-64h-42.666v106.666h106.666v-42.666zM448 341.333H256v64h192zm-298.667-42.666v64h64v42.666H106.667V298.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxTreeTwoLevelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTrendIcon],svg[ix-trend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m106.667 64l-.001 341.333H448V448l-341.334-.001V448H64V64zm322.896 188.68l15.54 27.973l-101.002 56.113l-115.386-20.99l-79.512 69.599l-21.072-24.083l91.14-79.748l119.268 21.688zm-14.21-146.66l22.627 22.627l-122.02 122.02H199.34l-59.19 69.079l-24.297-20.825l68.789-80.254h118.036z"></svg:path>`,
})
export class IxTrendIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTrendCompanionIcon],svg[ix-trend-companion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 213.333v160l52.255-104.098l56.182 57.57l50.578-98.61L448 246.4l-74.436 144.082l-56.2-57.59l-40.031 72.441H448V448H214.26l-.013-12.557l-.393.015V213.333zM362.667 64v128H320v-85.333H106.667v170.666H192V320H64V64zm-192 149.333v21.334H128v-21.334zm0-42.666V192H128v-21.333zm64 0V192H192v-21.333zm64 0V192H256v-21.333zm-128-42.667v21.333H128V128zm64 0v21.333H192V128zm64 0v21.333H256V128z"></svg:path>`,
})
export class IxTrendCompanionIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTrendDownwardIcon],svg[ix-trend-downward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m120.987 90.805l199.016 199.012L320 192h42.667v170.667H192V320l97.774-.039L90.805 120.987z"></svg:path>`,
})
export class IxTrendDownwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTrendDownwardCircleIcon],svg[ix-trend-downward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.463 255.869c0 94.257 76.41 170.666 170.667 170.666s170.667-76.409 170.667-170.666c0-90.675-70.712-164.833-160-170.34V42.798c112.865 5.558 202.666 98.827 202.666 213.072c0 117.819-95.512 213.333-213.333 213.333c-117.82 0-213.333-95.514-213.333-213.333c0-51.263 18.08-98.303 48.213-135.09a214.5 214.5 0 0 1 30.108-30.093L320.13 289.699v-97.83h42.667v170.666H192.13v-42.666h97.83L121.306 151.215c-22.464 28.9-35.843 65.215-35.843 104.654" clip-rule="evenodd"></svg:path>`,
})
export class IxTrendDownwardCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTrendDownwardFilledIcon],svg[ix-trend-downward-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M120.981 90.81C204.78 22.15 328.63 26.93 406.85 105.15c83.312 83.313 83.312 218.388 0 301.7s-218.387 83.312-301.7 0c-78.22-78.22-83-202.071-14.34-285.869l199.006 199.004L192 320v42.667h170.667V192H320l.002 97.832Z"></svg:path>`,
})
export class IxTrendDownwardFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTrendFlatCurveIcon],svg[ix-trend-flat-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 64H64v384h384v-42.667H106.667zM128 229.333h298.667v32H128z" clip-rule="evenodd"></svg:path>`,
})
export class IxTrendFlatCurveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTrendSidewaysIcon],svg[ix-trend-sideways-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M286.17 135.32L406.85 256l-15.085 15.085L286.17 376.679L256 346.51l69.156-69.177H42.667v-42.666H325.18L256 165.49z"></svg:path>`,
})
export class IxTrendSidewaysIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTrendSidewaysCircleIcon],svg[ix-trend-sideways-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M135.358 376.586c66.65 66.65 174.709 66.65 241.359 0c66.65-66.649 66.65-174.709 0-241.359c-64.116-64.116-166.555-66.553-233.585-7.311L112.916 97.7c83.737-75.878 213.188-73.426 293.971 7.357c83.311 83.311 83.312 218.387 0 301.699c-83.311 83.311-218.388 83.311-301.699 0c-36.248-36.248-56.726-82.295-61.43-129.614a214.5 214.5 0 0 1 .01-42.569l281.446.001l-69.176-69.177l30.17-30.17l120.679 120.68l-120.68 120.679l-30.169-30.17l69.176-69.176l-238.513.001c4.55 36.319 20.769 71.458 48.657 99.345" clip-rule="evenodd"></svg:path>`,
})
export class IxTrendSidewaysCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTrendSidewaysFilledIcon],svg[ix-trend-sideways-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.82 0 213.333 95.513 213.333 213.333c0 117.821-95.512 213.334-213.333 213.334c-110.62 0-201.576-84.196-212.28-192l281.436-.001L256 346.51l30.17 30.17l105.594-105.595L406.85 256L286.17 135.32L256 165.49l69.18 69.177H43.72c10.704-107.804 101.66-192 212.28-192"></svg:path>`,
})
export class IxTrendSidewaysFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTrendUpwardIcon],svg[ix-trend-upward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 149.333V320H320l-.039-97.814l-198.995 198.991l-30.161-30.165l199.012-199.034L192 192v-42.667z"></svg:path>`,
})
export class IxTrendUpwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTrendUpwardCircleIcon],svg[ix-trend-upward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M255.999 426.667c94.257 0 170.666-76.41 170.666-170.667S350.256 85.333 255.999 85.333c-90.675 0-164.834 70.712-170.34 160H42.928C48.485 132.468 141.755 42.667 256 42.667c117.819 0 213.333 95.512 213.333 213.333c0 117.82-95.514 213.333-213.333 213.333c-51.263 0-98.303-18.08-135.09-48.213a214.6 214.6 0 0 1-30.093-30.108L289.829 192h-97.83v-42.667h170.666V320h-42.666v-97.83L151.345 390.825c28.9 22.464 65.215 35.842 104.654 35.842" clip-rule="evenodd"></svg:path>`,
})
export class IxTrendUpwardCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTrendUpwardFilledIcon],svg[ix-trend-upward-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M105.15 105.15c83.313-83.311 218.388-83.311 301.7 0c83.312 83.313 83.312 218.388 0 301.7c-78.221 78.22-202.072 83-285.87 14.34l199.005-199.005L320 320h42.667V149.334H192V192l97.832-.002L90.81 391.019c-68.66-83.797-63.88-207.648 14.34-285.868"></svg:path>`,
})
export class IxTrendUpwardFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTriangleIcon],svg[ix-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M278.313 48.296a42.67 42.67 0 0 1 15.876 15.876l182.478 319.336c11.691 20.46 4.583 46.523-15.876 58.214a42.67 42.67 0 0 1-21.169 5.622H74.667C51.103 447.344 32 428.24 32 404.677a42.67 42.67 0 0 1 5.622-21.169L220.099 64.172c11.691-20.459 37.755-27.567 58.214-15.876M257.144 85.34L74.667 404.677h364.955z"></svg:path>`,
})
export class IxTriangleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTriangleFilledIcon],svg[ix-triangle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M278.313 48.296a42.67 42.67 0 0 1 15.876 15.876l182.478 319.336c11.691 20.46 4.583 46.523-15.876 58.214a42.67 42.67 0 0 1-21.169 5.622H74.667C51.103 447.344 32 428.24 32 404.677a42.67 42.67 0 0 1 5.622-21.169L220.099 64.172c11.691-20.459 37.755-27.567 58.214-15.876"></svg:path>`,
})
export class IxTriangleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTrophyIcon],svg[ix-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 42.667v64h85.333q-.874 77.24-24.27 108.943l-2.396 3.057q-18.81 22.572-64.215 32.088c-13.989 45.811-52.981 80.715-101.073 88.801a27 27 0 0 0-.046 1.777c0 47.129 38.205 85.334 85.334 85.334v42.666H149.333v-42.666c47.129 0 85.334-38.205 85.334-85.334l-.046-1.777c-48.091-8.086-87.082-42.99-101.065-88.805c-30.278-6.34-51.683-17.036-64.223-32.084q-25.748-30.899-26.666-112H128v-64zm-42.667 42.666H170.667v128c0 45.701 35.924 83.01 81.074 85.229l4.259.105c47.128 0 85.333-38.205 85.333-85.334zM256 106.667l21.579 51.37l53.088 5.75l-39.798 37.333L302.144 256L256 227.776L209.856 256l11.275-54.955l-39.798-37.333l53.088-5.749zm-128 42.666H88.277l.464 3.072c2.735 17.512 6.933 29.937 11.975 37.119l1.395 1.828c3.936 4.724 11.335 9.173 22.297 12.91l3.592 1.135zm295.723 0H384v56.064l3.592-1.135c10.962-3.737 18.361-8.186 22.297-12.91l1.396-1.828c5.041-7.182 9.239-19.607 11.975-37.119z"></svg:path>`,
})
export class IxTrophyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTrophyFilledIcon],svg[ix-trophy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 42.667v64h85.333q-.874 77.24-24.271 108.943l-2.395 3.057q-18.81 22.572-64.215 32.088c-13.99 45.811-52.982 80.715-101.073 88.801c-.04.576-.046 1.176-.046 1.777c0 47.129 38.205 85.334 85.334 85.334v42.666H149.333v-42.666c47.128 0 85.334-38.205 85.334-85.334l-.046-1.777c-48.092-8.086-87.083-42.99-101.066-88.805q-45.414-9.511-64.222-32.084q-25.748-30.899-26.666-112H128v-64zM256 85.333l-24.661 58.624l-60.672 6.571l45.482 42.667L203.264 256L256 223.744L308.736 256l-12.885-62.72l45.482-42.667l-60.672-6.57zm-128 64H88.277l.463 3.072c2.736 17.512 6.934 29.937 11.975 37.119l1.396 1.828c3.936 4.724 11.335 9.173 22.297 12.91l3.592 1.135zm295.723 0H384v56.064l3.592-1.135c10.962-3.737 18.36-8.186 22.297-12.91l1.395-1.828c5.042-7.182 9.24-19.607 11.975-37.119z"></svg:path>`,
})
export class IxTrophyFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTruckIcon],svg[ix-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M138.667 341.333c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32m256 0c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32m-96-192v149.333H320v-128h106.667L469.334 256v106.666h-22.4C441.991 338.322 420.468 320 394.666 320s-47.325 18.322-52.266 42.666H190.933C185.992 338.322 164.47 320 138.667 320s-47.325 18.322-52.266 42.666H42.667V149.333zM256 192H85.334v106.666H256zm144.3 21.333h-37.632v42.666h58.965z"></svg:path>`,
})
export class IxTruckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTruckFilledIcon],svg[ix-truck-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M138.667 341.333c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32m256 0c17.673 0 32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32m-96-192v149.333H320v-128h106.667L469.334 256v106.666h-22.4C441.991 338.322 420.468 320 394.666 320s-47.325 18.322-52.266 42.666H190.933C185.992 338.322 164.47 320 138.667 320s-47.325 18.322-52.266 42.666H42.667V149.333zm106.667 64h-42.667V256h64z"></svg:path>`,
})
export class IxTruckFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTulipIcon],svg[ix-tulip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 37.333l42.667 64l64-42.667l10 112.503c5.397 60.715-36.548 114.72-95.316 125.543l-.031 46.79c27.105-27.668 64.888-44.836 106.68-44.836h64C448 381.141 381.141 448 298.667 448h-21.334v21.333h-42.666V448h-21.334C130.86 448 64 381.14 64 298.666h64c41.803 0 79.594 17.177 106.7 44.857l-.026-46.793c-54.505-10.027-95.8-57.786-95.8-115.19c0-3.462.153-6.923.46-10.371l10-112.503l64 42.667zm-140.459 304l.38.857c16.653 37.214 54.005 63.143 97.412 63.143h21.27v-.917l-30.386-31.04c-18.718-19.114-43.747-30.552-70.784-31.907l-5.433-.136zm280.896 0H384c-29.097 0-56.238 11.649-76.202 32.027l-30.4 31.034v.939h21.269c43.407 0 80.759-25.929 97.412-63.143zM286.833 160.501L256 114.261l-30.833 46.24l-39.695-26.464l-3.768 42.555l-.164 4.947c0 36.065 25.849 66.789 60.853 73.228l13.543 2.491l13.687-2.507c36.203-6.667 62.053-39.028 60.797-75.712l-.252-4.092l-3.661-40.91z"></svg:path>`,
})
export class IxTulipIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTulipFilledIcon],svg[ix-tulip-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 37.333L298.667 112l64-53.334l10 112.503c5.397 60.72-36.555 114.73-95.332 125.546l-.003 74.325c26.13-43.368 73.679-72.374 128.001-72.374H448C448 381.141 381.141 448 298.667 448l-21.334-.001v21.334h-42.666l-.001-21.334h-21.333C130.86 448 64 381.142 64 298.667h42.667c54.322 0 101.87 29.006 128.001 72.374l-.003-74.312c-54.5-10.03-95.792-57.787-95.792-115.189c0-3.461.154-6.922.46-10.37l10-112.503l64 53.334z"></svg:path>`,
})
export class IxTulipFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTxtDocumentIcon],svg[ix-txt-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M313.958 42.667H79.292v234.667h42.666v-192h174.294l81.706 81.706v110.294h42.667v-128zM64 320.241v22.592h37.056V448.37h28.864V342.833h37.61v-22.592zm217.171 0l-30.208 41.771l-29.824-41.77h-33.557l45.035 62.4l-47.382 65.727h34.07l30.229-42.773l30.379 42.773h34.794l-47.082-65.002l46.549-63.126zm52.128 0v22.592h37.078V448.37h28.864V342.833h37.589v-22.592z"></svg:path>`,
})
export class IxTxtDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixTxtDocumentFilledIcon],svg[ix-txt-document-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 42.664H320l106.667 106.667v128H85.333zM70.104 342.558v-22.571h103.531v22.571h-37.611v105.44H107.16v-105.44zm186.963 19.162l30.208-41.733h33.003l-46.549 63.068l47.082 64.943h-34.794l-30.379-42.734l-30.229 42.734h-34.07l47.382-65.668l-45.035-62.343h33.557zm82.336-41.733v22.571h37.078v105.44h28.864v-105.44h37.589v-22.571z" clip-rule="evenodd"></svg:path>`,
})
export class IxTxtDocumentFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUndoIcon],svg[ix-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m196.508 272.915l-30.17 30.17L55.253 192L166.338 80.915l30.17 30.17l-59.613 59.624h172.758c75.694 0 137.4 60.95 138.627 136.356l.018 2.29c0 76.458-62.186 138.645-138.645 138.645h-74.88v-42.667h74.88c52.907 0 95.979-43.072 95.979-95.978c0-52.907-43.072-95.98-95.979-95.98H136.98z"></svg:path>`,
})
export class IxUndoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUngroupIcon],svg[ix-ungroup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m94.17 61.35l365.54 365.54l-30.17 30.17l-9.06-9.06h-79.147v-42.666h36.481l-42.667-42.667H149.333v-42.666L292.48 320l-42.666-42.666h-100.48v-42.667h57.814L106.666 134.185v271.15h64V448H64V91.42l.05.05zM448 64l-.001 290.74l-42.666-42.666V106.667h-64V64.001zm-85.333 170.667l-.001 34.741l-34.741-34.741zm0-85.333v42.667L285.258 192l-42.666-42.666z"></svg:path>`,
})
export class IxUngroupIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUngroupObjectsIcon],svg[ix-ungroup-objects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 170.667V192h106.667v-21.333H448V256h-21.333v106.667H448V448h-85.333v-21.333H256V448h-85.333v-85.333H192V256h-21.333v-85.333zm106.667 64H256V256h-21.333v106.667H256V384h106.667v-21.333H384V256h-21.333zM149.333 64v19.2H256V64h85.333v85.333H320v21.334h-42.667v-21.334H256V128H149.333v21.333H128V256h21.333v21.333h21.334V320h-21.334v21.333H64V256h21.333V149.333H64V64z"></svg:path>`,
})
export class IxUngroupObjectsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUnlockIcon],svg[ix-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c70.49 0 128 56.628 128 126.933h-42.667c0-46.337-38.003-84.266-85.333-84.266c-47.331 0-85.334 37.929-85.334 84.266V256h256v213.334H85.333V256H128v-86.4c0-70.305 57.51-126.933 128-126.933m128 256H128v128h256z"></svg:path>`,
})
export class IxUnlockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUnlockFilledIcon],svg[ix-unlock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.666 469.334V256h-256v-86.4c0-46.337 38.003-84.266 85.334-84.266c47.33 0 85.333 37.929 85.333 84.266H384c0-70.305-57.51-126.933-128-126.933S128 99.295 128 169.6V256H85.333v213.334z"></svg:path>`,
})
export class IxUnlockFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUnlockPlantIcon],svg[ix-unlock-plant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 234.667V64H64v362.667h149.333v-42.668H106.667v-82.483l43.404-23.508l84.596-45.817v69.645l128-70.135v117.19a85.7 85.7 0 0 1 14.783-13.274a85 85 0 0 1 27.883-12.927V164.548l-128 70.119v-69.334zm341.334 170.666c0-35.346-28.654-64-64-64c-27.866 0-51.573 17.81-60.359 42.667H234.667v42.667H256v42.666h64v-42.666h46.308c8.786 24.857 32.493 42.666 60.359 42.666c35.346 0 64-28.653 64-64m-96 0c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32" clip-rule="evenodd"></svg:path>`,
})
export class IxUnlockPlantIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUnlockPlantFilledIcon],svg[ix-unlock-plant-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 64v170.667l128-69.334v69.334l128-70.119V322.69a85 85 0 0 0-27.883 12.927a85.7 85.7 0 0 0-24.697 27.051l-139.42-.002v64.001H64V64zm341.334 341.333c0-35.346-28.654-64-64-64c-27.866 0-51.573 17.81-60.359 42.667H234.667v42.667H256v42.666h64v-42.666h46.308c8.786 24.857 32.493 42.666 60.359 42.666c35.346 0 64-28.653 64-64m-96 0c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32" clip-rule="evenodd"></svg:path>`,
})
export class IxUnlockPlantFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUploadIcon],svg[ix-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 64L114.325 182.037l27.328 32.79l93.013-77.504v210.453h42.667V137.323l92.992 77.504l27.328-32.79zM85.333 448h341.333v-42.667H85.333z"></svg:path>`,
})
export class IxUploadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUploadDocumentNoteIcon],svg[ix-upload-document-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m362.643 311.1l94.17 94.17l-30.17 30.17l-42.667-42.656v97.84H341.31v-97.84l-42.667 42.656l-30.17-30.17zM298.667 42.667l106.666 106.667v173.802l-42.554-42.553l-.113.112V167.007l-81.672-81.673H106.667v341.333h153.517l38.59 38.59l21.32-21.32l.007 25.396H64V42.668zm-21.334 298.667v24.694L259.361 384H128v-42.666zM260 128l60 60l-132 132h-60v-60zm-.01 45.248L160 273.238V288h14.72l100.01-100.01z"></svg:path>`,
})
export class IxUploadDocumentNoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUploadFailIcon],svg[ix-upload-fail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.334 406.114v42.667H42.667v-42.667zm80.832-197.26l30.165 30.165l-59.584 59.584l59.584 59.584l-30.165 30.165l-59.584-59.584l-59.584 59.584l-30.166-30.165l59.584-59.584l-59.584-59.584l30.166-30.166l59.584 59.584zM192.009 57.6l138.666 115.356l-26.684 32.052l-91.135-76.02v212.345h-41.694V128.99l-91.136 76.02l-26.684-32.053z"></svg:path>`,
})
export class IxUploadFailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUploadSuccessIcon],svg[ix-upload-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.334 384.78v42.667H42.667v-42.666zm100.424-194.34l33.818 26.015l-120.522 156.678l-102.435-89.63l28.096-32.11l68.213 59.702zM192 64l125.423 101.533l-26.846 33.162l-77.244-62.524v205.943h-42.666l-.001-205.942l-77.243 62.523l-26.846-33.162z"></svg:path>`,
})
export class IxUploadSuccessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUpperLimitIcon],svg[ix-upper-limit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 106.667L114.325 224.704l27.328 32.79l93.013-77.505V448h42.667V179.99l92.992 77.503l27.328-32.789zm-170.667 0h341.333V64H85.333z"></svg:path>`,
})
export class IxUpperLimitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUsbDriveIcon],svg[ix-usb-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M362.667 42.667v128H384V384c0 47.128-38.205 85.333-85.333 85.333h-85.334C166.205 469.333 128 431.128 128 384V170.667h21.333v-128zm-21.334 170.666H170.667V384c0 22.493 17.405 40.921 39.482 42.55l3.184.117h85.334c23.564 0 42.666-19.103 42.666-42.667zM320 85.333H192v85.334h128zm-85.333 21.334V128h-21.334v-21.333zm64 0V128h-21.334v-21.333z"></svg:path>`,
})
export class IxUsbDriveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserIcon],svg[ix-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 213.334c47.128 0 85.333-38.205 85.333-85.334c0-47.128-38.205-85.333-85.333-85.333S170.666 80.872 170.666 128s38.205 85.334 85.334 85.334m0-128c23.564 0 42.666 19.102 42.666 42.666S279.564 170.667 256 170.667S213.333 151.564 213.333 128S232.436 85.334 256 85.334M298.666 256h-85.333c-70.692 0-128 57.308-128 128v85.334h341.333V384c0-70.692-57.307-128-128-128M384 426.667H128V384c0-47.128 38.205-85.333 85.333-85.333h85.333C345.795 298.667 384 336.872 384 384z"></svg:path>`,
})
export class IxUserIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserCheckIcon],svg[ix-user-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 42.667c41.238 0 74.667 33.429 74.667 74.666c0 39.863-31.238 72.43-70.57 74.556l-4.097.111c-41.237 0-74.666-33.429-74.666-74.667c0-39.862 31.238-72.43 70.57-74.556zm149.24 302.451c-2.421-61.421-51.597-110.451-111.906-110.451H176l-4.617.096C111.668 237.253 64 287.834 64 349.867v76.8h198.826l-40.31-35.272l6.47-7.395H106.667v-34.133l.11-4.142c2.057-38.365 32.515-68.392 69.223-68.392h74.667l3.908.114c36.233 2.117 65.425 33.486 65.425 72.42V363.3l25.877 22.641l16.79-21.818v-14.256zm-181.24-227.785c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32M475.576 322.34l-33.819-26.014l-92.829 120.655l-68.213-59.703l-28.096 32.11l102.435 89.631z" clip-rule="evenodd"></svg:path>`,
})
export class IxUserCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserCheckFilledIcon],svg[ix-user-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M288 117.333c0-41.237-33.429-74.666-74.667-74.666l-4.096.11c-39.332 2.127-70.57 34.694-70.57 74.556c0 41.238 33.429 74.667 74.666 74.667l4.097-.111c39.332-2.126 70.57-34.693 70.57-74.556m74.573 227.785c-2.421-61.421-51.597-110.451-111.906-110.451H176l-4.617.096C111.668 237.253 64 287.834 64 349.867v76.8h198.826l-40.31-35.272l56.194-64.222l67.167 58.768l16.79-21.818v-14.256zm113.003-22.778l-33.819-26.014l-92.829 120.655l-68.213-59.703l-28.096 32.11l102.435 89.631z" clip-rule="evenodd"></svg:path>`,
})
export class IxUserCheckFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserDataTypesIcon],svg[ix-user-data-types-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341.333 469.335h-42.666v-21.334H192v-64H85.333v-256h192v-64H384V42.668h42.667v85.333H384v-21.333h-64v85.333h64v-21.333h42.667v85.333H384v-21.333H277.333v-64H128v170.667h64v-64h106.667v-21.334h42.666v85.334h-42.666v-21.334h-64v85.334h64v-21.334h42.666z"></svg:path>`,
})
export class IxUserDataTypesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserFailIcon],svg[ix-user-fail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 42.667c41.238 0 74.667 33.429 74.667 74.666c0 39.863-31.238 72.43-70.57 74.556l-4.097.111c-41.237 0-74.666-33.429-74.666-74.667c0-39.862 31.238-72.43 70.57-74.556zM64 426.667h204.794A116.6 116.6 0 0 1 256.478 384H106.667v-34.133l.11-4.142c2.057-38.365 32.515-68.392 69.223-68.392h74.667l3.908.114c13.218.773 25.499 5.438 35.767 12.943a117.5 117.5 0 0 1 36.613-24.868c-19.998-19.144-46.814-30.855-76.288-30.855H176l-4.617.096C111.668 237.253 64 287.834 64 349.867zm117.333-309.334c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32m192 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c53.02 0 96-42.981 96-96s-42.98-96-96-96m-18.855 96.001l-38.572-38.572l18.856-18.856l38.572 38.572l38.572-38.572l18.856 18.856l-38.571 38.572l38.571 38.572l-18.856 18.856l-38.572-38.572l-38.572 38.572l-18.856-18.856z" clip-rule="evenodd"></svg:path>`,
})
export class IxUserFailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserFailFilledIcon],svg[ix-user-fail-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M288 117.333c0-41.237-33.429-74.666-74.667-74.666l-4.096.11c-39.332 2.127-70.57 34.694-70.57 74.556c0 41.238 33.429 74.667 74.666 74.667l4.097-.111c39.332-2.126 70.57-34.693 70.57-74.556m-32 256c0 19.205 4.614 37.332 12.794 53.334H64v-76.8c0-62.033 47.668-112.614 107.383-115.104l4.617-.096h74.667c29.474 0 56.29 11.711 76.288 30.855C285.219 283.501 256 325.005 256 373.333m117.333-96c-53.019 0-96 42.981-96 96s42.981 96 96 96c53.02 0 96-42.981 96-96s-42.98-96-96-96m-18.855 96.001l-38.572-38.572l18.856-18.856l38.572 38.572l38.572-38.572l18.856 18.856l-38.571 38.572l38.571 38.572l-18.856 18.856l-38.572-38.572l-38.572 38.572l-18.856-18.856z" clip-rule="evenodd"></svg:path>`,
})
export class IxUserFailFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserFilledIcon],svg[ix-user-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 213.334c47.128 0 85.333-38.205 85.333-85.334c0-47.128-38.205-85.333-85.333-85.333S170.666 80.872 170.666 128s38.205 85.334 85.334 85.334M298.666 256h-85.333c-70.692 0-128 57.308-128 128v85.334h341.333V384c0-70.692-57.307-128-128-128"></svg:path>`,
})
export class IxUserFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserGroupIcon],svg[ix-user-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M160 95.997c0 5.891-4.776 10.667-10.667 10.667s-10.666-4.776-10.666-10.667c0-5.89 4.775-10.666 10.666-10.666S160 90.106 160 95.997m42.667 0c0 29.456-23.878 53.334-53.334 53.334c-29.455 0-53.333-23.878-53.333-53.334c0-29.455 23.878-53.333 53.333-53.333c29.456 0 53.334 23.878 53.334 53.333m-117.334 160c0-23.564 19.103-42.666 42.667-42.666h42.667c5.81 0 11.348 1.161 16.396 3.264c5.749-13.776 15.508-25.461 27.817-33.598c-12.894-7.827-28.028-12.333-44.213-12.333H128c-47.128 0-85.333 38.205-85.333 85.333v64h127.989a106.3 106.3 0 0 1 36.89-17.855a74.9 74.9 0 0 1-19.027-24.811H85.333zm244.328 1.617a42.7 42.7 0 0 1 11.672-1.617H384c23.564 0 42.667 19.103 42.667 42.667v21.333h-85.323c14.641 11 26.359 25.68 33.78 42.667h94.209v-64c0-47.128-38.205-85.333-85.333-85.333h-42.667c-5.845 0-11.552.587-17.067 1.707c4.114 9.258 6.401 19.508 6.401 30.293a75 75 0 0 1-1.006 12.283m-52.328 105.05h-42.666c-23.564 0-42.667 19.103-42.667 42.667v21.333h128v-21.333c0-23.564-19.103-42.667-42.667-42.667m-42.666-42.667c-47.129 0-85.334 38.205-85.334 85.334v64h213.334v-64c0-47.129-38.205-85.334-85.334-85.334zm21.333-64c5.891 0 10.667-4.775 10.667-10.666s-4.776-10.667-10.667-10.667s-10.667 4.776-10.667 10.667s4.776 10.666 10.667 10.666m0 42.667c29.455 0 53.333-23.878 53.333-53.333S285.455 191.997 256 191.997s-53.333 23.879-53.333 53.334s23.878 53.333 53.333 53.333m117.333-160c0 5.891-4.775 10.667-10.666 10.667S352 144.555 352 138.664s4.776-10.667 10.667-10.667s10.666 4.776 10.666 10.667m42.667 0c0 29.455-23.878 53.333-53.333 53.333s-53.334-23.878-53.334-53.333s23.879-53.333 53.334-53.333S416 109.209 416 138.664" clip-rule="evenodd"></svg:path>`,
})
export class IxUserGroupIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserKeyIcon],svg[ix-user-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M250.667 234.664c60.309 0 109.485 49.03 111.906 110.452l.075 3.792a85.7 85.7 0 0 0-9.899 13.756H320v-12.8c0-38.933-29.192-70.302-65.425-72.419l-3.908-.114H176c-36.708 0-67.166 30.026-69.223 68.392l-.11 4.141v34.133h106.666v42.667H64v-76.8c0-62.033 47.668-112.614 107.383-115.104l4.617-.096zm-37.334-192c41.238 0 74.667 33.43 74.667 74.667c0 39.862-31.238 72.429-70.57 74.556l-4.097.11c-41.237 0-74.666-33.429-74.666-74.666c0-39.863 31.238-72.43 70.57-74.556zm0 42.667c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32m277.334 320c0-35.347-28.654-64-64-64c-27.866 0-51.573 17.809-60.359 42.666H234.667v42.667H256v42.667h64v-42.667h46.308c8.786 24.858 32.493 42.667 60.359 42.667c35.346 0 64-28.654 64-64m-96 0c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32" clip-rule="evenodd"></svg:path>`,
})
export class IxUserKeyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserLockIcon],svg[ix-user-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 42.665c41.238 0 74.667 33.43 74.667 74.667c0 39.862-31.238 72.429-70.57 74.556l-4.097.11c-41.237 0-74.666-33.429-74.666-74.666c0-39.863 31.238-72.43 70.57-74.556zm149.334 320.001h-.006V320l.144-2.488c1.232-10.61 10.249-18.846 21.19-18.846l2.488.144c10.61 1.232 18.845 10.249 18.845 21.19v42.666zm-64.006 21.332v-21.332h21.334v-42.667c0-16.788 6.464-32.067 17.039-43.483C348.724 263.898 365.437 256 383.995 256c35.346 0 64 28.653 64 64v42.666h21.333v106.667H298.661zm-47.994-149.333c27.181 0 52.1 9.959 71.497 26.523c-10.165 10.684-17.589 23.998-21.147 38.817c-11.838-13.062-28.253-21.497-46.442-22.559l-3.908-.114H176c-36.708 0-67.166 30.026-69.223 68.392l-.11 4.141v34.133h170.661v42.667H64v-76.8c0-62.033 47.668-112.614 107.383-115.104l4.617-.096zm-69.334-117.333c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32" clip-rule="evenodd"></svg:path>`,
})
export class IxUserLockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserLockFilledIcon],svg[ix-user-lock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M288 117.332c0-41.238-33.429-74.667-74.667-74.667l-4.096.11c-39.332 2.127-70.57 34.694-70.57 74.557c0 41.237 33.429 74.666 74.666 74.666l4.097-.11c39.332-2.127 70.57-34.694 70.57-74.556m74.667 245.334h-.006V320l.144-2.488c1.232-10.61 10.249-18.846 21.19-18.846l2.488.144c10.61 1.232 18.845 10.249 18.845 21.19v42.666zm-64.006 0v106.667h170.667V362.666h-21.333V320c0-35.347-28.654-64-64-64c-18.558 0-35.271 7.898-46.961 20.516c-10.575 11.416-17.039 26.695-17.039 43.483v42.667zm0-42.667c0-22.796 8.939-43.504 23.503-58.811c-19.397-16.564-44.316-26.523-71.497-26.523H176l-4.617.096C111.668 237.251 64 287.832 64 349.865v76.8h213.328v-85.332h21.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxUserLockFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserManagementIcon],svg[ix-user-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 234.667C409.813 234.667 448 272.853 448 320v128H64v-85.333c0-47.147 38.187-85.334 85.333-85.334h75.52c14.72-25.6 42.24-42.666 73.814-42.666Zm0 42.666h-64C275.2 277.333 256 296.533 256 320v85.333h149.333V320c0-23.467-19.2-42.667-42.666-42.667M213.333 320h-64c-23.466 0-42.666 19.2-42.666 42.667v42.666h106.666zm-42.666-192c35.285 0 64 28.715 64 64s-28.715 64-64 64c-35.286 0-64-28.715-64-64s28.714-64 64-64m0 40c-13.227 0-24 10.752-24 24s10.773 24 24 24s24-10.752 24-24s-10.774-24-24-24m160-104c41.173 0 74.666 33.493 74.666 74.667s-33.493 74.666-74.666 74.666c-41.174 0-74.667-33.493-74.667-74.666C256 97.493 289.493 64 330.667 64m0 42.667c-17.643 0-32 14.357-32 32c0 17.642 14.357 32 32 32c17.642 0 32-14.358 32-32c0-17.643-14.358-32-32-32"></svg:path>`,
})
export class IxUserManagementIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserManagementFilledIcon],svg[ix-user-management-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M200.876 277.332c-5.588 12.789-8.74 26.884-8.872 41.7L192 320v128H64v-85.333c0-46.676 37.427-84.569 83.922-85.322l1.411-.012zm161.79-42.665c47.13 0 85.334 38.205 85.334 85.333v128H213.333V320c0-47.128 38.205-85.333 85.334-85.333zM170.667 128c35.286 0 64 28.715 64 64s-28.714 64-64 64c-35.285 0-64-28.715-64-64s28.715-64 64-64m160-64c41.174 0 74.667 33.493 74.667 74.667s-33.493 74.666-74.666 74.666c-41.174 0-74.667-33.493-74.667-74.666C256 97.493 289.493 64 330.667 64"></svg:path>`,
})
export class IxUserManagementFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserManagementSettingsIcon],svg[ix-user-management-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.669 117.332c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32m42.667 0c0 41.237-33.429 74.666-74.667 74.666s-74.666-33.429-74.666-74.666c0-41.238 33.429-74.667 74.666-74.667c41.238 0 74.667 33.43 74.667 74.667m-223.999 74.669c5.891 0 10.666-4.776 10.666-10.667s-4.775-10.667-10.666-10.667s-10.667 4.776-10.667 10.667s4.776 10.667 10.667 10.667m0 42.666c29.455 0 53.333-23.878 53.333-53.333s-23.878-53.333-53.333-53.333c-29.456 0-53.334 23.878-53.334 53.333s23.878 53.333 53.334 53.333m174.554 21.33h-57.224c-23.564 0-42.667 19.103-42.667 42.667v20.793l.002.342l.001.202v42.663h42.666v.001c0 14.96 2.566 29.321 7.283 42.666h-49.949v.003H42.669v-85.333c0-35.347 28.654-64 64-64h21.334c10.487 0 20.385 2.522 29.121 6.993c13.507-29.315 43.149-49.663 77.543-49.663h64c21.754 0 41.607 8.14 56.678 21.54a127.3 127.3 0 0 0-63.454 21.126m-142.557 63.689c-.169-11.637-9.654-21.019-21.331-21.019h-21.334c-11.782 0-21.333 9.551-21.333 21.334v42.666h63.998zm242.843-63.685h-59.259v22.83a88.8 88.8 0 0 0-28.142 16.269l-19.789-11.426l-29.63 51.32l19.774 11.417a89.5 89.5 0 0 0-1.482 16.255c0 5.552.509 10.985 1.483 16.255l-19.776 11.417l29.63 51.32l19.791-11.426a88.8 88.8 0 0 0 28.141 16.268v22.834h59.259v-22.841a88.8 88.8 0 0 0 28.127-16.266l19.805 11.434l29.63-51.32l-19.794-11.428a89.4 89.4 0 0 0 1.481-16.247c0-5.549-.508-10.98-1.481-16.247l19.793-11.427l-29.63-51.321l-19.803 11.434a88.8 88.8 0 0 0-28.128-16.267zm-29.639 142.223c19.636 0 35.555-15.919 35.555-35.556s-15.919-35.556-35.555-35.556c-19.637 0-35.556 15.919-35.556 35.556s15.919 35.556 35.556 35.556" clip-rule="evenodd"></svg:path>`,
})
export class IxUserManagementSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserManagementSettingsFilledIcon],svg[ix-user-management-settings-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.336 117.333c0 41.237-33.43 74.667-74.667 74.667s-74.666-33.43-74.666-74.667s33.429-74.666 74.666-74.666s74.667 33.429 74.667 74.666m-170.667 64c0 29.455-23.878 53.334-53.333 53.334s-53.333-23.879-53.333-53.334S87.88 128 117.336 128s53.333 23.878 53.333 53.333M42.669 320c0-35.346 28.654-64 64-64h21.334c2.578 0 5.122.152 7.621.449c-4.913 12.278-7.624 25.738-7.624 39.852v109.032H42.67zm290.249-64h59.26v22.837a88.8 88.8 0 0 1 28.127 16.267l19.804-11.433l29.629 51.32l-19.793 11.427a89.4 89.4 0 0 1 1.482 16.247a89.4 89.4 0 0 1-1.482 16.247l19.794 11.428l-29.63 51.32l-19.804-11.434a88.8 88.8 0 0 1-28.127 16.266v22.841h-59.26v-22.834a88.8 88.8 0 0 1-28.141-16.268l-19.791 11.426l-29.629-51.32l19.775-11.417a89.4 89.4 0 0 1-1.483-16.255c0-5.552.509-10.985 1.483-16.255l-19.775-11.417l29.63-51.32l19.789 11.426a88.8 88.8 0 0 1 28.142-16.269zm65.175 106.667c0 19.637-15.918 35.556-35.555 35.556s-35.556-15.919-35.556-35.556s15.919-35.555 35.556-35.555s35.555 15.918 35.555 35.555m-248.76-64.001c0-47.128 38.205-85.333 85.334-85.333h64c21.753 0 41.605 8.14 56.677 21.54c-67.284 3.796-120.675 59.56-120.675 127.793c0 14.961 2.567 29.322 7.284 42.667h-92.62z" clip-rule="evenodd"></svg:path>`,
})
export class IxUserManagementSettingsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserManualIcon],svg[ix-user-manual-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 319.997V85.331H149.333c-11.782 0-21.333 9.551-21.333 21.333v216.975a63.9 63.9 0 0 1 21.333-3.642zM85.333 106.664v298.667c0 35.346 28.654 64 64 64h277.334v-85.334h-21.334v42.667h-256c-11.782 0-21.333-9.551-21.333-21.333v-21.334c0-11.782 9.551-21.333 21.333-21.333h277.334v-320H149.333c-35.346 0-64 28.654-64 64m149.334 170.667v-85.334h42.666v85.334zM256 170.664c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.334-21.333-21.334s-21.333 9.552-21.333 21.334s9.551 21.333 21.333 21.333M149.333 383.997H384v21.334H149.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxUserManualIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserManualFilledIcon],svg[ix-user-manual-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 106.664c0-35.346 28.654-64 64-64h277.334v320H149.333c-11.782 0-21.333 9.551-21.333 21.333v21.334c0 11.782 9.551 21.333 21.333 21.333h256v-42.667h21.334v85.334H149.333c-35.346 0-64-28.654-64-64zM256 191.997v85.334h42.667v-85.334zm42.667-42.666c0 11.782-9.552 21.333-21.334 21.333S256 161.113 256 149.331s9.551-21.334 21.333-21.334s21.334 9.552 21.334 21.334M384 383.997H149.333v21.334H384z" clip-rule="evenodd"></svg:path>`,
})
export class IxUserManualFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserPenIcon],svg[ix-user-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 42.667c41.238 0 74.667 33.429 74.667 74.666c0 39.863-31.238 72.43-70.57 74.556l-4.097.111c-41.237 0-74.666-33.429-74.666-74.667c0-39.862 31.238-72.43 70.57-74.556zm148.835 384l.499-.499v.499zm-298.168 0h170.667v-42.172l.494-.495H106.667v-34.133l.11-4.142c2.057-38.365 32.515-68.392 69.223-68.392h74.667l3.908.114c22.622 1.322 42.501 14.047 54.242 32.897l30.667-30.667c-20.476-27.372-52.644-45.01-88.817-45.01H176l-4.617.096C111.668 237.253 64 287.834 64 349.867zm192-33.336l9.331-9.331h.002l52.444-52.444l-.001-.001l33.131-33.131l.001.002l8.883-8.884l54.667 54.667L310.667 448H256zm-74.667-275.998c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32m228 122.667L464 294.667l-34.458 34.457l-54.666-54.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxUserPenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserProfileIcon],svg[ix-user-profile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m252.522 469.306l3.478.028a218 218 0 0 1-14.118-.46a215 215 0 0 1-17.38-1.85a213 213 0 0 1-19.919-3.928a212 212 0 0 1-19.18-5.72l-.035-.013a212 212 0 0 1-30.135-13.28a213 213 0 0 1-19.968-12.178a214 214 0 0 1-20.709-16.2a215 215 0 0 1-6.748-6.243C67.643 370.666 42.667 316.25 42.667 256C42.667 138.18 138.18 42.667 256 42.667A213.333 213.333 0 0 1 469.334 256c0 60.252-24.978 114.67-65.144 153.464q-.002.004 0 .012a214.6 214.6 0 0 1-32.954 26.088l-.165.105a209 209 0 0 1-8.15 4.977l-.291.17a214 214 0 0 1-14.764 7.78a227 227 0 0 1-5.935 2.724a225 225 0 0 1-6.272 2.645a225 225 0 0 1-6.155 2.368a224 224 0 0 1-6.29 2.197a222 222 0 0 1-6.245 1.964a219 219 0 0 1-6.677 1.87a218 218 0 0 1-6.552 1.608a217 217 0 0 1-6.584 1.395a213 213 0 0 1-27.179 3.516a216 216 0 0 1-6.81.333l-.044.001a217 217 0 0 1-10.601.089m24.812-127.972h-42.667c-33.983 0-63.704 19.997-77.367 49.236l-1.545 3.542l1.337.989c24.316 17.32 53.367 28.425 84.834 30.994l.13.01l-.13-.01q1.409.115 2.824.207l-2.694-.197q1.375.112 2.756.201l-.062-.004q1.368.09 2.74.157l-2.678-.153q1.425.093 2.858.161l-.18-.008q1.029.05 2.058.088l6.452.12l2.675-.02a173 173 0 0 0 2.95-.07l-2.7.065q1.365-.022 2.725-.067l-.025.001q1.371-.044 2.738-.11l-2.713.11q1.41-.047 2.819-.116l-.106.006q1.424-.07 2.84-.16l-2.734.154q1.387-.067 2.77-.157l-.035.002q1.386-.09 2.766-.201l-2.732.199q1.41-.092 2.817-.206l-.085.007q1.34-.11 2.674-.238l-2.589.23q1.4-.114 2.794-.25l-.205.02c30.416-2.944 58.496-13.872 82.119-30.662l1.461-1.092l-1.522-3.538c-13.065-27.968-40.827-47.484-72.96-49.128zM256 85.334c-94.256 0-170.666 76.41-170.666 170.666c0 40.704 14.249 78.08 38.031 107.41c22.028-38.672 63.62-64.743 111.302-64.743h42.667c47.683 0 89.276 26.073 111.3 64.74c23.783-29.327 38.033-66.703 38.033-107.407c0-94.256-76.41-170.666-170.667-170.666m0 21.333c47.129 0 85.334 38.205 85.334 85.333c0 45.7-35.925 83.01-81.075 85.23l-4.259.104c-47.128 0-85.333-38.205-85.333-85.334c0-45.7 35.925-83.01 81.074-85.229zm0 42.667c-23.564 0-42.666 19.102-42.666 42.666s19.102 42.667 42.666 42.667s42.667-19.103 42.667-42.667s-19.103-42.666-42.667-42.666"></svg:path>`,
})
export class IxUserProfileIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserProfileFilledIcon],svg[ix-user-profile-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667A213.333 213.333 0 0 1 469.334 256c0 117.821-95.513 213.334-213.334 213.334c-117.82 0-213.333-95.513-213.333-213.334C42.667 138.18 138.18 42.667 256 42.667m21.334 234.667h-42.667c-52.815 0-98.158 31.987-117.715 77.648c30.944 43.391 81.692 71.685 139.048 71.685s108.104-28.294 139.049-71.688c-19.557-45.658-64.9-77.645-117.715-77.645M256 106.667c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.653-64-64-64"></svg:path>`,
})
export class IxUserProfileFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserReadingIcon],svg[ix-user-reading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M331.52 117.547c0 41.386-33.707 74.88-74.88 74.88c-41.387 0-74.88-33.494-74.88-74.88c0-41.387 33.493-74.88 74.88-74.88s74.88 33.493 74.88 74.88m-42.667 0c0-17.707-14.506-32.214-32.213-32.214s-32.213 14.507-32.213 32.214c0 17.706 14.506 32.213 32.213 32.213s32.213-14.507 32.213-32.213" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M209.92 330.24h1.067v1.067h-1.067zm93.227 0h-1.067v1.067h1.067zm12.8.213h-1.067v1.067h1.067z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M256.64 232.96L64 136.533v236.374l192.64 96.426l192.64-96.426V136.533zm-149.973-27.52l128.64 64.427V410.88l-128.64-64.427zm299.946 141.013l-128.64 64.427V269.867l128.64-64.427z" clip-rule="evenodd"></svg:path>`,
})
export class IxUserReadingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserReadingFilledIcon],svg[ix-user-reading-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M331.52 117.547c0 41.386-33.707 74.88-74.88 74.88c-41.387 0-74.88-33.494-74.88-74.88c0-41.387 33.493-74.88 74.88-74.88s74.88 33.493 74.88 74.88m-96.853 125.748L64 157.867v215.04l170.667 85.428zm42.666 215.681l171.947-86.069v-215.04l-171.947 86.069z" clip-rule="evenodd"></svg:path>`,
})
export class IxUserReadingFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserReadingReadingIcon],svg[ix-user-reading-reading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 192v213.333q-106.667 0-192 64q-85.334-64-192-64V192q106.667 0 192 64q85.333-64 192-64M256 53.333c41.237 0 74.667 33.43 74.667 74.667s-33.43 74.666-74.667 74.666s-74.667-33.43-74.667-74.666c0-41.238 33.43-74.667 74.667-74.667"></svg:path>`,
})
export class IxUserReadingReadingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserSettingsIcon],svg[ix-user-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m392.18 256l.001 22.836a88.8 88.8 0 0 1 28.134 16.268l19.797-11.43l29.63 51.32l-19.784 11.423a89.4 89.4 0 0 1 1.482 16.25c0 5.55-.509 10.982-1.482 16.25l19.784 11.423l-29.63 51.32l-19.797-11.43a88.8 88.8 0 0 1-28.134 16.268v22.836h-59.26v-22.836a88.8 88.8 0 0 1-28.134-16.267l-19.797 11.43l-29.63-51.32l19.784-11.424a89.4 89.4 0 0 1-1.482-16.25c0-5.55.509-10.982 1.482-16.251l-19.784-11.422l29.63-51.32l19.796 11.43a88.8 88.8 0 0 1 28.135-16.268V256zm-141.513-21.333c19.434 0 37.713 5.092 53.644 14.049a128.5 128.5 0 0 0-38.57 30.345a66 66 0 0 0-11.166-1.613l-3.908-.114H176c-36.708 0-67.166 30.026-69.223 68.392l-.11 4.141V384l129.77.001a127.2 127.2 0 0 0 15.353 42.665L64 426.667v-76.8c0-62.033 47.668-112.614 107.383-115.104l4.617-.096zm111.884 92.444c-19.637 0-35.556 15.92-35.556 35.556c0 19.637 15.92 35.556 35.556 35.556c19.637 0 35.555-15.92 35.555-35.556c0-19.637-15.918-35.556-35.555-35.556M213.333 42.667c41.238 0 74.667 33.43 74.667 74.667c0 39.862-31.238 72.429-70.57 74.556l-4.097.11c-41.237 0-74.666-33.43-74.666-74.666c0-39.863 31.238-72.43 70.57-74.557zm0 42.667c-17.673 0-32 14.327-32 32s14.327 32 32 32s32-14.327 32-32s-14.327-32-32-32"></svg:path>`,
})
export class IxUserSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserSettingsFilledIcon],svg[ix-user-settings-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m392.18 256l.001 22.836a88.8 88.8 0 0 1 28.134 16.268l19.797-11.43l29.63 51.32l-19.784 11.423a89.4 89.4 0 0 1 1.482 16.25c0 5.55-.509 10.982-1.482 16.25l19.784 11.423l-29.63 51.32l-19.797-11.43a88.8 88.8 0 0 1-28.134 16.268v22.836h-59.26v-22.836a88.8 88.8 0 0 1-28.134-16.267l-19.797 11.43l-29.63-51.32l19.784-11.424a89.4 89.4 0 0 1-1.482-16.25c0-5.55.509-10.982 1.482-16.251l-19.784-11.422l29.63-51.32l19.796 11.43a88.8 88.8 0 0 1 28.135-16.268V256zm-141.513-21.333c19.434 0 37.713 5.092 53.644 14.049c-41.352 21.217-69.644 64.28-69.644 113.951c0 23.314 6.233 45.172 17.123 64H64v-76.8c0-62.033 47.668-112.614 107.383-115.104l4.617-.096zm111.884 92.444c-19.637 0-35.556 15.92-35.556 35.556c0 19.637 15.92 35.556 35.556 35.556c19.637 0 35.555-15.92 35.555-35.556c0-19.637-15.918-35.556-35.555-35.556M213.333 42.667c41.238 0 74.667 33.43 74.667 74.667c0 39.862-31.238 72.429-70.57 74.556l-4.097.11c-41.237 0-74.666-33.43-74.666-74.666c0-39.863 31.238-72.43 70.57-74.557z"></svg:path>`,
})
export class IxUserSettingsFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserSuccessIcon],svg[ix-user-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.333 42.667c41.238 0 74.667 33.429 74.667 74.666c0 39.863-31.238 72.43-70.57 74.556l-4.097.111c-41.237 0-74.666-33.429-74.666-74.667c0-39.862 31.238-72.43 70.57-74.556zM64 426.667h204.794A116.6 116.6 0 0 1 256.478 384H106.667v-34.133l.11-4.142c2.057-38.365 32.515-68.392 69.223-68.392h74.667l3.908.114c13.218.773 25.499 5.438 35.767 12.943a117.5 117.5 0 0 1 36.613-24.868c-19.998-19.144-46.814-30.855-76.288-30.855H176l-4.617.096C111.668 237.253 64 287.834 64 349.867zm117.333-309.334c0-17.673 14.327-32 32-32s32 14.327 32 32s-14.327 32-32 32s-32-14.327-32-32m192 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c53.02 0 96-42.981 96-96s-42.98-96-96-96m62.763 62.763l-84.095 84.094l-41.428-41.428l18.856-18.856l22.572 22.572l65.239-65.238z" clip-rule="evenodd"></svg:path>`,
})
export class IxUserSuccessIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixUserSuccessFilledIcon],svg[ix-user-success-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M288 117.333c0-41.237-33.429-74.666-74.667-74.666l-4.096.11c-39.332 2.127-70.57 34.694-70.57 74.556c0 41.238 33.429 74.667 74.666 74.667l4.097-.111c39.332-2.126 70.57-34.693 70.57-74.556m-32 256c0 19.205 4.614 37.332 12.794 53.334H64v-76.8c0-62.033 47.668-112.614 107.383-115.104l4.617-.096h74.667c29.474 0 56.29 11.711 76.288 30.855C285.219 283.501 256 325.005 256 373.333m117.333-96c-53.019 0-96 42.981-96 96s42.981 96 96 96c53.02 0 96-42.981 96-96s-42.98-96-96-96m62.763 62.763l-84.095 84.094l-41.428-41.428l18.856-18.856l22.572 22.572l65.239-65.238z" clip-rule="evenodd"></svg:path>`,
})
export class IxUserSuccessFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixValidateIcon],svg[ix-validate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m400.9 64l-30.481 42.666H106.667v298.667h298.666V204.606L448 144.872V448H64V64zm8.407 24.934l34.72 24.8L269.713 357.77l-140.46-134.354l29.492-30.832l104.87 100.301zM421.333 64v7.308L411.102 64z"></svg:path>`,
})
export class IxValidateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixVariableIcon],svg[ix-variable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M81.46 149.119c24.057 75.315 127.642 76.914 154.622.426c38.814-109.923 188.714-116.064 231.637-5.906l1.614 4.179l-37.853 16.078l-1.635-4.201c-28.226-72.414-128.91-70.453-155.399 4.585c-39.631 112.333-194.846 113.889-231.78-1.685zM42.667 384h192V256h234.666v42.667H276.674l.659 128H42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxVariableIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixVdiFolderIcon],svg[ix-vdi-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m197.774 298.085l21.387 57.637q8.157 22.023 12.235 36.25q6.253-19.937 11.871-35.071l22.022-58.816h28.638L245.26 426.5h-28.91l-48.665-128.416zm146.087 0q22.656 0 36.25 4.35q17.763 5.71 27.188 21.16q9.425 15.453 9.425 38.743q0 23.925-9.425 39.06q-11.782 19.12-36.432 23.2q-11.328 1.902-29 1.903h-33.53V298.085zm125.516 0V426.5h-28.91V298.085zM342.774 320.74h-5.528v83.103h5.528q19.755 0 29.272-6.434q8.337-5.529 12.053-17.128q2.718-8.61 2.718-18.306q0-10.422-3.171-19.304q-3.173-8.88-8.7-13.865q-5.257-4.713-11.963-6.39t-20.21-1.676M192 64l53.334 42.667h181.333V256H384V149.333H229.334l-55.007-42.666H85.334v234.666h63.999V384H42.667V64z"></svg:path>`,
})
export class IxVdiFolderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixVersionHistoryIcon],svg[ix-version-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.334 64c106.038 0 192 85.961 192 192s-85.962 192-192 192c-52.074 0-99.306-20.73-133.893-54.389l29.755-30.58c26.9 26.179 63.636 42.302 104.138 42.302c82.474 0 149.333-66.858 149.333-149.333s-66.859-149.333-149.333-149.333S128 173.525 128 256q.001 6.065.476 12.008l42.19-42.178l30.17 30.17l-94.17 94.17L12.498 256l30.17-30.17l43.094 43.086A195 195 0 0 1 85.334 256c0-106.039 85.96-192 192-192M244.32 191.127l33.215 88.555l33.213-88.555h45.57l-56 149.333H254.75l-55.999-149.333z"></svg:path>`,
})
export class IxVersionHistoryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixVideoCameraIcon],svg[ix-video-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 106.667h-320v298.666h320v-93.482l106.666 53.334v-218.37l-106.666 53.333zm0 141.184v16.297l64 32v-80.297zM320 221.482v-72.149H85.333v213.334H320z" clip-rule="evenodd"></svg:path>`,
})
export class IxVideoCameraIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixVideoCameraFilledIcon],svg[ix-video-camera-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M362.667 106.667h-320v298.666h320v-93.482l106.666 53.334v-218.37l-106.666 53.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxVideoCameraFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixVideoCameraRecordIcon],svg[ix-video-camera-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 106.667h320v93.481l106.666-53.333v218.37l-106.666-53.334v93.482h-320zM320 290.518V149.333H85.333v213.334H320zm42.667-26.37l64 32v-80.297l-64 32zM277.333 288c0 17.673-14.327 32-32 32s-32-14.327-32-32s14.327-32 32-32s32 14.327 32 32" clip-rule="evenodd"></svg:path>`,
})
export class IxVideoCameraRecordIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixVideoCameraRecordFilledIcon],svg[ix-video-camera-record-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 106.667h320v93.481l106.666-53.333v218.37l-106.666-53.334v93.482h-320zm224 234.666c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32" clip-rule="evenodd"></svg:path>`,
})
export class IxVideoCameraRecordFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixVideoFileIcon],svg[ix-video-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 106.667v298.667H42.667V106.667zM128 341.334l-42.667-.001v21.334H128zm213.333-192.001H170.667v213.334h170.666zm85.334 192H384v21.334h42.667zM213.334 202.667l96 53.333l-96 53.334zm213.333 74.666H384v21.334h42.667zm-298.667 0H85.333v21.334H128zm298.667-64H384v21.334h42.667zm-298.667 0H85.333v21.334H128zm298.667-64H384v21.334h42.667zm-298.667 0H85.334l-.001 21.334H128z"></svg:path>`,
})
export class IxVideoFileIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixVideoFileFilledIcon],svg[ix-video-file-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 106.667v298.667H42.667V106.667zM128 341.334H85.334v21.333H128zm298.667 0H384v21.333h42.667zM213.334 202.667v106.667l96-53.334zM128 277.334H85.334v21.333H128zm298.667 0H384v21.333h42.667zm-298.667-64H85.334v21.333H128zm298.667 0H384v21.333h42.667zm-298.667-64H85.334v21.333H128zm298.667 0H384v21.333h42.667z"></svg:path>`,
})
export class IxVideoFileFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixVivaEngageLogoIcon],svg[ix-viva-engage-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M305.652 246.304c3.437.077 6.959.058 10.364.036l1.697-.01l3.105-.031q3.731-.001 7.461-.013c6.015-.015 12.238-.031 18.371.048h3.854l1.229-3.994c2.774-8.991 4.266-17.044 4.566-24.62c1.366-34.408-11.315-63.131-37.69-85.373c-18.881-15.919-40.831-23.727-65.198-23.204c-31.698.683-57.702 13.336-77.291 37.611c-22.481 27.859-28.899 59.763-19.076 94.826c.035.126.075.232.114.339l.121.35l1.306 3.931l4.19.182c.209.011.421.029.641.021c5.719-.133 11.513-.088 17.118-.047c6.335.046 12.885.096 19.289-.109q1.899-.062 3.777-.062c16.387 0 31.593 3.481 45.254 10.368l5.623 2.987l4.343-2.292c14.086-7.65 29.853-11.336 46.832-10.944"></svg:path><svg:path fill="currentColor" d="m233.211 96.406l1.761-.507l-1.312-2.18c-.39-.63-.82-1.308-1.324-2.079c-20.318-31.204-49.189-47.53-85.814-48.526a55 55 0 0 0-2.189-.044c-5.355 0-10.571.743-15.127 1.46c-22.989 3.614-44.423 16.249-60.355 35.575c-15.943 19.34-24.186 42.737-23.211 65.885c1.288 30.59 13.196 55.746 35.393 74.771c16.645 14.269 35.829 22.482 57.02 24.414l4.571.433l-.229-.996c-.161-.942-.441-2.131-.812-3.625c-4.996-20.145-5.043-39.489-.139-57.495c12.463-45.769 42.167-74.763 88.287-86.176a99 99 0 0 0 3.48-.91m204.293 114.91c16.823-19.397 26.088-44.568 26.094-70.88c-1.142-30.572-14.856-56.913-39.661-76.181c-22.741-17.664-50.507-24.71-78.178-19.852c-28.465 5.003-52.989 21.792-69.055 47.278c-.905 1.436-1.473 2.381-1.898 3.158l-.639 1.166l1.136.32c.844.24 1.91.495 3.46.83c31.289 6.782 57.76 25.289 74.536 52.112c16.972 27.135 22.053 59.544 14.308 91.259c-.429 1.757-.746 3.082-.931 4.114l-.185 1.033l6.209-.486c.386-.016.772-.039 1.156-.08c24.409-2.612 47.014-14.612 63.648-33.791M274.43 433.141c17.346-20.418 25.593-45.973 23.187-71.965c-4.777-51.849-47.202-90.957-98.685-90.996l-55.43-.059h-.414c-33.704 0-63.343-12.423-90.654-37.979a162 162 0 0 1-9.767-10.02v122.049c0 65.538 50.812 120.499 115.674 125.143l7.933.019c14.405-.059 28.021-.693 41.617-1.568c24.962-1.606 49.214-14.227 66.539-34.624"></svg:path><svg:path fill="currentColor" d="M354.21 469.293c64.311-4.623 115.123-59.584 115.123-125.122V222.122c-3.255 3.631-6.492 6.945-9.768 10.001c-27.29 25.575-56.969 37.998-90.673 37.998h-.414l-55.431.059c-9.233.02-18.212 1.229-26.835 3.631c4.557 4.047 9.056 8.472 13.063 13.573c29.698 37.798 36.998 80.042 21.687 125.559c-6.848 20.258-18.392 37.66-34.415 51.846a85.7 85.7 0 0 0 17.523 2.976c13.634.875 27.211 1.509 40.828 1.568z"></svg:path>`,
})
export class IxVivaEngageLogoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixVoltageIcon],svg[ix-voltage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M275.769 48.305c6.277 3.786 11.479 9.277 15.066 15.902l173.154 319.854c11.094 20.493 4.349 46.599-15.065 58.309c-6.118 3.689-13.042 5.63-20.087 5.63H82.528c-22.36 0-40.486-19.133-40.486-42.736c0-7.437 1.838-14.745 5.334-21.203L220.53 64.207c11.094-20.492 35.825-27.612 55.239-15.902M255.685 85.41L82.531 405.264h142.947L256 298.667h-42.667l21.498-85.333h63.836l-21.334 64H320l-94.491 127.93H428.84z" clip-rule="evenodd"></svg:path>`,
})
export class IxVoltageIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixVoltageFilledIcon],svg[ix-voltage-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M276.054 48.305c6.268 3.786 11.462 9.277 15.044 15.902L464 384.061c11.077 20.493 4.342 46.599-15.044 58.309c-6.108 3.689-13.022 5.63-20.057 5.63H83.094c-22.327 0-40.427-19.133-40.427-42.736c0-7.437 1.836-14.745 5.326-21.203L220.895 64.207c11.078-20.492 35.774-27.612 55.159-15.902m1.279 229.029L305.778 192h-78.021l-25.091 106.667H256l-39.7 128l114.366-149.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxVoltageFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWarningIcon],svg[ix-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M278.313 48.296a42.67 42.67 0 0 1 15.876 15.876l182.478 319.336c11.691 20.46 4.583 46.523-15.876 58.214a42.67 42.67 0 0 1-21.169 5.622H74.667C51.103 447.344 32 428.24 32 404.677a42.67 42.67 0 0 1 5.622-21.169L220.099 64.172c11.691-20.459 37.755-27.567 58.214-15.876M257.144 85.34L74.667 404.677h364.955zM256 314.667c15.238 0 26.667 11.264 26.667 26.624S271.238 367.915 256 367.915c-15.584 0-26.667-11.264-26.667-26.965c0-15.019 11.429-26.283 26.667-26.283m21.333-165.333v128h-42.666v-128z"></svg:path>`,
})
export class IxWarningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWarningFilledIcon],svg[ix-warning-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M278.313 48.296a42.67 42.67 0 0 1 15.876 15.876l182.478 319.336c11.691 20.46 4.583 46.523-15.876 58.214a42.67 42.67 0 0 1-21.169 5.622H74.667C51.103 447.344 32 428.24 32 404.677a42.67 42.67 0 0 1 5.622-21.169L220.099 64.172c11.691-20.459 37.755-27.567 58.214-15.876M256 314.667c-15.238 0-26.667 11.264-26.667 26.283c0 15.701 11.083 26.965 26.667 26.965c15.238 0 26.667-11.264 26.667-26.624S271.238 314.667 256 314.667m21.333-165.333h-42.666v128h42.666z"></svg:path>`,
})
export class IxWarningFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWarningMultipleIcon],svg[ix-warning-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M252.716 47.414a36.2 36.2 0 0 1 13.539 13.392l2.239 3.875c-16.7 2.576-32.132 12.376-41.227 28.12L71.655 362.15a57.1 57.1 0 0 0-6.85 18.986c-13.014-5.483-22.138-18.25-22.138-33.125a35.7 35.7 0 0 1 4.794-17.855l155.612-269.35c9.969-17.257 32.195-23.253 49.643-13.392m56.205 56.058a36.2 36.2 0 0 0-13.539-13.391c-17.447-9.861-39.673-3.866-49.643 13.391L90.127 372.823a35.7 35.7 0 0 0-4.794 17.855c0 19.876 16.291 35.988 36.385 35.988h311.224a36.7 36.7 0 0 0 18.052-4.741c17.447-9.861 23.509-31.845 13.539-49.102zM128 384l150.658-256l148.303 256zm128.294-96.662h42.373V192h-42.373zm43.78 44.452c0-12.956-9.746-22.457-22.741-22.457s-22.74 9.501-22.74 22.169c0 13.244 9.45 22.744 22.74 22.744c12.995 0 22.741-9.5 22.741-22.456" clip-rule="evenodd"></svg:path>`,
})
export class IxWarningMultipleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWarningMultipleFilledIcon],svg[ix-warning-multiple-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M252.716 47.414a36.2 36.2 0 0 1 13.539 13.392l2.239 3.875c-16.7 2.576-32.132 12.376-41.227 28.12L71.655 362.15a57.1 57.1 0 0 0-6.85 18.986c-13.014-5.483-22.138-18.25-22.138-33.125a35.7 35.7 0 0 1 4.794-17.855l155.612-269.35c9.969-17.257 32.195-23.253 49.643-13.392m56.205 56.058a36.2 36.2 0 0 0-13.539-13.391c-17.447-9.861-39.673-3.866-49.643 13.391L90.127 372.823a35.7 35.7 0 0 0-4.794 17.855c0 19.876 16.291 35.988 36.385 35.988h311.224a36.7 36.7 0 0 0 18.052-4.741c17.447-9.861 23.509-31.845 13.539-49.102zM256.294 287.36h42.373V192h-42.373zm43.78 44.43c0-12.956-9.746-22.457-22.741-22.457s-22.74 9.501-22.74 22.169c0 13.244 9.45 22.744 22.74 22.744c12.995 0 22.741-9.5 22.741-22.456" clip-rule="evenodd"></svg:path>`,
})
export class IxWarningMultipleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWarningRhombIcon],svg[ix-warning-rhomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m286.17 45.049l180.78 180.78c16.663 16.663 16.663 43.678 0 60.34L286.17 466.95c-16.663 16.663-43.678 16.663-60.34 0L45.049 286.17c-16.663-16.663-16.663-43.678 0-60.34l180.78-180.781c16.663-16.663 43.678-16.663 60.34 0M256 75.219L75.219 255.999l180.78 180.781L436.78 256zm0 239.447c15.238 0 26.666 11.264 26.666 26.624S271.238 367.914 256 367.914c-15.585 0-26.667-11.264-26.667-26.965c0-15.019 11.428-26.283 26.667-26.283m21.333-165.333v128h-42.667v-128z"></svg:path>`,
})
export class IxWarningRhombIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWarningRhombFilledIcon],svg[ix-warning-rhomb-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m286.17 45.049l180.78 180.78c16.663 16.663 16.663 43.678 0 60.34L286.17 466.95c-16.663 16.663-43.678 16.663-60.34 0L45.049 286.17c-16.663-16.663-16.663-43.678 0-60.34l180.78-180.781c16.663-16.663 43.678-16.663 60.34 0M256 314.666c-15.239 0-26.667 11.264-26.667 26.283c0 15.701 11.082 26.965 26.667 26.965c15.238 0 26.666-11.264 26.666-26.624S271.238 314.666 256 314.666m21.333-165.333h-42.667v128h42.667z"></svg:path>`,
})
export class IxWarningRhombFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWarningRhombMultipleIcon],svg[ix-warning-rhomb-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M75.196 232.083c-11.59 11.591-17.806 26.52-18.647 41.692l-8.935-8.935c-16.662-16.663-16.662-43.678 0-60.34L204.497 47.616c16.663-16.662 43.678-16.662 60.34 0l8.937 8.937c-15.173.84-30.104 7.056-41.695 18.647zm359.021 45.251L277.333 434.217L120.45 277.334l156.883-156.883zM307.503 464.387c-16.662 16.663-43.677 16.663-60.34 0L90.28 307.504c-16.662-16.663-16.662-43.678 0-60.34L247.163 90.281c16.663-16.663 43.678-16.663 60.34 0l156.884 156.883c16.662 16.662 16.662 43.677 0 60.34zm-8.835-177.049h-42.373V192h42.373zm-21.334 21.995c12.995 0 22.741 9.501 22.741 22.457c0 12.955-9.746 22.456-22.741 22.456c-13.29 0-22.74-9.501-22.74-22.744c0-12.668 9.746-22.169 22.74-22.169" clip-rule="evenodd"></svg:path>`,
})
export class IxWarningRhombMultipleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWarningRhombMultipleFilledIcon],svg[ix-warning-rhomb-multiple-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M56.55 273.775c.84-15.172 7.056-30.101 18.646-41.692L232.079 75.2c11.591-11.591 26.522-17.807 41.695-18.647l-8.937-8.937c-16.662-16.662-43.677-16.662-60.34 0L47.614 204.5c-16.662 16.662-16.662 43.677 0 60.34zm250.953 190.612c-16.662 16.663-43.677 16.663-60.34 0L90.28 307.504c-16.662-16.663-16.662-43.678 0-60.34L247.163 90.281c16.663-16.663 43.678-16.663 60.34 0l156.884 156.883c16.662 16.662 16.662 43.677 0 60.34zm-51.208-177.049h42.373V192h-42.373zm43.78 44.452c0-12.956-9.746-22.457-22.741-22.457s-22.74 9.501-22.74 22.169c0 13.243 9.45 22.744 22.74 22.744c12.995 0 22.741-9.501 22.741-22.456" clip-rule="evenodd"></svg:path>`,
})
export class IxWarningRhombMultipleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWatchTableIcon],svg[ix-watch-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m448 323.3l21.918-3.119v32L447.94 369.79q.06 1.763.06 3.543c0 53.02-40.593 96-90.667 96s-90.666-42.98-90.666-96c0-3.355.162-6.671.48-9.937a84.5 84.5 0 0 0-11.147-.729a86 86 0 0 0-11.196.727c.367 3.283.529 6.592.529 9.939c0 53.02-40.593 96-90.666 96c-50.074 0-90.667-42.98-90.667-96l.107-4.181L42.667 352v-32L64 323.036l13.888 1.977l1.765-1.356c8.345-6.185 17.402-11.367 27.014-15.38a124.3 124.3 0 0 1 48-9.61c27.469 0 52.963 8.955 74.02 24.258A128.2 128.2 0 0 1 256 320c9.378 0 18.519 1.009 27.324 2.923c21.045-15.301 46.541-24.256 74.009-24.256c16.945 0 33.137 3.407 48 9.61c10.42 4.348 20.184 10.07 29.099 16.952zM72.372 302.679c10.588-7.155 22.094-12.979 34.295-17.233V106.667h298.666v178.779c12.327 4.297 23.943 10.198 34.62 17.451l8.047-1.146V64H64v237.489zM384 277.333h-64v-42.666h64zm-256 0h64v-42.666h-64zm64-128h-64V192h64zm32 0h64V192h-64zm160 0h-64V192h64zm-96 85.334h-64v42.666h64zM110.597 354.144c13.272-8.352 28.346-12.811 44.07-12.811l5.215.165c13.835.874 27.057 5.222 38.855 12.644l.922.631l.132.335c1.888 5.752 2.876 11.883 2.876 18.225c0 29.984-22.053 53.334-48 53.334s-48-23.35-48-53.334l.183-4.714a57.8 57.8 0 0 1 2.69-13.506l.113-.34zm202.666 0c13.274-8.352 28.348-12.811 44.07-12.811l5.216.165c13.835.874 27.057 5.222 38.855 12.644l.921.631l.133.335c1.888 5.752 2.875 11.883 2.875 18.225c0 29.984-22.052 53.334-48 53.334c-25.947 0-48-23.35-48-53.334l.184-4.714a57.8 57.8 0 0 1 2.69-13.506l.113-.34z" clip-rule="evenodd"></svg:path>`,
})
export class IxWatchTableIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWaterBathingIcon],svg[ix-water-bathing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M191.998 234.617v42.57h42.666v-85.278h42.666v85.277h42.666v-42.569L373.334 288l30.165-30.15l-94.895-94.918c-7.871-8.316-18.9-13.668-31.274-13.668h-42.666c-12.31 0-23.317 5.288-31.104 13.647l-95.058 94.94L138.667 288zM469.334 384v42.666c-.508 0-1.211.21-2.154.681l-2.22 1.301a45 45 0 0 0-1.375.938l-3.334 2.503q-.934.736-1.978 1.588l-4.629 3.902l-13.612 12.053l-4.552 3.782c-12.781 10.267-24.012 15.92-37.257 15.92c-14.261 0-23.5-4.433-38.441-16.874l-7.34-6.324l-9.64-8.557l-4.63-3.902l-3.745-2.948l-2.942-2.08l-2.22-1.302c-.943-.47-1.646-.68-2.154-.68s-1.21.21-2.153.68l-2.22 1.301q-.642.42-1.376.938l-3.333 2.503q-.935.736-1.978 1.588l-4.63 3.902l-13.426 11.866c-17.102 14.748-26.637 19.888-41.995 19.888s-24.892-5.14-41.994-19.888l-13.427-11.866l-4.63-3.902l-3.744-2.948a56 56 0 0 0-2.942-2.08l-2.22-1.302c-.943-.47-1.646-.68-2.154-.68s-1.21.21-2.153.68l-2.22 1.301l-2.942 2.081l-3.745 2.948l-4.63 3.902l-9.64 8.557l-7.34 6.324c-14.94 12.441-24.18 16.873-38.44 16.873c-15.359 0-24.893-5.14-41.996-19.888L58.357 437.58l-4.63-3.902l-3.745-2.948a56 56 0 0 0-2.941-2.08l-2.22-1.302c-.629-.313-1.15-.511-1.58-.609l-.574-.072V384c15.358 0 24.892 5.14 41.995 19.888l13.426 11.865l4.63 3.903l3.745 2.948a56 56 0 0 0 2.942 2.08l2.22 1.302c.942.47 1.645.68 2.153.68s1.21-.21 2.154-.68l2.22-1.301l2.941-2.081l3.745-2.948l4.63-3.903l9.64-8.556l7.34-6.324C161.388 388.432 170.628 384 184.89 384c15.358 0 24.892 5.14 41.995 19.888l13.427 11.865l4.629 3.903l3.745 2.948a56 56 0 0 0 2.942 2.08l2.22 1.302c.943.47 1.645.68 2.153.68s1.211-.21 2.154-.68l2.22-1.301q.642-.42 1.375-.938l3.334-2.503q.934-.736 1.978-1.588l4.629-3.903l13.427-11.865C302.219 389.14 311.754 384 327.11 384c14.261 0 23.5 4.432 38.441 16.873l7.34 6.324l9.64 8.556l4.63 3.903l3.745 2.948l2.942 2.08l2.22 1.302c.943.47 1.646.68 2.154.68c.807 0 3.04-1.022 6.575-3.515l3.963-3l3.673-3.062l14.905-13.201c15.88-13.695 25.236-19.105 38.788-19.808zm0-85.334v42.667c-.508 0-1.211.21-2.154.68l-2.22 1.302q-.642.419-1.375.937l-3.334 2.504q-.934.736-1.978 1.588l-4.629 3.902l-13.612 12.053l-4.552 3.782C422.7 378.348 411.468 384 398.223 384c-14.261 0-23.5-4.432-38.441-16.873l-7.34-6.324l-9.64-8.557l-4.63-3.902l-3.745-2.948l-2.942-2.081l-2.22-1.301c-.943-.47-1.646-.68-2.154-.68s-1.21.21-2.153.68l-2.22 1.3q-.642.42-1.376.938l-3.333 2.504q-.935.736-1.978 1.588l-4.63 3.902l-13.426 11.866C280.893 378.86 271.358 384 256 384s-24.892-5.14-41.994-19.888l-13.427-11.866l-4.63-3.902l-3.744-2.948a56 56 0 0 0-2.942-2.081l-2.22-1.301c-.943-.47-1.646-.68-2.154-.68s-1.21.21-2.153.68l-2.22 1.3l-2.942 2.082l-3.745 2.948l-4.63 3.902l-9.64 8.557l-7.34 6.324c-14.94 12.44-24.18 16.873-38.44 16.873c-15.359 0-24.893-5.14-41.996-19.888l-13.426-11.866l-4.63-3.902l-3.745-2.948a56 56 0 0 0-2.941-2.081l-2.22-1.301c-.629-.314-1.15-.512-1.58-.609l-.574-.072v-42.667c15.358 0 24.892 5.14 41.995 19.888l13.426 11.866l4.63 3.902l3.745 2.948a56 56 0 0 0 2.942 2.081l2.22 1.301c.942.47 1.645.681 2.153.681s1.21-.21 2.154-.68l2.22-1.302l2.941-2.08l3.745-2.949l4.63-3.902l9.64-8.557l7.34-6.324c14.94-12.44 24.18-16.873 38.441-16.873c15.358 0 24.892 5.14 41.995 19.888l13.427 11.866l4.629 3.902l3.745 2.948a56 56 0 0 0 2.942 2.081l2.22 1.301c.943.47 1.645.681 2.153.681s1.211-.21 2.154-.68l2.22-1.302a45 45 0 0 0 1.375-.937l3.334-2.504q.934-.736 1.978-1.588l4.629-3.902l13.427-11.866c17.102-14.748 26.637-19.888 41.994-19.888c14.261 0 23.5 4.432 38.441 16.873l7.34 6.324l9.64 8.557l4.63 3.902l3.745 2.948l2.942 2.081l2.22 1.301c.943.47 1.646.681 2.154.681c.807 0 3.04-1.022 6.575-3.516l3.963-3l3.673-3.061l14.905-13.202c15.88-13.694 25.236-19.104 38.788-19.807zM255.997 127.95c23.573 0 42.666-19.084 42.666-42.645c0-23.56-19.093-42.644-42.666-42.644s-42.666 19.083-42.666 42.644s19.093 42.645 42.666 42.645"></svg:path>`,
})
export class IxWaterBathingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWaterFishIcon],svg[ix-water-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 298.667v42.666c-.508 0-1.211.21-2.154.681l-2.22 1.301q-.642.419-1.375.938l-3.334 2.503q-.934.735-1.978 1.588l-4.629 3.902l-13.612 12.053l-4.552 3.782C422.7 378.348 411.468 384 398.223 384c-14.261 0-23.5-4.432-38.441-16.873l-7.34-6.324l-9.64-8.557l-4.63-3.902l-3.745-2.948l-2.942-2.08l-2.22-1.302c-.943-.47-1.646-.68-2.154-.68s-1.21.21-2.153.68l-2.22 1.301q-.642.419-1.376.938l-3.333 2.503q-.935.735-1.978 1.588l-4.63 3.902l-13.426 11.866C280.893 378.86 271.358 384 256 384s-24.892-5.14-41.994-19.888l-13.427-11.866l-4.63-3.902l-3.744-2.948a56 56 0 0 0-2.942-2.08l-2.22-1.302c-.943-.47-1.646-.68-2.154-.68s-1.21.21-2.153.68l-2.22 1.301l-2.942 2.081l-3.745 2.948l-4.63 3.902l-9.64 8.557l-7.34 6.324c-14.94 12.441-24.18 16.873-38.44 16.873c-15.359 0-24.893-5.14-41.996-19.888l-13.426-11.866l-4.63-3.902l-3.745-2.948a56 56 0 0 0-2.941-2.08l-2.22-1.302c-.629-.313-1.15-.511-1.58-.609l-.574-.072v-42.666c15.358 0 24.892 5.14 41.995 19.888l13.426 11.865l4.63 3.903l3.745 2.948a56 56 0 0 0 2.942 2.08l2.22 1.302c.942.47 1.645.68 2.153.68s1.21-.21 2.154-.68l2.22-1.302l2.941-2.08l3.745-2.948l4.63-3.903l9.64-8.556l7.34-6.324c14.94-12.441 24.18-16.873 38.441-16.873c15.358 0 24.892 5.14 41.995 19.888l13.427 11.865l4.629 3.903l3.745 2.948a56 56 0 0 0 2.942 2.08l2.22 1.302c.943.47 1.645.68 2.153.68s1.211-.21 2.154-.68l2.22-1.302a45 45 0 0 0 1.375-.937l3.334-2.503q.934-.736 1.978-1.588l4.629-3.903l13.427-11.865c17.102-14.748 26.637-19.888 41.994-19.888c14.261 0 23.5 4.432 38.441 16.873l7.34 6.324l9.64 8.556l4.63 3.903l3.745 2.948l2.942 2.08l2.22 1.302c.943.47 1.646.68 2.154.68c.807 0 3.04-1.022 6.575-3.515l3.963-3l3.673-3.062l14.905-13.201c15.88-13.695 25.236-19.105 38.788-19.808zm0 85.333v42.667c-.508 0-1.211.21-2.154.68l-2.22 1.302a45 45 0 0 0-1.375.937l-3.334 2.503q-.934.736-1.978 1.588l-4.629 3.903l-13.612 12.052l-4.552 3.783c-12.781 10.266-24.012 15.918-37.257 15.918c-14.261 0-23.5-4.432-38.441-16.873l-7.34-6.324l-9.64-8.556l-4.63-3.903l-3.745-2.948l-2.942-2.08l-2.22-1.302c-.943-.47-1.646-.68-2.154-.68s-1.21.21-2.153.68l-2.22 1.302q-.642.417-1.376.937l-3.333 2.503q-.935.736-1.978 1.588l-4.63 3.903l-13.426 11.865c-17.102 14.748-26.637 19.888-41.995 19.888s-24.892-5.14-41.994-19.888l-13.427-11.865l-4.63-3.903l-3.744-2.948a56 56 0 0 0-2.942-2.08l-2.22-1.302c-.943-.47-1.646-.68-2.154-.68s-1.21.21-2.153.68l-2.22 1.302l-2.942 2.08l-3.745 2.948l-4.63 3.903l-9.64 8.556l-7.34 6.324c-14.94 12.441-24.18 16.873-38.44 16.873c-15.359 0-24.893-5.14-41.996-19.888L58.357 437.58l-4.63-3.903l-3.745-2.948a56 56 0 0 0-2.941-2.08l-2.22-1.302c-.629-.313-1.15-.511-1.58-.608l-.574-.072V384c15.358 0 24.892 5.14 41.995 19.888l13.426 11.866l4.63 3.902l3.745 2.948a56 56 0 0 0 2.942 2.08l2.22 1.302c.942.47 1.645.68 2.153.68s1.21-.21 2.154-.68l2.22-1.301l2.941-2.081l3.745-2.948l4.63-3.902l9.64-8.557l7.34-6.324C161.388 388.432 170.628 384 184.89 384c15.358 0 24.892 5.14 41.995 19.888l13.427 11.866l4.629 3.902l3.745 2.948a56 56 0 0 0 2.942 2.08l2.22 1.302c.943.47 1.645.68 2.153.68s1.211-.21 2.154-.68l2.22-1.301q.642-.419 1.375-.938l3.334-2.503q.934-.735 1.978-1.588l4.629-3.902l13.427-11.866C302.219 389.14 311.754 384 327.11 384c14.261 0 23.5 4.432 38.441 16.873l7.34 6.324l9.64 8.557l4.63 3.902l3.745 2.948l2.942 2.08l2.22 1.302c.943.47 1.646.68 2.154.68c.807 0 3.04-1.022 6.575-3.515l3.963-3l3.673-3.062l14.905-13.201c15.88-13.695 25.236-19.105 38.788-19.808zm-256-320c35.512 0 66.97 17.354 86.358 44.044l2.787-.398a42.7 42.7 0 0 0 13.048-4.076l27.464-13.732a42.7 42.7 0 0 1 19.082-4.505H448V102.4c0 25.6-8 38.4-16 46.933l-3.405 3.421l-6.25 5.871c-3.732 3.682-6.345 7.165-6.345 12.042c0 4.918 2.723 9.146 6.579 13.725l7.426 8.39c8.606 9.884 17.995 23.04 17.995 46.151V256h-85.927a42.7 42.7 0 0 1-19.082-4.504l-27.464-13.733a42.7 42.7 0 0 0-13.048-4.076l-2.787-.397c-19.388 26.69-50.846 44.043-86.358 44.043h-42.667C111.757 277.333 64 229.577 64 170.667S111.757 64 170.667 64zm0 42.667h-42.667c-35.346 0-64 28.653-64 64c0 34.084 26.644 61.944 60.24 63.891l3.76.109h42.667c19.399 0 37.286-8.648 49.344-23.237l2.494-3.216l15.104-20.793l28.237 4.029a85.3 85.3 0 0 1 21.102 5.853l4.993 2.298l27.465 13.732h29.223l-2.325-2.822l-3.337-4.226a76 76 0 0 1-1.365-1.851l-.879-1.283c-6.272-9.614-10.056-20.238-10.056-32.484c0-14.889 5.268-26.68 13.863-36.846l3.431-3.787l2.034-2.034h-30.59l-27.464 13.732a85.3 85.3 0 0 1-20.686 7.2l-5.416.953l-28.23 4.027l-15.104-20.793c-11.205-15.424-28.545-25.1-47.706-26.321zm-42.667 42.666c11.782 0 21.333 9.552 21.333 21.334S182.45 192 170.667 192s-21.333-9.551-21.333-21.333s9.55-21.334 21.333-21.334"></svg:path>`,
})
export class IxWaterFishIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWaterPlantIcon],svg[ix-water-plant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 64v170.667l149.334-69.334v69.334L448 164.548V448H64V64zM384 320v42.667c-8.335 0-11.35 1.206-20.166 7.083C348.65 379.873 338.332 384 320 384s-28.65-4.127-43.834-14.25c-8.816-5.877-11.831-7.083-20.166-7.083s-11.35 1.206-20.166 7.083C220.65 379.873 210.332 384 192 384s-28.65-4.127-43.834-14.25c-8.816-5.877-11.831-7.083-20.166-7.083V320c18.332 0 28.65 4.127 43.834 14.25c8.816 5.877 11.831 7.083 20.166 7.083s11.35-1.206 20.166-7.083C227.35 324.127 237.668 320 256 320s28.65 4.127 43.834 14.25c8.816 5.877 11.831 7.083 20.166 7.083s11.35-1.206 20.166-7.083C355.35 324.127 365.668 320 384 320m-277.333-18.483v103.816h298.666V231.701L256 301.836v-69.644z"></svg:path>`,
})
export class IxWaterPlantIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWaterSunbathingIcon],svg[ix-water-sunbathing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 384v42.667c-.508 0-1.211.21-2.154.68l-2.22 1.302q-.642.419-1.375.937l-3.334 2.504q-.934.736-1.978 1.588l-4.629 3.902l-13.612 12.052l-4.552 3.783c-12.781 10.267-24.012 15.919-37.257 15.919c-14.261 0-23.5-4.432-38.441-16.873l-7.34-6.324l-9.64-8.557l-4.63-3.902l-3.745-2.948l-2.942-2.081l-2.22-1.301c-.943-.47-1.646-.681-2.154-.681s-1.21.21-2.153.68l-2.22 1.302q-.642.419-1.376.937l-3.333 2.504q-.935.736-1.978 1.588l-4.63 3.902l-13.426 11.866c-17.102 14.748-26.637 19.888-41.995 19.888s-24.892-5.14-41.994-19.888l-13.427-11.866l-4.63-3.902l-3.744-2.948a56 56 0 0 0-2.942-2.081l-2.22-1.301c-.943-.47-1.646-.681-2.154-.681s-1.21.21-2.153.68l-2.22 1.302l-2.942 2.08l-3.745 2.949l-4.63 3.902l-9.64 8.557l-7.34 6.324c-14.94 12.44-24.18 16.873-38.44 16.873c-15.359 0-24.893-5.14-41.996-19.888L58.357 437.58l-4.63-3.902l-3.745-2.948a56 56 0 0 0-2.941-2.081l-2.22-1.301c-.629-.314-1.15-.512-1.58-.609l-.574-.072V384c15.358 0 24.892 5.14 41.995 19.888l13.426 11.866l4.63 3.902l3.745 2.948a56 56 0 0 0 2.942 2.081l2.22 1.301c.942.47 1.645.681 2.153.681s1.21-.21 2.154-.68l2.22-1.302l2.941-2.08l3.745-2.949l4.63-3.902l9.64-8.557l7.34-6.324c14.94-12.44 24.18-16.873 38.441-16.873c15.358 0 24.892 5.14 41.995 19.888l13.427 11.866l4.629 3.902l3.745 2.948a56 56 0 0 0 2.942 2.081l2.22 1.301c.943.47 1.645.681 2.153.681s1.211-.21 2.154-.68l2.22-1.302q.642-.419 1.375-.937l3.334-2.504q.934-.736 1.978-1.588l4.629-3.902l13.427-11.866C302.219 389.14 311.754 384 327.11 384c14.261 0 23.5 4.432 38.441 16.873l7.34 6.324l9.64 8.557l4.63 3.902l3.745 2.948l2.942 2.081l2.22 1.301c.943.47 1.646.681 2.154.681c.807 0 3.04-1.022 6.575-3.516l3.963-3l3.673-3.061l14.905-13.202c15.88-13.694 25.236-19.104 38.788-19.807zM234.667 42.667c53.03 0 101.039 21.5 135.786 56.257l-120.68 120.679L350.17 320h119.164v42.667h-256V320h76.496l-70.227-70.227l-120.68 120.68c-34.757-34.747-56.256-82.756-56.256-135.786c0-45.333 15.711-86.997 41.986-119.843l-14.404-14.405c-8.331-8.332-8.331-21.84 0-30.17c7.69-7.69 19.791-8.282 28.16-1.775l2.01 1.775l14.405 14.404c32.846-26.275 74.51-41.986 119.843-41.986M95.574 180.217l-.253.644c-6.45 16.694-9.987 34.837-9.987 53.806c0 24.561 5.935 48.142 16.91 69.125l1.052 1.915l42.36-42.361c-23.153-28.345-40.273-57.164-50.082-83.13m38.144-51.467l-4.608.36l-.199 1.836l-.173 3.169c-.195 7.863 2.082 18.894 7.085 31.902c7.066 18.372 18.68 38.578 33.859 58.82l6.318 8.145L232.982 176l-5.099-4.007c-19.762-15.163-39.552-26.96-57.665-34.49l-5.973-2.35c-10.94-4.055-20.381-6.125-27.58-6.396zm100.949-43.416c-19.215 0-37.582 3.629-54.454 10.239c25.968 9.81 54.788 26.93 83.133 50.083l42.361-42.36l-1.915-1.052c-19.075-9.977-40.298-15.79-62.452-16.764z"></svg:path>`,
})
export class IxWaterSunbathingIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWaveformIcon],svg[ix-waveform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.667 213.334h42.667v85.333h-42.667zm-64-64h42.667v213.333h-42.667zm-64 21.333h42.667v170.667h-42.667zm-64-64h42.667v298.667h-42.667zm-192 106.667h42.667v85.333H42.667zm64-64h42.667v213.333h-42.667zm64-106.667h42.667v426.667h-42.667z"></svg:path>`,
})
export class IxWaveformIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWebBrowserScreenIcon],svg[ix-web-browser-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 85.333v341.334h426.666V85.333zm384 42.667v42.667H256V128zm-213.334 0v42.667h-42.666V128zM128 128v42.667H85.333V128zM85.333 384V213.333h341.334V384z" clip-rule="evenodd"></svg:path>`,
})
export class IxWebBrowserScreenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWebcamIcon],svg[ix-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.334 106.667c70.692 0 128 57.308 128 128s-57.308 128-128 128H170.667c-70.692 0-128-57.308-128-128s57.308-128 128-128zm0 42.667H170.667c-47.128 0-85.333 38.205-85.333 85.333c0 45.7 35.924 83.01 81.074 85.229l4.259.104h170.667c47.128 0 85.333-38.205 85.333-85.333c0-45.7-35.925-83.01-81.074-85.229zM256 170.667c35.347 0 64 28.654 64 64s-28.653 64-64 64c-35.346 0-64-28.654-64-64s28.654-64 64-64m0 42.667c-11.782 0-21.333 9.55-21.333 21.333S244.218 256 256 256s21.334-9.55 21.334-21.333s-9.552-21.333-21.334-21.333M384 384v42.667H128V384z"></svg:path>`,
})
export class IxWebcamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWebcamCancelledIcon],svg[ix-webcam-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m72.837 72.837l362.667 362.667l-30.17 30.17a4768 4768 0 0 0-35.363-39.006H128V384h202.31a3766 3766 0 0 0-20.267-21.332H170.667c-70.692 0-128-57.308-128-128c0-36.866 15.585-70.092 40.526-93.448a25136 25136 0 0 0-40.526-38.213zm268.497 33.83c70.692 0 128 57.308 128 128c0 47.235-25.586 88.494-63.654 110.675l-31.778-31.777c30.972-12.799 52.765-43.303 52.765-78.898c0-45.7-35.925-83.01-81.074-85.229l-4.26-.104l-131.662-.001l-42.613-42.616q1.798-.05 3.609-.05zM114.26 170.638l-.115.098c-17.67 15.635-28.811 38.482-28.811 63.931c0 45.7 35.924 83.01 81.074 85.229l4.259.104h97.799a3023 3023 0 0 0-8.047-8.078a3489 3489 0 0 0-14.061-13.977c-27.096-4.095-48.62-25.177-53.376-52.048q-34.559-33.35-78.722-75.259m141.74.03c35.347 0 64 28.653 64 64c0 7.484-1.285 14.67-3.646 21.346l-81.701-81.7A63.9 63.9 0 0 1 256 170.667"></svg:path>`,
})
export class IxWebcamCancelledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWebcamCancelledFilledIcon],svg[ix-webcam-cancelled-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m72.837 72.837l362.667 362.667l-30.17 30.17a4768 4768 0 0 0-35.363-39.006H128V384h202.31a3766 3766 0 0 0-20.267-21.332H170.667c-70.692 0-128-57.308-128-128c0-36.866 15.585-70.092 40.526-93.448a25136 25136 0 0 0-40.526-38.213zm268.497 33.83c70.692 0 128 57.308 128 128c0 47.235-25.586 88.494-63.654 110.675l-89.326-89.328A63.9 63.9 0 0 0 320 234.667c0-35.346-28.653-64-64-64a63.9 63.9 0 0 0-21.347 3.647l-67.595-67.597q1.798-.05 3.609-.05zm-148.35 139.23l.027.162c4.814 26.794 26.305 47.8 53.345 51.886q-22.97-22.713-53.372-52.048"></svg:path>`,
})
export class IxWebcamCancelledFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWebcamFilledIcon],svg[ix-webcam-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.334 106.667c70.692 0 128 57.308 128 128s-57.308 128-128 128H170.667c-70.692 0-128-57.308-128-128s57.308-128 128-128zm-85.334 64c-35.346 0-64 28.654-64 64s28.654 64 64 64s64-28.654 64-64s-28.653-64-64-64m0 42.667c11.782 0 21.334 9.55 21.334 21.333S267.782 256 256 256s-21.333-9.55-21.333-21.333s9.551-21.333 21.333-21.333M384 384v42.667H128V384z"></svg:path>`,
})
export class IxWebcamFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWechatLogoIcon],svg[ix-wechat-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.333 311.893c0-57.386-56.106-103.893-125.44-103.893c-69.333 0-125.226 46.507-125.226 103.893S274.773 416 343.893 416a157.2 157.2 0 0 0 36.694-4.48a4.27 4.27 0 0 1 3.626 0l37.12 19.84a5.34 5.34 0 0 0 5.911-.523a5.33 5.33 0 0 0 1.769-5.664l-7.04-28.16a5.55 5.55 0 0 1 2.133-5.546a98.35 98.35 0 0 0 45.227-79.574m-170.666-13.226a21.33 21.33 0 0 1-21.334-21.334a21.333 21.333 0 1 1 21.334 21.334m85.333 0a21.333 21.333 0 1 1 .001-42.667a21.333 21.333 0 0 1-.001 42.667"></svg:path><svg:path fill="currentColor" d="M343.893 186.667h4.694C333.867 128 271.787 85.333 197.333 85.333c-85.333 0-154.666 57.387-154.666 128a120.53 120.53 0 0 0 56.96 98.987a5.12 5.12 0 0 1 2.133 5.76l-8.107 32.853a5.333 5.333 0 0 0 7.68 6.187L144 335.787a4.9 4.9 0 0 1 3.84 0a184 184 0 0 0 49.493 5.546h4.267a102 102 0 0 1-4.267-29.226c0-69.12 65.707-125.44 146.56-125.44m-98.56-37.334a21.333 21.333 0 1 1-.001 42.667a21.333 21.333 0 0 1 .001-42.667m-96 42.667a21.332 21.332 0 1 1-.001-42.664a21.332 21.332 0 0 1 .001 42.664"></svg:path>`,
})
export class IxWechatLogoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWeiboLogoIcon],svg[ix-weibo-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.272 432a235 235 0 0 1-32.853-1.493a252 252 0 0 1-73.6-18.347a172 172 0 0 1-42.667-26.027a105 105 0 0 1-26.667-33.706a79.36 79.36 0 0 1-7.68-39.04A123.7 123.7 0 0 1 53.9 270.72a219 219 0 0 1 29.44-46.507a314.7 314.7 0 0 1 61.226-57.813a199.2 199.2 0 0 1 42.667-23.68a106.6 106.6 0 0 1 23.253-6.613a51.8 51.8 0 0 1 21.334 0a27.95 27.95 0 0 1 21.333 23.68a57.6 57.6 0 0 1 0 22.613c0 3.84-1.707 7.467-2.773 11.093a9.6 9.6 0 0 0 0 3.414a2.99 2.99 0 0 0 2.346 2.986c1.477.317 3.004.317 4.48 0a31.5 31.5 0 0 0 5.76-2.133a220.5 220.5 0 0 1 33.067-10.453a131 131 0 0 1 25.813-2.774a61.3 61.3 0 0 1 21.334 3.84a29 29 0 0 1 17.706 18.56a36.9 36.9 0 0 1 1.28 16a85.3 85.3 0 0 1-4.693 17.92a14.5 14.5 0 0 0-1.493 4.267a5.12 5.12 0 0 0 2.986 5.547l3.627 1.493a98.6 98.6 0 0 1 26.027 11.733a67.4 67.4 0 0 1 16.853 18.774a50.35 50.35 0 0 1 8.747 33.92a76.8 76.8 0 0 1-12.374 34.986a132 132 0 0 1-29.653 32.854a204 204 0 0 1-52.053 29.653a260.7 260.7 0 0 1-47.36 13.44a272 272 0 0 1-46.507 4.48m-22.613-26.667a206 206 0 0 0 27.52-1.92a188.6 188.6 0 0 0 41.386-11.093A137.8 137.8 0 0 0 313.312 368a83.6 83.6 0 0 0 21.333-27.52a56.32 56.32 0 0 0 3.627-37.333a62.73 62.73 0 0 0-18.133-29.014a102.9 102.9 0 0 0-32.214-21.333a156.6 156.6 0 0 0-57.386-12.8a203.4 203.4 0 0 0-38.4 2.987A184.5 184.5 0 0 0 149.472 256a129.7 129.7 0 0 0-36.267 24.107a81.3 81.3 0 0 0-18.56 25.6a55.25 55.25 0 0 0 0 45.013a68.3 68.3 0 0 0 21.334 26.88a116.3 116.3 0 0 0 32.64 18.133a163.6 163.6 0 0 0 55.04 9.6m6.613-132.266a67 67 0 0 1 38.4 11.306a50.14 50.14 0 0 1 21.333 30.294a49.5 49.5 0 0 1-2.986 32a65.7 65.7 0 0 1-29.227 32a75.1 75.1 0 0 1-42.667 10.453a64 64 0 0 1-37.333-13.013a50.13 50.13 0 0 1-18.773-29.44a52.05 52.05 0 0 1 4.48-32.64a65.9 65.9 0 0 1 21.333-25.174a78.3 78.3 0 0 1 45.44-15.786m-50.133 73.6a17.275 17.275 0 0 0 11.093 16.64a21.34 21.34 0 0 0 16.853 0a25.17 25.17 0 0 0 17.707-16.64a18.35 18.35 0 0 0-6.451-21.176a18.3 18.3 0 0 0-7.202-3.144a27.1 27.1 0 0 0-18.734 2.383a27.1 27.1 0 0 0-12.626 14.043a18.6 18.6 0 0 0-.64 7.894m66.986-26.88a6.61 6.61 0 0 0-4.48-6.4a9.805 9.805 0 0 0-11.318 3.414a9.8 9.8 0 0 0-1.695 3.839a7.04 7.04 0 0 0 4.48 7.893a9.6 9.6 0 0 0 5.973 0a9.6 9.6 0 0 0 7.04-9.813zM408.032 218.24a52.3 52.3 0 0 0 2.773-17.28A56.105 56.105 0 0 0 354.699 144a51 51 0 0 0-9.814 0a13.328 13.328 0 1 0 4.694 26.24a30.077 30.077 0 0 1 34.56 29.653a26.7 26.7 0 0 1-1.494 9.174a13.23 13.23 0 0 0 8.747 16.64a8.76 8.76 0 0 0 4.053 0a13.23 13.23 0 0 0 12.587-8.534zm56.533 16.427a119.3 119.3 0 0 0 4.907-34.774a114.775 114.775 0 0 0-114.773-114.56a116.7 116.7 0 0 0-22.827 2.347a15.8 15.8 0 0 0-10.25 6.734a15.78 15.78 0 0 0-2.337 12.039a16.214 16.214 0 0 0 18.987 12.587a84 84 0 0 1 16.427-1.707a82.773 82.773 0 0 1 82.773 82.56a83.8 83.8 0 0 1-3.627 24.32a16 16 0 0 0 1.158 12.248a16 16 0 0 0 9.509 7.806c1.557.208 3.136.208 4.693 0a16.22 16.22 0 0 0 15.36-10.667z"></svg:path>`,
})
export class IxWeiboLogoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWidthIcon],svg[ix-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 128H42.667v256h42.666V256l79.085 79.085l30.17-30.17l-27.582-27.582h178.017l-27.583 27.584l30.17 30.17l79.057-79.057V384h42.666V128h-42.666v127.973l-79.057-79.056l-30.17 30.17l27.58 27.58H167.006l27.582-27.582l-30.17-30.17l-79.085 79.084z" clip-rule="evenodd"></svg:path>`,
})
export class IxWidthIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWlanOffIcon],svg[ix-wlan-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m431.085 400.915l-30.17 30.17l-90.664-90.663l-1.473 1.475c-13.373-13.37-31.773-21.708-52.085-21.894L256 320c-20.587 0-39.254 8.376-52.779 21.897l-30.144-30.157c19.364-19.362 45.442-32.009 74.393-34.1l-36.519-36.52c-26.037 7.651-49.336 21.758-68.04 40.461l-30.143-30.155c18.451-18.453 40.436-33.374 64.84-43.65l-32.12-32.117c-23.346 11.828-44.556 27.28-62.886 45.613l-30.165-30.157a290 290 0 0 1 61.56-46.948L59.58 89.752l30.17-30.17zM256 362.667c17.664 0 32 14.327 32 32c0 17.672-14.336 32-32 32s-32-14.328-32-32s14.336-32 32-32m28.509-168.668c44.49 6.29 84.383 27.084 114.723 57.427l-28.644 28.653Zm-28.51-87.332c79.403 0 151.403 32.297 203.563 84.445l-30.165 30.162c-44.437-44.425-105.77-71.94-173.397-71.94q-7.892.001-15.663.494l-38.124-38.125A288.5 288.5 0 0 1 256 106.667"></svg:path>`,
})
export class IxWlanOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWlanStrength0Icon],svg[ix-wlan-strength-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M288 394.667c0 17.672-14.337 32-32 32c-17.665 0-32-14.328-32-32s14.335-32 32-32c17.663 0 32 14.327 32 32m10.666-109.084v48.552c5.504 3.954 10.645 8.361 14.933 13.605l30.4-30.41c-12.245-13.934-27.797-24.824-45.333-31.747m-130.667 31.746l30.4 30.41c4.288-5.243 9.43-9.65 14.934-13.604v-48.552c-17.536 6.92-33.088 17.813-45.334 31.746m-30.165-30.163c20.032-21.988 46.101-38.244 75.499-46.458v-44.161c-41.28 8.938-77.867 30.555-105.643 60.468zm160.832-90.619v44.161c29.397 8.214 55.467 24.47 75.499 46.458l30.144-30.15c-27.776-29.914-64.363-51.532-105.643-60.469M277.333 128h-42.667v208h42.667z"></svg:path>`,
})
export class IxWlanStrength0Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWlanStrength1Icon],svg[ix-wlan-strength-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M288 394.666c0 17.673-14.336 32-32 32s-32-14.327-32-32c0-17.672 14.336-32 32-32s32 14.328 32 32M173.077 311.74l30.144 30.157C216.746 328.376 235.413 320 256 320c20.586 0 39.253 8.375 52.778 21.896l30.144-30.154c-21.248-21.248-50.581-34.409-82.922-34.409c-32.342 0-61.675 13.16-82.923 34.406"></svg:path>`,
})
export class IxWlanStrength1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWlanStrength1LockIcon],svg[ix-wlan-strength-1-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M255.998 405.333c8.193 0 15.67-3.082 21.333-8.151v-47.697a31.88 31.88 0 0 0-21.333-8.152c-17.664 0-32 14.328-32 32s14.336 32 32 32m75.41-121.816a63.65 63.65 0 0 0-10.337 24.747A64.4 64.4 0 0 0 319.997 320v42.667h-21.333v106.666h170.667V362.667h-21.334V320c0-35.346-28.653-64-64-64c-21.787 0-41.031 10.887-52.589 27.517m-75.41 15.15c15.999 0 30.839 5.058 43.006 13.66a84.86 84.86 0 0 1 14.901-41.011C296.808 261.571 277.04 256 255.998 256c-32.342 0-61.675 13.161-82.923 34.406l30.144 30.157c13.525-13.521 32.192-21.896 52.779-21.896m106.81 18.845c1.232-10.61 10.249-18.845 21.189-18.845l2.488.143c10.61 1.233 18.846 10.249 18.846 21.19v42.667h-42.667V320z" clip-rule="evenodd"></svg:path>`,
})
export class IxWlanStrength1LockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWlanStrength2Icon],svg[ix-wlan-strength-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M288 394.667c0 17.672-14.336 32-32 32s-32-14.328-32-32s14.336-32 32-32s32 14.327 32 32M173.077 311.74l30.144 30.157C216.747 328.375 235.413 320 256 320s39.253 8.375 52.779 21.897l30.144-30.155c-21.248-21.248-50.582-34.409-82.923-34.409s-61.675 13.16-82.923 34.407m-60.309-60.314l30.144 30.155c28.97-28.97 68.97-46.914 113.088-46.914s84.117 17.943 113.088 46.914l30.144-30.155C362.539 214.73 311.872 192 256 192s-106.539 22.729-143.232 59.426"></svg:path>`,
})
export class IxWlanStrength2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWlanStrength2LockIcon],svg[ix-wlan-strength-2-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 405.331a31.88 31.88 0 0 0 21.333-8.152v-47.697A31.88 31.88 0 0 0 256 341.331c-17.664 0-32 14.327-32 32c0 17.672 14.336 32 32 32M399.232 230.09l-5.16 5.162a86 86 0 0 0-10.072-.588c-12.823 0-24.986 2.829-35.898 7.896c-26.059-18.406-57.838-29.229-92.102-29.229c-44.117 0-84.117 17.943-113.088 46.914l-30.144-30.155c36.694-36.697 87.36-59.426 143.232-59.426s106.539 22.729 143.232 59.426m-26.972 26.982a63 63 0 0 0-5.191 1.189c-14.654 4.009-27.21 13.097-35.659 25.253a63.65 63.65 0 0 0-10.336 24.747A64.4 64.4 0 0 0 320 319.997v42.667h-21.333v106.667h170.666V362.664H448v-42.667c0-35.346-28.654-64-64-64c-4.01 0-7.934.369-11.74 1.075m-73.253 55.252a84.86 84.86 0 0 1 14.901-41.011c-17.097-9.745-36.866-15.316-57.908-15.316c-32.341 0-61.674 13.161-82.922 34.407l30.144 30.157c13.525-13.521 32.192-21.897 52.778-21.897c16 0 30.839 5.059 43.007 13.66m63.803 5.185c1.233-10.609 10.25-18.845 21.19-18.845l2.488.144c10.61 1.232 18.845 10.249 18.845 21.189v42.667h-42.666v-42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxWlanStrength2LockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWlanStrength3Icon],svg[ix-wlan-strength-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M288 394.667c0 17.673-14.336 32-32 32s-32-14.327-32-32s14.336-32 32-32s32 14.327 32 32M173.077 311.74l30.144 30.157C216.746 328.376 235.413 320 256 320c20.586 0 39.253 8.376 52.778 21.897l30.144-30.155c-21.248-21.248-50.581-34.408-82.922-34.408c-32.342 0-61.675 13.16-82.923 34.406m-60.31-60.314l30.145 30.155c28.97-28.97 68.97-46.914 113.088-46.914s84.117 17.943 113.088 46.914l30.144-30.155C362.538 214.73 311.872 192 256 192s-106.54 22.73-143.232 59.426M256 106.667c-79.403 0-151.403 32.297-203.563 84.448l30.165 30.157c44.416-44.423 105.75-71.938 173.398-71.938c67.626 0 128.96 27.515 173.397 71.94l30.165-30.162c-52.16-52.148-124.16-84.445-203.562-84.445"></svg:path>`,
})
export class IxWlanStrength3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWlanStrength3LockIcon],svg[ix-wlan-strength-3-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 397.184v-47.697A31.88 31.88 0 0 0 256 341.336c-17.664 0-32 14.327-32 32c0 17.672 14.336 32 32 32a31.88 31.88 0 0 0 21.333-8.152m121.899-167.089l-5.16 5.162a86 86 0 0 0-10.072-.588c-12.823 0-24.986 2.829-35.898 7.896c-26.059-18.406-57.839-29.229-92.102-29.229c-44.117 0-84.117 17.943-113.088 46.914l-30.144-30.155c36.694-36.697 87.36-59.426 143.232-59.426s106.539 22.729 143.232 59.426m-26.972 26.982a64 64 0 0 0-5.191 1.189c-14.654 4.01-27.21 13.097-35.659 25.253a63.6 63.6 0 0 0-10.336 24.748A64.4 64.4 0 0 0 320 320.003v42.666h-21.333v106.667h170.666V362.669H448v-42.666c0-35.347-28.654-64-64-64c-4.01 0-7.934.368-11.74 1.074m-73.253 55.252a84.86 84.86 0 0 1 14.901-41.011c-17.097-9.744-36.866-15.315-57.908-15.315c-32.341 0-61.674 13.16-82.923 34.406l30.144 30.157c13.526-13.521 32.193-21.897 52.779-21.897c15.999 0 30.839 5.059 43.007 13.66M256 85.336c-79.402 0-151.402 32.297-203.562 84.448l30.165 30.157c44.416-44.423 105.749-71.938 173.397-71.938c67.627 0 128.96 27.515 173.398 71.94l30.165-30.162C407.403 117.633 335.403 85.336 256 85.336m106.81 232.179c1.232-10.61 10.25-18.846 21.19-18.846l2.488.144c10.61 1.232 18.845 10.249 18.845 21.19v42.666h-42.666v-42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxWlanStrength3LockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWlanWarningIcon],svg[ix-wlan-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m257.779 405.287l26.654-46.644c-5.325-10.281-16.063-17.307-28.433-17.307c-17.664 0-32 14.327-32 32c0 17.672 14.336 32 32 32q.895 0 1.779-.049m49.335-86.335l21.534-37.686c-19.996-15.813-45.242-25.263-72.648-25.263c-32.341 0-61.674 13.16-82.923 34.406l30.144 30.157c13.526-13.521 32.193-21.897 52.779-21.897c19.755 0 37.741 7.712 51.114 20.283m49.76-69.73c8.023-3.433 17.03-4.388 25.754-2.517l16.604-16.61c-36.693-36.697-87.36-59.426-143.232-59.426s-106.538 22.729-143.232 59.426l30.144 30.155c28.971-28.971 68.971-46.914 113.088-46.914c38.21 0 73.332 13.46 100.874 35.886M256 85.336c-79.402 0-151.402 32.297-203.562 84.448l30.165 30.157c44.416-44.423 105.749-71.938 173.397-71.938c67.627 0 128.96 27.515 173.398 71.94l30.165-30.162C407.403 117.633 335.403 85.336 256 85.336M384.276 269.91a21.3 21.3 0 0 1 7.938 7.938l91.239 159.668c5.846 10.23 2.292 23.261-7.938 29.107a21.33 21.33 0 0 1-10.584 2.811H282.453c-11.782 0-21.333-9.552-21.333-21.334c0-3.712.969-7.361 2.811-10.584l91.238-159.668c5.846-10.23 18.878-13.784 29.107-7.938m-26.943 114.092h32v-64h-32zm37.334 42.666c0-12.307-9.143-21.333-21.334-21.333S352 414.362 352 426.396c0 12.581 8.866 21.607 21.333 21.607c12.191 0 21.334-9.026 21.334-21.334" clip-rule="evenodd"></svg:path>`,
})
export class IxWlanWarningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWorkCaseIcon],svg[ix-work-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m320 64l21.334 21.333l-.001 42.667h128v298.667H42.668V128h128V85.333L192 64zM85.333 284.935V384h341.334v-99.065c-42.625 12.196-85.298 19.824-128 22.874v33.524h-85.333V307.81c-42.702-3.05-85.375-10.678-128-22.874m341.334-114.268H85.334v69.766c56.972 17.5 113.84 26.234 170.666 26.234c56.827 0 113.695-8.734 170.668-26.234zm-128-64h-85.333V128h85.333z"></svg:path>`,
})
export class IxWorkCaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWorkCaseFilledIcon],svg[ix-work-case-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M42.667 261.76a554.7 554.7 0 0 0 170.667 36.907v42.666h85.333v-42.666a601 601 0 0 0 170.667-36.054v164.054H42.667zM320 64l21.334 21.333V128h128v111.147a605.2 605.2 0 0 1-204.374 38.186H249.6A599.3 599.3 0 0 1 42.667 238.08V128h128V85.333L192 64zm-21.333 42.667h-85.333V128h85.333z"></svg:path>`,
})
export class IxWorkCaseFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWorkspaceIcon],svg[ix-workspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667V85.333zM192 192H85.334v192H192zm234.667 0h-192v192h192zm0-64H85.334v21.333h341.333z"></svg:path>`,
})
export class IxWorkspaceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixWorkspacesIcon],svg[ix-workspaces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 277.333V448H64V277.333zm-42.667 64H192v64h85.333zm-128 0h-42.666v64h42.666zm320-170.666v170.666h-128v-42.666h85.334v-64h-85.334V256h-42.667v-21.333H256V256h-42.667v-85.333zM320 64v85.333h-42.667V128H192v106.666H64V64zm-170.667 64h-42.666v64h42.666z"></svg:path>`,
})
export class IxWorkspacesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixXAxisSettingsIcon],svg[ix-x-axis-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 64v298.666h289.818l-48.903-48.914l30.17-30.17L478.17 384L377.752 484.418l-30.17-30.17l48.902-48.915H106.667v21.334H85.334l-.001-21.334H42.667v-42.666l42.666-.001V64zm285.514 0v22.836a88.8 88.8 0 0 1 28.135 16.267l19.796-11.43l29.63 51.32l-19.784 11.424a89.4 89.4 0 0 1 1.482 16.25c0 5.55-.509 10.981-1.482 16.25l19.784 11.423l-29.63 51.32l-19.796-11.43a88.8 88.8 0 0 1-28.135 16.267v22.836h-59.26v-22.836a88.8 88.8 0 0 1-28.133-16.266L284.99 249.66l-29.63-51.32l19.784-11.423a89.4 89.4 0 0 1-1.482-16.25c0-5.55.509-10.983 1.482-16.251l-19.784-11.423l29.63-51.32l19.797 11.43a88.8 88.8 0 0 1 28.134-16.267V64zm-29.63 71.111c-19.637 0-35.555 15.919-35.555 35.556s15.918 35.555 35.555 35.555s35.556-15.919 35.556-35.555c0-19.637-15.919-35.556-35.556-35.556"></svg:path>`,
})
export class IxXAxisSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixXLogoIcon],svg[ix-x-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296.591 223.331L455.427 42.667h-37.639L279.871 199.535L169.716 42.667H42.666l166.575 237.212L42.666 469.333h37.642l145.644-165.658l116.331 165.658h127.05L296.582 223.331zm-51.555 58.638l-16.877-23.621L93.87 70.393h57.815L260.057 222.08l16.878 23.621l140.871 197.168h-57.815l-114.955-160.89z"></svg:path>`,
})
export class IxXLogoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixXlsDocumentIcon],svg[ix-xls-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 42.667H85.333v234.667H128v-192h174.293L384 167.04v110.294h42.666v-128zm101.655 341.852a56.4 56.4 0 0 0-8.661-5.376q-4.64-2.304-18.816-8.192c-9.515-3.904-15.552-6.848-18.048-8.81c-2.496-1.964-3.755-4.673-3.755-8.108c0-3.968 1.494-7.253 4.438-9.856c2.816-2.389 6.976-3.605 12.394-3.605q7.137 0 13.696 1.536c4.352 1.045 10.902 3.136 19.563 6.336l5.803-23.51c-14.72-4.65-28.352-6.954-40.875-6.954c-17.365 0-29.845 5.333-37.419 16c-4.97 6.87-7.424 14.848-7.424 23.957c0 10.54 3.755 18.624 11.286 24.235c2.645 1.984 5.568 3.755 8.725 5.333c3.179 1.558 8.619 3.947 16.32 7.147c10.432 4.288 16.981 7.424 19.627 9.493c2.645 2.048 3.989 4.907 3.989 8.576c0 4.118-1.365 7.574-4.075 10.411c-3.136 3.243-8.021 4.864-14.634 4.864c-10.198 0-22.614-3.05-37.248-9.216l-4.182 24.597q20.543 7.232 42.944 7.232c14.358 0 25.494-2.986 33.45-8.938c9.366-7.062 14.017-17.472 14.017-31.19c0-11.648-3.69-20.288-11.115-25.962m-242.308-64.284l-30.208 41.77l-29.824-41.77H85.758l45.034 62.379l-47.381 65.749h34.07l30.229-42.773l30.378 42.773h34.795L165.8 383.339l46.55-63.104zm58.349 0v128.128H321.6V425.75h-55.04V320.235z"></svg:path>`,
})
export class IxXlsDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixXlsDocumentFilledIcon],svg[ix-xls-document-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 42.664H85.333v234.667h341.334v-128zm92.994 336.475a56.5 56.5 0 0 1 8.662 5.376c7.424 5.675 11.114 14.315 11.114 25.963c0 13.717-4.65 24.128-14.016 31.189c-7.957 5.952-19.093 8.939-33.45 8.939q-22.4 0-42.944-7.232l4.181-24.597c14.635 6.165 27.051 9.216 37.248 9.216c6.613 0 11.499-1.622 14.635-4.864c2.709-2.838 4.074-6.294 4.074-10.411c0-3.669-1.344-6.528-3.989-8.576c-2.645-2.069-9.195-5.205-19.627-9.493c-7.701-3.2-13.141-5.59-16.32-7.147c-3.157-1.579-6.08-3.349-8.725-5.333c-7.531-5.611-11.285-13.696-11.285-24.235c0-9.109 2.453-17.088 7.424-23.957c7.573-10.667 20.053-16 37.418-16c12.523 0 26.155 2.304 40.875 6.954l-5.803 23.51c-8.661-3.2-15.21-5.291-19.562-6.336q-6.56-1.536-13.696-1.536c-5.419 0-9.579 1.216-12.395 3.605c-2.944 2.603-4.437 5.888-4.437 9.856c0 3.435 1.258 6.144 3.754 8.107s8.534 4.906 18.048 8.81q14.177 5.888 18.816 8.192m-263.855-17.137l30.208-41.771h33.003l-46.549 63.104l47.082 65.024h-34.794l-30.379-42.773l-30.229 42.773h-34.07l47.382-65.749l-45.035-62.379h33.557zm88.557-41.771v128.128H321.6v-22.613h-55.04V320.231z" clip-rule="evenodd"></svg:path>`,
})
export class IxXlsDocumentFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixXmlDocumentIcon],svg[ix-xml-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 42.667H85.333v234.667H128v-192h174.293L384 167.04v110.294h42.667v-128zM158.014 320.235l-30.208 41.77l-29.824-41.77H64.425l45.034 62.379l-47.381 65.749h34.07l30.229-42.773l30.378 42.773h34.795l-47.083-65.024l46.55-63.104zm135.149 69.039c-2.176 6.677-4.672 15.317-7.51 25.856c-2.816-10.667-5.312-19.285-7.402-25.856l-22.144-69.27h-42.774v128.129H240V344.41c2.944 11.05 5.525 19.904 7.68 26.603l24.96 77.12h24.768l25.685-79.296c2.646-8.086 5.014-16.214 7.04-24.427v103.723h27.776V320.005h-42.304zm93.866-69.039v128.128h83.904V425.75h-55.04V320.235z"></svg:path>`,
})
export class IxXmlDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixYAxisSettingsIcon],svg[ix-y-axis-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m128 33.83l100.42 100.418l-30.17 30.17l-48.916-48.904v289.82H448v21.333H149.333v42.666h-42.666v-42.667H64v-21.333h42.666V115.515l-48.914 48.903l-30.17-30.17zM392.18 64l.001 22.836a88.8 88.8 0 0 1 28.135 16.267l19.796-11.43l29.63 51.32l-19.784 11.424a89.4 89.4 0 0 1 1.482 16.25c0 5.55-.509 10.981-1.482 16.25l19.784 11.423l-29.63 51.32l-19.796-11.43a88.8 88.8 0 0 1-28.135 16.267v22.836h-59.26v-22.836a88.8 88.8 0 0 1-28.133-16.266L284.99 249.66l-29.63-51.32l19.784-11.423a89.4 89.4 0 0 1-1.482-16.25c0-5.551.509-10.983 1.482-16.251l-19.784-11.423l29.63-51.32l19.797 11.43a88.8 88.8 0 0 1 28.134-16.267V64zm-29.629 71.111c-19.637 0-35.555 15.919-35.555 35.556s15.918 35.555 35.555 35.555s35.556-15.919 35.556-35.555c0-19.637-15.92-35.556-35.556-35.556"></svg:path>`,
})
export class IxYAxisSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixYoutubeIcon],svg[ix-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="m239.078 106.761l28.77-.041l31.267.4l19.977.442l21.3.664l14.355.587l14.07.72l13.436.864c17.338 1.254 32.054 2.931 40.426 5.172c18.368 4.875 32.81 19.29 37.738 37.73c1.84 6.868 3.3 15.27 4.46 24.28l1.251 11.045c.372 3.74.701 7.518.992 11.274l1.068 16.563l.475 10.292l.582 20.51l.068 12.088l-.328 16.464l-.538 14.355l-.919 16.24a550 550 0 0 1-1.4 16.922l-1.251 11.065c-1.16 9.025-2.62 17.435-4.46 24.302c-4.928 18.442-19.37 32.856-37.738 37.731c-8.372 2.241-23.088 3.918-40.426 5.173l-13.436.864l-14.07.719l-21.53.836l-14.125.415l-37.451.708l-30.92.173l-28.322-.28l-25.721-.505l-16.942-.48l-23.079-.894l-17.848-.95l-11.27-.768l-10.514-.883q-2.517-.237-4.907-.488l-8.978-1.074c-5.578-.76-10.293-1.612-13.859-2.566c-18.346-4.875-32.81-19.29-37.717-37.73c-2.57-9.615-4.398-22.254-5.697-35.368l-.99-11.297l-.76-11.173l-.563-10.692l-.537-14.355l-.329-16.465v-6.904l.328-16.418l.537-14.317l.562-10.666l.761-11.148l.99-11.274c1.3-13.089 3.127-25.71 5.697-35.324c4.907-18.442 19.37-32.856 37.717-37.73c3.566-.955 8.281-1.806 13.86-2.567l8.977-1.073q2.39-.252 4.907-.488l10.515-.884l11.27-.767l17.847-.951l12.215-.512l27.806-.862l30.284-.568zm22.2 42.587H250.91l-22.01.189l-23.526.403l-24.141.646l-16.858.623l-22.461 1.148l-14.399 1.003l-8.26.721l-7.08.754q-1.615.19-3.07.386l-5.138.786c-1.483.264-2.731.53-3.73.798c-3.588.953-6.478 3.841-7.455 7.513c-2.218 8.297-3.913 20.75-5.123 35.077l-.92 12.685l-.687 13.283a786 786 0 0 0-.258 6.766l-.348 13.582l-.093 6.736v6.499l.084 6.404l.314 12.886l.511 12.777l.713 12.406l.919 11.778c1.193 13.273 2.817 24.734 4.901 32.532c.964 3.624 3.854 6.512 7.511 7.484l1.671.397l4.426.788l5.793.773l7.065.75l8.243.72l9.326.679l15.816.925l17.723.786l10.742.378l24.224.65l23.542.403l27.221.204l17.148-.096l25.7-.353c8.78-.164 17.71-.375 26.6-.641l19.285-.672l16.912-.787l15.065-.912l12.939-1.01l10.533-1.088l5.548-.755q1.231-.19 2.3-.384l3.604-.776c3.595-.955 6.485-3.842 7.471-7.536c2.38-8.882 4.16-22.563 5.386-38.255l.816-12.103q.179-3.099.331-6.253l.512-12.744l.314-12.846l.105-9.5l-.104-9.484l-.314-12.845l-.512-12.737l-.714-12.37c-1.224-18.151-3.145-34.193-5.827-44.204a10.66 10.66 0 0 0-7.551-7.53c-.963-.258-2.16-.515-3.577-.77l-4.9-.759l-6.14-.74l-7.296-.715l-8.369-.682l-14.381-.946l-10.685-.568l-17.466-.741a2124 2124 0 0 0-26.62-.8l-26.243-.491z"></svg:path><svg:path d="M212.352 319.061V192.938l111.531 62.956z"></svg:path></svg:g>`,
})
export class IxYoutubeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixYoutubeFilledIcon],svg[ix-youtube-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256.972 106.668c12.12.02 134.11.444 165.706 8.901c18.368 4.876 32.81 19.29 37.738 37.731c8.56 31.948 8.903 97.106 8.917 102.268v.653c-.014 5.177-.356 70.53-8.917 102.479c-4.928 18.441-19.37 32.855-37.738 37.73c-32.594 8.725-161.381 8.9-166.52 8.903h-.316c-5.14-.003-133.947-.178-166.562-8.903c-18.346-4.875-32.81-19.289-37.717-37.73c-8.54-31.949-8.882-97.302-8.896-102.48v-.652c.014-5.162.356-70.32 8.896-102.268c4.907-18.441 19.37-32.855 37.717-37.73c31.616-8.458 153.627-8.881 165.749-8.902Zm-44.62 86.27v126.123l111.53-63.167z"></svg:path>`,
})
export class IxYoutubeFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixZoneIcon],svg[ix-zone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.56 318.381L138.49 352L256 420.032L373.51 352l-58.07-33.619l21.335-36.95L458.667 352L256 469.333L53.334 352l121.891-70.569z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m231.367 335.999l6.158 10.667L256 378.667l18.475-32.001l6.159-10.667c26.635-46.132 66.14-114.553 72.379-125.326C362.56 194.187 368 175.07 368 154.667c0-61.856-50.144-112-112-112s-112 50.144-112 112c0 20.403 5.44 39.52 14.987 56.006c6.239 10.773 45.745 79.194 72.38 125.326M256 293.333c-25.12-43.508-54.745-94.811-60.09-104.042Zm0 0c25.121-43.509 54.747-94.814 60.091-104.042c5.874-10.144 9.242-21.908 9.242-34.624c0-38.292-31.041-69.334-69.333-69.334s-69.333 31.042-69.333 69.334c0 12.716 3.368 24.48 9.243 34.624" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M293.333 149.333c0 20.619-16.714 37.334-37.333 37.334c-20.618 0-37.333-16.715-37.333-37.334C218.667 128.715 235.382 112 256 112c20.619 0 37.333 16.715 37.333 37.333"></svg:path>`,
})
export class IxZoneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixZoomInIcon],svg[ix-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.334 42.667C307.435 42.667 384 119.232 384 213.334c0 39.381-13.546 75.584-36.01 104.469l121.3 121.323l-30.165 30.165L317.803 347.99C288.918 370.454 252.715 384 213.333 384c-94.1 0-170.666-76.565-170.666-170.666c0-94.102 76.565-170.667 170.667-170.667m0 42.667c-70.592 0-128 57.408-128 128s57.408 128 128 128s128-57.408 128-128s-57.408-128-128-128M234.667 128v64h64v42.667h-64v64H192v-64h-64V192h64v-64z"></svg:path>`,
})
export class IxZoomInIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixZoomOutIcon],svg[ix-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.334 42.667C307.435 42.667 384 119.232 384 213.334c0 39.381-13.546 75.584-36.01 104.469l121.3 121.323l-30.165 30.165L317.803 347.99C288.918 370.454 252.715 384 213.333 384c-94.1 0-170.666-76.565-170.666-170.666c0-94.102 76.565-170.667 170.667-170.667m0 42.667c-70.592 0-128 57.408-128 128s57.408 128 128 128s128-57.408 128-128s-57.408-128-128-128M298.667 192v42.667H128V192z"></svg:path>`,
})
export class IxZoomOutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ixZoomSelectionIcon],svg[ix-zoom-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M266.667 170.667C331.468 170.667 384 223.199 384 288c0 24.693-7.628 47.605-20.656 66.507l81.218 81.218l-30.17 30.17l-81.218-81.218c-18.903 13.028-41.814 20.656-66.507 20.656c-64.802 0-117.334-52.532-117.334-117.333s52.532-117.333 117.334-117.333m0 42.666C225.429 213.333 192 246.763 192 288s33.43 74.667 74.667 74.667s74.666-33.43 74.666-74.667s-33.43-74.667-74.666-74.667m181.333 64v64h-42.667v-64zm-341.333 0v21.334H128v42.666H64v-64zm0-106.666v64H64v-64zm341.333 0v64h-42.667v-64zM448 64v64h-42.667v-21.333H384V64zm-320 0v42.667h-21.333V128H64V64zm213.333 0v42.667h-64V64zm-106.666 0v42.667h-64V64z"></svg:path>`,
})
export class IxZoomSelectionIcon {
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
