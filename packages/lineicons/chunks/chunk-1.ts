import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsLineiconsIcon],svg[lineicons-lineicons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.496 7.558a.93.93 0 0 0-.88-.245a.92.92 0 0 0-.671.625l-3.9 12.143a.928.928 0 0 0 1.17 1.17l12.152-3.9a.95.95 0 0 0 .626-.67a.93.93 0 0 0-.245-.88zM4.376 18.93l2.875-8.97l6.094 6.095zm8.126-9.36a.94.94 0 0 0 .925.817c.407 0 .821-.093 1.224-.145a2.36 2.36 0 0 0 2.05-2.34v-.29a.495.495 0 0 1 .49-.49h1.541a.933.933 0 0 0 .934-.934a.933.933 0 0 0-.934-.934H17.19a2.354 2.354 0 0 0-2.349 2.358v.29a.48.48 0 0 1-.426.48l-1.106.146a.937.937 0 0 0-.807 1.042m9.132 1.307c-2.358-1.805-4.907-.209-5.931.888a.93.93 0 0 0 .045 1.315a.93.93 0 0 0 1.315-.036c.072-.082 1.84-1.913 3.437-.69a.927.927 0 0 0 1.306-.171a.927.927 0 0 0-.172-1.306M11.422 7.612c1.043-.798 2.095-2.666.726-4.525a.93.93 0 0 0-1.306-.2a.93.93 0 0 0-.2 1.306c.717.97-.1 1.741-.362 1.95a.936.936 0 0 0-.173 1.306c.32.415.906.465 1.315.163"></svg:path>`,
})
export class LineiconsLineiconsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLineiconsAltIcon],svg[lineicons-lineicons-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.803 40.128H2V50.42h6.115v-1.66H3.803zm6.383 1.942a1.04 1.04 0 0 0 1.03-1.044c0-.58-.467-1.026-1.03-1.026c-.59 0-1.057.45-1.057 1.03c0 .578.47 1.04 1.057 1.04m-.855 8.353h1.717v-6.962H9.331zm5.209-.003v-3.746c0-1.126.646-1.86 1.706-1.86c.89 0 1.465.563 1.465 1.732v3.874h1.717v-4.286c0-1.802-.901-2.886-2.65-2.886c-.943 0-1.786.408-2.222 1.115l-.143-.901H12.82v6.961h1.717zm9.69.186c1.814 0 3.085-.913 3.38-2.44h-1.593c-.198.66-.816 1.03-1.764 1.03c-1.142 0-1.787-.622-1.915-1.846l5.237-.015v-.52c0-2.172-1.325-3.567-3.411-3.567s-3.466 1.507-3.466 3.69c0 2.184 1.453 3.664 3.524 3.664zm-.043-5.944c1.03 0 1.69.633 1.69 1.593h-3.492c.167-1.041.788-1.593 1.802-1.593m5.626-2.592a1.04 1.04 0 0 0 1.03-1.044c0-.58-.467-1.026-1.03-1.026c-.59 0-1.053.45-1.053 1.03c0 .578.458 1.04 1.053 1.04m-.863 8.353h1.717v-6.962H28.95zm3.089-3.493c0 2.211 1.379 3.676 3.492 3.676c1.815 0 3.17-1.115 3.38-2.735H37.18c-.183.761-.789 1.185-1.648 1.185c-1.099 0-1.775-.816-1.775-2.125s.734-2.14 1.83-2.14c.816 0 1.395.407 1.593 1.2h1.717c-.183-1.679-1.48-2.735-3.38-2.735c-2.051 0-3.477 1.523-3.477 3.675m7.742-.001c0 2.173 1.561 3.664 3.722 3.664s3.718-1.491 3.718-3.663s-1.562-3.664-3.718-3.664c-2.153 0-3.722 1.492-3.722 3.664m1.72 0c0-1.27.817-2.124 2.002-2.124s2 .858 2 2.125s-.816 2.125-2 2.125s-2.001-.859-2.001-2.125m8.792 3.488v-3.746c0-1.126.644-1.86 1.705-1.86c.89 0 1.465.563 1.465 1.732v3.874h1.717v-4.286c0-1.802-.901-2.886-2.65-2.886c-.944 0-1.787.408-2.222 1.115l-.144-.901h-1.593v6.961h1.718zM62 48.326c0 1.406-1.197 2.284-2.914 2.284s-2.828-.932-2.832-2.292h1.628c.012.606.466.987 1.25.987c.786 0 1.24-.327 1.24-.832c0-.353-.178-.606-.8-.746l-1.255-.299c-1.251-.28-1.857-.874-1.857-1.985c0-1.368 1.15-2.187 2.758-2.187s2.615.905 2.63 2.257h-1.631c-.008-.59-.408-.971-1.069-.971c-.66 0-1.068.31-1.068.827c0 .396.315.645.901.789l1.255.299c1.08.245 1.67.722 1.749 1.64l.007.232zM39.468 31.43c.71-.716.71-1.884 0-2.6L27.106 16.34a1.81 1.81 0 0 0-2.574 0a1.855 1.855 0 0 0 0 2.601L36.894 31.43a1.81 1.81 0 0 0 2.574 0m-.33-9.221c.71-.717.71-1.884 0-2.6l-5.013-5.072a1.81 1.81 0 0 0-2.574 0a1.855 1.855 0 0 0 0 2.6l5.02 5.072a1.81 1.81 0 0 0 2.573 0zm-6.682 11.018a1.855 1.855 0 0 0 0-2.6l-5.02-5.07a1.81 1.81 0 0 0-2.574 0a1.855 1.855 0 0 0 0 2.6l5.02 5.07a1.81 1.81 0 0 0 2.573 0"></svg:path>`,
})
export class LineiconsLineiconsAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLineiconsSymbolIcon],svg[lineicons-lineicons-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M55.522 55.676c2.225-2.247 2.225-5.91 0-8.157L16.742 8.343a5.677 5.677 0 0 0-8.073 0c-2.225 2.248-2.225 5.89 0 8.157l38.779 39.176a5.677 5.677 0 0 0 8.074 0M54.486 26.75c2.225-2.248 2.225-5.91 0-8.157L38.76 2.686a5.677 5.677 0 0 0-8.074 0c-2.225 2.247-2.225 5.909 0 8.156L46.43 26.75a5.677 5.677 0 0 0 8.075 0zM33.524 61.314c2.225-2.247 2.225-5.909 0-8.157L17.778 37.252a5.677 5.677 0 0 0-8.074 0c-2.225 2.247-2.225 5.909 0 8.157L25.45 61.314a5.677 5.677 0 0 0 8.074 0"></svg:path>`,
})
export class LineiconsLineiconsSymbolIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLineiconsSymbolAltIcon],svg[lineicons-lineicons-symbol-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53 1H11C5.48 1 1 5.48 1 11v42c0 5.52 4.48 10 10 10h42c5.52 0 10-4.48 10-10V11c0-5.52-4.48-10-10-10M31.52 14.03a3.495 3.495 0 0 1 4.95 0l9.63 9.75c1.37 1.38 1.39 3.62.02 5a3.477 3.477 0 0 1-4.95 0l-9.65-9.75c-1.37-1.37-1.37-3.62 0-5m1.74 35.94a3.495 3.495 0 0 1-4.95 0l-9.65-9.75a3.555 3.555 0 0 1 0-5a3.477 3.477 0 0 1 4.95 0l9.65 9.75a3.574 3.574 0 0 1 0 5m13.48-3.46a3.477 3.477 0 0 1-4.95 0L18.02 22.5a3.574 3.574 0 0 1 0-5a3.477 3.477 0 0 1 4.95 0l23.77 24.01a3.574 3.574 0 0 1 0 5"></svg:path>`,
})
export class LineiconsLineiconsSymbolAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLineiconsSymbolAlt2Icon],svg[lineicons-lineicons-symbol-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 1c-8.56 0-16.31 3.47-21.92 9.08S1 23.44 1 32s3.47 16.31 9.08 21.92S23.44 63 32 63s16.31-3.47 21.92-9.08S63 40.56 63 32C63 14.88 49.12 1 32 1m-.54 16.82a2.746 2.746 0 0 1 3.91 0l7.61 7.69a2.83 2.83 0 0 1 0 3.95a2.734 2.734 0 0 1-3.9 0l-7.62-7.7a2.8 2.8 0 0 1 0-3.94m1.37 28.36a2.734 2.734 0 0 1-3.9 0l-7.62-7.69a2.813 2.813 0 0 1 0-3.95a2.746 2.746 0 0 1 3.91 0l7.61 7.7a2.8 2.8 0 0 1 0 3.94m10.65-2.72a2.764 2.764 0 0 1-3.91 0L20.81 24.5a2.813 2.813 0 0 1 0-3.95a2.75 2.75 0 0 1 3.9 0l18.77 18.96a2.83 2.83 0 0 1 0 3.95"></svg:path>`,
})
export class LineiconsLineiconsSymbolAlt2Icon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLinkIcon],svg[lineicons-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m58.9 42.3l-8.1-8.1c-4.1-4.1-10.5-4.5-15.1-1.2l-4.8-4.8c1.4-1.9 2.2-4.2 2.2-6.7c0-3.1-1.2-6.1-3.4-8.3l-8.1-8.1C17.1.6 9.7.6 5.1 5.1C3 7.4 1.8 10.3 1.8 13.4s1.2 6 3.4 8.2l8 8.1c2.3 2.3 5.3 3.4 8.2 3.4c2.2 0 4.3-.6 6.2-1.8l5 5c-1.2 1.8-1.8 4-1.8 6.2c0 3.1 1.2 6 3.4 8.2l8 8.1c2.3 2.3 5.3 3.4 8.2 3.4c3 0 6-1.1 8.2-3.4c2.2-2.2 3.4-5.1 3.4-8.2c.3-3.1-.9-6-3.1-8.3M16.4 26.5l-8-8.1C7 17 6.3 15.2 6.3 13.3S7 9.6 8.4 8.2s3.2-2.1 5.1-2.1c1.8 0 3.7.7 5.1 2.1l8.1 8c1.3 1.4 2.1 3.2 2.1 5.1c0 1.3-.3 2.4-.9 3.5l-2.5-2.5c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l2.3 2.3c-2.8 1.4-6 .9-8.1-1.3m39.2 29.1c-2.8 2.8-7.4 2.8-10.1 0l-8-8.1c-1.4-1.4-2.1-3.2-2.1-5.1c0-1 .2-2 .6-2.9l2.3 2.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2L39 36.3c1.1-.6 2.3-.9 3.5-.9c1.8 0 3.7.7 5.1 2.1l8.1 8c1.3 1.4 2.1 3.2 2.1 5.1c-.1 1.9-.8 3.7-2.2 5"></svg:path>`,
})
export class LineiconsLinkIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLink2AngularRightIcon],svg[lineicons-link-2-angular-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.102 14.1a2.25 2.25 0 0 1-3.182 0l-1.362-1.362l-1.06 1.06l1.361 1.363a2.25 2.25 0 0 1 0 3.182l-3.74 3.74a2.25 2.25 0 0 1-3.181 0L3.155 18.3a2.25 2.25 0 0 1 0-3.183l3.74-3.739a2.25 2.25 0 0 1 3.182 0l1.36 1.36l1.06-1.061l-1.36-1.36a2.25 2.25 0 0 1 0-3.182l3.744-3.744a2.25 2.25 0 0 1 3.182 0l3.783 3.783a2.25 2.25 0 0 1 0 3.182zm-7.726-.301l-1.36-1.36a.75.75 0 0 0-1.06 0l-3.74 3.74a.75.75 0 0 0 0 1.06l3.783 3.783a.75.75 0 0 0 1.06 0l3.74-3.74a.75.75 0 0 0 0-1.06l-1.362-1.363l-1.232 1.232a.75.75 0 1 1-1.06-1.06zm5.605-.76a.75.75 0 0 0 1.06 0l3.744-3.744a.75.75 0 0 0 0-1.06l-3.782-3.783a.75.75 0 0 0-1.061 0l-3.744 3.744a.75.75 0 0 0 0 1.06l1.36 1.36l1.243-1.243a.75.75 0 0 1 1.06 1.06l-1.242 1.244z"></svg:path>`,
})
export class LineiconsLink2AngularRightIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLinkedinIcon],svg[lineicons-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.707 3H4.347a1.3 1.3 0 0 0-1.306 1.306v15.388c0 .696.58 1.306 1.306 1.306h15.3a1.3 1.3 0 0 0 1.307-1.306V4.277C21.013 3.581 20.432 3 19.707 3M8.354 18.3H5.713V9.735h2.642zM7.019 8.545a1.53 1.53 0 0 1-1.538-1.539c0-.841.696-1.538 1.538-1.538s1.54.697 1.54 1.538s-.64 1.54-1.54 1.54M18.371 18.3h-2.642v-4.152c0-.987-.029-2.293-1.393-2.293c-1.394 0-1.597 1.103-1.597 2.206V18.3h-2.642V9.735h2.584v1.19h.029c.377-.696 1.22-1.393 2.526-1.393c2.7 0 3.193 1.742 3.193 4.123V18.3z"></svg:path>`,
})
export class LineiconsLinkedinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLinkedinOriginalIcon],svg[lineicons-linkedin-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M58.5 1H5.6C3.1 1 1.1 3 1.1 5.5v53c0 2.4 2 4.5 4.5 4.5h52.7c2.5 0 4.5-2 4.5-4.5V5.4C63 3 61 1 58.5 1M19.4 53.7h-9.1V24.2h9.1zm-4.6-33.6c-3 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3s5.3 2.4 5.3 5.3s-2.2 5.3-5.3 5.3m39.1 33.6h-9.1V39.4c0-3.4-.1-7.9-4.8-7.9c-4.8 0-5.5 3.8-5.5 7.6v14.6h-9.1V24.2h8.9v4.1h.1c1.3-2.4 4.2-4.8 8.7-4.8c9.3 0 11 6 11 14.2v16z"></svg:path>`,
})
export class LineiconsLinkedinOriginalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsListIcon],svg[lineicons-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.1 14.5h44.5c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H16.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3m44.4 15.3H16.1c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h44.5c1.2 0 2.3-1 2.3-2.3c-.1-1.3-1.1-2.3-2.4-2.3m0 19.7H16.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h44.5c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.4-2.3"></svg:path><svg:circle cx="6.2" cy="12.2" r="2.7" fill="currentColor"></svg:circle><svg:circle cx="6.2" cy="32" r="2.7" fill="currentColor"></svg:circle><svg:circle cx="6.2" cy="51.8" r="2.7" fill="currentColor"></svg:circle>`,
})
export class LineiconsListIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLocationArrowRightIcon],svg[lineicons-location-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.565 12.785c-1.916-.768-1.873-3.497.068-4.203L18.63 3.486c1.796-.654 3.538 1.088 2.884 2.884l-5.096 13.997c-.706 1.94-3.435 1.984-4.203.067l-2.069-5.163a.75.75 0 0 0-.417-.417zm.58-2.794c-.646.236-.66 1.145-.022 1.401l5.164 2.07a2.25 2.25 0 0 1 1.251 1.251l2.07 5.164c.256.638 1.165.624 1.4-.023l5.096-13.997a.75.75 0 0 0-.961-.961z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsLocationArrowRightIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLockIcon],svg[lineicons-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50.4 21.9h-6.1v-7.4c0-6.8-5.5-12.3-12.3-12.3S19.8 7.7 19.8 14.5v7.4h-6.1c-3.8 0-6.9 3-6.9 6.6V43c0 10.3 8.9 18.7 19.8 18.7h11c10.9 0 19.7-8.5 19.7-19V28.5c0-3.6-3.1-6.6-6.9-6.6m-26.1-7.4c0-4.3 3.5-7.8 7.8-7.8s7.8 3.5 7.8 7.8v7.4H24.3zm28.5 28.2c0 8-6.8 14.5-15.2 14.5h-11c-8.4 0-15.3-6.4-15.3-14.2V28.5c0-1.2 1.1-2.1 2.4-2.1h36.7c1.3 0 2.4.9 2.4 2.1z"></svg:path><svg:path fill="currentColor" d="M36.1 39.4h-8.2c-1.8 0-3.3 1.5-3.3 3.3v8.2c0 1.8 1.5 3.3 3.3 3.3h8.2c1.8 0 3.3-1.5 3.3-3.3v-8.2c0-1.8-1.5-3.3-3.3-3.3m-1.2 10.2h-5.7v-5.7h5.7z"></svg:path>`,
})
export class LineiconsLockIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLockAltIcon],svg[lineicons-lock-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M47 19.8v-2.6c0-8-6-14.8-13.6-15.4c-4.2-.4-8.4 1.1-11.5 3.9S17 12.5 17 16.6v3.2C11.2 20.9 6.8 26 6.8 32.2v18.1c0 6.6 5.4 11.9 11.9 11.9h26.4c6.6 0 12-5.4 12-12V32c.1-6-4.3-11-10.1-12.2M24.9 9C27.1 7 30 6 33 6.3c5.3.5 9.5 5.3 9.5 10.9v2.3h-21v-3c0-2.8 1.2-5.5 3.4-7.5m27.8 41.3c0 4.1-3.4 7.5-7.5 7.5H18.8c-4.1 0-7.4-3.3-7.4-7.4V32.2c0-4.5 3.6-8.1 8.1-8.1h25c4.5 0 8.2 3.6 8.2 7.9z"></svg:path><svg:path fill="currentColor" d="M32 34.5c-1.2 0-2.3 1-2.3 2.3v10.5c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3V36.7c0-1.2-1.1-2.2-2.3-2.2"></svg:path>`,
})
export class LineiconsLockAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLocked1Icon],svg[lineicons-locked-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 15.5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" d="M12 1.25A4.75 4.75 0 0 0 7.25 6v2.696a7.5 7.5 0 1 0 9.5 0V6A4.75 4.75 0 0 0 12 1.25M12 7a7.5 7.5 0 0 0-3.25.739V6a3.25 3.25 0 0 1 6.5 0v1.739A7.5 7.5 0 0 0 12 7m0 1.5a6 6 0 1 1 0 12a6 6 0 0 1 0-12"></svg:path>`,
})
export class LineiconsLocked1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLocked2Icon],svg[lineicons-locked-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 16a1.5 1.5 0 0 1 3 0v1.5a1.5 1.5 0 0 1-3 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.75 7.25a5.25 5.25 0 1 1 10.5 0v1.875h1.25a2.25 2.25 0 0 1 2.25 2.25v5.875A4.75 4.75 0 0 1 16 22H8a4.75 4.75 0 0 1-4.75-4.75v-5.875a2.25 2.25 0 0 1 2.25-2.25h1.25zm1.5 1.875h7.5V7.25a3.75 3.75 0 1 0-7.5 0zm-2.75 1.5a.75.75 0 0 0-.75.75v5.875A3.25 3.25 0 0 0 8 20.5h8a3.25 3.25 0 0 0 3.25-3.25v-5.875a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsLocked2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLoomIcon],svg[lineicons-loom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10.903h-5.839l5.065-2.935l-1.097-1.936l-5.065 2.936L18 3.903l-1.936-1.129L13.13 7.84V2h-2.226v5.839L7.968 2.774L6.032 3.871l2.936 5.064l-5.065-2.903l-1.097 1.936l5.065 2.935H2v2.226h5.839l-5.065 2.903l1.097 1.936l5.064-2.936L6 20.097l1.935 1.096l2.936-5.064V22h2.226v-5.839l2.935 5.065l1.936-1.097l-2.936-5.065L20.097 18l1.096-1.936l-5.064-2.935H22zm-10 4.13A3.03 3.03 0 0 1 8.968 12A3.03 3.03 0 0 1 12 8.968A3.03 3.03 0 0 1 15.032 12A3.03 3.03 0 0 1 12 15.032"></svg:path>`,
})
export class LineiconsLoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMagentoIcon],svg[lineicons-magento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2L3.354 7v10l2.452 1.452v-10L12 4.87l6.193 3.58v10L20.645 17V7z"></svg:path><svg:path fill="currentColor" d="M13.258 18.452L12 19.129l-1.226-.677v-10L8.258 9.87v10L12 22l3.741-2.129v-10l-2.483-1.42z"></svg:path>`,
})
export class LineiconsMagentoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMagnetIcon],svg[lineicons-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 5.501A2.25 2.25 0 0 1 6 3.251h2a2.25 2.25 0 0 1 2.25 2.25v6.5a2.25 2.25 0 0 0 4.5 0v-6.5A2.25 2.25 0 0 1 17 3.251h2a2.25 2.25 0 0 1 2.25 2.25v6.5a8.75 8.75 0 1 1-17.5 0zM6 4.751a.75.75 0 0 0-.75.75v2.25h3.5v-2.25a.75.75 0 0 0-.75-.75zm-.75 7.25a7.25 7.25 0 0 0 14.5 0v-2.75h-3.5v2.75a3.75 3.75 0 0 1-7.5 0v-2.75h-3.5zm14.5-4.25v-2.25a.75.75 0 0 0-.75-.75h-2a.75.75 0 0 0-.75.75v2.25z"></svg:path>`,
})
export class LineiconsMagnetIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMagnifierIcon],svg[lineicons-magnifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.4 50.3L48.7 38.7c-1.2-1.2-2.8-1.9-4.5-1.9q-1.8 0-3.3.9l-5.2-5.2c2.6-3.3 4.1-7.4 4.1-11.8c0-5.1-2-9.9-5.6-13.5s-8.4-5.6-13.5-5.6s-9.9 2-13.5 5.6s-5.6 8.4-5.6 13.5s2 9.9 5.6 13.5s8.4 5.6 13.5 5.6c4.3 0 8.4-1.4 11.8-4.1l5.2 5.2q-.9 1.5-.9 3.3c0 1.7.7 3.3 1.9 4.5l11.6 11.6c1.2 1.2 2.8 1.9 4.5 1.9s3.3-.7 4.5-1.9l1.1-1.1c1.2-1.2 1.9-2.8 1.9-4.5c0-1.6-.7-3.2-1.9-4.4M10.5 31.1c-2.7-2.7-4.3-6.4-4.3-10.3s1.5-7.5 4.3-10.3s6.4-4.3 10.3-4.3s7.5 1.5 10.3 4.3s4.3 6.4 4.3 10.3s-1.5 7.5-4.3 10.3s-6.4 4.3-10.3 4.3s-7.5-1.6-10.3-4.3m46.7 25l-1.1 1.1c-.7.7-1.9.7-2.7 0L41.8 45.6c-.7-.7-.7-1.9 0-2.7l1.1-1.1c.4-.4.8-.5 1.3-.5s1 .2 1.3.5l11.6 11.6c.4.4.5.8.5 1.3c.2.6 0 1.1-.4 1.4"></svg:path><svg:path fill="currentColor" d="M24.7 12.7c-.9.9-.9 2.3 0 3.2c2.4 2.4 2.4 6.4 0 8.8c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c2-2 3.1-4.7 3.1-7.6s-1.1-5.5-3.1-7.6c-.9-.9-2.4-.9-3.2 0"></svg:path>`,
})
export class LineiconsMagnifierIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMailchimpIcon],svg[lineicons-mailchimp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.746 11.438a.9.9 0 0 1 .42 0a1.9 1.9 0 0 0 .031-.775c-.096-.452-.226-.774-.484-.742s-.258.355-.193.871c0 .259.129.517.226.646m-2.356.387c.193.097.322.13.355.097c.096-.097-.13-.42-.55-.58a1.44 1.44 0 0 0-1.355.128c-.129.097-.258.226-.258.323c.032.129.452-.13 1-.13c.356-.031.582.098.807.162m-.42.226c-.42.032-.646.258-.581.452c.032 0 .032.032.226-.032q.388-.146.871-.097c.13 0 .194.032.226-.032c.033-.065-.29-.355-.742-.29m2.42.775c.13-.323-.484-.646-.645-.323c-.129.323.517.613.646.323m.678-.936c-.355 0-.355.742 0 .742s.355-.742 0-.742m-9.714 3.518c-.033 0-.259.032-.355-.097c-.226-.355.484-.904.129-1.582c-.42-.774-1.26-.58-1.55-.258c-.355.452-.355 1.033-.225 1.033c.193.032.193-.258.355-.549c.129-.258.548-.355.774-.129c.549.355.032.775.097 1.259c.032.775.807.742.968.42c.033-.033 0-.033 0-.097c-.064.032-.032-.065-.193 0m13.361-.743c-.129-.548-.129-.42-.322-.903a1.56 1.56 0 0 0-.13-1.97c-.451-.483-1.484-.774-1.871-.806c-.033-.484.226-2.647-.969-3.68c.969-.968 1.485-2.033 1.485-2.969c0-1.775-2.13-2.259-4.777-1.194l-.516.29s-1-1-1.033-1C9.581-.246.156 10.276 3.158 12.761l.678.581a2.9 2.9 0 0 0-.194 1.485c.129 1.484 1.581 2.679 3.002 2.679c2.55 5.97 11.941 5.97 14.362.129c.032-.194.42-1.098.42-1.872c-.033-.775-.452-1.098-.71-1.098M6.611 16.828c-1.033-.032-2.13-.968-2.227-2.033c-.258-2.744 3.325-3.357 3.776-.55c.162 1.292-.225 2.615-1.549 2.583m-.807-5.1c-.677.13-1.258.485-1.646 1.033c-.226-.193-.645-.548-.677-.645c-.581-1.098.645-3.26 1.452-4.454C7.031 4.66 10.291 2.4 11.84 2.82c.258.033 1.097 1.001 1.097 1.001s-1.549.871-2.97 2.033c-1.903 1.42-3.356 3.55-4.163 5.874m10.619 4.487s-1.582.258-3.098-.323c.258-.904 1.194.258 4.26-.646a7 7 0 0 0 2.259-1.13c.13.356.258.743.323 1.098c.129-.032.645-.032.484.807c-.13.871-.549 1.581-1.13 2.26a5 5 0 0 1-1.355 1.032a6 6 0 0 1-.904.355c-2.356.775-4.809-.032-5.648-1.904c-.032-.13-.13-.258-.13-.452c-.354-1.227-.031-2.647.872-3.583c.033-.032.13-.129.13-.225a.36.36 0 0 0-.098-.194c-.322-.452-1.355-1.227-1.194-2.744c.13-1.032 1.098-1.807 1.97-1.775h.225c.355.033.742.033 1.033.097c.548.032 1-.032 1.549-.484c.194-.13.355-.258.581-.355c.226-.032.452 0 .58.097c.453.258.485 1 .55 1.549c0 .323.032 1.033.032 1.226c.032.452.129.55.42.646c.128.032.258.097.451.13c.581.128.968.354 1.13.548a.77.77 0 0 1 .226.42c.032.484-.42 1.129-1.646 1.678c-2.098.968-4.196.645-4.454.645c-.904-.129-1.42 1.033-.872 1.872c1.001 1.485 5.455.904 6.778-.968c.032-.032 0-.032-.032-.032c-1.872 1.258-4.325 1.678-5.713 1.13c-.226-.098-.645-.259-.742-.775c1.969.58 3.13.032 3.13.032s.13-.032.033-.032M9.645 7.629c.775-.871 1.646-1.646 2.485-2.033h.033v.032c-.033.13-.194.355-.226.55c0 .031 0 .031.032.031c.484-.355 1.42-.742 2.195-.774c.032 0 .032 0 .032.032v.032c-.13.097-.258.226-.355.355v.033h.032c.549 0 1.323.193 1.808.451c.032.033 0 .097-.033.033c-3.098-.743-5.454.807-6.003 1.194c.065.032.065.032 0 .064"></svg:path>`,
})
export class LineiconsMailchimpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMapIcon],svg[lineicons-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m57.4 17.8l-14.8-3.4c0-.3.1-.5.1-.8c0-5-4-9-8.9-9c-5 0-9 4-9 9c0 1 .3 2.3.9 3.8l-2.9.6l-13.1-3.7c-1.9-.5-3.9-.2-5.5 1s-2.5 3-2.5 5v28.6c0 2.8 1.9 5.3 4.6 6l15.8 4.5h.1c.2 0 .4.1.6.1h.5l18.2-3.8l13.2 3.1c.5.1.9.2 1.4.2c1.4 0 2.8-.5 3.9-1.4c1.5-1.2 2.4-3 2.4-4.9V23.9c-.1-2.9-2.1-5.4-5-6.1M33.7 9.1c2.5 0 4.4 2 4.4 4.5c0 1.1-1.4 4.4-4.5 9.2c-3.1-4.8-4.5-8-4.5-9.2c.1-2.5 2.1-4.5 4.6-4.5m-6.1 12.4c1.1 2 2.4 4 3.6 5.7c.5.8 1.5 1.3 2.4 1.3c1 0 1.9-.5 2.4-1.3c1-1.5 2.1-3.1 3.1-4.8v29l-14.1 3V22.1zM6.3 48.8V20.3c0-.6.3-1.1.7-1.4s1-.4 1.5-.3l12 3.4v32.2l-13-3.7c-.7-.2-1.2-.9-1.2-1.7m51.5 3.7c0 .7-.4 1.2-.7 1.4c-.2.2-.8.5-1.5.3l-12-2.8V19.2l12.8 3c.8.2 1.4.9 1.4 1.7z"></svg:path><svg:path fill="currentColor" d="M34.1 15.5c.1 0 .3-.1.4-.1s.3-.1.4-.2l.3-.3c.4-.4.7-1 .7-1.6s-.2-1.2-.7-1.6l-.3-.3c-.1-.1-.3-.2-.4-.2c-.1-.1-.3-.1-.4-.1c-.7-.1-1.5.1-2 .6c-.4.4-.7 1-.7 1.6s.2 1.2.7 1.6c.4.4 1 .7 1.6.7c.1-.1.3-.1.4-.1"></svg:path>`,
})
export class LineiconsMapIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMapMarkerIcon],svg[lineicons-map-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 1.8C18.2 1.8 7 12.6 7 25.9C7 36 20.4 52 28.3 60.6c1 1.1 2.3 1.6 3.7 1.6s2.7-.6 3.7-1.6C43.6 52 57 36 57 25.9C57 12.6 45.8 1.8 32 1.8m.4 55.8c-.2.2-.5.2-.8 0C21.9 47 11.5 33.2 11.5 25.9c0-10.8 9.2-19.6 20.5-19.6s20.5 8.8 20.5 19.6c0 7.3-10.4 21.1-20.1 31.7"></svg:path><svg:path fill="currentColor" d="M32 15.7c-6 0-10.9 4.9-10.9 10.9s4.9 11 10.9 11s10.9-4.9 10.9-10.9s-4.9-11-10.9-11m0 17.4c-3.6 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4s6.4 2.9 6.4 6.4s-2.8 6.4-6.4 6.4"></svg:path>`,
})
export class LineiconsMapMarkerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMapMarker1Icon],svg[lineicons-map-marker-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.413 6.031a.9.9 0 0 1 .9-.9h.01a.9.9 0 1 1 0 1.8h-.01a.9.9 0 0 1-.9-.9"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m12.321 11.998l-.47.584l-.003-.002l-.003-.002l-.01-.008l-.033-.028l-.117-.1a12.5 12.5 0 0 1-1.605-1.73c-.864-1.132-1.799-2.784-1.799-4.68a4.031 4.031 0 1 1 8.063 0c0 1.894-.93 3.546-1.789 4.679a12.5 12.5 0 0 1-1.596 1.729l-.117.1l-.033.029l-.01.008l-.003.002l-.001.001zM12.313 3.5A2.53 2.53 0 0 0 9.78 6.031c0 1.417.71 2.747 1.492 3.771c.379.497.76.901 1.047 1.182c.286-.28.664-.684 1.04-1.18c.777-1.024 1.484-2.355 1.484-3.773a2.53 2.53 0 0 0-2.53-2.531" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m12.321 11.998l.473.583a.75.75 0 0 1-.944 0z"></svg:path><svg:path fill="currentColor" d="M8.887 11.621c.37.484.737.896 1.052 1.223v5.704l4.754-1.141V12.85a14 14 0 0 0 1.5-1.854v6.416l3.69.904a.75.75 0 0 0 .929-.729V7.177a.75.75 0 0 0-.572-.73l-2.399-.587a5.5 5.5 0 0 0-.292-1.616l3.048.747a2.25 2.25 0 0 1 1.715 2.185v10.412a2.25 2.25 0 0 1-2.785 2.185l-3.915-.959a.75.75 0 0 0-.354 0l-5.542 1.33a2.25 2.25 0 0 1-1.06-.003l-4.629-1.133a2.25 2.25 0 0 1-1.715-2.186V6.411a2.25 2.25 0 0 1 2.786-2.186l1.85.453a5.5 5.5 0 0 0-.166 1.504l-2.041-.5a.75.75 0 0 0-.928.729v10.411a.75.75 0 0 0 .571.729l4.055.993v-7.548q.228.338.448.625"></svg:path>`,
})
export class LineiconsMapMarker1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMapMarker5Icon],svg[lineicons-map-marker-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.504 6.475a3.835 3.835 0 1 0 0 7.67a3.835 3.835 0 0 0 0-7.67m-2.335 3.835a2.335 2.335 0 1 1 4.67 0a2.335 2.335 0 0 1-4.67 0"></svg:path><svg:path d="M12.503 2.84a7.47 7.47 0 0 0-7.472 7.472c0 2.804 1.072 5.357 2.345 7.406c1.275 2.053 2.782 3.648 3.727 4.551a2.033 2.033 0 0 0 2.836-.004c.94-.904 2.439-2.5 3.706-4.551c1.266-2.049 2.33-4.6 2.33-7.402a7.47 7.47 0 0 0-7.472-7.472m-5.972 7.472a5.972 5.972 0 1 1 11.944 0c0 2.425-.925 4.702-2.106 6.613c-1.179 1.909-2.583 3.406-3.47 4.26a.534.534 0 0 1-.76 0c-.89-.852-2.303-2.35-3.49-4.258c-1.187-1.913-2.118-4.19-2.118-6.615"></svg:path></svg:g>`,
})
export class LineiconsMapMarker5Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMapPin5Icon],svg[lineicons-map-pin-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.254 13.538a5.376 5.376 0 1 0-1.5 0v8.552a.75.75 0 1 0 1.5 0zM8.629 8.215a3.875 3.875 0 1 1 7.75 0a3.875 3.875 0 0 1-7.75 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMapPin5Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMarkdownIcon],svg[lineicons-markdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.516 5.871H3.452C2.677 5.871 2 6.516 2 7.323v9.387c0 .742.645 1.42 1.452 1.42h17.096c.775 0 1.452-.646 1.452-1.453V7.258c-.032-.774-.677-1.387-1.484-1.387M21 16.71a.496.496 0 0 1-.484.484H3.452a.496.496 0 0 1-.484-.484V7.258c0-.258.226-.484.484-.484h17.096c.259 0 .484.226.484.484v9.42H21z"></svg:path><svg:path fill="currentColor" d="M17.839 8.71h-1.903v3.355h-1.968l2.903 3.193l2.871-3.193H17.84zM8.71 11.13L6.805 8.71H4.871v6.548h1.935v-3.774l1.903 2.387l1.904-2.387v3.774h1.967V8.71h-1.967z"></svg:path>`,
})
export class LineiconsMarkdownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMashroomIcon],svg[lineicons-mashroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54.8 14.7C50.3 6.2 41.6 1 32 1S13.7 6.2 9.2 14.7c-1.9 3.5-2.8 7.1-2.9 10.9v.3c0 .3.1.6.2.8c2.3 5 8.5 8.8 16.5 10.5l-1.7 16c-.3 2.5.5 5 2.2 6.9s4.1 2.9 6.6 2.9H34c2.5 0 5-1.1 6.6-3c1.7-1.9 2.5-4.4 2.2-6.9l-1.7-15.9c7.9-1.7 14.1-5.5 16.4-10.5c.1-.3.2-.6.2-.9c-.1-3.9-1.1-7.7-2.9-11.1M38.9 53.5c.2 1.4-.3 2.8-1.2 3.8c-1 1.1-2.3 1.7-3.7 1.7h-3.9c-1.4 0-2.7-.6-3.6-1.6s-1.4-2.4-1.2-3.8L27 37.8q2.4.3 5.1.3c1.8 0 3.5-.1 5.2-.3zM32 34.1c-10 0-19-3.6-21.7-8.7c.1-3.1.9-6 2.5-8.9C16.5 9.4 23.9 5 32 5s15.5 4.4 19.2 11.6c1.5 2.8 2.3 5.8 2.4 8.9c-2.6 5-11.6 8.6-21.6 8.6"></svg:path><svg:path fill="currentColor" d="M31.6 8.9c-.1 0-.2.1-.4.1c-.1 0-.2.1-.4.2c-.1.1-.2.1-.3.2c-.4.4-.6.9-.6 1.4s.2 1 .6 1.4s.9.6 1.4.6s1-.2 1.4-.6s.6-.9.6-1.4s-.2-1-.6-1.4c-.4-.5-1-.7-1.7-.5m-11 12.8c-.4.4-.6.9-.6 1.4s.2 1.1.6 1.4c.4.4.9.6 1.4.6s1-.2 1.4-.6s.6-.9.6-1.4s-.2-1-.6-1.4c-.7-.8-2-.8-2.8 0m23.6.6c0-.1-.1-.2-.2-.3s-.1-.2-.2-.3c-.5-.5-1.1-.7-1.8-.5c-.1 0-.2.1-.4.1c-.1.1-.2.1-.3.2s-.2.2-.3.2c-.1.1-.2.2-.2.3c-.1.1-.1.2-.2.3s-.1.2-.1.4v.8c0 .1.1.2.1.4c0 .1.1.2.2.4c.1.1.1.2.2.3c.4.4.9.6 1.4.6s1-.2 1.4-.6c.1-.1.2-.2.2-.3c.1-.1.1-.2.2-.4c0-.1.1-.2.1-.4v-.8c0-.1 0-.3-.1-.4"></svg:path>`,
})
export class LineiconsMashroomIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMastercardIcon],svg[lineicons-mastercard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.05 12.014h.741c.038-.214-.03-.397-.267-.397s-.405.122-.474.397m-4.177.397l-.037-.006c-.11-.02-.304-.056-.474.06c-.191.13-.245.358-.046.435c.191.073.473-.053.512-.252zm13.6-.069c.062-.198.028-.446-.038-.534c-.183-.244-.604-.051-.733.428c-.084.313.1.55.306.55c.221 0 .358-.176.465-.444m-3.52.069l-.037-.006c-.11-.02-.305-.056-.474.06c-.191.13-.245.358-.046.435c.191.073.473-.053.511-.252z"></svg:path><svg:path fill="currentColor" d="M16.081 6.08a5.92 5.92 0 0 1 0 11.84a5.86 5.86 0 0 1-3.729-1.329a6.4 6.4 0 0 0 1.69-2.754h-.492a5.9 5.9 0 0 1-1.554 2.448a5.9 5.9 0 0 1-1.543-2.445h-.492a6.4 6.4 0 0 0 1.672 2.747a5.88 5.88 0 0 1-3.712 1.333a5.92 5.92 0 0 1 0-11.84c1.41 0 2.695.51 3.712 1.333a6.4 6.4 0 0 0-1.672 2.747h.492a5.9 5.9 0 0 1 1.543-2.445a5.9 5.9 0 0 1 1.554 2.448h.492a6.4 6.4 0 0 0-1.69-2.754a5.86 5.86 0 0 1 3.73-1.329m1.978 5.116l-.409 2.19h.602l.185-1.002c.168-.622.427-.62.579-.617h.023l.162-.57c-.301 0-.479.107-.571.215l-.054-.216zm-7.734-.556H9.73l-.412 2.077c-.115.595.336.68.473.68a.85.85 0 0 0 .443-.108l.038-.442c-.343.053-.359-.1-.328-.268l.168-.886h.305l.107-.473h-.32zm1.168.55c-.933 0-1.076.897-1.104 1.077l-.003.014c-.023.138-.038 1.108.993 1.108c.252.007.618-.023.764-.1l.091-.45a4 4 0 0 1-.672.053h-.02c-.238 0-.596.001-.53-.48h1.298c.07-.352.23-1.223-.817-1.223m-2.191.076c-.247-.094-.447-.088-.55-.085H8.71c-.101 0-.797 0-.905.52c-.084.405.064.572.206.634c.15.065.257.126.348.178q.07.042.134.074c.15.075.123.328-.077.328l-.072.003c-.154.009-.468.026-.714-.056l-.084.45c.275.077.496.077.702.077h.023c.185.002.837.008.931-.619c.049-.32-.091-.466-.206-.534a3.4 3.4 0 0 0-.427-.237c-.122-.054-.214-.26.007-.32c.138-.016.42-.016.588.03zm-3.505-.52H4.82l-.725 1.604l-.115-1.604h-.954l-.512 2.643h.596l.366-1.91l.16 1.91h.566l.832-1.864l-.351 1.864H5.3zm.068.986l.144-.018c.18-.023.441-.057.597-.051l.06.001c.187.004.369.008.307.304q-.031.002-.1 0c-.313-.01-1.144-.035-1.29.764c-.069.45.32.68.626.664c.305-.015.39-.053.496-.13l.077.123h.557l.237-1.192c.061-.297.16-1.015-.84-1.015l-.096.003c-.162.004-.36.01-.683.073zm9.286-.481c.199 0 .305.015.458.106l.39-.389c-.153-.168-.329-.333-.817-.351c-.413-.016-1.12.285-1.344 1.107c-.306 1.115.366 1.665.985 1.665c.328 0 .527-.046.725-.138l-.176-.534c-.61.206-1.046-.107-.946-.741c.083-.536.526-.726.725-.726m5.452.119c-.08-.084-.172-.18-.382-.18h-.054c-.328-.004-.801-.009-1.076.931c-.194.663.199 1.268.626 1.268c.199-.008.397-.092.52-.176l.076.176h.641l.52-2.78h-.627l-.16.84a1 1 0 0 1-.084-.08m-4.658.362l.144-.018c.18-.023.44-.057.597-.051l.06.001c.187.004.369.008.306.304q-.03.002-.1 0c-.312-.01-1.143-.035-1.29.764c-.068.45.321.68.627.664c.305-.015.389-.053.496-.13l.077.123h.557l.237-1.192c.06-.297.16-1.015-.84-1.015l-.096.003c-.162.004-.36.01-.683.073zm-3.213-.512l-.405 2.169h.596l.183-.993c.165-.61.426-.606.576-.604h.027l.153-.572c-.297 0-.473.107-.565.214l-.053-.214z"></svg:path>`,
})
export class LineiconsMastercardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMediumIcon],svg[lineicons-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10s10-4.481 10-10m-8.996 0c0 2.458-1.98 4.45-4.42 4.45c-2.442 0-4.421-1.992-4.421-4.45s1.98-4.451 4.42-4.451c2.442 0 4.421 1.993 4.421 4.45m4.85 0c0 2.314-.99 4.19-2.21 4.19c-1.222 0-2.211-1.876-2.211-4.19s.99-4.19 2.21-4.19s2.21 1.875 2.21 4.19m1.983 0c0 2.072-.348 3.754-.777 3.754s-.778-1.681-.778-3.754s.348-3.754.778-3.754c.429 0 .777 1.68.777 3.754" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMediumAltIcon],svg[lineicons-medium-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.645 6.322c3.13 0 5.645 2.549 5.645 5.678s-2.548 5.677-5.645 5.677S2 15.13 2 12s2.548-5.678 5.645-5.678m9 .323c1.549 0 2.807 2.42 2.807 5.355c0 2.967-1.259 5.355-2.807 5.355S13.84 14.935 13.84 12s1.258-5.355 2.806-5.355m4.355.58c.548 0 1 2.13 1 4.775s-.452 4.774-1 4.774s-1-2.13-1-4.774s.452-4.775 1-4.775"></svg:path>`,
})
export class LineiconsMediumAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMegaphone1Icon],svg[lineicons-megaphone-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.023 3.2a.75.75 0 1 0-1.5 0v.26l-10.29 3.438h-5.96a2.25 2.25 0 0 0-2.25 2.25v3.102a2.25 2.25 0 0 0 2.25 2.25h2.472l.438 3.095a2.216 2.216 0 1 0 4.38-.672l-.346-2.094l9.306 3.11v.26a.75.75 0 0 0 1.5 0zm-1.5 13.157l-9.418-3.147V8.189l9.418-3.148zM9.604 13h-5.33a.75.75 0 0 1-.75-.75V9.148a.75.75 0 0 1 .75-.75h5.33zm.038 1.5l.441 2.667a.716.716 0 1 1-1.415.217L8.26 14.5z"></svg:path>`,
})
export class LineiconsMegaphone1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMenuIcon],svg[lineicons-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 29.8H4c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3m0 17H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3M4 17.2h56c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H4c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3"></svg:path>`,
})
export class LineiconsMenuIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMenuCheesburgerIcon],svg[lineicons-menu-cheesburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.32 4.75a1.25 1.25 0 0 0 0 2.5h.01a1.25 1.25 0 1 0 0-2.5zm3.99.5a.75.75 0 1 0 0 1.5h12a.75.75 0 1 0 0-1.5zm0 12a.75.75 0 0 0 0 1.5h12a.75.75 0 1 0 0-1.5zM7.56 12a.75.75 0 0 1 .75-.75h12a.75.75 0 1 1 0 1.5h-12a.75.75 0 0 1-.75-.75m-4.49 0c0-.69.56-1.25 1.25-1.25h.01a1.25 1.25 0 1 1 0 2.5h-.01c-.69 0-1.25-.56-1.25-1.25m1.25 4.75a1.25 1.25 0 1 0 0 2.5h.01a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class LineiconsMenuCheesburgerIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMenuHamburger1Icon],svg[lineicons-menu-hamburger-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.563 6a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75m0 12a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75m.75-6.75a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class LineiconsMenuHamburger1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMenuMeatballs1Icon],svg[lineicons-menu-meatballs-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.313 13.756a1.75 1.75 0 0 1-1.75-1.75v-.01a1.75 1.75 0 0 1 3.5 0v.01a1.75 1.75 0 0 1-1.75 1.75m12 0a1.75 1.75 0 0 1-1.75-1.75v-.01a1.75 1.75 0 0 1 3.5 0v.01a1.75 1.75 0 0 1-1.75 1.75m-7.75-1.75a1.75 1.75 0 1 0 3.5 0v-.01a1.75 1.75 0 0 0-3.5 0z"></svg:path>`,
})
export class LineiconsMenuMeatballs1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMenuMeatballs2Icon],svg[lineicons-menu-meatballs-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.319 14.249a2.248 2.248 0 1 1 0-4.497a2.248 2.248 0 0 1 0 4.496M5.57 12a.748.748 0 1 0 1.497 0a.748.748 0 0 0-1.497 0m6.745 2.249a2.248 2.248 0 1 1 0-4.497a2.248 2.248 0 0 1 0 4.496M11.567 12a.748.748 0 1 0 1.496 0a.748.748 0 0 0-1.496 0m4.497 0a2.248 2.248 0 1 0 4.496 0a2.248 2.248 0 0 0-4.496 0m2.248.749a.748.748 0 1 1 0-1.497a.748.748 0 0 1 0 1.496" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMenuMeatballs2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMercedesIcon],svg[lineicons-mercedes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.816 7.3a9.45 9.45 0 0 1 8.074-4.732l-1.293 8.57l-6.836 5.523A9.43 9.43 0 0 1 3.816 7.3m8.223 14.18a9.42 9.42 0 0 1-8.155-4.609l8.12-3.361l8.15 3.31a9.44 9.44 0 0 1-8.115 4.66m1.326-10.228l-1.233-8.684a9.45 9.45 0 0 1 4.642 1.3a9.46 9.46 0 0 1 3.4 3.416a9.43 9.43 0 0 1 .103 9.316z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMercedesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMessage2Icon],svg[lineicons-message-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 6a2.25 2.25 0 0 1 2.25-2.25h14.5A2.25 2.25 0 0 1 21.5 6v10.548a2.25 2.25 0 0 1-2.25 2.25H7.635L3.75 22.277a.75.75 0 0 1-1.25-.559zm2.25-.75A.75.75 0 0 0 4 6v14.04l2.848-2.55a.75.75 0 0 1 .5-.192H19.25a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMessage2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMessage2QuestionIcon],svg[lineicons-message-2-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.92 9.712a1.08 1.08 0 1 1 1.698.886c-.27.19-.598.443-.86.76c-.267.322-.508.759-.508 1.3a.75.75 0 0 0 1.5 0c0-.074.03-.184.162-.343c.135-.162.332-.324.566-.488A2.58 2.58 0 1 0 9.42 9.713a.75.75 0 0 0 1.5 0M12 13.917a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.75 3.75A2.25 2.25 0 0 0 2.5 6v15.718a.75.75 0 0 0 1.25.559l3.885-3.479H19.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25zM4 6a.75.75 0 0 1 .75-.75h14.5A.75.75 0 0 1 20 6v10.548a.75.75 0 0 1-.75.75H7.348a.75.75 0 0 0-.5.192L4 20.04z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMessage2QuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMessage3TextIcon],svg[lineicons-message-3-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 9.773a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5h5a.75.75 0 1 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 5.531a2.25 2.25 0 0 1 2.25-2.25h14.5a2.25 2.25 0 0 1 2.25 2.25V16.08a2.25 2.25 0 0 1-2.25 2.25h-4.149l-2.499 3.366a.75.75 0 0 1-1.204 0L8.9 18.33H4.75a2.25 2.25 0 0 1-2.25-2.25zm2.25-.75a.75.75 0 0 0-.75.75V16.08c0 .414.336.75.75.75h4.527a.75.75 0 0 1 .602.303L12 19.99l2.122-2.857a.75.75 0 0 1 .602-.303h4.526a.75.75 0 0 0 .75-.75V5.53a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMessage3TextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMetaIcon],svg[lineicons-meta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.342 10.085h.758l1.289 2.368l1.288-2.368h.742v3.89H12.8v-2.982l-1.13 2.065h-.58l-1.13-2.065v2.983h-.618zm6.071 3.96q-.43 0-.755-.193a1.34 1.34 0 0 1-.508-.535a1.64 1.64 0 0 1-.182-.784q0-.447.178-.792q.177-.345.494-.54q.316-.194.726-.194q.408 0 .702.196t.453.549t.159.828v.172h-2.1a.93.93 0 0 0 .284.56q.225.205.57.205q.277 0 .477-.084q.2-.083.375-.253l.328.409a1.7 1.7 0 0 1-1.201.456m.451-2.308a.68.68 0 0 0-.509-.202a.7.7 0 0 0-.513.206a.97.97 0 0 0-.261.553h1.505q-.027-.356-.222-.557m1.566-.146h-.569v-.514h.57v-.85h.596v.85h.865v.514h-.865v1.303q0 .326.11.464q.109.14.375.14q.117 0 .2-.01q.081-.01.18-.027v.509a1.7 1.7 0 0 1-.495.07q-.966 0-.966-1.073zM22 13.975h-.586v-.405q-.156.228-.396.351q-.24.124-.548.124q-.377 0-.669-.196a1.34 1.34 0 0 1-.458-.54a1.8 1.8 0 0 1-.167-.784q0-.445.17-.787t.469-.536t.688-.195q.292 0 .526.116c.153.075.285.187.385.326v-.372H22zm-.596-1.884a.82.82 0 0 0-.78-.534a.77.77 0 0 0-.61.262q-.228.262-.228.705q0 .448.22.71a.73.73 0 0 0 .593.26a.87.87 0 0 0 .492-.144a.8.8 0 0 0 .313-.39zM6.353 9.953c-.498 0-.886.38-1.238.864c-.484-.626-.888-.864-1.372-.864C2.756 9.953 2 11.257 2 12.638c0 .864.411 1.408 1.1 1.408c.497 0 .853-.237 1.488-1.363l.446-.8q.095.156.201.337l.298.508c.579.985.902 1.318 1.487 1.318c.671 0 1.045-.552 1.045-1.434c0-1.445-.773-2.659-1.712-2.659m-2.249 2.425c-.514.819-.692 1.002-.978 1.002c-.295 0-.47-.263-.47-.731c0-1.002.492-2.027 1.078-2.027c.318 0 .583.186.99.777c-.386.602-.62.979-.62.979m1.94-.103l-.355-.602a13 13 0 0 0-.277-.44c.32-.502.585-.752.899-.752c.653 0 1.176.977 1.176 2.177c0 .457-.148.722-.453.722c-.293 0-.433-.196-.99-1.105"></svg:path>`,
})
export class LineiconsMetaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMeta1Icon],svg[lineicons-meta-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.504 27.039h1.994l3.391 6.134l3.391-6.134h1.951v10.08h-1.627v-7.726l-2.973 5.35h-1.526l-2.974-5.35v7.725h-1.627zM41.48 37.298q-1.13 0-1.987-.5a3.5 3.5 0 0 1-1.336-1.386q-.48-.885-.479-2.03q0-1.16.468-2.052a3.5 3.5 0 0 1 1.3-1.397q.831-.504 1.911-.504q1.072 0 1.847.508q.774.507 1.191 1.421q.418.915.418 2.146v.446h-5.522q.151.922.745 1.451q.594.53 1.501.53q.728 0 1.253-.217q.525-.216.986-.655l.864 1.059q-1.289 1.18-3.16 1.18m1.188-5.98q-.512-.52-1.34-.521q-.805 0-1.35.533q-.543.533-.687 1.433h3.96q-.072-.922-.584-1.444m4.119-.378H45.29v-1.332h1.497v-2.203h1.57v2.203h2.275v1.332h-2.275v3.377q0 .842.288 1.202t.986.36q.31 0 .526-.025a10 10 0 0 0 .475-.069v1.318q-.296.085-.601.13a5 5 0 0 1-.702.05q-2.542 0-2.542-2.78zm12.024 6.177h-1.54v-1.051a2.8 2.8 0 0 1-1.045.91a3.15 3.15 0 0 1-1.44.321q-.993 0-1.76-.508a3.5 3.5 0 0 1-1.206-1.396q-.44-.89-.439-2.034q0-1.152.446-2.038q.447-.885 1.235-1.39q.79-.503 1.81-.503q.771 0 1.383.299a2.7 2.7 0 0 1 1.015.846v-.965h1.541zm-1.57-4.881a2.14 2.14 0 0 0-.795-1.012a2.2 2.2 0 0 0-1.256-.37q-1.009 0-1.606.676t-.597 1.829q0 1.16.576 1.836q.575.677 1.562.677q.726 0 1.296-.375q.568-.374.82-1.008zm-39.598-5.539c-1.308 0-2.331.985-3.257 2.237c-1.272-1.62-2.336-2.237-3.61-2.237c-2.596 0-4.585 3.379-4.585 6.955c0 2.237 1.083 3.649 2.896 3.649c1.305 0 2.244-.616 3.912-3.532l1.174-2.075q.252.406.53.875l.783 1.317c1.524 2.55 2.373 3.415 3.912 3.415c1.767 0 2.75-1.431 2.75-3.715c0-3.745-2.034-6.889-4.505-6.889m-5.916 6.282c-1.353 2.12-1.821 2.596-2.574 2.596c-.775 0-1.236-.68-1.236-1.894c0-2.596 1.294-5.25 2.837-5.25c.836 0 1.534.482 2.604 2.013c-1.016 1.558-1.631 2.535-1.631 2.535m5.106-.267l-.936-1.56q-.38-.618-.73-1.138c.844-1.301 1.54-1.95 2.366-1.95c1.719 0 3.094 2.53 3.094 5.639c0 1.185-.388 1.872-1.192 1.872c-.77 0-1.139-.51-2.602-2.863"></svg:path>`,
})
export class LineiconsMeta1Icon {
  readonly viewBox = input("0 0 65 64")
  readonly width = input("1.02em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMeta2Icon],svg[lineicons-meta-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.901 23.635h3.252l5.53 10.003l5.53-10.003h3.18v16.436h-2.652V27.474l-4.849 8.723h-2.489l-4.848-8.723v12.597H4.9zm26.051 16.73q-1.844 0-3.24-.816a5.7 5.7 0 0 1-2.178-2.26q-.78-1.444-.78-3.31q0-1.89.762-3.347a5.7 5.7 0 0 1 2.12-2.277q1.355-.822 3.116-.822q1.749 0 3.012.828q1.26.828 1.942 2.318t.681 3.499v.728h-9.004q.247 1.503 1.215 2.365t2.448.863q1.185 0 2.043-.352a5.2 5.2 0 0 0 1.608-1.068l1.409 1.725q-2.102 1.926-5.154 1.926m1.937-9.75q-.834-.852-2.184-.851q-1.314 0-2.2.868q-.888.87-1.122 2.337h6.457q-.117-1.503-.951-2.354m6.716-.617h-2.441v-2.172h2.441v-3.592h2.56v3.592h3.71v2.172h-3.71v5.506q0 1.374.47 1.961q.468.587 1.608.587q.504 0 .857-.041q.352-.041.774-.112v2.149a7.7 7.7 0 0 1-2.125.294q-4.144 0-4.144-4.532zm19.607 10.073h-2.513v-1.714a4.54 4.54 0 0 1-1.702 1.485q-1.034.522-2.348.523q-1.62 0-2.87-.828t-1.967-2.278t-.716-3.316q0-1.878.728-3.323q.727-1.444 2.013-2.265q1.285-.822 2.953-.822q1.256 0 2.254.487a4.46 4.46 0 0 1 1.655 1.38v-1.574h2.513zm-2.56-7.96a3.5 3.5 0 0 0-1.297-1.65q-.886-.603-2.049-.604q-1.643 0-2.618 1.104t-.974 2.982q0 1.89.94 2.994q.938 1.103 2.547 1.103q1.185 0 2.113-.61a3.45 3.45 0 0 0 1.338-1.644z"></svg:path>`,
})
export class LineiconsMeta2Icon {
  readonly viewBox = input("0 0 65 64")
  readonly width = input("1.02em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMetaAltIcon],svg[lineicons-meta-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.354 5.354c-1.64 0-2.922 1.236-4.083 2.805c-1.594-2.03-2.928-2.805-4.524-2.805C4.493 5.354 2 9.59 2 14.071c0 2.805 1.357 4.574 3.63 4.574c1.636 0 2.812-.771 4.903-4.427l1.472-2.6q.316.51.664 1.097l.98 1.65c1.911 3.197 2.976 4.28 4.905 4.28c2.214 0 3.446-1.793 3.446-4.656c0-4.693-2.55-8.635-5.646-8.635m-7.415 7.874c-1.696 2.658-2.283 3.254-3.227 3.254c-.971 0-1.549-.853-1.549-2.374c0-3.254 1.623-6.581 3.557-6.581c1.047 0 1.922.605 3.263 2.524c-1.273 1.952-2.044 3.177-2.044 3.177m6.4-.335l-1.173-1.955a41 41 0 0 0-.915-1.425c1.057-1.632 1.929-2.444 2.965-2.444c2.154 0 3.877 3.17 3.877 7.066c0 1.485-.486 2.347-1.494 2.347c-.965 0-1.427-.638-3.26-3.589"></svg:path>`,
})
export class LineiconsMetaAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMicIcon],svg[lineicons-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 43.9c3.2 0 6.2-1.3 8.5-3.5c2.2-2.2 3.4-5.2 3.4-8.3V13.6C43.9 7 38.6 1.7 32 1.7S20.1 7 20.1 13.6V32c0 6.6 5.3 11.9 11.9 11.9m-7.4-30.3c0-4.1 3.3-7.4 7.4-7.4s7.4 3.3 7.4 7.4V32c0 1.9-.7 3.8-2.1 5.2S34 39.4 32 39.4c-4.1 0-7.4-3.3-7.4-7.4z"></svg:path><svg:path fill="currentColor" d="M52.6 31.5c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3c0 8.9-7.2 16.1-16.1 16.1c-8.8 0-16-7.2-16-16c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3c0 10.6 8 19.3 18.3 20.4v5.7h-6.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h16.9c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-6.2V52c10.4-1.1 18.5-9.9 18.5-20.5"></svg:path>`,
})
export class LineiconsMicIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMicrophoneIcon],svg[lineicons-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44.2 1.8c-10 0-18.1 8.1-18.1 18.1c0 1.7.3 3.4.7 5L4.3 47.3c-3.4 3.4-3.4 9 0 12.4c1.7 1.7 3.9 2.5 6.2 2.5s4.5-.8 6.2-2.5l22.5-22.5c1.6.5 3.2.7 5 .7c10 0 18.1-8.1 18.1-18.1s-8.2-18-18.1-18M7.5 56.5c-1.6-1.6-1.6-4.4 0-6l.3-.3l6 6l-.2.2c-1.7 1.8-4.5 1.8-6.1.1m9.4-3.4l-6-6l17.9-17.8c1.5 2.5 3.6 4.5 6 6zm13.7-33.3c0-1.2.2-2.3.4-3.4L47.5 33c-1.1.3-2.2.4-3.3.4c-7.5 0-13.6-6.1-13.6-13.6M51.9 31L33 12.1c2.5-3.5 6.5-5.8 11.1-5.8c7.5 0 13.6 6.1 13.6 13.6c.1 4.6-2.3 8.7-5.8 11.1"></svg:path>`,
})
export class LineiconsMicrophoneIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMicrophone1Icon],svg[lineicons-microphone-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2a4.75 4.75 0 0 0-4.75 4.75v4.5a4.75 4.75 0 1 0 9.5 0v-4.5A4.75 4.75 0 0 0 12 2M8.75 6.75a3.25 3.25 0 1 1 6.5 0v4.5a3.25 3.25 0 0 1-6.5 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.75 11.25a.75.75 0 0 0-1.5 0a7.75 7.75 0 0 0 7 7.714V20.5H10a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25v-1.536a7.75 7.75 0 0 0 7-7.714a.75.75 0 0 0-1.5 0a6.25 6.25 0 1 1-12.5 0"></svg:path>`,
})
export class LineiconsMicrophone1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMicroscopeIcon],svg[lineicons-microscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.461 2.3a2.25 2.25 0 0 0-3.073.823l-2.811 4.87a2.25 2.25 0 0 0 .823 3.073l.866.5a2.25 2.25 0 0 0 3.074-.824l1.742-3.018a5.642 5.642 0 0 1-4.052 9.56l-.007.001h-.006c-1.5-.002-2.733-.782-3.592-2.021h2.237a.75.75 0 1 0 0-1.5h-7a.75.75 0 0 0 0 1.5h3.015c.93 1.779 2.495 3.198 4.596 3.473V20.5h-3.25a.75.75 0 0 0 0 1.5h8a.75.75 0 1 0 0-1.5h-3.25v-1.754a7.143 7.143 0 0 0 4.083-12.362l.295-.51a2.25 2.25 0 0 0-.824-3.074zm-1.774 1.573A.75.75 0 0 1 14.71 3.6l.866.5a.75.75 0 0 1 .275 1.024l-2.811 4.87a.75.75 0 0 1-1.025.274l-.866-.5a.75.75 0 0 1-.274-1.025z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMicroscopeIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMicrosoftIcon],svg[lineicons-microsoft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11.594h8.594V3H3zm18 0V3h-8.594v8.594zM3 21h8.594v-8.593H3zm9.406 0H21v-8.593h-8.594z"></svg:path>`,
})
export class LineiconsMicrosoftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMicrosoftEdgeIcon],svg[lineicons-microsoft-edge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.463 17.194a.1.1 0 0 0-.13 0a7 7 0 0 1-.87.354c-.968.355-1.903.549-2.903.549a8.15 8.15 0 0 1-5.097-1.774c-1.42-1.194-2.194-2.742-2.194-4.355c0-.355.097-.774.226-1.097c-2.42 2.097-2.87 5.742-.903 8.355a5.3 5.3 0 0 0 1.742 1.645c1.258.774 2.742 1.032 4.193.774c.226-.032.452-.097.646-.193l.096-.033a10.12 10.12 0 0 0 5.194-4.129c.097-.032.097-.096 0-.096"></svg:path><svg:path fill="currentColor" d="M10.204 21.226c-.032-.032-.097-.032-.129-.097a6.6 6.6 0 0 1-1.742-1.677c-1.032-1.42-1.451-3.194-1.193-4.968s1.226-3.258 2.645-4.323c0 0 .032-.032.097-.032a3.6 3.6 0 0 1 .516-.323c.129-.096.258-.129.42-.225h.031c.258-.13.742-.323 1.258-.323c.743 0 1.42.323 1.904.774c-.032-.097-.097-.129-.13-.226c-.419-.677-1-1.548-2.354-2.258c-1.42-.742-2.968-.774-3.258-.774c-3.097 0-5.678 1.903-6.13 4.42c-.096.225-.096.451-.096.677c0 1.516.323 3 .968 4.355c1.548 3.322 4.774 5.42 8.226 5.742c.258.032.548.032.806.032h.032a2.5 2.5 0 0 1-.645-.194c-.42-.129-.839-.354-1.226-.58"></svg:path><svg:path fill="currentColor" d="m21.236 7.194l-.032-.097C19.56 3.967 16.043 2 12.043 2C7.656 2 3.88 4.903 2.559 8.871c-.032.129-.097.323-.13.452c.13-.226.323-.452.485-.678c.322-.322.645-.645 1-.903a7.44 7.44 0 0 1 4.258-1.355c.451 0 2 .032 3.451.807c1.452.774 2.13 1.677 2.549 2.419c.193.323.322.677.42 1c.031.226.096.452.128.677c.032.323.032.581.032.742v.097c0 .484-.258 1.194-.677 1.742l-.097.097c-.096.097-.129.129-.129.226c0 .129.097.258.258.419c1.033.742 3.097.677 3.194.645c.806 0 1.58-.226 2.322-.645c1.452-.806 2.323-2.355 2.323-4.032c.097-1.71-.452-2.839-.71-3.387"></svg:path>`,
})
export class LineiconsMicrosoftEdgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMicrosoftTeamsIcon],svg[lineicons-microsoft-teams-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.534 6.65a2.091 2.091 0 1 1-4.184 0a2.093 2.093 0 1 1 4.184 0m-5.58-.93a3.023 3.023 0 0 1-3.022 3.024h-.078V7.58a1.37 1.37 0 0 0-1.37-1.37H9.948a3.023 3.023 0 0 1 2.984-3.512a3.02 3.02 0 0 1 3.023 3.022M22 10.557v4.706a3.25 3.25 0 0 1-3.247 3.25h-.015a3.2 3.2 0 0 1-1.385-.31a5.25 5.25 0 0 1-4.656 3.1a5.25 5.25 0 0 1-4.819-3.5h3.606c.757 0 1.37-.612 1.37-1.368v-6.76h8.262c.49 0 .884.394.884.882"></svg:path><svg:path fill="currentColor" d="M12.216 7.572a.8.8 0 0 0-.085-.228l-.006-.015a.86.86 0 0 0-.744-.437H2.853A.85.85 0 0 0 2 7.743v8.525c0 .472.381.853.853.853h8.528c.469 0 .85-.381.85-.853V7.744q0-.088-.015-.172M9.359 10.13H7.625v4.643H6.569V10.13H4.872v-.9h4.487z"></svg:path>`,
})
export class LineiconsMicrosoftTeamsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMinusIcon],svg[lineicons-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class LineiconsMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMinusCircleIcon],svg[lineicons-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.558 11.25a.75.75 0 0 0 0 1.5h6.884a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMinusCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMobileIcon],svg[lineicons-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34.9 9.5h-5.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.8c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path><svg:path fill="currentColor" d="M44.4 1.8H19.6c-3.4 0-6.3 2.8-6.3 6.3v48c0 3.4 2.8 6.3 6.3 6.3h24.9c3.4 0 6.3-2.8 6.3-6.3V8c-.1-3.4-2.9-6.2-6.4-6.2M46.2 56c0 1-.8 1.8-1.8 1.8H19.6c-1 0-1.8-.8-1.8-1.8V8c0-1 .8-1.8 1.8-1.8h24.9c1 0 1.8.8 1.8 1.8v48z"></svg:path><svg:path fill="currentColor" d="M34.1 53.3c-.1-.1-.1-.2-.2-.3l-.3-.3c-.5-.5-1.3-.8-2-.6c-.1 0-.3.1-.4.1s-.3.1-.4.2l-.3.3l-.3.3c-.1.1-.1.3-.2.4s-.1.3-.1.4v.4c0 .6.2 1.2.7 1.6l.3.3c.1.1.3.2.4.2s.3.1.4.1h.4c.6 0 1.2-.2 1.6-.7l.3-.3c.1-.1.1-.3.2-.4s.1-.3.1-.4v-.8c-.1-.2-.2-.3-.2-.5"></svg:path>`,
})
export class LineiconsMobileIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMoneyLocationIcon],svg[lineicons-money-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 1.4C17.9 1.4 6.5 12.3 6.5 25.6c0 10.1 13.6 26 21.7 34.6c1 1.1 2.4 1.7 3.8 1.7c1.5 0 2.8-.6 3.8-1.7c8.1-8.6 21.7-24.5 21.7-34.6C57.5 12.3 46.1 1.4 32 1.4m.5 55.7c-.2.2-.4.3-.5.3s-.4 0-.5-.3C21.6 46.6 11 32.8 11 25.6C11 14.8 20.4 6 32 6s21 8.8 21 19.6c0 7.2-10.6 21-20.5 31.5"></svg:path><svg:path fill="currentColor" d="M34.6 25h-5.1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h8.2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-3.3V17c0-1.2-1-2.2-2.2-2.2S30 15.8 30 17v.5h-.3c-3.3 0-6 2.7-6 6s2.7 6 6 6h5.1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-8.2c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h3.3v.5c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-.5h.3c3.3 0 6-2.7 6-6s-2.7-5.9-6-5.9"></svg:path>`,
})
export class LineiconsMoneyLocationIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMoneyProtectionIcon],svg[lineicons-money-protection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.6 7.5L33.3 1.9c-.8-.2-1.7-.2-2.5 0L10.4 7.5c-2.1.6-3.6 2.5-3.6 4.7V27c0 15.5 9.2 29.2 23.4 34.9c.6.2 1.2.4 1.8.4s1.2-.1 1.8-.4c14.2-5.7 23.4-19.5 23.4-35V12.2c0-2.2-1.5-4.1-3.6-4.7m-.9 19.4c0 13.4-8.3 25.8-20.5 30.8h-.3c-12.5-5-20.6-17.1-20.6-30.7V12.2c0-.1.1-.3.2-.3l20.4-5.6h.2l20.4 5.6c.1 0 .2.2.2.3z"></svg:path><svg:path fill="currentColor" d="M35.5 27.2h-7c-1.6 0-2.8-1.3-2.8-2.9s1.3-2.9 2.8-2.9h11.2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-5.4v-1.5c0-1.2-1-2.2-2.3-2.2s-2.2 1-2.2 2.2V17h-1.3c-4 0-7.3 3.3-7.3 7.4s3.3 7.4 7.3 7.4h7c1.6 0 2.8 1.3 2.8 2.9s-1.3 2.9-2.8 2.9H24.4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h5.4v1.5c0 1.2 1 2.2 2.2 2.2s2.3-1 2.3-2.2V42h1.3c4 0 7.3-3.3 7.3-7.4s-3.3-7.4-7.4-7.4"></svg:path>`,
})
export class LineiconsMoneyProtectionIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMongodbIcon],svg[lineicons-mongodb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.74 4.23a35 35 0 0 1-1.713-2.216a.033.033 0 0 0-.054 0a35 35 0 0 1-1.713 2.217c-7.212 9.187 1.138 15.385 1.138 15.385l.067.047c.064.959.221 2.337.221 2.337h.628s.157-1.372.22-2.33l.069-.054s8.349-6.198 1.138-15.385M12 19.482s-.374-.32-.475-.48l-.001-.016l.453-10.002a.024.024 0 0 1 .047 0l.452 10.002v.017c-.101.16-.476.48-.476.48"></svg:path>`,
})
export class LineiconsMongodbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMonitorIcon],svg[lineicons-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6.422a2.25 2.25 0 0 1 2.25-2.25h15.5A2.25 2.25 0 0 1 22 6.422v7.406a2.25 2.25 0 0 1-2.25 2.25h-7v2.25H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-2.25h-7A2.25 2.25 0 0 1 2 13.828zm2.25-.75a.75.75 0 0 0-.75.75v7.406c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75V6.422a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMonitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMonitorCodeIcon],svg[lineicons-monitor-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.03 4.343a.75.75 0 0 1 0 1.06l-1.97 1.972l1.97 1.972a.75.75 0 0 1-1.06 1.06l-2.5-2.502a.75.75 0 0 1 0-1.06l2.5-2.502a.75.75 0 0 1 1.06 0m3.19 0a.75.75 0 0 0 0 1.06l1.97 1.972l-1.97 1.972a.75.75 0 0 0 1.06 1.06l2.5-2.502a.75.75 0 0 0 0-1.06l-2.5-2.502a.75.75 0 0 0-1.06 0"></svg:path><svg:path fill="currentColor" d="M22 15.344v-3.682a7 7 0 0 1-1.5 1.393v2.289a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75V6.75A.75.75 0 0 1 4.25 6h5.638a6.8 6.8 0 0 1 .49-1.5H4.25A2.25 2.25 0 0 0 2 6.75v8.594a2.25 2.25 0 0 0 2.25 2.25h7v1.656H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-1.656h7a2.25 2.25 0 0 0 2.25-2.25"></svg:path>`,
})
export class LineiconsMonitorCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMonitorMacIcon],svg[lineicons-monitor-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.701a2.25 2.25 0 0 1 2.25-2.25h15.5A2.25 2.25 0 0 1 22 5.701v9.586a2.25 2.25 0 0 1-2.25 2.25h-5.5v1.512h1a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h1v-1.512h-5.5A2.25 2.25 0 0 1 2 15.287zM12.75 19.05v-1.512h-1.5v1.512zm1.5-3.012h5.5a.75.75 0 0 0 .75-.75V13.45h-17v1.836c0 .414.336.75.75.75h5.5v-.01h1.5v.01h1.5v-.01h1.5zM20.5 5.7a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75v6.25h17z"></svg:path>`,
})
export class LineiconsMonitorMacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMoonHalfRight5Icon],svg[lineicons-moon-half-right-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.744 3.17a.75.75 0 0 0 .094.895A7.252 7.252 0 0 1 3.589 14.314a.75.75 0 0 0-1.236.74c1.13 4.286 5.03 7.446 9.67 7.446c5.523 0 10-4.477 10-10c0-4.64-3.16-8.541-7.445-9.67a.75.75 0 0 0-.834.34m2.678 2.055A8.5 8.5 0 1 1 4.749 16.9A8.752 8.752 0 0 0 16.423 5.225" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMoonHalfRight5Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMoreIcon],svg[lineicons-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 39.5c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5M32 29c-1.7 0-3 1.4-3 3s1.4 3 3 3s3-1.4 3-3s-1.3-3-3-3m23.7 10.5c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5c.1 4.1-3.3 7.5-7.5 7.5m0-10.5c-1.7 0-3 1.4-3 3s1.4 3 3 3s3-1.4 3-3s-1.3-3-3-3M8.3 39.5C4.2 39.5.8 36.1.8 32s3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5m0-10.5c-1.7 0-3 1.4-3 3s1.4 3 3 3c1.7 0 3-1.4 3-3s-1.4-3-3-3"></svg:path>`,
})
export class LineiconsMoreIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMoreAltIcon],svg[lineicons-more-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10.9" cy="32" r="8" fill="currentColor"></svg:circle><svg:circle cx="32" cy="32" r="8" fill="currentColor"></svg:circle><svg:circle cx="53.1" cy="32" r="8" fill="currentColor"></svg:circle>`,
})
export class LineiconsMoreAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMountains2Icon],svg[lineicons-mountains-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.91 5.688c.848-1.584 3.12-1.584 3.967 0l3.204 5.986l.23-.485c.815-1.71 3.249-1.71 4.063 0l2.427 5.095c.711 1.493-.377 3.217-2.031 3.217H4.273c-1.7 0-2.786-1.813-1.984-3.312zm4.644 12.313h7.216a.75.75 0 0 0 .677-1.072l-2.427-5.095a.75.75 0 0 0-1.354 0l-.87 1.824a.75.75 0 0 1-1.337.032l-3.904-7.294a.75.75 0 0 0-1.323 0l-5.62 10.501a.75.75 0 0 0 .66 1.104z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMountains2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMouseIcon],svg[lineicons-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 1.8c-11.2 0-20.2 9.9-20.2 22.1v16.2c0 12.2 9.1 22.1 20.2 22.1c5.2 0 10.1-2.1 13.8-5.9c4.2-4.2 6.5-10.2 6.4-16.3V23.9c0-12.2-9.1-22.1-20.2-22.1m15.7 22.1V25H34.4V6.5c7.6 1.3 13.3 8.6 13.3 17.4M29.9 6.4V25H16.2v-1.1c0-9 6-16.4 13.7-17.5m12.7 46.8c-2.9 2.9-6.7 4.5-10.6 4.5c-8.7 0-15.7-7.9-15.7-17.6V29.5h31.5v10.6c0 5-1.9 9.8-5.2 13.1"></svg:path>`,
})
export class LineiconsMouseIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMouse2Icon],svg[lineicons-mouse-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 9.867a7.5 7.5 0 1 1 15 0v5a7.5 7.5 0 0 1-15 0zm1.5 1.5v3.5a6 6 0 0 0 12 0v-3.5zm5.25-1.5V3.914A6 6 0 0 0 6 9.867zm1.5 0H18a6 6 0 0 0-5.25-5.953z"></svg:path>`,
})
export class LineiconsMouse2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMoveIcon],svg[lineicons-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m61.3 29.7l-8.1-8.1c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l5 5H34.3V9l4.9 5c.4.4 1 .7 1.6.7s1.1-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-8.1-8.1c-.6-.6-1.4-1-2.3-1s-1.7.3-2.3 1l-8.1 8.1c-.9.9-.9 2.3 0 3.2s2.3.9 3.2 0l5-5v20.8H9l5-5c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0l-8.1 8.1c-1.3 1.3-1.3 3.3 0 4.6l8.1 8.1c.4.4 1 .7 1.6.7s1.1-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-5-5h20.8V55l-5-5c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l8.1 8.1c.6.6 1.4 1 2.3 1s1.7-.3 2.3-1l8.1-8.1c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0l-4.9 5V34.2H55l-5 5c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7l8.1-8.1c1.2-1.3 1.2-3.3 0-4.6"></svg:path>`,
})
export class LineiconsMoveIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMushroomIcon],svg[lineicons-mushroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54.3 15.1C49.9 6.9 41.4 1.8 32 1.8S14.1 6.9 9.7 15.2C7.9 18.6 7 22.1 6.9 25.8v.3c0 .3.1.6.2.9c2.2 4.9 8.2 8.6 15.8 10.2l-1.6 15.1c-.3 2.5.5 5 2.2 6.9s4.1 3 6.6 3h3.7c2.5 0 5-1.1 6.6-3c1.7-1.9 2.5-4.4 2.2-6.9L41 37.2c7.6-1.7 13.5-5.4 15.7-10.2c.1-.3.2-.7.2-1c.1-3.8-.9-7.5-2.6-10.9m-16 37.7c.1 1.3-.3 2.5-1.1 3.4s-2 1.5-3.3 1.5h-3.7q-1.95 0-3.3-1.5c-1.35-1.5-1.2-2.2-1.1-3.4L27.4 38c1.5.2 3 .2 4.6.2s3.2-.1 4.7-.3zM32 33.7c-10.7 0-18.4-4-20.6-8.1c.1-2.9.9-5.6 2.3-8.3c3.6-6.8 10.6-11 18.3-11s14.7 4.2 18.3 11c1.4 2.6 2.2 5.4 2.3 8.4c-2.3 4-9.9 8-20.6 8"></svg:path><svg:circle cx="21.9" cy="24.4" r="2.3" fill="currentColor"></svg:circle><svg:circle cx="42.2" cy="24.4" r="2.3" fill="currentColor"></svg:circle><svg:circle cx="32" cy="14.2" r="2.3" fill="currentColor"></svg:circle>`,
})
export class LineiconsMushroomIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMushroom1Icon],svg[lineicons-mushroom-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.023 2.5C6.47 2.5 2.416 7.789 3.43 12.982c.203 1.042 1.15 1.64 2.084 1.64h3.924l-.478 4.383a2.25 2.25 0 0 0 2.237 2.494h1.655a2.25 2.25 0 0 0 2.237-2.494l-.478-4.383h3.924c.934 0 1.88-.598 2.084-1.64C21.63 7.79 17.578 2.5 12.023 2.5m1.794 10.622H5.513c-.347 0-.57-.211-.612-.427C4.061 8.388 7.452 4 12.023 4c4.572 0 7.962 4.388 7.122 8.695c-.041.216-.264.427-.611.427zm-2.871 1.5H13.1l.495 4.546a.75.75 0 0 1-.745.83h-1.655a.75.75 0 0 1-.746-.83z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMushroom1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMushroom5Icon],svg[lineicons-mushroom-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.52 9.05a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m6.418 2.216a.9.9 0 1 1 1.8 0a.9.9 0 0 1-1.8 0M13.46 5.797a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.43 12.982C2.415 7.79 6.468 2.5 12.022 2.5s9.608 5.289 8.595 10.482c-.203 1.042-1.15 1.64-2.084 1.64H14.61l.478 4.383a2.25 2.25 0 0 1-2.237 2.494h-1.655a2.25 2.25 0 0 1-2.237-2.494l.478-4.383H5.513c-.934 0-1.88-.598-2.084-1.64m10.301.14h4.803c.347 0 .57-.211.611-.427C19.986 8.388 16.595 4 12.023 4c-4.57 0-7.962 4.388-7.122 8.695c.042.216.265.427.612.427h4.803zm-.63 1.5h-2.155l-.496 4.546a.75.75 0 0 0 .746.83h1.655a.75.75 0 0 0 .745-.83z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMushroom5Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMusicIcon],svg[lineicons-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.25 4a.75.75 0 0 0-.888-.737l-12 2.25a.75.75 0 0 0-.612.737v8.209A3.95 3.95 0 0 0 5.875 14c-.874 0-1.694.27-2.31.74c-.618.47-1.065 1.174-1.065 2.01s.447 1.54 1.064 2.01s1.437.74 2.311.74s1.694-.27 2.31-.74c.606-.46 1.047-1.146 1.064-1.96l.001-.029V10.62l10.5-2.01v3.599a3.95 3.95 0 0 0-1.875-.459c-.874 0-1.694.27-2.31.74c-.618.47-1.065 1.174-1.065 2.01s.447 1.54 1.064 2.01s1.437.74 2.311.74s1.694-.27 2.31-.74c.606-.46 1.047-1.146 1.065-1.96zm-1.5 10.5c0 .268-.14.564-.473.818c-.333.253-.826.432-1.402.432s-1.069-.179-1.402-.432c-.332-.254-.473-.55-.473-.818s.14-.564.473-.818c.333-.253.826-.432 1.402-.432s1.069.179 1.402.432c.332.254.473.55.473.818M7.277 15.932c.332.254.473.55.473.818s-.14.564-.473.818c-.333.253-.827.432-1.402.432s-1.069-.179-1.402-.432c-.332-.254-.473-.55-.473-.818s.14-.564.473-.818c.333-.253.827-.432 1.402-.432s1.069.179 1.402.432m12.473-8.85l-10.5 2.01v-2.22l10.5-1.968z"></svg:path>`,
})
export class LineiconsMusicIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsMysqlIcon],svg[lineicons-mysql-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.422 17.337c-1.088-.03-1.932.081-2.64.379c-.203.082-.53.082-.557.338c.11.108.122.284.218.433c.163.27.449.635.707.824l.87.622c.531.325 1.13.514 1.647.838c.299.19.598.433.898.636c.152.108.244.284.435.352v-.041c-.095-.122-.123-.297-.217-.433l-.409-.392a6.4 6.4 0 0 0-1.415-1.365c-.435-.298-1.387-.703-1.564-1.203l-.027-.03c.299-.03.653-.136.939-.217c.463-.121.884-.095 1.36-.216l.653-.19v-.12c-.245-.244-.422-.569-.68-.798a18 18 0 0 0-2.245-1.663c-.422-.27-.966-.447-1.415-.676c-.164-.081-.435-.122-.53-.257c-.246-.297-.381-.69-.558-1.041l-1.116-2.353c-.245-.527-.395-1.054-.694-1.54c-1.4-2.3-2.925-3.692-5.265-5.058c-.503-.284-1.101-.406-1.738-.554l-1.02-.055c-.218-.094-.436-.351-.626-.473c-.775-.487-2.775-1.541-3.347-.151c-.368.878.544 1.743.854 2.19c.231.31.53.662.694 1.014c.091.23.122.473.217.716c.218.595.422 1.258.708 1.812c.152.284.312.582.503.839c.109.151.3.216.34.46c-.19.27-.204.675-.313 1.014c-.49 1.528-.3 3.42.395 4.545c.218.338.731 1.082 1.428.798c.613-.244.476-1.014.653-1.69c.041-.162.014-.27.095-.379v.03l.558 1.123c.422.662 1.157 1.352 1.769 1.812c.326.243.584.662.992.81v-.04h-.026c-.082-.121-.205-.176-.314-.27a6.6 6.6 0 0 1-.707-.812a17.4 17.4 0 0 1-1.523-2.46c-.218-.42-.409-.879-.585-1.298c-.083-.162-.083-.406-.218-.487c-.205.297-.503.555-.654.92c-.258.58-.285 1.297-.38 2.041c-.055.014-.03 0-.055.03c-.435-.107-.585-.554-.748-.932c-.408-.96-.476-2.501-.123-3.61c.096-.284.504-1.177.341-1.447c-.082-.257-.354-.405-.504-.608a5.5 5.5 0 0 1-.49-.865c-.325-.758-.489-1.596-.843-2.353c-.163-.352-.449-.717-.68-1.041c-.259-.365-.544-.622-.748-1.055c-.068-.151-.163-.392-.054-.554c.026-.108.081-.152.19-.176c.176-.151.68.04.857.121c.503.203.925.392 1.347.676c.19.135.394.392.64.46h.285c.436.095.925.03 1.333.152c.72.23 1.374.567 1.96.933a12 12 0 0 1 4.244 4.624c.163.311.23.595.38.92c.287.662.64 1.338.926 1.987c.286.636.558 1.285.966 1.812c.204.284 1.02.433 1.387.582c.272.12.694.23.94.378c.461.284.924.609 1.359.92c.217.162.898.5.939.77zM6.548 5.588a2.2 2.2 0 0 0-.557.068v.03h.027c.109.216.3.365.435.555l.313.649l.027-.03c.19-.136.286-.352.286-.676c-.082-.095-.095-.19-.163-.284c-.082-.135-.259-.203-.368-.311" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMysqlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsNasaIcon],svg[lineicons-nasa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.745 20.74c-.053 0-.238-.022-.41-.039a8.7 8.7 0 0 1-4.494-1.804l-.19-.149l.09-.105c.079-.091.094-.101.125-.08c.02.017.122.092.227.174c2.02 1.561 4.742 2.113 7.236 1.466a8.5 8.5 0 0 0 3.023-1.465a8.7 8.7 0 0 0 2.247-2.578a8.6 8.6 0 0 0 1.05-3.361c.038-.405.038-1.184 0-1.589a8.7 8.7 0 0 0-.56-2.335l-.076-.185l.102-.104c.056-.056.108-.096.115-.088a8.76 8.76 0 0 1-4.108 11.328a8.7 8.7 0 0 1-3.016.877c-.26.028-1.162.051-1.367.035zm-6.2-.931c0-.017-.017-.082-.02-.15l-.017-.123l.11-.145c.69-.917 1.86-2.03 3.109-2.961a95 95 0 0 1 3.695-2.545c.127-.08.23-.153.23-.162c0 0-.407-.016-.905-.016h-.904l.307-.31l-.167-.435h-1.08l-.032.215l-.033.215l.045.068c.025.039.073.105.108.152l.062.083h-.991l.127-.115l.178-.161c.041-.039.078-.139.193-.528l.142-.48l-.18-.322c-.99-1.771-1.48-3.413-1.323-4.44c.097-.636.38-.962.97-1.119c.22-.058.65-.063.9-.016c1.107.235 2.383 1.18 3.76 2.783c.11.13.295.34.41.469c1.397 1.562 2.444 3.648 2.681 5.34c.037.264.032.823-.017 1.035c-.1.51-.332.857-.686 1.03c-.225.11-.353.139-.627.14c-.369 0-.719-.08-1.164-.272c-.218-.093-.568-.278-.568-.299c0 0 .017-.028.025-.046c.024-.032.037-.028.188.056c.374.207.822.374 1.161.433c.215.037.598.029.743-.018c.189-.062.32-.14.458-.278c.682-.678.52-2.33-.421-4.264a12.3 12.3 0 0 0-2.007-2.955l-.496-.547c-1.135-1.267-2.187-2.078-3.094-2.384a2.1 2.1 0 0 0-.802-.137c-.252 0-.304 0-.46.054c-.365.11-.58.27-.705.528c-.128.264-.177.563-.16 1c.034.876.378 1.978 1.008 3.228c.24.478.423.804.445.795c.017 0 .109-.307.217-.674l.2-.666l-.368-.394h.737c.405 0 .743.001.752.016c0 0 .254.65.545 1.424l.53 1.409l.364.365l.487-.317a85 85 0 0 0 1.84-1.237c.218-.15.402-.274.412-.274c.016-.001.113.16.101.17l-1.318.902c-3.408 2.33-5.367 3.684-5.684 3.924a17.4 17.4 0 0 0-2.833 2.753c-.1.125-.183.21-.188.196zm5.287-7.31c-.152-.38-.439-1.06-.447-1.06c0 0-.057.148-.114.327c-.056.18-.131.423-.168.538l-.066.21h.4c.221 0 .399 0 .395-.016m-.593-.244c.078-.264.155-.483.167-.47c.017.018.175.394.175.416c0 .017-.3.099-.343.099zm-.93 6.861a4 4 0 0 0-.1-.509c-.016-.017-.14-.042-.291-.067a3 3 0 0 1-.268-.05s.125-.025.269-.046a1.3 1.3 0 0 0 .285-.065c.017-.017.042-.139.065-.278c.038-.22.06-.315.06-.253c0 .078.085.512.103.531c.017.017.147.042.297.063c.15.022.275.044.28.047c0 0-.12.027-.278.05c-.16.025-.293.055-.305.07c-.017.017-.039.133-.06.266c-.034.205-.057.307-.057.241m-3.297-.957a8.7 8.7 0 0 1-2.162-3.632a.9.9 0 0 1 .243-.131s.054.151.114.329a8.4 8.4 0 0 0 2.145 3.377l.13.12l-.089.098a.5.5 0 0 1-.105.1c-.016.002-.132-.115-.276-.261m8.828.212c-.024-.023-.017-.1.016-.125c.024-.018.042-.02.079 0c.048.022.058.052.036.11c-.016.032-.106.043-.131.018zm1.422-.203c-.075-.028-.07-.172 0-.177c.097 0 .127.02.119.108c0 .063-.06.093-.125.07zm-6.404-.556c-.035-.041 0-.108.047-.108c.065 0 .098.045.07.097a.07.07 0 0 1-.117.016zm-.948-.12c-.057-.056-.024-.125.06-.125c.063 0 .091.06.053.115q-.052.074-.113.017zm2.88-.028q-.072-.06.03-.127c.05-.031.123.047.095.102q-.048.087-.125.025m5.959-.592c-.035-.099-.042-.104-.153-.144l-.117-.041l.102-.034c.108-.035.14-.071.178-.192c.029-.09.047-.081.078.034c.029.101.04.115.147.148c.043.017.085.03.092.037c0 0-.037.033-.1.056c-.107.042-.117.05-.139.132a.4.4 0 0 1-.04.097s-.031-.037-.051-.094zm-4.376.016c-.025-.025-.016-.1.017-.111c.051-.02.09.016.085.063c0 .05-.07.08-.102.048m-3.621-.056c-.068-.069-.001-.183.095-.159c.057.017.087.097.057.147c-.027.043-.112.05-.15.017zm8.638-.134c-.017-.02-.017-.031 0-.05c.02-.016.032-.016.05 0c.016.02.016.032 0 .05c-.02.017-.032.017-.05 0m-11.3-.161c-.058-.059-.017-.165.065-.165c.042 0 .1.06.1.101c0 .039-.062.095-.103.095c-.017 0-.045-.018-.062-.031m8.725-.165c-.019-.03 0-.059.05-.059c.025 0 .038.017.038.039c0 .041-.065.056-.088.02m1.712-.055c-.072-.025-.079-.114-.017-.145c.037-.017.055-.017.078 0c.067.055.017.169-.068.141zm-9.267-.034c-.016-.038 0-.07.05-.07c.039 0 .06.034.045.074c-.016.033-.081.03-.095 0zm-1.483-.12c-.037-.036-.04-.108 0-.141c.052-.052.172 0 .172.066c0 .037-.07.107-.106.107c-.017 0-.042-.017-.059-.03zm5.467-.397a1 1 0 0 1-.176-.09c-.115-.073-.317-.275-.361-.362a2 2 0 0 0-.139-.199l-.105-.13l.21-.143l.1.08c.055.043.165.113.242.153c.253.134.522.446.522.609c0 .116-.122.151-.294.085zm-5.269-.035s-.016-.03-.016-.05q0-.037.05-.036c.04 0 .05 0 .043.043c0 .043-.053.068-.08.041zm-.914-.097c-.022-.024-.02-.036 0-.063c.03-.03.035-.03.065 0c.026.027.028.039 0 .063c-.017.017-.032.03-.04.03c0 0-.027-.016-.04-.03zm3.183-.034c-.016-.037.035-.079.075-.064c.017 0 .029.027.025.047c0 .043-.085.056-.1.017m7.137 0c0-.017 0-.035.017-.052c.035-.035.073-.018.073.035c0 .041-.067.053-.088.017zm1.917 0c-.038-.029-.026-.084.022-.104c.04-.017.091.037.076.077c-.016.045-.058.055-.098.027m.266-.119c0-.076-.087-.495-.107-.516c-.017-.016-.148-.046-.297-.07c-.3-.048-.3-.051.051-.1a1 1 0 0 0 .248-.055c.017-.016.042-.136.065-.276c.037-.22.058-.315.06-.254c.001.089.082.51.102.53c.016.016.131.037.26.056c.34.046.347.056.066.096a2 2 0 0 0-.295.055c-.059.022-.059.022-.105.33c-.027.175-.047.264-.047.206zm-2.812-.062c-.016-.043.035-.071.07-.038c.017.017.022.037.017.049c-.02.031-.07.024-.083-.017zm2.95-.036c-.017-.017-.02-.049-.017-.074c0-.036.018-.044.075-.044c.062 0 .07 0 .075.056c.017.084-.08.125-.133.062m-2.381-.374c-.027-.04-.028-.06-.017-.098c.042-.09.2-.055.2.043c0 .038-.074.103-.117.103c-.022 0-.054-.023-.072-.05zm1.2 0c-.042-.023-.044-.102 0-.135c.04-.033.126 0 .126.053c0 .07-.065.114-.123.08zm-14.463-.34c.245-.202.883-.603 1.416-.889c.382-.204.908-.456.89-.425c0 .016-.067.088-.133.168c-.085.105-.119.16-.119.202c0 .057-.016.063-.362.219a14 14 0 0 0-1.24.627c-.246.143-.256.148-.382.147H2zm8.006-.22a38 38 0 0 1-.773-1.105l-.18-.269h.073c.057 0 .08.017.1.043c.053.087.428.61.71.987l.288.384l-.045.037c-.025.02-.055.037-.067.037c-.017 0-.057-.05-.106-.113m6.287.036c0-.054.036-.07.073-.035c.035.035.018.073-.035.073c-.025 0-.038-.017-.038-.038m-13.625-.428c-.033-.057-.153-.738-.201-1.149a11.5 11.5 0 0 1 0-1.82c.164-1.423.618-2.709 1.356-3.84a8.74 8.74 0 0 1 13.886-1.04c.304.345.775.969.775 1.026c0 .022-.182.147-.212.147c0 0-.053-.058-.101-.131a8.56 8.56 0 0 0-3.16-2.793a8.5 8.5 0 0 0-6.975-.33a10 10 0 0 0-1.238.616a8.52 8.52 0 0 0-3.685 4.63a8.5 8.5 0 0 0-.268 4.19l.059.315c0 .045 0 .058-.11.122c-.065.038-.121.065-.126.057m9.461-.152v-.117l.606-.416l.275.016c.22 0 .296 0 .386-.021c.182-.054.308-.192.308-.342c0-.041-.022-.076-.078-.126l-.079-.07l.064-.047c.128-.095.878-.603.904-.613c.016 0 .046.02.078.067c.14.211.179.476.11.747a.8.8 0 0 1-.235.418c-.328.35-.831.521-1.372.465a3.3 3.3 0 0 1-.607-.129c-.02-.016-.074.025-.157.1l-.171.152l-.045.038v-.116zm-7.947-.2s.061-.09.136-.18l.137-.167v-2.486l-.116-.182a3 3 0 0 1-.116-.19s.302-.017.672-.017h.673l1.15 1.935v-1.704l-.2-.23h.412c.227 0 .413 0 .413.017c0 0-.044.075-.099.155l-.098.145v2.568l.293.32h-.669c-.368 0-.675-.001-.683-.016c0 0-.262-.447-.566-.974s-.56-.967-.57-.977c-.016-.017-.016.333-.016.818v.836l.117.155c.065.085.116.159.116.165c0 0-.224.017-.499.017c-.274 0-.498 0-.498-.017zm10.917-.111c.058-.059.112-.102.118-.094c0 0 .022.042.034.074c.016.031.026.073.033.093c.017.032-.001.035-.138.035h-.154zm.426-.195a5 5 0 0 1-.114-.321c0-.017.154-.51.343-1.11c.33-1.053.341-1.092.308-1.132a6 6 0 0 0-.18-.197l-.147-.157h.722c.398 0 .729.002.735.017c0 0 .275.649.595 1.424l.582 1.408l.398.382H16.83l.152-.152a1 1 0 0 0 .152-.172c0-.017-.035-.108-.075-.215l-.077-.194h-1.087l-.055.195a2 2 0 0 0-.055.227c0 .017.043.09.098.16c.054.072.099.134.099.14c0 0-.064.017-.142.017h-.142l-.112-.302zm1.237-.906c0-.047-.44-1.077-.452-1.057a25 25 0 0 0-.33 1.05c0 .016.116.021.39.021c.216 0 .392 0 .392-.016zm-4.637.481l.09.065c.05.035.094.07.098.079c0 0-.036.04-.09.073l-.098.06zm-4.852-.505v-.234l.171-.052c.095-.028.311-.095.482-.148s.318-.09.326-.082c.035.037.276.48.266.49c-.02.02-1.145.26-1.217.26c-.023 0-.028-.043-.028-.234m5.596.05c-.454-.163-.71-.386-.805-.702c-.082-.269-.017-.67.146-.888a1.2 1.2 0 0 1 .542-.428c.11-.04.384-.099.537-.115l.117-.017l.118.152c.132.17.264.352.264.362h-.249c-.295 0-.359.025-.43.167c-.047.093-.06.266-.024.333c.037.07.185.134.47.204c.288.07.671.23.633.263c-.016.017-.288.203-.833.576a4 4 0 0 1-.254.167l-.232-.083zm-4.255-.636c-.028-.057-.028-.057.032-.079a.2.2 0 0 1 .066-.021s0 .035-.016.078c-.024.093-.042.098-.082.022m2.238-.095c-.017-.03-.046-.125-.08-.21l-.115-.307l-.055-.15l.454-.171c.479-.181 1.562-.61 1.915-.76l.21-.088l.157.183l-.175.017c-.353.028-.623.135-.836.334c-.221.207-.327.407-.394.746l-.035.174l-.086.027c-.312.095-.89.26-.913.26c-.017 0-.037-.024-.047-.053zm3.885-.045c-.027-.044-.045-.087-.039-.097c0-.017.115-.092.24-.183c.127-.09.383-.28.57-.421c.186-.142.345-.257.352-.257c0 0 .036.029.06.062c.044.058.045.067.019.142c-.025.073-.07.108-.576.455a16 16 0 0 1-.562.378s-.036-.036-.064-.08m-.348-.572a11 11 0 0 0-.296-.433a4 4 0 0 1-.201-.298l.156.035l.15.04l.294-.164v.96s-.049-.063-.097-.141zm-1.207-.052c0-.033.091-.098.166-.118s.24-.03.223-.017c-.02.02-.389.145-.389.132zm1.428-.665c0-.123 0-.16-.037-.185c-.053-.049-.09-.04-.266.055l-.162.088l-.348-.08l-.143-.177c-.079-.097-.137-.184-.127-.192c.017-.017.206-.099.437-.201c1.68-.741 3.177-1.523 4.422-2.31c.337-.214.674-.48 1.438-1.136c1.015-.872 1.696-1.562 2.02-2.049c.05-.073.091-.135.096-.135c.025 0-.203.523-.385.88c-.878 1.73-2.485 3.605-4.414 5.152l-.238.19h-.51l.19-.156c.208-.173.808-.76.84-.822c.017-.028-.128.035-.51.225a29 29 0 0 1-2.2.977l-.103.04zm-5.533-1.57c.017-.037.055-.042.055 0c0 .016-.016.031-.031.031c-.017 0-.029-.016-.024-.023zm.069-.466c0-.017-.027-.122-.044-.235a1 1 0 0 0-.058-.245c-.02-.034-.068-.047-.257-.077c-.354-.055-.355-.057-.047-.103c.153-.024.287-.05.297-.06c.017-.017.037-.127.058-.261a2 2 0 0 1 .055-.258s.03.095.05.23s.045.259.059.276c.016.021.108.043.314.071c.323.045.322.049-.044.102q-.238.036-.267.067c-.016.016-.045.141-.066.275s-.044.232-.05.216zm-.72-.363c-.034-.043 0-.096.063-.096c.038 0 .046.016.046.058c0 .045-.016.06-.04.065a.15.15 0 0 1-.068-.027m-.227-.374c-.017-.041.018-.095.061-.095c.02 0 .044.017.055.032c.03.047 0 .095-.055.095c-.028 0-.055-.017-.061-.032m4.693-.259a.07.07 0 0 1-.02-.063c.016-.065.105-.078.123-.018c.022.07-.042.12-.103.081m-1.17-.891c-.017-.039 0-.07.05-.07c.038 0 .068.05.048.08c-.016.028-.086.02-.098-.017zm-1.958-.022c0-.017 0-.045.02-.063c.029-.029.035-.029.062 0c.017.016.025.045.017.063c-.017.042-.084.043-.099 0m3.282-.582a1.4 1.4 0 0 0-.066-.284c-.017-.017-.14-.037-.286-.06c-.238-.038-.328-.06-.253-.062c.098 0 .516-.08.537-.101c.016-.017.043-.14.066-.28a4 4 0 0 1 .049-.26s.018.056.07.38c.016.077.035.15.048.164c.022.018.425.088.557.098c.057 0-.073.034-.304.067a1.2 1.2 0 0 0-.258.057c-.017.016-.042.133-.064.266a7 7 0 0 1-.045.262a2 2 0 0 1-.051-.25zm-3.158.189c-.023-.023-.016-.045.017-.045c.017 0 .03.017.03.03c0 .03-.023.038-.045.017zm1.09-.018c0-.017 0-.045.02-.064c.028-.028.035-.028.061 0c.017.017.025.045.018.064c-.016.041-.085.043-.1 0m-1.294-.05c-.061-.062.017-.159.084-.107c.045.033.033.118-.019.127c-.021 0-.05 0-.063-.019zm1.63-.152c-.016-.023.022-.047.049-.03c.021.017 0 .048-.02.048c-.017 0-.022 0-.029-.018m-1.752-.03c0-.017.017-.03.03-.03c.017 0 .03.017.03.03c0 .017-.016.03-.03.03c-.016 0-.03-.017-.03-.03m2.222-.236c-.036-.037-.04-.109 0-.142c.03-.03.119-.03.149 0c.055.055 0 .172-.075.172a.13.13 0 0 1-.067-.031zm-.965-.227c-.065-.065.017-.188.102-.165c.057.017.087.097.057.147c-.025.04-.127.051-.159.018m.582-.848c-.021-.027-.021-.037 0-.062c.042-.041.097-.018.09.039c0 .053-.06.066-.095.025z"></svg:path>`,
})
export class LineiconsNasaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsNetflixIcon],svg[lineicons-netflix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 14.39c-.3.054-.607.07-.924.113L2.86 11.63v2.996c-.3.033-.575.076-.86.119v-5.49h.802L3.9 12.37V9.255h.85zm1.663-3.125c.327 0 .829-.016 1.13-.016v.858c-.375 0-.814 0-1.13.016v1.276c.496-.032.992-.075 1.494-.091v.825l-2.339.188V9.255h2.339v.858H6.413zm4.634-1.152h-.876v3.945c-.285 0-.57 0-.844.011v-3.956H8.45v-.858h2.597zm1.373 1.093h1.156v.858H12.42v1.946h-.83V9.255h2.36v.858h-1.53zm2.903 2.053c.48.011.966.049 1.436.075v.848a53 53 0 0 0-2.28-.113V9.255h.844zm2.148.982c.27.016.554.032.829.064v-5.05h-.829zM22 9.255l-1.072 2.61L22 14.746c-.317-.043-.633-.102-.95-.156l-.607-1.587l-.618 1.458c-.306-.053-.601-.07-.907-.112l1.087-2.514l-.982-2.58h.908l.554 1.443l.591-1.442z"></svg:path>`,
})
export class LineiconsNetflixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsNetlifyIcon],svg[lineicons-netlify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.414 8.94l-.007-.003l-.012-.006a.06.06 0 0 1-.014-.049l.396-2.465l1.86 1.891l-1.934.837l-.017.003h-.008l-.01-.009a.9.9 0 0 0-.254-.198m2.697-.15l1.988 2.022c.412.42.619.63.694.873a1 1 0 0 1 .028.11l-4.75-2.047l-.008-.003c-.019-.008-.041-.017-.041-.037s.023-.029.042-.037l.006-.002zm2.63 3.653c-.104.196-.303.4-.642.744l-2.241 2.28l-2.899-.615l-.015-.003c-.026-.004-.053-.008-.053-.032a.9.9 0 0 0-.336-.622c-.012-.012-.008-.031-.005-.048l.001-.008l.545-3.404l.002-.011c.003-.026.008-.056.031-.056a.88.88 0 0 0 .595-.347q.006-.008.014-.014c.016-.008.036 0 .053.007l4.949 2.13m-3.398 3.548l-3.686 3.748l.631-3.943l.001-.006l.003-.015q.01-.017.031-.023l.006-.002a.95.95 0 0 0 .357-.27c.012-.015.027-.029.046-.031h.015l2.595.542m-4.466 4.541l-.415.423l-4.593-6.751l-.005-.007c-.007-.01-.015-.02-.013-.032q.002-.012.011-.021l.005-.007l.039-.064l.01-.019l.002-.001q.008-.02.026-.032c.01-.005.025-.003.037 0l5.088 1.067a.1.1 0 0 1 .039.017q.009.01.01.023a.91.91 0 0 0 .527.613c.014.007.008.023.002.04l-.008.024zm-.868.882c-.306.308-.486.472-.69.537a1 1 0 0 1-.619 0c-.239-.077-.445-.286-.858-.707l-4.612-4.69l1.204-1.9a.1.1 0 0 1 .02-.025c.014-.01.032-.005.048 0c.276.085.573.07.84-.044c.013-.005.027-.009.038.001l.014.017zm-7.224-5.313l-1.058-1.076l2.09-.907l.016-.003c.018 0 .028.018.037.034q.031.05.067.096l.007.008q.007.014-.005.026zM4.259 14.55L2.92 13.187a8 8 0 0 1-.507-.544l4.07.859l.015.003c.025.004.053.008.053.032c0 .026-.03.038-.056.048l-.012.006zm-2.08-2.606q.006-.131.046-.258c.076-.243.282-.453.695-.873L4.633 9.07q1.183 1.746 2.373 3.488c.013.019.029.04.013.055c-.075.084-.15.176-.203.276a.1.1 0 0 1-.025.032q-.01.005-.022 0zm2.913-3.34l2.302-2.342c.217.097 1.005.435 1.71.738c.532.23 1.019.438 1.172.506c.015.006.029.012.035.028c.005.01.002.021 0 .031c-.074.343.027.702.269.954c.015.015 0 .038-.014.057l-.007.01l-2.338 3.685a.1.1 0 0 1-.023.026c-.012.008-.03.004-.044 0a1.2 1.2 0 0 0-.278-.038a1.5 1.5 0 0 0-.268.033c-.01.001-.02.003-.028-.003a.1.1 0 0 1-.023-.026zM7.86 5.789l2.982-3.033c.412-.42.62-.63.858-.706a1 1 0 0 1 .619 0c.239.076.445.286.858.706l.646.658l-2.12 3.34a.1.1 0 0 1-.021.025c-.013.009-.031.005-.046 0a1.06 1.06 0 0 0-.985.193c-.014.015-.034.006-.052-.002c-.277-.122-2.43-1.048-2.739-1.181m6.414-1.917l1.958 1.991l-.472 2.972v.008l-.004.02c-.005.01-.016.012-.026.015a.9.9 0 0 0-.312.165l-.022-.004l-2.984-1.29l-.005-.002c-.02-.008-.042-.017-.042-.037a1.2 1.2 0 0 0-.159-.477c-.014-.024-.03-.05-.018-.074zM12.257 8.36l2.797 1.205c.015.008.032.014.04.03q.003.015 0 .03a1 1 0 0 0-.016.138v.08c0 .02-.02.027-.039.035l-.005.002c-.444.193-6.221 2.699-6.23 2.699s-.018 0-.027-.01c-.015-.015 0-.037.014-.057l.007-.01l2.299-3.62l.004-.006c.013-.022.029-.047.053-.047l.024.004q.076.012.145.014c.348 0 .672-.173.866-.468l.018-.02c.014-.011.034-.006.05.001m-3.203 4.79l6.298-2.731s.009 0 .018.009a1 1 0 0 0 .091.08l.014.009c.013.007.026.016.027.029l-.001.013l-.54 3.37l-.002.014c-.003.026-.007.056-.031.056a.89.89 0 0 0-.704.442l-.003.004q-.01.02-.025.03q-.018.006-.036 0l-5.022-1.053c-.006-.001-.078-.271-.084-.272"></svg:path>`,
})
export class LineiconsNetlifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsNetworkIcon],svg[lineicons-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.9 18.4c4.2 0 7.5-3.4 7.5-7.5S36 3.4 31.9 3.4s-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5m0-10.6c1.7 0 3 1.4 3 3s-1.4 3-3 3s-3-1.4-3-3s1.3-3 3-3m-8.3 20.7c2.1-2.3 5.2-3.7 8.4-3.7s6.3 1.3 8.4 3.7c.4.5 1 .7 1.7.7c.5 0 1.1-.2 1.5-.6c.9-.8 1-2.3.1-3.2c-3-3.2-7.3-5.1-11.7-5.1s-8.7 1.9-11.7 5.1c-.8.9-.8 2.3.1 3.2s2.3.8 3.2-.1M13.4 50.1c4.2 0 7.5-3.4 7.5-7.5c0-4.2-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5c-.1 4.2 3.3 7.5 7.5 7.5m0-10.6c1.7 0 3 1.4 3 3c0 1.7-1.4 3-3 3s-3-1.4-3-3c-.1-1.6 1.3-3 3-3m-.3 12.3c-4.4 0-8.7 1.9-11.7 5.1c-.8.9-.8 2.3.1 3.2s2.3.8 3.2-.1c2.1-2.3 5.2-3.7 8.4-3.7s6.3 1.3 8.4 3.7c.4.5 1 .7 1.7.7c.5 0 1.1-.2 1.5-.6c.9-.8 1-2.3.1-3.2c-3-3.2-7.3-5.1-11.7-5.1m37.3-1.7c4.2 0 7.5-3.4 7.5-7.5c0-4.2-3.4-7.5-7.5-7.5c-4.2 0-7.5 3.4-7.5 7.5c0 4.2 3.4 7.5 7.5 7.5m0-10.6c1.7 0 3 1.4 3 3c0 1.7-1.4 3-3 3c-1.7 0-3-1.4-3-3s1.4-3 3-3M62.7 57c-3-3.2-7.3-5.1-11.7-5.1s-8.7 1.9-11.7 5.1c-.8.9-.8 2.3.1 3.2c.9.8 2.3.8 3.2-.1c2.1-2.3 5.2-3.7 8.4-3.7s6.3 1.3 8.4 3.7c.4.5 1 .7 1.7.7c.5 0 1.1-.2 1.5-.6c.8-.9.9-2.3.1-3.2M39.2 40.9c.5-1.1 0-2.5-1.1-3l-3.9-1.8V32c0-1.2-1-2.3-2.2-2.3s-2.3 1-2.3 2.3v4l-4 1.9c-1.1.5-1.6 1.9-1.1 3s1.9 1.6 3 1.1l4.2-2l4.5 2c.3.1.6.2.9.2c.8 0 1.6-.5 2-1.3"></svg:path>`,
})
export class LineiconsNetworkIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsNextStep2Icon],svg[lineicons-next-step-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.085 4.5a.75.75 0 0 0-1.5 0v5.338L9.432 4.273c-1.493-1.019-3.518.05-3.518 1.859v11.736c0 1.808 2.025 2.878 3.518 1.858l8.153-5.564V19.5a.75.75 0 1 0 1.5 0zm-1.9 8.12l-8.598 5.868a.75.75 0 0 1-1.173-.62V6.132a.75.75 0 0 1 1.173-.62l8.597 5.869a.75.75 0 0 1 0 1.238"></svg:path>`,
})
export class LineiconsNextStep2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsNextjsIcon],svg[lineicons-nextjs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.345 2.405l-.303.027c-2.84.256-5.501 1.789-7.187 4.144a9.9 9.9 0 0 0-1.765 4.37c-.08.548-.09.71-.09 1.455s.01.907.09 1.457c.543 3.755 3.216 6.91 6.84 8.079c.65.209 1.334.351 2.112.438c.303.033 1.613.033 1.916 0c1.343-.15 2.48-.481 3.603-1.054c.172-.088.205-.112.182-.131c-.016-.012-.749-.995-1.629-2.184l-1.599-2.16l-2.004-2.965a287 287 0 0 0-2.017-2.963c-.008-.002-.016 1.315-.02 2.924c-.006 2.817-.008 2.93-.043 2.997a.36.36 0 0 1-.172.178c-.063.03-.117.037-.412.037h-.339l-.09-.057a.4.4 0 0 1-.13-.143l-.042-.088l.004-3.919l.006-3.921l.06-.076a.5.5 0 0 1 .145-.12c.08-.039.112-.043.45-.043c.399 0 .465.016.569.13c.03.03 1.114 1.665 2.412 3.633l3.946 5.976l1.583 2.398l.08-.052c.71-.462 1.46-1.118 2.055-1.803a9.95 9.95 0 0 0 2.354-5.111c.08-.55.09-.712.09-1.457c0-.744-.01-.907-.09-1.456c-.543-3.755-3.216-6.91-6.84-8.079a10.5 10.5 0 0 0-2.083-.436c-.187-.02-1.48-.04-1.642-.025m4.094 6.048c.094.047.17.137.197.23c.016.051.02 1.138.016 3.587l-.006 3.515l-.62-.95l-.621-.95V11.33c0-1.652.008-2.58.02-2.625a.4.4 0 0 1 .193-.246c.08-.041.11-.045.416-.045c.29 0 .34.004.405.039"></svg:path>`,
})
export class LineiconsNextjsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsNightIcon],svg[lineicons-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.5 4c-1.7-.5-3.4-.9-5.2-1.2c-1.3-.2-2.7.5-3.2 1.7c-.6 1.2-.3 2.7.7 3.5c7.1 6.6 9.7 16.3 6.8 25.4C31.4 43.5 22 50.6 11.1 50.9c-1.4 0-2.5.9-2.9 2.2s.2 2.7 1.3 3.4c2.5 1.5 5 2.7 7.5 3.5c2.9.9 5.9 1.3 8.9 1.3c5.1 0 10.1-1.3 14.6-3.8c7.1-3.9 12.1-10.2 14.3-17.8C59.1 24.7 50.6 9 35.5 4m15 34.4c-1.8 6.5-6.2 11.8-12.1 15.1c-6.2 3.4-13.3 4.1-20 2.1c-.7-.2-1.5-.5-2.2-.8c10.6-2.1 19.4-9.7 22.7-20.1c2.9-9.2 1.1-18.9-4.8-26.5c12.8 4.3 20 17.6 16.4 30.2"></svg:path>`,
})
export class LineiconsNightIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsNikeIcon],svg[lineicons-nike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.243 8.375c-1.168 1.334-2.785 2.828-3.173 4.692c-.612 2.938 2.962 2.858 4.697 2.141c5.105-2.11 10.155-4.353 15.233-6.53c-4.937 1.315-9.857 2.699-14.812 3.945c-3.545.892-2.855-2.272-1.945-4.248" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsNikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsNissanIcon],svg[lineicons-nissan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.03 3.44c-4.08 0-7.52 2.7-8.52 6.36c-.43.05-.64.08-.82.13c-.57.13-.69.33-.69.74v2.77c0 .4.43.68.73.73c.3.06.49.08.8.11h.003c1.034 3.625 4.441 6.28 8.497 6.28c4.055 0 7.47-2.663 8.496-6.285q.375-.032.744-.105c.3-.05.73-.33.73-.73v-2.77c0-.41-.12-.61-.69-.74c-.172-.047-.376-.077-.766-.123l-.004-.027c-1.01-3.66-4.44-6.34-8.51-6.34m.01 2.02c2.88 0 5.34 1.76 6.3 4.23c0 .01.01.02.01.02l.012.005C16.287 9.636 13.607 9.55 12 9.55c-1.585 0-4.21.084-6.274.161h.004c.96-2.48 3.42-4.25 6.31-4.25m-4.71 5.43h.54c.05 0 .06.02.06.06v2.1c0 .05-.01.07-.07.07h-.51c-.06 0-.07-.01-.07-.07v-2.1c0-.04.01-.06.05-.06m1.79.01h1.6c.06 0 .08.01.08.06v.36c0 .05-.02.07-.08.06H9.15c-.07 0-.1.03-.11.1v.09c0 .05.03.09.1.1c.18.03.76.07.98.09c.39.04.68.11.76.48c0 .03.01.13.01.24c0 .07 0 .16-.02.24c-.07.35-.33.42-.75.42H8.47c-.06 0-.07-.01-.07-.07v-.35c0-.06.01-.07.07-.07h1.67c.07 0 .09-.02.1-.07v-.15c-.01-.04-.02-.1-.11-.11q-.555-.04-1.11-.1c-.48-.05-.6-.25-.62-.43c-.01-.06-.01-.14-.01-.21c0-.06 0-.15.01-.22c.07-.31.3-.46.72-.46m2.84 0h1.6c.06 0 .08.01.08.06v.36c0 .05-.02.07-.08.06h-1.57c-.07 0-.1.03-.11.1v.09c0 .05.02.09.1.1c.18.03.76.07.97.09c.39.04.68.11.76.48c0 .03.01.13.01.24c0 .07 0 .16-.02.24c-.07.35-.33.42-.75.42h-1.64c-.06 0-.07-.01-.07-.07v-.35c0-.06.01-.07.07-.07h1.67c.07 0 .09-.02.1-.07v-.15c-.01-.04-.03-.1-.11-.11q-.555-.04-1.11-.1c-.48-.05-.59-.25-.62-.43c-.01-.06-.01-.14-.01-.21c0-.06 0-.15.01-.22c.07-.31.3-.46.72-.46m-7.77.01h.51c.38 0 .43-.01.57.19c.11.18 1 1.55 1 1.55v-1.67c0-.05.01-.07.07-.07h.44c.06 0 .07.02.07.07v2.09c0 .06-.01.07-.07.07h-.6c-.35 0-.38 0-.5-.2c-.24-.38-.98-1.51-.98-1.51v1.64c0 .06-.01.07-.07.07h-.44c-.06 0-.07-.01-.07-.07v-2.09c0-.05.01-.07.07-.07m11.18 0c.11 0 .19 0 .22.01c.36.01.3-.03.47.34c.09.21.73 1.58.83 1.82c.03.07.01.06-.07.06h-.55c-.03 0-.06-.01-.07-.04c0-.01-.07-.17-.17-.4h-1.29c-.1.23-.18.4-.18.4c-.01.02-.03.04-.07.04h-.53c-.08 0-.11 0-.06-.1l.01-.02c.25-.55.84-1.87.84-1.87c.12-.25.06-.23.4-.23c.09-.01.11-.01.22-.01m1.92 0h.51c.38 0 .43-.01.57.19c.12.18 1 1.55 1 1.55v-1.67c0-.05.01-.07.07-.07h.44c.06 0 .07.02.07.07v2.09c0 .06-.01.07-.07.07h-.6c-.35 0-.38 0-.5-.2c-.25-.38-.98-1.51-.98-1.51v1.64c0 .06-.01.07-.07.07h-.44c-.06 0-.07-.01-.07-.07v-2.09c0-.05.01-.07.07-.07m-1.89.5c-.03 0-.06 0-.07.01q-.045 0-.06.03c0 .01-.16.39-.33.78h.89c-.13-.33-.28-.66-.32-.77c-.01-.03-.03-.04-.05-.04c-.01-.01-.04-.01-.06-.01m2.9 2.992c-.003.012-.02.04-.02.048c-1 2.4-3.42 4.1-6.25 4.1c-2.85 0-5.28-1.72-6.27-4.14l-.02-.005c1.814.091 4.162.185 6.26.185c2.115 0 4.48-.095 6.3-.187"></svg:path>`,
})
export class LineiconsNissanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsNodejsIcon],svg[lineicons-nodejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.903 22c-.258 0-.548-.032-.774-.226l-2.452-1.451c-.355-.226-.193-.259-.032-.323c.484-.129.58-.226 1.097-.484c.032-.032.129-.032.193.032l1.871 1.13c.033.032.13.032.226 0l7.323-4.226c.032-.033.129-.13.129-.194V7.774c0-.097-.033-.129-.13-.193L12 3.419c-.032-.032-.13-.032-.226 0l-7.29 4.226c-.033.032-.13.13-.13.194v8.42c0 .096.033.128.13.193l2 1.129c1.097.548 1.774-.097 1.774-.775V8.548a.22.22 0 0 1 .226-.225h.935a.22.22 0 0 1 .226.225v8.323c0 1.452-.774 2.258-2.129 2.258c-.452 0-.71 0-1.677-.452l-1.904-1.064a1.57 1.57 0 0 1-.774-1.355V7.774c0-.548.258-1.032.774-1.355l7.258-4.225a1.65 1.65 0 0 1 1.549 0l7.322 4.258c.452.258.775.774.775 1.354v8.42c0 .548-.258 1.032-.775 1.355l-7.29 4.193c-.322.194-.58.226-.87.226m5.903-8.323c0-1.58-1.032-2-3.322-2.322s-2.484-.452-2.484-1c0-.452.193-1.032 1.87-1.032c1.485 0 2.033.322 2.259 1.354c.032.097.097.13.226.13h.935c.032 0 .13-.033.13-.033s.031-.097.031-.129c-.129-1.774-1.322-2.548-3.612-2.548c-2.097 0-3.355.87-3.355 2.355c0 1.58 1.258 2.032 3.226 2.225c2.387.226 2.58.581 2.58 1.033c0 .806-.645 1.129-2.161 1.129c-1.936 0-2.355-.484-2.484-1.452c-.032-.097-.097-.193-.226-.193h-.87a.22.22 0 0 0-.227.225c0 1.226.646 2.71 3.84 2.71c2.322.065 3.644-.839 3.644-2.452"></svg:path>`,
})
export class LineiconsNodejsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsNodejsAltIcon],svg[lineicons-nodejs-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.177 9.769a.23.23 0 0 1 .115.2l-.004 2.968c0 .041-.022.08-.057.1a.11.11 0 0 1-.116 0l-1.137-.652a.23.23 0 0 1-.116-.2v-1.387a.23.23 0 0 0-.116-.2l-.484-.279a.23.23 0 0 0-.231 0l-.485.28a.23.23 0 0 0-.115.2v1.386a.23.23 0 0 1-.116.2l-1.139.653a.11.11 0 0 1-.114 0a.11.11 0 0 1-.058-.1L2 9.97c0-.083.044-.16.116-.201L4.03 8.667a.2.2 0 0 1 .105-.03h.02a.2.2 0 0 1 .106.03zm9.122 1.796a.06.06 0 0 0 .03-.05v-.76c0-.02-.012-.04-.03-.05l-.658-.38a.06.06 0 0 0-.058 0l-.657.38a.06.06 0 0 0-.029.05v.76c0 .02.011.04.03.05l.657.38c.018.01.04.01.058 0zm.092-5.673a.12.12 0 0 1 .115-.001l1.14.636a.23.23 0 0 1 .119.202v5.512a.23.23 0 0 1-.116.2l-1.916 1.107a.23.23 0 0 1-.231 0l-1.916-1.106a.23.23 0 0 1-.116-.2V10.03a.23.23 0 0 1 .116-.2l1.916-1.106a.23.23 0 0 1 .231 0l.48.277a.081.081 0 0 0 .121-.07V5.99a.12.12 0 0 1 .057-.1M22 10.536a.23.23 0 0 1-.115.2l-1.149.667a.12.12 0 0 1-.116 0a.12.12 0 0 1-.058-.1v-.545a.12.12 0 0 0-.057-.1l-.6-.346a.11.11 0 0 0-.116 0l-.6.346a.12.12 0 0 0-.057.1v.694c0 .04.022.08.058.1l1.927 1.105a.116.116 0 0 1 0 .202l-1.152.64a.23.23 0 0 1-.227-.002l-1.903-1.085a.23.23 0 0 1-.116-.2V10a.23.23 0 0 1 .115-.2l1.916-1.105a.23.23 0 0 1 .231 0L21.885 9.8A.23.23 0 0 1 22 10zm-10.115 7.589a.4.4 0 0 1-.19-.05l-.602-.358c-.09-.05-.046-.068-.017-.078a1.2 1.2 0 0 0 .273-.124q.022-.01.045.003l.463.275c.017.009.04.009.056 0l1.806-1.043a.06.06 0 0 0 .028-.049v-2.084c0-.02-.01-.04-.028-.05l-1.805-1.041a.06.06 0 0 0-.056 0l-1.805 1.041a.06.06 0 0 0-.029.05V16.7c0 .02.011.039.028.048l.495.286c.268.134.432-.024.432-.183v-2.057c0-.03.024-.052.053-.052h.229c.028 0 .052.022.052.052v2.058c0 .358-.196.563-.535.563c-.105 0-.187 0-.417-.113l-.473-.273a.38.38 0 0 1-.19-.33v-2.083a.38.38 0 0 1 .19-.33l1.808-1.043a.4.4 0 0 1 .38 0l1.805 1.044a.38.38 0 0 1 .19.329V16.7a.38.38 0 0 1-.19.33l-1.806 1.042a.4.4 0 0 1-.19.051m.558-1.436c-.79 0-.956-.363-.956-.667c0-.03.024-.052.053-.052h.233a.05.05 0 0 1 .051.044c.036.238.14.358.618.358c.381 0 .543-.087.543-.288c0-.117-.046-.203-.638-.26c-.494-.05-.8-.159-.8-.554c0-.364.308-.582.823-.582c.578 0 .864.201.9.632a.052.052 0 0 1-.052.057h-.235a.05.05 0 0 1-.05-.04c-.057-.25-.193-.33-.564-.33c-.416 0-.464.144-.464.253c0 .132.057.17.617.244c.556.074.82.178.82.568c0 .393-.33.619-.901.619zm2.198-2.209h.06c.05 0 .06-.034.06-.055c0-.053-.037-.053-.058-.053h-.062zm-.074-.17h.134c.046 0 .137 0 .137.103c0 .071-.046.086-.074.095c.053.004.057.038.064.085v.004l.001.004c.004.031.01.082.02.1h-.083l-.001-.013l-.014-.11c-.005-.023-.013-.034-.04-.034h-.069v.157h-.075zm.478.194a.349.349 0 1 1-.348-.348c.188 0 .348.152.348.349m4.792-3.872a.04.04 0 0 1 .045 0l.367.212a.05.05 0 0 1 .023.039v.424q-.001.025-.023.038l-.367.213a.04.04 0 0 1-.045 0l-.367-.213a.04.04 0 0 1-.022-.038v-.424q0-.025.022-.039zM9.545 8.756a.24.24 0 0 0-.237 0L7.34 9.891a.24.24 0 0 0-.118.206v2.273c0 .084.046.163.12.205l1.966 1.136a.24.24 0 0 0 .237 0l1.966-1.136a.24.24 0 0 0 .119-.205v-2.273a.24.24 0 0 0-.119-.206z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsNodejsAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsNotebook1Icon],svg[lineicons-notebook-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 2A2.25 2.25 0 0 0 4.5 4.25v2H3.25a.75.75 0 0 0 0 1.5H4.5v3.5H3.25a.75.75 0 0 0 0 1.5H4.5v3.5H3.25a.75.75 0 0 0 0 1.5H4.5v2A2.25 2.25 0 0 0 6.75 22h10.5a2.25 2.25 0 0 0 2.25-2.25V4.25A2.25 2.25 0 0 0 17.25 2zM6 17.75h1.25a.75.75 0 0 0 0-1.5H6v-3.5h1.25a.75.75 0 0 0 0-1.5H6v-3.5h1.25a.75.75 0 0 0 0-1.5H6v-2a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class LineiconsNotebook1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsNotepadIcon],svg[lineicons-notepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51.4 4.2c-1.6-1.6-3.6-2.4-5.8-2.4h-24c-3.4 0-6.3 2.8-6.3 6.3V12h-2.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.8v13.3h-2.8c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h2.8v13.3h-2.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.8V56c0 3.4 2.8 6.3 6.3 6.3h24c4.5 0 8.2-3.7 8.3-8.2v-44c-.1-2.3-.9-4.4-2.5-5.9M49.3 54c0 2.1-1.7 3.7-3.8 3.7h-24c-1 0-1.8-.8-1.8-1.8V52h5.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-5.4V34.3h5.4c1.2 0 2.3-1 2.3-2.3c0-1.2-1-2.3-2.3-2.3h-5.4V16.4h5.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-5.4V8c0-1 .8-1.8 1.8-1.8h24c1 0 1.9.4 2.7 1.1c.7.7 1.1 1.7 1.1 2.7z"></svg:path>`,
})
export class LineiconsNotepadIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsNotionIcon],svg[lineicons-notion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.716 5.506c.622.506.855.467 2.023.39l11.013-.662c.233 0 .039-.233-.039-.272L16.884 3.64c-.35-.272-.817-.583-1.712-.506l-10.663.778c-.39.039-.467.233-.312.39zm.66 2.567V19.66c0 .622.312.855 1.012.817l12.103-.7c.7-.039.779-.467.779-.973V7.294c0-.504-.194-.777-.623-.738l-12.648.739c-.467.039-.622.272-.622.778m11.948.621c.078.35 0 .7-.35.74l-.584.116v8.555c-.506.272-.973.427-1.362.427c-.623 0-.779-.194-1.245-.777l-3.815-5.988v5.793l1.207.273s0 .7-.973.7l-2.685.155c-.078-.156 0-.544.272-.622l.7-.194v-7.66l-.972-.079c-.078-.35.116-.855.662-.894l2.88-.194l3.97 6.066V9.745l-1.013-.116c-.078-.429.233-.74.623-.778zM3.614 2.862l11.09-.816c1.363-.117 1.713-.039 2.57.583l3.54 2.488c.584.428.779.545.779 1.011v13.649c0 .855-.312 1.36-1.401 1.438l-12.88.778c-.819.04-1.208-.077-1.636-.622l-2.607-3.383c-.467-.623-.662-1.089-.662-1.634V4.223c0-.7.312-1.283 1.206-1.36" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsNotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsNpmIcon],svg[lineicons-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.58h-1.129v-2.225H12zm10-4.45v6.645H12v1.097H7.548v-1.13H2V8.13zM7.548 9.193H3.097v4.452h2.226v-3.29h1.129v3.355H7.58zm5.581 0H8.677v5.549h2.226v-1.13h2.226zm7.742 0h-6.645v4.452h2.226v-3.29h1.129v3.355h1.129v-3.355h1.129v3.355h1.129V9.193z"></svg:path>`,
})
export class LineiconsNpmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsNuxtIcon],svg[lineicons-nuxt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 18.666h7.4c.236 0 .462-.083.667-.2c.204-.117.415-.264.533-.466c.118-.203.2-.433.2-.667s-.082-.464-.2-.667l-5-8.6a1.2 1.2 0 0 0-.467-.466a1.6 1.6 0 0 0-.733-.2c-.236 0-.462.083-.667.2a1.2 1.2 0 0 0-.466.466l-1.267 2.2L10.667 6c-.118-.203-.262-.417-.467-.534s-.43-.133-.667-.133c-.236 0-.462.016-.666.133s-.416.33-.534.534l-6.2 10.666c-.118.203-.133.433-.133.667s.015.464.133.667c.118.202.33.35.534.466s.43.2.666.2H8c1.85 0 3.195-.83 4.133-2.4l2.267-3.933l1.2-2.067l3.667 6.267H14.4zm-5.267-2.133H4.667l4.866-8.4l2.467 4.2l-1.634 2.848c-.623 1.02-1.333 1.352-2.433 1.352"></svg:path>`,
})
export class LineiconsNuxtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsNvidiaIcon],svg[lineicons-nvidia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.459 9.33V8.142c.122-.012.232-.012.355-.012c3.27-.098 5.413 2.817 5.413 2.817s-2.315 3.197-4.8 3.197c-.332 0-.65-.05-.968-.16v-3.613c1.273.16 1.53.71 2.29 1.984l1.702-1.433s-1.249-1.628-3.331-1.628q-.33 0-.661.036m0-3.943v1.776l.355-.025c4.544-.16 7.508 3.723 7.508 3.723s-3.405 4.152-6.945 4.152a4.7 4.7 0 0 1-.918-.086v1.103c.245.024.502.049.759.049c3.295 0 5.683-1.69 7.998-3.674c.38.306 1.947 1.053 2.278 1.371c-2.193 1.837-7.312 3.32-10.215 3.32a6 6 0 0 1-.808-.05v1.568H22V5.387zm0 8.61v.943c-3.05-.551-3.895-3.723-3.895-3.723S7.034 9.6 9.459 9.33v1.03h-.013c-1.273-.16-2.278 1.04-2.278 1.04s.576 2.009 2.29 2.597m-5.414-2.915s1.8-2.67 5.414-2.94v-.967C5.454 7.493 2 10.874 2 10.874s1.96 5.67 7.459 6.184V16.03c-4.042-.502-5.414-4.948-5.414-4.948"></svg:path>`,
})
export class LineiconsNvidiaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsOculusIcon],svg[lineicons-oculus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.21 12.694a.5.5 0 0 1-.188.07c-.069.01-.135.007-.203.007H3.427c-.069 0-.135.002-.203-.008a.5.5 0 0 1-.188-.069a.4.4 0 0 1-.182-.327a.39.39 0 0 1 .182-.328a.5.5 0 0 1 .188-.069c.068-.01.134-.008.203-.008h1.392c.069 0 .135-.002.203.008q.101.015.188.07a.4.4 0 0 1 .182.327a.39.39 0 0 1-.182.327m.56-1.271a1.3 1.3 0 0 0-.507-.236a1.7 1.7 0 0 0-.322-.039q-.122-.003-.244-.002H3.548l-.243.002a1.7 1.7 0 0 0-.323.039a1.3 1.3 0 0 0-.506.236a1.19 1.19 0 0 0-.476.944c0 .368.175.714.476.943q.226.172.506.236c.107.025.214.035.323.039q.12.003.243.002h1.149q.122 0 .243-.002c.11-.004.216-.014.323-.039q.28-.064.506-.236a1.19 1.19 0 0 0 .476-.944c0-.368-.174-.713-.476-.943m14.487 1.317l-.367.357c.265.285.654.429 1.091.429c.579 0 1.02-.274 1.02-.72c0-.416-.309-.643-.8-.69l-.273-.025c-.226-.02-.371-.092-.371-.218c0-.135.15-.21.406-.21c.278 0 .486.109.623.269l.362-.354c-.225-.256-.57-.378-.958-.378c-.605 0-.99.286-.99.706c0 .383.292.635.813.682l.278.025c.226.021.345.097.345.223c0 .156-.186.227-.424.227a1 1 0 0 1-.755-.324m-1.378.748h.57v-2.255h-.592v1.296c0 .294-.22.488-.508.488c-.282 0-.472-.202-.472-.488v-1.296h-.592v1.384c0 .551.433.904.927.904a.94.94 0 0 0 .667-.277zm-2.252-3.075h-.592v3.075h.592zm-1.841 3.075h.57v-2.255h-.593v1.296c0 .294-.22.488-.507.488c-.283 0-.473-.202-.473-.488v-1.296h-.592v1.384c0 .551.433.904.928.904a.94.94 0 0 0 .667-.277zm-2.403-.698a.66.66 0 0 1-.503.214c-.393 0-.645-.273-.645-.64c0-.374.252-.647.645-.647c.22 0 .389.088.503.223l.407-.387a1.25 1.25 0 0 0-.905-.358c-.716 0-1.241.5-1.241 1.165s.525 1.165 1.24 1.165c.371 0 .694-.139.906-.353zm-3.356.214c-.393 0-.649-.273-.649-.64c0-.374.256-.647.65-.647c.392 0 .648.273.648.648c0 .366-.256.64-.649.64m0 .522c.715 0 1.241-.5 1.241-1.165s-.525-1.165-1.24-1.165c-.716 0-1.241.5-1.241 1.165c0 .664.525 1.165 1.24 1.165"></svg:path>`,
})
export class LineiconsOculusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsOfferIcon],svg[lineicons-offer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m59.8 27l-2.4-1.9c-.6-.5-.8-1.2-.7-1.9l.8-2.9c.5-1.8.1-3.7-1-5.3c-1.2-1.6-3-2.6-5-2.7l-3.1-.2c-.8 0-1.6-.5-1.8-1.2l-1.1-2.7c-.7-1.7-2.2-3.1-4-3.7c-1.9-.6-3.9-.4-5.6.6l-2.6 1.6c-.7.4-1.6.4-2.4 0l-2.6-1.6c-1.7-1-3.7-1.3-5.6-.6c-1.8.6-3.3 1.9-4 3.7L17.4 11c-.3.7-1 1.2-1.8 1.2l-3.1.2c-2 .1-3.9 1.1-5 2.7c-1.1 1.5-1.5 3.5-1 5.3l.8 2.9c.2.7-.1 1.4-.7 1.9L4.2 27c-1.6 1.2-2.4 3-2.4 5c0 1.9.9 3.7 2.4 5l2.4 1.9c.6.5.9 1.2.7 1.9l-.8 2.9c-.5 1.8-.1 3.7 1 5.3c1.2 1.6 3 2.6 5 2.7l3.1.2c.8 0 1.6.5 1.8 1.2l1.1 2.7c.7 1.7 2.2 3.1 4 3.7c1.9.6 3.9.4 5.6-.6l2.6-1.6c.7-.4 1.6-.4 2.4 0l2.6 1.6c1.1.6 2.3 1 3.5 1q1.05 0 2.1-.3c1.8-.6 3.3-1.9 4-3.7l1.1-2.7c.3-.7 1-1.2 1.8-1.2l3.1-.2c2-.1 3.9-1.1 5-2.7c1.1-1.5 1.5-3.5 1-5.3l-.8-2.9c-.2-.7.1-1.4.7-1.9l2.4-1.9c1.6-1.2 2.4-3 2.4-5c.3-2-.6-3.8-2.2-5.1M57 33.4l-2.4 1.9c-2 1.6-2.9 4.2-2.2 6.6l.8 2.9c.2.7-.1 1.2-.3 1.5c-.4.5-1 .8-1.6.9l-3.1.2c-2.5.1-4.8 1.7-5.7 4L41.3 54c-.3.7-.9 1-1.3 1.1c-.6.2-1.3.1-1.9-.2l-2.6-1.6c-1.1-.6-2.3-1-3.5-1s-2.4.3-3.5 1l-2.6 1.6c-.6.3-1.3.4-1.9.2c-.3-.1-1-.4-1.3-1.1l-1.1-2.7c-.9-2.3-3.2-3.9-5.7-4l-3.1-.2c-.7 0-1.3-.4-1.6-.9c-.2-.3-.5-.8-.3-1.5l.8-2.9c.7-2.4-.2-5-2.2-6.6L7 33.4c-.5-.4-.7-.9-.7-1.4c0-.6.3-1.1.7-1.4l2.4-1.9c2-1.6 2.9-4.2 2.2-6.6l-.8-2.9c-.2-.7.1-1.2.3-1.5c.4-.5 1-.8 1.6-.9l3.1-.2c2.5-.1 4.8-1.7 5.7-4l1.1-2.7c.4-.6 1-.9 1.4-1c.6-.2 1.3-.1 1.9.2l2.6 1.6c2.1 1.3 4.9 1.3 7 0l2.6-1.6c.6-.3 1.3-.4 1.9-.2c.3.1 1 .4 1.3 1.1l1.1 2.7c.9 2.3 3.2 3.9 5.7 4l3.1.2c.7 0 1.3.4 1.6.9c.2.3.5.8.3 1.5l-.8 2.9c-.7 2.4.2 5 2.2 6.6l2.4 1.9c.5.4.7.9.7 1.4c.2.5-.1 1-.6 1.3"></svg:path><svg:path fill="currentColor" d="M41.2 22.8c-.9-.9-2.3-.9-3.2 0L22.8 38c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7L41.2 26c.9-.9.9-2.4 0-3.2m-12 6.3c2.4-2.4 2.4-6.2 0-8.6c-1.1-1.1-2.7-1.8-4.3-1.8s-3.1.6-4.3 1.8c-2.4 2.4-2.4 6.2 0 8.6c1.1 1.1 2.7 1.8 4.3 1.8s3.1-.6 4.3-1.8m-5.4-5.3c.3-.3.7-.5 1.1-.5s.8.2 1.1.5c.6.6.6 1.6 0 2.2s-1.6.6-2.2 0s-.6-1.6 0-2.2m10.7 10.7c-1.1 1.1-1.8 2.7-1.8 4.3s.6 3.1 1.8 4.3s2.7 1.8 4.3 1.8s3.1-.6 4.3-1.8c1.1-1.1 1.8-2.7 1.8-4.3s-.6-3.1-1.8-4.3c-2.4-2.4-6.2-2.4-8.6 0m5.4 5.4c-.6.6-1.6.6-2.2 0c-.3-.3-.5-.7-.5-1.1s.2-.8.5-1.1s.7-.5 1.1-.5s.8.2 1.1.5s.5.7.5 1.1s-.2.8-.5 1.1"></svg:path>`,
})
export class LineiconsOfferIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsOpenAiIcon],svg[lineicons-open-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.557 10.634a5.07 5.07 0 0 0-.42-4.099c-1.087-1.901-3.284-2.864-5.432-2.42c-.939-1.061-2.321-1.654-3.754-1.654a5.07 5.07 0 0 0-4.814 3.481a5 5 0 0 0-3.334 2.42a5.07 5.07 0 0 0 .618 5.901a5.06 5.06 0 0 0 .444 4.1a5.025 5.025 0 0 0 5.432 2.419a5.07 5.07 0 0 0 3.753 1.679a5.07 5.07 0 0 0 4.815-3.481a5 5 0 0 0 3.333-2.42a5.07 5.07 0 0 0-.642-5.926M13.05 21.152a3.66 3.66 0 0 1-2.395-.864c.025-.025.099-.05.124-.074l3.975-2.296a.65.65 0 0 0 .321-.568v-5.605l1.679.963c.025 0 .025.024.025.05v4.641a3.716 3.716 0 0 1-3.729 3.753M5 17.72c-.444-.765-.592-1.654-.444-2.518c.025.024.075.05.124.074l3.975 2.296a.6.6 0 0 0 .642 0l4.864-2.815v1.95c0 .026 0 .05-.024.05l-4.025 2.321c-1.778 1.037-4.074.42-5.111-1.358M3.965 9.03a3.88 3.88 0 0 1 1.95-1.654v4.74c0 .223.124.445.321.568l4.865 2.815l-1.68.963c-.024 0-.049.025-.049 0L5.347 14.14a3.714 3.714 0 0 1-1.383-5.111m13.827 3.21l-4.864-2.815l1.679-.963c.024 0 .05-.025.05 0l4.024 2.32a3.727 3.727 0 0 1 1.358 5.112a3.72 3.72 0 0 1-1.95 1.63v-4.716a.61.61 0 0 0-.297-.568m1.654-2.519a.5.5 0 0 0-.123-.074L15.347 7.35a.6.6 0 0 0-.642 0L9.84 10.165V8.214c0-.025 0-.05.025-.05l4.025-2.32A3.73 3.73 0 0 1 19 7.226c.445.741.593 1.63.445 2.494M8.927 13.177l-1.68-.963c-.024 0-.024-.025-.024-.05v-4.64a3.75 3.75 0 0 1 3.753-3.753a3.66 3.66 0 0 1 2.395.864a.5.5 0 0 1-.123.074L9.273 7.004a.65.65 0 0 0-.321.568v5.605zm.913-1.975l2.173-1.26l2.173 1.26v2.493l-2.173 1.26l-2.173-1.26z"></svg:path>`,
})
export class LineiconsOpenAiIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsOperaIcon],svg[lineicons-opera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.2 5.1c-21.3 0-31.6 28-18.5 44.4c4.5 5.8 11 9.4 18.5 9.4c4.5 0 8.9-1.4 12.4-3.8C47.2 59.9 39.9 63 32 63h-1.4C14.1 62.3 1 48.6 1 32C1 14.8 14.8 1 32 1h.1C40 1 47.2 4 52.7 8.9c-3.6-2.4-7.9-3.8-12.5-3.8m12.7 49.7c-5.1 3.1-11.3 3-16.5-.7c7-2.7 12.3-11.4 12.3-22.1c0-10.6-5.1-19.4-12.3-22.1c5.2-3.7 11.4-3.8 16.6-.6c13.4 12.3 13.3 33.3-.1 45.5"></svg:path>`,
})
export class LineiconsOperaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsOperaMiniIcon],svg[lineicons-opera-mini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.645 3.323c-6.87 0-10.193 9.032-5.968 14.322c1.452 1.871 3.549 3.032 5.968 3.032a7.14 7.14 0 0 0 4-1.225C16.903 21 14.548 22 12 22h-.452C6.226 21.774 2 17.355 2 12C2 6.452 6.452 2 12 2h.032c2.549 0 4.871.968 6.645 2.548a7.25 7.25 0 0 0-4.032-1.225m4.097 16.032c-1.645 1-3.645.968-5.323-.226c2.258-.87 3.968-3.677 3.968-7.129c0-3.42-1.645-6.258-3.968-7.129c1.678-1.194 3.678-1.226 5.355-.194c4.323 3.968 4.29 10.742-.032 14.678"></svg:path>`,
})
export class LineiconsOperaMiniIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsOracleIcon],svg[lineicons-oracle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.497 18.325h7.347c3.492-.085 6.24-3.002 6.154-6.474c-.085-3.386-2.81-6.09-6.154-6.175H8.497c-3.492-.085-6.41 2.662-6.495 6.154a6.31 6.31 0 0 0 6.154 6.474c.107.021.213.021.34.021m7.176-2.236H8.646c-2.257-.064-4.025-1.96-3.96-4.216c.084-2.151 1.81-3.897 3.96-3.961h7.027c2.258-.064 4.153 1.703 4.217 3.96c.064 2.258-1.704 4.153-3.961 4.217z"></svg:path>`,
})
export class LineiconsOracleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsOutdentIcon],svg[lineicons-outdent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 4a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16A.75.75 0 0 1 3.75 4m8.714 5.334a.75.75 0 0 1 .75-.75H20.5a.75.75 0 1 1 0 1.5h-7.286a.75.75 0 0 1-.75-.75m.75 4.582a.75.75 0 1 0 0 1.5H20.5a.75.75 0 1 0 0-1.5zM3.75 20a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75m5.7-10.692l.014.009l-4.213 2.675z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.636 8.048c1.007-.644 2.328.08 2.328 1.275v5.354c0 1.196-1.321 1.92-2.328 1.275l-4.188-2.677a1.513 1.513 0 0 1 0-2.55zm.828 1.275v-.006l-.007-.006l-.007-.003l-.006.003l-4.188 2.678l-.004.002v.001L5.25 12l.001.008h.001l.002.002l.002.001l4.188 2.678l.005.002l.008-.002l.007-.005z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsOutdentIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPackageIcon],svg[lineicons-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m62 21.3l-4.5-14c-.8-2.6-3.3-4.4-6-4.4H13.1c-2.7 0-5.1 1.7-6 4.2l-5 14.1c-.2.6-.3 1.2-.3 1.9v30.3c0 4.3 3.5 7.7 7.7 7.7h45.1c4.3 0 7.7-3.5 7.7-7.7V23c0-.5-.1-1.1-.3-1.7M53.2 8.7l3.7 11.6H34.3V7.4h17.2c.7 0 1.5.5 1.7 1.3m-41.9-.1c.3-.7 1-1.2 1.7-1.2h16.7v12.9H7.2zm43.2 48h-45c-1.8 0-3.2-1.4-3.2-3.2V24.8h51.5v28.6c0 1.8-1.5 3.2-3.3 3.2"></svg:path>`,
})
export class LineiconsPackageIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPaddleIcon],svg[lineicons-paddle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.026 9.294v-.707a3.27 3.27 0 0 0 3.268-3.268h.654a3.27 3.27 0 0 0 3.268 3.272V9.3a3.27 3.27 0 0 0-3.268 3.268h-.654a3.27 3.27 0 0 0-3.268-3.273m3.268-5.202h5.62c2.746 0 4.707 1.96 4.707 4.837s-1.96 4.836-4.706 4.836h-5.62V22h2.352v-6.143h3.268c3.948 0 7.059-3.112 7.059-6.928c0-3.817-3.111-6.929-7.06-6.929h-5.62z"></svg:path>`,
})
export class LineiconsPaddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPageBreakIcon],svg[lineicons-page-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46.8 1.8H17.2c-2.9 0-5.3 2.4-5.3 5.3v14.4c0 2.9 2.4 5.3 5.3 5.3h29.7c2.9 0 5.3-2.4 5.3-5.3V7c-.1-2.9-2.5-5.2-5.4-5.2m.8 19.6c0 .4-.3.8-.8.8H17.2c-.4 0-.8-.3-.8-.8V7c0-.4.3-.8.8-.8h29.7c.4 0 .8.3.8.8v14.4zm-.8 16H17.2c-2.9 0-5.3 2.4-5.3 5.3V57c0 2.9 2.4 5.3 5.3 5.3h29.7c2.9 0 5.3-2.4 5.3-5.3V42.6c-.1-2.9-2.5-5.2-5.4-5.2m.8 19.6c0 .4-.3.8-.8.8H17.2c-.4 0-.8-.3-.8-.8V42.6c0-.4.3-.8.8-.8h29.7c.4 0 .8.3.8.8V57zM21.8 34.3c1.2 0 2.3-1 2.3-2.3c0-1.2-1-2.3-2.3-2.3h-5.1c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3zm12.7 0c1.2 0 2.3-1 2.3-2.3c0-1.2-1-2.3-2.3-2.3h-5.1c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3zm12.8 0c1.2 0 2.3-1 2.3-2.3c0-1.2-1-2.3-2.3-2.3h-5.1c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3z"></svg:path>`,
})
export class LineiconsPageBreakIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPageBreak1Icon],svg[lineicons-page-break-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.781 9.749a2.25 2.25 0 0 1-2.25-2.25v-3.28a2.25 2.25 0 0 1 2.25-2.25h7.5a2.25 2.25 0 0 1 2.25 2.25v3.28a2.25 2.25 0 0 1-2.25 2.25zm-.75-2.25c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-3.28a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75zm.75 14.531a2.25 2.25 0 0 1-2.25-2.25V16.5a2.25 2.25 0 0 1 2.25-2.25h7.5a2.25 2.25 0 0 1 2.25 2.25v3.28a2.25 2.25 0 0 1-2.25 2.25zm-.75-2.25c0 .415.336.75.75.75h7.5a.75.75 0 0 0 .75-.75V16.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.781 11.28a.75.75 0 0 0 0 1.5H7.47a.75.75 0 0 0 0-1.5zm5.063 0a.75.75 0 1 0 0 1.5h3.375a.75.75 0 0 0 0-1.5zm6.75 0a.75.75 0 1 0 0 1.5h1.687a.75.75 0 1 0 0-1.5z"></svg:path>`,
})
export class LineiconsPageBreak1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPaginationIcon],svg[lineicons-pagination-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.72 11.47a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06-1.06L4.31 12l3.47-3.47a.75.75 0 1 0-1.06-1.06zm19.56 1.06a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 1 0-1.06 1.06L20.69 12l-3.47 3.47a.75.75 0 1 0 1.06 1.06z"></svg:path><svg:path fill="currentColor" d="M8.5 11.1a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8m3.1.9a.9.9 0 1 1 1.8 0a.9.9 0 0 1-1.8 0m4 0a.9.9 0 1 1 1.8 0a.9.9 0 0 1-1.8 0"></svg:path>`,
})
export class LineiconsPaginationIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPaintBucketIcon],svg[lineicons-paint-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.107 3.192a.75.75 0 0 1 1.024-.275L9.024 4.01l.063.04l9.647 5.57l.002-.004l.65.375c.644.373 1.619 1.008 2.3 1.833c.343.416.644.919.762 1.495c.122.596.038 1.223-.315 1.834a2.614 2.614 0 0 1-3.571.957a2.58 2.58 0 0 1-1.122-1.248l-3 5.198a2.25 2.25 0 0 1-3.074.823l-7.74-4.469a2.25 2.25 0 0 1-.824-3.073l4.846-8.394l-1.267-.731a.75.75 0 0 1-.274-1.024M4.257 13.82l12.808-3.431L8.945 5.7zm.385 1.45l7.474 4.314a.75.75 0 0 0 1.024-.274l4.315-7.473zm14.122-2.018q-.096.58.031.953c.076.229.223.436.517.606a1.114 1.114 0 0 0 1.522-.408c.17-.294.193-.547.145-.783c-.053-.256-.201-.54-.45-.841c-.334-.404-.789-.772-1.234-1.075c-.234.485-.444 1.031-.531 1.548"></svg:path>`,
})
export class LineiconsPaintBucketIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPaintBucketAltIcon],svg[lineicons-paint-bucket-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.4 22.2c0-11.3-9.2-20.4-20.4-20.4c-11.3 0-20.4 9.2-20.4 20.4v2.6l1.6 31.5c.2 3.3 2.9 5.9 6.2 5.9h25.2c3.3 0 6.1-2.6 6.2-5.9l1.6-31.5zM16.2 27h2.9v3.4c0 2.7 2.2 4.9 4.9 4.9h1.7v4.2c0 3.5 2.8 6.3 6.3 6.3c2.8 0 5.1-1.9 5.9-4.4H40c2.7 0 4.9-2.2 4.9-4.9V27h2.9l-1.1 21.9H17.3zm19.6 5.3c-1.2 0-2.2 1-2.2 2.2v5.2c0 .9-.7 1.6-1.6 1.6c-1 0-1.8-.8-1.8-1.8v-4.7c0-2.2-1.8-4-4-4H24c-.2 0-.4-.2-.4-.4V27h16.8v9.5c0 .2-.2.4-.4.4h-1.9v-2.4c0-1.2-1-2.2-2.3-2.2M32 6.2c8.8 0 15.9 7.1 15.9 15.9v.3H16.1v-.3c0-8.7 7.1-15.9 15.9-15.9m12.6 51.6H19.4c-.9 0-1.7-.7-1.7-1.7l-.1-2.7h29l-.1 2.7c-.2.9-.9 1.7-1.9 1.7"></svg:path>`,
})
export class LineiconsPaintBucketAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPaintRollerIcon],svg[lineicons-paint-roller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54.9 9.4h-.3V8c0-3.4-2.8-6.2-6.2-6.2H20.7c-3.4 0-6.2 2.8-6.2 6.2v1.4H11c-2.3 0-4.2 1.9-4.2 4.2v14c0 2.3 1.9 4.2 4.2 4.2h26.4V35c-2.9.5-5.1 3.1-5.1 6.1V56c0 3.4 2.8 6.2 6.2 6.2h2.2c3.4 0 6.2-2.8 6.2-6.2V41.1c0-3-2.2-5.6-5.1-6.1v-3.6c0-2.3-1.9-4.2-4.2-4.2H11.3V13.9h3.1v1.4c0 3.4 2.8 6.2 6.2 6.2h27.6c3.4 0 6.2-2.8 6.2-6.2v-1.4h.3c1.2 0 2.2-1 2.2-2.2s-.7-2.3-2-2.3M42.5 41.1V56c0 1-.8 1.8-1.8 1.8h-2.2c-1 0-1.8-.8-1.8-1.8V41.1c0-1 .8-1.8 1.8-1.8h2.2c1 0 1.8.8 1.8 1.8m7.6-25.8c0 1-.8 1.8-1.8 1.8H20.7c-1 0-1.8-.8-1.8-1.8V8c0-1 .8-1.8 1.8-1.8h27.6c1 0 1.8.8 1.8 1.8z"></svg:path>`,
})
export class LineiconsPaintRollerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPaintRoller1Icon],svg[lineicons-paint-roller-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.86 5.25A2.25 2.25 0 0 0 7.11 7.5h9a2.25 2.25 0 0 0 2.236-2H19a.75.75 0 0 1 .75.75v2A.75.75 0 0 1 19 9h-5.89a2.25 2.25 0 0 0-2.25 2.25v1.378a2.25 2.25 0 0 0-1.5 2.122v5a2.25 2.25 0 0 0 4.5 0v-5a2.25 2.25 0 0 0-1.5-2.122V11.25a.75.75 0 0 1 .75-.75H19a2.25 2.25 0 0 0 2.25-2.25v-2A2.25 2.25 0 0 0 19.001 4h-.655a2.25 2.25 0 0 0-2.237-2h-9a2.25 2.25 0 0 0-2.25 2.25zM7.11 6a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75zm3.75 8.75a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsPaintRoller1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPalletIcon],svg[lineicons-pallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m55.9 43.9l-.3-.2c-.8-.5-1.7-.9-3.8-1.5h-.1c-.7-.1-1.5-.4-1.8-.6l-.1-.1c-.4-.4-.7-1.1-.7-1.9c0-.7.3-1.4.7-1.9l3.9-3.9c6.9-6.9 6.9-17.8 0-24.8c-4.6-4.7-11-7.2-18.1-7.2c-7.9 0-15.9 3.4-22 9.4C8 16.9 5 24.3 5 32.4S8.1 48 13.8 53.5c5.7 5.7 13.2 8.8 21.2 8.8c7.9 0 15.4-3.2 21.1-8.9c1.2-1.2 1.9-3 1.9-4.7c0-1.9-.8-3.7-2.1-4.8m-3 6.3c-4.8 4.9-11.2 7.6-17.9 7.6c-6.9 0-13.1-2.6-18-7.5c-4.8-4.7-7.5-11-7.5-17.9s2.6-13.1 7.4-18C22.2 9.2 29 6.2 35.8 6.2c5.9 0 11.1 2 14.9 5.9c5.2 5.3 5.2 13.3 0 18.5l-4 4c-1.2 1.3-1.9 3.1-1.9 5c0 2 .7 3.7 1.9 5s3.6 1.9 4.2 2c1.4.3 1.9.6 2.3.8c.2.3.4.8.4 1.3c-.1.5-.4 1.2-.7 1.5"></svg:path><svg:path fill="currentColor" d="M36.8 36.7c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5m10.9-9.4c0-3.3-2.7-6.1-6.1-6.1s-6.1 2.7-6.1 6.1c0 3.3 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1m-6.1 1.6c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6s1.6.7 1.6 1.6s-.7 1.6-1.6 1.6m-4.3-12.2c0-4-3.3-7.3-7.3-7.3s-7.3 3.3-7.3 7.3S26 24 30 24s7.3-3.2 7.3-7.3M30 19.6c-1.6 0-2.8-1.3-2.8-2.8c0-1.6 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8"></svg:path>`,
})
export class LineiconsPalletIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPaperclipIcon],svg[lineicons-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.8 62.3h-.5c-4.6 0-9.6-1.9-12.7-4.8c-3.3-3.1-5.1-7.3-5.1-11.6v-31c0-4.3 2.1-8.2 5.8-10.7c3.6-2.5 8.1-3.1 12.3-1.6l.2.1c.5.2 1.1.3 1.7.7c4.6 2.4 7.4 6.7 7.4 11.6v26.5c0 2.7-.9 5.2-2.6 7.2c-.3.4-.5.6-.7.7c-1.9 1.7-4.1 2.6-6.6 2.6c-2.8 0-5.5-1.3-7.3-3.4c-1.7-2-2.7-4.6-2.7-7.3V19.2c0-1.2 1-2.3 2.3-2.3s2.3 1 2.3 2.3v22.2c0 1.6.6 3.2 1.6 4.4c.9 1.1 2.4 1.8 3.8 1.8c1.3 0 2.4-.5 3.4-1.4l.4-.4c1-1.2 1.6-2.7 1.6-4.3V14.9c0-3.2-1.8-6-5-7.6l-.1-.1c-.2-.1-.4-.2-.8-.3l-.3-.1c-2.9-1-5.9-.6-8.4 1.1C20.3 9.5 19 12 19 14.8v31c0 3 1.4 6.1 3.7 8.3c2.3 2.1 6.2 3.6 9.7 3.6c3.4.1 6.6-1.2 9.1-3.5c2.4-2.3 3.7-5.3 3.6-8.4V21.7c0-1.2 1-2.3 2.3-2.3s2.3 1 2.3 2.3v24.1c.1 4.3-1.7 8.5-5 11.7c-3.3 3-7.6 4.8-11.9 4.8"></svg:path>`,
})
export class LineiconsPaperclipIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPaperclip1Icon],svg[lineicons-paperclip-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.35 14.442l.001.03v1.298a1.327 1.327 0 0 1-2.654 0V7.654a.75.75 0 0 0-1.5 0v8.116a2.827 2.827 0 0 0 5.654 0V6.122a4.154 4.154 0 0 0-8.308.032v10.365a5.48 5.48 0 1 0 10.962 0V9.558a.75.75 0 0 0-1.5 0v6.961a3.98 3.98 0 0 1-7.962 0V6.154a2.654 2.654 0 1 1 5.308 0z"></svg:path>`,
})
export class LineiconsPaperclip1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPartyFlagsIcon],svg[lineicons-party-flags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.963 8.998a.75.75 0 0 0-1.02-.92l-.007.003l-.027.012l-.119.05q-.162.068-.482.186c-.425.155-1.052.365-1.846.575a25.5 25.5 0 0 1-6.461.842a25.4 25.4 0 0 1-6.462-.842c-.794-.21-1.42-.42-1.846-.575a14 14 0 0 1-.6-.236l-.028-.012l-.006-.003a.75.75 0 0 0-1.022.918l1.75 5.38a.75.75 0 0 0 1.215.325l3.631-3.266l2.738 4.212a.75.75 0 0 0 1.258 0l2.739-4.213l3.63 3.266a.75.75 0 0 0 1.215-.326zm-1.904 1.001l-.915 2.814l-2.247-2.021a27 27 0 0 0 1.95-.438c.456-.12.862-.242 1.212-.355m-14.904.355a27 27 0 0 0 1.95.438l-2.248 2.022L3.941 10q.527.171 1.214.355m8.583.835L12 13.862l-1.738-2.673a26 26 0 0 0 3.476 0"></svg:path>`,
})
export class LineiconsPartyFlagsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPartySprayIcon],svg[lineicons-party-spray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 2.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .707.5H14A.75.75 0 0 1 14 4h-.5v.917a6.75 6.75 0 0 1 5.25 6.583v8.25A2.25 2.25 0 0 1 16.5 22h-9a2.25 2.25 0 0 1-2.25-2.25V11.5c0-3.212 2.244-5.9 5.25-6.583zM6.75 11.5v.75h10.5v-.75a5.25 5.25 0 1 0-10.5 0m10.5 2.25H6.75v6c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75z"></svg:path>`,
})
export class LineiconsPartySprayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPatreonIcon],svg[lineicons-patreon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9.645a7.2 7.2 0 0 1-7.193 7.193a7.2 7.2 0 0 1-7.194-7.193a7.2 7.2 0 0 1 7.193-7.194C18.775 2.42 22 5.645 22 9.645M2 21.58h3.548V2.42H2z"></svg:path>`,
})
export class LineiconsPatreonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPauseIcon],svg[lineicons-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 3.25A2.25 2.25 0 0 0 4.75 5.5v13A2.25 2.25 0 0 0 7 20.75h1.75A2.25 2.25 0 0 0 11 18.5v-13a2.25 2.25 0 0 0-2.25-2.25zM6.25 5.5A.75.75 0 0 1 7 4.75h1.75a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H7a.75.75 0 0 1-.75-.75zm10-2.25A2.25 2.25 0 0 0 14 5.5v13a2.25 2.25 0 0 0 2.25 2.25H18a2.25 2.25 0 0 0 2.25-2.25v-13A2.25 2.25 0 0 0 18 3.25zM15.5 5.5a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75h-1.75a.75.75 0 0 1-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsPauseIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPayoneerIcon],svg[lineicons-payoneer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.636 21.263v-.964h.416c.774 0 1.238-.432 1.238-1.075c0-.605-.469-.958-1.148-.958H3.136v2.997zm.48-2.55c.394 0 .663.185.663.57c0 .357-.3.568-.69.568h-.453v-1.143h.48zm8.1 1.502c0-.622-.469-1.09-1.09-1.09c-.596 0-1.085.479-1.085 1.095c0 .627.453 1.08 1.085 1.08a1.065 1.065 0 0 0 1.09-1.085m-1.701 0c0-.359.263-.633.61-.633c.348 0 .617.28.617.633a.614.614 0 0 1-.616.632c-.348.005-.611-.274-.611-.633m6.399.126c.016-.063.016-.158.016-.216c0-.585-.448-.995-1.012-.995c-.6 0-1.08.468-1.08 1.08c0 .637.422 1.095 1.065 1.095c.431 0 .795-.206.948-.49l-.369-.206a.64.64 0 0 1-.542.274c-.332 0-.564-.2-.611-.537h1.585zm-1.564-.364a.54.54 0 0 1 .553-.447c.29 0 .51.184.537.447zm-5.83-.81l-.58 1.495l-.516-1.496h-.538l.775 2.097l-.322.737h.511l1.18-2.834zm11.344.01a.8.8 0 0 0-.205-.026a.62.62 0 0 0-.538.316v-.3h-.474v2.096h.474V20.14c0-.39.259-.548.527-.548a1 1 0 0 1 .21.021zm-1.559 1.164c.016-.063.016-.158.016-.216c0-.585-.448-.995-1.011-.995c-.6 0-1.08.468-1.08 1.08c0 .637.421 1.095 1.064 1.095c.432 0 .795-.206.948-.49l-.369-.206a.64.64 0 0 1-.542.274c-.332 0-.564-.2-.611-.537h1.585zm-1.57-.364a.54.54 0 0 1 .553-.447c.29 0 .511.184.538.447zm-10.602.232c0 .385-.29.664-.663.664c-.364 0-.611-.285-.611-.664c0-.358.3-.658.653-.658c.374 0 .621.284.621.658m7.384-.142c0-.585-.284-.943-.821-.943a.87.87 0 0 0-.685.311v-.274h-.48v2.096h.48v-1.132c0-.353.253-.574.558-.574s.464.205.464.553v1.159h.48v-1.196zm-7.384-.9v.273c-.137-.184-.363-.31-.695-.31c-.58 0-1.064.51-1.064 1.116s.416 1.064.975 1.064c.363 0 .632-.132.784-.342v.305h.469v-2.096h-.469z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 15.318a6.027 6.027 0 1 0 0-12.054a6.027 6.027 0 0 0 0 12.054m0 1.264A7.291 7.291 0 1 0 12 2a7.291 7.291 0 0 0 0 14.582" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsPayoneerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPaypalIcon],svg[lineicons-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.646 7.765l-.032-.032c-.87 4.122-3.608 6.344-8.052 6.344H9.758l-1.03 6.667h-.966l-.13.709c-.031.257.194.547.452.547h3.22a.79.79 0 0 0 .773-.644l.033-.129l.58-3.865l.031-.225c.033-.354.355-.644.773-.644h.483c3.125 0 5.572-1.256 6.28-4.928c.355-1.61.162-2.866-.611-3.8"></svg:path><svg:path fill="currentColor" d="m8.888 13.69l-.032.194c.032-.45.451-.773.87-.773h1.803c3.575 0 6.345-1.45 7.215-5.668c.032-.129.032-.226.032-.354c.225-1.546 0-2.641-.87-3.575c-.225-.258-.547-.483-.87-.709c-.45-.257-.901-.45-1.449-.547c-.354-.097-.805-.13-1.256-.194c-.386-.032-.74-.064-1.16-.064h-6.15a.87.87 0 0 0-.87.709L3.574 19.102c-.032.354.194.644.548.644h3.8z"></svg:path>`,
})
export class LineiconsPaypalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPaypalOriginalIcon],svg[lineicons-paypal-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m55.7 18.9l-.1-.1c-2.7 12.8-11.2 19.7-25 19.7H25l-3.2 20.7h-3l-.4 2.2c-.1.8.6 1.7 1.4 1.7h10c1.1 0 2.2-.8 2.4-2l.1-.4l1.8-12l.1-.7c.1-1.1 1.1-2 2.4-2h1.5c9.7 0 17.3-3.9 19.5-15.3c1.1-5 .5-8.9-1.9-11.8M25 38.3"></svg:path><svg:path fill="currentColor" d="m22.3 37.3l-.1.6c.1-1.4 1.4-2.4 2.7-2.4h5.6c11.1 0 19.7-4.5 22.4-17.6c.1-.4.1-.7.1-1.1c.7-4.8 0-8.2-2.7-11.1c-.7-.8-1.7-1.5-2.7-2.2c-1.4-.8-2.8-1.4-4.5-1.7c-1.1-.3-2.5-.4-3.9-.6c-1.2-.1-2.3-.2-3.6-.2H16.5c-1.4 0-2.5 1-2.7 2.2l-8 50.9c-.1 1.1.6 2 1.7 2h11.8z"></svg:path>`,
})
export class LineiconsPaypalOriginalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPenToSquareIcon],svg[lineicons-pen-to-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.875 2.513a1.75 1.75 0 0 0-2.475 0L13.242 7.67a2.25 2.25 0 0 0-.646 1.349l-.19 1.747a.75.75 0 0 0 .827.826l1.747-.189a2.25 2.25 0 0 0 1.35-.646L21.486 5.6a1.75 1.75 0 0 0 0-2.475zm-2.277 1.923l.966.966l-4.296 4.296a.75.75 0 0 1-.45.215l-.82.089l.09-.82a.75.75 0 0 1 .215-.45z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.5 3.25h10.041l-1.5 1.5H5.5a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h13a.75.75 0 0 0 .75-.75V9.958l1.5-1.5V18.5a2.25 2.25 0 0 1-2.25 2.25h-13a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 5.5 3.25"></svg:path>`,
})
export class LineiconsPenToSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPencilIcon],svg[lineicons-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61.2 13c-3.2-3.4-6.6-6.8-10-10.1c-.7-.7-1.5-1.1-2.4-1.1s-1.8.3-2.4 1L8.7 40.2c-.6.6-1 1.3-1.3 2L1.9 59c-.3.8-.1 1.6.3 2.2c.5.6 1.2 1 2.1 1h.4l17.1-5.7c.8-.3 1.5-.7 2-1.3l37.5-37.4c.6-.6 1-1.5 1-2.4s-.4-1.7-1.1-2.4M20.6 52.1c-.1.1-.2.1-.3.2L7.4 56.6l4.3-12.9c0-.1.1-.2.2-.3L39.4 16l8.7 8.7zm30.6-30.6l-8.7-8.7l6.1-6.1c2.9 2.8 5.8 5.8 8.6 8.7z"></svg:path>`,
})
export class LineiconsPencilIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPencil1Icon],svg[lineicons-pencil-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.303 3.78a2.25 2.25 0 0 0-3.182 0L14.35 5.551l-.033.033l-8.483 8.483a2.25 2.25 0 0 0-.562.936l-1.22 4.01a.75.75 0 0 0 .936.935l4.009-1.22c.353-.108.675-.3.936-.562L20.22 7.88a2.25 2.25 0 0 0 0-3.182zm-4.44 3.378l1.979 1.978l-7.97 7.97a.75.75 0 0 1-.312.187l-2.664.81l.811-2.663a.75.75 0 0 1 .187-.312zm3.04.918l-1.978-1.978L17.18 4.84a.75.75 0 0 1 1.061 0l.917.917a.75.75 0 0 1 0 1.06z"></svg:path>`,
})
export class LineiconsPencil1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPencilAltIcon],svg[lineicons-pencil-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62.2 11.9c0-.8-.3-1.6-.9-2.2c-1.2-1.2-2.4-2.4-3.5-3.6c-1.1-1.1-2.1-2.2-3.2-3.2c-.5-.6-1.1-1-1.9-1.1c-.9-.1-1.7.1-2.4.7l-6.8 6.8H8.1c-3.4 0-6.3 2.8-6.3 6.3V56c0 3.4 2.8 6.3 6.3 6.3h40.5c3.4 0 6.3-2.8 6.3-6.3V20.5l6.5-6.5c.5-.6.8-1.3.8-2.1M32.8 36c-.1.1-.1.1-.2.1l-7.2 2.4l2.4-7.2c0-.1.1-.1.1-.2l18-18l5 4.9zm17.5 20c0 1-.8 1.8-1.8 1.8H8.1c-1 0-1.8-.8-1.8-1.8V15.5c0-1 .8-1.8 1.8-1.8h30.8L24.7 28c-.5.5-1 1.2-1.2 2l-3.7 11.2c-.3.8-.1 1.5.3 2.2c.3.4.9 1 2 1h.4L34 40.6c.7-.2 1.4-.7 1.9-1.2L50.3 25zM54 14.9L49 10l3.1-3.1c.8.8 4.1 4.1 4.9 5z"></svg:path>`,
})
export class LineiconsPencilAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPepsiIcon],svg[lineicons-pepsi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.005 4.04a3 3 0 0 1-.256-.221A9.95 9.95 0 0 0 12.001 2c-5.52 0-9.995 4.477-9.995 10a9.96 9.96 0 0 0 1.978 5.972a20.46 20.46 0 0 0 8.764-5.19a20.4 20.4 0 0 0 5.257-8.741"></svg:path><svg:path fill="currentColor" d="M12.002 22c5.52 0 9.995-4.478 9.995-10a9.95 9.95 0 0 0-1.53-5.318a.5.5 0 0 1-.069-.083a7.1 7.1 0 0 1 .306 2.07a7 7 0 0 1-.777 3.214a7.3 7.3 0 0 1-2.096 2.428c-.699.515-1.537.952-2.524 1.31c-.786.287-1.808.585-3.074.872l-3.65.822a59 59 0 0 0-4.226 1.126A9.97 9.97 0 0 0 12.002 22"></svg:path>`,
})
export class LineiconsPepsiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPhoneIcon],svg[lineicons-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a2.25 2.25 0 0 0-2.25 2.25v15.5A2.25 2.25 0 0 0 8 22h8a2.25 2.25 0 0 0 2.25-2.25V4.25A2.25 2.25 0 0 0 16 2zm-.75 2.25A.75.75 0 0 1 8 3.5h8a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsPhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPhoneSetIcon],svg[lineicons-phone-set-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m60.2 55.2l-1.8-18.1c-.3-3.3-3.1-5.8-6.4-5.8H12c-3.3 0-6 2.5-6.4 5.8L3.8 55.2c-.2 1.8.4 3.6 1.6 4.9s2.9 2.1 4.7 2.1h43.6c1.8 0 3.5-.8 4.7-2.1c1.4-1.3 1.9-3.1 1.8-4.9m-5 1.9c-.4.4-.9.6-1.4.6H10.2c-.5 0-1-.2-1.4-.6s-.5-.9-.5-1.5l1.8-18.1c.1-1 .9-1.7 1.9-1.7h40c1 0 1.8.7 1.9 1.7l1.8 18.1c0 .6-.1 1.1-.5 1.5"></svg:path><svg:path fill="currentColor" d="M32 39.3c-4.1 0-7.5 3.4-7.5 7.5c0 4.2 3.4 7.5 7.5 7.5c4.2 0 7.5-3.4 7.5-7.5s-3.3-7.5-7.5-7.5m0 10.5c-1.7 0-3-1.4-3-3c0-1.7 1.4-3 3-3c1.7 0 3 1.4 3 3c0 1.7-1.3 3-3 3M6.1 20.6c.2 4.4 4 6.7 6.6 6.7h7.1c3.2-.2 6.4-2.3 6.4-6.7v-1.9h13.2v1.9c0 4.4 3.2 6.5 6.4 6.7h7.1c2.7 0 6.4-2.3 6.6-6.7v-4.4c-.3-2.9-1.3-5.3-3.1-7.2l-.1-.1c-2.6-2.4-5.6-3.7-7.9-4.5c-6.8-2.6-15.3-2.6-15.7-2.6c-6 .1-9.8.6-15.6 2.6c-2.4.9-5.4 2.2-8 4.5L9 9c-1.8 1.9-2.8 4.3-3.1 7.2v.3c.1.2.2 3.7.2 4.1m6.2-8.4c2-1.8 4.4-2.8 6.4-3.6c5.2-1.9 8.5-2.2 14.1-2.4c.5 0 8.1.1 14.1 2.4c2.1.8 4.5 1.8 6.4 3.6c1 1.1 1.6 2.6 1.8 4.3v3.9c-.1 2.1-2.1 2.4-2.1 2.4h-6.9c-1-.1-2.1-.5-2.1-2.2v-4.1c0-1-.6-1.9-1.6-2.1c-.7-.4-18.4-.4-19.1-.1c-.9.3-1.6 1.2-1.6 2.1v4.2c0 1.7-1.1 2.1-2.1 2.2h-6.9s-2-.3-2.1-2.3v-3.9c.1-1.9.7-3.3 1.7-4.4"></svg:path>`,
})
export class LineiconsPhoneSetIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPhotosIcon],svg[lineicons-photos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 10.5a1.25 1.25 0 1 0 0 2.5h.01a1.25 1.25 0 1 0 0-2.5z"></svg:path><svg:path fill="currentColor" d="M7.75 5.5A2.25 2.25 0 0 1 10 3.25h9a2.25 2.25 0 0 1 2.25 2.25v9A2.25 2.25 0 0 1 19 16.75h-1.75v1.75A2.25 2.25 0 0 1 15 20.75H6a2.25 2.25 0 0 1-2.25-2.25v-9A2.25 2.25 0 0 1 6 7.25h1.75zm8 4a.75.75 0 0 0-.75-.75H6a.75.75 0 0 0-.75.75v6.942l5.668-2.938a2.25 2.25 0 0 1 2.567.348l2.265 2.104zm-10.5 9c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-.497l-3.286-3.051a.75.75 0 0 0-.855-.117L5.25 18.132zm4-11.25H15a2.25 2.25 0 0 1 2.25 2.25v5.75H19a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0-.75.75z"></svg:path>`,
})
export class LineiconsPhotosIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPhpIcon],svg[lineicons-php-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.306c5.355 0 9.452 2.226 9.452 4.742S17.355 16.822 12 16.822s-9.452-2.258-9.452-4.774S6.645 7.306 12 7.306m0-.548c-5.548 0-10 2.355-10 5.258s4.452 5.226 10 5.226s10-2.323 10-5.226s-4.452-5.258-10-5.258m-3.194 4.87c-.225 1.259-1.129 1.13-2.193 1.13l.452-2.226c1.193 0 1.967-.129 1.741 1.097m-3.774 3.356h1.162l.258-1.42c1.258 0 2.096.097 2.806-.58c.807-.775 1.032-2.097.452-2.742c-.323-.355-.775-.549-1.452-.549H6.032zm5.839-6.678H12l-.258 1.42c.968 0 1.903-.033 2.355.354c.451.452.226.968-.226 3.549h-1.194c.452-2.452.549-2.678.42-2.871s-.645-.194-1.549-.194l-.58 3.065h-1.13zm6.903 3.323c-.226 1.258-1.129 1.129-2.193 1.129l.451-2.226c1.194 0 1.968-.129 1.742 1.097M14 14.984h1.129l.258-1.355c1.355 0 2.097.097 2.807-.58c.806-.775 1.032-2.098.451-2.743c-.322-.355-.774-.548-1.451-.548h-2.226z"></svg:path>`,
})
export class LineiconsPhpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPieChartIcon],svg[lineicons-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M37.4 2.2C21-.7 5.2 10.2 2.3 26.6c-1.5 7.9.3 16 4.9 22.6c4.6 6.7 11.5 11.1 19.4 12.6c1.8.3 3.6.5 5.4.5c14.3 0 27.1-10.3 29.8-24.9c2.9-16.4-8-32.2-24.4-35.2m19.9 34.4c-.1.8-.3 1.6-.5 2.3l-22.6-8.5v-24c.8.1 1.6.2 2.3.3c14 2.5 23.3 15.9 20.8 29.9M29.7 6.4v23.4H6.4l.3-2.4c2.1-11.7 11.8-20.1 23-21m-2.3 50.9c-6.8-1.2-12.6-5-16.5-10.7c-2.6-3.7-4.1-8-4.5-12.4h25.2l23.6 8.9C50.3 53.3 39 59.5 27.4 57.3"></svg:path>`,
})
export class LineiconsPieChartIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPieChart2Icon],svg[lineicons-pie-chart-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m-.75 1.533v8.156l-5.767 5.768A8.5 8.5 0 0 1 11.25 3.533M6.543 18.517l5.656-5.655l7.564 2.606A8.5 8.5 0 0 1 12 20.5a8.47 8.47 0 0 1-5.457-1.983m13.708-4.467l-7.501-2.585V3.533a8.5 8.5 0 0 1 7.5 10.517"></svg:path>`,
})
export class LineiconsPieChart2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPilcrowIcon],svg[lineicons-pilcrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.583 4.75V20a.75.75 0 0 1-1.5 0v-9.028H7.611a3.861 3.861 0 1 1 0-7.722h12.89a.75.75 0 0 1 0 1.5h-4.585V20a.75.75 0 0 1-1.5 0V4.75zm-1.5 4.722V4.75H7.611a2.361 2.361 0 0 0 0 4.722z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsPilcrowIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPimjoLogoIcon],svg[lineicons-pimjo-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.163 13.208V9.535h1.37q.374 0 .66.139c.195.088.344.22.455.394q.163.257.164.625q0 .366-.17.626a1.05 1.05 0 0 1-.448.393q-.288.138-.662.14h-.698v1.354h-.671zm.67-1.945h.712a.7.7 0 0 0 .315-.068a.53.53 0 0 0 .207-.202a.6.6 0 0 0 .073-.295a.6.6 0 0 0-.073-.295a.5.5 0 0 0-.207-.197a.66.66 0 0 0-.315-.073h-.711v1.133zm2.415 1.945V9.535h.671v3.67h-.671zm4.857-3.673v3.67h-.677v-2.494l-1.132 1.511h-.079l-1.137-1.557v2.543h-.671V9.535h.64l1.221 1.658l1.194-1.658h.643zm.413 3.673v-.615h.212a.52.52 0 0 0 .373-.134a.48.48 0 0 0 .144-.363v-2.56h.674v2.532q.002.339-.15.598a.97.97 0 0 1-.413.399a1.3 1.3 0 0 1-.63.143h-.213zm3.648-3.673a1.834 1.834 0 1 0 0 3.669a1.834 1.834 0 0 0 0-3.669m0 3.058a1.222 1.222 0 0 1 0-2.442a1.222 1.222 0 0 1 0 2.442"></svg:path><svg:path fill="currentColor" d="M19.45 11.387a.716.716 0 1 0 1.433 0h-1.436zM4.273 8.973A2.27 2.27 0 0 0 2 11.246v3.781l1.408-1.677a2.272 2.272 0 0 0 3.138-2.104a2.27 2.27 0 0 0-2.273-2.273m0 3.345a1.073 1.073 0 1 1 .001-2.146a1.073 1.073 0 0 1-.001 2.146"></svg:path>`,
})
export class LineiconsPimjoLogoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPimjoSymbolIcon],svg[lineicons-pimjo-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a7.504 7.504 0 0 0-7.51 7.508V22l4.65-5.542a7.506 7.506 0 0 0 10.367-6.95A7.5 7.5 0 0 0 11.999 2m0 11.05a3.544 3.544 0 0 1-3.542-3.542a3.54 3.54 0 0 1 3.541-3.541a3.54 3.54 0 0 1 3.542 3.541A3.54 3.54 0 0 1 12 13.05"></svg:path>`,
})
export class LineiconsPimjoSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPinIcon],svg[lineicons-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M47 16.7c0-8.3-6.7-15-15-15s-15 6.7-15 15c0 7.5 5.5 13.7 12.7 14.8V60c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3V31.5C41.4 30.4 47 24.2 47 16.7M32 27.2c-5.8 0-10.5-4.7-10.5-10.5S26.2 6.2 32 6.2s10.5 4.7 10.5 10.5S37.8 27.2 32 27.2"></svg:path><svg:path fill="currentColor" d="M34.6 8.5c-3.1 0-5.7 2.5-5.7 5.7s2.5 5.7 5.7 5.7s5.7-2.5 5.7-5.7s-2.6-5.7-5.7-5.7m0 6.8c-.6 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2s1.2.5 1.2 1.2s-.6 1.2-1.2 1.2"></svg:path>`,
})
export class LineiconsPinIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPinterestIcon],svg[lineicons-pinterest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.249 12.03c.064 3.002 1.453 6.005 3.81 7.814c.743.548 1.55.871 2.39 1.227c-.356-2.293.516-4.586 1-6.846c.065-.226.097-.484.097-.743c0-.355-.129-.71-.226-1.065a2.96 2.96 0 0 1 .226-1.744c.356-.742 1.195-1.324 1.938-1.033c.678.258.936 1.162.807 1.873c-.13.742-.517 1.388-.71 2.099c-.226.71-.194 1.582.322 2.066c.485.452 1.26.485 1.873.226c.904-.387 1.486-1.291 1.84-2.195c.647-1.68.518-3.81-.806-5.038c-.55-.549-1.324-.904-2.164-1.033c-1.42-.226-2.97.194-3.972 1.227c-1 1.033-1.453 2.615-1.033 3.972c.13.452.388.904.485 1.356s.064 1.033-.259 1.356a.5.5 0 0 1-.129.097c-.065.032-.161-.032-.226-.065c-.613-.387-1.098-1-1.388-1.646c-.905-1.97-.452-4.424.968-6.039c1.421-1.614 3.714-2.39 5.845-2.099c2.002.259 3.971 1.453 4.811 3.294c.517 1.098.613 2.357.42 3.552c-.194 1.227-.678 2.39-1.486 3.326s-1.97 1.582-3.196 1.647c-1.001.064-2.067-.291-2.584-1.13c-.322 1.743-.936 3.454-1.84 4.972c-.032.065 2.067.517 2.26.517c2.39.194 4.94-.743 6.814-2.228c5.166-4.101 4.617-11.948-.485-15.822c-2.648-2.035-5.78-2.422-8.88-1.324c-.936.323-1.808.872-2.615 1.453a9.8 9.8 0 0 0-3.003 3.68c-.678 1.325-.937 2.81-.904 4.295"></svg:path>`,
})
export class LineiconsPinterestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPizzaIcon],svg[lineicons-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62 36.3c-2.2-6.9-7-14.2-13.5-20.8C41.9 9 34.6 4.2 27.7 2c-2.7-.9-5.6.5-6.7 3.2L2.1 55c-.8 2-.3 4.2 1.2 5.7c1 1 2.4 1.6 3.8 1.6c.6 0 1.3-.1 1.9-.4l32.9-12.5h.1L58.8 43c2.7-1.1 4.1-4 3.2-6.7M7.4 57.7c-.5.2-.8 0-.9-.2c-.1-.1-.4-.5-.2-.9L9.9 47c1.2 1.7 3.2 2.8 5.4 2.8c3.6 0 6.6-2.9 6.6-6.6c0-3.6-2.9-6.6-6.6-6.6c-.5 0-1 .1-1.5.2l6.9-18.1c.8.5 1.7 1.1 2.6 1.7c-1.3 1.2-2.1 2.9-2.1 4.8c0 3.6 2.9 6.6 6.6 6.6c2.4 0 4.5-1.3 5.7-3.3c4.2 4 8.4 8.8 12 14.6l-1 .4c-.4-3.3-3.2-5.8-6.5-5.8c-3.6 0-6.6 2.9-6.6 6.6c0 1.4.4 2.7 1.2 3.8zm5.8-14.4c0-1.1.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1c0 1.1-.9 2.1-2.1 2.1c-1.1 0-2.1-1-2.1-2.1m14-19.9c.8.7 1.7 1.3 2.6 2.1c0 1.1-.9 2-2.1 2c-1.1 0-2.1-.9-2.1-2.1c0-1 .7-1.8 1.6-2m10 23c-.8-.3-1.4-1-1.4-2c0-1.1.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1c0 .4-.1.7-.3 1zm20-7.7l-7.6 2.9c-4.8-7.9-10.5-14.2-16.2-19c-.1 0-.1-.1-.2-.1c-1.4-1.2-2.8-2.3-4.1-3.3c-2.4-1.8-4.6-3.3-6.8-4.6l2.9-7.7c.1-.3.5-.6.8-.6h.3c6.1 1.9 13 6.4 18.9 12.4c5.9 5.9 10.5 12.9 12.4 18.9c.3.5 0 1-.4 1.1"></svg:path>`,
})
export class LineiconsPizzaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPizza2Icon],svg[lineicons-pizza-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.352 14.96a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8M8.56 12a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m6.069-1.98a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path fill="currentColor" d="M2.82 5.604c5.326-3.972 13.033-3.972 18.359 0c.945.706 1.063 1.99.466 2.9l-7.763 11.851a2.25 2.25 0 0 1-3.764 0L2.354 8.505c-.597-.912-.479-2.195.467-2.9m17.462 1.203c-4.794-3.576-11.77-3.576-16.564 0c-.239.178-.322.55-.11.875l.844 1.287c4.306-3.459 10.79-3.459 15.095 0l.844-1.287c.212-.325.13-.697-.11-.875m-8.91 12.726a.75.75 0 0 0 1.255 0l6.094-9.302c-3.793-3.141-9.65-3.141-13.443 0z"></svg:path>`,
})
export class LineiconsPizza2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPlaceholderDollarIcon],svg[lineicons-placeholder-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 5.5a.75.75 0 0 1 .75.75v.438c.99.15 1.75 1.006 1.75 2.039a.75.75 0 0 1-1.5 0a.563.563 0 0 0-.563-.563H12a.75.75 0 0 0-.75.75v.265a.75.75 0 0 0 .487.703l1.553.582a2.25 2.25 0 0 1 1.46 2.107v.265A2.25 2.25 0 0 1 13 15.03v.47a.75.75 0 0 1-1.5 0v-.438a2.06 2.06 0 0 1-1.75-2.039a.75.75 0 0 1 1.5 0c0 .311.252.563.563.563h.687a.75.75 0 0 0 .75-.75v-.265a.75.75 0 0 0-.487-.702l-1.553-.583a2.25 2.25 0 0 1-1.46-2.107v-.265A2.25 2.25 0 0 1 11.5 6.72v-.47a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.25 2a8.75 8.75 0 0 0-8.75 8.75c0 3.648 2.185 6.461 4.25 8.311a20.4 20.4 0 0 0 3.8 2.675a13 13 0 0 0 .345.18l.021.01l.006.003h.002s.002.001.326-.675l-.324.676a.75.75 0 0 0 .648 0l-.324-.676l.324.676h.002l.002-.001l.006-.003l.02-.01l.075-.038q.097-.049.27-.142a20.4 20.4 0 0 0 3.801-2.675c2.065-1.85 4.25-4.663 4.25-8.311A8.75 8.75 0 0 0 12.25 2m.855 17.913a17 17 0 0 1-.855.496a19 19 0 0 1-3.5-2.465C6.816 16.209 5 13.77 5 10.75a7.25 7.25 0 0 1 14.5 0c0 3.02-1.815 5.459-3.75 7.194a19 19 0 0 1-2.645 1.969" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsPlaceholderDollarIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPlaneIcon],svg[lineicons-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M37 62.3c-.9 0-1.8-.4-2.4-1L29.4 56c-1.1-1.1-1.3-2.9-.5-4.2l4-6.4l-6.8-6.7L14.4 53c-.6.8-1.5 1.2-2.5 1.3s-1.9-.3-2.6-1l-6.5-6.5c-1.2-1.2-1.3-3-.4-4.3L13.3 26L9 21.8c-3.5-3.5-3.4-9.2.1-12.7c1.7-1.7 3.9-2.6 6.3-2.7c2.5 0 4.7.9 6.4 2.6l4.2 4.3l16.3-11c1.4-.9 3.2-.7 4.3.4l6.5 6.5c.7.7 1 1.6 1 2.6s-.5 1.9-1.3 2.5L38.6 26.1l6.7 6.8l6.5-4.1c1.4-.9 3.1-.7 4.3.5l5.2 5.2c.8.8 1.1 1.8 1 2.9c-.2 1.1-.8 2-1.8 2.6l-13.1 7.3l-7.3 13.1c-.5 1-1.5 1.6-2.6 1.8c-.1 0-.3.1-.5.1m-3.8-8.9l3.6 3.7l7.2-13l13-7.2l-3.6-3.7l-6.5 4.1c-1.4.9-3.2.7-4.3-.5l-8.1-8.3c-.7-.7-1-1.6-1-2.6c.1-1 .5-1.9 1.3-2.5l14.3-11.7l-5-5.1l-16.3 10.9c-1.4.9-3.2.7-4.4-.4l-4.8-4.9c-.8-.8-1.9-1.2-3.1-1.2s-2.4.5-3.2 1.4c-1.8 1.8-1.8 4.6-.1 6.3l4.9 4.8c1.2 1.2 1.3 3 .4 4.4L6.6 44.2l5 5.1L23.3 35c.6-.8 1.5-1.2 2.5-1.3c1 0 1.9.3 2.6 1l8.2 8.1c1.1 1.1 1.3 2.9.5 4.3zM13.7 25.3"></svg:path>`,
})
export class LineiconsPlaneIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPlantscaleIcon],svg[lineicons-plantscale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2c4.06 0 7.556 2.42 9.122 5.897L7.898 21.122a10 10 0 0 1-1.613-.915L14.492 12H12l-7.071 7.071A9.97 9.97 0 0 1 2 12m20 .004L12.003 22c5.52-.002 9.995-4.477 9.997-9.996"></svg:path>`,
})
export class LineiconsPlantscaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPlayIcon],svg[lineicons-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.436 13.917c1.43-.878 1.43-2.956 0-3.834l-9.884-6.07c-1.499-.92-3.427.159-3.427 1.918V18.07c0 1.759 1.928 2.838 3.427 1.917zm-.785-2.556a.75.75 0 0 1 0 1.278l-9.884 6.069a.75.75 0 0 1-1.142-.64V5.932a.75.75 0 0 1 1.142-.639z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsPlayIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPlayStoreIcon],svg[lineicons-play-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.886 2l8.813 8.812l2.275-2.275c-3.108-1.885-7.27-4.414-9.142-5.552l-1.254-.76A1.56 1.56 0 0 0 4.886 2M3.541 3.055a1.6 1.6 0 0 0-.033.299v17.413c0 .073.014.142.025.211l8.965-8.966zm13.927 6.39L14.9 12.012l2.523 2.524L19.79 13.1c.454-.278.71-.697.703-1.155c-.007-.45-.263-.85-.7-1.098c-.098-.056-1.01-.608-2.324-1.403M13.7 13.213L4.913 22c.17-.03.341-.08.504-.18l10.512-6.377z"></svg:path>`,
})
export class LineiconsPlayStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPlayStoreAltIcon],svg[lineicons-play-store-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M59.14 30.203a3.8 3.8 0 0 0-1.254-1.067c-.464-.246-3.485-1.974-6.309-3.613a330 330 0 0 1-3.8-2.211c-.514-.296-.928-.543-1.225-.711l-.464-.276l-12.261-7.069l-11.314-6.535c-5.745-3.308-11.649-6.723-12.3-7.099h-.01c-.484-.286-1.067-.523-1.64-.592a3.1 3.1 0 0 0-.858 0h-.03l-.03.02a.1.1 0 0 0-.049.02h-.059a1.8 1.8 0 0 0-.918.404C5.612 2.047 5 3.172 5 4.377v55.58c0 .919.395 1.896 1.165 2.498c.395.425.977.612 1.54.523h.118c.632 0 1.284-.148 1.847-.474s6.604-3.82 12.498-7.226l11.659-6.743l11.995-6.93s.059-.03.089-.05l.157-.078h.03l.05-.04h.069l.118-.118h.01c.8-.464 10.188-5.864 11.511-6.625c.997-.582 1.876-1.57 1.856-2.843a2.84 2.84 0 0 0-.573-1.648M25.672 14.516l6.426 3.711l10.277 5.934l-5.34 5.311l-20.219-20.07c2.873 1.658 6.111 3.524 8.856 5.114M8.455 5.946l26.152 25.955L8.455 57.845zM32.1 45.564l-6.308 3.643c-2.744 1.58-6.002 3.455-8.954 5.163l20.198-20.09l5.38 5.35zm14.088-8.115c-.276.158-.513.296-.691.395L39.464 31.9l5.993-5.953c.76.444 2.28 1.322 4.393 2.547a670 670 0 0 0 5.913 3.396c-1.718.987-7.187 4.176-9.576 5.558" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsPlayStoreAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPlayStoreFillIcon],svg[lineicons-play-store-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.273 1l27.32 27.316l7.05-7.05C35.01 15.42 22.109 7.58 16.306 4.054L12.418 1.7a4.8 4.8 0 0 0-2.145-.7m-4.17 3.27c-.055.3-.103.602-.103.926V59.18c0 .227.046.438.077.653L33.871 32.04zm43.174 19.808l-7.96 7.96l7.821 7.822c4.144-2.512 7.015-4.256 7.333-4.448c1.409-.861 2.204-2.16 2.18-3.58c-.02-1.392-.816-2.637-2.17-3.403c-.302-.174-3.134-1.884-7.204-4.35M37.594 35.762L10.355 63c.53-.092 1.058-.25 1.564-.555l32.586-19.772z"></svg:path>`,
})
export class LineiconsPlayStoreFillIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPlaystationIcon],svg[lineicons-playstation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.036 8.059v4.813c2.035 1.001 3.618 0 3.618-2.584c0-2.65-.969-3.812-3.682-4.781c-1.098-.356-3.101-.97-4.49-1.228v14.407l3.262 1.034V7.671c0-.581.259-.969.679-.807c.484.096.613.646.613 1.195"></svg:path><svg:path fill="currentColor" d="M20.497 14.422c-1.356-.484-3.1-.678-4.49-.549c-1.421.13-2.422.485-2.422.485l-.227.097v1.938l3.49-1.228c.58-.226 1.453-.258 1.937-.096c.485.129.42.452-.194.678l-5.265 1.809v1.906l7.14-2.552s.968-.356 1.356-.872c.387-.42.226-1.099-1.325-1.616M2.375 15.52c-.71.55-.452 1.454 1.13 1.907c1.68.549 3.392.678 5.007.42c.097 0 .227-.033.323-.033v-1.68l-1.647.582c-.581.226-1.454.258-1.938.097c-.485-.13-.42-.453.226-.679l3.36-1.195v-1.938l-4.684 1.68c.032-.032-1.099.323-1.777.84"></svg:path>`,
})
export class LineiconsPlaystationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPlugIcon],svg[lineicons-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M45.3 11.9h-3.4V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v7.9H26.6V4c0-1.2-1-2.3-2.3-2.3S22 2.7 22 4v7.9h-3.4c-2.3 0-4.3 1.9-4.3 4.3v12.4c0 7.3 6 13.3 13.3 13.3h2V60c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3V41.9h2c7.3 0 13.3-6 13.3-13.3V16.2c0-2.4-1.9-4.3-4.2-4.3M45 28.6c0 4.9-4 8.8-8.8 8.8h-8.4c-4.9 0-8.8-4-8.8-8.8V16.4h26z"></svg:path>`,
})
export class LineiconsPlugIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPlug1Icon],svg[lineicons-plug-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 2.75a.75.75 0 0 1 1.5 0v2.983h3.5a.75.75 0 0 1 0 1.5H19v5a6.5 6.5 0 0 1-5.75 6.457v2.56a.75.75 0 0 1-1.5 0v-2.56A6.5 6.5 0 0 1 6 12.233v-5h-.5a.75.75 0 0 1 0-1.5H9V2.75a.75.75 0 0 1 1.5 0v2.983h4zm-7 4.483v5a5 5 0 0 0 10 0v-5z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsPlug1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPlusIcon],svg[lineicons-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 6a.75.75 0 0 1 1.5 0v5.25H18a.75.75 0 0 1 0 1.5h-5.25V18a.75.75 0 1 1-1.5 0v-5.25H6a.75.75 0 1 1 0-1.5h5.25z"></svg:path>`,
})
export class LineiconsPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPlusCircleIcon],svg[lineicons-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.81a.75.75 0 0 0-.75.75v2.69H8.56a.75.75 0 0 0 0 1.5h2.69v2.69a.75.75 0 0 0 1.5 0v-2.69h2.69a.75.75 0 0 0 0-1.5h-2.69V8.56a.75.75 0 0 0-.75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsPlusCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPnpmIcon],svg[lineicons-pnpm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 8.626h-5.625V3H21zm-6.188 0H9.187V3h5.625zm-6.187 0H3V3h5.625zM21 14.813h-5.625V9.188H21zm-6.188 0H9.187V9.188h5.625zm0 6.187H9.187v-5.625h5.625zM21 21h-5.625v-5.625H21zM8.625 21H3v-5.625h5.625z"></svg:path>`,
})
export class LineiconsPnpmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPointerIcon],svg[lineicons-pointer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.2 62.3c-1.6 0-3.1-.9-3.9-2.4L2.3 8.2c-.9-1.7-.6-3.8.8-5.1c1.4-1.4 3.4-1.7 5.2-.8L60 29.4c1.6.8 2.5 2.4 2.4 4.2c-.1 1.7-1.2 3.2-2.8 3.9l-15.9 6.2l-6.2 15.9c-.6 1.6-2.1 2.7-3.9 2.8c-.2-.2-.3-.1-.4-.1M6.4 6.4l26.8 51.2L39.7 41c.2-.6.7-1.1 1.3-1.3l16.7-6.5z"></svg:path>`,
})
export class LineiconsPointerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPointerDownIcon],svg[lineicons-pointer-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M36.8 62.2c-1.5 0-2.9-.4-4.1-1.2c-.5-.4-1.1-.8-1.5-1.3c-1.5-1.7-2.5-4.2-2.8-7c-.2-1.7-.1-3.3 0-4.9c-2.2.2-4.5-.6-6.2-2.1c-2.8.7-6-.2-8-2.4c-1.4.3-2.9.2-4.4-.3c-2.2-.8-4-2.5-4.8-4.6c-.7-1.7-.7-3.5-.7-5.1c0-3.3-.1-6.8.1-10.2c.2-4.7.9-10.8 4.5-15.1c2.9-3.5 7.4-5.6 13.2-6.3c5-.5 12.2.1 17 2.6c4.6 2.4 7.6 8.6 9.1 11.6c.2.4.4.9.5 1.1c2.9 4.8 5.5 8.6 8 11.8c1.3 1.7 2.9 3.8 3 6.5c0 3-2.1 5.9-5.1 6.9c-2.4.8-5.1.5-7.7-.9c-.5-.3-1.1-.6-1.6-.9c0 3.7 0 7.5-.1 11.2c-.1 2-.2 3.9-1 5.8c-1 2.2-2.9 3.8-5.2 4.5c-.7.2-1.5.3-2.2.3m-2.3-5.5c.2.2.4.4.7.6c.7.5 1.7.6 2.6.3c1.1-.3 2-1.1 2.4-2c.5-1.1.6-2.5.6-4.1c.2-5.3.1-10.7 0-15.9c0-.9.5-1.7 1.3-2.1s1.8-.2 2.4.4c1.4 1.3 2.9 2.6 4.4 3.5c1.5.8 3 1 4.2.6c1-.3 2-1.4 2-2.5c0-1.2-1-2.5-2-3.8c-2.7-3.4-5.3-7.3-8.3-12.2c-.2-.3-.4-.8-.7-1.4c-1.1-2.3-3.8-7.8-7.1-9.5C33 6.4 26.7 6 22.6 6.4c-3.2.3-7.6 1.4-10.2 4.7c-2.8 3.3-3.4 8.4-3.5 12.4c-.1 3.3-.1 6.7-.1 9.9c0 1.3 0 2.5.4 3.5c.3.9 1.1 1.6 2.1 1.9c.9.3 1.8.3 2.5-.1c.5-.3 1.1-.4 1.7-.2s1.1.5 1.4 1.1c.9 1.7 3.3 2.4 4.9 1.5c1-.5 2.2-.2 2.9.7c1.1 1.5 3.4 2 4.9 1c.7-.4 1.6-.5 2.3-.1s1.2 1.2 1.2 2c0 1-.1 2-.1 3c-.1 1.6-.2 3.1-.1 4.6c.1 1.8.7 3.4 1.6 4.4"></svg:path>`,
})
export class LineiconsPointerDownIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPointerLeftIcon],svg[lineicons-pointer-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.3 59.7h-4.8c-1.6 0-3.3 0-5.1-.7c-2.1-.8-3.8-2.5-4.6-4.8c-.5-1.5-.6-3-.3-4.4c-2.1-2.1-3.1-5.2-2.4-8c-1.5-1.7-2.2-4-2.1-6.2c-1.6.1-3.2.2-4.9 0c-2.8-.3-5.3-1.3-7-2.8c-.5-.5-.9-1-1.3-1.5c-1.2-1.8-1.5-4.1-.9-6.4c.7-2.4 2.3-4.3 4.5-5.2c1.9-.8 3.8-1 5.8-1c3.7-.1 7.5-.1 11.2-.1c-.3-.5-.7-1-.9-1.6c-1.4-2.6-1.7-5.3-.9-7.7c1-3 3.9-5.1 6.9-5.1c2.7 0 4.8 1.7 6.5 3c3.3 2.5 7 5.1 11.8 8c.1.1.6.3 1.1.5c3 1.4 9.1 4.4 11.6 9.1c2.6 4.9 3.2 12.1 2.6 17c-.6 5.8-2.8 10.3-6.3 13.2c-4.3 3.6-10.4 4.3-15.1 4.5c-1.8.2-3.6.2-5.4.2M19.2 31c.8 0 1.6.4 2 1.2c.4.7.4 1.6-.1 2.3c-1 1.5-.5 3.8 1 4.9c.9.7 1.2 1.9.7 2.9c-.9 1.6-.1 3.9 1.5 4.9c.5.3.9.8 1.1 1.4s.1 1.2-.2 1.7c-.4.7-.5 1.6-.1 2.5c.3 1 1.1 1.7 1.9 2.1c1 .4 2.3.4 3.5.4c3.3 0 6.6.1 9.9-.1c4-.2 9.1-.7 12.4-3.4c3.2-2.7 4.3-7 4.7-10.2c.5-4.2 0-10.5-2.1-14.4c-1.8-3.3-7.2-6-9.5-7.1c-.7-.3-1.1-.5-1.4-.7c-5-3-8.8-5.7-12.2-8.3c-1.3-1-2.6-2-3.8-2s-2.2 1-2.5 2c-.4 1.2-.2 2.7.6 4.2c.8 1.6 2.2 3 3.5 4.4c.6.7.8 1.6.4 2.4s-1.2 1.3-2.1 1.3c-5.2-.1-10.6-.1-15.9 0c-1.6 0-3 .1-4.1.6c-.9.4-1.7 1.3-2 2.4c-.3 1-.2 1.9.3 2.6c.2.2.4.5.6.7c1 .9 2.6 1.5 4.4 1.7c1.5.1 3 0 4.6-.1c.9-.3 1.9-.3 2.9-.3"></svg:path>`,
})
export class LineiconsPointerLeftIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPointerRightIcon],svg[lineicons-pointer-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61.9 24.9c-.7-2.4-2.3-4.3-4.5-5.2c-1.9-.8-3.8-1-5.8-1c-3.7-.1-7.5-.1-11.2-.1c.3-.5.7-1 .9-1.6c1.4-2.6 1.7-5.3.9-7.7c-1-3-3.8-5.1-6.8-5.1h-.1c-2.7 0-4.8 1.7-6.5 3c-3.2 2.5-7 5.1-11.8 8c-.1.1-.6.3-1.1.5c-3 1.4-9.1 4.4-11.6 9.1c-2.6 4.9-3.2 12.1-2.6 17C2.3 47.6 4.5 52.1 8 55c4.3 3.6 10.4 4.3 15.1 4.5c1.8.1 3.6.1 5.4.1h4.8c1.6 0 3.3 0 5.1-.7c2.1-.8 3.8-2.5 4.6-4.8c.5-1.5.6-3 .3-4.4c2.1-2 3.1-5.2 2.4-8c1.5-1.7 2.2-4 2.1-6.2c1.6.1 3.2.2 4.9 0c2.8-.3 5.3-1.3 7-2.8c.5-.5.9-1 1.3-1.5c1.2-1.7 1.6-4 .9-6.3m-4.6 3.9c-.2.2-.4.5-.6.7c-1 .9-2.6 1.5-4.4 1.7c-1.5.1-3 0-4.6-.1c-1-.1-2-.1-3-.1c-.8 0-1.6.4-2 1.2c-.4.7-.4 1.6.1 2.3c1 1.5.5 3.8-1 4.9c-.9.7-1.2 1.9-.7 2.9c.9 1.6.1 3.9-1.5 4.9c-.5.3-.9.8-1.1 1.4s-.1 1.2.2 1.7c.4.7.5 1.6.1 2.5c-.3 1-1.1 1.7-1.9 2.1c-1 .4-2.3.4-3.5.4c-3.3 0-6.6.1-9.9-.1c-4-.2-9.1-.7-12.4-3.4c-3.2-2.7-4.3-7-4.7-10.2C6 37.3 6.4 31 8.5 27c1.8-3.3 7.2-6 9.5-7.1c.7-.3 1.1-.5 1.4-.7c5-3 8.8-5.7 12.2-8.3c1.3-1 2.6-2 3.8-2s2.2 1 2.5 2c.4 1.2.2 2.7-.6 4.2c-.8 1.6-2.2 3-3.5 4.4c-.6.7-.8 1.6-.4 2.4s1.2 1.4 2.1 1.3c5.2-.1 10.6-.1 15.9 0c1.6 0 3 .1 4.1.6c.9.4 1.7 1.3 2 2.4c.4.9.3 1.9-.2 2.6"></svg:path>`,
})
export class LineiconsPointerRightIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPointerTopIcon],svg[lineicons-pointer-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38.4 62.2c-4.5 0-9.7-.8-13.5-2.8c-4.6-2.4-7.6-8.6-9.1-11.6c-.2-.4-.4-.9-.5-1.1c-2.9-4.8-5.5-8.6-8-11.8c-1.3-1.7-2.9-3.8-3-6.5c0-3 2.1-5.9 5.1-6.9c2.4-.8 5.1-.5 7.7.9c.5.3 1.1.6 1.6.9c0-3.7 0-7.5.1-11.2c.1-2 .2-4 1-5.8c1-2.2 2.9-3.8 5.2-4.5c2.2-.6 4.5-.3 6.4.9c.6.4 1.1.8 1.5 1.3c1.6 1.7 2.5 4.2 2.8 7c.2 1.7.1 3.3 0 4.9c2.2-.2 4.5.6 6.2 2.1c2.8-.7 6 .2 8 2.4c1.4-.3 2.9-.2 4.4.3c2.2.8 4 2.5 4.8 4.6c.7 1.7.7 3.5.7 5.1c0 3.3.1 6.7-.1 10.2c-.2 4.7-.9 10.8-4.5 15.1c-2.9 3.5-7.4 5.6-13.2 6.3c-1.2.2-2.4.2-3.6.2M12 25.8c-.4 0-.8.1-1.2.2c-1 .3-2 1.4-2 2.5c0 1.2 1 2.5 2 3.8c2.7 3.4 5.3 7.3 8.3 12.2c.2.3.4.8.7 1.4c1.1 2.3 3.8 7.8 7.1 9.5c4 2.1 10.3 2.6 14.5 2.1c3.2-.4 7.6-1.4 10.2-4.7c2.7-3.3 3.3-8.4 3.4-12.4c.1-3.3.1-6.7.1-9.9c0-1.2 0-2.5-.4-3.5c-.3-.9-1.1-1.6-2.1-1.9c-.9-.3-1.8-.3-2.5.1c-.5.3-1.1.4-1.7.2s-1.1-.5-1.4-1.1c-.9-1.7-3.3-2.4-4.9-1.5c-1 .5-2.2.2-2.9-.7c-1.1-1.5-3.4-2-4.9-1c-.7.4-1.6.5-2.3.1s-1.2-1.2-1.2-2c0-1 .1-2 .1-3c.1-1.6.2-3.1.1-4.6c-.2-1.8-.8-3.4-1.7-4.4c-.2-.2-.4-.4-.7-.6c-.7-.5-1.7-.6-2.6-.3c-1.1.3-2 1.1-2.4 2c-.5 1.1-.6 2.5-.6 4.1c-.2 5.3-.1 10.6 0 15.9c0 .9-.5 1.7-1.3 2.1c-.7.4-1.7.3-2.3-.4c-1.4-1.3-2.9-2.6-4.4-3.5c-1.1-.5-2.1-.7-3-.7"></svg:path>`,
})
export class LineiconsPointerTopIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPopupIcon],svg[lineicons-popup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 5H8c-3.4 0-6.2 2.8-6.2 6.2V44c0 3.4 2.8 6.2 6.2 6.2h14.6l6.9 8.4c.6 1 1.5 1.4 2.5 1.4s1.9-.4 2.5-1.2l6.9-8.4H56c3.4 0 6.2-2.8 6.2-6.2V11.3C62.2 7.8 59.4 5 56 5m1.8 39.1c0 1-.8 1.8-1.8 1.8H41.3c-1.1 0-2.2.4-3 1.2l-.2.2l-6.1 7.5l-6.1-7.5l-.2-.2q-1.2-1.2-3-1.2H8c-1 0-1.8-.8-1.8-1.8V11.3c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8z"></svg:path><svg:path fill="currentColor" d="M17.2 19.7h27.5c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H17.2c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2m0 10.3h19.9c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H17.2c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2m30.1 5.7H17.2c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h30.1c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2"></svg:path>`,
})
export class LineiconsPopupIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPostcardIcon],svg[lineicons-postcard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 11.9H8c-3.4 0-6.2 2.8-6.2 6.2v27.7C1.8 49.2 4.6 52 8 52h48c3.4 0 6.2-2.8 6.2-6.2V18.2c0-3.5-2.8-6.3-6.2-6.3m1.8 33.9c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V18.2c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8z"></svg:path><svg:path fill="currentColor" d="M32 20.9c-1.2 0-2.2 1-2.2 2.2v15.3c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V23.1c0-1.2-1-2.2-2.2-2.2M11.6 33h8.9c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-8.9c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2M52 20.9h-9.4c-1.5 0-2.6 1.2-2.6 2.6v9.4c0 1.4 1.2 2.6 2.6 2.6H52c1.4 0 2.6-1.2 2.6-2.6v-9.4c0-1.5-1.2-2.6-2.6-2.6M50.1 31h-5.7v-5.7h5.7zM23 36.1H11.6c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2H23c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.2-2.2"></svg:path>`,
})
export class LineiconsPostcardIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPostgresqlIcon],svg[lineicons-postgresql-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.238 2a8.5 8.5 0 0 0-2.295.336l-.053.017a9 9 0 0 0-1.425-.138c-.982-.017-1.825.222-2.505.618c-.67-.232-2.06-.633-3.525-.553c-1.02.056-2.133.366-2.958 1.237c-.823.87-1.258 2.218-1.166 4.051c.025.506.17 1.331.408 2.4c.24 1.068.575 2.319.994 3.46s.879 2.166 1.596 2.863c.359.35.852.642 1.434.618c.408-.016.777-.195 1.095-.46c.155.204.321.294.472.376c.19.104.375.175.567.222c.344.086.933.2 1.623.083c.235-.039.483-.116.73-.225c.008.275.02.544.03.817c.034.863.056 1.66.315 2.36c.042.114.156.702.606 1.221s1.332.845 2.336.63c.708-.152 1.609-.425 2.207-1.277c.592-.842.859-2.05.911-4.008a4 4 0 0 1 .046-.28l.14.013h.017c.756.034 1.576-.073 2.261-.392c.607-.28 1.066-.565 1.4-1.069a1.07 1.07 0 0 0 .2-.536c.025-.26-.124-.666-.371-.854c-.496-.377-.808-.233-1.142-.164q-.496.109-1.002.122a19.2 19.2 0 0 0 2.049-4.871c.233-.9.364-1.73.375-2.456c.01-.726-.049-1.368-.484-1.924c-1.359-1.737-3.27-2.217-4.748-2.234h-.138zm-.039.533c1.399-.013 3.185.38 4.468 2.019c.288.368.374.906.364 1.57c-.01.662-.133 1.456-.357 2.325a18.7 18.7 0 0 1-2.415 5.406q.062.044.132.072c.242.1.793.186 1.892-.04c.276-.058.479-.097.689.063a.44.44 0 0 1 .152.354a.6.6 0 0 1-.108.28c-.212.319-.632.621-1.17.87c-.475.222-1.157.338-1.762.345a2.7 2.7 0 0 1-.821-.094l-.015-.006c-.092.883-.303 2.627-.44 3.423c-.11.642-.303 1.152-.67 1.534c-.367.381-.886.611-1.585.761c-.865.186-1.495-.014-1.902-.357c-.406-.341-.592-.794-.703-1.072c-.077-.192-.117-.44-.155-.772a17 17 0 0 1-.086-1.195q-.039-1.05-.025-2.102a2.55 2.55 0 0 1-1.293.633a3.4 3.4 0 0 1-1.393-.075a2 2 0 0 1-.433-.167c-.142-.076-.277-.162-.367-.331a.47.47 0 0 1-.048-.318a.5.5 0 0 1 .182-.276c.165-.134.383-.209.713-.277c.599-.123.808-.207.935-.308c.109-.087.231-.262.448-.519l-.002-.034a2.5 2.5 0 0 1-1.109-.298a37 37 0 0 0-1.542 1.743c-.327.392-.689.617-1.07.633s-.727-.176-1.02-.46c-.586-.57-1.054-1.549-1.461-2.655c-.407-1.107-.738-2.34-.973-3.39c-.236-1.05-.375-1.896-.395-2.305c-.087-1.735.319-2.904 1.014-3.641c.697-.738 1.652-1.017 2.583-1.07c1.67-.096 3.257.486 3.578.611c.619-.42 1.415-.681 2.41-.665c.473.007.943.068 1.401.182l.017-.007q.303-.107.616-.179a8 8 0 0 1 1.725-.209zm.127.559h-.122q-.718.01-1.42.16a6.24 6.24 0 0 1 2.375 1.875a7 7 0 0 1 .944 1.6q.136.332.188.55c.017.072.03.133.033.196a.3.3 0 0 1-.01.12l-.005.011c.025.73-.155 1.225-.177 1.922c-.017.505.112 1.098.144 1.746c.03.608-.043 1.276-.438 1.932l.095.12c1.045-1.646 1.798-3.466 2.2-5.019c.215-.836.329-1.593.339-2.193c.008-.6-.104-1.035-.246-1.217c-1.118-1.43-2.632-1.794-3.9-1.804m-3.992.213c-.985.003-1.691.3-2.227.746c-.553.46-.924 1.092-1.167 1.737A7.4 7.4 0 0 0 8.513 7.8l.01-.007a4.3 4.3 0 0 1 1.107-.43c.418-.095.87-.125 1.278.033s.745.53.868 1.096c.587 2.714-.182 3.723-.466 4.485q-.161.415-.276.844c.036-.008.072-.018.108-.022c.2-.016.357.05.45.09c.285.119.48.367.586.65q.042.113.06.237a.3.3 0 0 1 .016.106a46 46 0 0 0 .011 3.115c.02.448.048.843.083 1.155c.036.31.087.547.12.627c.106.267.262.616.544.854c.281.236.686.395 1.424.236c.64-.137 1.035-.328 1.3-.602c.262-.274.42-.656.52-1.24c.152-.875.455-3.413.492-3.89c-.017-.36.036-.637.151-.848a1 1 0 0 1 .46-.42c.08-.036.154-.06.214-.078a5 5 0 0 0-.202-.27a3.7 3.7 0 0 1-.555-.917a7 7 0 0 0-.214-.402c-.111-.2-.251-.45-.398-.731c-.293-.563-.612-1.244-.778-1.908c-.165-.664-.19-1.35.234-1.835c.375-.43 1.034-.608 2.022-.508c-.03-.087-.047-.16-.096-.277a6.5 6.5 0 0 0-.867-1.47c-.838-1.07-2.194-2.132-4.289-2.166h-.096zM6.8 3.348q-.159 0-.316.01c-.842.048-1.638.292-2.207.895c-.57.604-.945 1.593-.863 3.23c.015.31.15 1.179.382 2.21c.23 1.032.558 2.246.952 3.319s.871 2.006 1.325 2.447c.228.221.426.31.606.303c.181-.008.399-.113.665-.432q.726-.877 1.508-1.707a2.91 2.91 0 0 1-.973-2.625a10 10 0 0 0 .088-1.646c-.01-.444-.042-.739-.042-.923v-.025a8.2 8.2 0 0 1 .493-2.814c.233-.62.58-1.25 1.101-1.76c-.511-.168-1.42-.425-2.403-.473a6 6 0 0 0-.317-.009zM17.131 7.75c-.566.008-.883.153-1.05.344c-.236.271-.258.746-.112 1.331c.146.586.448 1.24.731 1.785c.142.273.28.518.39.717c.112.2.194.341.244.462a3 3 0 0 0 .148.302c.219-.463.258-.917.236-1.39c-.03-.586-.165-1.185-.145-1.792c.022-.709.162-1.17.175-1.719a5 5 0 0 0-.617-.04m-6.862.096a2.4 2.4 0 0 0-.513.062a4 4 0 0 0-.96.374q-.154.082-.292.19l-.018.016c.005.122.03.417.04.851c.01.475-.003 1.081-.094 1.737c-.2 1.425.835 2.605 2.05 2.607c.07-.293.187-.59.304-.902c.338-.912 1.004-1.577.443-4.172c-.091-.425-.273-.596-.523-.693a1.2 1.2 0 0 0-.437-.07m6.598.17h.041a.7.7 0 0 1 .15.018q.069.015.116.046a.14.14 0 0 1 .062.092v.006a.2.2 0 0 1-.03.113a.6.6 0 0 1-.092.125a.56.56 0 0 1-.321.177a.5.5 0 0 1-.342-.086a.5.5 0 0 1-.108-.099a.2.2 0 0 1-.053-.105a.14.14 0 0 1 .035-.107a.3.3 0 0 1 .098-.075a1.1 1.1 0 0 1 .444-.107zm-6.517.14q.066 0 .139.01c.127.018.24.052.327.102q.064.033.11.089q.026.029.038.066q.011.037.008.075a.25.25 0 0 1-.063.129a.5.5 0 0 1-.119.108a.53.53 0 0 1-.373.094a.6.6 0 0 1-.35-.19a.6.6 0 0 1-.099-.136a.23.23 0 0 1-.034-.148c.013-.09.087-.137.16-.162a.7.7 0 0 1 .255-.034zm7.55 6.12h-.002c-.123.044-.224.063-.309.1a.38.38 0 0 0-.199.178c-.052.096-.097.266-.084.555q.058.04.123.059c.143.043.382.071.649.067c.531-.006 1.186-.13 1.533-.291c.285-.133.55-.306.786-.513c-1.162.24-1.818.176-2.22.01a1.1 1.1 0 0 1-.277-.167zm-6.692.078h-.018c-.044.004-.108.019-.232.156c-.29.325-.392.53-.631.72c-.24.19-.55.292-1.171.42a1.6 1.6 0 0 0-.384.12c.024.02.021.024.058.043c.09.05.208.095.302.119c.266.066.705.144 1.162.066c.458-.078.934-.297 1.34-.866c.07-.098.077-.243.02-.4c-.059-.155-.186-.29-.276-.327a.6.6 0 0 0-.17-.05z"></svg:path>`,
})
export class LineiconsPostgresqlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPostmanIcon],svg[lineicons-postman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.914 5.888C16.54 1.518 10.26.71 5.888 4.086C1.518 7.46.71 13.74 4.086 18.112c3.375 4.37 9.655 5.178 14.026 1.802l.002-.002c4.369-3.376 5.175-9.654 1.8-14.024m-2.559 2.495l-.78-.768l-.169-.168l.047-.047l1.184-1.118c.212.257.328.58.328.915c-.001.39-.157.765-.434 1.041q-.083.08-.176.145M6.698 16.738l.139.13l.725.725l-1.614-.105zM16.49 5.73c.325.002.641.11.9.308l-1.3 1.308a.14.14 0 0 0-.043.059l-.001.005l-.002.006a.13.13 0 0 0 .045.139l.984.983a1.46 1.46 0 0 1-1.616-.308a1.47 1.47 0 0 1-.315-1.594a1.46 1.46 0 0 1 1.348-.906m-.909 3.266a.46.46 0 0 1-.158.334l-3.895 3.389l-.013.011l-.142-.142l-.062-.062l-.03-.03l-.087-.087l-.033-.033l-.067-.067l3.687-3.654a.46.46 0 0 1 .585-.06a.5.5 0 0 1 .074.06l.037.038q.048.072.083.15q.023.075.021.153m-4.498 3.74l.007.019l.034.033l.146.143l-.054.007l-.809.099l.1-.1l.391-.39zm3.93-4.499a.76.76 0 0 0-.44.218l-3.675 3.658l-.72-.72c1.905-1.898 3.07-2.888 3.795-3.213a.9.9 0 0 1 1.04.057m-5.048 3.368l.015.015l.595.595l-1.552.332zm-2.033 4.858a.23.23 0 0 0-.125.266l.166.725a.05.05 0 0 1 0 .059a.05.05 0 0 1-.066 0l-.984-.992l3.03-3.075l1.569-.243l.576.576a20.5 20.5 0 0 1-4.166 2.684m4.441-2.9l-.608-.608l3.829-3.358c-.272 1.08-1.716 2.544-3.221 3.966m5.275-6.55a.125.125 0 0 0-.159-.05a.117.117 0 0 0-.05.158a.36.36 0 0 1-.041.376a.1.1 0 0 0-.031.079q0 .046.03.079a.1.1 0 0 0 .067 0a.11.11 0 0 0 .109-.033a.57.57 0 0 0 .075-.609"></svg:path>`,
})
export class LineiconsPostmanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPoundIcon],svg[lineicons-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.585 20.566a.75.75 0 0 1-.046-.5a.75.75 0 0 1 .59-.554l.018-.003l.099-.025a5 5 0 0 0 1.577-.741c.838-.595 1.675-1.609 1.675-3.394v-1.474H6.326a.75.75 0 0 1 0-1.5h3.172v-4.15a4.725 4.725 0 1 1 9.45 0v.153a.75.75 0 1 1-1.5 0v-.153a3.225 3.225 0 1 0-6.45 0v4.15h3.174a.75.75 0 0 1 0 1.5h-3.174v1.474c0 1.965-.798 3.29-1.731 4.151h8.963a.75.75 0 0 1 0 1.5H6.28a.75.75 0 0 1-.695-.434"></svg:path>`,
})
export class LineiconsPoundIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPowerButtonIcon],svg[lineicons-power-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 13.42a.75.75 0 0 0 1.5 0V2.75a.75.75 0 0 0-1.5 0z"></svg:path><svg:path fill="currentColor" d="M19.625 12.875a7.63 7.63 0 0 0-5.375-7.288V4.03c3.951 1.003 6.875 4.583 6.875 8.846a9.125 9.125 0 0 1-18.25 0c0-4.263 2.924-7.844 6.875-8.846v1.558a7.625 7.625 0 1 0 9.875 7.287"></svg:path>`,
})
export class LineiconsPowerButtonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPowerSwitchIcon],svg[lineicons-power-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 37.9c1.2 0 2.3-1 2.3-2.3V5c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v30.7c.1 1.2 1.1 2.2 2.3 2.2"></svg:path><svg:path fill="currentColor" d="M43.1 9.7c-1.1-.5-2.5 0-3 1.1s0 2.5 1.1 3c8 3.6 13.2 11.7 13.2 20.5c0 12.4-10.1 22.5-22.5 22.5S9.5 46.7 9.5 34.3c0-8.8 5.2-16.8 13.2-20.5c1.1-.5 1.6-1.8 1.1-3c-.5-1.1-1.8-1.6-3-1.1C11.3 14.1 5 23.7 5 34.3c0 14.9 12.1 27 27 27s27-12.1 27-27c0-10.6-6.3-20.2-15.9-24.6"></svg:path>`,
})
export class LineiconsPowerSwitchIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPreviousStep2Icon],svg[lineicons-previous-step-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.914 4.5a.75.75 0 0 1 1.5 0v5.338l8.153-5.565c1.494-1.019 3.518.05 3.518 1.859v11.736c0 1.808-2.024 2.878-3.518 1.858l-8.153-5.564V19.5a.75.75 0 1 1-1.5 0zm1.901 8.12l8.598 5.868a.75.75 0 0 0 1.172-.62V6.132a.75.75 0 0 0-1.172-.62l-8.598 5.869a.75.75 0 0 0 0 1.238"></svg:path>`,
})
export class LineiconsPreviousStep2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPrinterIcon],svg[lineicons-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.155 7.791V6.623a2.25 2.25 0 0 0-.684-1.616l-1.157-1.122a2.25 2.25 0 0 0-1.566-.634H8.095a2.25 2.25 0 0 0-2.25 2.25v2.29H5.5a2.25 2.25 0 0 0-2.25 2.25v3.919a2.25 2.25 0 0 0 2.25 2.25h.344v2.29a2.25 2.25 0 0 0 2.25 2.25h7.81a2.25 2.25 0 0 0 2.25-2.25v-2.29h.345a2.25 2.25 0 0 0 2.25-2.25v-3.92a2.25 2.25 0 0 0-2.25-2.25zm-10.06-3.04h6.653a.75.75 0 0 1 .522.211l1.157 1.122a.75.75 0 0 1 .228.539V7.79h-9.31V5.5a.75.75 0 0 1 .75-.75m-2.251 9.195v.764H5.5a.75.75 0 0 1-.75-.75V10.04a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 .75.75v3.919a.75.75 0 0 1-.75.75h-.346v-.764a.75.75 0 0 0-.75-.75H6.594a.75.75 0 0 0-.75.75m1.5.75h9.31V18.5a.75.75 0 0 1-.75.75h-7.81a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class LineiconsPrinterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPrismaIcon],svg[lineicons-prisma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.003 15.728a1 1 0 0 1-.008-1.054l7.479-12.199a.996.996 0 0 1 1.753.104l6.832 14.82a.996.996 0 0 1-.618 1.37l-10.628 3.19a.996.996 0 0 1-1.127-.42zm8.334-9.686L9.707 19.14a.373.373 0 0 0 .472.431l7.343-2.192a.373.373 0 0 0 .236-.506L13.046 5.968a.373.373 0 0 0-.71.074"></svg:path>`,
})
export class LineiconsPrismaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsProducthuntIcon],svg[lineicons-producthunt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.322 9h-2.87v3h2.87c.807 0 1.517-.677 1.517-1.484c.032-.87-.71-1.516-1.517-1.516"></svg:path><svg:path fill="currentColor" d="M12 2C6.452 2 2 6.452 2 12s4.452 10 10 10s10-4.452 10-10S17.548 2 12 2m1.323 12h-2.871v3h-2V7h4.87a3.484 3.484 0 0 1 3.517 3.516C16.87 12.452 15.259 14 13.323 14"></svg:path>`,
})
export class LineiconsProducthuntIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsProtectionIcon],svg[lineicons-protection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.6 7.5L33.3 1.9c-.8-.2-1.7-.2-2.5 0L10.4 7.5c-2.1.6-3.6 2.5-3.6 4.7V27c0 15.5 9.2 29.2 23.4 34.9c.6.2 1.2.4 1.8.4s1.2-.1 1.8-.4c14.2-5.7 23.4-19.5 23.4-35V12.2c0-2.2-1.5-4.1-3.6-4.7m-.9 19.4c0 13.4-8.3 25.8-20.5 30.8h-.3c-12.5-5-20.6-17.1-20.6-30.7V12.2c0-.1.1-.3.2-.3l20.4-5.6h.2l20.4 5.6c.1 0 .2.2.2.3z"></svg:path><svg:path fill="currentColor" d="M43.3 22.6L29.5 34.2L23.3 29c-1-.8-2.4-.7-3.2.3s-.7 2.4.3 3.2l7.6 6.4c.4.4.9.5 1.4.5s1-.2 1.4-.5L46.2 26c1-.8 1.1-2.2.3-3.2c-.8-.9-2.3-1-3.2-.2"></svg:path>`,
})
export class LineiconsProtectionIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsProtonMailLogoIcon],svg[lineicons-proton-mail-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.116 14.466v-1.987c0-.815.469-1.457 1.416-1.457c.153 0 .306.01.449.051v.815c-.112-.01-.204-.01-.245-.01c-.5 0-.713.234-.713.693v1.885h-.907zm2.14-1.681c0-.999.754-1.763 1.803-1.763c1.05 0 1.804.764 1.804 1.763s-.755 1.762-1.804 1.762c-1.05 0-1.803-.764-1.803-1.762m2.71 0c0-.57-.377-.968-.907-.968c-.52 0-.907.397-.907.968c0 .57.377.968.907.968s.907-.398.907-.968m3.535-.968h-.978v1.253c0 .438.153.642.611.642c.041 0 .153 0 .286-.01v.743a2 2 0 0 1-.53.082c-.764 0-1.274-.458-1.274-1.324v-1.386h-.61v-.723h.152a.457.457 0 0 0 .458-.459v-.683h.907v1.142h.978zm.275.968c0-.999.754-1.763 1.804-1.763s1.803.764 1.803 1.763s-.764 1.762-1.803 1.762c-1.05 0-1.804-.764-1.804-1.762m2.7 0c0-.57-.377-.968-.906-.968c-.52 0-.907.397-.907.968c0 .57.377.968.907.968s.906-.398.906-.968m1.376 1.68V12.55c0-.886.57-1.528 1.579-1.528S22 11.664 22 12.55v1.916h-.907v-1.844c0-.5-.224-.805-.672-.805s-.662.306-.662.805v1.844zM2 13.163v1.304h.917v-1.243c0-.255.204-.459.458-.459h.938a1.654 1.654 0 0 0 0-3.311H2v1.63h.917v-.764h1.335a.785.785 0 0 1 0 1.57h-.968c-.52 0-.989.315-1.182.794a1.1 1.1 0 0 0-.102.479"></svg:path>`,
})
export class LineiconsProtonMailLogoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsProtonMailSymbolIcon],svg[lineicons-proton-mail-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.099 16.785V22h3.656v-4.992c0-.477.191-.954.54-1.304a1.8 1.8 0 0 1 1.304-.54h3.72c1.75 0 3.435-.7 4.643-1.94a6.62 6.62 0 0 0 1.94-4.674a6.62 6.62 0 0 0-1.94-4.674A6.7 6.7 0 0 0 13.32 2H4.099v6.518h3.656V5.434h5.31c.827 0 1.622.318 2.194.922c.604.572.922 1.367.922 2.194s-.318 1.622-.922 2.194a3.13 3.13 0 0 1-2.194.922H9.218c-.668 0-1.336.127-1.94.382a5.2 5.2 0 0 0-1.653 1.113a5.2 5.2 0 0 0-1.113 1.653a4.8 4.8 0 0 0-.413 1.971"></svg:path>`,
})
export class LineiconsProtonMailSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPulseIcon],svg[lineicons-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.6 49.5c-2.2 0-3.9-1.3-4.6-3.3l-8.8-27.3l-9.9 22.7c-.8 1.7-2.5 2.9-4.4 2.9H4c-1.2 0-2.2-1-2.2-2.2S2.8 40 4 40h3.9c.1 0 .2-.1.3-.2l9.9-22.6c.6-1.7 2.4-2.8 4.3-2.7c1.9 0 3.6 1.2 4.2 3l8.8 27.3c0 .1.1.2.3.2s.3-.1.3-.2l3.6-9.8c.7-1.5 2.1-2.6 3.8-2.8h.2c1.6-.1 3.2.7 4.2 2.2l.1.2l4.1 7.8c0 .1.2.2.3.2h8c1.2 0 2.2 1 2.2 2.2S61.2 47 60 47h-8c-1.8 0-3.4-1-4.3-2.6l-4-7.7s-.1 0-.1.1l-3.5 9.6c-.7 1.9-2.4 3.1-4.5 3.1M22.2 18.9q0 .15 0 0"></svg:path>`,
})
export class LineiconsPulseIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPyramidsIcon],svg[lineicons-pyramids-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.8 52.7H7.2c-1.9 0-3.6-1-4.6-2.6c-.9-1.7-.9-3.6 0-5.3L16 22.1c.7-1.1 1.8-1.8 3.2-1.8c1.3 0 2.5.7 3.2 1.8l4.2 7l9.4-16c.7-1.1 1.8-1.8 3.2-1.8c1.3 0 2.5.7 3.2 1.8l19 31.7c1 1.6 1 3.6.1 5.3c-1.1 1.6-2.8 2.6-4.7 2.6M19.2 25.6L6.5 47.1c-.2.3-.1.6 0 .8c.1.1.3.4.7.4h49.6c.4 0 .6-.2.7-.4c.1-.1.2-.4 0-.8L39.1 16.6l-9.4 16c-.7 1.1-1.8 1.8-3.2 1.8c-1.3 0-2.5-.7-3.1-1.8z"></svg:path>`,
})
export class LineiconsPyramidsIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsPythonIcon],svg[lineicons-python-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.57 9.429c-.354-1.355-1-2.42-2.355-2.42H17.41v2.13c0 1.645-1.42 3.032-2.936 3.032H9.665c-1.322 0-2.355 1.13-2.355 2.452v4.55c0 1.257 1.13 2.032 2.355 2.451c1.485.452 2.936.549 4.775 0c1.194-.355 2.356-1.032 2.356-2.452v-1.807h-4.743v-.58h7.162c1.355 0 1.904-.968 2.355-2.42c.484-1.581.484-3.033 0-4.936m-6.84 9.033c.485 0 .904.42.904.904s-.42.903-.903.903c-.484.032-.904-.42-.904-.903c-.032-.484.387-.904.904-.904m-5.29-6.904h4.775c1.322 0 2.355-1.097 2.355-2.452V4.621c0-1.258-1.097-2.226-2.356-2.452c-1.58-.225-3.323-.225-4.774 0c-2.033.355-2.356 1.097-2.356 2.452v1.807h4.775v.58H5.342c-1.355 0-2.581.872-2.936 2.42c-.452 1.807-.452 2.936 0 4.808c.355 1.42 1.13 2.42 2.549 2.42h1.549v-2.162c-.033-1.581 1.355-2.936 2.936-2.936m-.29-6.356a.923.923 0 0 1-.904-.903c0-.484.42-.904.903-.904s.904.42.904.904s-.42.903-.904.903"></svg:path>`,
})
export class LineiconsPythonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsQuestionCircleIcon],svg[lineicons-question-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.3 32 62.3S62.3 48.7 62.3 32S48.7 1.8 32 1.8m0 56C17.8 57.8 6.3 46.2 6.3 32S17.8 6.3 32 6.3s25.8 11.6 25.8 25.8c0 14.1-11.6 25.7-25.8 25.7"></svg:path><svg:path fill="currentColor" d="M33.8 12.1c-2.9-.5-5.9.3-8.1 2.2s-3.5 4.6-3.5 7.6q0 1.65.6 3.3c.4 1.2 1.7 1.8 2.9 1.4s1.8-1.7 1.4-2.9q-.3-.9-.3-1.8c0-1.6.7-3.1 1.9-4.1s2.8-1.5 4.5-1.2c2.1.4 3.9 2.2 4.3 4.3c.4 2.5-.9 5-3.2 6c-2.6 1.1-4.3 3.7-4.3 6.7v6.2c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3v-6.2c0-1.1.6-2.1 1.5-2.5c4.3-1.8 6.8-6.3 6-10.9c-1.1-4.1-4.3-7.4-8.3-8.1m-1.7 33.7h-.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.3c1.2 0 2.2-1 2.2-2.3s-.9-2.3-2.2-2.3"></svg:path>`,
})
export class LineiconsQuestionCircleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsQuestionMarkIcon],svg[lineicons-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.16 8.84a2.84 2.84 0 1 1 4.66 2.177c-.522.437-1.154.97-1.65 1.588c-.501.62-.92 1.396-.92 2.323v.822a.75.75 0 0 0 1.5 0v-.822c0-.453.201-.903.588-1.383c.39-.484.909-.929 1.445-1.378A4.34 4.34 0 1 0 7.66 8.84a.75.75 0 1 0 1.5 0m2.838 9.011a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8"></svg:path>`,
})
export class LineiconsQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsQuestionMarkCircleIcon],svg[lineicons-question-mark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.92 10.438a1.08 1.08 0 1 1 1.698.886c-.27.19-.598.442-.86.76c-.267.322-.508.759-.508 1.3a.75.75 0 0 0 1.5 0c0-.075.03-.184.162-.343a3 3 0 0 1 .566-.489a2.58 2.58 0 1 0-4.058-2.114a.75.75 0 0 0 1.5 0M12 14.642a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsQuestionMarkCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsQuoraIcon],svg[lineicons-quora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.314 22c-1.322 0-2.38-.463-3.207-1.388a10 10 0 0 1-3.14.529c-5.256 0-9.554-4.298-9.554-9.587C2.446 6.264 6.711 2 12 2c5.29 0 9.587 4.298 9.587 9.554c0 2.843-.86 4.992-2.711 6.644c.33.199.76.43 1.124.562c.264.1.463.397.463.694v1.686c0 .397-.298.728-.695.728c-.198.033-1.157.132-1.454.132m-2.975-3.041c.231 0 .463.099.595.297c.43.595 1.058 1.223 2.38 1.223c.1 0 .33 0 .628-.033v-.529c-.595-.264-1.422-.76-1.785-1.322c-.066-.1-.1-.198-.132-.297c-.066-.43.231-.695.628-1.058c1.653-1.422 2.413-3.174 2.413-5.72c0-4.462-3.636-8.065-8.1-8.065a8.1 8.1 0 0 0-8.032 8.099c0 4.463 3.603 8.099 8.066 8.099q1.636 0 3.074-.595c.1-.066.199-.1.265-.1"></svg:path><svg:path fill="currentColor" d="M12.099 18.628a4.5 4.5 0 0 1-4.496-4.496v-5.19a4.5 4.5 0 0 1 4.496-4.496a4.53 4.53 0 0 1 3.173 1.323c.827.826 1.29 1.95 1.29 3.173c-.033 5.918-.1 6.182-.133 6.281c-.066.265-.23.463-.462.53c-.232.098-.496.032-.728-.1c-.297-.231-1.355-.529-2.413-.76v.529c.562.297 1.52.826 1.984 1.223c.165.165.264.363.231.595c0 .231-.132.43-.298.562a4.7 4.7 0 0 1-2.644.826m0-12.694A3.02 3.02 0 0 0 9.09 8.942v5.19a3.02 3.02 0 0 0 3.008 3.009c.264 0 .496-.033.727-.1c-.364-.198-.76-.43-1.058-.562a.76.76 0 0 1-.43-.66v-1.852c0-.231.1-.43.265-.562a.8.8 0 0 1 .595-.165c.496.099 1.752.33 2.777.66c.033-1.288.033-3.47.066-4.99c0-.794-.298-1.555-.893-2.117c-.495-.562-1.256-.859-2.05-.859"></svg:path>`,
})
export class LineiconsQuoraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsQuotationIcon],svg[lineicons-quotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.2 49.5c-1.2 0-2.3-.7-2.7-1.8l-3.3-8c-3.7-.6-7-2.5-9.1-5.4c-2.2-2.9-2.9-6.5-2-10c1.4-5.7 7.3-10 13.8-9.9c4.6.1 8.4 2 10.9 5.4c2.4 3.4 3 8 1.6 12.2c-1.3 3.8-3 7.6-4.6 11.3c-.6 1.5-1.3 3-1.9 4.4c-.4 1.1-1.5 1.8-2.7 1.8m-3.5-30.6c-4.4 0-8.4 2.8-9.3 6.5c-.5 2.2-.1 4.4 1.3 6.2c1.6 2.2 4.3 3.6 7.2 3.8l1.4.1l2.9 7c.1-.3.3-.7.4-1c1.6-3.6 3.2-7.3 4.4-11c1-2.8.6-5.9-1-8.1s-4.1-3.4-7.2-3.5zm36.6 30.7c-1.2 0-2.3-.7-2.7-1.8l-3.3-8c-3.7-.6-7-2.5-9.1-5.4c-2.2-2.9-2.9-6.5-2-10c1.4-5.7 7.3-10 13.8-9.9c4.6.1 8.4 2 10.8 5.4s3 8 1.6 12.2c-1.3 3.8-3 7.6-4.6 11.3c-.6 1.5-1.3 3-1.9 4.4c-.3 1.1-1.4 1.8-2.6 1.8m-3.5-30.7c-4.4 0-8.4 2.8-9.3 6.5c-.5 2.2-.1 4.4 1.3 6.3c1.6 2.2 4.3 3.6 7.2 3.8l1.4.1l2.9 7c.1-.3.3-.7.4-1c1.6-3.6 3.2-7.3 4.4-11c1-2.8.6-5.9-1-8.2c-1.6-2.2-4.1-3.4-7.2-3.5z"></svg:path>`,
})
export class LineiconsQuotationIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRadioButtonIcon],svg[lineicons-radio-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.1 4.3c-4 0-7.3 3.3-7.3 7.3S5 19 9.1 19s7.3-3.3 7.3-7.3s-3.3-7.4-7.3-7.4m0 10.2c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8m0 10.2c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3s7.3-3.3 7.3-7.3s-3.3-7.3-7.3-7.3m0 10.1c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8m0 10.2c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3s7.3-3.3 7.3-7.3S13.1 45 9.1 45m0 10.2c-1.6 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8s-1.2 2.8-2.8 2.8m15.3-41.3H60c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H24.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3M60 29.8H24.4c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3m0 20.3H24.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsRadioButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRadisIcon],svg[lineicons-radis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.716 12.121c0-.698.517-1.103 1.163-1.103c.483 0 .914.232 1.121.81c-.06.293-.422.62-.578.672c-.129-.275-.276-.44-.413-.44c-.173 0-.181.121-.181.277c0 .11.031.271.069.466c.057.294.129.664.129 1.042c0 .69-.483 1.198-1.224 1.198c-.68 0-1.054-.444-1.222-1.155c-.443.794-1.092 1.156-1.589 1.156c-.777 0-.96-.575-.941-1.157c-.312.551-.913 1.156-1.49 1.156c-.588 0-.796-.512-.748-1.108c-.353.657-.99 1.108-1.605 1.108c-.667 0-.997-.53-.89-1.186c-.45.551-1.285 1.187-2.153 1.187c-.99 0-1.422-.535-1.473-1.204c-.478.766-1.122 1.23-1.89 1.23c-1.107 0-1.503-.986-1.56-1.792c-.411.55-.873 1.12-1.44 1.757c-.06.06-.111.095-.172.095c-.198 0-.603-.88-.629-1.207c.17-.264 1.243-1.443 2.106-2.391c.304-.334.581-.639.785-.866c-.529.16-1.074.478-1.762.972c-.12.087-.457-.698-.448-1.301c.793-.587 2-.957 2.974-.957c1.362 0 2.147.758 2.147 1.81c0 .88-.733 1.845-1.802 1.88c-.556.014-.912-.298-1.094-.684c.022.596.331 1.33 1.163 1.33c.907 0 1.342-.547 1.991-1.364l.13-.162c.551-.681 1.19-1.284 2.12-1.284c.57 0 .957.353.957.887c0 .647-.758 1.544-1.819 1.544a1.5 1.5 0 0 1-.485-.071l-.006.08c0 .301.112.482.603.482c.724 0 1.406-.431 2.233-1.44c.81-.991 1.423-1.422 2.07-1.422a.93.93 0 0 1 .913.635c.866-1.252 1.601-2.138 2.224-2.73c.612.259 1.052.767.931.87c-.457.415-1.983 2.078-2.586 3.07c-.155.258-.302.543-.302.68c0 .13.078.173.164.173c.414 0 1.244-.978 1.961-1.822c.268-.316.52-.613.729-.833c.482.198.974.62.853.767c-.638.759-1.12 1.38-1.12 1.733c0 .095.034.155.163.155c.242 0 .466-.215.836-.672c.078-.095.173-.095.233.051c.164.397.405.613.595.613c.224 0 .336-.199.336-.5c0-.207-.025-.446-.047-.653a4 4 0 0 1-.03-.382M5.81 12.01c.457 0 .957-.25.957-.759c0-.308-.191-.593-.703-.68l-.08.126c-.26.407-.506.79-.754 1.166c.148.083.336.147.58.147m4.621.155c0-.138-.086-.233-.224-.233c-.346 0-.868.486-1.113.955a.9.9 0 0 0 .311.054c.612 0 1.026-.465 1.026-.776m2.267 1.25c0 .155.086.259.268.259c.56 0 1.258-1.017 1.258-1.431c0-.173-.095-.276-.25-.276c-.508 0-1.276.965-1.276 1.448m7.198-3.112c-.198.328-.5.698-.612.81c-.517-.215-1-.646-.93-.767c.189-.336.5-.698.611-.81c.518.215 1 .655.931.767" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsRadisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRainIcon],svg[lineicons-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M57.3 18.6c-2.7-2.9-6.4-4.9-10.3-5.6c-2.2-3.5-5.4-6.1-9.1-7.4c-1.7-.7-3.7-1-5.8-1c-9.5 0-17.2 7.4-17.8 16.7c-7 .9-12.5 6.8-12.5 14.1c0 5.1 2.6 9.7 7 12.3c.3.2.7.3 1.1.3c.8 0 1.5-.4 1.9-1.1c.6-1.1.3-2.5-.8-3.1c-3-1.7-4.8-4.9-4.8-8.4c0-5.4 4.3-9.7 9.7-9.7h.5c1.2 0 2.3-1 2.3-2.3v-1c0-7.3 6-13.3 13.3-13.3c1.6 0 3 .2 4.3.7c3.1 1.1 5.7 3.3 7.3 6.3c.4.7 1 1.1 1.7 1.2c3.3.3 6.4 1.9 8.7 4.3c2.4 2.6 3.8 6 3.8 9.5c0 4.9-2.5 9.3-6.6 11.9c-1.1.7-1.4 2-.7 3.1s2 1.4 3.1.7c5.5-3.4 8.7-9.3 8.7-15.7c0-4.6-1.8-9.1-5-12.5"></svg:path><svg:path fill="currentColor" d="M22 40.2c-1.2 0-2.3 1-2.3 2.3v14.7c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V42.5c-.1-1.3-1.1-2.3-2.3-2.3m10-4.9c-1.2 0-2.3 1-2.3 2.3v14.7c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3V37.6c0-1.3-1.1-2.3-2.3-2.3m10 4.9c-1.2 0-2.3 1-2.3 2.3v14.7c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V42.5c0-1.3-1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsRainIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsReactIcon],svg[lineicons-react-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.323 9.007c-.226-.033-.42-.13-.646-.194c.033-.129.033-.258.097-.452c.452-2.322.13-4.16-.903-4.806c-1.032-.58-2.71.032-4.387 1.484c-.13.129-.355.258-.484.451c-.097-.096-.226-.193-.323-.322c-1.774-1.58-3.516-2.226-4.612-1.613c-1.033.58-1.355 2.355-.904 4.516c.033.226.097.452.13.645c-.226.033-.485.13-.71.226C3.484 9.684 2 10.878 2 12.007c0 1.225 1.58 2.451 3.742 3.16c.193.033.355.13.548.13c-.032.226-.129.451-.129.71c-.42 2.129-.096 3.838.936 4.419c1.032.645 2.838 0 4.516-1.548c.129-.13.258-.226.42-.355a4 4 0 0 0 .548.451c1.613 1.452 3.29 2.033 4.355 1.452c1.032-.645 1.387-2.452.935-4.71c-.032-.129-.032-.354-.13-.548c.13-.032.227-.032.356-.13C20.355 14.362 22 13.137 22 11.91c-.032-1-1.58-2.161-3.677-2.903m-5.29-3.29c1.45-1.259 2.806-1.71 3.45-1.388c.646.355.904 1.903.485 3.936c-.032.129-.032.225-.097.419c-.871-.194-1.71-.355-2.613-.42c-.484-.709-1.032-1.45-1.613-2.032a1.8 1.8 0 0 1 .387-.516M8.547 14.07c.194.355.42.678.646 1a10.6 10.6 0 0 1-1.807-.258a8 8 0 0 1 .645-1.71c.13.29.355.678.516.968m-1.16-4.645a22 22 0 0 1 1.773-.323c-.226.323-.42.646-.58 1c-.162.355-.355.646-.549 1.033c-.29-.613-.451-1.162-.645-1.71m1.031 2.677c.226-.548.549-1.032.871-1.58c.323-.549.645-1.033.936-1.549c.58-.032 1.161-.032 1.774-.032c.58 0 1.226.032 1.774.032c.355.484.645 1 .936 1.484c.322.484.58 1.033.87 1.58c-.225.55-.548 1.033-.87 1.582c-.323.548-.646 1.032-.936 1.548c-.58.032-1.161.032-1.806.032s-1.226-.032-1.774-.032c-.355-.484-.646-1-.936-1.548c-.29-.549-.548-.968-.839-1.517m7.033 1.968c.193-.355.354-.677.548-1.032c.226.548.452 1.129.645 1.71c-.58.129-1.226.225-1.87.322c.257-.322.483-.677.677-1m.58-2.968c-.193-.354-.355-.677-.548-1.032s-.42-.645-.58-.935a22 22 0 0 1 1.773.322c-.193.549-.419 1.097-.645 1.645M12 6.75c.42.451.774.903 1.129 1.387a28 28 0 0 0-2.322 0c.419-.516.838-.968 1.193-1.387M7.484 4.36c.645-.354 2.129.13 3.613 1.549c.097.097.193.193.322.258c-.58.645-1.129 1.355-1.677 2.032a23 23 0 0 0-2.613.42c-.032-.194-.097-.42-.129-.581c-.355-1.903-.129-3.323.484-3.678M6.58 14.62c-.13-.033-.323-.097-.484-.13a7.2 7.2 0 0 1-2.484-1.225c-.452-.323-.678-.71-.774-1.162c0-.71 1.258-1.612 3.032-2.258c.226-.096.452-.129.677-.225c.258.87.581 1.677.936 2.483c-.323.807-.678 1.613-.903 2.517m4.484 3.774a7.1 7.1 0 0 1-2.226 1.355a1.54 1.54 0 0 1-1.355.032c-.645-.355-.871-1.71-.549-3.58c.033-.227.097-.452.13-.646c.87.194 1.774.323 2.612.355c.484.71 1.097 1.451 1.678 2.097c-.032.193-.162.29-.29.387m.967-.903c-.42-.452-.774-.904-1.161-1.388c.355 0 .71.033 1.129.033s.806 0 1.161-.033c-.354.42-.71.871-1.129 1.387m5.097 1.128c-.032.452-.258.936-.645 1.226c-.645.355-1.936-.096-3.355-1.354c-.129-.13-.322-.259-.484-.452a17 17 0 0 0 1.613-2.097c.903-.032 1.774-.226 2.613-.42c.032.13.032.323.097.452c.226.904.226 1.807.161 2.645m.71-4.16c-.097.032-.226.032-.355.096c-.258-.871-.645-1.677-1-2.484c.355-.774.677-1.613.935-2.451c.226.032.42.129.581.193c1.806.645 3.064 1.548 3.064 2.258c.033.742-1.29 1.742-3.225 2.387M12 13.844c1 0 1.774-.806 1.774-1.774A1.79 1.79 0 0 0 12 10.297c-.935 0-1.774.806-1.774 1.774S11 13.845 12 13.845"></svg:path>`,
})
export class LineiconsReactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRedditIcon],svg[lineicons-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.963 13.707a1 1 0 0 1 .324-1.631a1 1 0 1 1-.324 1.631m5.592 1.887a.27.27 0 0 1-.082.19l.007-.034a3.84 3.84 0 0 1-2.47.77a3.86 3.86 0 0 1-1.912-.42a4 4 0 0 1-.558-.35a.27.27 0 0 1 .38-.38A3.27 3.27 0 0 0 12 16a3.28 3.28 0 0 0 2.09-.61a.33.33 0 0 1 .199-.07a.27.27 0 0 1 .266.274m.13-1.591a1 1 0 0 1-.395.077l.01-.04a1 1 0 1 1 1-1a1 1 0 0 1-.615.963"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-3.381.406q.054-.2.051-.406a1.46 1.46 0 0 0-2.47-1a7.1 7.1 0 0 0-3.85-1.23L13 6.65l2.14.45a1 1 0 1 0 .13-.61L12.82 6a.31.31 0 0 0-.37.24l-.74 3.47a7.14 7.14 0 0 0-3.9 1.23a1.46 1.46 0 1 0-1.61 2.39a3 3 0 0 0 0 .44c0 2.24 2.61 4.06 5.83 4.06s5.83-1.82 5.83-4.06a3 3 0 0 0 0-.44a1.46 1.46 0 0 0 .759-.924" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsRedditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRefreshCircle1ClockwiseIcon],svg[lineicons-refresh-circle-1-clockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.136 9.542a.75.75 0 1 0 1.45.388a8 8 0 0 1 15.251-.644l-1.675-.943a.75.75 0 1 0-.736 1.307l3.08 1.735a.75.75 0 0 0 1.022-.286l1.735-3.08a.75.75 0 0 0-1.307-.737l-.761 1.352a9.5 9.5 0 0 0-18.059.908m18.354 4.916a.75.75 0 1 0-1.448-.388a8 8 0 0 1-15.25.651l1.663.936a.75.75 0 0 0 .736-1.307l-3.08-1.734a.75.75 0 0 0-1.022.285l-1.735 3.081a.75.75 0 1 0 1.307.736l.767-1.362a9.5 9.5 0 0 0 18.063-.898"></svg:path>`,
})
export class LineiconsRefreshCircle1ClockwiseIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRefreshDollar1Icon],svg[lineicons-refresh-dollar-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.378 10.46a.75.75 0 0 1-.53-.918a9.5 9.5 0 0 1 18.058-.908l.76-1.351a.75.75 0 0 1 1.308.735L21.239 11.1a.75.75 0 0 1-1.021.285L17.137 9.65a.75.75 0 0 1 .736-1.307l1.675.944a7.999 7.999 0 0 0-15.252.643a.75.75 0 0 1-.918.53m17.293 3.08a.75.75 0 0 1 .53.918a9.5 9.5 0 0 1-18.062.898l-.767 1.362a.75.75 0 0 1-1.307-.736L2.8 12.901a.75.75 0 0 1 1.022-.285l3.08 1.734a.75.75 0 1 1-.736 1.307l-1.662-.936a8 8 0 0 0 15.249-.651a.75.75 0 0 1 .918-.53"></svg:path><svg:path fill="currentColor" d="M12.024 7.808a.75.75 0 0 1 .75.75v.17a1.725 1.725 0 0 1 1.303 1.673a.75.75 0 1 1-1.5 0a.227.227 0 0 0-.227-.226h-.395a.483.483 0 0 0-.17.934l1.005.377a1.983 1.983 0 0 1-.016 3.72v.236a.75.75 0 0 1-1.5 0v-.169a1.73 1.73 0 0 1-1.302-1.674a.75.75 0 0 1 1.5 0c0 .125.102.227.227.227h.395a.483.483 0 0 0 .17-.935l-1.005-.377a1.983 1.983 0 0 1 .015-3.72v-.236a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class LineiconsRefreshDollar1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRefreshUser1Icon],svg[lineicons-refresh-user-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.378 10.46a.75.75 0 0 1-.53-.918a9.5 9.5 0 0 1 18.058-.908l.76-1.352a.75.75 0 0 1 1.308.736L21.239 11.1a.75.75 0 0 1-1.021.286L17.137 9.65a.75.75 0 0 1 .736-1.307l1.675.943a7.999 7.999 0 0 0-15.252.644a.75.75 0 0 1-.918.53m17.293 3.08a.75.75 0 0 1 .53.918a9.5 9.5 0 0 1-18.062.898l-.767 1.362a.75.75 0 1 1-1.307-.736l1.735-3.08a.75.75 0 0 1 1.022-.286l3.08 1.734a.75.75 0 0 1-.736 1.307l-1.662-.936a8 8 0 0 0 15.249-.651a.75.75 0 0 1 .918-.53"></svg:path><svg:path fill="currentColor" d="M10.408 9.86a1.616 1.616 0 1 1 3.233 0a1.616 1.616 0 0 1-3.233 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.81 12.087a2.24 2.24 0 0 0-2.238 2.238v.93c0 .415.336.75.75.75h5.405a.75.75 0 0 0 .75-.75v-.93a2.24 2.24 0 0 0-2.238-2.238zm-.738 2.238c0-.407.33-.738.739-.738h2.428c.408 0 .738.33.738.738v.18h-3.905z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsRefreshUser1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsReloadIcon],svg[lineicons-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.4 29c.3 0 .7-.1 1-.2l11.1-3.9c1.2-.4 1.8-1.7 1.4-2.9s-1.7-1.8-2.9-1.4L12.1 23c3.3-8.6 11.7-14.4 21.3-14.4c10.5 0 19.6 7 22.2 17c.3 1.2 1.5 1.9 2.7 1.6s1.9-1.5 1.6-2.7c-3.1-12-14-20.4-26.6-20.4c-11.2 0-21.1 6.6-25.2 16.5l-2.1-6c-.4-1.2-1.7-1.8-2.9-1.4s-1.8 1.7-1.4 2.9L5.5 27c.6 1.3 1.7 2 2.9 2m53.7 20.7L58 39c-.3-.7-.8-1.3-1.5-1.6s-1.5-.3-2.2 0l-11 4.2c-1.2.4-1.7 1.7-1.3 2.9s1.7 1.7 2.9 1.3l6.9-2.6c-4 7.3-11.8 12.1-20.5 12.1c-9.9 0-18.6-6.2-21.7-15.4c-.4-1.2-1.7-1.8-2.8-1.4c-1.2.4-1.8 1.7-1.4 2.8c3.7 11 14.1 18.4 25.9 18.4c10.3 0 19.6-5.7 24.3-14.5l2.3 6.1c.3.9 1.2 1.4 2.1 1.4c.3 0 .5 0 .8-.2c1.2-.3 1.7-1.6 1.3-2.8"></svg:path>`,
})
export class LineiconsReloadIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRemixJsIcon],svg[lineicons-remix-js-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.932 17.424c.18 2.31.18 3.394.18 4.576h-5.35c0-.258.004-.493.009-.732c.014-.743.03-1.517-.09-3.081c-.16-2.29-1.147-2.799-2.961-2.799H3.305v-4.166h8.67c2.291 0 3.437-.696 3.437-2.54c0-1.623-1.146-2.605-3.437-2.605h-8.67V2h9.624c5.189 0 7.767 2.449 7.767 6.36c0 2.926-1.814 4.834-4.265 5.152c2.069.413 3.278 1.59 3.501 3.912" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.305 22v-3.106h5.657c.945 0 1.15.7 1.15 1.118V22z"></svg:path>`,
})
export class LineiconsRemixJsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRemoveFileIcon],svg[lineicons-remove-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38.6 22.1H25.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h13.2c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path><svg:path fill="currentColor" d="M49.5 1.8h-35c-3.4 0-6.1 2.7-6.1 6.1V40c0 1.5.6 2.9 1.7 3.9l18 17c1 1 2.3 1.5 3.7 1.5h17.6c3.4 0 6.1-2.7 6.1-6.1V7.9c.1-3.4-2.7-6.1-6-6.1M16.2 43.4h11.7c.5 0 .9.4.9.8v11zm34.9 12.7c0 .9-.7 1.6-1.6 1.6H33.3V44.2c0-2.9-2.4-5.3-5.4-5.3h-15v-31c0-.9.7-1.6 1.6-1.6h34.9c.9 0 1.6.7 1.6 1.6v48.2z"></svg:path>`,
})
export class LineiconsRemoveFileIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsReplyIcon],svg[lineicons-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.3 56.9c-.8 0-1.6-.3-2.3-.8L4.1 36.9c-1.5-1.2-2.4-3-2.4-4.9s.9-3.7 2.4-4.9L28 7.9c1.1-.9 2.6-1 3.8-.4c1.3.6 2 1.9 2 3.3V21c8.1 1.3 15.5 4.9 21.1 10.4c3.9 4 5.8 7.7 6.9 13.3c.2 1.2.4 3.4.4 6.3c0 1.3-.7 2.6-1.9 3.2s-2.6.6-3.7-.1c-8.4-5.4-16.2-8.7-22.8-9.7v9c0 1.4-.8 2.6-2 3.3c-.5.1-1 .2-1.5.2m-.9-44.3L7 30.6c-.7.4-.8 1.1-.8 1.4s.1.9.7 1.4l22.4 18v-9.6c0-.6.3-1.2.7-1.6c.5-.4 1.1-.7 1.7-.6c9.3.6 19 5.4 26 9.8c-.1-2.3-.2-3.4-.3-3.8c-.9-4.7-2.4-7.6-5.7-11c-5.3-5.2-12.5-8.6-20.4-9.4c-1.1-.1-2-1.1-2-2.2V12.6z"></svg:path>`,
})
export class LineiconsReplyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRestaurantIcon],svg[lineicons-restaurant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M45.9 37.4h-5c-2 0-3.6 1.6-3.6 3.6v5c0 2 1.6 3.6 3.6 3.6h5c2 0 3.6-1.6 3.6-3.6v-5c0-2-1.6-3.6-3.6-3.6M45 45h-3.1v-3.1H45z"></svg:path><svg:path fill="currentColor" d="M59.7 20.6v-1.2c0-.4-.1-.8-.3-1.1L51.8 4.9c-1.1-1.9-3.1-3.1-5.3-3.1h-29c-2.2 0-4.2 1.2-5.3 3.1L4.6 18.3v.1c0 .1-.1.2-.1.3c-.1.2-.2.5-.2.8v36.8c0 3.4 2.7 6.1 6.1 6.1h43.1c3.4 0 6.1-2.7 6.1-6.1zm-30.1 1c-.4 1.8-2.1 3.1-4 3.1s-3.5-1.3-4-3.1zM16.1 7.1c.3-.5.8-.8 1.4-.8h29c.6 0 1.1.3 1.4.8l5.6 10h-43zM55 21.6c-.4 1.8-2 3.1-4 3.1c-1.9 0-3.5-1.3-4-3.1zm-12.7 0c-.4 1.8-2 3.1-4 3.1s-3.5-1.3-4-3.1zm-25.4 0c-.4 1.8-2 3.1-4 3.1c-1.9 0-3.5-1.3-4-3.1zM19 57.8V42.3c0-.2.2-.4.4-.4h4.8c.2 0 .4.2.4.4v15.4H19zm34.6 0H29.2V42.3c0-2.7-2.2-4.9-4.9-4.9h-4.8c-2.7 0-4.9 2.2-4.9 4.9v15.4h-4.1c-.9 0-1.6-.7-1.6-1.6v-28c1.2.7 2.6 1 4.1 1c2.5 0 4.8-1.1 6.4-2.8c1.6 1.7 3.8 2.8 6.4 2.8c2.5 0 4.8-1.1 6.4-2.8c1.6 1.7 3.8 2.8 6.4 2.8c2.5 0 4.8-1.1 6.4-2.8c1.6 1.7 3.8 2.8 6.4 2.8c1.5 0 2.9-.4 4.1-1v28c-.3.9-1.1 1.7-1.9 1.7"></svg:path>`,
})
export class LineiconsRestaurantIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRevenueIcon],svg[lineicons-revenue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61.9 44.8c-1.1-3.4-4.7-5.3-8.1-4.4l-12.1 2.9c-.3-2.9-2.6-5.3-5.8-5.8H23.1c-1-1.5-2.6-2.5-4.6-2.5H8c-3.4 0-6.3 2.8-6.3 6.3v12.4C1.7 57.1 4.5 60 8 60h10.5c1.5 0 3-.6 4-1.7c.2-.2.3-.4.5-.6c2.9 1.4 6 2.2 9.1 2.2c1.9 0 3.8-.3 5.6-.8L53 54.5l4.3-1.3c1.7-.5 3.2-1.6 4.1-3.2c.9-1.5 1.1-3.4.5-5.2M19.3 54.9c-.2.2-.5.3-.8.3H8c-1 0-1.8-.8-1.8-1.8V41.1c0-1 .8-1.8 1.8-1.8h10.7c.5 0 .9.4.9.9v14c0 .4-.2.6-.3.7m38.2-7c-.3.5-.7.9-1.3 1l-4.4 1.3l-15.2 4.3c-3.9 1.1-8 .7-11.6-1.1l-.9-.5v-11h11.5c1.1.2 1.8 1 1.8 1.9v.5l-3.4.8c-1.2.3-2 1.5-1.7 2.7s1.5 2 2.7 1.7l20-4.8c1.1-.3 2.3.3 2.7 1.4c.1.6.1 1.3-.2 1.8M47.3 21.5h5.1c1.5 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8h-7.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.8v.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.3h.3c4 0 7.3-3.3 7.3-7.3s-3.3-7.3-7.3-7.3h-5.1c-1.5 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8h7.6c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-2.8v-.4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v.3h-.3c-4 0-7.3 3.3-7.3 7.3c.1 4.1 3.4 7.4 7.4 7.4"></svg:path>`,
})
export class LineiconsRevenueIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRoadIcon],svg[lineicons-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m63.1 53.6l-11-44.9C51.7 7.2 50.2 6 48.6 6H15.4c-1.6 0-3.1 1.1-3.5 2.7L.9 53.6c-.3 1.1 0 2.2.6 3c.7.9 1.7 1.4 2.8 1.4h55.4c1.1 0 2.1-.5 2.8-1.4s.9-2 .6-3M32 46.8c-1.2 0-2.2 1-2.2 2.2v4.4H13.7l10.1-42.9h6v5c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-5h6l10.1 42.9H34.2V49c0-1.2-1-2.2-2.2-2.2M16.1 10.5h3L9 53.5H5.5zm38.9 43l-10.1-43h3l10.6 42.9H55z"></svg:path><svg:path fill="currentColor" d="M32 30.6c1.2 0 2.2-1 2.2-2.2v-4.9c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v4.9c0 1.2 1 2.2 2.2 2.2m2.2 5.7c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v4.9c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2z"></svg:path>`,
})
export class LineiconsRoadIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRoad1Icon],svg[lineicons-road-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.749 5.75a.75.75 0 0 0-1.5 0v1.563a.75.75 0 0 0 1.5 0zm0 4.688a.75.75 0 0 0-1.5 0v3.124a.75.75 0 0 0 1.5 0zm0 6.25a.75.75 0 0 0-1.5 0v1.562a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.382 2a2.25 2.25 0 0 0-2.243 2.068l-1.256 15.5A2.25 2.25 0 0 0 6.125 22h11.747a2.25 2.25 0 0 0 2.243-2.432l-1.257-15.5A2.25 2.25 0 0 0 16.615 2zm-.748 2.19a.75.75 0 0 1 .748-.69h9.233c.391 0 .716.3.748.69l1.257 15.5a.75.75 0 0 1-.748.81H6.125a.75.75 0 0 1-.747-.81z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsRoad1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRocketIcon],svg[lineicons-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m61.4 19.5l-8.2-8.2l-.3-.3q-.9-.6-1.8-.6l-12.9 1.1C28.5 3.4 16.3-.1 6 2.7C4.4 3.1 3.1 4.4 2.7 6c-2.8 10.2.7 22.5 8.9 32.1l-1.1 12.7v.2c0 .6.2 1.3.6 1.8l8.5 8.6q.9.9 2.1.9c.3 0 .6 0 .8-.1c1-.3 1.8-1.2 2.1-2.2l1.2-10.7q2.1 1.05 4.2 1.8q.75.3 1.5.3c1.3 0 2.5-.5 3.4-1.4l14.9-14.9c1.3-1.3 1.8-3.3 1.2-5q-.75-2.1-1.8-4.2l10.5-1.2h.2c1.1-.2 1.9-1 2.2-2.1c.3-1.2.1-2.3-.7-3.1M20.4 56L15 50.5l.7-8.1c1.8 1.6 3.7 3.1 5.7 4.4zm26.2-24.2L31.8 46.6c-.1.1-.2.1-.3.1c-5.2-1.8-10.2-5-14.3-9.1C8.4 28.7 4.4 16.8 7 7.2c.1-.1.1-.2.2-.2c2-.5 4-.8 6.1-.8c8.3 0 17.3 3.9 24.2 10.9c4.1 4.1 7.3 9.1 9.1 14.3c.1.2.1.3 0 .4m.2-10.3c-1.3-2-2.8-4-4.4-5.8l8.1-.7l5.4 5.4zm8.5 18.7c-.3-.2-1.4-.7-2.6.3c-1 .8-5.7 5.5-6.6 6.4c-6.4 6.4-6.4 6.4-6 7.8c.1.4.3.8.6 1c3.2 3.2 8.1 3.9 11.8 3.9c2.8 0 4.9-.4 5.1-.5c.9-.2 1.6-.9 1.8-1.8c.1-.5 2.2-11.2-3.5-16.9c-.3 0-.5-.1-.6-.2m-.2 14.9c-2.6.3-6.6.3-9.6-1.2c2.2-2.2 6.1-6.2 8.3-8.3c1.5 2.8 1.5 6.9 1.3 9.5"></svg:path><svg:path fill="currentColor" d="M26.1 17.8c-4.6 0-8.3 3.7-8.3 8.3s3.7 8.3 8.3 8.3s8.3-3.7 8.3-8.3s-3.7-8.3-8.3-8.3m0 12.2c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8S30 24 30 26.1S28.2 30 26.1 30"></svg:path>`,
})
export class LineiconsRocketIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRocket5Icon],svg[lineicons-rocket-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.766 7.979a2.305 2.305 0 1 1 3.26 3.26a2.305 2.305 0 0 1-3.26-3.26m2.199 1.06a.805.805 0 1 0-1.139 1.14a.805.805 0 0 0 1.139-1.14"></svg:path><svg:path fill="currentColor" d="M20.622 4.043a.75.75 0 0 0-.66-.66A12.66 12.66 0 0 0 9.55 7.015a12.7 12.7 0 0 0-1.735 2.159a6.73 6.73 0 0 0-4.505 1.972a6.8 6.8 0 0 0-1.226 1.676a.75.75 0 0 0 .812 1.08a6.14 6.14 0 0 1 3.552.35l3.302 3.3a6.14 6.14 0 0 1 .35 3.554a.75.75 0 0 0 1.079.813a6.8 6.8 0 0 0 1.677-1.227a6.73 6.73 0 0 0 1.972-4.503a12.7 12.7 0 0 0 2.161-1.737a12.66 12.66 0 0 0 3.633-10.409m-7.414 13.018a5.2 5.2 0 0 1-1.493 2.649a7.7 7.7 0 0 0-.318-1.999a12.6 12.6 0 0 0 1.81-.65m-6.916-4.456a7.7 7.7 0 0 0-2-.32l.079-.079a5.23 5.23 0 0 1 2.571-1.413q-.396.886-.65 1.812m4.319-4.53a11.15 11.15 0 0 1 8.573-3.254a11.15 11.15 0 0 1-3.255 8.57a11.13 11.13 0 0 1-5.26 2.96l-3.017-3.017a11.1 11.1 0 0 1 2.959-5.258"></svg:path><svg:path fill="currentColor" d="m3.03 20.25l.75-.027za.75.75 0 0 0 .722.723l.028-.75l-.028.75h.032a7 7 0 0 0 .345.003c.222-.003.528-.013.857-.044c.326-.03.696-.083 1.04-.177c.32-.088.721-.24 1.013-.532a2.305 2.305 0 1 0-3.26-3.26c-.292.292-.443.693-.531 1.014a6 6 0 0 0-.178 1.04a11 11 0 0 0-.04 1.202zm1.81-2.226a.805.805 0 0 1 1.139 1.138a.4.4 0 0 1-.087.052a1.6 1.6 0 0 1-.265.095a5 5 0 0 1-.78.13q-.158.015-.306.023q.008-.148.023-.306c.026-.28.068-.555.13-.78q.046-.169.094-.265a.4.4 0 0 1 .052-.087"></svg:path>`,
})
export class LineiconsRocket5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRoute1Icon],svg[lineicons-route-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.504 4.632a.9.9 0 1 0 0 1.8h.008a.9.9 0 0 0 0-1.8z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m5.16 10.408l.351-.436l-.471.584a.75.75 0 0 0 .943-.001l-.472-.583l.247.305l.365.45l-.296-.365l.156.193h.001l.001-.002l.003-.002l.008-.007l.026-.021l.09-.078A9.5 9.5 0 0 0 7.326 9.13c.65-.856 1.37-2.127 1.37-3.598a3.192 3.192 0 1 0-6.383 0c0 1.472.724 2.743 1.378 3.6a9.5 9.5 0 0 0 1.22 1.314l.09.078l.026.022l.008.006l.003.003h.001l.001.001l.08-.1l-.218.27zM3.812 5.532a1.692 1.692 0 1 1 3.385 0c0 .994-.498 1.943-1.066 2.691a8 8 0 0 1-.621.723a8 8 0 0 1-.627-.725c-.57-.747-1.07-1.697-1.07-2.69" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.12 16.25a.9.9 0 1 0 0 1.8h.008a.9.9 0 0 0 0-1.8z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m18.656 22.173l.471-.583za.75.75 0 0 0 .944-.001l-.473-.582l.473.582l.002-.002l.002-.002l.008-.006l.027-.022l.09-.078a9.5 9.5 0 0 0 1.214-1.315c.65-.856 1.37-2.127 1.37-3.598a3.192 3.192 0 1 0-6.384 0c0 1.473.724 2.743 1.378 3.6a9.5 9.5 0 0 0 1.22 1.314l.09.078l.026.022l.009.006l.002.003zm-1.227-5.024a1.692 1.692 0 0 1 3.384 0c0 .994-.498 1.944-1.065 2.691a8 8 0 0 1-.622.723a8 8 0 0 1-.627-.724c-.57-.748-1.07-1.697-1.07-2.69" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.95 10.727h2.76a2.153 2.153 0 1 1 0 4.306H5.97a3.653 3.653 0 0 0 0 7.307h10.652c-.18-.2-.372-.428-.566-.681a10 10 0 0 1-.563-.82H5.97a2.153 2.153 0 0 1 0-4.306h4.74a3.653 3.653 0 1 0 0-7.307H9.075a10 10 0 0 1-.555.81c-.195.258-.39.489-.57.69"></svg:path>`,
})
export class LineiconsRoute1Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRssFeedIcon],svg[lineicons-rss-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.9 1.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c28.6 0 51.8 23 51.8 51.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3C62.3 26.7 37 1.8 5.9 1.8"></svg:path><svg:path fill="currentColor" d="M5.9 15.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c21.4 0 38.7 17 38.7 37.8c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3c0-23.5-19.4-42.4-43.3-42.4"></svg:path><svg:path fill="currentColor" d="M5.9 27c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c14.6 0 26.5 11.7 26.5 26c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3C36.9 40.6 23 27 5.9 27"></svg:path><svg:path fill="currentColor" d="M5.9 39.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c7.7 0 13.9 6.2 13.9 13.8c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3c0-10.1-8.3-18.4-18.5-18.4"></svg:path><svg:path fill="currentColor" d="M8.3 49.1c-3.6 0-6.6 3-6.6 6.6s2.9 6.6 6.6 6.6s6.6-3 6.6-6.6s-3-6.6-6.6-6.6m0 8.7c-1.1 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1c0 1.1-.9 2.1-2.1 2.1"></svg:path>`,
})
export class LineiconsRssFeedIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRssRightIcon],svg[lineicons-rss-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.67 18.46c0-6.81-5.522-12.331-12.332-12.331a.75.75 0 0 1 0-1.5c7.639 0 13.831 6.193 13.831 13.831a.75.75 0 0 1-1.5 0"></svg:path><svg:path fill="currentColor" d="M6.174 10.065a8.56 8.56 0 0 1 8.558 8.558a.75.75 0 0 0 1.5 0c0-5.555-4.503-10.058-10.058-10.058a.75.75 0 1 0 0 1.5m.05 8.509a1 1 0 1 0 1.414-1.414a1 1 0 0 0-1.414 1.414"></svg:path><svg:path fill="currentColor" d="M6.276 14a4.785 4.785 0 0 1 4.52 4.52a.75.75 0 0 0 1.498-.08a6.285 6.285 0 0 0-5.938-5.937a.75.75 0 1 0-.08 1.498"></svg:path>`,
})
export class LineiconsRssRightIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRulerIcon],svg[lineicons-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M41.1 1.8H22.9c-3.4 0-6.2 2.8-6.2 6.2v48c0 3.4 2.8 6.2 6.2 6.2h18.2c3.4 0 6.2-2.8 6.2-6.2V8c.1-3.4-2.8-6.2-6.2-6.2M42.9 56c0 1-.8 1.8-1.8 1.8H22.9c-1 0-1.8-.8-1.8-1.8v-3.5h12.5c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H21.1V43h7.4c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7.4v-4.9h12.5c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H21.1v-4.9h7.4c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7.4v-4.9h12.5c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H21.1V8c0-1 .8-1.8 1.8-1.8h18.2c1 0 1.8.8 1.8 1.8z"></svg:path>`,
})
export class LineiconsRulerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRuler1Icon],svg[lineicons-ruler-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.15 2.656a2.25 2.25 0 0 0-3.182 0l-1.186 1.186l-.049.05l-2.048 2.047l-.048.049l-7.478 7.478a2.25 2.25 0 0 0 0 3.182l4.694 4.693a2.25 2.25 0 0 0 3.182 0l10.809-10.81a2.25 2.25 0 0 0 0-3.181zm-4.655 6.202a.75.75 0 1 0 1.061-1.06l-1.304-1.304l1.036-1.036l3.139 3.138a.75.75 0 0 0 1.06-1.06L14.35 4.397l.68-.68a.75.75 0 0 1 1.06 0l4.694 4.693a.75.75 0 0 1 0 1.06L9.973 20.28a.75.75 0 0 1-1.06 0L4.22 15.587a.75.75 0 0 1 0-1.06l.679-.68l3.14 3.14a.75.75 0 1 0 1.06-1.06l-3.14-3.14l1.037-1.037l1.306 1.306a.75.75 0 0 0 1.06-1.061l-1.305-1.306l1.036-1.036l3.14 3.14a.75.75 0 1 0 1.06-1.06l-3.14-3.14l1.038-1.039z"></svg:path>`,
})
export class LineiconsRuler1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRulerAltIcon],svg[lineicons-ruler-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.4 16.8L47.2 3.6c-1.2-1.2-2.7-1.8-4.4-1.8s-3.2.6-4.4 1.8L3.6 38.3c-1.2 1.2-1.8 2.7-1.8 4.4s.6 3.2 1.8 4.4l13.2 13.2c1.2 1.2 2.7 1.8 4.4 1.8s3.2-.7 4.4-1.8l34.7-34.7c1.2-1.2 1.8-2.8 1.8-4.4c.1-1.6-.5-3.2-1.7-4.4m-3.2 5.7L22.5 57.2c-.7.7-1.8.7-2.5 0L6.8 44c-.3-.3-.5-.8-.5-1.2s.2-.9.5-1.2L9.4 39l9 9c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-9-9l3.6-3.6l5.4 5.4c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2L19.4 29l3.6-3.6l9 9c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-9-9l3.6-3.6l5.4 5.4c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2L33 15.3l3.6-3.6l9 9c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-9-9l1.7-1.7c.3-.3.8-.5 1.2-.5s.9.2 1.2.5L57.2 20c.3.3.5.8.5 1.2c0 .5-.2 1-.5 1.3"></svg:path>`,
})
export class LineiconsRulerAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRulerPenIcon],svg[lineicons-ruler-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 5.5A2.25 2.25 0 0 1 6 3.25h4.585a2.25 2.25 0 0 1 2.25 2.25v12.998a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25zM6 4.75a.75.75 0 0 0-.75.75v.95h2.989a.75.75 0 0 1 0 1.5H5.25v1.698h2.989a.75.75 0 1 1 0 1.5H5.25v1.7h2.989a.75.75 0 1 1 0 1.5H5.25v1.699h2.989a.75.75 0 0 1 0 1.5H5.25v.95c0 .415.336.75.75.75h4.585a.75.75 0 0 0 .75-.75V5.5a.75.75 0 0 0-.75-.75zm8.335 11.831c0 .41.111.81.322 1.16l1.207 2.007c.874 1.453 2.982 1.453 3.856 0l1.207-2.007c.21-.35.322-.75.322-1.16V5.5A2.25 2.25 0 0 0 19 3.25h-2.414a2.25 2.25 0 0 0-2.25 2.25zM18.999 4.75a.75.75 0 0 1 .75.75v1.7h-3.914V5.5a.75.75 0 0 1 .75-.75zm.75 3.95v7.881a.75.75 0 0 1-.107.387l-1.207 2.007a.75.75 0 0 1-1.286 0l-1.207-2.007a.75.75 0 0 1-.107-.387V8.7z"></svg:path>`,
})
export class LineiconsRulerPenIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRulerPencilIcon],svg[lineicons-ruler-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51.7 1.8h-4.9c-4.2 0-7.6 3.4-7.6 7.6V48q0 .6.3 1.2l7 11.6c.6 1 1.6 1.6 2.8 1.6s2.2-.6 2.8-1.6l7-11.6q.3-.6.3-1.2V9.4c-.1-4.2-3.5-7.6-7.7-7.6m-4.9 4.4h4.9c1.7 0 3.1 1.4 3.1 3.1V12H43.7V9.4c0-1.7 1.4-3.2 3.1-3.2m2.5 50.3l-5.6-9.2V16.6h11.1v30.7zM23.6 1.9H10.9c-3.4 0-6.2 2.8-6.2 6.2v47.7c0 3.4 2.8 6.2 6.2 6.2h12.7c3.4 0 6.2-2.8 6.2-6.2V8.1c.1-3.4-2.7-6.2-6.2-6.2m1.8 54c0 1-.8 1.8-1.8 1.8H10.9c-1 0-1.8-.8-1.8-1.8v-3.5h7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7v-5h2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-2v-4.9h7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7v-4.9h2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-2v-4.9h7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7V8.1c0-1 .8-1.8 1.8-1.8h12.7c1 0 1.8.8 1.8 1.8z"></svg:path>`,
})
export class LineiconsRulerPencilIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsRupeeIcon],svg[lineicons-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.918 4.251a.75.75 0 0 1 .75-.75h11.165a.75.75 0 0 1 0 1.5h-3.43a5.4 5.4 0 0 1 1.611 3.146h1.819a.75.75 0 0 1 0 1.5h-1.818a5.4 5.4 0 0 1-5.347 4.65H8.86l6.916 5.36a.75.75 0 0 1-.92 1.186L6.21 14.141a.75.75 0 0 1 .459-1.343h4a3.9 3.9 0 0 0 3.827-3.15H6.668a.75.75 0 0 1 0-1.5h7.826A3.9 3.9 0 0 0 10.668 5h-4a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class LineiconsRupeeIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSadIcon],svg[lineicons-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3s31.3-14 31.3-31.3S49.2.8 32 .8m0 58c-14.8 0-26.8-12-26.8-26.8S17.3 5.3 32 5.3s26.8 12 26.8 26.8s-12 26.7-26.8 26.7"></svg:path><svg:circle cx="20" cy="22.8" r="4" fill="currentColor"></svg:circle><svg:circle cx="44" cy="22.8" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M32 40c-5.5 0-10.7 2-14.7 5.8c-.9.8-1 2.3-.1 3.2c.8.9 2.3 1 3.2.1c3.2-2.9 7.3-4.6 11.6-4.6s8.5 1.6 11.6 4.6c.4.4 1 .6 1.5.6c.6 0 1.2-.2 1.6-.7c.8-.9.8-2.3-.1-3.2C42.7 42.1 37.5 40 32 40"></svg:path>`,
})
export class LineiconsSadIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSafariIcon],svg[lineicons-safari-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.478 2 2 6.478 2 12s4.478 10 10 10s10-4.477 10-10S17.523 2 12 2m7.351 5.251l-.14-.21zm-.543-.747l-.085-.106q.046.053.085.106m-1.21-1.23l-.106-.086c.039.03.071.059.106.085m-.637-.484l-.21-.141zm-3.987-1.486l-.21-.02q.103.008.21.02m-1.74-.022l-.21.02q.105-.008.21-.02M7.252 4.649l-.21.14zm-.747.543l-.102.081zm-1.23 1.21l-.086.106q.046-.052.085-.106m-.484.637l-.141.21l.14-.21m-1.486 3.988l-.02.21q.008-.104.02-.21m-.022 1.738l.02.21zm1.367 3.982l.14.21a5 5 0 0 1-.14-.21m.163.245l1.56-1.043l-.172-.261l-1.56 1.043a8.7 8.7 0 0 1-1.328-3.719l.933-.094l-.03-.312l-.933.094a8 8 0 0 1-.027-.547H5.13v-.312H3.253q.005-.274.027-.547l.932.09l.03-.313l-.932-.09a8.7 8.7 0 0 1 1.333-3.718l1.559 1.043l.171-.261L4.81 7.01c.106-.149.21-.296.325-.437l.722.594l.2-.243l-.722-.593c.116-.141.243-.274.367-.407L7.027 7.25l.222-.222l-1.325-1.325c.133-.124.266-.251.403-.367l.593.726l.243-.2l-.594-.722q.217-.171.437-.329L8.05 6.37l.261-.172l-1.043-1.56a8.7 8.7 0 0 1 3.719-1.328l.094.933l.312-.03l-.094-.933c.18-.017.363-.023.547-.027V5.13h.312V3.25c.184.004.363.012.547.027l-.09.932l.313.03l.09-.932a8.7 8.7 0 0 1 3.718 1.333L15.694 6.2l.261.171l1.043-1.559c.149.106.296.21.437.325l-.594.722l.243.2l.593-.722c.141.116.274.243.407.367l-.5.488l-6.837 4.559l-4.56 6.837l-.487.488a14 14 0 0 1-.367-.402l.722-.594l-.198-.243l-.722.594a9 9 0 0 1-.323-.44m.461.606c-.026-.035-.055-.065-.081-.102zm1.129 1.129l.102.081zm.637.481l.21.141zm3.988 1.488l.21.02zm1.738.022l.208-.02zm3.986-1.367l.21-.14zm.745-.543l.106-.085q-.055.046-.106.085m.684-.612l.016-.016zm.547-.598l.085-.106q-.046.052-.085.106m.136-.167l-.722-.594l-.2.243l.722.594c-.116.14-.243.273-.367.406l-1.325-1.325l-.222.223l1.325 1.324c-.133.125-.266.251-.403.367l-.593-.726l-.243.2l.594.722q-.217.17-.437.329l-1.043-1.561l-.261.171l1.043 1.56a8.7 8.7 0 0 1-3.719 1.328l-.094-.933l-.312.03l.094.933c-.18.017-.363.023-.547.027v-1.875h-.312v1.875a10 10 0 0 1-.547-.026l.09-.933l-.313-.03l-.09.932a8.7 8.7 0 0 1-3.718-1.333L8.306 17.8l-.261-.171l-1.035 1.559c-.149-.106-.296-.21-.437-.325l.594-.722l-.243-.2l-.593.722c-.141-.116-.274-.243-.407-.367l.492-.488l6.837-4.559l4.56-6.837l.487-.488c.124.133.251.266.367.403l-.722.593l.2.243l.722-.594q.17.217.329.437L17.633 8.05l.171.261l1.56-1.043a8.7 8.7 0 0 1 1.328 3.719l-.933.094l.03.312l.933-.094c.017.18.023.363.027.547h-1.875v.312h1.875a10 10 0 0 1-.026.547l-.933-.09l-.03.313l.932.09a8.7 8.7 0 0 1-1.333 3.718L17.8 15.694l-.171.261l1.559 1.043q-.154.211-.325.433m1.855-4.67l-.02.21zm-1.367 3.99l-.14.21z"></svg:path><svg:path fill="currentColor" d="m10.446 3.389l.366 1.838l-.307.062l-.365-1.84zm3.109 17.224l-.365-1.84l.306-.06l.365 1.838zM9.61 3.58l.271.897l-.3.09l-.271-.898zm4.78 16.836l-.27-.898l.3-.09l.27.898zM8.797 3.857l.719 1.733l-.288.12l-.718-1.732zm6.409 16.286l-.719-1.733l.288-.12l.718 1.732zM7.735 4.358l.275-.147l.443.826l-.276.147zm8.525 15.284l-.276.147l-.443-.826l.275-.147zM4.355 7.738l.826.443l-.147.276l-.826-.443zm15.286 8.523l-.826-.443l.146-.275l.827.443zM5.59 9.513l-1.733-.719l.12-.288l1.733.719zm12.823 4.973l1.733.718l-.12.288l-1.733-.716zM3.671 9.312l.898.272l-.09.3l-.898-.272zm16.656 5.375l-.898-.271l.09-.3l.898.271zM3.447 10.14l1.84.366l-.062.306l-1.839-.365zm17.102 3.72l-1.84-.364l.062-.306l1.839.365zm-17.163-.307l1.839-.365l.061.306l-1.839.365zm17.224-3.106l-1.839.365l-.061-.306l1.839-.365zM3.581 14.392l.898-.272l.09.3l-.898.271zm16.838-4.78l-.899.272l-.09-.3l.899-.272zM3.977 15.494l-.12-.288l1.732-.718l.12.288zm16.046-6.986l.12.288l-1.732.718l-.12-.287zM4.36 16.263l-.147-.276l.826-.442l.147.275zm15.285-8.525l.147.276l-.827.443l-.147-.276zM8.013 19.79l-.276-.148l.443-.826l.276.147zm7.973-15.581l.276.147l-.443.826l-.276-.147zM8.508 20.022l.719-1.732l.287.12l-.716 1.733zm6.986-16.047l-.719 1.73l-.288-.12l.719-1.733zM9.61 20.419l-.3-.09l.271-.898l.3.09zM14.39 3.58l.3.09l-.272.897l-.3-.09zm-3.944 17.03l-.306-.06l.365-1.84l.306.062zm3.106-17.225l.306.062l-.365 1.838l-.306-.06z"></svg:path>`,
})
export class LineiconsSafariIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSanityIcon],svg[lineicons-sanity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" opacity=".7"><svg:path d="M16.927 11.423v2.492h-.82V11.85zM5.965 13.978l1.914-1.001l-.236-.611l-1.26.587z"></svg:path><svg:path d="m16.108 11.847l2.076-1.063l-.35-.594l-1.726.844zm-5.848-.621v2.69h-.782v-3.83zm-3.111-.149l-1.184 2.9l-.609-.523l1.41-3.369z"></svg:path><svg:path d="M6.767 10.085h.806l1.493 3.83H8.24zm3.613 0l1.72 2.617v1.213l-2.622-3.83zm4.007 0h-.813v3.83h.813zm.469.699v-.699h2.915l.413.699zm5.728 1.678v1.453h-.806v-1.453m0 0l1.365-2.377H22l-1.416 2.377zm0 0l-1.404-2.377h.883l.95 1.629zm-17.45-1.935c0 .534.335.85 1.006 1.018l.711.162c.636.143 1.022.5 1.022 1.08c.005.252-.078.499-.237.698c0-.578-.304-.891-1.04-1.08l-.697-.155c-.56-.126-.991-.418-.991-1.048c-.003-.243.076-.48.226-.675"></svg:path><svg:path d="M12.1 10.085h.782v3.83H12.1zm-7.707 2.56c.304.19.437.457.437.84c-.251.315-.692.493-1.21.493c-.874 0-1.484-.422-1.62-1.155h.838c.108.336.394.492.775.492c.466 0 .775-.244.781-.672m-1.631-1.325a.9.9 0 0 1-.328-.336a.86.86 0 0 1-.107-.455c.242-.313.663-.504 1.177-.504c.89 0 1.404.46 1.53 1.11H4.23c-.089-.256-.311-.455-.717-.455c-.434 0-.73.248-.747.64"></svg:path></svg:g>`,
})
export class LineiconsSanityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSaveIcon],svg[lineicons-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m58.6 11.5l-9.7-8.9l-.2-.1c-.7-.5-1.5-.8-2.2-.8H11.9c-4.2 0-7.6 3.4-7.6 7.6v45.2c0 4.2 3.4 7.6 7.6 7.6h40.2c4.2 0 7.6-3.4 7.6-7.6V14.1c0-.9-.3-1.8-1.1-2.6M39.9 6.3V12H19V6.3zM21.5 57.8V39.3h21v18.4h-21zm33.7-3.2c0 1.7-1.4 3.1-3.1 3.1H47V38.4c0-1.9-1.6-3.5-3.5-3.5h-23c-1.9 0-3.5 1.6-3.5 3.5v19.4h-5.1c-1.7 0-3.1-1.4-3.1-3.1V9.4c0-1.7 1.4-3.1 3.1-3.1h2.6V13c0 1.9 1.6 3.5 3.5 3.5h22.9c1.9 0 3.5-1.6 3.5-3.5V6.3h1.8l9 8.3z"></svg:path><svg:path fill="currentColor" d="M36.1 42.5h-8.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h8.2c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3m0 7.6h-8.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h8.2c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsSaveIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSchoolBenchIcon],svg[lineicons-school-bench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m32.8 26.1l-28-10.2c-1.2-.4-2.5.2-2.9 1.3c-.4 1.2.2 2.5 1.3 2.9l3.6 1.3V46c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V23.1l13.3 4.8V46c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V29.5l2.1.8c.3.1.5.1.8.1c.9 0 1.8-.6 2.1-1.5c.2-1.1-.4-2.4-1.5-2.8M60 15.8c-1.2 0-2.3 1-2.3 2.3v15.6H47.4c-2.7 0-5 2.2-5 5V46c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-7.5c0-.3.2-.5.5-.5h10.3v8c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V18c-.1-1.2-1.2-2.2-2.4-2.2"></svg:path>`,
})
export class LineiconsSchoolBenchIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSchoolBench1Icon],svg[lineicons-school-bench-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5.25a.75.75 0 0 0-1.5 0v6h-4a2.25 2.25 0 0 0-2.25 2.25v5.25a.75.75 0 0 0 1.5 0V13.5a.75.75 0 0 1 .75-.75h4v6a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.75 6a.75.75 0 0 0-.75.75v12a.75.75 0 0 0 1.5 0v-7.5h7.75v7.5a.75.75 0 0 0 1.5 0v-12A.75.75 0 0 0 12 6zm8.5 3.75H3.5V7.5h7.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsSchoolBench1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSchoolBench2Icon],svg[lineicons-school-bench-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5.25a.75.75 0 0 0-1.5 0v6h-4a2.25 2.25 0 0 0-2.25 2.25v5.25a.75.75 0 0 0 1.5 0V13.5a.75.75 0 0 1 .75-.75h4v6a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.87 6.01a.75.75 0 0 0-.87.74v12a.75.75 0 0 0 1.5 0v-7.369l7.75 1.257v6.112a.75.75 0 0 0 1.5 0V8.25a.75.75 0 0 0-.63-.74zm8.38 5.109L3.5 9.862v-2.23l7.75 1.256z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsSchoolBench2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSchoolBenchAltIcon],svg[lineicons-school-bench-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 16.7c-1.2 0-2.3 1-2.3 2.3v7.9H42.2c-2.6 0-4.8 2.2-4.8 4.8v5.1c0 1.8 1 3.4 2.5 4.2v8.5c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-7.9h13.3v7.9c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V18.9c-.1-1.2-1.2-2.2-2.4-2.2M41.9 31.6q0-.3.3-.3h15.6V37H42.2q-.3 0-.3-.3zM30.8 18.8L7.5 12.4c-1.3-.4-2.7-.1-3.9.8s-1.9 2.3-1.9 3.9V22c0 2.2 1.4 4.1 3.4 4.6l1.7.5v22.4c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V28.3L24.7 32v17.5c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V33.1h.5q1.5 0 2.7-.9c1.2-.9 1.9-2.3 1.9-3.9v-4.9c-.1-2.1-1.6-4-3.6-4.6m-1 9.6c0 .2-.1.3-.1.3L6.4 22.3s-.1-.1-.1-.3v-4.9c0-.2.1-.3.1-.3l23.3 6.4s.1.1.1.3z"></svg:path>`,
})
export class LineiconsSchoolBenchAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsScissors1VerticalIcon],svg[lineicons-scissors-1-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.397 15.312a3.162 3.162 0 1 1-1.273.797l-2.163-3.088l-2.145 3.064a3.162 3.162 0 1 1-1.283-.783l2.513-3.588L6.792 4.21a.75.75 0 1 1 1.229-.86zm-7.821 1.342a1.662 1.662 0 1 0 0 3.323a1.662 1.662 0 0 0 0-3.323m7.15 1.662a1.662 1.662 0 1 0 3.324 0a1.662 1.662 0 0 0-3.323 0"></svg:path><svg:path fill="currentColor" d="m19.167 4.159l-4.448 6.353l-.916-1.308l4.135-5.906a.75.75 0 0 1 1.23.86"></svg:path>`,
})
export class LineiconsScissors1VerticalIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsScooterIcon],svg[lineicons-scooter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M49.8 6.8H39c-1-2.9-3.7-5.1-7-5.1s-6 2.1-7 5.1H14.2C13 6.8 12 7.8 12 9s1 2.2 2.2 2.2h7.6c-2.9 2.1-4.7 5.5-4.7 9.2v21.1c0 4.9 3.1 9.2 7.6 10.7V56c0 3.4 2.8 6.2 6.2 6.2h2.2c3.4 0 6.2-2.8 6.2-6.2v-3.7c4.5-1.5 7.6-5.8 7.6-10.7V20.5c0-3.7-1.8-7.1-4.7-9.2h7.6c1.2 0 2.2-1 2.2-2.2s-.9-2.3-2.2-2.3M32 6.2c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8s-2.8-1.3-2.8-2.8s1.2-2.8 2.8-2.8m1.1 51.6h-2.2c-1 0-1.8-.8-1.8-1.8v-7.3c0-1 .8-1.8 1.8-1.8h2.2c1 0 1.8.8 1.8 1.8V56c-.1 1-.8 1.8-1.8 1.8m9.4-16.2c0 2.5-1.3 4.6-3.3 5.8c-.6-2.8-3.1-4.9-6.1-4.9h-2.2c-3 0-5.5 2.1-6.1 4.9c-2-1.2-3.3-3.4-3.3-5.8V20.5c0-3.1 2.1-5.7 5-6.6c1.3 1.5 3.3 2.5 5.5 2.5s4.1-1 5.5-2.5c2.9.8 5 3.5 5 6.6z"></svg:path>`,
})
export class LineiconsScooterIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsScoterIcon],svg[lineicons-scoter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.75 4.25a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0M12 3.5A.75.75 0 1 0 12 5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.5 17.5a1.5 1.5 0 0 1 3 0v3a1.5 1.5 0 0 1-3 0zm5.175-14a3.8 3.8 0 0 1 0 1.5H18.5a.75.75 0 0 0 0-1.5zm-.414 2.602c-.25.441-.589.827-.99 1.133a3.87 3.87 0 0 1 1.604 3.14v4.5c0 .933-.33 1.79-.88 2.458q.005.084.005.167v1.836a5.37 5.37 0 0 0 2.375-4.461v-4.5c0-1.742-.829-3.29-2.114-4.273M9.73 7.235a3.8 3.8 0 0 1-.991-1.133a5.37 5.37 0 0 0-2.114 4.273v4.5A5.37 5.37 0 0 0 9 19.335V17.5q0-.084.005-.167a3.86 3.86 0 0 1-.88-2.458v-4.5a3.87 3.87 0 0 1 1.604-3.14M8.325 5H5.5a.75.75 0 0 1 0-1.5h2.825a3.8 3.8 0 0 0 0 1.5"></svg:path>`,
})
export class LineiconsScoterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsScrollDownIcon],svg[lineicons-scroll-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m38 40.6l-6 6l-6-6c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l7.6 7.6c.4.4 1 .7 1.6.7s1.1-.2 1.6-.7l7.6-7.6c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0"></svg:path><svg:path fill="currentColor" d="M41.8 1.8H22.2c-5.7 0-10.3 4.6-10.3 10.3v40c0 5.7 4.6 10.3 10.3 10.3h19.6c5.7 0 10.3-4.6 10.3-10.3V12c0-5.7-4.6-10.2-10.3-10.2M47.6 52c0 3.2-2.6 5.8-5.8 5.8H22.2c-3.2 0-5.8-2.6-5.8-5.8V12c0-3.2 2.6-5.8 5.8-5.8h19.6c3.2 0 5.8 2.6 5.8 5.8z"></svg:path><svg:path fill="currentColor" d="M32 26.2h.4c.1 0 .3-.1.4-.1c.1-.1.3-.1.4-.2l.3-.3c.4-.4.7-1 .7-1.6s-.2-1.2-.7-1.6l-.3-.3c-.1-.1-.3-.2-.4-.2s-.3-.1-.4-.1c-.7-.1-1.5.1-2 .6c-.4.4-.7 1-.7 1.6s.2 1.2.7 1.6c.4.3 1 .6 1.6.6m-2.1 8.2c.1.1.1.3.2.4s.2.2.3.4l.3.3c.1.1.3.2.4.2c.1.1.3.1.4.1h.4c.6 0 1.2-.2 1.6-.6c.1-.1.2-.2.3-.4c.1-.1.1-.3.2-.4s.1-.3.1-.4v-.4c0-.6-.2-1.2-.7-1.6c-.8-.8-2.3-.8-3.2 0c-.4.4-.7 1-.7 1.6v.4c.3.1.4.3.4.4"></svg:path>`,
})
export class LineiconsScrollDownIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsScrollDown2Icon],svg[lineicons-scroll-down-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.47 16.278a.75.75 0 0 0 1.06 0l2.25-2.249a.75.75 0 0 0-1.06-1.06L12 14.686l-1.72-1.719a.75.75 0 1 0-1.06 1.061zM12 9.055a.8.8 0 1 1 0-1.6a.8.8 0 0 1 0 1.6m-.8 2.016a.8.8 0 1 0 1.6 0a.8.8 0 0 0-1.6 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.001a7.5 7.5 0 0 0-7.5 7.5v5a7.5 7.5 0 0 0 15 0v-5a7.5 7.5 0 0 0-7.5-7.5m-6 7.5a6 6 0 1 1 12 0v5a6 6 0 0 1-12 0z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsScrollDown2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSearchIcon],svg[lineicons-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.1 49.5L49.8 39.2c-1.4-1.4-3.3-2.2-5.3-2.2c-1.2 0-2.4.3-3.4.8l-5.2-5.2c5.9-7.5 5.4-18.4-1.5-25.4C27-.1 14.8-.1 7.4 7.4C-.1 14.9-.1 27 7.4 34.5C11.1 38.1 16 40 20.9 40c4.2 0 8.4-1.4 11.8-4.1l5.2 5.2c-.5 1-.8 2.2-.8 3.4c0 2 .8 3.9 2.2 5.3l10.3 10.3c1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2c2.8-2.9 2.8-7.7-.1-10.6M10.5 31.2c-5.7-5.7-5.7-15 0-20.7c2.9-2.9 6.6-4.3 10.3-4.3s7.5 1.4 10.4 4.3c5.7 5.7 5.7 15 0 20.7s-15 5.7-20.7 0m46.4 25.7c-1.1 1.1-3 1.2-4.2 0L42.4 46.6q-.9-.9-.9-2.1t.9-2.1c.9-.9 1.3-.9 2.1-.9q1.2 0 2.1.9l10.3 10.3c1.1 1.2 1.1 3 0 4.2"></svg:path>`,
})
export class LineiconsSearchIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSearch1Icon],svg[lineicons-search-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 2.75C6.142 2.75 2 6.89 2 11.998s4.142 9.248 9.25 9.248a9.2 9.2 0 0 0 5.987-2.198l3.481 3.48a.75.75 0 1 0 1.06-1.06l-3.48-3.48a9.2 9.2 0 0 0 2.202-5.99c0-5.108-4.142-9.248-9.25-9.248M3.5 11.998a7.75 7.75 0 0 1 7.75-7.748a7.749 7.749 0 1 1 0 15.496a7.75 7.75 0 0 1-7.75-7.748" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsSearch1Icon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSearch2Icon],svg[lineicons-search-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 5.75a.75.75 0 0 0 0 1.5A4.75 4.75 0 0 1 16 12a.75.75 0 0 0 1.5 0a6.25 6.25 0 0 0-6.251-6.25"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 11.999C2 6.89 6.142 2.75 11.25 2.75s9.25 4.14 9.25 9.248a9.2 9.2 0 0 1-2.202 5.99l3.481 3.48a.75.75 0 1 1-1.06 1.061l-3.482-3.481a9.2 9.2 0 0 1-5.987 2.198c-5.108 0-9.25-4.14-9.25-9.248m9.25-7.748a7.749 7.749 0 1 0 0 15.496a7.749 7.749 0 1 0 0-15.496" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsSearch2Icon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSearchAltIcon],svg[lineicons-search-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61.4 55.7L44.9 42.3c6.8-9.3 6.1-22.6-2.4-31c-4.5-4.5-10.5-7-16.9-7s-12.4 2.5-16.9 7c-9.3 9.3-9.3 24.5 0 33.8c4.5 4.5 10.5 7 16.9 7c6.1 0 11.8-2.3 16.3-6.4l16.7 13.5c.4.3.9.5 1.4.5c.7 0 1.3-.3 1.7-.8c.8-1 .7-2.4-.3-3.2m-35.8-8.1c-5.2 0-10-2-13.7-5.7c-7.6-7.6-7.6-19.9 0-27.4c3.7-3.7 8.5-5.7 13.7-5.7s10 2 13.7 5.7c7.6 7.6 7.6 19.9 0 27.4c-3.6 3.7-8.5 5.7-13.7 5.7"></svg:path>`,
})
export class LineiconsSearchAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSearchMinusIcon],svg[lineicons-search-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.622 10.75a.75.75 0 0 0 0 1.5h9.25a.75.75 0 1 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 11.499C2 6.39 6.142 2.25 11.25 2.25s9.25 4.14 9.25 9.248a9.2 9.2 0 0 1-2.202 5.99l3.481 3.48a.75.75 0 1 1-1.06 1.061l-3.482-3.481a9.2 9.2 0 0 1-5.987 2.198c-5.108 0-9.25-4.14-9.25-9.248m9.25-7.748a7.749 7.749 0 1 0 0 15.496a7.749 7.749 0 1 0 0-15.496" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsSearchMinusIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSearchPlusIcon],svg[lineicons-search-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.246 6.127a.75.75 0 0 0-.75.75v3.873H6.623a.75.75 0 0 0 0 1.5h3.873v3.874a.75.75 0 0 0 1.5 0V12.25h3.874a.75.75 0 0 0 0-1.5h-3.874V6.877a.75.75 0 0 0-.75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 11.499C2 6.39 6.142 2.25 11.25 2.25s9.25 4.14 9.25 9.248a9.2 9.2 0 0 1-2.202 5.99l3.481 3.48a.75.75 0 1 1-1.06 1.061l-3.482-3.481a9.2 9.2 0 0 1-5.987 2.198c-5.108 0-9.25-4.14-9.25-9.248m9.25-7.748a7.749 7.749 0 1 0 0 15.496a7.749 7.749 0 1 0 0-15.496" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsSearchPlusIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSearchTextIcon],svg[lineicons-search-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.277 13.25a.75.75 0 0 1-.75.75h-6.56a.75.75 0 1 1 0-1.5h6.56a.75.75 0 0 1 .75.75m-2.43-3.5a.75.75 0 0 1-.75.75h-4.13a.75.75 0 1 1 0-1.5h4.13a.75.75 0 0 1 .75.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 11.499C2 6.39 6.142 2.25 11.25 2.25s9.25 4.14 9.25 9.248a9.2 9.2 0 0 1-2.202 5.99l3.481 3.48a.75.75 0 1 1-1.06 1.061l-3.482-3.481a9.2 9.2 0 0 1-5.987 2.198c-5.108 0-9.25-4.14-9.25-9.248m9.25-7.748a7.749 7.749 0 1 0 0 15.496a7.749 7.749 0 1 0 0-15.496" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsSearchTextIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSelectCursorIcon],svg[lineicons-select-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m59.2 47.1l-14.9-5.6c-1-.4-2.1-.1-2.8.6s-1 1.8-.6 2.8l.3.7c-.3-.1-.5-.2-.8-.2h-3c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h3c.9 0 1.6-.5 2-1.2l4.2 11.1c.3.8 1 1.4 1.9 1.5h.2c.8 0 1.5-.4 1.9-1.1l2.2-3.7l2.5 2.5c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2L56 53.2l3.7-2.1c.8-.4 1.2-1.3 1.1-2.1c-.3-.9-.8-1.6-1.6-1.9m-8.9 4.5L49 53.8l-2.5-6.7l6.7 2.5l-2.1 1.2c-.3.2-.6.5-.8.8M30 45.4h-4.8c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2H30c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.2-2.2m-12 0h-3c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h3c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2m-9.7 0h-.4V45c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v2.7c0 1.2 1 2.2 2.2 2.2h2.7c1.2 0 2.2-1 2.2-2.2s-1.1-2.3-2.3-2.3m0-42.6H5.6c-1.2 0-2.2 1-2.2 2.2v2.7c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-.5h.4c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.1-2.2m37.3 4.4h.4v.4c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V5c0-1.2-1-2.2-2.2-2.2h-2.7c-1.2 0-2.2 1-2.2 2.2s1.1 2.2 2.3 2.2m-8.3 0h3c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-3c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2M30 2.8h-4.8C24 2.8 23 3.8 23 5s1 2.2 2.2 2.2H30c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.2-2.2m-12 0h-3c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h3c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2m30.3 31.1c-1.2 0-2.2 1-2.2 2.2v3c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-3c.1-1.2-1-2.2-2.2-2.2m2.3-9.8c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v4.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2zm0-10.3c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v3c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2zm-45 27c1.2 0 2.2-1 2.2-2.2v-3c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v3c0 1.2 1 2.2 2.2 2.2m0-10.3c1.2 0 2.2-1 2.2-2.2v-4.8c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v4.8c0 1.2 1 2.2 2.2 2.2m0-12.1c1.2 0 2.2-1 2.2-2.2v-3c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v3c0 1.2 1 2.2 2.2 2.2"></svg:path>`,
})
export class LineiconsSelectCursorIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSelectCursor1Icon],svg[lineicons-select-cursor-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.523 4.75a.75.75 0 0 0-.75.75v1.625a.75.75 0 0 1-1.5 0V5.5a2.25 2.25 0 0 1 2.25-2.25h1.625a.75.75 0 0 1 0 1.5zM9.648 4a.75.75 0 0 1 .75-.75h3.25a.75.75 0 1 1 0 1.5h-3.25a.75.75 0 0 1-.75-.75m6.5 0a.75.75 0 0 1 .75-.75h1.625a2.25 2.25 0 0 1 2.25 2.25v1.625a.75.75 0 1 1-1.5 0V5.5a.75.75 0 0 0-.75-.75h-1.625a.75.75 0 0 1-.75-.75M4.023 9.625a.75.75 0 0 1 .75.75v3.25a.75.75 0 0 1-1.5 0v-3.25a.75.75 0 0 1 .75-.75m16 0a.75.75 0 0 1 .75.75v3.25a.75.75 0 0 1-.724.75l-.748-.546a.8.8 0 0 1-.028-.204v-3.25a.75.75 0 0 1 .75-.75M12.127 20.65l-.151-1.4h-1.578a.75.75 0 0 0 0 1.5h1.742zm-8.104-4.525a.75.75 0 0 1 .75.75V18.5c0 .414.336.75.75.75h1.625a.75.75 0 0 1 0 1.5H5.523a2.25 2.25 0 0 1-2.25-2.25v-1.625a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.01 11.726a.75.75 0 0 1 .818.044l6.525 4.767a.75.75 0 0 1-.305 1.343l-2.364.438l1.259 2.181a.75.75 0 0 1-1.3.75l-1.259-2.181l-1.562 1.829a.75.75 0 0 1-1.316-.407l-.866-8.034a.75.75 0 0 1 .37-.73m1.8 6.874l.778-.91a2.25 2.25 0 0 1 1.3-.75l1.176-.218l-3.75-2.74z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsSelectCursor1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSeoIcon],svg[lineicons-seo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M57 6.6H7C3.6 6.6.7 9.4.7 12.9v26.4c0 3.4 2.8 6.3 6.3 6.3h22.8V53h-11c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h26.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H34.3v-7.4H57c3.4 0 6.3-2.8 6.3-6.3V12.8c0-3.4-2.9-6.2-6.3-6.2m1.8 32.6c0 1-.8 1.8-1.8 1.8H7c-1 0-1.8-.8-1.8-1.8V12.8c0-1 .8-1.8 1.8-1.8h50c1 0 1.8.8 1.8 1.8z"></svg:path><svg:path fill="currentColor" d="M16.1 20.4h4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-4c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2c.9 0 1.7.8 1.7 1.7s-.8 1.7-1.7 1.7h-4c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h4c3.4 0 6.2-2.8 6.2-6.2s-2.8-6.2-6.2-6.2c-.9 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7m15.8 0h4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-4c-3.4 0-6.2 2.8-6.2 6.2v8c0 3.4 2.8 6.2 6.2 6.2h4c1.2 0 2.3-1 2.3-2.3c0-1.2-1-2.3-2.3-2.3h-4c-.9 0-1.7-.8-1.7-1.7v-1.7h5.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-5.7v-1.7c0-.8.8-1.5 1.7-1.5m17-4.5h-2.3c-2.8 0-5.1 2.3-5.1 5.1v10.2c0 2.8 2.3 5.1 5.1 5.1h2.3c2.8 0 5.1-2.3 5.1-5.1V20.9c-.1-2.8-2.3-5-5.1-5m.5 15.2c0 .3-.3.6-.6.6h-2.3c-.3 0-.6-.3-.6-.6V20.9c0-.3.3-.6.6-.6h2.3c.3 0 .6.3.6.6z"></svg:path>`,
})
export class LineiconsSeoIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSeoMonitorIcon],svg[lineicons-seo-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.938 6.585c-.51 0-.92.147-1.208.462c-.286.306-.418.732-.418 1.254q-.001.584.262 1.062v.002c.174.309.473.646.887 1.01v.001c.32.279.528.509.636.692v.002q.158.255.159.615c0 .207-.043.325-.098.387c-.047.054-.126.093-.265.093c-.14 0-.22-.04-.27-.1c-.053-.063-.093-.175-.093-.362v-.582H7.294v.51c0 .533.129.966.407 1.279l.001.001c.283.31.692.454 1.2.454c.514 0 .929-.147 1.217-.462c.292-.313.427-.75.427-1.29q.002-.625-.252-1.105c-.168-.318-.469-.659-.889-1.024c-.32-.278-.531-.507-.646-.686a1.06 1.06 0 0 1-.157-.56c0-.184.038-.295.09-.357c.046-.057.122-.096.255-.096c.128 0 .204.039.253.098l.003.004c.048.055.089.166.089.369v.474h1.236v-.411c0-.532-.128-.963-.407-1.27c-.276-.317-.68-.464-1.183-.464"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.024 6.585c-.515 0-.932.147-1.226.462c-.291.312-.427.743-.427 1.272v3.312c0 .529.136.96.428 1.272c.293.315.71.462 1.225.462s.932-.147 1.226-.462c.291-.312.427-.743.427-1.272V8.319c0-.53-.136-.96-.427-1.272c-.294-.315-.71-.462-1.226-.462m-.363 1.671c0-.19.04-.305.094-.37c.05-.06.13-.101.27-.101c.139 0 .219.04.268.1c.054.066.094.18.094.371v3.438c0 .19-.04.305-.094.37c-.05.06-.13.101-.269.101c-.14 0-.22-.04-.269-.1c-.054-.066-.094-.18-.094-.371z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.994 6.675h-3v6.6h3v-1.2h-1.71V10.44h1.359v-1.2h-1.36V7.875h1.71z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.787 4.172a2.25 2.25 0 0 0-2.25 2.25v7.406a2.25 2.25 0 0 0 2.25 2.25h7v2.25h-2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5h-2.25v-2.25h7a2.25 2.25 0 0 0 2.25-2.25V6.422a2.25 2.25 0 0 0-2.25-2.25zm-.75 2.25a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 .75.75v7.406a.75.75 0 0 1-.75.75h-15.5a.75.75 0 0 1-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsSeoMonitorIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsServiceIcon],svg[lineicons-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M58.7 39.7h-1.5c-1.5-12.5-11.1-22.2-22.9-23.3v-2.5h1.1c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-6.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h1.1v2.5c-11.9 1.1-21.4 10.8-23 23.3H5.3c-2 0-3.6 1.6-3.6 3.6v5.2c0 3.4 2.7 6.1 6.1 6.1h48.3c3.4 0 6.1-2.7 6.1-6.1v-5.2c.1-2-1.6-3.6-3.5-3.6M32 20.7c10.4 0 19.1 8.1 20.7 18.9H11.3C12.9 28.9 21.6 20.7 32 20.7m25.8 27.8c0 .9-.7 1.6-1.6 1.6H7.9c-.9 0-1.6-.7-1.6-1.6v-4.3h51.5z"></svg:path>`,
})
export class LineiconsServiceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsServiceBell1Icon],svg[lineicons-service-bell-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 7.532V6H10a.75.75 0 0 1 0-1.5h4A.75.75 0 0 1 14 6h-1.25v1.532a8.75 8.75 0 0 1 8 8.718V18h.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h.5v-1.75a8.75 8.75 0 0 1 8-8.718M4.75 18h14.5v-1.75a7.25 7.25 0 1 0-14.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsServiceBell1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShareIcon],svg[lineicons-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.5 42.6c1.2 0 2.3-1 2.3-2.3v-15c0-5.4 4.4-9.8 9.8-9.8h11.9L47.7 21c-.9.9-.9 2.3-.1 3.2c.4.5 1 .7 1.6.7q.9 0 1.5-.6l9.2-8.7c.6-.6 1-1.5 1-2.4s-.4-1.7-1-2.3l-9.2-8.5c-.9-.8-2.3-.8-3.2.1c-.8.9-.8 2.3.1 3.2l5.8 5.4h-12c-7.9 0-14.3 6.4-14.3 14.3v15c.2 1.2 1.2 2.2 2.4 2.2"></svg:path><svg:path fill="currentColor" d="M59 38.1c-1.2 0-2.3 1-2.3 2.3v14.5c0 1.6-1.3 2.9-2.9 2.9H10.2c-1.6 0-2.9-1.3-2.9-2.9V40.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v14.5c0 4.1 3.3 7.4 7.4 7.4h43.7c4.1 0 7.4-3.3 7.4-7.4V40.3c.1-1.2-.9-2.2-2.2-2.2"></svg:path>`,
})
export class LineiconsShareIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShare1Icon],svg[lineicons-share-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.276 2.286a.75.75 0 0 1 .817.162l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.28-.53V13.18c-4.822.333-8.77 3.845-9.76 8.456a.75.75 0 0 1-1.467 0a12.3 12.3 0 0 1-.273-2.584c0-6.513 5.083-11.84 11.5-12.227V2.979a.75.75 0 0 1 .462-.693m1.037 2.503v2.763a.75.75 0 0 1-.75.75c-5.555 0-10.126 4.214-10.692 9.619a12.25 12.25 0 0 1 10.692-6.266a.75.75 0 0 1 .75.75v2.763l5.189-5.19z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsShare1Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShare1CircleIcon],svg[lineicons-share-1-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.08 2.448a.75.75 0 0 0-1.281.53v2.557a8.987 8.987 0 0 0-8.036 10.851a.75.75 0 0 0 1.466 0a7.49 7.49 0 0 1 6.57-5.87v2.49a.75.75 0 0 0 1.28.53l5.014-5.014a.75.75 0 0 0 0-1.06zm.219 3.806V4.79l3.203 3.203l-3.203 3.203V9.73a.75.75 0 0 0-.75-.75a8.97 8.97 0 0 0-7.265 3.696a7.49 7.49 0 0 1 7.265-5.672a.75.75 0 0 0 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.313 2.229c.703 0 1.39.072 2.051.21a2.3 2.3 0 0 0-.065.54v.983a8.5 8.5 0 1 0 6.508 7.967l1.367-1.367q.138.814.139 1.667c0 5.522-4.478 10-10 10s-10-4.478-10-10s4.477-10 10-10"></svg:path>`,
})
export class LineiconsShare1CircleIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShare2Icon],svg[lineicons-share-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.484 10.735a.75.75 0 0 1 0-1.06l1.857-1.858h-7.92c-.626 0-1.133.508-1.133 1.134v3.213a.75.75 0 0 1-1.5 0V8.951a2.634 2.634 0 0 1 2.633-2.634h7.924l-1.861-1.86a.75.75 0 0 1 1.06-1.062l3.14 3.14a.75.75 0 0 1 0 1.06l-3.14 3.14a.75.75 0 0 1-1.06 0M5.063 16.23a.75.75 0 1 0-1.5 0v2.5a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25v-2.5a.75.75 0 1 0-1.5 0v2.5a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class LineiconsShare2Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShareAltIcon],svg[lineicons-share-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 24.2c.4.4 1 .6 1.5.6c.6 0 1.2-.2 1.6-.7c.9-.9.8-2.3-.1-3.2l-5.7-5.4h11.9c5.4 0 9.8 4.4 9.8 9.8v15c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-15c0-7.9-6.4-14.3-14.3-14.3h-12l5.8-5.4c.9-.8 1-2.3.1-3.2c-.8-.9-2.3-1-3.2-.1L4 10.8c-.7.6-1 1.5-1 2.3c0 .9.4 1.7 1 2.4z"></svg:path><svg:path fill="currentColor" d="M59 38.1c-1.2 0-2.3 1-2.3 2.3v14.5c0 1.6-1.3 2.9-2.9 2.9H10.2c-1.6 0-2.9-1.3-2.9-2.9V40.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v14.5c0 4.1 3.3 7.4 7.4 7.4h43.7c4.1 0 7.4-3.3 7.4-7.4V40.3c.1-1.2-.9-2.2-2.2-2.2"></svg:path>`,
})
export class LineiconsShareAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShieldIcon],svg[lineicons-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 7.1L33.9 2c-1.3-.4-2.7-.4-4 0L12 7.1c-3.2.9-5.4 3.8-5.4 7.1v14.6c0 14.6 8.9 27.5 22.8 33c.8.3 1.7.5 2.6.5s1.8-.2 2.6-.5c13.8-5.5 22.7-18.4 22.7-33V14.2c.1-3.3-2.1-6.2-5.3-7.1m.9 21.7c0 12.7-7.8 24-19.9 28.8c-.6.2-1.3.2-1.9 0C19 52.8 11.2 41.5 11.2 28.8V14.2c0-1.3.9-2.4 2.1-2.8l17.9-5c.3-.1.5-.1.8-.1s.5 0 .8.1l18.1 5.1c1.2.3 2.1 1.5 2.1 2.8v14.5z"></svg:path>`,
})
export class LineiconsShieldIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShield2Icon],svg[lineicons-shield-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.139 2.296a2.25 2.25 0 0 1 1.722 0l6.548 2.713c.776.322 1.338 1.064 1.361 1.947c.117 4.545-1.34 10.807-7.703 14.558a2.12 2.12 0 0 1-2.132.01c-6.503-3.753-7.841-10.03-7.707-14.57A2.18 2.18 0 0 1 4.59 5.008zm1.148 1.386a.75.75 0 0 0-.574 0L5.164 6.395a.69.69 0 0 0-.437.602c-.125 4.239 1.115 9.856 6.958 13.228c.192.11.43.11.62-.003c5.725-3.375 7.075-8.999 6.966-13.227a.68.68 0 0 0-.436-.6z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsShield2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShield2CheckIcon],svg[lineicons-shield-2-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.507 9.776a.75.75 0 0 0-1.06-1.06l-3.482 3.48l-1.411-1.41a.75.75 0 0 0-1.061 1.06l1.941 1.942a.75.75 0 0 0 1.061 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.86 2.296a2.25 2.25 0 0 0-1.721 0L4.59 5.01a2.18 2.18 0 0 0-1.362 1.944c-.134 4.54 1.204 10.818 7.707 14.57c.66.382 1.475.378 2.132-.01c6.363-3.75 7.82-10.012 7.703-14.557c-.023-.883-.585-1.625-1.361-1.947zm-1.147 1.386a.75.75 0 0 1 .574 0l6.548 2.713a.68.68 0 0 1 .436.6c.108 4.228-1.24 9.852-6.966 13.227a.62.62 0 0 1-.62.002c-5.843-3.371-7.083-8.988-6.958-13.227a.69.69 0 0 1 .437-.602z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsShield2CheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShieldDollarIcon],svg[lineicons-shield-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.252 5.5a.75.75 0 0 1 .75.75v.438c.99.15 1.75 1.006 1.75 2.039a.75.75 0 1 1-1.5 0a.563.563 0 0 0-.563-.563h-.687a.75.75 0 0 0-.75.75v.265a.75.75 0 0 0 .487.703l1.553.582a2.25 2.25 0 0 1 1.46 2.107v.265a2.25 2.25 0 0 1-1.75 2.194v.47a.75.75 0 1 1-1.5 0v-.438a2.06 2.06 0 0 1-1.75-2.039a.75.75 0 1 1 1.5 0c0 .311.252.563.563.563h.687a.75.75 0 0 0 .75-.75v-.265a.75.75 0 0 0-.487-.702l-1.553-.583a2.25 2.25 0 0 1-1.46-2.107v-.265a2.25 2.25 0 0 1 1.75-2.194v-.47a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.187 2.353a2.25 2.25 0 0 0-1.871 0L5.592 4.971a2.25 2.25 0 0 0-1.315 2.046v5.465c0 1.557.478 3.103 1.481 4.344c.8.99 1.887 2.248 2.998 3.264c.555.508 1.134.972 1.702 1.313c.553.333 1.174.597 1.793.597c.62 0 1.24-.264 1.794-.597c.568-.341 1.147-.805 1.702-1.313c1.111-1.016 2.197-2.273 2.998-3.264c1.003-1.241 1.48-2.787 1.48-4.344V7.017c0-.88-.513-1.68-1.314-2.046zM11.94 3.717a.75.75 0 0 1 .624 0l5.724 2.618a.75.75 0 0 1 .438.682v5.465c0 1.254-.384 2.457-1.147 3.401c-.782.968-1.813 2.158-2.843 3.1c-.516.472-1.013.864-1.463 1.135c-.464.279-.803.382-1.02.382c-.218 0-.557-.103-1.022-.382c-.45-.27-.947-.663-1.462-1.135c-1.03-.942-2.061-2.132-2.843-3.1c-.763-.944-1.148-2.147-1.148-3.4V7.016a.75.75 0 0 1 .438-.682z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsShieldDollarIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShiftLeftIcon],svg[lineicons-shift-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.078 4.5a.75.75 0 0 0-1.5 0v16a.75.75 0 0 0 1.5 0zm2.5 8.002c0-.216.091-.41.238-.548l4.606-4.61a.75.75 0 0 1 1.061 1.061l-3.344 3.347h10.19a.75.75 0 1 1 0 1.5H10.142l3.34 3.343a.75.75 0 1 1-1.06 1.06L7.85 13.08a.75.75 0 0 1-.272-.578"></svg:path>`,
})
export class LineiconsShiftLeftIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShiftRightIcon],svg[lineicons-shift-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.578 20.5a.75.75 0 0 0 1.5 0v-16a.75.75 0 0 0-1.5 0zm-2.5-8.001c0 .216-.091.41-.237.547l-4.607 4.61a.75.75 0 1 1-1.061-1.06l3.345-3.347H4.328a.75.75 0 0 1 0-1.5h10.186l-3.341-3.343a.75.75 0 0 1 1.061-1.06l4.572 4.575a.75.75 0 0 1 .272.578"></svg:path>`,
})
export class LineiconsShiftRightIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShipIcon],svg[lineicons-ship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.9 42.7v4.5c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-4.8c0-.2 0-.4-.1-.5l-4.1-16.6c-.1-.5 0-.9.2-1.3s.6-.7 1.1-.8L32 19.1l18.4 4.1c.5.1.9.4 1.1.8s.3.9.2 1.3l-4.1 16.6c0 .2-.1.4-.1.5v4.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-4.5l4-16.3c.4-1.6.1-3.3-.8-4.8s-2.3-2.4-3.9-2.8l-1.9-.4V9.1c0-4-3.3-7.3-7.3-7.3H21.8c-4 0-7.3 3.3-7.3 7.3v9.3l-1.9.4c-1.7.4-3.1 1.4-3.9 2.8c-.9 1.4-1.2 3.1-.8 4.8zM19 9.1c0-1.6 1.3-2.8 2.8-2.8h20.4c1.6 0 2.8 1.3 2.8 2.8v8.3l-12.5-2.8c-.3-.1-.7-.1-1 0L19 17.4zm37.2 43.6c-3.1 0-4.7 2-5.8 3.4c-1 1.3-1.4 1.7-2.3 1.7s-1.3-.4-2.3-1.7c-1.1-1.4-2.7-3.4-5.8-3.4s-4.7 2-5.8 3.4c-1 1.3-1.4 1.7-2.3 1.7s-1.3-.4-2.3-1.7c-1.1-1.4-2.7-3.4-5.8-3.4s-4.7 2-5.8 3.4c-1 1.3-1.4 1.7-2.3 1.7c-.8 0-1.3-.4-2.3-1.7c-1.1-1.4-2.7-3.4-5.8-3.4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2c.8 0 1.3.4 2.3 1.7c1.1 1.4 2.7 3.4 5.8 3.4s4.7-2 5.8-3.4c1-1.3 1.4-1.7 2.3-1.7s1.3.4 2.3 1.7c1.1 1.4 2.7 3.4 5.8 3.4s4.7-2 5.8-3.4c1-1.3 1.4-1.7 2.3-1.7s1.3.4 2.3 1.7c1.1 1.4 2.7 3.4 5.8 3.4s4.7-2 5.8-3.4c1-1.3 1.4-1.7 2.3-1.7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2"></svg:path>`,
})
export class LineiconsShipIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShip1Icon],svg[lineicons-ship-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.248 6c-.41 0-.75.34-.75.75v1.64l-1.5.68V6.75c0-1.24 1.01-2.25 2.25-2.25h.75v-.25c0-1.24 1.01-2.25 2.25-2.25h1.5c1.24 0 2.25 1.01 2.25 2.25v.25h.75c1.24 0 2.25 1.01 2.25 2.25v2.32l-1.5-.68V6.75c0-.41-.34-.75-.75-.75zm3-2.5c-.41 0-.75.34-.75.75v.25h3v-.25c0-.41-.34-.75-.75-.75z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.378 17.7c.4.02.79.18 1.09.41c.21.16.46.32.74.47q-.015-.03-.025-.06t-.025-.06l-1.57-5.39a.75.75 0 0 1 .43-.9l5.69-2.43c.19-.08.4-.08.59 0l5.69 2.43c.35.15.53.53.43.9l-1.57 5.39s-.03.08-.05.12c.28-.15.53-.31.74-.47c.3-.23.69-.38 1.09-.41l1.22-4.22c.32-1.09-.23-2.25-1.28-2.7l-5.69-2.43c-.56-.24-1.2-.24-1.77 0l-5.69 2.43c-1.05.45-1.6 1.6-1.28 2.7l1.22 4.22zm16.18 2.62l-2.73-1.26a.75.75 0 0 0-.85.16c-.01.01-1.27 1.27-2.72 1.27c-.19 0-.36-.03-.53-.06c-1.21-.25-2.17-1.21-2.18-1.22a.76.76 0 0 0-.54-.23c-.2 0-.39.08-.54.22c-.01.01-.97.97-2.18 1.22l-.176.024a3 3 0 0 1-.374.036c-1.45 0-2.71-1.26-2.72-1.27a.75.75 0 0 0-.85-.16l-2.73 1.26c-.38.17-.54.62-.37.99c.17.38.62.54 1 .37l2.28-1.05c.62.51 1.89 1.36 3.39 1.36c1.4 0 2.6-.75 3.26-1.26c.66.51 1.86 1.26 3.26 1.26c1.5 0 2.77-.86 3.39-1.36l2.28 1.05c.37.17.82 0 1-.37c.17-.38 0-.82-.37-.99z"></svg:path>`,
})
export class LineiconsShip1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShirt1Icon],svg[lineicons-shirt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.839 2.545A2.25 2.25 0 0 1 7.307 2h1.735a.75.75 0 0 1 .74.626a2.25 2.25 0 0 0 4.437 0a.75.75 0 0 1 .74-.626h1.734c.54 0 1.06.193 1.468.545l4.078 3.512a.75.75 0 0 1 .17.927l-1.875 3.438a.75.75 0 0 1-1.029.293l-.755-.428v9.463A2.25 2.25 0 0 1 16.5 22h-9a2.25 2.25 0 0 1-2.25-2.25v-9.463l-.755.428a.75.75 0 0 1-1.028-.293L1.592 6.984a.75.75 0 0 1 .169-.927zm1.468.955a.75.75 0 0 0-.49.182L3.2 6.798l1.22 2.236l1.211-.687A.75.75 0 0 1 6.75 9v10.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V9a.75.75 0 0 1 1.12-.653l1.212.687l1.22-2.236l-3.62-3.116a.75.75 0 0 0-.489-.182h-1.157a3.75 3.75 0 0 1-7.072 0z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsShirt1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShopifyIcon],svg[lineicons-shopify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.625 4.499c.374-.126.624-.126.624-.126L14.503 22L3.252 19.875S4.75 8.5 4.75 8.125c0-.498 0-.498.624-.749c.054 0 .203-.047.435-.121a21 21 0 0 1 1.314-.38C7.5 5.25 8.75 2 11.374 2c.377 0 .75.123 1 .624h.126c1.125 0 1.75.875 2.125 1.875m-3.542 1.137c.438-.134.891-.272 1.292-.513c0-.75-.126-1.251-.251-1.752c-.624.25-1.373 1-1.75 2.501a9 9 0 0 1 .709-.236m.542-2.761c-.125-.126-.25-.126-.376-.126c-1.752 0-2.874 2.374-3.25 3.878c.25-.063.5-.157.75-.251s.5-.188.751-.25c.376-2 1.376-2.875 2.125-3.251m-1.376 8.122c.75 0 1.499.376 1.499.376l.499-2.248s-.499-.25-1.499-.25c-2.75 0-4 1.749-4 3.624c0 1.26.708 1.814 1.33 2.3c.487.38.92.72.92 1.324c0 .248-.125.749-.749.749c-.874 0-1.874-.875-1.874-.875l-.502 1.75s1 1.25 3 1.25c1.624 0 2.875-1.25 2.875-3.125c0-1.53-1.031-2.265-1.83-2.833c-.507-.36-.92-.654-.92-1.042c0-.25 0-1 1.251-1m2.499-7.626c.125.376.25.877.25 1.501v.125c.189 0 .345-.031.5-.062c.157-.032.313-.063.5-.063c-.25-.752-.626-1.501-1.25-1.501m5.624 2.376c.125 0 .25 0 .25.125c0 .063.538 3.79 1.072 7.498c.528 3.668 1.054 7.316 1.054 7.377l-6 1.25l.75-17.498h.125l1.125 1.122s1.499.126 1.624.126" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsShopifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShoppingBasketIcon],svg[lineicons-shopping-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.4 19.6H54L47.5 3.2C47 2 45.7 1.5 44.6 1.9c-1.2.5-1.7 1.8-1.3 2.9l5.8 14.8H14.9l5.8-14.7c.5-1.2-.1-2.5-1.3-2.9c-1.1-.5-2.4 0-2.9 1.2L10 19.6H7.6c-1.8 0-3.3 1.5-3.3 3.3V31c0 1.7 1.2 3 2.9 3.2L9.7 56c.4 3.6 3.4 6.3 7 6.3h30.6c3.6 0 6.6-2.7 7-6.3l2.5-21.8c1.6-.2 2.9-1.6 2.9-3.2v-8.2c0-1.8-1.5-3.2-3.3-3.2M8.8 24.1h46.4v5.7H8.8zm38.5 33.7H16.7c-1.3 0-2.4-1-2.6-2.3l-2.4-21.2h40.6l-2.4 21.2c-.2 1.3-1.3 2.3-2.6 2.3"></svg:path><svg:path fill="currentColor" d="M21.8 38.8c-1.2 0-2.3 1-2.3 2.3v7.5c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V41c0-1.2-1-2.2-2.3-2.2m20.4 0c-1.2 0-2.3 1-2.3 2.3v7.5c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V41c-.1-1.2-1.1-2.2-2.3-2.2"></svg:path>`,
})
export class LineiconsShoppingBasketIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShortcodeIcon],svg[lineicons-shortcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.8 24.6h7.6c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-7.6c-3.5 0-6.4 2.9-6.4 6.4V28c0 3.5 2.9 6.4 6.4 6.4h3.5c1 0 1.9.8 1.9 1.9V38c0 1-.8 1.9-1.9 1.9h-7.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h7.1c3.5 0 6.4-2.9 6.4-6.4v-1.6c0-3.5-2.8-6.4-6.4-6.4h-3.5c-1 0-1.9-.8-1.9-1.9v-1.6c.1-1.1.9-2 1.9-2m-13.4-4.1c-.8-1-2.2-1.1-3.2-.3L2.9 29.4c-.7.6-1.2 1.5-1.2 2.5q0 1.5 1.2 2.4l11.4 9.2c.4.3.9.5 1.4.5c.7 0 1.3-.3 1.7-.8c.8-1 .6-2.4-.3-3.2L7 31.8l10.1-8.2c1-.7 1.1-2.2.3-3.1m43.7 8.9l-11.4-9.2c-1-.8-2.4-.6-3.2.3c-.8 1-.6 2.4.3 3.2l10.1 8.1L46.8 40c-1 .8-1.1 2.2-.3 3.2c.4.6 1.1.8 1.8.8c.5 0 1-.2 1.4-.5l11.4-9.2c.8-.6 1.2-1.5 1.2-2.5s-.5-1.8-1.2-2.4"></svg:path>`,
})
export class LineiconsShortcodeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShovelIcon],svg[lineicons-shovel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.846 2.22a.75.75 0 0 0-1.06 0a3.86 3.86 0 0 0-.449 4.918l-4.533 4.533l-2.216-2.217a.75.75 0 0 0-1.061 0l-4.674 4.674a4.5 4.5 0 0 0 0 6.364l.191.19a4.5 4.5 0 0 0 6.364 0l4.674-4.673a.75.75 0 0 0 0-1.06l-2.217-2.218l4.548-4.547a3.86 3.86 0 0 0 4.829-.508a.75.75 0 0 0 0-1.061zm0 4.395a2.36 2.36 0 0 1-.444-2.718l3.163 3.162a2.36 2.36 0 0 1-2.719-.444m-8.715 7.73a.75.75 0 1 0 1.06 1.06l1.613-1.613l1.687 1.687l-4.144 4.143a3 3 0 0 1-4.242 0l-.191-.19a3 3 0 0 1 0-4.243l4.143-4.144l1.687 1.686z"></svg:path>`,
})
export class LineiconsShovelIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsShuffleIcon],svg[lineicons-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.97 3.72a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97h-2.754a.75.75 0 0 0-.567.26L12.74 12l3.878 4.49a.75.75 0 0 0 .567.26h2.753l-.97-.97a.75.75 0 1 1 1.061-1.06l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97h-2.754a2.25 2.25 0 0 1-1.702-.78l-3.734-4.322l-3.734 4.323a2.25 2.25 0 0 1-1.703.779H3.25a.75.75 0 0 1 0-1.5h3.063a.75.75 0 0 0 .568-.26L10.76 12L6.881 7.51a.75.75 0 0 0-.568-.26H3.25a.75.75 0 0 1 0-1.5h3.063a2.25 2.25 0 0 1 1.703.78l3.734 4.322l3.734-4.323a2.25 2.25 0 0 1 1.702-.779h2.753l-.97-.97a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class LineiconsShuffleIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSignPostLeftIcon],svg[lineicons-sign-post-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.152 2.596a.75.75 0 0 0-.75.75v1H7.469a2.25 2.25 0 0 0-1.495.568l-2.813 2.5a2.25 2.25 0 0 0 0 3.363l2.813 2.5a2.25 2.25 0 0 0 1.495.569h4.933v8a.75.75 0 0 0 1.5 0v-8h6.25a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-6.25v-1a.75.75 0 0 0-.75-.75m7 9.75H7.469a.75.75 0 0 1-.499-.19l-2.812-2.5a.75.75 0 0 1 0-1.12l2.812-2.5a.75.75 0 0 1 .499-.19h12.683a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75"></svg:path>`,
})
export class LineiconsSignPostLeftIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSignalIcon],svg[lineicons-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 22.4c-3.2 0-5.8 2.6-5.8 5.8c0 2.4 1.5 4.5 3.6 5.4v19.6c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3V33.5c2.1-.9 3.6-2.9 3.6-5.4c-.2-3.1-2.8-5.7-6-5.7m0 4.5c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3m-9.9.6c0-1.9.8-3.7 2.1-5c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0c-2.2 2.2-3.4 5.1-3.4 8.2s1.2 6.1 3.4 8.3c.4.4 1 .7 1.6.7s1.1-.2 1.6-.7c.9-.9.9-2.3 0-3.2c-1.3-1.4-2.1-3.2-2.1-5.1m20.8-8.2c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2c1.4 1.3 2.1 3.1 2.1 5s-.7 3.7-2.1 5.1c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c2.2-2.2 3.4-5.2 3.4-8.3s-1.2-6-3.4-8.2"></svg:path><svg:path fill="currentColor" d="M13.7 27.5c0-3.8 1.5-7.3 4.2-10c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0c-3.6 3.5-5.5 8.2-5.5 13.2s2 9.7 5.5 13.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2c-2.7-2.7-4.2-6.2-4.2-10m35.6-13.2c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2c2.7 2.7 4.2 6.2 4.2 10s-1.5 7.3-4.2 10c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.1-.2 1.6-.7c3.6-3.5 5.5-8.2 5.5-13.2s-2-9.7-5.5-13.2"></svg:path><svg:path fill="currentColor" d="M5.3 27.5c0-5.7 2.2-11 6.3-15c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0C3.5 14.2.8 20.6.8 27.5s2.7 13.3 7.6 18.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2c-4.1-4-6.3-9.3-6.3-15M55.6 9.3c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2c4.1 4 6.3 9.3 6.3 15s-2.2 11-6.3 15c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.1-.2 1.6-.7c4.9-4.9 7.6-11.3 7.6-18.2c.1-6.9-2.7-13.3-7.6-18.2"></svg:path>`,
})
export class LineiconsSignalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSignalAppIcon],svg[lineicons-signal-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.637 2.292l.221.91A8.8 8.8 0 0 0 7.385 4.24l-.474-.803a9.7 9.7 0 0 1 2.726-1.145m4.726 0l-.222.91a8.8 8.8 0 0 1 2.474 1.038l.477-.803a9.7 9.7 0 0 0-2.73-1.145M3.57 6.831c-.512.86-.892 1.793-1.128 2.768l.895.225A9.1 9.1 0 0 1 4.36 7.312zm-.493 5.168q0-.682.1-1.357l-.912-.141a10.2 10.2 0 0 0 0 2.997l.912-.141q-.1-.675-.1-1.358m14.011 8.562l-.473-.803c-.768.47-1.6.821-2.47 1.039l.22.91a9.7 9.7 0 0 0 2.723-1.146m3.834-8.562q0 .684-.1 1.358l.912.14c.148-.993.148-2.003 0-2.996l-.912.14q.1.676.1 1.358m.635 2.4l-.895-.225a9.1 9.1 0 0 1-1.023 2.512l.79.485a10 10 0 0 0 1.128-2.772m-8.22 6.562a8.9 8.9 0 0 1-2.674 0l-.139.927a9.7 9.7 0 0 0 2.951 0zm5.845-3.586a9 9 0 0 1-1.89 1.919l.547.755a10 10 0 0 0 2.086-2.113zm-1.89-12.67a9 9 0 0 1 1.89 1.92l.743-.563a10 10 0 0 0-2.08-2.112zM4.817 6.624a9 9 0 0 1 1.89-1.92l-.553-.755a10 10 0 0 0-2.08 2.112zm15.613.206l-.79.481a9.1 9.1 0 0 1 1.022 2.51l.895-.226A10 10 0 0 0 20.43 6.83m-9.767-3.792a8.9 8.9 0 0 1 2.673 0l.139-.927a9.7 9.7 0 0 0-2.95 0zM5.29 20.297l-1.906.451l.445-1.935l-.899-.214l-.444 1.936a.95.95 0 0 0 .246.876a.92.92 0 0 0 .863.25l1.904-.444zm-2.168-2.534l.899.212l.308-1.342a9.1 9.1 0 0 1-.993-2.459l-.895.225c.2.829.506 1.627.908 2.376zm4.308 2.03l-1.322.313l.21.913l.972-.23a9.7 9.7 0 0 0 2.34.922l.221-.91a8.8 8.8 0 0 1-2.415-1.013zM12 3.876c-1.43 0-2.833.39-4.063 1.128A8.07 8.07 0 0 0 5 8.071a8.23 8.23 0 0 0 .23 8.251l-.77 3.333l3.282-.781a7.89 7.89 0 0 0 7.111.717a8 8 0 0 0 3.04-2.092a8.16 8.16 0 0 0 1.799-3.25a8.25 8.25 0 0 0 .18-3.724a8.2 8.2 0 0 0-1.477-3.413a8 8 0 0 0-2.822-2.385A7.9 7.9 0 0 0 12 3.875"></svg:path>`,
})
export class LineiconsSignalAppIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSignsPost2Icon],svg[lineicons-signs-post-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.152 3.346a.75.75 0 1 0-1.5 0v6h-5.09a1.75 1.75 0 0 0-1.162.442l-1.688 1.5a1.75 1.75 0 0 0 0 2.616l1.688 1.5c.32.284.734.442 1.163.442h5.09v6a.75.75 0 0 0 1.5 0v-11h5.091a1.75 1.75 0 0 0 1.163-.442l1.687-1.5a1.75 1.75 0 0 0 0-2.616l-1.687-1.5a1.75 1.75 0 0 0-1.163-.442h-5.092zm-1.5 7.5v3.5h-5.09a.25.25 0 0 1-.166-.063l-1.687-1.5a.25.25 0 0 1 0-.374l1.687-1.5a.25.25 0 0 1 .166-.063zm1.501-5h5.091a.25.25 0 0 1 .166.063l1.688 1.5a.25.25 0 0 1 0 .374l-1.688 1.5a.25.25 0 0 1-.166.063h-5.09z"></svg:path>`,
})
export class LineiconsSignsPost2Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSketchIcon],svg[lineicons-sketch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.742 8.226l-.742 1h3.645l.258-5.258zm14.903-4.742l-5.193-.516l5.484 5.968zM6.194 10.452l-.452-.871h-3.71l9.097 10.58zm.064-1.226h11.484l-3.29-3.58L12 2.967zm12 .355l-5.387 10.613l9.097-10.581h-3.71zm.194-5.13l-.355-.515l.032.71l.226 4.58H22zm-12.226 1l-.194 3.452l5.516-5.935l-5.193.516zm11.645 4.13H6.129l1.742 3.387L12 21.032z"></svg:path>`,
})
export class LineiconsSketchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSkippingRopeIcon],svg[lineicons-skipping-rope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54.6 42.5h-7c-3.3 0-6.2 2.1-7.2 5.1h-21a6.7 6.7 0 0 1 0-13.4h25.3c6.2 0 11.2-5 11.2-11.2s-5-11.2-11.2-11.2H24.1c0-4.2-3.5-7.6-7.7-7.6h-7c-4.2 0-7.7 3.4-7.7 7.7v1.9c0 4.2 3.4 7.7 7.7 7.7h7c3.3 0 6.2-2.1 7.2-5.1h21a6.7 6.7 0 0 1 0 13.4H19.3c-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2h20.6c0 4.2 3.5 7.6 7.7 7.6h7c4.2 0 7.7-3.4 7.7-7.7v-1.9c-.1-4.3-3.5-7.7-7.7-7.7m-35-28.7c0 1.8-1.4 3.2-3.2 3.2h-7c-1.8 0-3.2-1.4-3.2-3.2V12c0-1.8 1.4-3.2 3.2-3.2h7c1.8 0 3.2 1.4 3.2 3.2zM57.8 52c0 1.8-1.4 3.2-3.2 3.2h-7c-1.8 0-3.2-1.4-3.2-3.2v-1.9c0-1.8 1.4-3.2 3.2-3.2h7c1.8 0 3.2 1.4 3.2 3.2z"></svg:path>`,
})
export class LineiconsSkippingRopeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSkypeIcon],svg[lineicons-skype-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.682 12.08c.032-.451.032-.87.128-1.257c.033-.193 0-.322-.096-.515c-.741-1.257-.87-2.643-.548-4.028c.354-1.58 1.257-2.804 2.74-3.545c1.804-.967 3.64-.967 5.445.032c.129.032.258.097.451.032c2.32-.258 4.447.194 6.413 1.515c2.03 1.353 3.32 3.255 3.867 5.671c.258 1.032.258 2.127.13 3.19a.64.64 0 0 0 .031.42c.742 1.256.967 2.642.548 4.092c-.419 1.58-1.321 2.804-2.771 3.577c-1.805.967-3.674.967-5.446-.032c-.13-.032-.258-.097-.42-.032a9.1 9.1 0 0 1-4.253-.451c-1.805-.58-3.32-1.74-4.447-3.255c-.87-1.257-1.482-2.546-1.644-3.996c-.096-.516-.096-.967-.128-1.418m9.345 5.93c.548-.033 1.031-.13 1.579-.194a4.8 4.8 0 0 0 2.03-.87c1-.806 1.418-1.869 1.257-3.126c-.097-.87-.483-1.546-1.225-2.03c-.354-.258-.805-.451-1.224-.58c-.967-.322-1.966-.548-2.965-.806a4 4 0 0 1-1.418-.547c-.515-.323-.644-.87-.354-1.322c.193-.322.515-.515.805-.644c.548-.226 1.096-.226 1.644-.194c.676.033 1.224.355 1.547.967c.129.258.257.516.45.741c.13.194.258.355.484.452c.58.257 1.354-.033 1.547-.645c.193-.483.032-.967-.226-1.353c-.45-.742-1.095-1.193-1.869-1.45c-.74-.258-1.45-.355-2.255-.355c-1.032 0-2.03.129-3.03.548C7.774 7.117 7.13 7.859 7 9.05c-.097 1.096.354 1.966 1.224 2.546c.548.419 1.193.644 1.87.805c.676.194 1.353.355 2.094.484c.451.129.967.258 1.353.483c.806.483.87 1.547.13 2.127c-.355.322-.806.483-1.322.548a4.5 4.5 0 0 1-1.74-.032c-.645-.194-1.031-.645-1.354-1.193c-.128-.354-.322-.644-.547-.967c-.258-.418-.677-.483-1.128-.418c-.451.096-.774.354-.87.805c-.033.355 0 .741.129 1.031c.354.967 1.03 1.58 1.9 2.03c1.193.645 2.224.71 3.288.71"></svg:path>`,
})
export class LineiconsSkypeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSlackIcon],svg[lineicons-slack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.355 12.548c-1.129 0-2.097.968-2.097 2.097v5.226c0 1.129.968 2.097 2.097 2.097s2.097-.968 2.097-2.097v-5.226c0-1.193-.903-2.097-2.097-2.097M2 14.645c0 1.13.968 2.097 2.097 2.097s2.097-.968 2.097-2.097v-2.097H4.129c-1.161 0-2.129.904-2.129 2.097M9.355 2c-1.129 0-2.097.968-2.097 2.097s.968 2.097 2.097 2.097h2.097V4.097A2.09 2.09 0 0 0 9.355 2m-5.258 9.452h5.258c1.129 0 2.097-.968 2.097-2.097s-.968-2.097-2.097-2.097H4.097C2.967 7.258 2 8.226 2 9.355s.903 2.097 2.097 2.097M19.87 7.258c-1.128 0-2.096.968-2.096 2.097v2.097h2.097c1.129 0 2.096-.968 2.096-2.097a2.113 2.113 0 0 0-2.096-2.097m-7.323-3.161v5.258c0 1.129.968 2.097 2.097 2.097s2.097-.968 2.097-2.097V4.097c0-1.13-.968-2.097-2.097-2.097a2.09 2.09 0 0 0-2.097 2.097m4.194 15.806c0-1.129-.968-2.096-2.097-2.096h-2.097v2.096c0 1.13.968 2.097 2.097 2.097s2.097-.968 2.097-2.097m3.161-7.355h-5.258c-1.129 0-2.097.968-2.097 2.097s.968 2.097 2.097 2.097h5.258c1.13 0 2.097-.968 2.097-2.097a2.09 2.09 0 0 0-2.097-2.097"></svg:path>`,
})
export class LineiconsSlackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSlackLineIcon],svg[lineicons-slack-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.3 15.5H21c-3.3 0-6.1-2.2-6.8-5.2c-.5-2.3.2-4.7 1.8-6.4c1.7-1.7 4-2.3 6.3-1.8c3 .7 5.2 3.6 5.2 6.9v4.3c0 1.1-1 2.2-2.2 2.2m-6.7-6.3c.2 1 1.3 1.7 2.5 1.7h2v-2c0-1.2-.7-2.3-1.7-2.5c-.8-.2-1.6 0-2.1.6c-.7.6-.9 1.4-.7 2.2m3 24.1H11.1c-4.7 0-8.5-3.8-8.5-8.5s3.8-8.5 8.5-8.5h10.4c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.4 8.5M11.1 20.8c-2.2 0-4 1.8-4 4s1.8 4 4 4h10.4c2.2 0 4-1.8 4-4s-1.8-4-4-4zM39 29.4c-4.6 0-8.4-3.8-8.4-8.6V10.3c0-4.7 3.8-8.6 8.4-8.6s8.4 3.8 8.4 8.6v10.5c0 4.8-3.7 8.6-8.4 8.6m0-23.1c-2.2 0-3.9 1.8-3.9 4.1v10.5c0 2.2 1.8 4.1 3.9 4.1c2.2 0 3.9-1.8 3.9-4.1V10.3c0-2.2-1.7-4-3.9-4m13.1 40.5H44c-4.6 0-8.4-3.7-8.4-8.3s3.8-8.3 8.4-8.3h8.1c4.6 0 8.4 3.7 8.4 8.3s-3.8 8.3-8.4 8.3M44 34.7c-2.1 0-3.9 1.7-3.9 3.8s1.7 3.8 3.9 3.8h8.1c2.1 0 3.9-1.7 3.9-3.8s-1.7-3.8-3.9-3.8zM26.5 60.8c-4.4 0-8-3.7-8-8.3v-8.3c0-4.6 3.6-8.3 8-8.3s8 3.7 8 8.3v8.3c0 4.6-3.6 8.3-8 8.3m0-20.3c-1.9 0-3.5 1.7-3.5 3.8v8.3c0 2.1 1.6 3.8 3.5 3.8s3.5-1.7 3.5-3.8v-8.3c0-2.1-1.5-3.8-3.5-3.8m28.1-12.4h-4.1c-1.2 0-2.3-1-2.3-2.3v-4.1c0-3.2 2.1-6 5-6.7c2.2-.5 4.5.1 6.1 1.7s2.3 3.9 1.8 6.2c-.6 3.1-3.4 5.2-6.5 5.2m-1.8-4.5h1.8c1.1 0 2-.7 2.2-1.6c.2-.8 0-1.5-.6-2c-.5-.5-1.2-.7-1.9-.5c-.9.2-1.5 1.2-1.5 2.3zM9.7 48.4c-1.7 0-3.4-.7-4.6-1.9c-1.6-1.6-2.3-3.9-1.8-6.2c.7-2.9 3.4-5.1 6.6-5.1H14c1.2 0 2.3 1 2.3 2.3v4.1c0 3.2-2.1 6-5 6.7c-.6 0-1.1.1-1.6.1m.2-8.7c-1.1 0-2 .7-2.2 1.6c-.2.8 0 1.5.6 2c.5.5 1.2.7 1.9.5c.9-.2 1.5-1.2 1.5-2.3v-1.8zm33.4 22.5c-.5 0-1-.1-1.5-.2c-2.9-.7-5-3.5-5-6.7v-4.1c0-1.2 1-2.3 2.3-2.3h4.1c3.2 0 5.9 2.1 6.6 5.1c.5 2.3-.1 4.6-1.8 6.2c-1.3 1.4-3 2-4.7 2m-2-8.6v1.8c0 1.1.7 2.1 1.5 2.3c.7.2 1.4 0 1.9-.5s.7-1.3.6-2c-.2-.9-1.2-1.6-2.2-1.6z"></svg:path>`,
})
export class LineiconsSlackLineIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSliceIcon],svg[lineicons-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m61.3 51.9l-12-12L18.6 9.3C17.1 7.8 15.1 7 13 7s-4.1.8-5.6 2.3l-3.3 3.3C1 15.7 1 20.8 4.1 23.9l30.7 30.7c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7l1.5-1.5l3.5 3.3c.4.4 1 .6 1.5.6h14.8c1.3 0 2.4-.8 2.8-2c.4-1.1 0-2.3-.8-3.1m-54-36.1l3.3-3.3c.6-.6 1.5-1 2.4-1s1.8.4 2.4 1l2.3 2.3L9.5 23l-2.3-2.3c-1.3-1.3-1.3-3.5.1-4.9m5.4 10.4l2.5-2.5l7 7c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-7-7l2.5-2.5l23.7 23.7l-8.2 8.2zm32.7 26.3l-2.7-2.6l5.1-5.1l7.7 7.7z"></svg:path>`,
})
export class LineiconsSliceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSlice2Icon],svg[lineicons-slice-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.802 4.221a2.166 2.166 0 0 0-3.062 0L2.24 19.72l.001.001A.75.75 0 0 0 2.773 21h8.125a2.25 2.25 0 0 0 2.25-2.25v-3.812l7.654-7.654a2.166 2.166 0 0 0 0-3.063m-7.654 8.596v-1.883L18.8 5.282a.665.665 0 1 1 .941.941zM4.584 19.5l7.064-7.064v6.314a.75.75 0 0 1-.75.75z"></svg:path>`,
})
export class LineiconsSlice2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSlidersHorizontalSquare2Icon],svg[lineicons-sliders-horizontal-square-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.313 7a.75.75 0 0 0-1.5 0v1.25h-5.5a.75.75 0 1 0 0 1.5h5.5V11a.75.75 0 0 0 1.5 0zm3 1.25h-1.5v1.5h1.5a.75.75 0 0 0 0-1.5m-7.753 4a.75.75 0 0 0-.75.75v1.25H7.313a.75.75 0 0 0 0 1.5h1.499V17a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-.75-.75m2.247 2h5.504a.75.75 0 0 1 0 1.5h-5.504z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.563 5.5a2.25 2.25 0 0 1 2.25-2.25h13a2.25 2.25 0 0 1 2.25 2.25v13a2.25 2.25 0 0 1-2.25 2.25h-13a2.25 2.25 0 0 1-2.25-2.25zm2.25-.75a.75.75 0 0 0-.75.75v13c0 .414.335.75.75.75h13a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsSlidersHorizontalSquare2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSlideshareIcon],svg[lineicons-slideshare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.647 11.402a.46.46 0 0 0-.452-.032c-.13.032-.226.13-.42.226v-7.56c0-.485-.097-.937-.453-1.357c-.226-.356-.646-.55-1.033-.647c-.033 0-.033-.032-.098-.032H4.75a3 3 0 0 0-.679.29c-.517.324-.775.776-.872 1.358v7.98c-.032-.032-.097-.032-.194-.097c-.097-.064-.226-.129-.323-.129c-.258-.097-.485.097-.452.42c.032.194.097.356.194.453c.452.549 1.033 1.034 1.68 1.454c.71.452 1.454.872 2.23 1.227c.031.033.031.033.096.033c-.032.258-.13.549-.194.807c-.13.711-.258 1.454-.194 2.165a4.67 4.67 0 0 0 .873 2.553c.549.775 1.324 1.26 2.261 1.39c.033 0 .097.031.13.031h.581c.194-.032.356-.097.55-.129c.71-.226 1.26-.937 1.26-1.712c.032-1.26.032-2.553.032-3.748v-.227c.194.033.323.098.452.13c.033.032.033.097.033.129c0 1.034 0 2.133.032 3.231c0 .355 0 .679.097 1.034c.226.775.807 1.163 1.55 1.325c.033 0 .098.032.13.032h.582c.355-.097.71-.194 1.033-.355c.808-.356 1.357-1.034 1.713-1.81c.452-1.001.55-2.035.42-3.134c-.032-.485-.194-1.001-.259-1.486c0-.032-.032-.097-.032-.13c.259-.129.55-.226.808-.355c.937-.452 1.906-1.034 2.682-1.712c.226-.226.452-.55.678-.776c.032-.032.032-.129.032-.194c.162-.387.097-.549-.032-.646m-1.938.905c-.776.355-1.487.678-2.262.872c-1.131.226-2.262.323-3.393.226a2.7 2.7 0 0 0-.872.033c-.453.032-.776.323-.808.808c0 .032-.032.032-.032.096c-.259-.226-.55-.452-.808-.678c-.226-.194-.452-.226-.71-.226c-.647 0-1.326.032-1.94.032a10.3 10.3 0 0 1-4.361-1.034c-.033-.032-.097-.097-.097-.194c0-2.552 0-5.137.032-7.657c0-.259.032-.485.13-.776c.096-.42.42-.581.775-.678c.226-.032.484-.032.71-.032h12.15c.322 0 .645 0 .936.129c.42.194.582.484.679.904c.032.227.032.55.032.776v7.205c0 .065-.032.097-.162.194"></svg:path><svg:path fill="currentColor" d="M7.431 8.947c-.485.646-.582 1.389-.226 2.132c.452.905 1.228 1.325 2.132 1.357a3.5 3.5 0 0 0 1.551-.452c1.131-.776 1.228-2.391.226-3.36c-1.098-1.034-2.843-.905-3.683.323m9.046-.485c-1.131-.808-2.682-.582-3.458.452c-.484.679-.581 1.454-.226 2.23c.453.904 1.228 1.26 2.133 1.324c.678-.032 1.26-.226 1.712-.646c1.034-.937.937-2.617-.162-3.36"></svg:path>`,
})
export class LineiconsSlideshareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSlimIcon],svg[lineicons-slim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.9 26.6c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l1.4 1.4H3c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h5.1L6.7 37c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7l5.2-5.2c.9-.9.9-2.3 0-3.2zM61 31.2h-5.1l1.4-1.4c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0l-5.2 5.2c-.9.9-.9 2.3 0 3.2l5.2 5.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-1.4-1.4H61c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2m-16.3-5c-1.2-5.4 1.8-14.2 1.8-14.3c.4-1.2-.2-2.5-1.4-2.9s-2.5.2-2.9 1.4c-.1.4-3.4 10.1-2 16.7c.2.8.4 1.6.6 2.3c-.8.1-1.6.2-2.5.3c-2.1.3-4.2.6-6.3.6c-2.2 0-4.4-.3-6.5-.6c-.9-.1-1.8-.3-2.7-.4c.2-.7.4-1.5.5-2.3c1.5-6.6-1.8-16.3-2-16.7c-.3-1.1-1.5-1.7-2.7-1.3s-1.8 1.7-1.4 2.9c0 .1 3 8.9 1.8 14.3c-.6 2.6-1.2 4.7-1.8 6.6c-.8 2.5-1.4 4.6-1.4 6.5c0 3 2.7 12.4 3.3 14.3c.3 1 1.2 1.6 2.2 1.6c.2 0 .4 0 .6-.1c1.2-.4 1.9-1.6 1.5-2.8c-.7-2.5-1.8-6.2-2.4-9.1c.6-.2 1.9-.5 4.2-.5c2.1 0 4.1 1.1 4.6 1.7v7c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-7.1c.1-.4 1.4-1.5 3.4-1.5c2.5 0 4.2.3 5 .5c-.7 2.9-1.7 6.6-2.4 9.1c-.3 1.2.3 2.4 1.5 2.8c.2.1.4.1.6.1c1 0 1.9-.6 2.2-1.6c.5-1.9 3.3-11.3 3.3-14.3c0-1.9-.6-4-1.4-6.5c-.5-2-1.2-4.2-1.7-6.7m-12.9 14c-1.8-1.2-4.3-2-6.6-2c-1.9 0-3.5.2-4.8.5c.1-1.2.6-2.7 1.2-4.6c0-.1.1-.2.1-.3c1 .1 2.1.3 3.3.4c2.2.3 4.6.7 7.1.7s4.9-.4 7-.7c1.1-.2 2.1-.3 3-.4c0 .1.1.2.1.2c.6 1.9 1 3.4 1.2 4.6c-2.1-.5-4.5-.5-5.7-.5c-2.3.1-4.5.9-5.9 2.1"></svg:path><svg:path fill="currentColor" d="M32 27.4c2.6.1 3-4 .4-4.5c-3.1-.6-3.6 4.5-.4 4.5"></svg:path>`,
})
export class LineiconsSlimIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSmileIcon],svg[lineicons-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3s31.3-14 31.3-31.3S49.2.8 32 .8m0 58c-14.8 0-26.8-12-26.8-26.8S17.3 5.3 32 5.3s26.8 12 26.8 26.8s-12 26.7-26.8 26.7"></svg:path><svg:circle cx="20" cy="22.8" r="4" fill="currentColor"></svg:circle><svg:circle cx="44" cy="22.8" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M43.6 40.6c-3.2 2.9-7.3 4.6-11.6 4.6s-8.5-1.6-11.6-4.6c-.9-.8-2.3-.8-3.2.1c-.8.9-.8 2.3.1 3.2c4 3.7 9.2 5.8 14.7 5.8s10.7-2 14.7-5.8c.9-.8 1-2.3.1-3.2s-2.3-.9-3.2-.1"></svg:path>`,
})
export class LineiconsSmileIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSnapchatIcon],svg[lineicons-snapchat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.929 16.557c-.14-.378-.404-.58-.706-.748a2 2 0 0 0-.153-.08q-.136-.068-.273-.139c-.94-.498-1.674-1.127-2.183-1.872a4.3 4.3 0 0 1-.374-.664c-.044-.124-.042-.195-.01-.26a.4.4 0 0 1 .12-.124c.161-.107.327-.215.44-.288c.202-.13.361-.234.464-.307c.386-.27.656-.557.824-.877a1.75 1.75 0 0 0 .087-1.45c-.256-.673-.891-1.09-1.66-1.09a2.3 2.3 0 0 0-.61.08c.007-.46-.003-.945-.044-1.422c-.145-1.68-.733-2.56-1.346-3.263a5.4 5.4 0 0 0-1.37-1.101C14.206 2.42 13.15 2.15 12 2.15s-2.2.27-3.132.802c-.515.29-.978.662-1.371 1.103c-.614.702-1.202 1.584-1.347 3.263c-.04.477-.051.965-.044 1.423l-.126-.03a2.3 2.3 0 0 0-.483-.051c-.77 0-1.406.417-1.66 1.09a1.75 1.75 0 0 0 .084 1.452c.169.32.439.607.824.877c.103.071.262.174.464.306c.109.07.268.174.423.277q.083.054.136.136c.033.067.034.14-.014.272a4 4 0 0 1-.369.65c-.498.729-1.21 1.346-2.12 1.84c-.481.256-.982.427-1.194 1.001c-.16.434-.055.928.35 1.344q.226.234.511.387a5.5 5.5 0 0 0 1.25.5q.136.035.253.113c.148.13.127.324.324.609c.098.147.224.275.37.376c.412.285.876.303 1.368.322c.444.017.947.036 1.522.226c.238.079.486.23.772.409c.689.423 1.631 1.002 3.208 1.002s2.526-.582 3.22-1.007c.284-.175.53-.325.761-.402c.575-.19 1.078-.21 1.522-.226c.492-.019.956-.037 1.369-.322c.172-.12.316-.277.42-.46c.142-.24.139-.409.272-.526a.8.8 0 0 1 .237-.108a5.6 5.6 0 0 0 1.267-.505q.304-.163.537-.42l.005-.007c.38-.406.475-.886.32-1.309m-1.402.754c-.855.472-1.423.421-1.865.706c-.376.241-.154.763-.427.95c-.335.232-1.325-.016-2.605.407c-1.056.349-1.73 1.353-3.629 1.353c-1.898 0-2.556-1.002-3.63-1.356c-1.277-.422-2.27-.174-2.605-.406c-.273-.188-.051-.71-.426-.95c-.443-.285-1.011-.235-1.866-.704c-.544-.3-.235-.487-.054-.575c3.097-1.5 3.591-3.814 3.613-3.986c.027-.207.056-.371-.173-.583c-.22-.204-1.203-.812-1.475-1.002c-.45-.314-.649-.629-.503-1.015c.102-.267.352-.368.613-.368q.125 0 .246.028c.495.107.975.355 1.253.422a.4.4 0 0 0 .102.014c.148 0 .2-.075.19-.245c-.032-.54-.108-1.596-.023-2.581c.117-1.356.554-2.028 1.073-2.623c.25-.285 1.421-1.523 3.662-1.523s3.415 1.233 3.665 1.517c.52.594.957 1.266 1.073 2.623c.085.985.011 2.04-.023 2.581c-.012.179.042.244.19.244a.4.4 0 0 0 .102-.013c.278-.067.758-.315 1.253-.422a1 1 0 0 1 .246-.028c.263 0 .51.102.613.368c.146.386-.051.7-.502 1.015c-.273.19-1.254.797-1.475 1.002c-.23.212-.2.375-.173.583c.022.175.515 2.49 3.613 3.986c.182.091.491.277-.053.58"></svg:path>`,
})
export class LineiconsSnapchatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSortAlphaAscIcon],svg[lineicons-sort-alpha-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28.7 48.2l-6.4 6.3V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v50.6l-6.4-6.3c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l9.5 9.5c.6.6 1.4.9 2.3.9s1.6-.3 2.3-.9l9.5-9.5c.9-.9.9-2.3 0-3.2c-.7-.9-2.2-.9-3-.1m23.5 9.6h-4l4.7-6.5c.5-.7.6-1.6.2-2.3c-.4-.8-1.2-1.2-2-1.2h-7.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h3.4L42 58.7c-.5.7-.6 1.6-.2 2.3c.4.8 1.2 1.2 2 1.2h8.4c1.2 0 2.3-1 2.3-2.3s-1.1-2.1-2.3-2.1m3.9-42.1L49.8 3c-.4-.8-1.2-1.2-2-1.2s-1.6.5-2 1.2l-6.4 12.7c-.6 1.1-.1 2.5 1 3c1.1.6 2.5.1 3-1l.6-1.3h7.4l.6 1.3c.4.8 1.2 1.2 2 1.2c.3 0 .7-.1 1-.2c1.3-.5 1.7-1.9 1.1-3m-9.8-3.8L47.8 9l1.5 2.9z"></svg:path>`,
})
export class LineiconsSortAlphaAscIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSortAlphabeticalIcon],svg[lineicons-sort-alphabetical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.132 3.515a.75.75 0 0 0-1.268.204l-2.78 6.884a.75.75 0 0 0 1.39.562l.467-1.157h3.238l.467 1.157a.75.75 0 1 0 1.39-.562l-2.78-6.882a.8.8 0 0 0-.124-.206m.44 4.993h-2.024l1.012-2.506z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.972 3.47a.75.75 0 0 1 1.06 0l3.002 3a.75.75 0 0 1-1.06 1.061l-1.722-1.72v12.38l1.722-1.72a.75.75 0 0 1 1.06 1.06l-3.002 3a.75.75 0 0 1-1.06 0l-3.002-3a.75.75 0 1 1 1.06-1.06l1.722 1.72V5.811L5.03 7.53a.75.75 0 1 1-1.06-1.06zm7.648 11.402a.75.75 0 0 1 0-1.5h5.88a.75.75 0 0 1 .53 1.28l-4.599 4.599H20.5a.75.75 0 0 1 0 1.5h-5.88a.75.75 0 0 1-.53-1.28l4.599-4.6z"></svg:path>`,
})
export class LineiconsSortAlphabeticalIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSortAmountAscIcon],svg[lineicons-sort-amount-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.7 43.2l-6.3 6.3V9.1c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v40.4l-6.3-6.3c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l9.5 9.5c.6.6 1.4.9 2.3.9c.8 0 1.6-.3 2.3-.9l9.5-9.5c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0m12.1-31.9h4.9c1.2 0 2.2-1 2.2-2.3c0-1.2-1-2.2-2.3-2.2h-4.9c-1.2 0-2.2 1-2.2 2.3c0 1.2 1 2.2 2.3 2.2m0 15.3h12.5c1.2 0 2.2-1 2.2-2.3s-1-2.3-2.3-2.2H34.7c-1.2 0-2.2 1-2.2 2.3c0 1.2 1 2.2 2.3 2.2m0 15.3h17.6c1.2 0 2.2-1 2.2-2.3c0-1.2-1-2.2-2.3-2.2H34.7c-1.2 0-2.2 1-2.2 2.3c0 1.2 1 2.2 2.3 2.2M60 52.6H34.8c-1.2 0-2.2 1-2.2 2.3c0 1.2 1 2.2 2.3 2.2h25.2c1.2 0 2.2-1 2.2-2.3c-.1-1.2-1.1-2.2-2.3-2.2"></svg:path>`,
})
export class LineiconsSortAmountAscIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSortAmountDscIcon],svg[lineicons-sort-amount-dsc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.7 43.2l-6.3 6.3V9.1c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v40.4l-6.3-6.3c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l9.5 9.5c.6.6 1.4.9 2.3.9c.8 0 1.6-.3 2.3-.9l9.5-9.5c.9-.9.9-2.3 0-3.2c-.9-.8-2.3-.8-3.2 0m17 9.5h-4.9c-1.2 0-2.2 1-2.3 2.2c0 1.2 1 2.3 2.2 2.3h4.9c1.2 0 2.2-1 2.3-2.2c0-1.3-1-2.3-2.2-2.3m7.6-15.3H34.8c-1.2 0-2.2 1-2.3 2.2c0 1.2 1 2.3 2.2 2.3h12.5c1.2 0 2.2-1 2.3-2.2c0-1.3-1-2.3-2.2-2.3m5.1-15.3H34.8c-1.2 0-2.3 1-2.3 2.2s1 2.3 2.2 2.3h17.6c1.2 0 2.2-1 2.3-2.2c0-1.3-1-2.3-2.2-2.3M60 6.9H34.8c-1.2 0-2.2 1-2.3 2.2c0 1.2 1 2.3 2.2 2.3h25.2c1.2 0 2.2-1 2.3-2.2c.1-1.3-1-2.3-2.2-2.3"></svg:path>`,
})
export class LineiconsSortAmountDscIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSortHighToLowIcon],svg[lineicons-sort-high-to-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.504 3.25a.75.75 0 0 0 0 1.5H20.5a.75.75 0 0 0 0-1.5zm0 12.167a.75.75 0 0 1 0-1.5H17.5a.75.75 0 0 1 0 1.5zM16 20.75h-2.496a.75.75 0 0 1 0-1.5H16a.75.75 0 0 1 0 1.5m-2.496-10.667H19a.75.75 0 0 0 0-1.5h-5.496a.75.75 0 0 0 0 1.5M8.252 18.19l1.722-1.72a.75.75 0 0 1 1.06 1.06l-3.002 3a.75.75 0 0 1-1.06 0l-3.002-3a.75.75 0 0 1 1.06-1.06l1.722 1.72V4.5a.75.75 0 1 1 1.5 0z"></svg:path>`,
})
export class LineiconsSortHighToLowIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSoundcloudIcon],svg[lineicons-soundcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.227 11.495c-.042 0-.075.032-.08.078L2 12.683l.146 1.093c.006.046.039.078.08.078c.04 0 .074-.032.08-.078l.174-1.092l-.174-1.111c-.006-.046-.04-.078-.08-.078m.822-.607c-.007-.048-.041-.081-.083-.081s-.078.034-.083.08l-.197 1.797l.197 1.756c.005.047.04.081.083.081c.042 0 .076-.033.083-.08l.223-1.757zM6.147 9.23a.154.154 0 0 0-.151.15l-.157 3.304l.157 2.136c.004.083.07.15.151.15s.147-.067.152-.15l.177-2.136l-.177-3.304a.155.155 0 0 0-.152-.15m-1.603 1.148a.12.12 0 0 0-.118.116l-.176 2.19l.176 2.118a.12.12 0 0 0 .118.115c.06 0 .111-.05.117-.115l.2-2.119l-.2-2.19c-.006-.065-.056-.115-.117-.115m3.233 4.591c.1 0 .181-.08.185-.184l.154-2.1l-.154-4.4a.19.19 0 0 0-.185-.183a.186.186 0 0 0-.186.184l-.136 4.4l.136 2.1a.187.187 0 0 0 .186.183m3.336.01a.257.257 0 0 0 .254-.253l.107-2.04l-.107-5.08a.257.257 0 0 0-.254-.253a.256.256 0 0 0-.254.253l-.096 5.079l.096 2.043a.256.256 0 0 0 .254.25m-1.681-.008c.12 0 .216-.096.22-.219v.002l.13-2.068l-.13-4.432a.22.22 0 0 0-.22-.218a.22.22 0 0 0-.22.218l-.116 4.432l.116 2.068a.22.22 0 0 0 .22.217m-4.09-.02a.137.137 0 0 0 .134-.132l.19-2.136l-.19-2.031a.137.137 0 0 0-.134-.132a.136.136 0 0 0-.134.132l-.166 2.031l.166 2.136a.136.136 0 0 0 .134.133m-1.59-.116c.052 0 .094-.042.1-.098l.212-2.054l-.212-2.131c-.006-.057-.048-.098-.1-.098s-.095.041-.1.098l-.187 2.131l.186 2.053c.005.057.048.099.1.099m6.517-6.654a.237.237 0 0 0-.237.236l-.106 4.27l.106 2.054a.237.237 0 0 0 .474-.002v.002l.118-2.055l-.118-4.27a.237.237 0 0 0-.237-.235m-3.31 6.792a.17.17 0 0 0 .168-.167l.165-2.121l-.165-4.06a.17.17 0 0 0-.168-.167a.17.17 0 0 0-.169.167l-.146 4.06l.146 2.122a.17.17 0 0 0 .169.166m1.844-.201l.142-2.086l-.142-4.548a.204.204 0 0 0-.202-.202c-.11 0-.2.089-.203.202l-.126 4.547l.127 2.088c.003.112.092.2.202.2s.199-.088.202-.201m10.737-4.708a2.5 2.5 0 0 0-.951.191a4.34 4.34 0 0 0-5.897-3.662c-.185.072-.235.146-.236.29v7.807c.001.15.118.276.265.29l6.819.005a2.46 2.46 0 0 0 0-4.92m-7.587-3.189a.274.274 0 0 0-.272.27l-.11 5.542l.11 2.012a.273.273 0 0 0 .272.268a.273.273 0 0 0 .27-.27v.002l.121-2.012l-.12-5.542a.274.274 0 0 0-.271-.27M3.987 16.55c-.291-.069-.37-.105-.37-.22c0-.082.065-.166.262-.166c.168 0 .3.068.417.189l.265-.257a.88.88 0 0 0-.669-.289c-.362 0-.655.205-.655.538c0 .362.236.47.574.548c.346.079.409.131.409.25c0 .138-.103.199-.32.199a.6.6 0 0 1-.47-.21l-.264.236c.139.204.407.333.713.333c.501 0 .721-.236.721-.585c0-.399-.322-.498-.613-.566m1.689-.743c-.5 0-.797.389-.797.947c0 .559.296.947.797.947c.5 0 .797-.388.797-.947s-.296-.947-.797-.947m0 1.53c-.296 0-.42-.255-.42-.583s.124-.582.42-.582s.42.255.42.582c0 .328-.124.582-.42.582m2.279-.47c0 .294-.145.475-.378.475s-.375-.186-.375-.48v-1.026h-.367v1.031c0 .535.3.834.742.834c.467 0 .745-.307.745-.839v-1.026h-.367zm1.95-.254c0 .102.006.333.006.4c-.024-.047-.084-.138-.128-.207l-.651-.97H8.78v1.836h.362v-.808c0-.102-.006-.333-.006-.401c.024.047.085.139.129.207l.674 1.002h.328v-1.836h-.362zm1.409-.777h-.574v1.836h.547c.473 0 .94-.273.94-.918c0-.671-.389-.918-.913-.918m-.027 1.48h-.18v-1.123h.194c.388 0 .548.186.548.561c0 .336-.176.561-.562.561m2.075-1.144a.35.35 0 0 1 .336.2l.34-.158c-.115-.238-.325-.406-.67-.406c-.48 0-.816.388-.816.946c0 .58.322.947.802.947c.333 0 .554-.155.68-.415l-.31-.183c-.097.162-.194.233-.36.233c-.275 0-.435-.252-.435-.582c0-.34.158-.582.433-.582m1.362-.336h-.367v1.836h1.103v-.362h-.736zm1.703-.029c-.5 0-.797.389-.797.947c0 .559.296.947.797.947s.797-.388.797-.947s-.296-.947-.797-.947m0 1.53c-.296 0-.42-.255-.42-.583s.124-.582.42-.582s.42.255.42.582c0 .328-.124.582-.42.582m2.279-.47c0 .294-.144.475-.377.475c-.234 0-.376-.186-.376-.48v-1.026h-.367v1.031c0 .535.3.834.743.834c.466 0 .744-.307.744-.839v-1.026h-.367zm1.4-1.03h-.574v1.835h.548c.472 0 .939-.273.939-.918c0-.671-.388-.918-.913-.918m-.026 1.479h-.18v-1.123h.194c.387 0 .547.186.547.561c0 .336-.175.561-.56.561"></svg:path>`,
})
export class LineiconsSoundcloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSoundcloudOriginalIcon],svg[lineicons-soundcloud-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.702 30.104c-.13 0-.232.1-.249.243L1 33.79l.453 3.384c.017.143.12.242.25.242c.124 0 .227-.099.246-.24l.538-3.386l-.538-3.445c-.019-.142-.122-.242-.247-.242m2.55-1.882c-.021-.148-.127-.25-.258-.25c-.132 0-.24.106-.258.25l-.61 5.569l.61 5.444c.017.146.126.252.258.252c.13 0 .236-.103.257-.25l.694-5.446zm9.604-5.136a.48.48 0 0 0-.469.465l-.485 10.244l.485 6.62a.48.48 0 0 0 .47.463a.48.48 0 0 0 .469-.464v.002l.548-6.62l-.549-10.245a.48.48 0 0 0-.469-.465m-4.97 3.56a.373.373 0 0 0-.365.359l-.547 6.787l.547 6.567a.37.37 0 0 0 .364.357c.19 0 .347-.153.364-.357l.621-6.567l-.621-6.789a.374.374 0 0 0-.364-.356m10.022 14.232c.31 0 .562-.25.574-.57l.476-6.51l-.475-13.638a.58.58 0 0 0-.575-.57a.58.58 0 0 0-.575.57l-.422 13.638l.422 6.511a.58.58 0 0 0 .575.569m10.341.03a.796.796 0 0 0 .787-.783l.332-6.322l-.332-15.752a.796.796 0 0 0-.787-.784a.795.795 0 0 0-.787.784l-.296 15.746l.296 6.332c.007.428.36.78.787.78m-5.21-.024c.371 0 .67-.298.68-.678v.004l.405-6.41l-.405-13.738a.685.685 0 0 0-.68-.677a.68.68 0 0 0-.682.677l-.36 13.739l.36 6.409a.68.68 0 0 0 .682.674m-12.678-.06c.22 0 .4-.177.416-.41l.586-6.622l-.586-6.299a.423.423 0 0 0-.416-.408a.42.42 0 0 0-.417.411l-.515 6.296l.515 6.622c.015.233.193.41.417.41m-4.93-.365c.16 0 .292-.127.31-.303l.658-6.367l-.657-6.606c-.02-.177-.15-.304-.311-.304c-.164 0-.295.128-.311.304L5.54 33.79l.579 6.365c.016.177.147.305.31.305m20.204-20.627a.735.735 0 0 0-.735.731L25.57 33.8l.328 6.37a.734.734 0 0 0 1.469-.005v.005l.368-6.37l-.368-13.237a.735.735 0 0 0-.734-.73M16.372 40.89a.53.53 0 0 0 .523-.517l.512-6.577l-.512-12.587a.53.53 0 0 0-.523-.518a.53.53 0 0 0-.522.518l-.454 12.587l.454 6.58a.53.53 0 0 0 .522.514m5.719-.624l.44-6.468l-.44-14.098a.633.633 0 0 0-.628-.625a.63.63 0 0 0-.628.625l-.39 14.097l.39 6.471a.63.63 0 0 0 .628.621a.633.633 0 0 0 .628-.623m33.284-14.595a7.6 7.6 0 0 0-2.95.593C51.818 19.392 46.055 14 39.025 14a13.6 13.6 0 0 0-4.879.912c-.575.222-.729.451-.734.896v24.204a.923.923 0 0 0 .823.902c.02.002 21.003.012 21.14.012A7.627 7.627 0 0 0 63 33.3a7.627 7.627 0 0 0-7.625-7.627m-23.522-9.885a.85.85 0 0 0-.84.838l-.345 17.18l.345 6.234a.845.845 0 0 0 .84.831a.85.85 0 0 0 .84-.837v.007l.373-6.236l-.374-17.18a.85.85 0 0 0-.84-.837M7.158 45.774c-.902-.212-1.146-.325-1.146-.682c0-.252.204-.513.813-.513c.52 0 .927.211 1.293.585l.82-.796c-.536-.56-1.186-.894-2.072-.894c-1.122 0-2.033.634-2.033 1.667c0 1.122.733 1.455 1.78 1.698c1.073.244 1.269.407 1.269.773c0 .43-.318.618-.992.618c-.544 0-1.056-.187-1.455-.651l-.821.732c.43.634 1.26 1.032 2.21 1.032c1.555 0 2.237-.731 2.237-1.812c0-1.236-1-1.545-1.903-1.757m5.237-2.3c-1.552 0-2.47 1.203-2.47 2.935s.918 2.933 2.47 2.933s2.472-1.202 2.472-2.933c0-1.732-.92-2.935-2.472-2.935m0 4.74c-.918 0-1.3-.79-1.3-1.805c0-1.016.382-1.805 1.3-1.805c.92 0 1.301.789 1.301 1.805s-.381 1.805-1.3 1.805m7.065-1.455c0 .91-.448 1.471-1.17 1.471c-.724 0-1.163-.577-1.163-1.487v-3.18h-1.139v3.196c0 1.657.928 2.584 2.301 2.584c1.447 0 2.31-.951 2.31-2.6v-3.18h-1.14zm6.048-.79c0 .318.016 1.033.016 1.244c-.073-.146-.26-.43-.398-.642l-2.017-3.009h-1.09v5.692h1.122v-2.505c0-.317-.016-1.032-.016-1.243c.073.146.26.43.398.643l2.09 3.105h1.016v-5.692h-1.122zm4.365-2.406h-1.78v5.691h1.698c1.464 0 2.911-.846 2.911-2.845c0-2.082-1.203-2.846-2.829-2.846m-.082 4.586h-.56v-3.48h.602c1.203 0 1.7.577 1.7 1.74c0 1.04-.546 1.74-1.742 1.74m6.431-3.545c.512 0 .838.228 1.041.618l1.057-.488c-.358-.74-1.009-1.26-2.082-1.26c-1.486 0-2.527 1.203-2.527 2.935c0 1.796.999 2.933 2.486 2.933c1.033 0 1.716-.479 2.106-1.284l-.959-.57c-.3.505-.602.725-1.114.725c-.853 0-1.35-.781-1.35-1.804c0-1.057.49-1.805 1.342-1.805m4.222-1.041h-1.139v5.691h3.421v-1.122h-2.282zm5.28-.089c-1.553 0-2.471 1.203-2.471 2.935s.918 2.933 2.471 2.933s2.472-1.202 2.472-2.933c0-1.732-.92-2.935-2.471-2.935m0 4.74c-.919 0-1.3-.79-1.3-1.805c0-1.016.381-1.805 1.3-1.805c.918 0 1.3.789 1.3 1.805s-.382 1.805-1.3 1.805m7.064-1.455c0 .91-.446 1.471-1.17 1.471s-1.162-.577-1.162-1.487v-3.18H49.32v3.196c0 1.657.927 2.584 2.3 2.584c1.448 0 2.31-.951 2.31-2.6v-3.18h-1.14zm4.342-3.196h-1.78v5.691h1.698c1.465 0 2.91-.846 2.91-2.845c0-2.082-1.202-2.846-2.828-2.846m-.082 4.586h-.56v-3.48h.602c1.202 0 1.698.577 1.698 1.74c0 1.04-.545 1.74-1.74 1.74"></svg:path>`,
})
export class LineiconsSoundcloudOriginalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSpacexIcon],svg[lineicons-spacex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.426 11H2.278l-.111.223l2.37 1.74c.445-.259.944-.518 1.463-.777m.352 2.074l2.092 1.518h2.149l.092-.203l-3.11-2.278c-.408.314-.834.63-1.223.963"></svg:path><svg:path fill="currentColor" d="M4.111 15.778H2.167L2 15.518c1.315-1.277 7.204-6.721 20-7.295c0 0-10.722.37-17.889 7.555"></svg:path>`,
})
export class LineiconsSpacexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSpeechlessIcon],svg[lineicons-speechless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="20" cy="22.7" r="4" fill="currentColor"></svg:circle><svg:circle cx="44" cy="22.7" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3s31.3-14 31.3-31.3S49.2.8 32 .8m0 58c-14.8 0-26.8-12-26.8-26.8S17.3 5.3 32 5.3s26.8 12 26.8 26.8s-12 26.7-26.8 26.7"></svg:path><svg:path fill="currentColor" d="M43.7 43H20.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h23.3c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.2-2.3"></svg:path>`,
})
export class LineiconsSpeechlessIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSpellcheckIcon],svg[lineicons-spellcheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.25 4.5a.75.75 0 0 1 .686.445l6 13.5a.75.75 0 1 1-1.371.61l-1.728-3.888H5.663l-1.727 3.887a.75.75 0 0 1-1.371-.609l6-13.5A.75.75 0 0 1 9.25 4.5m0 2.597l-2.92 6.57h5.84zM22.28 5.78a.75.75 0 1 0-1.06-1.06L17.738 8.2l-1.41-1.411a.75.75 0 1 0-1.061 1.06l1.941 1.942a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class LineiconsSpellcheckIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSpinnerIcon],svg[lineicons-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.3 2c-4.3 0-7.8 3.5-7.8 7.8s3.5 7.8 7.8 7.8s7.8-3.5 7.8-7.8S37.6 2 33.3 2m0 50.5c-2.6 0-4.8 2.1-4.8 4.8s2.1 4.8 4.8 4.8c2.6 0 4.8-2.1 4.8-4.8s-2.2-4.8-4.8-4.8M57 30c-1.9 0-3.5 1.6-3.5 3.5S55.1 37 57 37s3.5-1.6 3.5-3.5c-.1-1.9-1.6-3.5-3.5-3.5m-41.6 3.5c0-3.3-2.7-5.9-5.9-5.9c-3.3 0-5.9 2.7-5.9 5.9c0 3.3 2.7 5.9 5.9 5.9c3.3 0 5.9-2.6 5.9-5.9"></svg:path><svg:circle cx="50.1" cy="50.2" r="4.1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16.5 10.1c-1.7 0-3.4.7-4.6 1.9c-2.5 2.5-2.5 6.7 0 9.2c1.3 1.3 2.9 1.9 4.6 1.9s3.3-.6 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6s-.7-3.4-1.9-4.6s-2.9-1.9-4.6-1.9M50 19.6c.8 0 1.5-.3 2.1-.8c.6-.6.9-1.3.8-2.1c0-.8-.3-1.4-.8-1.9c-.6-.6-1.3-.9-2.1-.8c-.8 0-1.4.3-1.9.8c-.6.6-.9 1.3-.8 2.1c0 .8.3 1.4.8 1.9c.4.5 1.1.8 1.9.8M16.5 45c-2.9 0-5.3 2.4-5.3 5.3s2.4 5.3 5.3 5.3s5.3-2.4 5.3-5.3s-2.4-5.3-5.3-5.3"></svg:path>`,
})
export class LineiconsSpinnerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSpinner2SacleIcon],svg[lineicons-spinner-2-sacle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 3.748a1.75 1.75 0 1 0-3.5 0a1.75 1.75 0 0 0 3.5 0m4.616 2.946a.75.75 0 1 0-1.06-1.06a.75.75 0 0 0 1.06 1.06M21.148 12a.895.895 0 1 1-1.79 0a.895.895 0 0 1 1.79 0M17.1 18.571a1.04 1.04 0 1 0 1.471-1.47a1.04 1.04 0 0 0-1.47 1.47M12 19.067a1.185 1.185 0 1 1 0 2.37a1.185 1.185 0 0 1 0-2.37m-4.894-.291a1.33 1.33 0 1 0-1.88-1.88a1.33 1.33 0 0 0 1.88 1.88M5.224 12a1.475 1.475 0 1 1-2.95 0a1.475 1.475 0 0 1 2.95 0M5.02 7.31a1.62 1.62 0 1 0 2.291-2.292a1.62 1.62 0 0 0-2.29 2.292"></svg:path>`,
})
export class LineiconsSpinner2SacleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSpinner3Icon],svg[lineicons-spinner-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5a.75.75 0 0 1 1.5 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class LineiconsSpinner3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSpinnerArrowIcon],svg[lineicons-spinner-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M58.2 26.8c-.4-1.2-1.6-1.8-2.8-1.5c-1.2.4-1.8 1.6-1.5 2.8c.7 2.2 1.1 4.5 1.1 6.8c0 3.5-.8 6.8-2.3 9.9c-3.9 8-11.8 13-20.7 13C19.3 57.8 9 47.5 9 35s10.3-22.8 23-22.8c2.3 0 4.6.3 6.7 1l-3.4 1.6c-1.1.5-1.6 1.9-1.1 3c.4.8 1.2 1.3 2 1.3c.3 0 .6-.1.9-.2l8.8-4.1c.5-.3 1-.7 1.2-1.3s.2-1.2-.1-1.7L43 3c-.5-1.1-1.9-1.6-3-1.1s-1.6 1.9-1.1 3l1.9 4.2c-2.8-1-5.8-1.5-8.9-1.5C16.9 7.7 4.5 19.9 4.5 35S16.9 62.3 32 62.3c10.6 0 20.1-5.9 24.7-15.4c1.8-3.7 2.8-7.7 2.8-11.9c0-2.8-.5-5.6-1.3-8.2"></svg:path>`,
})
export class LineiconsSpinnerArrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSpinnerSolidIcon],svg[lineicons-spinner-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 62.3C15.3 62.3 1.8 48.7 1.8 32S15.3 1.8 32 1.8c4.6 0 9.1 1 13.2 3c1.1.5 1.6 1.9 1 3c-.5 1.1-1.9 1.6-3 1c-3.5-1.7-7.3-2.5-11.2-2.5C17.8 6.3 6.3 17.8 6.3 32s11.6 25.8 25.8 25.8c9.9 0 18.8-5.6 23.2-14.5c1.7-3.5 2.6-7.3 2.6-11.2c0-2.6-.4-5.2-1.2-7.7c-.4-1.2.3-2.4 1.5-2.8s2.4.3 2.8 1.5c.9 2.9 1.4 6 1.4 9.1c0 4.6-1 9.1-3 13.2C54.1 55.7 43.7 62.3 32 62.3"></svg:path>`,
})
export class LineiconsSpinnerSolidIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSportsIcon],svg[lineicons-sports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.672 11.077a7.327 7.327 0 0 1 14.654 0v2.33A2.25 2.25 0 0 1 20.75 15.5V19a2.25 2.25 0 0 1-4.5 0v-3.5a2.25 2.25 0 0 1 1.576-2.147v-2.276c0-1.85-.863-3.5-2.208-4.567q.13.474.132.99a3.75 3.75 0 1 1-7.367-.992a5.82 5.82 0 0 0-2.211 4.57v2.274A2.25 2.25 0 0 1 7.75 15.5V19a2.25 2.25 0 0 1-4.5 0v-3.5c0-.95.589-1.763 1.422-2.093zm7.327-5.827A2.25 2.25 0 1 0 12 9.75a2.25 2.25 0 1 0-.001-4.5M5.5 14.75a.75.75 0 0 0-.75.75V19a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75m13 0a.75.75 0 0 0-.75.75V19a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsSportsIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSpotifyIcon],svg[lineicons-spotify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.452 2 2 6.452 2 12s4.452 10 10 10s10-4.452 10-10S17.548 2 12 2m4.58 14.42a.74.74 0 0 1-.87.225c-2.355-1.451-5.323-1.774-8.775-1a.59.59 0 0 1-.741-.451c-.097-.355.129-.678.451-.775c3.807-.87 7.032-.484 9.742 1.13c.29.225.387.58.194.87m1.227-2.678c-.226.355-.742.451-1.033.226c-2.677-1.645-6.774-2.13-9.968-1.13c-.419.13-.87-.096-.967-.548c-.13-.419.096-.87.548-.967c3.645-1.13 8.13-.549 11.226 1.322c.29.226.42.678.194 1.097m.096-2.871C14.678 8.967 9.356 8.773 6.259 9.74c-.452.13-1-.128-1.129-.644c-.129-.452.13-1 .645-1.13c3.549-1.032 9.355-.87 13.097 1.356c.452.258.58.87.355 1.258c-.258.419-.871.548-1.323.29"></svg:path>`,
})
export class LineiconsSpotifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSpotifyAltIcon],svg[lineicons-spotify-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.439 10.265c-.079 0-.157-.021-.252-.046l-.079-.02c-2.017-.96-4.198-1.422-6.512-1.422c-1.025 0-2.15.132-3.306.364c-.397.099-.794-.166-.893-.562c-.033-.43.232-.827.628-.893a17.7 17.7 0 0 1 3.604-.397c2.512 0 4.892.53 7.14 1.554a.764.764 0 0 1 .364.992a.77.77 0 0 1-.694.43M16.083 13.9a1 1 0 0 0 .297.067a.76.76 0 0 0 .662-.43a.764.764 0 0 0-.364-.992c-1.918-.892-4-1.355-6.05-1.355c-1.19 0-2.248.132-3.272.397a.78.78 0 0 0-.53.925a.78.78 0 0 0 .926.53c.893-.265 1.818-.364 2.91-.364c1.817 0 3.702.43 5.42 1.223m-1.057 3.537c.099.033.231.066.33.066a.76.76 0 0 0 .662-.43a.723.723 0 0 0-.331-.991a11.37 11.37 0 0 0-7.934-.794a.78.78 0 0 0-.529.926a.73.73 0 0 0 .893.529a10 10 0 0 1 6.909.694"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 11.984C2 17.504 6.463 22 11.984 22C17.504 22 22 17.504 22 11.984C22 6.495 17.504 2 11.984 2A9.975 9.975 0 0 0 2 11.984m1.488 0a8.493 8.493 0 0 1 8.496-8.496c4.694 0 8.528 3.801 8.528 8.496c0 4.694-3.834 8.528-8.529 8.528c-4.694 0-8.495-3.834-8.495-8.529" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsSpotifyAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSpotifyOriginalIcon],svg[lineicons-spotify-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 1C14.8 1 1 14.8 1 32s13.8 31 31 31s31-13.8 31-31S49.2 1 32 1m14.2 44.7c-.6.8-1.7 1.1-2.7.7c-7.3-4.5-16.5-5.5-27.2-3.1c-1.1.3-2.1-.4-2.3-1.4c-.3-1.1.4-2.1 1.4-2.4C27.2 36.8 37.2 38 45.6 43c.9.7 1.2 1.8.6 2.7m3.8-8.3c-.7 1.1-2.3 1.4-3.2.7c-8.3-5.1-21-6.6-30.9-3.5c-1.3.4-2.7-.3-3-1.7c-.4-1.3.3-2.7 1.7-3c11.3-3.5 25.2-1.7 34.8 4.1c.9.7 1.3 2.1.6 3.4m.3-8.9c-10-5.9-26.5-6.5-36.1-3.5c-1.4.4-3.1-.4-3.5-2c-.4-1.4.4-3.1 2-3.5c11-3.2 29-2.7 40.6 4.2c1.4.8 1.8 2.7 1.1 3.9c-.8 1.3-2.7 1.7-4.1.9"></svg:path>`,
})
export class LineiconsSpotifyOriginalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSprayIcon],svg[lineicons-spray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.8 21.4h-.4V19h.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.7v2.4h-.4c-7 0-12.7 5.7-12.7 12.7v24.3c0 2.1 1.7 3.8 3.8 3.8h23.1c2.1 0 3.8-1.7 3.8-3.8V34.2c.1-7.1-5.6-12.8-12.6-12.8m-5.3 4.5h5.3c4.5 0 8.1 3.6 8.2 8H9.3c0-4.4 3.7-8 8.2-8M9.2 57.8V38.5H31v19.3zM48.8 19c-1.2 0-2.3 1-2.3 2.3v.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.2C51 20 50 19 48.8 19m0-10.4c-1.2 0-2.3 1-2.3 2.3v.1c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.2C51 9.6 50 8.6 48.8 8.6M57 25.5c-1.2 0-2.3 1-2.3 2.3v.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.2c0-1.3-1.1-2.3-2.3-2.3M40 13.8c-1.2 0-2.3 1-2.3 2.3v.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V16c0-1.2-1-2.2-2.3-2.2m17 0c-1.2 0-2.3 1-2.3 2.3v.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V16c0-1.2-1.1-2.2-2.3-2.2m0-12c-1.2 0-2.3 1-2.3 2.3v.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V4c0-1.2-1.1-2.2-2.3-2.2"></svg:path>`,
})
export class LineiconsSprayIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSproutIcon],svg[lineicons-sprout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62 12.8c.1-.7-.2-1.4-.6-1.8c-.5-.5-1.2-.7-1.8-.6s-14.4 1.7-21.1 8.4c-2.3 2.2-4 5.2-5.2 8.2c-1-4.8-3.2-12.4-7.7-16.9C18.9 3.5 5.1 1.8 4.5 1.8q-1.05-.15-1.8.6c-.5.5-.7 1.2-.7 1.9c.1.6 1.7 14.4 8.4 21.1c5.3 5.3 14.9 7.4 19.1 8.1V60c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V42.1c3.9-.6 14.1-2.7 19.6-8.2c6.6-6.7 8.2-20.5 8.3-21.1m-48.4 9.3C9.7 18.2 7.8 10.8 7 6.7c4.1.8 11.5 2.7 15.4 6.6s5.8 11.3 6.6 15.4c-4.1-.7-11.5-2.6-15.4-6.6M35 37.4c.8-4.1 2.7-11.5 6.6-15.4s11.3-5.8 15.4-6.6c-.8 4.1-2.7 11.5-6.6 15.4S39.1 36.6 35 37.4"></svg:path>`,
})
export class LineiconsSproutIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSquarespaceIcon],svg[lineicons-squarespace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.286 15.425c-.355.355-.355 1.002 0 1.357s1.002.355 1.357 0l6.139-6.139c.775-.775 1.97-.775 2.714 0c.775.776.775 1.971 0 2.714l-6.01 6.042c.776.776 1.971.776 2.714 0l4.685-4.685c1.487-1.486 1.487-3.942 0-5.493c-1.486-1.486-3.942-1.486-5.492 0zm9.564-4.103c-.356-.356-1.002-.356-1.357 0l-6.14 6.17c-.775.776-1.97.776-2.713 0c-.356-.355-1.002-.355-1.357 0c-.356.356-.356 1.002 0 1.358c1.486 1.486 3.942 1.486 5.492 0l6.107-6.139c.323-.388.323-1.034-.032-1.39M8.607 14.714l6.14-6.139c.355-.355.355-1.001 0-1.357c-.356-.355-1.002-.355-1.358 0l-6.17 6.14c-.776.775-1.972.775-2.715 0a1.95 1.95 0 0 1 0-2.78l6.01-5.977c-.776-.775-1.971-.775-2.714 0L3.115 9.286c-1.487 1.486-1.487 3.942 0 5.493c1.486 1.486 4.006 1.486 5.492-.065M5.215 12.68c.355.355 1.001.355 1.357 0l6.171-6.14c.776-.775 1.971-.775 2.714 0c.356.356 1.002.356 1.357 0c.356-.355.356-1 0-1.356c-1.486-1.487-3.942-1.487-5.492 0l-6.14 6.139a.91.91 0 0 0 .033 1.357"></svg:path>`,
})
export class LineiconsSquarespaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStackoverflowIcon],svg[lineicons-stackoverflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.873 20.226H5.393v-5.353H3.555V22h16.06v-7.127h-1.742zM15.143 2l-1.425 1.057l5.303 7.148l1.424-1.057zm-3.281 2.869l-1.135 1.363l6.844 5.691l1.134-1.364z"></svg:path><svg:path fill="currentColor" d="M16.067 16.647h-8.9v1.774h8.9zm1.226-4.289l-8.03-3.806l-.774 1.645l8.062 3.773zm-.872 2.096l-8.707-1.87l-.419 1.773l8.771 1.838z"></svg:path>`,
})
export class LineiconsStackoverflowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStampIcon],svg[lineicons-stamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.122 4.388A2.25 2.25 0 0 1 11.368 2h1.31a2.25 2.25 0 0 1 2.247 2.388l-.604 9.862h4.202a2.25 2.25 0 0 1 2.25 2.25v3.25a.75.75 0 0 1-.75.75h-.5v.75a.75.75 0 0 1-.75.75h-13.5a.75.75 0 0 1-.75-.75v-.75h-.5a.75.75 0 0 1-.75-.75V16.5a2.25 2.25 0 0 1 2.25-2.25h4.203zM19.273 19v-2.5a.75.75 0 0 0-.75-.75h-13a.75.75 0 0 0-.75.75V19zM13.427 4.296a.75.75 0 0 0-.748-.796h-1.31a.75.75 0 0 0-.75.796l.61 9.954h1.589z"></svg:path>`,
})
export class LineiconsStampIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStarEmptyIcon],svg[lineicons-star-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m32 8.5l3.402-1.6l-1.4-2.6c-.4-.8-1.2-1.3-2-1.3s-1.6.5-2 1.2l-1.4 2.6zm5.537 2.538l-4.025 2.01l3.083 6.174l4.026-2.012zM39 23.9c.3.7 1 1.1 1.7 1.2l3 .4l.6-4.5l-1.8-.2l-.8-1.6l-4 2.1zm9.98-2.178l-.628 4.456l7.03.992l.629-4.456zM63.1 25.1c-.3-.8-1-1.4-1.8-1.6l-3-.5l-.3 4l2.4 2.4l2.2-2c.6-.6.8-1.5.5-2.3m-9.165 4.235l-5.02 4.733L52 37.343l5.02-4.734zM48.9 40.2l1.3-1.3l-3.1-3.2l-2.1 2.1c-.5.5-.8 1.3-.7 2l.5 2.9l4.4-.7zm1.156 6.248l-4.427.806l1.236 6.788l4.427-.806zm1.546 8.952L47 56l-.898 3.3l2.7 1.4c.3.2.7.2 1 .2c.5 0 1-.2 1.3-.4c.7-.5 1-1.4.9-2.2zM37.84 50.01l-2.047 4.008l6.233 3.185l2.048-4.008zM31 47.6L28.3 49l2.1 4l1.6-.9l1.7.9l2-4l-2.7-1.4c-.6-.3-1.4-.3-2 0m-6.902 3.482l-6.246 3.158l2.03 4.016l6.247-3.158zM16 56l-3.7-.5l-.5 2.9c-.1.8.2 1.7.9 2.2c.4.3.9.4 1.3.4s.7-.1 1-.3l2.7-1.4zm-1.626-11.798l-1.151 6.702l4.435.762l1.151-6.702zM19.7 39.8c.1-.7-.1-1.5-.6-2l-2.2-2.1l-3.1 3.2l1.3 1.3l-.3 1.7l4.4.8zM8.482 27.716L5.395 30.99l5.02 4.734l3.087-3.275zM6.302 26.7l-.6-3.7l-3.1.5c-.9.1-1.6.7-1.8 1.6s0 1.7.6 2.3l2.3 2zm11.038-5.373l-6.93.987l.635 4.456l6.93-.988zm4.26-.527l-1.9.2l.6 4.5l3.1-.4c.7-.1 1.4-.5 1.7-1.2l1.4-2.6l-4-2.1zm6.006-11.848l-3.137 6.146l4.008 2.046l3.137-6.146z"></svg:path>`,
})
export class LineiconsStarEmptyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStarFatIcon],svg[lineicons-star-fat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.125a.75.75 0 0 1 .672.418l2.654 5.378l5.935.863a.75.75 0 0 1 .416 1.279l-4.294 4.186l1.013 5.911a.75.75 0 0 1-1.088.79L12 18.16l-5.31 2.79a.75.75 0 0 1-1.088-.79l1.014-5.911l-4.295-4.186a.75.75 0 0 1 .416-1.28l5.935-.862l2.654-5.378A.75.75 0 0 1 12 2.125m0 2.445L9.843 8.939a.75.75 0 0 1-.564.41l-4.822.7l3.49 3.401a.75.75 0 0 1 .215.664l-.824 4.802l4.313-2.267a.75.75 0 0 1 .698 0l4.312 2.267l-.824-4.802a.75.75 0 0 1 .216-.664l3.489-3.4l-4.822-.701a.75.75 0 0 1-.564-.41z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsStarFatIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStarFatHalf2Icon],svg[lineicons-star-fat-half-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.082 2.375a.75.75 0 0 0-1.423-.332L9.005 7.421l-5.935.863a.75.75 0 0 0-.416 1.279l4.295 4.186l-1.014 5.911a.75.75 0 0 0 1.088.79l5.658-2.974a.75.75 0 0 0 .4-.663zm-2.907 6.064l1.407-2.85v10.77L7.67 18.417l.824-4.802a.75.75 0 0 0-.216-.664L4.79 9.55l4.822-.701a.75.75 0 0 0 .564-.41" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m17.64 20.45l-3.04-1.598v-1.695l2.393 1.259l-.823-4.802a.75.75 0 0 1 .215-.664l3.49-3.4l-4.822-.701a.75.75 0 0 1-.454-.245v-3.33l1.06 2.147l5.935.863a.75.75 0 0 1 .415 1.279l-4.294 4.186l1.014 5.911a.75.75 0 0 1-1.088.79"></svg:path>`,
})
export class LineiconsStarFatHalf2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStarFillIcon],svg[lineicons-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m59.7 23.9l-18.1-2.8l-8.2-17.2c-.6-1.2-2.2-1.2-2.8 0l-8.2 17.3l-18 2.7c-1.3.2-1.8 1.9-.8 2.8l13.1 13.5l-3.1 18.9c-.2 1.3 1.1 2.4 2.3 1.6l16.3-8.9l16.2 8.9c1.1.6 2.5-.4 2.2-1.6l-3.1-18.9l13.1-13.5c.8-.9.4-2.6-.9-2.8"></svg:path>`,
})
export class LineiconsStarFillIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStarHalfIcon],svg[lineicons-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M45.2 27.4c1.2 0 2.2-1 2.2-2.2s-.9-2.3-2.2-2.3l-4.3-.2l-1.5-3.8c-.4-1.2-1.7-1.7-2.9-1.3s-1.7 1.8-1.3 2.9l2 5.2c.3.8 1.1 1.4 2 1.4zc-.1 0 0 0 0 0m16.9-2.1c-.3-1.1-1.3-1.8-2.4-1.8l-5.9-.2c-1.2-.1-2.3.9-2.3 2.2c0 1.2.9 2.3 2.2 2.3h.7l-3 2.3c-1 .7-1.2 2.2-.4 3.2c.4.6 1.1.9 1.8.9c.5 0 .9-.1 1.4-.5l7.2-5.4c.7-.8 1.1-2 .7-3m-16 8.6l-3.5 2.6c-.7.6-1.1 1.5-.8 2.4l1.2 4.2c.3 1 1.2 1.6 2.2 1.6c.2 0 .4 0 .6-.1c1.2-.4 1.9-1.6 1.5-2.8l-.8-2.7l2.3-1.7c1-.7 1.2-2.2.4-3.2c-.7-.8-2.1-1-3.1-.3m3.9 17c-.3-1.2-1.6-1.9-2.8-1.5s-1.9 1.6-1.5 2.8l.2.7l-2.8-1.9c-1-.7-2.4-.4-3.1.7c-.7 1-.4 2.4.7 3.1l7 4.5c.4.3.9.4 1.4.4c.6 0 1.1-.2 1.6-.5c.9-.7 1.3-1.8.9-2.8z"></svg:path><svg:path fill="currentColor" d="m38 47.8l-4.8-3.1h-.1c-.1-.1-.3-.2-.5-.2h-.1c-.2 0-.4-.1-.6-.1h-.1c-.2 0-.3 0-.5.1h-.1c-.2.1-.4.1-.5.2L18 52.8L22.2 39c.3-.9-.1-1.9-.8-2.4L9.7 27.8l15-.6c.9 0 1.7-.6 2-1.4L32 12.1l.5 1.4c.3.9 1.2 1.4 2.1 1.4c.3 0 .5 0 .8-.2c1.2-.4 1.7-1.8 1.3-2.9L34.5 6c-.4-1-1.4-1.7-2.5-1.7S29.9 5 29.5 6L23 22.8l-18.7.7c-1.1 0-2.1.8-2.4 1.8s0 2.2.9 2.9l14.7 11.1l-5 17.1c-.3 1.1.1 2.2.9 2.8c.5.4 1 .5 1.6.5c.5 0 1-.1 1.4-.4l15.6-10l3.6 2.3c.4.2.8.4 1.2.4c.7 0 1.5-.4 1.9-1c.7-1.1.4-2.5-.7-3.2"></svg:path>`,
})
export class LineiconsStarHalfIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStarSharpDisabledIcon],svg[lineicons-star-sharp-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.215 8.276L2.22 3.28a.75.75 0 0 1 1.06-1.06l18.5 18.499a.75.75 0 0 1-1.061 1.06l-2.408-2.407l.06.183a.75.75 0 0 1-1.155.839L12 16.604l-5.217 3.79a.75.75 0 0 1-1.154-.839l1.992-6.132l-5.216-3.79a.75.75 0 0 1 .44-1.357zm8.76 8.76l-7.26-7.26H5.154l3.79 2.753a.75.75 0 0 1 .272.839L7.77 17.823l3.79-2.753a.75.75 0 0 1 .881 0l3.79 2.753zm2.87-7.26l-3.464 2.517l1.074 1.074l5.14-3.735a.75.75 0 0 0-.441-1.356h-6.449l-1.992-6.133a.75.75 0 0 0-1.427 0l-1.485 4.57l1.19 1.19L12 4.804l1.447 4.454a.75.75 0 0 0 .714.519z"></svg:path>`,
})
export class LineiconsStarSharpDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStatistaIcon],svg[lineicons-statista-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.644 3a.63.63 0 0 0-.63.63v11.413h.09s2.709-.051 3.857-.656a8.2 8.2 0 0 0 2.503-2.289l.677-.955l.215-.305c.026-.03.137-.192.201-.286c.064-.095.343-.49.613-.883a12.7 12.7 0 0 1 3.947-3.557c2.503-1.286 5.82-1.158 5.82-1.158h.051V3.67a.63.63 0 0 0-.63-.669zm17.34 5.962a.7.7 0 0 1-.163.02s-2.704.052-3.865.66a8.1 8.1 0 0 0-2.503 2.285l-.664.96c-.099.137-.193.274-.219.304l-.202.288l-.612.883s-1.633 2.357-3.947 3.557c-2.4 1.247-5.542 1.165-5.8 1.157v1.286a.63.63 0 0 0 .63.638h16.716a.63.63 0 0 0 .63-.63z"></svg:path>`,
})
export class LineiconsStatistaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStatsDownIcon],svg[lineicons-stats-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 57.8H6.3V4c0-1.2-1-2.3-2.3-2.3S1.8 2.8 1.8 4v56c0 1.2 1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.2-2.2-2.4-2.2"></svg:path><svg:path fill="currentColor" d="M60 28.6c-1.2 0-2.3 1-2.3 2.3v7.5L51 32.8c-.4-.3-.9-.5-1.4-.5H36.8L29.7 23c-.4-.6-1.1-.9-1.8-.9H15.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h11.5l7.1 9.3c.4.6 1.1.9 1.8.9h13.2l5.5 4.6h-7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3V30.9c0-1.3-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsStatsDownIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStatsUpIcon],svg[lineicons-stats-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 57.8H6.3V4c0-1.2-1-2.3-2.3-2.3S1.8 2.8 1.8 4v54.1c0 2.3 1.9 4.2 4.2 4.2h54c1.2 0 2.3-1 2.3-2.3s-1.1-2.2-2.3-2.2"></svg:path><svg:path fill="currentColor" d="M59 22.1H47.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h6.8l-5.3 4.6H35.7c-.7 0-1.4.3-1.8.9l-7.1 9.3H16.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h11.6c.7 0 1.4-.3 1.8-.9l7.1-9.3h12.9c.5 0 1.1-.2 1.5-.6l6.6-5.8v7.7c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V25.3c-.1-1.7-1.6-3.2-3.4-3.2"></svg:path>`,
})
export class LineiconsStatsUpIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSteamIcon],svg[lineicons-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.968 2C6.767 2 2.4 6.045 2.048 11.181l5.329 2.216c.45-.322.995-.45 1.573-.45h.128l2.344-3.5v-.031a3.74 3.74 0 0 1 3.756-3.756c2.087 0 3.788 1.67 3.788 3.756a3.74 3.74 0 0 1-3.756 3.756h-.096l-3.403 2.44v.128a2.863 2.863 0 0 1-2.857 2.857c-1.349 0-2.536-.995-2.761-2.247l-3.724-1.637C3.557 18.886 7.44 22 11.968 22c5.49-.032 9.984-4.494 9.984-10.016S17.457 2 11.968 2"></svg:path><svg:path fill="currentColor" d="m8.276 17.152l-1.22-.481c.225.45.578.867 1.092 1.027c1.027.45 2.311-.032 2.76-1.123a2.07 2.07 0 0 0 0-1.638a2.26 2.26 0 0 0-1.123-1.187c-.514-.225-1.027-.193-1.54-.033l1.251.546c.77.353 1.188 1.252.867 2.023c-.353.802-1.252 1.155-2.087.866m9.502-7.736c0-1.349-1.124-2.536-2.536-2.536c-1.349 0-2.536 1.123-2.536 2.536c0 1.412 1.188 2.536 2.536 2.536s2.536-1.156 2.536-2.536m-4.366 0c0-1.027.867-1.862 1.862-1.862c1.027 0 1.862.867 1.862 1.862c0 1.027-.867 1.862-1.862 1.862c-1.027.032-1.862-.835-1.862-1.862"></svg:path>`,
})
export class LineiconsSteamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStethoscope1Icon],svg[lineicons-stethoscope-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.773 3.5h.25a.75.75 0 0 0 0-1.5h-.25a2.25 2.25 0 0 0-2.25 2.25v2.5a5.75 5.75 0 0 0 5 5.701V16.5a5 5 0 1 0 10 0v-1.515a2.501 2.501 0 1 0-1.5 0V16.5a3.5 3.5 0 1 1-7 0v-4.049a5.75 5.75 0 0 0 5-5.701v-2.5A2.25 2.25 0 0 0 13.773 2h-.25a.75.75 0 0 0 0 1.5h.25a.75.75 0 0 1 .75.75v2.5a4.25 4.25 0 0 1-8.5 0v-2.5a.75.75 0 0 1 .75-.75m11 9.1a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path>`,
})
export class LineiconsStethoscope1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSthethoscopeIcon],svg[lineicons-sthethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M55.4 1.8H49c-1.2 0-2.2 1-2.2 2.2v2.5c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-.3h3.1v17.4c0 6.2-5 11.2-11.2 11.2H42c-6.2 0-11.2-5-11.2-11.2V6.2h3.1v.3c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V4c0-1.2-1-2.2-2.2-2.2h-6.4c-1.9 0-3.5 1.6-3.5 3.5v18.4c0 8.5 6.8 15.4 15.3 15.7V52c0 3.2-2.4 5.8-5.4 5.8H21.4c-3.2 0-5.8-2.6-5.8-5.8v-8.2c3.6-1 6.3-4.2 6.3-8.1c0-4.6-3.8-8.4-8.4-8.4s-8.4 3.8-8.4 8.4c0 3.8 2.6 7.1 6.1 8.1V52c0 5.7 4.6 10.3 10.3 10.3h14.8c5.5 0 9.9-4.6 9.9-10.3V39c7.2-1.4 12.7-7.8 12.7-15.4V5.3c0-2-1.6-3.5-3.5-3.5M9.6 35.6c0-2.2 1.8-3.9 3.9-3.9s3.9 1.8 3.9 3.9c0 2.2-1.8 3.9-3.9 3.9s-3.9-1.7-3.9-3.9"></svg:path>`,
})
export class LineiconsSthethoscopeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStopIcon],svg[lineicons-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 62.3H8c-3.4 0-6.3-2.8-6.3-6.3V8c0-3.4 2.8-6.3 6.3-6.3h48c3.4 0 6.3 2.8 6.3 6.3v48c0 3.4-2.9 6.3-6.3 6.3M8 6.3C7 6.3 6.3 7 6.3 8v48c0 1 .8 1.8 1.8 1.8h48c1 0 1.8-.8 1.8-1.8V8c0-1-.8-1.8-1.8-1.8H8z"></svg:path>`,
})
export class LineiconsStopIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStopwatchIcon],svg[lineicons-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.749 2.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m1.5 10.5a.75.75 0 0 0 1.5 0V8.496a.75.75 0 1 0-1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.999 4.502a8.749 8.749 0 1 0 6.694 3.115l1.339-1.339a.75.75 0 0 0-1.061-1.06l-1.339 1.338A8.7 8.7 0 0 0 12 4.502M4.75 13.25a7.249 7.249 0 1 1 14.498 0a7.249 7.249 0 0 1-14.498 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsStopwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStorageHdd2Icon],svg[lineicons-storage-hdd-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.787 15.613q.586.136 1.213.137a5.375 5.375 0 1 0-3.316-1.145l-1.348 1.847a1.424 1.424 0 1 0 2.452 1.416zM12 6.5a3.875 3.875 0 1 1-.59 7.705l.925-2.088a.75.75 0 0 0-1.292-.746l-1.475 2.021A3.875 3.875 0 0 1 12 6.5"></svg:path><svg:path fill="currentColor" d="M18 2a2.25 2.25 0 0 1 2.25 2.25v15.5A2.25 2.25 0 0 1 18 22H6a2.25 2.25 0 0 1-2.25-2.25V4.25A2.25 2.25 0 0 1 6 2zm.75 2.25A.75.75 0 0 0 18 3.5H6a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75z"></svg:path>`,
})
export class LineiconsStorageHdd2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStrikethroughIcon],svg[lineicons-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 19.6H34.3V6.3h14.5C50 6.3 51 5.2 51 4s-1-2.3-2.3-2.3H15.2C14 1.8 13 2.8 13 4s1 2.3 2.3 2.3h14.5v13.3H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h25.8V60c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3V24.1H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.2-2.3-2.2"></svg:path>`,
})
export class LineiconsStrikethroughIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStrikethrough1Icon],svg[lineicons-strikethrough-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7.05A5.05 5.05 0 0 1 10.05 2h8.45a.75.75 0 0 1 0 1.5h-8.45a3.55 3.55 0 0 0-2.306 6.25H5.782A5.04 5.04 0 0 1 5 7.05m12.256 7.2h1.962A5.05 5.05 0 0 1 14.95 22H6.5a.75.75 0 0 1 0-1.5h8.45a3.55 3.55 0 0 0 2.306-6.25m-11.506-3a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class LineiconsStrikethrough1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStripeIcon],svg[lineicons-stripe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.828 9.013l-1.394.295V8.192l1.394-.29z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.728 9.631a1.58 1.58 0 0 0-1.088.427l-.073-.34h-1.222v6.379l1.389-.29l.005-1.548c.2.142.495.345.984.345c.994 0 1.9-.788 1.9-2.522c-.006-1.587-.922-2.451-1.895-2.451m-.333 3.77c-.328 0-.522-.116-.655-.258l-.006-2.03c.144-.158.344-.268.661-.268c.506 0 .856.558.856 1.275c0 .733-.345 1.28-.856 1.28M22 12.136c0-1.4-.689-2.505-2.006-2.505c-1.322 0-2.122 1.105-2.122 2.495c0 1.646.945 2.478 2.3 2.478c.661 0 1.161-.148 1.54-.356v-1.094c-.379.186-.812.3-1.362.3c-.539 0-1.017-.185-1.078-.83h2.717l.004-.178c.003-.108.007-.234.007-.31m-2.744-.52c0-.617.383-.874.733-.874c.339 0 .7.257.7.875z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.828 9.724h-1.394v4.787h1.394zm-2.978 0l.088.405c.328-.59.978-.47 1.156-.405v1.258c-.172-.06-.728-.137-1.055.285v3.244h-1.39V9.724zM7.162 8.537l-1.356.285l-.005 4.381c0 .81.616 1.406 1.439 1.406c.455 0 .788-.082.972-.18v-1.11c-.178.07-1.056.322-1.056-.488V10.89h1.056V9.724H7.156zm-3.284 2.281c-.295 0-.472.082-.472.296c0 .232.306.335.685.462c.619.207 1.433.48 1.437 1.49c0 .98-.795 1.543-1.95 1.543c-.478 0-1-.093-1.517-.312v-1.302c.467.252 1.056.438 1.517.438c.311 0 .533-.082.533-.334c0-.258-.331-.376-.732-.518C2.77 12.364 2 12.09 2 11.179c0-.968.75-1.548 1.878-1.548c.461 0 .917.071 1.378.252v1.285a3.14 3.14 0 0 0-1.378-.35"></svg:path>`,
})
export class LineiconsStripeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsStumbleuponIcon],svg[lineicons-stumbleupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.403v2.774c0 2.452-2 4.452-4.452 4.452a4.44 4.44 0 0 1-4.451-4.452v-2.741l1.355.645l2.032-.58v2.806c0 .58.451 1.032 1.032 1.032a1.02 1.02 0 0 0 1.032-1.032v-2.871c.033-.033 3.452-.033 3.452-.033m-7.613-1.677l2.032-.58v-1.42c0-2.42-2.032-4.355-4.451-4.355c-2.42 0-4.452 1.903-4.452 4.323v6.451c0 .58-.451 1.032-1.032 1.032c-.58 0-1.032-.451-1.032-1.032v-2.742H2v2.774c0 2.452 2 4.452 4.452 4.452s4.451-1.968 4.451-4.42V8.856c0-.58.452-1.032 1.032-1.032s1.033.451 1.033 1.032v1.19z"></svg:path>`,
})
export class LineiconsStumbleuponIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSunIcon],svg[lineicons-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 18.4c-7.5 0-13.6 6.1-13.6 13.6S24.5 45.6 32 45.6S45.6 39.5 45.6 32S39.5 18.4 32 18.4m0 22.7c-5 0-9.1-4.1-9.1-9.1s4.1-9.1 9.1-9.1s9.1 4.1 9.1 9.1s-4.1 9.1-9.1 9.1m0-29.8c1.2 0 2.3-1 2.3-2.3V4c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v5.1c.1 1.2 1.1 2.2 2.3 2.2m0 41.4c-1.2 0-2.3 1-2.3 2.3v5c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3v-5.1c0-1.2-1.1-2.2-2.3-2.2M48.3 18c.6 0 1.2-.2 1.6-.7l3.2-3.2c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0l-3.2 3.2c-.9.9-.9 2.3 0 3.2c.4.5 1 .7 1.6.7M14.2 46.7L11 49.8c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7l3.2-3.2c.9-.9.9-2.3 0-3.2c-.9-.8-2.4-.8-3.2.1M60 29.8h-5.1c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3M11.3 32c0-1.2-1-2.3-2.3-2.3H4c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h5.1c1.2 0 2.2-1.1 2.2-2.3m38.5 14.7c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l3.2 3.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2zM14.2 11c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l3.2 3.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2z"></svg:path>`,
})
export class LineiconsSunIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSun1Icon],svg[lineicons-sun-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.023 2.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.523 12.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m5.5-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.095 6.491a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06zm2.928 6.009a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75m-3.989 7.07a.75.75 0 0 0 1.06-1.061l-1.06-1.06a.75.75 0 1 0-1.06 1.06zm-6.011-.07a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75m-4.95-.985a.75.75 0 0 0-1.06-1.061l-1.061 1.06a.75.75 0 0 0 1.06 1.061zM5.023 12.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75m.99-4.954a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 0 0-1.061 1.06z"></svg:path>`,
})
export class LineiconsSun1Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSupabaseIcon],svg[lineicons-supabase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="lineiconsSupabase0" fill="currentColor" d="M13.644 21.668c-.511.643-1.547.29-1.56-.531l-.18-12.016h8.08c1.463 0 2.28 1.69 1.37 2.836z"></svg:path></svg:defs><svg:use href="#lineiconsSupabase0"></svg:use><svg:use href="#lineiconsSupabase0"></svg:use><svg:path fill="currentColor" d="M10.357 2.332c.511-.643 1.547-.29 1.56.531l.079 12.016h-7.98c-1.463 0-2.279-1.69-1.369-2.836z"></svg:path>`,
})
export class LineiconsSupabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSupportIcon],svg[lineicons-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.9 20.3H14c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h16.8c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.1-2.2m-9.1 12.4H14c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h7.7c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.1-2.2m26.8 1.8c-.1-.1-.2-.2-.4-.2c-.1-.1-.3-.1-.4-.1c-.7-.1-1.5.1-2 .6l-.3.3c-.1.1-.2.3-.2.4c-.1.1-.1.3-.1.4c0 .2-.1.3-.1.4c0 .2 0 .3.1.4c0 .2.1.3.1.4c.1.1.1.3.2.4l.3.3c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7l.3-.3c.1-.1.1-.2.2-.4c.1-.1.1-.3.1-.4v-.4c0-.6-.2-1.2-.7-1.6c-.1 0-.2-.1-.3-.2m-.7-18.6c-2.5-.3-4.8.9-6 3.1c-.6 1.1-.2 2.5.9 3c1.1.6 2.5.2 3-.9c.3-.5.9-.8 1.5-.7s1.2.6 1.2 1.1c.1.7-.3 1.1-.7 1.3c-1.7.8-2.9 2.8-2.9 4.6v1.3c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-1.3c0-.2.2-.5.4-.6c2.2-1.1 3.5-3.4 3.2-5.9c-.2-2.6-2.4-4.7-5-5"></svg:path><svg:path fill="currentColor" d="M56 7.9H8c-3.4 0-6.2 2.8-6.2 6.2v37.7c0 1.6.9 3.1 2.4 3.8c.6.3 1.2.4 1.8.4c1 0 1.9-.3 2.7-1l8.5-7H56c3.4 0 6.2-2.8 6.2-6.2V14.2c0-3.5-2.8-6.3-6.2-6.3m1.8 33.9c0 1-.8 1.8-1.8 1.8H16.3c-.5 0-1 .2-1.4.5l-8.6 7.1v-37c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v27.6z"></svg:path>`,
})
export class LineiconsSupportIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSurfBoardIcon],svg[lineicons-surf-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43.2 2c-.7-.4-1.6-.4-2.3 0c-3.3 1.7-6.4 4.4-8.9 7.9c-2.5-3.5-5.6-6.2-8.9-7.9c-.7-.4-1.6-.4-2.3 0C10.9 6.9 4.3 20.5 4.3 35.8c0 9.6 2.5 18.6 7.1 25.3c.5.7 1.3 1.1 2.1 1.1h36.9c.9 0 1.7-.4 2.1-1.1c4.6-6.7 7.1-15.7 7.1-25.3c.1-15.3-6.5-28.9-16.4-33.8M8.8 35.8c0-.9 0-1.9.1-2.8l24.8-8.8q.9 3.45 1.2 7.2L9 40.7c-.1-1.6-.2-3.2-.2-4.9M21.9 6.5c3.1 1.8 5.9 4.8 8.1 8.7c.8 1.5 1.6 3.1 2.2 4.7L9.4 28.1c1.6-9.8 6.2-18 12.5-21.6m7.4 51.3H14.6c-2.3-3.6-3.9-7.9-4.9-12.6l25.4-9.1c0 7.5-1.8 14.7-5 20.3c-.3.5-.6.9-.8 1.4m20.1 0H34.5c3.3-6.2 5.1-14 5.1-21.9s-1.8-15.5-5-21.7c2.1-3.4 4.7-6 7.5-7.6C50 11 55.2 22.7 55.2 35.8c0 8.3-2 16.1-5.8 22"></svg:path>`,
})
export class LineiconsSurfBoardIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSurfboard2Icon],svg[lineicons-surfboard-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.678 20.5C4.936 18.536 4.5 15.966 4.5 13.185c0-2.955.492-5.665 1.316-7.664c.41-.998.92-1.855 1.522-2.474C7.944 2.425 8.691 2 9.548 2c.859 0 1.606.425 2.211 1.047c.603.619 1.112 1.476 1.523 2.474q.154.374.292.779q.169-.242.34-.467c.639-.835 1.334-1.515 2.06-1.946c.728-.434 1.543-.648 2.356-.43c.814.218 1.413.81 1.827 1.55c.412.737.675 1.673.81 2.716c.271 2.09.05 4.763-.694 7.542c-.527 1.967-1.256 3.76-2.093 5.235H20a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5zM7.203 6.092C6.47 7.869 6 10.377 6 13.185c0 2.934.513 5.533 1.297 7.315h2.788c-.324-2.128-.114-4.905.659-7.788c.46-1.719 1.074-3.302 1.778-4.656a14 14 0 0 0-.627-1.964c-.367-.89-.785-1.562-1.21-1.999c-.423-.434-.807-.593-1.136-.593c-.33 0-.713.159-1.136.593c-.426.437-.844 1.108-1.21 1.999M16.427 20.5a17.6 17.6 0 0 0 1.538-3.026l-2.436-2.226a.75.75 0 0 0-.667-.18l-3.223.71c-.262 1.81-.26 3.444-.034 4.722zm-3.205-10.409l2.4-.528a2.25 2.25 0 0 1 2.001.536l1.814 1.658c.177-1.435.185-2.746.043-3.84c-.12-.929-.344-1.662-.632-2.177c-.287-.512-.603-.753-.906-.834c-.302-.08-.697-.03-1.201.27c-.507.301-1.067.825-1.635 1.568c-.67.877-1.32 2.017-1.884 3.347m-.63 1.675a24 24 0 0 0-.662 2.412l2.609-.574a2.25 2.25 0 0 1 2.002.536l1.972 1.802a24 24 0 0 0 .633-2.42l-2.535-2.316a.75.75 0 0 0-.667-.178z"></svg:path>`,
})
export class LineiconsSurfboard2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSuspectIcon],svg[lineicons-suspect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3s31.3-14 31.3-31.3S49.2.8 32 .8m0 58c-14.8 0-26.8-12-26.8-26.8S17.3 5.3 32 5.3s26.8 12 26.8 26.8s-12 26.7-26.8 26.7"></svg:path><svg:path fill="currentColor" d="M43.7 43H20.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h23.3c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.2-2.3M28.9 21.5c0-1.2-1-2.3-2.3-2.3h-10c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h10c1.3 0 2.3-1.1 2.3-2.3m18.4-2.2h-10c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h10c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsSuspectIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSvelteIcon],svg[lineicons-svelte-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.096 2.89c2.61-1.69 6.223-.902 8.052 1.756v.003a5.75 5.75 0 0 1 .958 4.307a5.4 5.4 0 0 1-.787 1.996a5.72 5.72 0 0 1 .545 3.608a5.4 5.4 0 0 1-.815 2.046a5.3 5.3 0 0 1-1.561 1.535l-4.582 2.97c-2.603 1.689-6.223.9-8.052-1.757a5.7 5.7 0 0 1-.908-2.055a5.8 5.8 0 0 1-.054-2.252a5.4 5.4 0 0 1 .787-1.997a5.7 5.7 0 0 1-.64-2.614q0-.504.087-1a5.4 5.4 0 0 1 .82-2.044A5.3 5.3 0 0 1 6.51 5.86zM9.731 19.723q.465 0 .917-.118c.33-.09.644-.231.932-.417l4.579-2.967c.372-.239.692-.553.938-.924s.413-.79.491-1.23q.054-.3.053-.605c0-.714-.22-1.41-.628-1.991a3.66 3.66 0 0 0-1.304-1.169A3.6 3.6 0 0 0 13.103 10c-.33.09-.644.23-.931.415l-1.75 1.139a1 1 0 0 1-.283.125q-.135.037-.275.036a1.08 1.08 0 0 1-.9-.478a1.05 1.05 0 0 1-.19-.601q.005-.087.02-.172a1 1 0 0 1 .432-.652l4.587-2.967a1 1 0 0 1 .282-.125q.133-.039.272-.043a1.08 1.08 0 0 1 .9.479c.124.177.19.388.19.604v.09l-.016.172l.17.054a5.9 5.9 0 0 1 1.795.911l.234.174l.086-.267q.07-.213.11-.434q.052-.3.052-.6a3.46 3.46 0 0 0-.62-1.993a3.66 3.66 0 0 0-1.308-1.17a3.63 3.63 0 0 0-2.61-.302c-.33.09-.644.231-.932.417L7.832 7.78a3.2 3.2 0 0 0-.938.925a3.26 3.26 0 0 0-.543 1.828c0 .714.22 1.41.628 1.99a3.66 3.66 0 0 0 1.304 1.169a3.6 3.6 0 0 0 2.605.303c.33-.09.643-.23.931-.415l1.747-1.133q.13-.086.28-.125q.136-.037.276-.036a1.08 1.08 0 0 1 .902.478c.125.175.193.385.194.601a.99.99 0 0 1-.447.829l-4.582 2.983a1 1 0 0 1-.558.161a1.08 1.08 0 0 1-.9-.488a1.05 1.05 0 0 1-.19-.602v-.09l.017-.172l-.17-.053a5.9 5.9 0 0 1-1.795-.911l-.234-.18l-.087.266a3 3 0 0 0-.11.435a3.46 3.46 0 0 0 .577 2.59c.334.49.782.892 1.303 1.17s1.1.422 1.689.421" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsSvelteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSwiftIcon],svg[lineicons-swift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7.563v-.579c0-.45-.032-.868-.129-1.318c-.032-.45-.225-.868-.418-1.222c-.418-.772-1.029-1.447-1.865-1.865c-.418-.193-.803-.354-1.254-.418c-.45-.032-.868-.129-1.318-.129H6.695c-.354 0-.644.032-.997.097a3.6 3.6 0 0 0-.965.257c-.096.032-.225.096-.321.129a8 8 0 0 0-.804.61c-.097.033-.161.13-.29.226a4.8 4.8 0 0 0-.771 1.028c-.193.419-.354.804-.418 1.255c-.065.45-.097.868-.129 1.318v10.032c0 .45.032.868.129 1.318c.032.45.225.869.418 1.254c.418.804 1.029 1.447 1.865 1.865c.418.193.803.354 1.254.418c.45.033.868.129 1.318.129h10.033c.45 0 .867-.032 1.317-.129c.45-.032.869-.225 1.254-.418c.772-.418 1.447-1.029 1.865-1.865c.193-.418.354-.803.418-1.254c.065-.45.129-.868.129-1.318zM18.881 18.27c-.9-1.704-2.54-1.318-3.376-.868a.7.7 0 0 1-.225.129h-.065c-1.704.964-4.115.996-6.463-.032a10.7 10.7 0 0 1-4.662-4.02a7.5 7.5 0 0 0 1.769 1.03c2.54 1.189 5.016 1.092 6.816 0c-2.54-1.93-4.598-4.47-6.27-6.496a10 10 0 0 1-.868-1.125c1.93 1.768 5.016 4.019 6.11 4.598c-2.348-2.444-4.374-5.53-4.31-5.37c3.666 3.698 7.042 5.82 7.042 5.82c.129.032.226.128.322.193c.032-.193.129-.354.193-.547c.579-2.122-.032-4.598-1.543-6.592c3.44 2.026 5.434 5.917 4.598 9.229c-.033.032-.033.128-.033.225c1.64 1.961 1.19 4.212.965 3.826"></svg:path>`,
})
export class LineiconsSwiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsSyringeIcon],svg[lineicons-syringe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61.6 15.3L48.7 2.4c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l4.8 4.8l-4.9 4.9l-1-1c-3-3-7.9-3-10.9 0L15.6 32.4c-1.8 1.8-2.5 4.3-2.1 6.7L11 41.5C9.6 43 8.8 44.9 8.8 47c0 1.4.4 2.8 1.1 4l-7.5 7.5c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7l7.5-7.5c1.2.7 2.5 1.1 4 1.1c2.1 0 4-.8 5.5-2.3l2.4-2.4c.4.1.8.1 1.3.1c2 0 3.9-.8 5.5-2.3l18.1-18.1c3-3 3-7.9 0-10.9l-1-1l4.9-4.9l4.8 4.8c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.7-.7.7-2.2-.2-3M14.8 49.8l-.5-.5c-.6-.6-.9-1.4-.9-2.3s.3-1.7.9-2.3l1.4-1.4l5.1 5.1l-1.4 1.4c-1.3 1.2-3.4 1.2-4.6 0m31.7-22.6l-18.1 18c-1.3 1.2-3.3 1.3-4.5 0l-5.1-5.1c-1.3-1.3-1.3-3.3 0-4.5l18.1-18.1c1.3-1.3 3.3-1.3 4.5 0l5.1 5.1c1.3 1.3 1.3 3.3 0 4.6"></svg:path>`,
})
export class LineiconsSyringeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTShirtIcon],svg[lineicons-t-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M45.1 58.6H18.7c-4 0-7.3-3.1-7.6-7.2L9.6 23.3H5.7c-1.7 0-3.1-1.3-3.2-2.9L1.8 8.6c0-1.8 1.4-3.1 3.2-3.1h18.4c1.4 0 2.6.9 3.1 2.3l.1.4c.3 2.4 2.7 4.4 5.5 4.4s5.2-1.9 5.5-4.3c.1-1.5 1.5-2.8 3.2-2.8h18.4c1.8 0 3.2 1.4 3.2 3.1v.2l-.8 11.7c-.1 1.6-1.5 2.9-3.2 2.9h-4.1l-1.5 28.1c-.3 3.9-3.6 7.1-7.7 7.1m-31-36.9l1.6 29.4c.1 1.6 1.4 2.9 3.1 2.9h26.5c1.6 0 3-1.3 3.1-2.9L50 21.7c0-1.8 1.7-2.9 3.2-2.9h4.1l.6-8.9H41.8C40.7 14 36.7 17 32 17s-8.7-3-9.8-7.1H6.3l.6 8.9h4c1.7 0 3.1 1.3 3.2 2.9"></svg:path>`,
})
export class LineiconsTShirtIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTabIcon],svg[lineicons-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.995 17.25a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.75 2A2.25 2.25 0 0 0 4.5 4.25v15.5A2.25 2.25 0 0 0 6.75 22h10.5a2.25 2.25 0 0 0 2.25-2.25V4.25A2.25 2.25 0 0 0 17.25 2zM6 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsTabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTagIcon],svg[lineicons-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M57.4 16.3c0-2.3-1.9-4.1-4.2-4.2l-8.8-.1C40.2 5.6 32.7-.7 21.3 1.1c-1.2.2-2.1 1.3-1.9 2.6c.2 1.2 1.3 2.1 2.6 1.9C30 4.3 35.4 8 38.7 12l-6.3-.1h-.1c-1.1 0-2.2.5-3 1.2L8.1 34.2c-1.2 1.2-1.8 2.7-1.8 4.4s.6 3.2 1.8 4.4l18.3 18.3c1.2 1.2 2.8 1.8 4.4 1.8s3.2-.6 4.4-1.8l21.2-21.2c.8-.8 1.3-1.9 1.2-3.1zM32.1 58.2c-.7.7-1.8.7-2.5 0L11.3 39.9c-.3-.3-.5-.8-.5-1.2c0-.5.2-.9.5-1.2l21.2-21.2l9.4.2c.4.8.7 1.5 1 2.1c-1.7 1-2.8 2.9-2.8 5c0 3.2 2.6 5.8 5.8 5.8s5.8-2.6 5.8-5.8c0-2.7-1.8-4.9-4.3-5.6c-.2-.4-.3-.9-.5-1.3l6 .1l.4 20.4zm13.7-36.1c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3"></svg:path>`,
})
export class LineiconsTagIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTailwindcssIcon],svg[lineicons-tailwindcss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 9.969q1-4.063 5-4.063c4 0 4.5 3.047 6.5 3.555q2 .508 3.5-1.524Q21 12 17 12c-4 0-4.5-3.047-6.5-3.555Q8.5 7.938 7 9.97m-5 6.094Q3 12 7 12c4 0 4.5 3.047 6.5 3.555q2 .507 3.5-1.524q-1 4.063-5 4.063c-4 0-4.5-3.047-6.5-3.555q-2-.508-3.5 1.524" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsTailwindcssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTargetIcon],svg[lineicons-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 29.8h-5.9c-1-10.8-9.4-19.5-19.9-20.6V4c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v5.2c-10.5 1.1-18.9 9.7-19.9 20.6H4c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h5.9c1 10.8 9.4 19.5 19.9 20.6v5c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3v-5.2c10.5-1.1 18.9-9.7 19.9-20.6H60c1.2 0 2.3-1 2.3-2.3c0-1.1-1.1-2.1-2.3-2.1m-10.4 0h-6.2c-.9-4.8-4.5-8.6-9.2-9.5v-6.5c8.1 1 14.4 7.6 15.4 16M32 39.5c-4 0-7.2-3.4-7.2-7.5s3.2-7.4 7.1-7.5c3.9 0 7.1 3.4 7.1 7.5c.1 4.1-3.1 7.4-7 7.5m-2.2-25.8v6.5c-4.6.9-8.3 4.7-9.2 9.5h-6.2c1-8.3 7.3-14.9 15.4-16M14.4 34.3h6.2c.9 4.8 4.5 8.6 9.2 9.5v6.5c-8.1-1.1-14.4-7.7-15.4-16m19.9 16v-6.5c4.6-.9 8.3-4.7 9.2-9.5h6.2c-1.1 8.3-7.4 14.9-15.4 16"></svg:path>`,
})
export class LineiconsTargetIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTargetCustomerIcon],svg[lineicons-target-customer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 29.8h-5.9C53 19.3 44.7 11 34.3 9.9V4c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v5.9C19.3 11 11 19.3 9.9 29.8H4c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h5.9c1 10.6 9.4 19 19.9 20.1V60c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3v-5.6c10.5-1.1 18.9-9.5 19.9-20.1H60c1.2 0 2.3-1 2.3-2.3c0-1.2-1.1-2.2-2.3-2.2m-25.8 20c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2c-8-1-14.4-7.5-15.3-15.6h2.3c1.2 0 2.3-1 2.3-2.3c0-1.2-1-2.3-2.3-2.3h-2.3c1.1-8 7.4-14.3 15.3-15.3c.1 1.1 1.1 2 2.2 2s2.1-.9 2.2-2c8 1 14.3 7.3 15.3 15.3c-1.1.1-2 1.1-2 2.2c0 1.2.9 2.1 2 2.2c-.8 8.3-7.2 14.8-15.3 15.8"></svg:path><svg:path fill="currentColor" d="M38.1 36.1c1.3-1.4 2.1-3.3 2.1-5.4c0-4.5-3.7-8.2-8.2-8.2s-8.2 3.7-8.2 8.2c0 2.1.8 4 2.1 5.4c-1.6.7-3 1.6-4.3 2.7c-.9.8-1 2.2-.2 3.2c.4.5 1.1.8 1.7.8c.5 0 1.1-.2 1.5-.6c2.1-1.8 4.7-2.9 7.4-2.9c2.8 0 5.4 1 7.4 2.8c.9.8 2.3.8 3.2-.2c.8-.9.8-2.3-.2-3.2c-1.3-1-2.7-1.9-4.3-2.6M32 27c2 0 3.7 1.7 3.7 3.7S34 34.4 32 34.4s-3.7-1.7-3.7-3.7S30 27 32 27"></svg:path>`,
})
export class LineiconsTargetCustomerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTargetRevenueIcon],svg[lineicons-target-revenue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61 29.8h-5.2C54.7 18.4 45.6 9.3 34.3 8.2V3c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v5.2C18.4 9.3 9.3 18.4 8.2 29.8H3c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h5.2C9.3 45.8 18.4 54.9 29.8 56v5c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3v-5.2C45.8 54.7 54.9 45.6 56 34.2h5c1.2 0 2.3-1 2.3-2.3c0-1.1-1.1-2.1-2.3-2.1M34.3 51.3v-.8c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v.8c-8.9-1-16-8.1-17-17h.8c1.2 0 2.3-1 2.3-2.3c0-1.2-1-2.3-2.3-2.3h-.8c1-8.9 8.1-16 17-17v.8c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3v-.8c8.9 1 16 8.1 17 17h-.8c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h.8c-1.1 8.9-8.1 15.9-17 17"></svg:path><svg:path fill="currentColor" d="M34.5 29.8h-5c-.8 0-1.5-.6-1.5-1.3s.7-1.3 1.5-1.3h7.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-2c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2h-.9c-3.3 0-6 2.6-6 5.8s2.7 5.8 6 5.8h5c.8 0 1.5.6 1.5 1.3s-.7 1.3-1.5 1.3h-8.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h4.4c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2c3.1-.2 5.6-2.7 5.6-5.8c-.1-3.2-2.8-5.8-6.1-5.8"></svg:path>`,
})
export class LineiconsTargetRevenueIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTargetUserIcon],svg[lineicons-target-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.384 9.86a1.616 1.616 0 1 1 3.232 0a1.616 1.616 0 0 1-3.232 0m.402 2.227a2.24 2.24 0 0 0-2.238 2.238v.93c0 .415.336.75.75.75h5.405a.75.75 0 0 0 .75-.75v-.93a2.24 2.24 0 0 0-2.238-2.238zm-.738 2.238c0-.407.33-.738.738-.738h2.428c.408 0 .739.33.739.738v.18h-3.905z"></svg:path><svg:path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0v1.282a8.75 8.75 0 0 0-7.968 7.968H2a.75.75 0 0 0 0 1.5h1.282a8.75 8.75 0 0 0 7.968 7.968V22a.75.75 0 0 0 1.5 0v-1.282a8.75 8.75 0 0 0 7.968-7.968H22a.75.75 0 0 0 0-1.5h-1.282a8.75 8.75 0 0 0-7.968-7.968zm-7.5 10.75a.75.75 0 0 0 0-1.5h-.462a7.25 7.25 0 0 1 6.462-6.462v.462a.75.75 0 0 0 1.5 0v-.462a7.25 7.25 0 0 1 6.462 6.462h-.462a.75.75 0 0 0 0 1.5h.462a7.25 7.25 0 0 1-6.462 6.462v-.462a.75.75 0 0 0-1.5 0v.462a7.25 7.25 0 0 1-6.462-6.462z"></svg:path>`,
})
export class LineiconsTargetUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTaxiIcon],svg[lineicons-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.6 41.2h6.1c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-6.1c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2m25.5 0h6.1c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-6.1c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2"></svg:path><svg:path fill="currentColor" d="M60 24.6h-3.9l-4.5-11.5c-.6-1.8-2.4-3-4.4-3h-5.1l-.7-2.3c-.7-2.1-2.6-3.6-4.8-3.6h-9.2c-2.2 0-4.2 1.4-4.8 3.6l-.7 2.3h-5.7c-1.9 0-3.6 1.2-4.4 3L7.2 24.6H4c-1.2 0-2.2 1-2.2 2.2S2.8 29 4 29h1.5v15.8c0 2.6 1.9 4.7 4.3 5.2v3.5c0 3.4 2.8 6.2 6.2 6.2h1.7c3.4 0 6.2-2.8 6.2-6.2v-3.4h14.8v3.4c0 3.4 2.8 6.2 6.2 6.2h1.7c3.4 0 6.2-2.8 6.2-6.2V50c2.7-.2 4.8-2.5 4.8-5.2V29H60c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2M26.9 9.1c.1-.2.3-.4.5-.4h9.2c.2 0 .5.2.5.4l.3 1H26.6zm-11 5.6s.1-.2.2-.2h31.1c.1 0 .2.1.2 0v.1L52.3 27H11.1zm3.6 38.8c0 1-.8 1.8-1.8 1.8H16c-1 0-1.8-.8-1.8-1.8v-3.4h5.2v3.4zm29 0c0 1-.8 1.8-1.8 1.8H45c-1 0-1.8-.8-1.8-1.8v-3.4h5.2v3.4zm4.9-8.6c0 .4-.3.8-.8.8H10.8c-.4 0-.8-.3-.8-.8V31.5h43.4z"></svg:path>`,
})
export class LineiconsTaxiIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTeabagIcon],svg[lineicons-teabag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 31.7h5.1c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-5.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3"></svg:path><svg:path fill="currentColor" d="m59.7 42.7l-3.8-1.9V22.2c0-11.3-9-20.5-20.1-20.5c-11 0-18.6 6-19.9 15.3H8.3c-1.7 0-3.1 1.2-3.5 2.9l-1.6 6.9c-.2.5-.2.9-.2 1.1v28.2c0 1.6.6 3.2 1.8 4.3s2.7 1.8 4.3 1.8l17.7-.1c3.4 0 6.1-2.8 6.1-6.1V27.8c0-.2 0-.4-.1-.5L31 19.9c-.3-1.7-1.8-2.9-3.5-2.9h-7.2c1.4-7.9 8.8-10.8 15.3-10.8c8.6 0 15.6 7.2 15.6 16v18.6l-3.8 1.9c-.8.4-1.2 1.2-1.2 2V58c0 2.3 1.9 4.2 4.2 4.2h6.3c2.3 0 4.2-1.9 4.2-4.2V44.7c.1-.8-.4-1.6-1.2-2M28.4 27.9V56c0 .9-.7 1.6-1.6 1.6l-17.7.1c-.4 0-.8-.2-1.1-.5s-.5-.7-.5-1.1v-28L9 21.5h17.8zm28.1 29.9h-5.7V46.1l2.8-1.4l2.8 1.4v11.7z"></svg:path>`,
})
export class LineiconsTeabagIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTelegramIcon],svg[lineicons-telegram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.936 5.17l-3.03 14.185c-.226.999-.806 1.224-1.644.773l-4.545-3.352l-2.225 2.127c-.225.226-.451.452-.967.452l.355-4.675l8.478-7.704c.354-.355-.097-.484-.548-.193l-10.541 6.64l-4.546-1.386c-.999-.322-.999-1 .226-1.45L20.614 3.72c.87-.258 1.612.194 1.322 1.45"></svg:path>`,
})
export class LineiconsTelegramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTelegramOriginalIcon],svg[lineicons-telegram-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m62.8 10.8l-9.4 44c-.7 3.1-2.5 3.8-5.1 2.4L34.2 46.8l-6.9 6.6c-.7.7-1.4 1.4-3 1.4l1.1-14.5l26.3-23.9c1.1-1.1-.3-1.5-1.7-.6L17.3 36.4L3.2 32.1c-3.1-1-3.1-3.1.7-4.5L58.7 6.3c2.7-.8 5 .6 4.1 4.5"></svg:path>`,
})
export class LineiconsTelegramOriginalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTelephone1Icon],svg[lineicons-telephone-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.265 3.257a2.584 2.584 0 0 1 4.18.758l1.622 3.567c.4.88.272 1.897-.307 2.648c-.19.245-.428.397-.617.493l-2.8 1.436a17.3 17.3 0 0 0 2.438 3.06a17.3 17.3 0 0 0 3.06 2.438l1.436-2.8c.097-.19.248-.427.493-.617a2.58 2.58 0 0 1 2.648-.306l3.567 1.62a2.584 2.584 0 0 1 .758 4.18l-1.068 1.069a2.33 2.33 0 0 1-2.056.661A18.64 18.64 0 0 1 7.72 16.28a18.64 18.64 0 0 1-5.184-9.899a2.33 2.33 0 0 1 .661-2.056m9.951 14.071a17.2 17.2 0 0 0 4.737 1.592a.83.83 0 0 0 .729-.246l1.068-1.068a1.084 1.084 0 0 0-.318-1.754l-3.567-1.62a1.09 1.09 0 0 0-1.11.127l-.021.024a1 1 0 0 0-.054.09zm-7.544-7.544L8.46 9.39a1 1 0 0 0 .09-.055l.024-.02c.243-.315.296-.743.128-1.111L7.08 4.636a1.084 1.084 0 0 0-1.754-.318L4.258 5.386a.83.83 0 0 0-.246.729c.294 1.632.825 3.23 1.592 4.737" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m3.197 4.325l1.068-1.068z"></svg:path>`,
})
export class LineiconsTelephone1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTelephone3Icon],svg[lineicons-telephone-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m9.406 5.021l.643 1.998c.051.158.103.383.071.64a2.1 2.1 0 0 1-1.344 1.709l-2.693 1.01a2.096 2.096 0 0 1-2.832-1.963V7.306c0-.607.28-1.206.81-1.574A13.9 13.9 0 0 1 12 3.25c2.95 0 5.688.917 7.941 2.482c.53.368.81.967.81 1.574v1.109a2.096 2.096 0 0 1-2.833 1.962l-2.692-1.01a2.1 2.1 0 0 1-1.344-1.708c-.032-.257.02-.482.07-.64l.644-1.998A12.5 12.5 0 0 0 12 4.75c-.89 0-1.758.093-2.595.271m-1.447.4a12.4 12.4 0 0 0-3.043 1.543a.41.41 0 0 0-.165.342v1.109c0 .416.416.704.806.558l2.692-1.01a.6.6 0 0 0 .379-.462l-.006-.022zM15.38 7.48l-.006.022a.6.6 0 0 0 .379.462l2.692 1.01a.596.596 0 0 0 .805-.558v-1.11a.41.41 0 0 0-.164-.342a12.4 12.4 0 0 0-3.043-1.542zm-3.379 5.282a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m-1.25 2.75a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M9.994 10.53a5.25 5.25 0 0 1 4.015 0l4.815 1.993a2.25 2.25 0 0 1 1.332 1.572l.901 3.898a2.25 2.25 0 0 1-2.192 2.757H5.138a2.25 2.25 0 0 1-2.192-2.757l.9-3.897a2.25 2.25 0 0 1 1.332-1.573zm3.441 1.387a3.75 3.75 0 0 0-2.867 0l-4.816 1.992a.75.75 0 0 0-.444.524l-.901 3.898a.75.75 0 0 0 .73.919h13.728a.75.75 0 0 0 .73-.92l-.9-3.897a.75.75 0 0 0-.444-.524z"></svg:path></svg:g>`,
})
export class LineiconsTelephone3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTeslaIcon],svg[lineicons-tesla-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.334 5.119c-3.298-1.46-6.52-1.924-9.334-1.902c-2.815-.022-6.038.442-9.335 1.902c-.393-.724-.554-1.162-.554-1.162C5.716 2.508 9.092 2.012 12 2c2.908.012 6.284.508 9.889 1.957c0 0-.113.356-.554 1.162m-6.566 1.078L12 22L9.21 6.194c-2.619.002-3.45.296-3.57 1.495c0 0-1.77-.67-2.662-2.03c3.482-1.64 6.98-1.713 6.98-1.713L12 6.468l2.039-2.522s3.498.074 6.98 1.713c-.892 1.36-2.661 2.03-2.661 2.03c-.12-1.199-.952-1.492-3.59-1.492" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsTeslaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTextAlignCenterIcon],svg[lineicons-text-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.6 8.9h40.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H11.6c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3M7.8 25.8h48.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H7.8c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3m7.7 12.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h33.1c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM60 55.1H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsTextAlignCenterIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTextAlignJustifyIcon],svg[lineicons-text-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8.9h56c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H4c-1.2 0-2.3 1-2.3 2.3S2.8 8.9 4 8.9m56 12.4H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3m0 16.9H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3M42.5 55.1H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h38.5c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsTextAlignJustifyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTextAlignLeftIcon],svg[lineicons-text-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8.9h40.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H4c-1.2 0-2.3 1-2.3 2.3S2.8 8.9 4 8.9m0 16.9h48.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H4c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3m0 16.9h33.1c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H4c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3m56 12.4H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsTextAlignLeftIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTextAlignRightIcon],svg[lineicons-text-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.3 8.9H60c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H19.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3M60 21.3H11.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3m0 16.9H26.9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3m0 16.9H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsTextAlignRightIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTextFormatIcon],svg[lineicons-text-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 3.25a.75.75 0 0 1 .685.445l5.778 13a.75.75 0 0 1-1.37.61l-1.657-3.727H7.564l-1.656 3.726a.75.75 0 1 1-1.371-.609l5.778-13A.75.75 0 0 1 11 3.25m-2.77 8.828h5.54L11 5.847z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.75 4v13a.75.75 0 0 0 1.5 0V4a.75.75 0 1 0-1.5 0M17.5 20.75h-13a.75.75 0 0 1 0-1.5h13a.75.75 0 1 1 0 1.5"></svg:path>`,
})
export class LineiconsTextFormatIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTextFormatRemoveIcon],svg[lineicons-text-format-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.42 4.945a.75.75 0 0 0-1.371 0l-4.89 11a.75.75 0 1 0 1.372.61L5.9 13.47h5.666l1.37 3.085a.75.75 0 0 0 1.371-.61zm1.48 7.025H6.568l2.166-4.873z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.218 19.5H3.25a.75.75 0 1 1 0-1.5h10.969a.75.75 0 1 1 0 1.5m2.973-5.308a.75.75 0 0 0 0 1.06l1.483 1.484l-1.483 1.484a.75.75 0 1 0 1.06 1.06l1.484-1.483l1.484 1.484a.75.75 0 0 0 1.06-1.06l-1.483-1.485l1.483-1.484a.75.75 0 1 0-1.06-1.06l-1.484 1.484l-1.484-1.484a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class LineiconsTextFormatRemoveIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTextParagraphIcon],svg[lineicons-text-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3.25a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5zm0 10.667a.75.75 0 0 0 0 1.5h16a.75.75 0 1 0 0-1.5zM3.75 20a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75M4.5 8.583a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class LineiconsTextParagraphIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsThoughtIcon],svg[lineicons-thought-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.5 44.2c-4.9 0-9.6-2.5-12.4-6.6C8 35 4.8 29.8 4.8 24.2c0-8.3 6.8-15.1 15.1-15.2c.7 0 1.4 0 2.1.1C24.5 4 29.7.7 35.5.7c6.7 0 12.6 4.5 14.4 10.9c5.6 2.3 9.3 7.7 9.3 13.9c0 8.3-6.7 15-15 15c-2.5 0-4.9-.6-7.1-1.8c-2.9 3.4-7.1 5.4-11.6 5.5m-5.6-30.7c-5.8.1-10.6 4.8-10.6 10.7c0 4.1 2.5 7.9 6.2 9.6c.4.2.7.5 1 .9c1.9 3.1 5.3 5 8.9 5c3.7-.1 7.1-2 9.1-5.1c.3-.5.9-.9 1.5-1s1.3 0 1.8.4c1.9 1.4 4.1 2.2 6.4 2.2c5.8 0 10.5-4.7 10.5-10.5c0-4.7-3-8.7-7.4-10.1c-.8-.2-1.4-.9-1.5-1.7c-1-4.9-5.3-8.5-10.3-8.5c-4.5 0-8.5 2.9-10 7.2c-.4 1.1-1.6 1.8-2.7 1.5c-1-.5-2-.6-2.9-.6M40.7 56c-3.6 0-6.6-3-6.6-6.6s3-6.6 6.6-6.6s6.6 3 6.6 6.6s-2.9 6.6-6.6 6.6m0-8.7c-1.2 0-2.1.9-2.1 2.1s.9 2.1 2.1 2.1s2.1-.9 2.1-2.1c.1-1.2-.9-2.1-2.1-2.1m11.9 16c-3 0-5.4-2.4-5.4-5.4s2.4-5.4 5.4-5.4c1.5 0 2.9.6 3.9 1.6S58 56.5 58 58v.2c-.2 2.8-2.5 5.1-5.4 5.1m0-6.3c-.5 0-.9.4-.9.9s.4.9.9.9s.8-.4.9-.9c0-.3-.1-.4-.2-.5c-.1-.2-.4-.4-.7-.4"></svg:path>`,
})
export class LineiconsThoughtIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsThumbsDownIcon],svg[lineicons-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.5 8.1c-4.5-3-10.9-4.7-17.7-4.7c-1.2 0-2.2 0-3.5.1c-8.1.7-13.5 2-16.2 3.8c0 0-.1 0-.1.1l-.5.3H6.6c-2.7 0-4.8 2.2-4.8 4.8v22.9c0 2.6 2.2 4.8 4.8 4.8h11.9c.1 0 .2.1.2.1c2.1 2.1 7.5 8.1 13.2 17c1.3 2.1 3.4 3.3 5.9 3.3h.6c2.6-.2 4.8-1.6 5.9-3.8c1.4-2.6.3-10.2-.3-13.9c5.3.1 14 .3 16.6-5.4c3.7-8.7 1.3-23.9-7.1-29.4M6.3 35.5V12.6c0-.2.2-.3.3-.3H12v23.5H6.5c-.1 0-.2-.2-.2-.3m50.1.1c-1.4 3.1-8.6 2.9-12.5 2.8h-2.8c-.7 0-1.3.3-1.8.8c-.4.5-.6 1.2-.4 1.9l.3 1.4c1.4 7.4 1.2 11.5.9 12.2c-.5 1-1.5 1.3-2.2 1.4c-1 .1-1.7-.3-2.3-1.2c-5.9-9.2-11.6-15.4-13.8-17.7c-.9-.9-2.1-1.5-3.5-1.5h-2V12.2c.4 0 .8-.2 1.1-.4l1-.7c1-.6 4.3-2.2 14.2-3.1c1-.1 1.9-.1 3-.1c5.9 0 11.5 1.4 15.3 3.9c6.5 4.2 8.5 17 5.5 23.8"></svg:path>`,
})
export class LineiconsThumbsDownIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsThumbsDown3Icon],svg[lineicons-thumbs-down-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.639 17.13c.424.112.929.228 1.473.313c.76.12 1.624.184 2.463.09c.837-.096 1.7-.356 2.403-.929c1.792-1.461 2.29-3.7 1.894-5.799c-.395-2.092-1.688-4.143-3.626-5.373c-.933-.592-2.16-.853-3.39-.95c-1.246-.097-2.582-.031-3.797.095a37 37 0 0 0-4.373.737l-.006.001H4.25A2.25 2.25 0 0 0 2 7.565v6.958a2.25 2.25 0 0 0 2.25 2.25h2.159l3.503 4.382a2.25 2.25 0 0 0 1.757.845h.256a2.25 2.25 0 0 0 2.194-2.746zm-1.97 3.37a.75.75 0 0 1-.586-.281l-3.564-4.46V6.665q.286-.063.686-.14c.78-.153 1.848-.334 3.01-.455c1.164-.121 2.402-.179 3.524-.091c1.138.09 2.076.323 2.703.72c1.568.996 2.633 2.678 2.956 4.386c.321 1.702-.105 3.328-1.368 4.357c-.408.333-.962.526-1.624.6c-.66.076-1.38.027-2.062-.08a13.4 13.4 0 0 1-2.411-.622l-.034-.012l-.007-.003a.752.752 0 0 0-1.004.864l.768 3.397a.75.75 0 0 1-.731.915zM6.02 6.815v8.458H4.25a.75.75 0 0 1-.75-.75V7.565a.75.75 0 0 1 .75-.75z"></svg:path>`,
})
export class LineiconsThumbsDown3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsThumbsUpIcon],svg[lineicons-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.5 26.6c-2.6-5.8-11.4-5.6-16.6-5.4c.6-3.6 1.7-11.3.3-13.9c-1.1-2.3-3.3-3.7-5.9-3.9s-5 1-6.4 3.3c-5.7 8.9-11.2 14.8-13.2 17c0 0-.1.1-.2.1h-12c-2.6 0-4.8 2.2-4.8 4.8v22.9c0 2.7 2.2 4.8 4.8 4.8h8.9l.5.3s.1 0 .1.1c2.7 1.8 8.2 3.1 16.2 3.8c1.3.1 2.3.1 3.5.1c6.8 0 13.3-1.7 17.7-4.7c8.5-5.5 10.9-20.7 7.1-29.3M6.3 51.4V28.5q0-.3.3-.3H12v23.5H6.6c-.2.1-.3-.1-.3-.3m44.7.8c-3.8 2.5-9.3 3.9-15.3 3.9c-1.1 0-2 0-3-.1c-9.8-.9-13.1-2.4-14.1-3.1l-1-.7c-.3-.2-.7-.4-1.1-.4V28.2h2c1.3 0 2.6-.5 3.5-1.5c2.2-2.2 7.9-8.4 13.8-17.7c.4-.8 1.2-1.2 2.2-1.1c.7.1 1.7.3 2.2 1.4c.3.7.5 4.8-.9 12.1l-.4 1.5c-.2.7 0 1.4.4 1.9s1.1.8 1.8.8h2.8c3.9-.1 11.1-.3 12.4 2.8c3.1 6.8 1.1 19.6-5.3 23.8"></svg:path>`,
})
export class LineiconsThumbsUpIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsThumbsUp3Icon],svg[lineicons-thumbs-up-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.639 6.87l.48-2.124A2.25 2.25 0 0 0 11.925 2h-.256a2.25 2.25 0 0 0-1.757.845L6.409 7.228H4.25A2.25 2.25 0 0 0 2 9.478v6.957a2.25 2.25 0 0 0 2.25 2.25h2.43l.006.001l.267.062a37 37 0 0 0 4.106.675c1.215.127 2.55.192 3.797.095c1.23-.097 2.457-.358 3.39-.95c1.938-1.23 3.23-3.28 3.626-5.373c.396-2.098-.102-4.338-1.894-5.799c-.704-.573-1.566-.833-2.403-.928c-.84-.095-1.702-.03-2.463.09c-.544.085-1.05.2-1.473.313m-1.97-3.37h.256a.75.75 0 0 1 .731.915l-.768 3.397a.75.75 0 0 0 1.004.864l.007-.002l.034-.013l.138-.05a13.4 13.4 0 0 1 2.273-.572c.683-.107 1.402-.155 2.062-.08c.662.074 1.216.267 1.624.6c1.263 1.03 1.69 2.656 1.368 4.358c-.323 1.707-1.388 3.39-2.956 4.385c-.627.398-1.565.631-2.703.72c-1.122.088-2.36.03-3.524-.09a35 35 0 0 1-3.696-.595V8.24l3.564-4.46a.75.75 0 0 1 .586-.281M6.02 17.185H4.25a.75.75 0 0 1-.75-.75V9.478a.75.75 0 0 1 .75-.75h1.77z"></svg:path>`,
})
export class LineiconsThumbsUp3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsThunderIcon],svg[lineicons-thunder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M57.3 19.6c-2.7-2.9-6.4-4.9-10.3-5.6c-2.2-3.5-5.4-6.1-9.1-7.4c-1.7-.7-3.7-1-5.8-1c-9.5 0-17.2 7.4-17.8 16.7c-7 .9-12.5 6.8-12.5 14.1C1.8 44.3 8 50.6 16 50.6c1.2 0 2.2-1 2.3-2.2c0-1.2-1-2.3-2.2-2.3c-5.4 0-9.7-4.3-9.7-9.7s4.3-9.7 9.7-9.7h.5c1.2 0 2.3-1 2.3-2.3v-1c0-7.3 6-13.3 13.3-13.3c1.6 0 3 .2 4.3.7c3.1 1.1 5.7 3.3 7.3 6.3c.4.7 1 1.1 1.7 1.2c3.3.3 6.4 1.9 8.7 4.3c2.4 2.6 3.8 6 3.8 9.5c0 5.8-3.7 11.1-9.2 13.1c-1.2.4-1.8 1.7-1.3 2.9c.4 1.2 1.7 1.8 2.9 1.3c7.3-2.6 12.1-9.6 12.1-17.3c-.2-4.5-2-9-5.2-12.5"></svg:path><svg:path fill="currentColor" d="M48.9 32.3c-.6-1.3-1.8-2-3.2-2h-3.2l.4-.7c.8-1.5.8-3.4-.1-4.9s-2.5-2.4-4.2-2.4h-7.7c-1.9 0-3.7 1.1-4.5 2.9l-5.6 12.5c-.5 1.1-.4 2.4.3 3.4s1.8 1.6 3 1.6h4.5l-3.3 11c-.5 1.7.2 3.4 1.8 4.2c.5.3 1.1.4 1.7.4c1 0 2.1-.5 2.8-1.3l17-20.9c.7-1.1.9-2.5.3-3.8m-18 18.2l2.8-9.4c.2-.7.1-1.4-.3-2s-1.1-.9-1.8-.9h-6.1l5-11.2c.1-.2.2-.2.4-.2h7.7c.2 0 .3.1.4.2s.1.3 0 .4l-2.2 4c-.4.7-.4 1.5 0 2.2s1.1 1.1 1.9 1.1h5z"></svg:path>`,
})
export class LineiconsThunderIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsThunderAltIcon],svg[lineicons-thunder-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M57.3 23.5c-2.7-2.9-6.4-4.9-10.3-5.6c-2.2-3.5-5.4-6.1-9.1-7.4c-1.7-.7-3.7-1-5.8-1c-9.5 0-17.2 7.4-17.8 16.7c-7 .9-12.5 6.9-12.5 14.1C1.8 48.2 8 54.5 16 54.5h27.8c10.2 0 18.6-8.3 18.6-18.5c-.1-4.6-1.9-9.1-5.1-12.5M43.7 50H15.9c-5.4 0-9.7-4.3-9.7-9.7s4.3-9.7 9.7-9.7h.5c1.2 0 2.3-1 2.3-2.3v-1C18.7 20 24.7 14 32 14c1.6 0 3 .2 4.3.7c3.1 1.1 5.7 3.3 7.3 6.3c.4.7 1 1.1 1.7 1.2c3.3.3 6.4 1.9 8.7 4.3c2.4 2.6 3.8 6 3.8 9.5c0 7.8-6.4 14-14.1 14"></svg:path><svg:path fill="currentColor" d="M36.7 31.4h-3.9l4.8-6.2c.8-1 .6-2.4-.4-3.2s-2.4-.6-3.2.4l-7.2 9.3c-.6.8-.7 1.8-.3 2.7s1.3 1.4 2.3 1.4h3.7l-5.1 6.1c-.8 1-.7 2.4.3 3.2c.4.4.9.5 1.4.5c.6 0 1.3-.3 1.7-.8l7.8-9.3c.6-.8.8-1.8.4-2.8c-.4-.7-1.3-1.3-2.3-1.3"></svg:path>`,
})
export class LineiconsThunderAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTicketIcon],svg[lineicons-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M59.6 26.4c1.5-.1 2.7-1.3 2.7-2.9V18c0-3.4-2.7-6.1-6.1-6.1H7.9c-3.4 0-6.1 2.7-6.1 6.1v5.6c0 1.5 1.2 2.8 2.7 2.9c2.8.3 4.9 2.7 4.9 5.6s-2.1 5.3-4.9 5.5c-1.5.1-2.7 1.4-2.7 2.9V46c0 3.4 2.7 6.1 6.1 6.1h48.3c3.4 0 6.1-2.7 6.1-6.1v-5.5c0-1.5-1.2-2.8-2.7-2.9c-2.8-.3-4.9-2.7-4.9-5.6c0-3 2.1-5.4 4.9-5.6m-1.8 15.4V46c0 .9-.7 1.6-1.6 1.6H31.7v-5.4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v5.4H7.9c-.9 0-1.6-.7-1.6-1.6v-4c4.4-1 7.6-5 7.6-9.8c0-4.7-3.2-8.8-7.6-9.9V18c0-.9.7-1.6 1.6-1.6h19.3v5.4c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-5.4h24.4c.9 0 1.6.7 1.6 1.6v4.1c-4.4 1.1-7.6 5.1-7.6 9.9c0 4.7 3.2 8.7 7.6 9.8"></svg:path><svg:path fill="currentColor" d="M29.5 27.2c-1.2 0-2.3 1-2.3 2.3v5.1c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-5.1c-.1-1.3-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsTicketIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTicket1Icon],svg[lineicons-ticket-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 6a.75.75 0 0 0-.75.75v2.278a3.066 3.066 0 0 1 0 5.945v2.277c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75v-2.277a3.066 3.066 0 0 1 0-5.945V6.75a.75.75 0 0 0-.75-.75zM2 6.75A2.25 2.25 0 0 1 4.25 4.5h15.5A2.25 2.25 0 0 1 22 6.75v2.936a.75.75 0 0 1-.75.75a1.565 1.565 0 0 0 0 3.13a.75.75 0 0 1 .75.75v2.934a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 17.25v-2.934a.75.75 0 0 1 .75-.75a1.565 1.565 0 0 0 0-3.13a.75.75 0 0 1-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsTicket1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTicketAltIcon],svg[lineicons-ticket-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46.8 1.8H17.2c-4.4 0-8 3.6-8 8v49c0 1.3.9 2.5 2.2 2.8c1.3.4 2.6-.2 3.3-1.3l3.5-5.8l4.5 6.5c.5.8 1.5 1.3 2.4 1.3c1 0 1.9-.5 2.4-1.3l4.6-6.7l4.6 6.7c.5.8 1.5 1.3 2.4 1.3s1.9-.5 2.4-1.3l4.4-6.5l3.5 5.9c.7 1.1 2 1.7 3.3 1.3s2.2-1.5 2.2-2.8V9.8c-.1-4.4-3.7-8-8.1-8m3.5 51.4L48.4 50c-.5-.9-1.4-1.4-2.4-1.4s-1.9.5-2.5 1.3L39 56.5l-4.6-6.7c-.5-.8-1.4-1.3-2.4-1.3s-1.9.5-2.4 1.3L25 56.5l-4.5-6.7c-.6-.8-1.5-1.3-2.4-1.3H18c-1 0-1.9.6-2.4 1.4L13.8 53V9.8c0-2 1.6-3.5 3.5-3.5h29.5c2 0 3.5 1.6 3.5 3.5z"></svg:path><svg:path fill="currentColor" d="M42.3 19.7H21.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h20.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3m0 10.3H21.7c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h20.6c1.2 0 2.3-1 2.3-2.3c-.1-1.3-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsTicketAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTickets3Icon],svg[lineicons-tickets-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.57 6.897a.9.9 0 1 1 0 1.8a.9.9 0 0 1 0-1.8m.9 3.701a.9.9 0 1 0-1.8 0a.9.9 0 0 0 1.8 0m-.9 1.9a.9.9 0 1 1 0 1.8a.9.9 0 0 1 0-1.8m.9 3.7a.9.9 0 1 0-1.8 0a.9.9 0 0 0 1.8 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.919 5.066a.75.75 0 0 1 .75-.75h12.663a.75.75 0 0 1 .75.75a2.42 2.42 0 0 0 2.418 2.42a.75.75 0 0 1 .75.75v7.527a.75.75 0 0 1-.75.75a2.42 2.42 0 0 0-2.418 2.418a.75.75 0 0 1-.75.75H5.669a.75.75 0 0 1-.75-.75A2.42 2.42 0 0 0 2.5 16.513a.75.75 0 0 1-.75-.75V8.235a.75.75 0 0 1 .75-.75a2.42 2.42 0 0 0 2.419-2.419m1.428.75A3.92 3.92 0 0 1 3.25 8.914v6.17a3.92 3.92 0 0 1 3.097 3.097h11.307a3.92 3.92 0 0 1 3.096-3.097v-6.17a3.92 3.92 0 0 1-3.096-3.098z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsTickets3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTiktokIcon],svg[lineicons-tiktok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.438 2.017C13.53 2 14.613 2.008 15.696 2c.067 1.275.525 2.575 1.459 3.475c.933.925 2.25 1.35 3.533 1.492v3.358c-1.2-.042-2.408-.292-3.5-.808c-.475-.217-.917-.492-1.35-.775c-.008 2.433.008 4.866-.017 7.291a6.36 6.36 0 0 1-1.125 3.283c-1.091 1.6-2.983 2.642-4.924 2.675c-1.192.067-2.384-.258-3.4-.858c-1.684-.992-2.867-2.808-3.042-4.758a16 16 0 0 1-.008-1.242c.15-1.583.933-3.1 2.15-4.133c1.383-1.2 3.316-1.775 5.125-1.433c.016 1.233-.034 2.466-.034 3.7c-.825-.267-1.791-.192-2.516.308a2.9 2.9 0 0 0-1.134 1.458c-.175.425-.125.892-.116 1.342c.2 1.366 1.516 2.516 2.916 2.392c.934-.009 1.825-.55 2.309-1.342c.158-.275.333-.559.341-.884c.084-1.491.05-2.975.059-4.466c.008-3.358-.009-6.708.016-10.058"></svg:path>`,
})
export class LineiconsTiktokIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTiktokAltIcon],svg[lineicons-tiktok-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.857 3H5.143A2.145 2.145 0 0 0 3 5.143v13.714C3 20.04 3.961 21 5.143 21h13.714A2.145 2.145 0 0 0 21 18.857V5.143A2.145 2.145 0 0 0 18.857 3m-1.712 7.853a3.17 3.17 0 0 1-1.822-.371a3.2 3.2 0 0 1-1.16-1.066v4.944a3.654 3.654 0 1 1-3.654-3.654c.076 0 .15.007.225.011v1.801c-.075-.009-.148-.023-.225-.023a1.865 1.865 0 1 0 0 3.73c1.03 0 1.94-.811 1.94-1.841l.018-8.398h1.723a3.21 3.21 0 0 0 2.957 2.865v2.002"></svg:path>`,
})
export class LineiconsTiktokAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTimerIcon],svg[lineicons-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34.3 12V6.3h5.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H24.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.4V12c-12.9 1.2-23 12-23 25.1C6.8 51 18.1 62.3 32 62.3S57.2 51 57.2 37.1C57.2 24 47.1 13.2 34.3 12M32 57.8c-11.4 0-20.7-9.3-20.7-20.7S20.6 16.4 32 16.4s20.7 9.3 20.7 20.7S43.4 57.8 32 57.8"></svg:path><svg:path fill="currentColor" d="M44.7 34.8H34.3V24.4c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v10.5h-2.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.8v2.8c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3v-2.8h10.5c1.2 0 2.3-1 2.3-2.3s-1.1-2.4-2.4-2.4"></svg:path>`,
})
export class LineiconsTimerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsToungeIcon],svg[lineicons-tounge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3s31.3-14 31.3-31.3S49.2.8 32 .8m0 58c-14.8 0-26.8-12-26.8-26.8S17.3 5.3 32 5.3s26.8 12 26.8 26.8s-12 26.7-26.8 26.7"></svg:path><svg:circle cx="20" cy="22.8" r="4" fill="currentColor"></svg:circle><svg:circle cx="44" cy="22.8" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M43.6 40.6c-3.2 2.9-7.3 4.6-11.6 4.6s-8.5-1.6-11.6-4.6c-.9-.8-2.3-.8-3.2.1c-.8.9-.8 2.3.1 3.2c4 3.7 9.2 5.8 14.7 5.8c2.6 0 5.2-.5 7.6-1.4v2.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V46c.9-.6 1.8-1.3 2.6-2c.9-.8 1-2.3.1-3.2s-2.4-1-3.3-.2"></svg:path>`,
})
export class LineiconsToungeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTowerBroadcast1Icon],svg[lineicons-tower-broadcast-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.557 3.791a.75.75 0 0 1 1.054.117c1.876 2.345 1.876 6.093 0 8.438a.75.75 0 0 1-1.171-.938c1.438-1.797 1.438-4.765 0-6.562a.75.75 0 0 1 .117-1.055M4.659 4.846a.75.75 0 0 0-1.172-.938c-1.876 2.345-1.876 6.093 0 8.438a.75.75 0 0 0 1.172-.938c-1.438-1.797-1.438-4.765 0-6.562m3.437 2.027a1.773 1.773 0 0 0 0 2.508a.75.75 0 0 1-1.061 1.06a3.273 3.273 0 0 1 0-4.629a.75.75 0 0 1 1.06 1.061m7.907 0a1.773 1.773 0 0 1 0 2.508a.75.75 0 1 0 1.06 1.06a3.273 3.273 0 0 0 0-4.629a.75.75 0 0 0-1.06 1.061M10.3 8.127c0-.967.784-1.75 1.75-1.75h.002a1.75 1.75 0 0 1 .747 3.333v10.667a.75.75 0 0 1-1.5 0V9.707a1.75 1.75 0 0 1-.998-1.58"></svg:path>`,
})
export class LineiconsTowerBroadcast1Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsToyotaIcon],svg[lineicons-toyota-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.789 18.256a1.773 1.773 0 0 1 1.78-1.779c.966.002 1.76.795 1.78 1.779a1.82 1.82 0 0 1-1.78 1.78c-.99-.015-1.783-.808-1.78-1.78m1.78 1.124c.535-.009.977-.511.983-1.124c-.006-.626-.448-1.128-.983-1.124c-.558-.004-1.001.498-.984 1.124c-.018.613.426 1.115.984 1.124m3.793-2.155v2.716h-.749v-2.716h-1.077v-.608h2.857v.608zm1.92 1.966l-.28.75h-.89l1.405-3.323h.937l1.358 3.323h-.889l-.281-.75zm1.172-.56l-.468-1.218l-.469 1.217zM3.592 17.224v2.716h-.749v-2.716h-1.03v-.608h2.81v.608zm1.219 1.03a1.78 1.78 0 0 1 1.779-1.778a1.796 1.796 0 0 1 1.78 1.778a1.813 1.813 0 0 1-1.78 1.78a1.794 1.794 0 0 1-1.78-1.78m1.78 1.126c.54-.008.983-.51.983-1.124c0-.625-.443-1.127-.984-1.123c-.552-.004-.995.498-.982 1.123c-.013.614.43 1.116.982 1.124m3.84.562v-1.264l1.312-2.06h-.843l-.843 1.404l-.797-1.404h-.89l1.313 2.06v1.264zm1.407-16.251c-5.002 0-9.056 2.513-9.056 5.61c0 3.099 4.054 5.61 9.056 5.61s9.055-2.51 9.055-5.61c0-3.098-4.054-5.61-9.055-5.61m4.718 2.405c.235.662-.785 1.284-2.501 1.576l-.003.004c-.227-1.374-.724-2.432-1.354-2.94c1.986.122 3.608.656 3.858 1.36m-4.718-.07c.496 0 .923.684 1.12 1.779h.003a15 15 0 0 1-2.246 0h.002c.197-1.095.625-1.779 1.12-1.779m-4.719.07c.25-.704 1.872-1.238 3.858-1.36c-.63.508-1.127 1.565-1.354 2.94l-.002-.004c-1.717-.292-2.737-.914-2.502-1.576m-2.831 3.29c0-.625.206-1.22.58-1.761l.089-.123l.002-.004l.095-.12l.044-.055a4 4 0 0 1 .22-.244a5 5 0 0 1 .323-.305l.005-.005l.035-.03l.034-.029c.22 1.02 1.675 1.896 3.781 2.275l.001-.002q-.006.198-.007.394c0 2.116.546 3.786 1.352 4.538c-3.7-.295-6.554-2.211-6.554-4.53m7.55 3.012c-.683 0-1.237-1.376-1.237-3.19v-.084l.005.008a14.5 14.5 0 0 0 2.469-.001v.077c0 1.814-.555 3.19-1.237 3.19m.996 1.517c.806-.752 1.352-2.422 1.352-4.538q0-.2-.007-.393c2.107-.377 3.562-1.254 3.782-2.273l.11.095l.036.032l.081.075q.026.022.05.047l.008.008q.028.026.054.053l.058.058l.11.118l.056.063l.048.056l.006.007l.091.113l.049.064l.046.062l.044.063c.374.541.58 1.136.58 1.76c0 2.319-2.855 4.235-6.554 4.53"></svg:path>`,
})
export class LineiconsToyotaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTrainIcon],svg[lineicons-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54 17.6c-.8-6.8-6.6-11.9-13.5-11.9h-.7V5c0-1.8-1.5-3.3-3.3-3.3h-9.2C25.5 1.7 24 3.2 24 5v.7h-.8c-6.9 0-12.6 5.1-13.4 11.9c-.1.5-.1 1.1-.1 1.6v27.1c0 3.4 2.7 6.1 6.1 6.1h.9l-4.2 6.4c-.7 1-.4 2.4.6 3.1c.4.3.8.4 1.2.4c.7 0 1.4-.4 1.9-1l5.8-8.9h19.7l5.6 8.8c.4.7 1.2 1 1.9 1q.6 0 1.2-.3c1.1-.7 1.4-2.1.7-3.1l-4-6.4h.9c3.4 0 6.1-2.7 6.1-6.1V19.1c0-.5 0-1-.1-1.5m-24.2 2.5V28H14.4v-7.9zm4.5 0h15.4V28H34.3zM28.7 6.3h6.7v3.3h-6.7zm-5.3 3.9h.8v.7c0 1.8 1.5 3.3 3.3 3.3h9.2c1.8 0 3.3-1.5 3.3-3.3v-.7h.7c3.7 0 7 2.2 8.3 5.4H15.1c1.4-3.2 4.6-5.4 8.3-5.4M48 47.9H16c-.9 0-1.6-.7-1.6-1.6V32.5h35.2v13.8c0 .9-.7 1.6-1.6 1.6"></svg:path><svg:path fill="currentColor" d="M23.4 34.4c-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8s5.8-2.6 5.8-5.8s-2.6-5.8-5.8-5.8m0 7.1c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3s1.3.6 1.3 1.3s-.6 1.3-1.3 1.3m17.2-7.1c-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8s5.8-2.6 5.8-5.8s-2.6-5.8-5.8-5.8m0 7.1c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3s1.3.6 1.3 1.3s-.5 1.3-1.3 1.3"></svg:path>`,
})
export class LineiconsTrainIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTrain1Icon],svg[lineicons-train-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.313a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5"></svg:path><svg:path fill="currentColor" d="M3.875 5.5a2.25 2.25 0 0 1 2.25-2.25h11.75a2.25 2.25 0 0 1 2.25 2.25v11.75a2.25 2.25 0 0 1-2.25 2.25h-.69l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.28-2.28h-6.13l-2.28 2.28a.75.75 0 0 1-1.06-1.06l1.22-1.22h-.69a2.25 2.25 0 0 1-2.25-2.25zm14.75 0a.75.75 0 0 0-.75-.75H12.75v5.875h5.875zm-12.5-.75a.75.75 0 0 0-.75.75v5.125h5.875V4.75zm-.75 7.375v5.125c0 .414.336.75.75.75h11.75a.75.75 0 0 0 .75-.75v-5.125z"></svg:path>`,
})
export class LineiconsTrain1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTrain3Icon],svg[lineicons-train-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 15.063a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m7.25-1.25a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path fill="currentColor" d="M6.125 3.25a2.25 2.25 0 0 0-2.25 2.25v11.75a2.25 2.25 0 0 0 2.25 2.25h.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.28-2.28h6.13l2.28 2.28a.75.75 0 1 0 1.06-1.06l-1.22-1.22h.69a2.25 2.25 0 0 0 2.25-2.25V5.5a2.25 2.25 0 0 0-2.25-2.25zm12.5 7.375H12.75V4.75h5.125a.75.75 0 0 1 .75.75zM11.25 4.75v5.875H5.375V5.5a.75.75 0 0 1 .75-.75zm-5.875 7.375h13.25v5.125a.75.75 0 0 1-.75.75H6.125a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class LineiconsTrain3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTrainAltIcon],svg[lineicons-train-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54 17.6c-.8-6.8-6.6-11.9-13.5-11.9h-.7V5c0-1.8-1.5-3.2-3.2-3.2h-9.2c-1.8 0-3.2 1.5-3.2 3.2v.7h-.8c-6.9 0-12.6 5.1-13.4 11.9c-.1.5-.1 1.1-.1 1.6v27.1c0 3.4 2.7 6.1 6.1 6.1h.9l-4.2 6.4c-.7 1-.4 2.4.6 3.1c.4.3.8.4 1.2.4c.7 0 1.4-.4 1.9-1l5.8-8.9h19.7l5.6 8.8c.4.7 1.2 1 1.9 1q.6 0 1.2-.3c1.1-.7 1.4-2.1.7-3.1l-4-6.4h.7c3.4 0 6.1-2.7 6.1-6.1V19.1c0-.5 0-1-.1-1.5m-24.2 2.5V28H14.4v-7.9zm4.4 0h15.4V28H34.2zM28.7 6.2h6.7v3.3h-6.7zm-5.3 4h.8v.7c0 1.8 1.5 3.2 3.2 3.2h9.2c1.8 0 3.2-1.5 3.2-3.2v-.7h.7c3.7 0 7 2.2 8.3 5.4H15.1c1.4-3.2 4.6-5.4 8.3-5.4M48 47.9H16c-.9 0-1.6-.7-1.6-1.6V32.5h35.2v13.8c0 .9-.7 1.6-1.6 1.6"></svg:path><svg:path fill="currentColor" d="M26.5 37.4h-5.4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h5.4c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.2-2.2m16.8 0h-5.4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h5.4c1.2 0 2.2-1 2.2-2.2s-.9-2.2-2.2-2.2"></svg:path>`,
})
export class LineiconsTrainAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTrash3Icon],svg[lineicons-trash-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.722 12.759a.75.75 0 0 0-1.498-.074L13 17.24a.75.75 0 0 0 1.498.074zm-4.734-.786a.75.75 0 0 0-.712.785l.224 4.557a.75.75 0 1 0 1.498-.074l-.224-4.556a.75.75 0 0 0-.786-.712"></svg:path><svg:path fill="currentColor" d="M10.249 2a2.25 2.25 0 0 0-2.25 2.25V5H5.5a2.25 2.25 0 0 0-.587 4.423l.628 10.462A2.25 2.25 0 0 0 7.787 22h8.424a2.25 2.25 0 0 0 2.246-2.115l.628-10.462A2.25 2.25 0 0 0 18.498 5h-2.499v-.75A2.25 2.25 0 0 0 13.749 2zm4.25 3h-5v-.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75zM5.5 6.5h12.998a.75.75 0 1 1 0 1.5H5.5a.75.75 0 0 1 0-1.5m.92 3h11.158l-.618 10.295a.75.75 0 0 1-.749.705H7.787a.75.75 0 0 1-.749-.705z"></svg:path>`,
})
export class LineiconsTrash3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTrashCanIcon],svg[lineicons-trash-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.9 8.8h-7.7V7.1c0-3-2.4-5.4-5.4-5.4h-7.7c-3 0-5.4 2.4-5.4 5.4v1.7H15c-2.9 0-5.3 2.4-5.3 5.3v3c0 2.2 1.3 4 3.2 4.8l1.6 34.6c.2 3.3 2.8 5.8 6.1 5.8h22.5c3.3 0 6-2.6 6.1-5.8L51 21.8c1.9-.8 3.2-2.7 3.2-4.8v-3c0-2.8-2.4-5.2-5.3-5.2M27.3 7.1c0-.5.4-.9.9-.9h7.7c.5 0 .9.4.9.9v1.7h-9.4V7.1zm-13 7c0-.4.3-.8.8-.8h33.8c.4 0 .8.3.8.8v3c0 .4-.3.8-.8.8H15.1c-.4 0-.8-.3-.8-.8zm28.9 43.7H20.8c-.9 0-1.6-.7-1.6-1.5l-1.6-33.9h28.9l-1.6 33.9c-.1.8-.8 1.5-1.7 1.5"></svg:path><svg:path fill="currentColor" d="M32 32.4c-1.2 0-2.3 1-2.3 2.3v12.7c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3V34.7c0-1.3-1.1-2.3-2.3-2.3m8 2c-1.3-.1-2.3.8-2.4 2.1l-.6 8.8c-.1 1.2.8 2.3 2.1 2.4h.2c1.2 0 2.2-.9 2.2-2.1l.6-8.8c0-1.3-.9-2.3-2.1-2.4m-16.1 0c-1.2.1-2.2 1.2-2.1 2.4l.7 8.8c.1 1.2 1.1 2.1 2.2 2.1h.2c1.2-.1 2.2-1.2 2.1-2.4l-.7-8.8c0-1.3-1.1-2.2-2.4-2.1"></svg:path>`,
})
export class LineiconsTrashCanIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTravelIcon],svg[lineicons-travel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62.3 43.9c0-5.5-4.3-9.8-9.8-9.8s-9.9 4.4-9.9 9.8c0 3.2 3.2 8.8 5.6 12.6H18.6c-1.4 0-2.8-.6-3.8-1.6c-1.3-1.3-1.8-3.1-1.4-5c.5-2.4 2.8-4.2 5.5-4.2h9.9c2.6 0 5.1-1 7-2.9c2.7-2.7 3.6-6.6 2.3-10.3c-1.3-3.9-5.1-6.6-9.5-6.6H15.8c2.4-3.9 5.7-9.8 5.7-13.1c0-5.5-4.3-9.8-9.8-9.8s-9.9 4.4-9.9 9.8c0 4.6 6.7 14.6 8 16.6l.3.3l.1.1c.1.1.2.1.3.2l.1.1c.1.1.2.1.3.1h.1c.2 0 .3.1.5.1h17c2.4 0 4.5 1.4 5.2 3.5s.2 4.2-1.3 5.7c-1 1-2.3 1.6-3.8 1.6h-9.9c-4.9 0-9 3.3-9.9 7.8c-.7 3.3.3 6.7 2.7 9c1.9 1.9 4.3 2.9 7 2.9h33.8c.2 0 .3 0 .5-.1h.1c.1 0 .2-.1.3-.1s.1-.1.2-.1c.1-.1.2-.1.3-.2l.1-.1c.1-.1.2-.2.2-.3c0 0 .1 0 .1-.1c1.5-1.6 8.2-11.2 8.2-15.9M11.7 7.5c3 0 5.3 2.3 5.3 5.3c0 1.9-2.7 7-5.3 11.2c-2.7-4.2-5.4-9.2-5.4-11.2c0-2.9 2.4-5.3 5.4-5.3m40.7 31.1c3 0 5.3 2.3 5.3 5.3c0 1.9-2.7 6.8-5.4 10.8c-2.6-4-5.4-8.9-5.4-10.8c.1-2.9 2.5-5.3 5.5-5.3"></svg:path><svg:path fill="currentColor" d="M13.9 12.7c0-.6-.2-1.2-.6-1.6c-.8-.8-2.4-.8-3.2 0l-.3.3c-.1.1-.1.3-.2.4s-.1.3-.1.4v.8c0 .1.1.3.1.4s.1.3.2.4l.3.3c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.3-.2.6-.8.6-1.4M54 45.9c.4-.4.7-1 .7-1.6s-.2-1.2-.7-1.6l-.3-.3c-.1-.1-.3-.1-.4-.2c-.1 0-.3-.1-.4-.1H52c-.1 0-.3.1-.4.1c-.1.1-.3.1-.4.2l-.3.3c-.4.4-.7 1-.7 1.6s.2 1.2.7 1.6l.3.3c.1.1.3.1.4.2c.1 0 .3.1.4.1h.4c.6 0 1.2-.2 1.6-.6"></svg:path>`,
})
export class LineiconsTravelIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTreeIcon],svg[lineicons-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46.9 25.8c0-11.6-6-24-14.9-24s-14.9 12.4-14.9 24c0 11.3 5.4 20.3 12.7 21.9V60c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3V47.7c7.1-1.6 12.5-10.6 12.5-21.9M34.2 43v-5.9c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3V43c-4.6-1.8-8.2-8.9-8.2-17.2c0-10 5.1-19.5 10.4-19.5s10.4 9.5 10.4 19.5c.2 8.2-3.4 15.4-8 17.2"></svg:path>`,
})
export class LineiconsTreeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTree2Icon],svg[lineicons-tree-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.523 9.5a7.5 7.5 0 1 1 15 0V11a7.5 7.5 0 0 1-6.75 7.463v2.787a.75.75 0 1 1-1.5 0v-2.787A7.5 7.5 0 0 1 4.523 11zm8.25 7.454A6 6 0 0 0 18.023 11V9.5a6 6 0 0 0-12 0V11c0 3.06 2.29 5.584 5.25 5.954v-2.202a2.24 2.24 0 0 1-.841-.53l-1.019-1.02a.75.75 0 1 1 1.06-1.06l1.02 1.019a.75.75 0 0 0 1.06 0l1.02-1.02a.75.75 0 0 1 1.06 1.061l-1.019 1.02a2.24 2.24 0 0 1-.84.53z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsTree2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTreesIcon],svg[lineicons-trees-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.2 14.5C6.7 14.5 1.8 24.6 1.8 34c0 9 4.3 16.2 10.2 17.7v8.2c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-8.3c5.8-1.5 10.1-8.7 10.1-17.7c-.1-9.3-5.1-19.4-12.5-19.4m2.3 32.4v-4.7c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3V47c-3.2-1.7-5.6-7-5.6-13c0-7.6 3.9-15 7.9-15s7.9 7.4 7.9 15c0 5.9-2.4 11.1-5.6 12.9m45.8-20.3c0-12-6-24.8-15-24.8s-15 12.8-15 24.8c0 11.6 5.4 20.9 12.7 22.6V60c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V49.2c7.2-1.6 12.7-11 12.7-22.6M49.5 44.5v-7.4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v7.4c-4.6-1.9-8.2-9.3-8.2-17.8c0-10.4 5.1-20.3 10.5-20.3s10.5 9.9 10.5 20.3c.1 8.5-3.6 15.9-8.2 17.8"></svg:path>`,
})
export class LineiconsTreesIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTrees3Icon],svg[lineicons-trees-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.592 16.438a4.07 4.07 0 0 0 3.015 2.47v1.842a.75.75 0 0 0 1.5 0v-1.842a4.062 4.062 0 0 0 2.464-6.474a4.06 4.06 0 0 0-6.133-5.305a4.75 4.75 0 1 0-8.692 2.769a5.108 5.108 0 0 0 3.194 8.298v2.554a.75.75 0 0 0 1.5 0v-2.554a5.1 5.1 0 0 0 3.152-1.758M5.439 7.25a3.25 3.25 0 1 1 5.653 2.188a.75.75 0 0 0 .045 1.056a3.608 3.608 0 0 1-1.698 6.178V14.5a.75.75 0 0 0-1.5 0v2.172a3.608 3.608 0 0 1-1.698-6.178a.75.75 0 0 0 .045-1.056A3.24 3.24 0 0 1 5.44 7.25m11.668 10.116V15.25a.75.75 0 0 0-1.5 0v2.116a2.562 2.562 0 0 1-.943-4.37a.75.75 0 0 0 0-1.124a2.56 2.56 0 1 1 3.387 0a.75.75 0 0 0 0 1.124a2.562 2.562 0 0 1-.944 4.37"></svg:path>`,
})
export class LineiconsTrees3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTrelloIcon],svg[lineicons-trello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.52 2.016H4.512A2.515 2.515 0 0 0 2 4.528v14.976c0 1.352 1.127 2.48 2.512 2.48h14.976c1.353 0 2.512-1.128 2.512-2.513V4.528c-.032-1.385-1.127-2.512-2.48-2.512M10.792 17.12a1.21 1.21 0 0 1-1.191 1.192H5.897c-.644 0-1.192-.548-1.224-1.192V5.784a1.21 1.21 0 0 1 1.192-1.192h3.671a1.21 1.21 0 0 1 1.192 1.192zm8.6-4.992A1.21 1.21 0 0 1 18.2 13.32h-3.64a1.21 1.21 0 0 1-1.191-1.192V5.784a1.21 1.21 0 0 1 1.191-1.192h3.64a1.21 1.21 0 0 1 1.191 1.192z"></svg:path>`,
})
export class LineiconsTrelloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTrendDown1Icon],svg[lineicons-trend-down-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 4a.75.75 0 0 0-1.5 0v14.5a2.25 2.25 0 0 0 2.25 2.25H20a.75.75 0 0 0 0-1.5H5.5a.75.75 0 0 1-.75-.75v-8.109l3.92 3.92a.75.75 0 0 0 1.06 0l3.422-3.423l3.78 3.78h-1.72a.75.75 0 0 0 0 1.5h3.535a.75.75 0 0 0 .75-.75v-3.535a.75.75 0 0 0-1.5 0v1.729l-4.314-4.315a.75.75 0 0 0-1.061 0L9.2 12.72L4.75 8.27z"></svg:path>`,
})
export class LineiconsTrendDown1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTrendUp1Icon],svg[lineicons-trend-up-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 4a.75.75 0 0 0-1.5 0v14.5a2.25 2.25 0 0 0 2.25 2.25H20a.75.75 0 0 0 0-1.5H5.5a.75.75 0 0 1-.75-.75v-2.77l4.45-4.45l3.422 3.423a.75.75 0 0 0 1.06 0l4.315-4.315v1.729a.75.75 0 1 0 1.5 0V8.58a.75.75 0 0 0-.75-.75h-3.536a.75.75 0 0 0 0 1.5h1.722l-3.78 3.78L9.73 9.69a.75.75 0 0 0-1.06 0l-3.92 3.92z"></svg:path>`,
})
export class LineiconsTrendUp1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTrophy1Icon],svg[lineicons-trophy-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.45 13.29c.74-.29 4.3-1.96 4.3-7.13c0-.41-.34-.75-.75-.75h-2.28V4c0-.41-.34-.75-.75-.75H7.03c-.41 0-.75.34-.75.75v1.41H4c-.41 0-.75.34-.75.75c0 5.17 3.56 6.84 4.3 7.13c.9 1.12 2.21 1.88 3.7 2.08v1.29H8.5c-.32 0-.61.21-.71.51l-.86 2.59a.75.75 0 0 0 .1.68c.14.2.37.31.61.31h8.72c.24 0 .47-.12.61-.31s.18-.45.1-.68l-.86-2.59a.74.74 0 0 0-.71-.51h-2.75v-1.29c1.49-.2 2.8-.96 3.7-2.08m-1.13 5.96H8.68l.36-1.09h5.91zm3.9-12.34c-.15 1.81-.86 3-1.59 3.77c.06-.32.09-.64.09-.98V6.91zm-14.44 0h1.5V9.7c0 .33.03.66.09.98c-.73-.77-1.43-1.96-1.58-3.77zm3 2.79V4.75h8.45V9.7a4.22 4.22 0 0 1-4.22 4.22A4.23 4.23 0 0 1 7.78 9.7"></svg:path>`,
})
export class LineiconsTrophy1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTrowelIcon],svg[lineicons-trowel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.3 48.7L48.4 36.9c-1.2-1.2-2.9-1.9-4.6-1.9c-1.6 0-3 .6-4.2 1.6l-7.4-7.4l7.7-7.6c.9-.9 1.2-2.1 1-3.3s-1-2.2-2.2-2.7L6.9 2c-1.4-.5-2.9-.2-4 .8c-1.1 1.1-1.4 2.6-.8 4l13.5 31.6c.5 1.1 1.5 1.9 2.7 2.1c.2 0 .5.1.7.1c1 0 1.9-.4 2.6-1.1l7.4-7.3l7.4 7.4c-2.1 2.5-2 6.4.4 8.8l11.9 11.9c1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9l2.4-2.4c2.5-2.5 2.5-6.6 0-9.2m-41-13.2L7.1 7l28.6 12.2zm37.8 19.3l-2.4 2.4c-.8.8-2.1.8-2.8 0L40 45.3c-.8-.8-.8-2 0-2.8l2.4-2.4c.4-.4.9-.6 1.4-.6s1 .2 1.4.6L57.1 52c.8.7.8 2 0 2.8"></svg:path>`,
})
export class LineiconsTrowelIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTrowel1Icon],svg[lineicons-trowel-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.55 3.115c1.746-.565 3.397 1.086 2.833 2.832l-2.44 7.553c-.517 1.6-2.543 2.089-3.732.9l-2.027-2.027l-1.531 1.531c.49.86.37 1.973-.364 2.707L7.56 20.34a2.25 2.25 0 0 1-3.181 0l-.219-.219a2.25 2.25 0 0 1 0-3.182l3.73-3.73a2.25 2.25 0 0 1 2.703-.365l1.532-1.532l-2.026-2.025c-1.19-1.19-.701-3.215.9-3.732zm-4.305 8.197l2.026 2.027a.75.75 0 0 0 1.244-.3l2.44-7.553a.75.75 0 0 0-.944-.944l-7.553 2.44a.75.75 0 0 0-.3 1.244l2.026 2.026l1.189-1.189a.75.75 0 0 1 1.06 1.06zM10.01 14.27a.75.75 0 0 0-1.061 0L5.219 18a.75.75 0 0 0 0 1.06l.22.22a.75.75 0 0 0 1.06 0l3.73-3.73a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class LineiconsTrowel1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTruckDelivery1Icon],svg[lineicons-truck-delivery-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 3.25A2.25 2.25 0 0 0 2 5.5V16a2.25 2.25 0 0 0 2.25 2.25h.052a3.066 3.066 0 0 0 6.026 0h3.724a3.066 3.066 0 0 0 6.026 0H22a.75.75 0 0 0 0-1.5v-4.345c0-.45-.134-.889-.386-1.26l-2.547-3.766a2.25 2.25 0 0 0-1.863-.989H15.75V5.5a2.25 2.25 0 0 0-2.25-2.25zm3.065 11.37a3.07 3.07 0 0 0-2.92 2.13H4.25A.75.75 0 0 1 3.5 16V5.5a.75.75 0 0 1 .75-.75h9.25a.75.75 0 0 1 .75.75v10.97q-.06.137-.105.28h-3.91a3.07 3.07 0 0 0-2.92-2.13m9.75 0c-.47 0-.917.106-1.315.296v-2.221h4.75v4.055h-.515a3.07 3.07 0 0 0-2.92-2.13m2.772-3.425H15.75V7.89h1.454a.75.75 0 0 1 .62.33zm-4.337 6.49a1.565 1.565 0 1 1 3.13 0a1.565 1.565 0 0 1-3.13 0m-9.75 0a1.565 1.565 0 1 1 3.13 0a1.565 1.565 0 0 1-3.13 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsTruckDelivery1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTumblrIcon],svg[lineicons-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.893 20.742C17.344 21.29 15.956 22 14.085 22c-4.71 0-5.774-3.452-5.774-5.484v-5.645H6.44a.427.427 0 0 1-.42-.42V7.807c0-.258.194-.548.452-.645C8.957 6.323 9.7 4.226 9.796 2.645c.032-.451.226-.645.645-.645h2.774c.226 0 .42.194.42.42v4.483h3.257c.226 0 .42.13.42.355v3.161c0 .226-.194.42-.42.42h-3.29V16c0 1.355.968 2.097 2.645 1.42c.194-.033.355-.13.484-.097c.13.032.226.129.258.322l.871 2.484c.097.194.194.452.032.613"></svg:path>`,
})
export class LineiconsTumblrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTurborepoIcon],svg[lineicons-turborepo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.992 5.502A6.506 6.506 0 0 0 5.494 12a6.506 6.506 0 0 0 6.498 6.499A6.506 6.506 0 0 0 18.49 12a6.506 6.506 0 0 0-6.498-6.498m0 9.861a3.363 3.363 0 1 1 0-6.725a3.363 3.363 0 0 1 0 6.725"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.537 4.434V2.008C17.81 2.29 22 6.656 22 12s-4.19 9.709-9.463 9.992v-2.426C16.467 19.285 19.58 16 19.58 12s-3.113-7.285-7.043-7.566M6.26 16.962a7.56 7.56 0 0 1-1.833-4.417H2a9.97 9.97 0 0 0 2.543 6.134zm5.187 5.03v-2.426a7.55 7.55 0 0 1-4.419-1.834L5.312 19.45a9.96 9.96 0 0 0 6.134 2.542z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsTurborepoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTwitchIcon],svg[lineicons-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.774 2L2.45 5.452v14.032h4.774V22h2.678l2.548-2.548h3.871l5.226-5.226V2zm15.968 11.323l-3 3h-4.743L9.452 18.87v-2.548H5.42V3.774h14.32zm-2.968-6.097v5.226h-1.775V7.226zm-4.775 0v5.226h-1.774V7.226z"></svg:path>`,
})
export class LineiconsTwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTwitterIcon],svg[lineicons-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.4 56.8c-6.7 0-13.2-1.9-18.6-5.6c-.9-.6-1.2-1.7-.9-2.7c.4-1 1.4-1.6 2.4-1.4c.8.1 1.6.2 2.4.2c2.9 0 5.7-.6 8.3-1.7c-3.2-1.6-5.8-4.4-6.9-8c-.2-.7-.1-1.4.3-2C5.6 33 4 29.4 4 25.5v-.1c0-.8.4-1.5 1.1-1.9c.1-.1.2-.1.3-.2c-.9-1.8-1.4-3.9-1.4-5.9c0-2.5.6-4.8 1.8-6.8c.4-.6 1-1 1.8-1.1c.7-.1 1.5.3 1.9.8C14.3 16.2 21.2 20 28.6 21v-.1c0-7.5 6.1-13.6 13.6-13.6c3.3 0 6.4 1.2 8.9 3.4c1.1-.4 2.3-1.2 3.5-1.9c.6-.4 1.2-.8 1.8-1.1c.7-.4 1.6-.4 2.4.1s1.1 1.3 1 2.1c-.1.6-.3 2-.7 3.5h.4c.9-.2 1.8.2 2.3 1s.5 1.7 0 2.5c-1.4 2.1-3.5 3.5-5.4 4.8c-.2.1-.4.3-.5.4v.3C56 39.2 43 56.8 21.4 56.8M12.8 51c2.7.8 5.6 1.2 8.6 1.2c18.8 0 30.1-15.3 30.1-30.1v-1.2c-.1-.8.2-1.6.9-2.1c.5-.4 1.1-.8 1.6-1.2l.9-.6c-.5-.2-.9-.7-1.1-1.2s-.2-1.1 0-1.6q-1.35.6-2.7.9c-.7.1-1.5-.1-2-.7c-1.8-1.9-4.1-2.9-6.6-2.9c-5 0-9.1 4.1-9.1 9.1c0 .6.1 1.3.2 2.1c.1.7 0 1.4-.5 1.9s-1.1.8-1.8.8c-8.5-.4-16.5-3.9-22.5-9.8c-.1.5-.1 1-.1 1.5c0 3.1 1.5 5.9 4.1 7.6c.8.6 1.2 1.6.9 2.6s-1.2 1.6-2.2 1.6c-.7 0-1.5-.1-2.2-.3c1.1 2.8 3.6 5 6.7 5.6c1 .2 1.8 1.1 1.8 2.2s-.7 2-1.7 2.2c-.6.2-1.3.3-1.8.4c1.7 2 4.1 3.2 6.8 3.2c1 0 1.8.6 2.1 1.5s0 1.9-.8 2.5c-3.1 2.4-6.2 4-9.6 4.8"></svg:path>`,
})
export class LineiconsTwitterIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTwitterFillIcon],svg[lineicons-twitter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m56.1 15.3l3.8-4.8c1.1-1.3 1.4-2.3 1.5-2.8c-3 1.8-5.8 2.4-7.6 2.4h-.7l-.4-.4c-2.4-2.1-5.4-3.2-8.6-3.2c-7 0-12.5 5.8-12.5 12.5c0 .4 0 1 .1 1.4l.3 2l-2.1-.1C17.1 21.9 6.6 10.9 4.9 9c-2.8 5-1.2 9.8.5 12.8l3.4 5.6l-5.4-3q.15 6.3 4.8 9.9l2.7 2l-2.7 1.1c1.7 5.1 5.5 7.2 8.3 8l3.7 1l-3.5 2.4c-5.6 4-12.6 3.7-15.7 3.4c6.3 4.4 13.8 5.4 19 5.4c3.9 0 6.8-.4 7.5-.7c28-6.6 29.3-31.6 29.3-36.6v-.7l.6-.4c3.4-3.2 4.8-4.9 5.6-5.9c-.3.1-.7.3-1.1.4z"></svg:path>`,
})
export class LineiconsTwitterFillIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTwitterOldIcon],svg[lineicons-twitter-old-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.226 20.194c7.613 0 11.742-6.29 11.742-11.742c0-.13 0-.355-.032-.549A8.6 8.6 0 0 0 22 5.774a7.8 7.8 0 0 1-2.355.646a4 4 0 0 0 1.807-2.29c-.807.45-1.646.806-2.646 1c-.774-.807-1.806-1.323-3-1.323a4.17 4.17 0 0 0-4.16 4.16q0 .485.096.969C8.419 8.71 5.387 7.065 3.322 4.58a4.2 4.2 0 0 0-.548 2.064c0 1.452.742 2.678 1.871 3.42a4.5 4.5 0 0 1-1.87-.516v.032c0 1.968 1.419 3.677 3.29 4.064c-.355.097-.742.13-1.033.13c-.258 0-.548-.033-.774-.097c.548 1.645 2.065 2.838 3.871 2.87c-1.42 1.097-3.194 1.775-5.097 1.775c-.387.064-.71 0-1.032-.032c1.742 1.225 3.903 1.903 6.226 1.903"></svg:path>`,
})
export class LineiconsTwitterOldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTwitterOriginalIcon],svg[lineicons-twitter-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.3 57.4c23.6 0 36.4-19.5 36.4-36.4c0-.4 0-1.1-.1-1.7c2.5-1.8 4.7-4.1 6.4-6.6c-2.4 1.1-4.8 1.7-7.3 2c2.7-1.6 4.7-4.1 5.6-7.1c-2.5 1.4-5.1 2.5-8.2 3.1c-2.4-2.5-5.6-4.1-9.3-4.1c-7.1 0-12.9 5.8-12.9 12.9q0 1.5.3 3C20.9 21.8 11.5 16.7 5.1 9c-1.1 2-1.7 4.1-1.7 6.4c0 4.5 2.3 8.3 5.8 10.6c-2.1-.1-4.1-.7-5.8-1.6v.1c0 6.1 4.4 11.4 10.2 12.6c-1.1.3-2.3.4-3.2.4c-.8 0-1.7-.1-2.4-.3c1.7 5.1 6.4 8.8 12 8.9c-4.4 3.4-9.9 5.5-15.8 5.5c-1.2.2-2.2 0-3.2-.1c5.4 3.8 12.1 5.9 19.3 5.9"></svg:path>`,
})
export class LineiconsTwitterOriginalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsTypescriptIcon],svg[lineicons-typescript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.131 3H4.869c-.955 0-1.73.787-1.73 1.758v14.484c0 .97.775 1.758 1.73 1.758h14.262c.956 0 1.73-.787 1.73-1.758V4.758c0-.97-.774-1.758-1.73-1.758m-5.712 9.984h-2.215v6.434H9.439v-6.434H7.223v-1.441h6.196zm5.712 5.277c-.139.317-.377.552-.658.739a3 3 0 0 1-.969.386a5.6 5.6 0 0 1-1.177.12a6.5 6.5 0 0 1-1.211-.11a3.7 3.7 0 0 1-1.004-.33v-1.689l-.066-.053l.066-.015v.068q.441.357.972.545c.347.133.727.2 1.108.2c.242 0 .426-.021.589-.06a1.4 1.4 0 0 0 .415-.168a.7.7 0 0 0 .246-.253a.7.7 0 0 0-.052-.738a1.3 1.3 0 0 0-.346-.335a3 3 0 0 0-.52-.295c-.207-.095-.418-.194-.657-.292c-.589-.281-1.053-.562-1.35-.95c-.301-.35-.45-.808-.45-1.335c0-.422.08-.76.242-1.055c.173-.316.377-.548.658-.738c.277-.193.588-.334.969-.422c.38-.088.762-.133 1.177-.133s.762.024 1.073.073c.311.05.602.127.865.229v1.652a2.3 2.3 0 0 0-.415-.242a3.8 3.8 0 0 0-.97-.275a3 3 0 0 0-.45-.033a2.4 2.4 0 0 0-.553.057a1.3 1.3 0 0 0-.416.161a.8.8 0 0 0-.26.25a.6.6 0 0 0-.093.327q0 .194.104.351q.103.152.295.296c.114.091.27.183.45.274c.207.091.394.183.623.278c.311.133.588.281.83.422c.243.14.447.305.623.492c.187.175.322.387.416.633s.142.523.142.843c0 .457-.108.809-.246 1.125"></svg:path>`,
})
export class LineiconsTypescriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsUberIcon],svg[lineicons-uber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.988 12.719V8.637H2v4.133c0 1.553 1.091 2.58 2.503 2.58c.693 0 1.297-.27 1.746-.731v.616h.976V8.637h-.989v4.082c0 1.053-.706 1.758-1.617 1.758c-.925-.012-1.63-.693-1.63-1.758M8.2 15.248h.937v-.604c.437.45 1.053.72 1.72.72a2.507 2.507 0 0 0 2.53-2.517a2.507 2.507 0 0 0-2.53-2.516c-.667 0-1.27.27-1.707.72V8.636H8.2zm.937-2.4a1.655 1.655 0 1 1 3.312 0c0 .923-.744 1.668-1.656 1.668a1.655 1.655 0 0 1-1.656-1.669m4.814-.014c0 1.438 1.117 2.517 2.555 2.517c.873 0 1.592-.386 2.08-1.028l-.694-.513c-.36.475-.834.706-1.386.706c-.809 0-1.464-.59-1.592-1.373h3.915v-.309c0-1.437-1.014-2.503-2.4-2.503c-1.412 0-2.478 1.143-2.478 2.503m2.452-1.668c.706 0 1.297.487 1.463 1.232h-2.94c.18-.745.771-1.232 1.477-1.232M22 11.28v-.886h-.334c-.526 0-.911.244-1.155.63v-.591h-.924v4.814h.95V12.5c0-.745.449-1.233 1.078-1.233H22z"></svg:path>`,
})
export class LineiconsUberIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsUberSymbolIcon],svg[lineicons-uber-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.364 3h15.272C20.39 3 21 3.61 21 4.364v15.272C21 20.39 20.39 21 19.636 21H4.364C3.61 21 3 20.39 3 19.636V4.364C3 3.61 3.61 3 4.364 3m2.21 8.455h3.79v-.819c0-.15.122-.272.273-.272h2.727c.15 0 .273.122.273.272v2.728c0 .15-.122.272-.273.272h-2.727a.273.273 0 0 1-.273-.272v-.819h-3.79a5.455 5.455 0 1 0 0-1.09"></svg:path>`,
})
export class LineiconsUberSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsUbuntuIcon],svg[lineicons-ubuntu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M3.865 12a1.335 1.335 0 1 1 2.67 0a1.335 1.335 0 0 1-2.67 0m10.38 6.556a1.334 1.334 0 1 1 2.31-1.335a1.334 1.334 0 0 1-2.31 1.335M9.757 8.809A3.9 3.9 0 0 0 8.1 12c0 1.32.656 2.485 1.658 3.19l-.976 1.636a5.8 5.8 0 0 1-2.398-3.372a1.872 1.872 0 0 0 0-2.908a5.8 5.8 0 0 1 2.398-3.372zm6.126 2.845a3.9 3.9 0 0 0-5.527-3.191L9.43 6.8a5.78 5.78 0 0 1 4.12-.39a1.872 1.872 0 0 0 2.514 1.453a5.78 5.78 0 0 1 1.723 3.763zm-5.527 3.883a3.9 3.9 0 0 0 5.527-3.191l1.903.027a5.78 5.78 0 0 1-1.724 3.762a1.87 1.87 0 0 0-1.6.13a1.87 1.87 0 0 0-.913 1.324a5.8 5.8 0 0 1-4.12-.39zm6.199-8.759a1.334 1.334 0 1 1-2.311-1.333a1.334 1.334 0 0 1 2.31 1.333" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsUbuntuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsUnderlineIcon],svg[lineicons-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2.75a.75.75 0 0 0-1.5 0v8.75a7.5 7.5 0 0 0 15 0V2.75a.75.75 0 0 0-1.5 0v8.75a6 6 0 0 1-12 0zM5.75 20.5a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class LineiconsUnderlineIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsUnlinkIcon],svg[lineicons-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.7 13.2l-8.1-8.1C17.1.6 9.7.6 5.1 5.1C3 7.4 1.8 10.3 1.8 13.4s1.2 6 3.4 8.2l8 8.1c2.3 2.3 5.3 3.4 8.2 3.4c3 0 6-1.1 8.2-3.4c2.2-2.2 3.4-5.1 3.4-8.2c.1-3.1-1.1-6-3.3-8.3M16.4 26.5l-8-8.1C7 17 6.3 15.2 6.3 13.3S7 9.6 8.4 8.2s3.2-2.1 5.1-2.1c1.8 0 3.7.7 5.1 2.1l8.1 8c1.3 1.4 2.1 3.2 2.1 5.1c0 1.2-.3 2.4-.9 3.5l-2.5-2.5c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l2.3 2.3c-2.8 1.4-6 .9-8.1-1.3m42.5 15.8l-8.1-8.1c-4.5-4.5-12-4.5-16.5 0c-2.2 2.2-3.4 5.1-3.4 8.2s1.2 6 3.4 8.2l8 8.1c2.3 2.3 5.3 3.4 8.2 3.4c3 0 6-1.1 8.2-3.4c2.2-2.2 3.4-5.1 3.4-8.2c.2-3-1-5.9-3.2-8.2m-3.3 13.3c-2.8 2.8-7.4 2.8-10.1 0l-8-8.1c-1.4-1.4-2.1-3.2-2.1-5.1c0-1 .2-2 .6-2.9l2.2 2.3c.4.4 1 .7 1.6.7s1.1-.2 1.6-.6c.9-.9.9-2.3 0-3.2L39 36.3c1.1-.6 2.3-.9 3.5-.9c1.8 0 3.7.7 5.1 2.1l8.1 8c1.3 1.4 2.1 3.2 2.1 5.1c-.1 1.9-.8 3.7-2.2 5M39.7 16.4c1.2 0 2.3-1 2.3-2.3V6.5c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v7.7c0 1.2 1 2.2 2.3 2.2m7.9 8c0 1.2 1 2.3 2.3 2.3h7.6c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-7.6c-1.3 0-2.3 1-2.3 2.3m-5.8-3.8c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7l6.5-6.6c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0l-6.5 6.6c-.9.9-.9 2.3 0 3.2m-17.4 27c-1.2 0-2.3 1-2.3 2.3v7.7c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-7.7c-.1-1.3-1.1-2.3-2.3-2.3m-10.5-7.9c0-1.2-1-2.3-2.3-2.3H6.5c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.1c1.3-.1 2.3-1.1 2.3-2.3m3 2.6l-6.5 6.5c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7l6.5-6.5c.9-.9.9-2.3 0-3.2s-2.4-.9-3.2 0"></svg:path>`,
})
export class LineiconsUnlinkIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsUnlink2AngularEftIcon],svg[lineicons-unlink-2-angular-eft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.99 10.181a2.25 2.25 0 0 0-.127-3.045L10.12 3.392a2.25 2.25 0 0 0-3.182 0L3.155 7.175a2.25 2.25 0 0 0 0 3.182L6.9 14.101a2.25 2.25 0 0 0 3.045.126zm-2.549.438l-1.243-1.243a.75.75 0 0 0-1.061 1.06l1.243 1.244l-1.36 1.36a.75.75 0 0 1-1.06 0L4.215 9.296a.75.75 0 0 1 0-1.06l3.782-3.783a.75.75 0 0 1 1.061 0l3.744 3.744a.75.75 0 0 1 0 1.06zm2.116 2.116l-1.06 1.06l.005.006l-1.36 1.36a2.25 2.25 0 0 0 0 3.182l3.74 3.74a2.25 2.25 0 0 0 3.181 0l3.783-3.783a2.25 2.25 0 0 0 0-3.182l-3.74-3.74a2.25 2.25 0 0 0-3.182 0l-1.361 1.363zm-1.355 3.487l1.36-1.36l1.232 1.231a.75.75 0 0 0 1.06-1.06l-1.23-1.232l1.361-1.362a.75.75 0 0 1 1.06 0l3.74 3.74a.75.75 0 0 1 0 1.06l-3.782 3.783a.75.75 0 0 1-1.061 0l-3.74-3.74a.75.75 0 0 1 0-1.06m-5.187 5.945a.75.75 0 0 1-.53-.919l.454-1.692a.75.75 0 1 1 1.448.389l-.453 1.692a.75.75 0 0 1-.919.53m-3.36-4.809a.75.75 0 0 0 .388 1.449l1.693-.454a.75.75 0 0 0-.389-1.449zM21.993 7.189a.75.75 0 0 0-.918-.53l-1.693.453a.75.75 0 0 0 .388 1.449l1.693-.453a.75.75 0 0 0 .53-.92m-4.809-3.359a.75.75 0 1 1 1.449.388l-.454 1.692a.75.75 0 1 1-1.449-.388z"></svg:path>`,
})
export class LineiconsUnlink2AngularEftIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsUnlockIcon],svg[lineicons-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50.4 21.9h-6.1v-7.4c0-6.8-5.5-12.3-12.3-12.3S19.8 7.7 19.8 14.5c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3c0-4.3 3.5-7.8 7.8-7.8s7.8 3.5 7.8 7.8v7.4H13.6c-3.8 0-6.9 3-6.9 6.6V43c0 10.3 8.9 18.7 19.8 18.7h11c10.9 0 19.7-8.5 19.7-19V28.5c.1-3.6-3-6.6-6.8-6.6m2.4 20.8c0 8-6.8 14.5-15.2 14.5h-11c-8.4 0-15.3-6.4-15.3-14.2V28.5c0-1.2 1.1-2.1 2.4-2.1h36.7c1.3 0 2.4.9 2.4 2.1z"></svg:path><svg:path fill="currentColor" d="M36.1 39.4h-8.2c-1.8 0-3.3 1.5-3.3 3.3v8.2c0 1.8 1.5 3.3 3.3 3.3h8.2c1.8 0 3.3-1.5 3.3-3.3v-8.2c0-1.8-1.5-3.3-3.3-3.3m-1.2 10.2h-5.7v-5.7h5.7z"></svg:path>`,
})
export class LineiconsUnlockIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsUnlocked2Icon],svg[lineicons-unlocked-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 16a1.5 1.5 0 0 1 3 0v1.5a1.5 1.5 0 0 1-3 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2a5.25 5.25 0 0 0-5.25 5.25v1.875H5.5a2.25 2.25 0 0 0-2.25 2.25v5.875A4.75 4.75 0 0 0 8 22h8a4.75 4.75 0 0 0 4.75-4.75v-5.875a2.25 2.25 0 0 0-2.25-2.25H8.25V7.25a3.75 3.75 0 0 1 7.042-1.798a.75.75 0 0 0 1.316-.72A5.25 5.25 0 0 0 12 2m-4.527 8.625H18.5a.75.75 0 0 1 .75.75v5.875A3.25 3.25 0 0 1 16 20.5H8a3.25 3.25 0 0 1-3.25-3.25v-5.875a.75.75 0 0 1 .75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsUnlocked2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsUnsplashIcon],svg[lineicons-unsplash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10.871V22H2V10.871h6.258v5.548h7.42v-5.548zM15.742 2H8.258v5.58h7.42V2z"></svg:path>`,
})
export class LineiconsUnsplashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsUploadIcon],svg[lineicons-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 44c-1.2 0-2.3 1-2.3 2.3v8.9c0 .9-.7 1.6-1.6 1.6H7.9c-.9 0-1.6-.7-1.6-1.6v-8.9C6.3 45 5.2 44 4 44s-2.3 1-2.3 2.3v8.9c0 3.4 2.7 6.1 6.1 6.1h48.3c3.4 0 6.1-2.7 6.1-6.1v-8.9c.1-1.3-1-2.3-2.2-2.3"></svg:path><svg:path fill="currentColor" d="m19.1 20.7l10.7-10.4v34.6c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3V10.3l10.7 10.4c.4.4 1 .6 1.6.6s1.2-.2 1.6-.7c.9-.9.8-2.3 0-3.2l-14.7-14c-.9-.8-2.3-.8-3.1 0L15.9 17.5c-.9.9-.9 2.3 0 3.2c.9.8 2.3.9 3.2 0"></svg:path>`,
})
export class LineiconsUploadIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsUpload1Icon],svg[lineicons-upload-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.424 3.25a.75.75 0 0 0-.548.237l-4.61 4.607a.75.75 0 1 0 1.061 1.061l3.347-3.345V16a.75.75 0 1 0 1.5 0V5.815l3.343 3.34a.75.75 0 1 0 1.06-1.06l-4.575-4.573a.75.75 0 0 0-.578-.272"></svg:path><svg:path fill="currentColor" d="M5.172 16a.75.75 0 0 0-1.5 0v2.5a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V16a.75.75 0 1 0-1.5 0v2.5a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class LineiconsUpload1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsUploadCircle1Icon],svg[lineicons-upload-circle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.673 10.37L10.3 11.742a.75.75 0 0 1-1.06-1.061l2.64-2.638a.75.75 0 0 1 1.11.026l2.614 2.612a.75.75 0 0 1-1.06 1.06l-1.371-1.369v5.068a.75.75 0 0 1-1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.422 12c0-5.522 4.477-10 10-10s9.999 4.478 9.999 10s-4.477 9.999-10 9.999s-10-4.477-10-9.999m10-8.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsUploadCircle1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsUserIcon],svg[lineicons-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 36.8c8.3 0 15-6.7 15-15s-6.7-15-15-15s-15 6.7-15 15s6.7 15 15 15m0-25.5c5.8 0 10.5 4.7 10.5 10.5S37.8 32.3 32 32.3s-10.5-4.7-10.5-10.5S26.2 11.3 32 11.3m29.5 41.9C53.3 46.3 42.9 42.5 32 42.5S10.7 46.3 2.5 53.2c-.9.8-1.1 2.2-.3 3.2c.8.9 2.2 1.1 3.2.3C12.8 50.4 22.2 47 32 47s19.2 3.4 26.5 9.6c.4.4.9.5 1.5.5s1.3-.3 1.7-.8c.8-.9.7-2.3-.2-3.1"></svg:path>`,
})
export class LineiconsUserIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsUser4Icon],svg[lineicons-user-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.434 6.35c0 2.39-1.94 4.34-4.34 4.34l-.01-.01c-2.39 0-4.34-1.95-4.34-4.34S9.704 2 12.094 2s4.34 1.96 4.34 4.35m-1.5-.01c0-1.56-1.27-2.84-2.84-2.84c-1.56 0-2.84 1.28-2.84 2.84s1.28 2.84 2.84 2.84a2.85 2.85 0 0 0 2.84-2.84" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.024 12.19c2.67 0 4.76.75 6.21 2.23v-.01c2.046 2.086 2.04 4.846 2.04 5.024v.005c-.01.41-.34.74-.75.74h-.01a.755.755 0 0 1-.74-.76c0-.05 0-2.33-1.62-3.97c-1.16-1.17-2.89-1.77-5.13-1.77s-3.97.6-5.13 1.77c-1.62 1.65-1.62 3.95-1.62 3.97c0 .41-.33.76-.74.76c-.36.02-.76-.32-.76-.73v-.004c-.001-.168-.008-2.939 2.04-5.026c1.45-1.48 3.54-2.23 6.21-2.23"></svg:path>`,
})
export class LineiconsUser4Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsUserMultiple4Icon],svg[lineicons-user-multiple-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.329 11.496a3.68 3.68 0 0 1-2.224-.744c.292-.422.523-.89.681-1.39a2.197 2.197 0 1 0 0-3.128a5.2 5.2 0 0 0-.68-1.39a3.697 3.697 0 1 1 2.224 6.65m-.558 1.696q.374.372.674.767c1.35.026 2.318.357 3.022.808a4.4 4.4 0 0 1 1.556 1.752c.332.653.496 1.315.576 1.82a6 6 0 0 1 .072.758v.041l.748.013l-.747-.013v.002a.75.75 0 0 0 1.5.024l-.745-.013l.744.013v-.093q0-.08-.008-.219a8 8 0 0 0-.082-.747a7.7 7.7 0 0 0-.72-2.266a5.9 5.9 0 0 0-2.085-2.335c-1.006-.645-2.317-1.047-4.003-1.047q-.668 0-1.26.081q.407.303.758.653"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.132 7.799a3.697 3.697 0 1 1 7.394 0a3.697 3.697 0 0 1-7.394 0m3.697-2.197a2.197 2.197 0 1 0 0 4.393a2.197 2.197 0 0 0 0-4.393" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.375 19.137a.75.75 0 0 1-1.5.025l.75-.013l-.75.013v-.031a4 4 0 0 1 .01-.281a7.7 7.7 0 0 1 .802-3.013a5.9 5.9 0 0 1 2.084-2.335c1.006-.645 2.316-1.047 4.003-1.047c1.686 0 2.997.402 4.003 1.047a5.9 5.9 0 0 1 2.084 2.335a7.7 7.7 0 0 1 .72 2.266a8 8 0 0 1 .09.966l.002.063v.028s0 .002-.745-.011l.744.013a.75.75 0 0 1-1.5-.024v-.002l.748.013l-.748-.013v-.04l-.006-.16a6 6 0 0 0-.066-.599a6.2 6.2 0 0 0-.576-1.82a4.4 4.4 0 0 0-1.557-1.752c-.733-.47-1.754-.81-3.193-.81s-2.46.34-3.194.81a4.4 4.4 0 0 0-1.556 1.752a6.2 6.2 0 0 0-.577 1.82a6 6 0 0 0-.072.794z"></svg:path>`,
})
export class LineiconsUserMultiple4Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsUsersIcon],svg[lineicons-users-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.8 36.8c6.9 0 12.4-5.6 12.4-12.4S28.6 12 21.8 12S9.4 17.5 9.4 24.4S15 36.8 21.8 36.8m0-20.4c4.4 0 7.9 3.6 7.9 7.9s-3.6 7.9-7.9 7.9c-4.4 0-7.9-3.6-7.9-7.9s3.5-7.9 7.9-7.9m0 23.5c-7.2 0-14.1 2.9-19.4 8.3c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c4.4-4.5 10.2-7 16.2-7c5.9 0 11.7 2.5 16.2 7c.9.9 2.3.9 3.2 0s.9-2.3 0-3.2c-5.3-5.3-12.2-8.3-19.4-8.3m25.5-3.1c4 0 7.3-3.3 7.3-7.3s-3.3-7.3-7.3-7.3s-7.3 3.3-7.3 7.3c-.1 4 3.2 7.3 7.3 7.3m0-10.2c1.6 0 2.8 1.3 2.8 2.8c0 1.6-1.3 2.8-2.8 2.8s-2.8-1.3-2.8-2.8c-.1-1.5 1.2-2.8 2.8-2.8m14.2 19c-5.3-4.9-12.6-6.9-19.9-5c-1.2.3-1.9 1.5-1.6 2.7s1.6 1.9 2.7 1.6c5.8-1.5 11.6 0 15.7 3.9c.4.4 1 .6 1.5.6c.6 0 1.2-.2 1.6-.7c1-.8.9-2.2 0-3.1"></svg:path>`,
})
export class LineiconsUsersIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsUxIcon],svg[lineicons-ux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.1 38.5c1.9 0 3.5-1.6 3.5-3.5v-7.4c0-1.9-1.6-3.5-3.5-3.5h-7.4c-1.9 0-3.5 1.6-3.5 3.5V29H26.8v-1.4c0-1.9-1.6-3.5-3.5-3.5h-1.4v-7.9h1.4c1.9 0 3.5-1.6 3.5-3.5V5.3c0-1.9-1.6-3.5-3.5-3.5h-7.4c-1.9 0-3.5 1.6-3.5 3.5v7.4c0 1.9 1.6 3.5 3.5 3.5h1.4v7.9h-1.4c-1.9 0-3.5 1.6-3.5 3.5V35c0 1.9 1.6 3.5 3.5 3.5h7.4c1.9 0 3.5-1.6 3.5-3.5v-1.4h10.4V35c0 1.9 1.6 3.5 3.5 3.5h1.4v9.3h-1.4c-1.9 0-3.5 1.6-3.5 3.5v7.4c0 1.9 1.6 3.5 3.5 3.5h7.4c1.9 0 3.5-1.6 3.5-3.5v-7.4c0-1.9-1.6-3.5-3.5-3.5h-1.4v-9.3zM16.9 6.2h5.4v5.4h-5.4zM22.3 34h-5.4v-5.4h5.4zm24.8 23.8h-5.4v-5.4h5.4zm-5.4-29.2h5.4V34h-5.4z"></svg:path>`,
})
export class LineiconsUxIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVectorIcon],svg[lineicons-vector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M55.3 29.2c3.8 0 6.9-3.1 6.9-6.9s-3.1-6.9-6.9-6.9c-3.1 0-5.8 2.1-6.6 4.9H38.6c-.9-2.8-3.5-4.9-6.6-4.9s-5.8 2.1-6.6 4.9H15.3c-.9-2.8-3.5-4.9-6.6-4.9c-3.8 0-6.9 3.1-6.9 6.9s3.1 6.9 6.9 6.9c2.9 0 5.4-1.8 6.4-4.4h3.6c-3.5 3-6.1 7.1-7 11.7h-1.3c-2 0-3.6 1.6-3.6 3.6V45c0 2 1.6 3.6 3.6 3.6h7.5c2 0 3.6-1.6 3.6-3.6v-4.9c0-2-1.6-3.6-3.6-3.6h-1.5c1.2-4.9 4.8-9 9.6-10.9c1.2 2.1 3.4 3.6 6 3.6c2.5 0 4.7-1.4 5.9-3.4c4.6 1.9 7.9 5.9 9.1 10.7h-1c-2 0-3.6 1.6-3.6 3.6V45c0 2 1.6 3.6 3.6 3.6h7.5c2 0 3.6-1.6 3.6-3.6v-4.9c0-2-1.6-3.6-3.6-3.6h-1.9c-.9-4.6-3.4-8.8-6.9-11.7h4.2c1 2.6 3.5 4.4 6.4 4.4m0-9.3c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4s-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4M8.7 24.7c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4s2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4M17 44.1h-5.7V41H17zm35.7 0H47V41h5.7zM32 24.7c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4s2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4"></svg:path>`,
})
export class LineiconsVectorIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVectorNodes6Icon],svg[lineicons-vector-nodes-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.377 6.5a2.751 2.751 0 0 1 5.293 0h2.853v-.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75V8H14.67a2.7 2.7 0 0 1-.38.807a6.2 6.2 0 0 1 1.774.842c1.01.7 1.672 1.627 2.104 2.526A9 9 0 0 1 18.97 15h.803a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h.684l-.022-.147a7.5 7.5 0 0 0-.619-2.028c-.349-.726-.86-1.425-1.607-1.943c-.741-.514-1.76-.882-3.186-.882s-2.444.368-3.186.882c-.747.518-1.257 1.217-1.606 1.943A7.5 7.5 0 0 0 6.589 15h.684a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h.804a9 9 0 0 1 .802-2.825c.432-.9 1.094-1.825 2.104-2.526a6.2 6.2 0 0 1 1.774-.842A2.7 2.7 0 0 1 9.377 8H6.523v.75a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v.75zm3.896.75a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0M17.523 18h1.5v-1.5h-1.5zm-12.5 0h1.5v-1.5h-1.5zm-1.5-10h1.5V6.5h-1.5zm15.5 0h1.5V6.5h-1.5z"></svg:path>`,
})
export class LineiconsVectorNodes6Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVectorNodes7Icon],svg[lineicons-vector-nodes-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.523 2.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-.789v3.25h.79a.75.75 0 0 1 .75.75v.75h6v-.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-.75v3.25h.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h.75v-3.25h-.75a.75.75 0 0 1-.75-.75v-.75h-6v.75a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h.71V6.5h-.71a.75.75 0 0 1-.75-.75zm12 10h1.5v-1.5h-1.5zm-9-1.5h-1.5v1.5h1.5zm0-6.25V3.5h-1.5V5zm9 14v1.5h1.5V19z"></svg:path>`,
})
export class LineiconsVectorNodes7Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVercelIcon],svg[lineicons-vercel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 3.333l10 17.333H2z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsVercelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVideoIcon],svg[lineicons-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.7 27.7c-1-.8-2.3-1.1-3.6-.8L47.6 29c-.3-3.1-3-5.6-6.2-5.6h-2.7c.7-1.3 1.1-2.7 1.1-4.3c0-4.8-3.9-8.8-8.7-8.8c-4.6 0-8.3 3.5-8.7 8c-1.1-2.3-3.4-4-6.1-4c-3.7 0-6.8 3-6.8 6.8c0 .8.1 1.5.4 2.3H8c-3.4 0-6.3 2.8-6.3 6.3v17.7c0 3.4 2.8 6.3 6.3 6.3h33.4c3.4 0 6.3-2.8 6.3-6.3v-.5l9.4 2.1c.3.1.6.1.9.1c1 0 1.9-.3 2.6-.9c1-.8 1.6-2 1.6-3.3V31c.1-1.3-.5-2.5-1.5-3.3M31.1 14.9c2.3 0 4.2 1.9 4.2 4.3s-1.9 4.3-4.2 4.3s-4.3-1.9-4.3-4.3s2-4.3 4.3-4.3m-7.6 8.5h-.8l.3-1.2c.1.4.2.8.5 1.2M14 21.2c0-1.2 1-2.3 2.3-2.3s2.3 1 2.3 2.3s-1 2.3-2.3 2.3s-2.3-1.1-2.3-2.3m29.2 26.1c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V29.7c0-1 .8-1.8 1.8-1.8h33.4c1 0 1.8.8 1.8 1.8zm14.6-2.8l-10.1-2.2v-8.7l10.1-2.2z"></svg:path>`,
})
export class LineiconsVideoIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVimeoIcon],svg[lineicons-vimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.993 7.374c-.096 1.967-1.45 4.643-4.095 8.03c-2.709 3.547-5.03 5.32-6.901 5.32c-1.129 0-2.128-1.032-2.967-3.225c-.548-1.934-1.032-3.934-1.612-5.933C5.838 9.438 5.192 8.34 4.45 8.34c-.13 0-.677.323-1.58.968L2 8.019c1-.871 1.967-1.742 2.967-2.645c1.322-1.128 2.257-1.741 2.967-1.773c1.547-.13 2.483.967 2.87 3.192c.354 2.451.644 3.999.806 4.58c.451 2.031.967 3.03 1.45 3.03c.42 0 1.033-.644 1.903-1.966s1.258-2.354 1.355-3.032c.129-1.128-.355-1.741-1.355-1.741c-.451 0-.967.097-1.45.355c.967-3.225 2.805-4.805 5.578-4.74c2.032.096 3 1.45 2.902 4.095"></svg:path>`,
})
export class LineiconsVimeoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVisaIcon],svg[lineicons-visa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.027 8.76c-1.42 0-2.69.736-2.69 2.096c0 1.56 2.251 1.667 2.251 2.45c0 .33-.378.626-1.023.626a3.4 3.4 0 0 1-1.602-.413l-.293 1.372s.79.349 1.837.349c1.552 0 2.774-.772 2.774-2.155c0-1.648-2.26-1.753-2.26-2.48c0-.259.31-.542.954-.542c.727 0 1.32.3 1.32.3l.286-1.325s-.645-.278-1.554-.278m-12.993.1L2 9.06s.597.11 1.136.327c.692.25.742.396.858.848l1.272 4.902H6.97L9.596 8.86h-1.7l-1.688 4.268L5.52 9.51c-.063-.414-.383-.65-.775-.65zm8.246 0l-1.334 6.277h1.622l1.329-6.277zm9.044 0c-.39 0-.598.21-.75.575l-2.376 5.702h1.7l.33-.95h2.071l.2.95H22L20.691 8.86zm.221 1.696l.504 2.355H18.7z"></svg:path>`,
})
export class LineiconsVisaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsViteIcon],svg[lineicons-vite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.525 4.63l-5.132-.915a1.17 1.17 0 0 0-1.164.468a1.16 1.16 0 0 0-.07 1.28l8.901 15.58a1.182 1.182 0 0 0 2.057-.008l8.729-15.578c.49-.875-.262-1.917-1.242-1.739l-4.574.813l-.206.754l4.906-.871a.474.474 0 0 1 .498.697L12.5 20.689a.47.47 0 0 1-.5.234a.47.47 0 0 1-.326-.231L2.772 5.112a.474.474 0 0 1 .496-.7l5.133.916l.074.013z"></svg:path><svg:path fill="currentColor" d="m15.097 5.26l.162-.593l-.6.107zm-5.88-.506l.513.09l-.542.427z"></svg:path><svg:path fill="currentColor" d="m15.549 2.367l-6.1 1.26a.22.22 0 0 0-.126.077a.25.25 0 0 0-.055.142l-.375 6.685a.24.24 0 0 0 .079.194a.21.21 0 0 0 .195.05l1.698-.414c.16-.038.302.11.27.278l-.505 2.606c-.034.176.122.326.285.274l1.049-.336c.162-.052.319.098.284.274l-.801 4.093c-.05.257.272.396.407.177l.09-.147l4.97-10.464c.084-.175-.06-.375-.242-.338l-1.748.356c-.165.034-.304-.128-.258-.297l1.14-4.173c.047-.17-.093-.331-.257-.297"></svg:path>`,
})
export class LineiconsViteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVkIcon],svg[lineicons-vk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.729 3H9.271C4.191 3 3 4.19 3 9.271v5.516C3 19.81 4.19 21 9.271 21h5.516C19.81 21 21 19.81 21 14.729V9.271C21 4.191 19.81 3 14.729 3m2.787 12.832H16.21c-.494 0-.668-.406-1.568-1.306c-.784-.784-1.132-.871-1.306-.871c-.233 0-.32.029-.32.406v1.19c0 .32-.087.494-.929.494c-1.393 0-2.903-.87-4.006-2.41c-1.626-2.293-2.033-4.006-2.033-4.383c0-.204.03-.378.407-.378H7.76c.32 0 .465.116.58.494c.669 1.887 1.714 3.513 2.178 3.513c.175 0 .233-.088.233-.494v-1.916c-.03-.9-.494-.93-.494-1.306c0-.117.116-.32.32-.32h2.032c.29 0 .377.116.377.494v2.584c0 .29.116.377.203.377c.175 0 .32-.087.61-.406c.929-1.075 1.597-2.671 1.597-2.671c.087-.204.232-.378.58-.378h1.307c.406 0 .493.203.406.494c-.174.784-1.77 3.02-1.77 3.02c-.117.202-.204.318 0 .58c.115.203.609.58.9.929c.58.668.986 1.19 1.103 1.568c.145.493-.03.696-.407.696"></svg:path>`,
})
export class LineiconsVkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVmwareIcon],svg[lineicons-vmware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.654 9.988q.818.26 1.07 1.113v3.18h2.424v-.004h.373v-.006h.035V8.875q-.417-1.407-1.766-1.838H3.943q-1.35.43-1.766 1.838v11.343Q2.594 21.626 3.98 22h10.77q1.388-.374 1.805-1.782V17.26h-2.831v.712q-.253.853-1.093 1.08H6.104q-.84-.226-1.093-1.08V11.1q.252-.854 1.07-1.113z"></svg:path><svg:path fill="currentColor" d="M21.824 3.838Q21.407 2.43 20.057 2H9.212q-1.35.43-1.766 1.838v2.885h2.83v-.66q.254-.854 1.072-1.112h6.572q.818.258 1.07 1.112v6.873q-.252.853-1.093 1.08H11.37q-.84-.227-1.093-1.08V9.673H7.445v5.508q.418 1.407 1.804 1.782h10.77q1.388-.375 1.805-1.783z"></svg:path>`,
})
export class LineiconsVmwareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVolkswagenIcon],svg[lineicons-volkswagen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.889 4.75a7 7 0 0 0-1.885-.245c-.645 0-1.254.086-1.85.237l1.871 5.24zm5.491 7.254c0-.936-.156-1.828-.468-2.656l-3.507 9.298a7.52 7.52 0 0 0 3.975-6.642"></svg:path><svg:path fill="currentColor" d="m15.717 5.52l-2.161 6.044h-3.047L8.341 5.49a7.4 7.4 0 0 0-2.084 1.814l3.083 8.118l1.127-2.965h2.961l1.127 2.965l3.111-8.219a7.4 7.4 0 0 0-1.956-1.691"></svg:path><svg:path fill="currentColor" d="M12.004 2c-5.42 0-9.85 4.49-9.85 10.004c0 5.512 4.43 9.996 9.85 9.996s9.843-4.498 9.843-9.996S17.432 2 12.004 2m0 18.726c-4.726 0-8.595-3.915-8.595-8.715s3.861-8.737 8.595-8.737s8.595 3.922 8.595 8.737s-3.861 8.715-8.595 8.715"></svg:path><svg:path fill="currentColor" d="m11.94 14.055l-1.906 5.016v.158q.936.268 1.97.267a7.2 7.2 0 0 0 1.863-.238l-.021-.187zm-7.313-2.051a7.49 7.49 0 0 0 3.84 6.563L5.046 9.514a7.4 7.4 0 0 0-.418 2.49"></svg:path>`,
})
export class LineiconsVolkswagenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVolumeIcon],svg[lineicons-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 52.3c-.9 0-1.8-.2-2.6-.7l-10.8-6.7c-.1 0-.1-.1-.2-.1H5.6c-2.7 0-4.9-2.2-4.9-4.9V24.1c0-2.7 2.2-4.9 4.9-4.9h12.8c.1 0 .1 0 .2-.1l10.8-6.7c1.5-.9 3.4-1 5-.1s2.5 2.5 2.5 4.3v30.9c0 1.8-1 3.4-2.5 4.3c-.8.3-1.6.5-2.4.5M5.6 23.7c-.2 0-.4.2-.4.4v15.8c0 .2.2.4.4.4h12.8c.9 0 1.8.3 2.6.7l10.8 6.7c.1.1.3.1.4 0s.2-.2.2-.3V16.5c0-.2-.1-.3-.2-.3c-.1-.1-.3-.1-.4 0L21 23c-.8.5-1.7.7-2.6.7z"></svg:path>`,
})
export class LineiconsVolumeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVolume1Icon],svg[lineicons-volume-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.005 4.659c1.451-1.29 3.745-.26 3.745 1.681v11.32c0 1.941-2.294 2.971-3.745 1.681l-3.196-2.84H4.75a2.25 2.25 0 0 1-2.25-2.25v-4.5A2.25 2.25 0 0 1 4.75 7.5h2.059zM12.25 6.34a.75.75 0 0 0-1.248-.56l-3.41 3.03a.75.75 0 0 1-.498.19H4.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.344a.75.75 0 0 1 .498.19l3.41 3.03a.75.75 0 0 0 1.248-.56z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.077 15.164c1.561-1.739 1.561-4.588 0-6.327a.75.75 0 1 1 1.116-1.003c2.073 2.31 2.073 6.023 0 8.333a.75.75 0 0 1-1.116-1.003"></svg:path><svg:path fill="currentColor" d="M14.985 10.653c.688.765.688 1.93 0 2.695a.75.75 0 0 0 1.116 1.003a3.517 3.517 0 0 0 0-4.7a.75.75 0 0 0-1.116 1.002"></svg:path>`,
})
export class LineiconsVolume1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVolumeHighIcon],svg[lineicons-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.75 6.34c0-1.941-2.294-2.971-3.745-1.681L6.81 7.5H4.75A2.25 2.25 0 0 0 2.5 9.75v4.5a2.25 2.25 0 0 0 2.25 2.25h2.059l3.196 2.842c1.451 1.29 3.745.26 3.745-1.682zm-2.748-.56a.75.75 0 0 1 1.248.56v11.32a.75.75 0 0 1-1.248.56l-3.41-3.03a.75.75 0 0 0-.498-.19H4.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 4.75 9h2.344a.75.75 0 0 0 .498-.19z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.077 8.837c1.561 1.739 1.561 4.588 0 6.327a.75.75 0 1 0 1.116 1.002c2.073-2.309 2.073-6.023 0-8.332a.75.75 0 0 0-1.116 1.003"></svg:path><svg:path fill="currentColor" d="M19.266 16.886c2.312-2.687 2.312-7.084 0-9.771a.75.75 0 1 1 1.137-.979c2.796 3.25 2.796 8.479 0 11.729a.75.75 0 0 1-1.137-.979m-4.281-6.233c.688.765.688 1.93 0 2.695a.75.75 0 0 0 1.116 1.003a3.517 3.517 0 0 0 0-4.7a.75.75 0 0 0-1.116 1.002"></svg:path>`,
})
export class LineiconsVolumeHighIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVolumeLowIcon],svg[lineicons-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.75 6.34c0-1.941-2.294-2.971-3.745-1.681L6.81 7.5H4.75A2.25 2.25 0 0 0 2.5 9.75v4.5a2.25 2.25 0 0 0 2.25 2.25h2.059l3.196 2.842c1.451 1.29 3.745.26 3.745-1.682zm-2.748-.56a.75.75 0 0 1 1.248.56v11.32a.75.75 0 0 1-1.248.56l-3.41-3.03a.75.75 0 0 0-.498-.19H4.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 4.75 9h2.344a.75.75 0 0 0 .498-.19z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.985 10.653c.688.765.688 1.93 0 2.695a.75.75 0 0 0 1.116 1.003a3.517 3.517 0 0 0 0-4.7a.75.75 0 0 0-1.116 1.002"></svg:path>`,
})
export class LineiconsVolumeLowIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVolumeMediumIcon],svg[lineicons-volume-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50.8 42c-.5 0-1.1-.2-1.5-.6c-.9-.8-1-2.3-.1-3.2c3.2-3.4 3.2-9 0-12.4c-.8-.9-.8-2.3.1-3.2c.9-.8 2.3-.8 3.2.1c4.7 5.1 4.7 13.4 0 18.5c-.5.5-1.1.8-1.7.8m-5.6-4.1c-.5 0-1.1-.2-1.5-.6c-.9-.8-1-2.3-.1-3.2c1-1.1 1.1-3 0-4.2c-.8-.9-.8-2.3.1-3.2c.9-.8 2.3-.8 3.2.1c2.7 2.9 2.6 7.4 0 10.3c-.5.5-1.1.8-1.7.8M32 52.3c-.9 0-1.8-.2-2.6-.7l-10.8-6.7c-.1 0-.1-.1-.2-.1H5.6c-2.7 0-4.9-2.2-4.9-4.9V24.1c0-2.7 2.2-4.9 4.9-4.9h12.8c.1 0 .1 0 .2-.1l10.8-6.7c1.5-.9 3.4-1 5-.1s2.5 2.5 2.5 4.3v30.9c0 1.8-1 3.4-2.5 4.3c-.8.3-1.6.5-2.4.5M5.6 23.7c-.2 0-.4.2-.4.4v15.8c0 .2.2.4.4.4h12.8c.9 0 1.8.3 2.6.7l10.8 6.7c.1.1.3.1.4 0s.2-.2.2-.3V16.5c0-.2-.1-.3-.2-.3c-.1-.1-.3-.1-.4 0L21 23c-.8.5-1.7.7-2.6.7z"></svg:path>`,
})
export class LineiconsVolumeMediumIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVolumeMuteIcon],svg[lineicons-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.78 2.22a.75.75 0 0 0-1.06 1.06l4.158 4.158l-.07.062H4.75A2.25 2.25 0 0 0 2.5 9.75v4.5a2.25 2.25 0 0 0 2.25 2.25h2.059l3.196 2.841c1.451 1.29 3.745.26 3.745-1.681v-3.35l7.47 7.47a.75.75 0 0 0 1.06-1.061zm8.47 10.59v4.85a.75.75 0 0 1-1.248.56l-3.41-3.03a.75.75 0 0 0-.498-.19H4.75a.75.75 0 0 1-.75-.75v-4.5A.75.75 0 0 1 4.75 9h2.344a.75.75 0 0 0 .498-.19l.348-.31zm0-6.47v2.321l1.5 1.5v-3.82c0-1.942-2.294-2.972-3.745-1.683l-.93.828l1.062 1.062l.865-.768a.75.75 0 0 1 1.248.56m3.249 5.57l1.291 1.291a3.52 3.52 0 0 0-.69-3.551a.75.75 0 0 0-1.115 1.003c.323.358.494.805.514 1.257m2.253 2.253l1.105 1.105c1.379-2.292 1.158-5.405-.664-7.434a.75.75 0 0 0-1.116 1.002c1.289 1.435 1.514 3.628.675 5.327"></svg:path>`,
})
export class LineiconsVolumeMuteIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVolumeOffIcon],svg[lineicons-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.005 4.659c1.451-1.29 3.745-.26 3.745 1.681v11.32c0 1.941-2.294 2.971-3.745 1.681l-3.196-2.84H4.75a2.25 2.25 0 0 1-2.25-2.25v-4.5A2.25 2.25 0 0 1 4.75 7.5h2.059zM12.25 6.34a.75.75 0 0 0-1.248-.56l-3.41 3.03a.75.75 0 0 1-.498.19H4.75a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.344a.75.75 0 0 1 .498.19l3.41 3.03a.75.75 0 0 0 1.248-.56z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsVolumeOffIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVsCodeIcon],svg[lineicons-vs-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.95 4.903a1 1 0 0 0-.06-.166a1.2 1.2 0 0 0-.31-.425a1.2 1.2 0 0 0-.29-.197l-4.118-1.994a1.27 1.27 0 0 0-.75-.103a1.26 1.26 0 0 0-.672.347L9.106 9.75L5.228 6.553l-.337-.281a.8.8 0 0 0-.413-.19q-.033-.006-.066-.007q-.029-.004-.059-.003q-.046 0-.09.003a.3.3 0 0 0-.079.013a.7.7 0 0 0-.156.046l-1.515.629a.87.87 0 0 0-.372.306a.85.85 0 0 0-.141.463v8.936c0 .163.05.325.14.463c.091.134.222.24.373.306l1.515.638a.85.85 0 0 0 .45.056a.85.85 0 0 0 .413-.19l.337-.294l3.878-3.198l6.644 7.386q.034.033.072.066q.004.005.01.006a1.25 1.25 0 0 0 1.34.172l4.119-1.994a1 1 0 0 0 .153-.088c.097-.065.187-.147.262-.231q.057-.07.103-.144c.125-.2.191-.431.191-.669V5.247q0-.175-.05-.344M4.5 14.874V9.126l2.584 2.876zm7.334-2.873L17 7.742v8.518z"></svg:path>`,
})
export class LineiconsVsCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsVuejsIcon],svg[lineicons-vuejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.4 3.442h-3.262l-2.126 3.543l-2.135-3.542l-2.369-.001H2l10.026 17.116L22 3.442zm-5.378 13.566L5.125 5.232h2.528l4.375 7.528l4.34-7.528h2.516z"></svg:path>`,
})
export class LineiconsVuejsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWalletIcon],svg[lineicons-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M55.8 21.3h-2.2v-7.4c0-1.9-.9-3.8-2.5-4.9s-3.6-1.4-5.4-.8l-37.6 13H7c-3.3 0-6 2.7-6 6v22.3c0 3.3 2.7 6 6 6h48.8c3.3 0 6-2.7 6-6V27.3c0-3.3-2.7-6-6-6M47 12c.6-.2 1.3-.1 1.8.3s.8 1 .8 1.6v7.4H20.3zm8.8 39.5H7c-1.1 0-2-.9-2-2V27.3c0-1.1.9-2 2-2h48.8c1.1 0 2 .9 2 2v3.9H46.4c-4.1 0-7.4 3.3-7.4 7.4s3.3 7.4 7.4 7.4h11.4v3.6c0 1-.9 1.9-2 1.9m2-16.3V42H46.4c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4z"></svg:path>`,
})
export class LineiconsWalletIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWallet1Icon],svg[lineicons-wallet-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 3.25A2.25 2.25 0 0 0 3.5 5.5v13a2.25 2.25 0 0 0 2.25 2.25h13A2.25 2.25 0 0 0 21 18.5v-9a2.25 2.25 0 0 0-2.25-2.25h-.25V5.5a2.25 2.25 0 0 0-2.25-2.25zm11.25 4H5V5.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75zM5 8.75h13.75a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-13A.75.75 0 0 1 5 18.5z"></svg:path>`,
})
export class LineiconsWallet1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWarningIcon],svg[lineicons-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.5 41.3L39.1 12.2c-1.7-2.3-4.3-3.6-7.1-3.6c-2.9 0-5.5 1.3-7.1 3.6L3.5 41.3c-2 2.7-2.3 6.2-.8 9.2s4.5 4.9 7.9 4.9h42.8c3.4 0 6.4-1.9 7.9-4.9c1.5-2.9 1.2-6.5-.8-9.2m-3.2 7.2c-.8 1.5-2.2 2.4-3.9 2.4H10.6c-1.7 0-3.1-.9-3.9-2.4c-.7-1.5-.6-3.2.4-4.5l21.4-29.1c.8-1.1 2.1-1.8 3.5-1.8s2.7.6 3.5 1.8L56.9 44c1 1.3 1.1 3 .4 4.5"></svg:path><svg:path fill="currentColor" d="M32 23c-1.2 0-2.3 1-2.3 2.3v10.9c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-11c0-1.2-1.1-2.2-2.3-2.2m0 17.8c-1.2 0-2.3 1-2.3 2.3v.5c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V43c0-1.2-1.1-2.2-2.3-2.2"></svg:path>`,
})
export class LineiconsWarningIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWatchBeat1Icon],svg[lineicons-watch-beat-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.453 12.209l.548-1.16l.808 3.294c.248 1.009 1.616 1.168 2.089.243l.886-1.734h.658a.75.75 0 0 0 0-1.5h-.889c-.421 0-.807.236-.999.611L13.024 13l-.82-3.343c-.253-1.026-1.654-1.167-2.105-.211l-.9 1.906h-.64a.75.75 0 0 0 0 1.5h.88c.434 0 .829-.25 1.014-.643"></svg:path><svg:path fill="currentColor" d="M9.427 2a2.25 2.25 0 0 0-2.012 1.244L6.53 5.01A2.25 2.25 0 0 0 4.5 7.25v9.5a2.25 2.25 0 0 0 2.031 2.24l.884 1.766A2.25 2.25 0 0 0 9.427 22h5.146a2.25 2.25 0 0 0 2.012-1.244l.884-1.767A2.25 2.25 0 0 0 19.5 16.75v-9.5a2.25 2.25 0 0 0-2.031-2.24l-.884-1.766A2.25 2.25 0 0 0 14.573 2zM6.983 17.5H6.75a.75.75 0 0 1-.75-.75v-9.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75zm1.773 2.585L8.214 19h7.572l-.542 1.085a.75.75 0 0 1-.671.415H9.427a.75.75 0 0 1-.67-.415M15.786 5H8.215l.542-1.085a.75.75 0 0 1 .671-.415h5.146a.75.75 0 0 1 .67.415z"></svg:path>`,
})
export class LineiconsWatchBeat1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWaterDrop1Icon],svg[lineicons-water-drop-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.436 2.623l-.413.627l-.412-.627a.75.75 0 0 1 .824 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m11.611 2.623l.412.627l.412-.627l.002.001l.001.001l.006.004l.019.013l.069.046q.09.061.252.177a26 26 0 0 1 3.566 3.102c1.925 2.023 3.991 4.938 3.991 8.215a8.318 8.318 0 1 1-16.636 0c0-3.277 2.067-6.192 3.99-8.215a26 26 0 0 1 3.567-3.102a15 15 0 0 1 .322-.223l.019-.013l.005-.004zm.412 1.543A24.3 24.3 0 0 0 8.783 7c-1.86 1.955-3.578 4.505-3.578 7.18a6.818 6.818 0 1 0 13.636 0c0-2.675-1.717-5.225-3.577-7.18a24.3 24.3 0 0 0-3.24-2.835" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsWaterDrop1Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWebflowIcon],svg[lineicons-webflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m22 5.765l-6.39 12.47H9.622l2.664-5.172h-.123C9.975 15.926 6.68 17.805 2 18.236V13.14s3.002-.17 4.758-2.033H2V5.765h5.343v4.403h.123l2.186-4.403h4.05v4.372h.123l2.247-4.372z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsWebflowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWebhooksIcon],svg[lineicons-webhooks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.373 10.471c-1.938-.987-2.647-2.296-2.178-3.9c.412-1.412 1.804-2.337 3.22-2.12c.707.11 1.329.403 1.813.964c.734.85.9 1.84.675 2.945l.67.184l1.004.277c.713-1.986-.124-4.306-1.95-5.497c-1.9-1.24-4.363-.979-5.978.637c-.843.843-1.304 1.873-1.411 3.064c-.152 1.685.534 3.045 1.686 4.208l-1.832 3.12l-.157.01a2 2 0 0 0-.216.019c-1.204.173-2.052 1.26-1.849 2.37c.229 1.252 1.351 2.021 2.504 1.715c1.222-.325 1.872-1.523 1.411-2.754c-.167-.445-.064-.73.145-1.081c.59-.988 1.17-1.98 1.76-2.992zm4.147 1.493L13.749 8.79l.085-.212c.058-.143.111-.273.156-.407c.234-.704.092-1.347-.353-1.918a2.015 2.015 0 0 0-2.303-.638a2.08 2.08 0 0 0-1.304 2.033c.036.911.638 1.725 1.57 1.889c.559.098.832.368 1.08.832c.527.987 1.073 1.963 1.619 2.94l.647 1.16c1.829-1.238 3.342-1.199 4.472.091c.979 1.118 1 2.82.048 3.962c-1.116 1.338-2.618 1.392-4.337.261l-1.364 1.16c1.74 1.764 4.222 1.998 6.186.626c1.912-1.338 2.578-3.905 1.604-6.073c-.806-1.794-3.054-3.47-6.035-2.533m-3.959 5.412h3.589q.075.102.142.2c.096.137.186.266.292.381c.76.826 2.043.866 2.856.1c.842-.793.88-2.127.084-2.956c-.779-.811-2.11-.889-2.832-.03c-.44.522-.89.583-1.472.574a171 171 0 0 0-3.197-.01l-1.282.002c.097 2.133-.697 3.462-2.272 3.778c-1.542.309-2.961-.49-3.461-1.948c-.568-1.656.134-2.981 2.163-4.032l-.46-1.694c-2.211.49-3.87 2.669-3.699 5.12c.151 2.164 1.87 4.086 3.972 4.43a4.72 4.72 0 0 0 3.21-.58c1.28-.738 2.023-1.898 2.367-3.335" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsWebhooksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWebsiteIcon],svg[lineicons-website-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m47 26.3l.5-1.1l.5 1.1c.4.9 1.3 1.4 2.3 1.4s1.8-.5 2.3-1.4l2.5-5.1c.6-1.1.1-2.5-1-3s-2.5-.1-3 1l-.8 1.5l-.5-1.1c-.4-.9-1.3-1.4-2.3-1.4s-1.8.5-2.3 1.4l-.5 1.1l-.7-1.6c-.6-1.1-1.9-1.6-3-1c-.6.3-1 .9-1.2 1.5c-.1-.6-.6-1.2-1.2-1.5c-1.1-.6-2.5-.1-3 1l-.8 1.5l-.5-1.1c-.4-.9-1.3-1.4-2.3-1.4s-1.8.5-2.3 1.4l-.5 1.1l-.8-1.5c-.6-1.1-1.9-1.6-3-1c-.6.3-1 .9-1.2 1.5c-.1-.6-.6-1.2-1.2-1.5c-1.1-.6-2.5-.1-3 1l-.8 1.5l-.5-1.1c-.4-.9-1.3-1.4-2.3-1.4s-1.8.5-2.3 1.4l-.5 1.1l-.8-1.5c-.6-1.1-1.9-1.6-3-1s-1.6 1.9-1 3l2.5 5.1c.4.9 1.3 1.4 2.3 1.4s1.8-.5 2.3-1.4l.5-1.1l.5 1.1c.4.9 1.3 1.4 2.3 1.4s1.8-.5 2.3-1.4l2.5-5.1c.1-.2.1-.3.2-.5c0 .2.1.3.2.5l2.5 5.1c.4.9 1.3 1.4 2.3 1.4s1.8-.5 2.3-1.4l.5-1.1l.5 1.1c.4.9 1.3 1.4 2.3 1.4s1.8-.5 2.3-1.4l2.5-5.1c.1-.2.1-.3.2-.5c0 .2.1.3.2.5l2.5 5.1c.4.9 1.3 1.4 2.3 1.4c.9.1 1.8-.5 2.2-1.3"></svg:path><svg:path fill="currentColor" d="M58.4 7.3H5.6C2.9 7.3.8 9.5.8 12.2v21.2c0 2.7 2.2 4.9 4.8 4.9h31.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H5.6c-.2 0-.3-.2-.3-.4V12.2c0-.2.1-.4.3-.4h52.9c.2 0 .3.2.3.4v21.2c0 .2-.2.4-.4.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c2.7 0 4.9-2.2 4.9-4.9V12.2c0-2.7-2.2-4.9-4.9-4.9"></svg:path><svg:path fill="currentColor" d="m61.3 43.9l-14.1-7.1c-1.2-.6-2.6-.4-3.4.5c-.9.9-1.1 2.3-.5 3.5l7.1 14.1c.6 1.1 1.7 1.9 3 1.9h.1c1.1 0 2.1-.7 2.5-1.7l1.7-3.9l3.9-1.7c1-.4 1.6-1.4 1.7-2.5c-.1-1.4-.8-2.6-2-3.1m-7.1 3.8l-1.1 2.5l-3.7-7.3l7.3 3.7z"></svg:path>`,
})
export class LineiconsWebsiteIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWebsiteAltIcon],svg[lineicons-website-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.6 27.5c-1-.7-2.4-.4-3.1.6l-2 2.9l-1.6-2.4c-.5-.7-1.3-1.1-2.2-1.1s-1.7.4-2.2 1.1L6.8 31l-2-2.9c-.7-1-2.1-1.3-3.1-.6s-1.3 2.1-.6 3.1l3.5 5.2c.5.7 1.3 1.1 2.2 1.1s1.7-.4 2.2-1.1l1.6-2.4l1.6 2.4c.5.7 1.3 1.1 2.2 1.1s1.7-.4 2.2-1.1l3.5-5.2c.8-1 .5-2.4-.5-3.1m21.3 0c-1-.7-2.4-.4-3.1.6l-2 2.9l-1.6-2.4c-.5-.7-1.3-1.1-2.2-1.1s-1.7.4-2.2 1.1L28.2 31l-2-2.9c-.7-1-2.1-1.3-3.1-.6s-1.3 2.1-.6 3.1l3.5 5.2c.5.7 1.3 1.1 2.2 1.1s1.7-.4 2.2-1.1l1.6-2.4l1.6 2.4c.5.7 1.3 1.1 2.2 1.1s1.7-.4 2.2-1.1l3.5-5.2c.7-1 .5-2.4-.6-3.1m21.4 0c-1-.7-2.4-.4-3.1.6l-2 2.9l-1.6-2.4c-.5-.7-1.3-1.1-2.2-1.1s-1.7.4-2.2 1.1L49.5 31l-2-2.9c-.7-1-2.1-1.3-3.1-.6s-1.3 2.1-.6 3.1l3.5 5.2c.5.7 1.3 1.1 2.2 1.1s1.7-.4 2.2-1.1l1.6-2.4l1.6 2.4c.5.7 1.3 1.1 2.2 1.1s1.7-.4 2.2-1.1l3.5-5.2c.8-1 .5-2.4-.5-3.1"></svg:path>`,
})
export class LineiconsWebsiteAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWechatIcon],svg[lineicons-wechat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.903 18.274C21.161 17.37 22 16.016 22 14.467c0-2.774-2.677-5.064-6.032-5.064s-6 2.258-6 5.032s2.677 5.033 6 5.033a7.8 7.8 0 0 0 1.968-.259c.032-.032.096-.032.193-.032s.226.032.323.097l1.322.774c.032.032.032.032.097.032a.21.21 0 0 0 .194-.193c0-.032-.033-.097-.033-.13c0-.032-.193-.644-.226-1.032v-.129c-.064-.129 0-.258.097-.322m-5.935-4.58a.8.8 0 0 1-.807-.807a.8.8 0 0 1 .807-.807c.451 0 .806.355.806.807a.8.8 0 0 1-.806.806m4 0a.8.8 0 0 1-.807-.807a.8.8 0 0 1 .807-.807c.451 0 .806.355.806.807c0 .451-.322.806-.806.806"></svg:path><svg:path fill="currentColor" d="M15.968 9.016h.42c-.581-2.871-3.582-5.097-7.162-5.097C5.258 3.951 2 6.629 2 9.951c0 1.871.968 3.452 2.516 4.549c.13.096.194.226.194.419c0 .032-.033.097-.033.13a28 28 0 0 0-.322 1.225c-.097.064-.097.097-.097.193c0 .13.097.226.258.226c.032 0 .097-.032.13-.032l1.58-.903c.097-.032.258-.097.42-.097c.031 0 .128.032.225.032c.742.226 1.548.323 2.355.323h.42a5.5 5.5 0 0 1-.227-1.452c0-3.161 2.904-5.548 6.549-5.548m-4.323-1.968a.97.97 0 0 1 .968.968a.99.99 0 0 1-.968.967a.99.99 0 0 1-.967-.967a.97.97 0 0 1 .967-.968M6.806 9.016a.97.97 0 0 1-.967-.968c0-.516.451-.968.967-.968c.517 0 .968.452.968.968a.97.97 0 0 1-.968.968"></svg:path>`,
})
export class LineiconsWechatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWeightIcon],svg[lineicons-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.5 1.8h-43C7.1 1.8 4.3 4.6 4.3 8v48c0 3.4 2.8 6.2 6.2 6.2h42.9c3.4 0 6.2-2.8 6.2-6.2V8c.1-3.4-2.7-6.2-6.1-6.2M55.2 56c0 1-.8 1.8-1.8 1.8H10.5c-1 0-1.8-.8-1.8-1.8V8c0-1 .8-1.8 1.8-1.8h42.9c1 0 1.8.8 1.8 1.8z"></svg:path><svg:path fill="currentColor" d="M45.8 14c-9.2-1.7-18.5-1.7-27.6 0c-.9.2-1.8.7-2.3 1.5c-.5.7-.6 1.6-.5 2.4l1.9 9.3c.3 1.5 1.7 2.6 3.2 2.6c.2 0 .4 0 .6-.1c7.2-1.4 14.5-1.4 21.7 0c1.7.3 3.5-.8 3.8-2.5l1.9-9.3c.2-.8 0-1.7-.5-2.4c-.4-.7-1.2-1.3-2.2-1.5m-3.3 11.1c-2.9-.5-5.9-.8-8.8-.9l-1.2-3.6c-.4-1.2-1.7-1.8-2.9-1.4s-1.8 1.7-1.4 2.9l.7 2.1c-2.5.1-5 .4-7.5.8L20 18.1c7.9-1.4 15.9-1.4 23.8 0z"></svg:path>`,
})
export class LineiconsWeightIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWeightMachine1Icon],svg[lineicons-weight-machine-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.554 6.28a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.523 4.5H7.84A4.75 4.75 0 0 1 12.023 2a4.75 4.75 0 0 1 4.185 2.5h2.315a2.25 2.25 0 0 1 2.25 2.25V18.5a2.25 2.25 0 0 1-2.25 2.25h-13a2.25 2.25 0 0 1-2.25-2.25V6.75a2.25 2.25 0 0 1 2.25-2.25m1.75 2.25q0-.383.06-.75h-1.81a.75.75 0 0 0-.75.75V18.5c0 .414.336.75.75.75h13a.75.75 0 0 0 .75-.75V6.75a.75.75 0 0 0-.75-.75h-1.808q.058.367.058.75a4.75 4.75 0 1 1-9.5 0m4.75-3.25a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsWeightMachine1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWhatsappIcon],svg[lineicons-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.074 4.894A9.93 9.93 0 0 0 12.064 2C6.598 2 2.13 6.437 2.13 11.904c0 1.768.45 3.44 1.318 4.983L2.032 22l5.306-1.35c1.447.771 3.087 1.221 4.759 1.221c5.434-.032 9.87-4.47 9.87-9.967c0-2.637-1.028-5.113-2.893-7.01m-7.042 15.273a8.2 8.2 0 0 1-4.212-1.19l-.322-.192l-3.119.803l.869-3.022l-.193-.322A8.53 8.53 0 0 1 3.8 11.84c0-4.534 3.665-8.2 8.231-8.2c2.187 0 4.245.869 5.788 2.412a8.24 8.24 0 0 1 2.412 5.852c.064 4.599-3.666 8.264-8.2 8.264m4.534-6.173c-.257-.129-1.447-.74-1.736-.772c-.225-.097-.418-.129-.547.129c-.129.257-.643.771-.772.964c-.128.129-.257.193-.546.032c-.258-.128-1.03-.353-1.994-1.254c-.74-.643-1.254-1.447-1.35-1.736c-.129-.257-.033-.354.128-.515c.129-.128.258-.257.354-.45c.129-.128.129-.257.257-.418c.129-.128.032-.321-.032-.45c-.096-.128-.547-1.35-.772-1.865c-.193-.514-.418-.418-.546-.418h-.45c-.13 0-.45.032-.644.322c-.225.257-.868.868-.868 2.09s.868 2.347 1.03 2.572c.128.129 1.768 2.669 4.212 3.762c.578.257 1.028.418 1.414.547c.579.193 1.126.128 1.544.096c.482-.032 1.447-.579 1.672-1.19c.193-.546.193-1.093.128-1.19c-.064-.063-.257-.16-.482-.256"></svg:path>`,
})
export class LineiconsWhatsappIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWheelbarrowIcon],svg[lineicons-wheelbarrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M55 42.8c-1 0-1.9.2-2.8.5l-1.8-2.1c3.7-2.2 6.6-5.7 8-10l1.8-5.5c.3-.9 1-3-.2-4.8c-.9-1.2-2.3-1.8-4.4-1.8H18.2l-3-9.1c-.6-2-2.4-3.3-4.5-3.3H4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h6.7c.1 0 .2.1.2.2l3.3 10.4v31.5c0 1.2.7 2.3 1.9 2.7c.3.1.7.2 1 .2c.7 0 1.4-.3 2-.8l15.6-11.7h6.7c1.6 0 3.2-.2 4.7-.6l2.7 3.2c-.7 1.1-1.1 2.4-1.1 3.8c0 4 3.3 7.3 7.3 7.3s7.3-3.3 7.3-7.3c-.1-4-3.3-7.2-7.3-7.2m-36.2 7.3v-6.4h8.5zm0-10.9V23.7h37.5c0 .1-.1.3-.2.6l-1.8 5.5c-1.9 5.6-7 9.4-12.8 9.4zM55 52.8c-1.5 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8s2.8 1.2 2.8 2.8s-1.3 2.8-2.8 2.8"></svg:path>`,
})
export class LineiconsWheelbarrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWheelbarrowEmptyIcon],svg[lineicons-wheelbarrow-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5.207a.75.75 0 0 1 .75-.75h.684a2.25 2.25 0 0 1 2.25 2.25v.4H21.25a.75.75 0 0 1 .621 1.17l-3.29 4.855a3.48 3.48 0 1 1-5.333 3.35l-4.222-1.144l-.91 2.81a2.015 2.015 0 0 1-3.93-.62V6.706a.75.75 0 0 0-.75-.75H2.75a.75.75 0 0 1-.75-.75m5.575 9.738l-1.89-.512v3.094a.515.515 0 0 0 1.003.159zm5.823.024a3.48 3.48 0 0 1 3.726-2.36l2.711-4.003H5.685v4.273zm3.305-.886a1.98 1.98 0 1 0 0 3.96a1.98 1.98 0 0 0 0-3.96" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsWheelbarrowEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWheelchairIcon],svg[lineicons-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.2 52.3c-3.1 3.5-7.6 5.4-12.3 5.4c-9.2 0-16.7-7.5-16.7-16.7c0-5.4 2.5-10.3 6.8-13.4c1-.7 1.2-2.1.5-3.1s-2.1-1.2-3.1-.5C10 27.9 6.8 34.3 6.8 41c0 11.7 9.5 21.2 21.2 21.2c6 0 11.7-2.5 15.7-6.9c.8-.9.8-2.3-.2-3.2c-1-.8-2.5-.7-3.3.2"></svg:path><svg:path fill="currentColor" d="m54.9 48.9l-4 .3L49.6 35c-.1-1.5-1.3-2.7-2.9-2.7H26.8l-.5-8.2h13.3c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H26.1l-.2-2.9c3.6-.6 6.4-3.7 6.4-7.4c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5c0 2.9 1.7 5.5 4.1 6.7l1.1 18.1c0 1.5 1.3 2.7 2.9 2.7h20l1.2 14.4v.3c.3 1.4 1.5 2.4 2.9 2.4h.1l5.7-.5c1.2-.1 2.2-1.2 2.1-2.4c-.2-1.4-1.3-2.3-2.5-2.2M24.7 6.2c1.7 0 3 1.4 3 3s-1.4 3-3 3s-3-1.4-3-3s1.4-3 3-3"></svg:path>`,
})
export class LineiconsWheelchairIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWheelchair1Icon],svg[lineicons-wheelchair-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.625 2.75a.75.75 0 0 1 .75-.75h1.5a2.25 2.25 0 0 1 2.25 2.25v2.125h9a2.25 2.25 0 0 1 2.25 2.25v8.753c.508.18.933.537 1.199.997h1.676a.75.75 0 0 1 0 1.5h-1.406a2.25 2.25 0 1 1-2.969-2.497V13.13h-3.12a6.184 6.184 0 1 1-8.13-2.945V4.25a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 1-.75-.75m4.5 6.973q.517-.09 1.059-.09c1.8 0 3.421.77 4.552 1.997h4.139V8.625a.75.75 0 0 0-.75-.75h-9zm1.059 1.41a4.684 4.684 0 1 0 0 9.368a4.684 4.684 0 0 0 0-9.368m8.691 8.367a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0"></svg:path>`,
})
export class LineiconsWheelchair1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWindowsIcon],svg[lineicons-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.968 11.516V2.032c-3.645.484-7.258 1-10.936 1.58v7.969c3.678-.033 7.29-.033 10.936-.065M2 4.968v6.71c2.677 0 5.452-.033 8.129-.033V3.839c-2.677.354-5.452.71-8.129 1.129m0 7.484v6.71c2.677.354 5.452.709 8.129 1.096v-7.742c-2.677-.065-5.452-.065-8.129-.065m9.13.129c.031 2.646.031 5.226.031 7.84q5.42.725 10.839 1.548V12.58z"></svg:path>`,
})
export class LineiconsWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWiseIcon],svg[lineicons-wise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.401 8.204L2 14.544h9.667l1.096-2.975H8.614l2.544-2.935v-.078L9.516 5.738h7.397L11.159 21.51h3.913L22 2.489H4.114z"></svg:path>`,
})
export class LineiconsWiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWordpressIcon],svg[lineicons-wordpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.452 2 2 6.484 2 12s4.452 10 10 10s10-4.516 10-10S17.484 2 12 2m8.871 10a8.82 8.82 0 0 1-4.58 7.742l2.58-6.645c.129-.355 1.032-2.549 1.355-4.42A9.1 9.1 0 0 1 20.87 12m-6.968-4.355H9.355c-.194 0-.323.13-.323.323s.13.322.323.322H10l1.129 2.904l-1.355 3.483l-2.451-6.419h.774c.193 0 .322-.129.322-.323c0-.193-.129-.322-.322-.322H6.774L4.645 7.58C6.097 5.032 8.903 3.355 12 3.355c2.258 0 4.355.903 5.903 2.355c-.806.129-1.451.774-1.645 1.548c-.194.903.13 1.645.484 2.323c.355.742.742 1.419.451 2.226L16 14.903l-2.548-6.645h.483c.194 0 .323-.129.323-.323c0-.16-.226-.29-.355-.29M3.13 12c0-1.129.226-2.226.645-3.226L8.13 19.968c-3-1.42-5-4.452-5-7.968m8.968 1.903l2.58 6.549c-.87.258-1.742.419-2.677.419c-.871 0-1.677-.097-2.452-.355z"></svg:path>`,
})
export class LineiconsWordpressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWordpressFillIcon],svg[lineicons-wordpress-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 1C14.8 1 1 14.9 1 32s13.8 31 31 31s31-14 31-31S49 1 32 1m27.5 31c0 10.4-5.8 19.4-14.2 24l8-20.6c.4-1.1 3.2-7.9 4.2-13.7c1.3 3.3 2 6.8 2 10.3M37.9 18.5H23.8c-.6 0-1 .4-1 1s.4 1 1 1h2l3.5 9l-4.2 10.8l-7.6-19.9h2.4c.6 0 1-.4 1-1s-.4-1-1-1h-4.1l-6.6-.1C13.7 10.4 22.4 5.2 32 5.2c7 0 13.5 2.8 18.3 7.3c-2.5.4-4.5 2.4-5.1 4.8c-.6 2.8.4 5.1 1.5 7.2c1.1 2.3 2.3 4.4 1.4 6.9L44.4 41l-7.9-20.6H38c.6 0 1-.4 1-1c0-.5-.7-.9-1.1-.9M4.5 32c0-3.5.7-6.9 2-10L20 56.7C10.7 52.3 4.5 42.9 4.5 32m27.8 5.9l8 20.3c-2.7.8-5.4 1.3-8.3 1.3c-2.7 0-5.2-.3-7.6-1.1z"></svg:path>`,
})
export class LineiconsWordpressFillIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWorldIcon],svg[lineicons-world-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M58.4 17.1c-4.1-7.1-11-12.4-19-14.4c-2.6-.6-5-.9-7.4-.9c-2.5 0-5.1.3-7.6 1c-7.9 2-14.7 7.2-18.7 14.4c-2.6 4.6-3.9 9.6-3.9 14.8v.7c.1 5.5 1.8 10.9 4.7 15.6c4.8 7.6 12.7 12.6 21.5 13.6c1.2.2 2.5.3 4 .3c1.2 0 2.5-.1 3.7-.2c9-1.1 16.9-6.1 21.8-13.7c3-4.6 4.6-10 4.8-15.6V32c0-5-1.4-10.2-3.9-14.9m-7.1 13.5c-.3-3.3-1.1-6.5-2.4-9.5h6.4c1.4 3 2.2 6.3 2.4 9.5zm-45 0c.2-3.3 1-6.5 2.4-9.5h5.8c-1.3 3-2 6.2-2.3 9.5zm13.2-9.5h10.2v9.5H16.8c.3-3.4 1.2-6.6 2.7-9.5m21.7-4.5h-7V8.3c2.3 1.8 4.6 4.6 7 8.3M29.8 8.2v8.4h-7.5q3.75-5.7 7.5-8.4m0 26.9v9.5h-10c-1.6-2.9-2.6-6.2-2.9-9.5zm0 14V56c-2.5-1.7-5-4.1-7.2-6.9zm4.5 6.9v-7h7.6c-2.1 2.9-4.7 5.3-7.6 7m0-11.4v-9.5h12.6c-.2 3.3-1 6.5-2.4 9.5zm0-14v-9.5H44c1.5 2.9 2.5 6.2 2.8 9.5zm18.3-14h-6.1q-3.3-5.55-6.6-9c5.1 1.6 9.6 4.8 12.7 9M23.5 7.7c-2.2 2.3-4.4 5.3-6.6 8.8h-5.4c3-4 7.2-7.1 12-8.8M6.4 35.1h5.9c.3 3.3 1.1 6.5 2.4 9.5H9.5c-1.7-3-2.7-6.2-3.1-9.5m6.3 14h4.5c1.6 2.6 3.6 5 5.6 7c-3.9-1.5-7.4-3.9-10.1-7m29.2 6.7c2-1.9 3.8-4.2 5.2-6.6c0 0 0-.1.1-.1h4.1c-2.6 2.9-5.8 5.2-9.4 6.7m12.6-11.2h-5.2c1.2-3 1.9-6.2 2-9.5h6.2c-.3 3.3-1.4 6.5-3 9.5"></svg:path>`,
})
export class LineiconsWorldIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWorldAltIcon],svg[lineicons-world-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51.2 19.2c-1.4-3.8-4.1-6.8-7.7-8.5c-3.1-1.4-6.5-1.8-9.8-1l-2-5.5c-.4-1-1.2-1.9-2.2-2.3s-2.1-.4-3 0c-11.7 5.3-17.4 19-13 31.1c3.1 8.5 10.5 14.4 18.9 15.9v8.6H27c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h15.2c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-5.3v-8.2c2.2 0 4.3-.3 6.5-.9c1-.3 1.9-1 2.4-1.9c.5-1 .6-2.1.2-3.1l-2.1-5.8c6.6-3.2 9.9-11.1 7.3-18.4M17.7 31.7c-3.6-9.7.8-20.7 10-25.2l1.8 5c-2.6 1.5-4.7 3.8-6 6.6c-1.7 3.6-1.9 7.7-.5 11.5s4.1 6.8 7.7 8.5c2 .9 4.2 1.4 6.3 1.4c.8 0 1.6-.1 2.4-.2l1.9 5.3c-9.8 2.3-20.1-3.2-23.6-12.9m23 2.5c-2.6 1-5.5.8-8-.3c-2.5-1.2-4.5-3.3-5.4-5.9s-.8-5.5.3-8c1.2-2.5 3.3-4.5 5.9-5.4q1.8-.6 3.6-.6c1.5 0 3 .3 4.4 1c2.5 1.2 4.5 3.3 5.4 5.9c2 5.3-.8 11.3-6.2 13.3"></svg:path>`,
})
export class LineiconsWorldAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWriteIcon],svg[lineicons-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.1 10.3h-2.3V8c0-3.4-2.8-6.3-6.3-6.3H14.3C10.8 1.8 8 4.6 8 8v34.2c0 1.3.5 2.5 1.4 3.5l14.6 15c.9 1 2.2 1.5 3.6 1.5h18.3c2.7 0 5-2.2 5-5v-.9l4.8-9.7c.2-.3.2-.6.2-1l.1-32.4c0-1.5-1.3-2.8-2.9-2.9m-1.6 8.1h-5.6v-3.7h5.6zm-7.1-3.6q.15 0 0 0q.15 0 0 0M23.8 54l-8.2-8.4h8.2zm22.1 3.8H28.3V43.9c0-1.6-1.3-2.8-2.8-2.8h-13V8c0-1 .8-1.8 1.8-1.8h30.4c1 0 1.8.8 1.8 1.8v2.2h-2c-1.7 0-3 1.3-3 2.9l-.1 32.5c0 .4.1.7.2 1l4.9 9.7v.9c-.1.3-.3.6-.6.6m2.7-7l-2.8-5.7V22.9h5.6v22.2z"></svg:path>`,
})
export class LineiconsWriteIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWwwIcon],svg[lineicons-www-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.714 14.096q.03.018.066.018h.9q.08 0 .097-.085l.38-2.071q.007-.018.019-.018t.018.018l.435 2.078q.018.078.102.078h.967q.078 0 .096-.079L19.87 9.99q.014-.05-.012-.073q-.018-.03-.066-.03h-1.033q-.078 0-.097.079l-.453 1.969q-.006.024-.018.024t-.018-.024l-.453-1.97q-.018-.078-.097-.078h-.881q-.084 0-.103.079l-.405 1.969q-.006.024-.018.024q-.012-.006-.018-.024l-.513-1.97q-.019-.078-.097-.078h-2.002q-.08 0-.097.079l-.453 1.969q-.006.024-.018.024T13 11.935l-.453-1.97q-.018-.078-.097-.078h-.882q-.084 0-.102.079l-.405 1.969q-.006.024-.018.024q-.012-.006-.018-.024l-.514-1.97q-.018-.078-.096-.078H8.41q-.078 0-.096.079l-.453 1.969q-.006.024-.018.024q-.013 0-.019-.024l-.453-1.97q-.018-.078-.096-.078h-.882q-.084 0-.103.079l-.404 1.969q-.006.024-.019.024q-.012-.006-.018-.024l-.513-1.97q-.018-.078-.097-.078H4.213q-.084 0-.084.072q0 .02.006.03l1.196 4.048a.1.1 0 0 0 .036.06q.03.018.067.018h.9q.078 0 .096-.085l.38-2.071q.006-.018.019-.018t.018.018l.435 2.078q.018.078.102.078h.967q.078 0 .097-.079l.973-3.665l1.083 3.666a.1.1 0 0 0 .037.06q.03.018.066.018h.9q.079 0 .097-.085l.38-2.071q.006-.018.018-.018t.018.018l.435 2.078q.018.078.103.078h.966q.08 0 .097-.079l.974-3.665l1.083 3.666a.1.1 0 0 0 .036.06"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.248 4.5a2.25 2.25 0 0 0-2.25 2.25v10.5a2.25 2.25 0 0 0 2.25 2.25H19.75A2.25 2.25 0 0 0 22 17.25V6.75a2.25 2.25 0 0 0-2.25-2.25zm-.75 2.25a.75.75 0 0 1 .75-.75H19.75a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H4.248a.75.75 0 0 1-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsWwwIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsWwwCursorIcon],svg[lineicons-www-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 6.75A.75.75 0 0 1 4.25 6h15.501a.75.75 0 0 1 .75.75v8.763l1.5 1.096V6.75a2.25 2.25 0 0 0-2.25-2.25H4.25A2.25 2.25 0 0 0 2 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25h9.404l-.162-1.5H4.25a.75.75 0 0 1-.75-.75z"></svg:path><svg:path fill="currentColor" d="M18.7 14.114h-.113l-1.109-.81l-.282-1.346q-.006-.018-.018-.018t-.018.018l-.18.982l-.268-.195a2.25 2.25 0 0 0-1.538-.424l-.577-1.951l-.654 2.464c-.395.33-.663.782-.764 1.28h-.619q-.084 0-.102-.078l-.435-2.078q-.006-.018-.018-.018t-.019.018l-.38 2.072q-.018.084-.097.084h-.9a.13.13 0 0 1-.066-.018a.1.1 0 0 1-.036-.06L9.423 10.37l-.974 3.666q-.018.078-.096.078h-.967q-.084 0-.102-.078l-.435-2.078q-.006-.018-.018-.018t-.018.018l-.38 2.072q-.019.084-.098.084h-.9a.13.13 0 0 1-.066-.018a.1.1 0 0 1-.036-.06L4.137 9.989a.1.1 0 0 1-.006-.03q0-.073.084-.073h1.027q.08 0 .097.079l.513 1.969q.006.018.018.024q.012 0 .018-.024l.405-1.97q.018-.078.103-.078h.882q.078 0 .096.079l.453 1.969q.006.024.018.024q.013 0 .019-.024l.453-1.97q.018-.078.096-.078h2.003q.079 0 .097.079l.513 1.969q.006.018.018.024q.012 0 .018-.024l.405-1.97q.018-.078.103-.078h.881q.08 0 .097.079l.453 1.969q.006.024.018.024t.018-.024l.453-1.97q.019-.078.097-.078h2.003q.078 0 .097.079l.513 1.969q.006.018.018.024q.012 0 .018-.024l.405-1.97q.018-.078.103-.078h.881q.08 0 .097.079l.453 1.969q.006.024.018.024t.018-.024l.453-1.97q.018-.078.097-.078h1.033q.048 0 .066.03q.024.024.012.073l-1.075 4.047q-.018.078-.096.078"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.007 13.995a.75.75 0 0 1 .817.044l4.856 3.548a.75.75 0 0 1-.306 1.343l-1.492.277l.801 1.388a.75.75 0 0 1-1.299.75l-.802-1.389l-.986 1.155a.75.75 0 0 1-1.316-.407l-.644-5.979a.75.75 0 0 1 .37-.73m1.578 4.82l.201-.236a2.25 2.25 0 0 1 1.3-.75l.305-.057l-2.082-1.52z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsWwwCursorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsXIcon],svg[lineicons-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.751 2.96h3.067l-6.7 7.659L22 21.039h-6.172l-4.833-6.32l-5.531 6.32h-3.07l7.167-8.19L2 2.96h6.328l4.37 5.777zm-1.076 16.243h1.7L7.404 4.7H5.58z"></svg:path>`,
})
export class LineiconsXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsXamppIcon],svg[lineicons-xampp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.664 11.803a.33.33 0 0 0-.087.14l.08.028q.086.03.17.067c.338.152.537.415.561.783q.048.714.001 1.428c-.037.55-.543.97-1.112.953c-.551-.015-1.027-.465-1.047-1.005c-.009-.218-.007-.436-.006-.654q.002-.17.001-.34c0-.18-.002-.182-.184-.182h-1.01q-1.027.005-2.056-.003c-.666-.006-1.066.361-1.103 1.095c-.015.285-.075.545-.268.764c-.298.338-.673.45-1.104.349c-.415-.099-.65-.392-.776-.786c-.088-.275-.042-.553.009-.82c.256-1.354 1.03-2.261 2.358-2.671c.284-.088.58-.12.879-.12h2.05q.123-.002.245-.013l.045-.004c.527-.038.874-.383.915-1.013q.002-.045.001-.09v-.055a1.067 1.067 0 0 1 1.044-1.07c.59-.021 1.078.396 1.12.99c.057.812-.199 1.534-.685 2.18zm-6.304-.976h-.37a3 3 0 0 1-.481-.026c-.402-.068-.657-.292-.766-.687c-.117-.43-.072-.822.264-1.144c.335-.32.73-.416 1.164-.246c.422.165.663.493.692.946c.014.226.011.453.009.68q-.003.177-.002.354c0 .087-.032.126-.121.124c-.126-.002-.25-.001-.39-.001"></svg:path><svg:path fill="currentColor" d="M18.95 3h-8.342l-5.547.001q-.25.001-.497.03c-.709.075-1.187.447-1.406 1.127c-.082.256-.085.527-.085.794q-.003 6.04-.003 12.079v1.725c0 .207.007.413.03.62c.065.575.368.999.815 1.34c.05.038.108.062.166.086l.036.015c.35.15.725.177 1.095.178Q10.429 21 15.647 21h3.183c.1 0 .2-.013.299-.025s.198-.025.298-.025c.081 0 .163-.026.242-.05l.02-.006c.47-.146.781-.477 1.008-.895c.204-.377.226-.796.227-1.21q.008-4.294.006-8.59v-.28q0-2.436-.007-4.871c0-.242-.014-.484-.064-.721c-.126-.598-.446-1.032-1.052-1.217A3 3 0 0 0 18.95 3m-6.913 11.556c-.043.269-.082.515-.18.744c-.523 1.213-1.414 1.952-2.749 2.1a3.234 3.234 0 0 1-3.474-2.314c-.159-.548-.143-1.107-.086-1.665a4.8 4.8 0 0 1 .512-1.695c.04-.076.038-.134-.01-.208c-.422-.633-.585-1.333-.526-2.088c.032-.403.13-.79.313-1.151c.536-1.06 1.714-1.959 3.291-1.81c1.387.132 2.672 1.328 2.873 2.674c.006.044.017.088.03.141l.02.092q.018-.09.031-.17c.02-.109.037-.208.058-.307c.258-1.222 1.455-2.501 3.151-2.517c1.72-.016 2.992 1.332 3.232 2.585c.102.529.084 1.057 0 1.586a5.7 5.7 0 0 1-.465 1.52c-.05.106-.045.183.02.282c.37.573.533 1.203.512 1.887c-.044 1.427-1.053 2.707-2.442 3.042c-1.939.467-3.425-.692-3.925-2.095c-.076-.213-.115-.434-.159-.683l-.01-.056z"></svg:path>`,
})
export class LineiconsXamppIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsXboxIcon],svg[lineicons-xbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.888 7.942l.42-.484l-.742-.645C7.34 5.717 6.534 5.168 5.792 4.91c-.58-.225-.644-.193-1.128.323c-1.129 1.225-2.128 3.225-2.419 4.934c-.225 1.419-.258 1.773-.193 2.45c.258 2.032.71 3.451 1.677 4.87c.419.58.483.742.354.42c-.193-.452-.032-1.549.355-2.58c.742-1.968 2.644-5.16 4.45-7.385M7.405 3.395c1.354 0 2.627.426 3.838 1.032c.387.258.774.419.774.387c0 0 .419-.194.87-.42c1.484-.741 2.903-1.096 3.87-1.032l.484.033l-.323-.097c-.677-.452-1.967-.903-2.999-1.129c-1-.225-2.87-.225-3.87 0c-.87.194-1.547.42-2.321.774c-.871.452-.936.516-.323.452m4.708 6.739c-.193-.032-2 1.548-3.257 2.903c-2.257 2.418-3.58 4.482-3.58 5.707c0 .58.226.903 1.355 1.645c1.354.903 2.902 1.451 4.45 1.58c1.258.097 2.806-.032 4.031-.419c1.451-.451 3.418-1.677 3.709-2.257c.419-.774-.42-2.58-2.193-4.773c-1.097-1.354-4.16-4.321-4.515-4.386m9.707-.064a11.6 11.6 0 0 0-1.677-3.87c-.483-.677-1.128-1.354-1.322-1.354c-.323 0-1 .226-1.451.548c-.58.355-1.129.806-1.967 1.548l-.645.548l.58.742c1.806 2.257 3.773 5.643 4.354 7.449c.258.806.419 1.645.322 2.096c-.032.322-.032.322.032.226c.258-.323.807-1.258 1.032-1.774c.258-.645.58-1.644.742-2.354c.226-.935.194-2.902 0-3.805"></svg:path>`,
})
export class LineiconsXboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsXmarkIcon],svg[lineicons-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.22 7.28a.75.75 0 0 1 1.06-1.06L12 10.938l4.719-4.718a.75.75 0 1 1 1.06 1.06L13.06 12l4.718 4.719a.75.75 0 1 1-1.06 1.06l-4.719-4.718l-4.719 4.718a.75.75 0 1 1-1.06-1.06L10.938 12z"></svg:path>`,
})
export class LineiconsXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsXmarkCircleIcon],svg[lineicons-xmark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.784 8.784a.75.75 0 0 0 0 1.06L10.939 12l-2.155 2.155a.75.75 0 0 0 1.06 1.06L12 13.062l2.155 2.155a.75.75 0 0 0 1.06-1.06L13.06 12l2.155-2.155a.75.75 0 1 0-1.06-1.06L12 10.938L9.843 8.784a.75.75 0 0 0-1.06 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsXmarkCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsXrpIcon],svg[lineicons-xrp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.72 22c-1.684 0-3.301-.858-4.192-2.376a4.53 4.53 0 0 1-.363-3.961c.132-.396.099-.925-.198-1.123c-.33-.198-.826.033-1.09.364a4.9 4.9 0 0 1-3.63 1.617c-2.674 0-4.852-2.146-4.852-4.753S4.54 7.015 7.214 7.015c1.518 0 2.97.726 3.894 1.914c.165.231.495.43.76.33c.297-.132.396-.627.264-1.023c-.43-1.287-.264-2.674.429-3.862c1.32-2.277 4.29-3.036 6.601-1.75A4.77 4.77 0 0 1 21.44 5.53a4.6 4.6 0 0 1-.495 3.598c-.76 1.287-2.047 2.113-3.532 2.31c-.33.1-.66.33-.66.595s.33.495.627.528a4.87 4.87 0 0 1 3.532 2.31a4.6 4.6 0 0 1 .495 3.598a4.58 4.58 0 0 1-2.278 2.905a4.87 4.87 0 0 1-2.41.627m-5.017-9.01c.363 0 .693.098 1.023.296c.99.627 1.188 1.915.825 2.872a3.13 3.13 0 0 0 .264 2.706c.924 1.585 3.004 2.113 4.588 1.189c.792-.43 1.32-1.156 1.551-2.014a3.16 3.16 0 0 0-.33-2.442a3.33 3.33 0 0 0-2.442-1.618c-1.09-.132-1.915-.99-1.915-1.98s.826-1.849 1.915-1.98c1.023-.133 1.947-.727 2.442-1.618c.43-.76.561-1.617.33-2.442c-.23-.859-.792-1.552-1.551-2.014c-1.617-.891-3.664-.33-4.588 1.221a3.35 3.35 0 0 0-.297 2.641c.33 1.056.033 2.41-1.09 2.872c-.858.363-1.88 0-2.508-.826c-.627-.825-1.65-1.32-2.706-1.32c-1.849 0-3.367 1.452-3.367 3.268s1.518 3.268 3.367 3.268c.957 0 1.881-.397 2.541-1.123c.462-.56 1.188-.957 1.948-.957"></svg:path>`,
})
export class LineiconsXrpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsYahooIcon],svg[lineicons-yahoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.739 10.594h-1.18l-.69 1.646l-.691-1.646H1.999l1.285 3.06l-.475 1.13h1.18c.589-1.404 1.164-2.795 1.75-4.19m14.991-1.37H22l-1.147 2.772h-1.27zm-.835 3.04a.715.715 0 1 1 0 1.43a.715.715 0 0 1 0-1.43M17.4 10.51a1.609 1.609 0 1 1 0 3.217a1.609 1.609 0 0 1 0-3.217m0 .98a.628.628 0 1 0 0 1.256a.628.628 0 0 0 0-1.256m-3.453-.98a1.609 1.609 0 1 1 0 3.217a1.609 1.609 0 0 1 0-3.217m0 .98a.628.628 0 1 0 0 1.257a.628.628 0 0 0 0-1.257m-4.75-2.276h1.064v1.654s.186-.358.801-.358s1.01.27 1.017 1.378v1.806h-1.064v-1.806a.377.377 0 1 0-.754.01v1.796H9.197zm-1.447 1.38h1.064v3.1H7.749v-.292a1.3 1.3 0 0 1-.857.326c-.784 0-1.42-.72-1.42-1.608s.636-1.61 1.42-1.61c.322 0 .619.122.857.327zm-.6.897a.628.628 0 1 0 0 1.257a.628.628 0 0 0 0-1.257"></svg:path>`,
})
export class LineiconsYahooIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsYarnIcon],svg[lineicons-yarn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.457 15.177c0 .14-.022.277-.045.414l-.027.18c-.021.173-.004.192.171.162c.394-.068.75-.234 1.093-.428l.292-.173c.266-.16.53-.318.818-.433a2.5 2.5 0 0 1 .945-.203c.286 0 .485.155.52.4c.033.228-.092.445-.32.493c-.65.138-1.213.459-1.761.815c-.735.475-1.535.818-2.368 1.08l-.02.006c-.027.007-.054.014-.07.029c-.196.208-.456.243-.719.277c-.726.096-1.458.139-2.19.182h-.001l-.03.002c-.213.013-.428.02-.642-.022c-.34-.068-.485-.195-.537-.475c-.046-.252.072-.49.323-.654l.07-.044l.027-.017a1.1 1.1 0 0 1-.332-.303c-.041-.057-.063-.022-.077.026l-.062.238l-.027.101l-.035.136a2 2 0 0 1-.108.308c-.127.29-.358.43-.664.459a1.65 1.65 0 0 1-.888-.18c-.192-.094-.249-.236-.185-.444c.031-.107.092-.201.164-.314l.008-.012c-.264.053-.38-.1-.472-.286a1.98 1.98 0 0 1-.192-1.283c.067-.354.275-.642.525-.892c.146-.146.19-.286.185-.492c-.033-1.187.416-2.162 1.339-2.915c.08-.068.161-.138.246-.2c.053-.037.059-.06.016-.115c-.239-.3-.424-.625-.51-1.003c-.096-.426.049-.796.263-1.15c.03-.048.079-.072.132-.092c.269-.096.496-.242.701-.448c.463-.463 1.036-.675 1.692-.647c.083.004.12-.02.146-.098c.098-.287.22-.562.384-.818a1 1 0 0 1 .217-.257q.245-.202.408.063a8 8 0 0 1 .498.977l.016.036c.04.087.07.118.162.058c.107-.068.227-.115.347-.158c.097-.033.153-.01.195.09c.122.295.188.604.226.92l.008.062c.01.066.02.132.011.199a7 7 0 0 0 .001.387l.002.068l.001.118q0 .045-.007.089c-.007.056-.014.112.003.168c-.02.52-.157 1.013-.358 1.489c-.187.444-.459.837-.73 1.231l-.005.006c-.107.153-.105.156.035.28c.682.614 1.058 1.386 1.185 2.287q.004.053.002.109c-.019.056-.011.11-.004.165q.007.04.008.08q.003.078-.003.154c-.004.072-.008.142.004.212"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21.997 11.728c-.14-5.371-4.528-9.72-9.993-9.73C6.343 1.994 1.75 6.722 2.011 12.462c.233 5.18 4.454 9.415 9.76 9.535c5.674.132 10.374-4.5 10.226-10.27M8.32 9.002q.099-.382.28-.732a.92.92 0 0 1 .53-.475a1.1 1.1 0 0 0 .453-.29a2.73 2.73 0 0 1 1.679-.81c.107-.01.162-.05.203-.15c.098-.24.22-.469.382-.672c.214-.269.47-.47.84-.448a.74.74 0 0 1 .57.3c.16.21.278.444.392.68c.037.076.067.105.161.085c.345-.077.625.074.774.395c.172.376.256.774.297 1.18c.088.847.03 1.68-.256 2.49a5.6 5.6 0 0 1-.692 1.334c-.035.05-.044.083.004.135c.772.866 1.15 1.876 1.106 3.039v.083c.044.002.08-.019.114-.039l.024-.014a8 8 0 0 0 .482-.277c.168-.102.336-.204.513-.293c.483-.243.988-.413 1.536-.409c.81.007 1.331.796.992 1.5c-.133.277-.351.474-.651.54c-.547.122-1.032.37-1.495.673c-.763.507-1.598.883-2.473 1.171a.5.5 0 0 0-.164.084c-.234.175-.507.247-.792.286c-.863.12-1.73.173-2.6.21c-.36.016-.716-.033-1.033-.223a1 1 0 0 1-.09-.07a.36.36 0 0 0-.157-.096c-.052-.008-.108.018-.165.045a.6.6 0 0 1-.11.043c-.558.124-1.08.02-1.563-.274c-.287-.172-.422-.445-.407-.782a.33.33 0 0 0-.074-.227c-.232-.324-.345-.693-.409-1.082c-.125-.767.149-1.401.656-1.957a.24.24 0 0 0 .065-.175c0-.767.146-1.497.54-2.166c.22-.374.505-.695.822-.986c.06-.054.068-.091.026-.162a3 3 0 0 1-.289-.717c-.037-.027-.037-.062-.037-.098c0-.023 0-.047-.009-.068l-.002-.04v-.015a.3.3 0 0 0-.011-.07v-.273c.01-.04.01-.08.01-.122c.01-.02.006-.046.028-.061" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsYarnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsYcombinatorIcon],svg[lineicons-ycombinator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm9.61 10.22v3.716h-1.19v-3.717L8.283 7.384h1.422l2.323 4.732c.03-.203 2.38-4.703 2.38-4.703h1.307z"></svg:path>`,
})
export class LineiconsYcombinatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsYenIcon],svg[lineicons-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.108 3.472a.75.75 0 0 0-1.06 1.06L11.5 9.984v1.498H7.928a.75.75 0 0 0 0 1.5H11.5v1.5H7.928a.75.75 0 0 0 0 1.5H11.5V20a.75.75 0 0 0 1.5 0v-4.018h3.574a.75.75 0 0 0 0-1.5H13v-1.5h3.574a.75.75 0 0 0 0-1.5H13V9.985l5.453-5.453a.75.75 0 0 0-1.061-1.06L12.25 8.613z"></svg:path>`,
})
export class LineiconsYenIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsYoutubeIcon],svg[lineicons-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.58 7.194a2.47 2.47 0 0 0-1.773-1.775C18.258 5 12 5 12 5s-6.258 0-7.806.42a2.47 2.47 0 0 0-1.775 1.774C2 8.774 2 12 2 12s0 3.258.42 4.807c.225.87.903 1.548 1.774 1.774C5.742 19 12 19 12 19s6.258 0 7.807-.42a2.47 2.47 0 0 0 1.774-1.773C22 15.258 22 12 22 12s0-3.226-.42-4.806M10 15V9l5.194 3z"></svg:path>`,
})
export class LineiconsYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsYoutubeKidsIcon],svg[lineicons-youtube-kids-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.437 4.527c2.328-.322 5.109-.668 5.534-.668h.026c.998.02 1.808.179 2.76.906c.585.446 1.055 1.14 1.396 2.066c.295.802.82 5.28.833 6.215l.005.24v.004c.02.784.053 2.093-.523 3.171c-1.08 2.02-3.451 2.239-4.42 2.239h-.116c-3.955 0-5.87.522-7.411.942h-.003c-.978.268-1.823.498-2.889.498c-.284 0-.57-.016-.87-.049c-1.217-.133-2.15-.993-2.63-2.424c-.355-1.06-.975-5.696-1.084-6.873c-.14-1.519-.004-2.684 1.112-3.805c.605-.609 1.369-1.08 2.33-1.44c.697-.26 3.62-.7 5.95-1.022m-1.97 4.332c-.122.089-.073.455-.052.61l.005.041l.13 1.098c.15 1.284.378 3.235.416 3.514l.009.073l.015.123c.045.355.114.905.281.994q.038.019.09.02c.223 0 .621-.26.847-.435l3.581-2.479q.34-.237.683-.47l.012-.007l.075-.047c.156-.094.347-.213.344-.465c-.006-.266-.22-.359-.378-.426a1 1 0 0 1-.101-.047c-1.098-.562-4.63-1.813-5.333-2.04l-.01-.004a1.6 1.6 0 0 0-.448-.095a.3.3 0 0 0-.166.042"></svg:path>`,
})
export class LineiconsYoutubeKidsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsYoutubeMusicIcon],svg[lineicons-youtube-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.217 8.286C9.265 7.254 10.514 6.743 12 6.743s2.735.51 3.783 1.543s1.562 2.258 1.562 3.714s-.514 2.68-1.562 3.713s-2.297 1.543-3.783 1.543s-2.735-.51-3.783-1.543S6.655 13.455 6.655 12s.514-2.682 1.562-3.714m6.977 3.715L10 14.91V9.088z"></svg:path><svg:path d="M19.071 18.966Q22.001 16.08 22 12q0-4.081-2.929-6.967Q16.141 2.147 12 2.147T4.929 5.033T2 12q0 4.08 2.929 6.966q2.93 2.886 7.071 2.886q4.142 0 7.071-2.886M12 5.433c-1.827 0-3.407.644-4.702 1.92C6.002 8.63 5.345 10.19 5.345 12c0 1.809.657 3.37 1.953 4.646c1.295 1.276 2.874 1.92 4.702 1.92s3.407-.644 4.702-1.92c1.296-1.276 1.953-2.837 1.953-4.646c0-1.81-.657-3.37-1.953-4.647c-1.295-1.276-2.875-1.92-4.702-1.92"></svg:path></svg:g>`,
})
export class LineiconsYoutubeMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsZapierIcon],svg[lineicons-zapier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 12.005a6.2 6.2 0 0 1-.384 2.144a5.9 5.9 0 0 1-2.111.39h-.01a5.9 5.9 0 0 1-2.11-.39a6.2 6.2 0 0 1-.386-2.144v-.01c0-.755.137-1.477.384-2.145a5.9 5.9 0 0 1 2.112-.39h.008c.743 0 1.455.139 2.112.39c.254.686.384 1.412.384 2.145zm7.361-1.698h-5.837l4.127-4.192a10.1 10.1 0 0 0-2.357-2.393l-4.128 4.192V1.985a10 10 0 0 0-1.66-.141h-.011q-.85.002-1.661.141v5.929L6.205 3.722q-.683.493-1.276 1.096l-.002.002q-.592.601-1.078 1.296l4.128 4.191H2.14S2 11.421 2 11.997v.007q.001.864.14 1.689h5.837l-4.129 4.191a10.2 10.2 0 0 0 2.358 2.394l4.128-4.191v5.929a10 10 0 0 0 1.659.14h.014q.834 0 1.66-.14v-5.93l4.127 4.193q.683-.495 1.277-1.096h.001q.592-.604 1.079-1.297l-4.128-4.193h5.839q.137-.824.138-1.685v-.015q0-.849-.138-1.685"></svg:path>`,
})
export class LineiconsZapierIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsZeroSizeIcon],svg[lineicons-zero-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.23 2.575a.75.75 0 0 0-1.46.35l.316 1.314a3.75 3.75 0 0 1-.448 2.833l-.604.987a9 9 0 0 0-.665 8.08l2.186 5.393a.75.75 0 0 0 1.39-.564L6.76 15.576c-.24-.59-.4-1.2-.483-1.818c1.569.14 2.828.605 3.72 1.056a9 9 0 0 1 1.254.768v5.668a.75.75 0 0 0 1.5 0v-5.669l.113-.082c.254-.182.638-.43 1.14-.685a10.3 10.3 0 0 1 3.72-1.056a7.5 7.5 0 0 1-.482 1.818l-2.186 5.392a.75.75 0 0 0 1.39.564l2.186-5.393a9 9 0 0 0-.665-8.08l-.604-.987a3.75 3.75 0 0 1-.448-2.833l.315-1.314a.75.75 0 1 0-1.458-.35l-.316 1.314a5.25 5.25 0 0 0 .628 3.966l.03.048a10 10 0 0 1-.814.377c-.857.352-2.022.694-3.299.694s-2.442-.342-3.3-.694a10 10 0 0 1-.812-.377l.029-.048a5.25 5.25 0 0 0 .628-3.966zm2.444 10.9a11.8 11.8 0 0 0-4.447-1.226c.072-1.06.37-2.104.885-3.059c.264.14.609.31 1.02.478c.97.398 2.334.806 3.868.806s2.899-.408 3.869-.806c.41-.169.755-.338 1.019-.478c.516.955.813 1.999.885 3.059a11.8 11.8 0 0 0-4.447 1.227a10.4 10.4 0 0 0-1.327.796a10.4 10.4 0 0 0-1.325-.796" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.28 3.193a.75.75 0 0 0-1.06 1.061l.97.97l-.97.97a.75.75 0 0 0 1.06 1.06l1.5-1.5a.75.75 0 0 0 0-1.06zm18.5 1.061a.75.75 0 0 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-.97-.97zm-9.03 2.469a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path>`,
})
export class LineiconsZeroSizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsZipIcon],svg[lineicons-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.3 11.6h-3.4V9.4c0-4.2-3.4-7.6-7.6-7.6H10.8c-4.2 0-7.6 3.4-7.6 7.6v30.7c0 1.4.6 2.7 1.6 3.6L23 60.9c.9.9 2.1 1.3 3.4 1.3h18.8c4.2 0 7.6-3.4 7.6-7.6V34.5h3.4c1.4 0 2.5-1.1 2.5-2.5V14.2c.1-1.4-1-2.6-2.4-2.6m-46 31.2H23c.2 0 .4.2.4.4v11.9zm38.1 11.8c0 1.7-1.4 3.1-3.1 3.1H28V43.2c0-2.7-2.2-4.9-4.9-4.9H7.6V9.4c0-1.7 1.4-3.1 3.1-3.1h34.5c1.7 0 3.1 1.4 3.1 3.1v2.3H18.1c-1.4 0-2.5 1.1-2.5 2.5V32c0 1.4 1.1 2.5 2.5 2.5h30.3zm-10-35.3v7.6c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-7.6c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5m-7.6 7.6c0 1.4-1.1 2.5-2.5 2.5H24c-.9 0-1.8-.5-2.2-1.3s-.4-1.8.1-2.6l2.3-3.8h-.9c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5h5.5c.9 0 1.8.5 2.2 1.3s.4 1.8-.1 2.6l-2.3 3.8c1.2.1 2.2 1.2 2.2 2.5m17.8 0h-2.5c0 1.4-1.1 2.5-2.5 2.5S41 28.3 41 26.9v-7.6c0-1.4 1.1-2.5 2.5-2.5h5.1c2.8 0 5.1 2.3 5.1 5.1c0 2.7-2.3 5-5.1 5"></svg:path>`,
})
export class LineiconsZipIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsZoomIcon],svg[lineicons-zoom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.604 7.442a.7.7 0 0 0-.76.033l-3.53 2.313a1.01 1.01 0 0 0-.462.871v2.682c0 .335.165.67.462.872l3.53 2.312c.133.067.265.135.397.135a.74.74 0 0 0 .363-.101a.81.81 0 0 0 .396-.67V8.111a.76.76 0 0 0-.396-.67m-1.09 7.072l-2.177-1.441v-2.179l2.178-1.441zm-8.976-7.909H2.759a.774.774 0 0 0-.759.77v6.302c0 2.045 1.683 3.72 3.762 3.72h8.78a.774.774 0 0 0 .758-.77v-6.302c0-2.045-1.683-3.72-3.762-3.72m2.277 9.284H5.762c-1.254 0-2.277-1.005-2.277-2.212V8.112h8.053c1.254 0 2.277 1.005 2.277 2.212z"></svg:path>`,
})
export class LineiconsZoomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsZoomInIcon],svg[lineicons-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61 51.1L46.7 36.7q-1.2-1.2-3-1.2c-1.1 0-2.2.4-3 1.2l-.4.4l-2.8-2.8c6.3-7.9 5.8-19.5-1.5-26.8c-3.8-3.8-8.8-5.9-14.2-5.9S11.4 3.7 7.6 7.5c-7.8 7.8-7.8 20.6 0 28.4c3.8 3.8 8.8 5.9 14.2 5.9c4.6 0 9-1.6 12.5-4.4l2.8 2.8l-.4.4c-1.6 1.6-1.6 4.3 0 5.9l14.4 14.4q1.2 1.2 3 1.2c1.1 0 2.2-.4 3-1.2l4-4c1.6-1.5 1.6-4.2-.1-5.8M21.8 37.4c-4.2 0-8.1-1.6-11-4.6c-6.1-6.1-6.1-16 0-22.1c2.9-2.9 6.9-4.6 11-4.6c4.2 0 8.1 1.6 11 4.6c6.1 6.1 6.1 16 0 22.1c-2.9 3-6.8 4.6-11 4.6M54 57.7l-13.9-14l3.6-3.6L57.6 54z"></svg:path><svg:path fill="currentColor" d="M26.9 19.6h-2.8v-2.8c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v2.8h-2.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.8V27c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-2.8h2.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsZoomInIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsZoomOutIcon],svg[lineicons-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61 51L46.7 36.7c-1.6-1.6-4.3-1.6-5.9 0l-.4.4l-2.8-2.8c2.8-3.5 4.4-7.9 4.4-12.5c0-5.4-2.1-10.4-5.9-14.2c-7.8-7.8-20.6-7.8-28.4 0c-3.8 3.8-5.9 8.8-5.9 14.2S3.9 32.2 7.7 36c3.9 3.9 9.1 5.9 14.2 5.9c4.4 0 8.9-1.5 12.5-4.4l2.8 2.8l-.4.4q-1.2 1.2-1.2 3c0 1.1.4 2.2 1.2 3L51.1 61c.8.8 1.9 1.2 3 1.2s2.1-.4 3-1.2l4-4q1.2-1.2 1.2-3c0-1.1-.5-2.2-1.3-3M10.8 32.9c-2.9-2.9-4.6-6.8-4.6-11s1.6-8.1 4.6-11c3-3 7-4.6 11-4.6s8 1.5 11 4.6c2.9 2.9 4.6 6.8 4.6 11s-1.6 8.1-4.6 11c-6 6-15.9 6-22 0M54 57.6L40.1 43.7l3.6-3.6L57.6 54z"></svg:path><svg:path fill="currentColor" d="M26.9 19.6H16.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h10.2c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsZoomOutIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAdonisIcon],svg[lineicons-adonis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21c-7.259 0-9-1.741-9-9s1.741-9 9-9s9 1.741 9 9s-1.741 9-9 9M9.452 7.454L6.63 13.87c-.128.311-.238.715-.238 1.063c0 1.595 1.118 2.713 2.713 2.713c.522 0 .956-.138 1.398-.277c.456-.145.92-.292 1.498-.292c.584 0 1.037.146 1.485.29c.437.14.868.279 1.411.279c1.595 0 2.713-1.119 2.713-2.713c0-.348-.11-.752-.238-1.063l-2.823-6.416C14.07 6.373 13.155 5.786 12 5.786s-2.071.587-2.548 1.668m-.238 7.424L12 8.572l2.75 6.306c-.789-.385-1.778-.568-2.75-.568c-1.008 0-1.961.183-2.786.568"></svg:path>`,
})
export class LineiconsAdonisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
