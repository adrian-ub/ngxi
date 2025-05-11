import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLassoFillIcon],svg[ph-lasso-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M93.43 136.11a17.14 17.14 0 0 0-15.35 6.1c9.31 6.56 22.51 11.33 37.43 13.07c-5.1-11.95-13.79-18.28-22.08-19.17"></svg:path><svg:path d="M224 48v160a16 16 0 0 1-16 16h-80.35a4 4 0 0 1-3.23-6.34c7.5-10.23 11.58-23.24 11.58-37.84c0-2.79-.13-5.46-.35-8.05C176.79 169.33 208 147.47 208 120c0-29.15-35.14-52-80-52s-80 22.84-80 52c0 27.31 30.82 49.07 71.58 51.73a77 77 0 0 1 .42 8.09c0 17.62-7.65 31.95-21 39.32A38.77 38.77 0 0 1 79.27 224H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-32 72c0-19.51-29.31-36-64-36s-64 16.48-64 36a21.3 21.3 0 0 0 3 10.63a33.65 33.65 0 0 1 28.16-10.43c15 1.63 30.84 13.4 37.54 35.68c32.6-1.41 59.3-17.26 59.3-35.88"></svg:path></svg:g>`,
})
export class PhLassoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLassoLightIcon],svg[ph-lasso-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.68 61.63C184.11 49 156.88 42 128 42s-56.11 7-76.68 19.63C29.83 74.85 18 92.73 18 112s11.83 37.13 33.32 50.35C70.45 174.1 95.35 181 122 181.85v1.94c0 14.76-6.94 27.1-19.54 34.73c-15.22 9.22-36 9.9-51.68 1.71a6 6 0 1 0-5.56 10.63A64.45 64.45 0 0 0 75 238a65.24 65.24 0 0 0 33.7-9.22c16.34-9.89 25.33-25.87 25.33-45v-1.94c26.65-.89 51.57-7.74 70.72-19.52C226.17 149.11 238 131.23 238 112s-11.83-37.15-33.32-50.37m-140 94.46c5.32-12 17.2-15.07 26.48-13.87c12.28 1.6 24.64 10.67 29.08 27.55c-20.51-.96-39.76-5.69-55.52-13.68Zm133.67-4c-17.62 10.85-40.83 17.1-65.77 17.79a52.8 52.8 0 0 0-11.31-23.84a45.24 45.24 0 0 0-28.56-15.73c-16.89-2.2-31.49 5.54-38.41 19.68C38.61 139.37 30 126 30 112c0-14.93 9.8-29.18 27.61-40.13C76.32 60.34 101.32 54 128 54s51.68 6.34 70.39 17.85C216.2 82.8 226 97.05 226 112s-9.8 29.16-27.61 40.11Z"></svg:path>`,
})
export class PhLassoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLassoThinIcon],svg[ph-lasso-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M203.64 63.34C183.37 50.87 156.51 44 128 44s-55.37 6.87-75.64 19.34C31.49 76.19 20 93.48 20 112s11.49 35.83 32.36 48.68c19.29 11.87 44.55 18.65 71.51 19.28c.08 1.27.13 2.56.13 3.9c0 15.49-7.28 28.44-20.51 36.46c-15.79 9.57-37.34 10.28-53.64 1.77a4 4 0 1 0-3.7 7.09A62.3 62.3 0 0 0 74.91 236a63.56 63.56 0 0 0 32.73-8.82c15.71-9.52 24.36-24.9 24.36-43.3c0-1.32-.05-2.61-.12-3.9c27.06-.59 52.41-7.38 71.76-19.28C224.51 147.85 236 130.56 236 112s-11.49-35.81-32.36-48.66M62.16 157.15c5.3-14.49 18.83-18.22 29.3-16.85c13.64 1.78 27.38 12.19 31.38 31.66c-23.18-.71-44.29-6.18-60.68-14.81M131 172a51.35 51.35 0 0 0-11.18-24.59a43.28 43.28 0 0 0-27.3-15.06c-16.82-2.19-31.24 6-37.33 20.74C38.33 142.35 28 127.9 28 112c0-33.09 44.86-60 100-60s100 26.93 100 60c0 32.52-43.26 59.06-97 60"></svg:path>`,
})
export class PhLassoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLastfmLogoIcon],svg[ph-lastfm-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 160a40 40 0 0 1-40 40h-17.43a56.22 56.22 0 0 1-50.75-32.32l-30.14-64.6A40.15 40.15 0 0 0 73.43 80H64a40 40 0 0 0-40 40v24a40 40 0 0 0 40 40h8a32 32 0 0 0 29.34-19.2a8 8 0 1 1 14.66 6.4A48 48 0 0 1 72 200h-8a56.06 56.06 0 0 1-56-56v-24a56.06 56.06 0 0 1 56-56h9.43a56.22 56.22 0 0 1 50.75 32.32l30.14 64.6A40.15 40.15 0 0 0 190.57 184H208a24 24 0 0 0 0-48h-20a36 36 0 0 1 0-72h20a32 32 0 0 1 32 32a8 8 0 0 1-16 0a16 16 0 0 0-16-16h-20a20 20 0 0 0 0 40h20a40 40 0 0 1 40 40"></svg:path>`,
})
export class PhLastfmLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLastfmLogoBoldIcon],svg[ph-lastfm-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 160a44.05 44.05 0 0 1-44 44h-17.43a60.2 60.2 0 0 1-54.37-34.63l-30.15-64.59A36.13 36.13 0 0 0 73.43 84H64a36 36 0 0 0-36 36v24a36 36 0 0 0 36 36h8a28 28 0 0 0 25.68-16.8a12 12 0 1 1 22 9.6A52 52 0 0 1 72 204h-8a60.07 60.07 0 0 1-60-60v-24a60.07 60.07 0 0 1 60-60h9.43a60.2 60.2 0 0 1 54.37 34.63l30.2 64.59A36.13 36.13 0 0 0 190.57 180H208a20 20 0 0 0 0-40h-20a40 40 0 0 1 0-80h20a36 36 0 0 1 36 36a12 12 0 0 1-24 0a12 12 0 0 0-12-12h-20a16 16 0 0 0 0 32h20a44.05 44.05 0 0 1 44 44"></svg:path>`,
})
export class PhLastfmLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLastfmLogoDuotoneIcon],svg[ph-lastfm-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 160a32 32 0 0 1-32 32H64a48 48 0 0 1-48-48v-24a48 48 0 0 1 48-48h144a24 24 0 0 1 24 24Z" opacity=".2"></svg:path><svg:path d="M248 160a40 40 0 0 1-40 40h-17.43a56.22 56.22 0 0 1-50.75-32.32l-30.14-64.6A40.15 40.15 0 0 0 73.43 80H64a40 40 0 0 0-40 40v24a40 40 0 0 0 40 40h8a32 32 0 0 0 29.34-19.2a8 8 0 1 1 14.66 6.4A48 48 0 0 1 72 200h-8a56.06 56.06 0 0 1-56-56v-24a56.06 56.06 0 0 1 56-56h9.43a56.22 56.22 0 0 1 50.75 32.32l30.14 64.6A40.15 40.15 0 0 0 190.57 184H208a24 24 0 0 0 0-48h-20a36 36 0 0 1 0-72h20a32 32 0 0 1 32 32a8 8 0 0 1-16 0a16 16 0 0 0-16-16h-20a20 20 0 0 0 0 40h20a40 40 0 0 1 40 40"></svg:path></svg:g>`,
})
export class PhLastfmLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLastfmLogoFillIcon],svg[ph-lastfm-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 144h-11.39a40.09 40.09 0 0 1-36.42-23.45l-23-50.48A24 24 0 0 0 91.39 96H80a24 24 0 0 0-24 24v24a24 24 0 0 0 24 24h8a23.92 23.92 0 0 0 18.74-9a8 8 0 1 1 12.48 10A39.83 39.83 0 0 1 88 184h-8a40 40 0 0 1-40-40v-24a40 40 0 0 1 40-40h11.39a40.09 40.09 0 0 1 36.42 23.45l22.95 50.48A24 24 0 0 0 172.61 168H184a16 16 0 0 0 0-32h-8a28 28 0 0 1 0-56h12a20 20 0 0 1 20 20a8 8 0 0 1-16 0a4 4 0 0 0-4-4h-12a12 12 0 0 0 0 24h8a32 32 0 0 1 0 64"></svg:path>`,
})
export class PhLastfmLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLastfmLogoLightIcon],svg[ph-lastfm-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 160a38 38 0 0 1-38 38h-17.43a54.21 54.21 0 0 1-48.94-31.16l-30.14-64.6A42.14 42.14 0 0 0 73.43 78H64a42 42 0 0 0-42 42v24a42 42 0 0 0 42 42h8a34 34 0 0 0 31.17-20.4a6 6 0 0 1 11 4.8A46 46 0 0 1 72 198h-8a54.06 54.06 0 0 1-54-54v-24a54.06 54.06 0 0 1 54-54h9.43a54.21 54.21 0 0 1 48.94 31.16l30.14 64.6A42.14 42.14 0 0 0 190.57 186H208a26 26 0 0 0 0-52h-20a34 34 0 0 1 0-68h20a30 30 0 0 1 30 30a6 6 0 0 1-12 0a18 18 0 0 0-18-18h-20a22 22 0 0 0 0 44h20a38 38 0 0 1 38 38"></svg:path>`,
})
export class PhLastfmLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLastfmLogoThinIcon],svg[ph-lastfm-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 160a36 36 0 0 1-36 36h-17.43a52.19 52.19 0 0 1-47.12-30l-30.15-64.6A44.17 44.17 0 0 0 73.43 76H64a44.05 44.05 0 0 0-44 44v24a44.05 44.05 0 0 0 44 44h8a36 36 0 0 0 33-21.6a4 4 0 1 1 7.33 3.2A44 44 0 0 1 72 196h-8a52.06 52.06 0 0 1-52-52v-24a52.06 52.06 0 0 1 52-52h9.43a52.19 52.19 0 0 1 47.12 30l30.15 64.6a44.17 44.17 0 0 0 39.87 25.4H208a28 28 0 0 0 0-56h-20a32 32 0 0 1 0-64h20a28 28 0 0 1 28 28a4 4 0 0 1-8 0a20 20 0 0 0-20-20h-20a24 24 0 0 0 0 48h20a36 36 0 0 1 36 36"></svg:path>`,
})
export class PhLastfmLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLayoutIcon],svg[ph-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v40H40V56ZM40 112h56v88H40Zm176 88H112v-88h104z"></svg:path>`,
})
export class PhLayoutIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLayoutBoldIcon],svg[ph-layout-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 24v32H44V60ZM44 116h48v80H44Zm72 80v-80h96v80Z"></svg:path>`,
})
export class PhLayoutBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLayoutDuotoneIcon],svg[ph-layout-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 104v104H40a8 8 0 0 1-8-8v-96Z" opacity=".2"></svg:path><svg:path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 16v40H40V56ZM40 112h56v88H40Zm176 88H112v-88h104z"></svg:path></svg:g>`,
})
export class PhLayoutDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLayoutFillIcon],svg[ph-layout-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 56h176v40H40Zm176 144H112v-88h104z"></svg:path>`,
})
export class PhLayoutFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLayoutLightIcon],svg[ph-layout-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M40 54h176a2 2 0 0 1 2 2v42H38V56a2 2 0 0 1 2-2m-2 146v-90h60v92H40a2 2 0 0 1-2-2m178 2H110v-92h108v90a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhLayoutLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLayoutThinIcon],svg[ph-layout-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M40 52h176a4 4 0 0 1 4 4v44H36V56a4 4 0 0 1 4-4m-4 148v-92h64v96H40a4 4 0 0 1-4-4m180 4H108v-96h112v92a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhLayoutThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLeafIcon],svg[ph-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.45 40.07a8 8 0 0 0-7.52-7.52C139.8 28.08 78.82 51 52.82 94a87.1 87.1 0 0 0-12.76 49c.57 15.92 5.21 32 13.79 47.85l-19.51 19.5a8 8 0 0 0 11.32 11.32l19.5-19.51C81 210.73 97.09 215.37 113 215.94q1.67.06 3.33.06A86.93 86.93 0 0 0 162 203.18c43-26 65.93-86.97 61.45-163.11m-69.7 149.43c-22.75 13.78-49.68 14-76.71.77l88.63-88.62a8 8 0 0 0-11.32-11.32L65.73 179c-13.19-27-13-54 .77-76.71c22.09-36.47 74.6-56.44 141.31-54.06c2.39 66.66-17.59 119.18-54.06 141.27"></svg:path>`,
})
export class PhLeafIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLeafBoldIcon],svg[ph-leaf-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.42 39.86a12 12 0 0 0-11.28-11.28c-39.6-2.33-74.59 2.34-104 13.87C84 53.48 62.31 70.58 49.39 91.9c-17.62 29.11-17.66 64.45-.45 98.19l-17.43 17.43a12 12 0 0 0 17 17l17.43-17.43c16.74 8.54 33.88 12.85 50.45 12.85a91.3 91.3 0 0 0 47.74-13.3c21.32-12.92 38.42-34.62 49.45-62.75c11.5-29.43 16.17-64.43 13.84-104.03m-75.76 146.22C131.57 198.25 108 199.17 83.94 189l84.54-84.54a12 12 0 1 0-17-17L67 172.06c-10.14-24-9.22-47.63 3-67.72c20.91-34.53 70.54-53.72 134-52.25c1.38 63.44-17.81 113.08-52.34 133.99"></svg:path>`,
})
export class PhLeafBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLeafDuotoneIcon],svg[ph-leaf-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M63.81 192.19c-47.89-79.81 16-159.62 151.64-151.64c7.98 135.68-71.83 199.53-151.64 151.64" opacity=".2"></svg:path><svg:path d="M223.45 40.07a8 8 0 0 0-7.52-7.52C139.8 28.08 78.82 51 52.82 94a87.1 87.1 0 0 0-12.76 49c.57 15.92 5.21 32 13.79 47.85l-19.51 19.5a8 8 0 0 0 11.32 11.32l19.5-19.51C81 210.73 97.09 215.37 113 215.94q1.67.06 3.33.06A86.93 86.93 0 0 0 162 203.18c43-26 65.93-86.97 61.45-163.11m-69.7 149.43c-22.75 13.78-49.68 14-76.71.77l88.63-88.62a8 8 0 0 0-11.32-11.32L65.73 179c-13.19-27-13-54 .77-76.71c22.09-36.47 74.6-56.44 141.31-54.06c2.39 66.66-17.59 119.18-54.06 141.27"></svg:path></svg:g>`,
})
export class PhLeafDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLeafFillIcon],svg[ph-leaf-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M223.45 40.07a8 8 0 0 0-7.52-7.52C139.8 28.08 78.82 51 52.82 94a87.1 87.1 0 0 0-12.76 49a101.7 101.7 0 0 0 6.64 32.2a4 4 0 0 0 6.61 1.43l85-86.3a8 8 0 0 1 11.32 11.32l-92.89 94.29l-14.19 14.19a8.2 8.2 0 0 0-.6 11.1a8 8 0 0 0 11.71.43l16.79-16.79c14.14 6.84 28.41 10.57 42.56 11.07q1.67.06 3.33.06A86.93 86.93 0 0 0 162 203.18c43-26 65.93-86.97 61.45-163.11"></svg:path>`,
})
export class PhLeafFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLeafLightIcon],svg[ph-leaf-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.45 40.19a6 6 0 0 0-5.64-5.64C140.43 30.11 80.14 52.71 54.53 95c-17.44 28.79-16.76 62.8 1.79 96.2l-20.56 20.56a6 6 0 1 0 8.48 8.48l20.56-20.56c17.27 9.59 34.7 14.41 51.49 14.41A85.4 85.4 0 0 0 161 201.47c42.29-25.61 64.88-85.9 60.45-161.28m-66.66 151c-24.08 14.58-52.64 14.37-81.13-.39l90.59-90.59a6 6 0 0 0-8.48-8.48l-90.59 90.61c-14.76-28.49-15-57-.39-81.13c22.68-37.43 76.63-57.8 145-54.95c2.8 68.32-17.57 122.28-55 144.95Z"></svg:path>`,
})
export class PhLeafLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLeafThinIcon],svg[ph-leaf-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.45 40.31a4 4 0 0 0-3.76-3.76C141.06 32.16 81.46 54.39 56.24 96C39 124.56 39.9 158.37 58.8 191.54l-21.63 21.63a4 4 0 0 0 5.66 5.66l21.63-21.64c17.39 9.91 35 14.89 51.83 14.89A83.43 83.43 0 0 0 160 199.76c41.61-25.22 63.84-84.83 59.45-159.45m-63.63 152.61c-25.37 15.37-55.56 14.75-85.48-1.61l92.5-92.49a4 4 0 0 0-5.66-5.66l-92.49 92.5c-16.36-29.92-17-60.11-1.61-85.48C86.34 61.77 141.72 41 211.66 44.34c3.34 69.94-17.43 125.32-55.84 148.58"></svg:path>`,
})
export class PhLeafThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLecternIcon],svg[ph-lectern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.3 120.84l-40-80A15.92 15.92 0 0 0 192 32H64a15.92 15.92 0 0 0-14.3 8.84l-40 80A16 16 0 0 0 24 144h96v64H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-64h96a16 16 0 0 0 14.31-23.16ZM24 128l40-80h128l40 80Zm168-24a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h112a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhLecternIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLecternBoldIcon],svg[ph-lectern-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249.87 119.06l-40-80A19.89 19.89 0 0 0 192 28H64a19.89 19.89 0 0 0-17.87 11.06l-40 80A20 20 0 0 0 24 148h92v56H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24h-20v-56h92a20 20 0 0 0 17.89-28.94ZM30.49 124l36-72h123l36 72ZM192 100a12 12 0 0 1-12 12H76a12 12 0 0 1 0-24h104a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhLecternBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLecternDuotoneIcon],svg[ph-lectern-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 136H24a8 8 0 0 1-7.16-11.58l40-80A8 8 0 0 1 64 40h128a8 8 0 0 1 7.16 4.42l40 80A8 8 0 0 1 232 136" opacity=".2"></svg:path><svg:path d="m246.3 120.84l-40-80A15.92 15.92 0 0 0 192 32H64a15.92 15.92 0 0 0-14.3 8.84l-40 80A16 16 0 0 0 24 144h96v64H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-64h96a16 16 0 0 0 14.31-23.16ZM24 128l40-80h128l40 80Zm168-24a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h112a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhLecternDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLecternFillIcon],svg[ph-lectern-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.3 120.84l-40-80A15.92 15.92 0 0 0 192 32H64a15.92 15.92 0 0 0-14.3 8.84l-40 80A16 16 0 0 0 24 144h96v64H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-64h96a16 16 0 0 0 14.31-23.16ZM192 120H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhLecternFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLecternLightIcon],svg[ph-lectern-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m244.51 121.74l-40-80A13.92 13.92 0 0 0 192 34H64a13.92 13.92 0 0 0-12.52 7.74l-40 80A14 14 0 0 0 24 142h98v68H96a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12h-26v-68h98a14 14 0 0 0 12.52-20.26Zm-10.82 7.31a1.93 1.93 0 0 1-1.7.95H24a2 2 0 0 1-1.79-2.89l40-80A2 2 0 0 1 64 46h128a2 2 0 0 1 1.79 1.11l40 80a2 2 0 0 1-.1 1.94M190 104a6 6 0 0 1-6 6H72a6 6 0 0 1 0-12h112a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhLecternLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLecternThinIcon],svg[ph-lectern-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242.72 122.63l-40-80A11.93 11.93 0 0 0 192 36H64a11.93 11.93 0 0 0-10.73 6.63l-40 80A12 12 0 0 0 24 140h100v72H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8h-28v-72h100a12 12 0 0 0 10.73-17.37Zm-7.33 7.47A3.94 3.94 0 0 1 232 132H24a4 4 0 0 1-3.58-5.79l40-80A4 4 0 0 1 64 44h128a4 4 0 0 1 3.58 2.21l40 80a3.94 3.94 0 0 1-.19 3.89M188 104a4 4 0 0 1-4 4H72a4 4 0 0 1 0-8h112a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhLecternThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoIcon],svg[ph-lego-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.58 72.84L197.29 49.7C191.54 39.24 177.21 32 160 32c-22.43 0-40 12.3-40 28a20.8 20.8 0 0 0 1.06 6.53l-19.52 9.76A53.7 53.7 0 0 0 80 72c-22.43 0-40 12.3-40 28a20.8 20.8 0 0 0 1.06 6.53l-28.64 14.31A8 8 0 0 0 8 128v64a8 8 0 0 0 4.42 7.16l64 32a8 8 0 0 0 7.16 0l160-80A8 8 0 0 0 248 144V80a8 8 0 0 0-4.42-7.16M80 151.06L33.89 128L51 119.45c7.24 5.29 17.48 8.55 29 8.55c22.43 0 40-12.3 40-28a21.77 21.77 0 0 0-4.35-12.88L131 79.45c7.24 5.29 17.48 8.55 29 8.55c18.38 0 33.49-8.26 38.35-19.88L222.11 80ZM160 48c13.74 0 24 6.34 24 12s-10.26 12-24 12s-24-6.34-24-12s10.26-12 24-12M80 88c13.74 0 24 6.34 24 12s-10.26 12-24 12c-9.67 0-17.61-3.14-21.47-7a8 8 0 0 0-.84-.93A6.62 6.62 0 0 1 56 100c0-5.66 10.26-12 24-12m-56 52.94l48 24v46.12l-48-24Zm64 70.12v-46.12l144-72v46.12Z"></svg:path>`,
})
export class PhLegoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoBoldIcon],svg[ph-lego-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.36 77.28l-41.62-20.83C201.38 40.24 183 28 160 28c-24.67 0-44 14.06-44 32a25 25 0 0 0 2.69 11.24l-9.4 4.7C101.56 71 91.35 68 80 68c-24.67 0-44 14.06-44 32a25 25 0 0 0 2.69 11.24l-28.06 14A12 12 0 0 0 4 136v56a12 12 0 0 0 6.63 10.73l64 32a12 12 0 0 0 10.74 0l160-80A12 12 0 0 0 252 144V88a12 12 0 0 0-6.64-10.72M80 154.58L42.83 136l15.81-7.9A58.2 58.2 0 0 0 80 132c24.67 0 44-14.06 44-32a25.4 25.4 0 0 0-.4-4.38l15-7.52A58.2 58.2 0 0 0 160 92c14.72 0 27.53-5 35.47-12.85l17.7 8.85ZM160 52c12.91 0 20 6 20 8s-7.09 8-20 8s-20-6-20-8s7.09-8 20-8M80 92c12.91 0 20 6 20 8s-7.09 8-20 8s-20-6-20-8s7.09-8 20-8m-52 63.42l40 20v29.16l-40-20Zm64 49.16v-29.16l136-68v29.16Z"></svg:path>`,
})
export class PhLegoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoDuotoneIcon],svg[ph-lego-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 80v64L80 224v-64Z" opacity=".2"></svg:path><svg:path d="M243.58 72.84L197.29 49.7C191.54 39.24 177.21 32 160 32c-22.43 0-40 12.3-40 28a20.8 20.8 0 0 0 1.06 6.53l-19.52 9.76A53.7 53.7 0 0 0 80 72c-22.43 0-40 12.3-40 28a20.8 20.8 0 0 0 1.06 6.53l-28.64 14.31A8 8 0 0 0 8 128v64a8 8 0 0 0 4.42 7.16l64 32a8 8 0 0 0 7.16 0l160-80A8 8 0 0 0 248 144V80a8 8 0 0 0-4.42-7.16M80 151.06L33.89 128L51 119.45c7.24 5.29 17.48 8.55 29 8.55c22.43 0 40-12.3 40-28a21.77 21.77 0 0 0-4.35-12.88L131 79.45c7.24 5.29 17.48 8.55 29 8.55c18.38 0 33.49-8.26 38.35-19.88L222.11 80ZM160 48c13.74 0 24 6.34 24 12s-10.26 12-24 12s-24-6.34-24-12s10.26-12 24-12M80 88c13.74 0 24 6.34 24 12s-10.26 12-24 12c-9.67 0-17.61-3.14-21.47-7a8 8 0 0 0-.84-.93A6.62 6.62 0 0 1 56 100c0-5.66 10.26-12 24-12m-56 52.94l48 24v46.12l-48-24Zm64 70.12v-46.12l144-72v46.12Z"></svg:path></svg:g>`,
})
export class PhLegoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoFillIcon],svg[ph-lego-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.94 79.21a8 8 0 0 0-4.36-6.37L197.29 49.7C191.54 39.24 177.21 32 160 32c-22.43 0-40 12.3-40 28a20.8 20.8 0 0 0 1.06 6.53l-19.52 9.76A53.7 53.7 0 0 0 80 72c-22.43 0-40 12.3-40 28a20.8 20.8 0 0 0 1.06 6.53l-28.64 14.31A8 8 0 0 0 8 128v64a8 8 0 0 0 4.42 7.16l64 32a8 8 0 0 0 7.16 0l160-80A8 8 0 0 0 248 144V80a4.5 4.5 0 0 0-.06-.79M80 151.06L33.89 128L51 119.45c7.24 5.29 17.48 8.55 29 8.55c22.43 0 40-12.3 40-28a21.77 21.77 0 0 0-4.35-12.88L131 79.45c7.24 5.29 17.48 8.55 29 8.55c18.38 0 33.49-8.26 38.35-19.88L222.11 80ZM160 48c12.23 0 21.69 5 23.63 10.12c0 .09.07.18.11.28A5.3 5.3 0 0 1 184 60c0 5.66-10.26 12-24 12c-9.66 0-17.6-3.14-21.46-7a7 7 0 0 0-.86-.93A6.66 6.66 0 0 1 136 60c0-5.66 10.26-12 24-12M80 88a37 37 0 0 1 17.13 3.87a7.5 7.5 0 0 0 1 .56c3.69 2.21 5.87 5 5.87 7.57c0 5.66-10.26 12-24 12c-9.67 0-17.61-3.14-21.47-7a7.5 7.5 0 0 0-.84-.93A6.62 6.62 0 0 1 56 100c0-5.66 10.26-12 24-12m-56 52.94l48 24v46.12l-48-24Z"></svg:path>`,
})
export class PhLegoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoLightIcon],svg[ph-lego-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m242.68 74.63l-46.83-23.41C190.69 41.09 176.78 34 160 34c-21.31 0-38 11.42-38 26a19.1 19.1 0 0 0 1.56 7.51l-22 11A51.5 51.5 0 0 0 80 74c-21.31 0-38 11.42-38 26a19.1 19.1 0 0 0 1.56 7.51l-30.24 15.12A6 6 0 0 0 10 128v64a6 6 0 0 0 3.32 5.37l64 32a6 6 0 0 0 5.36 0l160-80A6 6 0 0 0 246 144V80a6 6 0 0 0-3.32-5.37M80 153.29L29.42 128l21.77-10.88C58.1 122.59 68.36 126 80 126c21.31 0 38-11.42 38-26a20.4 20.4 0 0 0-5.43-13.58l18.62-9.3C138.1 82.59 148.36 86 160 86c18.63 0 33.74-8.73 37.23-20.67L226.58 80ZM160 46c15.32 0 26 7.38 26 14s-10.68 14-26 14s-26-7.38-26-14s10.68-14 26-14M80 86c15.32 0 26 7.38 26 14s-10.68 14-26 14s-26-7.38-26-14s10.68-14 26-14m-58 51.71l52 26v50.58l-52-26Zm64 76.58v-50.58l148-74v50.58Z"></svg:path>`,
})
export class PhLegoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoSmileyIcon],svg[ph-lego-smiley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 124a12 12 0 1 1 12-12a12 12 0 0 1-12 12m56-24a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-4.27 45.23a45 45 0 0 1-47.46 0a8 8 0 0 0-8.54 13.54a61 61 0 0 0 64.54 0a8 8 0 0 0-8.54-13.54M216 80v96a32.06 32.06 0 0 1-24 31v17a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16v-17a32.06 32.06 0 0 1-24-31V80a32 32 0 0 1 32-32h16V32a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v16h16a32 32 0 0 1 32 32M104 48h48V32h-48Zm72 176v-16H80v16Zm24-144a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16Z"></svg:path>`,
})
export class PhLegoSmileyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoSmileyBoldIcon],svg[ph-lego-smiley-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 112a16 16 0 1 1 16 16a16 16 0 0 1-16-16m72-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-6.4 45.85a41 41 0 0 1-43.2 0a12 12 0 1 0-12.8 20.3a65 65 0 0 0 68.8 0a12 12 0 1 0-12.8-20.3M220 84v88a36.07 36.07 0 0 1-24 33.94V224a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20v-18.06A36.07 36.07 0 0 1 36 172V84a36 36 0 0 1 36-36h12V32a20 20 0 0 1 20-20h48a20 20 0 0 1 20 20v16h12a36 36 0 0 1 36 36M108 48h40V36h-40Zm64 172v-12H84v12Zm24-136a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v88a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12Z"></svg:path>`,
})
export class PhLegoSmileyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoSmileyDuotoneIcon],svg[ph-lego-smiley-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 80v96a24 24 0 0 1-24 24H72a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h112a24 24 0 0 1 24 24" opacity=".2"></svg:path><svg:path d="M100 124a12 12 0 1 1 12-12a12 12 0 0 1-12 12m56-24a12 12 0 1 0 12 12a12 12 0 0 0-12-12m-4.27 45.23a45 45 0 0 1-47.46 0a8 8 0 0 0-8.54 13.54a61 61 0 0 0 64.54 0a8 8 0 0 0-8.54-13.54M216 80v96a32.06 32.06 0 0 1-24 31v17a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16v-17a32.06 32.06 0 0 1-24-31V80a32 32 0 0 1 32-32h16V32a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v16h16a32 32 0 0 1 32 32M104 48h48V32h-48Zm72 176v-16H80v16Zm24-144a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16Z"></svg:path></svg:g>`,
})
export class PhLegoSmileyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoSmileyFillIcon],svg[ph-lego-smiley-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 48h-16V32a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v16H72a32 32 0 0 0-32 32v96a32.06 32.06 0 0 0 24 31v17a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16v-17a32.06 32.06 0 0 0 24-31V80a32 32 0 0 0-32-32m-28 52a12 12 0 1 1-12 12a12 12 0 0 1 12-12m4.27 58.77a61 61 0 0 1-64.54 0a8 8 0 0 1 8.54-13.54a45 45 0 0 0 47.46 0a8 8 0 0 1 8.54 13.54M104 32h48v16h-48Zm-4 68a12 12 0 1 1-12 12a12 12 0 0 1 12-12m76 124H80v-16h96Z"></svg:path>`,
})
export class PhLegoSmileyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoSmileyLightIcon],svg[ph-lego-smiley-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 122a10 10 0 1 1 10-10a10 10 0 0 1-10 10m56-20a10 10 0 1 0 10 10a10 10 0 0 0-10-10m-3.2 44.92a47 47 0 0 1-49.6 0a6 6 0 0 0-6.4 10.16a59 59 0 0 0 62.4 0a6 6 0 1 0-6.4-10.16M214 80v96a30.05 30.05 0 0 1-24 29.4V224a14 14 0 0 1-14 14H80a14 14 0 0 1-14-14v-18.6A30.05 30.05 0 0 1 42 176V80a30 30 0 0 1 30-30h18V32a14 14 0 0 1 14-14h48a14 14 0 0 1 14 14v18h18a30 30 0 0 1 30 30M102 50h52V32a2 2 0 0 0-2-2h-48a2 2 0 0 0-2 2Zm76 174v-18H78v18a2 2 0 0 0 2 2h96a2 2 0 0 0 2-2m24-144a18 18 0 0 0-18-18H72a18 18 0 0 0-18 18v96a18 18 0 0 0 18 18h112a18 18 0 0 0 18-18Z"></svg:path>`,
})
export class PhLegoSmileyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoSmileyThinIcon],svg[ph-lego-smiley-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 120a8 8 0 1 1 8-8a8 8 0 0 1-8 8m56-16a8 8 0 1 0 8 8a8 8 0 0 0-8-8m-2.13 44.62a49 49 0 0 1-51.74 0a4 4 0 0 0-4.26 6.77a57 57 0 0 0 60.26 0a4 4 0 0 0-4.26-6.76ZM212 80v96a28 28 0 0 1-24 27.71V224a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12v-20.29A28 28 0 0 1 44 176V80a28 28 0 0 1 28-28h20V32a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v20h20a28 28 0 0 1 28 28M100 52h56V32a4 4 0 0 0-4-4h-48a4 4 0 0 0-4 4Zm80 172v-20H76v20a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4m24-144a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v96a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20Z"></svg:path>`,
})
export class PhLegoSmileyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLegoThinIcon],svg[ph-lego-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m241.79 76.42l-47.42-23.71C189.84 42.92 176.36 36 160 36c-20.19 0-36 10.54-36 24a17.55 17.55 0 0 0 2.2 8.43L101.65 80.7A49.2 49.2 0 0 0 80 76c-20.19 0-36 10.54-36 24a17.55 17.55 0 0 0 2.2 8.43l-32 16A4 4 0 0 0 12 128v64a4 4 0 0 0 2.21 3.58l64 32a4 4 0 0 0 3.58 0l160-80A4 4 0 0 0 244 144V80a4 4 0 0 0-2.21-3.58M160 44c15.18 0 28 7.33 28 16s-12.82 16-28 16s-28-7.33-28-16s12.82-16 28-16m-28.57 30.76C138 80.41 148.23 84 160 84c19 0 34.09-9.32 35.83-21.61L231.06 80L80 155.53L24.94 128l26.49-13.24C58 120.41 68.23 124 80 124c20.19 0 36-10.54 36-24c0-5.34-2.49-10.21-6.75-14.15ZM80 84c15.18 0 28 7.33 28 16s-12.82 16-28 16c-10.49 0-19.85-3.5-24.63-8.52c-.09-.12-.19-.21-.28-.31A10.7 10.7 0 0 1 52 100c0-8.67 12.82-16 28-16m-60 50.47l56 28v55.06l-56-28Zm64 83.06v-55.06l152-76v55.06Z"></svg:path>`,
})
export class PhLegoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanIcon],svg[ph-less-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207.23 203.42a8 8 0 0 1-10.66 3.81l-152-72a8 8 0 0 1 0-14.46l152-72a8 8 0 1 1 6.85 14.46L66.69 128l136.73 64.77a8 8 0 0 1 3.81 10.65"></svg:path>`,
})
export class PhLessThanIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanBoldIcon],svg[ph-less-than-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.84 205.13a12 12 0 0 1-16 5.71l-152-72a12 12 0 0 1 0-21.68l152-72a12 12 0 1 1 10.27 21.69L76 128l129.1 61.15a12 12 0 0 1 5.74 15.98"></svg:path>`,
})
export class PhLessThanBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanDuotoneIcon],svg[ph-less-than-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 56v144L48 128Z" opacity=".2"></svg:path><svg:path d="M207.23 203.42a8 8 0 0 1-10.66 3.81l-152-72a8 8 0 0 1 0-14.46l152-72a8 8 0 1 1 6.85 14.46L66.69 128l136.73 64.77a8 8 0 0 1 3.81 10.65"></svg:path></svg:g>`,
})
export class PhLessThanDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanFillIcon],svg[ph-less-than-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-28.65 136.74a8 8 0 1 1-6.7 14.52l-104-48a8 8 0 0 1 0-14.52l104-48a8 8 0 0 1 6.7 14.52L91.09 128Z"></svg:path>`,
})
export class PhLessThanFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanLightIcon],svg[ph-less-than-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.42 202.57a6 6 0 0 1-8 2.85l-152-72a6 6 0 0 1 0-10.84l152-72a6 6 0 0 1 5.14 10.84L62 128l140.55 66.58a6 6 0 0 1 2.87 7.99"></svg:path>`,
})
export class PhLessThanLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanOrEqualIcon],svg[ph-less-than-or-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 104a8 8 0 0 1 5.23-7.5l152-56a8 8 0 0 1 5.53 15L71.14 104l131.62 48.49A8 8 0 0 1 200 168a8.1 8.1 0 0 1-2.77-.49l-152-56A8 8 0 0 1 40 104m160 88H48a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhLessThanOrEqualIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanOrEqualBoldIcon],svg[ph-less-than-or-equal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 104a12 12 0 0 1 7.85-11.26l152-56a12 12 0 1 1 8.3 22.52L82.71 104l121.44 44.74A12 12 0 0 1 200 172a11.9 11.9 0 0 1-4.15-.74l-152-56A12 12 0 0 1 36 104m164 84H48a12 12 0 0 0 0 24h152a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhLessThanOrEqualBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanOrEqualDuotoneIcon],svg[ph-less-than-or-equal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 48v112L48 104Z" opacity=".2"></svg:path><svg:path d="M40 104a8 8 0 0 1 5.23-7.5l152-56a8 8 0 0 1 5.53 15L71.14 104l131.62 48.49A8 8 0 0 1 200 168a8.1 8.1 0 0 1-2.77-.49l-152-56A8 8 0 0 1 40 104m160 88H48a8 8 0 0 0 0 16h152a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhLessThanOrEqualDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanOrEqualFillIcon],svg[ph-less-than-or-equal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 152H72a8 8 0 0 1 0-16h104a8 8 0 0 1 0 16m2.35-55.65a8 8 0 0 1-4.7 15.3l-104-32a8 8 0 0 1 0-15.3l104-32a8 8 0 0 1 4.7 15.3L99.2 104Z"></svg:path>`,
})
export class PhLessThanOrEqualFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanOrEqualLightIcon],svg[ph-less-than-or-equal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42 104a6 6 0 0 1 3.93-5.63l152-56a6 6 0 1 1 4.15 11.26L65.36 104l136.71 50.37A6 6 0 0 1 200 166a6.1 6.1 0 0 1-2.08-.37l-152-56A6 6 0 0 1 42 104m158 90H48a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhLessThanOrEqualLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanOrEqualThinIcon],svg[ph-less-than-or-equal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 104a4 4 0 0 1 2.62-3.75l152-56a4 4 0 1 1 2.76 7.5L59.57 104l141.81 52.25A4 4 0 0 1 200 164a3.9 3.9 0 0 1-1.38-.25l-152-56A4 4 0 0 1 44 104m156 92H48a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhLessThanOrEqualThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLessThanThinIcon],svg[ph-less-than-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M203.61 201.71A4 4 0 0 1 200 204a3.85 3.85 0 0 1-1.71-.39l-152-72a4 4 0 0 1 0-7.23l152-72a4 4 0 0 1 3.42 7.23L57.34 128l144.37 68.38a4 4 0 0 1 1.9 5.33"></svg:path>`,
})
export class PhLessThanThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleHIcon],svg[ph-letter-circle-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m40-128v80a8 8 0 0 1-16 0v-32h-48v32a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0v32h48V88a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhLetterCircleHIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleHBoldIcon],svg[ph-letter-circle-h-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m44-124v80a12 12 0 0 1-24 0v-28h-40v28a12 12 0 0 1-24 0V88a12 12 0 0 1 24 0v28h40V88a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhLetterCircleHBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleHDuotoneIcon],svg[ph-letter-circle-h-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m40-128v80a8 8 0 0 1-16 0v-32h-48v32a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0v32h48V88a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhLetterCircleHDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleHFillIcon],svg[ph-letter-circle-h-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 144a8 8 0 0 1-16 0v-32h-48v32a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0v32h48V88a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhLetterCircleHFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleHLightIcon],svg[ph-letter-circle-h-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m38-130v80a6 6 0 0 1-12 0v-34h-52v34a6 6 0 0 1-12 0V88a6 6 0 0 1 12 0v34h52V88a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhLetterCircleHLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleHThinIcon],svg[ph-letter-circle-h-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m36-132v80a4 4 0 0 1-8 0v-36h-56v36a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0v36h56V88a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhLetterCircleHThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCirclePIcon],svg[ph-letter-circle-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m8-136h-32a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0v-16h24a36 36 0 0 0 0-72m0 56h-24V96h24a20 20 0 0 1 0 40"></svg:path>`,
})
export class PhLetterCirclePIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCirclePBoldIcon],svg[ph-letter-circle-p-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m8-136h-32a12 12 0 0 0-12 12v80a12 12 0 0 0 24 0v-12h20a40 40 0 0 0 0-80m0 56h-20v-32h20a16 16 0 0 1 0 32"></svg:path>`,
})
export class PhLetterCirclePBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCirclePDuotoneIcon],svg[ph-letter-circle-p-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m8-136h-32a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0v-16h24a36 36 0 0 0 0-72m0 56h-24V96h24a20 20 0 0 1 0 40"></svg:path></svg:g>`,
})
export class PhLetterCirclePDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCirclePFillIcon],svg[ph-letter-circle-p-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 116a20 20 0 0 1-20 20h-24V96h24a20 20 0 0 1 20 20m76 12A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-60-12a36 36 0 0 0-36-36h-32a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0v-16h24a36 36 0 0 0 36-36"></svg:path>`,
})
export class PhLetterCirclePFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCirclePLightIcon],svg[ph-letter-circle-p-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m8-136h-32a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0v-18h26a34 34 0 0 0 0-68m0 56h-26V94h26a22 22 0 0 1 0 44"></svg:path>`,
})
export class PhLetterCirclePLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCirclePThinIcon],svg[ph-letter-circle-p-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m8-136h-32a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0v-20h28a32 32 0 0 0 0-64m0 56h-28V92h28a24 24 0 0 1 0 48"></svg:path>`,
})
export class PhLetterCirclePThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleVIcon],svg[ph-letter-circle-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m39.43-117l-32 80a8 8 0 0 1-14.86 0l-32-80a8 8 0 0 1 14.86-6L128 154.46L152.57 93a8 8 0 1 1 14.86 6"></svg:path>`,
})
export class PhLetterCircleVIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleVBoldIcon],svg[ph-letter-circle-v-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m43.14-111.54l-32 80a12 12 0 0 1-22.28 0l-32-80a12 12 0 1 1 22.28-8.92L128 143.69l20.86-52.15a12 12 0 0 1 22.28 8.92"></svg:path>`,
})
export class PhLetterCircleVBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleVDuotoneIcon],svg[ph-letter-circle-v-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m39.43-117l-32 80a8 8 0 0 1-14.86 0l-32-80a8 8 0 0 1 14.86-6L128 154.46L152.57 93a8 8 0 1 1 14.86 6"></svg:path></svg:g>`,
})
export class PhLetterCircleVDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleVFillIcon],svg[ph-letter-circle-v-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.43 75l-32 80a8 8 0 0 1-14.86 0l-32-80a8 8 0 0 1 14.86-6L128 154.46L152.57 93a8 8 0 1 1 14.86 6"></svg:path>`,
})
export class PhLetterCircleVFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleVLightIcon],svg[ph-letter-circle-v-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m37.57-119.77l-32 80a6 6 0 0 1-11.14 0l-32-80a6 6 0 1 1 11.14-4.46L128 159.84l26.43-66.07a6 6 0 0 1 11.14 4.46"></svg:path>`,
})
export class PhLetterCircleVLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLetterCircleVThinIcon],svg[ph-letter-circle-v-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m35.71-122.51l-32 80a4 4 0 0 1-7.42 0l-32-80a4 4 0 1 1 7.42-3L128 165.23l28.29-70.72a4 4 0 1 1 7.42 3Z"></svg:path>`,
})
export class PhLetterCircleVThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLifebuoyIcon],svg[ph-lifebuoy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.1 131.79a47.84 47.84 0 0 0 0-55.58l28.5-28.49a87.83 87.83 0 0 1 0 112.56ZM96 128a32 32 0 1 1 32 32a32 32 0 0 1-32-32m88.28-67.6l-28.49 28.5a47.84 47.84 0 0 0-55.58 0L71.72 60.4a87.83 87.83 0 0 1 112.56 0M60.4 71.72l28.5 28.49a47.84 47.84 0 0 0 0 55.58l-28.5 28.49a87.83 87.83 0 0 1 0-112.56M71.72 195.6l28.49-28.5a47.84 47.84 0 0 0 55.58 0l28.49 28.5a87.83 87.83 0 0 1-112.56 0"></svg:path>`,
})
export class PhLifebuoyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLifebuoyBoldIcon],svg[ph-lifebuoy-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m44.25 135.28a51.89 51.89 0 0 0 0-54.56l23-23a83.84 83.84 0 0 1 0 100.56ZM100 128a28 28 0 1 1 28 28a28 28 0 0 1-28-28m78.28-67.25l-23 23a51.89 51.89 0 0 0-54.56 0l-23-23a83.84 83.84 0 0 1 100.56 0m-117.53 17l23 23a51.89 51.89 0 0 0 0 54.56l-23 23a83.84 83.84 0 0 1 0-100.56m17 117.53l23-23a51.89 51.89 0 0 0 54.56 0l23 23a83.84 83.84 0 0 1-100.56 0"></svg:path>`,
})
export class PhLifebuoyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLifebuoyDuotoneIcon],svg[ph-lifebuoy-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m195.88 195.88l-39.6-39.6a40 40 0 0 0 0-56.56l39.6-39.6a96 96 0 0 1 0 135.76M60.12 60.12a96 96 0 0 0 0 135.76l39.6-39.6a40 40 0 0 1 0-56.56Z" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.1 131.79a47.84 47.84 0 0 0 0-55.58l28.5-28.49a87.83 87.83 0 0 1 0 112.56ZM96 128a32 32 0 1 1 32 32a32 32 0 0 1-32-32m88.28-67.6l-28.49 28.5a47.84 47.84 0 0 0-55.58 0L71.72 60.4a87.83 87.83 0 0 1 112.56 0M60.4 71.72l28.5 28.49a47.84 47.84 0 0 0 0 55.58l-28.5 28.49a87.83 87.83 0 0 1 0-112.56M71.72 195.6l28.49-28.5a47.84 47.84 0 0 0 55.58 0l28.49 28.5a87.83 87.83 0 0 1-112.56 0"></svg:path></svg:g>`,
})
export class PhLifebuoyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLifebuoyFillIcon],svg[ph-lifebuoy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M96 128a32 32 0 1 1 32 32a32 32 0 0 1-32-32m88.28-67.6l-28.49 28.5a47.84 47.84 0 0 0-55.58 0L71.72 60.4a87.83 87.83 0 0 1 112.56 0M71.72 195.6l28.49-28.5a47.84 47.84 0 0 0 55.58 0l28.49 28.5a87.83 87.83 0 0 1-112.56 0"></svg:path>`,
})
export class PhLifebuoyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLifebuoyLightIcon],svg[ph-lifebuoy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m36.47 130a45.87 45.87 0 0 0 0-56l31.24-31.23a89.81 89.81 0 0 1 0 118.44ZM94 128a34 34 0 1 1 34 34a34 34 0 0 1-34-34m93.22-67.71L156 91.53a45.87 45.87 0 0 0-56 0L68.78 60.29a89.81 89.81 0 0 1 118.44 0M60.29 68.78L91.53 100a45.87 45.87 0 0 0 0 56l-31.24 31.22a89.81 89.81 0 0 1 0-118.44m8.49 126.93L100 164.47a45.87 45.87 0 0 0 56 0l31.23 31.24a89.81 89.81 0 0 1-118.44 0Z"></svg:path>`,
})
export class PhLifebuoyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLifebuoyThinIcon],svg[ph-lifebuoy-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m67.79 162.13l-34-34a43.92 43.92 0 0 0 0-56.28l34-34a91.83 91.83 0 0 1 0 124.26ZM92 128a36 36 0 1 1 36 36a36 36 0 0 1-36-36m98.13-67.79l-34 34a43.92 43.92 0 0 0-56.28 0l-34-34a91.83 91.83 0 0 1 124.26 0ZM60.21 65.87l34 34a43.92 43.92 0 0 0 0 56.28l-34 34a91.83 91.83 0 0 1 0-124.26Zm5.66 129.92l34-34a43.92 43.92 0 0 0 56.28 0l34 34a91.83 91.83 0 0 1-124.26 0Z"></svg:path>`,
})
export class PhLifebuoyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbIcon],svg[ph-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 232a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m40-128a87.55 87.55 0 0 1-33.64 69.21A16.24 16.24 0 0 0 176 186v6a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-6a16 16 0 0 0-6.23-12.66A87.59 87.59 0 0 1 40 104.49C39.74 56.83 78.26 17.14 125.88 16A88 88 0 0 1 216 104m-16 0a72 72 0 0 0-73.74-72c-39 .92-70.47 33.39-70.26 72.39a71.65 71.65 0 0 0 27.64 56.3A32 32 0 0 1 96 186v6h64v-6a32.15 32.15 0 0 1 12.47-25.35A71.65 71.65 0 0 0 200 104m-16.11-9.34a57.6 57.6 0 0 0-46.56-46.55a8 8 0 0 0-2.66 15.78c16.57 2.79 30.63 16.85 33.44 33.45A8 8 0 0 0 176 104a9 9 0 0 0 1.35-.11a8 8 0 0 0 6.54-9.23"></svg:path>`,
})
export class PhLightbulbIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbBoldIcon],svg[ph-lightbulb-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 232a12 12 0 0 1-12 12H88a12 12 0 0 1 0-24h80a12 12 0 0 1 12 12m40-128a91.51 91.51 0 0 1-35.17 72.35A12.26 12.26 0 0 0 180 186v2a20 20 0 0 1-20 20H96a20 20 0 0 1-20-20v-2a12 12 0 0 0-4.7-9.51A91.57 91.57 0 0 1 36 104.52C35.73 54.69 76 13.2 125.79 12A92 92 0 0 1 220 104m-24 0a68 68 0 0 0-69.65-68C89.56 36.88 59.8 67.55 60 104.38a67.71 67.71 0 0 0 26.1 53.19A35.87 35.87 0 0 1 100 184h56.1a36.13 36.13 0 0 1 13.9-26.51A67.68 67.68 0 0 0 196 104m-20.07-5.32a48.5 48.5 0 0 0-31.91-40a12 12 0 0 0-8 22.62a24.31 24.31 0 0 1 16.09 20a12 12 0 0 0 23.86-2.64Z"></svg:path>`,
})
export class PhLightbulbBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbDuotoneIcon],svg[ph-lightbulb-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104a79.86 79.86 0 0 1-30.59 62.92A24.29 24.29 0 0 0 168 186v6a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8v-6a24.11 24.11 0 0 0-9.3-19A79.87 79.87 0 0 1 48 104.45C47.76 61.09 82.72 25 126.07 24A80 80 0 0 1 208 104" opacity=".2"></svg:path><svg:path d="M176 232a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m40-128a87.55 87.55 0 0 1-33.64 69.21A16.24 16.24 0 0 0 176 186v6a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-6a16 16 0 0 0-6.23-12.66A87.59 87.59 0 0 1 40 104.49C39.74 56.83 78.26 17.14 125.88 16A88 88 0 0 1 216 104m-16 0a72 72 0 0 0-73.74-72c-39 .92-70.47 33.39-70.26 72.39a71.65 71.65 0 0 0 27.64 56.3A32 32 0 0 1 96 186v6h64v-6a32.15 32.15 0 0 1 12.47-25.35A71.65 71.65 0 0 0 200 104m-16.11-9.34a57.6 57.6 0 0 0-46.56-46.55a8 8 0 0 0-2.66 15.78c16.57 2.79 30.63 16.85 33.44 33.45A8 8 0 0 0 176 104a9 9 0 0 0 1.35-.11a8 8 0 0 0 6.54-9.23"></svg:path></svg:g>`,
})
export class PhLightbulbDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbFilamentIcon],svg[ph-lightbulb-filament-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 232a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m40-128a87.55 87.55 0 0 1-33.64 69.21A16.24 16.24 0 0 0 176 186v6a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-6a16 16 0 0 0-6.23-12.66A87.59 87.59 0 0 1 40 104.5c-.26-47.67 38.26-87.35 85.88-88.5A88 88 0 0 1 216 104m-16 0a72 72 0 0 0-73.74-72c-39 .92-70.47 33.39-70.26 72.39a71.64 71.64 0 0 0 27.64 56.3A32 32 0 0 1 96 186v6h24v-44.69l-29.66-29.65a8 8 0 0 1 11.32-11.32L128 132.69l26.34-26.35a8 8 0 0 1 11.32 11.32L136 147.31V192h24v-6a32.12 32.12 0 0 1 12.47-25.35A71.65 71.65 0 0 0 200 104"></svg:path>`,
})
export class PhLightbulbFilamentIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbFilamentBoldIcon],svg[ph-lightbulb-filament-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 232a12 12 0 0 1-12 12H88a12 12 0 0 1 0-24h80a12 12 0 0 1 12 12m40-128a92.47 92.47 0 0 1-37 73.73a7.81 7.81 0 0 0-3 6.27a20 20 0 0 1-20 20H96a20 20 0 0 1-20-20v-.23a7.76 7.76 0 0 0-3.25-6.2a91.36 91.36 0 0 1-36.75-73C35.73 54.69 76 13.2 125.79 12A92 92 0 0 1 220 104m-24 0a68 68 0 0 0-69.65-68C89.56 36.89 59.8 67.56 60 104.39a67.52 67.52 0 0 0 27.18 54A32.14 32.14 0 0 1 99.77 180H116v-31l-28.49-28.51a12 12 0 0 1 17-17L128 127l23.51-23.51a12 12 0 0 1 17 17L140 149v31h16.25a31.9 31.9 0 0 1 12.41-21.49A67.45 67.45 0 0 0 196 104"></svg:path>`,
})
export class PhLightbulbFilamentBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbFilamentDuotoneIcon],svg[ph-lightbulb-filament-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104a79.86 79.86 0 0 1-30.59 62.92A24.29 24.29 0 0 0 168 186v6a8 8 0 0 1-8 8H96a8 8 0 0 1-8-8v-6a24.11 24.11 0 0 0-9.3-19A79.87 79.87 0 0 1 48 104.45C47.76 61.09 82.72 25 126.07 24A80 80 0 0 1 208 104" opacity=".2"></svg:path><svg:path d="M176 232a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m40-128a87.55 87.55 0 0 1-33.64 69.21A16.24 16.24 0 0 0 176 186v6a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-6a16 16 0 0 0-6.23-12.66A87.59 87.59 0 0 1 40 104.5c-.26-47.67 38.26-87.35 85.88-88.5A88 88 0 0 1 216 104m-16 0a72 72 0 0 0-73.74-72c-39 .92-70.47 33.39-70.26 72.39a71.64 71.64 0 0 0 27.64 56.3A32 32 0 0 1 96 186v6h24v-44.69l-29.66-29.65a8 8 0 0 1 11.32-11.32L128 132.69l26.34-26.35a8 8 0 0 1 11.32 11.32L136 147.31V192h24v-6a32.12 32.12 0 0 1 12.47-25.35A71.65 71.65 0 0 0 200 104"></svg:path></svg:g>`,
})
export class PhLightbulbFilamentDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbFilamentFillIcon],svg[ph-lightbulb-filament-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 232a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m40-128a87.55 87.55 0 0 1-33.64 69.21A16.24 16.24 0 0 0 176 186v6a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-6a16 16 0 0 0-6.23-12.66A87.59 87.59 0 0 1 40 104.49C39.74 56.83 78.26 17.14 125.88 16A88 88 0 0 1 216 104m-50.34 2.34a8 8 0 0 0-11.32 0L128 132.69l-26.34-26.35a8 8 0 0 0-11.32 11.32L120 147.31V184a8 8 0 0 0 16 0v-36.69l29.66-29.65a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhLightbulbFilamentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbFilamentLightIcon],svg[ph-lightbulb-filament-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 232a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6m40-128a85.56 85.56 0 0 1-32.88 67.64A18.23 18.23 0 0 0 174 186v6a14 14 0 0 1-14 14H96a14 14 0 0 1-14-14v-6a18 18 0 0 0-7-14.23a85.59 85.59 0 0 1-33-67.25c-.26-46.61 37.39-85.4 83.93-86.52A86 86 0 0 1 214 104m-12 0a74 74 0 0 0-75.79-74C86.17 31 53.78 64.34 54 104.42a73.67 73.67 0 0 0 28.4 57.87A29.92 29.92 0 0 1 94 186v6a2 2 0 0 0 2 2h26v-47.51l-30.24-30.25a6 6 0 0 1 8.48-8.48L128 135.52l27.76-27.76a6 6 0 0 1 8.48 8.48L134 146.49V194h26a2 2 0 0 0 2-2v-6a30.18 30.18 0 0 1 11.7-23.78A73.59 73.59 0 0 0 202 104"></svg:path>`,
})
export class PhLightbulbFilamentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbFilamentThinIcon],svg[ph-lightbulb-filament-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 232a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4m40-128a83.59 83.59 0 0 1-32.11 66.06A20.2 20.2 0 0 0 172 186v6a12 12 0 0 1-12 12H96a12 12 0 0 1-12-12v-6a20 20 0 0 0-7.76-15.81A83.58 83.58 0 0 1 44 104.47C43.75 59 80.52 21.09 126 20a84 84 0 0 1 86 84m-8 0a76 76 0 0 0-77.84-76C85 29 51.77 63.27 52 104.43a75.62 75.62 0 0 0 29.17 59.43A28 28 0 0 1 92 186v6a4 4 0 0 0 4 4h28v-50.34l-30.83-30.83a4 4 0 0 1 5.66-5.66L128 138.34l29.17-29.17a4 4 0 1 1 5.66 5.66L132 145.66V196h28a4 4 0 0 0 4-4v-6a28.14 28.14 0 0 1 10.94-22.2A75.62 75.62 0 0 0 204 104"></svg:path>`,
})
export class PhLightbulbFilamentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbFillIcon],svg[ph-lightbulb-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 232a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m40-128a87.55 87.55 0 0 1-33.64 69.21A16.24 16.24 0 0 0 176 186v6a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-6a16 16 0 0 0-6.23-12.66A87.59 87.59 0 0 1 40 104.49C39.74 56.83 78.26 17.14 125.88 16A88 88 0 0 1 216 104m-32.11-9.34a57.6 57.6 0 0 0-46.56-46.55a8 8 0 0 0-2.66 15.78c16.57 2.79 30.63 16.85 33.44 33.45A8 8 0 0 0 176 104a9 9 0 0 0 1.35-.11a8 8 0 0 0 6.54-9.23"></svg:path>`,
})
export class PhLightbulbFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbLightIcon],svg[ph-lightbulb-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M174 232a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6m40-128a85.56 85.56 0 0 1-32.88 67.64A18.23 18.23 0 0 0 174 186v6a14 14 0 0 1-14 14H96a14 14 0 0 1-14-14v-6a18 18 0 0 0-7-14.23a85.59 85.59 0 0 1-33-67.24C41.74 57.91 79.39 19.12 125.93 18A86 86 0 0 1 214 104m-12 0a74 74 0 0 0-75.79-74C86.17 31 53.78 64.34 54 104.42a73.67 73.67 0 0 0 28.4 57.87A29.92 29.92 0 0 1 94 186v6a2 2 0 0 0 2 2h64a2 2 0 0 0 2-2v-6a30.18 30.18 0 0 1 11.7-23.78A73.59 73.59 0 0 0 202 104m-20.08-9A55.58 55.58 0 0 0 137 50.08a6 6 0 1 0-2 11.84c17.38 2.92 32.13 17.68 35.08 35.08a6 6 0 0 0 5.91 5a7 7 0 0 0 1-.08a6 6 0 0 0 4.93-6.92"></svg:path>`,
})
export class PhLightbulbLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightbulbThinIcon],svg[ph-lightbulb-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 232a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4m40-128a83.59 83.59 0 0 1-32.11 66.06A20.2 20.2 0 0 0 172 186v6a12 12 0 0 1-12 12H96a12 12 0 0 1-12-12v-6a20 20 0 0 0-7.76-15.81A83.58 83.58 0 0 1 44 104.47C43.75 59 80.52 21.09 126 20a84 84 0 0 1 86 84m-8 0a76 76 0 0 0-77.83-76C85 29 51.77 63.27 52 104.43a75.62 75.62 0 0 0 29.17 59.43A28 28 0 0 1 92 186v6a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4v-6a28.14 28.14 0 0 1 10.94-22.2A75.62 75.62 0 0 0 204 104m-67.34-51.94a4 4 0 0 0-1.32 7.88C153.53 63 169 78.45 172.06 96.67A4 4 0 0 0 176 100a4 4 0 0 0 .67-.06a4 4 0 0 0 3.27-4.61a53.51 53.51 0 0 0-43.28-43.27"></svg:path>`,
})
export class PhLightbulbThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLighthouseIcon],svg[ph-lighthouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80a8 8 0 0 0-8 8v16h-11.15L184 55.2a8 8 0 0 0-2.68-5.2l-42.88-38.12l-.2-.17a16 16 0 0 0-20.48 0l-.2.17L74.68 50A8 8 0 0 0 72 55.2L67.15 104H56V88a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8h17.54l-9.47 94.48A16 16 0 0 0 72 232h112a16 16 0 0 0 15.92-17.56L190.46 120H208a8 8 0 0 0 8-8V88a8 8 0 0 0-8-8m-80-56l27 24h-54ZM87.24 64h81.52l4 40H136V88a8 8 0 0 0-16 0v16H83.23ZM72 216l4-40h104l4 40Zm106.39-56H77.61l4-40h92.76Z"></svg:path>`,
})
export class PhLighthouseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLighthouseBoldIcon],svg[ph-lighthouse-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 84a12 12 0 0 0-12 12v8h-15.13l-4.93-49.2A12 12 0 0 0 184 47L141.1 8.89l-.3-.25a20 20 0 0 0-25.6 0l-.3.25L72 47a12 12 0 0 0-4 7.76L63.13 104H48v-8a12 12 0 0 0-24 0v20a12 12 0 0 0 12 12h24.72l-8.63 86.1A20 20 0 0 0 72 236h112a20 20 0 0 0 19.9-21.95L195.28 128H220a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12m-92-54.64L144.46 44h-32.92ZM90.86 68h74.28l3.61 36H140v-8a12 12 0 0 0-24 0v8H87.25ZM76.42 212l3.21-32h96.74l3.21 32ZM174 156H82l2.8-28h86.32Z"></svg:path>`,
})
export class PhLighthouseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLighthouseDuotoneIcon],svg[ph-lighthouse-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M181.61 112H74.39L80 56h96ZM192 215.24L187.23 168H68.77L64 215.24a8 8 0 0 0 8 8.76h112a8 8 0 0 0 8-8.76" opacity=".2"></svg:path><svg:path d="M208 80a8 8 0 0 0-8 8v16h-11.15L184 55.2a8 8 0 0 0-2.68-5.2l-42.88-38.12l-.2-.17a16 16 0 0 0-20.48 0l-.2.17L74.68 50A8 8 0 0 0 72 55.2L67.15 104H56V88a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8h17.54l-9.47 94.48A16 16 0 0 0 72 232h112a16 16 0 0 0 15.92-17.56L190.46 120H208a8 8 0 0 0 8-8V88a8 8 0 0 0-8-8m-80-56l27 24h-54ZM87.24 64h81.52l4 40H136V88a8 8 0 0 0-16 0v16H83.23ZM72 216l4-40h104l4 40Zm106.39-56H77.61l4-40h92.76Z"></svg:path></svg:g>`,
})
export class PhLighthouseDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLighthouseFillIcon],svg[ph-lighthouse-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80a8 8 0 0 0-8 8v16h-11.15L184 55.2a8 8 0 0 0-2.69-5.2l-42.87-38.12l-.2-.17a16 16 0 0 0-20.48 0l-.2.17L74.68 50A7.93 7.93 0 0 0 72 55.2L67.15 104H56V88a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8h17.54l-9.47 94.48A16 16 0 0 0 72 232h112a16 16 0 0 0 15.92-17.56L190.46 120H208a8 8 0 0 0 8-8V88a8 8 0 0 0-8-8M87.24 64h81.52l4 40H136V88a8 8 0 0 0-16 0v16H83.23ZM72 216l4.81-48h102.38l4.81 48Z"></svg:path>`,
})
export class PhLighthouseFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLighthouseLightIcon],svg[ph-lighthouse-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82a6 6 0 0 0-6 6v18h-15l-5-50.6a6 6 0 0 0-2-3.88l-42.89-38.15l-.15-.12a14 14 0 0 0-17.92 0l-.15.12L76 51.52a6 6 0 0 0-2 3.88L69 106H54V88a6 6 0 0 0-12 0v24a6 6 0 0 0 6 6h19.75l-9.69 96.67A14 14 0 0 0 72 230h112a14 14 0 0 0 13.93-15.36L188.25 118H208a6 6 0 0 0 6-6V88a6 6 0 0 0-6-6m-81.23-59.58a2 2 0 0 1 2.46 0l31 27.58H95.77ZM85.43 62h85.14l4.43 44h-41V88a6 6 0 0 0-12 0v18H81Zm100 155.35a2 2 0 0 1-1.43.65H72a2 2 0 0 1-2-2.16L74.2 174h107.6l4.2 41.81a2 2 0 0 1-.52 1.54ZM180.6 162H75.4l4.41-44h96.38Z"></svg:path>`,
})
export class PhLighthouseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLighthouseThinIcon],svg[ph-lighthouse-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84a4 4 0 0 0-4 4v20h-18.77L180 55.6a4 4 0 0 0-1.34-2.6l-42.88-38.13l-.1-.09a12 12 0 0 0-15.36 0l-.1.09L77.34 53A4 4 0 0 0 76 55.6L70.77 108H52V88a4 4 0 0 0-8 0v24a4 4 0 0 0 4 4h22l-9.92 98.86A12 12 0 0 0 72 228h112a12 12 0 0 0 11.94-13.16L186 116h22a4 4 0 0 0 4-4V88a4 4 0 0 0-4-4m-82.52-63.11a4 4 0 0 1 5 0l35 31.11h-75ZM83.62 60h88.76l4.81 48H132V88a4 4 0 0 0-8 0v20H78.81ZM187 218.69a3.94 3.94 0 0 1-3 1.31H72a4 4 0 0 1-4-4.36L72.39 172h111.22l4.39 43.62a3.93 3.93 0 0 1-1 3.07M182.81 164H73.19L78 116h100Z"></svg:path>`,
})
export class PhLighthouseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningIcon],svg[ph-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26M109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"></svg:path>`,
})
export class PhLightningIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningAIcon],svg[ph-lightning-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M175.84 111.54a8 8 0 0 0-4.56-5.7l-50-22.43L135 25.85a8 8 0 0 0-13.65-7.28L26.13 121.42a8 8 0 0 0 2.59 12.73l50 22.44L65 214.15a8 8 0 0 0 13.65 7.28l95.2-102.85a8 8 0 0 0 1.99-7.04m-88.22 76.67l8.16-34.36a8 8 0 0 0-4.5-9.15l-45.85-20.58l66.95-72.33l-8.16 34.36a8 8 0 0 0 4.5 9.15l45.84 20.58Zm151.53 24.21l-36-72a8 8 0 0 0-14.31 0l-36 72a8 8 0 0 0 14.31 7.16l9.79-19.58h38.11l9.79 19.58A8 8 0 0 0 232 224a8 8 0 0 0 7.15-11.58M184.94 184L196 161.89L207.05 184Z"></svg:path>`,
})
export class PhLightningAIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningABoldIcon],svg[ph-lightning-a-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M179.76 110.75a12 12 0 0 0-6.85-8.56L126 81.12l12.9-54.35a12 12 0 0 0-20.48-10.92L23.19 118.7a12 12 0 0 0 3.89 19.1l47 21.08l-12.96 54.34a12 12 0 0 0 20.49 10.93l95.19-102.86a12 12 0 0 0 2.96-10.54M95 174.31l4.64-19.54a12 12 0 0 0-6.76-13.72l-40.76-18.3L105 65.69l-4.64 19.54A12 12 0 0 0 107.08 99l40.77 18.3Zm147.7 36.32l-36-72a12 12 0 0 0-21.47 0l-36 72a12 12 0 1 0 21.46 10.73l4.68-9.36h41.17l4.68 9.36a12 12 0 1 0 21.47-10.73ZM187.41 188l8.59-17.17l8.58 17.17Z"></svg:path>`,
})
export class PhLightningABoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningADuotoneIcon],svg[ph-lightning-a-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M72.8 216L88 152l-56-25.14L127.2 24L112 88l56 25.14Z" opacity=".2"></svg:path><svg:path d="M175.84 111.54a8 8 0 0 0-4.56-5.7l-50-22.43L135 25.85a8 8 0 0 0-13.65-7.28L26.13 121.42a8 8 0 0 0 2.59 12.73l50 22.44L65 214.15a8 8 0 0 0 13.65 7.28l95.2-102.85a8 8 0 0 0 1.99-7.04m-88.22 76.67l8.16-34.36a8 8 0 0 0-4.5-9.15l-45.85-20.58l66.95-72.33l-8.16 34.36a8 8 0 0 0 4.5 9.15l45.84 20.58Zm151.53 24.21l-36-72a8 8 0 0 0-14.31 0l-36 72a8 8 0 0 0 14.31 7.16l9.79-19.58h38.11l9.79 19.58A8 8 0 0 0 232 224a8 8 0 0 0 7.15-11.58M184.94 184L196 161.89L207.05 184Z"></svg:path></svg:g>`,
})
export class PhLightningADuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningAFillIcon],svg[ph-lightning-a-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m173.87 118.58l-95.2 102.85A8 8 0 0 1 65 214.15l13.67-57.56l-50-22.44a8 8 0 0 1-2.59-12.73l95.2-102.85A8 8 0 0 1 135 25.85l-13.69 57.56l50 22.43a8 8 0 0 1 2.59 12.74Zm61.71 104.57a7.9 7.9 0 0 1-3.58.85a8 8 0 0 1-7.16-4.42L215.05 200h-38.11l-9.79 19.58a8 8 0 0 1-14.31-7.16l36-72a8 8 0 0 1 14.31 0l36 72a8 8 0 0 1-3.57 10.73M207.05 184L196 161.89L184.94 184Z"></svg:path>`,
})
export class PhLightningAFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningALightIcon],svg[ph-lightning-a-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M173.88 111.94a6 6 0 0 0-3.42-4.27L119 84.56l14-59.17a6 6 0 0 0-10.24-5.47L27.6 122.78a6 6 0 0 0 1.94 9.55L81 155.44l-14 59.17a6 6 0 0 0 3 6.68a6 6 0 0 0 7.22-1.22l95.2-102.85a6 6 0 0 0 1.46-5.28m-90 83.21l9.92-41.76a6 6 0 0 0-3.38-6.86L42.08 124.8l74-80l-9.92 41.77a6 6 0 0 0 3.38 6.86l48.38 21.73Zm153.44 18.16l-36-72a6 6 0 0 0-10.74 0l-36 72a6 6 0 0 0 10.74 5.37L175.71 198h40.58l10.34 20.68A6 6 0 0 0 232 222a5.9 5.9 0 0 0 2.68-.64a6 6 0 0 0 2.68-8.05ZM181.71 186L196 157.42L210.29 186Z"></svg:path>`,
})
export class PhLightningALightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningAThinIcon],svg[ph-lightning-a-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171.92 112.34a4 4 0 0 0-2.28-2.85l-53-23.78l14.43-60.79a4 4 0 0 0-6.83-3.64L29.06 124.14a4 4 0 0 0 1.3 6.37l53 23.78l-14.45 60.78a4 4 0 0 0 2 4.46a3.94 3.94 0 0 0 1.88.47a4 4 0 0 0 2.94-1.28l95.2-102.86a4 4 0 0 0 .99-3.52M80.21 202.1l11.68-49.18a4 4 0 0 0-2.25-4.57l-50.92-22.86l81.07-87.59l-11.68 49.18a4 4 0 0 0 2.25 4.57l50.92 22.86Zm155.37 12.11l-36-72a4 4 0 0 0-7.16 0l-36 72a4 4 0 1 0 7.16 3.58L174.47 196h43.06l10.89 21.79A4 4 0 0 0 232 220a4.1 4.1 0 0 0 1.79-.42a4 4 0 0 0 1.79-5.37M178.47 188L196 152.94L213.53 188Z"></svg:path>`,
})
export class PhLightningAThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningBoldIcon],svg[ph-lightning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.71 117.38a12 12 0 0 0-7.25-8.52l-51.18-20.47l10.59-70.61a12 12 0 0 0-20.64-10l-112 120a12 12 0 0 0 4.31 19.33l51.18 20.47l-10.59 70.64a12 12 0 0 0 20.64 10l112-120a12 12 0 0 0 2.94-10.84M113.6 203.55l6.27-41.77a12 12 0 0 0-7.41-12.92l-43.72-17.49l73.66-78.92l-6.27 41.77a12 12 0 0 0 7.41 12.92l43.72 17.49Z"></svg:path>`,
})
export class PhLightningBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningDuotoneIcon],svg[ph-lightning-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2"></svg:path><svg:path d="M215.79 118.17a8 8 0 0 0-5-5.66L153.18 90.9l14.66-73.33a8 8 0 0 0-13.69-7l-112 120a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.25a8 8 0 0 0 13.69 7l112-120a8 8 0 0 0 1.94-7.26M109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l84.62-90.66l-10.46 52.38a8 8 0 0 0 5 9.06l52.8 19.8Z"></svg:path></svg:g>`,
})
export class PhLightningDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningFillIcon],svg[ph-lightning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.85 125.46l-112 120a8 8 0 0 1-13.69-7l14.66-73.33l-57.63-21.64a8 8 0 0 1-3-13l112-120a8 8 0 0 1 13.69 7l-14.7 73.41l57.63 21.61a8 8 0 0 1 3 12.95Z"></svg:path>`,
})
export class PhLightningFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningLightIcon],svg[ph-lightning-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.84 118.63a6 6 0 0 0-3.73-4.25l-59.23-22.21l15-75a6 6 0 0 0-10.27-5.27l-112 120a6 6 0 0 0 2.28 9.71l59.23 22.21l-15 75a6 6 0 0 0 3.14 6.52A6.1 6.1 0 0 0 96 246a6 6 0 0 0 4.39-1.91l112-120a6 6 0 0 0 1.45-5.46M106 220.46l11.85-59.28a6 6 0 0 0-3.77-6.8l-55.6-20.85l91.46-98l-11.82 59.29a6 6 0 0 0 3.77 6.8l55.6 20.85Z"></svg:path>`,
})
export class PhLightningLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningSlashIcon],svg[ph-lightning-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.92 34.62a8 8 0 1 0-11.84 10.76l39.25 43.18l-39.18 42a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.26a8 8 0 0 0 13.69 7l61.86-66.28l38.37 42.2a8 8 0 1 0 11.84-10.76ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l30.12-32.27l60.78 66.86Zm-.71-143a8 8 0 0 1-.39-11.31l45.88-49.16a8 8 0 0 1 13.69 7L153.18 90.9l57.63 21.61a8 8 0 0 1 3 12.95l-22.3 23.89a8 8 0 0 1-11.7-10.91L194 123.29l-52.8-19.8a8 8 0 0 1-5-9.06l10.47-52.38L120 70.62a8 8 0 0 1-11.34.38"></svg:path>`,
})
export class PhLightningSlashIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningSlashBoldIcon],svg[ph-lightning-slash-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.88 31.93a12 12 0 1 0-17.76 16.14L75.9 88.52l-36.67 39.29a12 12 0 0 0 4.31 19.33l51.18 20.47l-10.59 70.61a12 12 0 0 0 20.64 10l58.9-63.11l35.45 39a12 12 0 0 0 17.76-16.14Zm56.72 171.62l6.27-41.77a12 12 0 0 0-7.41-12.92l-43.72-17.49l23.35-25l55.38 60.92Zm-2.19-135.49a12 12 0 0 1-.59-17l40.41-43.25a12 12 0 0 1 20.64 10l-10.59 70.58l51.18 20.47a12 12 0 0 1 4.31 19.33l-16.82 18a12 12 0 0 1-17.55-16.38l4.86-5.21l-43.72-17.49a12 12 0 0 1-7.41-12.92l6.27-41.77l-14 15a12 12 0 0 1-16.99.64"></svg:path>`,
})
export class PhLightningSlashBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningSlashDuotoneIcon],svg[ph-lightning-slash-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m96 240l16-80l-64-24L160 16l-16 80l64 24Z" opacity=".2"></svg:path><svg:path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l39.25 43.18l-39.18 42a8 8 0 0 0 3 13l57.63 21.61l-14.62 73.26a8 8 0 0 0 13.69 7l61.86-66.28l38.37 42.2a8 8 0 1 0 11.84-10.76ZM109.37 214l10.47-52.38a8 8 0 0 0-5-9.06L62 132.71l30.12-32.27l60.78 66.86Zm-.71-143a8 8 0 0 1-.39-11.31l45.88-49.16a8 8 0 0 1 13.69 7L153.18 90.9l57.63 21.61a8 8 0 0 1 3 12.95l-22.3 23.89a8 8 0 0 1-11.7-10.91L194 123.29l-52.8-19.8a8 8 0 0 1-5-9.06l10.47-52.38L120 70.62a8 8 0 0 1-11.34.38"></svg:path></svg:g>`,
})
export class PhLightningSlashDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningSlashFillIcon],svg[ph-lightning-slash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M105.72 67.81a4 4 0 0 1 0-5.42l48.39-51.85a8 8 0 0 1 13.7 7L153.18 90.9l57.43 21.53a8.24 8.24 0 0 1 4.22 3.4a8 8 0 0 1-1 9.63l-25.27 27.07a4 4 0 0 1-5.88 0Zm27.76 54.32L53.92 34.62a8 8 0 1 0-11.84 10.76l39.26 43.18l-39 41.83a8.15 8.15 0 0 0-2.34 4.92a8 8 0 0 0 5.16 8.18l57.63 21.61l-14.63 73.33a8 8 0 0 0 13.69 7l61.86-66.28l38.37 42.2a8 8 0 1 0 11.84-10.76Z"></svg:path>`,
})
export class PhLightningSlashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningSlashLightIcon],svg[ph-lightning-slash-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.44 36a6 6 0 0 0-8.88 8l40.49 44.58l-40.44 43.33a6 6 0 0 0 2.28 9.71l59.23 22.21l-15 75a6 6 0 0 0 3.14 6.52A6.1 6.1 0 0 0 96 246a6 6 0 0 0 4.39-1.91l63.34-67.87L203.56 220a6 6 0 0 0 8.88-8.08ZM106 220.46l11.85-59.28a6 6 0 0 0-3.77-6.8l-55.6-20.85l33.64-36l63.48 69.83Zm4-150.91a6 6 0 0 1-.29-8.48l45.88-49.16a6 6 0 0 1 10.27 5.27l-15 75l59.23 22.21a6 6 0 0 1 2.28 9.71L190.08 148a6 6 0 1 1-8.77-8.19l16.18-17.33l-55.6-20.85a6 6 0 0 1-3.77-6.8L150 35.54l-31.5 33.71a6 6 0 0 1-8.5.3"></svg:path>`,
})
export class PhLightningSlashLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningSlashThinIcon],svg[ph-lightning-slash-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51 37.31a4 4 0 0 0-6 5.38L86.77 88.6l-41.69 44.67a4 4 0 0 0 1.52 6.47l60.81 22.81l-15.33 76.67a4 4 0 0 0 6.84 3.51l64.83-69.46L205 218.69a4 4 0 1 0 5.92-5.38ZM102.68 227l13.24-66.2a4 4 0 0 0-2.52-4.53L55 134.36l37.17-39.82l66.18 72.79Zm8.71-158.9a4 4 0 0 1-.2-5.65l45.89-49.16a4 4 0 0 1 6.84 3.51l-15.33 76.65l60.81 22.8a4 4 0 0 1 2.49 2.84a4 4 0 0 1-1 3.64l-22.3 23.89a4 4 0 0 1-5.85-5.45L201 121.64l-58.4-21.9a4 4 0 0 1-2.52-4.52L153.32 29L117 67.89a4 4 0 0 1-5.61.19Z"></svg:path>`,
})
export class PhLightningSlashThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLightningThinIcon],svg[ph-lightning-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.89 119.09a4 4 0 0 0-2.49-2.84l-60.81-22.8l15.33-76.67a4 4 0 0 0-6.84-3.51l-112 120a4 4 0 0 0-1 3.64a4 4 0 0 0 2.49 2.84l60.81 22.8l-15.3 76.67a4 4 0 0 0 6.84 3.51l112-120a4 4 0 0 0 .97-3.64M102.68 227l13.24-66.2a4 4 0 0 0-2.52-4.53L55 134.36L153.32 29l-13.24 66.2a4 4 0 0 0 2.52 4.53l58.4 21.91Z"></svg:path>`,
})
export class PhLightningThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentIcon],svg[ph-line-segment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214.64 41.36a32 32 0 0 0-50.2 38.89l-84.19 84.19a32.06 32.06 0 0 0-38.89 4.94a32 32 0 1 0 50.2 6.37l84.19-84.19a32 32 0 0 0 38.89-50.2m-139.33 162a16 16 0 0 1-22.64-22.64a16 16 0 0 1 22.63 0a16 16 0 0 1 .01 22.61Zm128-128a16 16 0 1 1 0-22.63a16 16 0 0 1 .02 22.57Z"></svg:path>`,
})
export class PhLineSegmentIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentBoldIcon],svg[ph-line-segment-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M217.47 38.53a36 36 0 0 0-57.95 41l-80 80a36.07 36.07 0 0 0-41 7a36 36 0 1 0 58 9.95l80-80a36 36 0 0 0 41-57.95Zm-145 162a12 12 0 1 1 0-17a12 12 0 0 1 .01 16.97Zm128-128a12 12 0 0 1-17 0a12 12 0 1 1 17 0"></svg:path>`,
})
export class PhLineSegmentBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentDuotoneIcon],svg[ph-line-segment-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M81 175a24 24 0 1 1-34 0a24 24 0 0 1 34 0M209 47a24 24 0 1 0 0 34a24 24 0 0 0 0-34" opacity=".2"></svg:path><svg:path d="M214.64 41.36a32 32 0 0 0-50.2 38.89l-84.19 84.19a32.06 32.06 0 0 0-38.89 4.94a32 32 0 1 0 50.2 6.37l84.19-84.19a32 32 0 0 0 38.89-50.2m-139.33 162a16 16 0 0 1-22.64-22.64a16 16 0 0 1 22.63 0a16 16 0 0 1 .01 22.61Zm128-128a16 16 0 1 1 0-22.63a16 16 0 0 1 .02 22.57Z"></svg:path></svg:g>`,
})
export class PhLineSegmentDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentFillIcon],svg[ph-line-segment-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.81 83.79a28 28 0 0 1-33.12 4.83l-90.07 90.07a28 28 0 1 1-44.43-6.48a28 28 0 0 1 33.12-4.83l90.07-90.07a28 28 0 1 1 44.43 6.48"></svg:path>`,
})
export class PhLineSegmentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentLightIcon],svg[ph-line-segment-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.23 42.77A30 30 0 0 0 167 80.54L80.54 167a30.07 30.07 0 0 0-37.77 3.81A30 30 0 1 0 89 175.46L175.46 89a30 30 0 0 0 37.77-46.25Zm-136.51 162a18 18 0 1 1 0-25.46a18 18 0 0 1 0 25.43Zm128-128a18 18 0 0 1-25.46 0a18 18 0 1 1 25.46 0"></svg:path>`,
})
export class PhLineSegmentLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentThinIcon],svg[ph-line-segment-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.81 44.19a28 28 0 0 0-42.23 36.57l-88.82 88.82a28 28 0 0 0-36.57 2.63a28 28 0 1 0 42.23 3l88.82-88.82a28 28 0 0 0 36.57-42.23Zm-133.67 162a20 20 0 1 1 0-28.28a20 20 0 0 1 0 28.24Zm128-128a20 20 0 0 1-28.28 0a20 20 0 1 1 28.28 0"></svg:path>`,
})
export class PhLineSegmentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentsIcon],svg[ph-line-segments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238.64 33.36a32 32 0 0 0-45.26 0a32 32 0 0 0 0 45.26c.29.29.6.57.9.85l-26.63 49.46a32.2 32.2 0 0 0-23.9 3.5l-20.18-20.18a32 32 0 0 0-50.2-38.89a32 32 0 0 0 0 45.26c.29.29.59.57.89.85l-26.63 49.47a32 32 0 0 0-30.27 8.44a32 32 0 1 0 45.26 0c-.29-.29-.6-.57-.9-.85l26.63-49.46A32.4 32.4 0 0 0 96 128a32 32 0 0 0 16.25-4.41l20.18 20.18a32 32 0 1 0 50.2-6.38c-.29-.29-.59-.57-.89-.85l26.63-49.46A32.3 32.3 0 0 0 216 88a32 32 0 0 0 22.63-54.62ZM51.3 211.33a16 16 0 0 1-22.63-22.64a16 16 0 1 1 22.63 22.64m33.38-104a16 16 0 0 1 0-22.63a16 16 0 1 1 0 22.63m86.64 64a16 16 0 0 1-22.63-22.63a16 16 0 0 1 22.63 22.63m56-104a16 16 0 1 1-22.62-22.66a16 16 0 0 1 22.63 22.64Z"></svg:path>`,
})
export class PhLineSegmentsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentsBoldIcon],svg[ph-line-segments-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M241.47 30.53a36 36 0 0 0-50.92 0a36.06 36.06 0 0 0-1.2 49.66l-23.83 44.26a36.1 36.1 0 0 0-21 3.07l-16-16a36 36 0 0 0-57.94-41a36 36 0 0 0-1.2 49.66L45.5 164.45a36 36 0 0 0-31 10.1a36 36 0 1 0 52.12 1.26l23.83-44.26A35 35 0 0 0 96 132a36.1 36.1 0 0 0 15.51-3.5l16 16a36 36 0 1 0 59.14-8.68l23.85-44.27a36 36 0 0 0 5.5.45a36 36 0 0 0 25.46-61.45Zm-154 57a12 12 0 0 1 17 17a12 12 0 0 1-17-17m-39 121a12 12 0 1 1 0-17a12 12 0 0 1 0 16.97Zm120-40a12 12 0 1 1 0-17a12 12 0 0 1 .02 16.96Zm56-104a12 12 0 1 1 0-17a12 12 0 0 1 .03 16.95Z"></svg:path>`,
})
export class PhLineSegmentsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentsDuotoneIcon],svg[ph-line-segments-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M57 183a24 24 0 1 1-34 0a24 24 0 0 1 34 0M79 79a24 24 0 1 0 34 0a24 24 0 0 0-34 0m64 64a24 24 0 1 0 34 0a24 24 0 0 0-34 0m90-104a24 24 0 1 0 0 34a24 24 0 0 0 0-34" opacity=".2"></svg:path><svg:path d="M238.64 33.36a32 32 0 0 0-45.26 0a32 32 0 0 0 0 45.26c.29.29.6.57.9.85l-26.63 49.46a32.2 32.2 0 0 0-23.9 3.5l-20.18-20.18a32 32 0 0 0-50.2-38.89a32 32 0 0 0 0 45.26c.29.29.59.57.89.85l-26.63 49.47a32 32 0 0 0-30.27 8.44a32 32 0 1 0 45.26 0c-.29-.29-.6-.57-.9-.85l26.63-49.46A32.4 32.4 0 0 0 96 128a32 32 0 0 0 16.25-4.41l20.18 20.18a32 32 0 1 0 50.2-6.38c-.29-.29-.59-.57-.89-.85l26.63-49.46A32.3 32.3 0 0 0 216 88a32 32 0 0 0 22.63-54.62ZM51.3 211.33a16 16 0 0 1-22.63-22.64a16 16 0 1 1 22.63 22.64m33.38-104a16 16 0 0 1 0-22.63a16 16 0 1 1 0 22.63m86.64 64a16 16 0 0 1-22.63-22.63a16 16 0 0 1 22.63 22.63m56-104a16 16 0 1 1-22.62-22.66a16 16 0 0 1 22.63 22.64Z"></svg:path></svg:g>`,
})
export class PhLineSegmentsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentsFillIcon],svg[ph-line-segments-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.81 75.79A27.9 27.9 0 0 1 216 84a28.5 28.5 0 0 1-5.67-.58l-30.57 56.77a28 28 0 1 1-44.43 6.49l-26.06-26.06A28.1 28.1 0 0 1 96 124a28.4 28.4 0 0 1-5.67-.58l-30.57 56.76a28 28 0 1 1-39.6 0a28 28 0 0 1 25.47-7.61L76.2 115.8a28.05 28.05 0 0 1 0-39.61a28 28 0 0 1 44.43 33.12l26.06 26.06a28.1 28.1 0 0 1 19-2.77l30.57-56.77a28 28 0 0 1 0-39.6a28 28 0 0 1 39.6 39.6Z"></svg:path>`,
})
export class PhLineSegmentsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentsLightIcon],svg[ph-line-segments-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.23 34.77a30.06 30.06 0 0 0-42.44 0a30.06 30.06 0 0 0 0 42.44c.65.64 1.32 1.24 2 1.81l-28.14 52.26a30.11 30.11 0 0 0-25.19 3.72L121 112.54a30 30 0 0 0-46.22-37.76a30 30 0 0 0 0 42.43a26 26 0 0 0 2 1.82l-28.14 52.26a30 30 0 0 0-29.87 7.5a30 30 0 1 0 42.44 0c-.65-.64-1.32-1.24-2-1.81l28.14-52.26a30.07 30.07 0 0 0 25.19-3.72L135 143.46a30 30 0 1 0 46.25-4.67a26 26 0 0 0-2-1.82l28.14-52.26a30 30 0 0 0 29.87-49.94Zm-184.51 178a18 18 0 1 1 0-25.46a18 18 0 0 1 0 25.43Zm30.55-104a18 18 0 1 1 25.46 0a18 18 0 0 1-25.46-.04Zm89.46 64a18 18 0 1 1 0-25.46a18 18 0 0 1 0 25.42Zm56-104a18 18 0 1 1 0-25.46a18 18 0 0 1 .01 25.41Z"></svg:path>`,
})
export class PhLineSegmentsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentsThinIcon],svg[ph-line-segments-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235.81 36.19a28 28 0 0 0-39.6 0a28 28 0 0 0 0 39.6a26.6 26.6 0 0 0 3.14 2.71l-29.73 55.21a28.08 28.08 0 0 0-26.38 3.87l-24.82-24.82A28 28 0 0 0 76.2 76.19a28 28 0 0 0 3.14 42.31L49.6 173.72a28 28 0 0 0-29.41 6.49a28 28 0 1 0 39.6 0a29 29 0 0 0-3.14-2.71l29.73-55.21a28 28 0 0 0 26.38-3.87l24.82 24.82a28 28 0 1 0 39.09-5.74l29.73-55.22a28 28 0 0 0 29.41-46.09m-181.68 178a20 20 0 1 1 0-28.28a20 20 0 0 1 0 28.24Zm27.72-104a20 20 0 1 1 28.29 0a20 20 0 0 1-28.29-.05Zm92.3 64a20 20 0 1 1 0-28.29a20 20 0 0 1 0 28.25Zm56-104a20 20 0 1 1 0-28.29a20 20 0 0 1 0 28.24Z"></svg:path>`,
})
export class PhLineSegmentsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineVerticalIcon],svg[ph-line-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 24v208a8 8 0 0 1-16 0V24a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhLineVerticalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineVerticalBoldIcon],svg[ph-line-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 24v208a12 12 0 0 1-24 0V24a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhLineVerticalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineVerticalDuotoneIcon],svg[ph-line-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M136 24v208a8 8 0 0 1-16 0V24a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhLineVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineVerticalFillIcon],svg[ph-line-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-72 160a8 8 0 0 1-16 0V64a8 8 0 0 1 16 0Z"></svg:path>`,
})
export class PhLineVerticalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineVerticalLightIcon],svg[ph-line-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 24v208a6 6 0 0 1-12 0V24a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhLineVerticalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLineVerticalThinIcon],svg[ph-line-vertical-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 24v208a4 4 0 0 1-8 0V24a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhLineVerticalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkIcon],svg[ph-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 88.23a54.43 54.43 0 0 1-16 37L189.25 160a54.27 54.27 0 0 1-38.63 16h-.05A54.63 54.63 0 0 1 96 119.84a8 8 0 0 1 16 .45A38.62 38.62 0 0 0 150.58 160a38.4 38.4 0 0 0 27.31-11.31l34.75-34.75a38.63 38.63 0 0 0-54.63-54.63l-11 11A8 8 0 0 1 135.7 59l11-11a54.65 54.65 0 0 1 77.3 0a54.86 54.86 0 0 1 16 40.23m-131 97.43l-11 11A38.4 38.4 0 0 1 70.6 208a38.63 38.63 0 0 1-27.29-65.94L78 107.31a38.63 38.63 0 0 1 66 28.4a8 8 0 0 0 16 .45A54.86 54.86 0 0 0 144 96a54.65 54.65 0 0 0-77.27 0L32 130.75A54.62 54.62 0 0 0 70.56 224a54.28 54.28 0 0 0 38.64-16l11-11a8 8 0 0 0-11.2-11.34"></svg:path>`,
})
export class PhLinkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkBoldIcon],svg[ph-link-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M117.18 188.74a12 12 0 0 1 0 17l-5.12 5.12A58.26 58.26 0 0 1 70.6 228a58.62 58.62 0 0 1-41.46-100.08l34.75-34.75a58.64 58.64 0 0 1 98.56 28.11a12 12 0 1 1-23.37 5.44a34.65 34.65 0 0 0-58.22-16.58l-34.75 34.75A34.62 34.62 0 0 0 70.57 204a34.4 34.4 0 0 0 24.49-10.14l5.11-5.12a12 12 0 0 1 17.01 0M226.83 45.17a58.65 58.65 0 0 0-82.93 0l-5.11 5.11a12 12 0 0 0 17 17l5.12-5.12a34.63 34.63 0 1 1 49 49l-34.81 34.7A34.4 34.4 0 0 1 150.61 156a34.63 34.63 0 0 1-33.69-26.72a12 12 0 0 0-23.38 5.44A58.64 58.64 0 0 0 150.56 180h.05a58.28 58.28 0 0 0 41.47-17.17l34.75-34.75a58.62 58.62 0 0 0 0-82.91"></svg:path>`,
})
export class PhLinkBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkBreakIcon],svg[ph-link-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.63 57.37a32 32 0 0 0-45.19-.06l-11.65 12.21a8 8 0 0 1-11.58-11l11.72-12.29a2 2 0 0 1 .13-.13a48 48 0 0 1 67.88 67.88a2 2 0 0 1-.13.13l-12.29 11.72a8 8 0 0 1-11-11.58l12.21-11.65a32 32 0 0 0-.1-45.23m-84.42 129.11l-11.65 12.21a32 32 0 0 1-45.25-45.25l12.21-11.65a8 8 0 0 0-11-11.58l-12.33 11.72a2 2 0 0 0-.13.13a48 48 0 0 0 67.88 67.88a2 2 0 0 0 .13-.13l11.72-12.29a8 8 0 1 0-11.58-11ZM216 152h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16M40 104h24a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m120 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8M96 72a8 8 0 0 0 8-8V40a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhLinkBreakIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkBreakBoldIcon],svg[ph-link-break-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M195.8 60.2a28 28 0 0 0-39.51-.09l-11.61 12.17a12 12 0 1 1-17.36-16.56L139 43.43l.2-.2a52 52 0 0 1 73.54 73.54l-.2.2l-12.29 11.71a12 12 0 0 1-16.56-17.36l12.17-11.61a28 28 0 0 0-.06-39.51m-84.48 123.52l-11.61 12.17a28 28 0 0 1-39.6-39.6l12.17-11.61a12 12 0 0 0-16.56-17.36L43.43 139l-.2.2a52 52 0 0 0 73.54 73.54l.2-.2l11.71-12.29a12 12 0 1 0-17.36-16.56ZM216 148h-24a12 12 0 0 0 0 24h24a12 12 0 0 0 0-24M40 108h24a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m120 72a12 12 0 0 0-12 12v24a12 12 0 0 0 24 0v-24a12 12 0 0 0-12-12M96 76a12 12 0 0 0 12-12V40a12 12 0 0 0-24 0v24a12 12 0 0 0 12 12"></svg:path>`,
})
export class PhLinkBreakBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkBreakDuotoneIcon],svg[ph-link-break-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m204.28 108.28l-96 96a40 40 0 0 1-56.56-56.56l96-96a40 40 0 0 1 56.56 56.56" opacity=".2"></svg:path><svg:path d="M198.63 57.37a32 32 0 0 0-45.19-.06l-11.65 12.21a8 8 0 0 1-11.58-11l11.72-12.29a2 2 0 0 1 .13-.13a48 48 0 0 1 67.88 67.88a2 2 0 0 1-.13.13l-12.29 11.72a8 8 0 0 1-11-11.58l12.21-11.65a32 32 0 0 0-.1-45.23m-84.42 129.11l-11.65 12.21a32 32 0 0 1-45.25-45.25l12.21-11.65a8 8 0 0 0-11-11.58l-12.33 11.72a2 2 0 0 0-.13.13a48 48 0 0 0 67.88 67.88a2 2 0 0 0 .13-.13l11.72-12.29a8 8 0 1 0-11.58-11ZM216 152h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16M40 104h24a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m120 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8M96 72a8 8 0 0 0 8-8V40a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8"></svg:path></svg:g>`,
})
export class PhLinkBreakDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkBreakFillIcon],svg[ph-link-break-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M96 64a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0ZM64 96h16a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m64.08 85.66l-7.21 7.21a38 38 0 1 1-53.74-53.74l7.21-7.21a8 8 0 1 1 11.32 11.31l-7.22 7.21a22 22 0 0 0 31.12 31.12l7.21-7.22a8 8 0 1 1 11.31 11.32M160 192a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm32-32h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m-3.13-39.13l-7.21 7.21a8 8 0 1 1-11.32-11.31l7.22-7.21a22 22 0 0 0-31.12-31.12l-7.21 7.22a8 8 0 1 1-11.31-11.32l7.21-7.21a38 38 0 1 1 53.74 53.74"></svg:path>`,
})
export class PhLinkBreakFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkBreakLightIcon],svg[ph-link-break-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 56a34 34 0 0 0-48-.05l-11.66 12.19a6 6 0 1 1-8.68-8.28l11.71-12.28l.1-.11a46 46 0 0 1 65.06 65.06l-.11.1l-12.28 11.71a6 6 0 1 1-8.28-8.68L200.09 104a34 34 0 0 0-.09-48m-84.38 131.9L104 200.09A34 34 0 0 1 55.91 152l12.23-11.67a6 6 0 0 0-8.28-8.68l-12.28 11.72l-.11.1a46 46 0 0 0 65.06 65.06l.1-.11l11.71-12.28a6 6 0 1 0-8.68-8.28ZM216 154h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12M40 102h24a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m120 84a6 6 0 0 0-6 6v24a6 6 0 0 0 12 0v-24a6 6 0 0 0-6-6M96 70a6 6 0 0 0 6-6V40a6 6 0 0 0-12 0v24a6 6 0 0 0 6 6"></svg:path>`,
})
export class PhLinkBreakLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkBreakThinIcon],svg[ph-link-break-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.46 54.54a36.06 36.06 0 0 0-50.92 0l-11.65 12.22a4 4 0 0 1-5.78-5.52L144.82 49a44 44 0 1 1 62.29 62.15l-12.35 11.78a4 4 0 0 1-5.52-5.78l12.28-11.72a36 36 0 0 0-.06-50.89m-84.35 134.7l-11.65 12.22a36 36 0 0 1-51-50.85l12.28-11.72a4 4 0 0 0-5.52-5.78l-12.33 11.78A44 44 0 1 0 111.18 207l11.71-12.28a4 4 0 1 0-5.78-5.52ZM216 156h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8M40 100h24a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m120 88a4 4 0 0 0-4 4v24a4 4 0 0 0 8 0v-24a4 4 0 0 0-4-4M96 68a4 4 0 0 0 4-4V40a4 4 0 0 0-8 0v24a4 4 0 0 0 4 4"></svg:path>`,
})
export class PhLinkBreakThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkDuotoneIcon],svg[ph-link-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m218.34 119.6l-34.74 34.74a46.58 46.58 0 0 1-44.31 12.26c-.31.34-.62.67-.95 1l-34.74 34.74a46.63 46.63 0 1 1-65.94-65.94l34.74-34.74a46.6 46.6 0 0 1 44.31-12.26c.31-.34.62-.67 1-1l34.69-34.74a46.63 46.63 0 0 1 65.94 65.94" opacity=".2"></svg:path><svg:path d="M240 88.23a54.43 54.43 0 0 1-16 37L189.25 160a54.27 54.27 0 0 1-38.63 16h-.05A54.63 54.63 0 0 1 96 119.84a8 8 0 0 1 16 .45A38.62 38.62 0 0 0 150.58 160a38.4 38.4 0 0 0 27.31-11.31l34.75-34.75a38.63 38.63 0 0 0-54.63-54.63l-11 11A8 8 0 0 1 135.7 59l11-11a54.65 54.65 0 0 1 77.3 0a54.86 54.86 0 0 1 16 40.23m-131 97.43l-11 11A38.4 38.4 0 0 1 70.6 208a38.63 38.63 0 0 1-27.29-65.94L78 107.31a38.63 38.63 0 0 1 66 28.4a8 8 0 0 0 7.78 8.22h.22a8 8 0 0 0 8-7.78A54.86 54.86 0 0 0 144 96a54.65 54.65 0 0 0-77.27 0L32 130.75A54.62 54.62 0 0 0 70.56 224a54.28 54.28 0 0 0 38.64-16l11-11a8 8 0 0 0-11.2-11.34"></svg:path></svg:g>`,
})
export class PhLinkDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkFillIcon],svg[ph-link-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-92.3 160.49a43.31 43.31 0 0 1-55-66.43l25.37-25.37a43.35 43.35 0 0 1 61.25 0a42.9 42.9 0 0 1 9.95 15.43a8 8 0 1 1-15 5.6a27.33 27.33 0 0 0-44.9-9.72L72 137.37a27.32 27.32 0 0 0 34.68 41.91a8 8 0 1 1 9 13.21Zm79.61-62.55l-25.37 25.37A43 43 0 0 1 139.32 168a43.35 43.35 0 0 1-40.53-28.12a8 8 0 1 1 15-5.6A27.35 27.35 0 0 0 139.28 152a27.14 27.14 0 0 0 19.32-8l25.4-25.37a27.32 27.32 0 0 0-34.68-41.91a8 8 0 1 1-9-13.21a43.32 43.32 0 0 1 55 66.43Z"></svg:path>`,
})
export class PhLinkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkLightIcon],svg[ph-link-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 88.18a52.42 52.42 0 0 1-15.4 35.66l-34.75 34.75A52.28 52.28 0 0 1 150.62 174h-.05A52.63 52.63 0 0 1 98 119.9a6 6 0 0 1 6-5.84h.17a6 6 0 0 1 5.83 6.16A40.62 40.62 0 0 0 150.58 162a40.4 40.4 0 0 0 28.73-11.9l34.75-34.74a40.63 40.63 0 0 0-57.43-57.46l-11 11a6 6 0 0 1-8.49-8.49l11-11a52.62 52.62 0 0 1 74.43 0A52.83 52.83 0 0 1 238 88.18m-127.62 98.9l-11 11A40.36 40.36 0 0 1 70.6 210a40.63 40.63 0 0 1-28.7-69.36l34.72-34.74A40.63 40.63 0 0 1 146 135.77a6 6 0 0 0 5.83 6.16h.17a6 6 0 0 0 6-5.84a52.63 52.63 0 0 0-89.86-38.67l-34.76 34.74A52.63 52.63 0 0 0 70.56 222a52.26 52.26 0 0 0 37.22-15.42l11-11a6 6 0 1 0-8.49-8.48Z"></svg:path>`,
})
export class PhLinkLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleIcon],svg[ph-link-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M165.66 90.34a8 8 0 0 1 0 11.32l-64 64a8 8 0 0 1-11.32-11.32l64-64a8 8 0 0 1 11.32 0M215.6 40.4a56 56 0 0 0-79.2 0l-30.06 30.05a8 8 0 0 0 11.32 11.32l30.06-30a40 40 0 0 1 56.57 56.56l-30.07 30.06a8 8 0 0 0 11.31 11.32l30.07-30.11a56 56 0 0 0 0-79.2m-77.26 133.82l-30.06 30.06a40 40 0 1 1-56.56-56.57l30.05-30.05a8 8 0 0 0-11.32-11.32L40.4 136.4a56 56 0 0 0 79.2 79.2l30.06-30.07a8 8 0 0 0-11.32-11.31"></svg:path>`,
})
export class PhLinkSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleBoldIcon],svg[ph-link-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m87.5 151.52l64-64a12 12 0 0 1 17 17l-64 64a12 12 0 0 1-17-17m131-114a60.08 60.08 0 0 0-84.87 0l-30.12 30.09a12 12 0 0 0 17 17l30.07-30.06a36 36 0 0 1 50.93 50.92l-30.11 30.05a12 12 0 1 0 17 17l30.08-30.06a60.09 60.09 0 0 0-.03-84.91ZM135.52 171.4l-30.07 30.08a36 36 0 0 1-50.92-50.93l30.06-30.07a12 12 0 0 0-17-17l-30.04 30.1a60 60 0 0 0 84.88 84.87l30.06-30.07a12 12 0 0 0-17-17Z"></svg:path>`,
})
export class PhLinkSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleBreakIcon],svg[ph-link-simple-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 80a55.67 55.67 0 0 1-16.4 39.6l-30.07 30.06a8 8 0 0 1-11.31-11.32l30.07-30.06a40 40 0 1 0-56.57-56.56l-30.06 30.05a8 8 0 0 1-11.32-11.32L136.4 40.4A56 56 0 0 1 232 80m-93.66 94.22l-30.06 30.06a40 40 0 1 1-56.56-56.57l30.05-30.05a8 8 0 0 0-11.32-11.32L40.4 136.4a56 56 0 0 0 79.2 79.2l30.06-30.07a8 8 0 0 0-11.32-11.31"></svg:path>`,
})
export class PhLinkSimpleBreakIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleBreakBoldIcon],svg[ph-link-simple-break-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m218.45 122.43l-30.08 30.06a12 12 0 0 1-17-17l30.08-30.07a36 36 0 0 0-50.93-50.92l-30.04 30.09a12 12 0 0 1-17-17l30.07-30.06a60 60 0 0 1 84.87 84.88Zm-82.93 49l-30.07 30.08a36 36 0 0 1-50.92-50.93l30.06-30.07a12 12 0 0 0-17-17l-30.04 30.07a60 60 0 0 0 84.88 84.87l30.06-30.07a12 12 0 0 0-17-17Z"></svg:path>`,
})
export class PhLinkSimpleBreakBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleBreakDuotoneIcon],svg[ph-link-simple-break-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m209.94 113.94l-96 96a48 48 0 0 1-67.88-67.88l96-96a48 48 0 0 1 67.88 67.88" opacity=".2"></svg:path><svg:path d="M232 80a55.67 55.67 0 0 1-16.4 39.6l-30.07 30.06a8 8 0 0 1-11.31-11.32l30.07-30.06a40 40 0 1 0-56.57-56.56l-30.06 30.05a8 8 0 0 1-11.32-11.32L136.4 40.4A56 56 0 0 1 232 80m-93.66 94.22l-30.06 30.06a40 40 0 1 1-56.56-56.57l30.05-30.05a8 8 0 0 0-11.32-11.32L40.4 136.4a56 56 0 0 0 79.2 79.2l30.06-30.07a8 8 0 0 0-11.32-11.31"></svg:path></svg:g>`,
})
export class PhLinkSimpleBreakDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleBreakFillIcon],svg[ph-link-simple-break-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-63.44 141.66l-21.45 21.45a44 44 0 0 1-62.22-62.22l21.45-21.46a8 8 0 0 1 11.32 11.31L72.2 144.2a28 28 0 0 0 39.6 39.6l21.45-21.46a8 8 0 0 1 11.31 11.32m50.55-50.55l-21.45 21.45a8 8 0 0 1-11.32-11.31l21.46-21.45a28 28 0 0 0-39.6-39.6l-21.46 21.46a8 8 0 0 1-11.31-11.32l21.46-21.45a44 44 0 0 1 62.22 62.22"></svg:path>`,
})
export class PhLinkSimpleBreakFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleBreakLightIcon],svg[ph-link-simple-break-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m214.2 118.18l-30.07 30.07a6 6 0 0 1-8.49-8.49l30.08-30.07a42 42 0 0 0-59.41-59.41l-30.07 30.06a6 6 0 0 1-8.49-8.49l30.07-30a54 54 0 0 1 76.38 76.38Zm-74.44 57.46l-30.07 30.08a42 42 0 0 1-59.41-59.41l30.06-30.07a6 6 0 0 0-8.49-8.49l-30 30.07a54 54 0 0 0 76.38 76.39l30.07-30.08a6 6 0 0 0-8.49-8.49Z"></svg:path>`,
})
export class PhLinkSimpleBreakLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleBreakThinIcon],svg[ph-link-simple-break-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m212.79 116.77l-30.07 30.06a4 4 0 1 1-5.66-5.66l30.07-30.06a44 44 0 0 0-62.24-62.24l-30.07 30.06a4 4 0 0 1-5.65-5.66l30.06-30.06a52 52 0 0 1 73.56 73.56m-71.62 60.29l-30.06 30.07a44 44 0 0 1-62.24-62.24l30.06-30.06a4 4 0 0 0-5.66-5.66l-30.06 30.06a52 52 0 0 0 73.56 73.56l30.06-30.07a4 4 0 1 0-5.66-5.66"></svg:path>`,
})
export class PhLinkSimpleBreakThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleDuotoneIcon],svg[ph-link-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m209.94 113.94l-96 96a48 48 0 0 1-67.88-67.88l96-96a48 48 0 0 1 67.88 67.88" opacity=".2"></svg:path><svg:path d="M165.66 90.34a8 8 0 0 1 0 11.32l-64 64a8 8 0 0 1-11.32-11.32l64-64a8 8 0 0 1 11.32 0M215.6 40.4a56 56 0 0 0-79.2 0l-30.06 30.05a8 8 0 0 0 11.32 11.32l30.06-30a40 40 0 0 1 56.57 56.56l-30.07 30.06a8 8 0 0 0 11.31 11.32l30.07-30.11a56 56 0 0 0 0-79.2m-77.26 133.82l-30.06 30.06a40 40 0 1 1-56.56-56.57l30.05-30.05a8 8 0 0 0-11.32-11.32L40.4 136.4a56 56 0 0 0 79.2 79.2l30.06-30.07a8 8 0 0 0-11.32-11.31"></svg:path></svg:g>`,
})
export class PhLinkSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleFillIcon],svg[ph-link-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-63.44 141.66l-21.45 21.45a44 44 0 0 1-62.22-62.22l21.45-21.46a8 8 0 0 1 11.32 11.31L72.2 144.2a28 28 0 0 0 39.6 39.6l21.45-21.46a8 8 0 0 1 11.31 11.32m-34.9-16a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 11.32Zm85.45-34.55l-21.45 21.45a8 8 0 0 1-11.32-11.31l21.46-21.45a28 28 0 0 0-39.6-39.6l-21.46 21.46a8 8 0 0 1-11.31-11.32l21.46-21.45a44 44 0 0 1 62.22 62.22"></svg:path>`,
})
export class PhLinkSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalIcon],svg[ph-link-simple-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 120h96a8 8 0 0 1 0 16H80a8 8 0 0 1 0-16m24 48H64a40 40 0 0 1 0-80h40a8 8 0 0 0 0-16H64a56 56 0 0 0 0 112h40a8 8 0 0 0 0-16m88-96h-40a8 8 0 0 0 0 16h40a40 40 0 0 1 0 80h-40a8 8 0 0 0 0 16h40a56 56 0 0 0 0-112"></svg:path>`,
})
export class PhLinkSimpleHorizontalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalBoldIcon],svg[ph-link-simple-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 116h96a12 12 0 0 1 0 24H80a12 12 0 0 1 0-24m24 48H64a36 36 0 0 1 0-72h40a12 12 0 0 0 0-24H64a60 60 0 0 0 0 120h40a12 12 0 0 0 0-24m88-96h-40a12 12 0 0 0 0 24h40a36 36 0 0 1 0 72h-40a12 12 0 0 0 0 24h40a60 60 0 0 0 0-120"></svg:path>`,
})
export class PhLinkSimpleHorizontalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalBreakIcon],svg[ph-link-simple-horizontal-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 128a40 40 0 0 0 40 40h40a8 8 0 0 1 0 16H64a56 56 0 0 1 0-112h40a8 8 0 0 1 0 16H64a40 40 0 0 0-40 40m168-56h-40a8 8 0 0 0 0 16h40a40 40 0 0 1 0 80h-40a8 8 0 0 0 0 16h40a56 56 0 0 0 0-112"></svg:path>`,
})
export class PhLinkSimpleHorizontalBreakIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalBreakBoldIcon],svg[ph-link-simple-horizontal-break-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 128a36 36 0 0 0 36 36h40a12 12 0 0 1 0 24H64a60 60 0 0 1 0-120h40a12 12 0 0 1 0 24H64a36 36 0 0 0-36 36m164-60h-40a12 12 0 0 0 0 24h40a36 36 0 0 1 0 72h-40a12 12 0 0 0 0 24h40a60 60 0 0 0 0-120"></svg:path>`,
})
export class PhLinkSimpleHorizontalBreakBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalBreakDuotoneIcon],svg[ph-link-simple-horizontal-break-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 128a48 48 0 0 1-48 48H64a48 48 0 0 1-48-48a48 48 0 0 1 48-48h128a48 48 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M24 128a40 40 0 0 0 40 40h40a8 8 0 0 1 0 16H64a56 56 0 0 1 0-112h40a8 8 0 0 1 0 16H64a40 40 0 0 0-40 40m168-56h-40a8 8 0 0 0 0 16h40a40 40 0 0 1 0 80h-40a8 8 0 0 0 0 16h40a56 56 0 0 0 0-112"></svg:path></svg:g>`,
})
export class PhLinkSimpleHorizontalBreakDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalBreakFillIcon],svg[ph-link-simple-horizontal-break-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M112 168H80a40 40 0 0 1 0-80h32a8 8 0 0 1 0 16H80a24 24 0 0 0 0 48h32a8 8 0 0 1 0 16m64 0h-32a8 8 0 0 1 0-16h32a24 24 0 0 0 0-48h-32a8 8 0 0 1 0-16h32a40 40 0 0 1 0 80"></svg:path>`,
})
export class PhLinkSimpleHorizontalBreakFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalBreakLightIcon],svg[ph-link-simple-horizontal-break-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 128a42 42 0 0 0 42 42h40a6 6 0 0 1 0 12H64a54 54 0 0 1 0-108h40a6 6 0 0 1 0 12H64a42 42 0 0 0-42 42m170-54h-40a6 6 0 0 0 0 12h40a42 42 0 0 1 0 84h-40a6 6 0 0 0 0 12h40a54 54 0 0 0 0-108"></svg:path>`,
})
export class PhLinkSimpleHorizontalBreakLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalBreakThinIcon],svg[ph-link-simple-horizontal-break-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 128a44.05 44.05 0 0 0 44 44h40a4 4 0 0 1 0 8H64a52 52 0 0 1 0-104h40a4 4 0 0 1 0 8H64a44.05 44.05 0 0 0-44 44m172-52h-40a4 4 0 0 0 0 8h40a44 44 0 0 1 0 88h-40a4 4 0 0 0 0 8h40a52 52 0 0 0 0-104"></svg:path>`,
})
export class PhLinkSimpleHorizontalBreakThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalDuotoneIcon],svg[ph-link-simple-horizontal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 128a48 48 0 0 1-48 48H64a48 48 0 0 1-48-48a48 48 0 0 1 48-48h128a48 48 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M80 120h96a8 8 0 0 1 0 16H80a8 8 0 0 1 0-16m24 48H64a40 40 0 0 1 0-80h40a8 8 0 0 0 0-16H64a56 56 0 0 0 0 112h40a8 8 0 0 0 0-16m88-96h-40a8 8 0 0 0 0 16h40a40 40 0 0 1 0 80h-40a8 8 0 0 0 0 16h40a56 56 0 0 0 0-112"></svg:path></svg:g>`,
})
export class PhLinkSimpleHorizontalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalFillIcon],svg[ph-link-simple-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M112 168H80a40 40 0 0 1 0-80h32a8 8 0 0 1 0 16H80a24 24 0 0 0 0 48h32a8 8 0 0 1 0 16m48-48a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16Zm16 48h-32a8 8 0 0 1 0-16h32a24 24 0 0 0 0-48h-32a8 8 0 0 1 0-16h32a40 40 0 0 1 0 80"></svg:path>`,
})
export class PhLinkSimpleHorizontalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalLightIcon],svg[ph-link-simple-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 122h96a6 6 0 0 1 0 12H80a6 6 0 0 1 0-12m24 48H64a42 42 0 0 1 0-84h40a6 6 0 0 0 0-12H64a54 54 0 0 0 0 108h40a6 6 0 0 0 0-12m88-96h-40a6 6 0 0 0 0 12h40a42 42 0 0 1 0 84h-40a6 6 0 0 0 0 12h40a54 54 0 0 0 0-108"></svg:path>`,
})
export class PhLinkSimpleHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleHorizontalThinIcon],svg[ph-link-simple-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 124h96a4 4 0 0 1 0 8H80a4 4 0 0 1 0-8m24 48H64a44 44 0 0 1 0-88h40a4 4 0 0 0 0-8H64a52 52 0 0 0 0 104h40a4 4 0 0 0 0-8m88-96h-40a4 4 0 0 0 0 8h40a44 44 0 0 1 0 88h-40a4 4 0 0 0 0 8h40a52 52 0 0 0 0-104"></svg:path>`,
})
export class PhLinkSimpleHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleLightIcon],svg[ph-link-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164.25 91.75a6 6 0 0 1 0 8.49l-64 64a6 6 0 0 1-8.49-8.48l64-64a6 6 0 0 1 8.49-.01M214.2 41.8a54.07 54.07 0 0 0-76.38 0l-30.07 30.05a6 6 0 0 0 8.49 8.49l30.07-30.06a42 42 0 0 1 59.41 59.41l-30.08 30.07a6 6 0 1 0 8.49 8.49l30.07-30.07a54 54 0 0 0 0-76.38m-74.44 133.84l-30.07 30.08a42 42 0 0 1-59.41-59.41l30.06-30.07a6 6 0 0 0-8.49-8.49l-30 30.07a54 54 0 0 0 76.38 76.39l30.07-30.08a6 6 0 0 0-8.49-8.49Z"></svg:path>`,
})
export class PhLinkSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkSimpleThinIcon],svg[ph-link-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M162.84 93.16a4 4 0 0 1 0 5.66l-64 64a4 4 0 0 1-5.66-5.66l64-64a4 4 0 0 1 5.66 0m49.95-49.95a52.07 52.07 0 0 0-73.56 0l-30.06 30.06a4 4 0 0 0 5.65 5.66l30.07-30.06a44 44 0 0 1 62.24 62.24l-30.07 30.06a4 4 0 0 0 5.66 5.66l30.07-30.06a52.07 52.07 0 0 0 0-73.56m-71.62 133.85l-30.06 30.07a44 44 0 0 1-62.24-62.24l30.06-30.06a4 4 0 0 0-5.66-5.66l-30.06 30.06a52 52 0 0 0 73.56 73.56l30.06-30.07a4 4 0 1 0-5.66-5.66"></svg:path>`,
})
export class PhLinkSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkThinIcon],svg[ph-link-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 88.12a50.44 50.44 0 0 1-14.81 34.31l-34.75 34.74A50.33 50.33 0 0 1 150.62 172h-.05A50.63 50.63 0 0 1 100 120a4 4 0 0 1 4-3.89h.11a4 4 0 0 1 3.89 4.11A42.64 42.64 0 0 0 150.58 164a42.32 42.32 0 0 0 30.14-12.49l34.75-34.74a42.63 42.63 0 1 0-60.29-60.28l-11 11a4 4 0 0 1-5.66-5.65l11-11A50.64 50.64 0 0 1 236 88.12M111.78 188.49l-11 11A42.33 42.33 0 0 1 70.6 212a42.63 42.63 0 0 1-30.11-72.77l34.75-34.74A42.63 42.63 0 0 1 148 135.82a4 4 0 0 0 8 .23a50.64 50.64 0 0 0-86.45-37.22L34.8 133.57A50.63 50.63 0 0 0 70.56 220a50.33 50.33 0 0 0 35.81-14.83l11-11a4 4 0 1 0-5.65-5.66Z"></svg:path>`,
})
export class PhLinkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkedinLogoIcon],svg[ph-linkedin-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H40V40h176zM96 112v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m88 28v36a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140m-84-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhLinkedinLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkedinLogoBoldIcon],svg[ph-linkedin-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 20H40a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20m-4 192H44V44h168Zm-100-36v-56a12 12 0 0 1 21.43-7.41A40 40 0 0 1 192 148v28a12 12 0 0 1-24 0v-28a16 16 0 0 0-32 0v28a12 12 0 0 1-24 0m-16-56v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0M68 80a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhLinkedinLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkedinLogoDuotoneIcon],svg[ph-linkedin-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 40v176a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m0 192H40V40h176zM96 112v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m88 28v36a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140m-84-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhLinkedinLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkedinLogoFillIcon],svg[ph-linkedin-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M96 176a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm-8-80a12 12 0 1 1 12-12a12 12 0 0 1-12 12m96 80a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140Z"></svg:path>`,
})
export class PhLinkedinLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkedinLogoLightIcon],svg[ph-linkedin-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 26H40a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14m2 190a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM94 112v64a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0m88 28v36a6 6 0 0 1-12 0v-36a22 22 0 0 0-44 0v36a6 6 0 0 1-12 0v-64a6 6 0 0 1 12 0v2.11A34 34 0 0 1 182 140M98 84a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhLinkedinLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinkedinLogoThinIcon],svg[ph-linkedin-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 28H40a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m4 188a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM92 112v64a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0m88 28v36a4 4 0 0 1-8 0v-36a24 24 0 0 0-48 0v36a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0v6.87A32 32 0 0 1 180 140M96 84a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhLinkedinLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinktreeLogoIcon],svg[ph-linktree-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 160v72a8 8 0 0 1-16 0v-72a8 8 0 0 1 16 0m72-64h-60.69l42.35-42.34a8 8 0 0 0-11.32-11.32L136 84.69V24a8 8 0 0 0-16 0v60.69L77.66 42.34a8 8 0 0 0-11.32 11.32L108.69 96H48a8 8 0 0 0 0 16h60.69l-42.35 42.34a8 8 0 0 0 11.32 11.32L128 115.31l50.34 50.35a8 8 0 0 0 11.32-11.32L147.31 112H208a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhLinktreeLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinktreeLogoBoldIcon],svg[ph-linktree-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 164v68a12 12 0 0 1-24 0v-68a12 12 0 0 1 24 0m68-72h-51l35.52-35.51a12 12 0 0 0-17-17L140 75V24a12 12 0 0 0-24 0v51L80.49 39.51a12 12 0 0 0-17 17L99 92H48a12 12 0 0 0 0 24h51l-35.49 35.51a12 12 0 0 0 17 17L128 121l47.51 47.52a12 12 0 0 0 17-17L157 116h51a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhLinktreeLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinktreeLogoDuotoneIcon],svg[ph-linktree-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></svg:path><svg:path d="M136 160v72a8 8 0 0 1-16 0v-72a8 8 0 0 1 16 0m72-64h-60.69l42.35-42.34a8 8 0 0 0-11.32-11.32L136 84.69V24a8 8 0 0 0-16 0v60.69L77.66 42.34a8 8 0 0 0-11.32 11.32L108.69 96H48a8 8 0 0 0 0 16h60.69l-42.35 42.34a8 8 0 0 0 11.32 11.32L128 115.31l50.34 50.35a8 8 0 0 0 11.32-11.32L147.31 112H208a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhLinktreeLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinktreeLogoFillIcon],svg[ph-linktree-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-64 176a8 8 0 0 1-16 0v-40a8 8 0 0 1 16 0Zm48-80h-36.69l26.35 26.34a8 8 0 0 1-11.32 11.32L128 123.31l-34.34 34.35a8 8 0 0 1-11.32-11.32L108.69 120H72a8 8 0 0 1 0-16h36.69L82.34 77.66a8 8 0 0 1 11.32-11.32L120 92.69V56a8 8 0 0 1 16 0v36.69l26.34-26.35a8 8 0 0 1 11.32 11.32L147.31 104H184a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhLinktreeLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinktreeLogoLightIcon],svg[ph-linktree-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M134 160v72a6 6 0 0 1-12 0v-72a6 6 0 0 1 12 0m74-62h-65.52l45.76-45.76a6 6 0 0 0-8.48-8.48L134 89.52V24a6 6 0 0 0-12 0v65.52L76.24 43.76a6 6 0 0 0-8.48 8.48L113.52 98H48a6 6 0 0 0 0 12h65.52l-45.76 45.76a6 6 0 1 0 8.48 8.48L128 112.48l51.76 51.76a6 6 0 0 0 8.48-8.48L142.48 110H208a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhLinktreeLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinktreeLogoThinIcon],svg[ph-linktree-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 160v72a4 4 0 0 1-8 0v-72a4 4 0 0 1 8 0m76-60h-70.34l49.17-49.17a4 4 0 1 0-5.66-5.66L132 94.34V24a4 4 0 0 0-8 0v70.34L74.83 45.17a4 4 0 0 0-5.66 5.66L118.34 100H48a4 4 0 0 0 0 8h70.34l-49.17 49.17a4 4 0 0 0 5.66 5.66L128 109.66l53.17 53.17a4 4 0 0 0 5.66-5.66L137.66 108H208a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhLinktreeLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinuxLogoIcon],svg[ph-linux-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229 214.25a8 8 0 0 1-11.24-1.25C216.39 211.27 184 169.86 184 88a56 56 0 0 0-112 0c0 81.86-32.37 123.27-33.75 125a8 8 0 0 1-12.51-10c.15-.2 7.69-9.9 15.13-28.74C47.77 156.8 56 127.64 56 88a72 72 0 0 1 144 0c0 39.64 8.23 68.8 15.13 86.28c7.48 18.94 15.06 28.64 15.14 28.74a8 8 0 0 1-1.27 11.23M100 88a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 12a12 12 0 1 0-12 12a12 12 0 0 0 12-12m-68.42 28.84a8 8 0 0 0-7.15 14.31l32 16a7.94 7.94 0 0 0 7.15 0l32-16a8 8 0 0 0-7.16-14.31L128 143.05ZM128 176a54.07 54.07 0 0 0-47 28.11a8 8 0 1 0 14 7.78a37.35 37.35 0 0 1 66 0a8 8 0 0 0 14-7.78A54.07 54.07 0 0 0 128 176"></svg:path>`,
})
export class PhLinuxLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinuxLogoBoldIcon],svg[ph-linux-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.49 217.38a12 12 0 0 1-16.89-1.9C213.19 213.72 180 171.24 180 88a52 52 0 1 0-104 0c0 83.24-33.21 125.72-34.62 127.48a12 12 0 0 1-18.78-14.95C23 200 52 162.06 52 88a76 76 0 1 1 152 0c0 74.19 29.1 112.16 29.4 112.54a12 12 0 0 1-1.91 16.84M104 120a16 16 0 1 0-16-16a16 16 0 0 0 16 16m64-16a16 16 0 1 0-16 16a16 16 0 0 0 16-16m-72.74 51l28 12a12 12 0 0 0 9.45 0l28-12a12 12 0 0 0-9.45-22l-23.27 10l-23.27-10a12 12 0 0 0-9.46 22M128 184a57.12 57.12 0 0 0-38.66 15.15a12 12 0 0 0 16.23 17.69a32.86 32.86 0 0 1 44.85 0a12 12 0 1 0 16.23-17.69A57.1 57.1 0 0 0 128 184"></svg:path>`,
})
export class PhLinuxLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinuxLogoDuotoneIcon],svg[ph-linux-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 208h-56c-8-14.35-22.91-24-40-24s-32 9.65-40 24H32s32-40 32-120a64 64 0 0 1 128 0c0 80 32 120 32 120" opacity=".2"></svg:path><svg:path d="M229 214.25a8 8 0 0 1-11.24-1.25C216.39 211.27 184 169.86 184 88a56 56 0 0 0-112 0c0 81.86-32.37 123.27-33.75 125a8 8 0 0 1-12.51-10c.15-.2 7.69-9.9 15.13-28.74C47.77 156.8 56 127.64 56 88a72 72 0 0 1 144 0c0 39.64 8.23 68.8 15.13 86.28c7.48 18.94 15.06 28.64 15.14 28.74a8 8 0 0 1-1.27 11.23M100 88a12 12 0 1 0 12 12a12 12 0 0 0-12-12m68 12a12 12 0 1 0-12 12a12 12 0 0 0 12-12m-68.42 28.84a8 8 0 0 0-7.15 14.31l32 16a7.94 7.94 0 0 0 7.15 0l32-16a8 8 0 0 0-7.16-14.31L128 143.05ZM128 176a54.07 54.07 0 0 0-47 28.11a8 8 0 1 0 14 7.78a37.35 37.35 0 0 1 66 0a8 8 0 0 0 14-7.78A54.07 54.07 0 0 0 128 176"></svg:path></svg:g>`,
})
export class PhLinuxLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinuxLogoFillIcon],svg[ph-linux-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161.22 209.74a4 4 0 0 1-3.31 6.26H98.1a4 4 0 0 1-3.31-6.26a40 40 0 0 1 66.43 0m68.93 3.37a8.29 8.29 0 0 1-6.43 2.89h-39.16a4 4 0 0 1-3.76-2.65a56 56 0 0 0-105.59 0a4 4 0 0 1-3.76 2.65H32.23a8.2 8.2 0 0 1-6.42-2.93a8 8 0 0 1-.06-10.07c.06-.07 7.64-9.78 15.12-28.72C47.77 156.8 56 127.64 56 88a72 72 0 0 1 144 0c0 39.64 8.23 68.8 15.13 86.28c7.48 18.94 15.06 28.65 15.13 28.74a8 8 0 0 1-.11 10.09M88 100a12 12 0 1 0 12-12a12 12 0 0 0-12 12m79.16 32.42a8 8 0 0 0-10.73-3.58L128 143.06l-28.42-14.22a8 8 0 0 0-7.15 14.32l32 16a8 8 0 0 0 7.15 0l32-16a8 8 0 0 0 3.58-10.74M168 100a12 12 0 1 0-12 12a12 12 0 0 0 12-12"></svg:path>`,
})
export class PhLinuxLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinuxLogoLightIcon],svg[ph-linux-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.74 212.69a6 6 0 0 1-8.42-.94C218 210.05 186 169.17 186 88a58 58 0 0 0-116 0c0 81.17-31.95 122.05-33.31 123.75a6 6 0 0 1-9.38-7.49C27.68 203.79 58 164.56 58 88a70 70 0 0 1 140 0c0 76.63 30.38 115.87 30.69 116.26a6 6 0 0 1-.95 8.43M100 90a10 10 0 1 0 10 10a10 10 0 0 0-10-10m66 10a10 10 0 1 0-10 10a10 10 0 0 0 10-10m-67.31 30.63a6 6 0 0 0-5.37 10.74l32 16a6 6 0 0 0 2.68.63a6.1 6.1 0 0 0 2.69-.63l32-16a6 6 0 0 0-5.37-10.74L128 145.29ZM128 178a52.07 52.07 0 0 0-45.24 27.08a6 6 0 0 0 10.49 5.84a39.33 39.33 0 0 1 69.51 0A6 6 0 0 0 168 214a5.9 5.9 0 0 0 2.91-.76a6 6 0 0 0 2.33-8.16A52.09 52.09 0 0 0 128 178"></svg:path>`,
})
export class PhLinuxLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLinuxLogoThinIcon],svg[ph-linux-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.49 211.12a4 4 0 0 1-5.61-.62C219.54 208.82 188 168.48 188 88a60 60 0 0 0-120 0c0 80.48-31.53 120.82-32.88 122.5a4 4 0 0 1-6.25-5C29.18 205.11 60 165.45 60 88a68 68 0 0 1 136 0c0 40.48 8.47 70.27 15.57 88.14c7.69 19.35 15.48 29.27 15.56 29.36a4 4 0 0 1-.64 5.62M100 92a8 8 0 1 0 8 8a8 8 0 0 0-8-8m64 8a8 8 0 1 0-8 8a8 8 0 0 0 8-8m-66.21 32.42a4 4 0 1 0-3.58 7.16l32 16a4 4 0 0 0 3.58 0l32-16a4 4 0 0 0-3.58-7.16L128 147.53ZM128 180a50.05 50.05 0 0 0-43.49 26.05a4 4 0 1 0 7 3.89a41.34 41.34 0 0 1 73 0A4 4 0 0 0 168 212a3.94 3.94 0 0 0 1.94-.51a4 4 0 0 0 1.55-5.44A50.07 50.07 0 0 0 128 180"></svg:path>`,
})
export class PhLinuxLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListIcon],svg[ph-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhListIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListBoldIcon],svg[ph-list-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M40 76h176a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m176 104H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhListBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListBulletsIcon],svg[ph-list-bullets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 64a8 8 0 0 1 8-8h128a8 8 0 0 1 0 16H88a8 8 0 0 1-8-8m136 56H88a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16m0 64H88a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16M44 52a12 12 0 1 0 12 12a12 12 0 0 0-12-12m0 64a12 12 0 1 0 12 12a12 12 0 0 0-12-12m0 64a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhListBulletsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListBulletsBoldIcon],svg[ph-list-bullets-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 64a12 12 0 0 1 12-12h128a12 12 0 0 1 0 24H88a12 12 0 0 1-12-12m140 52H88a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24m0 64H88a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24M44 112a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-64a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0 128a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></svg:path>`,
})
export class PhListBulletsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListBulletsDuotoneIcon],svg[ph-list-bullets-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128H88V64Z" opacity=".2"></svg:path><svg:path d="M80 64a8 8 0 0 1 8-8h128a8 8 0 0 1 0 16H88a8 8 0 0 1-8-8m136 56H88a8 8 0 1 0 0 16h128a8 8 0 0 0 0-16m0 64H88a8 8 0 1 0 0 16h128a8 8 0 0 0 0-16M44 52a12 12 0 1 0 12 12a12 12 0 0 0-12-12m0 64a12 12 0 1 0 12 12a12 12 0 0 0-12-12m0 64a12 12 0 1 0 12 12a12 12 0 0 0-12-12"></svg:path></svg:g>`,
})
export class PhListBulletsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListBulletsFillIcon],svg[ph-list-bullets-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M68 188a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-48a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-48a12 12 0 1 1 12-12a12 12 0 0 1-12 12m124 92h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16m0-48h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16m0-48h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhListBulletsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListBulletsLightIcon],svg[ph-list-bullets-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M82 64a6 6 0 0 1 6-6h128a6 6 0 0 1 0 12H88a6 6 0 0 1-6-6m134 58H88a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12m0 64H88a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12M44 54a10 10 0 1 0 10 10a10 10 0 0 0-10-10m0 128a10 10 0 1 0 10 10a10 10 0 0 0-10-10m0-64a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhListBulletsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListBulletsThinIcon],svg[ph-list-bullets-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 64a4 4 0 0 1 4-4h128a4 4 0 0 1 0 8H88a4 4 0 0 1-4-4m132 60H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8m0 64H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8M44 120a8 8 0 1 0 8 8a8 8 0 0 0-8-8m0-64a8 8 0 1 0 8 8a8 8 0 0 0-8-8m0 128a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhListBulletsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListChecksIcon],svg[ph-list-checks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a8 8 0 0 1-8 8h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 8 8m-96-56h88a8 8 0 0 0 0-16h-88a8 8 0 0 0 0 16m88 112h-88a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16M82.34 42.34L56 68.69L45.66 58.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32m0 64L56 132.69l-10.34-10.35a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32m0 64L56 196.69l-10.34-10.35a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32"></svg:path>`,
})
export class PhListChecksIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListChecksBoldIcon],svg[ph-list-checks-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a12 12 0 0 1-12 12h-88a12 12 0 0 1 0-24h88a12 12 0 0 1 12 12M128 76h88a12 12 0 0 0 0-24h-88a12 12 0 0 0 0 24m88 104h-88a12 12 0 0 0 0 24h88a12 12 0 0 0 0-24M79.51 39.51L56 63l-7.51-7.52a12 12 0 0 0-17 17l16 16a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17Zm0 64L56 127l-7.51-7.52a12 12 0 1 0-17 17l16 16a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17Zm0 64L56 191l-7.51-7.52a12 12 0 1 0-17 17l16 16a12 12 0 0 0 17 0l32-32a12 12 0 0 0-17-17Z"></svg:path>`,
})
export class PhListChecksBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListChecksDuotoneIcon],svg[ph-list-checks-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128h-88V64Z" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-8 8h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 8 8m-96-56h88a8 8 0 0 0 0-16h-88a8 8 0 0 0 0 16m88 112h-88a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16M82.34 42.34L56 68.69L45.66 58.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32m0 64L56 132.69l-10.34-10.35a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32m0 64L56 196.69l-10.34-10.35a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32"></svg:path></svg:g>`,
})
export class PhListChecksDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListChecksFillIcon],svg[ph-list-checks-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-90.34 117.66l-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L80 164.69l26.34-26.35a8 8 0 0 1 11.32 11.32m0-64l-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L80 100.69l26.34-26.35a8 8 0 0 1 11.32 11.32M192 168h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m0-64h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhListChecksFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListChecksLightIcon],svg[ph-list-checks-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6h-88a6 6 0 0 1 0-12h88a6 6 0 0 1 6 6m-94-58h88a6 6 0 0 0 0-12h-88a6 6 0 0 0 0 12m88 116h-88a6 6 0 0 0 0 12h88a6 6 0 0 0 0-12M83.76 43.76L56 71.51L44.24 59.76a6 6 0 0 0-8.48 8.48l16 16a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0-8.48-8.48m0 64L56 135.51l-11.76-11.75a6 6 0 1 0-8.48 8.48l16 16a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0-8.48-8.48m0 64L56 199.51l-11.76-11.75a6 6 0 0 0-8.48 8.48l16 16a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0-8.48-8.48"></svg:path>`,
})
export class PhListChecksLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListChecksThinIcon],svg[ph-list-checks-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4h-88a4 4 0 0 1 0-8h88a4 4 0 0 1 4 4m-92-60h88a4 4 0 0 0 0-8h-88a4 4 0 0 0 0 8m88 120h-88a4 4 0 0 0 0 8h88a4 4 0 0 0 0-8M85.17 45.17L56 74.34L42.83 61.17a4 4 0 0 0-5.66 5.66l16 16a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0-5.66-5.66m0 64L56 138.34l-13.17-13.17a4 4 0 1 0-5.66 5.66l16 16a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0-5.66-5.66m0 64L56 202.34l-13.17-13.17a4 4 0 0 0-5.66 5.66l16 16a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0-5.66-5.66"></svg:path>`,
})
export class PhListChecksThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListDashesIcon],svg[ph-list-dashes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 64a8 8 0 0 1 8-8h120a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m128 56H96a8 8 0 0 0 0 16h120a8 8 0 0 0 0-16m0 64H96a8 8 0 0 0 0 16h120a8 8 0 0 0 0-16M56 56H40a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m0 64H40a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m0 64H40a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhListDashesIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListDashesBoldIcon],svg[ph-list-dashes-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 64a12 12 0 0 1 12-12h120a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m132 52H96a12 12 0 0 0 0 24h120a12 12 0 0 0 0-24m0 64H96a12 12 0 0 0 0 24h120a12 12 0 0 0 0-24M56 52H40a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24m0 64H40a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24m0 64H40a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhListDashesBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListDashesDuotoneIcon],svg[ph-list-dashes-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128H96V64Z" opacity=".2"></svg:path><svg:path d="M88 64a8 8 0 0 1 8-8h120a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m128 56H96a8 8 0 1 0 0 16h120a8 8 0 0 0 0-16m0 64H96a8 8 0 1 0 0 16h120a8 8 0 0 0 0-16M56 56H40a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16m0 64H40a8 8 0 1 0 0 16h16a8 8 0 0 0 0-16m0 64H40a8 8 0 1 0 0 16h16a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhListDashesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListDashesFillIcon],svg[ph-list-dashes-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 184h-8a8 8 0 0 1 0-16h8a8 8 0 0 1 0 16m0-48h-8a8 8 0 0 1 0-16h8a8 8 0 0 1 0 16m0-48h-8a8 8 0 0 1 0-16h8a8 8 0 0 1 0 16m120 96h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16m0-48h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16m0-48h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhListDashesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListDashesLightIcon],svg[ph-list-dashes-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90 64a6 6 0 0 1 6-6h120a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m126 58H96a6 6 0 0 0 0 12h120a6 6 0 0 0 0-12m0 64H96a6 6 0 0 0 0 12h120a6 6 0 0 0 0-12M56 58H40a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12m0 64H40a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12m0 64H40a6 6 0 0 0 0 12h16a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhListDashesLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListDashesThinIcon],svg[ph-list-dashes-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M92 64a4 4 0 0 1 4-4h120a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4m124 60H96a4 4 0 0 0 0 8h120a4 4 0 0 0 0-8m0 64H96a4 4 0 0 0 0 8h120a4 4 0 0 0 0-8M56 60H40a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m0 64H40a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8m0 64H40a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhListDashesThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListDuotoneIcon],svg[ph-list-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128H40V64Z" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhListDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListFillIcon],svg[ph-list-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-16 152H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16m0-48H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16m0-48H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhListFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListHeartIcon],svg[ph-list-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h64a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m80 48H40a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16m128-40c0 36.52-50.28 62.08-52.42 63.16a8 8 0 0 1-7.16 0C186.28 206.08 136 180.52 136 144a32 32 0 0 1 56-21.14A32 32 0 0 1 248 144m-16 0a16 16 0 0 0-32 0a8 8 0 0 1-16 0a16 16 0 0 0-32 0c0 20.18 26.21 39.14 40 46.93c13.79-7.78 40-26.74 40-46.93"></svg:path>`,
})
export class PhListHeartIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListHeartBoldIcon],svg[ph-list-heart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 192a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h72a12 12 0 0 1 12 12M40 76h176a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m0 64h56a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m212 4c0 17-9.53 33.56-28.32 49.22a151.5 151.5 0 0 1-26.31 17.51a12 12 0 0 1-10.74 0a151.5 151.5 0 0 1-26.31-17.51C141.53 177.56 132 161 132 144a36 36 0 0 1 60-26.81A36 36 0 0 1 252 144m-24 0a12 12 0 0 0-24 0a12 12 0 0 1-24 0a12 12 0 0 0-24 0c0 17.23 22.85 34.43 36 42.29c13.14-7.85 36-25.06 36-42.29"></svg:path>`,
})
export class PhListHeartBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListHeartDuotoneIcon],svg[ph-list-heart-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 144c0 32-48 56-48 56s-48-24-48-56a24 24 0 0 1 48 0a24 24 0 0 1 48 0" opacity=".2"></svg:path><svg:path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h64a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m80 48H40a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16m128-40c0 36.52-50.28 62.08-52.42 63.16a8 8 0 0 1-7.16 0C186.28 206.08 136 180.52 136 144a32 32 0 0 1 56-21.14A32 32 0 0 1 248 144m-16 0a16 16 0 0 0-32 0a8 8 0 0 1-16 0a16 16 0 0 0-32 0c0 20.18 26.21 39.14 40 46.93c13.79-7.78 40-26.74 40-46.93"></svg:path></svg:g>`,
})
export class PhListHeartDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListHeartFillIcon],svg[ph-list-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M104 184H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m-48-56a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8m105.79 57.58a4 4 0 0 1-3.58 0C156.65 184.8 120 166.17 120 140a22 22 0 0 1 40-12.64A22 22 0 0 1 200 140c0 26.17-36.65 44.8-38.21 45.58M192 88H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhListHeartFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListHeartLightIcon],svg[ph-list-heart-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m6 70h64a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m80 52H40a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12m126-42c0 35.3-49.22 60.32-51.32 61.37a6 6 0 0 1-5.36 0C187.22 204.32 138 179.3 138 144a30 30 0 0 1 54-18a30 30 0 0 1 54 18m-12 0a18 18 0 0 0-36 0a6 6 0 0 1-12 0a18 18 0 0 0-36 0c0 14.15 11.78 27 21.67 35.25A139 139 0 0 0 192 193.19a138 138 0 0 0 20.33-13.94C222.22 171 234 158.15 234 144"></svg:path>`,
})
export class PhListHeartLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListHeartThinIcon],svg[ph-list-heart-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m4 68h64a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m80 56H40a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8m124-44c0 14.51-8.56 29-25.44 43.07a143.5 143.5 0 0 1-24.77 16.51a4 4 0 0 1-3.58 0a143.5 143.5 0 0 1-24.77-16.51C148.56 173 140 158.51 140 144a28 28 0 0 1 52-14.41A28 28 0 0 1 244 144m-8 0a20 20 0 0 0-40 0a4 4 0 0 1-8 0a20 20 0 0 0-40 0c0 25.8 35.54 46.83 44 51.47c8.46-4.64 44-25.67 44-51.47"></svg:path>`,
})
export class PhListHeartThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListLightIcon],svg[ph-list-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M40 70h176a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m176 116H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhListLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListMagnifyingGlassIcon],svg[ph-list-magnifying-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h72a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m88 48H40a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16m109.66 13.66a8 8 0 0 1-11.32 0L206 177.36A40 40 0 1 1 217.36 166l20.3 20.3a8 8 0 0 1 0 11.36M184 168a24 24 0 1 0-24-24a24 24 0 0 0 24 24"></svg:path>`,
})
export class PhListMagnifyingGlassIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListMagnifyingGlassBoldIcon],svg[ph-list-magnifying-glass-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m12 76h64a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m80 40H40a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24m120.49 20.49a12 12 0 0 1-17 0l-18.08-18.08a44 44 0 1 1 17-17l18.08 18.07a12 12 0 0 1 0 17.01M184 164a20 20 0 1 0-20-20a20 20 0 0 0 20 20"></svg:path>`,
})
export class PhListMagnifyingGlassBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListMagnifyingGlassDuotoneIcon],svg[ph-list-magnifying-glass-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 144a32 32 0 1 1-32-32a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h72a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m88 48H40a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16m109.66 13.66a8 8 0 0 1-11.32 0L206 177.36A40 40 0 1 1 217.36 166l20.3 20.3a8 8 0 0 1 0 11.36M184 168a24 24 0 1 0-24-24a24 24 0 0 0 24 24"></svg:path></svg:g>`,
})
export class PhListMagnifyingGlassDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListMagnifyingGlassFillIcon],svg[ph-list-magnifying-glass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h72a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m88 48H40a8 8 0 0 0 0 16h88a8 8 0 0 0 0-16m109.66 2.34L217.36 166A40 40 0 1 0 206 177.36l20.3 20.3a8 8 0 0 0 11.32-11.32Z"></svg:path>`,
})
export class PhListMagnifyingGlassFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListMagnifyingGlassLightIcon],svg[ph-list-magnifying-glass-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m6 70h72a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m88 52H40a6 6 0 0 0 0 12h88a6 6 0 0 0 0-12m108.24 10.24a6 6 0 0 1-8.48 0l-21.49-21.48a38.06 38.06 0 1 1 8.49-8.49l21.48 21.49a6 6 0 0 1 0 8.48M184 170a26 26 0 1 0-26-26a26 26 0 0 0 26 26"></svg:path>`,
})
export class PhListMagnifyingGlassLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListMagnifyingGlassThinIcon],svg[ph-list-magnifying-glass-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m4 68h72a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m88 56H40a4 4 0 0 0 0 8h88a4 4 0 0 0 0-8m106.83 6.83a4 4 0 0 1-5.66 0l-22.72-22.72a36.06 36.06 0 1 1 5.66-5.66l22.72 22.72a4 4 0 0 1 0 5.66M184 172a28 28 0 1 0-28-28a28 28 0 0 0 28 28"></svg:path>`,
})
export class PhListMagnifyingGlassThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListNumbersIcon],svg[ph-list-numbers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 128a8 8 0 0 1-8 8H104a8 8 0 0 1 0-16h112a8 8 0 0 1 8 8M104 72h112a8 8 0 0 0 0-16H104a8 8 0 0 0 0 16m112 112H104a8 8 0 0 0 0 16h112a8 8 0 0 0 0-16M43.58 55.16L48 52.94V104a8 8 0 0 0 16 0V40a8 8 0 0 0-11.58-7.16l-16 8a8 8 0 0 0 7.16 14.32m36.19 101.56a23.73 23.73 0 0 0-9.6-15.95a24.86 24.86 0 0 0-34.11 4.7a23.6 23.6 0 0 0-3.57 6.46a8 8 0 1 0 15 5.47a7.8 7.8 0 0 1 1.18-2.13a8.76 8.76 0 0 1 12-1.59a7.9 7.9 0 0 1 3.26 5.32a7.64 7.64 0 0 1-1.57 5.78a1 1 0 0 0-.08.11l-28.69 38.32A8 8 0 0 0 40 216h32a8 8 0 0 0 0-16H56l19.08-25.53a23.47 23.47 0 0 0 4.69-17.75"></svg:path>`,
})
export class PhListNumbersIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListNumbersBoldIcon],svg[ph-list-numbers-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a12 12 0 0 1-12 12H116a12 12 0 0 1 0-24h100a12 12 0 0 1 12 12M116 76h100a12 12 0 0 0 0-24H116a12 12 0 0 0 0 24m100 104H116a12 12 0 0 0 0 24h100a12 12 0 0 0 0-24M44 59.31V104a12 12 0 0 0 24 0V40a12 12 0 0 0-17.36-10.73l-16 8a12 12 0 0 0 9.36 22Zm39.73 96.86a27.7 27.7 0 0 0-11.2-18.63A28.89 28.89 0 0 0 32.9 143a27.7 27.7 0 0 0-4.17 7.54a12 12 0 0 0 22.55 8.21a4 4 0 0 1 .58-1a4.78 4.78 0 0 1 6.5-.82a3.82 3.82 0 0 1 1.61 2.6a3.63 3.63 0 0 1-.77 2.77l-.13.17l-28.68 38.35A12 12 0 0 0 40 220h32a12 12 0 0 0 0-24h-8l14.28-19.11a27.48 27.48 0 0 0 5.45-20.72"></svg:path>`,
})
export class PhListNumbersBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListNumbersDuotoneIcon],svg[ph-list-numbers-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128H104V64Z" opacity=".2"></svg:path><svg:path d="M224 128a8 8 0 0 1-8 8H104a8 8 0 0 1 0-16h112a8 8 0 0 1 8 8M104 72h112a8 8 0 0 0 0-16H104a8 8 0 0 0 0 16m112 112H104a8 8 0 0 0 0 16h112a8 8 0 0 0 0-16M43.58 55.16L48 52.94V104a8 8 0 0 0 16 0V40a8 8 0 0 0-11.58-7.16l-16 8a8 8 0 0 0 7.16 14.32m36.19 101.56a23.73 23.73 0 0 0-9.6-15.95a24.86 24.86 0 0 0-34.11 4.7a23.6 23.6 0 0 0-3.57 6.46a8 8 0 1 0 15 5.47a7.8 7.8 0 0 1 1.18-2.13a8.76 8.76 0 0 1 12-1.59a7.9 7.9 0 0 1 3.26 5.32a7.64 7.64 0 0 1-1.57 5.78a1 1 0 0 0-.08.11l-28.69 38.32A8 8 0 0 0 40 216h32a8 8 0 0 0 0-16H56l19.08-25.53a23.47 23.47 0 0 0 4.69-17.75"></svg:path></svg:g>`,
})
export class PhListNumbersDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListNumbersFillIcon],svg[ph-list-numbers-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56.84 75.58a8 8 0 0 1 3.58-10.74l16-8A8 8 0 0 1 88 64v48a8 8 0 0 1-16 0V76.94l-4.42 2.22a8 8 0 0 1-10.74-3.58M92 180a8 8 0 0 1 0 16H68a8 8 0 0 1-6.4-12.8l21.67-28.89A3.92 3.92 0 0 0 84 152a4 4 0 0 0-7.77-1.33a8 8 0 0 1-15.09-5.34a20 20 0 1 1 35 18.53L84 180Zm100 4h-72a8 8 0 0 1 0-16h72a8 8 0 0 1 0 16m0-48h-72a8 8 0 0 1 0-16h72a8 8 0 0 1 0 16m0-48h-72a8 8 0 0 1 0-16h72a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhListNumbersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListNumbersLightIcon],svg[ph-list-numbers-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H104a6 6 0 0 1 0-12h112a6 6 0 0 1 6 6M104 70h112a6 6 0 0 0 0-12H104a6 6 0 0 0 0 12m112 116H104a6 6 0 0 0 0 12h112a6 6 0 0 0 0-12M42.68 53.37L50 49.71V104a6 6 0 0 0 12 0V40a6 6 0 0 0-8.68-5.37l-16 8a6 6 0 0 0 5.36 10.74M72 202H52l21.48-28.74A21.5 21.5 0 0 0 77.79 157A21.75 21.75 0 0 0 69 142.38a22.86 22.86 0 0 0-31.35 4.31a22.2 22.2 0 0 0-3.28 5.92a6 6 0 0 0 11.28 4.11a9.9 9.9 0 0 1 1.48-2.67a10.78 10.78 0 0 1 14.78-2a9.9 9.9 0 0 1 4 6.61a9.64 9.64 0 0 1-2 7.28l-.06.09l-28.65 38.38A6 6 0 0 0 40 214h32a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhListNumbersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListNumbersThinIcon],svg[ph-list-numbers-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4H104a4 4 0 0 1 0-8h112a4 4 0 0 1 4 4M104 68h112a4 4 0 0 0 0-8H104a4 4 0 0 0 0 8m112 120H104a4 4 0 0 0 0 8h112a4 4 0 0 0 0-8M41.79 51.58L52 46.47V104a4 4 0 0 0 8 0V40a4 4 0 0 0-5.79-3.58l-16 8a4 4 0 1 0 3.58 7.16M72 204H48l23.85-31.92a19.54 19.54 0 0 0 4-14.8a19.76 19.76 0 0 0-8-13.28a20.84 20.84 0 0 0-28.59 3.92a19.9 19.9 0 0 0-3 5.38a4 4 0 0 0 7.5 2.7a12.1 12.1 0 0 1 1.78-3.22a12.78 12.78 0 0 1 17.54-2.37a11.85 11.85 0 0 1 4.81 7.94a11.65 11.65 0 0 1-2.41 8.85L36.8 205.61A4 4 0 0 0 40 212h32a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhListNumbersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListPlusIcon],svg[ph-list-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m104 48H40a8 8 0 0 0 0 16h104a8 8 0 0 0 0-16m88 0h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhListPlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListPlusBoldIcon],svg[ph-list-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m12 76h176a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m104 40H40a12 12 0 0 0 0 24h104a12 12 0 0 0 0-24m88 0h-12v-12a12 12 0 0 0-24 0v12h-12a12 12 0 0 0 0 24h12v12a12 12 0 0 0 24 0v-12h12a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhListPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListPlusDuotoneIcon],svg[ph-list-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 64v128H40V64Z" opacity=".2"></svg:path><svg:path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m104 48H40a8 8 0 0 0 0 16h104a8 8 0 0 0 0-16m88 0h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhListPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListPlusFillIcon],svg[ph-list-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M64 72h128a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m56 112H64a8 8 0 0 1 0-16h56a8 8 0 0 1 0 16m16-48H64a8 8 0 0 1 0-16h72a8 8 0 0 1 0 16m64 32h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhListPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListPlusLightIcon],svg[ph-list-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m6 70h176a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m104 52H40a6 6 0 0 0 0 12h104a6 6 0 0 0 0-12m88 0h-18v-18a6 6 0 0 0-12 0v18h-18a6 6 0 0 0 0 12h18v18a6 6 0 0 0 12 0v-18h18a6 6 0 0 0 0-12"></svg:path>`,
})
export class PhListPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListPlusThinIcon],svg[ph-list-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m4 68h176a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m104 56H40a4 4 0 0 0 0 8h104a4 4 0 0 0 0-8m88 0h-20v-20a4 4 0 0 0-8 0v20h-20a4 4 0 0 0 0 8h20v20a4 4 0 0 0 8 0v-20h20a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhListPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListStarIcon],svg[ph-list-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h56a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m72 48H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m125.09-40.22l-22.52 18.59l6.86 27.71a8 8 0 0 1-11.82 8.81L184 183.82l-25.61 15.07a8 8 0 0 1-11.82-8.81l6.85-27.71l-22.51-18.59a8 8 0 0 1 4.47-14.14l29.84-2.31l11.43-26.5a8 8 0 0 1 14.7 0l11.43 26.5l29.84 2.31a8 8 0 0 1 4.47 14.14m-25.47.28l-14.89-1.15a8 8 0 0 1-6.73-4.8l-6-13.92l-6 13.92a8 8 0 0 1-6.73 4.8l-14.89 1.15l11.11 9.18a8 8 0 0 1 2.68 8.09l-3.5 14.12l13.27-7.81a8 8 0 0 1 8.12 0l13.27 7.81l-3.5-14.12a8 8 0 0 1 2.68-8.09Z"></svg:path>`,
})
export class PhListStarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListStarBoldIcon],svg[ph-list-star-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m12 76h48a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m64 40H40a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m135.64-33.13l-20.58 17l6.25 25.26a12 12 0 0 1-17.73 13.22L184 188.46l-23.58 13.88a12 12 0 0 1-17.73-13.22l6.25-25.26l-20.58-17a12 12 0 0 1 6.72-21.22l27.42-2.12L173 99.25a12 12 0 0 1 22 0l10.48 24.28l27.42 2.12a12 12 0 0 1 6.72 21.22Zm-38.21.42l-5-.39a12 12 0 0 1-10.09-7.21l-2.33-5.4l-2.33 5.4a12 12 0 0 1-10.1 7.21l-5 .39l3.48 2.87a12 12 0 0 1 4 12.13l-1.21 4.89l5.07-3a12.06 12.06 0 0 1 12.18 0l5.07 3l-1.17-4.89a12 12 0 0 1 4-12.13Z"></svg:path>`,
})
export class PhListStarBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListStarDuotoneIcon],svg[ph-list-star-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m205.6 159.41l8.07 32.59L184 174.54L154.33 192l8.07-32.59l-26.4-21.8l34.65-2.67L184 104l13.35 30.94l34.65 2.67Z" opacity=".2"></svg:path><svg:path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h56a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m72 48H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m125.09-40.22l-22.52 18.59l6.86 27.71a8 8 0 0 1-11.82 8.81L184 183.82l-25.61 15.07a8 8 0 0 1-11.82-8.81l6.85-27.71l-22.51-18.59a8 8 0 0 1 4.47-14.14l29.84-2.31l11.43-26.5a8 8 0 0 1 14.7 0l11.43 26.5l29.84 2.31a8 8 0 0 1 4.47 14.14m-25.47.28l-14.89-1.15a8 8 0 0 1-6.73-4.8l-6-13.92l-6 13.92a8 8 0 0 1-6.73 4.8l-14.89 1.15l11.11 9.18a8 8 0 0 1 2.68 8.09l-3.5 14.12l13.27-7.81a8 8 0 0 1 8.12 0l13.27 7.81l-3.5-14.12a8 8 0 0 1 2.68-8.09Z"></svg:path></svg:g>`,
})
export class PhListStarDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListStarFillIcon],svg[ph-list-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M64 72h128a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m0 48h32a8 8 0 0 1 0 16H64a8 8 0 0 1 0-16m40 64H64a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m94.55-40.71L180.69 158l5.44 22a4 4 0 0 1-1.49 4.17a4.05 4.05 0 0 1-2.39.79a4 4 0 0 1-2-.55L160 172.54l-20.22 11.91a4 4 0 0 1-5.91-4.41l5.44-22l-17.86-14.75a4 4 0 0 1 2.24-7.07l23.58-1.82l9.06-21a4 4 0 0 1 7.34 0l9.06 21l23.58 1.82a4 4 0 0 1 2.24 7.07"></svg:path>`,
})
export class PhListStarFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListStarLightIcon],svg[ph-list-star-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m6 70h56a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m72 52H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12m123.82-43.76l-23.49 19.39l7.16 28.93a6 6 0 0 1-8.87 6.61L184 181.5l-26.62 15.67a6 6 0 0 1-8.87-6.61l7.16-28.93l-23.49-19.39a6 6 0 0 1 3.36-10.61l31-2.4l11.91-27.61a6 6 0 0 1 11 0l11.91 27.61l31 2.4a6 6 0 0 1 3.36 10.61Zm-19.1.21l-19.83-1.53a6 6 0 0 1-5-3.61L184 119.14l-7.84 18.17a6 6 0 0 1-5 3.61l-19.83 1.53l14.94 12.33a6 6 0 0 1 2 6.07l-4.63 18.74L181 169.37a6 6 0 0 1 6.08 0l17.37 10.22l-4.63-18.74a6 6 0 0 1 2-6.07Z"></svg:path>`,
})
export class PhListStarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListStarThinIcon],svg[ph-list-star-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m4 68h56a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m72 56H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m122.55-47.3l-24.46 20.19l7.46 30.11a4 4 0 0 1-1.49 4.17a4.06 4.06 0 0 1-2.4.79a4 4 0 0 1-2-.55L184 179.18l-27.64 16.27a4 4 0 0 1-5.91-4.41l7.46-30.15l-24.46-20.19a4 4 0 0 1 2.24-7.08l32.24-2.49l12.4-28.71a4 4 0 0 1 7.34 0l12.4 28.71l32.24 2.49a4 4 0 0 1 2.24 7.08m-12.74.14L197 138.92a4 4 0 0 1-3.36-2.4L184 114.1l-9.68 22.42a4 4 0 0 1-3.36 2.4l-24.77 1.92L165 156.33a4 4 0 0 1 1.33 4l-5.78 23.36l21.45-12.6a4 4 0 0 1 4.06 0l21.47 12.64l-5.78-23.36a4 4 0 0 1 1.33-4Z"></svg:path>`,
})
export class PhListStarThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phListThinIcon],svg[ph-list-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 128a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4M40 68h176a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8m176 120H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhListThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockIcon],svg[ph-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M96 56a32 32 0 0 1 64 0v24H96Zm112 152H48V96h160zm-68-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhLockIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockBoldIcon],svg[ph-lock-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 76h-28V56a52 52 0 0 0-104 0v20H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V96a20 20 0 0 0-20-20M100 56a28 28 0 0 1 56 0v20h-56Zm104 148H52V100h152Zm-60-52a16 16 0 1 1-16-16a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhLockBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockDuotoneIcon],svg[ph-lock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v112a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M96 56a32 32 0 0 1 64 0v24H96Zm112 152H48V96h160zm-68-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhLockDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockFillIcon],svg[ph-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m-80 84a12 12 0 1 1 12-12a12 12 0 0 1-12 12m32-84H96V56a32 32 0 0 1 64 0Z"></svg:path>`,
})
export class PhLockFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyIcon],svg[ph-lock-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 112a28 28 0 0 0-8 54.83V184a8 8 0 0 0 16 0v-17.17a28 28 0 0 0-8-54.83m0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m80-72h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M96 56a32 32 0 0 1 64 0v24H96Zm112 152H48V96h160z"></svg:path>`,
})
export class PhLockKeyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyBoldIcon],svg[ph-lock-key-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 76h-28V56a52 52 0 0 0-104 0v20H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V96a20 20 0 0 0-20-20M100 56a28 28 0 0 1 56 0v20h-56Zm104 148H52V100h152Zm-76-92a32 32 0 0 0-12 61.66V180a12 12 0 0 0 24 0v-6.34A32 32 0 0 0 128 112m0 24a8 8 0 1 1-8 8a8 8 0 0 1 8-8"></svg:path>`,
})
export class PhLockKeyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyDuotoneIcon],svg[ph-lock-key-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88H48a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8m-80 72a20 20 0 1 1 20-20a20 20 0 0 1-20 20" opacity=".2"></svg:path><svg:path d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M96 56a32 32 0 0 1 64 0v24H96Zm112 152H48V96h160zm-80-96a28 28 0 0 0-8 54.83V184a8 8 0 0 0 16 0v-17.17a28 28 0 0 0-8-54.83m0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path></svg:g>`,
})
export class PhLockKeyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyFillIcon],svg[ph-lock-key-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m-72 78.63V184a8 8 0 0 1-16 0v-25.37a24 24 0 1 1 16 0M160 80H96V56a32 32 0 0 1 64 0Z"></svg:path>`,
})
export class PhLockKeyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyLightIcon],svg[ph-lock-key-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82h-34V56a46 46 0 0 0-92 0v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14M94 56a34 34 0 0 1 68 0v26H94Zm116 152a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-82-94a26 26 0 0 0-6 51.29V184a6 6 0 0 0 12 0v-18.71a26 26 0 0 0-6-51.29m0 40a14 14 0 1 1 14-14a14 14 0 0 1-14 14"></svg:path>`,
})
export class PhLockKeyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyOpenIcon],svg[ph-lock-key-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m0 128H48V96h160zm-80-96a28 28 0 0 0-8 54.83V184a8 8 0 0 0 16 0v-17.17a28 28 0 0 0-8-54.83m0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhLockKeyOpenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyOpenBoldIcon],svg[ph-lock-key-open-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 76H100V56a28 28 0 0 1 28-28c13.51 0 25.65 9.62 28.24 22.39a12 12 0 1 0 23.52-4.78C174.87 21.5 153.1 4 128 4a52.06 52.06 0 0 0-52 52v20H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V96a20 20 0 0 0-20-20m-4 128H52V100h152Zm-88-30.34V180a12 12 0 0 0 24 0v-6.34a32 32 0 1 0-24 0M128 136a8 8 0 1 1-8 8a8 8 0 0 1 8-8"></svg:path>`,
})
export class PhLockKeyOpenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyOpenDuotoneIcon],svg[ph-lock-key-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 88H48a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8m-80 72a20 20 0 1 1 20-20a20 20 0 0 1-20 20" opacity=".2"></svg:path><svg:path d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m0 128H48V96h160zm-80-96a28 28 0 0 0-8 54.83V184a8 8 0 0 0 16 0v-17.17a28 28 0 0 0-8-54.83m0 40a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path></svg:g>`,
})
export class PhLockKeyOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyOpenFillIcon],svg[ph-lock-key-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m-72 78.63V184a8 8 0 0 1-16 0v-25.37a24 24 0 1 1 16 0"></svg:path>`,
})
export class PhLockKeyOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyOpenLightIcon],svg[ph-lock-key-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82H94V56a34 34 0 0 1 34-34c16.3 0 31 11.69 34.12 27.19a6 6 0 0 0 11.76-2.38C169.55 25.48 150.26 10 128 10a46.06 46.06 0 0 0-46 46v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-82-94a26 26 0 0 0-6 51.29V184a6 6 0 0 0 12 0v-18.71a26 26 0 0 0-6-51.29m0 40a14 14 0 1 1 14-14a14 14 0 0 1-14 14"></svg:path>`,
})
export class PhLockKeyOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyOpenThinIcon],svg[ph-lock-key-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84H92V56a36 36 0 0 1 36-36c17.24 0 32.75 12.38 36.08 28.8a4 4 0 1 0 7.84-1.6C167.78 26.81 149.31 12 128 12a44.05 44.05 0 0 0-44 44v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-84-92a24 24 0 0 0-4 47.66V184a4 4 0 0 0 8 0v-20.34a24 24 0 0 0-4-47.66m0 40a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhLockKeyOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockKeyThinIcon],svg[ph-lock-key-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84h-36V56a44 44 0 0 0-88 0v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12M92 56a36 36 0 0 1 72 0v28H92Zm120 152a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-84-92a24 24 0 0 0-4 47.66V184a4 4 0 0 0 8 0v-20.34a24 24 0 0 0-4-47.66m0 40a16 16 0 1 1 16-16a16 16 0 0 1-16 16"></svg:path>`,
})
export class PhLockKeyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedIcon],svg[ph-lock-laminated-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M48 128h160v16H48Zm0 32h160v16H48ZM96 56a32 32 0 0 1 64 0v24H96Zm112 40v16H48V96Zm0 112H48v-16h160z"></svg:path>`,
})
export class PhLockLaminatedIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedBoldIcon],svg[ph-lock-laminated-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 76h-28V56a52 52 0 0 0-104 0v20H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V96a20 20 0 0 0-20-20M52 144h152v16H52Zm48-88a28 28 0 0 1 56 0v20h-56Zm104 44v20H52v-20ZM52 204v-20h152v20Z"></svg:path>`,
})
export class PhLockLaminatedBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedDuotoneIcon],svg[ph-lock-laminated-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v112a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M48 128h160v16H48Zm0 32h160v16H48ZM96 56a32 32 0 0 1 64 0v24H96Zm112 40v16H48V96Zm0 112H48v-16h160z"></svg:path></svg:g>`,
})
export class PhLockLaminatedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedFillIcon],svg[ph-lock-laminated-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M96 56a32 32 0 0 1 64 0v24H96Zm88 136H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16m0-32H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16m0-32H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhLockLaminatedFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedLightIcon],svg[ph-lock-laminated-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82h-34V56a46 46 0 0 0-92 0v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14M46 126h164v20H46Zm0 32h164v20H46ZM94 56a34 34 0 0 1 68 0v26H94ZM48 94h160a2 2 0 0 1 2 2v18H46V96a2 2 0 0 1 2-2m160 116H48a2 2 0 0 1-2-2v-18h164v18a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhLockLaminatedLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedOpenIcon],svg[ph-lock-laminated-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M48 128h160v16H48Zm0 32h160v16H48Zm160-64v16H48V96Zm0 112H48v-16h160z"></svg:path>`,
})
export class PhLockLaminatedOpenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedOpenBoldIcon],svg[ph-lock-laminated-open-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 76H100V56a28 28 0 0 1 28-28c13.51 0 25.65 9.62 28.24 22.39a12 12 0 1 0 23.52-4.78C174.87 21.5 153.1 4 128 4a52.06 52.06 0 0 0-52 52v20H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V96a20 20 0 0 0-20-20M52 144h152v16H52Zm152-44v20H52v-20ZM52 204v-20h152v20Z"></svg:path>`,
})
export class PhLockLaminatedOpenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedOpenDuotoneIcon],svg[ph-lock-laminated-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v112a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M48 128h160v16H48Zm0 32h160v16H48Zm160-64v16H48V96Zm0 112H48v-16h160z"></svg:path></svg:g>`,
})
export class PhLockLaminatedOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedOpenFillIcon],svg[ph-lock-laminated-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m-24 112H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16m0-32H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16m0-32H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhLockLaminatedOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedOpenLightIcon],svg[ph-lock-laminated-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82H94V56a34 34 0 0 1 34-34c16.3 0 31 11.69 34.12 27.19a6 6 0 0 0 11.76-2.38C169.55 25.48 150.26 10 128 10a46.06 46.06 0 0 0-46 46v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14M46 126h164v20H46Zm0 32h164v20H46Zm2-64h160a2 2 0 0 1 2 2v18H46V96a2 2 0 0 1 2-2m160 116H48a2 2 0 0 1-2-2v-18h164v18a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhLockLaminatedOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedOpenThinIcon],svg[ph-lock-laminated-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84H92V56a36 36 0 0 1 36-36c17.24 0 32.75 12.38 36.08 28.8a4 4 0 1 0 7.84-1.6C167.78 26.81 149.31 12 128 12a44.05 44.05 0 0 0-44 44v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12M44 124h168v24H44Zm0 32h168v24H44Zm4-64h160a4 4 0 0 1 4 4v20H44V96a4 4 0 0 1 4-4m160 120H48a4 4 0 0 1-4-4v-20h168v20a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhLockLaminatedOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLaminatedThinIcon],svg[ph-lock-laminated-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84h-36V56a44 44 0 0 0-88 0v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12M44 124h168v24H44Zm0 32h168v24H44ZM92 56a36 36 0 0 1 72 0v28H92ZM48 92h160a4 4 0 0 1 4 4v20H44V96a4 4 0 0 1 4-4m160 120H48a4 4 0 0 1-4-4v-20h168v20a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhLockLaminatedThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockLightIcon],svg[ph-lock-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82h-34V56a46 46 0 0 0-92 0v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14M94 56a34 34 0 0 1 68 0v26H94Zm116 152a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-72-56a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhLockLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockOpenIcon],svg[ph-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m0 128H48V96h160zm-68-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhLockOpenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockOpenBoldIcon],svg[ph-lock-open-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 76H100V56a28 28 0 0 1 28-28c13.51 0 25.65 9.62 28.24 22.39a12 12 0 1 0 23.52-4.78C174.87 21.5 153.1 4 128 4a52.06 52.06 0 0 0-52 52v20H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V96a20 20 0 0 0-20-20m-4 128H52V100h152Zm-92-52a16 16 0 1 1 16 16a16 16 0 0 1-16-16"></svg:path>`,
})
export class PhLockOpenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockOpenDuotoneIcon],svg[ph-lock-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v112a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m0 128H48V96h160zm-68-56a12 12 0 1 1-12-12a12 12 0 0 1 12 12"></svg:path></svg:g>`,
})
export class PhLockOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockOpenFillIcon],svg[ph-lock-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m-80 84a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhLockOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockOpenLightIcon],svg[ph-lock-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82H94V56a34 34 0 0 1 34-34c16.3 0 31 11.69 34.12 27.19a6 6 0 0 0 11.76-2.38C169.55 25.48 150.26 10 128 10a46.06 46.06 0 0 0-46 46v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Zm-72-56a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></svg:path>`,
})
export class PhLockOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockOpenThinIcon],svg[ph-lock-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84H92V56a36 36 0 0 1 36-36c17.24 0 32.75 12.38 36.08 28.8a4 4 0 1 0 7.84-1.6C167.78 26.81 149.31 12 128 12a44.05 44.05 0 0 0-44 44v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-76-56a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhLockOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleIcon],svg[ph-lock-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M96 56a32 32 0 0 1 64 0v24H96Zm112 152H48V96h160z"></svg:path>`,
})
export class PhLockSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleBoldIcon],svg[ph-lock-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 76h-28V56a52 52 0 0 0-104 0v20H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V96a20 20 0 0 0-20-20M100 56a28 28 0 0 1 56 0v20h-56Zm104 148H52V100h152Z"></svg:path>`,
})
export class PhLockSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleDuotoneIcon],svg[ph-lock-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v112a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M96 56a32 32 0 0 1 64 0v24H96Zm112 152H48V96h160z"></svg:path></svg:g>`,
})
export class PhLockSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleFillIcon],svg[ph-lock-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16M96 56a32 32 0 0 1 64 0v24H96Z"></svg:path>`,
})
export class PhLockSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleLightIcon],svg[ph-lock-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82h-34V56a46 46 0 0 0-92 0v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14M94 56a34 34 0 0 1 68 0v26H94Zm116 152a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhLockSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleOpenIcon],svg[ph-lock-simple-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m0 128H48V96h160z"></svg:path>`,
})
export class PhLockSimpleOpenIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleOpenBoldIcon],svg[ph-lock-simple-open-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 76H100V56a28 28 0 0 1 28-28c13.51 0 25.65 9.62 28.24 22.39a12 12 0 1 0 23.52-4.78C174.87 21.5 153.1 4 128 4a52.06 52.06 0 0 0-52 52v20H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V96a20 20 0 0 0-20-20m-4 128H52V100h152Z"></svg:path>`,
})
export class PhLockSimpleOpenBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleOpenDuotoneIcon],svg[ph-lock-simple-open-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96v112a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16m0 128H48V96h160z"></svg:path></svg:g>`,
})
export class PhLockSimpleOpenDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleOpenFillIcon],svg[ph-lock-simple-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 96v112a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h32V56a48.05 48.05 0 0 1 48-48c23.2 0 43.32 16.15 47.84 38.41a8 8 0 0 1-15.68 3.18C157.2 35 143.37 24 128 24a32 32 0 0 0-32 32v24h112a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhLockSimpleOpenFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleOpenLightIcon],svg[ph-lock-simple-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 82H94V56a34 34 0 0 1 34-34c16.3 0 31 11.69 34.12 27.19a6 6 0 0 0 11.76-2.38C169.55 25.48 150.26 10 128 10a46.06 46.06 0 0 0-46 46v26H48a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V96a14 14 0 0 0-14-14m2 126a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhLockSimpleOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleOpenThinIcon],svg[ph-lock-simple-open-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84H92V56a36 36 0 0 1 36-36c17.24 0 32.75 12.38 36.08 28.8a4 4 0 1 0 7.84-1.6C167.78 26.81 149.31 12 128 12a44.05 44.05 0 0 0-44 44v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12m4 124a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhLockSimpleOpenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockSimpleThinIcon],svg[ph-lock-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84h-36V56a44 44 0 0 0-88 0v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12M92 56a36 36 0 0 1 72 0v28H92Zm120 152a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhLockSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockThinIcon],svg[ph-lock-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 84h-36V56a44 44 0 0 0-88 0v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12M92 56a36 36 0 0 1 72 0v28H92Zm120 152a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-76-56a8 8 0 1 1-8-8a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhLockThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockersIcon],svg[ph-lockers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 72a8 8 0 0 1-8 8h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8m-8 24h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16M72 80h24a8 8 0 0 0 0-16H72a8 8 0 0 0 0 16m24 16H72a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m128-48v176a8 8 0 0 1-16 0v-16h-72v16a8 8 0 0 1-16 0v-16H48v16a8 8 0 0 1-16 0V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M120 192V48H48v144Zm16 0h72V48h-72Z"></svg:path>`,
})
export class PhLockersIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockersBoldIcon],svg[ph-lockers-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 80a12 12 0 0 1-12 12h-16a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12m-12 28h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24M76 92h16a12 12 0 0 0 0-24H76a12 12 0 0 0 0 24m16 16H76a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24m136-60v176a12 12 0 0 1-24 0v-12h-64v12a12 12 0 0 1-24 0v-12H52v12a12 12 0 0 1-24 0V48a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20M116 188V52H52v136Zm24 0h64V52h-64Z"></svg:path>`,
})
export class PhLockersBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockersDuotoneIcon],svg[ph-lockers-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v152H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M192 72a8 8 0 0 1-8 8h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8m-8 24h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16M72 80h24a8 8 0 0 0 0-16H72a8 8 0 0 0 0 16m24 16H72a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m128-48v176a8 8 0 0 1-16 0v-16h-72v16a8 8 0 0 1-16 0v-16H48v16a8 8 0 0 1-16 0V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M120 192V48H48v144Zm16 0h72V48h-72Z"></svg:path></svg:g>`,
})
export class PhLockersDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockersFillIcon],svg[ph-lockers-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v176a8 8 0 0 0 16 0v-16h72v16a8 8 0 0 0 16 0v-16h72v16a8 8 0 0 0 16 0V48a16 16 0 0 0-16-16M96 112H56a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m0-32H56a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m40 104a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0Zm64-72h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m0-32h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhLockersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockersLightIcon],svg[ph-lockers-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M190 72a6 6 0 0 1-6 6h-24a6 6 0 0 1 0-12h24a6 6 0 0 1 6 6m-6 26h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12M72 78h24a6 6 0 0 0 0-12H72a6 6 0 0 0 0 12m24 20H72a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m126-50v176a6 6 0 0 1-12 0v-18h-76v18a6 6 0 0 1-12 0v-18H46v18a6 6 0 0 1-12 0V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14M122 194V46H48a2 2 0 0 0-2 2v146Zm12 0h76V48a2 2 0 0 0-2-2h-74Z"></svg:path>`,
})
export class PhLockersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLockersThinIcon],svg[ph-lockers-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 72a4 4 0 0 1-4 4h-24a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4m-4 28h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8M72 76h24a4 4 0 0 0 0-8H72a4 4 0 0 0 0 8m24 24H72a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m124-52v176a4 4 0 0 1-8 0v-20h-80v20a4 4 0 0 1-8 0v-20H44v20a4 4 0 0 1-8 0V48a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12m-96 148V44H48a4 4 0 0 0-4 4v148Zm8 0h80V48a4 4 0 0 0-4-4h-76Z"></svg:path>`,
})
export class PhLockersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLogIcon],svg[ph-log-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 136a12 12 0 1 1-12-12a12 12 0 0 1 12 12m36 0c0 40.37-21.08 72-48 72H56c-26.92 0-48-31.63-48-72s21.08-72 48-72h36.69l37.65-37.66A8 8 0 0 1 136 24h32a8 8 0 0 1 0 16h-28.69l-24 24H200c26.92 0 48 31.63 48 72M56 192h113.51a73.5 73.5 0 0 1-12.67-24H80a8 8 0 0 1 0-16h73.16a111 111 0 0 1-1.16-16c0-22.86 6.76-42.9 17.51-56H56c-12.47 0-23.55 13.26-28.8 32H104a8 8 0 0 1 0 16H24.35q-.34 3.93-.35 8c0 30.36 14.65 56 32 56m176-56c0-30.36-14.65-56-32-56s-32 25.64-32 56s14.65 56 32 56s32-25.64 32-56"></svg:path>`,
})
export class PhLogIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLogBoldIcon],svg[ph-log-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 136a16 16 0 1 1-16-16a16 16 0 0 1 16 16m36 0c0 42.62-22.84 76-52 76H56c-29.16 0-52-33.38-52-76s22.84-76 52-76h35l36.48-36.49A12 12 0 0 1 136 20h32a12 12 0 0 1 0 24h-27l-16 16h75c29.16 0 52 33.38 52 76M56 188h105.77a83.3 83.3 0 0 1-9.09-20H80a12 12 0 0 1 0-24h68.27c-.18-2.63-.27-5.29-.27-8c0-20.3 5.19-38.5 13.77-52H56c-7.85 0-16.23 7.51-21.76 20H104a12 12 0 0 1 0 24H28.35a90 90 0 0 0-.35 8c0 30.64 14.76 52 28 52m172-52c0-30.64-14.76-52-28-52s-28 21.36-28 52s14.76 52 28 52s28-21.36 28-52"></svg:path>`,
})
export class PhLogBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLogDuotoneIcon],svg[ph-log-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 136c0 35.35-17.91 64-40 64s-40-28.65-40-64s17.91-64 40-64s40 28.65 40 64" opacity=".2"></svg:path><svg:path d="M212 136a12 12 0 1 1-12-12a12 12 0 0 1 12 12m36 0c0 40.37-21.08 72-48 72H56c-26.92 0-48-31.63-48-72s21.08-72 48-72h36.69l37.65-37.66A8 8 0 0 1 136 24h32a8 8 0 0 1 0 16h-28.69l-24 24H200c26.92 0 48 31.63 48 72M56 192h113.51a73.5 73.5 0 0 1-12.67-24H80a8 8 0 0 1 0-16h73.16a111 111 0 0 1-1.16-16c0-22.86 6.76-42.9 17.51-56H56c-12.47 0-23.55 13.26-28.8 32H104a8 8 0 0 1 0 16H24.35q-.34 3.93-.35 8c0 30.36 14.65 56 32 56m176-56c0-30.36-14.65-56-32-56s-32 25.64-32 56s14.65 56 32 56s32-25.64 32-56"></svg:path></svg:g>`,
})
export class PhLogDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLogFillIcon],svg[ph-log-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 136a12 12 0 1 1-12-12a12 12 0 0 1 12 12m36 0c0 40.37-21.08 72-48 72H56c-26.92 0-48-31.63-48-72s21.08-72 48-72h36.69l37.65-37.66A8 8 0 0 1 136 24h32a8 8 0 0 1 0 16h-28.69l-24 24H200c26.92 0 48 31.63 48 72m-144-8a8 8 0 0 0 0-16H33.26a8 8 0 1 0 0 16Zm50.91 32a8 8 0 0 0-8-8H80a8 8 0 0 0 0 16h66.91a8 8 0 0 0 8-8M232 136c0-30.36-14.65-56-32-56s-32 25.64-32 56s14.65 56 32 56s32-25.64 32-56"></svg:path>`,
})
export class PhLogFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLogLightIcon],svg[ph-log-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210 136a10 10 0 1 1-10-10a10 10 0 0 1 10 10m36 0c0 18.21-4.48 35.41-12.63 48.43C224.68 198.34 212.83 206 200 206H56c-12.83 0-24.68-7.66-33.37-21.57C14.48 171.41 10 154.21 10 136s4.48-35.41 12.63-48.43C31.32 73.66 43.17 66 56 66h37.52l38.24-38.24A6 6 0 0 1 136 26h32a6 6 0 0 1 0 12h-29.51l-28 28H200c12.83 0 24.68 7.66 33.37 21.57C241.52 100.59 246 117.79 246 136m-72 58a57.7 57.7 0 0 1-7.4-9.57a78 78 0 0 1-8.24-18.43H80a6 6 0 0 1 0-12h75.52a106 106 0 0 1-1.52-18c0-18.21 4.48-35.41 12.63-48.43A57.7 57.7 0 0 1 174 78H56c-13.89 0-26.16 15.1-31.36 36H104a6 6 0 0 1 0 12H22.54a94 94 0 0 0-.54 10c0 31.44 15.57 58 34 58Zm60-58c0-31.44-15.57-58-34-58s-34 26.56-34 58s15.57 58 34 58s34-26.56 34-58"></svg:path>`,
})
export class PhLogLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phLogThinIcon],svg[ph-log-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 136a8 8 0 1 1-8-8a8 8 0 0 1 8 8m36 0c0 17.83-4.38 34.66-12.32 47.38C223.36 196.67 212.11 204 200 204H56c-12.11 0-23.36-7.33-31.68-20.62C16.38 170.66 12 153.83 12 136s4.38-34.66 12.32-47.38C32.64 75.33 43.89 68 56 68h38.34l38.83-38.83A4 4 0 0 1 136 28h32a4 4 0 0 1 0 8h-30.34l-32 32H200c12.11 0 23.36 7.33 31.68 20.62C239.62 101.34 244 118.17 244 136m-64.87 60a52.2 52.2 0 0 1-10.81-12.62a77 77 0 0 1-8.47-19.38H80a4 4 0 0 1 0-8h77.91a104.5 104.5 0 0 1-1.91-20c0-17.83 4.38-34.66 12.32-47.38A52.2 52.2 0 0 1 179.13 76H56c-15.64 0-29 16.72-33.94 40H104a4 4 0 0 1 0 8H20.72a100 100 0 0 0-.72 12c0 33.08 16.15 60 36 60ZM236 136c0-33.08-16.15-60-36-60s-36 26.92-36 60s16.15 60 36 60s36-26.92 36-60"></svg:path>`,
})
export class PhLogThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagicWandIcon],svg[ph-magic-wand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 64a8 8 0 0 1 8-8h16V40a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16H88v16a8 8 0 0 1-16 0V72H56a8 8 0 0 1-8-8m136 128h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16m56-48h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16m-20.69-64L80 219.31a16 16 0 0 1-22.62 0l-20.7-20.68a16 16 0 0 1 0-22.63L176 36.69a16 16 0 0 1 22.63 0l20.68 20.68a16 16 0 0 1 0 22.63m-54.63 32L144 91.31l-96 96L68.68 208ZM208 68.69L187.31 48l-32 32L176 100.69Z"></svg:path>`,
})
export class PhMagicWandIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagicWandBoldIcon],svg[ph-magic-wand-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 152a12 12 0 0 1-12 12h-12v12a12 12 0 0 1-24 0v-12h-12a12 12 0 0 1 0-24h12v-12a12 12 0 0 1 24 0v12h12a12 12 0 0 1 12 12M56 76h12v12a12 12 0 0 0 24 0V76h12a12 12 0 1 0 0-24H92V40a12 12 0 0 0-24 0v12H56a12 12 0 0 0 0 24m128 112h-4v-4a12 12 0 0 0-24 0v4h-4a12 12 0 0 0 0 24h4v4a12 12 0 0 0 24 0v-4h4a12 12 0 0 0 0-24m38.14-105.17L82.82 222.14a20 20 0 0 1-28.28 0l-20.69-20.68a20 20 0 0 1 0-28.29L173.17 33.86a20 20 0 0 1 28.28 0l20.69 20.68a20 20 0 0 1 0 28.29M159 112l-15-15l-90.35 90.31l15 15Zm43.31-43.31l-15-15L161 80l15 15Z"></svg:path>`,
})
export class PhMagicWandBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagicWandDuotoneIcon],svg[ph-magic-wand-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 112L74.34 213.66a8 8 0 0 1-11.31 0L42.34 193a8 8 0 0 1 0-11.31L144 80Z" opacity=".2"></svg:path><svg:path d="M248 152a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8M56 72h16v16a8 8 0 0 0 16 0V72h16a8 8 0 0 0 0-16H88V40a8 8 0 0 0-16 0v16H56a8 8 0 0 0 0 16m128 120h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16m35.31-112L80 219.31a16 16 0 0 1-22.62 0l-20.7-20.68a16 16 0 0 1 0-22.63L176 36.69a16 16 0 0 1 22.63 0l20.68 20.68a16 16 0 0 1 0 22.63m-54.63 32L144 91.31l-96 96L68.68 208ZM208 68.69L187.31 48l-32 32L176 100.69Z"></svg:path></svg:g>`,
})
export class PhMagicWandDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagicWandFillIcon],svg[ph-magic-wand-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 152a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8M56 72h16v16a8 8 0 0 0 16 0V72h16a8 8 0 0 0 0-16H88V40a8 8 0 0 0-16 0v16H56a8 8 0 0 0 0 16m128 120h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16m35.31-112L80 219.31a16 16 0 0 1-22.62 0l-20.7-20.68a16 16 0 0 1 0-22.63L176 36.69a16 16 0 0 1 22.63 0l20.68 20.68a16 16 0 0 1 0 22.63M208 68.69L187.31 48l-32 32L176 100.69Z"></svg:path>`,
})
export class PhMagicWandFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagicWandLightIcon],svg[ph-magic-wand-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 152a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6M56 70h18v18a6 6 0 0 0 12 0V70h18a6 6 0 0 0 0-12H86V40a6 6 0 0 0-12 0v18H56a6 6 0 0 0 0 12m128 124h-10v-10a6 6 0 0 0-12 0v10h-10a6 6 0 0 0 0 12h10v10a6 6 0 0 0 12 0v-10h10a6 6 0 0 0 0-12m33.9-115.41L78.58 217.9a14 14 0 0 1-19.8 0l-20.69-20.69a14 14 0 0 1 0-19.8L177.41 38.1a14 14 0 0 1 19.8 0l20.69 20.69a14 14 0 0 1 0 19.8M167.51 112L144 88.49L46.58 185.9a2 2 0 0 0 0 2.83l20.69 20.68a2 2 0 0 0 2.82 0Zm41.9-44.73l-20.68-20.68a2 2 0 0 0-2.83 0L152.48 80L176 103.52l33.41-33.42a2 2 0 0 0 0-2.83"></svg:path>`,
})
export class PhMagicWandLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagicWandThinIcon],svg[ph-magic-wand-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 152a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4M56 68h20v20a4 4 0 0 0 8 0V68h20a4 4 0 0 0 0-8H84V40a4 4 0 0 0-8 0v20H56a4 4 0 0 0 0 8m128 128h-12v-12a4 4 0 0 0-8 0v12h-12a4 4 0 0 0 0 8h12v12a4 4 0 0 0 8 0v-12h12a4 4 0 0 0 0-8m32.48-118.83L77.17 216.49a12 12 0 0 1-17 0L39.51 195.8a12 12 0 0 1 0-17L178.83 39.51a12 12 0 0 1 17 0l20.65 20.69a12 12 0 0 1 0 16.97M170.34 112L144 85.66l-98.83 98.83a4 4 0 0 0 0 5.65l20.68 20.69a4 4 0 0 0 5.66 0Zm40.49-46.14l-20.69-20.69a4 4 0 0 0-5.66 0L149.65 80L176 106.34l34.83-34.83a4 4 0 0 0 0-5.65"></svg:path>`,
})
export class PhMagicWandThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetIcon],svg[ph-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207 50.25A87.46 87.46 0 0 0 144.6 24h-.33A87.48 87.48 0 0 0 82 49.81L20.61 112a16 16 0 0 0 .06 22.56l28.66 28.66a15.92 15.92 0 0 0 11.32 4.69h.09a16 16 0 0 0 11.36-4.82l60.9-62.4a16.08 16.08 0 0 1 22.41-.21a15.6 15.6 0 0 1 4.73 11.19a16.9 16.9 0 0 1-4.85 12L93 183.88a16 16 0 0 0-.17 22.79l28.66 28.66a16.06 16.06 0 0 0 22.52.12l61.8-60.45c34.45-34.5 34.98-90.44 1.19-124.75M60.65 151.89L32 123.24l23.8-24.12l28.52 28.52ZM132.79 224l-28.68-28.65l24.38-23.57L157 200.32Zm61.76-60.44l-26.11 25.54L140 160.68l26.44-25.57l.1-.09a33 33 0 0 0 9.57-23.5A31.44 31.44 0 0 0 166.47 89a32.2 32.2 0 0 0-44.9.5l-26.08 26.68L67 87.74l26.35-26.65A71.5 71.5 0 0 1 144.27 40h.27a71.55 71.55 0 0 1 51.05 21.48c27.66 28.07 27.16 73.9-1.04 102.1Z"></svg:path>`,
})
export class PhMagnetIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetBoldIcon],svg[ph-magnet-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209.84 47.44A91.42 91.42 0 0 0 144.62 20h-.35a91.44 91.44 0 0 0-65.12 27l-61.39 62.17a20 20 0 0 0 .08 28.21L46.5 166a19.9 19.9 0 0 0 14.15 5.86h.11a19.86 19.86 0 0 0 14.2-6l60.87-62.39a12.07 12.07 0 0 1 16.77-.12a11.63 11.63 0 0 1 3.5 8.35a12.85 12.85 0 0 1-3.66 9.11L90.19 181a20 20 0 0 0-.21 28.5l28.66 28.66a20.08 20.08 0 0 0 28.15.14l61.76-60.44l.09-.09c36.01-35.99 36.54-94.46 1.2-130.33M60.62 146.21l-23-23l18.19-18.41l22.88 22.88Zm72.2 72.18l-23-23l18.61-18l22.88 22.87Zm58.89-57.62l-23.23 22.73l-22.78-22.77L169.21 138l.15-.14a37 37 0 0 0 10.74-26.37a35.44 35.44 0 0 0-10.85-25.41a36.2 36.2 0 0 0-50.44.48l-.1.11l-23.25 23.82l-22.78-22.77l23.5-23.8A67.55 67.55 0 0 1 144.27 44h.26a67.62 67.62 0 0 1 48.21 20.29c26.11 26.49 25.64 69.76-1.03 96.48"></svg:path>`,
})
export class PhMagnetBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetDuotoneIcon],svg[ph-magnet-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m168.36 200.36l-30 29.35a8 8 0 0 1-11.26-.05L98.46 201a8 8 0 0 1 .08-11.4l30-29Zm-142-82.76a8 8 0 0 0 0 11.28L55 157.54a8 8 0 0 0 11.38-.06l29.18-29.92l-39.79-39.79Z" opacity=".2"></svg:path><svg:path d="M207 50.25A87.46 87.46 0 0 0 144.6 24h-.33A87.48 87.48 0 0 0 82 49.81l-31.89 32.3L20.61 112a16 16 0 0 0 .06 22.56l28.66 28.66a15.92 15.92 0 0 0 11.32 4.69h.09a16 16 0 0 0 11.36-4.82l60.9-62.4a16.08 16.08 0 0 1 22.41-.21a15.6 15.6 0 0 1 4.73 11.19a16.9 16.9 0 0 1-4.85 12L93 183.88a16 16 0 0 0-.17 22.79l28.66 28.66a16.06 16.06 0 0 0 22.52.12l61.8-60.45c34.45-34.5 34.98-90.44 1.19-124.75M60.65 151.89L32 123.24l23.8-24.12l28.52 28.52ZM132.79 224l-28.68-28.65l24.38-23.57L157 200.32Zm61.76-60.44l-26.11 25.54L140 160.68l26.44-25.57l.1-.09a33 33 0 0 0 9.57-23.5A31.44 31.44 0 0 0 166.47 89a32.2 32.2 0 0 0-44.9.5l-26.08 26.68L67 87.74l26.35-26.65A71.5 71.5 0 0 1 144.27 40h.27a71.55 71.55 0 0 1 51.05 21.48c27.66 28.07 27.16 73.9-1.04 102.1Z"></svg:path></svg:g>`,
})
export class PhMagnetDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetFillIcon],svg[ph-magnet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207 50.25A87.46 87.46 0 0 0 144.6 24h-.33A87.48 87.48 0 0 0 82 49.81L20.61 112a16 16 0 0 0 .06 22.56l28.66 28.66a15.92 15.92 0 0 0 11.32 4.69h.09a16 16 0 0 0 11.36-4.82l60.9-62.4a16.08 16.08 0 0 1 22.41-.21a15.6 15.6 0 0 1 4.73 11.19a16.9 16.9 0 0 1-4.85 12L93 183.88a16 16 0 0 0-.17 22.79l28.66 28.66a16.06 16.06 0 0 0 22.52.12l61.8-60.45c34.45-34.5 34.98-90.44 1.19-124.75M60.65 151.89L32 123.24l29.42-29.81l28.48 28.48ZM132.79 224l-28.68-28.65l30.13-29.13l28.49 28.48Z"></svg:path>`,
})
export class PhMagnetFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetLightIcon],svg[ph-magnet-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.56 51.65A85.5 85.5 0 0 0 144.6 26h-.33a85.45 85.45 0 0 0-60.85 25.22L22 113.39a14 14 0 0 0 .06 19.74l28.66 28.66a13.9 13.9 0 0 0 9.9 4.1h.08a13.9 13.9 0 0 0 9.94-4.21l60.87-62.4a18.1 18.1 0 0 1 25.25-.28a17.63 17.63 0 0 1 5.34 12.62a19 19 0 0 1-5.44 13.44l-62.29 60.25a14 14 0 0 0-.15 19.95l28.67 28.66a14.05 14.05 0 0 0 19.7.1l61.8-60.49c33.68-33.67 34.21-88.35 1.17-121.88M62.08 153.29a2 2 0 0 1-1.42.6a2.15 2.15 0 0 1-1.42-.58l-28.67-28.66a2 2 0 0 1 0-2.82l25.22-25.55l31.34 31.34Zm72.11 72.15a2 2 0 0 1-2.82 0l-28.66-28.66a2 2 0 0 1-.59-1.43a2 2 0 0 1 .6-1.41L128.51 169l31.34 31.33ZM196 165l-27.52 26.94l-31.29-31.29l27.9-27l.07-.08a30.93 30.93 0 0 0 9-22.06a29.47 29.47 0 0 0-9-21.15a30.17 30.17 0 0 0-42.08.46L95.51 119L64.22 87.74l27.72-28.06A73.47 73.47 0 0 1 144.27 38h.28A73.52 73.52 0 0 1 197 60.08C225.44 88.92 224.94 136 196 165"></svg:path>`,
})
export class PhMagnetLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetStraightIcon],svg[ph-magnet-straight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40h-40a16 16 0 0 0-16 16v88a16 16 0 0 1-32 0V56a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v88a88 88 0 0 0 88 88h.67c48.15-.36 87.33-40.29 87.33-89V56a16 16 0 0 0-16-16m0 16v32h-40V56ZM96 56v32H56V56Zm32.55 160A72 72 0 0 1 56 144v-40h40v40a32 32 0 0 0 64 0v-40h40v39c0 40-32 72.71-71.45 73"></svg:path>`,
})
export class PhMagnetStraightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetStraightBoldIcon],svg[ph-magnet-straight-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 36h-40a20 20 0 0 0-20 20v88a12 12 0 0 1-24 0V56a20 20 0 0 0-20-20H56a20 20 0 0 0-20 20v88a92 92 0 0 0 92 92h.71c50.34-.38 91.3-42.1 91.3-93V56A20 20 0 0 0 200 36m-4 24v24h-32V60ZM92 60v24H60V60Zm36.52 152H128a68 68 0 0 1-68-68v-36h32v36a36 36 0 0 0 72 0v-36h32v35c0 37.77-30.27 68.72-67.48 69"></svg:path>`,
})
export class PhMagnetStraightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetStraightDuotoneIcon],svg[ph-magnet-straight-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M104 56v40H48V56a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8m96-8h-40a8 8 0 0 0-8 8v40h56V56a8 8 0 0 0-8-8" opacity=".2"></svg:path><svg:path d="M200 40h-40a16 16 0 0 0-16 16v88a16 16 0 0 1-32 0V56a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v88a88 88 0 0 0 88 88h.67c48.15-.36 87.33-40.29 87.33-89V56a16 16 0 0 0-16-16m0 16v32h-40V56ZM96 56v32H56V56Zm32.55 160A72 72 0 0 1 56 144v-40h40v40a32 32 0 0 0 64 0v-40h40v39c0 40-32 72.71-71.45 73"></svg:path></svg:g>`,
})
export class PhMagnetStraightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetStraightFillIcon],svg[ph-magnet-straight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 40h-40a16 16 0 0 0-16 16v88a16 16 0 0 1-32 0V56a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v88a88 88 0 0 0 88 88h.67c48.15-.36 87.33-40.29 87.33-89V56a16 16 0 0 0-16-16m0 16v40h-40V56ZM96 56v40H56V56Z"></svg:path>`,
})
export class PhMagnetStraightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetStraightLightIcon],svg[ph-magnet-straight-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 42h-40a14 14 0 0 0-14 14v88a18 18 0 0 1-36 0V56a14 14 0 0 0-14-14H56a14 14 0 0 0-14 14v88a86 86 0 0 0 86 86h.65c47.06-.35 85.35-39.38 85.35-87V56a14 14 0 0 0-14-14m-40 12h40a2 2 0 0 1 2 2v34h-44V56a2 2 0 0 1 2-2M56 54h40a2 2 0 0 1 2 2v34H54V56a2 2 0 0 1 2-2m72.56 164H128a74 74 0 0 1-74-74v-42h44v42a30 30 0 0 0 60 0v-42h44v41c0 41.05-32.94 74.7-73.44 75"></svg:path>`,
})
export class PhMagnetStraightLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetStraightThinIcon],svg[ph-magnet-straight-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44h-40a12 12 0 0 0-12 12v88a20 20 0 0 1-40 0V56a12 12 0 0 0-12-12H56a12 12 0 0 0-12 12v88a84 84 0 0 0 84 84h.64c46-.34 83.36-38.47 83.36-85V56a12 12 0 0 0-12-12m-40 8h40a4 4 0 0 1 4 4v36h-48V56a4 4 0 0 1 4-4M56 52h40a4 4 0 0 1 4 4v36H52V56a4 4 0 0 1 4-4m72.58 168H128a76 76 0 0 1-76-76v-44h48v44a28 28 0 0 0 56 0v-44h48v43c0 42.15-33.83 76.69-75.42 77"></svg:path>`,
})
export class PhMagnetStraightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnetThinIcon],svg[ph-magnet-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.13 53.06A83.4 83.4 0 0 0 144.59 28h-.32a83.46 83.46 0 0 0-59.42 24.62L23.46 114.8a12 12 0 0 0 0 16.92l28.67 28.66a11.9 11.9 0 0 0 8.48 3.51h.07a12 12 0 0 0 8.52-3.61l60.89-62.42a20.1 20.1 0 0 1 28-.27a19.54 19.54 0 0 1 6 14a20.87 20.87 0 0 1-6 14.86l-62.33 60.3a12 12 0 0 0-.12 17.09l28.66 28.66a12 12 0 0 0 16.89.08L203 172.12c32.88-32.91 33.4-86.32 1.13-119.06M63.51 154.69a3.93 3.93 0 0 1-2.83 1.2a4 4 0 0 1-2.83-1.17l-28.69-28.66a4 4 0 0 1 0-5.64l26.63-27l34.15 34.18Zm72.08 72.18a4 4 0 0 1-5.63 0l-28.67-28.66a4 4 0 0 1 0-5.69l27.2-26.3l34.16 34.15Zm61.76-60.44l-28.94 28.32l-34.12-34.12l29.41-28.44a29 29 0 0 0 8.4-20.64a27.5 27.5 0 0 0-8.41-19.72a28.14 28.14 0 0 0-39.25.41l-28.91 29.63L61.4 87.75l29.12-29.49A75.5 75.5 0 0 1 144.27 36h.29a75.53 75.53 0 0 1 53.87 22.67c29.2 29.63 28.7 77.98-1.08 107.76"></svg:path>`,
})
export class PhMagnetThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassIcon],svg[ph-magnifying-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"></svg:path>`,
})
export class PhMagnifyingGlassIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassBoldIcon],svg[ph-magnifying-glass-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"></svg:path>`,
})
export class PhMagnifyingGlassBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassDuotoneIcon],svg[ph-magnifying-glass-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 112a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></svg:path><svg:path d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"></svg:path></svg:g>`,
})
export class PhMagnifyingGlassDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassFillIcon],svg[ph-magnifying-glass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 112a56 56 0 1 1-56-56a56 56 0 0 1 56 56m61.66 117.66a8 8 0 0 1-11.32 0l-50.06-50.07a88 88 0 1 1 11.32-11.31l50.06 50.06a8 8 0 0 1 0 11.32M112 184a72 72 0 1 0-72-72a72.08 72.08 0 0 0 72 72"></svg:path>`,
})
export class PhMagnifyingGlassFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassLightIcon],svg[ph-magnifying-glass-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.24 219.76l-51.38-51.38a86.15 86.15 0 1 0-8.48 8.48l51.38 51.38a6 6 0 0 0 8.48-8.48M38 112a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74"></svg:path>`,
})
export class PhMagnifyingGlassLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassMinusIcon],svg[ph-magnifying-glass-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 112a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m77.66 117.66a8 8 0 0 1-11.32 0l-50.06-50.07a88.11 88.11 0 1 1 11.31-11.31l50.07 50.06a8 8 0 0 1 0 11.32M112 184a72 72 0 1 0-72-72a72.08 72.08 0 0 0 72 72"></svg:path>`,
})
export class PhMagnifyingGlassMinusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassMinusBoldIcon],svg[ph-magnifying-glass-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 112a12 12 0 0 1-12 12H80a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m76.49 120.49a12 12 0 0 1-17 0L168 185a92.12 92.12 0 1 1 17-17l47.54 47.53a12 12 0 0 1-.05 16.96M112 180a68 68 0 1 0-68-68a68.08 68.08 0 0 0 68 68"></svg:path>`,
})
export class PhMagnifyingGlassMinusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassMinusDuotoneIcon],svg[ph-magnifying-glass-minus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 112a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></svg:path><svg:path d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72m112 0a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhMagnifyingGlassMinusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassMinusFillIcon],svg[ph-magnifying-glass-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M144 120H80a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhMagnifyingGlassMinusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassMinusLightIcon],svg[ph-magnifying-glass-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 112a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m78.24 116.24a6 6 0 0 1-8.48 0l-51.38-51.38a86.15 86.15 0 1 1 8.48-8.48l51.38 51.38a6 6 0 0 1 0 8.48M112 186a74 74 0 1 0-74-74a74.09 74.09 0 0 0 74 74"></svg:path>`,
})
export class PhMagnifyingGlassMinusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassMinusThinIcon],svg[ph-magnifying-glass-minus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 112a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m78.83 114.83a4 4 0 0 1-5.66 0l-52.7-52.7a84.1 84.1 0 1 1 5.66-5.66l52.7 52.7a4 4 0 0 1 0 5.66M112 188a76 76 0 1 0-76-76a76.08 76.08 0 0 0 76 76"></svg:path>`,
})
export class PhMagnifyingGlassMinusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassPlusIcon],svg[ph-magnifying-glass-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 112a8 8 0 0 1-8 8h-24v24a8 8 0 0 1-16 0v-24H80a8 8 0 0 1 0-16h24V80a8 8 0 0 1 16 0v24h24a8 8 0 0 1 8 8m77.66 117.66a8 8 0 0 1-11.32 0l-50.06-50.07a88.11 88.11 0 1 1 11.31-11.31l50.07 50.06a8 8 0 0 1 0 11.32M112 184a72 72 0 1 0-72-72a72.08 72.08 0 0 0 72 72"></svg:path>`,
})
export class PhMagnifyingGlassPlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassPlusBoldIcon],svg[ph-magnifying-glass-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 112a12 12 0 0 1-12 12h-20v20a12 12 0 0 1-24 0v-20H80a12 12 0 0 1 0-24h20V80a12 12 0 0 1 24 0v20h20a12 12 0 0 1 12 12m76.49 120.49a12 12 0 0 1-17 0L168 185a92.12 92.12 0 1 1 17-17l47.54 47.53a12 12 0 0 1-.05 16.96M112 180a68 68 0 1 0-68-68a68.08 68.08 0 0 0 68 68"></svg:path>`,
})
export class PhMagnifyingGlassPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassPlusDuotoneIcon],svg[ph-magnifying-glass-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 112a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></svg:path><svg:path d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72m112 0a8 8 0 0 1-8 8h-24v24a8 8 0 0 1-16 0v-24H80a8 8 0 0 1 0-16h24V80a8 8 0 0 1 16 0v24h24a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhMagnifyingGlassPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassPlusFillIcon],svg[ph-magnifying-glass-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M144 120h-24v24a8 8 0 0 1-16 0v-24H80a8 8 0 0 1 0-16h24V80a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhMagnifyingGlassPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassPlusLightIcon],svg[ph-magnifying-glass-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M150 112a6 6 0 0 1-6 6h-26v26a6 6 0 0 1-12 0v-26H80a6 6 0 0 1 0-12h26V80a6 6 0 0 1 12 0v26h26a6 6 0 0 1 6 6m78.24 116.24a6 6 0 0 1-8.48 0l-51.38-51.38a86.15 86.15 0 1 1 8.48-8.48l51.38 51.38a6 6 0 0 1 0 8.48M112 186a74 74 0 1 0-74-74a74.09 74.09 0 0 0 74 74"></svg:path>`,
})
export class PhMagnifyingGlassPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassPlusThinIcon],svg[ph-magnifying-glass-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 112a4 4 0 0 1-4 4h-28v28a4 4 0 0 1-8 0v-28H80a4 4 0 0 1 0-8h28V80a4 4 0 0 1 8 0v28h28a4 4 0 0 1 4 4m78.83 114.83a4 4 0 0 1-5.66 0l-52.7-52.7a84.1 84.1 0 1 1 5.66-5.66l52.7 52.7a4 4 0 0 1 0 5.66M112 188a76 76 0 1 0-76-76a76.08 76.08 0 0 0 76 76"></svg:path>`,
})
export class PhMagnifyingGlassPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMagnifyingGlassThinIcon],svg[ph-magnifying-glass-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 221.17l-52.7-52.7a84.1 84.1 0 1 0-5.66 5.66l52.7 52.7a4 4 0 0 0 5.66-5.66M36 112a76 76 0 1 1 76 76a76.08 76.08 0 0 1-76-76"></svg:path>`,
})
export class PhMagnifyingGlassThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMailboxIcon],svg[ph-mailbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 152a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m136-36v60a16 16 0 0 1-16 16h-88v32a8 8 0 0 1-16 0v-32H32a16 16 0 0 1-16-16v-60a60.07 60.07 0 0 1 60-60h76V24a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-24v24h12a60.07 60.07 0 0 1 60 60m-120 60v-60a44 44 0 0 0-88 0v60Zm104-60a44.05 44.05 0 0 0-44-44h-12v72a8 8 0 0 1-16 0V72h-35.25A59.86 59.86 0 0 1 136 116v60h88Z"></svg:path>`,
})
export class PhMailboxIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMailboxBoldIcon],svg[ph-mailbox-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 148a12 12 0 0 1-12 12H64a12 12 0 0 1 0-24h24a12 12 0 0 1 12 12m144-32v60a20 20 0 0 1-20 20h-84v28a12 12 0 0 1-24 0v-28H32a20 20 0 0 1-20-20v-60a64.07 64.07 0 0 1 64-64h80V24a12 12 0 0 1 12-12h32a12 12 0 0 1 0 24h-20v16a64.07 64.07 0 0 1 64 64m-128 56v-56a40 40 0 0 0-80 0v56Zm104-56a40 40 0 0 0-40-40v68a12 12 0 0 1-24 0V76h-30.07A63.7 63.7 0 0 1 140 116v56h80Z"></svg:path>`,
})
export class PhMailboxBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMailboxDuotoneIcon],svg[ph-mailbox-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 116v60a8 8 0 0 1-8 8h-96v-68a52 52 0 0 0-52-52h104a52 52 0 0 1 52 52" opacity=".2"></svg:path><svg:path d="M104 152a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m136-36v60a16 16 0 0 1-16 16h-88v32a8 8 0 0 1-16 0v-32H32a16 16 0 0 1-16-16v-60a60.07 60.07 0 0 1 60-60h76V24a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-24v24h12a60.07 60.07 0 0 1 60 60m-120 60v-60a44 44 0 0 0-88 0v60Zm104-60a44.05 44.05 0 0 0-44-44h-12v72a8 8 0 0 1-16 0V72h-35.25A59.86 59.86 0 0 1 136 116v60h88Z"></svg:path></svg:g>`,
})
export class PhMailboxDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMailboxFillIcon],svg[ph-mailbox-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104 152a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8m64-120h24a8 8 0 0 0 0-16h-32a8 8 0 0 0-8 8v32h16Zm72 84v60a16 16 0 0 1-16 16h-88v32a8 8 0 0 1-16 0v-32H32a16 16 0 0 1-16-16v-60a60.07 60.07 0 0 1 60-60h76v88a8 8 0 0 0 16 0V56h12a60.07 60.07 0 0 1 60 60m-120 0a44 44 0 0 0-88 0v60h88Z"></svg:path>`,
})
export class PhMailboxFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMailboxLightIcon],svg[ph-mailbox-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M102 152a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6m136-36v60a14 14 0 0 1-14 14h-90v34a6 6 0 0 1-12 0v-34H32a14 14 0 0 1-14-14v-60a58.07 58.07 0 0 1 58-58h78V24a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12h-26v28h14a58.07 58.07 0 0 1 58 58m-116 62v-62a46 46 0 0 0-92 0v60a2 2 0 0 0 2 2Zm104-62a46.06 46.06 0 0 0-46-46h-14v74a6 6 0 0 1-12 0V70h-42.71A57.93 57.93 0 0 1 134 116v62h90a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class PhMailboxLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMailboxThinIcon],svg[ph-mailbox-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 152a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m136-36v60a12 12 0 0 1-12 12h-92v36a4 4 0 0 1-8 0v-36H32a12 12 0 0 1-12-12v-60a56.06 56.06 0 0 1 56-56h80V24a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-28v32h16a56.06 56.06 0 0 1 56 56m-112 64v-64a48 48 0 0 0-96 0v60a4 4 0 0 0 4 4Zm104-64a48.05 48.05 0 0 0-48-48h-16v76a4 4 0 0 1-8 0V68h-51.18A56 56 0 0 1 132 116v64h92a4 4 0 0 0 4-4Z"></svg:path>`,
})
export class PhMailboxThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinIcon],svg[ph-map-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-112a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118"></svg:path>`,
})
export class PhMapPinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinAreaIcon],svg[ph-map-pin-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 80a16 16 0 1 1 16 16a16 16 0 0 1-16-16m-48 0a64 64 0 0 1 128 0c0 59.95-57.58 93.54-60 94.95a8 8 0 0 1-7.94 0C121.58 173.54 64 140 64 80m16 0c0 42.2 35.84 70.21 48 78.5c12.15-8.28 48-36.3 48-78.5a48 48 0 0 0-96 0m122.77 67.63a8 8 0 0 0-5.54 15C213.74 168.74 224 176.92 224 184c0 13.36-36.52 32-96 32s-96-18.64-96-32c0-7.08 10.26-15.26 26.77-21.36a8 8 0 0 0-5.54-15C29.22 156.49 16 169.41 16 184c0 31.18 57.71 48 112 48s112-16.82 112-48c0-14.59-13.22-27.51-37.23-36.37"></svg:path>`,
})
export class PhMapPinAreaIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinAreaBoldIcon],svg[ph-map-pin-area-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 80a20 20 0 1 1 20 20a20 20 0 0 1-20-20m-48 0a68 68 0 0 1 136 0c0 62.25-59.51 97-62.05 98.42a12 12 0 0 1-11.9 0C119.51 177 60 142.25 60 80m24 0c0 38.2 30.71 64.2 44 73.64c13.21-9.49 44-35.64 44-73.64a44 44 0 0 0-88 0m124.57 65.6a12 12 0 1 0-9.14 22.19C213.56 173.61 220 180.27 220 184c0 4-7.13 11.07-22.77 17.08c-18.3 7-42.89 10.92-69.23 10.92s-50.93-3.88-69.23-10.92C43.12 195.07 36 188 36 184c0-3.73 6.44-10.39 20.57-16.21a12 12 0 1 0-9.14-22.19C31.27 152.25 12 164.31 12 184c0 34.14 58.36 52 116 52c29.22 0 56.86-4.44 77.85-12.52C220.1 218 244 205.59 244 184c0-19.69-19.27-31.75-35.43-38.4"></svg:path>`,
})
export class PhMapPinAreaBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinAreaDuotoneIcon],svg[ph-map-pin-area-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 80c0 56-56 88-56 88s-56-32-56-88a56 56 0 0 1 112 0" opacity=".2"></svg:path><svg:path d="M112 80a16 16 0 1 1 16 16a16 16 0 0 1-16-16m-48 0a64 64 0 0 1 128 0c0 59.95-57.58 93.54-60 94.95a8 8 0 0 1-7.94 0C121.58 173.54 64 140 64 80m16 0c0 42.2 35.84 70.21 48 78.5c12.15-8.28 48-36.3 48-78.5a48 48 0 0 0-96 0m122.77 67.63a8 8 0 0 0-5.54 15C213.74 168.74 224 176.92 224 184c0 13.36-36.52 32-96 32s-96-18.64-96-32c0-7.08 10.26-15.26 26.77-21.36a8 8 0 0 0-5.54-15C29.22 156.49 16 169.41 16 184c0 31.18 57.71 48 112 48s112-16.82 112-48c0-14.59-13.22-27.51-37.23-36.37"></svg:path></svg:g>`,
})
export class PhMapPinAreaDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinAreaFillIcon],svg[ph-map-pin-area-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 175a8 8 0 0 0 7.94 0c2.45-1.41 60-35 60-94.95A64 64 0 0 0 64 80c0 60 57.58 93.54 60 95m4-119a24 24 0 1 1-24 24a24 24 0 0 1 24-24m112 128c0 31.18-57.71 48-112 48S16 215.18 16 184c0-14.59 13.22-27.51 37.23-36.37a8 8 0 0 1 5.54 15C42.26 168.74 32 176.92 32 184c0 13.36 36.52 32 96 32s96-18.64 96-32c0-7.08-10.26-15.26-26.77-21.36a8 8 0 0 1 5.54-15C226.78 156.49 240 169.41 240 184"></svg:path>`,
})
export class PhMapPinAreaFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinAreaLightIcon],svg[ph-map-pin-area-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M114 80a14 14 0 1 1 14 14a14 14 0 0 1-14-14m-48 0a62 62 0 0 1 124 0c0 58.81-56.61 91.83-59 93.21a6 6 0 0 1-6 0c-2.39-1.38-59-34.4-59-93.21m12 0c0 44.52 38.81 73.49 50 80.91c11.18-7.42 50-36.38 50-80.91a50 50 0 0 0-100 0m124.08 69.51a6 6 0 1 0-4.16 11.25C215.5 167.25 226 175.94 226 184c0 16.08-40.25 34-98 34s-98-17.92-98-34c0-8.06 10.5-16.75 28.08-23.24a6 6 0 1 0-4.16-11.25C30.76 158.06 18 170.31 18 184c0 13.34 12.18 25.38 34.31 33.88C72.62 225.7 99.5 230 128 230s55.38-4.3 75.69-12.12C225.82 209.38 238 197.34 238 184c0-13.69-12.76-25.94-35.92-34.49"></svg:path>`,
})
export class PhMapPinAreaLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinAreaThinIcon],svg[ph-map-pin-area-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 80a12 12 0 1 1 12 12a12 12 0 0 1-12-12m-18.92 67.73C78.05 127.35 68 103.93 68 80a60 60 0 0 1 120 0c0 23.93-10.05 47.35-29.08 67.73A136.5 136.5 0 0 1 130 171.47a4 4 0 0 1-4 0a136.5 136.5 0 0 1-28.92-23.74M76 80c0 47.09 42.25 77 52 83.3c9.75-6.28 52-36.21 52-83.3a52 52 0 0 0-104 0m125.38 71.38a4 4 0 0 0-2.76 7.51c18.67 6.89 29.38 16 29.38 25.11c0 17.39-40.18 36-100 36S28 201.39 28 184c0-9.07 10.71-18.22 29.38-25.11a4 4 0 0 0-2.76-7.51C32.29 159.62 20 171.21 20 184c0 12.46 11.73 23.83 33 32c20.09 7.73 46.72 12 75 12s54.89-4.25 75-12c21.29-8.19 33-19.56 33-32c0-12.79-12.29-24.38-34.62-32.62"></svg:path>`,
})
export class PhMapPinAreaThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinBoldIcon],svg[ph-map-pin-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 60a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 64a20 20 0 1 1 20-20a20 20 0 0 1-20 20m0-112a92.1 92.1 0 0 0-92 92c0 77.36 81.64 135.4 85.12 137.83a12 12 0 0 0 13.76 0a259 259 0 0 0 42.18-39C205.15 170.57 220 136.37 220 104a92.1 92.1 0 0 0-92-92m31.3 174.71a249.4 249.4 0 0 1-31.3 30.18a249.4 249.4 0 0 1-31.3-30.18C80 167.37 60 137.31 60 104a68 68 0 0 1 136 0c0 33.31-20 63.37-36.7 82.71"></svg:path>`,
})
export class PhMapPinBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinDuotoneIcon],svg[ph-map-pin-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 24a80 80 0 0 0-80 80c0 72 80 128 80 128s80-56 80-128a80 80 0 0 0-80-80m0 112a32 32 0 1 1 32-32a32 32 0 0 1-32 32" opacity=".2"></svg:path><svg:path d="M128 64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-112a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118"></svg:path></svg:g>`,
})
export class PhMapPinDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinFillIcon],svg[ph-map-pin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 16a88.1 88.1 0 0 0-88 88c0 75.3 80 132.17 83.41 134.55a8 8 0 0 0 9.18 0C136 236.17 216 179.3 216 104a88.1 88.1 0 0 0-88-88m0 56a32 32 0 1 1-32 32a32 32 0 0 1 32-32"></svg:path>`,
})
export class PhMapPinFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinLightIcon],svg[ph-map-pin-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 66a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m0-112a86.1 86.1 0 0 0-86 86c0 30.91 14.34 63.74 41.47 94.94a252.3 252.3 0 0 0 41.09 38a6 6 0 0 0 6.88 0a252.3 252.3 0 0 0 41.09-38c27.13-31.2 41.47-64 41.47-94.94a86.1 86.1 0 0 0-86-86m0 206.51C113 212.93 54 163.62 54 104a74 74 0 0 1 148 0c0 59.62-59 108.93-74 120.51"></svg:path>`,
})
export class PhMapPinLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinLineIcon],svg[ph-map-pin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 224h-49.46A267 267 0 0 0 174 200.25c27.45-31.57 42-64.85 42-96.25a88 88 0 0 0-176 0c0 31.4 14.51 64.68 42 96.25A267 267 0 0 0 105.46 224H56a8 8 0 0 0 0 16h144a8 8 0 0 0 0-16M56 104a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118c-16.53-13-72-60.77-72-118m112 0a40 40 0 1 0-40 40a40 40 0 0 0 40-40m-64 0a24 24 0 1 1 24 24a24 24 0 0 1-24-24"></svg:path>`,
})
export class PhMapPinLineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinLineBoldIcon],svg[ph-map-pin-line-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 220h-39.27c5.18-5 10.75-10.71 16.33-17.13C205.15 170.57 220 136.37 220 104a92 92 0 0 0-184 0c0 50 34.12 91.94 59.18 116H56a12 12 0 0 0 0 24h144a12 12 0 0 0 0-24M60 104a68 68 0 0 1 136 0c0 33.31-20 63.37-36.7 82.71a249.4 249.4 0 0 1-31.3 30.18a249.4 249.4 0 0 1-31.3-30.18C80 167.37 60 137.31 60 104m68 44a44 44 0 1 0-44-44a44.05 44.05 0 0 0 44 44m0-64a20 20 0 1 1-20 20a20 20 0 0 1 20-20"></svg:path>`,
})
export class PhMapPinLineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinLineDuotoneIcon],svg[ph-map-pin-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 24a80 80 0 0 0-80 80c0 72 80 128 80 128s80-56 80-128a80 80 0 0 0-80-80m0 112a32 32 0 1 1 32-32a32 32 0 0 1-32 32" opacity=".2"></svg:path><svg:path d="M200 224h-49.46A267 267 0 0 0 174 200.25c27.45-31.57 42-64.85 42-96.25a88 88 0 0 0-176 0c0 31.4 14.51 64.68 42 96.25A267 267 0 0 0 105.46 224H56a8 8 0 0 0 0 16h144a8 8 0 0 0 0-16M56 104a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118c-16.53-13-72-60.77-72-118m112 0a40 40 0 1 0-40 40a40 40 0 0 0 40-40m-64 0a24 24 0 1 1 24 24a24 24 0 0 1-24-24"></svg:path></svg:g>`,
})
export class PhMapPinLineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinLineFillIcon],svg[ph-map-pin-line-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 224h-49.46A267 267 0 0 0 174 200.25c27.45-31.57 42-64.85 42-96.25a88 88 0 0 0-176 0c0 31.4 14.51 64.68 42 96.25A267 267 0 0 0 105.46 224H56a8 8 0 0 0 0 16h144a8 8 0 0 0 0-16M128 72a32 32 0 1 1-32 32a32 32 0 0 1 32-32"></svg:path>`,
})
export class PhMapPinLineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinLineLightIcon],svg[ph-map-pin-line-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 226h-54.78a266 266 0 0 0 27.31-27.06c27.13-31.2 41.47-64 41.47-94.94a86 86 0 0 0-172 0c0 30.91 14.34 63.74 41.47 94.94A266 266 0 0 0 110.78 226H56a6 6 0 0 0 0 12h144a6 6 0 0 0 0-12M54 104a74 74 0 0 1 148 0c0 59.62-59 108.93-74 120.51c-15-11.58-74-60.89-74-120.51m112 0a38 38 0 1 0-38 38a38 38 0 0 0 38-38m-64 0a26 26 0 1 1 26 26a26 26 0 0 1-26-26"></svg:path>`,
})
export class PhMapPinLineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinLineThinIcon],svg[ph-map-pin-line-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 228h-60.28A263.7 263.7 0 0 0 171 197.62c26.81-30.83 41-63.2 41-93.62a84 84 0 0 0-168 0c0 30.42 14.17 62.79 41 93.62A263.7 263.7 0 0 0 116.28 228H56a4 4 0 0 0 0 8h144a4 4 0 0 0 0-8M90.9 192.23C73.15 171.8 52 139.9 52 104a76 76 0 0 1 152 0c0 35.9-21.15 67.8-38.9 88.23A254.6 254.6 0 0 1 128 227a254.6 254.6 0 0 1-37.1-34.77M164 104a36 36 0 1 0-36 36a36 36 0 0 0 36-36m-64 0a28 28 0 1 1 28 28a28 28 0 0 1-28-28"></svg:path>`,
})
export class PhMapPinLineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinPlusIcon],svg[ph-map-pin-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 16a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118m40-118a8 8 0 0 1-8 8h-24v24a8 8 0 0 1-16 0v-24H96a8 8 0 0 1 0-16h24V72a8 8 0 0 1 16 0v24h24a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhMapPinPlusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinPlusBoldIcon],svg[ph-map-pin-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 104a12 12 0 0 1-12 12h-20v20a12 12 0 0 1-24 0v-20H96a12 12 0 0 1 0-24h20V72a12 12 0 0 1 24 0v20h20a12 12 0 0 1 12 12m48 0c0 32.38-14.85 66.57-42.94 98.87a259 259 0 0 1-42.18 39a12 12 0 0 1-13.76 0C117.64 239.4 36 181.36 36 104a92 92 0 0 1 184 0m-24 0a68 68 0 0 0-136 0c0 33.31 20 63.37 36.7 82.71a249.4 249.4 0 0 0 31.3 30.18a249.4 249.4 0 0 0 31.3-30.18C176 167.37 196 137.31 196 104"></svg:path>`,
})
export class PhMapPinPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinPlusDuotoneIcon],svg[ph-map-pin-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104c0 72-80 128-80 128s-80-56-80-128a80 80 0 0 1 160 0" opacity=".2"></svg:path><svg:path d="M128 16a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118m40-118a8 8 0 0 1-8 8h-24v24a8 8 0 0 1-16 0v-24H96a8 8 0 0 1 0-16h24V72a8 8 0 0 1 16 0v24h24a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhMapPinPlusDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinPlusFillIcon],svg[ph-map-pin-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 16a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m32 96h-24v24a8 8 0 0 1-16 0v-24H96a8 8 0 0 1 0-16h24V72a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhMapPinPlusFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinPlusLightIcon],svg[ph-map-pin-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M166 104a6 6 0 0 1-6 6h-26v26a6 6 0 0 1-12 0v-26H96a6 6 0 0 1 0-12h26V72a6 6 0 0 1 12 0v26h26a6 6 0 0 1 6 6m48 0c0 30.91-14.34 63.74-41.47 94.94a252.3 252.3 0 0 1-41.09 38a6 6 0 0 1-6.88 0a252.3 252.3 0 0 1-41.09-38C56.34 167.74 42 134.91 42 104a86 86 0 0 1 172 0m-12 0a74 74 0 0 0-148 0c0 59.62 59 108.93 74 120.51c15-11.58 74-60.89 74-120.51"></svg:path>`,
})
export class PhMapPinPlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinPlusThinIcon],svg[ph-map-pin-plus-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M164 104a4 4 0 0 1-4 4h-28v28a4 4 0 0 1-8 0v-28H96a4 4 0 0 1 0-8h28V72a4 4 0 0 1 8 0v28h28a4 4 0 0 1 4 4m48 0c0 30.42-14.17 62.79-41 93.62a250 250 0 0 1-40.73 37.66a4 4 0 0 1-4.58 0A250 250 0 0 1 85 197.62c-26.83-30.83-41-63.2-41-93.62a84 84 0 0 1 168 0m-8 0a76 76 0 0 0-152 0c0 35.9 21.15 67.8 38.9 88.23A254.6 254.6 0 0 0 128 227a254.6 254.6 0 0 0 37.1-34.81C182.85 171.8 204 139.9 204 104"></svg:path>`,
})
export class PhMapPinPlusThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleIcon],svg[ph-map-pin-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 72a56 56 0 1 0-64 55.42V232a8 8 0 0 0 16 0V127.42A56.09 56.09 0 0 0 184 72m-56 40a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhMapPinSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleAreaIcon],svg[ph-map-pin-simple-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120 103.2V176a8 8 0 0 0 16 0v-72.8a40 40 0 1 0-16 0m8-63.2a24 24 0 1 1-24 24a24 24 0 0 1 24-24m112 136c0 31.18-57.71 48-112 48S16 207.18 16 176c0-7.74 3.81-19.13 22-29.41c12.26-6.94 29.12-12.27 48.77-15.42a8 8 0 1 1 2.5 15.83c-17.54 2.82-33 7.63-43.42 13.55C37.05 165.5 32 171.14 32 176c0 13.36 36.52 32 96 32s96-18.64 96-32c0-4.86-5.05-10.5-13.85-15.49c-10.46-5.92-25.88-10.73-43.42-13.55a8 8 0 1 1 2.54-15.79c19.65 3.15 36.51 8.48 48.77 15.42C236.19 156.87 240 168.26 240 176"></svg:path>`,
})
export class PhMapPinSimpleAreaIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleAreaBoldIcon],svg[ph-map-pin-simple-area-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 106.32V176a12 12 0 0 0 24 0v-69.68a44 44 0 1 0-24 0M128 44a20 20 0 1 1-20 20a20 20 0 0 1 20-20m116 132c0 21.59-23.9 34-38.15 39.48C184.86 223.56 157.22 228 128 228c-57.64 0-116-17.86-116-52c0-22.23 26.12-40.2 69.88-48.06a12 12 0 1 1 4.24 23.62C51.93 157.71 36 169.78 36 176c0 4 7.12 11.07 22.77 17.08c18.3 7 42.89 10.92 69.23 10.92s50.93-3.88 69.23-10.92C212.87 187.07 220 180 220 176c0-6.22-15.93-18.29-50.12-24.44a12 12 0 1 1 4.24-23.62C217.88 135.8 244 153.77 244 176"></svg:path>`,
})
export class PhMapPinSimpleAreaBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleAreaDuotoneIcon],svg[ph-map-pin-simple-area-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 64a32 32 0 1 1-32-32a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M120 103.2V176a8 8 0 0 0 16 0v-72.8a40 40 0 1 0-16 0m8-63.2a24 24 0 1 1-24 24a24 24 0 0 1 24-24m112 136c0 31.18-57.71 48-112 48S16 207.18 16 176c0-7.74 3.81-19.13 22-29.41c12.26-6.94 29.12-12.27 48.77-15.42a8 8 0 1 1 2.5 15.83c-17.54 2.82-33 7.63-43.42 13.55C37.05 165.5 32 171.14 32 176c0 13.36 36.52 32 96 32s96-18.64 96-32c0-4.86-5.05-10.5-13.85-15.49c-10.46-5.92-25.88-10.73-43.42-13.55a8 8 0 1 1 2.54-15.79c19.65 3.15 36.51 8.48 48.77 15.42C236.19 156.87 240 168.26 240 176"></svg:path></svg:g>`,
})
export class PhMapPinSimpleAreaDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleAreaFillIcon],svg[ph-map-pin-simple-area-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 64a40 40 0 1 1 48 39.19V176a8 8 0 0 1-16 0v-72.81A40.05 40.05 0 0 1 88 64m130 82.59c-12.26-6.94-29.12-12.27-48.77-15.42a8 8 0 1 0-2.5 15.83c17.54 2.82 33 7.63 43.42 13.55C219 165.5 224 171.14 224 176c0 13.36-36.52 32-96 32s-96-18.64-96-32c0-4.86 5-10.5 13.85-15.49c10.46-5.92 25.88-10.73 43.42-13.55a8 8 0 1 0-2.54-15.79c-19.65 3.15-36.51 8.48-48.77 15.42C19.81 156.87 16 168.26 16 176c0 31.18 57.71 48 112 48s112-16.82 112-48c0-7.74-3.81-19.13-22-29.41"></svg:path>`,
})
export class PhMapPinSimpleAreaFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleAreaLightIcon],svg[ph-map-pin-simple-area-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 101.52V176a6 6 0 0 0 12 0v-74.48a38 38 0 1 0-12 0M128 38a26 26 0 1 1-26 26a26 26 0 0 1 26-26m110 138c0 13.34-12.18 25.38-34.31 33.88C183.38 217.7 156.5 222 128 222s-55.38-4.3-75.69-12.12C30.18 201.38 18 189.34 18 176c0-19.6 26.46-36 69.05-42.86A6 6 0 0 1 89 145c-18 2.89-33.27 7.66-44.09 13.78C35.28 164.2 30 170.32 30 176c0 16.08 40.25 34 98 34s98-17.92 98-34c0-5.68-5.28-11.8-14.86-17.23c-10.82-6.12-26.07-10.89-44.09-13.78a6 6 0 0 1 1.9-11.85C211.54 140 238 156.4 238 176"></svg:path>`,
})
export class PhMapPinSimpleAreaLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleAreaThinIcon],svg[ph-map-pin-simple-area-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 99.77V176a4 4 0 0 0 8 0V99.77a36 36 0 1 0-8 0M128 36a28 28 0 1 1-28 28a28 28 0 0 1 28-28m108 140c0 12.46-11.73 23.83-33 32c-20.09 7.73-46.72 12-75 12s-54.89-4.25-75-12c-21.29-8.19-33-19.56-33-32c0-18.55 25.81-34.22 67.37-40.88a4 4 0 1 1 1.26 7.88C52.93 148.74 28 162.3 28 176c0 17.39 40.18 36 100 36s100-18.61 100-36c0-13.7-24.93-27.26-60.63-33a4 4 0 1 1 1.26-7.89C210.19 141.78 236 157.45 236 176"></svg:path>`,
})
export class PhMapPinSimpleAreaThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleBoldIcon],svg[ph-map-pin-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 72a60 60 0 1 0-72 58.79V232a12 12 0 0 0 24 0V130.79A60.09 60.09 0 0 0 188 72m-60 36a36 36 0 1 1 36-36a36 36 0 0 1-36 36"></svg:path>`,
})
export class PhMapPinSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleDuotoneIcon],svg[ph-map-pin-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 72a48 48 0 1 1-48-48a48 48 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M184 72a56 56 0 1 0-64 55.42V232a8 8 0 0 0 16 0V127.42A56.09 56.09 0 0 0 184 72m-56 40a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path></svg:g>`,
})
export class PhMapPinSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleFillIcon],svg[ph-map-pin-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 127.42V232a8 8 0 0 1-16 0V127.42a56 56 0 1 1 16 0"></svg:path>`,
})
export class PhMapPinSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleLightIcon],svg[ph-map-pin-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 72a54 54 0 1 0-60 53.66V232a6 6 0 0 0 12 0V125.66A54.07 54.07 0 0 0 182 72m-54 42a42 42 0 1 1 42-42a42 42 0 0 1-42 42"></svg:path>`,
})
export class PhMapPinSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleLineIcon],svg[ph-map-pin-simple-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 208h-80v-72.58a56 56 0 1 0-16 0V208H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M88 80a40 40 0 1 1 40 40a40 40 0 0 1-40-40"></svg:path>`,
})
export class PhMapPinSimpleLineIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleLineBoldIcon],svg[ph-map-pin-simple-line-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 204h-76v-65.21a60 60 0 1 0-24 0V204H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24M92 80a36 36 0 1 1 36 36a36 36 0 0 1-36-36"></svg:path>`,
})
export class PhMapPinSimpleLineBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleLineDuotoneIcon],svg[ph-map-pin-simple-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 80a48 48 0 1 1-48-48a48 48 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M216 208h-80v-72.58a56 56 0 1 0-16 0V208H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16M88 80a40 40 0 1 1 40 40a40 40 0 0 1-40-40"></svg:path></svg:g>`,
})
export class PhMapPinSimpleLineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleLineFillIcon],svg[ph-map-pin-simple-line-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h80v-72.58a56 56 0 1 1 16 0V208h80a8 8 0 0 1 8 8"></svg:path>`,
})
export class PhMapPinSimpleLineFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleLineLightIcon],svg[ph-map-pin-simple-line-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 210h-82v-76.34a54 54 0 1 0-12 0V210H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12M86 80a42 42 0 1 1 42 42a42 42 0 0 1-42-42"></svg:path>`,
})
export class PhMapPinSimpleLineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleLineThinIcon],svg[ph-map-pin-simple-line-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 212h-84v-80.17a52 52 0 1 0-8 0V212H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8M84 80a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44"></svg:path>`,
})
export class PhMapPinSimpleLineThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinSimpleThinIcon],svg[ph-map-pin-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 72a52 52 0 1 0-56 51.83V232a4 4 0 0 0 8 0V123.83A52.05 52.05 0 0 0 180 72m-52 44a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhMapPinSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapPinThinIcon],svg[ph-map-pin-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 68a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m0-112a84.09 84.09 0 0 0-84 84c0 30.42 14.17 62.79 41 93.62a250 250 0 0 0 40.73 37.66a4 4 0 0 0 4.58 0A250 250 0 0 0 171 197.62c26.81-30.83 41-63.2 41-93.62a84.09 84.09 0 0 0-84-84m37.1 172.23A254.6 254.6 0 0 1 128 227a254.6 254.6 0 0 1-37.1-34.81C73.15 171.8 52 139.9 52 104a76 76 0 0 1 152 0c0 35.9-21.15 67.8-38.9 88.23"></svg:path>`,
})
export class PhMapPinThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapTrifoldIcon],svg[ph-map-trifold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.92 49.69a8 8 0 0 0-6.86-1.45l-61.13 15.28l-61.35-30.68a8 8 0 0 0-5.52-.6l-64 16A8 8 0 0 0 24 56v144a8 8 0 0 0 9.94 7.76l61.13-15.28l61.35 30.68a8.15 8.15 0 0 0 3.58.84a8 8 0 0 0 1.94-.24l64-16A8 8 0 0 0 232 200V56a8 8 0 0 0-3.08-6.31M104 52.94l48 24v126.12l-48-24Zm-64 9.31l48-12v127.5l-48 12Zm176 131.5l-48 12V78.25l48-12Z"></svg:path>`,
})
export class PhMapTrifoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapTrifoldBoldIcon],svg[ph-map-trifold-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M231.38 46.54a12 12 0 0 0-10.29-2.18L161.4 59.28l-60-30a12 12 0 0 0-8.28-.91l-64 16A12 12 0 0 0 20 56v144a12 12 0 0 0 14.91 11.64l59.69-14.92l60 30a12 12 0 0 0 8.28.91l64-16A12 12 0 0 0 236 200V56a12 12 0 0 0-4.62-9.46M108 59.42l40 20v117.16l-40-20Zm-64 6l40-10v119.21l-40 10Zm168 125.21l-40 10V81.37l40-10Z"></svg:path>`,
})
export class PhMapTrifoldBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapTrifoldDuotoneIcon],svg[ph-map-trifold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 72v144l-64-32V40Z" opacity=".2"></svg:path><svg:path d="M228.92 49.69a8 8 0 0 0-6.86-1.45l-61.13 15.28l-61.35-30.68a8 8 0 0 0-5.52-.6l-64 16A8 8 0 0 0 24 56v144a8 8 0 0 0 9.94 7.76l61.13-15.28l61.35 30.68a8.15 8.15 0 0 0 3.58.84a8 8 0 0 0 1.94-.24l64-16A8 8 0 0 0 232 200V56a8 8 0 0 0-3.08-6.31M104 52.94l48 24v126.12l-48-24Zm-64 9.31l48-12v127.5l-48 12Zm176 131.5l-48 12V78.25l48-12Z"></svg:path></svg:g>`,
})
export class PhMapTrifoldDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapTrifoldFillIcon],svg[ph-map-trifold-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228.92 49.69a8 8 0 0 0-6.86-1.45l-61.13 15.28l-61.35-30.68a8 8 0 0 0-5.52-.6l-64 16A8 8 0 0 0 24 56v144a8 8 0 0 0 9.94 7.76l61.13-15.28l61.35 30.68a8.15 8.15 0 0 0 3.58.84a8 8 0 0 0 1.94-.24l64-16A8 8 0 0 0 232 200V56a8 8 0 0 0-3.08-6.31M96 176a8 8 0 0 0-1.94.24L40 189.75V62.25l55.07-13.77l.93.46Zm120 17.75l-55.07 13.77l-.93-.46V80a8 8 0 0 0 1.94-.23L216 66.25Z"></svg:path>`,
})
export class PhMapTrifoldFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapTrifoldLightIcon],svg[ph-map-trifold-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.69 51.27a6 6 0 0 0-5.15-1.09L160.7 65.64l-62-31a6 6 0 0 0-4.14-.45l-64 16A6 6 0 0 0 26 56v144a6 6 0 0 0 7.46 5.82l61.84-15.46l62 31a6 6 0 0 0 4.14.45l64-16A6 6 0 0 0 230 200V56a6 6 0 0 0-2.31-4.73M102 49.71l52 26v130.58l-52-26Zm-64 11l52-13v131.61l-52 13Zm180 134.61l-52 13V76.68l52-13Z"></svg:path>`,
})
export class PhMapTrifoldLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMapTrifoldThinIcon],svg[ph-map-trifold-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.46 52.85a4 4 0 0 0-3.43-.73l-62.56 15.64l-62.68-31.34a4 4 0 0 0-2.76-.3l-64 16A4 4 0 0 0 28 56v144a4 4 0 0 0 5 3.88l62.56-15.64l62.68 31.34a4 4 0 0 0 2.76.3l64-16a4 4 0 0 0 3-3.88V56a4 4 0 0 0-1.54-3.15M100 46.47l56 28v135.06l-56-28ZM36 59.12l56-14v135.76l-56 14Zm184 137.76l-56 14V75.12l56-14Z"></svg:path>`,
})
export class PhMapTrifoldThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkdownLogoIcon],svg[ph-markdown-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48H24A16 16 0 0 0 8 64v128a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H24V64h208zm-104-88v48a8 8 0 0 1-16 0v-28.69l-18.34 18.35a8 8 0 0 1-11.32 0L64 123.31V152a8 8 0 0 1-16 0v-48a8 8 0 0 1 13.66-5.66L88 124.69l26.34-26.35A8 8 0 0 1 128 104m77.66 18.34a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L168 132.69V104a8 8 0 0 1 16 0v28.69l10.34-10.35a8 8 0 0 1 11.32 0"></svg:path>`,
})
export class PhMarkdownLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkdownLogoBoldIcon],svg[ph-markdown-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 44H24A20 20 0 0 0 4 64v128a20 20 0 0 0 20 20h208a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144H28V68h200ZM48 148v-40a12 12 0 0 1 20.49-8.49L88 119l19.51-19.52A12 12 0 0 1 128 108v40a12 12 0 0 1-24 0v-11l-7.51 7.52a12 12 0 0 1-17 0L72 137v11a12 12 0 0 1-24 0m98.63-23.5a12 12 0 0 1 16.87-1.87l.5.4V108a12 12 0 0 1 24 0v15l.5-.4a12 12 0 0 1 15 18.74l-20 16a12 12 0 0 1-15 0l-20-16a12 12 0 0 1-1.87-16.84"></svg:path>`,
})
export class PhMarkdownLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkdownLogoDuotoneIcon],svg[ph-markdown-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 64v128a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h208a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M232 48H24A16 16 0 0 0 8 64v128a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m0 144H24V64h208zm-104-88v48a8 8 0 0 1-16 0v-28.69l-18.34 18.35a8 8 0 0 1-11.32 0L64 123.31V152a8 8 0 0 1-16 0v-48a8 8 0 0 1 13.66-5.66L88 124.69l26.34-26.35A8 8 0 0 1 128 104m77.66 18.34a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L168 132.69V104a8 8 0 0 1 16 0v28.69l10.34-10.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhMarkdownLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkdownLogoFillIcon],svg[ph-markdown-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48H24A16 16 0 0 0 8 64v128a16 16 0 0 0 16 16h208a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M128 152a8 8 0 0 1-16 0v-28.69l-18.34 18.35a8 8 0 0 1-11.32 0L64 123.31V152a8 8 0 0 1-16 0v-48a8 8 0 0 1 13.66-5.66L88 124.69l26.34-26.35A8 8 0 0 1 128 104Zm77.66-18.34l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L168 132.69V104a8 8 0 0 1 16 0v28.69l10.34-10.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhMarkdownLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkdownLogoLightIcon],svg[ph-markdown-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 50H24a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h208a14 14 0 0 0 14-14V64a14 14 0 0 0-14-14m2 142a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2V64a2 2 0 0 1 2-2h208a2 2 0 0 1 2 2Zm-108-88v48a6 6 0 0 1-12 0v-33.51l-21.76 21.75a6 6 0 0 1-8.48 0L62 118.49V152a6 6 0 0 1-12 0v-48a6 6 0 0 1 10.24-4.24L88 127.51l27.76-27.75A6 6 0 0 1 126 104m78.24 19.76a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48 0l-24-24a6 6 0 1 1 8.48-8.48L170 137.51V104a6 6 0 0 1 12 0v33.51l13.76-13.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhMarkdownLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkdownLogoThinIcon],svg[ph-markdown-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 52H24a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h208a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 140a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h208a4 4 0 0 1 4 4Zm-112-88v48a4 4 0 0 1-8 0v-38.34l-25.17 25.17a4 4 0 0 1-5.66 0L60 113.66V152a4 4 0 0 1-8 0v-48a4 4 0 0 1 6.83-2.83L88 130.34l29.17-29.17A4 4 0 0 1 124 104m78.83 21.17a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66 0l-24-24a4 4 0 1 1 5.66-5.66L172 142.34V104a4 4 0 0 1 8 0v38.34l17.17-17.17a4 4 0 0 1 5.66 0"></svg:path>`,
})
export class PhMarkdownLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkerCircleIcon],svg[ph-marker-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46M88 206.37V176h80v30.37a88.38 88.38 0 0 1-80 0M104 144h48v16h-48Zm14-16l10-48l10 48Zm72.22 62.23c-2 2-4.08 3.87-6.22 5.64V176a16 16 0 0 0-16-16v-16a16 16 0 0 0-13.61-15.8l-10.73-51.46a16 16 0 0 0-31.32 0l-10.73 51.46A16 16 0 0 0 88 144v16a16 16 0 0 0-16 16v19.87a89 89 0 0 1-6.22-5.64a88 88 0 1 1 124.44 0"></svg:path>`,
})
export class PhMarkerCircleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkerCircleBoldIcon],svg[ph-marker-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.37 51.6A108.08 108.08 0 1 0 236 128a108.1 108.1 0 0 0-31.63-76.4M108 140h40v16h-40Zm-16 63.92V180h72v23.9a84.33 84.33 0 0 1-72 .02m96-17.13V176a20 20 0 0 0-16-19.6V136a20 20 0 0 0-14.85-19.31l-9.88-35.49a20 20 0 0 0-38.54 0l-9.88 35.49A20 20 0 0 0 84 136v20.42A20 20 0 0 0 68 176v10.77a84 84 0 1 1 120 0Z"></svg:path>`,
})
export class PhMarkerCircleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkerCircleDuotoneIcon],svg[ph-marker-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 0-144 83.16V176a8 8 0 0 1 8-8h8v-24a8 8 0 0 1 8-8h4.16l12-57.63c1.77-8.49 13.89-8.49 15.66 0l12 57.63H152a8 8 0 0 1 8 8v24h8a8 8 0 0 1 8 8v35.16A96 96 0 0 0 224 128" opacity=".2"></svg:path><svg:path d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46M88 206.37V176h80v30.37a88.38 88.38 0 0 1-80 0M104 144h48v16h-48Zm14-16l10-48l10 48Zm72.22 62.23c-2 2-4.08 3.87-6.22 5.64V176a16 16 0 0 0-16-16v-16a16 16 0 0 0-13.61-15.8l-10.73-51.46a16 16 0 0 0-31.32 0l-10.73 51.46A16 16 0 0 0 88 144v16a16 16 0 0 0-16 16v19.87a89 89 0 0 1-6.22-5.64a88 88 0 1 1 124.44 0"></svg:path></svg:g>`,
})
export class PhMarkerCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkerCircleFillIcon],svg[ph-marker-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 182.37a87.89 87.89 0 0 1-80 0V176h80ZM104 160v-16h48v16Zm80 35.83V176a16 16 0 0 0-16-16v-16a16 16 0 0 0-13.61-15.8l-10.73-51.46a16 16 0 0 0-31.32 0l-10.73 51.46A16 16 0 0 0 88 144v16a16 16 0 0 0-16 16v19.83a88 88 0 1 1 112 0"></svg:path>`,
})
export class PhMarkerCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkerCircleLightIcon],svg[ph-marker-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.12 55.87A102 102 0 1 0 55.88 200.12A102 102 0 1 0 200.12 55.87M86 207.64V176a2 2 0 0 1 2-2h80a2 2 0 0 1 2 2v31.64a90.32 90.32 0 0 1-84 0M104 142h48a2 2 0 0 1 2 2v18h-52v-18a2 2 0 0 1 2-2m11.54-12L126 79.59a2 2 0 0 1 3.92 0L140.46 130Zm76.1 61.64A93 93 0 0 1 182 200v-24a14 14 0 0 0-14-14h-2v-18a14 14 0 0 0-13.27-14l-11-52.9a14 14 0 0 0-27.42 0l-11 52.9A14 14 0 0 0 90 144v18h-2a14 14 0 0 0-14 14v24a93 93 0 0 1-9.64-8.37a90 90 0 1 1 127.28 0Z"></svg:path>`,
})
export class PhMarkerCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMarkerCircleThinIcon],svg[ph-marker-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M198.71 57.29A100 100 0 1 0 57.29 198.71A100 100 0 1 0 198.71 57.29M84 208.83V176a4 4 0 0 1 4-4h80a4 4 0 0 1 4 4v32.83a92.25 92.25 0 0 1-88 0M108.15 140H152a4 4 0 0 1 4 4v20h-56v-20a4 4 0 0 1 4-4Zm4.93-8l11-52.82a4 4 0 0 1 7.84 0l11 52.82Zm80 61.05A92.4 92.4 0 0 1 180 203.9V176a12 12 0 0 0-12-12h-4v-20a12 12 0 0 0-12-12h-.91l-11.34-54.45a12 12 0 0 0-23.5 0L104.91 132H104a12 12 0 0 0-12 12v20h-4a12 12 0 0 0-12 12v27.9a92.4 92.4 0 0 1-13-10.85a92 92 0 1 1 130.1 0Z"></svg:path>`,
})
export class PhMarkerCircleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMartiniIcon],svg[ph-martini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.66 45.66A8 8 0 0 0 232 32H24a8 8 0 0 0-5.66 13.66L120 147.31V208H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16h-32v-60.69ZM43.31 48h169.38l-16 16H59.31ZM128 132.69L75.31 80h105.38Z"></svg:path>`,
})
export class PhMartiniIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMartiniBoldIcon],svg[ph-martini-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243.09 35.41A12 12 0 0 0 232 28H24a12 12 0 0 0-8.48 20.49L116 149v55H88a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24h-28v-55L240.48 48.49a12 12 0 0 0 2.61-13.08M203 52l-12 12H65L53 52Zm-75 75L89 88h78Z"></svg:path>`,
})
export class PhMartiniBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMartiniDuotoneIcon],svg[ph-martini-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m200 72l-72 72l-72-72Z" opacity=".2"></svg:path><svg:path d="M237.66 45.66A8 8 0 0 0 232 32H24a8 8 0 0 0-5.66 13.66L120 147.31V208H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16h-32v-60.69ZM75.31 80h105.38L128 132.69Zm137.38-32l-16 16H59.31l-16-16Z"></svg:path></svg:g>`,
})
export class PhMartiniDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMartiniFillIcon],svg[ph-martini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237.66 45.66A8 8 0 0 0 232 32H24a8 8 0 0 0-5.66 13.66L120 147.31V208H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16h-32v-60.69Zm-25 2.34l-16 16H59.31l-16-16Z"></svg:path>`,
})
export class PhMartiniFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMartiniLightIcon],svg[ph-martini-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236.24 44.24A6 6 0 0 0 232 34H24a6 6 0 0 0-4.24 10.24L122 146.49V210H88a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12h-34v-63.51ZM70.49 78h115L128 135.51Zm147-32l-20 20h-139l-20-20Z"></svg:path>`,
})
export class PhMartiniLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMartiniThinIcon],svg[ph-martini-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.83 42.83A4 4 0 0 0 232 36H24a4 4 0 0 0-2.83 6.83L124 145.66V212H88a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8h-36v-66.34ZM33.66 44h188.68l-24 24H57.66ZM128 138.34L65.66 76h124.68Z"></svg:path>`,
})
export class PhMartiniThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskHappyIcon],svg[ph-mask-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M217 34.8a15.94 15.94 0 0 0-14.82-1.71c-14.03 5.46-42.36 14.62-74.18 14.62s-60.16-9.16-74.21-14.62A16 16 0 0 0 32 48v55.77c0 35.84 9.65 69.65 27.18 95.18c18.16 26.46 42.6 41 68.82 41s50.66-14.57 68.82-41c17.53-25.51 27.18-59.32 27.18-95.16V48a16 16 0 0 0-7-13.2m-9 69c0 32.64-8.66 63.23-24.37 86.13C168.54 211.9 148.79 224 128 224s-40.54-12.1-55.63-34.08C56.66 167 48 136.43 48 103.79V48c15.11 5.87 45.58 15.71 80 15.71s64.9-9.84 80-15.71v55.81Zm-18 18.87a8 8 0 1 1-12 10.66c-2.68-3-8.85-5.33-14-5.33s-11.36 2.34-14 5.33a8 8 0 1 1-12-10.67c5.71-6.38 16.14-10.66 26-10.66s20.25 4.28 26 10.66ZM92 128c-5.19 0-11.36 2.34-14 5.33a8 8 0 1 1-12-10.67C71.75 116.28 82.18 112 92 112s20.25 4.28 26 10.66a8 8 0 1 1-12 10.67c-2.64-2.99-8.81-5.33-14-5.33m76.45 45.19a52.9 52.9 0 0 1-80.9 0a8 8 0 1 1 12.17-10.39a36.89 36.89 0 0 0 56.56 0a8 8 0 0 1 12.17 10.39"></svg:path>`,
})
export class PhMaskHappyIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskHappyBoldIcon],svg[ph-mask-happy-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.29 31.5a20 20 0 0 0-18.52-2.14C187 34.72 159.17 43.7 128 43.7s-59-9-72.77-14.34A20 20 0 0 0 28 48v55.77c0 36.64 9.9 71.25 27.88 97.45C74.81 228.81 100.42 244 128 244s53.19-15.19 72.12-42.76C218.1 175 228 140.43 228 103.79V48a20 20 0 0 0-8.71-16.5M204 103.79c0 31.84-8.41 61.63-23.67 83.87C166 208.51 147.43 220 128 220s-38-11.49-52.33-32.34C60.41 165.42 52 135.63 52 103.79v-50c16.59 5.95 44.67 13.94 76 13.94s59.41-8 76-13.94Zm-38.67 62.88a12 12 0 0 1-1.79 16.87a56.92 56.92 0 0 1-71.08 0a12 12 0 0 1 15.08-18.67a32.92 32.92 0 0 0 40.92 0a12 12 0 0 1 16.87 1.8m-27.44-35.51a12 12 0 0 1 3.61-16.58a41.66 41.66 0 0 1 39.23-3.06a12 12 0 1 1-9.46 22.06A19.5 19.5 0 0 0 164 132a19.14 19.14 0 0 0-9.52 2.77a12 12 0 0 1-16.59-3.61M92 132a19.4 19.4 0 0 0-7.27 1.59a12 12 0 0 1-9.46-22.06a41.61 41.61 0 0 1 39.23 3a12 12 0 1 1-13 20.19A19.2 19.2 0 0 0 92 132"></svg:path>`,
})
export class PhMaskHappyBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskHappyDuotoneIcon],svg[ph-mask-happy-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v55.77C216 174.6 176.6 232 128 232s-88-57.4-88-128.21V48a8 8 0 0 1 10.89-7.47C66 46.41 95.11 55.71 128 55.71s62-9.3 77.11-15.16A8 8 0 0 1 216 48" opacity=".2"></svg:path><svg:path d="M217 34.8a15.94 15.94 0 0 0-14.82-1.71c-14.03 5.46-42.36 14.62-74.18 14.62s-60.16-9.16-74.21-14.62A16 16 0 0 0 32 48v55.77c0 35.84 9.65 69.65 27.18 95.18c18.16 26.46 42.6 41 68.82 41s50.66-14.57 68.82-41c17.53-25.51 27.18-59.32 27.18-95.16V48a16 16 0 0 0-7-13.2m-9 69c0 32.64-8.66 63.23-24.37 86.13C168.54 211.9 148.79 224 128 224s-40.54-12.1-55.63-34.08C56.66 167 48 136.43 48 103.79V48c15.11 5.87 45.58 15.71 80 15.71s64.9-9.84 80-15.71v55.81Zm-18 18.87a8 8 0 1 1-12 10.66c-2.68-3-8.85-5.33-14-5.33s-11.36 2.34-14 5.33a8 8 0 1 1-12-10.67c5.71-6.38 16.14-10.66 26-10.66s20.25 4.28 26 10.66ZM92 128c-5.19 0-11.36 2.34-14 5.33a8 8 0 1 1-12-10.67C71.75 116.28 82.18 112 92 112s20.25 4.28 26 10.66a8 8 0 1 1-12 10.67c-2.64-2.99-8.81-5.33-14-5.33m76.45 45.19a52.9 52.9 0 0 1-80.9 0a8 8 0 1 1 12.17-10.39a36.89 36.89 0 0 0 56.56 0a8 8 0 0 1 12.17 10.39"></svg:path></svg:g>`,
})
export class PhMaskHappyDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskHappyFillIcon],svg[ph-mask-happy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M217 34.8a15.94 15.94 0 0 0-14.82-1.71c-14.03 5.46-42.36 14.62-74.18 14.62s-60.16-9.16-74.21-14.62A16 16 0 0 0 32 48v55.77c0 35.84 9.65 69.65 27.18 95.18c18.16 26.46 42.6 41 68.82 41s50.66-14.57 68.82-41c17.53-25.51 27.18-59.32 27.18-95.16V48a16 16 0 0 0-7-13.2M78 133.33a8 8 0 1 1-12-10.67C71.75 116.28 82.18 112 92 112s20.25 4.28 26 10.66a8 8 0 1 1-12 10.67c-2.68-3-8.85-5.33-14-5.33s-11.36 2.34-14 5.33m90.49 47.86a52.9 52.9 0 0 1-80.9 0a8 8 0 1 1 12.13-10.39a36.89 36.89 0 0 0 56.56 0a8 8 0 0 1 12.17 10.39ZM189.34 134a8 8 0 0 1-11.3-.63c-2.68-3-8.85-5.33-14-5.33s-11.36 2.34-14 5.33A8 8 0 1 1 138 122.66c5.71-6.38 16.14-10.66 26-10.66s20.25 4.28 26 10.66a8 8 0 0 1-.66 11.34"></svg:path>`,
})
export class PhMaskHappyFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskHappyLightIcon],svg[ph-mask-happy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188.47 124a6 6 0 1 1-8.94 8c-3.06-3.42-9.74-6-15.53-6s-12.47 2.58-15.53 6a6 6 0 0 1-8.94-8c5.35-6 15.19-10 24.47-10s19.12 4 24.47 10m-80.94 8a6 6 0 1 0 8.94-8c-5.35-6-15.19-10-24.47-10s-19.12 4-24.47 10a6 6 0 1 0 8.94 8c3.06-3.42 9.74-6 15.53-6s12.47 2.58 15.53 6m58.73 31.43a6 6 0 0 0-8.46.67a38.89 38.89 0 0 1-59.6 0a6 6 0 1 0-9.13 7.79a50.9 50.9 0 0 0 77.86 0a6 6 0 0 0-.67-8.46M222 48v55.77c0 35.45-9.53 68.86-26.83 94.06C177.4 223.74 153.54 238 128 238s-49.4-14.26-67.17-40.16C43.53 172.64 34 139.23 34 103.78V48a14 14 0 0 1 19.06-13c14.19 5.46 42.8 14.7 74.94 14.7s60.75-9.24 74.94-14.7A14 14 0 0 1 222 48m-12 0a2 2 0 0 0-.87-1.66a1.93 1.93 0 0 0-1.85-.21C192.31 52 162.1 61.7 128 61.7S63.69 52 48.72 46.14a2 2 0 0 0-1.85.21A2 2 0 0 0 46 48v55.76C46 171.17 82.79 226 128 226s82-54.83 82-122.22Z"></svg:path>`,
})
export class PhMaskHappyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskHappyThinIcon],svg[ph-mask-happy-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M187 125.33a4 4 0 1 1-6 5.33c-3.4-3.8-10.72-6.66-17-6.66s-13.62 2.86-17 6.66a4 4 0 0 1-3 1.34a4 4 0 0 1-3-6.67c4.92-5.5 14.37-9.33 23-9.33s18.06 3.83 23 9.33m-78 5.33a4 4 0 1 0 6-5.33c-4.92-5.5-14.37-9.33-23-9.33s-18.06 3.83-23 9.33a4 4 0 0 0 3 6.67a4 4 0 0 0 3-1.34c3.4-3.8 10.72-6.66 17-6.66s13.62 2.86 17 6.66m50.3 34.74a40.89 40.89 0 0 1-62.64 0a4 4 0 0 0-6.09 5.2a48.92 48.92 0 0 0 74.82 0a4 4 0 0 0-6.09-5.2M220 48v55.78c0 35-9.4 68-26.48 92.92C176.13 222.05 152.86 236 128 236s-48.13-13.95-65.52-39.29C45.4 171.83 36 138.83 36 103.79V48a12 12 0 0 1 16.34-11.2C66.66 42.38 95.53 51.7 128 51.7s61.34-9.32 75.66-14.88A12 12 0 0 1 220 48m-8 0a4 4 0 0 0-5.44-3.74C191.72 50 161.77 59.7 128 59.7S64.28 50 49.44 44.27A4.1 4.1 0 0 0 48 44a3.87 3.87 0 0 0-2.23.7A4 4 0 0 0 44 48v55.77C44 172.28 81.68 228 128 228s84-55.72 84-124.21Z"></svg:path>`,
})
export class PhMaskHappyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskSadIcon],svg[ph-mask-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M158.66 188.43a8 8 0 0 1-11.09 2.23C141.07 186.34 136 184 128 184s-13.07 2.34-19.57 6.66a8 8 0 0 1-8.86-13.32C108 171.73 116.06 168 128 168s20 3.73 28.43 9.34a8 8 0 0 1 2.23 11.09M224 48v55.77c0 35.84-9.65 69.65-27.18 95.18c-18.16 26.46-42.6 41-68.82 41s-50.66-14.57-68.82-41C41.65 173.44 32 139.63 32 103.79V48a16 16 0 0 1 21.79-14.91C67.84 38.55 96.18 47.71 128 47.71s60.15-9.16 74.21-14.62A16 16 0 0 1 224 48m-16 0c-15.1 5.89-45.57 15.73-80 15.73S63.1 53.87 48 48v55.79c0 32.64 8.66 63.23 24.37 86.13C87.46 211.9 107.21 224 128 224s40.54-12.1 55.63-34.08C199.34 167 208 136.43 208 103.79Zm-18.66 66a8 8 0 0 0-11.3.62c-2.68 3-8.85 5.34-14 5.34s-11.36-2.35-14-5.34A8 8 0 0 0 138 125.33c5.71 6.38 16.14 10.67 26 10.67s20.25-4.29 26-10.67a8 8 0 0 0-.66-11.33M118 125.33a8 8 0 0 0-12-10.67c-2.68 3-8.85 5.34-14 5.34s-11.36-2.35-14-5.34a8 8 0 0 0-12 10.67C71.75 131.71 82.18 136 92 136s20.25-4.29 26-10.67"></svg:path>`,
})
export class PhMaskSadIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskSadBoldIcon],svg[ph-mask-sad-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M219.29 31.5a20 20 0 0 0-18.52-2.14C187 34.72 159.17 43.7 128 43.7s-59-9-72.77-14.34A20 20 0 0 0 28 48v55.77c0 36.64 9.9 71.25 27.88 97.45C74.81 228.81 100.42 244 128 244s53.19-15.19 72.12-42.76C218.1 175 228 140.43 228 103.79V48a20 20 0 0 0-8.71-16.5M204 103.79c0 31.84-8.41 61.63-23.67 83.87C166 208.51 147.43 220 128 220s-38-11.49-52.33-32.34C60.41 165.42 52 135.63 52 103.79v-50c16.59 5.95 44.67 13.94 76 13.94s59.41-8 76-13.94Zm-45.62 83.72a12 12 0 0 1-16.4 4.37a27.13 27.13 0 0 0-28 0a12 12 0 1 1-12-20.76a51.14 51.14 0 0 1 52 0a12 12 0 0 1 4.4 16.39m-20.49-74a12 12 0 0 1 16.59-3.61a19.15 19.15 0 0 0 9.52 2.78a19.6 19.6 0 0 0 7.27-1.59a12 12 0 1 1 9.46 22.06a41.58 41.58 0 0 1-39.23-3.06a12 12 0 0 1-3.61-16.58m-23.39 16.58a41.54 41.54 0 0 1-39.23 3a12 12 0 1 1 9.46-22a19.6 19.6 0 0 0 7.27 1.59a19.2 19.2 0 0 0 9.54-2.78a12 12 0 1 1 13 20.19Z"></svg:path>`,
})
export class PhMaskSadBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskSadDuotoneIcon],svg[ph-mask-sad-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v55.77C216 174.6 176.6 232 128 232s-88-57.4-88-128.21V48a8 8 0 0 1 10.89-7.47C66 46.41 95.11 55.71 128 55.71s62-9.3 77.11-15.16A8 8 0 0 1 216 48" opacity=".2"></svg:path><svg:path d="M158.66 188.43a8 8 0 0 1-11.09 2.23C141.07 186.34 136 184 128 184s-13.07 2.34-19.57 6.66a8 8 0 0 1-8.86-13.32C108 171.73 116.06 168 128 168s20 3.73 28.43 9.34a8 8 0 0 1 2.23 11.09M189.34 114a8 8 0 0 0-11.3.62c-2.68 3-8.85 5.34-14 5.34s-11.36-2.35-14-5.34A8 8 0 0 0 138 125.33c5.71 6.38 16.14 10.67 26 10.67s20.25-4.29 26-10.67a8 8 0 0 0-.66-11.33M224 48v55.77c0 35.84-9.65 69.65-27.18 95.18c-18.16 26.46-42.6 41-68.82 41s-50.66-14.57-68.82-41C41.65 173.44 32 139.63 32 103.79V48a16 16 0 0 1 21.79-14.91C67.84 38.55 96.18 47.71 128 47.71s60.15-9.16 74.21-14.62A16 16 0 0 1 224 48m-16 0c-15.1 5.89-45.57 15.73-80 15.73S63.1 53.87 48 48v55.79c0 32.64 8.66 63.23 24.37 86.13C87.46 211.9 107.21 224 128 224s40.54-12.1 55.63-34.08C199.34 167 208 136.43 208 103.79Zm-90 77.31a8 8 0 0 0-12-10.65c-2.68 3-8.85 5.34-14 5.34s-11.36-2.35-14-5.34a8 8 0 0 0-12 10.67C71.75 131.71 82.18 136 92 136s20.25-4.29 26-10.67Z"></svg:path></svg:g>`,
})
export class PhMaskSadDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskSadFillIcon],svg[ph-mask-sad-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M217 34.8a15.94 15.94 0 0 0-14.82-1.71c-14.03 5.46-42.36 14.62-74.18 14.62s-60.16-9.16-74.21-14.62A16 16 0 0 0 32 48v55.77c0 35.84 9.65 69.65 27.18 95.18c18.16 26.46 42.6 41 68.82 41s50.66-14.57 68.82-41c17.53-25.51 27.18-59.32 27.18-95.16V48a16 16 0 0 0-7-13.2M66 125.33a8 8 0 0 1 12-10.67c2.68 3 8.85 5.34 14 5.34s11.36-2.35 14-5.34a8 8 0 0 1 12 10.67c-5.75 6.38-16.18 10.67-26 10.67s-20.25-4.29-26-10.67m92.62 63.1A8 8 0 0 1 152 192a7.9 7.9 0 0 1-4.42-1.34C141.07 186.34 136 184 128 184s-13.07 2.34-19.57 6.66a8 8 0 0 1-8.86-13.32C108 171.73 116.06 168 128 168s20 3.73 28.43 9.34a8 8 0 0 1 2.23 11.09Zm31.3-63.1c-5.71 6.38-16.14 10.67-26 10.67s-20.25-4.29-26-10.67A8 8 0 0 1 150 114.66c2.68 3 8.85 5.34 14 5.34s11.36-2.35 14-5.34a8 8 0 0 1 12 10.67Z"></svg:path>`,
})
export class PhMaskSadFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskSadLightIcon],svg[ph-mask-sad-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M157 187.32a6 6 0 0 1-8.32 1.67c-6.67-4.43-12.19-7-20.68-7s-14 2.56-20.68 7a6 6 0 1 1-6.64-10c8.13-5.4 15.88-9 27.32-9s19.19 3.6 27.32 9a6 6 0 0 1 1.68 8.33M179.53 116c-3.06 3.42-9.74 6-15.53 6s-12.47-2.58-15.53-6a6 6 0 1 0-8.94 8c5.35 6 15.19 10 24.47 10s19.12-4 24.47-10a6 6 0 1 0-8.94-8M222 48v55.77c0 35.45-9.53 68.86-26.83 94.06C177.4 223.74 153.54 238 128 238s-49.4-14.26-67.17-40.16C43.53 172.64 34 139.23 34 103.78V48a14 14 0 0 1 19.06-13c14.19 5.46 42.8 14.7 74.94 14.7s60.75-9.24 74.94-14.7A14 14 0 0 1 222 48m-12 0a2 2 0 0 0-2.72-1.87C192.31 52 162.1 61.7 128 61.7S63.69 52 48.72 46.14a2 2 0 0 0-1.85.21A2 2 0 0 0 46 48v55.76C46 171.17 82.79 226 128 226s82-54.83 82-122.22Zm-93.53 76a6 6 0 1 0-8.94-8c-3.06 3.42-9.74 6-15.53 6s-12.47-2.58-15.53-6a6 6 0 0 0-8.94 8c5.35 6 15.19 10 24.47 10s19.12-4 24.47-10"></svg:path>`,
})
export class PhMaskSadLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMaskSadThinIcon],svg[ph-mask-sad-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M155.33 186.21a4 4 0 0 1-5.54 1.12C142.8 182.69 137 180 128 180s-14.8 2.69-21.79 7.33a4 4 0 1 1-4.42-6.66c7.82-5.21 15.28-8.67 26.21-8.67s18.39 3.46 26.21 8.67a4 4 0 0 1 1.12 5.54M181 117.33c-3.4 3.8-10.72 6.67-17 6.67s-13.62-2.87-17-6.67a4 4 0 0 0-6 5.33c4.92 5.5 14.37 9.34 23 9.34s18.06-3.84 23-9.33a4 4 0 1 0-6-5.34M220 48v55.78c0 35-9.4 68-26.48 92.92C176.13 222.05 152.86 236 128 236s-48.13-13.95-65.52-39.29C45.4 171.83 36 138.83 36 103.79V48a12 12 0 0 1 16.34-11.2C66.66 42.38 95.53 51.7 128 51.7s61.34-9.32 75.66-14.88A12 12 0 0 1 220 48m-8 0a4 4 0 0 0-5.44-3.74C191.72 50 161.77 59.7 128 59.7S64.28 50 49.44 44.27A4.1 4.1 0 0 0 48 44a3.87 3.87 0 0 0-2.23.7A4 4 0 0 0 44 48v55.77C44 172.28 81.68 228 128 228s84-55.72 84-124.21Zm-97 74.66a4 4 0 1 0-6-5.34c-3.4 3.8-10.72 6.67-17 6.67s-13.62-2.87-17-6.67a4 4 0 0 0-6 5.33c4.92 5.5 14.37 9.34 23 9.34s18.06-3.83 23-9.32Z"></svg:path>`,
})
export class PhMaskSadThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMastodonLogoIcon],svg[ph-mastodon-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 32H72a40 40 0 0 0-40 40v120a40 40 0 0 0 40 40h88a8 8 0 0 0 0-16H72a24 24 0 0 1-24-24v-8h136a40 40 0 0 0 40-40V72a40 40 0 0 0-40-40m24 112a24 24 0 0 1-24 24H48V72a24 24 0 0 1 24-24h112a24 24 0 0 1 24 24Zm-24-40v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a32 32 0 0 1 56-21.13A32 32 0 0 1 184 104"></svg:path>`,
})
export class PhMastodonLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMastodonLogoBoldIcon],svg[ph-mastodon-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 28H72a44.05 44.05 0 0 0-44 44v120a44.05 44.05 0 0 0 44 44h88a12 12 0 0 0 0-24H72a20 20 0 0 1-20-20v-4h132a44.05 44.05 0 0 0 44-44V72a44.05 44.05 0 0 0-44-44m20 116a20 20 0 0 1-20 20H52V72a20 20 0 0 1 20-20h112a20 20 0 0 1 20 20Zm-16-40v32a12 12 0 0 1-24 0v-32a12 12 0 0 0-24 0v32a12 12 0 0 1-24 0v-32a12 12 0 0 0-24 0v32a12 12 0 0 1-24 0v-32a36 36 0 0 1 60-26.8a36 36 0 0 1 60 26.8"></svg:path>`,
})
export class PhMastodonLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMastodonLogoDuotoneIcon],svg[ph-mastodon-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 72v72a32 32 0 0 1-32 32H40V72a32 32 0 0 1 32-32h112a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M184 32H72a40 40 0 0 0-40 40v120a40 40 0 0 0 40 40h88a8 8 0 0 0 0-16H72a24 24 0 0 1-24-24v-8h136a40 40 0 0 0 40-40V72a40 40 0 0 0-40-40m24 112a24 24 0 0 1-24 24H48V72a24 24 0 0 1 24-24h112a24 24 0 0 1 24 24Zm-24-40v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a32 32 0 0 1 56-21.13A32 32 0 0 1 184 104"></svg:path></svg:g>`,
})
export class PhMastodonLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMastodonLogoFillIcon],svg[ph-mastodon-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 32H72a40 40 0 0 0-40 40v120a40 40 0 0 0 40 40h88a8 8 0 0 0 0-16H72a24 24 0 0 1-24-24v-8h136a40 40 0 0 0 40-40V72a40 40 0 0 0-40-40m0 104a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a16 16 0 0 0-32 0v32a8 8 0 0 1-16 0v-32a32 32 0 0 1 56-21.13A32 32 0 0 1 184 104Z"></svg:path>`,
})
export class PhMastodonLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMastodonLogoLightIcon],svg[ph-mastodon-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 34H72a38 38 0 0 0-38 38v120a38 38 0 0 0 38 38h88a6 6 0 0 0 0-12H72a26 26 0 0 1-26-26v-10h138a38 38 0 0 0 38-38V72a38 38 0 0 0-38-38m26 110a26 26 0 0 1-26 26H46V72a26 26 0 0 1 26-26h112a26 26 0 0 1 26 26Zm-28-40v32a6 6 0 0 1-12 0v-32a18 18 0 0 0-36 0v32a6 6 0 0 1-12 0v-32a18 18 0 0 0-36 0v32a6 6 0 0 1-12 0v-32a30 30 0 0 1 54-18a30 30 0 0 1 54 18"></svg:path>`,
})
export class PhMastodonLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMastodonLogoThinIcon],svg[ph-mastodon-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 36H72a36 36 0 0 0-36 36v120a36 36 0 0 0 36 36h88a4 4 0 0 0 0-8H72a28 28 0 0 1-28-28v-12h140a36 36 0 0 0 36-36V72a36 36 0 0 0-36-36m28 108a28 28 0 0 1-28 28H44V72a28 28 0 0 1 28-28h112a28 28 0 0 1 28 28Zm-32-40v32a4 4 0 0 1-8 0v-32a20 20 0 0 0-40 0v32a4 4 0 0 1-8 0v-32a20 20 0 0 0-40 0v32a4 4 0 0 1-8 0v-32a28 28 0 0 1 52-14.41A28 28 0 0 1 180 104"></svg:path>`,
})
export class PhMastodonLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMathOperationsIcon],svg[ph-math-operations-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 72a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8 104H80v-24a8 8 0 0 0-16 0v24H40a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0v-24h24a8 8 0 0 0 0-16m48 0h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16m64 16h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m-61.66-90.34a8 8 0 0 0 11.32 0L184 83.31l18.34 18.35a8 8 0 0 0 11.32-11.32L195.31 72l18.35-18.34a8 8 0 0 0-11.32-11.32L184 60.69l-18.34-18.35a8 8 0 0 0-11.32 11.32L172.69 72l-18.35 18.34a8 8 0 0 0 0 11.32"></svg:path>`,
})
export class PhMathOperationsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMathOperationsBoldIcon],svg[ph-math-operations-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 72a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m-12 100H84v-20a12 12 0 0 0-24 0v20H40a12 12 0 0 0 0 24h20v20a12 12 0 0 0 24 0v-20h20a12 12 0 0 0 0-24m48 4h64a12 12 0 0 0 0-24h-64a12 12 0 0 0 0 24m64 16h-64a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m-64.49-87.51a12 12 0 0 0 17 0L184 89l15.51 15.52a12 12 0 0 0 17-17L201 72l15.52-15.51a12 12 0 0 0-17-17L184 55l-15.51-15.49a12 12 0 0 0-17 17L167 72l-15.49 15.51a12 12 0 0 0 0 16.98"></svg:path>`,
})
export class PhMathOperationsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMathOperationsDuotoneIcon],svg[ph-math-operations-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M112 72a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m-8 104H80v-24a8 8 0 0 0-16 0v24H40a8 8 0 0 0 0 16h24v24a8 8 0 0 0 16 0v-24h24a8 8 0 0 0 0-16m48 0h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16m64 16h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16m-61.66-90.34a8 8 0 0 0 11.32 0L184 83.31l18.34 18.35a8 8 0 0 0 11.32-11.32L195.31 72l18.35-18.34a8 8 0 0 0-11.32-11.32L184 60.69l-18.34-18.35a8 8 0 0 0-11.32 11.32L172.69 72l-18.35 18.34a8 8 0 0 0 0 11.32"></svg:path></svg:g>`,
})
export class PhMathOperationsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMathOperationsFillIcon],svg[ph-math-operations-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-61.66 45.66a8 8 0 0 1 11.32-11.32L168 76.69l10.34-10.35a8 8 0 0 1 11.32 11.32L179.31 88l10.35 10.34a8 8 0 0 1-11.32 11.32L168 99.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L156.69 88ZM112 176H96v16a8 8 0 0 1-16 0v-16H64a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16m0-80H64a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m80 96h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m0-32h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhMathOperationsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMathOperationsLightIcon],svg[ph-math-operations-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M110 72a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6 106H78v-26a6 6 0 0 0-12 0v26H40a6 6 0 0 0 0 12h26v26a6 6 0 0 0 12 0v-26h26a6 6 0 0 0 0-12m48-4h64a6 6 0 0 0 0-12h-64a6 6 0 0 0 0 12m64 20h-64a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m-60.24-93.76a6 6 0 0 0 8.48 0L184 80.49l19.76 19.75a6 6 0 0 0 8.48-8.48L192.49 72l19.75-19.76a6 6 0 0 0-8.48-8.48L184 63.51l-19.76-19.75a6 6 0 0 0-8.48 8.48L175.51 72l-19.75 19.76a6 6 0 0 0 0 8.48"></svg:path>`,
})
export class PhMathOperationsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMathOperationsThinIcon],svg[ph-math-operations-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 72a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 108H76v-28a4 4 0 0 0-8 0v28H40a4 4 0 0 0 0 8h28v28a4 4 0 0 0 8 0v-28h28a4 4 0 0 0 0-8m48-8h64a4 4 0 0 0 0-8h-64a4 4 0 0 0 0 8m64 24h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m-58.83-97.17a4 4 0 0 0 5.66 0L184 77.66l21.17 21.17a4 4 0 1 0 5.66-5.66L189.66 72l21.17-21.17a4 4 0 1 0-5.66-5.66L184 66.34l-21.17-21.17a4 4 0 0 0-5.66 5.66L178.34 72l-21.17 21.17a4 4 0 0 0 0 5.66"></svg:path>`,
})
export class PhMathOperationsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMatrixLogoIcon],svg[ph-matrix-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 216a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16H48v160h16a8 8 0 0 1 8 8M216 32h-24a8 8 0 0 0 0 16h16v160h-16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-32 88a32 32 0 0 0-56-21.13a31.93 31.93 0 0 0-40.71-6.15A8 8 0 0 0 72 96v64a8 8 0 0 0 16 0v-40a16 16 0 0 1 32 0v40a8 8 0 0 0 16 0v-40a16 16 0 0 1 32 0v40a8 8 0 0 0 16 0Z"></svg:path>`,
})
export class PhMatrixLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMatrixLogoBoldIcon],svg[ph-matrix-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M76 216a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h24a12 12 0 0 1 0 24H52v152h12a12 12 0 0 1 12 12M216 28h-24a12 12 0 0 0 0 24h12v152h-12a12 12 0 0 0 0 24h24a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m-28 132v-40a36 36 0 0 0-60-26.8a35.91 35.91 0 0 0-39.51-5.68A12 12 0 0 0 68 96v64a12 12 0 0 0 24 0v-40a12 12 0 0 1 24 0v40a12 12 0 0 0 24 0v-40a12 12 0 0 1 24 0v40a12 12 0 0 0 24 0"></svg:path>`,
})
export class PhMatrixLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMatrixLogoDuotoneIcon],svg[ph-matrix-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176H40V40Z" opacity=".2"></svg:path><svg:path d="M72 216a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16H48v160h16a8 8 0 0 1 8 8M216 32h-24a8 8 0 0 0 0 16h16v160h-16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8m-32 88a32 32 0 0 0-56-21.13a31.93 31.93 0 0 0-40.71-6.15A8 8 0 0 0 72 96v64a8 8 0 0 0 16 0v-40a16 16 0 0 1 32 0v40a8 8 0 0 0 16 0v-40a16 16 0 0 1 32 0v40a8 8 0 0 0 16 0Z"></svg:path></svg:g>`,
})
export class PhMatrixLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMatrixLogoFillIcon],svg[ph-matrix-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 200H64a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-8v112h8a8 8 0 0 1 0 16m80-40a8 8 0 0 1-8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 1-16 0v-32a8 8 0 0 0-16 0v32a8 8 0 0 1-16 0v-48a8 8 0 0 1 13.66-5.65a23.94 23.94 0 0 1 26.34 3.78A24 24 0 0 1 168 120v32a8 8 0 0 1-8 8m40 32a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h8V72h-8a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhMatrixLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMatrixLogoLightIcon],svg[ph-matrix-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 46v164h18a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6V40a6 6 0 0 1 6-6h24a6 6 0 0 1 0 12Zm170-12h-24a6 6 0 0 0 0 12h18v164h-18a6 6 0 0 0 0 12h24a6 6 0 0 0 6-6V40a6 6 0 0 0-6-6m-64 56a30 30 0 0 0-24 12a30 30 0 0 0-42-6a6 6 0 0 0-12 0v64a6 6 0 0 0 12 0v-40a18 18 0 0 1 36 0v40a6 6 0 0 0 12 0v-40a18 18 0 0 1 36 0v40a6 6 0 0 0 12 0v-40a30 30 0 0 0-30-30"></svg:path>`,
})
export class PhMatrixLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMatrixLogoThinIcon],svg[ph-matrix-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44 44v168h20a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h24a4 4 0 0 1 0 8Zm172-8h-24a4 4 0 0 0 0 8h20v168h-20a4 4 0 0 0 0 8h24a4 4 0 0 0 4-4V40a4 4 0 0 0-4-4m-64 56a28 28 0 0 0-24 13.6a28 28 0 0 0-44-5.17V96a4 4 0 0 0-8 0v64a4 4 0 0 0 8 0v-40a20 20 0 0 1 40 0v40a4 4 0 0 0 8 0v-40a20 20 0 0 1 40 0v40a4 4 0 0 0 8 0v-40a28 28 0 0 0-28-28"></svg:path>`,
})
export class PhMatrixLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalIcon],svg[ph-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 96a88 88 0 1 0-144 67.83V240a8 8 0 0 0 11.58 7.16L128 225l44.43 22.21a8.1 8.1 0 0 0 3.57.79a8 8 0 0 0 8-8v-76.17A87.85 87.85 0 0 0 216 96M56 96a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72m112 131.06l-36.43-18.21a8 8 0 0 0-7.16 0L88 227.06v-52.69a87.89 87.89 0 0 0 80 0ZM128 152a56 56 0 1 0-56-56a56.06 56.06 0 0 0 56 56m0-96a40 40 0 1 1-40 40a40 40 0 0 1 40-40"></svg:path>`,
})
export class PhMedalIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalBoldIcon],svg[ph-medal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 96a92 92 0 1 0-152 69.69V240a12 12 0 0 0 17.37 10.73L128 229.42l42.64 21.31A12 12 0 0 0 188 240v-74.31A91.86 91.86 0 0 0 220 96M60 96a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68m104 124.59l-30.64-15.32a12 12 0 0 0-10.74 0L92 220.58v-39.92a92 92 0 0 0 72 0ZM128 148a52 52 0 1 0-52-52a52.06 52.06 0 0 0 52 52m0-80a28 28 0 1 1-28 28a28 28 0 0 1 28-28"></svg:path>`,
})
export class PhMedalBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalDuotoneIcon],svg[ph-medal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M176 96a48 48 0 1 1-48-48a48 48 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M216 96a88 88 0 1 0-144 67.83V240a8 8 0 0 0 11.58 7.16L128 225l44.43 22.21a8.1 8.1 0 0 0 3.57.79a8 8 0 0 0 8-8v-76.17A87.85 87.85 0 0 0 216 96M56 96a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72m112 131.06l-36.43-18.21a8 8 0 0 0-7.16 0L88 227.06v-52.69a87.89 87.89 0 0 0 80 0ZM128 152a56 56 0 1 0-56-56a56.06 56.06 0 0 0 56 56m0-96a40 40 0 1 1-40 40a40 40 0 0 1 40-40"></svg:path></svg:g>`,
})
export class PhMedalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalFillIcon],svg[ph-medal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 96a88 88 0 1 0-144 67.83V240a8 8 0 0 0 11.58 7.16L128 225l44.43 22.21a8.1 8.1 0 0 0 3.57.79a8 8 0 0 0 8-8v-76.17A87.85 87.85 0 0 0 216 96M56 96a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72m16 0a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"></svg:path>`,
})
export class PhMedalFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalLightIcon],svg[ph-medal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 96a86 86 0 1 0-140 66.87V240a6 6 0 0 0 2.85 5.1a5.93 5.93 0 0 0 3.15.9a6 6 0 0 0 2.68-.63L128 222.71l45.33 22.66A6 6 0 0 0 182 240v-77.13A85.87 85.87 0 0 0 214 96M54 96a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74m116 134.29l-39.33-19.66a6 6 0 0 0-5.36 0L86 230.29V171a85.75 85.75 0 0 0 84 0ZM128 150a54 54 0 1 0-54-54a54.06 54.06 0 0 0 54 54m0-96a42 42 0 1 1-42 42a42 42 0 0 1 42-42"></svg:path>`,
})
export class PhMedalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalMilitaryIcon],svg[ph-medal-military-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207 40H49a17 17 0 0 0-17 17v49.21a17 17 0 0 0 10 15.47l62.6 28.45a48 48 0 1 0 46.88 0L214 121.68a17 17 0 0 0 10-15.47V57a17 17 0 0 0-17-17m-47 16v72.67l-32 14.54l-32-14.54V56ZM48 106.21V57a1 1 0 0 1 1-1h31v65.39l-31.41-14.27a1 1 0 0 1-.59-.91M128 224a32 32 0 1 1 32-32a32 32 0 0 1-32 32m80-117.79a1 1 0 0 1-.59.91L176 121.39V56h31a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class PhMedalMilitaryIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalMilitaryBoldIcon],svg[ph-medal-military-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207 36H49a21 21 0 0 0-21 21v49.21a21 21 0 0 0 12.31 19.11l56 25.47a52 52 0 1 0 63.32 0l56-25.47A21 21 0 0 0 228 106.21V57a21 21 0 0 0-21-21m-79 102.82l-28-12.73V60h56v66.09ZM52 60h24v55.18l-24-10.91Zm76 160a28 28 0 1 1 28-28a28 28 0 0 1-28 28m76-115.73l-24 10.91V60h24Z"></svg:path>`,
})
export class PhMedalMilitaryBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalMilitaryDuotoneIcon],svg[ph-medal-military-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 192a40 40 0 1 1-40-40a40 40 0 0 1 40 40m39-144h-39v85.82l42.72-19.42a9 9 0 0 0 5.28-8.2V57a9 9 0 0 0-9-9M88 48H49a9 9 0 0 0-9 9v49.2a9 9 0 0 0 5.28 8.2L88 133.82Z" opacity=".2"></svg:path><svg:path d="M207 40H49a17 17 0 0 0-17 17v49.21a17 17 0 0 0 10 15.47l62.6 28.45a48 48 0 1 0 46.88 0L214 121.68a17 17 0 0 0 10-15.47V57a17 17 0 0 0-17-17m-47 16v72.67l-32 14.54l-32-14.54V56ZM48 106.21V57a1 1 0 0 1 1-1h31v65.39l-31.41-14.27a1 1 0 0 1-.59-.91M128 224a32 32 0 1 1 32-32a32 32 0 0 1-32 32m80-117.79a1 1 0 0 1-.59.91L176 121.39V56h31a1 1 0 0 1 1 1Z"></svg:path></svg:g>`,
})
export class PhMedalMilitaryDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalMilitaryFillIcon],svg[ph-medal-military-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207 40H49a17 17 0 0 0-17 17v49.21a17 17 0 0 0 10 15.47l62.6 28.45a48 48 0 1 0 46.88 0L214 121.68a17 17 0 0 0 10-15.47V57a17 17 0 0 0-17-17M96 56h64v72.67l-32 14.54l-32-14.54Zm32 168a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class PhMedalMilitaryFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalMilitaryLightIcon],svg[ph-medal-military-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207 42H49a15 15 0 0 0-15 15v49.21a15 15 0 0 0 8.79 13.65l66.4 30.14a46 46 0 1 0 37.62 0l66.4-30.18a15 15 0 0 0 8.79-13.61V57a15 15 0 0 0-15-15m-45 12v76l-34 15.45L94 130V54ZM46 106.21V57a3 3 0 0 1 3-3h33v70.5l-34.24-15.56a3 3 0 0 1-1.76-2.73M162 192a34 34 0 1 1-34-34a34 34 0 0 1 34 34m48-85.79a3 3 0 0 1-1.76 2.73L174 124.5V54h33a3 3 0 0 1 3 3Z"></svg:path>`,
})
export class PhMedalMilitaryLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalMilitaryThinIcon],svg[ph-medal-military-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M207 44H49a13 13 0 0 0-13 13v49.21A13 13 0 0 0 43.62 118l70.72 32.14a44 44 0 1 0 27.32 0L212.38 118a13 13 0 0 0 7.62-11.79V57a13 13 0 0 0-13-13m-43 8v79.24l-36 16.37l-36-16.37V52ZM44 106.21V57a5 5 0 0 1 5-5h35v75.61l-37.07-16.85a5 5 0 0 1-2.93-4.55M164 192a36 36 0 1 1-36-36a36 36 0 0 1 36 36m48-85.79a5 5 0 0 1-2.93 4.55L172 127.61V52h35a5 5 0 0 1 5 5Z"></svg:path>`,
})
export class PhMedalMilitaryThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMedalThinIcon],svg[ph-medal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 96a84 84 0 1 0-136 65.9V240a4 4 0 0 0 4 4a4.05 4.05 0 0 0 1.79-.42L128 220.47l46.22 23.11A4 4 0 0 0 180 240v-78.1A83.89 83.89 0 0 0 212 96m-40 137.53l-42.22-21.11a4 4 0 0 0-3.58 0L84 233.53v-66a83.8 83.8 0 0 0 88 0ZM128 172a76 76 0 1 1 76-76a76.08 76.08 0 0 1-76 76m0-128a52 52 0 1 0 52 52a52.06 52.06 0 0 0-52-52m0 96a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhMedalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMediumLogoIcon],svg[ph-medium-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 64a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 112a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48M184 64c-5.68 0-16.4 2.76-24.32 21.25C154.73 96.8 152 112 152 128s2.73 31.2 7.68 42.75C167.6 189.24 178.32 192 184 192s16.4-2.76 24.32-21.25C213.27 159.2 216 144 216 128s-2.73-31.2-7.68-42.75C200.4 66.76 189.68 64 184 64m0 112c-5.64 0-16-18.22-16-48s10.36-48 16-48s16 18.22 16 48s-10.36 48-16 48m64-104v112a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhMediumLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMediumLogoBoldIcon],svg[ph-medium-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M68 60a68 68 0 1 0 68 68a68.07 68.07 0 0 0-68-68m0 112a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44M184 60c-23.63 0-36 34.21-36 68s12.37 68 36 68s36-34.21 36-68s-12.37-68-36-68m0 111.87c-3.74-2.16-12-17.09-12-43.87s8.26-41.71 12-43.87c3.74 2.16 12 17.09 12 43.87s-8.26 41.71-12 43.87M256 72v112a12 12 0 0 1-24 0V72a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhMediumLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMediumLogoDuotoneIcon],svg[ph-medium-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 128a56 56 0 1 1-56-56a56 56 0 0 1 56 56m56-56c-13.25 0-24 25.07-24 56s10.75 56 24 56s24-25.07 24-56s-10.75-56-24-56" opacity=".2"></svg:path><svg:path d="M72 64a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 112a48 48 0 1 1 48-48a48.05 48.05 0 0 1-48 48M184 64c-5.68 0-16.4 2.76-24.32 21.25C154.73 96.8 152 112 152 128s2.73 31.2 7.68 42.75C167.6 189.24 178.32 192 184 192s16.4-2.76 24.32-21.25C213.27 159.2 216 144 216 128s-2.73-31.2-7.68-42.75C200.4 66.76 189.68 64 184 64m0 112c-5.64 0-16-18.22-16-48s10.36-48 16-48s16 18.22 16 48s-10.36 48-16 48m64-104v112a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhMediumLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMediumLogoFillIcon],svg[ph-medium-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 128a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64m48-64c-5.68 0-16.4 2.76-24.32 21.25C154.73 96.8 152 112 152 128s2.73 31.2 7.68 42.75C167.6 189.24 178.32 192 184 192s16.4-2.76 24.32-21.25C213.27 159.2 216 144 216 128s-2.73-31.2-7.68-42.75C200.4 66.76 189.68 64 184 64m56 0a8 8 0 0 0-8 8v112a8 8 0 0 0 16 0V72a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhMediumLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMediumLogoLightIcon],svg[ph-medium-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 66a62 62 0 1 0 62 62a62.07 62.07 0 0 0-62-62m0 112a50 50 0 1 1 50-50a50.06 50.06 0 0 1-50 50M184 66c-17.1 0-30 26.65-30 62s12.9 62 30 62s30-26.65 30-62s-12.9-62-30-62m0 112c-7.34 0-18-19.48-18-50s10.66-50 18-50s18 19.48 18 50s-10.66 50-18 50m62-106v112a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhMediumLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMediumLogoThinIcon],svg[ph-medium-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 68a60 60 0 1 0 60 60a60.07 60.07 0 0 0-60-60m0 112a52 52 0 1 1 52-52a52.06 52.06 0 0 1-52 52M184 68c-16 0-28 25.79-28 60s12 60 28 60s28-25.79 28-60s-12-60-28-60m0 112c-9.46 0-20-21.36-20-52s10.54-52 20-52s20 21.36 20 52s-10.54 52-20 52m60-108v112a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhMediumLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneIcon],svg[ph-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 120a48.05 48.05 0 0 0-48-48h-39.8c-2.91-.17-53.62-3.74-101.91-44.24A16 16 0 0 0 32 40v160a16 16 0 0 0 26.29 12.25c37.77-31.68 77-40.76 93.71-43.3v31.72a16 16 0 0 0 7.12 13.33l11 7.33A16 16 0 0 0 194.5 212l11.77-44.36A48.07 48.07 0 0 0 248 120M48 199.93V40c42.81 35.91 86.63 45 104 47.24v65.48c-17.35 2.28-61.16 11.35-104 47.21m131 8v.11l-11-7.33V168h21.6ZM200 152h-32V88h32a32 32 0 1 1 0 64"></svg:path>`,
})
export class PhMegaphoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneBoldIcon],svg[ph-megaphone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M252 120a52.06 52.06 0 0 0-52-52h-39.68c-3.44-.21-52.6-4-99.46-43.3A20 20 0 0 0 28 40v160a19.8 19.8 0 0 0 11.54 18.12a19.86 19.86 0 0 0 21.32-2.81A192.9 192.9 0 0 1 144 174.47v26.2a20 20 0 0 0 8.9 16.64a11 11 0 0 0 1.39.8l14.44 7.06A20 20 0 0 0 198.37 213l11.09-41.82A52.07 52.07 0 0 0 252 120M52 191.63V48.4c36.17 28.07 72.17 38.1 92 41.66V150c-19.83 3.52-55.83 13.55-92 41.63m124.39 10.57l-8.39-4.1V172h16.4ZM200 148h-32V92h32a28 28 0 1 1 0 56"></svg:path>`,
})
export class PhMegaphoneBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneDuotoneIcon],svg[ph-megaphone-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M240 120a40 40 0 0 1-40 40h-40V80h40a40 40 0 0 1 40 40" opacity=".2"></svg:path><svg:path d="M248 120a48.05 48.05 0 0 0-48-48h-39.8c-2.91-.17-53.62-3.74-101.91-44.24A16 16 0 0 0 32 40v160a16 16 0 0 0 26.29 12.25c37.77-31.68 77-40.76 93.71-43.3v31.72a16 16 0 0 0 7.12 13.33l11 7.33A16 16 0 0 0 194.5 212l11.77-44.36A48.07 48.07 0 0 0 248 120M48 199.93V40c42.81 35.91 86.63 45 104 47.24v65.48c-17.35 2.28-61.16 11.35-104 47.21m131 8v.11l-11-7.33V168h21.6ZM200 152h-32V88h32a32 32 0 1 1 0 64"></svg:path></svg:g>`,
})
export class PhMegaphoneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneFillIcon],svg[ph-megaphone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 72h-39.8c-2.91-.17-53.62-3.74-101.91-44.24A16 16 0 0 0 32 40v160a16 16 0 0 0 26.29 12.25c37.77-31.68 77-40.76 93.71-43.3v31.72a16 16 0 0 0 7.12 13.33l11 7.33A16 16 0 0 0 194.5 212l11.77-44.36A48 48 0 0 0 200 72m-21 135.89v.11l-11-7.33V168h21.6ZM200 152h-32V88h32a32 32 0 1 1 0 64"></svg:path>`,
})
export class PhMegaphoneFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneLightIcon],svg[ph-megaphone-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 120a46.05 46.05 0 0 0-46-46h-39.85c-2.58-.15-54.1-3.57-103.15-44.71A14 14 0 0 0 34 40v160a13.85 13.85 0 0 0 8.07 12.68A14.2 14.2 0 0 0 48 214a13.9 13.9 0 0 0 9-3.3c40-33.52 81.57-42 97-44.07v34a14 14 0 0 0 6.23 11.65l11 7.33a14 14 0 0 0 21.32-8.17l12.13-45.71A46.07 46.07 0 0 0 246 120M49.29 201.52A2 2 0 0 1 46 200V40a1.9 1.9 0 0 1 1.15-1.8A2.1 2.1 0 0 1 48 38a1.9 1.9 0 0 1 1.26.48c44 36.92 89 45.19 104.71 47v69c-15.68 1.85-60.67 10.13-104.68 47.04m131.64 7a2 2 0 0 1-3.05 1.18l-11-7.33a2 2 0 0 1-.89-1.67V166h26.2ZM200 154h-34V86h34a34 34 0 1 1 0 68"></svg:path>`,
})
export class PhMegaphoneLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneSimpleIcon],svg[ph-megaphone-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.54 86.66l-176.06-54A16 16 0 0 0 32 48v144a16 16 0 0 0 16 16a16 16 0 0 0 4.52-.65L136 181.73V192a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-29.9l28.54-8.75A16.09 16.09 0 0 0 240 138v-36a16.09 16.09 0 0 0-11.46-15.34M136 165l-88 27V48l88 27Zm48 27h-32v-15.18l32-9.82Zm40-54h-.11L152 160.08V79.92l71.89 22h.11v36Z"></svg:path>`,
})
export class PhMegaphoneSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneSimpleBoldIcon],svg[ph-megaphone-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m229.7 82.84l-175.94-54l-.16-.05A20 20 0 0 0 28 48v144a20 20 0 0 0 19.94 20a20.4 20.4 0 0 0 5.66-.81h.16l78.24-24V196a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-30.94l25.7-7.89A20.1 20.1 0 0 0 244 138v-36a20.1 20.1 0 0 0-14.3-19.16M52 186.58V53.43L132 78v84ZM180 192h-24v-12.22l24-7.36Zm40-56.95l-64 19.63V85.33L220 105Z"></svg:path>`,
})
export class PhMegaphoneSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneSimpleDuotoneIcon],svg[ph-megaphone-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M144 69.09v101.82l-93.76 28.76A8 8 0 0 1 40 192V48a8 8 0 0 1 10.24-7.67Z" opacity=".2"></svg:path><svg:path d="m228.54 86.66l-176.06-54A16 16 0 0 0 32 48v144a16 16 0 0 0 16 16a16 16 0 0 0 4.52-.65L136 181.73V192a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-29.9l28.54-8.75A16.09 16.09 0 0 0 240 138v-36a16.09 16.09 0 0 0-11.46-15.34M136 165l-88 27V48l88 27Zm48 27h-32v-15.18l32-9.82Zm40-54h-.11L152 160.08V79.92l71.89 22h.11v36Z"></svg:path></svg:g>`,
})
export class PhMegaphoneSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneSimpleFillIcon],svg[ph-megaphone-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.54 86.66l-176.06-54A16 16 0 0 0 32 48v144a16 16 0 0 0 16 16a16 16 0 0 0 4.52-.65L136 181.73V192a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-29.9l28.54-8.75A16.09 16.09 0 0 0 240 138v-36a16.09 16.09 0 0 0-11.46-15.34M184 192h-32v-15.18l32-9.82Zm40-54h-.11L152 160.08V79.91L223.89 102h.11z"></svg:path>`,
})
export class PhMegaphoneSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneSimpleLightIcon],svg[ph-megaphone-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228 88.59l-176.08-54A14 14 0 0 0 34 48v144a14 14 0 0 0 14 14a14.6 14.6 0 0 0 4-.59L138 179v13a14 14 0 0 0 14 14h32a14 14 0 0 0 14-14v-31.38l30-9.19A14.07 14.07 0 0 0 238 138v-36a14 14 0 0 0-10-13.41M48.56 193.92a2 2 0 0 1-1.76-.32a2 2 0 0 1-.8-1.6V48a2 2 0 0 1 .8-1.6A2.05 2.05 0 0 1 48 46a1.8 1.8 0 0 1 .49.08L138 73.53v92.95ZM186 192a2 2 0 0 1-2 2h-32a2 2 0 0 1-2-2v-16.65l36-11Zm40-54a2 2 0 0 1-1.44 1.92h-.08L150 162.8V77.21l74.56 22.87A2 2 0 0 1 226 102Z"></svg:path>`,
})
export class PhMegaphoneSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneSimpleThinIcon],svg[ph-megaphone-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m227.41 90.5l-176-54A12 12 0 0 0 36 48v144a12 12 0 0 0 12 12a12.4 12.4 0 0 0 3.45-.5L140 176.32V192a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-32.86l31.39-9.63A12.06 12.06 0 0 0 236 138v-36a12 12 0 0 0-8.59-11.5M49.12 195.84A4 4 0 0 1 44 192V48a4 4 0 0 1 1.6-3.2A4 4 0 0 1 48 44a4 4 0 0 1 1.07.15L140 72.05V168ZM188 192a4 4 0 0 1-4 4h-32a4 4 0 0 1-4-4v-18.13l40-12.27Zm40-54a4 4 0 0 1-2.88 3.84h-.05L148 165.5v-91l77.12 23.66A4 4 0 0 1 228 102Z"></svg:path>`,
})
export class PhMegaphoneSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneThinIcon],svg[ph-megaphone-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 76h-39.9c-2.19-.11-54.55-3.38-104.38-45.17A12 12 0 0 0 36 40v160a11.88 11.88 0 0 0 6.92 10.87A12.2 12.2 0 0 0 48 212a11.93 11.93 0 0 0 7.69-2.83c42.46-35.62 86.76-43.25 100.28-44.8v36.29a12 12 0 0 0 5.34 10l11 7.33a12 12 0 0 0 18.28-7l12.49-47.09A44 44 0 0 0 200 76m-44 80.3c-13.53 1.35-60 8.62-105.42 46.75A4 4 0 0 1 44 200V40a4 4 0 0 1 2.3-3.62a4.3 4.3 0 0 1 1.75-.38a3.88 3.88 0 0 1 2.53 1C96 75.09 142.47 82.36 156 83.71Zm26.87 52.7a4 4 0 0 1-6.1 2.36l-11-7.33a4 4 0 0 1-1.78-3.33V164h30.8ZM200 156h-36V84h36a36 36 0 0 1 0 72"></svg:path>`,
})
export class PhMegaphoneThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemberOfIcon],svg[ph-member-of-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 136H56.46A72.08 72.08 0 0 0 128 200h72a8 8 0 0 1 0 16h-72a88 88 0 0 1 0-176h72a8 8 0 0 1 0 16h-72a72.08 72.08 0 0 0-71.54 64H200a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhMemberOfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemberOfBoldIcon],svg[ph-member-of-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 140H61.08A68.1 68.1 0 0 0 128 196h72a12 12 0 0 1 0 24h-72a92 92 0 0 1 0-184h72a12 12 0 0 1 0 24h-72a68.1 68.1 0 0 0-66.92 56H200a12 12 0 0 1 0 24"></svg:path>`,
})
export class PhMemberOfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemberOfDuotoneIcon],svg[ph-member-of-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 48v160h-72a80 80 0 0 1-80-80a80 80 0 0 1 80-80Z" opacity=".2"></svg:path><svg:path d="M200 136H56.46A72.08 72.08 0 0 0 128 200h72a8 8 0 0 1 0 16h-72a88 88 0 0 1 0-176h72a8 8 0 0 1 0 16h-72a72.08 72.08 0 0 0-71.54 64H200a8 8 0 0 1 0 16"></svg:path></svg:g>`,
})
export class PhMemberOfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemberOfFillIcon],svg[ph-member-of-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 88a8 8 0 0 1 0 16H80.68A48.07 48.07 0 0 0 128 176h48a8 8 0 0 1 0 16h-48a64 64 0 0 1 0-128h48a8 8 0 0 1 0 16h-48a48.07 48.07 0 0 0-47.32 40Z"></svg:path>`,
})
export class PhMemberOfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemberOfLightIcon],svg[ph-member-of-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 134H54.26A74.09 74.09 0 0 0 128 202h72a6 6 0 0 1 0 12h-72a86 86 0 0 1 0-172h72a6 6 0 0 1 0 12h-72a74.09 74.09 0 0 0-73.74 68H200a6 6 0 0 1 0 12"></svg:path>`,
})
export class PhMemberOfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemberOfThinIcon],svg[ph-member-of-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 132H52.11A76.09 76.09 0 0 0 128 204h72a4 4 0 0 1 0 8h-72a84 84 0 0 1 0-168h72a4 4 0 0 1 0 8h-72a76.09 76.09 0 0 0-75.89 72H200a4 4 0 0 1 0 8"></svg:path>`,
})
export class PhMemberOfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemoryIcon],svg[ph-memory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56H24A16 16 0 0 0 8 72v128a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0V72a16 16 0 0 0-16-16M24 72h208v96H24Zm88 80a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8H48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8Zm-56-48h48v32H56Zm88 48h64a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8m8-48h48v32h-48Z"></svg:path>`,
})
export class PhMemoryIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemoryBoldIcon],svg[ph-memory-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 52H24A20 20 0 0 0 4 72v128a12 12 0 0 0 24 0v-12h20v12a12 12 0 0 0 24 0v-12h20v12a12 12 0 0 0 24 0v-12h24v12a12 12 0 0 0 24 0v-12h20v12a12 12 0 0 0 24 0v-12h20v12a12 12 0 0 0 24 0V72a20 20 0 0 0-20-20M28 76h200v88H28Zm92 64v-40a12 12 0 0 0-12-12H56a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h52a12 12 0 0 0 12-12m-24-12H68v-16h28Zm52 24h52a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12h-52a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12m12-40h28v16h-28Z"></svg:path>`,
})
export class PhMemoryBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemoryDuotoneIcon],svg[ph-memory-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 64H24a8 8 0 0 0-8 8v104h224V72a8 8 0 0 0-8-8m-120 80H48V96h64Zm96 0h-64V96h64Z" opacity=".2"></svg:path><svg:path d="M232 56H24A16 16 0 0 0 8 72v128a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0V72a16 16 0 0 0-16-16M24 72h208v96H24Zm88 80a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8H48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8Zm-56-48h48v32H56Zm88 48h64a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8m8-48h48v32h-48Z"></svg:path></svg:g>`,
})
export class PhMemoryDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemoryFillIcon],svg[ph-memory-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 56H24A16 16 0 0 0 8 72v128a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0V72a16 16 0 0 0-16-16m-24 40v48h-64V96Zm-96 0v48H48V96Z"></svg:path>`,
})
export class PhMemoryFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemoryLightIcon],svg[ph-memory-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 58H24a14 14 0 0 0-14 14v128a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0V72a14 14 0 0 0-14-14M22 72a2 2 0 0 1 2-2h208a2 2 0 0 1 2 2v98H22Zm90 78a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6H48a6 6 0 0 0-6 6v48a6 6 0 0 0 6 6Zm-58-48h52v36H54Zm90 48h64a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6h-64a6 6 0 0 0-6 6v48a6 6 0 0 0 6 6m6-48h52v36h-52Z"></svg:path>`,
})
export class PhMemoryLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMemoryThinIcon],svg[ph-memory-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 60H24a12 12 0 0 0-12 12v128a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0v-20h24v20a4 4 0 0 0 8 0V72a12 12 0 0 0-12-12M20 72a4 4 0 0 1 4-4h208a4 4 0 0 1 4 4v100H20Zm92 76a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4H48a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4Zm-60-48h56v40H52Zm92 48h64a4 4 0 0 0 4-4V96a4 4 0 0 0-4-4h-64a4 4 0 0 0-4 4v48a4 4 0 0 0 4 4m4-48h56v40h-56Z"></svg:path>`,
})
export class PhMemoryThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMessengerLogoIcon],svg[ph-messenger-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M181.66 106.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0L112 123.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0L144 132.69l26.34-26.35a8 8 0 0 1 11.32 0M232 128a104 104 0 0 1-152.88 91.82l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104 104 0 1 1 232 128m-16 0a88 88 0 1 0-164.19 44.06a8 8 0 0 1 .66 6.54L40 216l37.4-12.48a8 8 0 0 1 6.54.67A88 88 0 0 0 216 128"></svg:path>`,
})
export class PhMessengerLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMessengerLogoBoldIcon],svg[ph-messenger-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m184.49 120.49l-32 32a12 12 0 0 1-17 0L112 129l-23.51 23.49a12 12 0 0 1-17-17l32-32a12 12 0 0 1 17 0L144 127l23.51-23.52a12 12 0 0 1 17 17ZM236 128a108 108 0 0 1-157.23 96.15L46.34 235A20 20 0 0 1 21 209.66l10.81-32.43A108 108 0 1 1 236 128m-24 0a84 84 0 1 0-156.73 42.05a12 12 0 0 1 1 9.82l-9.93 29.79l29.79-9.93a12.1 12.1 0 0 1 3.8-.62a12 12 0 0 1 6 1.62A84 84 0 0 0 212 128"></svg:path>`,
})
export class PhMessengerLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMessengerLogoDuotoneIcon],svg[ph-messenger-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 0 1-144.07 83.11l-37.39 12.47a8 8 0 0 1-10.12-10.12l12.47-37.39A96 96 0 1 1 224 128" opacity=".2"></svg:path><svg:path d="M181.66 106.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0L112 123.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0L144 132.69l26.34-26.35a8 8 0 0 1 11.32 0M232 128a104 104 0 0 1-152.88 91.82l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104 104 0 1 1 232 128m-16 0a88 88 0 1 0-164.19 44.06a8 8 0 0 1 .66 6.54L40 216l37.4-12.48a8 8 0 0 1 6.54.67A88 88 0 0 0 216 128"></svg:path></svg:g>`,
})
export class PhMessengerLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMessengerLogoFillIcon],svg[ph-messenger-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24m53.66 93.66l-32 32a8 8 0 0 1-11.32 0L112 123.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0L144 132.69l26.34-26.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhMessengerLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMessengerLogoLightIcon],svg[ph-messenger-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180.24 107.76a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48 0L112 120.49l-27.76 27.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0L144 135.51l27.76-27.75a6 6 0 0 1 8.48 0M230 128a102 102 0 0 1-150.69 89.65l-34.87 11.62a14 14 0 0 1-17.71-17.71l11.62-34.87A102 102 0 1 1 230 128m-12 0a90 90 0 1 0-167.92 45.06a6 6 0 0 1 .5 4.91l-12.46 37.38a2 2 0 0 0 2.53 2.53L78 205.42a6.2 6.2 0 0 1 1.9-.31a6.1 6.1 0 0 1 3 .81A90 90 0 0 0 218 128"></svg:path>`,
})
export class PhMessengerLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMessengerLogoThinIcon],svg[ph-messenger-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M178.83 109.17a4 4 0 0 1 0 5.66l-32 32a4 4 0 0 1-5.66 0L112 117.66l-29.17 29.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0L144 138.34l29.17-29.17a4 4 0 0 1 5.66 0M228 128a100 100 0 0 1-148.5 87.47l-35.69 11.9a12 12 0 0 1-15.18-15.18l11.9-35.69A100 100 0 1 1 228 128m-8 0a92 92 0 1 0-171.65 46.07a4 4 0 0 1 .33 3.27l-12.46 37.38a4 4 0 0 0 5.06 5.06l37.38-12.46a4 4 0 0 1 1.27-.21a4.05 4.05 0 0 1 2 .54A92 92 0 0 0 220 128"></svg:path>`,
})
export class PhMessengerLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetaLogoIcon],svg[ph-meta-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 149.31c0 16.11-3.17 29.89-9.17 39.84c-7.43 12.33-19 18.85-33.39 18.85c-27.94 0-47.78-37-68.78-76.22C111.64 100 92.35 64 74 64c-9.38 0-19.94 10-28.25 26.67A138.2 138.2 0 0 0 32 149.31c0 13.2 2.38 24.12 6.88 31.58S49.82 192 58.56 192c15.12 0 30.85-24.54 44.23-48.55a8 8 0 0 1 14 7.8C101.46 178.71 83.07 208 58.56 208c-14.41 0-26-6.52-33.39-18.85c-6-10-9.17-23.73-9.17-39.84a154.8 154.8 0 0 1 15.42-65.77C42.82 60.62 57.94 48 74 48c27.94 0 47.77 37 68.78 76.22C159.79 156 179.08 192 197.44 192c8.74 0 15.18-3.63 19.68-11.11s6.88-18.38 6.88-31.58a138.2 138.2 0 0 0-13.74-58.64C202 74 191.39 64 182 64c-8.36 0-17.68 7.48-28.51 22.88a8 8 0 1 1-13.08-9.21c9-12.74 23-29.67 41.59-29.67c16.05 0 31.17 12.62 42.57 35.54A154.8 154.8 0 0 1 240 149.31"></svg:path>`,
})
export class PhMetaLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetaLogoBoldIcon],svg[ph-meta-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 149.31c0 16.84-3.37 31.33-9.75 41.91c-8.19 13.59-20.92 20.78-36.81 20.78c-30.33 0-50.72-38.05-72.3-78.33C109.46 104.41 90 68 74 68c-7.71 0-17.16 9.37-24.66 24.45A133.8 133.8 0 0 0 36 149.31c0 12.3 2.24 22.78 6.3 29.52c3.77 6.26 8.94 9.17 16.26 9.17c13.75 0 30.63-29 36.18-38.49a12 12 0 0 1 20.74 12.09c-8.91 15.28-16.53 26-24 33.78C80.75 206.56 70 212 58.56 212c-15.89 0-28.62-7.19-36.81-20.78c-6.38-10.58-9.75-25.07-9.75-41.91C12 105.34 35.58 44 74 44c30.33 0 50.72 38.05 72.3 78.33C162 151.59 181.47 188 197.44 188c7.32 0 12.49-2.91 16.26-9.17c4.06-6.74 6.3-17.22 6.3-29.52a133.8 133.8 0 0 0-13.33-56.86C199.17 77.37 189.72 68 182 68c-5.72 0-12.61 5-20.49 14.83a12 12 0 0 1-18.74-15C155.62 51.8 168.45 44 182 44c17.65 0 34 13.41 46.15 37.76A159 159 0 0 1 244 149.31"></svg:path>`,
})
export class PhMetaLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetaLogoDuotoneIcon],svg[ph-meta-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m128.49 114.6l-18.71 32.75C93.88 175.86 77.52 200 58.56 200C-3.16 200 27.7 56 74 56c20.25 0 37.56 27.58 54.49 58.6M182 56c-12.62 0-24.1 10.7-35 26.27l-18.51 32.33c21.76 39.86 42.91 85.4 68.95 85.4C259.16 200 228.3 56 182 56" opacity=".2"></svg:path><svg:path d="M240 149.31c0 16.11-3.17 29.89-9.17 39.84c-7.43 12.33-19 18.85-33.39 18.85c-27.94 0-47.78-37-68.78-76.22C111.64 100 92.35 64 74 64c-9.38 0-19.94 10-28.25 26.67A138.2 138.2 0 0 0 32 149.31c0 13.2 2.38 24.12 6.88 31.58S49.82 192 58.56 192c15.12 0 30.85-24.54 44.23-48.55a8 8 0 0 1 14 7.8C101.46 178.71 83.07 208 58.56 208c-14.41 0-26-6.52-33.39-18.85c-6-10-9.17-23.73-9.17-39.84a154.8 154.8 0 0 1 15.42-65.77C42.82 60.62 57.94 48 74 48c27.94 0 47.77 37 68.78 76.22C159.79 156 179.08 192 197.44 192c8.74 0 15.18-3.63 19.68-11.11s6.88-18.38 6.88-31.58a138.2 138.2 0 0 0-13.74-58.64C202 74 191.39 64 182 64c-8.36 0-17.68 7.48-28.51 22.88a8 8 0 1 1-13.08-9.21c9-12.74 23-29.67 41.59-29.67c16.05 0 31.17 12.62 42.57 35.54A154.8 154.8 0 0 1 240 149.31"></svg:path></svg:g>`,
})
export class PhMetaLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetaLogoFillIcon],svg[ph-meta-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-14.77 130.26c-5.63 9-14.33 13.74-25.16 13.74c-20.73 0-34.81-25.31-49.72-52.11C115.47 112.33 101.93 88 90.61 88C78.18 88 64 116.88 64 142.21c0 8.26 1.5 15 4.34 19.56C71 166 74.68 168 79.93 168c6.08 0 13.52-7 22.74-21.51a8 8 0 0 1 13.49 8.59C99.84 180.71 88.22 184 79.93 184c-10.83 0-19.53-4.75-25.16-13.74c-4.43-7.08-6.77-16.78-6.77-28a103.1 103.1 0 0 1 11-45.2C67.34 80.9 78.57 72 90.61 72c20.73 0 34.81 25.31 49.72 52.11c10.88 19.55 24.42 43.89 35.74 43.89c5.25 0 8.93-2 11.59-6.23c2.84-4.53 4.34-11.3 4.34-19.56C192 116.88 177.82 88 165.39 88c-3.4 0-7.35 2.31-11.74 6.88a8 8 0 1 1-11.54-11.09C149.74 75.86 157.35 72 165.39 72c12 0 23.27 8.9 31.62 25.06a103.1 103.1 0 0 1 11 45.15c-.01 11.27-2.35 20.97-6.78 28.05"></svg:path>`,
})
export class PhMetaLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetaLogoLightIcon],svg[ph-meta-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 149.31c0 15.75-3.07 29.17-8.88 38.81c-7.05 11.7-18 17.88-31.68 17.88c-26.74 0-46.3-36.51-67-75.17C113.14 98.57 93.55 62 74 62c-23.28 0-44 48.83-44 87.31c0 13.57 2.48 24.84 7.16 32.62c4.9 8.12 11.9 12.07 21.4 12.07c16.16 0 32.31-25.06 46-49.57a6 6 0 0 1 10.44 5.84C100 177.23 82 206 58.56 206c-13.67 0-24.63-6.18-31.68-17.88c-5.81-9.64-8.88-23.06-8.88-38.81C18 108.82 39.81 50 74 50c26.74 0 46.3 36.51 67 75.17c17.29 32.26 36.88 68.83 56.44 68.83c9.5 0 16.5-3.95 21.4-12.07c4.68-7.78 7.16-19.05 7.16-32.62C226 110.83 205.29 62 182 62c-9 0-18.91 7.76-30.14 23.73a6 6 0 0 1-9.82-6.91C150.75 66.45 164.37 50 182 50c34.19 0 56 58.82 56 99.31"></svg:path>`,
})
export class PhMetaLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetaLogoThinIcon],svg[ph-meta-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 149.31c0 15.38-3 28.45-8.6 37.78c-6.67 11.06-17 16.91-30 16.91c-25.55 0-44.83-36-65.25-74.11C113.78 95.53 94.74 60 74 60c-11.1 0-22.7 10.53-31.84 28.89A142.2 142.2 0 0 0 28 149.31c0 13.93 2.58 25.56 7.45 33.65c5.22 8.65 13 13 23.11 13c17.15 0 33.07-24.32 47.73-50.6a4 4 0 1 1 7 3.9C98.52 175.76 80.9 204 58.56 204c-12.93 0-23.29-5.85-30-16.91C23 177.76 20 164.69 20 149.31a150.7 150.7 0 0 1 15-64C45.69 63.83 59.54 52 74 52c25.54 0 44.83 36 65.25 74.11c18.41 34.36 37.44 69.89 58.2 69.89c10.12 0 17.89-4.39 23.11-13c4.87-8.09 7.45-19.72 7.45-33.65a142.2 142.2 0 0 0-14.16-60.42C204.7 70.53 193.1 60 182 60c-9.75 0-20.15 8-31.78 24.57a4 4 0 0 1-6.54-4.6c13.42-19.08 25.6-28 38.32-28c14.45 0 28.3 11.83 39 33.32a150.7 150.7 0 0 1 15 64.02"></svg:path>`,
})
export class PhMetaLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMeteorIcon],svg[ph-meteor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 120a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m125.66-61.66a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0M160 136a8 8 0 0 1-5.66-13.66l24-24a8 8 0 0 1 11.32 11.32l-24 24A8 8 0 0 1 160 136m69.66-66.34l-16 16a8 8 0 0 1-11.32-11.32l16-16a8 8 0 0 1 11.32 11.32M122.34 90.34l72-72a8 8 0 1 1 11.32 11.32l-72 72a8 8 0 0 1-11.32-11.32m24.57 109.26a8 8 0 0 1 0 11.31A72 72 0 1 1 45.09 109.09l82.74-82.75a8 8 0 1 1 11.32 11.32L56.4 120.4a56 56 0 0 0 79.2 79.2a8 8 0 0 1 11.31 0"></svg:path>`,
})
export class PhMeteorIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMeteorBoldIcon],svg[ph-meteor-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 124a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 48a12 12 0 1 1 12-12a12 12 0 0 1-12 12m128.49-52.49a12 12 0 0 1 0 17l-48 48a12 12 0 0 1-17-17l48-48a12 12 0 0 1 17 0m-36-20a12 12 0 0 1 0 17l-20 20a12 12 0 0 1-17-17l20-20a12 12 0 0 1 17 0m44-27l-16 16a12 12 0 0 1-17-17l16-16a12 12 0 0 1 17 17m-113 15l72-72a12 12 0 0 1 17 17l-72 72a12 12 0 1 1-17-17m30.23 109.26a12 12 0 0 1 0 17A76 76 0 1 1 42.26 106.26L125 23.51a12 12 0 1 1 17 17l-82.77 82.72a52 52 0 0 0 73.54 73.54a12 12 0 0 1 16.97 0Z"></svg:path>`,
})
export class PhMeteorBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMeteorDuotoneIcon],svg[ph-meteor-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 160a32 32 0 1 1-32-32a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M96 120a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m125.66-61.66a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0m-56 11.32a8 8 0 0 1-11.32-11.32l24-24a8 8 0 0 1 11.32 11.32Zm64-64l-16 16a8 8 0 0 1-11.32-11.32l16-16a8 8 0 0 1 11.32 11.32M122.34 90.34l72-72a8 8 0 1 1 11.32 11.32l-72 72a8 8 0 0 1-11.32-11.32m24.57 109.26a8 8 0 0 1 0 11.31A72 72 0 1 1 45.09 109.09l82.74-82.75a8 8 0 1 1 11.32 11.32L56.4 120.4a56 56 0 0 0 79.2 79.2a8 8 0 0 1 11.31 0"></svg:path></svg:g>`,
})
export class PhMeteorDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMeteorFillIcon],svg[ph-meteor-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 160a40 40 0 1 1-40-40a40 40 0 0 1 40 40m74.34-37.66l-48 48a8 8 0 0 0 11.32 11.32l48-48a8 8 0 0 0-11.32-11.32m-20.68-12.68a8 8 0 0 0-11.32-11.32l-24 24a8 8 0 0 0 11.32 11.32Zm40-51.32a8 8 0 0 0-11.32 0l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0 0-11.32m-107.32 43.32a8 8 0 0 0 11.32 0l72-72a8 8 0 1 0-11.32-11.32l-72 72a8 8 0 0 0 0 11.32m13.26 97.94a56 56 0 0 1-79.2-79.2l82.75-82.74a8 8 0 1 0-11.32-11.32l-82.74 82.75a72 72 0 1 0 101.82 101.82a8 8 0 0 0-11.31-11.31"></svg:path>`,
})
export class PhMeteorFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMeteorLightIcon],svg[ph-meteor-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 122a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m124.24-62.24a6 6 0 0 1 0 8.48l-48 48a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0m-56 8.48a6 6 0 0 1-8.48-8.48l24-24a6 6 0 0 1 8.48 8.48Zm64-64l-16 16a6 6 0 0 1-8.48-8.48l16-16a6 6 0 0 1 8.48 8.48M123.76 91.76l72-72a6 6 0 0 1 8.48 8.48l-72 72a6 6 0 1 1-8.48-8.48M145.5 201a6 6 0 0 1 0 8.49a70 70 0 0 1-99-99l82.75-82.74a6 6 0 1 1 8.48 8.48L55 119a58 58 0 1 0 82 82a6 6 0 0 1 8.5 0"></svg:path>`,
})
export class PhMeteorLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMeteorThinIcon],svg[ph-meteor-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 124a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m122.83-62.83a4 4 0 0 1 0 5.66l-48 48a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0m-32-18.34l-24 24a4 4 0 0 1-5.66-5.66l24-24a4 4 0 1 1 5.66 5.66m40-40l-16 16a4 4 0 0 1-5.66-5.66l16-16a4 4 0 1 1 5.66 5.66M125.17 93.17l72-72a4 4 0 1 1 5.66 5.66l-72 72a4 4 0 1 1-5.66-5.66m18.91 109.26a4 4 0 0 1 0 5.65a68 68 0 1 1-96.16-96.16l82.74-82.75a4 4 0 1 1 5.66 5.66l-82.75 82.74a60 60 0 0 0 84.86 84.86a4 4 0 0 1 5.65 0"></svg:path>`,
})
export class PhMeteorThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetronomeIcon],svg[ph-metronome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m187.14 114.84l26.78-29.46a8 8 0 0 0-11.84-10.76l-20.55 22.6l-17.2-54.07A15.94 15.94 0 0 0 149.08 32h-42.17a15.94 15.94 0 0 0-15.25 11.15l-50.91 160A16 16 0 0 0 56 224h144a16 16 0 0 0 15.25-20.85ZM184.72 160h-38.64l28.62-31.48ZM106.91 48h42.17l20 62.9l-44.62 49.1H71.27ZM56 208l10.18-32h123.63L200 208Z"></svg:path>`,
})
export class PhMetronomeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetronomeBoldIcon],svg[ph-metronome-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m219.05 201.94l-27.4-86.12l25.23-27.75a12 12 0 0 0-17.76-16.14l-15.88 17.46l-15.1-47.45A19.93 19.93 0 0 0 149.08 28h-42.17a19.93 19.93 0 0 0-19.06 13.94l-50.91 160A20 20 0 0 0 56 228h144a20 20 0 0 0 19.06-26.06ZM179.25 156h-24.13L173 136.34ZM109.83 52h36.33l18.42 57.91L122.69 156H76.74ZM61.47 204l7.63-24h117.79l7.63 24Z"></svg:path>`,
})
export class PhMetronomeBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetronomeDuotoneIcon],svg[ph-metronome-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 216H56a8 8 0 0 1-7.63-10.43l12-37.57h135.29l12 37.57A8 8 0 0 1 200 216" opacity=".2"></svg:path><svg:path d="m187.14 114.84l26.78-29.46a8 8 0 0 0-11.84-10.76l-20.55 22.6l-17.2-54.07A15.94 15.94 0 0 0 149.08 32h-42.17a15.94 15.94 0 0 0-15.25 11.15l-50.91 160A16 16 0 0 0 56 224h144a16 16 0 0 0 15.25-20.85ZM184.72 160h-38.64l28.62-31.48ZM106.91 48h42.17l20 62.9l-44.62 49.1H71.27ZM56 208l10.18-32h123.63L200 208Z"></svg:path></svg:g>`,
})
export class PhMetronomeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetronomeFillIcon],svg[ph-metronome-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m187.14 114.84l26.78-29.46a8 8 0 0 0-11.84-10.76l-20.55 22.6l-17.2-54.07A15.94 15.94 0 0 0 149.08 32h-42.17a15.94 15.94 0 0 0-15.25 11.15l-50.91 160A16 16 0 0 0 56 224h144a16 16 0 0 0 15.25-20.85ZM71.27 160l35.64-112h42.17l20 62.9l-44.62 49.1Zm74.81 0l28.62-31.48l10 31.48Z"></svg:path>`,
})
export class PhMetronomeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[phMetronomeLightIcon],svg[ph-metronome-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.33 203.75l-28.45-89.41L212.43 84a6 6 0 0 0-8.88-8l-22.87 25.17l-18.26-57.42A13.94 13.94 0 0 0 149.08 34h-42.16a13.94 13.94 0 0 0-13.34 9.75l-50.91 160A14 14 0 0 0 56 222h144a14 14 0 0 0 13.34-18.25ZM187.45 162h-45.89l34-37.39ZM105 47.39a2 2 0 0 1 1.92-1.39h42.16a2 2 0 0 1 1.92 1.39l20.36 64l-46 50.61H68.55Zm96.6 161.79a1.94 1.94 0 0 1-1.6.82H56a2 2 0 0 1-1.9-2.61L64.73 174h126.54l10.62 33.39a1.94 1.94 0 0 1-.29 1.79"></svg:path>`,
})
export class PhMetronomeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
