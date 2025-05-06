import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCloudLightningIcon],svg[bx-cloud-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 13l-1 5h2v4l3.975-6H13l1-3z"></svg:path><svg:path fill="currentColor" d="M18.944 10.112C18.507 6.67 15.56 4 12 4C9.244 4 6.85 5.611 5.757 8.15C3.609 8.792 2 10.819 2 13c0 2.757 2.243 5 5 5v-2c-1.654 0-3-1.346-3-3c0-1.403 1.199-2.756 2.673-3.015l.581-.103l.192-.559C8.149 7.273 9.895 6 12 6c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-1v2h1c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888"></svg:path>`,
})
export class BxCloudLightningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCloudRainIcon],svg[bx-cloud-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13h2v7H8zm3 2h2v7h-2zm3-2h2v7h-2z"></svg:path><svg:path fill="currentColor" d="M18.944 10.113C18.507 6.671 15.56 4.001 12 4.001c-2.756 0-5.15 1.611-6.243 4.15C3.609 8.793 2 10.82 2 13.001c0 2.757 2.243 5 5 5v-2c-1.654 0-3-1.346-3-3c0-1.403 1.199-2.756 2.673-3.015l.581-.103l.192-.559C8.149 7.274 9.895 6.001 12 6.001c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-1v2h1c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888"></svg:path>`,
})
export class BxCloudRainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCloudSnowIcon],svg[bx-cloud-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.944 10.112C18.507 6.67 15.56 4 12 4C9.244 4 6.85 5.611 5.757 8.15C3.609 8.792 2 10.819 2 13c0 2.757 2.243 5 5 5v-2c-1.654 0-3-1.346-3-3c0-1.403 1.199-2.756 2.673-3.015l.581-.103l.192-.559C8.149 7.273 9.895 6 12 6c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-1v2h1c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888"></svg:path><svg:circle cx="15" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="15" cy="19" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="18" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="21" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="19" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="16" r="1" fill="currentColor"></svg:circle>`,
})
export class BxCloudSnowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCloudUploadIcon],svg[bx-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19v-4h3l-4-5l-4 5h3v4z"></svg:path><svg:path fill="currentColor" d="M7 19h2v-2H7c-1.654 0-3-1.346-3-3c0-1.404 1.199-2.756 2.673-3.015l.581-.102l.192-.558C8.149 8.274 9.895 7 12 7c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-3v2h3c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888C18.507 7.67 15.56 5 12 5C9.244 5 6.85 6.611 5.757 9.15C3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5"></svg:path>`,
})
export class BxCloudUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCodeIcon],svg[bx-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.293 6.293L2.586 12l5.707 5.707l1.414-1.414L5.414 12l4.293-4.293zm7.414 11.414L21.414 12l-5.707-5.707l-1.414 1.414L18.586 12l-4.293 4.293z"></svg:path>`,
})
export class BxCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCodeAltIcon],svg[bx-code-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.375 16.781l1.25-1.562L4.601 12l4.024-3.219l-1.25-1.562l-5 4a1 1 0 0 0 0 1.562zm9.25-9.562l-1.25 1.562L19.399 12l-4.024 3.219l1.25 1.562l5-4a1 1 0 0 0 0-1.562zm-1.649-4.003l-4 18l-1.953-.434l4-18z"></svg:path>`,
})
export class BxCodeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCodeBlockIcon],svg[bx-code-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M4 19V7h16l.002 12z"></svg:path><svg:path fill="currentColor" d="M9.293 9.293L5.586 13l3.707 3.707l1.414-1.414L8.414 13l2.293-2.293zm5.414 0l-1.414 1.414L15.586 13l-2.293 2.293l1.414 1.414L18.414 13z"></svg:path>`,
})
export class BxCodeBlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCodeCurlyIcon],svg[bx-code-curly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 22h1v-2h-.989C8.703 19.994 6 19.827 6 16c0-1.993-.665-3.246-1.502-4C5.335 11.246 6 9.993 6 8c0-3.827 2.703-3.994 3-4h1V2H8.998C7.269 2.004 4 3.264 4 8c0 2.8-1.678 2.99-2.014 3L2 13c.082 0 2 .034 2 3c0 4.736 3.269 5.996 5 6m13-11c-.082 0-2-.034-2-3c0-4.736-3.269-5.996-5-6h-1v2h.989c.308.006 3.011.173 3.011 4c0 1.993.665 3.246 1.502 4c-.837.754-1.502 2.007-1.502 4c0 3.827-2.703 3.994-3 4h-1v2h1.002C16.731 21.996 20 20.736 20 16c0-2.8 1.678-2.99 2.014-3z"></svg:path>`,
})
export class BxCodeCurlyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCoffeeIcon],svg[bx-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h2v3H5zm4 0h2v3H9zm4 0h2v3h-2zm6 7h-2V7H3v11c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3h2c1.103 0 2-.897 2-2v-5c0-1.103-.897-2-2-2m-4 9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9h10zm2-2v-5h2l.002 5z"></svg:path>`,
})
export class BxCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCoffeeTogoIcon],svg[bx-coffee-togo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22h10a1 1 0 0 0 .99-.858L19.867 8H21V6h-1.382l-1.724-3.447A1 1 0 0 0 17 2H7c-.379 0-.725.214-.895.553L4.382 6H3v2h1.133L6.01 21.142A1 1 0 0 0 7 22m10.418-11H6.582l-.429-3h11.693zm-9.551 9l-.429-3h9.123l-.429 3zM7.618 4h8.764l1 2H6.618z"></svg:path>`,
})
export class BxCoffeeTogoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCogIcon],svg[bx-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4m0-6c1.084 0 2 .916 2 2s-.916 2-2 2s-2-.916-2-2s.916-2 2-2"></svg:path><svg:path fill="currentColor" d="m2.845 16.136l1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8 8 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8 8 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2 2 0 0 0-.731-2.732l-.505-.292a7.7 7.7 0 0 0 0-2.224l.505-.292a2 2 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8 8 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8 8 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2 2 0 0 0 .731 2.732l.505.292a7.7 7.7 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733m3.326-2.758A5.7 5.7 0 0 1 6 12c0-.462.058-.926.17-1.378a1 1 0 0 0-.47-1.108l-1.123-.65l.998-1.729l1.145.662a1 1 0 0 0 1.188-.142a6.1 6.1 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956a6.1 6.1 0 0 1 2.384 1.399a1 1 0 0 0 1.188.142l1.144-.661l1 1.729l-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378s-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649l-.998 1.729l-1.145-.661a1 1 0 0 0-1.188.142a6.1 6.1 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956a6.1 6.1 0 0 1-2.384-1.399a.99.99 0 0 0-1.188-.141l-1.144.662l-1-1.729l1.124-.651a1 1 0 0 0 .471-1.108"></svg:path>`,
})
export class BxCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCoinIcon],svg[bx-coin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6C7.03 6 2 7.546 2 10.5v4C2 17.454 7.03 19 12 19s10-1.546 10-4.5v-4C22 7.546 16.97 6 12 6m-8 8.5v-1.197a10 10 0 0 0 2 .86v1.881c-1.312-.514-2-1.126-2-1.544m12 .148v1.971c-.867.179-1.867.31-3 .358v-2a22 22 0 0 0 3-.329m-5 2.33a19 19 0 0 1-3-.358v-1.971c.959.174 1.972.287 3 .33zm7-.934v-1.881a10 10 0 0 0 2-.86V14.5c0 .418-.687 1.03-2 1.544M12 13c-5.177 0-8-1.651-8-2.5S6.823 8 12 8s8 1.651 8 2.5s-2.823 2.5-8 2.5"></svg:path>`,
})
export class BxCoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCoinStackIcon],svg[bx-coin-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c3.976 0 8-1.374 8-4V6c0-2.626-4.024-4-8-4S4 3.374 4 6v12c0 2.626 4.024 4 8 4m0-2c-3.722 0-6-1.295-6-2v-1.268C7.541 17.57 9.777 18 12 18s4.459-.43 6-1.268V18c0 .705-2.278 2-6 2m0-16c3.722 0 6 1.295 6 2s-2.278 2-6 2s-6-1.295-6-2s2.278-2 6-2M6 8.732C7.541 9.57 9.777 10 12 10s4.459-.43 6-1.268V10c0 .705-2.278 2-6 2s-6-1.295-6-2zm0 4C7.541 13.57 9.777 14 12 14s4.459-.43 6-1.268V14c0 .705-2.278 2-6 2s-6-1.295-6-2z"></svg:path>`,
})
export class BxCoinStackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCollapseIcon],svg[bx-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.121 6.465L14 4.344V10h5.656l-2.121-2.121l3.172-3.172l-1.414-1.414zM4.707 3.293L3.293 4.707l3.172 3.172L4.344 10H10V4.344L7.879 6.465zM19.656 14H14v5.656l2.121-2.121l3.172 3.172l1.414-1.414l-3.172-3.172zM6.465 16.121l-3.172 3.172l1.414 1.414l3.172-3.172L10 19.656V14H4.344z"></svg:path>`,
})
export class BxCollapseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCollapseAltIcon],svg[bx-collapse-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15h7v7h2v-9H2zM15 2h-2v9h9V9h-7z"></svg:path>`,
})
export class BxCollapseAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCollapseHorizontalIcon],svg[bx-collapse-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 5.64L13.59 12l6.36 6.36l1.41-1.41L16.41 12l4.95-4.95zM2.64 7.05L7.59 12l-4.95 4.95l1.41 1.41L10.41 12L4.05 5.64z"></svg:path>`,
})
export class BxCollapseHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCollapseVerticalIcon],svg[bx-collapse-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.59L7.05 2.64L5.64 4.05L12 10.41l6.36-6.36l-1.41-1.41zM5.64 19.95l1.41 1.41L12 16.41l4.95 4.95l1.41-1.41L12 13.59z"></svg:path>`,
})
export class BxCollapseVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCollectionIcon],svg[bx-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2M5 20v-8h14l.002 8zM5 6h14v2H5zm2-4h10v2H7z"></svg:path>`,
})
export class BxCollectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxColorIcon],svg[bx-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 13a3 3 0 1 1 3-3a3 3 0 0 1-3 3m2.75-7.17A5 5 0 0 0 13 7.1v-3a7.94 7.94 0 0 1 3.9 1.62zM11 7.1a5 5 0 0 0-1.75.73L7.1 5.69A7.94 7.94 0 0 1 11 4.07zM7.83 9.25A5 5 0 0 0 7.1 11h-3a7.94 7.94 0 0 1 1.59-3.9zM7.1 13a5 5 0 0 0 .73 1.75L5.69 16.9A7.94 7.94 0 0 1 4.07 13zm2.15 3.17a5 5 0 0 0 1.75.73v3a7.94 7.94 0 0 1-3.9-1.62zm3.75.73a5 5 0 0 0 1.75-.73l2.15 2.14a7.94 7.94 0 0 1-3.9 1.62zm3.17-2.15A5 5 0 0 0 16.9 13h3a7.94 7.94 0 0 1-1.62 3.9zM16.9 11a5 5 0 0 0-.73-1.75l2.14-2.15a7.94 7.94 0 0 1 1.62 3.9z"></svg:path>`,
})
export class BxColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxColorFillIcon],svg[bx-color-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13.998c-.092.065-2 2.083-2 3.5c0 1.494.949 2.448 2 2.5c.906.044 2-.891 2-2.5c0-1.5-1.908-3.435-2-3.5m-16.586-1c0 .534.208 1.036.586 1.414l5.586 5.586c.378.378.88.586 1.414.586s1.036-.208 1.414-.586l7-7l-.707-.707L11 4.584L8.707 2.291L7.293 3.705l2.293 2.293L4 11.584c-.378.378-.586.88-.586 1.414M11 7.412l5.586 5.586L11 18.584h.001l-.001 1v-1l-5.586-5.586z"></svg:path>`,
})
export class BxColorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxColumnsIcon],svg[bx-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.893 3.001H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h15.893c1.103 0 2-.897 2-2V5a2.003 2.003 0 0 0-2-1.999M8 19.001H4V8h4zm6 0h-4V8h4zm2 0V8h3.893l.001 11.001z"></svg:path>`,
})
export class BxColumnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCommandIcon],svg[bx-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14c-2.206 0-4 1.794-4 4s1.794 4 4 4a4.003 4.003 0 0 0 3.998-3.98H10V16h4v2.039h.004A4 4 0 0 0 18 22c2.206 0 4-1.794 4-4s-1.794-4-4-4h-2v-4h2c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4v2h-4V5.98h-.002A4.003 4.003 0 0 0 6 2C3.794 2 2 3.794 2 6s1.794 4 4 4h2v4zm2 4c0 1.122-.879 2-2 2s-2-.878-2-2s.879-2 2-2h2zm10-2c1.121 0 2 .878 2 2s-.879 2-2 2s-2-.878-2-2v-2zM16 6c0-1.122.879-2 2-2s2 .878 2 2s-.879 2-2 2h-2zM6 8c-1.121 0-2-.878-2-2s.879-2 2-2s2 .878 2 2v2zm4 2h4v4h-4z"></svg:path>`,
})
export class BxCommandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCommentIcon],svg[bx-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14H6.667L4 18V4h16z"></svg:path>`,
})
export class BxCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCommentAddIcon],svg[bx-comment-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z"></svg:path><svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14H6.667L4 18V4h16z"></svg:path>`,
})
export class BxCommentAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCommentCheckIcon],svg[bx-comment-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.207 8.207l-1.414-1.414L11 11.586L8.707 9.293l-1.414 1.414L11 14.414z"></svg:path><svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14H6.667L4 18V4h16z"></svg:path>`,
})
export class BxCommentCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCommentDetailIcon],svg[bx-comment-detail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7h10v2H7zm0 4h7v2H7z"></svg:path><svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14H6.667L4 18V4h16z"></svg:path>`,
})
export class BxCommentDetailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCommentDotsIcon],svg[bx-comment-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14H6.667L4 18V4h16z"></svg:path><svg:circle cx="15" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="9" cy="10" r="2" fill="currentColor"></svg:circle>`,
})
export class BxCommentDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCommentEditIcon],svg[bx-comment-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.771 9.123l-1.399-1.398l-3.869 3.864v1.398h1.398zM14.098 6l1.398 1.398l-1.067 1.067l-1.398-1.398z"></svg:path><svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14H6.667L4 18V4h16z"></svg:path>`,
})
export class BxCommentEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCommentErrorIcon],svg[bx-comment-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6h2v5h-2zm0 6h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14H6.667L4 18V4h16z"></svg:path>`,
})
export class BxCommentErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCommentMinusIcon],svg[bx-comment-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9h8v2H8z"></svg:path><svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14H6.667L4 18V4h16z"></svg:path>`,
})
export class BxCommentMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCommentXIcon],svg[bx-comment-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.707 13.707L12 11.414l2.293 2.293l1.414-1.414L13.414 10l2.293-2.293l-1.414-1.414L12 8.586L9.707 6.293L8.293 7.707L10.586 10l-2.293 2.293z"></svg:path><svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14H6.667L4 18V4h16z"></svg:path>`,
})
export class BxCommentXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCompassIcon],svg[bx-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="m8 16l5.991-2L16 8l-6 2z"></svg:path>`,
})
export class BxCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxConfusedIcon],svg[bx-confused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:circle cx="8.5" cy="10.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="15.493" cy="10.493" r="1.493" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m8.124 16.992l-.248-1.984l8-1l.248 1.984z"></svg:path>`,
})
export class BxConfusedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxConversationIcon],svg[bx-conversation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14h.5c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5h-13C2.673 2 2 2.673 2 3.5V18l5.333-4zm-9.333-2L4 14V4h12v8z"></svg:path><svg:path fill="currentColor" d="M20.5 8H20v6.001c0 1.1-.893 1.993-1.99 1.999H8v.5c0 .827.673 1.5 1.5 1.5h7.167L22 22V9.5c0-.827-.673-1.5-1.5-1.5"></svg:path>`,
})
export class BxConversationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCookieIcon],svg[bx-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.598 11.064a1 1 0 0 0-.854-.172A3 3 0 0 1 20 11c-1.654 0-3-1.346-3.003-2.937c.005-.034.016-.136.017-.17a.998.998 0 0 0-1.254-1.006A3 3 0 0 1 15 7c-1.654 0-3-1.346-3-3c0-.217.031-.444.099-.716a1 1 0 0 0-1.067-1.236A9.956 9.956 0 0 0 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-.049-.003-.097-.007-.16a1 1 0 0 0-.395-.776M12 20c-4.411 0-8-3.589-8-8a7.96 7.96 0 0 1 6.006-7.75A5.006 5.006 0 0 0 15 9l.101-.001a5.01 5.01 0 0 0 4.837 4C19.444 16.941 16.073 20 12 20"></svg:path><svg:circle cx="12.5" cy="11.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="7.5" cy="12.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="15.5" cy="15.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="10.5" cy="16.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxCookieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCoolIcon],svg[bx-cool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.683 14.828a4.1 4.1 0 0 1-1.272.858a4 4 0 0 1-4.875-1.45l-1.658 1.119a6.1 6.1 0 0 0 1.621 1.62a6 6 0 0 0 2.148.903a6.04 6.04 0 0 0 3.542-.35a6 6 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4 4 0 0 1-.489.592"></svg:path><svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4m0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8"></svg:path>`,
})
export class BxCoolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCopyIcon],svg[bx-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M4 20V10h10l.002 10zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10z"></svg:path>`,
})
export class BxCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCopyAltIcon],svg[bx-copy-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M4 20V10h10l.002 10zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10z"></svg:path><svg:path fill="currentColor" d="M6 12h6v2H6zm0 4h6v2H6z"></svg:path>`,
})
export class BxCopyAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCopyrightIcon],svg[bx-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.421 0 10-4.579 10-10S17.421 2 12 2S2 6.579 2 12s4.579 10 10 10m0-18c4.337 0 8 3.663 8 8s-3.663 8-8 8s-8-3.663-8-8s3.663-8 8-8"></svg:path><svg:path fill="currentColor" d="M12 17c.901 0 2.581-.168 3.707-1.292l-1.414-1.416C13.85 14.735 12.992 15 12 15c-1.626 0-3-1.374-3-3s1.374-3 3-3c.993 0 1.851.265 2.293.707l1.414-1.414C14.582 7.168 12.901 7 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5"></svg:path>`,
})
export class BxCopyrightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCreditCardIcon],svg[bx-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2M4 6h16v2H4zm0 12v-6h16.001l.001 6z"></svg:path><svg:path fill="currentColor" d="M6 14h6v2H6z"></svg:path>`,
})
export class BxCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCreditCardAltIcon],svg[bx-credit-card-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15.5" cy="13.5" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 13.5c0-.815.396-1.532 1-1.988A2.47 2.47 0 0 0 11.5 11a2.5 2.5 0 1 0 0 5a2.47 2.47 0 0 0 1.5-.512a2.49 2.49 0 0 1-1-1.988"></svg:path><svg:path fill="currentColor" d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2M4 18V6h16l.002 12z"></svg:path>`,
})
export class BxCreditCardAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCreditCardFrontIcon],svg[bx-credit-card-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2M4 18V6h16l.001 12z"></svg:path><svg:path fill="currentColor" d="M6.5 11h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5M6 14h6v2.001H6zm7 0h5v2.001h-5z"></svg:path>`,
})
export class BxCreditCardFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCricketBallIcon],svg[bx-cricket-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.07 4.93A10 10 0 0 0 4.93 19.07A10 10 0 0 0 19.07 4.93M6.34 6.34a8 8 0 0 1 8.78-1.71l-.29.3l.71.71l.52-.53a10 10 0 0 1 .84.57L5.68 16.9a10 10 0 0 1-.57-.84l.53-.52l-.71-.71l-.29.29a8 8 0 0 1 1.7-8.78m11.32 11.32a8 8 0 0 1-8.78 1.71l.29-.3l-.71-.71l-.52.53a10 10 0 0 1-.84-.57L18.32 7.1a10 10 0 0 1 .57.84l-.53.52l.71.71l.29-.29a8 8 0 0 1-1.7 8.78m-6.37-2.12l.71.7l-1.41 1.42l-.71-.66zm2.83-2.83l.71.7l-1.42 1.42l-.7-.71zM17 9.88l.71.71L16.24 12l-.7-.71zm-4.29-1.42l-.71-.7l1.41-1.42l.71.71zm-2.83 2.83l-.71-.7l1.42-1.42l.7.71zm-2.83 2.83l-.71-.71L7.76 12l.7.71z"></svg:path>`,
})
export class BxCricketBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCropIcon],svg[bx-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7c0-1.103-.897-2-2-2H7V2H5v3H2v2h15v15h2v-3h3v-2h-3z"></svg:path><svg:path fill="currentColor" d="M5 9v8c0 1.103.897 2 2 2h8v-2H7V9z"></svg:path>`,
})
export class BxCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCrossIcon],svg[bx-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h2v7h-2zm0 13h2v7h-2zm4-4h7v2h-7zM2 11h7v2H2z"></svg:path>`,
})
export class BxCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCrosshairIcon],svg[bx-crosshair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m1 17.931V17h-2v2.931A8.01 8.01 0 0 1 4.069 13H7v-2H4.069A8.01 8.01 0 0 1 11 4.069V7h2V4.069A8.01 8.01 0 0 1 19.931 11H17v2h2.931A8.01 8.01 0 0 1 13 19.931"></svg:path>`,
})
export class BxCrosshairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCrownIcon],svg[bx-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.219 3.375L8 7.399L4.781 3.375A1.002 1.002 0 0 0 3 4v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4a1.002 1.002 0 0 0-1.781-.625L16 7.399l-3.219-4.024c-.381-.474-1.181-.474-1.562 0M5 19v-2h14.001v2zm10.219-9.375c.381.475 1.182.475 1.563 0L19 6.851L19.001 15H5V6.851l2.219 2.774c.381.475 1.182.475 1.563 0L12 5.601z"></svg:path>`,
})
export class BxCrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCubeIcon],svg[bx-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.406 6.086l-9-4a1 1 0 0 0-.813 0l-9 4c-.02.009-.034.024-.054.035c-.028.014-.058.023-.084.04c-.022.015-.039.034-.06.05a.9.9 0 0 0-.19.194q-.031.04-.059.081a1 1 0 0 0-.076.165c-.009.027-.023.052-.031.079A1 1 0 0 0 2 7v10c0 .396.232.753.594.914l9 4c.13.058.268.086.406.086a1 1 0 0 0 .402-.096l.004.01l9-4A1 1 0 0 0 22 17V7a1 1 0 0 0-.594-.914M12 4.095L18.538 7L12 9.905l-1.308-.581L5.463 7zM4 16.351V8.539l7 3.111v7.811zm9 3.11V11.65l7-3.111v7.812z"></svg:path>`,
})
export class BxCubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCubeAltIcon],svg[bx-cube-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.895 3.553A1 1 0 0 0 17 3H7c-.379 0-.725.214-.895.553l-4 8a1 1 0 0 0 0 .895l4 8c.17.338.516.552.895.552h10c.379 0 .725-.214.895-.553l4-8a1 1 0 0 0 0-.895zM19.382 11h-7.764l-3-6h7.764zM4.118 12L7 6.236L9.882 12L7 17.764zm12.264 7H8.618l3-6h7.764z"></svg:path>`,
})
export class BxCubeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCuboidIcon],svg[bx-cuboid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.707 2.293A1 1 0 0 0 16 2H8c-.414 0-.785.255-.934.641l-5 13a1 1 0 0 0 .227 1.066l5 5A1 1 0 0 0 8 22h8c.414 0 .785-.255.934-.641l5-13a1 1 0 0 0-.227-1.066zM18.585 7h-5.171l-3-3h5.172zM8.381 4.795l3.438 3.438l-4.462 10.71l-3.19-3.191zM15.313 20h-6.23l4.583-11h5.878z"></svg:path>`,
})
export class BxCuboidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCurrentLocationIcon],svg[bx-current-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.01 8.01 0 0 0 11 19.931V22h2v-2.069A8.01 8.01 0 0 0 19.931 13H22v-2h-2.069A8.01 8.01 0 0 0 13 4.069M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6s6 2.691 6 6s-2.691 6-6 6"></svg:path>`,
})
export class BxCurrentLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCustomizeIcon],svg[bx-customize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m1-6h4v4H5zm15-2h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 6h-4V5h4zm-9 12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm-5-6h4v4H5zm13-1h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></svg:path>`,
})
export class BxCustomizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCutIcon],svg[bx-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6.5C10 4.57 8.43 3 6.5 3S3 4.57 3 6.5S4.57 10 6.5 10a3.45 3.45 0 0 0 1.613-.413l2.357 2.528l-2.318 2.318A3.46 3.46 0 0 0 6.5 14C4.57 14 3 15.57 3 17.5S4.57 21 6.5 21s3.5-1.57 3.5-3.5c0-.601-.166-1.158-.434-1.652l2.269-2.268L17 19.121a3 3 0 0 0 2.121.879H22L9.35 8.518c.406-.572.65-1.265.65-2.018M6.5 8C5.673 8 5 7.327 5 6.5S5.673 5 6.5 5S8 5.673 8 6.5S7.327 8 6.5 8m0 11c-.827 0-1.5-.673-1.5-1.5S5.673 16 6.5 16s1.5.673 1.5 1.5S7.327 19 6.5 19"></svg:path><svg:path fill="currentColor" d="m17 4.879l-3.707 4.414l1.414 1.414L22 4h-2.879A3 3 0 0 0 17 4.879"></svg:path>`,
})
export class BxCutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCyclingIcon],svg[bx-cycling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.414V20h2v-4.586c0-.526-.214-1.042-.586-1.414l-2-2L13 9.414l2 2c.372.372.888.586 1.414.586H20v-2h-3.586l-3.707-3.707a1 1 0 0 0-1.414 0L8 9.586c-.378.378-.586.88-.586 1.414s.208 1.036.586 1.414z"></svg:path><svg:circle cx="16" cy="5" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M18 14c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2M6 22c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4m0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2"></svg:path>`,
})
export class BxCyclingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxCylinderIcon],svg[bx-cylinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.131 0 9-1.935 9-4.5V7h-.053q.051-.245.053-.5C21 3.935 17.131 2 12 2C7.209 2 3.52 3.688 3.053 6H3v11.5c0 2.565 3.869 4.5 9 4.5m0-2c-4.273 0-7-1.48-7-2.5V9.394C6.623 10.387 9.111 11 12 11s5.377-.613 7-1.606V17.5c0 1.02-2.727 2.5-7 2.5m0-16c4.273 0 7 1.48 7 2.5S16.273 9 12 9S5 7.52 5 6.5S7.727 4 12 4"></svg:path>`,
})
export class BxCylinderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDataIcon],svg[bx-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17V7c0-2.168-3.663-4-8-4S4 4.832 4 7v10c0 2.168 3.663 4 8 4s8-1.832 8-4M12 5c3.691 0 5.931 1.507 6 1.994C17.931 7.493 15.691 9 12 9S6.069 7.493 6 7.006C6.069 6.507 8.309 5 12 5M6 9.607C7.479 10.454 9.637 11 12 11s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2zM6 17v-2.393C7.479 15.454 9.637 16 12 16s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2"></svg:path>`,
})
export class BxDataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDesktopIcon],svg[bx-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M4 14V5h16l.002 9z"></svg:path>`,
})
export class BxDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDetailIcon],svg[bx-detail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M4 19V5h16l.002 14z"></svg:path><svg:path fill="currentColor" d="M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z"></svg:path>`,
})
export class BxDetailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDevicesIcon],svg[bx-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H7c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M9.997 19H4V9h6zm10-2H12V9c0-1.103-.897-2-2-2H7V5h13z"></svg:path>`,
})
export class BxDevicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDialpadIcon],svg[bx-dialpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3h4v3h-4zm0 5h4v3h-4zm0 5h4v3h-4zm6-10h4v3h-4zm0 5h4v3h-4zm0 5h4v3h-4zM4 3h4v3H4zm0 5h4v3H4zm0 5h4v3H4zm6 5h4v3h-4z"></svg:path>`,
})
export class BxDialpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDialpadAltIcon],svg[bx-dialpad-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="6" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="18" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="6" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="18" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="18" r="2" fill="currentColor"></svg:circle>`,
})
export class BxDialpadAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDiamondIcon],svg[bx-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.813 3.838A2 2 0 0 0 16.187 3H7.813c-.644 0-1.252.313-1.667.899l-4 6.581a1 1 0 0 0 .111 1.188l9 10a.995.995 0 0 0 1.486.001l9-10a1 1 0 0 0 .111-1.188zM12 19.505L5.245 12h13.509zM4.777 10l3.036-5l8.332-.062L19.222 10z"></svg:path>`,
})
export class BxDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDice1Icon],svg[bx-dice-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M5 19V5h14l.002 14z"></svg:path><svg:circle cx="12" cy="12" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxDice1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDice2Icon],svg[bx-dice-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M5 19V5h14l.002 14z"></svg:path><svg:circle cx="9.5" cy="12" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="14.5" cy="12" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxDice2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDice3Icon],svg[bx-dice-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M5 19V5h14l.002 14z"></svg:path><svg:circle cx="8" cy="8" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="12" cy="12" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16" cy="16" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxDice3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDice4Icon],svg[bx-dice-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M5 19V5h14l.002 14z"></svg:path><svg:circle cx="8" cy="8" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16" cy="16" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="8" cy="16" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16" cy="8" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxDice4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDice5Icon],svg[bx-dice-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M5 19V5h14l.002 14z"></svg:path><svg:circle cx="8" cy="8" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="12" cy="12" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16" cy="16" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="8" cy="16" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16" cy="8" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxDice5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDice6Icon],svg[bx-dice-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M5 19V5h14l.002 14z"></svg:path><svg:circle cx="8" cy="8" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="8" cy="12" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16" cy="12" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16" cy="16" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="8" cy="16" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16" cy="8" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxDice6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDirectionsIcon],svg[bx-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.781 13.875l-2-2.5A1 1 0 0 0 19 11h-6V9h6c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5a1 1 0 0 0-.781.375l-2 2.5a1 1 0 0 0 0 1.25l2 2.5A1 1 0 0 0 5 9h6v2H5c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2h6v4h2v-4h6a1 1 0 0 0 .781-.375l2-2.5a1 1 0 0 0 0-1.25M4.281 5.5L5.48 4H19l.002 3H5.48zM18.52 16H5v-3h13.52l1.2 1.5z"></svg:path>`,
})
export class BxDirectionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDiscIcon],svg[bx-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path><svg:path fill="currentColor" d="M12 8a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class BxDiscIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDishIcon],svg[bx-dish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15c0-4.625-3.507-8.441-8-8.941V4h-2v2.059c-4.493.5-8 4.316-8 8.941v2h18zM5 15c0-3.859 3.141-7 7-7s7 3.141 7 7zm-3 3h20v2H2z"></svg:path>`,
})
export class BxDishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDislikeIcon],svg[bx-dislike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H6.693A2.01 2.01 0 0 0 4.82 4.298l-2.757 7.351A1 1 0 0 0 2 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2 2 0 0 0 .274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m-8.469 17h-1.145l1.562-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638zM18 14V5h2l.001 9z"></svg:path>`,
})
export class BxDislikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDizzyIcon],svg[bx-dizzy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M10.707 12.293L9.414 11l1.293-1.293l-1.414-1.414L8 9.586L6.707 8.293L5.293 9.707L6.586 11l-1.293 1.293l1.414 1.414L8 12.414l1.293 1.293zm6.586-4L16 9.586l-1.293-1.293l-1.414 1.414L14.586 11l-1.293 1.293l1.414 1.414L16 12.414l1.293 1.293l1.414-1.414L17.414 11l1.293-1.293zM10 16h4v2h-4z"></svg:path>`,
})
export class BxDizzyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDnaIcon],svg[bx-dna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.794 11.09q.498-.394.947-.84l.136-.142q.426-.438.801-.919l.062-.075c.255-.335.486-.688.702-1.049l.128-.22c.205-.364.395-.737.559-1.123c.02-.047.035-.095.055-.142q.22-.542.383-1.109q.033-.105.063-.211q.16-.604.251-1.229q.018-.13.032-.263c.051-.432.087-.869.087-1.311V2h-2v.457c0 .184-.031.361-.042.543H6.022C6.012 2.819 6 2.64 6 2.457V2H4v.457c0 4.876 3.269 9.218 7.952 10.569l.028.009c2.881.823 5.056 3.146 5.769 5.965H6.251l.799-2h7.607a7.4 7.4 0 0 0-2.063-2h-4c.445-.424.956-.774 1.491-1.09a10 10 0 0 1-2.08-1.014C5.55 14.812 4 17.779 4 21.015V23h2v-1.985L6.001 21h11.998l.001.015V23h2v-1.985c0-3.83-2.159-7.303-5.443-9.07a11 11 0 0 0 1.072-.729zm-1.19-1.604a9 9 0 0 1-2.325 1.348q-.138.052-.278.102A8.95 8.95 0 0 1 8.836 9h6.292c-.171.161-.332.333-.517.48zM17.619 5l-.012.049l-.044.151a9 9 0 0 1-.513 1.252c-.096.19-.213.365-.321.548h-9.48a9 9 0 0 1-.871-2z"></svg:path>`,
})
export class BxDnaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDockBottomIcon],svg[bx-dock-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v9H5V5zM5 19v-3h14v3z"></svg:path>`,
})
export class BxDockBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDockLeftIcon],svg[bx-dock-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M5 5h3v14H5zm5 14V5h9v14z"></svg:path>`,
})
export class BxDockLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDockRightIcon],svg[bx-dock-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M5 5h9v14H5zm11 14V5h3v14z"></svg:path>`,
})
export class BxDockRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDockTopIcon],svg[bx-dock-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v3H5V5zM5 19v-9h14v9z"></svg:path>`,
})
export class BxDockTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDollarIcon],svg[bx-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.999 8.5h2c0-2.837-2.755-4.131-5-4.429V2h-2v2.071c-2.245.298-5 1.592-5 4.429c0 2.706 2.666 4.113 5 4.43v4.97c-1.448-.251-3-1.024-3-2.4h-2c0 2.589 2.425 4.119 5 4.436V22h2v-2.07c2.245-.298 5-1.593 5-4.43s-2.755-4.131-5-4.429V6.1c1.33.239 3 .941 3 2.4m-8 0c0-1.459 1.67-2.161 3-2.4v4.799c-1.371-.253-3-1.002-3-2.399m8 7c0 1.459-1.67 2.161-3 2.4v-4.8c1.33.239 3 .941 3 2.4"></svg:path>`,
})
export class BxDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDollarCircleIcon],svg[bx-dollar-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path><svg:path fill="currentColor" d="M12 11c-2 0-2-.63-2-1s.7-1 2-1s1.39.64 1.4 1h2A3 3 0 0 0 13 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3c2 0 2 .68 2 1s-.62 1-2 1c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92c0-1.12-.52-3-4-3"></svg:path>`,
})
export class BxDollarCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDonateBloodIcon],svg[bx-donate-blood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21h9.62a4 4 0 0 0 3.037-1.397l5.102-5.952a1 1 0 0 0-.442-1.6l-1.968-.656a3.04 3.04 0 0 0-2.823.503l-3.185 2.547l-.617-1.235A3.98 3.98 0 0 0 9.146 11H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2m0-8h5.146c.763 0 1.448.423 1.789 1.105l.447.895H7v2h6.014a1 1 0 0 0 .442-.11l.003-.001l.004-.002h.003l.002-.001h.004l.001-.001c.011.003.003-.001.003-.001c.012 0 .002-.001.002-.001h.001l.002-.001l.003-.001l.002-.001l.002-.001l.003-.001l.002-.001l.002-.001l.003-.002l.002-.001l.002-.001l.003-.001l.002-.001h.001l.002-.001h.001l.002-.001l.002-.001c.011-.001.003-.001.003-.001l.002-.001a1 1 0 0 0 .11-.078l4.146-3.317c.261-.208.623-.273.94-.167l.557.186l-4.133 4.823a2.03 2.03 0 0 1-1.52.688H4zm9.761-10.674C13.3 2.832 11 5.457 11 7.5c0 1.93 1.57 3.5 3.5 3.5S18 9.43 18 7.5c0-2.043-2.3-4.668-2.761-5.174c-.379-.416-1.099-.416-1.478 0M16 7.5c0 .827-.673 1.5-1.5 1.5S13 8.327 13 7.5c0-.708.738-1.934 1.5-2.934c.762 1 1.5 2.226 1.5 2.934"></svg:path>`,
})
export class BxDonateBloodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDonateHeartIcon],svg[bx-donate-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21h9.62a4 4 0 0 0 3.037-1.397l5.102-5.952a1 1 0 0 0-.442-1.6l-1.968-.656a3.04 3.04 0 0 0-2.823.503l-3.185 2.547l-.617-1.235A3.98 3.98 0 0 0 9.146 11H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2m0-8h5.146c.763 0 1.448.423 1.789 1.105l.447.895H7v2h6.014a1 1 0 0 0 .442-.11l.003-.001l.004-.002h.003l.002-.001h.004l.001-.001c.009.003.003-.001.003-.001c.01 0 .002-.001.002-.001h.001l.002-.001l.003-.001l.002-.001l.002-.001l.003-.001l.002-.001c.003 0 .001-.001.002-.001l.003-.002l.002-.001l.002-.001l.003-.001l.002-.001h.001l.002-.001h.001l.002-.001l.002-.001c.009-.001.003-.001.003-.001l.002-.001a1 1 0 0 0 .11-.078l4.146-3.317c.262-.208.623-.273.94-.167l.557.186l-4.133 4.823a2.03 2.03 0 0 1-1.52.688H4zM16 2h-.017c-.163.002-1.006.039-1.983.705c-.951-.648-1.774-.7-1.968-.704L12.002 2h-.004c-.801 0-1.555.313-2.119.878C9.313 3.445 9 4.198 9 5s.313 1.555.861 2.104l3.414 3.586a1.006 1.006 0 0 0 1.45-.001l3.396-3.568C18.688 6.555 19 5.802 19 5s-.313-1.555-.878-2.121A2.98 2.98 0 0 0 16.002 2zm1 3c0 .267-.104.518-.311.725L14 8.55l-2.707-2.843C11.104 5.518 11 5.267 11 5s.104-.518.294-.708A.98.98 0 0 1 11.979 4c.025.001.502.032 1.067.485q.121.098.247.222l.707.707l.707-.707q.126-.124.247-.222c.529-.425.976-.478 1.052-.484a1 1 0 0 1 .701.292c.189.189.293.44.293.707"></svg:path>`,
})
export class BxDonateHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDoorOpenIcon],svg[bx-door-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.385 21.788a1 1 0 0 0 .857.182l8-2A1 1 0 0 0 20 19V5a1 1 0 0 0-.758-.97l-8-2A1.003 1.003 0 0 0 10 3v1H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4v1c0 .308.142.599.385.788M12 4.281l6 1.5v12.438l-6 1.5zM7 18V6h3v12z"></svg:path><svg:path fill="currentColor" d="M14.242 13.159c.446-.112.758-.512.758-.971v-.377a1 1 0 1 0-2 .001v.377a1 1 0 0 0 1.242.97"></svg:path>`,
})
export class BxDoorOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDotsHorizontalIcon],svg[bx-dots-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4z"></svg:path>`,
})
export class BxDotsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDotsHorizontalRoundedIcon],svg[bx-dots-horizontal-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m6 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2M6 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"></svg:path>`,
})
export class BxDotsHorizontalRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDotsVerticalIcon],svg[bx-dots-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10h4v4h-4zm0-6h4v4h-4zm0 12h4v4h-4z"></svg:path>`,
})
export class BxDotsVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDotsVerticalRoundedIcon],svg[bx-dots-vertical-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 12c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"></svg:path>`,
})
export class BxDotsVerticalRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDoughnutChartIcon],svg[bx-doughnut-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m7.931 9h-3.032A5.01 5.01 0 0 0 13 7.102V4.069A8.01 8.01 0 0 1 19.931 11M12 9c1.654 0 3 1.346 3 3s-1.346 3-3 3s-3-1.346-3-3s1.346-3 3-3m0 11c-4.411 0-8-3.589-8-8c0-4.072 3.061-7.436 7-7.931v3.032A5.01 5.01 0 0 0 7 12c0 2.757 2.243 5 5 5a5.01 5.01 0 0 0 4.898-4h3.032c-.494 3.939-3.858 7-7.93 7"></svg:path>`,
})
export class BxDoughnutChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDownArrowIcon],svg[bx-down-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.886 5.536A1 1 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13a.998.998 0 0 0 1.644 0l9-13a1 1 0 0 0 .064-1.033M12 17.243L4.908 7h14.184z"></svg:path>`,
})
export class BxDownArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDownArrowAltIcon],svg[bx-down-arrow-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.707 12.707l-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293l-1.414 1.414L12 19.414z"></svg:path>`,
})
export class BxDownArrowAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDownArrowCircleIcon],svg[bx-down-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.993C6.486 1.994 2 6.48 2 11.994s4.486 9.999 10 10s10-4.486 10-10s-4.485-10-10-10.001m0 18.001c-4.411-.001-8-3.59-8-8s3.589-8 8-8.001c4.411.001 8 3.59 8 8.001s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M13 8h-2v4H7.991l4.005 4.005L16 12h-3z"></svg:path>`,
})
export class BxDownArrowCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDownloadIcon],svg[bx-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 16l4-5h-3V4h-2v7H8z"></svg:path><svg:path fill="currentColor" d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2z"></svg:path>`,
})
export class BxDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDownvoteIcon],svg[bx-downvote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.901 10.566A1 1 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059M12 19.399L6.081 12H10V4h4v8h3.919z"></svg:path>`,
})
export class BxDownvoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDrinkIcon],svg[bx-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.832 4.555A1 1 0 0 0 20 3H4a1 1 0 0 0-.832 1.554L11 16.303V20H8v2h8v-2h-3v-3.697zM12 14.197L8.535 9h6.93zM18.132 5l-1.333 2H7.201L5.868 5z"></svg:path>`,
})
export class BxDrinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDropletIcon],svg[bx-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c4.636 0 8-3.468 8-8.246C20 7.522 12.882 2.4 12.579 2.185a1 1 0 0 0-1.156-.001C11.12 2.397 4 7.503 4 13.75C4 18.53 7.364 22 12 22m-.001-17.74C13.604 5.55 18 9.474 18 13.754C18 17.432 15.532 20 12 20s-6-2.57-6-6.25c0-4.29 4.394-8.203 5.999-9.49"></svg:path>`,
})
export class BxDropletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDumbbellIcon],svg[bx-dumbbell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v14h3v-6h6v6h3V5h-3v6H9V5zM3 15a1 1 0 0 0 1 1h1V8H4a1 1 0 0 0-1 1v2H2v2h1zm18-6a1 1 0 0 0-1-1h-1v8h1a1 1 0 0 0 1-1v-2h1v-2h-1z"></svg:path>`,
})
export class BxDumbbellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxDuplicateIcon],svg[bx-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 10H9v3H6v2h3v3h2v-3h3v-2h-3z"></svg:path><svg:path fill="currentColor" d="M4 22h12c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2M4 8h12l.002 12H4z"></svg:path><svg:path fill="currentColor" d="M20 2H8v2h12v12h2V4c0-1.103-.897-2-2-2"></svg:path>`,
})
export class BxDuplicateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxEditIcon],svg[bx-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z"></svg:path><svg:path fill="currentColor" d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2"></svg:path>`,
})
export class BxEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxEditAltIcon],svg[bx-edit-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413zm-3-3l1.587 1.585l-1.59 1.584l-1.586-1.585zM6 16v-1.585l7.04-7.018l1.586 1.586L7.587 16zm-2 4h16v2H4z"></svg:path>`,
})
export class BxEditAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxEnvelopeIcon],svg[bx-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m0 2v.511l-8 6.223l-8-6.222V6zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044L20.002 18z"></svg:path>`,
})
export class BxEnvelopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxEnvelopeOpenIcon],svg[bx-envelope-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.555 8.168l-9-6a1 1 0 0 0-1.109 0l-9 6A1 1 0 0 0 2 9v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V9c0-.334-.167-.646-.445-.832M12 4.202L19.197 9L12 13.798L4.803 9zM4 20v-9.131l7.445 4.963a1 1 0 0 0 1.11 0L20 10.869L19.997 20z"></svg:path>`,
})
export class BxEnvelopeOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxEqualizerIcon],svg[bx-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h2v6h-2zm4-3h2v12h-2zM7 4h2v16H7zm12 7h2v2h-2zM3 10h2v4H3z"></svg:path>`,
})
export class BxEqualizerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxEraserIcon],svg[bx-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.586 15.408l4.299 4.299a1 1 0 0 0 .707.293h12.001v-2h-6.958l7.222-7.222c.78-.779.78-2.049 0-2.828L14.906 3a2.003 2.003 0 0 0-2.828 0l-4.75 4.749l-4.754 4.843a2.007 2.007 0 0 0 .012 2.816M13.492 4.414l4.95 4.95l-2.586 2.586L10.906 7zM8.749 9.156l.743-.742l4.95 4.95l-4.557 4.557a1 1 0 0 0-.069.079h-1.81l-4.005-4.007z"></svg:path>`,
})
export class BxEraserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxErrorIcon],svg[bx-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.001 10h2v5h-2zM11 16h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.99 1.99 0 0 0 .054 1.968A1.98 1.98 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.99 1.99 0 0 0 .054-1.968zM4.661 19L12 5.137L19.344 19z"></svg:path>`,
})
export class BxErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxErrorAltIcon],svg[bx-error-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h2v7h-2zm0 8h2v2h-2z"></svg:path><svg:path fill="currentColor" d="m21.707 7.293l-5-5A1 1 0 0 0 16 2H8a1 1 0 0 0-.707.293l-5 5A1 1 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A1 1 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A1 1 0 0 0 22 16V8a1 1 0 0 0-.293-.707M20 15.586L15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414z"></svg:path>`,
})
export class BxErrorAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxErrorCircleIcon],svg[bx-error-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.493 2 11.953 2M12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M11 7h2v7h-2zm0 8h2v2h-2z"></svg:path>`,
})
export class BxErrorCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxEuroIcon],svg[bx-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.464 6c1.43 0 2.779.613 3.799 1.726l1.475-1.352C17.334 4.843 15.461 4 13.464 4c-1.998 0-3.87.843-5.272 2.375A8 8 0 0 0 6.589 9H4v2h2.114c-.038.33-.064.663-.064 1s.026.67.064 1H4v2h2.589c.362.97.901 1.861 1.603 2.626C9.594 19.157 11.466 20 13.464 20c1.997 0 3.87-.843 5.273-2.374l-1.475-1.352C16.243 17.387 14.894 18 13.464 18s-2.778-.612-3.798-1.726A6 6 0 0 1 8.801 15H13v-2H8.139c-.05-.328-.089-.66-.089-1s.039-.672.089-1H13V9H8.801c.24-.457.516-.893.865-1.274C10.686 6.613 12.034 6 13.464 6"></svg:path>`,
})
export class BxEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxExcludeIcon],svg[bx-exclude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8h-3V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h3v3c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2m-4 7H9V9h6z"></svg:path>`,
})
export class BxExcludeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxExitIcon],svg[bx-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2"></svg:path><svg:path fill="currentColor" d="m11 16l5-4l-5-4v3.001H3v2h8z"></svg:path>`,
})
export class BxExitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxExitFullscreenIcon],svg[bx-exit-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4H8v4H4v2h6zM8 20h2v-6H4v2h4zm12-6h-6v6h2v-4h4zm0-6h-4V4h-2v6h6z"></svg:path>`,
})
export class BxExitFullscreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxExpandIcon],svg[bx-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 15.344l-2.121 2.121l-3.172-3.172l-1.414 1.414l3.172 3.172L15.344 21H21zM3 8.656l2.121-2.121l3.172 3.172l1.414-1.414l-3.172-3.172L8.656 3H3zM21 3h-5.656l2.121 2.121l-3.172 3.172l1.414 1.414l3.172-3.172L21 8.656zM3 21h5.656l-2.121-2.121l3.172-3.172l-1.414-1.414l-3.172 3.172L3 15.344z"></svg:path>`,
})
export class BxExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxExpandAltIcon],svg[bx-expand-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12H3v9h9v-2H5zm7-7h7v7h2V3h-9z"></svg:path>`,
})
export class BxExpandAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxExpandHorizontalIcon],svg[bx-expand-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.29 5.64L1.93 12l6.36 6.36l1.42-1.41L4.76 12l4.95-4.95zm6 1.41L19.24 12l-4.95 4.95l1.42 1.41L22.07 12l-6.36-6.36z"></svg:path>`,
})
export class BxExpandHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxExpandVerticalIcon],svg[bx-expand-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 19.24l-4.95-4.95l-1.41 1.42L12 22.07l6.36-6.36l-1.41-1.42zM5.64 8.29l1.41 1.42L12 4.76l4.95 4.95l1.41-1.42L12 1.93z"></svg:path>`,
})
export class BxExpandVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxExportIcon],svg[bx-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16h2V7h3l-4-5l-4 5h3z"></svg:path><svg:path fill="currentColor" d="M5 22h14c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-4v2h4v9H5v-9h4V9H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2"></svg:path>`,
})
export class BxExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxExtensionIcon],svg[bx-extension-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10V7c0-1.103-.897-2-2-2h-3c0-1.654-1.346-3-3-3S8 3.346 8 5H5c-1.103 0-2 .897-2 2v3.881l.659.239C4.461 11.41 5 12.166 5 13s-.539 1.59-1.341 1.88L3 15.119V19c0 1.103.897 2 2 2h3.881l.239-.659C9.41 19.539 10.166 19 11 19s1.59.539 1.88 1.341l.239.659H17c1.103 0 2-.897 2-2v-3c1.654 0 3-1.346 3-3s-1.346-3-3-3m0 4h-2l-.003 5h-2.545c-.711-1.22-2.022-2-3.452-2s-2.741.78-3.452 2H5v-2.548C6.22 15.741 7 14.43 7 13s-.78-2.741-2-3.452V7h5V5a1 1 0 0 1 2 0v2h5v5h2a1 1 0 0 1 0 2"></svg:path>`,
})
export class BxExtensionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFaceIcon],svg[bx-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 2c3.213 0 5.982 1.908 7.254 4.648a8 8 0 0 1-.895-.498c-.409-.258-.873-.551-1.46-.772c-.669-.255-1.4-.378-2.234-.378s-1.565.123-2.234.377c-.587.223-1.051.516-1.472.781c-.378.237-.703.443-1.103.594C9.41 8.921 8.926 9 8.33 9c-.595 0-1.079-.079-1.524-.248c-.4-.151-.728-.358-1.106-.598c-.161-.101-.34-.208-.52-.313C6.587 5.542 9.113 4 12 4m0 16c-4.411 0-8-3.589-8-8c0-.81.123-1.59.348-2.327c.094.058.185.11.283.173c.411.26.876.554 1.466.776c.669.255 1.399.378 2.233.378c.833 0 1.564-.123 2.235-.377c.587-.223 1.051-.516 1.472-.781c.378-.237.703-.443 1.103-.595c.445-.168.929-.247 1.525-.247s1.08.079 1.525.248c.399.15.725.356 1.114.602c.409.258.873.551 1.46.773c.363.138.748.229 1.153.291c.049.357.083.717.083 1.086c0 4.411-3.589 8-8 8"></svg:path><svg:circle cx="8.5" cy="13.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="15.5" cy="13.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxFaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFastForwardIcon],svg[bx-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 12l-7-5v10zM5 7v10l7-5z"></svg:path>`,
})
export class BxFastForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFastForwardCircleIcon],svg[bx-fast-forward-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="m13 16l5-4l-5-4zm-6 0l5-4l-5-4z"></svg:path>`,
})
export class BxFastForwardCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFemaleIcon],svg[bx-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M14.948 7.684A1 1 0 0 0 14 7h-4a1 1 0 0 0-.948.684l-2 6l1.775.593L8 18h2v4h4v-4h2l-.827-3.724l1.775-.593z"></svg:path>`,
})
export class BxFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFemaleSignIcon],svg[bx-female-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C8.691 2 6 4.691 6 8c0 2.967 2.167 5.432 5 5.91V17H8v2h3v2.988h2V19h3v-2h-3v-3.09c2.833-.479 5-2.943 5-5.91c0-3.309-2.691-6-6-6m0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4"></svg:path>`,
})
export class BxFemaleSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFileIcon],svg[bx-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.903 8.586a1 1 0 0 0-.196-.293l-6-6a1 1 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a1 1 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a1 1 0 0 0-.051-.259q-.014-.048-.033-.093M16.586 8H14V5.414zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10z"></svg:path><svg:path fill="currentColor" d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"></svg:path>`,
})
export class BxFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFileBlankIcon],svg[bx-file-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.937 8.68q-.015-.048-.033-.094a1 1 0 0 0-.196-.293l-6-6a1 1 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a1 1 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a1 1 0 0 0-.05-.258M16.586 8H14V5.414zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10z"></svg:path>`,
})
export class BxFileBlankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFileFindIcon],svg[bx-file-find-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.707 2.293A1 1 0 0 0 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9a1 1 0 0 0-.293-.707zM6 4h6.586L18 9.414l.002 9.174l-2.568-2.568c.35-.595.566-1.281.566-2.02c0-2.206-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4c.739 0 1.425-.216 2.02-.566L16.586 20H6zm6 12c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2"></svg:path>`,
})
export class BxFileFindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFilmIcon],svg[bx-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M9 11V5h6v6zm6 2v6H9v-6zM5 5h2v2H5zm0 4h2v2H5zm0 4h2v2H5zm0 4h2v2H5zm14.002 2H17v-2h2.002zm-.001-4H17v-2h2.001zm0-4H17V9h2.001zM17 7V5h2v2z"></svg:path>`,
})
export class BxFilmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFilterIcon],svg[bx-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></svg:path>`,
})
export class BxFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFilterAltIcon],svg[bx-filter-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1 1 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1m-6.707 9.293A1 1 0 0 0 14 13v5.382l-2 1V13a1 1 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583z"></svg:path>`,
})
export class BxFilterAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFingerprintIcon],svg[bx-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.962 17.674C7 19.331 7 20.567 7 22h2c0-1.521 0-3.244-1.343-5.389zM16.504 3.387C13.977 1.91 7.55.926 4.281 4.305c-3.368 3.481-2.249 9.072.001 11.392c.118.122.244.229.369.333c.072.061.146.116.205.184l1.494-1.33a4 4 0 0 0-.419-.391c-.072-.06-.146-.119-.214-.188c-1.66-1.711-2.506-6.017.001-8.608c2.525-2.611 8.068-1.579 9.777-.581c2.691 1.569 4.097 4.308 4.109 4.333l1.789-.895c-.065-.135-1.668-3.289-4.889-5.167"></svg:path><svg:path fill="currentColor" d="M9.34 12.822c-1.03-1.26-1.787-2.317-1.392-3.506c.263-.785.813-1.325 1.637-1.604c1.224-.41 2.92-.16 4.04.601l1.123-1.654c-1.648-1.12-3.982-1.457-5.804-.841c-1.408.476-2.435 1.495-2.892 2.866c-.776 2.328.799 4.254 1.74 5.405c.149.183.29.354.409.512C11 18.323 11 20.109 11 22h2c0-2.036 0-4.345-3.201-8.601a20 20 0 0 0-.459-.577m5.791-3.344c1.835 1.764 3.034 4.447 3.889 8.701l1.961-.395c-.939-4.678-2.316-7.685-4.463-9.748z"></svg:path><svg:path fill="currentColor" d="m11.556 9.169l-1.115 1.66c.027.019 2.711 1.88 3.801 5.724l1.924-.545c-1.299-4.582-4.476-6.749-4.61-6.839m3.132 9.29c.21 1.168.312 2.326.312 3.541h2c0-1.335-.112-2.608-.343-3.895z"></svg:path>`,
})
export class BxFingerprintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFirstAidIcon],svg[bx-first-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2M9 4h6v2H9zM4 18V8h16l.001 10z"></svg:path><svg:path fill="currentColor" d="M13 9h-2v3H8v2h3v3h2v-3h3v-2h-3z"></svg:path>`,
})
export class BxFirstAidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFirstPageIcon],svg[bx-first-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.293 17.707l1.414-1.414L13.414 12l4.293-4.293l-1.414-1.414L10.586 12zM7 6h2v12H7z"></svg:path>`,
})
export class BxFirstPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFlagIcon],svg[bx-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4H6V2H4v18H3v2h4v-2H6v-5h13a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 9H6V6h12z"></svg:path>`,
})
export class BxFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFolderIcon],svg[bx-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5h-8.586L9.707 3.293A1 1 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2M4 19V7h16l.002 12z"></svg:path>`,
})
export class BxFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFolderMinusIcon],svg[bx-folder-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5h-8.586L9.707 3.293A1 1 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2M4 19V7h16l.002 12z"></svg:path><svg:path fill="currentColor" d="M7.874 12h8v2h-8z"></svg:path>`,
})
export class BxFolderMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFolderOpenIcon],svg[bx-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V7c0-1.103-.897-2-2-2h-6.1L9.616 3.213A1 1 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14h.007a1 1 0 0 0 .158.551M17.341 18H4.517l2.143-5h12.824zM18 7v4H6c-.4 0-.762.238-.919.606L4 14.129V7z"></svg:path>`,
})
export class BxFolderOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFolderPlusIcon],svg[bx-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9h-2v3H8v2h3v3h2v-3h3v-2h-3z"></svg:path><svg:path fill="currentColor" d="M20 5h-8.586L9.707 3.293A1 1 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2M4 19V7h16l.002 12z"></svg:path>`,
})
export class BxFolderPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFontIcon],svg[bx-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.307 4l-6 16h2.137l1.875-5h6.363l1.875 5h2.137l-6-16zm-1.239 9L12.5 6.515L14.932 13z"></svg:path>`,
})
export class BxFontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFontColorIcon],svg[bx-font-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18h14v3H5zm7.5-14h-1c-.401 0-.764.24-.921.609L5.745 16h2.173l1.273-3h5.604l1.268 3h2.171L13.421 4.61A1 1 0 0 0 12.5 4m-2.46 7l1.959-4.616L13.95 11z"></svg:path>`,
})
export class BxFontColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFontFamilyIcon],svg[bx-font-family-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4h7v2h-7zm1 4h6v2h-6zm2 4h4v2h-4zM9.307 4l-6 16h2.137l1.875-5h6.363l1.875 5h2.137l-6-16zm-1.239 9L10.5 6.515L12.932 13z"></svg:path>`,
})
export class BxFontFamilyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFontSizeIcon],svg[bx-font-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 6l-3-4l-3 4h2v4h-2l3 4l3-4h-2V6zM9.307 4l-6 16h2.137l1.875-5h6.363l1.875 5h2.137l-6-16zm-1.239 9L10.5 6.515L12.932 13z"></svg:path>`,
})
export class BxFontSizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFoodMenuIcon],svg[bx-food-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2h2v20H3zm7 4h7v2h-7zm0 4h7v2h-7z"></svg:path><svg:path fill="currentColor" d="M19 2H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 18H8V4h11z"></svg:path>`,
})
export class BxFoodMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFoodTagIcon],svg[bx-food-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 16H5V5h14z"></svg:path><svg:circle cx="12" cy="12" r="5" fill="currentColor"></svg:circle>`,
})
export class BxFoodTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFootballIcon],svg[bx-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.071 4.929a9.94 9.94 0 0 0-7.07-2.938a9.94 9.94 0 0 0-7.072 2.938c-3.899 3.898-3.899 10.243 0 14.142a9.94 9.94 0 0 0 7.073 2.938a9.94 9.94 0 0 0 7.07-2.937c3.899-3.898 3.899-10.243-.001-14.143M12.181 4h-.359c.061-.001.119-.009.18-.009s.118.008.179.009m6.062 13H16l-1.258 2.516a8 8 0 0 1-2.741.493a8 8 0 0 1-2.746-.494L8 17.01H5.765a7.96 7.96 0 0 1-1.623-3.532L6 11L4.784 8.567a8 8 0 0 1 1.559-2.224a8 8 0 0 1 3.22-1.969L12 6l2.438-1.625a8 8 0 0 1 3.22 1.968a8 8 0 0 1 1.558 2.221L18 11l1.858 2.478A7.95 7.95 0 0 1 18.243 17"></svg:path><svg:path fill="currentColor" d="m8.5 11l1.5 4h4l1.5-4L12 8.5z"></svg:path>`,
})
export class BxFootballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxForkIcon],svg[bx-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.47 13.77l-1.41-1.42l5.66-5.65l-1.42-1.42l-5.65 5.66l-1.42-1.41l5.66-5.66l-1.42-1.42l-6.36 6.37a3 3 0 0 0 0 4.24l.71.71l-6.37 6.36l1.42 1.42l6.36-6.37l.71.71a3 3 0 0 0 4.24 0l6.37-6.36l-1.42-1.42z"></svg:path>`,
})
export class BxForkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFridgeIcon],svg[bx-fridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 2l.001 5H10V7H8v2H6V4zM6 20v-9h2v3h2v-3h8.001l.001 9z"></svg:path>`,
})
export class BxFridgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxFullscreenIcon],svg[bx-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z"></svg:path>`,
})
export class BxFullscreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGameIcon],svg[bx-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.937 7.53C19.227 4.119 15.803 2 12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c3.803 0 7.227-2.119 8.937-5.53a1 1 0 0 0-.397-1.316L15.017 12l5.522-3.153c.461-.264.636-.842.398-1.317m-8.433 3.602a.999.999 0 0 0 0 1.736l6.173 3.525A7.95 7.95 0 0 1 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8a7.95 7.95 0 0 1 6.677 3.606z"></svg:path><svg:circle cx="11.5" cy="7.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxGameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGasPumpIcon],svg[bx-gas-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.616 6.48l.014-.017l-4-3.24l-1.26 1.554l2.067 1.674a2.99 2.99 0 0 0-1.395 3.058c.149.899.766 1.676 1.565 2.112c.897.49 1.685.446 2.384.197L18.976 18a.996.996 0 0 1-1.39.922a1 1 0 0 1-.318-.217a1 1 0 0 1-.291-.705L17 16a2.98 2.98 0 0 0-.877-2.119A3 3 0 0 0 14 13h-1V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-4h1q.205 0 .391.078a1.03 1.03 0 0 1 .531.533A1 1 0 0 1 15 16l-.024 2c0 .406.079.799.236 1.168c.151.359.368.68.641.951a2.97 2.97 0 0 0 2.123.881q.611 0 1.168-.236c.358-.15.68-.367.951-.641A2.98 2.98 0 0 0 20.976 18L21 9a3 3 0 0 0-1.384-2.52M4 5h7l.001 4H4zm0 14v-8h7.001l.001 8zm14-9a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class BxGasPumpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGhostIcon],svg[bx-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4.963 0-9 4.038-9 9v8h.051c.245 1.691 1.69 3 3.449 3c1.174 0 2.074-.417 2.672-1.174a3.99 3.99 0 0 0 5.668-.014c.601.762 1.504 1.188 2.66 1.188c1.93 0 3.5-1.57 3.5-3.5V11c0-4.962-4.037-9-9-9m7 16.5c0 .827-.673 1.5-1.5 1.5c-.449 0-1.5 0-1.5-2v-1h-2v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1H8v1c0 1.845-.774 2-1.5 2c-.827 0-1.5-.673-1.5-1.5V11c0-3.86 3.141-7 7-7s7 3.14 7 7z"></svg:path><svg:circle cx="9" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="15" cy="10" r="2" fill="currentColor"></svg:circle>`,
})
export class BxGhostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGiftIcon],svg[bx-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7h-1.209A5 5 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2C6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2m-4.5-3c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.478c.511-1.576 1.253-3 1.978-3M7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5M4 9h7v2H4zm2 11v-7h5v7zm12 0h-5v-7h5zm-5-9V9.085L13.017 9H20l.001 2z"></svg:path>`,
})
export class BxGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGitBranchIcon],svg[bx-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 4C15.57 4 14 5.57 14 7.5c0 1.554 1.025 2.859 2.43 3.315c-.146.932-.547 1.7-1.23 2.323c-1.946 1.773-5.527 1.935-7.2 1.907V8.837c1.44-.434 2.5-1.757 2.5-3.337C10.5 3.57 8.93 2 7 2S3.5 3.57 3.5 5.5c0 1.58 1.06 2.903 2.5 3.337v6.326c-1.44.434-2.5 1.757-2.5 3.337C3.5 20.43 5.07 22 7 22s3.5-1.57 3.5-3.5c0-.551-.14-1.065-.367-1.529c2.06-.186 4.657-.757 6.409-2.35c1.097-.997 1.731-2.264 1.904-3.768C19.915 10.438 21 9.1 21 7.5C21 5.57 19.43 4 17.5 4m-12 1.5C5.5 4.673 6.173 4 7 4s1.5.673 1.5 1.5S7.827 7 7 7s-1.5-.673-1.5-1.5M7 20c-.827 0-1.5-.673-1.5-1.5a1.5 1.5 0 0 1 1.482-1.498l.13.01A1.495 1.495 0 0 1 7 20M17.5 9c-.827 0-1.5-.673-1.5-1.5S16.673 6 17.5 6s1.5.673 1.5 1.5S18.327 9 17.5 9"></svg:path>`,
})
export class BxGitBranchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGitCommitIcon],svg[bx-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c-2.967 0-5.431 2.167-5.909 5H2v2h4.092c.479 2.832 2.942 4.998 5.909 4.998s5.43-2.166 5.909-4.998H22v-2h-4.09c-.478-2.833-2.942-5-5.91-5m0 9.998c-2.205 0-3.999-1.794-3.999-3.999S9.795 8 12 8s4 1.794 4 3.999s-1.794 3.999-4 3.999"></svg:path>`,
})
export class BxGitCommitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGitCompareIcon],svg[bx-git-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.01 2c-1.93 0-3.5 1.57-3.5 3.5c0 1.58 1.06 2.903 2.5 3.337v7.16c-.001.179.027 1.781 1.174 2.931C6.892 19.64 7.84 20 9 20v2l4-3l-4-3v2c-1.823 0-1.984-1.534-1.99-2V8.837c1.44-.434 2.5-1.757 2.5-3.337c0-1.93-1.571-3.5-3.5-3.5m0 5c-.827 0-1.5-.673-1.5-1.5S5.183 4 6.01 4s1.5.673 1.5 1.5S6.837 7 6.01 7m13 8.163V7.997C19.005 6.391 17.933 4 15 4V2l-4 3l4 3V6c1.829 0 2.001 1.539 2.01 2v7.163c-1.44.434-2.5 1.757-2.5 3.337c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337m-1 4.837c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5s1.5.673 1.5 1.5s-.673 1.5-1.5 1.5"></svg:path>`,
})
export class BxGitCompareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGitMergeIcon],svg[bx-git-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 18.5C2.5 20.43 4.07 22 6 22s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337v-3.488c.244.273.509.527.813.744c1.18.844 2.617 1.098 3.918 1.098c.966 0 1.853-.14 2.506-.281a3.5 3.5 0 0 0 3.264 2.265c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5a3.5 3.5 0 0 0-3.404 2.718c-1.297.321-3.664.616-5.119-.426c-.666-.477-1.09-1.239-1.306-2.236C8.755 7.96 9.5 6.821 9.5 5.5C9.5 3.57 7.93 2 6 2S2.5 3.57 2.5 5.5c0 1.58 1.06 2.903 2.5 3.337v6.326c-1.44.434-2.5 1.757-2.5 3.337m15-8c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5S16 12.827 16 12s.673-1.5 1.5-1.5m-10 8c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5S5.173 17 6 17s1.5.673 1.5 1.5m-3-13C4.5 4.673 5.173 4 6 4s1.5.673 1.5 1.5S6.827 7 6 7s-1.5-.673-1.5-1.5"></svg:path>`,
})
export class BxGitMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGitPullRequestIcon],svg[bx-git-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.01 15.163V7.997C19.005 6.391 17.933 4 15 4V2l-4 3l4 3V6c1.829 0 2.001 1.539 2.01 2v7.163c-1.44.434-2.5 1.757-2.5 3.337c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337m-1 4.837c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5s1.5.673 1.5 1.5s-.673 1.5-1.5 1.5M9.5 5.5C9.5 3.57 7.93 2 6 2S2.5 3.57 2.5 5.5c0 1.58 1.06 2.903 2.5 3.337v6.326c-1.44.434-2.5 1.757-2.5 3.337C2.5 20.43 4.07 22 6 22s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V8.837C8.44 8.403 9.5 7.08 9.5 5.5m-5 0C4.5 4.673 5.173 4 6 4s1.5.673 1.5 1.5S6.827 7 6 7s-1.5-.673-1.5-1.5m3 13c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5S5.173 17 6 17s1.5.673 1.5 1.5"></svg:path>`,
})
export class BxGitPullRequestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGitRepoForkedIcon],svg[bx-git-repo-forked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.559 8.855c.166 1.183.789 3.207 3.087 4.079C11 13.829 11 14.534 11 15v.163c-1.44.434-2.5 1.757-2.5 3.337c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.903-2.5-3.337V15c0-.466 0-1.171 2.354-2.065c2.298-.872 2.921-2.896 3.087-4.079C19.912 8.441 21 7.102 21 5.5C21 3.57 19.43 2 17.5 2S14 3.57 14 5.5c0 1.552 1.022 2.855 2.424 3.313c-.146.735-.565 1.791-1.778 2.252c-1.192.452-2.053.953-2.646 1.536c-.593-.583-1.453-1.084-2.646-1.536c-1.213-.461-1.633-1.517-1.778-2.252C8.978 8.355 10 7.052 10 5.5C10 3.57 8.43 2 6.5 2S3 3.57 3 5.5c0 1.602 1.088 2.941 2.559 3.355M17.5 4c.827 0 1.5.673 1.5 1.5S18.327 7 17.5 7S16 6.327 16 5.5S16.673 4 17.5 4m-4 14.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5s1.5.673 1.5 1.5M6.5 4C7.327 4 8 4.673 8 5.5S7.327 7 6.5 7S5 6.327 5 5.5S5.673 4 6.5 4"></svg:path>`,
})
export class BxGitRepoForkedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGlassesIcon],svg[bx-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.977 13.783l-2-9A1 1 0 0 0 19 4h-3v2h2.198l.961 4.326A4.5 4.5 0 0 0 17.5 10c-1.953 0-3.603 1.258-4.224 3h-2.553c-.621-1.742-2.271-3-4.224-3c-.587 0-1.145.121-1.659.326L5.802 6H8V4H5a1 1 0 0 0-.976.783l-2 9l.047.011A4.6 4.6 0 0 0 2 14.5C2 16.981 4.019 19 6.5 19c2.31 0 4.197-1.756 4.449-4h2.102c.252 2.244 2.139 4 4.449 4c2.481 0 4.5-2.019 4.5-4.5c0-.242-.034-.475-.071-.706zM6.5 17C5.122 17 4 15.878 4 14.5S5.122 12 6.5 12S9 13.122 9 14.5S7.878 17 6.5 17m11 0c-1.379 0-2.5-1.122-2.5-2.5s1.121-2.5 2.5-2.5s2.5 1.122 2.5 2.5s-1.121 2.5-2.5 2.5"></svg:path>`,
})
export class BxGlassesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGlassesAltIcon],svg[bx-glasses-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.948 11.684l-2-6A1 1 0 0 0 19 5h-3v2h2.279l1.334 4H15c-1.103 0-2 .897-2 2h-2c0-1.103-.897-2-2-2H4.387l1.334-4H8V5H5a1 1 0 0 0-.948.684l-2 6l.012.004A.9.9 0 0 0 2 12v4c0 1.654 1.346 3 3 3h3c1.654 0 3-1.346 3-3v-1h2v1c0 1.654 1.346 3 3 3h3c1.654 0 3-1.346 3-3v-4a1 1 0 0 0-.063-.313zM9 16c0 .551-.448 1-1 1H5c-.552 0-1-.449-1-1v-3h5zm11 0c0 .551-.448 1-1 1h-3c-.552 0-1-.449-1-1v-3h5z"></svg:path>`,
})
export class BxGlassesAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGlobeIcon],svg[bx-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m7.931 9h-2.764a14.7 14.7 0 0 0-1.792-6.243A8.01 8.01 0 0 1 19.931 11M12.53 4.027c1.035 1.364 2.427 3.78 2.627 6.973H9.03c.139-2.596.994-5.028 2.451-6.974c.172-.01.344-.026.519-.026c.179 0 .354.016.53.027m-3.842.7C7.704 6.618 7.136 8.762 7.03 11H4.069a8.01 8.01 0 0 1 4.619-6.273M4.069 13h2.974c.136 2.379.665 4.478 1.556 6.23A8.01 8.01 0 0 1 4.069 13m7.381 6.973C10.049 18.275 9.222 15.896 9.041 13h6.113c-.208 2.773-1.117 5.196-2.603 6.972c-.182.012-.364.028-.551.028c-.186 0-.367-.016-.55-.027m4.011-.772c.955-1.794 1.538-3.901 1.691-6.201h2.778a8 8 0 0 1-4.469 6.201"></svg:path>`,
})
export class BxGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGlobeAltIcon],svg[bx-globe-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18.791V20H9v2h6v-2h-2v-1.845a9.9 9.9 0 0 0 3.071-2.084c3.898-3.898 3.898-10.243 0-14.143l-1.414 1.414c3.119 3.12 3.119 8.195 0 11.314s-8.195 3.12-11.314 0L1.929 16.07A9.97 9.97 0 0 0 9 18.994a10 10 0 0 0 2-.203"></svg:path><svg:path fill="currentColor" d="M3 9c0 3.309 2.691 6 6 6s6-2.691 6-6s-2.691-6-6-6s-6 2.691-6 6m10 0c0 2.206-1.794 4-4 4s-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4"></svg:path>`,
})
export class BxGlobeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGridIcon],svg[bx-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3H4.984c-1.103 0-2 .897-2 2v14.016c0 1.103.897 2 2 2H19c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm4 5h-3V5h3zM4.984 10h3v4.016h-3zm5 0H14v4.016H9.984zM16 10h3v4.016h-3zm-2-5v3H9.984V5zM7.984 5v3h-3V5zm-3 11.016h3v3h-3zm5 3v-3H14v3zm6.016 0v-3h3.001v3z"></svg:path>`,
})
export class BxGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGridAltIcon],svg[bx-grid-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M9 9H5V5h4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m1-6h4v4h-4zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm2-5h4v4H5zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1zm2-5h4v4h-4z"></svg:path>`,
})
export class BxGridAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGridHorizontalIcon],svg[bx-grid-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7h4v4h-4zm6 0h4v4h-4zM4 7h4v4H4zm6 6h4v4h-4zm6 0h4v4h-4zM4 13h4v4H4z"></svg:path>`,
})
export class BxGridHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGridSmallIcon],svg[bx-grid-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7h4v4H7zm0 6h4v4H7zm6-6h4v4h-4zm0 6h4v4h-4z"></svg:path>`,
})
export class BxGridSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGridVerticalIcon],svg[bx-grid-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 10h4v4H7zm0-6h4v4H7zm0 12h4v4H7zm6-6h4v4h-4zm0-6h4v4h-4zm0 12h4v4h-4z"></svg:path>`,
})
export class BxGridVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxGroupIcon],svg[bx-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.7 3.7 0 0 1-1.072 2.986l-1.192 1.192l1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952"></svg:path><svg:path fill="currentColor" d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4m0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2m1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6"></svg:path>`,
})
export class BxGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHandicapIcon],svg[bx-handicap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16.98 14.804A1 1 0 0 0 16 14h-4.133l-.429-3H16V9h-4.847l-.163-1.142A1 1 0 0 0 10 7H9a1.003 1.003 0 0 0-.99 1.142l.877 6.142A2.01 2.01 0 0 0 10.867 16h4.313l.839 4.196c.094.467.504.804.981.804h3v-2h-2.181z"></svg:path><svg:path fill="currentColor" d="M12.51 17.5c-.739 1.476-2.25 2.5-4.01 2.5A4.505 4.505 0 0 1 4 15.5a4.5 4.5 0 0 1 2.817-4.167l-.289-2.025C3.905 10.145 2 12.604 2 15.5C2 19.084 4.916 22 8.5 22a6.5 6.5 0 0 0 5.545-3.126l-.274-1.374z"></svg:path>`,
})
export class BxHandicapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHappyIcon],svg[bx-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:circle cx="8.5" cy="10.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="15.493" cy="10.493" r="1.493" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 18c4 0 5-4 5-4H7s1 4 5 4"></svg:path>`,
})
export class BxHappyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHappyAltIcon],svg[bx-happy-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:circle cx="8.5" cy="9.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="15.493" cy="9.493" r="1.493" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 18c5 0 6-5 6-5H6s1 5 6 5"></svg:path>`,
})
export class BxHappyAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHappyBeamingIcon],svg[bx-happy-beaming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c4 0 5-4 5-4H7s1 4 5 4"></svg:path><svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="m13 12l2 .012c.012-.462.194-1.012 1-1.012s.988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3m-5-1c.806 0 .988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3l2 .012C7.012 11.55 7.194 11 8 11"></svg:path>`,
})
export class BxHappyBeamingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHappyHeartEyesIcon],svg[bx-happy-heart-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c4 0 5-4 5-4H7s1 4 5 4"></svg:path><svg:path fill="currentColor" d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2S2 6.486 2 12s4.486 10 10 10m0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8s-8-3.589-8-8s3.589-8 8-8"></svg:path><svg:path fill="currentColor" d="m8.535 12.634l2.05-2.083a1.485 1.485 0 0 0-.018-2.118a1.49 1.49 0 0 0-2.065-.034a1.49 1.49 0 0 0-2.067.068c-.586.6-.579 1.53.019 2.117zm7 0l2.05-2.083a1.485 1.485 0 0 0-.018-2.118a1.49 1.49 0 0 0-2.065-.034a1.49 1.49 0 0 0-2.068.067c-.586.6-.579 1.53.019 2.117z"></svg:path>`,
})
export class BxHappyHeartEyesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHardHatIcon],svg[bx-hard-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15a9 9 0 0 0-.18-1.81a8.5 8.5 0 0 0-.53-1.69a8 8 0 0 0-.83-1.5a8.7 8.7 0 0 0-1.1-1.33A8.3 8.3 0 0 0 17 7.54a8 8 0 0 0-1.53-.83L15 6.52V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.52l-.5.19a8 8 0 0 0-1.5.83a8.3 8.3 0 0 0-1.33 1.1A8.3 8.3 0 0 0 4.54 10a8 8 0 0 0-.83 1.53a9 9 0 0 0-.53 1.69A9 9 0 0 0 3 15v3H2v2h20v-2h-1zM5 15a7.3 7.3 0 0 1 .14-1.41a6.6 6.6 0 0 1 .41-1.31a7 7 0 0 1 .64-1.19a7.2 7.2 0 0 1 1.9-1.9A7 7 0 0 1 9 8.68V15h2V6h2v9h2V8.68a8 8 0 0 1 .91.51a7 7 0 0 1 1 .86a6.4 6.4 0 0 1 .85 1a6 6 0 0 1 .65 1.19a7 7 0 0 1 .41 1.31A7.3 7.3 0 0 1 19 15v3H5z"></svg:path>`,
})
export class BxHardHatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHashIcon],svg[bx-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.018 3.815L15.232 8h-4.966l.716-3.815l-1.964-.37L8.232 8H4v2h3.857l-.751 4H3v2h3.731l-.714 3.805l1.965.369L8.766 16h4.966l-.714 3.805l1.965.369l.783-4.174H20v-2h-3.859l.751-4H21V8h-3.733l.716-3.815zM14.106 14H9.141l.751-4h4.966z"></svg:path>`,
})
export class BxHashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHddIcon],svg[bx-hdd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.983 13.821l-1.851-10.18A2 2 0 0 0 18.165 2H5.835a2 2 0 0 0-1.968 1.643l-1.85 10.178l.019.003c-.012.06-.036.114-.036.176v5c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-5c0-.063-.024-.116-.035-.176zM5.835 4h12.331l1.637 9H4.198zM4 19v-4h16l.002 4z"></svg:path><svg:path fill="currentColor" d="M17 16h2v2h-2zm-3 0h2v2h-2z"></svg:path>`,
})
export class BxHddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHeadingIcon],svg[bx-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20V4h-3v6H9V4H6v16h3v-7h6v7z"></svg:path>`,
})
export class BxHeadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHeadphoneIcon],svg[bx-headphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12v-1.707c0-4.442-3.479-8.161-7.755-8.29c-2.204-.051-4.251.736-5.816 2.256A7.93 7.93 0 0 0 4 10v2c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h2V10a5.95 5.95 0 0 1 1.821-4.306a5.98 5.98 0 0 1 4.363-1.691C15.392 4.099 18 6.921 18 10.293V20h2c1.103 0 2-.897 2-2v-4c0-1.103-.897-2-2-2"></svg:path><svg:path fill="currentColor" d="M7 12h2v8H7zm8 0h2v8h-2z"></svg:path>`,
})
export class BxHeadphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHealthIcon],svg[bx-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.649 5.286L14 8.548V2.025h-4v6.523L4.351 5.286l-2 3.465l5.648 3.261l-5.648 3.261l2 3.465L10 15.477V22h4v-6.523l5.649 3.261l2-3.465l-5.648-3.261l5.648-3.261z"></svg:path>`,
})
export class BxHealthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHeartIcon],svg[bx-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.595a5.9 5.9 0 0 0-3.996-1.558a5.94 5.94 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.94 5.94 0 0 0-4.209-1.754A5.9 5.9 0 0 0 12 4.595m6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584c.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a1 1 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002"></svg:path>`,
})
export class BxHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHeartCircleIcon],svg[bx-heart-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.279 8.833L12 9.112l-.279-.279a2.745 2.745 0 0 0-3.906 0a2.745 2.745 0 0 0 0 3.907L12 16.926l4.186-4.186a2.745 2.745 0 0 0 0-3.907a2.746 2.746 0 0 0-3.907 0"></svg:path><svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path>`,
})
export class BxHeartCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHeartSquareIcon],svg[bx-heart-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.998 17l4.186-4.186a2.745 2.745 0 0 0 0-3.907a2.746 2.746 0 0 0-3.907 0l-.278.279l-.279-.279a2.746 2.746 0 0 0-3.907 0a2.746 2.746 0 0 0 0 3.907z"></svg:path><svg:path fill="currentColor" d="M21 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zm-2 15H5V5h14z"></svg:path>`,
})
export class BxHeartSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHelpCircleIcon],svg[bx-help-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a3.94 3.94 0 0 0-3.934 3.934h2C10.066 8.867 10.934 8 12 8s1.934.867 1.934 1.934c0 .598-.481 1.032-1.216 1.626a9 9 0 0 0-.691.599c-.998.997-1.027 2.056-1.027 2.174V15h2l-.001-.633c.001-.016.033-.386.441-.793c.15-.15.339-.3.535-.458c.779-.631 1.958-1.584 1.958-3.182A3.937 3.937 0 0 0 12 6m-1 10h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path>`,
})
export class BxHelpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHideIcon],svg[bx-hide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038c-5.351 0-7.424-3.846-7.926-5a8.6 8.6 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a1 1 0 0 0 0 .633C2.073 12.383 4.367 19 12 19m0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293L2.293 3.707l18 18l1.414-1.414l-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a1 1 0 0 0 0-.633C21.927 11.617 19.633 5 12 5m4.972 10.558l-2.28-2.28c.19-.39.308-.819.308-1.278c0-1.641-1.359-3-3-3c-.459 0-.888.118-1.277.309L8.915 7.501A9.3 9.3 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5c-.302.692-1.166 2.342-2.954 3.558"></svg:path>`,
})
export class BxHideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHighlightIcon],svg[bx-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.707 5.826l-3.535-3.533a1 1 0 0 0-1.408-.006L7.096 10.82a1 1 0 0 0-.273.488l-1.024 4.437L4 18h2.828l1.142-1.129l3.588-.828c.18-.042.345-.133.477-.262l8.667-8.535a1 1 0 0 0 .005-1.42m-9.369 7.833l-2.121-2.12l7.243-7.131l2.12 2.12zM4 20h16v2H4z"></svg:path>`,
})
export class BxHighlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHistoryIcon],svg[bx-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8v5h5v-2h-3V8z"></svg:path><svg:path fill="currentColor" d="M21.292 8.497a9 9 0 0 0-1.928-2.862a9 9 0 0 0-4.55-2.452a9.1 9.1 0 0 0-3.626 0a8.97 8.97 0 0 0-4.552 2.453a9 9 0 0 0-1.928 2.86A9 9 0 0 0 4 12l.001.025H2L5 16l3-3.975H6.001L6 12a6.96 6.96 0 0 1 1.195-3.913a7.1 7.1 0 0 1 1.891-1.892a7 7 0 0 1 2.503-1.054a7.003 7.003 0 0 1 8.269 5.445a7.1 7.1 0 0 1 0 2.824a6.9 6.9 0 0 1-1.054 2.503c-.25.371-.537.72-.854 1.036a7.1 7.1 0 0 1-2.225 1.501a7 7 0 0 1-1.313.408a7.1 7.1 0 0 1-2.823 0a7 7 0 0 1-2.501-1.053a7 7 0 0 1-1.037-.855l-1.414 1.414A9 9 0 0 0 13 21a9.1 9.1 0 0 0 3.503-.707a9 9 0 0 0 3.959-3.26A8.97 8.97 0 0 0 22 12a8.9 8.9 0 0 0-.708-3.503"></svg:path>`,
})
export class BxHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHiveIcon],svg[bx-hive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.895 7.553l-2-4A1 1 0 0 0 18 3h-5c-.379 0-.725.214-.895.553L10.382 7H6c-.379 0-.725.214-.895.553l-2 4a1 1 0 0 0 0 .895l2 4c.17.338.516.552.895.552h4.382l1.724 3.447A1 1 0 0 0 13 21h5c.379 0 .725-.214.895-.553l2-4a1 1 0 0 0 0-.895L19.118 12l1.776-3.553a1 1 0 0 0 .001-.894M13.618 5h3.764l1.5 3l-1.5 3h-3.764l-1.5-3zm-8.5 7l1.5-3h3.764l1.5 3l-1.5 3H6.618zm12.264 7h-3.764l-1.5-3l1.5-3h3.764l1.5 3z"></svg:path>`,
})
export class BxHiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHomeIcon],svg[bx-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a1 1 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13m7 7v-5h4v5zm2-15.586l6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586z"></svg:path>`,
})
export class BxHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHomeAltIcon],svg[bx-home-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2m5-2v-5h4v5zm-5-8.59l7-7l7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></svg:path>`,
})
export class BxHomeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHomeAlt2Icon],svg[bx-home-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1a1 1 0 0 0-.29-.71zM6 20v-9.59l6-6l6 6V20z"></svg:path>`,
})
export class BxHomeAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHomeCircleIcon],svg[bx-home-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a1 1 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13m9-8.586l6 6V15l.001 5H6v-9.585z"></svg:path><svg:path fill="currentColor" d="M12 17c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4m0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2"></svg:path>`,
})
export class BxHomeCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHomeHeartIcon],svg[bx-home-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.223 11.641l-.223.22l-.224-.22a2.224 2.224 0 0 0-3.125 0a2.13 2.13 0 0 0 0 3.07L12 18l3.349-3.289a2.13 2.13 0 0 0 0-3.07a2.225 2.225 0 0 0-3.126 0"></svg:path><svg:path fill="currentColor" d="m21.707 11.293l-9-9a1 1 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707M18.001 20H6v-9.585l6-6l6 6V15z"></svg:path>`,
})
export class BxHomeHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHomeSmileIcon],svg[bx-home-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a1 1 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13m9-8.586l6 6V15l.001 5H6v-9.586z"></svg:path><svg:path fill="currentColor" d="M12 18c3.703 0 4.901-3.539 4.95-3.689l-1.9-.621c-.008.023-.781 2.31-3.05 2.31c-2.238 0-3.02-2.221-3.051-2.316l-1.899.627C7.099 14.461 8.297 18 12 18"></svg:path>`,
})
export class BxHomeSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHorizontalCenterIcon],svg[bx-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.005 15.995l4-4l-4-4v3h-3v2h3zm14-5v-3l-4 4l4 4v-3h3v-2h-2.072zm-8 7h2v3h-2zm0-5h2v3h-2zm0-5h2v3h-2zm0-5h2v3h-2z"></svg:path>`,
})
export class BxHorizontalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHorizontalLeftIcon],svg[bx-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 8l-4 4l4 4v-3h8v-2h-8zM3 18h2v3H3zm0-5h2v3H3zm0-5h2v3H3zm0-5h2v3H3z"></svg:path>`,
})
export class BxHorizontalLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHorizontalRightIcon],svg[bx-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11H5v2h8v3l4-4l-4-4zm6-8h2v3h-2zm0 5h2v3h-2zm0 5h2v3h-2zm0 5h2v3h-2z"></svg:path>`,
})
export class BxHorizontalRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHotelIcon],svg[bx-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7.5" cy="11.5" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17.205 7H12a1 1 0 0 0-1 1v7H4V6H2v14h2v-3h16v3h2v-8.205A4.8 4.8 0 0 0 17.205 7M13 15V9h4.205A2.8 2.8 0 0 1 20 11.795V15z"></svg:path>`,
})
export class BxHotelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxHourglassIcon],svg[bx-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.566 11.021A7.02 7.02 0 0 0 19 5V4h1V2H4v2h1v1a7.02 7.02 0 0 0 3.434 6.021c.354.208.566.545.566.9v.158c0 .354-.212.69-.566.9A7.02 7.02 0 0 0 5 19v1H4v2h16v-2h-1v-1a7.01 7.01 0 0 0-3.433-6.02c-.355-.21-.567-.547-.567-.901v-.158c0-.355.212-.692.566-.9m-1.015 3.681A5.01 5.01 0 0 1 17 19v1H7v-1a5.01 5.01 0 0 1 2.45-4.299c.971-.573 1.55-1.554 1.55-2.622v-.158c0-1.069-.58-2.051-1.551-2.623A5.01 5.01 0 0 1 7 5V4h10v1c0 1.76-.938 3.406-2.449 4.298C13.58 9.87 13 10.852 13 11.921v.158c0 1.068.579 2.049 1.551 2.623"></svg:path>`,
})
export class BxHourglassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxIdCardIcon],svg[bx-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.715 12c1.151 0 2-.849 2-2s-.849-2-2-2s-2 .849-2 2s.848 2 2 2"></svg:path><svg:path fill="currentColor" d="M20 4H4c-1.103 0-2 .841-2 1.875v12.25C2 19.159 2.897 20 4 20h16c1.103 0 2-.841 2-1.875V5.875C22 4.841 21.103 4 20 4m0 14l-16-.011V6l16 .011z"></svg:path><svg:path fill="currentColor" d="M14 9h4v2h-4zm1 4h3v2h-3zm-1.57 2.536c0-1.374-1.676-2.786-3.715-2.786S6 14.162 6 15.536V16h7.43z"></svg:path>`,
})
export class BxIdCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxImageIcon],svg[bx-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7.499" cy="9.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m10.499 14l-1.5-2l-3 4h12l-4.5-6z"></svg:path><svg:path fill="currentColor" d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m-16 14V6h16l.002 12z"></svg:path>`,
})
export class BxImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxImageAddIcon],svg[bx-image-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4z"></svg:path><svg:path fill="currentColor" d="m8 11l-3 4h11l-4-6l-3 4z"></svg:path><svg:path fill="currentColor" d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></svg:path>`,
})
export class BxImageAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxImageAltIcon],svg[bx-image-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M5 19V5h14l.002 14z"></svg:path><svg:path fill="currentColor" d="m10 14l-1-1l-3 4h12l-5-7z"></svg:path>`,
})
export class BxImageAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxImagesIcon],svg[bx-images-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M8 16V4h12l.002 12z"></svg:path><svg:path fill="currentColor" d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4z"></svg:path><svg:path fill="currentColor" d="m12 12l-1-1l-2 3h10l-4-6z"></svg:path>`,
})
export class BxImagesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxImportIcon],svg[bx-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18l4-5h-3V2h-2v11H8z"></svg:path><svg:path fill="currentColor" d="M19 9h-4v2h4v9H5v-9h4V9H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2"></svg:path>`,
})
export class BxImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxInfiniteIcon],svg[bx-infinite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7c-2.094 0-3.611 1.567-5.001 3.346C10.609 8.567 9.093 7 7 7c-2.757 0-5 2.243-5 5a4.98 4.98 0 0 0 1.459 3.534A4.96 4.96 0 0 0 6.99 17h.012c2.089-.005 3.605-1.572 4.996-3.351C13.389 15.431 14.906 17 17 17c2.757 0 5-2.243 5-5s-2.243-5-5-5M6.998 15l-.008 1v-1c-.799 0-1.55-.312-2.114-.878A3.004 3.004 0 0 1 7 9c1.33 0 2.56 1.438 3.746 2.998C9.558 13.557 8.328 14.997 6.998 15M17 15c-1.33 0-2.561-1.44-3.749-3.002C14.438 10.438 15.668 9 17 9c1.654 0 3 1.346 3 3s-1.346 3-3 3"></svg:path>`,
})
export class BxInfiniteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxInfoCircleIcon],svg[bx-info-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M11 11h2v6h-2zm0-4h2v2h-2z"></svg:path>`,
})
export class BxInfoCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxInfoSquareIcon],svg[bx-info-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 16H5V5h14z"></svg:path><svg:path fill="currentColor" d="M11 7h2v2h-2zm0 4h2v6h-2z"></svg:path>`,
})
export class BxInfoSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxInjectionIcon],svg[bx-injection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 7.4L22.25 6L18 1.75l-1.4 1.41L18 4.58L16.6 6l-2.13-2.13l-1.41-1.42l-1.41 1.42l.7.71L3 13.92a2 2 0 0 0-.3 2.45L4 18.56l-2.25 2.28l1.41 1.41L5.44 20l2.19 1.31a2 2 0 0 0 1 .28a2 2 0 0 0 1.45-.59l9.34-9.34l.71.7l1.42-1.41l-1.42-1.42L18 7.4L19.42 6zM18 10.23l-9.34 9.35L6 18l-1.58-2.66l.86-.87l2.83 2.83l1.42-1.41l-2.83-2.83l1.41-1.41l2.83 2.82l1.41-1.41l-2.83-2.83l1.42-1.41l2.83 2.83l1.41-1.42l-2.83-2.83L13.77 6z"></svg:path>`,
})
export class BxInjectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxIntersectIcon],svg[bx-intersect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16h3v3c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-3V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2m9.001-2L14 10h.001zM19 10l.001 9H10v-3h4c1.103 0 2-.897 2-2v-4zM5 5h9v3h-4c-1.103 0-2 .897-2 2v4H5z"></svg:path>`,
})
export class BxIntersectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxItalicIcon],svg[bx-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7V4H9v3h2.868L9.012 17H5v3h10v-3h-2.868l2.856-10z"></svg:path>`,
})
export class BxItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxJoystickIcon],svg[bx-joystick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8.65A5 5 0 0 0 17 4H7a5 5 0 0 0-5 4.74A2 2 0 0 0 2 9v7.5A3.48 3.48 0 0 0 5.5 20c1.43 0 2.32-1.06 3.19-2.09c.32-.37.65-.76 1-1.1a4.8 4.8 0 0 1 1.54-.75a6.6 6.6 0 0 1 1.54 0a4.8 4.8 0 0 1 1.54.75c.35.34.68.73 1 1.1c.87 1 1.76 2.09 3.19 2.09a3.48 3.48 0 0 0 3.5-3.5V9a2 2 0 0 0 0-.26zm-2 7.85a1.5 1.5 0 0 1-1.5 1.5c-.5 0-1-.64-1.66-1.38c-.34-.39-.72-.85-1.15-1.26a6.7 6.7 0 0 0-2.46-1.25a6.9 6.9 0 0 0-2.46 0a6.7 6.7 0 0 0-2.46 1.25c-.43.41-.81.87-1.15 1.26C6.54 17.36 6 18 5.5 18A1.5 1.5 0 0 1 4 16.5V9a1 1 0 0 0 0-.15A3 3 0 0 1 7 6h10a3 3 0 0 1 3 2.72v.12A1 1 0 0 0 20 9z"></svg:path><svg:circle cx="16" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="18" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="14" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="8" cy="10" r="2" fill="currentColor"></svg:circle>`,
})
export class BxJoystickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxJoystickAltIcon],svg[bx-joystick-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="17" cy="11" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M10 9H8v2H6v2h2v2h2v-2h2v-2h-2z"></svg:path><svg:path fill="currentColor" d="M15 5H9a7 7 0 0 0-7 7a7 7 0 0 0 7 7h6a7 7 0 0 0 7-7a7 7 0 0 0-7-7m0 12H9A5 5 0 1 1 9 7h6a5 5 0 1 1 0 10"></svg:path>`,
})
export class BxJoystickAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxJoystickButtonIcon],svg[bx-joystick-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v3H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2h3v3c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2v-3h3c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2m0 8h-5v4h.001v1H9v-5H4V9h5V4h6v5h5z"></svg:path><svg:path fill="currentColor" d="M8 14v-4l-3 2zm8 0l3-2l-3-2zm-6-6h4l-2-3zm2 11l2-3h-4z"></svg:path><svg:circle cx="12" cy="12" r="2" fill="currentColor"></svg:circle>`,
})
export class BxJoystickButtonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxKeyIcon],svg[bx-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17a5.01 5.01 0 0 0 4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102A5.01 5.01 0 0 0 7 7c-2.757 0-5 2.243-5 5s2.243 5 5 5m0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3s-3-1.346-3-3s1.346-3 3-3"></svg:path>`,
})
export class BxKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxKnifeIcon],svg[bx-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.66 3.6a3 3 0 0 0-4.24 0l-.71.71l-7.07 7.07l2.12 2.12l-6.36 6.36l1.41 1.42L19.66 6.43c1.1-1.1 1.1-1.73.71-2.12z"></svg:path>`,
})
export class BxKnifeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLabelIcon],svg[bx-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.813 4.419A1 1 0 0 0 16 4H3a1 1 0 0 0-.813 1.581L6.771 12l-4.585 6.419A1 1 0 0 0 3 20h13a1 1 0 0 0 .813-.419l5-7a1 1 0 0 0 0-1.162zM15.485 18H4.943l3.87-5.419a1 1 0 0 0 0-1.162L4.943 6h10.542l4.286 6z"></svg:path>`,
})
export class BxLabelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLandscapeIcon],svg[bx-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20h18a1 1 0 0 0 .864-1.504l-7-12c-.359-.615-1.369-.613-1.729 0L9.866 12.1l-1.02-1.632A1 1 0 0 0 8 10h-.001a1 1 0 0 0-.847.47l-5 8A1 1 0 0 0 3 20M14 8.985L19.259 18h-5.704l-2.486-3.987zm-5.999 3.9L11.197 18H4.805zM6 8c1.654 0 3-1.346 3-3S7.654 2 6 2S3 3.346 3 5s1.346 3 3 3m0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class BxLandscapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLaptopIcon],svg[bx-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17.722c.595-.347 1-.985 1-1.722V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v11c0 .736.405 1.375 1 1.722V18H2v2h20v-2h-2zM5 16V5h14l.002 11z"></svg:path>`,
})
export class BxLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLastPageIcon],svg[bx-last-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.707 17.707L13.414 12L7.707 6.293L6.293 7.707L10.586 12l-4.293 4.293zM15 6h2v12h-2z"></svg:path>`,
})
export class BxLastPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLaughIcon],svg[bx-laugh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M12 18c4 0 5-4 5-4H7s1 4 5 4m5.555-9.168l-1.109-1.664l-3 2a1 1 0 0 0 .108 1.727l4 2l.895-1.789l-2.459-1.229zm-6.557 1.23a1 1 0 0 0-.443-.894l-3-2l-1.11 1.664l1.566 1.044l-2.459 1.229l.895 1.789l4-2a1 1 0 0 0 .551-.832"></svg:path>`,
})
export class BxLaughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLayerIcon],svg[bx-layer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7.999a1 1 0 0 0-.516-.874l-9.022-5a1 1 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a1 1 0 0 0 .973.001l8.978-5A1 1 0 0 0 22 7.999m-9.977 3.855L5.06 7.965l6.917-3.822l6.964 3.859z"></svg:path><svg:path fill="currentColor" d="M20.515 11.126L12 15.856l-8.515-4.73l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5z"></svg:path><svg:path fill="currentColor" d="M20.515 15.126L12 19.856l-8.515-4.73l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5z"></svg:path>`,
})
export class BxLayerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLayerMinusIcon],svg[bx-layer-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.513 12.833l9.022 5.04a1 1 0 0 0 .973.001l8.978-5a1 1 0 0 0-.002-1.749l-9.022-5a1 1 0 0 0-.968-.001l-8.978 4.96a1 1 0 0 0-.003 1.749m9.464-4.69l6.964 3.859l-6.917 3.853l-6.964-3.89z"></svg:path><svg:path fill="currentColor" d="m3.485 15.126l-.971 1.748l9 5a1 1 0 0 0 .971 0l9-5l-.971-1.748L12 19.856zM16 4h6v2h-6z"></svg:path>`,
})
export class BxLayerMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLayerPlusIcon],svg[bx-layer-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.484 11.125l-9.022-5a1 1 0 0 0-.968-.001l-8.978 4.96a1 1 0 0 0-.003 1.749l9.022 5.04a1 1 0 0 0 .973.001l8.978-5a1 1 0 0 0-.002-1.749m-9.461 4.73l-6.964-3.89l6.917-3.822l6.964 3.859z"></svg:path><svg:path fill="currentColor" d="M12 22a1 1 0 0 0 .485-.126l9-5l-.971-1.748L12 19.856l-8.515-4.73l-.971 1.748l9 5A1 1 0 0 0 12 22m8-20h-2v2h-2v2h2v2h2V6h2V4h-2z"></svg:path>`,
})
export class BxLayerPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLayoutIcon],svg[bx-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m0 2l.001 4H5V5zM5 11h8v8H5zm10 8v-8h4.001l.001 8z"></svg:path>`,
})
export class BxLayoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLeafIcon],svg[bx-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.88 2.15l-1.2.4a13.84 13.84 0 0 1-6.41.64a11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a8.65 8.65 0 0 0 1.47 6.6c-.06.21-.12.42-.17.63A22.6 22.6 0 0 0 4 22h2a31 31 0 0 1 .59-4.32a9.25 9.25 0 0 0 4.52 1.11a11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41zm-7.27 13.93c-2.61 1.11-5.73.92-7.48-.45a13.8 13.8 0 0 1 1.21-2.84A10.2 10.2 0 0 1 9.73 11a9 9 0 0 1 1.81-1.42A12 12 0 0 1 16 8V7a11.4 11.4 0 0 0-5.26 1.08a10.3 10.3 0 0 0-4.12 3.65a15 15 0 0 0-1 1.87a7 7 0 0 1-.38-3.73a5.24 5.24 0 0 1 3.14-4a8.9 8.9 0 0 1 3.82-.84c.62 0 1.23.06 1.87.11a16.2 16.2 0 0 0 6-.35C20 7.55 19.5 14 14.61 16.08"></svg:path>`,
})
export class BxLeafIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLeftArrowIcon],svg[bx-left-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.464 2.114a1 1 0 0 0-1.033.063l-13 9a1.003 1.003 0 0 0 0 1.645l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-.536-.886M17 19.091L6.757 12L17 4.909z"></svg:path>`,
})
export class BxLeftArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLeftArrowAltIcon],svg[bx-left-arrow-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293l-1.414-1.414L4.586 12l6.707 6.707z"></svg:path>`,
})
export class BxLeftArrowAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLeftArrowCircleIcon],svg[bx-left-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.999 1.993C6.486 1.994 2 6.48 1.999 11.994s4.486 10 10.001 10c5.514-.001 10-4.487 10-10c0-5.514-4.486-10-10.001-10.001M12 19.994c-4.412 0-8.001-3.589-8.001-8c.001-4.411 3.59-8 8-8.001C16.411 3.994 20 7.583 20 11.994s-3.589 7.999-8 8"></svg:path><svg:path fill="currentColor" d="m12.012 7.989l-4.005 4.005l4.005 4.004v-3.004h3.994v-2h-3.994z"></svg:path>`,
})
export class BxLeftArrowCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLeftDownArrowCircleIcon],svg[bx-left-down-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.006 2.007A9.93 9.93 0 0 0 4.935 4.93c-3.898 3.898-3.898 10.242 0 14.142c1.885 1.885 4.396 2.923 7.071 2.923s5.187-1.038 7.071-2.923c3.898-3.899 3.898-10.243 0-14.142a9.93 9.93 0 0 0-7.071-2.923m5.657 15.65c-1.507 1.507-3.516 2.337-5.657 2.337s-4.15-.83-5.657-2.337c-3.118-3.119-3.118-8.194 0-11.313c1.507-1.507 3.517-2.337 5.657-2.337s4.15.83 5.657 2.337c3.118 3.119 3.118 8.194 0 11.313"></svg:path><svg:path fill="currentColor" d="m14.346 8.247l-3.215 3.215l-2.125-2.125V15h5.663l-2.124-2.124l3.215-3.215z"></svg:path>`,
})
export class BxLeftDownArrowCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLeftIndentIcon],svg[bx-left-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7h10v2H4zm0-4h16v2H4zm0 8h10v2H4zm0 4h10v2H4zm0 4h16v2H4zm16-3V8l-4 4z"></svg:path>`,
})
export class BxLeftIndentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLeftTopArrowCircleIcon],svg[bx-left-top-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.993 2.007a9.93 9.93 0 0 0-7.071 2.922c-3.899 3.899-3.899 10.243 0 14.143a9.93 9.93 0 0 0 7.071 2.923a9.93 9.93 0 0 0 7.071-2.923c3.899-3.899 3.899-10.243 0-14.143a9.93 9.93 0 0 0-7.071-2.922m5.657 15.65a7.95 7.95 0 0 1-5.657 2.337c-2.141 0-4.15-.83-5.657-2.337c-3.119-3.119-3.119-8.195 0-11.314a7.95 7.95 0 0 1 5.657-2.336c2.142 0 4.15.829 5.657 2.336c3.12 3.119 3.12 8.195 0 11.314"></svg:path><svg:path fill="currentColor" d="M14.657 9H8.993v5.663l2.125-2.124l3.215 3.214l1.414-1.414l-3.215-3.214z"></svg:path>`,
})
export class BxLeftTopArrowCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLemonIcon],svg[bx-lemon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a9.8 9.8 0 0 1-3.26-.55a2.23 2.23 0 0 0-1.7.19a3.5 3.5 0 0 1-2.47.24a3.55 3.55 0 0 1-2.45-2.45A3.5 3.5 0 0 1 2.36 17a2.23 2.23 0 0 0 .19-1.7a10.07 10.07 0 0 1 0-6.53a9.87 9.87 0 0 1 6.18-6.23a10.07 10.07 0 0 1 6.53 0A2.23 2.23 0 0 0 17 2.36a3.5 3.5 0 0 1 2.47-.24a3.55 3.55 0 0 1 2.45 2.45A3.5 3.5 0 0 1 21.64 7a2.23 2.23 0 0 0-.19 1.7a10.07 10.07 0 0 1 0 6.53a9.87 9.87 0 0 1-6.19 6.19A10.3 10.3 0 0 1 12 22m-3.84-2.64a3.9 3.9 0 0 1 1.23.2a8 8 0 0 0 5.24 0a7.84 7.84 0 0 0 4.94-4.93a8 8 0 0 0 0-5.24a4.2 4.2 0 0 1 .29-3.23a1.53 1.53 0 0 0 .09-1.08a1.49 1.49 0 0 0-1-1a1.53 1.53 0 0 0-1.08.09a4.2 4.2 0 0 1-3.23.29a8 8 0 0 0-5.24 0a7.84 7.84 0 0 0-4.97 4.91a8 8 0 0 0 0 5.24a4.2 4.2 0 0 1-.29 3.23a1.53 1.53 0 0 0-.09 1.08a1.49 1.49 0 0 0 1 1a1.53 1.53 0 0 0 1.08-.09a4.5 4.5 0 0 1 2.03-.47"></svg:path><svg:path fill="currentColor" d="M8 12H6a6 6 0 0 1 6-6v2a4 4 0 0 0-4 4"></svg:path>`,
})
export class BxLemonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLibraryIcon],svg[bx-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3h2v18H7zM4 3h2v18H4zm6 0h2v18h-2zm9.062 17.792l-6.223-16.89l1.877-.692l6.223 16.89z"></svg:path>`,
})
export class BxLibraryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLikeIcon],svg[bx-like-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2M4 10h2v9H4zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7z"></svg:path>`,
})
export class BxLikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLineChartIcon],svg[bx-line-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v17a1 1 0 0 0 1 1h17v-2H5V3z"></svg:path><svg:path fill="currentColor" d="M15.293 14.707a1 1 0 0 0 1.414 0l5-5l-1.414-1.414L16 12.586l-2.293-2.293a1 1 0 0 0-1.414 0l-5 5l1.414 1.414L13 12.414z"></svg:path>`,
})
export class BxLineChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLineChartDownIcon],svg[bx-line-chart-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3H3v18h18v-2H5z"></svg:path><svg:path fill="currentColor" d="M13 12.586L8.707 8.293L7.293 9.707L13 15.414l3-3l4.293 4.293l1.414-1.414L16 9.586z"></svg:path>`,
})
export class BxLineChartDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLinkIcon],svg[bx-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707l1.414-1.414l-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.01 5.01 0 0 0 0 7.071a4.98 4.98 0 0 0 3.535 1.462A4.98 4.98 0 0 0 12 19.071l.707-.707l-1.414-1.414l-.707.707a3.007 3.007 0 0 1-4.243 0a3.005 3.005 0 0 1 0-4.243z"></svg:path><svg:path fill="currentColor" d="m12 4.929l-.707.707l1.414 1.414l.707-.707a3.007 3.007 0 0 1 4.243 0a3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414l.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.01 5.01 0 0 0 0-7.071a5.006 5.006 0 0 0-7.071 0"></svg:path>`,
})
export class BxLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLinkAltIcon],svg[bx-link-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.222 19.778a4.98 4.98 0 0 0 3.535 1.462a5 5 0 0 0 3.536-1.462l2.828-2.829l-1.414-1.414l-2.828 2.829a3.007 3.007 0 0 1-4.243 0a3.005 3.005 0 0 1 0-4.243l2.829-2.828l-1.414-1.414l-2.829 2.828a5.006 5.006 0 0 0 0 7.071m15.556-8.485a5.01 5.01 0 0 0 0-7.071a5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414l2.828-2.829a3.007 3.007 0 0 1 4.243 0a3.005 3.005 0 0 1 0 4.243l-2.829 2.828l1.414 1.414z"></svg:path><svg:path fill="currentColor" d="m8.464 16.95l-1.415-1.414l8.487-8.486l1.414 1.415z"></svg:path>`,
})
export class BxLinkAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLinkExternalIcon],svg[bx-link-external-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 3l3.293 3.293l-7 7l1.414 1.414l7-7L21 11V3z"></svg:path><svg:path fill="currentColor" d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2z"></svg:path>`,
})
export class BxLinkExternalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLiraIcon],svg[bx-lira-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21h2c4.411 0 8-4.038 8-9h-2c0 3.86-2.691 7-6 7v-7.358l6-1.385V8.204l-6 1.385V7.642l6-1.385V4.204l-6 1.385V3H9v3.05l-3 .693v2.053l3-.692v1.947l-3 .692v2.053l3-.692z"></svg:path>`,
})
export class BxLiraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxListCheckIcon],svg[bx-list-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7h11v2H4zm0 4h11v2H4zm0 4h7v2H4zm15.299-2.708l-4.3 4.291l-1.292-1.291l-1.414 1.415l2.706 2.704l5.712-5.703z"></svg:path>`,
})
export class BxListCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxListMinusIcon],svg[bx-list-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.063 15H13v2h9v-2zM4 7h11v2H4zm0 4h11v2H4zm0 4h7v2H4z"></svg:path>`,
})
export class BxListMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxListOlIcon],svg[bx-list-ol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.282 12.064c-.428.328-.72.609-.875.851q-.233.361-.279.768h2.679v-.748H5.413c.081-.081.152-.151.212-.201q.093-.076.361-.27q.454-.327.626-.604c.116-.186.173-.375.173-.578a.9.9 0 0 0-.151-.512a.9.9 0 0 0-.412-.341q-.262-.113-.733-.111q-.451 0-.706.114a.9.9 0 0 0-.396.338q-.141.216-.194.604l.894.076q.037-.28.147-.394a.38.38 0 0 1 .279-.108q.165 0 .272.108a.34.34 0 0 1 .108.258a.55.55 0 0 1-.108.297q-.11.154-.503.453m.055 6.386a.4.4 0 0 1-.282-.105q-.111-.104-.162-.378L4 18.085q.088.306.251.506t.417.306Q4.92 19 5.36 19q.45 0 .725-.14a1 1 0 0 0 .424-.403q.146-.26.146-.544a.8.8 0 0 0-.088-.393a.7.7 0 0 0-.249-.261a1 1 0 0 0-.286-.11a.94.94 0 0 0 .345-.299a.67.67 0 0 0 .113-.383a.75.75 0 0 0-.281-.596q-.28-.238-.909-.238q-.548 0-.847.219q-.3.216-.404.626l.844.151q.034-.242.133-.338c.099-.096.151-.098.257-.098a.33.33 0 0 1 .241.089q.088.09.087.238q0 .155-.117.27c-.117.115-.177.112-.293.112a1 1 0 0 1-.116-.011l-.045.649a1 1 0 0 1 .289-.056q.199 0 .313.126q.115.123.115.352q0 .22-.119.354a.4.4 0 0 1-.301.134m.948-10.083V5h-.739a1.5 1.5 0 0 1-.394.523q-.252.212-.708.365v.754a2.6 2.6 0 0 0 .937-.48v2.206zM9 6h11v2H9zm0 5h11v2H9zm0 5h11v2H9z"></svg:path>`,
})
export class BxListOlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxListPlusIcon],svg[bx-list-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15v-3h-2v3h-3v2h3v3h2v-3h3v-2h-.937zM4 7h11v2H4zm0 4h11v2H4zm0 4h8v2H4z"></svg:path>`,
})
export class BxListPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxListUlIcon],svg[bx-list-ul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z"></svg:path>`,
})
export class BxListUlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLoaderIcon],svg[bx-loader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414l3.536 3.536l-1.414 1.414zm15.556 12.728l-1.414 1.414l-3.536-3.536l1.414-1.414zm-12.02-3.536l1.414 1.414l-3.536 3.536l-1.414-1.414zm7.07-7.071l3.536-3.535l1.414 1.415l-3.536 3.535z"></svg:path>`,
})
export class BxLoaderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLoaderAltIcon],svg[bx-loader-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8s3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10"></svg:path>`,
})
export class BxLoaderAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLoaderCircleIcon],svg[bx-loader-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="20" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle><svg:circle cx="6.343" cy="17.657" r="2" fill="currentColor"></svg:circle><svg:circle cx="17.657" cy="6.343" r="2" fill="currentColor"></svg:circle><svg:circle cx="4" cy="12" r="2.001" fill="currentColor"></svg:circle><svg:circle cx="20" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="6.343" cy="6.344" r="2" fill="currentColor"></svg:circle><svg:circle cx="17.657" cy="17.658" r="2" fill="currentColor"></svg:circle>`,
})
export class BxLoaderCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLocationPlusIcon],svg[bx-location-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.42 21.815a1 1 0 0 0 1.16 0C12.884 21.598 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.996c-.029 6.444 7.116 11.602 7.42 11.819M12 4c3.309 0 6 2.691 6 6.004c.021 4.438-4.388 8.423-6 9.731c-1.611-1.308-6.021-5.293-6-9.735c0-3.309 2.691-6 6-6"></svg:path><svg:path fill="currentColor" d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z"></svg:path>`,
})
export class BxLocationPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLockIcon],svg[bx-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5M9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722c0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12z"></svg:path>`,
})
export class BxLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLockAltIcon],svg[bx-lock-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5m6 10l.002 8H6v-8zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3z"></svg:path>`,
})
export class BxLockAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLockOpenIcon],svg[bx-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c1.654 0 3 1.346 3 3h2c0-2.757-2.243-5-5-5S7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2H9V7c0-1.654 1.346-3 3-3m6.002 16H13v-2.278c.595-.347 1-.985 1-1.722c0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12z"></svg:path>`,
})
export class BxLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLockOpenAltIcon],svg[bx-lock-open-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2H9V7c0-1.654 1.346-3 3-3s3 1.346 3 3v1zm1 4l.002 8H6v-8z"></svg:path>`,
})
export class BxLockOpenAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLogInIcon],svg[bx-log-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 16l5-4l-5-4v3H4v2h9z"></svg:path><svg:path fill="currentColor" d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2"></svg:path>`,
})
export class BxLogInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLogInCircleIcon],svg[bx-log-in-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.998 16l5-4l-5-4v3h-9v2h9z"></svg:path><svg:path fill="currentColor" d="M12.999 2.999a8.94 8.94 0 0 0-6.364 2.637L8.049 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051S20 10.13 20 12s-.729 3.628-2.051 4.95s-3.08 2.051-4.95 2.051s-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637C21.063 16.665 22 14.405 22 12s-.937-4.665-2.637-6.364a8.94 8.94 0 0 0-6.364-2.637"></svg:path>`,
})
export class BxLogInCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLogOutIcon],svg[bx-log-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 13v-2H7V8l-5 4l5 4v-3z"></svg:path><svg:path fill="currentColor" d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2"></svg:path>`,
})
export class BxLogOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLogOutCircleIcon],svg[bx-log-out-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 12l5 4v-3h9v-2H7V8z"></svg:path><svg:path fill="currentColor" d="M13.001 2.999a8.94 8.94 0 0 0-6.364 2.637L8.051 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051s2.051 3.08 2.051 4.95s-.729 3.628-2.051 4.95s-3.08 2.051-4.95 2.051s-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637c1.7-1.699 2.637-3.959 2.637-6.364s-.937-4.665-2.637-6.364a8.94 8.94 0 0 0-6.364-2.637"></svg:path>`,
})
export class BxLogOutCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxLowVisionIcon],svg[bx-low-vision-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.998c-1.836 0-3.356.389-4.617.971L3.707 2.293L2.293 3.707l3.315 3.316c-2.613 1.952-3.543 4.618-3.557 4.66l-.105.316l.105.316C2.073 12.382 4.367 19 12 19c1.835 0 3.354-.389 4.615-.971l3.678 3.678l1.414-1.414l-3.317-3.317c2.614-1.952 3.545-4.618 3.559-4.66l.105-.316l-.105-.316c-.022-.068-2.316-6.686-9.949-6.686M4.074 12c.103-.236.274-.586.521-.989l5.867 5.867C6.249 16.23 4.523 13.035 4.074 12m9.247 4.907l-7.48-7.481a8 8 0 0 1 1.188-.982l8.055 8.054a9 9 0 0 1-1.763.409m3.648-1.352l-1.541-1.541c.354-.596.572-1.28.572-2.015c0-.474-.099-.924-.255-1.349A.98.98 0 0 1 15 11a1 1 0 0 1-1-1c0-.439.288-.802.682-.936A3.97 3.97 0 0 0 12 7.999c-.735 0-1.419.218-2.015.572l-1.07-1.07A9.3 9.3 0 0 1 12 6.998c5.351 0 7.425 3.847 7.926 5a8.57 8.57 0 0 1-2.957 3.557"></svg:path>`,
})
export class BxLowVisionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMagnetIcon],svg[bx-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3h-3c-1.103 0-2 .897-2 2v8c0 1.103-.897 2-2 2s-2-.897-2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v8c0 4.963 4.037 9 9 9s9-4.037 9-9V5c0-1.103-.897-2-2-2m-3 2h3v3h-3zM5 5h3v3H5zm7 15c-3.859 0-7-3.141-7-7v-3h3v3c0 2.206 1.794 4 4 4s4-1.794 4-4v-3h3v3c0 3.859-3.141 7-7 7"></svg:path>`,
})
export class BxMagnetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMailSendIcon],svg[bx-mail-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1 1 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m-7 6.75L6.666 6h12.668z"></svg:path><svg:path fill="currentColor" d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></svg:path>`,
})
export class BxMailSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMaleIcon],svg[bx-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 7H9a1 1 0 0 0-1 1v7h2v7h4v-7h2V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class BxMaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMaleFemaleIcon],svg[bx-male-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="6" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M9 7H3a1 1 0 0 0-1 1v7h2v7h4v-7h2V8a1 1 0 0 0-1-1"></svg:path><svg:circle cx="17" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M20.21 7.73a1 1 0 0 0-1-.73h-4.5a1 1 0 0 0-1 .73L12 14h2l-1 4h2v4h4v-4h2l-1-4h2z"></svg:path>`,
})
export class BxMaleFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMaleSignIcon],svg[bx-male-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11V4h-7l2.793 2.793l-4.322 4.322A5.96 5.96 0 0 0 8 10c-3.309 0-6 2.691-6 6s2.691 6 6 6s6-2.691 6-6c0-1.294-.416-2.49-1.115-3.471l4.322-4.322zM8 20c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4"></svg:path>`,
})
export class BxMaleSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMapIcon],svg[bx-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4m0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2"></svg:path><svg:path fill="currentColor" d="M11.42 21.814a1 1 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819M12 4c3.309 0 6 2.691 6 6.005c.021 4.438-4.388 8.423-6 9.73c-1.611-1.308-6.021-5.294-6-9.735c0-3.309 2.691-6 6-6"></svg:path>`,
})
export class BxMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMapAltIcon],svg[bx-map-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.447 6.105l-6-3a1 1 0 0 0-.895 0L9 5.882L3.447 3.105A1 1 0 0 0 2 4v13c0 .379.214.725.553.895l6 3a1 1 0 0 0 .895 0L15 18.118l5.553 2.776a.99.99 0 0 0 .972-.043c.295-.183.475-.504.475-.851V7c0-.379-.214-.725-.553-.895M10 7.618l4-2v10.764l-4 2zm-6-2l4 2v10.764l-4-2zm16 12.764l-4-2V5.618l4 2z"></svg:path>`,
})
export class BxMapAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMapPinIcon],svg[bx-map-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17l1-2V9.858c1.721-.447 3-2 3-3.858c0-2.206-1.794-4-4-4S8 3.794 8 6c0 1.858 1.279 3.411 3 3.858V15zM10 6c0-1.103.897-2 2-2s2 .897 2 2s-.897 2-2 2s-2-.897-2-2"></svg:path><svg:path fill="currentColor" d="m16.267 10.563l-.533 1.928C18.325 13.207 20 14.584 20 16c0 1.892-3.285 4-8 4s-8-2.108-8-4c0-1.416 1.675-2.793 4.267-3.51l-.533-1.928C4.197 11.54 2 13.623 2 16c0 3.364 4.393 6 10 6s10-2.636 10-6c0-2.377-2.197-4.46-5.733-5.437"></svg:path>`,
})
export class BxMapPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMaskIcon],svg[bx-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6H5C3.346 6 2 7.346 2 9v5c0 2.206 1.794 4 4 4h1.637c1.166 0 2.28-.557 2.981-1.491c.66-.879 2.104-.88 2.764.001A3.74 3.74 0 0 0 16.363 18H18c2.206 0 4-1.794 4-4V9c0-1.654-1.346-3-3-3m1 8c0 1.103-.897 2-2 2h-1.637c-.54 0-1.057-.259-1.382-.69c-.71-.948-1.797-1.492-2.981-1.492s-2.271.544-2.981 1.491A1.74 1.74 0 0 1 7.637 16H6c-1.103 0-2-.897-2-2V9c0-.551.448-1 1-1h14c.552 0 1 .449 1 1z"></svg:path><svg:ellipse cx="7.5" cy="11.5" fill="currentColor" rx="2.5" ry="1.5"></svg:ellipse><svg:ellipse cx="16.5" cy="11.5" fill="currentColor" rx="2.5" ry="1.5"></svg:ellipse>`,
})
export class BxMaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMathIcon],svg[bx-math-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2H5v3H2v2h3v3h2V7h3V5H7zm7 3h8v2h-8zm0 10h8v2h-8zm0 4h8v2h-8zm-5.71-4.71L6 16.59l-2.29-2.3l-1.42 1.42L4.59 18l-2.3 2.29l1.42 1.42L6 19.41l2.29 2.3l1.42-1.42L7.41 18l2.3-2.29z"></svg:path>`,
})
export class BxMathIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMedalIcon],svg[bx-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c3.859 0 7-3.141 7-7s-3.141-7-7-7s-7 3.141-7 7s3.14 7 7 7m0-12c2.757 0 5 2.243 5 5s-2.243 5-5 5s-5-2.243-5-5s2.243-5 5-5m-1-8H7v5.518a8.96 8.96 0 0 1 4-1.459zm6 0h-4v4.059a8.96 8.96 0 0 1 4 1.459z"></svg:path><svg:path fill="currentColor" d="m10.019 15.811l-.468 2.726L12 17.25l2.449 1.287l-.468-2.726l1.982-1.932l-2.738-.398L12 11l-1.225 2.481l-2.738.398z"></svg:path>`,
})
export class BxMedalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMehIcon],svg[bx-meh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:circle cx="8.5" cy="10.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="15.493" cy="10.493" r="1.493" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M7.974 15H16v2H7.974z"></svg:path>`,
})
export class BxMehIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMehAltIcon],svg[bx-meh-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M14 10h4v2h-4zm-6.026 5H16v2H7.974zM6 10h4v2H6z"></svg:path>`,
})
export class BxMehAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMehBlankIcon],svg[bx-meh-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:circle cx="8.5" cy="10.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="15.493" cy="10.493" r="1.493" fill="currentColor"></svg:circle>`,
})
export class BxMehBlankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMemoryCardIcon],svg[bx-memory-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V8a1 1 0 0 0-.293-.707l-5-5A1 1 0 0 0 14 2H6c-1.103 0-2 .897-2 2m14 4.414L18.001 20H6V4h7.586z"></svg:path><svg:path fill="currentColor" d="M8 6h2v4H8zm4 0h2v4h-2z"></svg:path>`,
})
export class BxMemoryCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMenuIcon],svg[bx-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></svg:path>`,
})
export class BxMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMenuAltLeftIcon],svg[bx-menu-alt-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></svg:path>`,
})
export class BxMenuAltLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMenuAltRightIcon],svg[bx-menu-alt-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></svg:path>`,
})
export class BxMenuAltRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMergeIcon],svg[bx-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M21 19v-9a2 2 0 0 0-2-2h-1v8a2 2 0 0 1-2 2H8v1a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2"></svg:path>`,
})
export class BxMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageIcon],svg[bx-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z"></svg:path>`,
})
export class BxMessageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageAddIcon],svg[bx-message-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z"></svg:path><svg:path fill="currentColor" d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z"></svg:path>`,
})
export class BxMessageAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageAltIcon],svg[bx-message-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414L15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-4.414L12 18.586L9.414 16H5V4h14z"></svg:path>`,
})
export class BxMessageAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageAltAddIcon],svg[bx-message-alt-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16c0 1.103.897 2 2 2h3.586L12 21.414L15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zM5 4h14v12h-4.414L12 18.586L9.414 16H5z"></svg:path><svg:path fill="currentColor" d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z"></svg:path>`,
})
export class BxMessageAltAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageAltCheckIcon],svg[bx-message-alt-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v12c0 1.103.897 2 2 2h3.586L12 21.414L15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2m2 0h14v12h-4.414L12 18.586L9.414 16H5z"></svg:path><svg:path fill="currentColor" d="m17.207 7.207l-1.414-1.414L11 10.586L8.707 8.293L7.293 9.707L11 13.414z"></svg:path>`,
})
export class BxMessageAltCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageAltDetailIcon],svg[bx-message-alt-detail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414L15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm14 14h-4.414L12 18.586L9.414 16H5V4h14z"></svg:path><svg:path fill="currentColor" d="M7 7h10v2H7zm0 4h7v2H7z"></svg:path>`,
})
export class BxMessageAltDetailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageAltDotsIcon],svg[bx-message-alt-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414L15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-4.414L12 18.586L9.414 16H5V4h14z"></svg:path><svg:circle cx="15" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="9" cy="10" r="2" fill="currentColor"></svg:circle>`,
})
export class BxMessageAltDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageAltEditIcon],svg[bx-message-alt-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.586 18L12 21.414L15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2zM5 4h14v12h-4.414L12 18.586L9.414 16H5z"></svg:path><svg:path fill="currentColor" d="m12.479 7.219l-4.977 4.969v1.799h1.8l4.975-4.969zm2.219-2.22l1.8 1.8l-1.37 1.37l-1.8-1.799z"></svg:path>`,
})
export class BxMessageAltEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageAltErrorIcon],svg[bx-message-alt-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414L15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm14 14h-4.414L12 18.586L9.414 16H5V4h14z"></svg:path><svg:path fill="currentColor" d="M11 6h2v6h-2zm0 7h2v2h-2z"></svg:path>`,
})
export class BxMessageAltErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageAltMinusIcon],svg[bx-message-alt-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.586 18L12 21.414L15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2zM5 4h14v12h-4.414L12 18.586L9.414 16H5z"></svg:path><svg:path fill="currentColor" d="M8 9h8v2H8z"></svg:path>`,
})
export class BxMessageAltMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageAltXIcon],svg[bx-message-alt-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.586 18L12 21.414L15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2zM5 4h14v12h-4.414L12 18.586L9.414 16H5z"></svg:path><svg:path fill="currentColor" d="M9.707 13.707L12 11.414l2.293 2.293l1.414-1.414L13.414 10l2.293-2.293l-1.414-1.414L12 8.586L9.707 6.293L8.293 7.707L10.586 10l-2.293 2.293z"></svg:path>`,
})
export class BxMessageAltXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageCheckIcon],svg[bx-message-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z"></svg:path><svg:path fill="currentColor" d="m17.207 7.207l-1.414-1.414L11 10.586L8.707 8.293L7.293 9.707L11 13.414z"></svg:path>`,
})
export class BxMessageCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageDetailIcon],svg[bx-message-detail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z"></svg:path><svg:path fill="currentColor" d="M7 7h10v2H7zm0 4h7v2H7z"></svg:path>`,
})
export class BxMessageDetailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageDotsIcon],svg[bx-message-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.766L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.234V16H4V4h16z"></svg:path><svg:circle cx="15" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="9" cy="10" r="2" fill="currentColor"></svg:circle>`,
})
export class BxMessageDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageEditIcon],svg[bx-message-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z"></svg:path><svg:path fill="currentColor" d="m13.803 9.189l-1.399-1.398l-3.869 3.864v1.399h1.399zm.327-3.123l1.398 1.399l-1.066 1.066l-1.399-1.398z"></svg:path>`,
})
export class BxMessageEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageErrorIcon],svg[bx-message-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z"></svg:path><svg:path fill="currentColor" d="M11 6h2v5h-2zm0 6h2v2h-2z"></svg:path>`,
})
export class BxMessageErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageMinusIcon],svg[bx-message-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z"></svg:path><svg:path fill="currentColor" d="M8 9h8v2H8z"></svg:path>`,
})
export class BxMessageMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageRoundedIcon],svg[bx-message-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.516 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8m0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6s-3.589 6-8 6"></svg:path>`,
})
export class BxMessageRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageRoundedAddIcon],svg[bx-message-rounded-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8m0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6s-3.589 6-8 6"></svg:path><svg:path fill="currentColor" d="M13 6h-2v3H8v2h3v3h2v-3h3V9h-3z"></svg:path>`,
})
export class BxMessageRoundedAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageRoundedCheckIcon],svg[bx-message-rounded-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.339-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8m0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6s-3.589 6-8 6"></svg:path><svg:path fill="currentColor" d="M11 11.586L8.707 9.293l-1.414 1.414L11 14.414l6.207-6.207l-1.414-1.414z"></svg:path>`,
})
export class BxMessageRoundedCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageRoundedDetailIcon],svg[bx-message-rounded-detail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8m0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6s-3.589 6-8 6"></svg:path><svg:path fill="currentColor" d="M7 7h10v2H7zm0 4h7v2H7z"></svg:path>`,
})
export class BxMessageRoundedDetailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageRoundedDotsIcon],svg[bx-message-rounded-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9.5" cy="9.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="14.5" cy="9.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.897 5.515 5 6.934V22l5.34-4.004C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8m0 14h-.333L9 18v-2.417l-.641-.247C5.671 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6s-3.589 6-8 6"></svg:path>`,
})
export class BxMessageRoundedDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageRoundedEditIcon],svg[bx-message-rounded-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8m0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6s-3.589 6-8 6"></svg:path><svg:path fill="currentColor" d="M8.503 11.589v1.398h1.398l3.87-3.864l-1.399-1.398zm5.927-3.125l-1.398-1.398l1.067-1.067l1.398 1.398z"></svg:path>`,
})
export class BxMessageRoundedEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageRoundedErrorIcon],svg[bx-message-rounded-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8m0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6s-3.589 6-8 6"></svg:path><svg:path fill="currentColor" d="M11 6h2v5h-2zm0 6h2v2h-2z"></svg:path>`,
})
export class BxMessageRoundedErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageRoundedMinusIcon],svg[bx-message-rounded-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8m0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6s-3.589 6-8 6"></svg:path><svg:path fill="currentColor" d="M8 9h8v2H8z"></svg:path>`,
})
export class BxMessageRoundedMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageRoundedXIcon],svg[bx-message-rounded-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8m0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6s-3.589 6-8 6"></svg:path><svg:path fill="currentColor" d="M14.293 6.293L12 8.586L9.707 6.293L8.293 7.707L10.586 10l-2.293 2.293l1.414 1.414L12 11.414l2.293 2.293l1.414-1.414L13.414 10l2.293-2.293z"></svg:path>`,
})
export class BxMessageRoundedXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageSquareIcon],svg[bx-message-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8C4.691 2 2 4.691 2 8v12a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6m4 13c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4z"></svg:path>`,
})
export class BxMessageSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageSquareAddIcon],svg[bx-message-square-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6m4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4z"></svg:path><svg:path fill="currentColor" d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"></svg:path>`,
})
export class BxMessageSquareAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageSquareCheckIcon],svg[bx-message-square-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6m4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4z"></svg:path><svg:path fill="currentColor" d="m11 13.586l-2.293-2.293l-1.414 1.414L11 16.414l6.207-6.207l-1.414-1.414z"></svg:path>`,
})
export class BxMessageSquareCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageSquareDetailIcon],svg[bx-message-square-detail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6m4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4z"></svg:path><svg:path fill="currentColor" d="M7 9h10v2H7zm0 4h7v2H7z"></svg:path>`,
})
export class BxMessageSquareDetailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageSquareDotsIcon],svg[bx-message-square-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8C4.691 2 2 4.691 2 8v12a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6m4 13c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4z"></svg:path><svg:circle cx="9.5" cy="11.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="14.5" cy="11.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxMessageSquareDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageSquareEditIcon],svg[bx-message-square-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6m4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4z"></svg:path><svg:path fill="currentColor" d="M7 14.987v1.999h1.999l5.529-5.522l-1.998-1.998zm8.47-4.465l-1.998-2L14.995 7l2 1.999z"></svg:path>`,
})
export class BxMessageSquareEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageSquareErrorIcon],svg[bx-message-square-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6m4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4z"></svg:path><svg:path fill="currentColor" d="M11 6h2v8h-2zm0 10h2v2h-2z"></svg:path>`,
})
export class BxMessageSquareErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageSquareMinusIcon],svg[bx-message-square-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6m4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4z"></svg:path><svg:path fill="currentColor" d="M8 11h8v2H8z"></svg:path>`,
})
export class BxMessageSquareMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageSquareXIcon],svg[bx-message-square-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6m4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4z"></svg:path><svg:path fill="currentColor" d="M15.292 7.295L12 10.587L8.708 7.295L7.294 8.709l3.292 3.292l-3.292 3.292l1.414 1.414L12 13.415l3.292 3.292l1.414-1.414l-3.292-3.292l3.292-3.292z"></svg:path>`,
})
export class BxMessageSquareXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMessageXIcon],svg[bx-message-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z"></svg:path><svg:path fill="currentColor" d="M9.707 13.707L12 11.414l2.293 2.293l1.414-1.414L13.414 10l2.293-2.293l-1.414-1.414L12 8.586L9.707 6.293L8.293 7.707L10.586 10l-2.293 2.293z"></svg:path>`,
})
export class BxMessageXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMeteorIcon],svg[bx-meteor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 22c2.003 0 3.887-.78 5.313-2.207l6.904-7.096A1 1 0 0 0 21 11h-3.301l4.175-7.514a1.001 1.001 0 0 0-1.359-1.36l-7.11 3.95l.576-2.879a1 1 0 0 0-1.629-.957L4.196 9.197c-2.924 2.924-2.924 7.682 0 10.606A7.45 7.45 0 0 0 9.5 22M5.552 10.665l5.902-5.031l-.248 1.24l-.186.93v.001l-.424 2.119l7.83-4.35l-3.3 5.94l-.001.001L14.301 13h4.331l-5.243 5.389C12.35 19.428 10.969 20 9.5 20s-2.851-.572-3.89-1.611c-2.143-2.144-2.143-5.634-.058-7.724"></svg:path><svg:path fill="currentColor" d="M9.5 18a3.492 3.492 0 0 0 1.484-6.659c.005.053.016.105.016.159a1.5 1.5 0 1 1-3 0c0-.054.011-.106.016-.159A3.492 3.492 0 0 0 9.5 18"></svg:path>`,
})
export class BxMeteorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMicrochipIcon],svg[bx-microchip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M8 20V4h8l.001 16zM3 7h2V5H3v.5H2v1h1zm18-2h-2v2h2v-.5h1v-1h-1zM3 11h2V9H3v.5H2v1h1zm18-2h-2v2h2v-.5h1v-1h-1zM3 15h2v-2H3v.5H2v1h1zm18-2h-2v2h2v-.5h1v-1h-1zM3 19h2v-2H3v.5H2v1h1zm18-2h-2v2h2v-.5h1v-1h-1z"></svg:path>`,
})
export class BxMicrochipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMicrophoneIcon],svg[bx-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12V6c0-2.217-1.785-4.021-3.979-4.021a1 1 0 0 0-.209.025A4.006 4.006 0 0 0 8 6v6c0 2.206 1.794 4 4 4s4-1.794 4-4m-6 0V6c0-1.103.897-2 2-2a1 1 0 0 0 .163-.015C13.188 4.06 14 4.935 14 6v6c0 1.103-.897 2-2 2s-2-.897-2-2"></svg:path><svg:path fill="currentColor" d="M6 12H4c0 4.072 3.061 7.436 7 7.931V22h2v-2.069c3.939-.495 7-3.858 7-7.931h-2c0 3.309-2.691 6-6 6s-6-2.691-6-6"></svg:path>`,
})
export class BxMicrophoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMicrophoneOffIcon],svg[bx-microphone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.707 20.293l-3.388-3.388A7.94 7.94 0 0 0 20 12.021h-2a5.95 5.95 0 0 1-1.109 3.456l-1.452-1.452c.348-.591.561-1.27.561-2.004v-6C16 3.804 14.215 2 12.021 2q-.105 0-.209.025A4.005 4.005 0 0 0 8 6.021v.565L3.707 2.293L2.293 3.707l18 18zM10 6.021c0-1.103.897-2 2-2a1 1 0 0 0 .164-.015C13.188 4.08 14 4.956 14 6.021v6c0 .172-.029.335-.071.494L10 8.586zm-4 6H4c0 4.072 3.06 7.436 7 7.931v2.069h2v-2.07a8 8 0 0 0 2.218-.611l-1.558-1.558a6 6 0 0 1-1.66.239c-3.309 0-6-2.692-6-6"></svg:path><svg:path fill="currentColor" d="M8.011 12.132a3.993 3.993 0 0 0 3.877 3.877z"></svg:path>`,
})
export class BxMicrophoneOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMinusIcon],svg[bx-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11h14v2H5z"></svg:path>`,
})
export class BxMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMinusBackIcon],svg[bx-minus-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h3v3c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-3V5c0-1.103-.897-2-2-2M5 5h9l-.003 9H5z"></svg:path>`,
})
export class BxMinusBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMinusCircleIcon],svg[bx-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11h10v2H7z"></svg:path><svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path>`,
})
export class BxMinusCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMinusFrontIcon],svg[bx-minus-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16h3v3c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-3V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2m13.997 3H10v-9h9z"></svg:path>`,
})
export class BxMinusFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMobileIcon],svg[bx-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M7 16.999V5h10l.002 11.999z"></svg:path>`,
})
export class BxMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMobileAltIcon],svg[bx-mobile-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.75 2h-10c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m-10 18V4h10l.002 16z"></svg:path><svg:circle cx="11.75" cy="18" r="1" fill="currentColor"></svg:circle>`,
})
export class BxMobileAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMobileLandscapeIcon],svg[bx-mobile-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2M7.001 7H19v10H7.001z"></svg:path>`,
})
export class BxMobileLandscapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMobileVibrationIcon],svg[bx-mobile-vibration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.535 2.808c-.756-.756-2.072-.756-2.828 0l-9.899 9.899a2 2 0 0 0 0 2.828l5.657 5.657c.378.378.88.586 1.414.586s1.036-.208 1.414-.586l9.899-9.899c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414zm-5.656 16.97v1zl-5.657-5.657l9.899-9.899l5.657 5.657z"></svg:path><svg:circle cx="9" cy="15" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m15.707 21.707l-1.414-1.414l6-6l1.414 1.415zM8.293 2.293l1.414 1.414l-6 6l-1.414-1.415z"></svg:path>`,
})
export class BxMobileVibrationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMoneyIcon],svg[bx-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 11a3 3 0 0 0-3 3H7a3 3 0 0 0-3-3V9a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3z"></svg:path><svg:path fill="currentColor" d="M12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2"></svg:path>`,
})
export class BxMoneyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMoneyWithdrawIcon],svg[bx-money-withdraw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92c0-1.12-.52-3-4-3c-2 0-2-.63-2-1s.7-1 2-1s1.39.64 1.4 1h2A3 3 0 0 0 13 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3c2 0 2 .68 2 1s-.62 1-2 1"></svg:path><svg:path fill="currentColor" d="M5 2H2v2h2v17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4h2V2zm13 18H6V4h12z"></svg:path>`,
})
export class BxMoneyWithdrawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMoonIcon],svg[bx-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.742 13.045a8 8 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.03 8.03 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10 10 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.94 9.94 0 0 0 7.072 2.93a9.93 9.93 0 0 0 7.07-2.929a10 10 0 0 0 2.583-4.491a1 1 0 0 0-1.224-1.224m-2.772 4.301a7.95 7.95 0 0 1-5.656 2.343a7.95 7.95 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a8 8 0 0 1 2.06-1.483a10.03 10.03 0 0 0 2.89 7.848a9.97 9.97 0 0 0 7.848 2.891a8 8 0 0 1-1.484 2.059"></svg:path>`,
})
export class BxMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMouseIcon],svg[bx-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7M7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15z"></svg:path><svg:path fill="currentColor" d="M11 6h2v6h-2z"></svg:path>`,
})
export class BxMouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMouseAltIcon],svg[bx-mouse-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h-2C7.691 2 5 4.691 5 8v8c0 3.309 2.691 6 6 6h2c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6m-2 2v6H7V8c0-2.206 1.794-4 4-4m6 12c0 2.206-1.794 4-4 4h-2c-2.206 0-4-1.794-4-4v-4h10zm-4-6V4c2.206 0 4 1.794 4 4v2z"></svg:path>`,
})
export class BxMouseAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMoveIcon],svg[bx-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11h-5V6h3l-4-4l-4 4h3v5H6V8l-4 4l4 4v-3h5v5H8l4 4l4-4h-3v-5h5v3l4-4l-4-4z"></svg:path>`,
})
export class BxMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMoveHorizontalIcon],svg[bx-move-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11H7V7l-5 5l5 5v-4h10v4l5-5l-5-5z"></svg:path>`,
})
export class BxMoveHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMoveVerticalIcon],svg[bx-move-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 17l5 5l5-5h-4V7h4l-5-5l-5 5h4v10z"></svg:path>`,
})
export class BxMoveVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMovieIcon],svg[bx-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m.001 6q-.002 0 0 0h-.466l-2.667-4H20zM9.535 9L6.868 5h2.597l2.667 4zm5 0l-2.667-4h2.597l2.667 4zM4 5h.465l2.667 4H4zm0 14v-8h16l.002 8z"></svg:path>`,
})
export class BxMovieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMoviePlayIcon],svg[bx-movie-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2m.001 6q-.002 0 0 0h-.465l-2.667-4H20zM9.536 9L6.869 5h2.596l2.667 4zm5 0l-2.667-4h2.596l2.667 4zM4 5h.465l2.667 4H4zm0 14v-8h16l.002 8z"></svg:path><svg:path fill="currentColor" d="m10 18l5.5-3l-5.5-3z"></svg:path>`,
})
export class BxMoviePlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxMusicIcon],svg[bx-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.684 5.821l-9-3.272A1.998 1.998 0 0 0 8 4.428v6.129A3.95 3.95 0 0 0 6 10c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4V4.428L19 7.7v6.856A3.96 3.96 0 0 0 17 14c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4V7.7c0-.838-.529-1.594-1.316-1.879M6 16c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2m11 4c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2"></svg:path>`,
})
export class BxMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxNavigationIcon],svg[bx-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.002 9.63c-.023.411.207.794.581.966l7.504 3.442l3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.736a1 1 0 0 0-.686.894m16.464-3.971l-4.182 12.73l-2.534-5.522a1 1 0 0 0-.492-.492L5.734 9.841z"></svg:path>`,
})
export class BxNavigationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxNetworkChartIcon],svg[bx-network-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3c-1.654 0-3 1.346-3 3c0 .502.136.968.354 1.385l-1.116 1.302A4 4 0 0 0 13 8c-.739 0-1.425.216-2.02.566L9.566 7.152A3.45 3.45 0 0 0 10 5.5C10 3.57 8.43 2 6.5 2S3 3.57 3 5.5S4.57 9 6.5 9c.601 0 1.158-.166 1.652-.434L9.566 9.98A3.97 3.97 0 0 0 9 12c0 .997.38 1.899.985 2.601l-1.692 1.692l.025.025A2.96 2.96 0 0 0 7 16c-1.654 0-3 1.346-3 3s1.346 3 3 3s3-1.346 3-3c0-.476-.121-.919-.318-1.318l.025.025l1.954-1.954c.421.15.867.247 1.339.247c2.206 0 4-1.794 4-4a3.96 3.96 0 0 0-.439-1.785l1.253-1.462c.364.158.764.247 1.186.247c1.654 0 3-1.346 3-3s-1.346-3-3-3M7 20a1 1 0 1 1 0-2a1 1 0 0 1 0 2M5 5.5C5 4.673 5.673 4 6.5 4S8 4.673 8 5.5S7.327 7 6.5 7S5 6.327 5 5.5m8 8.5c-1.103 0-2-.897-2-2s.897-2 2-2s2 .897 2 2s-.897 2-2 2m6-7a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class BxNetworkChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxNewsIcon],svg[bx-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.875 3H4.125C2.953 3 2 3.897 2 5v14c0 1.103.953 2 2.125 2h15.75C21.047 21 22 20.103 22 19V5c0-1.103-.953-2-2.125-2m0 16H4.125c-.057 0-.096-.016-.113-.016q-.01 0-.012.008L3.988 5.046c.007-.01.052-.046.137-.046h15.75c.079.001.122.028.125.008l.012 13.946c-.007.01-.052.046-.137.046"></svg:path><svg:path fill="currentColor" d="M6 7h6v6H6zm7 8H6v2h12v-2h-4zm1-4h4v2h-4zm0-4h4v2h-4z"></svg:path>`,
})
export class BxNewsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxNoEntryIcon],svg[bx-no-entry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 10h10v4H7z"></svg:path><svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path>`,
})
export class BxNoEntryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxNoSignalIcon],svg[bx-no-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16h2v5H3zm4-3h2v8H7zM21 3h-2v14.59l-2-2V7h-2v6.59l-2-2V10h-1.59l-7.7-7.71l-1.42 1.42l18 18l1.42-1.42l-.71-.7zm-6 18h1.88L15 19.12zm-4 0h2v-3.88l-2-2z"></svg:path>`,
})
export class BxNoSignalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxNoteIcon],svg[bx-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h8a1 1 0 0 0 .707-.293l7-7a1 1 0 0 0 .196-.293c.014-.03.022-.061.033-.093a1 1 0 0 0 .051-.259c.002-.021.013-.041.013-.062V5c0-1.103-.897-2-2-2M5 5h14v7h-6a1 1 0 0 0-1 1v6H5zm9 12.586V14h3.586z"></svg:path>`,
})
export class BxNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxNotepadIcon],svg[bx-notepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2M5 20V7h14V6l.002 14z"></svg:path><svg:path fill="currentColor" d="M7 9h10v2H7zm0 4h5v2H7z"></svg:path>`,
})
export class BxNotepadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxNotificationIcon],svg[bx-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="6" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M18 19H5V6h8c0-.712.153-1.387.422-2H5c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h13c1.103 0 2-.897 2-2v-8.422A5 5 0 0 1 18 11z"></svg:path>`,
})
export class BxNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxNotificationOffIcon],svg[bx-notification-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.71 20.296l-1.786-1.786c.045-.163.076-.332.076-.51v-7h-2v5.586L7.414 6H13V4H6c-.178 0-.347.031-.51.076l-1.78-1.78L2.296 3.71l18 18zM4 8.121V18c0 1.103.897 2 2 2h9.879l-2-2H6v-7.879z"></svg:path><svg:circle cx="18" cy="6" r="3" fill="currentColor"></svg:circle>`,
})
export class BxNotificationOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxObjectsHorizontalCenterIcon],svg[bx-objects-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20h6v2h2v-2h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-6v-2h4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-4V2h-2v2H7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4v2H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1M8 6h8v3H8zm-2 9h12v3H6z"></svg:path>`,
})
export class BxObjectsHorizontalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxObjectsHorizontalLeftIcon],svg[bx-objects-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h2v20H2zm19 11H7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1m-1 5H8v-3h12zM7 11h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1m1-5h8v3H8z"></svg:path>`,
})
export class BxObjectsHorizontalLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxObjectsHorizontalRightIcon],svg[bx-objects-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2h2v20h-2zm-2 12a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zm-2 4H4v-3h12zm-9-7h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1m1-5h8v3H8z"></svg:path>`,
})
export class BxObjectsHorizontalRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxObjectsVerticalBottomIcon],svg[bx-objects-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20h20v2H2zM4 3v14a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1m2 1h3v12H6zm7 13a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1zm2-9h3v8h-3z"></svg:path>`,
})
export class BxObjectsVerticalBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxObjectsVerticalCenterIcon],svg[bx-objects-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 7a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v4h-2V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v6H2v2h2v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-6h2v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4h2v-2h-2zM9 18H6V6h3zm9-2h-3V8h3z"></svg:path>`,
})
export class BxObjectsVerticalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxObjectsVerticalTopIcon],svg[bx-objects-vertical-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v2H2zm9 19V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1m-2-1H6V8h3zM19 6h-5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1m-1 10h-3V8h3z"></svg:path>`,
})
export class BxObjectsVerticalTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxOutlineIcon],svg[bx-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19v-9c0-1.103-.897-2-2-2h-3V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h3v3c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2M5 14V5h9v3h-4c-1.103 0-2 .897-2 2v4zm9.001 0H10v-4h4.001zM10 16h4c1.103 0 2-.897 2-2v-4h3l.001 9H10z"></svg:path>`,
})
export class BxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPackageIcon],svg[bx-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8a.8.8 0 0 0 0-.21v-.08a1 1 0 0 0-.07-.16a.4.4 0 0 0-.05-.08l-.1-.13l-.08-.06l-.12-.09l-9-5a1 1 0 0 0-1 0l-9 5l-.09.07l-.11.08a.4.4 0 0 0-.07.11a.4.4 0 0 0-.08.1a.6.6 0 0 0-.06.14a.3.3 0 0 0 0 .1A.8.8 0 0 0 2 8v8a1 1 0 0 0 .52.87l9 5a1 1 0 0 0 .13.06h.1a1.06 1.06 0 0 0 .5 0h.1l.14-.06l9-5A1 1 0 0 0 22 16zm-10 3.87L5.06 8l2.76-1.52l6.83 3.9zm0-7.72L18.94 8L16.7 9.25L9.87 5.34zM4 9.7l7 3.92v5.68l-7-3.89zm9 9.6v-5.68l3-1.68V15l2-1v-3.18l2-1.11v5.7z"></svg:path>`,
})
export class BxPackageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPaintIcon],svg[bx-paint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.061 22c1.523 0 2.84-.543 3.91-1.613c1.123-1.123 1.707-2.854 1.551-4.494l8.564-8.564a3.123 3.123 0 0 0-.002-4.414c-1.178-1.18-3.234-1.18-4.412 0l-8.884 8.884c-1.913.169-3.807 1.521-3.807 3.919c0 .303.021.588.042.86c.08 1.031.109 1.418-1.471 2.208a1 1 0 0 0-.122 1.717C2.52 20.563 4.623 22 7.061 22q-.002 0 0 0M18.086 4.328a1.144 1.144 0 0 1 1.586.002a1.12 1.12 0 0 1 0 1.584L12 13.586L10.414 12zM6.018 16.423c-.018-.224-.037-.458-.037-.706c0-1.545 1.445-1.953 2.21-1.953c.356 0 .699.073.964.206c.945.475 1.26 1.293 1.357 1.896c.177 1.09-.217 2.368-.956 3.107C8.865 19.664 8.049 20 7.061 20H7.06c-.75 0-1.479-.196-2.074-.427c1.082-.973 1.121-1.989 1.032-3.15"></svg:path>`,
})
export class BxPaintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPaintRollIcon],svg[bx-paint-roll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H7c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2h11c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M7 7V4h11l.002 3z"></svg:path><svg:path fill="currentColor" d="M13 15v-2c0-1.103-.897-2-2-2H4V5c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h7v2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1"></svg:path>`,
})
export class BxPaintRollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPaletteIcon],svg[bx-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.4 2.096a10.08 10.08 0 0 0-8.937 3.331A10.05 10.05 0 0 0 2.096 13.4c.53 3.894 3.458 7.207 7.285 8.246a10 10 0 0 0 2.618.354l.142-.001a3 3 0 0 0 2.516-1.426a2.99 2.99 0 0 0 .153-2.879l-.199-.416a1.92 1.92 0 0 1 .094-1.912a2.004 2.004 0 0 1 2.576-.755l.412.197c.412.198.85.299 1.301.299A3.02 3.02 0 0 0 22 12.14a10 10 0 0 0-.353-2.76c-1.04-3.826-4.353-6.754-8.247-7.284m5.158 10.909l-.412-.197c-1.828-.878-4.07-.198-5.135 1.494c-.738 1.176-.813 2.576-.204 3.842l.199.416a.98.98 0 0 1-.051.961a.99.99 0 0 1-.844.479h-.112a8 8 0 0 1-2.095-.283c-3.063-.831-5.403-3.479-5.826-6.586c-.321-2.355.352-4.623 1.893-6.389a8 8 0 0 1 7.16-2.664c3.107.423 5.755 2.764 6.586 5.826c.198.73.293 1.474.282 2.207c-.012.807-.845 1.183-1.441.894"></svg:path><svg:circle cx="7.5" cy="14.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="7.5" cy="10.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="10.5" cy="7.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="14.5" cy="7.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxPaletteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPaperPlaneIcon],svg[bx-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.56 3.34a1 1 0 0 0-1-.08l-17 8a1 1 0 0 0-.57.92a1 1 0 0 0 .6.9L8 15.45v6.72L13.84 18l4.76 2.08a.9.9 0 0 0 .4.09a1 1 0 0 0 .52-.15a1 1 0 0 0 .48-.79l1-15a1 1 0 0 0-.44-.89M18.1 17.68l-5.27-2.31L16 9.17l-7.65 4.25l-2.93-1.29l13.47-6.34Z"></svg:path>`,
})
export class BxPaperPlaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPaperclipIcon],svg[bx-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.004 5H9c-1.838 0-3.586.737-4.924 2.076S2 10.163 2 12s.737 3.586 2.076 4.924S7.162 19 9 19h8v-2H9c-1.303 0-2.55-.529-3.51-1.49C4.529 14.55 4 13.303 4 12s.529-2.549 1.49-3.51C6.45 7.529 7.697 7 9 7h8V6l.001 1h.003c.79 0 1.539.314 2.109.886c.571.571.886 1.322.887 2.116a2.97 2.97 0 0 1-.884 2.11A3 3 0 0 1 17 13H9a1 1 0 0 1-.698-.3A1 1 0 0 1 8 12c0-.252.11-.507.301-.698A1 1 0 0 1 9 11h8V9H9c-.79 0-1.541.315-2.114.889C6.314 10.461 6 11.211 6 12s.314 1.54.888 2.114A2.97 2.97 0 0 0 9 15h8.001a4.97 4.97 0 0 0 3.528-1.473a4.967 4.967 0 0 0-.001-7.055A4.95 4.95 0 0 0 17.004 5"></svg:path>`,
})
export class BxPaperclipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxParagraphIcon],svg[bx-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16h2v4h2V6h2v14h2V6h3V4H9c-3.309 0-6 2.691-6 6s2.691 6 6 6M9 6h2v8H9c-2.206 0-4-1.794-4-4s1.794-4 4-4"></svg:path>`,
})
export class BxParagraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPartyIcon],svg[bx-party-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8.31c-.36-.41-.73-.82-1.12-1.21l-.29-.27l.14-.12a3.15 3.15 0 0 0 .9-3.49A3.91 3.91 0 0 0 14 1v2a2 2 0 0 1 1.76 1c.17.4 0 .84-.47 1.31c-.07.08-.15.13-.22.2c-3-2.41-6.29-3.77-7.9-2.16a2.2 2.2 0 0 0-.41.59v.1l-.18.53l-4.41 13.1A3.28 3.28 0 0 0 5.28 22a3.2 3.2 0 0 0 1-.17L20 17.28a1 1 0 0 0 .43-.31l.21-.18c1.43-1.44.51-4.21-1.41-6.9A6.63 6.63 0 0 1 23 9V7a8.44 8.44 0 0 0-5 1.31M5.7 19.93a1.29 1.29 0 0 1-1.63-1.63l1.36-4.1a10.7 10.7 0 0 0 4.29 4.39zm7-2.33a8.87 8.87 0 0 1-6.3-6.29l1-3l.06.09c.11.22.25.45.39.68s.16.29.26.44s.33.48.51.73s.19.28.3.42s.43.55.66.82l.29.35c.34.39.7.77 1.08 1.16s.68.64 1 1l.33.28l.78.63l.37.28c.28.2.55.4.83.58l.31.2c.36.22.72.43 1.07.61h.05zm6.51-2.23h-.06c-.69.38-3.56-.57-6.79-3.81c-.34-.34-.66-.67-.95-1l-.29-.35l-.53-.64l-.29-.4c-.13-.19-.27-.37-.39-.55l-.26-.42l-.29-.47c-.08-.14-.14-.27-.21-.4s-.15-.26-.21-.4a3 3 0 0 1-.14-.36c-.05-.13-.11-.26-.15-.38S8.6 6 8.57 5.88s-.05-.22-.07-.32a2 2 0 0 1 0-.26a1 1 0 0 1 0-.24l.11-.31c.36-.36 2.23 0 4.73 1.9A4.1 4.1 0 0 1 12 7v2a6.45 6.45 0 0 0 3-.94l.48.46c.42.42.81.85 1.18 1.28a5.32 5.32 0 0 0-.6 3.4l2-.39a3.6 3.6 0 0 1 0-1.12a11 11 0 0 1 .81 1.45c.56 1.32.52 2.06.34 2.23"></svg:path>`,
})
export class BxPartyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPasteIcon],svg[bx-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11V5c0-1.103-.897-2-2-2h-3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H4c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h7c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-7c0-1.103-.897-2-2-2m-9 2v5H4V5h3v2h8V5h3v6h-5c-1.103 0-2 .897-2 2m2 7v-7h7l.001 7z"></svg:path>`,
})
export class BxPasteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPauseIcon],svg[bx-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7h3v10H8zm5 0h3v10h-3z"></svg:path>`,
})
export class BxPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPauseCircleIcon],svg[bx-pause-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M13 9h2v6h-2zM9 9h2v6H9z"></svg:path>`,
})
export class BxPauseCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPenIcon],svg[bx-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.404 2.998c-.757-.754-2.077-.751-2.828.005l-1.784 1.791L11.586 7H7a1 1 0 0 0-.939.658l-4 11c-.133.365-.042.774.232 1.049l2 2a1 1 0 0 0 1.049.232l11-4A1 1 0 0 0 17 17v-4.586l2.207-2.207v-.001h.001L21 8.409c.378-.378.586-.881.585-1.415c0-.535-.209-1.038-.588-1.415zm-3.111 8.295A1 1 0 0 0 15 12v4.3l-9.249 3.363l4.671-4.671c.026.001.052.008.078.008A1.5 1.5 0 1 0 9 13.5c0 .026.007.052.008.078l-4.671 4.671L7.7 9H12c.266 0 .52-.105.707-.293L14.5 6.914L17.086 9.5zm3.206-3.208l-2.586-2.586l1.079-1.084l2.593 2.581z"></svg:path>`,
})
export class BxPenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPencilIcon],svg[bx-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21a1 1 0 0 0 .24 0l4-1a1 1 0 0 0 .47-.26L21 7.41a2 2 0 0 0 0-2.82L19.42 3a2 2 0 0 0-2.83 0L4.3 15.29a1.06 1.06 0 0 0-.27.47l-1 4A1 1 0 0 0 3.76 21A1 1 0 0 0 4 21M18 4.41L19.59 6L18 7.59L16.42 6zM5.91 16.51L15 7.41L16.59 9l-9.1 9.1l-2.11.52z"></svg:path>`,
})
export class BxPencilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPhoneIcon],svg[bx-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.707 12.293a1 1 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435c.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a1 1 0 0 0 0-1.414zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712c-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414L9.586 7L8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.99.99 0 0 0 .912-.271L17 14.414L19.586 17z"></svg:path>`,
})
export class BxPhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPhoneCallIcon],svg[bx-phone-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59a7.6 7.6 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43A15.28 15.28 0 0 0 6.3 17.7A15.28 15.28 0 0 0 16.57 22M6 5.41L8.59 8L7.3 9.29a1 1 0 0 0-.3.91a10.1 10.1 0 0 0 2.3 4.5a10.1 10.1 0 0 0 4.5 2.3a1 1 0 0 0 .91-.27L16 15.41L18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7"></svg:path><svg:path fill="currentColor" d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></svg:path>`,
})
export class BxPhoneCallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPhoneIncomingIcon],svg[bx-phone-incoming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.712 13.288a1 1 0 0 0-1.414 0l-1.597 1.596c-.824-.245-2.166-.771-2.99-1.596c-.874-.874-1.374-2.253-1.594-2.992l1.594-1.594a1 1 0 0 0 0-1.414l-4-4a1.03 1.03 0 0 0-1.414 0l-2.709 2.71c-.382.38-.597.904-.588 1.437c.022 1.423.396 6.367 4.297 10.268C10.195 21.6 15.142 21.977 16.566 22h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a1 1 0 0 0 0-1.414zM16.585 20c-1.248-.021-5.518-.356-8.874-3.712C4.343 12.92 4.019 8.636 4 7.414l2.004-2.005L8.59 7.995L7.297 9.288c-.238.238-.34.582-.271.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a1 1 0 0 0 .912-.271l1.293-1.293l2.586 2.586z"></svg:path><svg:path fill="currentColor" d="M15.795 6.791L13.005 4v6.995H20l-2.791-2.79l4.503-4.503l-1.414-1.414z"></svg:path>`,
})
export class BxPhoneIncomingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPhoneOffIcon],svg[bx-phone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.09 12.5a9 9 0 0 1-1-2.2l1.59-1.59a1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.44A15.44 15.44 0 0 0 5.62 17L2.3 20.29l1.41 1.42l18-18l-1.41-1.42zM7 15.55a13.36 13.36 0 0 1-3-8.13l2-2L8.59 8L7.3 9.29a1 1 0 0 0-.27.92a11 11 0 0 0 1.62 3.73zm9.71-2.26a1 1 0 0 0-1.41 0l-1.6 1.6l-.34-.12l-1.56 1.55a12 12 0 0 0 2 .66a1 1 0 0 0 .91-.27l1.3-1.3L18.59 18l-2 2A13.6 13.6 0 0 1 10 18.1l-1.43 1.45a15.63 15.63 0 0 0 8 2.45a2 2 0 0 0 1.43-.58l2.71-2.71a1 1 0 0 0 0-1.42z"></svg:path>`,
})
export class BxPhoneOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPhoneOutgoingIcon],svg[bx-phone-outgoing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.712 13.288a1 1 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 0L2.586 6c-.38.38-.594.902-.586 1.435c.023 1.424.4 6.37 4.298 10.268S15.142 21.977 16.566 22h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a1 1 0 0 0 0-1.414zM16.585 20c-1.248-.021-5.518-.356-8.873-3.712C4.346 12.922 4.02 8.637 4 7.414l2.005-2.005l2.586 2.586l-1.293 1.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a1 1 0 0 0 .912-.271l1.293-1.293l2.586 2.586z"></svg:path><svg:path fill="currentColor" d="m16.795 5.791l-4.497 4.497l1.414 1.414l4.497-4.497L21.005 10V2.995H14z"></svg:path>`,
})
export class BxPhoneOutgoingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPhotoAlbumIcon],svg[bx-photo-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.024 11.536L10 10l-2 3h9l-3.5-5z"></svg:path><svg:circle cx="9.503" cy="7.497" r="1.503" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2m0 14H5V5c0-.806.55-.988 1-1h13z"></svg:path>`,
})
export class BxPhotoAlbumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPieChartIcon],svg[bx-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M12 5.166V12h6.834A6.817 6.817 0 0 0 12 5.166"></svg:path>`,
})
export class BxPieChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPieChartAltIcon],svg[bx-pie-chart-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a9.94 9.94 0 0 0-7.071 2.929C3.04 6.818 2 9.33 2 12s1.04 5.182 2.929 7.071S9.33 22 12 22s5.182-1.04 7.071-2.929S22 14.67 22 12s-1.04-5.182-2.929-7.071A9.94 9.94 0 0 0 12 2m5.657 15.657C16.146 19.168 14.137 20 12 20s-4.146-.832-5.657-2.343S4 14.137 4 12s.832-4.146 2.343-5.657A7.93 7.93 0 0 1 11 4.069V12a1 1 0 0 0 1 1h7.931a7.93 7.93 0 0 1-2.274 4.657M13 11V4.062a7.95 7.95 0 0 1 4.657 2.281A7.93 7.93 0 0 1 19.938 11z"></svg:path>`,
})
export class BxPieChartAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPieChartAlt2Icon],svg[bx-pie-chart-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m7.931 9H13V4.069A8.01 8.01 0 0 1 19.931 11M4 12c0-4.072 3.061-7.436 7-7.931V12a1 1 0 0 0 .111.438c.015.03.022.063.041.093l4.202 6.723A7.95 7.95 0 0 1 12 20c-4.411 0-8-3.589-8-8m13.052 6.196L13.805 13h6.126a8 8 0 0 1-2.879 5.196"></svg:path>`,
})
export class BxPieChartAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPinIcon],svg[bx-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 22l1-2v-3h5a1 1 0 0 0 1-1v-1.586c0-.526-.214-1.042-.586-1.414L17 11.586V8a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2v3a1 1 0 0 0 1 1v3.586L5.586 13A2 2 0 0 0 5 14.414V16a1 1 0 0 0 1 1h5v3zM8 4h8v2H8zM7 14.414l1.707-1.707A1 1 0 0 0 9 12V8h6v4c0 .266.105.52.293.707L17 14.414V15H7z"></svg:path>`,
})
export class BxPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPlanetIcon],svg[bx-planet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.76 20.2a2.73 2.73 0 0 0 2.15.85a8.9 8.9 0 0 0 3.37-.86a9 9 0 0 0 12.27-10.9c1.31-2.23 1.75-4.26.67-5.48a2.94 2.94 0 0 0-2.57-1A5 5 0 0 0 16.1 4A9 9 0 0 0 3.58 15.14c-1.06 1.21-2.05 3.68-.82 5.06m1.5-1.32c-.22-.25 0-1.07.37-1.76a9.3 9.3 0 0 0 1.57 1.74c-1.03.3-1.71.28-1.94.02m14.51-5.17A7 7 0 0 1 15.58 18A7.1 7.1 0 0 1 12 19a6.4 6.4 0 0 1-1.24-.13a30.7 30.7 0 0 0 4.42-3.29a31.5 31.5 0 0 0 3.8-4a6.9 6.9 0 0 1-.21 2.13m.09-8.89a.94.94 0 0 1 .87.32c.23.26.16.94-.26 1.93a9.2 9.2 0 0 0-1.61-1.86a2.5 2.5 0 0 1 1-.39M5.22 10.31A6.94 6.94 0 0 1 8.41 6A7 7 0 0 1 12 5a6.9 6.9 0 0 1 6 3.41a5 5 0 0 1 .35.66a27.4 27.4 0 0 1-4.49 5A27.4 27.4 0 0 1 8.35 18a7 7 0 0 1-3.13-7.65z"></svg:path>`,
})
export class BxPlanetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPlayIcon],svg[bx-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6v12l10-6z"></svg:path>`,
})
export class BxPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPlayCircleIcon],svg[bx-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="m9 17l8-5l-8-5z"></svg:path>`,
})
export class BxPlayCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPlugIcon],svg[bx-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8h2v5c0 2.206 1.794 4 4 4h2v5h2v-5h2c2.206 0 4-1.794 4-4V8h2V6H3zm4 0h10v5c0 1.103-.897 2-2 2H9c-1.103 0-2-.897-2-2zm0-6h2v3H7zm8 0h2v3h-2z"></svg:path>`,
})
export class BxPlugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPlusIcon],svg[bx-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></svg:path>`,
})
export class BxPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPlusCircleIcon],svg[bx-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"></svg:path><svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path>`,
})
export class BxPlusCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPlusMedicalIcon],svg[bx-plus-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z"></svg:path>`,
})
export class BxPlusMedicalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPodcastIcon],svg[bx-podcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12.01" cy="12" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M11.01 22h2l.5-7h-3z"></svg:path><svg:path fill="currentColor" d="M12 2a10 10 0 0 0-2.45 19.68l-.15-2.12a8 8 0 1 1 5.21 0l-.15 2.12A10 10 0 0 0 12 2"></svg:path><svg:path fill="currentColor" d="M15.32 9.61a3.4 3.4 0 0 1 .37.68a4 4 0 0 1 .23.75a3.6 3.6 0 0 1 .09.8a3.7 3.7 0 0 1-.09.81a4 4 0 0 1-.23.75a3.4 3.4 0 0 1-.37.68a5 5 0 0 1-.35.43l-.19 2.62a5 5 0 0 0 .58-.31A5.9 5.9 0 0 0 17 15.2a5.6 5.6 0 0 0 .55-1a6 6 0 0 0 .35-1.13a6 6 0 0 0 .1-1.23a6.2 6.2 0 0 0-.13-1.21A6.1 6.1 0 0 0 17 8.49a6.3 6.3 0 0 0-.73-.89a5.7 5.7 0 0 0-.89-.73a6.3 6.3 0 0 0-1-.56A6 6 0 0 0 13.21 6a6.1 6.1 0 0 0-2.41 0a5.5 5.5 0 0 0-1.13.36a5.6 5.6 0 0 0-1 .55a5.7 5.7 0 0 0-.89.73a6.3 6.3 0 0 0-.78.85a6.1 6.1 0 0 0-.9 2.14a6 6 0 0 0-.1 1.21a6 6 0 0 0 .12 1.21a6 6 0 0 0 .35 1.13a5.6 5.6 0 0 0 .55 1a6.2 6.2 0 0 0 1.62 1.62a5 5 0 0 0 .58.31L9 14.51a5 5 0 0 1-.35-.43a3.4 3.4 0 0 1-.37-.68a4 4 0 0 1-.23-.75a3.7 3.7 0 0 1-.05-.81a3.6 3.6 0 0 1 .08-.8a4 4 0 0 1 .23-.75a3.4 3.4 0 0 1 .37-.68a4 4 0 0 1 .5-.61a4 4 0 0 1 .59-.48a3.4 3.4 0 0 1 .68-.37a4 4 0 0 1 .75-.24a4.4 4.4 0 0 1 1.61 0a4 4 0 0 1 .75.24a3.6 3.6 0 0 1 1.27.85a3.5 3.5 0 0 1 .49.61"></svg:path>`,
})
export class BxPodcastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPointerIcon],svg[bx-pointer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.978 13.21a1 1 0 0 0-.396-1.024l-14-10a.999.999 0 0 0-1.575.931l2 17a1 1 0 0 0 1.767.516l3.612-4.416l3.377 5.46l1.701-1.052l-3.357-5.428l6.089-1.218a1 1 0 0 0 .782-.769m-8.674.31a1 1 0 0 0-.578.347l-3.008 3.677L7.257 5.127l10.283 7.345z"></svg:path>`,
})
export class BxPointerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPollIcon],svg[bx-poll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11h7v2H7zm0-4h10.97v2H7zm0 8h13v2H7zM4 4h2v16H4z"></svg:path>`,
})
export class BxPollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPolygonIcon],svg[bx-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.707 2.293A1 1 0 0 0 16 2H8a1 1 0 0 0-.707.293l-5 5A1 1 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A1 1 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A1 1 0 0 0 22 16V8a1 1 0 0 0-.293-.707zM20 15.586L15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414z"></svg:path>`,
})
export class BxPolygonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPopsicleIcon],svg[bx-popsicle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2a7 7 0 0 0-4.94 2l-7.78 7.82a1 1 0 0 0 0 1.41l3.54 3.54l-3.54 3.53l1.42 1.42l3.53-3.54l3.54 3.54a1 1 0 0 0 1.41 0L20 13.94A7 7 0 0 0 15 2m3.54 10.54l-7.07 7.06l-2.82-2.83l-1.42-1.42l-2.83-2.83l7.07-7.07a5 5 0 0 1 7.08 7.08z"></svg:path>`,
})
export class BxPopsicleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPoundIcon],svg[bx-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.553 19.105l.764 1.843C7.498 20.555 9.422 20 10 20c.838 0 1.462.208 2.184.448c.775.259 1.654.552 2.816.552c1.177 0 3.078-.921 3.447-1.105l-.895-1.789c-.721.36-2.031.894-2.552.894c-.838 0-1.462-.208-2.184-.448C12.041 18.293 11.162 18 10 18c-.229 0-.526.037-.857.099C9.702 16.95 10 15.561 10 14h3v-2H9.626c-.042-.107-.084-.216-.125-.317C9.243 11.052 9 10.455 9 9c0-1.369.521-3 3-3c2.224 0 3.021 2.227 3.052 2.316l1.896-.633C16.898 7.533 15.679 4 12 4C8.313 4 7 6.583 7 9c0 1.491.234 2.35.478 3H5v2h3c0 2.467-.892 4.328-2.447 5.105"></svg:path>`,
})
export class BxPoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPowerOffIcon],svg[bx-power-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21c4.411 0 8-3.589 8-8c0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a6 6 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8"></svg:path><svg:path fill="currentColor" d="M11 2h2v10h-2z"></svg:path>`,
})
export class BxPowerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPrinterIcon],svg[bx-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h-1V2H6v5H5c-1.654 0-3 1.346-3 3v7c0 1.103.897 2 2 2h2v3h12v-3h2c1.103 0 2-.897 2-2v-7c0-1.654-1.346-3-3-3M8 4h8v3H8zm8 16H8v-4h8zm4-3h-2v-3H6v3H4v-7c0-.551.449-1 1-1h14c.552 0 1 .449 1 1z"></svg:path><svg:path fill="currentColor" d="M14 10h4v2h-4z"></svg:path>`,
})
export class BxPrinterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPulseIcon],svg[bx-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.97 4.757a.999.999 0 0 0-1.918-.073l-3.186 9.554l-2.952-6.644a1.002 1.002 0 0 0-1.843.034L5.323 12H2v2h3.323c.823 0 1.552-.494 1.856-1.257l.869-2.172l3.037 6.835c.162.363.521.594.915.594l.048-.001a1 1 0 0 0 .9-.683l2.914-8.742l.979 3.911A1.995 1.995 0 0 0 18.781 14H22v-2h-3.22z"></svg:path>`,
})
export class BxPulseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPurchaseTagIcon],svg[bx-purchase-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.707 3.293A1 1 0 0 0 13 3H4a1 1 0 0 0-1 1v9c0 .266.105.52.293.707l8 8a.997.997 0 0 0 1.414 0l9-9a1 1 0 0 0 0-1.414zM12 19.586l-7-7V5h7.586l7 7z"></svg:path><svg:circle cx="8.496" cy="8.495" r="1.505" fill="currentColor"></svg:circle>`,
})
export class BxPurchaseTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPurchaseTagAltIcon],svg[bx-purchase-tag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.707 2.293A1 1 0 0 0 11 2H6a1 1 0 0 0-.707.293l-3 3A1 1 0 0 0 2 6v5c0 .266.105.52.293.707l10 10a.997.997 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414zM13 19.586l-9-9V6.414L6.414 4h4.172l9 9z"></svg:path><svg:circle cx="8.353" cy="8.353" r="1.647" fill="currentColor"></svg:circle>`,
})
export class BxPurchaseTagAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxPyramidIcon],svg[bx-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.445 21.832a1 1 0 0 0 1.11 0l9-6A1 1 0 0 0 21.8 14.4l-9-12c-.377-.504-1.223-.504-1.6 0l-9 12a1 1 0 0 0 .245 1.432zM13 19.131V6l6.565 8.754zM11 6v13.131l-6.565-4.377z"></svg:path>`,
})
export class BxPyramidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxQrIcon],svg[bx-qr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11h8V3H3zm2-6h4v4H5zM3 21h8v-8H3zm2-6h4v4H5zm8-12v8h8V3zm6 6h-4V5h4zm-5.99 4h2v2h-2zm2 2h2v2h-2zm-2 2h2v2h-2zm4 0h2v2h-2zm2 2h2v2h-2zm-4 0h2v2h-2zm2-6h2v2h-2zm2 2h2v2h-2z"></svg:path>`,
})
export class BxQrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxQrScanIcon],svg[bx-qr-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h4.01V2H2v6h2zm0 12H2v6h6.01v-2H4zm16 4h-4v2h6v-6h-2zM16 4h4v4h2V2h-6z"></svg:path><svg:path fill="currentColor" d="M5 11h6V5H5zm2-4h2v2H7zM5 19h6v-6H5zm2-4h2v2H7zM19 5h-6v6h6zm-2 4h-2V7h2zm-3.99 4h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2z"></svg:path>`,
})
export class BxQrScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxQuestionMarkIcon],svg[bx-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255c-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284c.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5m-1 14h2v2h-2z"></svg:path>`,
})
export class BxQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRadarIcon],svg[bx-radar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.579 2 2 6.58 2 12s4.579 10 10 10s10-4.58 10-10S17.421 2 12 2m0 18c-4.337 0-8-3.664-8-8c0-3.998 3.115-7.417 7-7.927V6.09C8.167 6.569 6 9.033 6 12c0 3.309 2.691 6 6 6c1.595 0 3.1-.626 4.237-1.763l-1.414-1.415A3.97 3.97 0 0 1 12 16c-2.206 0-4-1.794-4-4c0-1.858 1.279-3.411 3-3.858v2.146c-.59.353-1 .993-1 1.712c0 1.081.919 2 2 2s2-.919 2-2c0-.719-.41-1.359-1-1.712V4.073c3.885.51 7 3.929 7 7.927c0 4.336-3.663 8-8 8"></svg:path>`,
})
export class BxRadarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRadioIcon],svg[bx-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.25 5.025l-7.898-2.962l-.703 1.873L14.484 5H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.018-.767-1.85-1.75-1.975M4 19v-7h16v-2H4V7h16l.001 12z"></svg:path><svg:circle cx="16.5" cy="15.5" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M6 15h4.999v2H6z"></svg:path>`,
})
export class BxRadioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRadioCircleIcon],svg[bx-radio-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12c0 3.859 3.14 7 7 7s7-3.141 7-7s-3.141-7-7-7s-7 3.141-7 7m12 0c0 2.757-2.243 5-5 5s-5-2.243-5-5s2.243-5 5-5s5 2.243 5 5"></svg:path>`,
})
export class BxRadioCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRadioCircleMarkedIcon],svg[bx-radio-circle-marked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7s7-3.141 7-7s-3.141-7-7-7m0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5s5 2.243 5 5s-2.243 5-5 5"></svg:path><svg:path fill="currentColor" d="M12 9c-1.627 0-3 1.373-3 3s1.373 3 3 3s3-1.373 3-3s-1.373-3-3-3"></svg:path>`,
})
export class BxRadioCircleMarkedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxReceiptIcon],svg[bx-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11h-3V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6a1 1 0 0 0-1-1M5 19a1 1 0 0 1-1-1V5h12v13c0 .351.061.688.171 1zm15-1a1 1 0 0 1-2 0v-5h2z"></svg:path><svg:path fill="currentColor" d="M6 7h8v2H6zm0 4h8v2H6zm5 4h3v2h-3z"></svg:path>`,
})
export class BxReceiptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRectangleIcon],svg[bx-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M4 19V5h16l.001 14z"></svg:path>`,
})
export class BxRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRecycleIcon],svg[bx-recycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.224 15.543l-.813-1.464l-1.748.972l.812 1.461q.072.128.104.264a1 1 0 0 1-.014.5a1 1 0 0 1-.104.235a1 1 0 0 1-.347.352a1 1 0 0 1-.513.137H14v-2l-4 3l4 3v-2h4.601c.278 0 .552-.037.811-.109a2.95 2.95 0 0 0 1.319-.776c.178-.179.332-.38.456-.593a3 3 0 0 0 .336-2.215a3.2 3.2 0 0 0-.299-.764M5.862 11.039l-2.31 4.62a3 3 0 0 0-.261.755a3 3 0 0 0 .851 2.735q.267.262.595.453A3 3 0 0 0 6.236 20H8v-2H6.236a1 1 0 0 1-.5-.13a1 1 0 0 1-.353-.349a1 1 0 0 1-.149-.468a1 1 0 0 1 .018-.245q.027-.131.089-.256l2.256-4.512l1.599.923L8.598 8L4 9.964zm12.736 1.925L19.196 8l-1.638.945l-2.843-5.117a2.95 2.95 0 0 0-1.913-1.459a3.2 3.2 0 0 0-.772-.083a3 3 0 0 0-1.498.433A2.97 2.97 0 0 0 9.41 3.944l-.732 1.464l1.789.895l.732-1.465q.068-.135.166-.242a.93.93 0 0 1 .443-.27a1.05 1.05 0 0 1 .53-.011a.96.96 0 0 1 .63.485l2.858 5.146L14 11z"></svg:path>`,
})
export class BxRecycleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRedoIcon],svg[bx-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18h3v-2H9c-1.654 0-3-1.346-3-3s1.346-3 3-3h6v3l5-4l-5-4v3H9c-2.757 0-5 2.243-5 5s2.243 5 5 5"></svg:path>`,
})
export class BxRedoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxReflectHorizontalIcon],svg[bx-reflect-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21h12l-6-6zM18 3H6l6 6zM3 11h3v2H3zm5 0h3v2H8zm5 0h3v2h-3zm5 0h3v2h-3z"></svg:path>`,
})
export class BxReflectHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxReflectVerticalIcon],svg[bx-reflect-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 18l6-6l-6-6zm12-6l6 6V6zm-4-9h2v3h-2zm0 5h2v3h-2zm0 5h2v3h-2zm0 5h2v3h-2z"></svg:path>`,
})
export class BxReflectVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRefreshIcon],svg[bx-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11H7.101l.001-.009a5 5 0 0 1 .752-1.787a5.05 5.05 0 0 1 2.2-1.811q.455-.193.938-.291a5.1 5.1 0 0 1 2.018 0a5 5 0 0 1 2.525 1.361l1.416-1.412a7 7 0 0 0-2.224-1.501a7 7 0 0 0-1.315-.408a7.1 7.1 0 0 0-2.819 0a7 7 0 0 0-1.316.409a7.04 7.04 0 0 0-3.08 2.534a7 7 0 0 0-1.054 2.505c-.028.135-.043.273-.063.41H2l4 4zm4 2h2.899l-.001.008a4.98 4.98 0 0 1-2.103 3.138a4.9 4.9 0 0 1-1.787.752a5.1 5.1 0 0 1-2.017 0a5 5 0 0 1-1.787-.752a5 5 0 0 1-.74-.61L7.05 16.95a7 7 0 0 0 2.225 1.5c.424.18.867.317 1.315.408a7.1 7.1 0 0 0 2.818 0a7.03 7.03 0 0 0 4.395-2.945a7 7 0 0 0 1.053-2.503c.027-.135.043-.273.063-.41H22l-4-4z"></svg:path>`,
})
export class BxRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRegisteredIcon],svg[bx-registered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.14 2a10 10 0 1 0 10 10a10 10 0 0 0-10-10m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path><svg:path fill="currentColor" d="M16.14 10a3 3 0 0 0-3-3h-5v10h2v-4h1.46l2.67 4h2.4l-2.75-4.12A3 3 0 0 0 16.14 10m-3 1h-3V9h3a1 1 0 0 1 0 2"></svg:path>`,
})
export class BxRegisteredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRenameIcon],svg[bx-rename-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.005 5.995h-1v2h1v8h-1v2h1c1.103 0 2-.897 2-2v-8c0-1.102-.898-2-2-2m-14 4H15v4H6.005z"></svg:path><svg:path fill="currentColor" d="M17.005 17.995V4H20V2h-8v2h3.005v1.995h-11c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h11V20H12v2h8v-2h-2.995zm-13-2v-8h11v8z"></svg:path>`,
})
export class BxRenameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRepeatIcon],svg[bx-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-5v2h4v9H4V8h5v3l5-4l-5-4v3H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class BxRepeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxReplyIcon],svg[bx-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11h6v7h2v-8a1 1 0 0 0-1-1h-7V6l-5 4l5 4z"></svg:path>`,
})
export class BxReplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxReplyAllIcon],svg[bx-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18v-8a1 1 0 0 0-1-1h-6V6l-5 4l5 4v-3h5v7z"></svg:path><svg:path fill="currentColor" d="M9 12.4L6 10l3-2.4V6l-5 4l5 4z"></svg:path>`,
})
export class BxReplyAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRepostIcon],svg[bx-repost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7a1 1 0 0 0-1-1h-8v2h7v5h-3l3.969 5L22 13h-3zM5 17a1 1 0 0 0 1 1h8v-2H7v-5h3L6 6l-4 5h3z"></svg:path>`,
})
export class BxRepostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxResetIcon],svg[bx-reset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3s-3 1.331-3 3s1.329 3 3 3"></svg:path><svg:path fill="currentColor" d="M20.817 11.186a8.9 8.9 0 0 0-1.355-3.219a9 9 0 0 0-2.43-2.43a9 9 0 0 0-3.219-1.355a9 9 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a7 7 0 0 1 2.502 1.053a7 7 0 0 1 1.892 1.892A6.97 6.97 0 0 1 19 13a7 7 0 0 1-.55 2.725a7 7 0 0 1-.644 1.188a7 7 0 0 1-.858 1.039a7.03 7.03 0 0 1-3.536 1.907a7.1 7.1 0 0 1-2.822 0a7 7 0 0 1-2.503-1.054a7 7 0 0 1-1.89-1.89A7 7 0 0 1 5 13H3a9 9 0 0 0 1.539 5.034a9.1 9.1 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9 9 0 0 0 1.814-.183a9 9 0 0 0 3.218-1.355a9 9 0 0 0 1.331-1.099a9 9 0 0 0 1.1-1.332A8.95 8.95 0 0 0 21 13a9 9 0 0 0-.183-1.814"></svg:path>`,
})
export class BxResetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRestaurantIcon],svg[bx-restaurant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10h-2V3H8v7H6V3H4v8c0 1.654 1.346 3 3 3h1v7h2v-7h1c1.654 0 3-1.346 3-3V3h-2zm7-7h-1c-1.159 0-2 1.262-2 3v8h2v7h2V4a1 1 0 0 0-1-1"></svg:path>`,
})
export class BxRestaurantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRevisionIcon],svg[bx-revision-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.89 10.105a8.7 8.7 0 0 0-.789-1.456l-1.658 1.119a6.6 6.6 0 0 1 .987 2.345a6.7 6.7 0 0 1 0 2.648a6.5 6.5 0 0 1-.384 1.231a6.4 6.4 0 0 1-.603 1.112a6.7 6.7 0 0 1-1.776 1.775a6.6 6.6 0 0 1-2.343.987a6.7 6.7 0 0 1-2.646 0a6.55 6.55 0 0 1-3.317-1.788a6.6 6.6 0 0 1-1.408-2.088a6.6 6.6 0 0 1-.382-1.23a6.63 6.63 0 0 1 .382-3.877A6.6 6.6 0 0 1 7.36 8.797A6.6 6.6 0 0 1 9.446 7.39c.395-.167.81-.296 1.23-.382c.107-.022.216-.032.324-.049V10l5-4l-5-4v2.938a9 9 0 0 0-.725.111a8.5 8.5 0 0 0-3.063 1.29A8.566 8.566 0 0 0 4.11 16.77a8.5 8.5 0 0 0 1.835 2.724a8.6 8.6 0 0 0 2.721 1.833a8.55 8.55 0 0 0 5.061.499a8.58 8.58 0 0 0 6.162-5.056c.22-.52.389-1.061.5-1.608a8.6 8.6 0 0 0 0-3.45a8.7 8.7 0 0 0-.499-1.607"></svg:path>`,
})
export class BxRevisionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRewindIcon],svg[bx-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12V7l-7 5l7 5zm7-5l-7 5l7 5z"></svg:path>`,
})
export class BxRewindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRewindCircleIcon],svg[bx-rewind-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M11 16V8l-5 4zm6 0V8l-5 4z"></svg:path>`,
})
export class BxRewindCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRfidIcon],svg[bx-rfid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22h16a1 1 0 0 0 1-1v-8h-2v7H5V4h5V2H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1"></svg:path><svg:circle cx="12" cy="11" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 11h2a5 5 0 0 0-5-5v2a3 3 0 0 1 3 3"></svg:path><svg:path fill="currentColor" d="M19 11h2a9 9 0 0 0-9-9v2a7 7 0 0 1 7 7m-9.35 4.67a1 1 0 0 0-.14-.51a.76.76 0 0 0-.38-.31a2.3 2.3 0 0 0-.75-.09H7V18h.65v-1.35h.14a1.3 1.3 0 0 1 .33 0a.6.6 0 0 1 .19.14a5 5 0 0 1 .35.48l.47.7h.78l-.39-.63a3.6 3.6 0 0 0-.38-.53a1.3 1.3 0 0 0-.35-.27a1 1 0 0 0 .64-.3a.84.84 0 0 0 .22-.57m-.74.33a.4.4 0 0 1-.18.14a2.4 2.4 0 0 1-.59 0h-.49v-.82h1a.4.4 0 0 1 .25.13a.36.36 0 0 1 .09.26a.43.43 0 0 1-.08.29m2.01.62h1.36v-.54h-1.36v-.77h1.57v-.55h-2.22V18h.65zm2.09-1.86h.65V18h-.65zm3.09.06a2.5 2.5 0 0 0-.62-.06h-1.2V18h1.24a1.8 1.8 0 0 0 .57-.07a1.1 1.1 0 0 0 .46-.26a1.35 1.35 0 0 0 .35-.57a2 2 0 0 0 .1-.69a2.4 2.4 0 0 0-.11-.76a1.3 1.3 0 0 0-.31-.53a1.1 1.1 0 0 0-.48-.3m.16 2.18a.74.74 0 0 1-.17.31a.57.57 0 0 1-.27.13a1.8 1.8 0 0 1-.39 0h-.49v-2.13h.29a3 3 0 0 1 .54 0a.7.7 0 0 1 .3.15a.8.8 0 0 1 .19.32a2 2 0 0 1 .06.57a2.4 2.4 0 0 1-.06.65"></svg:path>`,
})
export class BxRfidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRightArrowIcon],svg[bx-right-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.536 21.886a1 1 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886M7 4.909L17.243 12L7 19.091z"></svg:path>`,
})
export class BxRightArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRightArrowAltIcon],svg[bx-right-arrow-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"></svg:path>`,
})
export class BxRightArrowAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRightArrowCircleIcon],svg[bx-right-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.999 1.993c-5.514.001-10 4.487-10 10.001s4.486 10 10.001 10c5.513 0 9.999-4.486 10-10s-4.486-10-10.001-10.001M12 19.994c-4.412 0-8.001-3.589-8.001-8s3.589-8 8-8.001C16.411 3.994 20 7.583 20 11.994c-.001 4.411-3.59 8-8 8"></svg:path><svg:path fill="currentColor" d="M12 10.994H8v2h4V16l4.005-4.005L12 7.991z"></svg:path>`,
})
export class BxRightArrowCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRightDownArrowCircleIcon],svg[bx-right-down-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.007a9.93 9.93 0 0 0-7.071 2.922c-3.899 3.899-3.899 10.243 0 14.143A9.93 9.93 0 0 0 12 21.995a9.93 9.93 0 0 0 7.071-2.923c3.899-3.899 3.899-10.243 0-14.143A9.93 9.93 0 0 0 12 2.007m5.657 15.65A7.95 7.95 0 0 1 12 19.994c-2.141 0-4.15-.83-5.657-2.337c-3.119-3.119-3.119-8.195 0-11.314A7.94 7.94 0 0 1 12 4.007c2.141 0 4.15.829 5.657 2.336c3.119 3.119 3.119 8.195 0 11.314"></svg:path><svg:path fill="currentColor" d="M9.661 8.247L8.247 9.661l3.214 3.214L9.336 15H15V9.337l-2.125 2.124z"></svg:path>`,
})
export class BxRightDownArrowCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRightIndentIcon],svg[bx-right-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15h10v2H10zm-6 4h16v2H4zm6-8h10v2H10zm0-4h10v2H10zM4 3h16v2H4zm0 5v8l4-4z"></svg:path>`,
})
export class BxRightIndentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRightTopArrowCircleIcon],svg[bx-right-top-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.006 2.007a9.93 9.93 0 0 0-7.071 2.922c-3.898 3.899-3.898 10.243 0 14.142c1.885 1.885 4.396 2.923 7.071 2.923s5.187-1.038 7.071-2.923c3.898-3.898 3.898-10.242 0-14.142a9.93 9.93 0 0 0-7.071-2.922m5.657 15.649c-1.507 1.507-3.517 2.337-5.657 2.337s-4.15-.83-5.657-2.337c-3.118-3.119-3.118-8.194 0-11.313c1.507-1.507 3.516-2.336 5.657-2.336s4.15.829 5.657 2.336c3.118 3.119 3.118 8.194 0 11.313"></svg:path><svg:path fill="currentColor" d="m11.467 11.125l-3.214 3.214l1.414 1.414l3.214-3.214l2.125 2.124V9H9.343z"></svg:path>`,
})
export class BxRightTopArrowCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRocketIcon],svg[bx-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.92 2.38A15.7 15.7 0 0 0 17.5 2a8.26 8.26 0 0 0-6 2.06Q9.89 5.67 8.31 7.27c-1.21-.13-4.08-.2-6 1.74a1 1 0 0 0 0 1.41l11.3 11.32a1 1 0 0 0 1.41 0c1.95-2 1.89-4.82 1.77-6l3.21-3.2c3.19-3.19 1.74-9.18 1.68-9.43a1 1 0 0 0-.76-.73m-2.36 8.75L15 14.67a1 1 0 0 0-.27.9a6.8 6.8 0 0 1-.54 3.94L4.52 9.82a6.67 6.67 0 0 1 4-.5A1 1 0 0 0 9.39 9s1.4-1.45 3.51-3.56A6.6 6.6 0 0 1 17.5 4a14.5 14.5 0 0 1 2.33.2c.24 1.43.62 5.04-1.27 6.93"></svg:path><svg:circle cx="15.73" cy="8.3" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M5 16c-2 1-2 5-2 5a7.8 7.8 0 0 0 5-2z"></svg:path>`,
})
export class BxRocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRotateLeftIcon],svg[bx-rotate-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.758 8.758L5.344 7.344a8.05 8.05 0 0 0-1.841 2.859l1.873.701a6.05 6.05 0 0 1 1.382-2.146M19 12.999a7.94 7.94 0 0 0-2.344-5.655A7.9 7.9 0 0 0 12 5.069V2L7 6l5 4V7.089a5.94 5.94 0 0 1 3.242 1.669A5.96 5.96 0 0 1 17 13v.002c0 .33-.033.655-.086.977l-.019.131a6.05 6.05 0 0 1-1.138 2.536c-.16.209-.331.412-.516.597a6 6 0 0 1-.728.613a5.9 5.9 0 0 1-2.277 1.015c-.142.03-.285.05-.43.069c-.062.009-.122.021-.184.027a6.1 6.1 0 0 1-1.898-.103L9.3 20.819a8.1 8.1 0 0 0 2.534.136c.069-.007.138-.021.207-.03q.308-.037.61-.098l.053-.009l-.001-.005a7.9 7.9 0 0 0 2.136-.795l.001.001l.028-.019a8 8 0 0 0 1.01-.67c.27-.209.532-.43.777-.675c.248-.247.47-.513.681-.785c.021-.028.049-.053.07-.081l-.006-.004a7.9 7.9 0 0 0 1.093-1.997l.008.003c.029-.078.05-.158.076-.237q.057-.165.107-.333q.058-.21.105-.423c.022-.099.048-.195.066-.295q.047-.257.076-.516c.01-.076.023-.15.03-.227q.036-.374.037-.753q.002-.003.002-.008M6.197 16.597l-1.6 1.201a8.05 8.05 0 0 0 2.569 2.225l.961-1.754a6 6 0 0 1-1.93-1.672M5 13q0-.217.015-.429l-1.994-.143a8 8 0 0 0 .483 3.372l1.873-.701A6 6 0 0 1 5 13"></svg:path>`,
})
export class BxRotateLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRotateRightIcon],svg[bx-rotate-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.242 17.242a6 6 0 0 1-1.37 1.027l.961 1.754a8.1 8.1 0 0 0 2.569-2.225l-1.6-1.201a6 6 0 0 1-.56.645m1.743-4.671a6 6 0 0 1-.362 2.528l1.873.701a8 8 0 0 0 .483-3.371zm1.512-2.368a8.05 8.05 0 0 0-1.841-2.859l-1.414 1.414a6.1 6.1 0 0 1 1.382 2.146zm-8.128 8.763c-.047-.005-.094-.015-.141-.021a7 7 0 0 1-.468-.075a5.9 5.9 0 0 1-2.421-1.122a6 6 0 0 1-.583-.506a6 6 0 0 1-.516-.597a5.9 5.9 0 0 1-.891-1.634a6 6 0 0 1-.247-.902l-.019-.131A6 6 0 0 1 6 13.002V13c0-1.603.624-3.109 1.758-4.242A5.94 5.94 0 0 1 11 7.089V10l5-4l-5-4v3.069a7.9 7.9 0 0 0-4.656 2.275A7.94 7.94 0 0 0 4 12.999v.009q.001.38.037.753c.007.076.021.15.03.227q.03.259.076.516c.019.1.044.196.066.295q.046.213.105.423q.05.168.107.333c.026.079.047.159.076.237l.008-.003A8 8 0 0 0 5.6 17.785l-.007.005c.021.028.049.053.07.081c.211.272.433.538.681.785a8 8 0 0 0 .966.816c.265.192.537.372.821.529l.028.019l.001-.001a7.9 7.9 0 0 0 2.136.795l-.001.005l.053.009c.201.042.405.071.61.098c.069.009.138.023.207.03a8 8 0 0 0 2.532-.137l-.424-1.955a6.1 6.1 0 0 1-1.904.102"></svg:path>`,
})
export class BxRotateRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRssIcon],svg[bx-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20.001C19 11.729 12.271 5 4 5v2c7.168 0 13 5.832 13 13.001z"></svg:path><svg:path fill="currentColor" d="M12 20.001h2C14 14.486 9.514 10 4 10v2c4.411 0 8 3.589 8 8.001"></svg:path><svg:circle cx="6" cy="18" r="2" fill="currentColor"></svg:circle>`,
})
export class BxRssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRubleIcon],svg[bx-ruble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 21h2v-3h6v-2h-6v-2h4.5c2.757 0 5-2.243 5-5s-2.243-5-5-5H9a1 1 0 0 0-1 1v7H5v2h3v2H5v2h3zm2-15h4.5c1.654 0 3 1.346 3 3s-1.346 3-3 3H10z"></svg:path>`,
})
export class BxRubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRulerIcon],svg[bx-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.875 7H3.125C1.953 7 1 7.897 1 9v6c0 1.103.953 2 2.125 2h17.75C22.047 17 23 16.103 23 15V9c0-1.103-.953-2-2.125-2m0 8H3.125c-.057 0-.096-.016-.113-.016q-.01 0-.012.008l-.012-5.946c.007-.01.052-.046.137-.046H5v3h2V9h2v4h2V9h2v3h2V9h2v4h2V9h1.875c.079.001.122.028.125.008l.012 5.946c-.007.01-.052.046-.137.046"></svg:path>`,
})
export class BxRulerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRunIcon],svg[bx-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17" cy="4" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15.777 10.969a2.01 2.01 0 0 0 2.148.83l3.316-.829l-.483-1.94l-3.316.829l-1.379-2.067a2 2 0 0 0-1.272-.854l-3.846-.77a2 2 0 0 0-2.181 1.067l-1.658 3.316l1.789.895l1.658-3.317l1.967.394L7.434 17H3v2h4.434c.698 0 1.355-.372 1.715-.971l1.918-3.196l5.169 1.034l1.816 5.449l1.896-.633l-1.815-5.448a2.01 2.01 0 0 0-1.506-1.33l-3.039-.607l1.772-2.954z"></svg:path>`,
})
export class BxRunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxRupeeIcon],svg[bx-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.99 2.99 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.01 5.01 0 0 0 4.898-4H17V8h-2.602a4.9 4.9 0 0 0-.924-2z"></svg:path>`,
})
export class BxRupeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSadIcon],svg[bx-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:circle cx="8.5" cy="10.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="15.493" cy="10.493" r="1.493" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 14c-3 0-4 3-4 3h8s-1-3-4-3"></svg:path>`,
})
export class BxSadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSaveIcon],svg[bx-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21h14a2 2 0 0 0 2-2V8a1 1 0 0 0-.29-.71l-4-4A1 1 0 0 0 16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2m10-2H9v-5h6zM13 7h-2V5h2zM5 5h2v4h8V5h.59L19 8.41V19h-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5H5z"></svg:path>`,
})
export class BxSaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxScanIcon],svg[bx-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4v5h2V5h4V3H4a1 1 0 0 0-1 1m18 5V4a1 1 0 0 0-1-1h-5v2h4v4zm-2 10h-4v2h5a1 1 0 0 0 1-1v-5h-2zM9 21v-2H5v-4H3v5a1 1 0 0 0 1 1zM2 11h20v2H2z"></svg:path>`,
})
export class BxScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxScatterChartIcon],svg[bx-scatter-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21h17v-2H5V3H3v17a1 1 0 0 0 1 1"></svg:path><svg:circle cx="10" cy="8" r="2" fill="currentColor"></svg:circle><svg:circle cx="18" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="11.5" cy="13.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16.5" cy="6.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxScatterChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxScreenshotIcon],svg[bx-screenshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 19h3v-2H5v-2H3v3a1 1 0 0 0 1 1M19 4a1 1 0 0 0-1-1h-3v2h2v2h2zM5 5h2V3H4a1 1 0 0 0-1 1v3h2zM3 9h2v4H3zm14 0h2v3h-2zM9 3h4v2H9zm0 14h3v2H9z"></svg:path>`,
})
export class BxScreenshotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSearchIcon],svg[bx-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18a7.95 7.95 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.95 7.95 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8m0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6"></svg:path>`,
})
export class BxSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSearchAltIcon],svg[bx-search-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18a7.95 7.95 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.95 7.95 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8m0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6"></svg:path><svg:path fill="currentColor" d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.98 3.98 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002"></svg:path>`,
})
export class BxSearchAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSearchAlt2Icon],svg[bx-search-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.023 16.977a35 35 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.96 6.96 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392l.604.646l2.121-2.121l-.646-.604c-.379-.372-.885-.866-1.391-1.36M9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5s5 2.243 5 5s-2.243 5-5 5"></svg:path>`,
})
export class BxSearchAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSelectMultipleIcon],svg[bx-select-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2M8 16V4h12l.002 12z"></svg:path><svg:path fill="currentColor" d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4zm8.933 3.519l-1.726-1.726l-1.414 1.414l3.274 3.274l5.702-6.84l-1.538-1.282z"></svg:path>`,
})
export class BxSelectMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSelectionIcon],svg[bx-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1H9V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v6H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1h6v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1V9zm-3-4h2v2h-2zM5 5h2v2H5zm2 14H5v-2h2zm12 0h-2v-2h2zm-2-4h-1a1 1 0 0 0-1 1v1H9v-1a1 1 0 0 0-1-1H7V9h1a1 1 0 0 0 1-1V7h6v1a1 1 0 0 0 1 1h1z"></svg:path>`,
})
export class BxSelectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSendIcon],svg[bx-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.426 11.095l-17-8A.999.999 0 0 0 3.03 4.242L4.969 12L3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81M5.481 18.197l.839-3.357L12 12L6.32 9.16l-.839-3.357L18.651 12z"></svg:path>`,
})
export class BxSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxServerIcon],svg[bx-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M4 9V5h16v4zm16 4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M4 19v-4h16v4z"></svg:path><svg:path fill="currentColor" d="M17 6h2v2h-2zm-3 0h2v2h-2zm3 10h2v2h-2zm-3 0h2v2h-2z"></svg:path>`,
})
export class BxServerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShapeCircleIcon],svg[bx-shape-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.494 9.05a8.14 8.14 0 0 0-4.544-4.544C14.713 3.088 13.485 2 12 2S9.287 3.088 9.05 4.506A8.14 8.14 0 0 0 4.506 9.05C3.088 9.287 2 10.515 2 12s1.088 2.713 2.506 2.95a8.14 8.14 0 0 0 4.544 4.544C9.287 20.912 10.515 22 12 22s2.713-1.088 2.95-2.506a8.14 8.14 0 0 0 4.544-4.544C20.912 14.713 22 13.485 22 12s-1.088-2.713-2.506-2.95M12 4a1 1 0 0 1 1 1c0 .06-.023.11-.034.167a1 1 0 0 1-.083.279c-.014.027-.034.049-.051.075a1 1 0 0 1-.16.209c-.04.037-.09.062-.136.092c-.054.036-.104.078-.165.103c-.115.047-.239.075-.371.075s-.256-.028-.371-.075c-.061-.024-.111-.066-.165-.103c-.046-.03-.096-.055-.136-.092a1 1 0 0 1-.16-.209c-.017-.026-.037-.048-.051-.075a1 1 0 0 1-.083-.279C11.023 5.11 11 5.06 11 5a1 1 0 0 1 1-1m-7 7c.06 0 .11.023.167.034c.099.017.194.041.279.083c.027.014.049.034.075.051c.075.047.149.097.209.16c.037.04.062.09.092.136c.036.054.078.104.103.165c.047.115.075.239.075.371s-.028.256-.075.371c-.024.061-.066.111-.103.165c-.03.046-.055.096-.092.136c-.06.063-.134.113-.209.16c-.026.017-.048.037-.075.051a1 1 0 0 1-.279.083C5.11 12.977 5.06 13 5 13a1 1 0 0 1 0-2m7 9a1 1 0 0 1-1-1c0-.06.023-.11.034-.167c.017-.099.041-.194.083-.279c.014-.027.034-.049.051-.075c.047-.075.097-.149.16-.209c.04-.037.09-.062.136-.092c.054-.036.104-.078.165-.103c.115-.047.239-.075.371-.075s.256.028.371.075c.061.024.111.066.165.103c.046.03.096.055.136.092c.063.06.113.134.16.209c.017.026.037.048.051.075c.042.085.066.181.083.279c.011.057.034.107.034.167a1 1 0 0 1-1 1m2.583-2.512c-.006-.011-.017-.019-.022-.029a3 3 0 0 0-.996-1.007c-.054-.033-.109-.06-.166-.09a3 3 0 0 0-.486-.205c-.064-.021-.128-.044-.194-.061c-.233-.057-.471-.096-.719-.096s-.486.039-.718.097q-.098.027-.195.061a3 3 0 0 0-.485.205q-.084.042-.166.09a3 3 0 0 0-.996 1.007c-.006.011-.017.019-.022.029a6.15 6.15 0 0 1-2.905-2.905c.011-.006.019-.017.029-.022a3 3 0 0 0 1.007-.996q.048-.082.09-.166q.123-.231.205-.485q.033-.097.061-.195c.056-.234.095-.472.095-.72s-.039-.486-.097-.718a3 3 0 0 0-.061-.194a3 3 0 0 0-.205-.486c-.03-.057-.057-.112-.09-.166A3 3 0 0 0 6.54 9.44c-.01-.006-.018-.017-.028-.023a6.15 6.15 0 0 1 2.905-2.905c.006.01.017.018.022.029c.248.411.588.755.996 1.007q.082.048.166.09q.232.123.486.205q.095.033.194.061c.233.057.47.096.719.096a3 3 0 0 0 .912-.158q.254-.081.486-.205q.084-.042.166-.09c.408-.252.748-.596.996-1.007c.006-.011.017-.019.022-.029a6.15 6.15 0 0 1 2.905 2.905c-.011.006-.019.017-.029.022a3 3 0 0 0-1.007.996q-.048.082-.09.166q-.123.232-.205.486c-.021.064-.044.128-.061.194A3 3 0 0 0 16 12a3 3 0 0 0 .158.912q.081.254.205.486q.042.084.09.166c.252.408.596.748 1.007.996c.011.006.019.017.029.022a6.15 6.15 0 0 1-2.906 2.906M19 13c-.06 0-.11-.023-.167-.034a1 1 0 0 1-.279-.083c-.027-.014-.049-.034-.075-.051a1 1 0 0 1-.209-.16c-.037-.04-.062-.09-.092-.136c-.036-.054-.078-.104-.103-.165c-.047-.115-.075-.239-.075-.371s.028-.256.075-.371c.024-.061.066-.111.103-.165c.03-.046.055-.096.092-.136c.06-.063.134-.113.209-.16c.026-.017.048-.037.075-.051c.085-.042.181-.066.279-.083c.057-.011.107-.034.167-.034a1 1 0 0 1 0 2"></svg:path>`,
})
export class BxShapeCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShapePolygonIcon],svg[bx-shape-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14.185v-2.369A3 3 0 0 0 22 9c0-1.654-1.346-3-3-3a3 3 0 0 0-2.116.876L12.969 5.31c.01-.103.031-.204.031-.31c0-1.654-1.346-3-3-3S7 3.346 7 5c0 .762.295 1.451.765 1.981L6.091 9.212A3 3 0 0 0 5 9c-1.654 0-3 1.346-3 3s1.346 3 3 3c.159 0 .313-.023.465-.047L7.4 17.532c-.248.436-.4.932-.4 1.468c0 1.654 1.346 3 3 3a2.99 2.99 0 0 0 2.863-2.153l3.962-.792A3 3 0 0 0 19 20c1.654 0 3-1.346 3-3a2.995 2.995 0 0 0-2-2.815M19 8a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1m-9-4a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1m-6 8a1.001 1.001 0 1 1 1 1c-.552 0-1-.449-1-1m6 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2m2.761-2.172A3 3 0 0 0 10 16c-.386 0-.752.079-1.091.213l-1.674-2.231C7.705 13.451 8 12.762 8 12c0-.536-.152-1.032-.399-1.467l1.935-2.58c.152.024.305.047.464.047a3 3 0 0 0 2.116-.876l3.915 1.566c-.01.103-.031.204-.031.31c0 1.302.839 2.401 2 2.815v2.369a3 3 0 0 0-2 2.815c0 .061.015.117.018.177zM19 18a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class BxShapePolygonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShapeSquareIcon],svg[bx-shape-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6c0-1.654-1.346-3-3-3a2.99 2.99 0 0 0-2.815 2h-6.37A2.99 2.99 0 0 0 6 3C4.346 3 3 4.346 3 6c0 1.302.839 2.401 2 2.815v6.369A3 3 0 0 0 3 18c0 1.654 1.346 3 3 3a2.99 2.99 0 0 0 2.815-2h6.369a2.99 2.99 0 0 0 2.815 2c1.654 0 3-1.346 3-3a3 3 0 0 0-2-2.816V8.816A3 3 0 0 0 21 6m-3-1a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1m-2.815 12h-6.37A2.99 2.99 0 0 0 7 15.184V8.816A2.99 2.99 0 0 0 8.815 7h6.369A2.99 2.99 0 0 0 17 8.815v6.369A2.99 2.99 0 0 0 15.185 17M6 5a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1m0 14a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2m12 0a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2"></svg:path>`,
})
export class BxShapeSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShapeTriangleIcon],svg[bx-shape-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15c-.183 0-.358.022-.532.054L8.946 6.532C8.978 6.359 9 6.182 9 6c0-1.654-1.346-3-3-3S3 4.346 3 6c0 1.302.839 2.401 2 2.815v6.369A3 3 0 0 0 3 18c0 1.654 1.346 3 3 3a2.99 2.99 0 0 0 2.815-2h6.369a2.99 2.99 0 0 0 2.815 2c1.654 0 3-1.346 3-3S19.654 15 18 15m-11 .184V8.816c.329-.118.629-.291.894-.508l7.799 7.799a3 3 0 0 0-.508.894h-6.37A2.99 2.99 0 0 0 7 15.184M6 5a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1m0 14a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2m12 0a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2"></svg:path>`,
})
export class BxShapeTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShareIcon],svg[bx-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7.05V4a1 1 0 0 0-1-1a1 1 0 0 0-.7.29l-7 7a1 1 0 0 0 0 1.42l7 7A1 1 0 0 0 11 18v-3.1h.85a10.89 10.89 0 0 1 8.36 3.72a1 1 0 0 0 1.11.35A1 1 0 0 0 22 18c0-9.12-8.08-10.68-11-10.95m.85 5.83a15 15 0 0 0-2 .13A1 1 0 0 0 9 14v1.59L4.42 11L9 6.41V8a1 1 0 0 0 1 1c.91 0 8.11.2 9.67 6.43a13.07 13.07 0 0 0-7.82-2.55"></svg:path>`,
})
export class BxShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShareAltIcon],svg[bx-share-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 15a3.5 3.5 0 0 0 2.36-.93l6.26 3.58a3 3 0 0 0-.12.85a3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.7 2.7 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.4 3.4 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15m12 2a1.5 1.5 0 1 1-1.5 1.5a1.5 1.5 0 0 1 1.5-1.5m0-13A1.5 1.5 0 1 1 16 5.5A1.5 1.5 0 0 1 17.5 4m-12 6A1.5 1.5 0 1 1 4 11.5A1.5 1.5 0 0 1 5.5 10"></svg:path>`,
})
export class BxShareAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShekelIcon],svg[bx-shekel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8v8h2V8c0-2.206-1.794-4-4-4H5v16h2V6h4c1.103 0 2 .897 2 2"></svg:path><svg:path fill="currentColor" d="M17 16c0 1.103-.897 2-2 2h-4V8H9v12h6c2.206 0 4-1.794 4-4V4h-2z"></svg:path>`,
})
export class BxShekelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShieldIcon],svg[bx-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.995 6.903a1 1 0 0 0-.547-.797l-7.973-4a1 1 0 0 0-.895-.002l-8.027 4c-.297.15-.502.437-.544.767c-.013.097-1.145 9.741 8.541 15.008a1 1 0 0 0 .969-.009c9.307-5.259 8.514-14.573 8.476-14.967m-8.977 12.944c-6.86-4.01-7.14-10.352-7.063-12.205l7.071-3.523l6.998 3.511c.005 1.87-.481 8.243-7.006 12.217"></svg:path>`,
})
export class BxShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShieldAltIcon],svg[bx-shield-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.342 8.447l1.105-.553A.998.998 0 0 0 21.8 6.4l-3-4A1 1 0 0 0 18 2H6a1 1 0 0 0-.8.4l-3 4a1 1 0 0 0 .352 1.494l1.105.553l-1.131 2.262A5.05 5.05 0 0 0 2 12.944v.591a6.03 6.03 0 0 0 3.894 5.618l3.431 1.286a5.5 5.5 0 0 1 1.969 1.268a.997.997 0 0 0 1.413 0a5.5 5.5 0 0 1 1.969-1.267l3.432-1.287A6.03 6.03 0 0 0 22 13.535v-.591c0-.771-.183-1.545-.527-2.236zM20 13.535a4.02 4.02 0 0 1-2.596 3.745l-3.431 1.287a7.5 7.5 0 0 0-1.974 1.101a7.5 7.5 0 0 0-1.974-1.102L6.596 17.28A4.02 4.02 0 0 1 4 13.535v-.591c0-.463.109-.928.316-1.342l1.131-2.261a2.003 2.003 0 0 0-.895-2.684l-.033-.015L6.5 4h11l1.981 2.642l-.034.017a2.004 2.004 0 0 0-.895 2.684l1.131 2.26c.208.414.317.878.317 1.341z"></svg:path>`,
})
export class BxShieldAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShieldAlt2Icon],svg[bx-shield-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.438 5.089a1 1 0 0 0-.959.015c-.684.389-1.355.577-2.053.577c-2.035 0-3.952-1.629-5.722-3.39c-.375-.373-1.063-.373-1.438 0C9.592 3.959 7.598 5.663 5.51 5.663c-.69 0-1.351-.184-2.018-.561c-.298-.166-.658-.171-.96-.012s-.501.461-.528.801c-.011.129-.944 12.872 9.683 16.041a1 1 0 0 0 .286.042H12q.145 0 .285-.041c10.657-3.17 9.695-15.916 9.684-16.044a1 1 0 0 0-.531-.8m-9.452 14.842c-6.979-2.255-7.934-9.412-8.014-12.477q.759.21 1.537.209c2.492 0 4.65-1.567 6.476-3.283c1.893 1.788 3.983 3.301 6.442 3.301q.797 0 1.575-.22c-.074 3.065-1.021 10.217-8.016 12.47"></svg:path>`,
})
export class BxShieldAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShieldMinusIcon],svg[bx-shield-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.41 6.11l-8-4a.94.94 0 0 0-.89 0l-8 4A1 1 0 0 0 3 6.9c0 .11-1 10.77 8.59 15a1 1 0 0 0 .41.1a.9.9 0 0 0 .4-.09C21.92 17.67 21 7 21 6.9a1 1 0 0 0-.59-.79M12 19.9C5.2 16.63 4.88 9.64 4.93 7.63l7-3.51l7 3.51c.13 2.01-.19 9-6.93 12.27"></svg:path><svg:path fill="currentColor" d="M8 11h8v2H8z"></svg:path>`,
})
export class BxShieldMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShieldPlusIcon],svg[bx-shield-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.63 21.91A.9.9 0 0 0 12 22a1 1 0 0 0 .41-.09C22 17.67 21 7 21 6.9a1 1 0 0 0-.55-.79l-8-4a1 1 0 0 0-.9 0l-8 4A1 1 0 0 0 3 6.9c0 .1-.92 10.77 8.63 15.01M5 7.63l7-3.51l7 3.51c.05 2-.27 9-7 12.27C5.26 16.63 4.94 9.64 5 7.63"></svg:path><svg:path fill="currentColor" d="M11.06 16h2v-3h3.01v-2h-3.01V8h-2v3h-3v2h3z"></svg:path>`,
})
export class BxShieldPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShieldQuarterIcon],svg[bx-shield-quarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.995 6.9a1 1 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1 1 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a1 1 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014M12 19.897V12H5.51a15.5 15.5 0 0 1-.544-4.365L12 4.118V12h6.46c-.759 2.74-2.498 5.979-6.46 7.897"></svg:path>`,
})
export class BxShieldQuarterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShieldXIcon],svg[bx-shield-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.48 6.105l-8-4a1 1 0 0 0-.895 0l-8 4a1 1 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a1 1 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014a1 1 0 0 0-.548-.795m-8.447 13.792C5.265 16.625 4.944 9.642 4.999 7.635l7.034-3.517l7.029 3.515c.038 1.989-.328 9.018-7.029 12.264"></svg:path><svg:path fill="currentColor" d="M14.293 8.293L12 10.586L9.707 8.293L8.293 9.707L10.586 12l-2.293 2.293l1.414 1.414L12 13.414l2.293 2.293l1.414-1.414L13.414 12l2.293-2.293z"></svg:path>`,
})
export class BxShieldXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShockedIcon],svg[bx-shocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:circle cx="8.5" cy="10.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="15.493" cy="10.493" r="1.493" fill="currentColor"></svg:circle><svg:ellipse cx="12" cy="15.5" fill="currentColor" rx="3" ry="2.5"></svg:ellipse>`,
})
export class BxShockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShoppingBagIcon],svg[bx-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2M9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5z"></svg:path>`,
})
export class BxShoppingBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShowIcon],svg[bx-show-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3s3-1.358 3-3s-1.359-3-3-3"></svg:path><svg:path fill="currentColor" d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5m0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5c-.504 1.158-2.578 5-7.926 5"></svg:path>`,
})
export class BxShowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShowAltIcon],svg[bx-show-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12c-1.095 0-2-.905-2-2c0-.354.103-.683.268-.973C12.178 9.02 12.092 9 12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3s3-1.358 3-3c0-.092-.02-.178-.027-.268c-.29.165-.619.268-.973.268"></svg:path><svg:path fill="currentColor" d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5m0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5c-.504 1.158-2.578 5-7.926 5"></svg:path>`,
})
export class BxShowAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShowerIcon],svg[bx-shower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18.33A6.8 6.8 0 0 0 19.5 15a6.73 6.73 0 0 0-1.5 3.33a1.51 1.51 0 1 0 3 0m-10 2A6.8 6.8 0 0 0 9.5 17A6.73 6.73 0 0 0 8 20.33A1.59 1.59 0 0 0 9.5 22a1.59 1.59 0 0 0 1.5-1.67M14.5 22a1.59 1.59 0 0 0 1.5-1.67A6.8 6.8 0 0 0 14.5 17a6.73 6.73 0 0 0-1.5 3.33A1.59 1.59 0 0 0 14.5 22M3 18.33A1.59 1.59 0 0 0 4.5 20A1.59 1.59 0 0 0 6 18.33A6.8 6.8 0 0 0 4.5 15A6.73 6.73 0 0 0 3 18.33M13 4.07V2h-2v2.07A8 8 0 0 0 4 12H2v2h20v-2h-2a8 8 0 0 0-7-7.93M6 12a6 6 0 0 1 12 0z"></svg:path>`,
})
export class BxShowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxShuffleIcon],svg[bx-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5l-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4l-5-4z"></svg:path><svg:path fill="currentColor" d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707l1.48 1.346z"></svg:path>`,
})
export class BxShuffleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSidebarIcon],svg[bx-sidebar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M4 19V7h6v12zm8 0V7h8V5l.002 14z"></svg:path><svg:path fill="currentColor" d="M6 10h2v2H6zm0 4h2v2H6z"></svg:path>`,
})
export class BxSidebarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSignal1Icon],svg[bx-signal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16h2v5H3z"></svg:path>`,
})
export class BxSignal1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSignal2Icon],svg[bx-signal-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16h2v5H3zm4-3h2v8H7z"></svg:path>`,
})
export class BxSignal2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSignal3Icon],svg[bx-signal-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16h2v5H3zm4-3h2v8H7zm4-3h2v11h-2z"></svg:path>`,
})
export class BxSignal3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSignal4Icon],svg[bx-signal-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16h2v5H3zm4-3h2v8H7zm4-3h2v11h-2zm4-3h2v14h-2z"></svg:path>`,
})
export class BxSignal4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSignal5Icon],svg[bx-signal-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16h2v5H3zm4-3h2v8H7zm4-3h2v11h-2zm4-3h2v14h-2zm4-3h2v17h-2z"></svg:path>`,
})
export class BxSignal5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSitemapIcon],svg[bx-sitemap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13.01h-7V10h1c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h1v3.01H4V18H3v4h4v-4H6v-2.99h5V18h-1v4h4v-4h-1v-2.99h5V18h-1v4h4v-4h-1zM10 8V4h4l.002 4z"></svg:path>`,
})
export class BxSitemapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSkipNextIcon],svg[bx-skip-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7v10l7-5zm9 10V7h-2v10z"></svg:path>`,
})
export class BxSkipNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSkipNextCircleIcon],svg[bx-skip-next-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="m8 16l5-4l-5-4zm5-4v4h2V8h-2z"></svg:path>`,
})
export class BxSkipNextCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSkipPreviousIcon],svg[bx-skip-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 7l-7 5l7 5zm-7 5V7H7v10h2z"></svg:path>`,
})
export class BxSkipPreviousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSkipPreviousCircleIcon],svg[bx-skip-previous-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M16 16V8l-5 4zM9 8v8h2V8z"></svg:path>`,
})
export class BxSkipPreviousCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSleepyIcon],svg[bx-sleepy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:ellipse cx="12" cy="15.5" fill="currentColor" rx="3" ry="2.5"></svg:ellipse><svg:path fill="currentColor" d="M10 7c-2.905 0-3.983 2.386-4 3.99l2 .021C8.002 10.804 8.076 9 10 9zm4 0v2c1.826 0 1.992 1.537 2 2.007L17 11h1c0-1.608-1.065-4-4-4"></svg:path>`,
})
export class BxSleepyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSliderIcon],svg[bx-slider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5h9v2h-9zM2 7h7v2h2V3H9v2H2zm7 10h13v2H9zm10-6h3v2h-3zm-2 4V9.012h-2V11H2v2h13v2zM7 21v-6H5v2H2v2h3v2z"></svg:path>`,
})
export class BxSliderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSliderAltIcon],svg[bx-slider-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 14.5c-1.58 0-2.903 1.06-3.337 2.5H2v2h2.163c.434 1.44 1.757 2.5 3.337 2.5s2.903-1.06 3.337-2.5H22v-2H10.837c-.434-1.44-1.757-2.5-3.337-2.5m0 5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5S9 17.173 9 18s-.673 1.5-1.5 1.5m9-11c-1.58 0-2.903 1.06-3.337 2.5H2v2h11.163c.434 1.44 1.757 2.5 3.337 2.5s2.903-1.06 3.337-2.5H22v-2h-2.163c-.434-1.44-1.757-2.5-3.337-2.5m0 5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5s1.5.673 1.5 1.5s-.673 1.5-1.5 1.5"></svg:path><svg:path fill="currentColor" d="M12.837 5C12.403 3.56 11.08 2.5 9.5 2.5S6.597 3.56 6.163 5H2v2h4.163C6.597 8.44 7.92 9.5 9.5 9.5s2.903-1.06 3.337-2.5h9.288V5zM9.5 7.5C8.673 7.5 8 6.827 8 6s.673-1.5 1.5-1.5S11 5.173 11 6s-.673 1.5-1.5 1.5"></svg:path>`,
})
export class BxSliderAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSlideshowIcon],svg[bx-slideshow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h7v3H8v2h8v-2h-3v-3h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M4 15V5h16l.001 10z"></svg:path><svg:path fill="currentColor" d="m10 13l5-3l-5-3z"></svg:path>`,
})
export class BxSlideshowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSmileIcon],svg[bx-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M14.829 14.828a4.1 4.1 0 0 1-1.272.858a4 4 0 0 1-4.875-1.45l-1.658 1.119a6.1 6.1 0 0 0 1.621 1.62a6 6 0 0 0 2.148.903a6 6 0 0 0 2.415 0a6 6 0 0 0 2.148-.903c.313-.212.612-.458.886-.731c.272-.271.52-.571.734-.889l-1.658-1.119a4 4 0 0 1-.489.592"></svg:path><svg:circle cx="8.5" cy="10.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="15.493" cy="10.493" r="1.493" fill="currentColor"></svg:circle>`,
})
export class BxSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSortIcon],svg[bx-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16H4l6 6V2H8zm6-11v17h2V8h4l-6-6z"></svg:path>`,
})
export class BxSortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSortAZIcon],svg[bx-sort-a-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.707 14.707A1 1 0 0 0 19 13h-7v2h4.586l-4.293 4.293A1 1 0 0 0 13 21h7v-2h-4.586zM7 3.99H5v12H2l4 4l4-4H7zM17 3h-2c-.417 0-.79.259-.937.649l-2.75 7.333h2.137L14.193 9h3.613l.743 1.981h2.137l-2.75-7.333A1 1 0 0 0 17 3m-2.057 4l.75-2h.613l.75 2z"></svg:path>`,
})
export class BxSortAZIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSortAlt2Icon],svg[bx-sort-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20h2V8h3L8 4L4 8h3zm13-4h-3V4h-2v12h-3l4 4z"></svg:path>`,
})
export class BxSortAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSortDownIcon],svg[bx-sort-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 20l4-4H7V4H5v12H2zm5-12h9v2h-9zm0 4h7v2h-7zm0-8h11v2H11zm0 12h5v2h-5z"></svg:path>`,
})
export class BxSortDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSortUpIcon],svg[bx-sort-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h9v2h-9zm0 4h7v2h-7zm0-8h11v2H11zm0 12h5v2h-5zm-6 3h2V8h3L6 4L2 8h3z"></svg:path>`,
})
export class BxSortUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSortZAIcon],svg[bx-sort-z-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.707 14.707A1 1 0 0 0 19 13h-7v2h4.586l-4.293 4.293A1 1 0 0 0 13 21h7v-2h-4.586zM6 3.99l-4 4h3v12h2v-12h3zM17 3h-2c-.417 0-.79.259-.937.649l-2.75 7.333h2.137L14.193 9h3.613l.743 1.981h2.137l-2.75-7.333A1 1 0 0 0 17 3m-2.057 4l.75-2h.613l.75 2z"></svg:path>`,
})
export class BxSortZAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSpaIcon],svg[bx-spa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.787 9.023c-.125.027-1.803.418-3.953 1.774c-.323-1.567-1.279-4.501-4.108-7.485L12 2.546l-.726.767C8.435 6.308 7.483 9.25 7.163 10.827C5.005 9.448 3.34 9.052 3.218 9.024L2 8.752V10c0 7.29 3.925 12 10 12c5.981 0 10-4.822 10-12V8.758zM8.999 12.038c.002-.033.152-3.1 3.001-6.532C14.814 8.906 14.999 12 15 12v.125a19 19 0 0 0-3.01 3.154a20 20 0 0 0-2.991-3.113zM12 20c-5.316 0-7.549-4.196-7.937-8.564c1.655.718 4.616 2.426 7.107 6.123l.841 1.249l.825-1.26c2.426-3.708 5.425-5.411 7.096-6.122C19.534 15.654 17.304 20 12 20"></svg:path>`,
})
export class BxSpaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSpaceBarIcon],svg[bx-space-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13H7V9H5v6h14V9h-2z"></svg:path>`,
})
export class BxSpaceBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSpeakerIcon],svg[bx-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 18H6V4h12z"></svg:path><svg:path fill="currentColor" d="M12 19a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2"></svg:path><svg:circle cx="12.01" cy="7" r="2" fill="currentColor"></svg:circle>`,
})
export class BxSpeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSprayCanIcon],svg[bx-spray-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.002 2h-4a1 1 0 0 0-1 1v3.812a6 6 0 0 0-3 5.188v.988L3 13l.002.072V21a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9a6 6 0 0 0-3-5.188V3a1 1 0 0 0-1-1m-3 4V4h2v2zm5.001 14h-8v-6h8zm-8.001-8c0-2.206 1.794-4 4-4s4 1.794 4 4zm8.001-9h2v2h-2zM16 3h2v2h-2zm0 3h2v2h-2zm3-3h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2z"></svg:path>`,
})
export class BxSprayCanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSpreadsheetIcon],svg[bx-spreadsheet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM5 19V5h14l.002 14z"></svg:path><svg:path fill="currentColor" d="M7 7h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6z"></svg:path>`,
})
export class BxSpreadsheetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSquareIcon],svg[bx-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-1 16H5V5h14z"></svg:path>`,
})
export class BxSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxSquareRoundedIcon],svg[bx-square-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5m3 15c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3z"></svg:path>`,
})
export class BxSquareRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxStarIcon],svg[bx-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.516 14.323l-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4l4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454l-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713zm2.853-4.326a1 1 0 0 0 .832-.586L12 5.43l1.799 3.981a1 1 0 0 0 .832.586l3.972.315l-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385l-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603l1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962z"></svg:path>`,
})
export class BxStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxStationIcon],svg[bx-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m7.758 16.243l1.414-1.415a3.97 3.97 0 0 1-1.173-2.831c0-1.068.417-2.071 1.173-2.825L7.758 7.756a5.96 5.96 0 0 0-1.76 4.24c0 1.604.625 3.112 1.76 4.247m8.484 0A5.96 5.96 0 0 0 18 12a5.96 5.96 0 0 0-1.758-4.243l-1.414 1.414C15.584 9.927 16 10.932 16 12s-.416 2.073-1.172 2.829z"></svg:path><svg:path fill="currentColor" d="M6.344 17.657a7.95 7.95 0 0 1-2.345-5.659c0-2.137.833-4.145 2.345-5.654L4.93 4.929c-1.89 1.886-2.931 4.397-2.931 7.069s1.041 5.183 2.931 7.073zM17.657 6.343A7.95 7.95 0 0 1 20 12a7.95 7.95 0 0 1-2.343 5.657l1.414 1.414A9.93 9.93 0 0 0 22 12a9.93 9.93 0 0 0-2.929-7.071z"></svg:path>`,
})
export class BxStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxStatsIcon],svg[bx-stats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a2 2 0 0 0-.703.133l-2.398-1.963c.059-.214.101-.436.101-.67C17 8.114 15.886 7 14.5 7S12 8.114 12 9.5c0 .396.1.765.262 1.097l-2.909 3.438A2 2 0 0 0 9 14c-.179 0-.348.03-.512.074l-2.563-2.563C5.97 11.348 6 11.179 6 11c0-1.108-.892-2-2-2s-2 .892-2 2s.892 2 2 2c.179 0 .348-.03.512-.074l2.563 2.563A2 2 0 0 0 7 16c0 1.108.892 2 2 2s2-.892 2-2c0-.237-.048-.46-.123-.671l2.913-3.442c.227.066.462.113.71.113a2.5 2.5 0 0 0 1.133-.281l2.399 1.963A2 2 0 0 0 18 14c0 1.108.892 2 2 2s2-.892 2-2s-.892-2-2-2"></svg:path>`,
})
export class BxStatsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxStickerIcon],svg[bx-sticker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.796 9.982C20.849 5.357 16.729 2 12 2C6.486 2 2 6.486 2 12c0 4.729 3.357 8.849 7.982 9.796a.99.99 0 0 0 .908-.272l10.633-10.633c.238-.238.34-.578.273-.909M11 18a7.93 7.93 0 0 1 1.365-4.471a8 8 0 0 1 .978-1.186a8 8 0 0 1 1.184-.977a8 8 0 0 1 1.36-.738c.481-.203.986-.36 1.501-.466a8 8 0 0 1 2.17-.134l-8.529 8.529c-.013-.185-.029-.37-.029-.557m-7-6c0-4.411 3.589-8 8-8c2.909 0 5.528 1.589 6.929 4.005a10 10 0 0 0-1.943.198c-.643.132-1.274.328-1.879.583a10 10 0 0 0-1.699.923c-.533.361-1.03.771-1.479 1.22s-.858.945-1.221 1.48c-.359.533-.67 1.104-.922 1.698A10 10 0 0 0 9 18c0 .491.048.979.119 1.461C6.089 18.288 4 15.336 4 12"></svg:path>`,
})
export class BxStickerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxStopIcon],svg[bx-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7h10v10H7z"></svg:path>`,
})
export class BxStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxStopCircleIcon],svg[bx-stop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></svg:path><svg:path fill="currentColor" d="M9 9h6v6H9z"></svg:path>`,
})
export class BxStopCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxStopwatchIcon],svg[bx-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5c-4.411 0-8 3.589-8 8s3.589 8 8 8s8-3.589 8-8s-3.589-8-8-8m0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6s6 2.691 6 6s-2.691 6-6 6"></svg:path><svg:path fill="currentColor" d="M11 9h2v5h-2zM9 2h6v2H9zm10.293 5.707l-2-2l1.414-1.414l2 2z"></svg:path>`,
})
export class BxStopwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[bxStoreIcon],svg[bx-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.148 2.971A2.01 2.01 0 0 0 17.434 2H6.566c-.698 0-1.355.372-1.714.971L2.143 7.485A1 1 0 0 0 2 8a3.97 3.97 0 0 0 1 2.618V19c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8.382A3.97 3.97 0 0 0 22 8a1 1 0 0 0-.143-.515zm.836 5.28A2 2 0 0 1 18 10c-1.103 0-2-.897-2-2c0-.068-.025-.128-.039-.192l.02-.004L15.22 4h2.214zM10.819 4h2.361l.813 4.065C13.958 9.137 13.08 10 12 10s-1.958-.863-1.993-1.935zM6.566 4H8.78l-.76 3.804l.02.004C8.025 7.872 8 7.932 8 8c0 1.103-.897 2-2 2a2 2 0 0 1-1.984-1.749zM10 19v-3h4v3zm6 0v-3c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v3H5v-7.142c.321.083.652.142 1 .142a4 4 0 0 0 3-1.357c.733.832 1.807 1.357 3 1.357s2.267-.525 3-1.357A4 4 0 0 0 18 12c.348 0 .679-.059 1-.142V19z"></svg:path>`,
})
export class BxStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
