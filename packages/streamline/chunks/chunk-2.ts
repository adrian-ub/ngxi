import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFragileSolidIcon],svg[streamline-fragile-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.048 0H3.254a1.136 1.136 0 0 0-1.125 1.001L1.937 4.5c0 2.588 1.736 4.1 4.063 4.431v3.045H4.165a1 1 0 1 0 0 2h5.67a1 1 0 1 0 0-2H8V8.93c2.327-.33 4.063-1.843 4.063-4.431L11.871 1a1.136 1.136 0 0 0-1.125-1H7.534l-.009.014L6.318 1.89L7.91 3.282c.224.196.28.523.131.781l-1 1.747a.625.625 0 0 1-1.084-.62l.745-1.303l-1.614-1.41a.625.625 0 0 1-.115-.81z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFragileSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFrontCameraIcon],svg[streamline-front-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.96 6.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.083.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M4.555 8.857c.477.485 1.318.929 2.443.929s1.967-.444 2.444-.929"></svg:path><svg:path d="M13.5 4.5a1 1 0 0 0-1-1h-2L9 1.5H5l-1.5 2h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1z"></svg:path></svg:g>`,
})
export class StreamlineFrontCameraIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineFrontCameraSolidIcon],svg[streamline-front-camera-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.6 1.2A.5.5 0 0 1 5 1h4a.5.5 0 0 1 .4.2L10.75 3h1.75A1.5 1.5 0 0 1 14 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 11.5v-7A1.5 1.5 0 0 1 1.5 3h1.75zM4.75 7a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M5 8.42a.625.625 0 1 0-.89.876c.594.604 1.596 1.115 2.888 1.115c1.293 0 2.295-.51 2.89-1.115a.625.625 0 1 0-.892-.877c-.358.365-1.039.742-1.998.742c-.958 0-1.639-.377-1.997-.742Zm5-2.17a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFrontCameraSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGalaxy1Icon],svg[streamline-galaxy-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.013 9c3 0 5.713-2 5.713-5.083M7.013 5c-3 0-5.739 2-5.739 5.083"></svg:path><svg:path d="M5 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M8.739 7.989C10.239 5.39 9.863 2.042 7.193.5M5.274 5.989c-1.5 2.598-1.137 5.97 1.533 7.511"></svg:path><svg:path d="M8.726 5.989c-1.5-2.598-4.589-3.947-7.259-2.406m3.794 4.406c1.5 2.598 4.602 3.97 7.272 2.428"></svg:path></svg:g>`,
})
export class StreamlineGalaxy1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGalaxy1SolidIcon],svg[streamline-galaxy-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.558.198a.75.75 0 1 0-.75 1.3c1.249.72 1.888 1.977 1.917 3.346c-1.714-2.18-4.668-3.269-7.337-1.728a.75.75 0 0 0 .75 1.3c1.251-.723 2.661-.647 3.863.015C3.26 4.83.83 6.84.83 9.918a.75.75 0 1 0 1.5 0c0-1.434.769-2.613 1.939-3.324c-1.016 2.57-.489 5.672 2.172 7.208a.75.75 0 1 0 .75-1.3c-1.242-.716-1.878-1.972-1.909-3.34C7 11.326 9.95 12.42 12.611 10.884a.75.75 0 0 0-.75-1.3c-1.24.717-2.644.641-3.844-.014c2.74-.399 5.151-2.412 5.151-5.488a.75.75 0 0 0-1.5 0c0 1.442-.768 2.624-1.94 3.334c1.032-2.575.497-5.677-2.171-7.218ZM7 8.001A1.001 1.001 0 1 0 7 6a1.001 1.001 0 0 0 0 2Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGalaxy1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGalaxy2Icon],svg[streamline-galaxy-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.987 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M7 9c3.5 0 6.5-2 6.5-4.5c0-3-6.5-3.5-9-2"></svg:path><svg:path d="M7 5C3.5 5 .5 7 .5 9.5c0 3 6.5 3.5 9 2"></svg:path></svg:g>`,
})
export class StreamlineGalaxy2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGalaxy2SolidIcon],svg[streamline-galaxy-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.556 2.35c.749.514 1.317 1.278 1.317 2.3c0 1.498-.899 2.76-2.148 3.615c-1.253.858-2.932 1.365-4.712 1.365h-.012a2.63 2.63 0 0 1-2.538-3.323a6 6 0 0 0-1.315.666c-.984.673-1.495 1.525-1.495 2.377c0 .389.195.74.666 1.064c.486.333 1.204.585 2.052.722c.84.135 1.753.15 2.588.047c.846-.103 1.554-.317 2.018-.596a.75.75 0 0 1 .772 1.286c-.71.427-1.647.682-2.608.8a11 11 0 0 1-3.009-.056c-.972-.157-1.929-.463-2.662-.967c-.75-.514-1.317-1.279-1.317-2.3c0-1.498.899-2.76 2.148-3.615c1.247-.854 2.916-1.36 4.686-1.365h.04a2.63 2.63 0 0 1 2.509 3.333c.5-.18.953-.409 1.342-.676c.984-.673 1.495-1.525 1.495-2.377c0-.389-.195-.74-.666-1.064c-.485-.333-1.204-.585-2.052-.722a9.5 9.5 0 0 0-2.588-.047c-.845.103-1.554.317-2.018.596a.75.75 0 0 1-.772-1.286c.71-.427 1.647-.682 2.609-.8a11 11 0 0 1 3.008.056c.973.157 1.929.463 2.662.967M6.993 5.87h.011a1.13 1.13 0 1 1-.011 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGalaxy2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGameboyIcon],svg[streamline-gameboy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 10.5a.5.5 0 1 0 1 0a.5.5 0 1 0-1 0"></svg:path><svg:path d="M11.938 12.219a1 1 0 0 1-1 1H3.061a1 1 0 0 1-1-1V1.78a1 1 0 0 1 1-1h7.876a1 1 0 0 1 1 1z"></svg:path><svg:path d="M10.031 7.54H3.969V2.494h6.062zm-4.897 3.812V9.647m-.853.853h1.706"></svg:path></svg:g>`,
})
export class StreamlineGameboyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGameboySolidIcon],svg[streamline-gameboy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.558 14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H2.442a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1zM9.412 7.608a1 1 0 0 0 1-1V2.926a1 1 0 0 0-1-1H4.59a1 1 0 0 0-1 1v3.682a1 1 0 0 0 1 1zm-5.138 3.936a.625.625 0 1 0 1.25 0v-.334h.335a.625.625 0 1 0 0-1.25h-.335v-.335a.625.625 0 1 0-1.25 0v.335H3.94a.625.625 0 1 0 0 1.25h.334zm5.226-.073a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGameboySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGasStationFuelPetroleumIcon],svg[streamline-gas-station-fuel-petroleum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 3.5v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2m0 1h8m-8 3h8m0 4h3a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2v0a1 1 0 0 1-1-1V4l3-3"></svg:path><svg:path d="m10.5 5.5l2-.5V2M6 10v1"></svg:path></svg:g>`,
})
export class StreamlineGasStationFuelPetroleumIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGasStationFuelPetroleumSolidIcon],svg[streamline-gas-station-fuel-petroleum-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.723.859a.625.625 0 0 1 0 .883l-.793.793v2.17a.625.625 0 0 1-.473.606l-1.479.37v.987a.35.35 0 0 0 .351.351a2.577 2.577 0 1 1 0 5.154H8.901v.327a1.5 1.5 0 0 1-1.5 1.5H1.594a1.5 1.5 0 0 1-1.5-1.5V3.788a2.5 2.5 0 0 1 2.5-2.5H6.4a2.5 2.5 0 0 1 2.5 2.5v7.135h2.428a1.327 1.327 0 1 0 0-2.654a1.6 1.6 0 0 1-1.6-1.6V4.227c0-.165.065-.324.182-.442L12.84.86a.625.625 0 0 1 .884 0ZM1.093 7.144V4.881h6.808v2.263H1.094Zm4.87 2.316c.345 0 .625.28.625.625v.976a.625.625 0 1 1-1.25 0v-.976c0-.345.28-.625.625-.625" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGasStationFuelPetroleumSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGenderEqualityIcon],svg[streamline-gender-equality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.113.86h2.69v2.69M11.802.86L8.645 4.016M6.424 9.363v4.047M4.63 11.617h3.587M3.299 6.238a3.125 3.125 0 1 0 6.25 0a3.125 3.125 0 1 0-6.25 0m2.011-.835h2.227M5.31 7.073h2.227"></svg:path>`,
})
export class StreamlineGenderEqualityIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGenderEqualitySolidIcon],svg[streamline-gender-equality-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.335.764a.75.75 0 0 1 .75-.75h2.672a.75.75 0 0 1 .75.75v2.673a.75.75 0 1 1-1.5 0v-.863l-1.39 1.39a3.856 3.856 0 0 1-2.454 5.927v.813h1.031a.75.75 0 0 1 0 1.5H7.163v1.031a.75.75 0 1 1-1.5 0v-1.031H4.63a.75.75 0 1 1 0-1.5h1.032V9.89a3.856 3.856 0 1 1 2.892-6.987l1.39-1.39h-.86a.75.75 0 0 1-.75-.75ZM4.448 4.962c0-.345.28-.625.625-.625h2.68a.625.625 0 1 1 0 1.25h-2.68a.625.625 0 0 1-.625-.625m.625 1.67a.625.625 0 0 0 0 1.25h2.68a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGenderEqualitySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGifFormatIcon],svg[streamline-gif-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.438 4.656v4.289s0 2-2 2H2.563s-2 0-2-2V4.656s0-2 2-2h8.875s2 0 2 2M6 5.045h1.756m0 3.51H6m.878-3.51v3.51"></svg:path><svg:path d="M3.758 7.093h.878v.585a.88.88 0 0 1-.878.878h-.585a.88.88 0 0 1-.878-.878V5.923c0-.485.393-.878.878-.878h.585a.88.88 0 0 1 .828.585m4.799 2.926v-3.51h2.34m-2.34 1.608h2.047"></svg:path></svg:g>`,
})
export class StreamlineGifFormatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGifFormatSolidIcon],svg[streamline-gif-format-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.438 2.156a2.5 2.5 0 0 1 2.5 2.5v4.289a2.5 2.5 0 0 1-2.5 2.5H2.562a2.5 2.5 0 0 1-2.5-2.5V4.656a2.5 2.5 0 0 1 2.5-2.5zM7.806 9.153a.5.5 0 0 0 0-1H7.38V5.449h.426a.5.5 0 1 0 0-1H5.954a.5.5 0 1 0 0 1h.426v2.704h-.426a.5.5 0 1 0 0 1zM2.269 5.875c0-.236.19-.426.426-.426h.617c.185 0 .344.117.402.284a.5.5 0 0 0 .943-.334a1.43 1.43 0 0 0-1.345-.95h-.617c-.787 0-1.426.638-1.426 1.426v1.852c0 .787.639 1.426 1.426 1.426h.617c.788 0 1.426-.639 1.426-1.426v-.618a.5.5 0 0 0-.5-.5h-.926a.5.5 0 1 0 0 1h.426v.118c0 .235-.19.426-.426.426h-.617a.426.426 0 0 1-.426-.426zm6.993-.926a.5.5 0 0 1 .5-.5h2.469a.5.5 0 1 1 0 1h-1.97v.697h1.661a.5.5 0 0 1 0 1h-1.66v1.507a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGifFormatSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGiftIcon],svg[streamline-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 3h-11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m0 4v5.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V7M7 3v10.5m3-13L7 3L4 .5"></svg:path>`,
})
export class StreamlineGiftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGift2Icon],svg[streamline-gift-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.276 12.235V6.393H1.724v5.842a1 1 0 0 0 1 1h8.552a1 1 0 0 0 1-1M7 13.234V6.391m6.138-1.599v.6a1 1 0 0 1-1 1H1.862a1 1 0 0 1-1-1v-.6a1 1 0 0 1 1-1h10.276a1 1 0 0 1 1 1M7 3.792C7 2.917 5.98.875 4.448.875c-2.491 0-1.584 2.917-.391 2.917m2.943 0C7 2.917 8.02.875 9.552.875c2.491 0 1.584 2.917.391 2.917"></svg:path>`,
})
export class StreamlineGift2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGift2SolidIcon],svg[streamline-gift-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.956 3.391H3.449a1.4 1.4 0 0 1-.277-.712c-.023-.256.04-.434.139-.543c.091-.101.316-.257.861-.257c.497 0 1.008.34 1.442.94c.137.19.25.386.342.572m-4.279-.58q.028.295.115.58h-.594a1 1 0 0 0-1 1v.882a1 1 0 0 0 1 1h11.604a1 1 0 0 0 1-1v-.882a1 1 0 0 0-1-1h-.594q.088-.285.115-.58c.048-.552-.072-1.182-.52-1.68C11.348.628 10.663.38 9.828.38c-1.2 0-2.103.792-2.659 1.564a5 5 0 0 0-.169.25a5 5 0 0 0-.17-.25C6.276 1.17 5.372.379 4.173.379c-.836 0-1.52.248-1.975.753c-.449.497-.568 1.127-.52 1.68Zm6.367.58h2.507a1.4 1.4 0 0 0 .277-.712c.023-.256-.04-.434-.139-.543c-.091-.101-.316-.257-.861-.257c-.497 0-1.008.34-1.442.94c-.137.19-.25.386-.342.572M1.198 7.523h5.177v6.332H2.154a1 1 0 0 1-1-1V7.523zm10.648 6.332H7.625V7.523h5.221v5.332a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGift2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGiftSolidIcon],svg[streamline-gift-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M4.657.626a.75.75 0 1 0-.804 1.267l.958.607H1.5C.778 2.5 0 2.989 0 3.806v1.416c0 .762.677 1.24 1.354 1.3l-.017.005h5.038V3.884h1.25v2.643h5.038l-.018-.006C13.324 6.461 14 5.984 14 5.222V3.806c0-.817-.778-1.306-1.5-1.306H9.189l.958-.607A.75.75 0 0 0 9.344.626L7 2.112zM13 7.777H7.625V14H11.5a1.5 1.5 0 0 0 1.5-1.5zm-6.625 0H1V12.5A1.5 1.5 0 0 0 2.5 14h3.875z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M9.197 3.38h-4.5"></svg:path></svg:g>`,
})
export class StreamlineGiftSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGiveGiftIcon],svg[streamline-give-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 2.5h-7v5h7zm-3.5 0v5M8.5.5l1.5 2l1.5-2M.5 11l2.444 2.036a2 2 0 0 0 1.28.463h6.442c.46 0 .834-.373.834-.833c0-.92-.746-1.667-1.667-1.667H5.354"></svg:path><svg:path d="m3.5 10l.75.75a1.06 1.06 0 0 0 1.5-1.5L4.586 8.085A2 2 0 0 0 3.17 7.5H.5"></svg:path></svg:g>`,
})
export class StreamlineGiveGiftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGiveGiftSolidIcon],svg[streamline-give-gift-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.03.22a.75.75 0 1 0-1.06 1.06l.72.72H6.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2.875V3.5a.625.625 0 1 1 1.25 0V8H13.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-2.19l.72-.72A.75.75 0 0 0 10.97.22l-.97.97zM1.843 7H0v4l1.828 1.828A4 4 0 0 0 4.657 14H10.5a1.5 1.5 0 0 0 0-3H7.723a2.11 2.11 0 0 1-3.515.892l-1.45-1.45a.625.625 0 1 1 .884-.884l1.45 1.45a.86.86 0 0 0 1.306-1.11L4.672 8.172A4 4 0 0 0 1.843 7" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGiveGiftSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGlassesIcon],svg[streamline-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 9h-5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1zm8 0h-5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1zm-8 0h3m5 0V3a2 2 0 0 0-2-2h-1M.5 9V3a2 2 0 0 1 2-2h1"></svg:path>`,
})
export class StreamlineGlassesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGlassesSolidIcon],svg[streamline-glasses-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.615 1a.75.75 0 0 1 .75-.75h.962A2.673 2.673 0 0 1 14 2.923v8.962a1.71 1.71 0 0 1-1.711 1.711H9.404a1.71 1.71 0 0 1-1.712-1.711V9.75H6.308v2.135a1.71 1.71 0 0 1-1.712 1.711H1.712A1.71 1.71 0 0 1 0 11.885V2.923A2.673 2.673 0 0 1 2.673.25h.962a.75.75 0 0 1 0 1.5h-.962A1.173 1.173 0 0 0 1.5 2.923V8.25h11V2.923a1.173 1.173 0 0 0-1.173-1.173h-.962a.75.75 0 0 1-.75-.75M1.5 9.75v2.135a.21.21 0 0 0 .212.211h2.884a.21.21 0 0 0 .212-.211V9.75zm7.692 0v2.135a.21.21 0 0 0 .212.211h2.885a.21.21 0 0 0 .211-.211V9.75z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGlassesSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGlobalLearningIcon],svg[streamline-global-learning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.366 7.318a5.506 5.506 0 1 0-7.549 3.736M.512 6.006h11.011"></svg:path><svg:path d="M4.382 8.547a9.5 9.5 0 0 1-.484-2.541A9.5 9.5 0 0 1 6.016.5a9.5 9.5 0 0 1 2.117 5.506A10 10 0 0 1 8.02 7.06m1.438 1.118l4.03 1.746l-4.03 1.746L5.43 9.924l4.03-1.746Z"></svg:path><svg:path d="m7.257 10.72l.004 1.9s.665.88 2.197.88s2.2-.88 2.2-.88v-1.9m-6.229 2.275V9.924"></svg:path></svg:g>`,
})
export class StreamlineGlobalLearningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGlobalLearningSolidIcon],svg[streamline-global-learning-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 5.368A6.01 6.01 0 0 1 5.58 0a.6.6 0 0 0-.093.093a10.13 10.13 0 0 0-2.209 5.275zM3.652 8.91q0 .066.005.131v2.496A6.01 6.01 0 0 1 0 6.618h3.278c.073.66.21 1.31.41 1.939a2 2 0 0 0-.036.352Zm.885-2.29h1.75l-1.58.684l-.051.023a9 9 0 0 1-.12-.708Zm7.41-1.25H8.665A10.13 10.13 0 0 0 6.457.092A.6.6 0 0 0 6.363 0a6.01 6.01 0 0 1 5.584 5.368Zm-7.41 0h2.87a8.9 8.9 0 0 0-1.435-3.831a8.9 8.9 0 0 0-1.435 3.83ZM9.65 6.71a.55.55 0 0 0-.434 0L5.242 8.432a.6.6 0 0 0-.116.068a.68.68 0 0 0-.349.596v3.028a.682.682 0 0 0 1.365 0v-2.3l3.074 1.331c.139.06.296.06.434 0l3.974-1.721a.546.546 0 0 0 0-1.002zm-2.933 4.51l2.024.877a1.74 1.74 0 0 0 1.383 0l2.024-.877v1.358c0 .12-.038.236-.11.33l-.435-.33l.434.331l-.001.002l-.002.002l-.004.006l-.012.015a2 2 0 0 1-.165.176c-.11.104-.27.237-.483.368c-.431.264-1.071.514-1.937.514s-1.506-.25-1.936-.515a3 3 0 0 1-.61-.5l-.037-.044l-.012-.015l-.004-.006l-.002-.002v-.002H6.83l.435-.33l-.435.33a.55.55 0 0 1-.11-.329l-.004-1.36Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGlobalLearningSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGmailIcon],svg[streamline-gmail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.743 12.003h2.65V3.088l-.812-.52C2.406 1.816.86 2.658.86 4.05v7.074c0 .486.396.88.884.88Z"></svg:path><svg:path d="M.86 4.05v1.176l3.533 2.263l2.65 1.698l2.65-1.698l3.534-2.263V4.049c0-1.392-1.547-2.234-2.723-1.48l-.81.52l-2.651 1.697l-2.65-1.698l-.812-.52C2.406 1.816.86 2.658.86 4.05"></svg:path><svg:path d="M9.693 12.003h2.65a.88.88 0 0 0 .883-.88V4.049c0-1.392-1.546-2.234-2.722-1.48l-.811.52z"></svg:path></svg:g>`,
})
export class StreamlineGmailIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGmailSolidIcon],svg[streamline-gmail-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.086 6.787v4.349a.92.92 0 0 0 .922.918h2.765v-2.88zm8.976 1.74L7.043 9.834l-2.02-1.307v-4.94l2.02 1.296l2.02-1.296zm1.25.647v2.88h2.766a.92.92 0 0 0 .922-.918v-4.35l-3.687 2.388ZM14 5.33l-3.688 2.387V2.784l.848-.544c1.226-.785 2.84.092 2.84 1.546zM3.773 2.784v4.934L.086 5.33V3.786c0-1.454 1.614-2.331 2.84-1.546z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGmailSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGoldIcon],svg[streamline-gold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.66 9.3a1 1 0 0 0-1-.8H2.32a1 1 0 0 0-1 .8L.5 13.5h6zm7 0a1 1 0 0 0-1-.8H9.32a1 1 0 0 0-1 .8l-.82 4.2h6z"></svg:path><svg:path d="m10 8.5l-.84-4.2a1 1 0 0 0-1-.8H5.82a1 1 0 0 0-1 .8L4 8.5m.68 0h4.64"></svg:path></svg:g>`,
})
export class StreamlineGoldIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGoldSolidIcon],svg[streamline-gold-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.058 1.248h-2.08A1.39 1.39 0 0 0 4.59 2.362v.004l-.733 3.75a.5.5 0 0 0 .491.596h5.357a.5.5 0 0 0 .49-.598l-.75-3.75v-.002a1.39 1.39 0 0 0-1.387-1.115Zm-3.795 6.85h-2.08A1.39 1.39 0 0 0 .796 9.214l-.001.004l-.732 3.75a.5.5 0 0 0 .49.596h5.358a.5.5 0 0 0 .49-.598l-.75-3.75v-.002A1.39 1.39 0 0 0 4.263 8.1Zm5.51 0h2.08a1.39 1.39 0 0 1 1.387 1.115v.002l.75 3.75a.5.5 0 0 1-.49.598H8.143a.5.5 0 0 1-.49-.596l.731-3.75l.001-.004a1.39 1.39 0 0 1 1.387-1.114Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGoldSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGoodHealthAndWellBeingIcon],svg[streamline-good-health-and-well-being-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.097 12.468l-2.773-2.52c-1.53-1.522.717-4.423 2.773-2.045c2.104-2.33 4.303.57 2.773 2.045z"></svg:path><svg:path d="M.621 6.088h1.367l1.823 3.19l4.101-7.747l1.823 3.646"></svg:path></svg:g>`,
})
export class StreamlineGoodHealthAndWellBeingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGoodHealthAndWellBeingSolidIcon],svg[streamline-good-health-and-well-being-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.51 1.374a.75.75 0 0 0-1.29-.016L4.28 7.79L2.903 5.71a.75.75 0 0 0-.626-.336H.76a.75.75 0 0 0 0 1.5h1.115L3.678 9.6a.75.75 0 0 0 1.265-.022l3.899-6.364l1.394 2.41a.75.75 0 0 0 1.299-.751l-2.026-3.5Zm.818 6.965c-.454-.4-.937-.618-1.422-.657a1.98 1.98 0 0 0-1.559.582c-.76.748-1.012 2.13-.042 3.096l.017.015l2.662 2.42a.5.5 0 0 0 .673 0l2.662-2.42l.01-.01c.978-.941.736-2.317-.016-3.065a2 2 0 0 0-1.552-.593c-.485.033-.972.241-1.433.632" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGoodHealthAndWellBeingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGoogleIcon],svg[streamline-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.36 5.83H7.87a.51.51 0 0 0-.51.52v1.41a.51.51 0 0 0 .51.51h2.29a2.75 2.75 0 0 1-3 2.79c-2.24 0-3.32-1.9-3.32-4.06S5 2.94 7.16 2.94a4.07 4.07 0 0 1 2.64.86a.49.49 0 0 0 .72-.22l.63-1.44a.51.51 0 0 0-.15-.63a7.07 7.07 0 0 0-3.8-1C3.56.5 1.08 3.33 1.08 7s2.49 6.5 6.08 6.5s5.76-2.56 5.76-6c0-1.1-.44-1.67-1.56-1.67"></svg:path>`,
})
export class StreamlineGoogleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGoogleDriveIcon],svg[streamline-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.997 12.536L.742 8.93L4.8 1.715h4.51l4.057 7.214l-2.254 3.607zM4.798 1.715l4.51 7.214m4.06.003H5.023m-2.026 3.604l4.058-7.214"></svg:path>`,
})
export class StreamlineGoogleDriveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGoogleDriveSolidIcon],svg[streamline-google-drive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.154 1.92L.11 9.11l1.845 2.951l1.678-2.984L3.676 9l2.323-4.13zM7.54 4.508a1 1 0 0 0-.07-.112L5.456 1.173h4.079l4.209 7.482h-3.611zm-.635 1.813L5.59 8.655h2.773l-1.46-2.334Zm-2.158 3.835l-1.643 2.922h8.415l1.827-2.922z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGoogleDriveSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGoogleSolidIcon],svg[streamline-google-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.7 5.735H7.55a.55.55 0 0 0-.55.56v1.52a.55.55 0 0 0 .55.55h2.857a2.963 2.963 0 0 1-3.234 3.006c-2.416 0-3.58-2.048-3.58-4.375s1.25-4.375 3.58-4.375a4.4 4.4 0 0 1 2.846.926a.528.528 0 0 0 .776-.237l.68-1.551a.55.55 0 0 0-.162-.68A7.63 7.63 0 0 0 7.216.003C3.29-.008.617 3.041.617 6.996C.617 10.95 3.302 14 7.173 14s6.21-2.759 6.21-6.465c0-1.186-.474-1.8-1.682-1.8Z"></svg:path>`,
})
export class StreamlineGoogleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraduationCapIcon],svg[streamline-graduation-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m7 1.367l6.5 2.817L7 7L.5 4.184z"></svg:path><svg:path d="m3.45 5.469l.006 3.064S4.529 9.953 7 9.953s3.55-1.42 3.55-1.42l-.001-3.064m-8.854 5.132v-5.89m.001 8.282a1.196 1.196 0 1 0 0-2.392a1.196 1.196 0 0 0 0 2.392"></svg:path></svg:g>`,
})
export class StreamlineGraduationCapIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraduationCapSolidIcon],svg[streamline-graduation-cap-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.199.728a.5.5 0 0 0-.398 0l-6.5 2.817a.5.5 0 0 0 0 .917l.893.387v5.591a1.24 1.24 0 1 0 1.003 0V5.283L6.8 7.278a.5.5 0 0 0 .398 0l6.5-2.816a.5.5 0 0 0 0-.917zM2.956 9.353l-.005-2.38l3.353 1.452a1.75 1.75 0 0 0 1.391 0l3.354-1.453v2.38a.5.5 0 0 1-.101.303l-.399-.303l.398.303v.002l-.003.002l-.005.007l-.015.019l-.051.06a3 3 0 0 1-.186.191a4.4 4.4 0 0 1-.724.553c-.65.398-1.627.784-2.963.784s-2.313-.386-2.96-.785a4.3 4.3 0 0 1-.724-.552a3 3 0 0 1-.236-.252l-.015-.02l-.005-.006l-.002-.002v-.001c-.001-.001-.001-.001.398-.303l-.4.302a.5.5 0 0 1-.1-.3Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGraduationCapSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGramophoneIcon],svg[streamline-gramophone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.79 10.5C11.5 7 8 5 5.5 5l4-4.5s4 2 4 10m-12 0h12v2a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1M.5 8h6"></svg:path>`,
})
export class StreamlineGramophoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGramophoneSolidIcon],svg[streamline-gramophone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.724.053a.5.5 0 0 0-.598.115l-4 4.5A.5.5 0 0 0 5.5 5.5c1.13 0 2.526.458 3.67 1.334a5.6 5.6 0 0 1 1.62 1.919h3.144c-.243-3.1-1.117-5.179-2.018-6.53a7.8 7.8 0 0 0-1.47-1.67a4 4 0 0 0-.7-.488zM1.5 10h6.928l.058.003h5.509q.005.245.005.497v2a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5v-1A1.5 1.5 0 0 1 1.5 10M.986 7.25a.75.75 0 0 0 0 1.5H6.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGramophoneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphIcon],svg[streamline-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5.5v13h13"></svg:path><svg:path d="M3.5 6.5L6 9l4-6l3.5 2.5"></svg:path></svg:g>`,
})
export class StreamlineGraphIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphArrowDecreaseIcon],svg[streamline-graph-arrow-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 10.5h4v-4"></svg:path><svg:path d="M13.5 10.5L7.85 4.85a.5.5 0 0 0-.7 0l-2.3 2.3a.5.5 0 0 1-.7 0L.5 3.5"></svg:path></svg:g>`,
})
export class StreamlineGraphArrowDecreaseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphArrowDecreaseSolidIcon],svg[streamline-graph-arrow-decrease-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.898 3.222A1 1 0 1 0 .483 4.637l3.333 3.332l.007.007a1.457 1.457 0 0 0 2.039 0l.007-.007L7.57 6.268L9.917 8.75l-1.04 1.04a.75.75 0 0 0 .53 1.28h3.652a.75.75 0 0 0 .75-.75V6.67a.75.75 0 0 0-1.28-.53l-1.197 1.197l-2.704-2.86a1.457 1.457 0 0 0-2.066-.027v-.001l-.007.007l-1.713 1.712z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGraphArrowDecreaseSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphArrowIncreaseIcon],svg[streamline-graph-arrow-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 3.5h4v4"></svg:path><svg:path d="M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5"></svg:path></svg:g>`,
})
export class StreamlineGraphArrowIncreaseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphArrowIncreaseSolidIcon],svg[streamline-graph-arrow-increase-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.898 10.778A1 1 0 0 1 .483 9.363l3.333-3.332l.007-.007a1.457 1.457 0 0 1 2.039 0l.007.007L7.57 7.732L9.917 5.25l-1.04-1.04a.75.75 0 0 1 .53-1.28h3.652a.75.75 0 0 1 .75.75v3.652a.75.75 0 0 1-1.28.53l-1.197-1.198l-2.704 2.861a1.457 1.457 0 0 1-2.066.027l-.007-.007l-1.713-1.712z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGraphArrowIncreaseSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphBarDecreaseIcon],svg[streamline-graph-bar-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.24.5l11.5 5.23m-2.15.81l2.15-.81l-.8-2.16M1.25 6h1.5a.5.5 0 0 1 .5.5v7H.75v-7a.5.5 0 0 1 .5-.5m5 1.5h1.5a.5.5 0 0 1 .5.5v5.5h-2.5V8a.5.5 0 0 1 .5-.5m5 1.5h1.5a.5.5 0 0 1 .5.5v4h-2.5v-4a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class StreamlineGraphBarDecreaseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphBarDecreaseSolidIcon],svg[streamline-graph-bar-decrease-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.315.606a.75.75 0 0 1 .99-.38l8.591 3.828l.361-.795a.75.75 0 0 1 1.386.05l.8 2.16a.75.75 0 0 1-.438.963l-2.15.81a.75.75 0 0 1-.948-1.013l.368-.81l-8.58-3.822a.75.75 0 0 1-.38-.99ZM1.25 5.5a1 1 0 0 0-1 1v7a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5v-7a1 1 0 0 0-1-1zm4.293 1.793A1 1 0 0 1 6.25 7h1.5a1 1 0 0 1 1 1v5.5a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5V8a1 1 0 0 1 .293-.707M11.25 8.5a1 1 0 0 0-1 1v4a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5v-4a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGraphBarDecreaseSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphBarIncreaseIcon],svg[streamline-graph-bar-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.24 6.54l11.5-5.23M10.59.5l2.15.81l-.8 2.15m1.31 10.04h-2.5v-7a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5zm-5 0h-2.5V8a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5zm-5 0H.75v-4a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5z"></svg:path>`,
})
export class StreamlineGraphBarIncreaseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphBarIncreaseSolidIcon],svg[streamline-graph-bar-increase-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.997.22a.75.75 0 0 1 .819-.163l2.127.882a.75.75 0 0 1 .408.977l-.869 2.127a.75.75 0 0 1-1.386.006l-.343-.82L2.115 6.92a.75.75 0 1 1-.59-1.38l8.649-3.695l-.337-.805a.75.75 0 0 1 .16-.82m2.753 5.26a1 1 0 0 1 1 1v7a.5.5 0 0 1-.5.5h-2.5a.5.5 0 0 1-.5-.5v-7a1 1 0 0 1 1-1zM8.457 7.272a1 1 0 0 0-.707-.292h-1.5a1 1 0 0 0-1 1v5.5a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5v-5.5a1 1 0 0 0-.293-.708M2.75 8.48a1 1 0 0 1 1 1v4a.5.5 0 0 1-.5.5H.75a.5.5 0 0 1-.5-.5v-4a1 1 0 0 1 1-1z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGraphBarIncreaseSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphDotIcon],svg[streamline-graph-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.643.643v12.714h12.714"></svg:path><svg:path d="M4.581 3.854a1.776 1.776 0 1 1 0 3.552a1.776 1.776 0 0 1 0-3.552m7-2.968a1.776 1.776 0 1 1 0 3.551a1.776 1.776 0 0 1 0-3.551m-2.469 6.52a1.776 1.776 0 1 1 0 3.552a1.776 1.776 0 0 1 0-3.552M.643 9.424l2.534-2.706m2.953-.202L7.755 8.03m2.141-.452l1.171-3.219"></svg:path></svg:g>`,
})
export class StreamlineGraphDotIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphDotSolidIcon],svg[streamline-graph-dot-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5.75a.75.75 0 0 0-1.5 0v12.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 0-1.5H1.5V9.72l2.202-2.352c.291.166.628.26.986.26c.454 0 .872-.15 1.208-.406L7.319 8.55a2.002 2.002 0 1 0 3.387-.71l.002-.005l1.159-3.183a1.999 1.999 0 1 0-1.437-.438l-1.081 2.97a2.03 2.03 0 0 0-1.057.223L6.75 5.967a1 1 0 0 0-.08-.065a1.998 1.998 0 1 0-3.902.274l-.03.029L1.5 7.525z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGraphDotSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGraphSolidIcon],svg[streamline-graph-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.574.898a.75.75 0 0 0-1.5 0v12.204c0 .414.336.75.75.75h12.204a.75.75 0 1 0 0-1.5H1.573zm8.647 1.533a1 1 0 0 0-1.413.26L5.73 7.307L4.246 5.823A1 1 0 1 0 2.83 7.238l2.347 2.346a1 1 0 0 0 1.54-.152l3.181-4.773l2.446 1.747a1 1 0 0 0 1.162-1.628z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGraphSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGroupMeetingCallIcon],svg[streamline-group-meeting-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.48 10.533a1.141 1.141 0 1 0 0-2.283a1.141 1.141 0 0 0 0 2.283m-2.055 2.946a2.06 2.06 0 0 1 .267-.993a2.08 2.08 0 0 1 1.788-1.045a2.08 2.08 0 0 1 1.787 1.045c.172.303.263.645.267.993m4.991-2.946a1.141 1.141 0 1 0 0-2.283a1.141 1.141 0 0 0 0 2.283M8.47 13.479a2.06 2.06 0 0 1 .267-.993a2.08 2.08 0 0 1 1.787-1.045a2.06 2.06 0 0 1 2.055 2.037m-5.58-9.431a1.065 1.065 0 1 0 0-2.13a1.065 1.065 0 0 0 0 2.13M5.008 6.718c.003-.337.092-.668.258-.962A2.01 2.01 0 0 1 7 4.743c.71.001 1.383.394 1.733 1.013c.166.294.255.625.259.962"></svg:path><svg:path d="M11.782.545H2.218a.72.72 0 0 0-.718.718V6c0 .397.322.718.718.718h9.564A.72.72 0 0 0 12.5 6V1.263a.72.72 0 0 0-.718-.718"></svg:path></svg:g>`,
})
export class StreamlineGroupMeetingCallIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineGroupMeetingCallSolidIcon],svg[streamline-group-meeting-call-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.218 0C1.545 0 1 .545 1 1.218v4.57c0 .674.545 1.22 1.218 1.22h9.564c.673 0 1.218-.546 1.218-1.22v-4.57C13 .545 12.455 0 11.782 0zm2.703 9.441a1.441 1.441 0 1 1-2.883 0a1.441 1.441 0 0 1 2.883 0m5.604 1.442a1.441 1.441 0 1 0 0-2.883a1.441 1.441 0 0 0 0 2.883m-7.046.778a2.336 2.336 0 0 0-2.303 1.947c-.035.212.143.388.358.388h3.891c.215 0 .393-.176.358-.388a2.336 2.336 0 0 0-2.304-1.947m4.743 1.947a2.336 2.336 0 0 1 4.607 0c.035.212-.143.388-.358.388H8.58c-.214 0-.392-.176-.357-.388ZM8.123 2.121a1.123 1.123 0 1 1-2.246 0a1.123 1.123 0 0 1 2.246 0M5.025 5.657a2.003 2.003 0 0 1 3.95 0c.03.182-.122.332-.306.332H5.33c-.184 0-.336-.15-.306-.332Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGroupMeetingCallSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHalfStar1Icon],svg[streamline-half-star-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.018.5a.54.54 0 0 0-.49.32l-1.59 3.36a.52.52 0 0 1-.41.31L.988 5a.58.58 0 0 0-.3 1l2.56 2.63a.58.58 0 0 1 .16.5l-.64 3.7a.56.56 0 0 0 .8.6l3.2-1.74a.6.6 0 0 1 .26-.07z"></svg:path>`,
})
export class StreamlineHalfStar1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHalfStar1SolidIcon],svg[streamline-half-star-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.518.5a.5.5 0 0 0-.503-.5a1.04 1.04 0 0 0-.941.61L4.486 3.966l-.007.016a.02.02 0 0 1-.016.012l-.006.001l-3.54.51l-.009.001a1.08 1.08 0 0 0-.57 1.851L2.89 8.98l.002.002a.08.08 0 0 1 .022.068l-.638 3.693v.002a1.06 1.06 0 0 0 1.53 1.125l3.199-1.739a.1.1 0 0 1 .04-.01a.5.5 0 0 0 .483-.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHalfStar1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHandCursorIcon],svg[streamline-hand-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 6.13a2 2 0 0 1 1.59 2.24l-.61 4.27a1 1 0 0 1-1 .86H4a1 1 0 0 1-.93-.63L2 10.21a2 2 0 0 1 1-2.53L4.35 7V2a1.5 1.5 0 0 1 3 0v3.5z"></svg:path>`,
})
export class StreamlineHandCursorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHandCursorSolidIcon],svg[streamline-hand-cursor-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.784 6.063a2.154 2.154 0 0 1 1.712 2.412l-.657 4.599a1.08 1.08 0 0 1-1.077.926H3.784a1.08 1.08 0 0 1-1.002-.678L1.63 10.457a2.154 2.154 0 0 1 1.077-2.725L4.16 7V1.615a1.615 1.615 0 1 1 3.23 0v3.77z"></svg:path>`,
})
export class StreamlineHandCursorSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHandGrabIcon],svg[streamline-hand-grab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.364 13.5v-1.496l-1.926-1.54a2 2 0 0 1-.71-1.167l-.53-2.647a1.994 1.994 0 0 1 1.216-2.243l.952-.38V2.494A1.995 1.995 0 0 1 5.772.544l5.485 1.154A1.994 1.994 0 0 1 12.84 3.65v3.008c0 1.548-.36 3.075-1.053 4.46l-.443.886V13.5M3.366 4.026V6.52"></svg:path>`,
})
export class StreamlineHandGrabIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHandGrabSolidIcon],svg[streamline-hand-grab-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.794 2.51A2.5 2.5 0 0 1 6.809.07l.013.003l4.557 1.09a2.5 2.5 0 0 1 1.977 2.445v3.016a10.5 10.5 0 0 1-1.108 4.696l-.392.783v1.382a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1.26L2.113 10.83a2.5 2.5 0 0 1-.89-1.461l-.53-2.655a2.5 2.5 0 0 1 1.522-2.811l.023-.01l.023-.006l.283-.083V6.08a.625.625 0 0 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHandGrabSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHandHeldIcon],svg[streamline-hand-held-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-10 10h11M4.5 3h5m-5 2.5h5M4.5 8h3"></svg:path>`,
})
export class StreamlineHandHeldIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHandHeldSolidIcon],svg[streamline-hand-held-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.497 1.747c0-.113.092-.205.205-.205h8.596c.113 0 .204.092.204.205v8.727H2.497zM2.702.042C1.761.042.997.806.997 1.747v10.505c0 .942.764 1.706 1.705 1.706h8.596c.941 0 1.704-.764 1.704-1.706V1.747c0-.941-.763-1.705-1.705-1.705zm1.91 2.594a.75.75 0 1 0 0 1.5h4.776a.75.75 0 0 0 0-1.5zm-.75 3.374a.75.75 0 0 1 .75-.75h4.776a.75.75 0 0 1 0 1.5H4.612a.75.75 0 0 1-.75-.75m.75 1.874a.75.75 0 1 0 0 1.5h2.866a.75.75 0 1 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHandHeldSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHandHeldTabletDrawingIcon],svg[streamline-hand-held-tablet-drawing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-10 10h11"></svg:path><svg:path d="M4 4c.585-.827 1.71-1.79 2.5-1c1 1-2.205 3.743-1 4.5C6.816 8.327 8.764 4.176 10 5s-1.5 2.5 0 3.5"></svg:path></svg:g>`,
})
export class StreamlineHandHeldTabletDrawingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHandHeldTabletDrawingSolidIcon],svg[streamline-hand-held-tablet-drawing-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.716 1.563a.2.2 0 0 0-.202.201v8.568h8.972V1.764a.2.2 0 0 0-.202-.202H2.716Zm-1.702.201c0-.94.762-1.702 1.702-1.702h8.568c.94 0 1.702.762 1.702 1.702v10.472c0 .94-.762 1.701-1.702 1.701H2.716c-.94 0-1.702-.761-1.702-1.701zm3.654 2.828c.231-.328.549-.647.84-.805a.6.6 0 0 1 .296-.093c.037.001.083.01.149.073v.007a.8.8 0 0 1-.055.27c-.103.297-.307.652-.554 1.077l-.013.022c-.221.382-.488.84-.614 1.257a1.6 1.6 0 0 0-.06.763c.06.306.237.565.515.74c.624.392 1.253.118 1.655-.152c.409-.275.816-.696 1.162-1.052L8 6.687c.378-.39.69-.71.967-.901a.8.8 0 0 1 .245-.128l.003.003l-.003.02c-.03.14-.122.316-.283.62l-.025.048c-.144.272-.358.678-.394 1.104c-.02.233.01.486.134.734c.123.246.315.445.554.605a.625.625 0 0 0 .694-1.04c-.098-.066-.123-.11-.128-.121c-.005-.009-.012-.026-.008-.073c.01-.131.09-.316.253-.625l.045-.084c.131-.246.315-.588.382-.918a1.3 1.3 0 0 0-.04-.707a1.26 1.26 0 0 0-.504-.615c-.62-.414-1.254-.115-1.636.148c-.383.265-.773.668-1.11 1.015l-.043.045c-.375.387-.691.707-.973.896a1 1 0 0 1-.237.124l.02-.073c.077-.257.264-.588.512-1.015l.029-.05c.22-.378.481-.828.626-1.248c.144-.42.257-1.067-.236-1.56a1.46 1.46 0 0 0-.996-.446c-.35-.013-.67.099-.935.243c-.522.282-.972.767-1.266 1.182a.625.625 0 1 0 1.02.722Zm1.17 2.253l.002.002z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHandHeldTabletDrawingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHandHeldTabletWritingIcon],svg[streamline-hand-held-tablet-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8 .5H1.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8m-11 2.5h11M3.5 3h2m-2 2.5h1"></svg:path><svg:path d="m8.994 7.506l-3 .54l.5-3.04l4.23-4.21a1 1 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42z"></svg:path></svg:g>`,
})
export class StreamlineHandHeldTabletWritingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHandHeldTabletWritingSolidIcon],svg[streamline-hand-held-tablet-writing-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.718 1.594a.197.197 0 0 0-.198.197v8.521h8.919V7.947a.75.75 0 1 1 1.5 0v4.262c0 .937-.76 1.697-1.697 1.697H1.716c-.937 0-1.697-.76-1.697-1.697V1.791A1.7 1.7 0 0 1 1.718.094h6.156a.75.75 0 0 1 0 1.5zm1.894 1.413a.625.625 0 1 0 0 1.25h1.894a.625.625 0 1 0 0-1.25zM2.987 6.5c0-.345.28-.625.625-.625h.947a.625.625 0 1 1 0 1.25h-.947a.625.625 0 0 1-.625-.625m6.332 1.034a.5.5 0 0 0 .266-.14l4.099-4.118a1 1 0 0 0 0-1.42l-1.06-1.06a1 1 0 0 0-1.42 0L7.088 4.892a.5.5 0 0 0-.14.273l-.36 2.182a.5.5 0 0 0 .583.573z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHandHeldTabletWritingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHangUp1Icon],svg[streamline-hang-up-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.6 4.736A2.55 2.55 0 0 0 .59 7.244l-.006.502a.86.86 0 0 0 .853.853l2.146-.011a.855.855 0 0 0 .847-.847a.86.86 0 0 1 .853-.853H8.67a.847.847 0 0 1 .853.853a.855.855 0 0 0 .847.847h2.146a.863.863 0 0 0 .853-.853l-.006-.503a2.55 2.55 0 0 0-2.01-2.507a23.1 23.1 0 0 0-8.754.011Z"></svg:path>`,
})
export class StreamlineHangUp1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHangUp1SolidIcon],svg[streamline-hang-up-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.459 4.236a3.05 3.05 0 0 1 2.405 2.995l.006.51a1.363 1.363 0 0 1-1.348 1.347h-2.155a1.355 1.355 0 0 1-1.343-1.343a.347.347 0 0 0-.35-.357H5.287a.36.36 0 0 0-.356.358a1.35 1.35 0 0 1-1.343 1.342l-2.155.01A1.363 1.363 0 0 1 .084 7.753l.006-.51a3.05 3.05 0 0 1 2.405-2.995c2.946-.603 6.014-.576 8.964-.011Z"></svg:path>`,
})
export class StreamlineHangUp1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHangUp2Icon],svg[streamline-hang-up-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.58 3.486A2.55 2.55 0 0 0 .57 5.994l-.006.502a.86.86 0 0 0 .853.853l2.146-.011a.855.855 0 0 0 .847-.847a.86.86 0 0 1 .852-.853h3.389a.847.847 0 0 1 .852.853a.855.855 0 0 0 .847.847h2.146a.863.863 0 0 0 .853-.853l-.006-.503a2.55 2.55 0 0 0-2.01-2.507a23.1 23.1 0 0 0-8.753.011M7 7.938v4.718m-1.872-1.872L7 12.656l1.872-1.872"></svg:path>`,
})
export class StreamlineHangUp2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHangUp2SolidIcon],svg[streamline-hang-up-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.174 4.068a3.05 3.05 0 0 0-1.736-1.073c-2.95-.565-6.017-.592-8.963.011A3.05 3.05 0 0 0 .07 6.002l-.006.51a1.363 1.363 0 0 0 1.347 1.347l2.156-.011A1.354 1.354 0 0 0 4.91 6.505a.363.363 0 0 1 .356-.358h3.388a.347.347 0 0 1 .35.357a1.355 1.355 0 0 0 1.342 1.343h2.156A1.363 1.363 0 0 0 13.849 6.5l-.006-.51a3.05 3.05 0 0 0-.67-1.922Zm-5.549 3.87a.625.625 0 1 0-1.25 0v2.221H5.128a.625.625 0 0 0-.442 1.067l1.866 1.866a.63.63 0 0 0 .526.184a.62.62 0 0 0 .364-.178l1.872-1.872a.625.625 0 0 0-.442-1.067H7.625V7.94Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHangUp2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHappyFaceIcon],svg[streamline-happy-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M3.7 8c.5 1.8 2.5 2.9 4.3 2.4c1.1-.4 2-1.3 2.3-2.4M4.75 5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m4.5.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineHappyFaceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHappyFaceSolidIcon],svg[streamline-happy-face-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0m-3.56-2.048c0 .565-.457 1.023-1.022 1.024h-.002a1.025 1.025 0 0 1-.003-2.049h.003c.565 0 1.024.459 1.024 1.025m-4.831 0c0 .565-.457 1.023-1.022 1.024h-.003a1.025 1.025 0 0 1-.002-2.049h.002c.566 0 1.025.459 1.025 1.025M4.189 7.76a.625.625 0 1 0-1.206.325a4.163 4.163 0 0 0 8.038 0a.625.625 0 1 0-1.207-.325a2.913 2.913 0 0 1-5.624 0Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHappyFaceSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHardDiskIcon],svg[streamline-hard-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1m-7 10l1.75-2.75"></svg:path><svg:path d="M4.09 7A2.93 2.93 0 0 1 4 5.16a3 3 0 1 1 4.67 3.27M7.5 11H10"></svg:path></svg:g>`,
})
export class StreamlineHardDiskIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHardDiskSolidIcon],svg[streamline-hard-disk-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h9A1.5 1.5 0 0 1 13 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 12.5zm5.991 6.692a.625.625 0 0 0-.653-.947a.57.57 0 0 0-.401.276l-1.75 2.75a.625.625 0 1 0 1.054.671zm.258 3.414c0-.345.28-.625.625-.625h2.5a.625.625 0 0 1 0 1.25h-2.5a.625.625 0 0 1-.625-.625M6.99 1.897A3.875 3.875 0 0 0 4 8.237l.882-1.387c.298-.468.76-.768 1.284-.843c.49-.071.946.064 1.293.285c.348.221.664.578.807 1.051a1.83 1.83 0 0 1-.22 1.52l-.471.74a3.876 3.876 0 0 0-.585-7.706m.082 5.815a.62.62 0 0 1-.08.48a.58.58 0 0 0 .08-.48" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHardDiskSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHardDrive1Icon],svg[streamline-hard-drive-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 7.5h-11a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1"></svg:path><svg:path d="m.59 8.08l1.74-6.8A1 1 0 0 1 3.3.5h7.4a1 1 0 0 1 1 .78l1.74 6.8M3.5 10.5h3m4 .5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class StreamlineHardDrive1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHardDrive1SolidIcon],svg[streamline-hard-drive-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.588 6.07q.237-.05.489-.05h11.846q.27 0 .52.058l-1.257-4.916A1.5 1.5 0 0 0 10.694 0H3.297a1.5 1.5 0 0 0-1.453 1.162zm12.335 1.2H1.077C.482 7.27 0 7.75 0 8.345v4.308c0 .595.482 1.077 1.077 1.077h11.846c.595 0 1.077-.482 1.077-1.077V8.346c0-.595-.482-1.077-1.077-1.077ZM3.5 9.874a.625.625 0 1 0 0 1.25h3a.625.625 0 1 0 0-1.25zm6.003.625a.997.997 0 1 1 1.994 0a.997.997 0 0 1-1.994 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHardDrive1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeading1ParagraphStylesHeadingIcon],svg[streamline-heading-1-paragraph-styles-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.394 7.655v5.095M9.696 8.719h.425c.703 0 1.274-.57 1.274-1.274m1.698 5.305H9.696M1 12.75V1.25m5.75 0v11.5M1 6.52h5.75"></svg:path>`,
})
export class StreamlineHeading1ParagraphStylesHeadingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeading1ParagraphStylesHeadingSolidIcon],svg[streamline-heading-1-paragraph-styles-heading-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 1.25a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0V7.27H6v5.48a.75.75 0 0 0 1.5 0V1.25a.75.75 0 0 0-1.5 0v4.52H1.75zm10.395 6.195a.75.75 0 0 0-1.5 0c0 .29-.235.524-.524.524h-.425a.75.75 0 1 0 0 1.5h.425q.271 0 .523-.069V12h-.948a.75.75 0 0 0 0 1.5h3.397a.75.75 0 0 0 0-1.5h-.949V7.655l-.004-.078a2 2 0 0 0 .005-.132" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHeading1ParagraphStylesHeadingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeading2ParagraphStylesHeadingIcon],svg[streamline-heading-2-paragraph-styles-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.926 12.75H9.61v-.754c0-.527.293-1.003.745-1.215l1.845-.86c.441-.206.726-.67.726-1.184c0-.714-.542-1.292-1.211-1.292h-.861c-.542 0-1.002.37-1.173.884M1 12.75V1.25m5.75 0v11.5M1 6.52h5.75"></svg:path>`,
})
export class StreamlineHeading2ParagraphStylesHeadingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeading2ParagraphStylesHeadingSolidIcon],svg[streamline-heading-2-paragraph-styles-heading-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 1.25a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0V7.27H6v5.48a.75.75 0 0 0 1.5 0V1.25a.75.75 0 0 0-1.5 0v4.52H1.75zm9.104 5.445c-.9 0-1.624.611-1.885 1.398a.75.75 0 0 0 1.424.472c.08-.243.278-.37.46-.37h.862c.21 0 .461.196.461.542a.55.55 0 0 1-.293.504l-1.845.86c-.735.344-1.178 1.098-1.178 1.895v.754c0 .414.336.75.75.75h3.316a.75.75 0 0 0 0-1.5H10.36v-.004c0-.256.142-.456.313-.535l1.845-.861c.722-.337 1.158-1.079 1.158-1.863c0-1.081-.833-2.042-1.961-2.042z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHeading2ParagraphStylesHeadingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeading3ParagraphStylesHeadingIcon],svg[streamline-heading-3-paragraph-styles-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.538 11.866c.182.515.673.884 1.25.884h.884c.733 0 1.327-.594 1.327-1.326v-.221c0-.733-.594-1.326-1.327-1.326h-.442h.332a1.216 1.216 0 0 0 0-2.432h-.663c-.557 0-1.026.374-1.17.884M1 12.75V1.25m5.75 0v11.5M1 6.52h5.75"></svg:path>`,
})
export class StreamlineHeading3ParagraphStylesHeadingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeading3ParagraphStylesHeadingSolidIcon],svg[streamline-heading-3-paragraph-styles-heading-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 1.25a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0V7.27H6v5.48a.75.75 0 0 0 1.5 0V1.25a.75.75 0 0 0-1.5 0v4.52H1.75zm9.812 5.445h-.663c-.901 0-1.658.605-1.892 1.43a.75.75 0 1 0 1.444.408a.47.47 0 0 1 .448-.338h.663a.466.466 0 0 1 0 .931h-.332a.75.75 0 1 0 0 1.5h.442c.319 0 .577.258.577.577v.22a.576.576 0 0 1-.577.577h-.884a.58.58 0 0 1-.543-.384a.75.75 0 1 0-1.415.5a2.08 2.08 0 0 0 1.958 1.384h.884c1.147 0 2.077-.93 2.077-2.076v-.221a2.07 2.07 0 0 0-.568-1.427a1.966 1.966 0 0 0-1.619-3.081" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHeading3ParagraphStylesHeadingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHealthCare2Icon],svg[streamline-health-care-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.28 9.34a1.91 1.91 0 0 0 0-2.77a2.07 2.07 0 0 0-2.85 0L7 8L5.57 6.57a2.07 2.07 0 0 0-2.85 0a1.91 1.91 0 0 0 0 2.77L7 13.5zM7 4.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class StreamlineHealthCare2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHealthCare2SolidIcon],svg[streamline-health-care-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.685 2.422a2.315 2.315 0 1 1 4.63 0a2.315 2.315 0 0 1-4.63 0M2.446 6.214a2.536 2.536 0 0 1 3.492 0l.01.01L7 7.276l1.053-1.052l.01-.01a2.536 2.536 0 0 1 3.49 0a2.38 2.38 0 0 1 .003 3.448l-4.208 4.09a.5.5 0 0 1-.697 0l-4.207-4.09a2.38 2.38 0 0 1 .002-3.447Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHealthCare2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHealthMedicalHeartRateHealthBeautyInformationDataBeatPulseMonitorHeartRateInfoIcon],svg[streamline-health-medical-heart-rate-health-beauty-information-data-beat-pulse-monitor-heart-rate-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.58 4.31C1.09 1.85 4.12 0 7 3.27c4.11-4.71 8.5 1.13 5.52 4.14L7 12.5l-3.23-3"></svg:path><svg:path d="M.5 7H3l1.5-2l2 3.5l1.5-2h1.5"></svg:path></svg:g>`,
})
export class StreamlineHealthMedicalHeartRateHealthBeautyInformationDataBeatPulseMonitorHeartRateInfoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHealthMedicalRibbon1RibbonMedicalCancerHealthBeautySymbolIcon],svg[streamline-health-medical-ribbon-1-ribbon-medical-cancer-health-beauty-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 13.5S10 6.39 10 3.5a2.84 2.84 0 0 0-3-3a2.84 2.84 0 0 0-3 3c0 2.89 6.5 10 6.5 10"></svg:path>`,
})
export class StreamlineHealthMedicalRibbon1RibbonMedicalCancerHealthBeautySymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHealthMedicalRibbon2RibbonMedicalCancerHealthBeautySymbolIcon],svg[streamline-health-medical-ribbon-2-ribbon-medical-cancer-health-beauty-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 3.14v1.5m1.51 2.51a3.62 3.62 0 0 0 1.49-3A3.29 3.29 0 0 0 7 .64a3.28 3.28 0 0 0-3 3.5a3.62 3.62 0 0 0 1.49 3l-3.21 3.68a.51.51 0 0 0 0 .65l1.37 1.7a.47.47 0 0 0 .38.19a.52.52 0 0 0 .39-.17A23 23 0 0 0 7 9.64a23 23 0 0 0 2.6 3.55a.52.52 0 0 0 .39.17a.47.47 0 0 0 .38-.19l1.37-1.7a.5.5 0 0 0 0-.64Z"></svg:path>`,
})
export class StreamlineHealthMedicalRibbon2RibbonMedicalCancerHealthBeautySymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHearingDeaf1Icon],svg[streamline-hearing-deaf-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 13.5L.5.5m8.822 8.822c.18-.227.345-.406.464-.504c.807-1.01 2.085-1.85 1.917-4.17c-.168-2.322-2.22-3.802-5.112-3.398c-1.418.198-2.269 1.214-2.74 2.25m4.32 7.84c-.269.915-.794 1.788-2.152 1.917c-.84.08-1.245-.235-1.547-.538"></svg:path><svg:path d="M6.296 4.106c.37-.589.743-.793 1.11-.891c1.532-.408 2.704 1.515 1.38 2.943"></svg:path></svg:g>`,
})
export class StreamlineHearingDeaf1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHearingDeaf1SolidIcon],svg[streamline-hearing-deaf-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.22 1.28A.75.75 0 0 1 1.28.22l2.535 2.535C4.515 1.527 5.81.354 7.83.354c1.569 0 2.767.566 3.563 1.483c.782.9 1.118 2.07 1.118 3.198c0 1.058-.552 2.08-1.12 2.873c-.357.496-.752.945-1.108 1.314l3.498 3.498a.75.75 0 1 1-1.06 1.06zm9.002 6.88c.31-.323.65-.71.949-1.127c.518-.72.839-1.422.839-1.998c0-.847-.254-1.643-.75-2.215c-.482-.554-1.249-.966-2.431-.966c-1.51 0-2.454.989-2.9 2.015l4.293 4.292Zm-1.837 2.93c.11-.194.206-.404.286-.608l1.134 1.134a5 5 0 0 1-.117.217c-.257.452-.646.97-1.214 1.247c-.477.233-.964.404-1.503.416c-.546.012-1.067-.14-1.616-.423a.75.75 0 0 1 .687-1.334c.397.205.67.262.896.257c.234-.005.497-.078.878-.264c.166-.08.367-.287.57-.642Zm.13-6.637a.76.76 0 0 1 .362-.082c.12.005.285.043.502.178a.7.7 0 0 1 .285.306c.052.11.076.24.075.38a.75.75 0 0 0 1.5.017c.007-.652-.236-1.458-1.068-1.976c-.855-.533-1.658-.485-2.303-.177a.75.75 0 1 0 .646 1.354Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHearingDeaf1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHearingDeaf2Icon],svg[streamline-hearing-deaf-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M11.805 1.077c.449.387.757.907.93 1.512"></svg:path><svg:path stroke-linejoin="round" d="m3.262 8.618l.46.46m-2.615.606l1.494 1.493M4.31 6.468L5.804 7.96m-1.696 4.37c.282.281.658.574 1.438.5c1.262-.12 1.75-.931 2-1.781s1.125-2.032 1.5-2.344c.75-.938 1.937-1.719 1.781-3.875s-2.062-3.531-4.75-3.156C4.258 1.927 3.445 3.63 3.174 4.83"></svg:path><svg:path stroke-linejoin="round" d="M5.804 4.561c.343-.547.69-.737 1.03-.828c1.424-.379 2.513 1.408 1.282 2.734"></svg:path></svg:g>`,
})
export class StreamlineHearingDeaf2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHearingDeaf2SolidIcon],svg[streamline-hearing-deaf-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.295.509a.75.75 0 0 0-.98 1.136c.322.278.56.663.699 1.15a.75.75 0 0 0 1.442-.413c-.207-.723-.585-1.376-1.161-1.873M4.143 4.437c.393-1.07 1.322-2.155 2.88-2.155c1.143 0 1.882.399 2.345.932c.478.551.723 1.319.723 2.137c0 .55-.305 1.222-.803 1.918A11.3 11.3 0 0 1 7.82 8.904a3.05 3.05 0 0 0-.825 1.321a5.3 5.3 0 0 1-.425 1.005c-.195.339-.386.532-.54.607c-.567.277-.895.316-1.317.174a.75.75 0 0 0-.477 1.422c.918.308 1.667.136 2.453-.248c.553-.27.93-.772 1.182-1.209c.26-.452.44-.937.554-1.299c.084-.266.228-.5.415-.672a13 13 0 0 0 1.67-1.863c.548-.768 1.082-1.76 1.082-2.79c0-1.1-.327-2.242-1.09-3.121C9.723 1.335 8.552.782 7.023.782c-2.41 0-3.766 1.72-4.288 3.137a.75.75 0 1 0 1.408.518M2.731 8.088a.75.75 0 0 1 1.06 0l.461.46a.75.75 0 0 1-1.06 1.061l-.46-.46a.75.75 0 0 1 0-1.06ZM1.638 9.153a.75.75 0 0 0-1.061 1.061l1.493 1.493a.75.75 0 0 0 1.061-1.06zM3.78 5.937a.75.75 0 0 1 1.06 0l1.494 1.494a.75.75 0 0 1-1.06 1.06L3.78 6.998a.75.75 0 0 1 0-1.06Zm2.755-1.04a.7.7 0 0 1 .321-.072c.104.004.252.037.45.161a.63.63 0 0 1 .253.27a.8.8 0 0 1 .066.337a.75.75 0 0 0 1.5.017c.007-.624-.226-1.4-1.026-1.897c-.819-.51-1.59-.465-2.21-.17a.75.75 0 0 0 .646 1.354" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHearingDeaf2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeartIcon],svg[streamline-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.004 12.383L1.53 7.424c-2.975-2.975 1.398-8.688 5.474-4.066c4.076-4.622 8.43 1.11 5.475 4.066z"></svg:path>`,
})
export class StreamlineHeartIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeartRatePulseGraphIcon],svg[streamline-heart-rate-pulse-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.992 12.413L1.573 7.401c-2.953-2.966 1.355-8.71 5.419-4.064c4.064-4.632 8.412 1.111 5.418 4.064z"></svg:path><svg:path d="M3.515 6.753h1.53l1.032-1.968L7.64 8.41l1.343-1.657h1.5"></svg:path></svg:g>`,
})
export class StreamlineHeartRatePulseGraphIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeartRatePulseGraphSolidIcon],svg[streamline-heart-rate-pulse-graph-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.992 2.606c-.965-.961-1.972-1.438-2.94-1.51c-1.094-.08-2.06.364-2.756 1.066C-.072 3.542-.49 6.037 1.22 7.754l.015.014l5.418 5.012a.5.5 0 0 0 .68 0l5.418-5.012l.011-.011c1.734-1.71 1.315-4.205-.06-5.585c-.698-.702-1.667-1.147-2.763-1.068c-.97.07-1.98.543-2.946 1.502Zm-.34 1.982a.625.625 0 0 0-1.128-.043L4.668 6.18H3.515a.625.625 0 0 0 0 1.25h1.531c.233 0 .446-.13.554-.335l.423-.807l1.043 2.42a.625.625 0 0 0 1.06.147L9.282 7.43h1.202a.625.625 0 0 0 0-1.25h-1.5a.63.63 0 0 0-.486.231l-.693.855l-1.154-2.677Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHeartRatePulseGraphSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeartRateSearchIcon],svg[streamline-heart-rate-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 6a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0m9.495 3.995L13 13"></svg:path><svg:path d="M2.516 6.156h1.53l1.032-1.968l1.563 3.625l1.343-1.657h1.5"></svg:path></svg:g>`,
})
export class StreamlineHeartRateSearchIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeartRateSearchSolidIcon],svg[streamline-heart-rate-search-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 1.5a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M0 6.25a6.25 6.25 0 1 1 11.32 3.656l2.387 2.387a1 1 0 1 1-1.414 1.414L9.906 11.32A6.25 6.25 0 0 1 0 6.25m5.962-1.723a.625.625 0 0 0-1.095-.044L4.101 5.75H3.046a.625.625 0 1 0 0 1.25h1.408a.63.63 0 0 0 .535-.302l.36-.596l.93 1.87a.625.625 0 0 0 1.016.15L8.345 7h1.11a.625.625 0 1 0 0-1.25h-1.38a.63.63 0 0 0-.456.197l-.621.663z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHeartRateSearchSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeartSolidIcon],svg[streamline-heart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.024 1.085c.98.071 2.002.55 2.98 1.517c.978-.968 1.999-1.445 2.978-1.514c1.106-.079 2.083.368 2.79 1.073c1.39 1.386 1.827 3.895.102 5.62l-.018.017l-5.516 4.997a.5.5 0 0 1-.672 0L1.152 7.798l-.018-.017c-1.734-1.734-1.3-4.243.095-5.628c.709-.704 1.688-1.148 2.795-1.068" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHeartSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeartsSymbolIcon],svg[streamline-hearts-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.266 11.908a1.773 1.773 0 0 1-2.527 0L1.49 7.7c-2.84-2.842.87-9.12 5.511-4.478c4.634-4.633 8.344 1.644 5.511 4.478z"></svg:path>`,
})
export class StreamlineHeartsSymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHeartsSymbolSolidIcon],svg[streamline-hearts-symbol-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.788 1.314c.988.02 2.085.49 3.214 1.56c1.127-1.067 2.223-1.536 3.21-1.555c1.04-.02 1.918.46 2.536 1.18c1.218 1.42 1.47 3.85-.058 5.377l-.001.001l-4.247 4.208c-.81.802-2.07.802-2.88 0L1.316 7.877C-.217 6.343.032 3.913 1.25 2.491c.617-.72 1.495-1.2 2.537-1.178Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHeartsSymbolSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHelpChat2Icon],svg[streamline-help-chat-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.998.552a6.448 6.448 0 0 0-5.367 10.02L.55 13.447l3.62-.655A6.448 6.448 0 1 0 6.999.552Z"></svg:path><svg:path d="M5.51 5.512A1.488 1.488 0 1 1 6.998 7v.992M7 10.472a.248.248 0 0 1 0-.496m0 .496a.248.248 0 1 0 0-.496"></svg:path></svg:g>`,
})
export class StreamlineHelpChat2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHelpChat2SolidIcon],svg[streamline-help-chat-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.998.046A6.954 6.954 0 1 1 4.099 13.32l-3.466.627a.5.5 0 0 1-.556-.668l.994-2.646A6.954 6.954 0 0 1 6.998.046m-.379 4.399A.995.995 0 1 1 7 6.36a.625.625 0 0 0-.625.625v1.08a.625.625 0 1 0 1.25 0V7.52a2.245 2.245 0 1 0-2.87-2.157a.625.625 0 0 0 1.25 0a.995.995 0 0 1 .614-.919ZM7 11.39a.895.895 0 0 1 .002-1.79h.002a.895.895 0 0 1-.002 1.79z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHelpChat2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHelpQuestion1Icon],svg[streamline-help-question-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M5.25 5.25a1.75 1.75 0 0 1 2.093-1.717A1.752 1.752 0 0 1 8.62 5.92A1.75 1.75 0 0 1 7.002 7v1.167M7 10.459a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineHelpQuestion1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHelpQuestion1SolidIcon],svg[streamline-help-question-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0M5.75 5.25A1.25 1.25 0 1 1 7 6.5a.75.75 0 0 0-.75.75v.646a.75.75 0 1 0 1.5 0a2.751 2.751 0 1 0-3.5-2.646a.75.75 0 0 0 1.5 0M8 10.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHelpQuestion1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHexagramIcon],svg[streamline-hexagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 3.5h13L7 13.5z"></svg:path><svg:path d="M.5 10.5h13L7 .5z"></svg:path></svg:g>`,
})
export class StreamlineHexagramIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHexagramSolidIcon],svg[streamline-hexagram-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.857.564a1 1 0 0 0-1.714 0L4.67 3.017H1.655a1 1 0 0 0-.857 1.515L2.279 7L.798 9.468a1 1 0 0 0 .857 1.515H4.67l1.473 2.452a1 1 0 0 0 1.714 0l1.473-2.452h3.015a1 1 0 0 0 .857-1.515L11.721 7l1.481-2.468a1 1 0 0 0-.857-1.515H9.33z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHexagramSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy10Icon],svg[streamline-hierarchy-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.5 9.5v-5m8-.5h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1M4.5.5h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m0 9h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m4-3.5h-2a3 3 0 0 0-3 3"></svg:path>`,
})
export class StreamlineHierarchy10Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy10SolidIcon],svg[streamline-hierarchy-10-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 1.25C1.25.56 1.81 0 2.5 0h2c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-.25V6a3.75 3.75 0 0 1 2.25-.75h2V5c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-2C9.06 8.25 8.5 7.69 8.5 7v-.25h-2A2.25 2.25 0 0 0 4.25 9v.5h.25c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25v-2c0-.69.56-1.25 1.25-1.25h.25v-5H2.5c-.69 0-1.25-.56-1.25-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHierarchy10SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy13Icon],svg[streamline-hierarchy-13-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.531 7.027L2.885 9.5m8.224-5L10.344 7M6.25 6.257L7.5 7.5m5-3h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1m-2 6.5h-2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M5.25 7.027h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M3.5 13.5h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1"></svg:path>`,
})
export class StreamlineHierarchy13Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy13SolidIcon],svg[streamline-hierarchy-13-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 0H13a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1h-.918l-.899 2.517A1 1 0 0 1 12 8v2.5a1 1 0 0 1-1 1H8.5a1 1 0 0 1-1-1V8.695L5.626 6.992A1 1 0 0 1 5.5 7H4.231l-.54 2.518a1 1 0 0 1 .809.982V13a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2.5a1 1 0 0 1 1-1h1.162l.545-2.544A1 1 0 0 1 2 6V3.5a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v2.26l1.507 1.37A1 1 0 0 1 8.5 7h1.096l.893-2.5a1 1 0 0 1-.989-1V1a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHierarchy13SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy14Icon],svg[streamline-hierarchy-14-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.5v-4a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4.5a1 1 0 0 1-1-1M7 6.5v4m-5 0v-1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1m-11.5 2v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1m5 0v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1m5 0v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1"></svg:path>`,
})
export class StreamlineHierarchy14Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy14SolidIcon],svg[streamline-hierarchy-14-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 1v3.5a1 1 0 0 0 1 1h1v1.25H3A1.75 1.75 0 0 0 1.25 8.5V10H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-.25V8.5A.25.25 0 0 1 3 8.25h3.25V10H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-.25V8.25H11a.25.25 0 0 1 .25.25V10H11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-.25V8.5A1.75 1.75 0 0 0 11 6.75H7.75V5.5h1a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-3.5a1 1 0 0 0-1 1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHierarchy14SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy2Icon],svg[streamline-hierarchy-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 10V8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2M7 4v6M5.5 2v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1m0 9v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1m-5 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1m10 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1"></svg:path>`,
})
export class StreamlineHierarchy2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy2SolidIcon],svg[streamline-hierarchy-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5.5A1.5 1.5 0 0 0 5 2v1a1.5 1.5 0 0 0 1.25 1.48v1.77H3A1.75 1.75 0 0 0 1.25 8v1.52A1.5 1.5 0 0 0 0 11v1a1.5 1.5 0 0 0 1.5 1.5h1A1.5 1.5 0 0 0 4 12v-1a1.5 1.5 0 0 0-1.25-1.48V8A.25.25 0 0 1 3 7.75h3.25v1.77A1.5 1.5 0 0 0 5 11v1a1.5 1.5 0 0 0 1.5 1.5h1A1.5 1.5 0 0 0 9 12v-1a1.5 1.5 0 0 0-1.25-1.48V7.75H11a.25.25 0 0 1 .25.25v1.52A1.5 1.5 0 0 0 10 11v1a1.5 1.5 0 0 0 1.5 1.5h1A1.5 1.5 0 0 0 14 12v-1a1.5 1.5 0 0 0-1.25-1.48V8A1.75 1.75 0 0 0 11 6.25H7.75V4.48A1.5 1.5 0 0 0 9 3V2A1.5 1.5 0 0 0 7.5.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHierarchy2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy4Icon],svg[streamline-hierarchy-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 .5H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m0 9H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m6-4H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-7-1v5m4-2H7a3 3 0 0 1-3-3"></svg:path>`,
})
export class StreamlineHierarchy4Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy4SolidIcon],svg[streamline-hierarchy-4-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 1.5A1.5 1.5 0 0 1 3.25 0h1.5a1.5 1.5 0 0 1 1.5 1.5V3a1.5 1.5 0 0 1-1.5 1.5A2.25 2.25 0 0 0 7 6.75h1a1.5 1.5 0 0 1 1.5-1.5H11a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5H9.5A1.5 1.5 0 0 1 8 8.25H7a3.75 3.75 0 0 1-2.25-.75v2a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-1.5a1.5 1.5 0 0 1-1.5-1.5V11a1.5 1.5 0 0 1 1.5-1.5v-5A1.5 1.5 0 0 1 1.75 3z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHierarchy4SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy7Icon],svg[streamline-hierarchy-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5.5h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m0 9h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m9 0h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-10 0v-5m9 5v-5a2 2 0 0 0-2-2H7"></svg:path><svg:path d="m9 .5l-2 2l2 2"></svg:path></svg:g>`,
})
export class StreamlineHierarchy7Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHierarchy7SolidIcon],svg[streamline-hierarchy-7-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.691.038A.5.5 0 0 1 9 .5v1.25h.75A2.75 2.75 0 0 1 12.5 4.5v5A1.5 1.5 0 0 1 14 11v1.5a1.5 1.5 0 0 1-1.5 1.5H11a1.5 1.5 0 0 1-1.5-1.5V11A1.5 1.5 0 0 1 11 9.5v-5c0-.69-.56-1.25-1.25-1.25H9V4.5a.5.5 0 0 1-.854.354l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .545-.108M1.5 9.5v-5A1.5 1.5 0 0 1 0 3V1.5A1.5 1.5 0 0 1 1.5 0H3a1.5 1.5 0 0 1 1.5 1.5V3A1.5 1.5 0 0 1 3 4.5v5A1.5 1.5 0 0 1 4.5 11v1.5A1.5 1.5 0 0 1 3 14H1.5A1.5 1.5 0 0 1 0 12.5V11a1.5 1.5 0 0 1 1.5-1.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHierarchy7SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHighSpeedTrainFrontIcon],svg[streamline-high-speed-train-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.564 5.39c0 3.333-2.572 7.378-5.744 7.378c-3.173 0-5.744-4.045-5.744-7.379S3.647.694 6.82.694s5.744 1.361 5.744 4.695Z"></svg:path><svg:path d="M10.617 10.673c-1.012 1.243-2.341 2.095-3.797 2.095c-1.454 0-2.782-.85-3.794-2.092c.641-1.745 2.1-2.493 3.796-2.493s3.153.747 3.795 2.49m-8.473 1.593L1.076 13.27m10.78-1.004l1.068 1.003M4.497 3.365h4.648s1.271 0 1.271 1.271v0s0 1.271-1.271 1.271H4.497s-1.271 0-1.271-1.271v0s0-1.271 1.271-1.271"></svg:path></svg:g>`,
})
export class StreamlineHighSpeedTrainFrontIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHighSpeedTrainFrontSolidIcon],svg[streamline-high-speed-train-front-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.464 1.2C3.619.36 5.173.009 6.82.009s3.2.351 4.356 1.193c1.179.858 1.888 2.188 1.888 4.002c0 1.593-.546 3.317-1.443 4.739c-1.02-1.797-2.828-2.57-4.799-2.57s-3.78.775-4.8 2.574C1.121 8.523.575 6.798.575 5.203c0-1.814.709-3.144 1.888-4.002Zm.4 9.87c1.045 1.176 2.413 2.011 3.956 2.011s2.913-.837 3.96-2.015c-.7-1.698-2.16-2.444-3.958-2.444c-1.8 0-3.26.747-3.959 2.448Zm.362-6.824c0-.702.57-1.27 1.272-1.27h4.648a1.271 1.271 0 1 1 0 2.541H4.498a1.27 1.27 0 0 1-1.272-1.27Zm-.766 7.501a.75.75 0 0 1-.059 1.06l-1.12 1.002a.75.75 0 0 1-1-1.118l1.12-1.003a.75.75 0 0 1 1.06.06Zm9.08 0a.75.75 0 0 0 .059 1.06l1.12 1.002a.75.75 0 0 0 1-1.118l-1.12-1.003a.75.75 0 0 0-1.06.06Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHighSpeedTrainFrontSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHinduismIcon],svg[streamline-hinduism-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.796 9.186a3.825 3.825 0 1 0 3.825-3.825M2.327 1.586A2.909 2.909 0 0 1 6.34 5.743m6.315-2.377a2.447 2.447 0 0 1-3.46 0"></svg:path><svg:path d="M11.668 11.546a3.252 3.252 0 0 0-2.253-5.294c-.62-.052-1.468.094-1.878.459m3.388-5.254a.25.25 0 0 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineHinduismIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHinduismSolidIcon],svg[streamline-hinduism-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.112 2.541a1 1 0 1 0 0-2a1 1 0 0 0 0 2M4.42 2.057c-.48 0-.92.16-1.273.43a.75.75 0 0 1-.911-1.192a3.599 3.599 0 0 1 5.413 4.451q.141.107.273.225a3.4 3.4 0 0 1 .553-.17a3.934 3.934 0 0 1 3.947 6.32a.75.75 0 0 1-1.163-.95a2.434 2.434 0 0 0-2.34-3.93A4.496 4.496 0 1 1 .443 9.334a.75.75 0 1 1 1.5 0A2.996 2.996 0 1 0 4.94 6.338a.75.75 0 1 1 0-1.5c.48 0 .944.076 1.378.216A2.1 2.1 0 0 0 4.42 2.057m8.917 2.108a.75.75 0 0 0-1.06-1.06a1.646 1.646 0 0 1-2.329 0a.75.75 0 0 0-1.06 1.06a3.146 3.146 0 0 0 4.449 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHinduismSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHome3Icon],svg[streamline-home-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6.94a1 1 0 0 0-.32-.74L7 .5L.82 6.2a1 1 0 0 0-.32.74v5.56a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1zM7 13.5v-4"></svg:path>`,
})
export class StreamlineHome3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHome3SolidIcon],svg[streamline-home-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.318 6.045A1 1 0 0 0 0 6.776V12.5A1.5 1.5 0 0 0 1.5 14H6v-3a1 1 0 1 1 2 0v3h4.5a1.5 1.5 0 0 0 1.5-1.5V6.776a1 1 0 0 0-.318-.731L7.325.12a.5.5 0 0 0-.65 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHome3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHome4Icon],svg[streamline-home-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 8L7 1.5L13.5 8"></svg:path><svg:path d="M2.5 6v6.5h9V6"></svg:path></svg:g>`,
})
export class StreamlineHome4Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHome4SolidIcon],svg[streamline-home-4-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.707 1.293a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414L2 8.414V13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8.414l.293.293a1 1 0 1 0 1.414-1.414z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHome4SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHorizontalMenuCircleIcon],svg[streamline-horizontal-menu-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M4 7.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m3 .5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m3 .5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineHorizontalMenuCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHorizontalMenuCircleSolidIcon],svg[streamline-horizontal-menu-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14M4 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHorizontalMenuCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHospitalSignCircleIcon],svg[streamline-hospital-sign-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 4.5v5m4-5v5M5 7h4m-2 6.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path>`,
})
export class StreamlineHospitalSignCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHospitalSignCircleSolidIcon],svg[streamline-hospital-sign-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7m5.625-2.5a.625.625 0 1 0-1.25 0v5a.625.625 0 1 0 1.25 0V7.625h2.75V9.5a.625.625 0 1 0 1.25 0v-5a.625.625 0 1 0-1.25 0v1.875h-2.75z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHospitalSignCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHospitalSignSquareIcon],svg[streamline-hospital-sign-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M5 4.5v5m4-5v5M5 7h4"></svg:path>`,
})
export class StreamlineHospitalSignSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHospitalSignSquareSolidIcon],svg[streamline-hospital-sign-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm5.625 3.5a.625.625 0 1 0-1.25 0v5a.625.625 0 1 0 1.25 0V7.625h2.75V9.5a.625.625 0 1 0 1.25 0v-5a.625.625 0 1 0-1.25 0v1.875h-2.75z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHospitalSignSquareSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotSpringIcon],svg[streamline-hot-spring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12 7a2.8 2.8 0 0 1 1.5 2.24c0 1.93-2.91 3.5-6.5 3.5S.5 11.18.5 9.25A2.8 2.8 0 0 1 2 7"></svg:path><svg:path d="M4.08 2.25c-2 2.5 2 3.5 0 6m2.92-7c-2 2.5 2 5.5 0 8m2.92-7c-2 2.5 2 3.5 0 6"></svg:path></svg:g>`,
})
export class StreamlineHotSpringIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotSpringSolidIcon],svg[streamline-hot-spring-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.311 1.477a.75.75 0 0 1 .092 1.057c-.335.398-.418.793-.374 1.247c.05.501.249 1.038.5 1.695l.017.045c.23.602.504 1.318.575 2.04c.077.786-.083 1.602-.718 2.358a.75.75 0 1 1-1.148-.965c.334-.398.418-.794.373-1.248c-.049-.5-.249-1.037-.5-1.694l-.017-.045c-.23-.603-.504-1.318-.575-2.04c-.077-.787.083-1.603.719-2.359a.75.75 0 0 1 1.056-.09Zm-2.809 1.98a.75.75 0 1 0-1.148-.966c-.593.705-.81 1.401-.715 2.099c.082.602.395 1.123.619 1.495l.027.045c.26.433.41.703.446.97c.026.197 0 .481-.377.93a.75.75 0 0 0 1.148.966c.593-.705.81-1.4.715-2.098c-.082-.603-.395-1.123-.619-1.495l-.027-.045c-.26-.433-.41-.703-.446-.97c-.027-.197 0-.482.377-.931m8.41 3.43a.75.75 0 0 0-1.026 1.093a1.92 1.92 0 0 1 .593 1.191c-.016.504-.419 1.125-1.428 1.666c-.999.535-2.43.89-4.051.89c-1.622 0-3.053-.353-4.052-.886c-1.01-.539-1.412-1.158-1.427-1.662a1.9 1.9 0 0 1 .594-1.199a.75.75 0 0 0-1.027-1.093a3.42 3.42 0 0 0-1.065 2.2l-.003.062c0 1.332.997 2.362 2.222 3.016c1.256.67 2.94 1.061 4.758 1.061c1.82 0 3.503-.394 4.76-1.067c1.224-.656 2.22-1.689 2.22-3.019a3.4 3.4 0 0 0-1.067-2.253Zm-2.387-3.523a.75.75 0 0 0-1.281-.78c-.429.706-.562 1.357-.5 1.978c.055.566.271 1.063.437 1.445l.016.036c.183.421.305.718.336 1.029c.027.273-.016.603-.29 1.052a.75.75 0 1 0 1.282.779c.429-.705.561-1.356.5-1.977c-.055-.566-.271-1.064-.437-1.445l-.016-.036c-.183-.422-.305-.719-.336-1.03c-.027-.273.016-.602.29-1.051Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHotSpringSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelAirConditionerIcon],svg[streamline-hotel-air-conditioner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1"></svg:path><svg:path d="M11 7.5v-2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2m-.5 5h.1A1.4 1.4 0 0 0 4 11.1V10m7.5 2.5h-.1a1.4 1.4 0 0 1-1.4-1.4V10m-3 3.5V10"></svg:path></svg:g>`,
})
export class StreamlineHotelAirConditionerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelAirConditionerSolidIcon],svg[streamline-hotel-air-conditioner-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0C.706 0 0 .607 0 1.43v4.654c0 .824.706 1.43 1.5 1.43h.582V5.5c0-.446.19-.864.513-1.164a1.74 1.74 0 0 1 1.185-.461h6.44c.436 0 .863.161 1.185.46c.322.301.513.72.513 1.165v2.015h.582c.794 0 1.5-.607 1.5-1.43V1.43C14 .607 13.294 0 12.5 0zm9.168 7.515H3.332V5.5c0-.085.036-.176.115-.25a.5.5 0 0 1 .333-.125h6.44a.5.5 0 0 1 .332.125c.08.074.116.165.116.25zM4.75 9.749a.75.75 0 0 0-1.5 0v1.1a.65.65 0 0 1-.65.65h-.1a.75.75 0 0 0 0 1.5h.1a2.15 2.15 0 0 0 2.15-2.15zm5.25-.75a.75.75 0 0 0-.75.75v1.1a2.15 2.15 0 0 0 2.15 2.15h.1a.75.75 0 0 0 0-1.5h-.1a.65.65 0 0 1-.65-.65v-1.1a.75.75 0 0 0-.75-.75m-2.25.75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHotelAirConditionerSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelBed2Icon],svg[streamline-hotel-bed-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M7 3.5H3v-3m8 0v3H7v-3M.5 6h13"></svg:path></svg:g>`,
})
export class StreamlineHotelBed2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelBed2SolidIcon],svg[streamline-hotel-bed-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.046 1.54C.046.714.715.045 1.54.045h10.922c.824 0 1.493.669 1.493 1.493v4.313H.046V1.539Zm0 5.562v5.359c0 .824.669 1.493 1.493 1.493h10.922c.824 0 1.493-.669 1.493-1.493V7.1H.046Zm6.268-3.554v-.979a1 1 0 0 0-1-1H2.63a1 1 0 0 0-1 1v.979a1 1 0 0 0 1 1h2.685a1 1 0 0 0 1-1Zm6.057-.979v.979a1 1 0 0 1-1 1H8.686a1 1 0 0 1-1-1v-.979a1 1 0 0 1 1-1h2.685a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHotelBed2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelLaundryIcon],svg[streamline-hotel-laundry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M9.959 9h-.841C8.383 9 7.658 8.829 7 8.5v0A4.7 4.7 0 0 0 4.882 8h-.84M10 8.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-8.5-5h11"></svg:path></svg:g>`,
})
export class StreamlineHotelLaundryIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelLaundrySolidIcon],svg[streamline-hotel-laundry-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 1.5A1.5 1.5 0 0 1 2.5 0h9A1.5 1.5 0 0 1 13 1.5v.981H1zm0 2.231V12.5A1.5 1.5 0 0 0 2.5 14h9a1.5 1.5 0 0 0 1.5-1.5V3.731zM3.392 8.5a3.6 3.6 0 0 1 .206-1.202A3.609 3.609 0 1 1 3.392 8.5m1.11-.3a.5.5 0 0 1 .493-.417h.354c.765 0 1.213.187 1.616.354l.06.025c.377.157.758.304 1.511.304h.497a.5.5 0 0 1 .493.582A2.548 2.548 0 0 1 4.502 8.2" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHotelLaundrySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelOneStarIcon],svg[streamline-hotel-one-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 5.07v4.32M5.56 6.15h.36A1.08 1.08 0 0 0 7 5.07v0m1.44 4.32H5.56"></svg:path><svg:path d="M6.039 1.282a1.135 1.135 0 0 1 1.922 0l1.866 2.952l2.432.298a1.115 1.115 0 0 1 .721 1.836l-2.029 2.327l.654 3.22a1.12 1.12 0 0 1-.442 1.126a1.14 1.14 0 0 1-1.211.067L7 11.493l-2.952 1.615a1.14 1.14 0 0 1-1.211-.067a1.13 1.13 0 0 1-.442-1.125l.653-3.221L1.02 6.368a1.115 1.115 0 0 1 .72-1.836l2.433-.298L6.04 1.282Z"></svg:path></svg:g>`,
})
export class StreamlineHotelOneStarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelOneStarSolidIcon],svg[streamline-hotel-one-star-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.19.256A1.67 1.67 0 0 1 8.416.83l1.799 2.846l2.274.279a1.651 1.651 0 0 1 1.065 2.72l-.002.001l-1.933 2.217l.626 3.084l.001.003a1.66 1.66 0 0 1-.653 1.662l-.006.004a1.68 1.68 0 0 1-1.78.1L7 12.208l-2.807 1.536a1.68 1.68 0 0 1-1.78-.099l-.006-.004a1.66 1.66 0 0 1-.653-1.662v-.003l.627-3.084L.448 6.676l-.002-.002a1.652 1.652 0 0 1 1.065-2.719l2.274-.279L5.583.831L5.584.83c.15-.24.359-.437.606-.574m1.435 4.603a.625.625 0 1 0-1.25 0c0 .247-.2.447-.447.447H5.57a.625.625 0 1 0 0 1.25h.358q.233 0 .447-.06v2.026H5.57a.625.625 0 1 0 0 1.25h2.86a.625.625 0 1 0 0-1.25h-.805V4.86Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHotelOneStarSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelShowerHeadIcon],svg[streamline-hotel-shower-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 6.5a4 4 0 0 1 8 0zm2 3v1m-1.5 2v1m3.5-1v1m3.5-1v1M9 9.5v1m-2-8v-2"></svg:path>`,
})
export class StreamlineHotelShowerHeadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelShowerHeadSolidIcon],svg[streamline-hotel-shower-head-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.75.762a.75.75 0 0 0-1.5 0v1.315A4.5 4.5 0 0 0 2.5 6.514a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5a4.5 4.5 0 0 0-3.75-4.437zM5 8.488a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m-.75 3.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zm2.75-.75a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75m4.25.75a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zM9 8.488a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHotelShowerHeadSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelTwoStarIcon],svg[streamline-hotel-two-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.44 9.451H5.56v-.614c0-.429.254-.817.647-.99l1.603-.7a1.052 1.052 0 0 0-.422-2.016H6.64c-.47 0-.87.3-1.018.72"></svg:path><svg:path d="M6.039 1.282a1.135 1.135 0 0 1 1.922 0l1.866 2.952l2.432.298a1.115 1.115 0 0 1 .721 1.836l-2.028 2.327l.653 3.22a1.13 1.13 0 0 1-.442 1.126a1.14 1.14 0 0 1-1.211.067L7 11.493l-2.952 1.615a1.14 1.14 0 0 1-1.211-.067a1.13 1.13 0 0 1-.442-1.125l.653-3.221L1.02 6.368a1.115 1.115 0 0 1 .72-1.836l2.433-.298L6.04 1.282Z"></svg:path></svg:g>`,
})
export class StreamlineHotelTwoStarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelTwoStarSolidIcon],svg[streamline-hotel-two-star-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.19.256A1.67 1.67 0 0 1 8.416.83l1.799 2.846l2.274.279a1.651 1.651 0 0 1 1.065 2.72l-.002.001l-1.933 2.217l.626 3.084l.001.003a1.66 1.66 0 0 1-.653 1.662l-.006.004a1.68 1.68 0 0 1-1.78.1L7 12.208l-2.807 1.536a1.68 1.68 0 0 1-1.78-.099l-.006-.004a1.66 1.66 0 0 1-.653-1.662v-.003l.627-3.084L.448 6.676l-.002-.002a1.652 1.652 0 0 1 1.065-2.719l2.274-.279L5.583.831L5.584.83c.15-.24.359-.437.606-.574m.453 4.37c-.74 0-1.368.472-1.6 1.13a.625.625 0 0 0 1.178.417a.45.45 0 0 1 .422-.298h.742a.42.42 0 0 1 .168.804l-1.59.696c-.618.27-1.018.88-1.018 1.555v.609c0 .345.28.625.625.625h2.86a.625.625 0 1 0 0-1.25H6.196a.45.45 0 0 1 .267-.394l1.591-.696a1.67 1.67 0 0 0-.669-3.199h-.742Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHotelTwoStarSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHumidityNoneIcon],svg[streamline-humidity-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5L.5.5m8.64 12.448a4.48 4.48 0 0 1-6.619-3.98a5.5 5.5 0 0 1 .498-1.932m8.001 3.984A4.5 4.5 0 0 0 11.5 9C11.5 6.51 7 .5 7 .5S5.626 2.335 4.397 4.397"></svg:path>`,
})
export class StreamlineHumidityNoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineHumidityNoneSolidIcon],svg[streamline-humidity-none-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7 .5l.4-.3a.5.5 0 0 0-.8 0zm4.717 10.157A5 5 0 0 0 12 9c0-.74-.324-1.668-.75-2.588c-.433-.94-1.007-1.944-1.575-2.86A52 52 0 0 0 7.453.273L7.414.218l-.01-.014l-.003-.003V.2L7 .5L6.6.2l-.001.002l-.003.003l-.01.014l-.039.052l-.145.198a52 52 0 0 0-1.966 2.906L1.28.22A.75.75 0 1 0 .22 1.28l12.5 12.5a.75.75 0 1 0 1.06-1.06zm-8.69-4.82l7.08 7.08A5 5 0 0 1 2 9c0-.74.324-1.668.75-2.588q.131-.285.277-.575" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHumidityNoneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineIceCream2Icon],svg[streamline-ice-cream-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 .5H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1M5.5 3v3.5m3-3.5v3.5m0 3V12a1.5 1.5 0 0 1-3 0V9.5"></svg:path>`,
})
export class StreamlineIceCream2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineIceCream2SolidIcon],svg[streamline-ice-cream-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.705 1.449C2.705.649 3.354 0 4.154 0h5.692c.8 0 1.449.649 1.449 1.449V8.09c0 .8-.649 1.449-1.449 1.449H4.154A1.45 1.45 0 0 1 2.705 8.09zm5.437 11.41v-2H5.858v2a1.141 1.141 0 1 0 2.284 0M5.346 2.374c.345 0 .625.28.625.625v3.5a.625.625 0 1 1-1.25 0V3c0-.345.28-.625.625-.625ZM9.279 3a.625.625 0 0 0-1.25 0v3.5a.625.625 0 1 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineIceCream2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineIceCream3Icon],svg[streamline-ice-cream-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.354 6.467l-2.87 6.697a.54.54 0 0 1-.999 0L3.637 6.467"></svg:path><svg:path d="M4.876 6.867a2.129 2.129 0 1 0 0-4.258a2.129 2.129 0 0 0 0 4.258"></svg:path><svg:path d="M4.876 2.619a2.119 2.119 0 1 1 4.238 0"></svg:path><svg:path d="M9.124 6.867a2.129 2.129 0 1 0 0-4.258a2.129 2.129 0 0 0 0 4.258"></svg:path></svg:g>`,
})
export class StreamlineIceCream3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineIceCream3SolidIcon],svg[streamline-ice-cream-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.475 2.405a2.476 2.476 0 0 0-4.95 0A2.476 2.476 0 1 0 7 6.226a2.476 2.476 0 1 0 2.475-3.82ZM6.029 13.358L3.934 8.43A3.73 3.73 0 0 0 7 7.95a3.73 3.73 0 0 0 3.06.481l-2.11 4.926a1.04 1.04 0 0 1-1.92 0Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineIceCream3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageAccessoriesLensesPhotosCameraShutterPicturePhotographyPicturesPhotoLensIcon],svg[streamline-image-accessories-lenses-photos-camera-shutter-picture-photography-pictures-photo-lens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:circle cx="7" cy="7" r="2.5"></svg:circle><svg:path d="M4.5 7V1M7 4.5h6M9.5 7v6M7 9.5H1"></svg:path></svg:g>`,
})
export class StreamlineImageAccessoriesLensesPhotosCameraShutterPicturePhotographyPicturesPhotoLensIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageBlurIcon],svg[streamline-image-blur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M5.542 2.896a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m2.917.25a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m-2.917 8.708a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25M2.771 5.667a.125.125 0 1 1 0-.25m0 .25a.125.125 0 0 0 0-.25m0 3.166a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m8.458-2.666a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m0 3.166a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25m-2.77 3.021a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25M5.5 5.792a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m3.021.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M5.5 8.708a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m3.021.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineImageBlurIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageBlurSolidIcon],svg[streamline-image-blur-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0M5.396 9.625a1.02 1.02 0 1 0 0-2.042a1.02 1.02 0 0 0 0 2.042m2.187-1.02a1.02 1.02 0 1 0 2.042 0a1.02 1.02 0 0 0-2.042 0m1.021-4.23a1.02 1.02 0 1 0 0 2.042a1.02 1.02 0 0 0 0-2.042m-2.187 1.02a1.02 1.02 0 1 0-2.042 0a1.02 1.02 0 0 0 2.042 0m-.875-1.982a.642.642 0 1 1 0-1.284a.642.642 0 0 1 0 1.284m-.643 7.816a.642.642 0 1 0 1.285 0a.642.642 0 0 0-1.285 0M2.771 6.184a.642.642 0 1 1 0-1.285a.642.642 0 0 1 0 1.285m7.816-.642a.642.642 0 1 0 1.284 0a.642.642 0 0 0-1.284 0M2.771 9.1a.642.642 0 1 1 0-1.285a.642.642 0 0 1 0 1.285m5.045-6.33a.642.642 0 1 0 1.285 0a.642.642 0 0 0-1.285 0M11.23 9.1a.642.642 0 1 1 0-1.285a.642.642 0 0 1 0 1.285m-3.413 2.128a.642.642 0 1 0 1.284 0a.642.642 0 0 0-1.284 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineImageBlurSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageCamera1PhotosPictureCameraPhotographyPhotoPicturesIcon],svg[streamline-image-camera-1-photos-picture-camera-photography-photo-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 5a1 1 0 0 0-1-1h-2L9 2H5L3.5 4h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1Z"></svg:path><svg:circle cx="7" cy="7.5" r="2.25"></svg:circle></svg:g>`,
})
export class StreamlineImageCamera1PhotosPictureCameraPhotographyPhotoPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageCamera2PhotosPictureCameraPhotographyPhotoPicturesIcon],svg[streamline-image-camera-2-photos-picture-camera-photography-photo-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="3.75" rx="1"></svg:rect><svg:circle cx="7" cy="8.25" r="2"></svg:circle><svg:path d="M9.5 3.75v-1.5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1.5"></svg:path></svg:g>`,
})
export class StreamlineImageCamera2PhotosPictureCameraPhotographyPhotoPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageCameraSettingPinPhotosCameraMapPhotographyPicturesMapsSettingsPinPhotoIcon],svg[streamline-image-camera-setting-pin-photos-camera-map-photography-pictures-maps-settings-pin-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 3.5a1 1 0 0 0-1-1h-2L9 .5H5l-1.5 2h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3l2.5 4l2.5-4h3a1 1 0 0 0 1-1Z"></svg:path><svg:circle cx="7" cy="5.5" r="2"></svg:circle></svg:g>`,
})
export class StreamlineImageCameraSettingPinPhotosCameraMapPhotographyPicturesMapsSettingsPinPhotoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageCameraTripodTripodPhotosPictureCameraPhotographyPhotoPicturesIcon],svg[streamline-image-camera-tripod-tripod-photos-picture-camera-photography-photo-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 8.5v5m0-5l-4.5 5m4.5-5l4.5 5"></svg:path><svg:rect width="11" height="8" x="1.5" y=".5" rx="1"></svg:rect><svg:circle cx="7" cy="4.5" r="1.5"></svg:circle></svg:g>`,
})
export class StreamlineImageCameraTripodTripodPhotosPictureCameraPhotographyPhotoPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageFlash1FlashPowerConnectChargeElectricityLightningIcon],svg[streamline-image-flash-1-flash-power-connect-charge-electricity-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.25.5L2 5.81a.5.5 0 0 0 .46.69h2.79l-2 7l8.59-8.14a.5.5 0 0 0-.34-.86H7.75l2-4Z"></svg:path>`,
})
export class StreamlineImageFlash1FlashPowerConnectChargeElectricityLightningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageFlash2FlashPowerConnectChargeElectricityLightningIcon],svg[streamline-image-flash-2-flash-power-connect-charge-electricity-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 .5v5h3.5l-5.5 8v-5H2.5L8 .5z"></svg:path>`,
})
export class StreamlineImageFlash2FlashPowerConnectChargeElectricityLightningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePhotoCompositionVerticalCameraPortraitFrameVerticalCompositionPhotographyPhotoIcon],svg[streamline-image-photo-composition-vertical-camera-portrait-frame-vertical-composition-photography-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.2 1.19a.52.52 0 0 0 0-.47a.49.49 0 0 0-.46-.22H3.26a.49.49 0 0 0-.41.22a.52.52 0 0 0-.05.47a14.67 14.67 0 0 1 0 11.62a.52.52 0 0 0 .05.47a.49.49 0 0 0 .41.22h7.48a.49.49 0 0 0 .41-.22a.52.52 0 0 0 0-.47a14.67 14.67 0 0 1 .05-11.62Z"></svg:path>`,
})
export class StreamlineImagePhotoCompositionVerticalCameraPortraitFrameVerticalCompositionPhotographyPhotoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePhotoCompsitionHorizontalCameraHorizontalPanoramaCompositionPhotographyPhotoPicturesIcon],svg[streamline-image-photo-compsition-horizontal-camera-horizontal-panorama-composition-photography-photo-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.81 11.2a.52.52 0 0 0 .47 0a.49.49 0 0 0 .22-.41V3.26a.49.49 0 0 0-.22-.41a.52.52 0 0 0-.47-.05a14.67 14.67 0 0 1-11.62 0a.52.52 0 0 0-.47.05a.49.49 0 0 0-.22.41v7.48a.49.49 0 0 0 .22.41a.52.52 0 0 0 .47 0a14.67 14.67 0 0 1 11.62.05Z"></svg:path>`,
})
export class StreamlineImagePhotoCompsitionHorizontalCameraHorizontalPanoramaCompositionPhotographyPhotoPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePhotoFocusFramePhotosFramePhotoCameraPhotographyPicturesFocusIcon],svg[streamline-image-photo-focus-frame-photos-frame-photo-camera-photography-pictures-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="2.5" rx="1"></svg:rect><svg:path d="M11 6.5V9H8.5M3 7.5V5h2.5"></svg:path></svg:g>`,
})
export class StreamlineImagePhotoFocusFramePhotosFramePhotoCameraPhotographyPicturesFocusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePhotoFourPhotosCameraPicturePhotographyPicturesFourPhotoIcon],svg[streamline-image-photo-four-photos-camera-picture-photography-pictures-four-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="5" height="5" x=".5" y=".5" rx=".5"></svg:rect><svg:rect width="5" height="5" x="8.5" y=".5" rx=".5"></svg:rect><svg:rect width="5" height="5" x=".5" y="8.5" rx=".5"></svg:rect><svg:rect width="5" height="5" x="8.5" y="8.5" rx=".5"></svg:rect></svg:g>`,
})
export class StreamlineImagePhotoFourPhotosCameraPicturePhotographyPicturesFourPhotoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePhotoPolaroidFourPhotosCameraPolaroidPicturePhotographyPicturesFourPhotoIcon],svg[streamline-image-photo-polaroid-four-photos-camera-polaroid-picture-photography-pictures-four-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="5.25" height="5.25" x=".5" y=".5" rx=".5"></svg:rect><svg:rect width="5.25" height="5.25" x="8.25" y=".5" rx=".5"></svg:rect><svg:rect width="5.25" height="5.25" x=".5" y="8.25" rx=".5"></svg:rect><svg:rect width="5.25" height="5.25" x="8.25" y="8.25" rx=".5"></svg:rect><svg:path d="M.5 3.5h5.25m2.5 0h5.25m-5.25 7.75h5.25m-13 0h5.25"></svg:path></svg:g>`,
})
export class StreamlineImagePhotoPolaroidFourPhotosCameraPolaroidPicturePhotographyPicturesFourPhotoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePhotoPolaroidPhotosPolaroidPictureCameraPhotographyPhotoPicturesIcon],svg[streamline-image-photo-polaroid-photos-polaroid-picture-camera-photography-photo-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="9" height="9" x=".5" y=".5" rx="1" transform="rotate(180 5 5)"></svg:rect><svg:path d="m12 4.7l.78.25a1 1 0 0 1 .64 1.27l-2.18 6.59a1 1 0 0 1-1.26.64L5.56 12M.5 7h9"></svg:path></svg:g>`,
})
export class StreamlineImagePhotoPolaroidPhotosPolaroidPictureCameraPhotographyPhotoPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePictureFlowerPhotosPhotoPictureCameraPhotographyPicturesFlowerIcon],svg[streamline-image-picture-flower-photos-photo-picture-camera-photography-pictures-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1" transform="rotate(180 7 7)"></svg:rect><svg:path d="M10 6.5a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3V4.31a.5.5 0 0 1 .72-.45L7 5l2.28-1.14a.5.5 0 0 1 .72.45Zm-3 3v4m0 0L9.5 11M7 13.5L4.5 11"></svg:path></svg:g>`,
})
export class StreamlineImagePictureFlowerPhotosPhotoPictureCameraPhotographyPicturesFlowerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePictureGalleryPagesFilterPicturePaginationImageIcon],svg[streamline-image-picture-gallery-pages-filter-picture-pagination-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10.5" height="8.5" x="3" y="4" rx="1" transform="rotate(180 8.25 8.25)"></svg:rect><svg:path d="M.5 10V2.5a1 1 0 0 1 1-1h9M3.6 12.42l3.93-4.15A1 1 0 0 1 9 8.26l3.95 4.14"></svg:path></svg:g>`,
})
export class StreamlineImagePictureGalleryPagesFilterPicturePaginationImageIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePictureLandscape1PhotosPhotoLandscapePicturePhotographyCameraPicturesIcon],svg[streamline-image-picture-landscape-1-photos-photo-landscape-picture-photography-camera-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1" transform="rotate(180 7.005 7)"></svg:rect><svg:circle cx="9.25" cy="4.75" r="1.75"></svg:circle><svg:path d="M9.4 13.5a7.36 7.36 0 0 0-7.4-6a7.88 7.88 0 0 0-1.5.14"></svg:path><svg:path d="M13.5 9.91A7.8 7.8 0 0 0 11 9.5a7.89 7.89 0 0 0-3.13.64"></svg:path></svg:g>`,
})
export class StreamlineImagePictureLandscape1PhotosPhotoLandscapePicturePhotographyCameraPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImagePictureLandscape2PhotosPhotoLandscapePicturePhotographyCameraPicturesIcon],svg[streamline-image-picture-landscape-2-photos-photo-landscape-picture-photography-camera-pictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1" transform="rotate(180 7 7)"></svg:rect><svg:path d="M.5 11h13m-9.66 0l5.21-4.88a.5.5 0 0 1 .64 0l3.81 2.73"></svg:path><svg:circle cx="4.5" cy="4.5" r="1.5"></svg:circle></svg:g>`,
})
export class StreamlineImagePictureLandscape2PhotosPhotoLandscapePicturePhotographyCameraPicturesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageSaturationIcon],svg[streamline-image-saturation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.835 11.473V4C5.84 4.902 3.85 6.615 3.85 9.081c0 1.825 1.99 2.417 2.985 2.392"></svg:path><svg:path d="M12 8.996C12 5.498 7 .5 7 .5S2 5.498 2 8.996a4.77 4.77 0 0 0 1.572 3.28C4.509 13.12 6 13.494 7 13.494s2.491-.375 3.428-1.218A4.77 4.77 0 0 0 12 8.996"></svg:path></svg:g>`,
})
export class StreamlineImageSaturationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineImageSaturationSolidIcon],svg[streamline-image-saturation-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 .75L6.47.22a.75.75 0 0 1 1.06 0zM7 12.5c-.838 0-2.072-.328-2.796-.98A3.84 3.84 0 0 1 2.94 8.904c.005-.674.251-1.478.676-2.348c.423-.868.996-1.744 1.582-2.534A28 28 0 0 1 7 1.841zM7 .75l.53-.53l.002.001l.003.004l.012.011l.043.045l.16.165a29 29 0 0 1 2.258 2.682c.616.833 1.246 1.79 1.724 2.77c.473.969.828 2.02.828 3.025l-.001.042a5.34 5.34 0 0 1-1.76 3.67C9.722 13.606 8.087 14 7 14c-1.085 0-2.72-.394-3.799-1.364a5.34 5.34 0 0 1-1.76-3.713c0-1.005.354-2.056.828-3.026c.478-.98 1.107-1.936 1.724-2.769A29 29 0 0 1 6.41.281l.043-.045l.012-.011l.003-.004h.001V.22z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineImageSaturationSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxBlockIcon],svg[streamline-inbox-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.25 13.5a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5m2.3-.95l-4.6-4.6M4.5 9.5h-3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1V5"></svg:path><svg:path d="M.5 1.76L6.5 6l6-4.24"></svg:path></svg:g>`,
})
export class StreamlineInboxBlockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxBlockSolidIcon],svg[streamline-inbox-block-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.576 0h9.311c.858 0 1.552.695 1.552 1.552v.077L6.232 4.733L.024 1.629v-.077C.024.695.72 0 1.576 0m4.935 5.99l5.928-2.963v3.202a4.67 4.67 0 0 0-6.507 3.082H1.576A1.55 1.55 0 0 1 .024 7.76V3.027L5.952 5.99a.63.63 0 0 0 .56 0Zm3.949 2.442a2.028 2.028 0 0 1 1.862 2.83L9.657 8.597c.246-.106.518-.165.803-.165m3.527 2.028a3.52 3.52 0 0 1-1.08 2.54a3.528 3.528 0 1 1 1.08-2.54m-5.39-.803l2.665 2.665a2.028 2.028 0 0 1-2.665-2.665" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInboxBlockSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxFavoriteIcon],svg[streamline-inbox-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.45 7.336a.59.59 0 0 1 1.1 0l.64 1.63h1.71a.61.61 0 0 1 .56.39a.59.59 0 0 1-.16.65l-1.51 1.35l.64 1.28a.58.58 0 0 1-.12.69a.61.61 0 0 1-.7.1l-1.61-.91l-1.61.88a.61.61 0 0 1-.7-.1a.58.58 0 0 1-.12-.69l.64-1.28l-1.51-1.36a.59.59 0 0 1-.16-.65a.61.61 0 0 1 .56-.35h1.71zM4 9.5H1.5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4"></svg:path><svg:path d="M.5 1.76L6.5 6l6-4.24"></svg:path></svg:g>`,
})
export class StreamlineInboxFavoriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxFavoriteHeartIcon],svg[streamline-inbox-favorite-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 9.5h-3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1V5"></svg:path><svg:path d="M.5 1.76L6.5 6l6-4.24M10 8.991c1.17-2.595 3.5-1.293 3.5.651c0 2.555-3.5 3.858-3.5 3.858s-3.5-1.303-3.5-3.908c0-1.944 2.33-3.246 3.5-.601"></svg:path></svg:g>`,
})
export class StreamlineInboxFavoriteHeartIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxFavoriteHeartSolidIcon],svg[streamline-inbox-favorite-heart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.58 0h9.311c.857 0 1.552.695 1.552 1.552v.077L6.235 4.733L.028 1.629v-.077C.028.695.723 0 1.58 0m4.935 5.99l5.928-2.963v3.788a2.65 2.65 0 0 0-1.665.316a3 3 0 0 0-.42.282a3 3 0 0 0-.433-.302a2.64 2.64 0 0 0-2.158-.229c-1.073.35-1.84 1.311-2.088 2.43h-4.1a1.55 1.55 0 0 1-1.55-1.554V3.027L5.956 5.99a.63.63 0 0 0 .559 0m7.329 4.152c0-1.944-2.33-3.246-3.5-.651c-1.17-2.645-3.5-1.343-3.5.601c0 2.605 3.5 3.908 3.5 3.908s3.5-1.303 3.5-3.858" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInboxFavoriteHeartSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxFavoriteSolidIcon],svg[streamline-inbox-favorite-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.56 0h9.31c.858 0 1.553.695 1.553 1.552v.077L6.215 4.733L.008 1.629v-.077C.008.695.702 0 1.56 0m4.935 5.99l5.928-2.963v4.732q0 .07-.006.14l-.201-.512a1.84 1.84 0 0 0-3.428 0l-.328.835h-.852A1.86 1.86 0 0 0 5.91 9.289l-.01.022H1.56A1.55 1.55 0 0 1 .008 7.76V3.027L5.936 5.99a.63.63 0 0 0 .559 0m3.673 1.579a.6.6 0 0 0-.216.273l-.64 1.63h-1.71a.61.61 0 0 0-.56.35a.59.59 0 0 0 .16.65l1.51 1.36l-.64 1.28a.58.58 0 0 0 .12.69a.61.61 0 0 0 .7.1l1.61-.88l1.61.91a.61.61 0 0 0 .876-.425a.58.58 0 0 0-.056-.365l-.64-1.28l1.51-1.35a.59.59 0 0 0-.06-.93a.6.6 0 0 0-.34-.11h-1.71l-.64-1.63a.59.59 0 0 0-.883-.273Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInboxFavoriteSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxLockIcon],svg[streamline-inbox-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 9.5h-4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1V5"></svg:path><svg:path d="M.5 1.76L6.5 6l6-4.24M8 9.5h5c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H8c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5m.5 0v-1c0-1.1.9-2 2-2s2 .9 2 2v1"></svg:path></svg:g>`,
})
export class StreamlineInboxLockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxLockSolidIcon],svg[streamline-inbox-lock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.891 0H1.58C.723 0 .028.695.028 1.552v.077l6.207 3.104l6.208-3.104v-.077C12.443.695 11.748 0 10.891 0m1.552 3.027L6.515 5.99a.63.63 0 0 1-.56 0L.029 3.027v4.732c0 .858.695 1.552 1.552 1.552h4.51a2.3 2.3 0 0 1 .414-.491a4 4 0 0 1 5.939-3.317z"></svg:path><svg:path d="M9.25 9a1.25 1.25 0 1 1 2.5 0v.5h-2.5zm-1.5.531V9a2.75 2.75 0 0 1 5.5 0v.531a1 1 0 0 1 .75.969V13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2.5a1 1 0 0 1 .75-.969"></svg:path></svg:g>`,
})
export class StreamlineInboxLockSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxTray1Icon],svg[streamline-inbox-tray-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 8H10a1 1 0 0 0-1 1a2 2 0 0 1-4 0a1 1 0 0 0-1-1H.5v4.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1zm-9-4L7 6.5L9.5 4M7 .5v6"></svg:path>`,
})
export class StreamlineInboxTray1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxTray1SolidIcon],svg[streamline-inbox-tray-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.75.76a.75.75 0 0 0-1.5 0v2.75H4.5a.75.75 0 0 0-.53 1.28l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 0 0-.53-1.28H7.75zM.5 8.33a.5.5 0 0 0-.5.5v3.67A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5V8.83a.5.5 0 0 0-.5-.5h-2.973a1.5 1.5 0 0 0-1.5 1.5c0 .974-.976 1.732-2.03 1.725c-1.024-.007-1.97-.768-1.97-1.725a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInboxTray1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxTray2Icon],svg[streamline-inbox-tray-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 8H10a1 1 0 0 0-1 1a2 2 0 0 1-4 0a1 1 0 0 0-1-1H.5v4.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1zm-9-5L7 .5L9.5 3M7 6.5v-6"></svg:path>`,
})
export class StreamlineInboxTray2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxTray2SolidIcon],svg[streamline-inbox-tray-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.193 3.546a.75.75 0 0 1-.693.463H7.75v2.75a.75.75 0 0 1-1.5 0V4.01H4.5a.75.75 0 0 1-.53-1.28l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 .163.817ZM.5 8.33a.5.5 0 0 0-.5.5v3.67A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5V8.83a.5.5 0 0 0-.5-.5h-2.973a1.5 1.5 0 0 0-1.5 1.5c0 .974-.976 1.732-2.03 1.725c-1.024-.007-1.97-.768-1.97-1.725a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInboxTray2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineIncognitoModeIcon],svg[streamline-incognito-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.499 11.242a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m6.502 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0"></svg:path><svg:path d="M5.998 11.242s0-1 1-1s1.001 1 1.001 1M.5 6.5h13M2.86 1.336A1 1 0 0 1 3.848.5h6.306a1 1 0 0 1 .986.836L12 6.5H2z"></svg:path></svg:g>`,
})
export class StreamlineIncognitoModeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineIncognitoModeSolidIcon],svg[streamline-incognito-mode-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.544 1.218A1.46 1.46 0 0 1 3.982 0h6.036c.712 0 1.32.515 1.438 1.218l.712 4.276h1.054a.75.75 0 0 1 0 1.5H.778a.75.75 0 0 1 0-1.5h1.054zm6.206 9.681a1.5 1.5 0 1 1 3.001 0a1.5 1.5 0 0 1-3.001 0m1.5-3a3 3 0 0 0-2.53 1.387A1.9 1.9 0 0 0 7 9.149q-.397 0-.72.136a3 3 0 1 0 .47 1.615v-.002a.5.5 0 0 1 .044-.163a.13.13 0 0 1 .042-.056c.006-.003.045-.03.163-.03c.117 0 .157.027.162.03c.009.006.024.02.042.056a.5.5 0 0 1 .046.175v.002l.001.03a3 3 0 1 0 3-3.043m-6.501 1.5a1.5 1.5 0 0 1 1.5 1.463v.072a1.5 1.5 0 1 1-1.5-1.535" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineIncognitoModeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineIncomingCallIcon],svg[streamline-incoming-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.53 12.823a2.7 2.7 0 0 1-3.37-.36l-.38-.38a.91.91 0 0 1 0-1.28l1.6-1.59a.9.9 0 0 1 1.27 0v0a.91.91 0 0 0 1.28 0l2.55-2.55a.91.91 0 0 0 0-1.28v0a.9.9 0 0 1 0-1.27l1.54-1.6a.91.91 0 0 1 1.28 0l.38.38a2.7 2.7 0 0 1 .41 3.37a24.2 24.2 0 0 1-6.56 6.56M2 5.5h3.5V2m0 3.5l-5-5"></svg:path>`,
})
export class StreamlineIncomingCallIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineIncomingCallSolidIcon],svg[streamline-incoming-call-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.4 5.995a.75.75 0 0 1-.69.461H2.442a.75.75 0 0 1-.53-1.28l1.102-1.103L.512 1.571a.75.75 0 1 1 1.06-1.06l2.503 2.502L5.177 1.91a.75.75 0 0 1 1.28.53v3.266q0 .155-.057.29Zm.337 7.284a2.7 2.7 0 0 1-3.37-.36l-.38-.38a.91.91 0 0 1 0-1.28l1.6-1.59a.9.9 0 0 1 1.27 0a.91.91 0 0 0 1.28 0l2.55-2.55a.91.91 0 0 0 0-1.28a.9.9 0 0 1 0-1.27l1.54-1.6a.91.91 0 0 1 1.28 0l.38.38a2.7 2.7 0 0 1 .41 3.37a24.2 24.2 0 0 1-6.56 6.56" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineIncomingCallSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineIndustryInnovationAndInfrastructureIcon],svg[streamline-industry-innovation-and-infrastructure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.65 11.694v-3.62l3.167-1.357l3.167 1.358v3.619L3.817 13.05z"></svg:path><svg:path d="m.65 8.067l3.167 1.357l3.167-1.357M3.817 3.122L6.983 4.48l3.167-1.357"></svg:path><svg:path d="m6.983 8.067l3.167 1.357l3.167-1.357"></svg:path><svg:path d="M3.819 6.715v-3.62l3.166-1.357l3.167 1.357v3.62L6.985 8.072zm3.164 4.979v-3.62l3.167-1.357l3.167 1.358v3.619L10.15 13.05zM3.817 9.426v3.625m6.335-3.625v3.625M6.983 4.48v3.624"></svg:path></svg:g>`,
})
export class StreamlineIndustryInnovationAndInfrastructureIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineIndustryInnovationAndInfrastructureSolidIcon],svg[streamline-industry-innovation-and-infrastructure-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.207.478a.5.5 0 0 0-.414 0L4.17 1.672L6.998 2.96l2.83-1.289zM3.7 5.61V2.556l2.8 1.275v3.375L3.991 6.065a.5.5 0 0 1-.293-.455Zm3.8 6.712v-3.34l2.652 1.208v3.375l-2.506-1.141a.5.5 0 0 1-.147-.102Zm3.652 1.245V10.19l2.803-1.276v3.055a.5.5 0 0 1-.293.455zM6.498 8.982v3.344a.5.5 0 0 1-.143.098l-2.51 1.143V10.19zM2.845 10.19v3.375L.34 12.424a.5.5 0 0 1-.293-.455V8.915l2.8 1.275Zm4.653-2.982V3.83l2.803-1.276V5.61a.5.5 0 0 1-.293.455zm2.948-.37a.5.5 0 0 1 .414 0l2.62 1.192l-2.83 1.289L7.825 8.03l2.622-1.194Zm-7.306 0a.5.5 0 0 1 .414 0l2.62 1.192l-2.829 1.29L.518 8.03L3.14 6.837Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineIndustryInnovationAndInfrastructureSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInformationCircleIcon],svg[streamline-information-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M5.5 10h3"></svg:path><svg:path d="M7 10V6.5H6m1-2.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineInformationCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInformationCircleSolidIcon],svg[streamline-information-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14M5.5 9.375a.625.625 0 1 0 0 1.25h3a.625.625 0 1 0 0-1.25h-.875V6.5A.625.625 0 0 0 7 5.875H6a.625.625 0 1 0 0 1.25h.375v2.25zM8 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInformationCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInformationDeskIcon],svg[streamline-information-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.901 4.317v1.364M9.9 2.662a.124.124 0 0 1-.124-.125c0-.07.056-.125.124-.125m.002.25a.125.125 0 0 0 .124-.125a.124.124 0 0 0-.124-.125M.857 12.864h12.007M1.989 6.829a1.939 1.939 0 1 0 3.878 0a1.939 1.939 0 1 0-3.878 0"></svg:path><svg:path d="M.855 12.865v-1.024a3.072 3.072 0 1 1 6.145 0v1.024m.394-6.149A3.554 3.554 0 1 0 6.33 4"></svg:path></svg:g>`,
})
export class StreamlineInformationDeskIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInformationDeskCustomerIcon],svg[streamline-information-desk-customer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.284 3.503a1.621 1.621 0 1 0 3.242 0a1.621 1.621 0 1 0-3.242 0"></svg:path><svg:path d="M8.473 8.367v-.81a2.432 2.432 0 0 1 4.865 0v.81M6.6 8.369h6.738M3.604 5.612a1.712 1.712 0 1 0 0-3.425a1.712 1.712 0 0 0 0 3.425"></svg:path><svg:path d="M6.6 8.609a2.996 2.996 0 1 0-5.993 0v1.284h1.285l.428 3.424h2.568l.428-3.424H6.6z"></svg:path></svg:g>`,
})
export class StreamlineInformationDeskCustomerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInformationDeskCustomerSolidIcon],svg[streamline-information-desk-customer-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.918 1.623a1.623 1.623 0 1 1-3.246 0a1.623 1.623 0 0 1 3.246 0m1.024 5.037a.75.75 0 0 1-.732.586H7.098a.75.75 0 1 1 0-1.5h1.596A2.706 2.706 0 0 1 14 6.493a.27.27 0 0 1-.058.167M1.359 3.324a1.811 1.811 0 1 0 3.622 0a1.811 1.811 0 0 0-3.622 0M0 9.019a3.17 3.17 0 1 1 6.34 0v.858a.5.5 0 0 1-.5.5h-.86l-.398 3.185a.5.5 0 0 1-.496.438H2.253a.5.5 0 0 1-.496-.438l-.399-3.185H.5a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInformationDeskCustomerSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInformationDeskSolidIcon],svg[streamline-information-desk-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.09 2.735a3.686 3.686 0 0 1 1.316 4.653A4.054 4.054 0 1 0 6.09 2.735m3.791 1.066c.345 0 .625.28.625.625V6.22a.625.625 0 0 1-1.25 0V4.426c0-.345.28-.625.625-.625m-.733-1.58c0 .471.39.678.665.708l.07.004c.273 0 .734-.2.734-.712c0-.472-.39-.679-.665-.709l-.07-.004c-.273 0-.734.2-.734.713M4.065 8.259a2.44 2.44 0 1 0 0-4.879a2.44 2.44 0 0 0 0 4.879M0 13.137a4.065 4.065 0 0 1 8.075-.673h5.157a.75.75 0 0 1 0 1.5H.77a.75.75 0 0 1-.748-.698a.4.4 0 0 1-.021-.129Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInformationDeskSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInputBoxIcon],svg[streamline-input-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 5H13a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H7.5m-5 0H1a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 1 5h1.5M4 2.5h2m-2 9h2m-1-9v9"></svg:path>`,
})
export class StreamlineInputBoxIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInputBoxSolidIcon],svg[streamline-input-box-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 1.75a.75.75 0 0 0 0 1.5h.25v7.5H4a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-.25v-7.5H6a.75.75 0 0 0 0-1.5zM3 4.5H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2zm4 5h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H7z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInputBoxSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInsertCloudVideoIcon],svg[streamline-insert-cloud-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m5.344 7.948l3.875 2.422l-3.875 2.421z"></svg:path><svg:path d="M3.353 10.364a2.67 2.67 0 1 1 0-5.33q.225-.015.45 0a3.43 3.43 0 0 1 6.71 0q.23-.015.46 0a2.67 2.67 0 0 1 0 5.33"></svg:path></svg:g>`,
})
export class StreamlineInsertCloudVideoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInsertCloudVideoSolidIcon],svg[streamline-insert-cloud-video-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.158 1.818A3.93 3.93 0 0 0 3.422 4.53l-.07.004a3.17 3.17 0 1 0 .016 6.33h.553V8.17c0-1.375 1.512-2.213 2.678-1.484l3.52 2.2c.708.442.959 1.266.751 1.979h.103l.03-.001a3.17 3.17 0 0 0-.108-6.334a3.93 3.93 0 0 0-3.737-2.712M9.68 10.47a.5.5 0 0 0-.225-.525l-3.519-2.2a.5.5 0 0 0-.765.425v4.4a.5.5 0 0 0 .765.423l3.52-2.2a.5.5 0 0 0 .224-.323" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInsertCloudVideoSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInsertSideIcon],svg[streamline-insert-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 1H8m5.5 3H8m5.5 3H8m5.5 6H8m5.5-3H8M.5 1.5v4A.5.5 0 0 0 1 6h4a.5.5 0 0 0 .5-.5v-4A.5.5 0 0 0 5 1H1a.5.5 0 0 0-.5.5m0 7v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4A.5.5 0 0 0 5 8H1a.5.5 0 0 0-.5.5"></svg:path>`,
})
export class StreamlineInsertSideIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInsertSideSolidIcon],svg[streamline-insert-side-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.25.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM0 1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zM7.5 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5A.75.75 0 0 1 7.5 4m.75 2.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM7.5 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5A.75.75 0 0 1 7.5 10m.75 2.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInsertSideSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInsertTopLeftIcon],svg[streamline-insert-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 1H9m4.5 3H9m4.5 3H9m4.5 6H.5m13-3H.5M6 1H1a.5.5 0 0 0-.5.5v5A.5.5 0 0 0 1 7h5a.5.5 0 0 0 .5-.5v-5A.5.5 0 0 0 6 1"></svg:path>`,
})
export class StreamlineInsertTopLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInsertTopLeftSolidIcon],svg[streamline-insert-top-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.25.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM1 .5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zM8.5 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 8.5 4m.75 2.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM0 10a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 10m.75 2.25a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInsertTopLeftSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInsertTopRightIcon],svg[streamline-insert-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 1H5M.5 4H5M.5 7H5M.5 13h13m-13-3h13M8 7h5a.5.5 0 0 0 .5-.5v-5A.5.5 0 0 0 13 1H8a.5.5 0 0 0-.5.5v5A.5.5 0 0 0 8 7"></svg:path>`,
})
export class StreamlineInsertTopRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInsertTopRightSolidIcon],svg[streamline-insert-top-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.75.25a.75.75 0 1 0 0 1.5h4a.75.75 0 0 0 0-1.5zM8 .5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zM0 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 0 4m.75 2.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM0 10a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 10m.75 2.25a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInsertTopRightSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInstagramIcon],svg[streamline-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.333 3.644a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path><svg:path d="M.858 3.431A2.573 2.573 0 0 1 3.431.858h6.862a2.573 2.573 0 0 1 2.573 2.573v6.862a2.573 2.573 0 0 1-2.573 2.573H3.43a2.573 2.573 0 0 1-2.573-2.573V3.43Z"></svg:path><svg:path d="M4.312 6.862a2.55 2.55 0 1 0 5.1 0a2.55 2.55 0 1 0-5.1 0"></svg:path></svg:g>`,
})
export class StreamlineInstagramIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInstagramSolidIcon],svg[streamline-instagram-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.39.787A2.604 2.604 0 0 0 .786 3.39v6.944a2.604 2.604 0 0 0 2.604 2.604h6.944a2.604 2.604 0 0 0 2.603-2.604V3.39A2.604 2.604 0 0 0 10.334.787zm7.693 2.607a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-4.22 1.388a2.08 2.08 0 1 0 0 4.16a2.08 2.08 0 0 0 0-4.16m-3.081 2.08a3.08 3.08 0 1 1 6.16 0a3.08 3.08 0 0 1-6.16 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInstagramSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInsuranceHandIcon],svg[streamline-insurance-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.315 1.031a.5.5 0 0 0-.5.5v1.407H6.409a.5.5 0 0 0-.5.5v1.625a.5.5 0 0 0 .5.5h1.406v1.406a.5.5 0 0 0 .5.5H9.94a.5.5 0 0 0 .5-.5V5.563h1.406a.5.5 0 0 0 .5-.5V3.438a.5.5 0 0 0-.5-.5H10.44V1.53a.5.5 0 0 0-.5-.5zm-7.732 9.75l2.444 2.037a2 2 0 0 0 1.28.463h6.443c.46 0 .833-.373.833-.833c0-.92-.746-1.667-1.667-1.667H5.437"></svg:path><svg:path d="m3.583 9.781l.75.75a1.06 1.06 0 1 0 1.5-1.5L4.669 7.867a2 2 0 0 0-1.414-.586H.583"></svg:path></svg:g>`,
})
export class StreamlineInsuranceHandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInsuranceHandSolidIcon],svg[streamline-insurance-hand-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.906 1.531a.5.5 0 0 1 .5-.5h1.625a.5.5 0 0 1 .5.5v1.407h1.406a.5.5 0 0 1 .5.5v1.625a.5.5 0 0 1-.5.5h-1.406v1.406a.5.5 0 0 1-.5.5H8.406a.5.5 0 0 1-.5-.5V5.563H6.5a.5.5 0 0 1-.5-.5V3.438a.5.5 0 0 1 .5-.5h1.406zM1.843 7H0v4l1.828 1.828A4 4 0 0 0 4.657 14H10.5a1.5 1.5 0 0 0 0-3H7.723a2.11 2.11 0 0 1-3.515.892l-1.45-1.45a.625.625 0 1 1 .884-.884l1.45 1.45a.86.86 0 0 0 1.307-1.109L4.672 8.172A4 4 0 0 0 1.843 7" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInsuranceHandSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAdd1ExpandCrossButtonsButtonMoreRemovePlusAddIcon],svg[streamline-interface-add-1-expand-cross-buttons-button-more-remove-plus-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .54v13M.5 7h13"></svg:path>`,
})
export class StreamlineInterfaceAdd1ExpandCrossButtonsButtonMoreRemovePlusAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAdd2RemoveBoldCrossButtonsButtonAddPlusIcon],svg[streamline-interface-add-2-remove-bold-cross-buttons-button-add-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6.5a1 1 0 0 0-1-1h-4v-4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1Z"></svg:path>`,
})
export class StreamlineInterfaceAdd2RemoveBoldCrossButtonsButtonAddPlusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAddCircleButtonRemoveCrossAddButtonsPlusCircleIcon],svg[streamline-interface-add-circle-button-remove-cross-add-buttons-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M7 4v6M4 7h6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAddCircleButtonRemoveCrossAddButtonsPlusCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAddSquareSquareRemoveCrossButtonsAddPlusButtonIcon],svg[streamline-interface-add-square-square-remove-cross-buttons-add-plus-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 4v6M4 7h6"></svg:path><svg:rect width="13" height="13" x=".5" y=".5" rx="3"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceAddSquareSquareRemoveCrossButtonsAddPlusButtonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertAlarmBell1NotificationVibrateRingSoundAlarmAlertBellNoiseIcon],svg[streamline-interface-alert-alarm-bell-1-notification-vibrate-ring-sound-alarm-alert-bell-noise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 13.25h2m3-7.5a4 4 0 0 0-8 0v3.5a1.5 1.5 0 0 1-1.5 1.5h11a1.5 1.5 0 0 1-1.5-1.5ZM.5 5.62A6 6 0 0 1 3 .75m10.5 4.87A6 6 0 0 0 11 .75"></svg:path>`,
})
export class StreamlineInterfaceAlertAlarmBell1NotificationVibrateRingSoundAlarmAlertBellNoiseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertAlarmBell2AlertBellRingNotificationAlarmIcon],svg[streamline-interface-alert-alarm-bell-2-alert-bell-ring-notification-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5a4.29 4.29 0 0 1 4.29 4.29c0 4.77 1.74 5.71 2.21 5.71H.5c.48 0 2.21-.95 2.21-5.71A4.29 4.29 0 0 1 7 .5ZM5.5 12.33a1.55 1.55 0 0 0 3 0"></svg:path>`,
})
export class StreamlineInterfaceAlertAlarmBell2AlertBellRingNotificationAlarmIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertAlarmBellOffDisableSilentNotificationOffSilenceAlarmBellAlertIcon],svg[streamline-interface-alert-alarm-bell-off-disable-silent-notification-off-silence-alarm-bell-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l13-13M6 13.5h2M8.73.84A4.51 4.51 0 0 0 2.5 5v2.5M3 11h10.5a2 2 0 0 1-2-2V5a4.42 4.42 0 0 0-.5-2"></svg:path>`,
})
export class StreamlineInterfaceAlertAlarmBellOffDisableSilentNotificationOffSilenceAlarmBellAlertIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertInformationCircleInformationFrameInfoMoreHelpPointCircleIcon],svg[streamline-interface-alert-information-circle-information-frame-info-more-help-point-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M7 7v3.5"></svg:path><svg:circle cx="7" cy="4.5" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceAlertInformationCircleInformationFrameInfoMoreHelpPointCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertRadioActive1DangerNukeRadiationNuclearWarningAlertRadioactiveCautionIcon],svg[streamline-interface-alert-radio-active-1-danger-nuke-radiation-nuclear-warning-alert-radioactive-caution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 4.83L3.75.94A6.49 6.49 0 0 0 .5 6.56H5a2 2 0 0 1 1-1.73Zm3 1.73h4.5A6.49 6.49 0 0 0 10.25.94L8 4.83a2 2 0 0 1 1 1.73Zm-2 2a2 2 0 0 1-1-.26l-2.25 3.89a6.51 6.51 0 0 0 6.5 0L8 8.3a2 2 0 0 1-1 .26Z"></svg:path>`,
})
export class StreamlineInterfaceAlertRadioActive1DangerNukeRadiationNuclearWarningAlertRadioactiveCautionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertRadioActive2WarningRadioactiveRadiationEmergencyDangerSafetyIcon],svg[streamline-interface-alert-radio-active-2-warning-radioactive-radiation-emergency-danger-safety-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.92 1.25a3.2 3.2 0 1 1-3.84 0"></svg:path><svg:path d="M.5 9.17a3.2 3.2 0 1 1 1.92 3.32"></svg:path><svg:path d="M11.58 12.49a3.19 3.19 0 1 1 1.92-3.32"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlertRadioActive2WarningRadioactiveRadiationEmergencyDangerSafetyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertRadioActive3WarningRadioactiveRadiationEmergencyDangerSafetyIcon],svg[streamline-interface-alert-radio-active-3-warning-radioactive-radiation-emergency-danger-safety-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7.49" r="3.5"></svg:circle><svg:path d="M9.35 1.31a3.32 3.32 0 1 1-4.7 0"></svg:path><svg:path d="M.5 8.5a3.32 3.32 0 1 1 2.35 4.07"></svg:path><svg:path d="M11.15 12.57A3.32 3.32 0 1 1 13.5 8.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlertRadioActive3WarningRadioactiveRadiationEmergencyDangerSafetyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertWarningCircleWarningAlertFrameExclamationCautionCircleIcon],svg[streamline-interface-alert-warning-circle-warning-alert-frame-exclamation-caution-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M7 3.5v3"></svg:path><svg:circle cx="7" cy="9.5" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceAlertWarningCircleWarningAlertFrameExclamationCautionCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertWarningDiamondDiamondAlertWarningFrameExclamationCautionIcon],svg[streamline-interface-alert-warning-diamond-diamond-alert-warning-frame-exclamation-caution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 3.5v3"></svg:path><svg:circle cx="7" cy="9.5" r=".5"></svg:circle><svg:rect width="9.82" height="9.82" x="2.09" y="2.09" rx="1.07" transform="rotate(-45 7 7)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceAlertWarningDiamondDiamondAlertWarningFrameExclamationCautionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertWarningTriangleFrameAlertWarningTriangleExclamationCautionIcon],svg[streamline-interface-alert-warning-triangle-frame-alert-warning-triangle-exclamation-caution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 5v3"></svg:path><svg:circle cx="7" cy="11" r=".5"></svg:circle><svg:path d="M7.89 1.05a1 1 0 0 0-1.78 0l-5.5 11a1 1 0 0 0 .89 1.45h11a1 1 0 0 0 .89-1.45Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlertWarningTriangleFrameAlertWarningTriangleExclamationCautionIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignBackBackDesignLayerLayersPileStackIcon],svg[streamline-interface-align-back-back-design-layer-layers-pile-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10.5" height="10.5" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M13.5 3.5v9a1 1 0 0 1-1 1h-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlignBackBackDesignLayerLayersPileStackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignFrontDesignFrontLayerLayersPileStackIcon],svg[streamline-interface-align-front-design-front-layer-layers-pile-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10.5" height="10.5" x="3" y="3" rx="1" transform="rotate(180 8.25 8.25)"></svg:rect><svg:path d="M.5 10.5v-9a1 1 0 0 1 1-1h9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlignFrontDesignFrontLayerLayersPileStackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignHorizontalCenterAlignCenterDesignIcon],svg[streamline-interface-align-horizontal-center-align-center-design-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="7" height="4" x="3.5" y=".5" rx="1"></svg:rect><svg:rect width="11" height="4" x="1.5" y="9.5" rx="1"></svg:rect><svg:path d="M7 4.5v5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlignHorizontalCenterAlignCenterDesignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignHorizontalLeftAlignDesignLeftIcon],svg[streamline-interface-align-horizontal-left-align-design-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5.5v13"></svg:path><svg:rect width="6.5" height="4" x="3" y="1.5" rx="1"></svg:rect><svg:rect width="10.5" height="4" x="3" y="8.5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceAlignHorizontalLeftAlignDesignLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignHorizontalRightAlignDesignRightIcon],svg[streamline-interface-align-horizontal-right-align-design-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5.5v13"></svg:path><svg:rect width="6.5" height="4" x="4.5" y="1.5" rx="1" transform="rotate(180 7.75 3.5)"></svg:rect><svg:rect width="10.5" height="4" x=".5" y="8.5" rx="1" transform="rotate(180 5.75 10.5)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceAlignHorizontalRightAlignDesignRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignLayers1DesignLayerLayersPileStackIcon],svg[streamline-interface-align-layers-1-design-layer-layers-pile-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.47 6.9a1.18 1.18 0 0 1-.94 0L.83 4.26a.56.56 0 0 1 0-1L6.53.6a1.18 1.18 0 0 1 .94 0l5.7 2.64a.56.56 0 0 1 0 1Zm6.03.45l-6.1 2.81a1 1 0 0 1-.83 0L.5 7.35m13 3.25l-6.1 2.81a1 1 0 0 1-.83 0L.5 10.6"></svg:path>`,
})
export class StreamlineInterfaceAlignLayers1DesignLayerLayersPileStackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignLayers2DesignLayerLayersPileStackIcon],svg[streamline-interface-align-layers-2-design-layer-layers-pile-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="8" height="6" x="5.5" y="1.5" rx="1"></svg:rect><svg:path d="M11 10H4a1 1 0 0 1-1-1V4"></svg:path><svg:path d="M9 12.5H1.5a1 1 0 0 1-1-1V6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlignLayers2DesignLayerLayersPileStackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignVerticalBottomAlignDesignBottomIcon],svg[streamline-interface-align-vertical-bottom-align-design-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 13.5H.5"></svg:path><svg:rect width="6.5" height="4" x="7.25" y="5.75" rx="1" transform="rotate(-90 10.5 7.75)"></svg:rect><svg:rect width="10.5" height="4" x="-1.75" y="3.75" rx="1" transform="rotate(-90 3.5 5.75)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceAlignVerticalBottomAlignDesignBottomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignVerticalCenterAlignDesignMiddleIcon],svg[streamline-interface-align-vertical-center-align-design-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="8" height="4" x="7.5" y="5.5" rx="1" transform="rotate(90 11.5 7.5)"></svg:rect><svg:rect width="11" height="4" x="-3" y="5" rx="1" transform="rotate(90 2.5 7)"></svg:rect><svg:path d="M9.5 7h-5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAlignVerticalCenterAlignDesignMiddleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlignVerticalTopAlignDesignTopIcon],svg[streamline-interface-align-vertical-top-align-design-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5.5H.5"></svg:path><svg:rect width="6.5" height="4" x="7.25" y="4.25" rx="1" transform="rotate(90 10.5 6.25)"></svg:rect><svg:rect width="10.5" height="4" x="-1.75" y="6.25" rx="1" transform="rotate(90 3.5 8.25)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceAlignVerticalTopAlignDesignTopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendDownLeft1ArrowBendCurveChangeDirectionLeftToDownIcon],svg[streamline-interface-arrows-bend-down-left-1-arrow-bend-curve-change-direction-left-to-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.75 11l2.5 2.5l2.5-2.5"></svg:path><svg:path d="M11.25.5h-5a1 1 0 0 0-1 1v12"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendDownLeft1ArrowBendCurveChangeDirectionLeftToDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendDownLeft2ArrowBendCurveChangeDirectionDownToLeftIcon],svg[streamline-interface-arrows-bend-down-left-2-arrow-bend-curve-change-direction-down-to-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.5 11.5l-3-3l3-3"></svg:path><svg:path d="M13.5 2.5v2a4 4 0 0 1-4 4h-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendDownLeft2ArrowBendCurveChangeDirectionDownToLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendDownRight2ArrowBendCurveChangeDirectionDownToRightIcon],svg[streamline-interface-arrows-bend-down-right-2-arrow-bend-curve-change-direction-down-to-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.5 11.5l3-3l-3-3"></svg:path><svg:path d="M.5 2.5v2a4 4 0 0 0 4 4h9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendDownRight2ArrowBendCurveChangeDirectionDownToRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendLeft1ArrowBendCurveChangeDirectionUpToLeftBackIcon],svg[streamline-interface-arrows-bend-left-1-arrow-bend-curve-change-direction-up-to-left-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3 2.75L.5 5.25L3 7.75"></svg:path><svg:path d="M13.5 11.25v-5a1 1 0 0 0-1-1H.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendLeft1ArrowBendCurveChangeDirectionUpToLeftBackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendRight1ArrowBendCurveChangeDirectionUpToRightIcon],svg[streamline-interface-arrows-bend-right-1-arrow-bend-curve-change-direction-up-to-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11 2.75l2.5 2.5l-2.5 2.5"></svg:path><svg:path d="M.5 11.25v-5a1 1 0 0 1 1-1h12"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendRight1ArrowBendCurveChangeDirectionUpToRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendUpLeft1ArrowBendCurveChangeDirectionLeftToUpIcon],svg[streamline-interface-arrows-bend-up-left-1-arrow-bend-curve-change-direction-left-to-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.75 3L5.25.5L7.75 3"></svg:path><svg:path d="M11.25 13.5h-5a1 1 0 0 1-1-1V.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendUpLeft1ArrowBendCurveChangeDirectionLeftToUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendUpLeft2ArrowBendCurveChangeDirectionLeftToUpIcon],svg[streamline-interface-arrows-bend-up-left-2-arrow-bend-curve-change-direction-left-to-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.5 3.5l3-3l3 3"></svg:path><svg:path d="M11.5 13.5h-2a4 4 0 0 1-4-4v-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendUpLeft2ArrowBendCurveChangeDirectionLeftToUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendUpLeft3ArrowBendCurveChangeDirectionUpToLeftIcon],svg[streamline-interface-arrows-bend-up-left-3-arrow-bend-curve-change-direction-up-to-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.5 2.5l-3 3l3 3"></svg:path><svg:path d="M13.5 11.5v-2a4 4 0 0 0-4-4h-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendUpLeft3ArrowBendCurveChangeDirectionUpToLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendUpRight1ArrowBendCurveChangeDirectionRightToUpIcon],svg[streamline-interface-arrows-bend-up-right-1-arrow-bend-curve-change-direction-right-to-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.5 3.5l-3-3l-3 3"></svg:path><svg:path d="M2.5 13.5h2a4 4 0 0 0 4-4v-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendUpRight1ArrowBendCurveChangeDirectionRightToUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsBendUpRight2ArrowBendCurveChangeDirectionUpToRightIcon],svg[streamline-interface-arrows-bend-up-right-2-arrow-bend-curve-change-direction-up-to-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.5 2.5l3 3l-3 3"></svg:path><svg:path d="M.5 11.5v-2a4 4 0 0 1 4-4h9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsBendUpRight2ArrowBendCurveChangeDirectionUpToRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonDownArrowDownKeyboardIcon],svg[streamline-interface-arrows-button-down-arrow-down-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 3.85L6.65 10a.48.48 0 0 0 .7 0l6.15-6.15"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonDownArrowDownKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonDownDoubleArrowArrowsDoubleDownIcon],svg[streamline-interface-arrows-button-down-double-arrow-arrows-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m.5 6.46l6.15 6.14a.48.48 0 0 0 .7 0l6.15-6.14"></svg:path><svg:path d="M.5 1.25L6.65 7.4a.5.5 0 0 0 .7 0l6.15-6.15"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsButtonDownDoubleArrowArrowsDoubleDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonLeftArrowKeyboardLeftIcon],svg[streamline-interface-arrows-button-left-arrow-keyboard-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.15.5L4 6.65a.48.48 0 0 0 0 .7l6.15 6.15"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonLeftArrowKeyboardLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonLeftDoubleArrowArrowsDoubleLeftIcon],svg[streamline-interface-arrows-button-left-double-arrow-arrows-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.54.5L1.4 6.65a.48.48 0 0 0 0 .7l6.14 6.15"></svg:path><svg:path d="M12.75.5L6.6 6.65a.5.5 0 0 0 0 .7l6.15 6.15"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsButtonLeftDoubleArrowArrowsDoubleLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonRightArrowRightKeyboardIcon],svg[streamline-interface-arrows-button-right-arrow-right-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.85.5L10 6.65a.48.48 0 0 1 0 .7L3.85 13.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonRightArrowRightKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonRightDuobleArrowArrowsDoubleRightIcon],svg[streamline-interface-arrows-button-right-duoble-arrow-arrows-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m6.46.5l6.14 6.15a.48.48 0 0 1 0 .7L6.46 13.5"></svg:path><svg:path d="M1.25.5L7.4 6.65a.5.5 0 0 1 0 .7L1.25 13.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsButtonRightDuobleArrowArrowsDoubleRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonToBottomArrowDownLineToBottomIcon],svg[streamline-interface-arrows-button-to-bottom-arrow-down-line-to-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 5.71l6.15 6.14a.48.48 0 0 0 .7 0l6.15-6.14M.5 2h13"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonToBottomArrowDownLineToBottomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonToLeftArrowLineToLeftIcon],svg[streamline-interface-arrows-button-to-left-arrow-line-to-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.29.5L2.15 6.65a.48.48 0 0 0 0 .7l6.14 6.15M12 .5v13"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonToLeftArrowLineToLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonToRightArrowLineToRightIcon],svg[streamline-interface-arrows-button-to-right-arrow-line-to-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.71.5l6.14 6.15a.48.48 0 0 1 0 .7L5.71 13.5M2 .5v13"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonToRightArrowLineToRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonToTopArrowUpLineToTopIcon],svg[streamline-interface-arrows-button-to-top-arrow-up-line-to-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 8.29l6.15-6.14a.48.48 0 0 1 .7 0l6.15 6.14M.5 12h13"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonToTopArrowUpLineToTopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonUpArrowUpKeyboardIcon],svg[streamline-interface-arrows-button-up-arrow-up-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 10.15L6.65 4a.48.48 0 0 1 .7 0l6.15 6.15"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonUpArrowUpKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonUpDoubleArrowArrowsDoubleUpIcon],svg[streamline-interface-arrows-button-up-double-arrow-arrows-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 7.54L6.65 1.4a.48.48 0 0 1 .7 0l6.15 6.14"></svg:path><svg:path d="M.5 12.75L6.65 6.6a.5.5 0 0 1 .7 0l6.15 6.15"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsButtonUpDoubleArrowArrowsDoubleUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsButtonZigzagBothDirectionArrowCurvyDiagramZigzagVerticalIcon],svg[streamline-interface-arrows-button-zigzag-both-direction-arrow-curvy-diagram-zigzag-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11L3 13.5v-11a2 2 0 0 1 4 0v9a2 2 0 0 0 4 0V.5L13.5 3"></svg:path>`,
})
export class StreamlineInterfaceArrowsButtonZigzagBothDirectionArrowCurvyDiagramZigzagVerticalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCornerDownLeftDownKeyboardArrowLeftBottomIcon],svg[streamline-interface-arrows-corner-down-left-down-keyboard-arrow-left-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5.5l-13 13m5 0h-5v-5"></svg:path>`,
})
export class StreamlineInterfaceArrowsCornerDownLeftDownKeyboardArrowLeftBottomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCornerDownRightDownKeyboardArrowRightBottomIcon],svg[streamline-interface-arrows-corner-down-right-down-keyboard-arrow-right-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5.5l13 13m-5 0h5v-5"></svg:path>`,
})
export class StreamlineInterfaceArrowsCornerDownRightDownKeyboardArrowRightBottomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCornerUpLeftKeyboardTopArrowLeftUpIcon],svg[streamline-interface-arrows-corner-up-left-keyboard-top-arrow-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5L.5.5m5 0h-5v5"></svg:path>`,
})
export class StreamlineInterfaceArrowsCornerUpLeftKeyboardTopArrowLeftUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCornerUpRightKeyboardTopArrowRightUpIcon],svg[streamline-interface-arrows-corner-up-right-keyboard-top-arrow-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l13-13m-5 0h5v5"></svg:path>`,
})
export class StreamlineInterfaceArrowsCornerUpRightKeyboardTopArrowRightUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCurvyBothDirection1BothDirectionArrowCurvyDiagramZigzagHorizontalIcon],svg[streamline-interface-arrows-curvy-both-direction-1-both-direction-arrow-curvy-diagram-zigzag-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 .5L13.5 3h-12a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H.5L3 13.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsCurvyBothDirection1BothDirectionArrowCurvyDiagramZigzagHorizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCurvyBothDirection2BothDirectionArrowCurvyDiagramZigzagHorizontalIcon],svg[streamline-interface-arrows-curvy-both-direction-2-both-direction-arrow-curvy-diagram-zigzag-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 .5L.5 3h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-11a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h12L11 13.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsCurvyBothDirection2BothDirectionArrowCurvyDiagramZigzagHorizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCurvyLeftSnakeArrowSidewaysDiagramLeftIcon],svg[streamline-interface-arrows-curvy-left-snake-arrow-sideways-diagram-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5.75h-12a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h11a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H.5"></svg:path><svg:path d="m3 8.25l-2.5 2.5l2.5 2.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsCurvyLeftSnakeArrowSidewaysDiagramLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsCurvyRightSnakeArrowSidewaysDiagramRightIcon],svg[streamline-interface-arrows-curvy-right-snake-arrow-sideways-diagram-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5.75h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-11a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12"></svg:path><svg:path d="m11 8.25l2.5 2.5l-2.5 2.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsCurvyRightSnakeArrowSidewaysDiagramRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDataTransferDiagonalSquareArrowSquareDataDiagonalInternetTransferNetworkIcon],svg[streamline-interface-arrows-data-transfer-diagonal-square-arrow-square-data-diagonal-internet-transfer-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="3"></svg:rect><svg:path d="m4 8l4.5-4.5H5M10 6l-4.5 4.5H9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsDataTransferDiagonalSquareArrowSquareDataDiagonalInternetTransferNetworkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDataTransferHorizontalArrowSquareDataInternetTransferNetworkHorizontalIcon],svg[streamline-interface-arrows-data-transfer-horizontal-arrow-square-data-internet-transfer-network-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="3"></svg:rect><svg:path d="m6 10.5l-2-2h6m-2-5l2 2H4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsDataTransferHorizontalArrowSquareDataInternetTransferNetworkHorizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDataTransferVerticalArrowSquareDataInternetTransferNetworkVerticalIcon],svg[streamline-interface-arrows-data-transfer-vertical-arrow-square-data-internet-transfer-network-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="3"></svg:rect><svg:path d="m10.5 8l-2 2V4m-5 2l2-2v6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsDataTransferVerticalArrowSquareDataInternetTransferNetworkVerticalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDataTrasnferVerticalArrowServerArrowsDataVerticalInternetTransferNetworkIcon],svg[streamline-interface-arrows-data-trasnfer-vertical-arrow-server-arrows-data-vertical-internet-transfer-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 3.5l3-3v13m6-3l-3 3V.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsDataTrasnferVerticalArrowServerArrowsDataVerticalInternetTransferNetworkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDiagonal1ExpandSmallerRetractBiggerBigSmallDiagonalIcon],svg[streamline-interface-arrows-diagonal-1-expand-smaller-retract-bigger-big-small-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l13-13m-4 0h4v4m-9 9h-4v-4"></svg:path>`,
})
export class StreamlineInterfaceArrowsDiagonal1ExpandSmallerRetractBiggerBigSmallDiagonalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDiagonal2ExpandSmallerRetractBiggerBigSmallDiagonalIcon],svg[streamline-interface-arrows-diagonal-2-expand-smaller-retract-bigger-big-small-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5.5h-4v4m0-4l13 13m-4 0h4v-4"></svg:path>`,
})
export class StreamlineInterfaceArrowsDiagonal2ExpandSmallerRetractBiggerBigSmallDiagonalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDiagonalArrowsArrowServerDataDiagonalInternetTransferNetworkIcon],svg[streamline-interface-arrows-diagonal-arrows-arrow-server-data-diagonal-internet-transfer-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.5 8.5l8-8m0 3.5V.5h0H6m6.5 5l-8 8m0-3.5v3.5H8"></svg:path>`,
})
export class StreamlineInterfaceArrowsDiagonalArrowsArrowServerDataDiagonalInternetTransferNetworkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDiagonalScrollPoint1MoveScrollIcon],svg[streamline-interface-arrows-diagonal-scroll-point-1-move-scroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="1.5"></svg:circle><svg:path d="M9 .5h4a.5.5 0 0 1 .5.5v4M5 13.5H1a.5.5 0 0 1-.5-.5V9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsDiagonalScrollPoint1MoveScrollIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDiagonalScrollPoint2MoveScrollIcon],svg[streamline-interface-arrows-diagonal-scroll-point-2-move-scroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="1.5"></svg:circle><svg:path d="M5 .5H1a.5.5 0 0 0-.5.5v4M9 13.5h4a.5.5 0 0 0 .5-.5V9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsDiagonalScrollPoint2MoveScrollIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDownArrowDownKeyboardIcon],svg[streamline-interface-arrows-down-arrow-down-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5v13m3.5-3.5L7 13.5L3.5 10"></svg:path>`,
})
export class StreamlineInterfaceArrowsDownArrowDownKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDownCircle1ArrowKeyboardCircleButtonDownIcon],svg[streamline-interface-arrows-down-circle-1-arrow-keyboard-circle-button-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 4v6M5.5 8.5L7 10l1.5-1.5"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsDownCircle1ArrowKeyboardCircleButtonDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDownCircle2ArrowKeyboardCircleButtonDownIcon],svg[streamline-interface-arrows-down-circle-2-arrow-keyboard-circle-button-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 6L7 9L4 6"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsDownCircle2ArrowKeyboardCircleButtonDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDownleftCornerArrowCornerDownLeftDownleftIcon],svg[streamline-interface-arrows-downleft-corner-arrow-corner-down-left-downleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 13.5h-12a1 1 0 0 1-1-1V.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsDownleftCornerArrowCornerDownLeftDownleftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsDownrightCornerArrowCornerDownRightDownrightIcon],svg[streamline-interface-arrows-downright-corner-arrow-corner-down-right-downright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5.5v12a1 1 0 0 1-1 1H.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsDownrightCornerArrowCornerDownRightDownrightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsExpand2ExpandSmallerRetractBiggerBigSmallDiagonalIcon],svg[streamline-interface-arrows-expand-2-expand-smaller-retract-bigger-big-small-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 5.5l-5-5m4 0h-4v4m8 4l5 5m-4 0h4v-4"></svg:path>`,
})
export class StreamlineInterfaceArrowsExpand2ExpandSmallerRetractBiggerBigSmallDiagonalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsExpand3ExpandSmallerRetractBiggerBigSmallDiagonalIcon],svg[streamline-interface-arrows-expand-3-expand-smaller-retract-bigger-big-small-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.5 5.5l5-5m-4 0h4v4m-8 4l-5 5m4 0h-4v-4"></svg:path>`,
})
export class StreamlineInterfaceArrowsExpand3ExpandSmallerRetractBiggerBigSmallDiagonalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsExpand4ExpandSmallBiggerRetractSmallerBigIcon],svg[streamline-interface-arrows-expand-4-expand-small-bigger-retract-smaller-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10" height="10" x="3.5" y=".5" rx="1" transform="rotate(180 8.5 5.5)"></svg:rect><svg:path d="M10.5 13.5h-9a1 1 0 0 1-1-1v-9m7 0h3v3m0-3l-4 4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsExpand4ExpandSmallBiggerRetractSmallerBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsExpandDiagonal1ExpandResizeBiggerDiagonalSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-expand-diagonal-1-expand-resize-bigger-diagonal-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9 5L13.5.5m-4 0h4v4M5 9L.5 13.5m4 0h-4v-4M4 4l6 6"></svg:path>`,
})
export class StreamlineInterfaceArrowsExpandDiagonal1ExpandResizeBiggerDiagonalSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsExpandDiagonal2ExpandResizeBiggerDiagonalSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-expand-diagonal-2-expand-resize-bigger-diagonal-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 5L.5.5m4 0h-4v4M9 9l4.5 4.5m-4 0h4v-4M10 4l-6 6"></svg:path>`,
})
export class StreamlineInterfaceArrowsExpandDiagonal2ExpandResizeBiggerDiagonalSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsExpandVerticalDiamondArrowDiamondDataVerticalDataInternetTransferNetworkIcon],svg[streamline-interface-arrows-expand-vertical-diamond-arrow-diamond-data-vertical-data-internet-transfer-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="9.82" height="9.82" x="2.09" y="2.09" rx="1.07" transform="rotate(-45 7 7)"></svg:rect><svg:path d="M5.5 5.5L7 4l1.5 1.5m-3 3L7 10l1.5-1.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsExpandVerticalDiamondArrowDiamondDataVerticalDataInternetTransferNetworkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsHorizonalScrollPointMoveScrollHorizonalIcon],svg[streamline-interface-arrows-horizonal-scroll-point-move-scroll-horizonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.48 3.87L.61 6.74a.36.36 0 0 0 0 .52l2.87 2.87m7.04-6.26l2.87 2.87a.36.36 0 0 1 0 .52l-2.87 2.87"></svg:path><svg:circle cx="7" cy="7" r="1.25"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsHorizonalScrollPointMoveScrollHorizonalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsHorizontalExpandExpandResizeBiggerHorizontalSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-horizontal-expand-expand-resize-bigger-horizontal-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 7h-9M5 4.5L2.5 7L5 9.5m4-5L11.5 7L9 9.5M.5.5v13m13-13v13"></svg:path>`,
})
export class StreamlineInterfaceArrowsHorizontalExpandExpandResizeBiggerHorizontalSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsHorizontalExpandResizeBiggerHorizontalSmallSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-horizontal-expand-resize-bigger-horizontal-small-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7H.5m3-3l-3 3l3 3m7-6l3 3l-3 3"></svg:path>`,
})
export class StreamlineInterfaceArrowsHorizontalExpandResizeBiggerHorizontalSmallSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsHorizontalUpDownExpandResizeBiggerVerticalSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-horizontal-up-down-expand-resize-bigger-vertical-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.13 3.48L7.26.61a.36.36 0 0 0-.52 0L3.87 3.48m6.26 7.04l-2.87 2.87a.36.36 0 0 1-.52 0l-2.87-2.87M.5 7h13"></svg:path>`,
})
export class StreamlineInterfaceArrowsHorizontalUpDownExpandResizeBiggerVerticalSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsLeftArrowKeyboardLeftIcon],svg[streamline-interface-arrows-left-arrow-keyboard-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7H.5M4 3.5L.5 7L4 10.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsLeftArrowKeyboardLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsLeftCircle1ArrowKeyboardCircleButtonLeftIcon],svg[streamline-interface-arrows-left-circle-1-arrow-keyboard-circle-button-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10 7H4m1.5-1.5L4 7l1.5 1.5"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsLeftCircle1ArrowKeyboardCircleButtonLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsLeftCircle2ArrowKeyboardCircleButtonLeftIcon],svg[streamline-interface-arrows-left-circle-2-arrow-keyboard-circle-button-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8 4L5 7l3 3"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsLeftCircle2ArrowKeyboardCircleButtonLeftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsLoopArrowDiagramLoopInfinityRepeatIcon],svg[streamline-interface-arrows-loop-arrow-diagram-loop-infinity-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 10.43a2.37 2.37 0 0 1-1.5.57a2.75 2.75 0 0 1-3-3a2.75 2.75 0 0 1 3-3c2.75 0 4.25 6 7 6a2.75 2.75 0 0 0 3-3a2.75 2.75 0 0 0-3-3h-2l2-2"></svg:path>`,
})
export class StreamlineInterfaceArrowsLoopArrowDiagramLoopInfinityRepeatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveDownMoveDownArrowsIcon],svg[streamline-interface-arrows-move-down-move-down-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 7.5v6M4.5 11L7 13.5L9.5 11"></svg:path><svg:rect width="4.5" height="13" x="4.75" y="-3.75" rx="1" transform="rotate(-90 7 2.75)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveDownMoveDownArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveHorizontalCircleTransferDataInternetArrowHorizontalNetworkCircleIcon],svg[streamline-interface-arrows-move-horizontal-circle-transfer-data-internet-arrow-horizontal-network-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m6 10.5l-2-2h6m-2-5l2 2H4"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveHorizontalCircleTransferDataInternetArrowHorizontalNetworkCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveLeftDownExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-move-left-down-expand-resize-bigger-corner-small-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.5.5l-2 2l2 2"></svg:path><svg:path d="M11.5 13.5v-10a1 1 0 0 0-1-1H.5"></svg:path><svg:path d="m9.5 11.5l2 2l2-2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveLeftDownExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveLeftMoveLeftArrowsIcon],svg[streamline-interface-arrows-move-left-move-left-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 7h-6M3 4.5L.5 7L3 9.5"></svg:path><svg:rect width="4.5" height="13" x="9" y=".5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveLeftMoveLeftArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveLeftUpExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-move-left-up-expand-resize-bigger-corner-small-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.5 13.5l-2-2l2-2"></svg:path><svg:path d="M11.5.5v10a1 1 0 0 1-1 1H.5"></svg:path><svg:path d="m9.5 2.5l2-2l2 2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveLeftUpExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveRightDownExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-move-right-down-expand-resize-bigger-corner-small-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11.5.5l2 2l-2 2"></svg:path><svg:path d="M2.5 13.5v-10a1 1 0 0 1 1-1h10"></svg:path><svg:path d="m4.5 11.5l-2 2l-2-2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveRightDownExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveRightMoveRightArrowsIcon],svg[streamline-interface-arrows-move-right-move-right-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.5 7h6M11 4.5L13.5 7L11 9.5"></svg:path><svg:rect width="4.5" height="13" x=".5" y=".5" rx="1" transform="rotate(-180 2.75 7)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveRightMoveRightArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveRightUpExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-move-right-up-expand-resize-bigger-corner-small-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m.5 2.5l2-2l2 2"></svg:path><svg:path d="M13.5 11.5h-10a1 1 0 0 1-1-1V.5"></svg:path><svg:path d="m11.5 9.5l2 2l-2 2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveRightUpExpandResizeBiggerCornerSmallSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsMoveUpMoveUpArrowsIcon],svg[streamline-interface-arrows-move-up-move-up-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 6.5v-6M9.5 3L7 .5L4.5 3"></svg:path><svg:rect width="4.5" height="13" x="4.75" y="4.75" rx="1" transform="rotate(90 7 11.25)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceArrowsMoveUpMoveUpArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsRightArrowRightKeyboardIcon],svg[streamline-interface-arrows-right-arrow-right-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7h13M10 10.5L13.5 7L10 3.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsRightArrowRightKeyboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsRightCircle1ArrowKeyboardCircleButtonRightIcon],svg[streamline-interface-arrows-right-circle-1-arrow-keyboard-circle-button-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 7h6M8.5 5.5L10 7L8.5 8.5"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsRightCircle1ArrowKeyboardCircleButtonRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsRightCircle2ArrowKeyboardCircleButtonRightIcon],svg[streamline-interface-arrows-right-circle-2-arrow-keyboard-circle-button-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m6 4l3 3l-3 3"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsRightCircle2ArrowKeyboardCircleButtonRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsShrink4ExpandRetractShrinkBiggerBigSmallSmallerIcon],svg[streamline-interface-arrows-shrink-4-expand-retract-shrink-bigger-big-small-smaller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10" height="10" x="3.5" y=".5" rx="1" transform="rotate(180 8.5 5.5)"></svg:rect><svg:path d="M10.5 13.5h-9a1 1 0 0 1-1-1v-9m9 4h-3v-3m0 3l4-4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsShrink4ExpandRetractShrinkBiggerBigSmallSmallerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsShrinkVerticalMoveVerticalShrinkIcon],svg[streamline-interface-arrows-shrink-vertical-move-vertical-shrink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5L6.74 9a.37.37 0 0 1 .52 0l4.49 4.49M2.25.5L6.74 5a.37.37 0 0 0 .52 0L11.75.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsShrinkVerticalMoveVerticalShrinkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsSplitVerticalUpMergeArrowDiagramIcon],svg[streamline-interface-arrows-split-vertical-up-merge-arrow-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10 3.5l-3-3l-3 3m7 10a4 4 0 0 1-4-4a4 4 0 0 1-4 4m4-4v-9"></svg:path>`,
})
export class StreamlineInterfaceArrowsSplitVerticalUpMergeArrowDiagramIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsSynchronizeArrowsLoadingLoadSyncSynchronizeArrowReloadIcon],svg[streamline-interface-arrows-synchronize-arrows-loading-load-sync-synchronize-arrow-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11 9l2-.5l.5 2"></svg:path><svg:path d="M13 8.5A6.76 6.76 0 0 1 7 13h0a6 6 0 0 1-5.64-3.95M3 5l-2 .5l-.5-2"></svg:path><svg:path d="M1 5.5C1.84 3.2 4.42 1 7 1h0a6 6 0 0 1 5.64 4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsSynchronizeArrowsLoadingLoadSyncSynchronizeArrowReloadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsSynchronizeWarningArrowFailNotificationSyncWarningFailureSynchronizeErrorIcon],svg[streamline-interface-arrows-synchronize-warning-arrow-fail-notification-sync-warning-failure-synchronize-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11 9l2-.5l.5 2"></svg:path><svg:path d="M13 8.5A6.6 6.6 0 0 1 7 13h0a6 6 0 0 1-5.64-3.95M3 5l-2 .5l-.5-2"></svg:path><svg:path d="M1 5.5A6.79 6.79 0 0 1 7 1h0a6 6 0 0 1 5.64 4M7 3.5v4"></svg:path><svg:circle cx="7" cy="10" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsSynchronizeWarningArrowFailNotificationSyncWarningFailureSynchronizeErrorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsTopMoveUpArrowArrowsIcon],svg[streamline-interface-arrows-top-move-up-arrow-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4 7.5l3-3l3 3m-3 6v-9M3.5.5h7"></svg:path>`,
})
export class StreamlineInterfaceArrowsTopMoveUpArrowArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsTriangleLoopDiagramTriangleLoopArrowArrowsIcon],svg[streamline-interface-arrows-triangle-loop-diagram-triangle-loop-arrow-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 13.5L4 11h8.5m1-7l-1 3.5L8 .5m-6 3h3.5l-5 7"></svg:path>`,
})
export class StreamlineInterfaceArrowsTriangleLoopDiagramTriangleLoopArrowArrowsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsTurnBackwardArrowBendCurveChangeDirectionReturnLeftBackBackwardIcon],svg[streamline-interface-arrows-turn-backward-arrow-bend-curve-change-direction-return-left-back-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.5 1.5l-3 3l3 3"></svg:path><svg:path d="M.5 4.5h9a4 4 0 0 1 0 8h-5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsTurnBackwardArrowBendCurveChangeDirectionReturnLeftBackBackwardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsTurnDownArrowBendCurveChangeDirectionReturnDownIcon],svg[streamline-interface-arrows-turn-down-arrow-bend-curve-change-direction-return-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m1.5 10.5l3 3l3-3"></svg:path><svg:path d="M4.5 13.5v-9a4 4 0 0 1 8 0v5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsTurnDownArrowBendCurveChangeDirectionReturnDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsTurnForwardArrowBendCurveChangeDirectionReturnRightNextForwardIcon],svg[streamline-interface-arrows-turn-forward-arrow-bend-curve-change-direction-return-right-next-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.5 1.5l3 3l-3 3"></svg:path><svg:path d="M13.5 4.5h-9a4 4 0 0 0 0 8h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsTurnForwardArrowBendCurveChangeDirectionReturnRightNextForwardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsTurnUpArrowBendCurveChangeDirectionReturnUpIcon],svg[streamline-interface-arrows-turn-up-arrow-bend-curve-change-direction-return-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m12.5 3.5l-3-3l-3 3"></svg:path><svg:path d="M9.5.5v9a4 4 0 0 1-8 0v-5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsTurnUpArrowBendCurveChangeDirectionReturnUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsUpCircle1ArrowUpKeyboardCircleButtonIcon],svg[streamline-interface-arrows-up-circle-1-arrow-up-keyboard-circle-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 10V4M5.5 5.5L7 4l1.5 1.5"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsUpCircle1ArrowUpKeyboardCircleButtonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsUpCircle2ArrowKeyboardCircleButtonUpIcon],svg[streamline-interface-arrows-up-circle-2-arrow-keyboard-circle-button-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4 8l3-3l3 3"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsUpCircle2ArrowKeyboardCircleButtonUpIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsUpleftCornerArrowCornerUpLeftUpleftIcon],svg[streamline-interface-arrows-upleft-corner-arrow-corner-up-left-upleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5.5h-12a1 1 0 0 0-1 1v12"></svg:path>`,
})
export class StreamlineInterfaceArrowsUpleftCornerArrowCornerUpLeftUpleftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsUprightCornerArrowUpRightUprightCornerIcon],svg[streamline-interface-arrows-upright-corner-arrow-up-right-upright-corner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5.5h12a1 1 0 0 1 1 1v12"></svg:path>`,
})
export class StreamlineInterfaceArrowsUprightCornerArrowUpRightUprightCornerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsVerticalExpand1MoveExpandVerticalIcon],svg[streamline-interface-arrows-vertical-expand-1-move-expand-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.25 5.1L6.74.61a.36.36 0 0 1 .52 0l4.49 4.49m-9.5 3.8l4.49 4.49a.36.36 0 0 0 .52 0l4.49-4.49"></svg:path>`,
})
export class StreamlineInterfaceArrowsVerticalExpand1MoveExpandVerticalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsVerticalExpand2ExpandResizeBiggerVerticalSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-vertical-expand-2-expand-resize-bigger-vertical-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 11.5v-9M9.5 5L7 2.5L4.5 5m5 4L7 11.5L4.5 9m9-8.5H.5m13 13H.5"></svg:path>`,
})
export class StreamlineInterfaceArrowsVerticalExpand2ExpandResizeBiggerVerticalSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsVerticalExpandResizeBiggerVerticalSmallSmallerSizeArrowArrowsBigIcon],svg[streamline-interface-arrows-vertical-expand-resize-bigger-vertical-small-smaller-size-arrow-arrows-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5V.5m3 3l-3-3l-3 3m6 7l-3 3l-3-3"></svg:path>`,
})
export class StreamlineInterfaceArrowsVerticalExpandResizeBiggerVerticalSmallSmallerSizeArrowArrowsBigIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsVerticalScrollPointMoveScrollVerticalIcon],svg[streamline-interface-arrows-vertical-scroll-point-move-scroll-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.13 3.48L7.26.61a.36.36 0 0 0-.52 0L3.87 3.48m6.26 7.04l-2.87 2.87a.36.36 0 0 1-.52 0l-2.87-2.87"></svg:path><svg:circle cx="7" cy="7" r="1.25"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceArrowsVerticalScrollPointMoveScrollVerticalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAwardCrownRewardSocialRatingMediaQueenVipKingCrownIcon],svg[streamline-interface-award-crown-reward-social-rating-media-queen-vip-king-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 4l-3 3L7 2L3.5 7l-3-3v6.5A1.5 1.5 0 0 0 2 12h10a1.5 1.5 0 0 0 1.5-1.5Z"></svg:path>`,
})
export class StreamlineInterfaceAwardCrownRewardSocialRatingMediaQueenVipKingCrownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAwardHalfStarRewardRatingRateSocialStarMediaFavoriteLikeStarsHalfIcon],svg[streamline-interface-award-half-star-reward-rating-rate-social-star-media-favorite-like-stars-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.25.5a.54.54 0 0 0-.49.32L8.17 4.18a.52.52 0 0 1-.41.31L4.22 5a.58.58 0 0 0-.3 1l2.56 2.63a.58.58 0 0 1 .16.5L6 12.83a.56.56 0 0 0 .8.6l3.2-1.74a.59.59 0 0 1 .26-.07Z"></svg:path>`,
})
export class StreamlineInterfaceAwardHalfStarRewardRatingRateSocialStarMediaFavoriteLikeStarsHalfIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAwardTrophyRewardRatingTrophySocialAwardMediaIcon],svg[streamline-interface-award-trophy-reward-rating-trophy-social-award-media-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 8.5v5m-2.5 0h5m-6-8a3 3 0 0 1-3-3v-1H4v4Zm7 0a3 3 0 0 0 3-3v-1H10v4Z"></svg:path><svg:path d="M10 5.5a3 3 0 0 1-6 0v-5h6Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceAwardTrophyRewardRatingTrophySocialAwardMediaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceBlockRemoveCircleGarbageTrashDeleteIcon],svg[streamline-interface-block-remove-circle-garbage-trash-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="m2.4 11.6l9.2-9.2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceBlockRemoveCircleGarbageTrashDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceBookmarkBookmarksTagsFavoriteIcon],svg[streamline-interface-bookmark-bookmarks-tags-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11 13.5l-4-4l-4 4v-12a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class StreamlineInterfaceBookmarkBookmarksTagsFavoriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceBookmarkDoubleBookmarksDoubleTagsFavoriteIcon],svg[streamline-interface-bookmark-double-bookmarks-double-tags-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m9 13.5l-3.5-3l-3.5 3v-9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1Z"></svg:path><svg:path d="M5 .5h6a1 1 0 0 1 1 1v9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceBookmarkDoubleBookmarksDoubleTagsFavoriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceBookmarkTagTagsBookmarkFavoriteIcon],svg[streamline-interface-bookmark-tag-tags-bookmark-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m13.28 9.39l-3.89 3.89a.75.75 0 0 1-1.06 0L.61 5.56a.36.36 0 0 1-.11-.29l.59-3.83a.37.37 0 0 1 .35-.35L5.27.5a.36.36 0 0 1 .29.11l7.72 7.72a.75.75 0 0 1 0 1.06Z"></svg:path><svg:circle cx="4.11" cy="4.11" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceBookmarkTagTagsBookmarkFavoriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarAddAddCalendarDateDayMonthIcon],svg[streamline-interface-calendar-add-add-calendar-date-day-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5m1 5.5h-5M7 5.5v5"></svg:path>`,
})
export class StreamlineInterfaceCalendarAddAddCalendarDateDayMonthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarBlankCalendarDateDayMonthIcon],svg[streamline-interface-calendar-blank-calendar-date-day-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-10 4h13m-10-6v4m7-4v4m-7-2h5"></svg:path>`,
})
export class StreamlineInterfaceCalendarBlankCalendarDateDayMonthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarBlockBlockCalendarDateDayMonthIcon],svg[streamline-interface-calendar-block-block-calendar-date-day-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:circle cx="7" cy="8.5" r="3"></svg:circle><svg:path d="m4.88 10.62l4.24-4.24"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarBlockBlockCalendarDateDayMonthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarCheckApproveCalendarCheckDateDayMonthSuccessIcon],svg[streamline-interface-calendar-check-approve-calendar-check-date-day-month-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="m4 9l2 1.5l3.5-4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarCheckApproveCalendarCheckDateDayMonthSuccessIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarDateMonthThirtyThirtyCalendarDateWeekDayMonthIcon],svg[streamline-interface-calendar-date-month-thirty-thirty-calendar-date-week-day-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 6.5h1V11m-1 0h2"></svg:path><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="M3.5 6.5H6l-1.5 2s1.5 0 1.5 1A1.33 1.33 0 0 1 4.5 11h-1"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarDateMonthThirtyThirtyCalendarDateWeekDayMonthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarDateOneOneCalendarDateDayMonthIcon],svg[streamline-interface-calendar-date-one-one-calendar-date-day-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6 6.5h1V11m-1.5 0h3"></svg:path><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarDateOneOneCalendarDateDayMonthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarDisableCalendarDateDayDeleteDisableMonthRemoveIcon],svg[streamline-interface-calendar-disable-calendar-date-day-delete-disable-month-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5m.27 7.27L5.23 6.23m3.54 0L5.23 9.77"></svg:path>`,
})
export class StreamlineInterfaceCalendarDisableCalendarDateDayDeleteDisableMonthRemoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarDownloadArrowCalendarDateDayDownDownloadMonthIcon],svg[streamline-interface-calendar-download-arrow-calendar-date-day-down-download-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="m5 9l2 2l2-2m-2 2V6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarDownloadArrowCalendarDateDayDownDownloadMonthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarFavoriteCalendarDateDayFavoriteLikeMonthStarIcon],svg[streamline-interface-calendar-favorite-calendar-date-day-favorite-like-month-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="M6.45 5.37a.59.59 0 0 1 1.1 0L8.19 7H9.9a.6.6 0 0 1 .4 1L8.79 9.36l.64 1.28a.58.58 0 0 1-.12.69a.61.61 0 0 1-.7.1L7 10.55l-1.61.88a.61.61 0 0 1-.7-.1a.58.58 0 0 1-.12-.69l.64-1.28L3.7 8a.6.6 0 0 1 .4-1h1.71Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarFavoriteCalendarDateDayFavoriteLikeMonthStarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarHeartCalendarDateDayFavoriteHeartLikeMonthIcon],svg[streamline-interface-calendar-heart-calendar-date-day-favorite-heart-like-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="M7 7.5c1-2 3-1 3 .5c0 2-3 3-3 3s-3-1-3-3c0-1.5 2-2.5 3-.5Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarHeartCalendarDateDayFavoriteHeartLikeMonthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarHomeCalendarDateDayHomeHouseMonthIcon],svg[streamline-interface-calendar-home-calendar-date-day-home-house-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="m10 8.5l-3-3l-3 3"></svg:path><svg:path d="M5 7.5V11h4V7.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarHomeCalendarDateDayHomeHouseMonthIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarLockCalendarDateDayLockMonthPadlockSecureSecurityIcon],svg[streamline-interface-calendar-lock-calendar-date-day-lock-month-padlock-secure-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="M5 8h4v3H5zm.5 0V7a1.5 1.5 0 0 1 3 0v1"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarLockCalendarDateDayLockMonthPadlockSecureSecurityIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarMarkCalendarDateDayMonthMarkIcon],svg[streamline-interface-calendar-mark-calendar-date-day-month-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:circle cx="3.5" cy="7.5" r=".5"></svg:circle><svg:circle cx="7" cy="7.5" r=".5"></svg:circle><svg:circle cx="10.5" cy="7.5" r=".5"></svg:circle><svg:circle cx="3.5" cy="10.5" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceCalendarMarkCalendarDateDayMonthMarkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarRemoveCalendarDateDayDeleteMonthRemoveSubtractIcon],svg[streamline-interface-calendar-remove-calendar-date-day-delete-month-remove-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5m1 7.5h-5m-4-3.5h13"></svg:path>`,
})
export class StreamlineInterfaceCalendarRemoveCalendarDateDayDeleteMonthRemoveSubtractIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarSettingCalendarCogDateDayGearLoadLoadingMonthSettingWorkIcon],svg[streamline-interface-calendar-setting-calendar-cog-date-day-gear-load-loading-month-setting-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5m-1.53 2V6m-3.03.25l1.3.75m-1.3 2.75L5.24 9m1.73 2.5V10M10 9.75L8.7 9M10 6.25L8.7 7"></svg:path><svg:circle cx="6.97" cy="8" r="2"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceCalendarSettingCalendarCogDateDayGearLoadLoadingMonthSettingWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarUploadCalendarDateDayMonthPushUpArrowUploadIcon],svg[streamline-interface-calendar-upload-calendar-date-day-month-push-up-arrow-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5"></svg:path><svg:path d="m5 8l2-2l2 2M7 6v5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceCalendarUploadCalendarDateDayMonthPushUpArrowUploadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCalendarWarningAlterCalendarCautionDateDayMonthNotificationWarningIcon],svg[streamline-interface-calendar-warning-alter-calendar-caution-date-day-month-notification-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5M7 5v3"></svg:path><svg:circle cx="7" cy="11" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceCalendarWarningAlterCalendarCautionDateDayMonthNotificationWarningIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentArchiveBoxContentBankerArchiveFileIcon],svg[streamline-interface-content-archive-box-content-banker-archive-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 5.54h11v7a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-7h0Z"></svg:path><svg:rect width="4" height="13" x="5" y="-2.96" rx="1" transform="rotate(90 7 3.54)"></svg:rect><svg:path d="M5.5 8.54h3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentArchiveBoxContentBankerArchiveFileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentArchiveFolderOutboxContentFolderArchiveFileInboxIcon],svg[streamline-interface-content-archive-folder-outbox-content-folder-archive-file-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 9.54a1 1 0 0 0-1-1h-3v1h-5v-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1Zm-12-4h11m-11-3h11"></svg:path>`,
})
export class StreamlineInterfaceContentArchiveFolderOutboxContentFolderArchiveFileInboxIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentArchiveLockerLockerContentArchiveFileCabinetIcon],svg[streamline-interface-content-archive-locker-locker-content-archive-file-cabinet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5.5h11a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-10a1 1 0 0 1 1-1ZM.5 7h13"></svg:path><svg:circle cx="7" cy="3.5" r=".5"></svg:circle><svg:circle cx="7" cy="10" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceContentArchiveLockerLockerContentArchiveFileCabinetIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentBook2LibraryContentBooksBookShelfStackIcon],svg[streamline-interface-content-book-2-library-content-books-book-shelf-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="3.5" height="13" x=".55" y=".5" rx=".5"></svg:rect><svg:rect width="3.5" height="11" x="4.05" y="2.5" rx=".5"></svg:rect><svg:rect width="3" height="11" x="9.26" y="2.3" rx=".5" transform="rotate(-14.05 10.779 7.795)"></svg:rect><svg:path d="M.55 10h3.5m0-1h3.5m2.5 2l2.88-.72"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentBook2LibraryContentBooksBookShelfStackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentBookContentBooksBookCloseIcon],svg[streamline-interface-content-book-content-books-book-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 13.54H3a1.5 1.5 0 0 1 0-3h8.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H3A1.5 1.5 0 0 0 1.5 2v10m10-1.46v3"></svg:path>`,
})
export class StreamlineInterfaceContentBookContentBooksBookCloseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentBookEditPencilContentWriteNotebookBookEditCompositionCreationIcon],svg[streamline-interface-content-book-edit-pencil-content-write-notebook-book-edit-composition-creation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 13.5H1.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9m1.5 3l1.5-3l1.5 3V12a1.5 1.5 0 0 1-3 0Zm0 6h3m-10-9v13M6 4h2"></svg:path>`,
})
export class StreamlineInterfaceContentBookEditPencilContentWriteNotebookBookEditCompositionCreationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentBookOpenContentBooksBookOpenIcon],svg[streamline-interface-content-book-open-content-books-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5a9.26 9.26 0 0 0-5.61-2.95a1 1 0 0 1-.89-1V1.5A1 1 0 0 1 .85.74a1 1 0 0 1 .79-.23A9.3 9.3 0 0 1 7 3.43Zm0 0a9.26 9.26 0 0 1 5.61-2.95a1 1 0 0 0 .89-1V1.5a1 1 0 0 0-.35-.76a1 1 0 0 0-.79-.23A9.3 9.3 0 0 0 7 3.43Z"></svg:path>`,
})
export class StreamlineInterfaceContentBookOpenContentBooksBookOpenIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentBookPagePagesContentBooksBookOpenIcon],svg[streamline-interface-content-book-page-pages-content-books-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8 12.5a1 1 0 0 1-1.45.89l-4-2A1 1 0 0 1 2 10.5V.5l5.45 2.72a1 1 0 0 1 .55.9Z"></svg:path><svg:path d="M2 .5h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H8"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentBookPagePagesContentBooksBookOpenIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentChartProductDataAnalysisAnalyticsGraphLineBusinessBoardChartIcon],svg[streamline-interface-content-chart-product-data-analysis-analytics-graph-line-business-board-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1" transform="rotate(180 7 7)"></svg:rect><svg:path d="M3 3h2M3 5.5h4.5m4 0l-3 5l-3.5-2l-2 3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentChartProductDataAnalysisAnalyticsGraphLineBusinessBoardChartIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentEyeGlassesVisionSunglassesProtectionSpectaclesCorrectionSunEyeGlassesIcon],svg[streamline-interface-content-eye-glasses-vision-sunglasses-protection-spectacles-correction-sun-eye-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 9h-5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm8 0h-5v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1Zm-8 0h3m5 0V3a2 2 0 0 0-2-2h-1M.5 9V3a2 2 0 0 1 2-2h1"></svg:path>`,
})
export class StreamlineInterfaceContentEyeGlassesVisionSunglassesProtectionSpectaclesCorrectionSunEyeGlassesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentFileEmptyCommonFileIcon],svg[streamline-interface-content-file-empty-common-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h5l5 5Z"></svg:path><svg:path d="M7.5.5v5h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentFileEmptyCommonFileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentFireLitFlameTorchTrendingIcon],svg[streamline-interface-content-fire-lit-flame-torch-trending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.15.53a.39.39 0 0 0-.4 0a.26.26 0 0 0-.06.34C6.92 3 7.18 5.9 5.5 7.5a5.52 5.52 0 0 1-1.5-2A3.89 3.89 0 0 0 2 9a4.7 4.7 0 0 0 5 4.5c3.22 0 4.89-2 5-4.5c.13-3-2-6.69-5.85-8.47Z"></svg:path><svg:path d="M9.5 9a2 2 0 0 1-2 2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentFireLitFlameTorchTrendingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentNotePadContentNotesBookNotepadNotebookIcon],svg[streamline-interface-content-note-pad-content-notes-book-notepad-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 3.5v-3m3 3v-3m3 3v-3"></svg:path><svg:rect width="13" height="11.5" x=".5" y="2" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceContentNotePadContentNotesBookNotepadNotebookIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentNotePadTextContentNotesBookNotepadNotebookIcon],svg[streamline-interface-content-note-pad-text-content-notes-book-notepad-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 3.5v-3m3 3v-3m3 3v-3"></svg:path><svg:rect width="13" height="11.5" x=".5" y="2" rx="1"></svg:rect><svg:path d="M3.5 7h7m-7 3h4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentNotePadTextContentNotesBookNotepadNotebookIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceContentSaveDiskFloppyElectronicsDeviceDiscComputerIcon],svg[streamline-interface-content-save-disk-floppy-electronics-device-disc-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 12.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-9l3-3h9a1 1 0 0 1 1 1Z"></svg:path><svg:path d="M3.5 8.5h7v5h-7zm1-8h6v4h-6z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceContentSaveDiskFloppyElectronicsDeviceDiscComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCursorArrow1MouseSelectCursorIcon],svg[streamline-interface-cursor-arrow-1-mouse-select-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 10.5l-4-4l2-2a1 1 0 0 0-.5-1.68L1.74.53A1 1 0 0 0 .53 1.74L2.82 11a1 1 0 0 0 1.68.46l2-2l4 4Z"></svg:path>`,
})
export class StreamlineInterfaceCursorArrow1MouseSelectCursorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCursorArrow2MouseSelectCursorIcon],svg[streamline-interface-cursor-arrow-2-mouse-select-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.15 5.45a.5.5 0 0 0 0-1L1.83.56A1 1 0 0 0 .56 1.83L4.5 13.16a.5.5 0 0 0 1 0l2-5.66Z"></svg:path>`,
})
export class StreamlineInterfaceCursorArrow2MouseSelectCursorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceCursorHandHandSelectCursorFingerIcon],svg[streamline-interface-cursor-hand-hand-select-cursor-finger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 6.13a2 2 0 0 1 1.59 2.24l-.61 4.27a1 1 0 0 1-1 .86H4a1 1 0 0 1-.93-.63L2 10.21a2 2 0 0 1 1-2.53L4.35 7V2a1.5 1.5 0 0 1 3 0v3.5Z"></svg:path>`,
})
export class StreamlineInterfaceCursorHandHandSelectCursorFingerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDashboardLayout1CornersDashboardFrameLayoutMatOctagonSquareTriangleIcon],svg[streamline-interface-dashboard-layout-1-corners-dashboard-frame-layout-mat-octagon-square-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1" transform="rotate(180 7 7)"></svg:rect><svg:path d="M.5 6.5L6 .5m7.5 6L8 .5m-7.5 7l5.5 6m7.5-6l-5.5 6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceDashboardLayout1CornersDashboardFrameLayoutMatOctagonSquareTriangleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDashboardLayout2CornersDashboardFrameLayoutCircleSquareCenterIcon],svg[streamline-interface-dashboard-layout-2-corners-dashboard-frame-layout-circle-square-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5.5h2a1 1 0 0 1 1 1v2m-13 0v-2a1 1 0 0 1 1-1h2m7 13h2a1 1 0 0 0 1-1v-2m-13 0v2a1 1 0 0 0 1 1h2"></svg:path><svg:circle cx="7" cy="7" r="3.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceDashboardLayout2CornersDashboardFrameLayoutCircleSquareCenterIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDashboardLayout3AppApplicationDashboardHomeLayoutIcon],svg[streamline-interface-dashboard-layout-3-app-application-dashboard-home-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="5" height="7" x="8.5" y="6.5" rx=".5"></svg:rect><svg:rect width="5" height="3.01" x="8.5" y=".5" rx=".5"></svg:rect><svg:rect width="5" height="7" x=".5" y=".5" rx=".5"></svg:rect><svg:rect width="5" height="3.01" x=".5" y="10.49" rx=".5"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceDashboardLayout3AppApplicationDashboardHomeLayoutIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDashboardLayoutCircleAppApplicationDashboardHomeLayoutCircleIcon],svg[streamline-interface-dashboard-layout-circle-app-application-dashboard-home-layout-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="3.25" cy="3.25" r="2.75"></svg:circle><svg:circle cx="10.75" cy="3.25" r="2.75"></svg:circle><svg:circle cx="3.25" cy="10.75" r="2.75"></svg:circle><svg:circle cx="10.75" cy="10.75" r="2.75"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceDashboardLayoutCircleAppApplicationDashboardHomeLayoutCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDashboardLayoutSquareAppApplicationDashboardHomeLayoutSquareIcon],svg[streamline-interface-dashboard-layout-square-app-application-dashboard-home-layout-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="5" height="5" x=".5" y=".5" rx="1"></svg:rect><svg:rect width="5" height="5" x="8.5" y=".5" rx="1"></svg:rect><svg:rect width="5" height="5" x=".5" y="8.5" rx="1"></svg:rect><svg:rect width="5" height="5" x="8.5" y="8.5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceDashboardLayoutSquareAppApplicationDashboardHomeLayoutSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDelete2RemoveBoldAddButtonButtonsDeleteIcon],svg[streamline-interface-delete-2-remove-bold-add-button-buttons-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.19 3.05a1.06 1.06 0 0 0 0-1.49l-.75-.75a1.06 1.06 0 0 0-1.44 0L7 4.76L3.05.81a1.06 1.06 0 0 0-1.49 0l-.75.75a1.06 1.06 0 0 0 0 1.49l4 4l-4 3.95a1.06 1.06 0 0 0 0 1.49l.75.75a1.06 1.06 0 0 0 1.49 0l3.95-4l4 3.95a1.06 1.06 0 0 0 1.49 0l.75-.75a1.06 1.06 0 0 0 0-1.49L9.24 7Z"></svg:path>`,
})
export class StreamlineInterfaceDelete2RemoveBoldAddButtonButtonsDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDelete3RemoveCircleGarbageTrashDeleteIcon],svg[streamline-interface-delete-3-remove-circle-garbage-trash-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="m2.4 11.6l9.2-9.2m0 9.2L2.4 2.4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceDelete3RemoveCircleGarbageTrashDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDeleteBin1RemoveDeleteEmptyBinTrashGarbageIcon],svg[streamline-interface-delete-bin-1-remove-delete-empty-bin-trash-garbage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.5 5.5l-1 8h-7l-1-8M1 3.5h12m-8.54-.29V1.48a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2"></svg:path>`,
})
export class StreamlineInterfaceDeleteBin1RemoveDeleteEmptyBinTrashGarbageIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDeleteBin2RemoveDeleteEmptyBinTrashGarbageIcon],svg[streamline-interface-delete-bin-2-remove-delete-empty-bin-trash-garbage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 3.5h12m-10.5 0h9v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-9h0Zm2 0V3a2.5 2.5 0 0 1 5 0v.5m-4 2V11m3-5.5V11"></svg:path>`,
})
export class StreamlineInterfaceDeleteBin2RemoveDeleteEmptyBinTrashGarbageIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDeleteBin3RemoveDeleteEmptyBinTrashGarbageIcon],svg[streamline-interface-delete-bin-3-remove-delete-empty-bin-trash-garbage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12 .5l-1.4 12.11a1 1 0 0 1-1 .89H4.39a1 1 0 0 1-1-.89L2 .5m-1 0h12m-6 0v13m-4.54-9h9.08M2.98 9h8.04"></svg:path>`,
})
export class StreamlineInterfaceDeleteBin3RemoveDeleteEmptyBinTrashGarbageIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDeleteBin5RemoveDeleteEmptyBinTrashGarbageIcon],svg[streamline-interface-delete-bin-5-remove-delete-empty-bin-trash-garbage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1 3.5h12m-10.5 0h9v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-9h0Zm2 0V3a2.5 2.5 0 0 1 5 0v.5"></svg:path>`,
})
export class StreamlineInterfaceDeleteBin5RemoveDeleteEmptyBinTrashGarbageIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDeleteCircleButtonDeleteRemoveAddCircleButtonsIcon],svg[streamline-interface-delete-circle-button-delete-remove-add-circle-buttons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.12 4.88L4.88 9.12m0-4.24l4.24 4.24"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceDeleteCircleButtonDeleteRemoveAddCircleButtonsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDeleteSquareButtonRemoveButtonsAddSquareDeleteIcon],svg[streamline-interface-delete-square-button-remove-buttons-add-square-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.12 4.88L4.88 9.12m0-4.24l4.24 4.24"></svg:path><svg:rect width="13" height="13" x=".5" y=".5" rx="3"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceDeleteSquareButtonRemoveButtonsAddSquareDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDownloadBox1ArrowBoxDownDownloadInternetNetworkServerUploadIcon],svg[streamline-interface-download-box-1-arrow-box-down-download-internet-network-server-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 13.5h-1a1 1 0 0 1-1-1v-8h13v8a1 1 0 0 1-1 1h-1"></svg:path><svg:path d="M4.5 11L7 13.5L9.5 11M7 13.5v-6M11.29 1a1 1 0 0 0-.84-.5h-6.9a1 1 0 0 0-.84.5L.5 4.5h13ZM7 .5v4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceDownloadBox1ArrowBoxDownDownloadInternetNetworkServerUploadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDownloadButton1ArrowButtonDownDownloadInternetNetworkServerUploadIcon],svg[streamline-interface-download-button-1-arrow-button-down-download-internet-network-server-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 4.75h1a.5.5 0 0 1 .5.5v7.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-7.5a.5.5 0 0 1 .5-.5h1m3.5-4v8"></svg:path><svg:path d="m5 6.75l2 2l2-2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceDownloadButton1ArrowButtonDownDownloadInternetNetworkServerUploadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDownloadButton2ArrowBottomDownDownloadInternetNetworkServerUploadIcon],svg[streamline-interface-download-button-2-arrow-bottom-down-download-internet-network-server-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 10.5v1a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1M4 6l3 3.5L10 6M7 9.5v-9"></svg:path>`,
})
export class StreamlineInterfaceDownloadButton2ArrowBottomDownDownloadInternetNetworkServerUploadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDownloadCircleArrowCircleDownDownloadInternetNetworkServerUploadIcon],svg[streamline-interface-download-circle-arrow-circle-down-download-internet-network-server-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4 7l3 3.5L10 7m-3 3.5v-7"></svg:path><svg:circle cx="7" cy="7" r="6.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceDownloadCircleArrowCircleDownDownloadInternetNetworkServerUploadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDownloadDesktopActionActionsComputerDesktopDeviceDisplayDownloadMonitorScreenIcon],svg[streamline-interface-download-desktop-action-actions-computer-desktop-device-display-download-monitor-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5 3H13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-7A.5.5 0 0 1 1 3h1.5M7 11v2.5m-2 0h4M7 .5v6"></svg:path><svg:path d="m5 4.5l2 2l2-2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceDownloadDesktopActionActionsComputerDesktopDeviceDisplayDownloadMonitorScreenIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDownloadLaptopArrowComputerDownDownloadInternetLaptopNetworkServerUploadIcon],svg[streamline-interface-download-laptop-arrow-computer-down-download-internet-laptop-network-server-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m1.91 9.5l-1.3 2.55a1 1 0 0 0 0 1a1 1 0 0 0 .87.47h11a1 1 0 0 0 .87-.47a1 1 0 0 0 0-1L12.09 9.5ZM5 4.5l2 2l2-2m-2 2v-6"></svg:path><svg:path d="M2.5 4.63a1 1 0 0 0-.5.87v4h10v-4a1 1 0 0 0-.5-.87"></svg:path></svg:g>`,
})
export class StreamlineInterfaceDownloadLaptopArrowComputerDownDownloadInternetLaptopNetworkServerUploadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDownloadSquareArrowDownDownloadInternetNetworkServerSquareUploadIcon],svg[streamline-interface-download-square-arrow-down-download-internet-network-server-square-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="3"></svg:rect><svg:path d="m4 7l3 3.5L10 7m-3 3.5v-7"></svg:path></svg:g>`,
})
export class StreamlineInterfaceDownloadSquareArrowDownDownloadInternetNetworkServerSquareUploadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceDownloadWebsiteActionActionsComputerWebsiteDeviceDisplayDownloadMonitorScreenIcon],svg[streamline-interface-download-website-action-actions-computer-website-device-display-download-monitor-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 7v6.5M4.5 11L7 13.5L9.5 11"></svg:path><svg:path d="M2.5 13.5h-1a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-1m-11-10h13"></svg:path></svg:g>`,
})
export class StreamlineInterfaceDownloadWebsiteActionActionsComputerWebsiteDeviceDisplayDownloadMonitorScreenIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditAttachment1AttachmentLinkPaperclipUnlinkIcon],svg[streamline-interface-edit-attachment-1-attachment-link-paperclip-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13 6.81l-5.95 6a2.48 2.48 0 0 1-3.54 0L1.73 11a2.53 2.53 0 0 1 0-3.55l6.34-6.36a2 2 0 0 1 2.84 0l.71.71a2 2 0 0 1 0 2.84L6 10.28a1 1 0 0 1-1.42 0l-.35-.36a1 1 0 0 1 0-1.42L8 4.76"></svg:path>`,
})
export class StreamlineInterfaceEditAttachment1AttachmentLinkPaperclipUnlinkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditAttachment2AttachmentLinkPaperclipUnlinkIcon],svg[streamline-interface-edit-attachment-2-attachment-link-paperclip-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.75 11.5V3A2.5 2.5 0 0 0 8.25.5h-2.5A2.5 2.5 0 0 0 3.25 3v8.5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4a1 1 0 0 0-1-1h-.5a1 1 0 0 0-1 1v5.5"></svg:path>`,
})
export class StreamlineInterfaceEditAttachment2AttachmentLinkPaperclipUnlinkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditBinocularBinocularBinocularsViewZoomIcon],svg[streamline-interface-edit-binocular-binocular-binoculars-view-zoom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="3" cy="11" r="2.5"></svg:circle><svg:path d="M5.5 3V1.5a1 1 0 0 0-1-1H3.32a1 1 0 0 0-1 .81L.55 10.5m3.95-5h5M5.5 8v3"></svg:path><svg:circle cx="11" cy="11" r="2.5"></svg:circle><svg:path d="M8.5 3V1.5a1 1 0 0 1 1-1h1.18a1 1 0 0 1 1 .81l1.79 9.19M8.5 8v3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditBinocularBinocularBinocularsViewZoomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditBombDeleteBombRemoveIcon],svg[streamline-interface-edit-bomb-delete-bomb-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="6.5" cy="7.5" r="6"></svg:circle><svg:path d="m13.5.5l-2.76 2.76M3.5 7.5a3 3 0 0 1 3-3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditBombDeleteBombRemoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditBrush1BrushColorColorsDesignPaintPaintingIcon],svg[streamline-interface-edit-brush-1-brush-color-colors-design-paint-painting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 8.5h-9l-.76 3.8a1 1 0 0 0 .21.83a1 1 0 0 0 .77.37h8.56a1 1 0 0 0 .77-.37a1 1 0 0 0 .21-.83Zm0-3a1 1 0 0 1 1 1v2h-11v-2a1 1 0 0 1 1-1H4a1 1 0 0 0 1-1v-2a2 2 0 0 1 4 0v2a1 1 0 0 0 1 1Zm-3 8V11"></svg:path>`,
})
export class StreamlineInterfaceEditBrush1BrushColorColorsDesignPaintPaintingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditBrush2BrushColorColorsDesignPaintPaintingIcon],svg[streamline-interface-edit-brush-2-brush-color-colors-design-paint-painting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.13 12.06C4.6 13.6 2 14.11.5 12.57C2.5 10.5.5 9.5 2 8a2.9 2.9 0 1 1 4.09 4.1Z"></svg:path><svg:path d="M12.92 1.08A2 2 0 0 0 11.44.5a2 2 0 0 0-1.44.67l-5.38 6A2.85 2.85 0 0 1 6.13 8a3 3 0 0 1 .77 1.31L12.83 4a2 2 0 0 0 .67-1.43a2 2 0 0 0-.58-1.49Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditBrush2BrushColorColorsDesignPaintPaintingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditBrush3BrushColorColorsDesignPaintPaintingRollerRollingIcon],svg[streamline-interface-edit-brush-3-brush-color-colors-design-paint-painting-roller-rolling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="11" height="4" x="2.5" y=".5" rx="1"></svg:rect><svg:path d="M8 9.5v-1a2 2 0 0 0-2-2H2.5a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1h1m4 11v-3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditBrush3BrushColorColorsDesignPaintPaintingRollerRollingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditBrush4DesignRubberStampSuppliesToolIcon],svg[streamline-interface-edit-brush-4-design-rubber-stamp-supplies-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 10.5h11v2a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-2h0Zm9-4a1 1 0 0 1-1-1V3a2.5 2.5 0 0 0-5 0v2.5a1 1 0 0 1-1 1h-1a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2Z"></svg:path>`,
})
export class StreamlineInterfaceEditBrush4DesignRubberStampSuppliesToolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditClipBinderClipClipperCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-clip-binder-clip-clipper-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5 6h1a1 1 0 0 1 1 1.13l-.73 5.5a1 1 0 0 1-1 .87H2.23a1 1 0 0 1-1-.87l-.72-5.5A1 1 0 0 1 1.5 6h1"></svg:path><svg:path d="M10.46 13.5L8.33 4h.42a1.75 1.75 0 0 0 0-3.5h-3.5a1.75 1.75 0 0 0 0 3.5h.41l-2.12 9.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditClipBinderClipClipperCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditColorDropPickColorDropPickCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-color-drop-pick-color-drop-pick-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 9C12 5.5 7 .5 7 .5S2 5.5 2 9a4.77 4.77 0 0 0 5 4.5A4.77 4.77 0 0 0 12 9ZM7 .5v13m2.5-.6V3.44"></svg:path>`,
})
export class StreamlineInterfaceEditColorDropPickColorDropPickCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditColorPaletteColorPaletteCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-color-palette-color-palette-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="4.5" cy="9" r="4"></svg:circle><svg:circle cx="9.5" cy="9" r="4"></svg:circle><svg:circle cx="7" cy="5" r="4"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceEditColorPaletteColorPaletteCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditColorTriangleColorTriangleCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-color-triangle-color-triangle-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M3.5 9h7L7 3.5L3.5 9z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditColorTriangleColorTriangleCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditCopyClipboardCopyCutPasteIcon],svg[streamline-interface-edit-copy-clipboard-copy-cut-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 3.5v-1a1 1 0 0 0-1-1h-1m-2.5 9H1.5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h1"></svg:path><svg:rect width="7" height="8" x="6.5" y="5.5" rx="1"></svg:rect><svg:path d="M6.75.5h-4.5l.41 1.62a.49.49 0 0 0 .48.38h2.72a.49.49 0 0 0 .48-.38Zm1.75 8h3m-3 2h3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditCopyClipboardCopyCutPasteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditCropArtboardCropDesignImagePictureIcon],svg[streamline-interface-edit-crop-artboard-crop-design-image-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 4.5h1.5a1 1 0 0 1 1 1V7"></svg:path><svg:path d="M4.5.5v8a1 1 0 0 0 1 1h8m-9-5h-4m9 5v4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditCropArtboardCropDesignImagePictureIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditCutCouponCutDiscountPricePricesScissorsIcon],svg[streamline-interface-edit-cut-coupon-cut-discount-price-prices-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.49 10.5h2m2 0h2M2.19 4.93l5.8 3.33"></svg:path><svg:circle cx="2.75" cy="2.75" r="2.25"></svg:circle><svg:path d="M2.19 9.07L13.5 2.55"></svg:path><svg:circle cx="2.75" cy="11.25" r="2.25"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceEditCutCouponCutDiscountPricePricesScissorsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditCutterCutterCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-cutter-cutter-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m3.5 7.5l-2 2v4l4-4"></svg:path><svg:path d="M11.67 1.33a2.82 2.82 0 0 0-4 0L2.5 6.5l4 4l5.17-5.17a2.82 2.82 0 0 0 0-4ZM6.5 6.5l3-3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditCutterCutterCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditDesignToolSelectionWandSselectionWandObjectWorkIcon],svg[streamline-interface-edit-design-tool-selection-wand-sselection-wand-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l9-9m2-2l1-1M9 2V.5M12 5h1.5M11 7l1 1M6 2l1 1"></svg:path>`,
})
export class StreamlineInterfaceEditDesignToolSelectionWandSselectionWandObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditDrawingBoardBoardDesignDrawingEaselProcessIcon],svg[streamline-interface-edit-drawing-board-board-design-drawing-easel-process-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 2.5h8a1 1 0 0 1 1 1V10h0H2h0V3.5a1 1 0 0 1 1-1ZM.5 10h13M7 2.5v-2M5.5 10L3 13.5M8.5 10l2.5 3.5"></svg:path>`,
})
export class StreamlineInterfaceEditDrawingBoardBoardDesignDrawingEaselProcessIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditExpandBigBiggerDesignExpandLargerResizeSizeSquareIcon],svg[streamline-interface-edit-expand-big-bigger-design-expand-larger-resize-size-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h1a1 1 0 0 1 1 1v1m-13 0v-1a1 1 0 0 1 1-1h1m3 0h3m5 5v3m-13-3v3m11 5h1a1 1 0 0 0 1-1v-1m-13 0v1a1 1 0 0 0 1 1h1m3 0h3"></svg:path><svg:rect width="6" height="6" x="4" y="4" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceEditExpandBigBiggerDesignExpandLargerResizeSizeSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipBottomAlternate1FlipBottomObjectWorkIcon],svg[streamline-interface-edit-flip-bottom-alternate-1-flip-bottom-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7a6.5 6.5 0 0 1-13 0M13 4.39a6.13 6.13 0 0 0-.76-1.3a6.34 6.34 0 0 0-1-1.09M1.05 4.39a6.13 6.13 0 0 1 .76-1.3A6.34 6.34 0 0 1 2.85 2M8.5.67a6.7 6.7 0 0 0-3 0"></svg:path>`,
})
export class StreamlineInterfaceEditFlipBottomAlternate1FlipBottomObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipBottomFlipBottomObjectWorkIcon],svg[streamline-interface-edit-flip-bottom-flip-bottom-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7h13a6.5 6.5 0 0 1-13 0ZM13 4.39a6.13 6.13 0 0 0-.76-1.3a6.34 6.34 0 0 0-1-1.09M1.05 4.39a6.13 6.13 0 0 1 .76-1.3A6.34 6.34 0 0 1 2.85 2M8.5.67a6.7 6.7 0 0 0-3 0"></svg:path>`,
})
export class StreamlineInterfaceEditFlipBottomFlipBottomObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipDownDesignDownFlipReflectVerticalIcon],svg[streamline-interface-edit-flip-down-design-down-flip-reflect-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 11.5v1a1 1 0 0 1-1 1h-1m-3 0h-3m-5-2v1a1 1 0 0 0 1 1h1m-2-9v-3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v3m-13 4V7h13v1.5"></svg:path>`,
})
export class StreamlineInterfaceEditFlipDownDesignDownFlipReflectVerticalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipHorizontal1ArrowDesignFlipReflectIcon],svg[streamline-interface-edit-flip-horizontal-1-arrow-design-flip-reflect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 3l4 4l-4 4V3zm13 0l-4 4l4 4V3zM7 .5v1m0 2v1m0 2v1m0 2v1m0 2v1"></svg:path>`,
})
export class StreamlineInterfaceEditFlipHorizontal1ArrowDesignFlipReflectIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipHorizontal2ArrowDesignFlipReflectIcon],svg[streamline-interface-edit-flip-horizontal-2-arrow-design-flip-reflect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1.5 3.75l2.93 3.07a.27.27 0 0 1 0 .36L1.5 10.25m11-6.5L9.57 6.82a.27.27 0 0 0 0 .36l2.93 3.07M7 .5v1m0 2v1m0 2v1m0 2v1m0 2v1"></svg:path>`,
})
export class StreamlineInterfaceEditFlipHorizontal2ArrowDesignFlipReflectIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipLeftAlternate1FlipLeftObjectWorkIcon],svg[streamline-interface-edit-flip-left-alternate-1-flip-left-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5a6.5 6.5 0 0 0 0 13M9.61 1.05a6.13 6.13 0 0 1 1.3.76a6.34 6.34 0 0 1 1.09 1M9.61 13a6.13 6.13 0 0 0 1.3-.76a6.34 6.34 0 0 0 1.09-1m1.33-5.74a6.7 6.7 0 0 1 0 3"></svg:path>`,
})
export class StreamlineInterfaceEditFlipLeftAlternate1FlipLeftObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipLeftDesignFlipReflectLeftHorizontalIcon],svg[streamline-interface-edit-flip-left-design-flip-reflect-left-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5h-1a1 1 0 0 0-1 1v1m0 3v3m2 5h-1a1 1 0 0 1-1-1v-1m9 2h3a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-3m-4 13H7V.5H5.5"></svg:path>`,
})
export class StreamlineInterfaceEditFlipLeftDesignFlipReflectLeftHorizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipLeftFlipLeftObjectWorkIcon],svg[streamline-interface-edit-flip-left-flip-left-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5V.5a6.5 6.5 0 0 0 0 13ZM9.61 1.05a6.13 6.13 0 0 1 1.3.76a6.34 6.34 0 0 1 1.09 1M9.61 13a6.13 6.13 0 0 0 1.3-.76a6.34 6.34 0 0 0 1.09-1m1.33-5.74a6.7 6.7 0 0 1 0 3"></svg:path>`,
})
export class StreamlineInterfaceEditFlipLeftFlipLeftObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipRightAlternate1FlipRightObjectWorkIcon],svg[streamline-interface-edit-flip-right-alternate-1-flip-right-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5a6.5 6.5 0 0 1 0 13M4.39 1.05a6.13 6.13 0 0 0-1.3.76A6.34 6.34 0 0 0 2 2.85M4.39 13a6.13 6.13 0 0 1-1.3-.76a6.34 6.34 0 0 1-1.09-1M.67 5.5a6.7 6.7 0 0 0 0 3"></svg:path>`,
})
export class StreamlineInterfaceEditFlipRightAlternate1FlipRightObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipRightDesignFlipReflectRightHorizontalIcon],svg[streamline-interface-edit-flip-right-design-flip-reflect-right-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5h1a1 1 0 0 1 1 1v1m0 3v3m-2 5h1a1 1 0 0 0 1-1v-1m-9 2h-3a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h3m4 13H7V.5h1.5"></svg:path>`,
})
export class StreamlineInterfaceEditFlipRightDesignFlipReflectRightHorizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipRightFlipRightObjectWorkIcon],svg[streamline-interface-edit-flip-right-flip-right-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5V.5a6.5 6.5 0 0 1 0 13ZM4.39 1.05a6.13 6.13 0 0 0-1.3.76A6.34 6.34 0 0 0 2 2.85M4.39 13a6.13 6.13 0 0 1-1.3-.76a6.34 6.34 0 0 1-1.09-1M.67 5.5a6.7 6.7 0 0 0 0 3"></svg:path>`,
})
export class StreamlineInterfaceEditFlipRightFlipRightObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipTopAlternate1FlipTopObjectWorkIcon],svg[streamline-interface-edit-flip-top-alternate-1-flip-top-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7a6.5 6.5 0 0 1 13 0M1.05 9.61a6.13 6.13 0 0 0 .76 1.3a6.34 6.34 0 0 0 1 1.09M13 9.61a6.13 6.13 0 0 1-.76 1.3a6.34 6.34 0 0 1-1 1.09M5.5 13.33a6.7 6.7 0 0 0 3 0"></svg:path>`,
})
export class StreamlineInterfaceEditFlipTopAlternate1FlipTopObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipTopFlipTopObjectWorkIcon],svg[streamline-interface-edit-flip-top-flip-top-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7H.5a6.5 6.5 0 0 1 13 0ZM1.05 9.61a6.13 6.13 0 0 0 .76 1.3a6.34 6.34 0 0 0 1 1.09M13 9.61a6.13 6.13 0 0 1-.76 1.3a6.34 6.34 0 0 1-1 1.09M5.5 13.33a6.7 6.7 0 0 0 3 0"></svg:path>`,
})
export class StreamlineInterfaceEditFlipTopFlipTopObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipVertical1ArrowDesignFlipReflectUpDownIcon],svg[streamline-interface-edit-flip-vertical-1-arrow-design-flip-reflect-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.25 1.5L7.18 4.43a.27.27 0 0 1-.36 0L3.75 1.5m6.5 11L7.18 9.57a.27.27 0 0 0-.36 0L3.75 12.5M13.5 7h-1m-2 0h-1m-2 0h-1m-2 0h-1m-2 0h-1"></svg:path>`,
})
export class StreamlineInterfaceEditFlipVertical1ArrowDesignFlipReflectUpDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditFlipVertical2ArrowDesignFlipReflectUpDownIcon],svg[streamline-interface-edit-flip-vertical-2-arrow-design-flip-reflect-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11 13.5l-4-4l-4 4h8zm0-13l-4 4l-4-4h8zM13.5 7h-1m-2 0h-1m-2 0h-1m-2 0h-1m-2 0h-1"></svg:path>`,
})
export class StreamlineInterfaceEditFlipVertical2ArrowDesignFlipReflectUpDownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditGlueGlueCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-glue-glue-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5 8v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V8A2.5 2.5 0 0 1 5 5.5h4A2.5 2.5 0 0 1 11.5 8ZM7.5.5h-1L5 5.5h4L7.5.5zM5 11h4M2.5 8.5h9"></svg:path>`,
})
export class StreamlineInterfaceEditGlueGlueCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditGridGridLayoutLayoutsModuleIcon],svg[streamline-interface-edit-grid-grid-layout-layouts-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M5 .5v13m4-13v13M13.5 5H.5m13 4H.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditGridGridLayoutLayoutsModuleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditGridOffGridLayoutLayoutsModuleOffCloseDenySlashIcon],svg[streamline-interface-edit-grid-off-grid-layout-layouts-module-off-close-deny-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5.5l13 13M1.79 1.79a1 1 0 0 1 .71-.29h9a1 1 0 0 1 1 1v9a1 1 0 0 1-.29.71M9 12.5H2.5a1 1 0 0 1-1-1V5m3.75-3.5v3.75m3.5-3.75v7.25m3.75-3.5H5.25m7.25 3.5H8.75m-3.5-.25v4m3.5-.5v.5M5.5 8.75h-4m.5-3.5h-.5"></svg:path>`,
})
export class StreamlineInterfaceEditGridOffGridLayoutLayoutsModuleOffCloseDenySlashIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditLayerAdd1LayerAddDesignPlusLayersSquareBoxIcon],svg[streamline-interface-edit-layer-add-1-layer-add-design-plus-layers-square-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 3.19v4.62M3.19 5.5h4.62"></svg:path><svg:rect width="10" height="10" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M3.5 13.5h9a1 1 0 0 0 1-1v-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditLayerAdd1LayerAddDesignPlusLayersSquareBoxIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditLayerAdd2LayerAddDesignPlusLayersSquareBoxIcon],svg[streamline-interface-edit-layer-add-2-layer-add-design-plus-layers-square-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10" height="10" x=".5" y="3.5" rx="1"></svg:rect><svg:path d="M3.5.5h9a1 1 0 0 1 1 1v9M5.5 6v5M8 8.5H3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditLayerAdd2LayerAddDesignPlusLayersSquareBoxIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditMagicWandDesignMagicStarSuppliesToolWandIcon],svg[streamline-interface-edit-magic-wand-design-magic-star-supplies-tool-wand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.64 1.87l-.84 2.48a.41.41 0 0 0 0 .37l1.57 2.1a.4.4 0 0 1-.33.64h-2.62a.43.43 0 0 0-.33.17l-1.46 2.1a.4.4 0 0 1-.71-.11l-.78-2.5a.38.38 0 0 0-.26-.26l-2.5-.78a.4.4 0 0 1-.11-.71l2.14-1.51a.43.43 0 0 0 .17-.33V.91a.4.4 0 0 1 .6-.33l2.1 1.57a.41.41 0 0 0 .37.05l2.48-.84a.4.4 0 0 1 .51.51Zm-5.6 5.09L.5 13.5"></svg:path>`,
})
export class StreamlineInterfaceEditMagicWandDesignMagicStarSuppliesToolWandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditMagnetDesignMagnetSnapSuppliesToToolIcon],svg[streamline-interface-edit-magnet-design-magnet-snap-supplies-to-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.81 12.07a4.86 4.86 0 0 1-6.88-6.88L6.62.5l2.19 2.19L4.51 7A1.77 1.77 0 0 0 7 9.49l4.3-4.3l2.2 2.19Zm.38-4.76l2.19 2.19M4.5 2.62l2.19 2.19"></svg:path>`,
})
export class StreamlineInterfaceEditMagnetDesignMagnetSnapSuppliesToToolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPaintColorColorsDesignPaintPaintingPaletteIcon],svg[streamline-interface-edit-paint-color-colors-design-paint-painting-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="8.5" cy="4" r="1"></svg:circle><svg:circle cx="4.5" cy="9.5" r=".5"></svg:circle><svg:circle cx="4.5" cy="5.5" r="1"></svg:circle><svg:path d="M9.52 12.28a1 1 0 0 0-.65-.88a2 2 0 0 1 .63-3.9h1.87a2 2 0 0 0 1.89-2.67a6.5 6.5 0 1 0-6.13 8.67a6.3 6.3 0 0 0 1.74-.24a.9.9 0 0 0 .65-.98Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPaintColorColorsDesignPaintPaintingPaletteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPathfinderDividePathfinderDivideWorkIcon],svg[streamline-interface-edit-pathfinder-divide-pathfinder-divide-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 8.5a1 1 0 0 0 1 1m0-9a1 1 0 0 0-1 1m9 0a1 1 0 0 0-1-1M4 .5h2M.5 4v2m9-1.5h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-3h4a1 1 0 0 0 1-1Z"></svg:path>`,
})
export class StreamlineInterfaceEditPathfinderDividePathfinderDivideWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPathfinderIntersectPathfinderIntersectWorkIcon],svg[streamline-interface-edit-pathfinder-intersect-pathfinder-intersect-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 8.5a1 1 0 0 0 1 1m0-9a1 1 0 0 0-1 1m9 0a1 1 0 0 0-1-1M4 .5h2M.5 4v2m4 6.5a1 1 0 0 0 1 1m8-8a1 1 0 0 0-1-1m0 9a1 1 0 0 0 1-1m-5.5 1h2M13.5 8v2m-4-1.5v-4h-4a1 1 0 0 0-1 1v4h4a1 1 0 0 0 1-1Z"></svg:path>`,
})
export class StreamlineInterfaceEditPathfinderIntersectPathfinderIntersectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPathfinderMergePathfinderMergeWorkIcon],svg[streamline-interface-edit-pathfinder-merge-pathfinder-merge-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.5 9.5h1a1 1 0 0 0 1-1v-1m0-3v-3a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3m0 3a1 1 0 0 0 1 1m8-8a1 1 0 0 0-1-1m0 9a1 1 0 0 0 1-1m-4-8h.5m-2 9h2M13.5 8v2m-9-.5v.5"></svg:path>`,
})
export class StreamlineInterfaceEditPathfinderMergePathfinderMergeWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPathfinderOutlinePathfinderOutlineWorkIcon],svg[streamline-interface-edit-pathfinder-outline-pathfinder-outline-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 9.5a1 1 0 0 0 1-1m-5 1H6m3.5-5V6m-4-1.5a1 1 0 0 0-1 1"></svg:path><svg:path d="M.5 1.5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v3h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-3h-3a1 1 0 0 1-1-1Zm7.5 3h1.5M4.5 8v1.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPathfinderOutlinePathfinderOutlineWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPen1ContentCreationEditPenWriteIcon],svg[streamline-interface-edit-pen-1-content-creation-edit-pen-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m.5 13.5l2-2m2.21.79a1 1 0 0 1-1.42 0l-1.58-1.58a1 1 0 0 1 0-1.42l8.17-8.17a2.12 2.12 0 0 1 3 3Z"></svg:path><svg:path d="M11.5 5.5L7.21 1.21a1 1 0 0 0-1.42 0L2.5 4.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPen1ContentCreationEditPenWriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPen2ContentCreationEditFountainPenWriteIcon],svg[streamline-interface-edit-pen-2-content-creation-edit-fountain-pen-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 12.5a2.72 2.72 0 0 0 0-4a2.72 2.72 0 0 0-4 0c-1 1-1 5-1 5s4 0 5-1Z"></svg:path><svg:path d="M12.92 1.08a2 2 0 0 0-2.64-.15L4.5 5l-.71 2.64a2.87 2.87 0 0 1 1.71.86a2.87 2.87 0 0 1 .86 1.71L9 9.5l4.07-5.78a2 2 0 0 0-.15-2.64ZM.5 13.5l3.25-3.25"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPen2ContentCreationEditFountainPenWriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPen3ContentCreationEditPenPensWriteIcon],svg[streamline-interface-edit-pen-3-content-creation-edit-pen-pens-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 3a2.5 2.5 0 0 0-5 0v7.5l2.5 3l2.5-3Zm-5 1.5h5m2-2a2 2 0 0 1 4 0v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1Zm2 9v2"></svg:path><svg:path d="M7.5 4.5h5a1 1 0 0 1 1 1v4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPen3ContentCreationEditPenPensWriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPencilChangeEditModifyPencilWriteWritingIcon],svg[streamline-interface-edit-pencil-change-edit-modify-pencil-write-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 12.24L.5 13.5L1.76 9L10 .8a1 1 0 0 1 1.43 0l1.77 1.78a1 1 0 0 1 0 1.42Z"></svg:path>`,
})
export class StreamlineInterfaceEditPencilChangeEditModifyPencilWriteWritingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPickerColorColorsDesignDropperEyeEyedropEyedropperPaintingPickerIcon],svg[streamline-interface-edit-picker-color-colors-design-dropper-eye-eyedrop-eyedropper-painting-picker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.46 1.54a3.52 3.52 0 0 0-5 0L2.87 6.13a3 3 0 0 0-.53 3.53L.79 11.21a1 1 0 0 0 0 1.41l.59.59a1 1 0 0 0 1.41 0l1.55-1.55a3 3 0 0 0 3.53-.53l4.59-4.59a3.52 3.52 0 0 0 0-5ZM4.5 1.5l8 8"></svg:path>`,
})
export class StreamlineInterfaceEditPickerColorColorsDesignDropperEyeEyedropEyedropperPaintingPickerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPin1PinPushThumbtackIcon],svg[streamline-interface-edit-pin-1-pin-push-thumbtack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="9" cy="5" r="4.5"></svg:circle><svg:path d="m.5 13.5l5.58-5.07"></svg:path><svg:circle cx="8.5" cy="3.5" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceEditPin1PinPushThumbtackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPin2PinPushThumbtackIcon],svg[streamline-interface-edit-pin-2-pin-push-thumbtack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.73 7.65L13 5.54A1 1 0 0 0 13.21 4L10 .79A1 1 0 0 0 8.46 1L6.3 4.23l-4.49 1a.6.6 0 0 0-.29 1l6.15 6.16a.61.61 0 0 0 1-.3ZM4.59 9.38L.5 13.5"></svg:path>`,
})
export class StreamlineInterfaceEditPin2PinPushThumbtackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPin3PinPushThumbtackIcon],svg[streamline-interface-edit-pin-3-pin-push-thumbtack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="9" cy="5" r="4.5"></svg:circle><svg:path d="M10.25 3.67a1.5 1.5 0 0 0-2.31-.23M.5 13.5l5.58-5.07"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPin3PinPushThumbtackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditPrinterPrinterCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-printer-printer-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 8.5h9a1 1 0 0 1 1 1v4h0h-11h0v-4a1 1 0 0 1 1-1Z"></svg:path><svg:path d="M1.5 9.5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M3 .5h8v5H3zM4 11h6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditPrinterPrinterCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditQuillChangeEditFeatherModifyQuillWriteWritingIcon],svg[streamline-interface-edit-quill-change-edit-feather-modify-quill-write-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.51 10.05a10.21 10.21 0 0 0 3 .45A10 10 0 0 0 13.5 1a10.16 10.16 0 0 0-3-.45a10 10 0 0 0-9.99 9.5Z"></svg:path><svg:path d="M1 13.5a9.65 9.65 0 0 1-.49-3.45M8.01 5l2.57 2.57"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditQuillChangeEditFeatherModifyQuillWriteWritingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditRotateAngleRotateAngleCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-rotate-angle-rotate-angle-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5.5v13h13"></svg:path><svg:path d="M7.5 13.5a7 7 0 0 0-7-7m0 7L3 11m2.5-2.5L7 7m2-2l1.5-1.5m2-2l1-1"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditRotateAngleRotateAngleCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditRulerRulerCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-ruler-ruler-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.502 9.496L9.503.495l4.002 4.002l-9.001 9.001zM7.5 2.5L9 4M5 5l1.5 1.5m-4 1L4 9"></svg:path>`,
})
export class StreamlineInterfaceEditRulerRulerCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditScissorsClipboardCopyCutPasteRightScissorsIcon],svg[streamline-interface-edit-scissors-clipboard-copy-cut-paste-right-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m2.19 4.93l11.31 6.52"></svg:path><svg:circle cx="2.75" cy="2.75" r="2.25"></svg:circle><svg:path d="M2.19 9.07L13.5 2.55"></svg:path><svg:circle cx="2.75" cy="11.25" r="2.25"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceEditScissorsClipboardCopyCutPasteRightScissorsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSelectAreaCircleDashSelectAreaObjectWorkIcon],svg[streamline-interface-edit-select-area-circle-dash-select-area-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5.67a6.7 6.7 0 0 0-3 0m-1.91.8a7 7 0 0 0-1.19.93a7 7 0 0 0-.93 1.19M.67 5.5a6.7 6.7 0 0 0 0 3m.8 1.91a7 7 0 0 0 .93 1.19a7 7 0 0 0 1.19.93m1.91.8a6.7 6.7 0 0 0 3 0m1.91-.8a7 7 0 0 0 1.19-.93a7 7 0 0 0 .93-1.19m.8-1.91a6.7 6.7 0 0 0 0-3m-.8-1.91a7 7 0 0 0-.93-1.19a7 7 0 0 0-1.19-.93"></svg:path>`,
})
export class StreamlineInterfaceEditSelectAreaCircleDashSelectAreaObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSelectAreaRectangleDashSelectAreaObjectWorkIcon],svg[streamline-interface-edit-select-area-rectangle-dash-select-area-object-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.5.5h1a1 1 0 0 1 1 1v1m-13 0v-1a1 1 0 0 1 1-1h1m3 0h3m5 5v3m-13-3v3m11 5h1a1 1 0 0 0 1-1v-1m-13 0v1a1 1 0 0 0 1 1h1m3 0h3"></svg:path>`,
})
export class StreamlineInterfaceEditSelectAreaRectangleDashSelectAreaObjectWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSelectBackBehindBoxDesignLayerLayersSelectSendToBackIcon],svg[streamline-interface-edit-select-back-behind-box-design-layer-layers-select-send-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 9.5a1 1 0 0 0 1 1m0-10a1 1 0 0 0-1 1m10 0a1 1 0 0 0-1-1m0 10a1 1 0 0 0 1-1"></svg:path><svg:path d="M10.5 13.5h-8a2 2 0 0 1-2-2v-8m7-3h2m-2 10h2m4-6v2m-10-2v2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditSelectBackBehindBoxDesignLayerLayersSelectSendToBackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSelectFrameCursorFrameSelectIcon],svg[streamline-interface-edit-select-frame-cursor-frame-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5.5h2a1 1 0 0 1 1 1v2m-13 0v-2a1 1 0 0 1 1-1h2m7 13h2a1 1 0 0 0 1-1v-2m-13 0v2a1 1 0 0 0 1 1h2"></svg:path>`,
})
export class StreamlineInterfaceEditSelectFrameCursorFrameSelectIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSelectFrontDesignFrontLayerLayersSelectSendToTopIcon],svg[streamline-interface-edit-select-front-design-front-layer-layers-select-send-to-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10" height="10" x="3.5" y=".5" rx="1"></svg:rect><svg:path d="M.5 12.5a1 1 0 0 0 1 1m3 0H6m3 0h1.5M.5 8v1.5m0-6V5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditSelectFrontDesignFrontLayerLayersSelectSendToTopIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSkull1CrashDeathDeleteDieErrorGarbageRemoveSkullTrashIcon],svg[streamline-interface-edit-skull-1-crash-death-delete-die-error-garbage-remove-skull-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13 6.5a6 6 0 1 0-9.5 4.87v1.13a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-1.13A6 6 0 0 0 13 6.5Z"></svg:path><svg:circle cx="4.5" cy="7" r=".5"></svg:circle><svg:circle cx="9.5" cy="7" r=".5"></svg:circle><svg:path d="M6 11.5v2m2-2v2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditSkull1CrashDeathDeleteDieErrorGarbageRemoveSkullTrashIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSprayCanColorColorsDesignPaintPaintingSprayIcon],svg[streamline-interface-edit-spray-can-color-colors-design-paint-painting-spray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="6" height="9" x=".5" y="4.5" rx="1"></svg:rect><svg:path d="M3.5 2v2.5m5-3l5-1m-5 3l5 1M2.5 2h2"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditSprayCanColorColorsDesignPaintPaintingSprayIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditSwatchColorColorsDesignPaintingPaletteSampleSwatchIcon],svg[streamline-interface-edit-swatch-color-colors-design-painting-palette-sample-swatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5.5h3a1 1 0 0 1 1 1V11A2.5 2.5 0 0 1 3 13.5h0A2.5 2.5 0 0 1 .5 11V1.5a1 1 0 0 1 1-1Z"></svg:path><svg:path d="M5.5 5L9 1.48a1 1 0 0 1 1.41 0l2.11 2.12a1 1 0 0 1 0 1.41l-7.75 7.76"></svg:path><svg:path d="M9 8.5h3.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3m-2.5-9h5m-5 4h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditSwatchColorColorsDesignPaintingPaletteSampleSwatchIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditTypewriterTypewriterCompanyOfficeSuppliesWorkIcon],svg[streamline-interface-edit-typewriter-typewriter-company-office-supplies-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 3.5h13v3H.5zM3 .5h8a.5.5 0 0 1 .5.5v2.5h0h-9h0V1A.5.5 0 0 1 3 .5Z"></svg:path><svg:circle cx="3" cy="8" r="1.5"></svg:circle><svg:circle cx="11" cy="8" r="1.5"></svg:circle><svg:path d="M2.5 9.41v3.09a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9.41m-9 .09h9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditTypewriterTypewriterCompanyOfficeSuppliesWorkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditViewEyeEyeballOpenViewIcon],svg[streamline-interface-edit-view-eye-eyeball-open-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.23 6.33a1 1 0 0 1 0 1.34C12.18 8.8 9.79 11 7 11S1.82 8.8.77 7.67a1 1 0 0 1 0-1.34C1.82 5.2 4.21 3 7 3s5.18 2.2 6.23 3.33Z"></svg:path><svg:circle cx="7" cy="7" r="2"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceEditViewEyeEyeballOpenViewIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditViewOffDisableEyeEyeballHideOffViewIcon],svg[streamline-interface-edit-view-off-disable-eye-eyeball-hide-off-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.29 5.4c.38.34.7.67.94.93a1 1 0 0 1 0 1.34C12.18 8.8 9.79 11 7 11h-.4m-2.73-.87a12.4 12.4 0 0 1-3.1-2.46a1 1 0 0 1 0-1.34C1.82 5.2 4.21 3 7 3a6.56 6.56 0 0 1 3.13.87M12.5 1.5l-11 11"></svg:path><svg:path d="M5.59 8.41A2 2 0 0 1 5 7a2 2 0 0 1 2-2a2 2 0 0 1 1.41.59M8.74 8a2 2 0 0 1-.74.73"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditViewOffDisableEyeEyeballHideOffViewIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditWrite1EditEditionFormPenTextWriteIcon],svg[streamline-interface-edit-write-1-edit-edition-form-pen-text-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 13.5h11m-5-3.5l-3 .54L4 7.5L10.73.79a1 1 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42Z"></svg:path>`,
})
export class StreamlineInterfaceEditWrite1EditEditionFormPenTextWriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditWrite2ChangeDocumentEditModifyPaperPencilWriteWritingIcon],svg[streamline-interface-edit-write-2-change-document-edit-modify-paper-pencil-write-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m7.5 9l-3 .54L5 6.5L10.73.79a1 1 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42Z"></svg:path><svg:path d="M12 9.5v3a1 1 0 0 1-1 1H1.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditWrite2ChangeDocumentEditModifyPaperPencilWriteWritingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditWriteCircleChangeCircleEditModifyPencilWriteWritingIcon],svg[streamline-interface-edit-write-circle-change-circle-edit-modify-pencil-write-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 7A6.5 6.5 0 1 1 7 .5"></svg:path><svg:path d="m10.5.5l-5 5l-1 4l4-1l5-5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditWriteCircleChangeCircleEditModifyPencilWriteWritingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditZoomInEnhanceGlassInMagnifyMagnifyingZoomIcon],svg[streamline-interface-edit-zoom-in-enhance-glass-in-magnify-magnifying-zoom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="5.92" cy="5.92" r="5.42"></svg:circle><svg:path d="M13.5 13.5L9.75 9.75M6 3.5v5M3.5 6h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditZoomInEnhanceGlassInMagnifyMagnifyingZoomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceEditZoomOutGlassMagnifyingOutReduceZoomIcon],svg[streamline-interface-edit-zoom-out-glass-magnifying-out-reduce-zoom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="5.92" cy="5.92" r="5.42"></svg:circle><svg:path d="M13.5 13.5L9.75 9.75M3.5 6h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceEditZoomOutGlassMagnifyingOutReduceZoomIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFavoriteAwardRibbonRewardLikeSocialRatingMediaIcon],svg[streamline-interface-favorite-award-ribbon-reward-like-social-rating-media-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="6.87" cy="5" r="4.5"></svg:circle><svg:circle cx="6.87" cy="5" r="2"></svg:circle><svg:path d="m6 9.42l-.88 3.7a.51.51 0 0 1-.26.33a.54.54 0 0 1-.43 0L1.11 12a.51.51 0 0 1-.18-.78L3.5 8M8 9.37l.9 3.75a.5.5 0 0 0 .27.33a.51.51 0 0 0 .42 0l3.3-1.45a.5.5 0 0 0 .28-.35a.48.48 0 0 0-.1-.43l-2.68-3.41"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFavoriteAwardRibbonRewardLikeSocialRatingMediaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFavoriteDislike1RewardDownThumbHandSocialMediaDislikeRatingIcon],svg[streamline-interface-favorite-dislike-1-reward-down-thumb-hand-social-media-dislike-rating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.37 8.15l2.54 4.06a1.09 1.09 0 0 0 .94.52h0A1.11 1.11 0 0 0 8 11.63V8.72h4.39a1.15 1.15 0 0 0 1.1-1.32l-.8-5.16a1.14 1.14 0 0 0-1.13-1H5a2 2 0 0 0-.9.21l-.72.36m-.01 6.34V1.84M1 1.84h2.37v6.31h0H1a.5.5 0 0 1-.5-.5V2.34a.5.5 0 0 1 .5-.5Z"></svg:path>`,
})
export class StreamlineInterfaceFavoriteDislike1RewardDownThumbHandSocialMediaDislikeRatingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFavoriteGiveHeartRewardSocialRatingMediaHeartHandIcon],svg[streamline-interface-favorite-give-heart-reward-social-rating-media-heart-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 8.5h2A2.5 2.5 0 0 1 5 11h0m-3 0h5a2 2 0 0 1 2 2h0a.5.5 0 0 1-.5.5h-8m8.25-5l-4-3.7c-2.18-2.19 1-6.43 4-3c3-3.42 6.21.82 4 3Z"></svg:path>`,
})
export class StreamlineInterfaceFavoriteGiveHeartRewardSocialRatingMediaHeartHandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFavoriteHeartRewardSocialRatingMediaHeartItLikeFavoriteLoveIcon],svg[streamline-interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z"></svg:path>`,
})
export class StreamlineInterfaceFavoriteHeartRewardSocialRatingMediaHeartItLikeFavoriteLoveIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFavoriteLike1RewardSocialUpRatingMediaLikeThumbHandIcon],svg[streamline-interface-favorite-like-1-reward-social-up-rating-media-like-thumb-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.37 5.85l2.54-4.06a1.09 1.09 0 0 1 .94-.52h0A1.11 1.11 0 0 1 8 2.37v2.91h4.39a1.15 1.15 0 0 1 1.1 1.32l-.8 5.16a1.14 1.14 0 0 1-1.13 1H5a2 2 0 0 1-.9-.21l-.72-.36m-.01-6.34v6.31M1 5.85h2.37v6.31h0H1a.5.5 0 0 1-.5-.5V6.35a.5.5 0 0 1 .5-.5Z"></svg:path>`,
})
export class StreamlineInterfaceFavoriteLike1RewardSocialUpRatingMediaLikeThumbHandIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFavoriteStarRewardRatingRateSocialStarMediaFavoriteLikeStarsIcon],svg[streamline-interface-favorite-star-reward-rating-rate-social-star-media-favorite-like-stars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z"></svg:path>`,
})
export class StreamlineInterfaceFavoriteStarRewardRatingRateSocialStarMediaFavoriteLikeStarsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileAddAlternateFileCommonAddIcon],svg[streamline-interface-file-add-alternate-file-common-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 5.5v-4a1 1 0 0 1 1-1h5l5 5v7a1 1 0 0 1-1 1h-5"></svg:path><svg:path d="M8.5.5v5h5m-10 2v6m-3-3h6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileAddAlternateFileCommonAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileAddFileCommonAddIcon],svg[streamline-interface-file-add-file-common-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h5l5 5Zm-6-6.75v3.5M4.75 7.5h3.5"></svg:path>`,
})
export class StreamlineInterfaceFileAddFileCommonAddIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileBookmarkTextCommonBookmarkIcon],svg[streamline-interface-file-bookmark-text-common-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4Z"></svg:path><svg:path d="m8 7.5l-2-2l-2 2v-7h4v7z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileBookmarkTextCommonBookmarkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileCheckFileCommonCheckIcon],svg[streamline-interface-file-check-file-common-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h5l5 5Z"></svg:path><svg:path d="m4.5 8.5l1.5 1l2.5-4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileCheckFileCommonCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileClipboardAddEditTaskEditionAddClipboardFormIcon],svg[streamline-interface-file-clipboard-add-edit-task-edition-add-clipboard-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path><svg:rect width="5" height="2.5" x="4.5" y=".5" rx="1"></svg:rect><svg:path d="M7 6v4m2-2H5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileClipboardAddEditTaskEditionAddClipboardFormIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileClipboardBlockEditTaskEditionBlockClipboardFormIcon],svg[streamline-interface-file-clipboard-block-edit-task-edition-block-clipboard-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 13.5h-4a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1H3m5 0h1.5a1 1 0 0 1 1 1v2"></svg:path><svg:rect width="5" height="2.5" x="3" y=".5" rx="1"></svg:rect><svg:circle cx="10.25" cy="10.25" r="3.25"></svg:circle><svg:path d="m7.95 12.55l4.6-4.6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileClipboardBlockEditTaskEditionBlockClipboardFormIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileClipboardCheckCheckmarkEditTaskEditionChecklistCheckSuccessClipboardFormIcon],svg[streamline-interface-file-clipboard-check-checkmark-edit-task-edition-checklist-check-success-clipboard-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path><svg:rect width="5" height="2.5" x="4.5" y=".5" rx="1"></svg:rect><svg:path d="m4.5 8.5l2 1.5L9 6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileClipboardCheckCheckmarkEditTaskEditionChecklistCheckSuccessClipboardFormIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileClipboardDeleteEditTaskEditionDeleteClipboardFormIcon],svg[streamline-interface-file-clipboard-delete-edit-task-edition-delete-clipboard-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path><svg:rect width="5" height="2.5" x="4.5" y=".5" rx="1"></svg:rect><svg:path d="m5.5 6.5l3 3m0-3l-3 3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileClipboardDeleteEditTaskEditionDeleteClipboardFormIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileClipboardRemoveEditTaskEditionRemoveDeleteClipboardFormIcon],svg[streamline-interface-file-clipboard-remove-edit-task-edition-remove-delete-clipboard-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path><svg:rect width="5" height="2.5" x="4.5" y=".5" rx="1"></svg:rect><svg:path d="M9 8H5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileClipboardRemoveEditTaskEditionRemoveDeleteClipboardFormIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileClipboardTextEditionFormTaskChecklistEditClipboardIcon],svg[streamline-interface-file-clipboard-text-edition-form-task-checklist-edit-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path><svg:rect width="5" height="2.5" x="4.5" y=".5" rx="1"></svg:rect><svg:path d="M4.5 5.5h5M4.5 8h5m-5 2.5h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileClipboardTextEditionFormTaskChecklistEditClipboardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileClipboardWorkPlainClipboardTaskListCompanyOfficeIcon],svg[streamline-interface-file-clipboard-work-plain-clipboard-task-list-company-office-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5"></svg:path><svg:rect width="5" height="2.5" x="4.5" y=".5" rx="1"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceFileClipboardWorkPlainClipboardTaskListCompanyOfficeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileDeleteAlternateFileCommonDeleteIcon],svg[streamline-interface-file-delete-alternate-file-common-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 7V1.5a1 1 0 0 1 1-1h5l5 5v7a1 1 0 0 1-1 1H8"></svg:path><svg:path d="M8.5.5v5h5M4.74 9.26L.5 13.5m0-4.24l4.24 4.24"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileDeleteAlternateFileCommonDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileDeleteFileCommonDeleteIcon],svg[streamline-interface-file-delete-file-common-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h5l5 5ZM8.74 6L4.5 10.24M4.5 6l4.24 4.24"></svg:path>`,
})
export class StreamlineInterfaceFileDeleteFileCommonDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileDoubleFileCommonDoubleIcon],svg[streamline-interface-file-double-file-common-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1h4.5l3 3Z"></svg:path><svg:path d="M9.5 13.5h-7a1 1 0 0 1-1-1v-9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileDoubleFileCommonDoubleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileFolderWorkOfficeCompanyFolderSuppliesFileIcon],svg[streamline-interface-file-folder-work-office-company-folder-supplies-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.91 12.56l-.41-7A.5.5 0 0 1 1 5h4.61a.51.51 0 0 1 .49.38L6.5 7H13a.5.5 0 0 1 .5.54l-.39 5a1 1 0 0 1-1 .92H1.91a1 1 0 0 1-1-.9ZM3.5 3V1A.5.5 0 0 1 4 .5h8.5a.5.5 0 0 1 .5.5v4M7.5 3h3"></svg:path>`,
})
export class StreamlineInterfaceFileFolderWorkOfficeCompanyFolderSuppliesFileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileMultipleDoubleCommonFileIcon],svg[streamline-interface-file-multiple-double-common-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="8" height="11" x="2" y="2.5" rx="1"></svg:rect><svg:path d="M4 5h4M4 7.5h4M4 10h2M4.5.5H11a1 1 0 0 1 1 1V11"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileMultipleDoubleCommonFileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileRemoveAlternateFileCommonRemoveMinusSubtractIcon],svg[streamline-interface-file-remove-alternate-file-common-remove-minus-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 7.5v-6a1 1 0 0 1 1-1h5l5 5v7a1 1 0 0 1-1 1h-6"></svg:path><svg:path d="M8.5.5v5h5m-13 5h5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileRemoveAlternateFileCommonRemoveMinusSubtractIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileRemoveFileCommonRemoveMinusSubtractIcon],svg[streamline-interface-file-remove-file-common-remove-minus-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h5l5 5Zm-7.75-5h3.5"></svg:path>`,
})
export class StreamlineInterfaceFileRemoveFileCommonRemoveMinusSubtractIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileSettingFileCommonSettingIcon],svg[streamline-interface-file-setting-file-common-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.39 4V1.5a1 1 0 0 1 1-1h5l5 5v7a1 1 0 0 1-1 1h-3.5"></svg:path><svg:path d="M8.39.5v5h5m-9.75 1V8m-3.03.25l1.3.75m-1.3 2.75l1.3-.75m1.73 2.5V12m3.03-.25L5.37 11m1.3-2.75L5.37 9"></svg:path><svg:circle cx="3.64" cy="10" r="2"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceFileSettingFileCommonSettingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileStickyNoteEmptyCommonFileIcon],svg[streamline-interface-file-sticky-note-empty-common-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 13.5h-7a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7Z"></svg:path><svg:path d="M8.5 9v4.5l5-5H9a.5.5 0 0 0-.5.5Z"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFileStickyNoteEmptyCommonFileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileTextTextCommonFileIcon],svg[streamline-interface-file-text-text-common-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h5l5 5Zm-8-8h2m-2 3h5m-5 3h5"></svg:path>`,
})
export class StreamlineInterfaceFileTextTextCommonFileIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileZipFileCommonZipIcon],svg[streamline-interface-file-zip-file-common-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h6l4 4ZM4 3.5h3m-3 3h3m-3 3h3M5.5.5v10"></svg:path>`,
})
export class StreamlineInterfaceFileZipFileCommonZipIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFolderAddAddFolderPlusIcon],svg[streamline-interface-folder-add-add-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.75v-9.5a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.31 1.24h6a1 1 0 0 1 1 1v7.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1Zm6.63-5.5v3.5M5.38 8h3.5"></svg:path>`,
})
export class StreamlineInterfaceFolderAddAddFolderPlusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFolderBlockBlockFolderSubtractIcon],svg[streamline-interface-folder-block-block-folder-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.75 12H1.5a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.28 1.24h6a1 1 0 0 1 1 1v1.75"></svg:path><svg:circle cx="10.25" cy="10.25" r="3.25"></svg:circle><svg:path d="m7.95 12.55l4.6-4.6"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFolderBlockBlockFolderSubtractIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFolderCheckRemoveCheckFolderSubtractIcon],svg[streamline-interface-folder-check-remove-check-folder-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 11.75v-9.5a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.31 1.24h6a1 1 0 0 1 1 1v7.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1Z"></svg:path><svg:path d="m5 8.75l1.5 1l2.5-4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceFolderCheckRemoveCheckFolderSubtractIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFolderDeleteRemoveMinusFolderSubtractDeleteIcon],svg[streamline-interface-folder-delete-remove-minus-folder-subtract-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.75v-9.5a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.31 1.24h6a1 1 0 0 1 1 1v7.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1ZM5 8h3.5"></svg:path>`,
})
export class StreamlineInterfaceFolderDeleteRemoveMinusFolderSubtractDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFolderEmptyFolderIcon],svg[streamline-interface-folder-empty-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6A1.5 1.5 0 0 0 12 4.5H7l-1.44-3H2A1.5 1.5 0 0 0 .5 3v8A1.5 1.5 0 0 0 2 12.5h10a1.5 1.5 0 0 0 1.5-1.5Z"></svg:path>`,
})
export class StreamlineInterfaceFolderEmptyFolderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFolderRemoveRemoveMinusFolderSubtractDeleteIcon],svg[streamline-interface-folder-remove-remove-minus-folder-subtract-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 11.75v-9.5a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.31 1.24h6a1 1 0 0 1 1 1v7.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1Zm8-5l-3 3m0-3l3 3"></svg:path>`,
})
export class StreamlineInterfaceFolderRemoveRemoveMinusFolderSubtractDeleteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFolderZipZipFolderCompactIcon],svg[streamline-interface-folder-zip-zip-folder-compact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 6.25h3m-3 3h3m-1.5-6v7m-9 1.5v-9.5a1 1 0 0 1 1-1h3.69a1 1 0 0 1 1 .76l.31 1.24h6a1 1 0 0 1 1 1v7.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1Z"></svg:path>`,
})
export class StreamlineInterfaceFolderZipZipFolderCompactIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceGeometricPentagonPentagonDesignGeometricShapeShapesIcon],svg[streamline-interface-geometric-pentagon-pentagon-design-geometric-shape-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 6L7 .5L.5 6l3 7.5h7l3-7.5z"></svg:path>`,
})
export class StreamlineInterfaceGeometricPentagonPentagonDesignGeometricShapeShapesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceGeometricPolygonPolygonOctangleDesignGeometricShapeShapesIcon],svg[streamline-interface-geometric-polygon-polygon-octangle-design-geometric-shape-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 13.5h-5l-4-4v-5l4-4h5l4 4v5l-4 4z"></svg:path>`,
})
export class StreamlineInterfaceGeometricPolygonPolygonOctangleDesignGeometricShapeShapesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceGeometricSquareSquareGeometricDesignShapeShapesIcon],svg[streamline-interface-geometric-square-square-geometric-design-shape-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="13" height="13" x=".5" y=".5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect>`,
})
export class StreamlineInterfaceGeometricSquareSquareGeometricDesignShapeShapesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceGeometricTriangleGeometricTriangleShapeDesignShapesIcon],svg[streamline-interface-geometric-triangle-geometric-triangle-shape-design-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.46 2a.55.55 0 0 0-.92 0l-6 9.5a.5.5 0 0 0 0 .5a.54.54 0 0 0 .46.25h12a.54.54 0 0 0 .46-.25a.5.5 0 0 0 0-.5Z"></svg:path>`,
})
export class StreamlineInterfaceGeometricTriangleGeometricTriangleShapeDesignShapesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
