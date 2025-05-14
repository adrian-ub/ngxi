import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiAbbrApiIcon],svg[gravity-ui-abbr-api-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.02 11.419L4.691 10H2.808l-.327 1.419a.75.75 0 1 1-1.462-.338L2.407 5.07a1.379 1.379 0 0 1 2.686 0l1.388 6.012a.75.75 0 1 1-1.462.338m-1.27-5.5l.597 2.58H3.155zM14.5 4.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0zM8.25 4a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0V9.5h.5a2.75 2.75 0 0 0 0-5.5zM9.5 8H9V5.5h.5a1.25 1.25 0 0 1 0 2.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiAbbrApiIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiAbbrMlIcon],svg[gravity-ui-abbr-ml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 11.25V6.672l1.436 3.39a1.129 1.129 0 0 0 2.076.008l1.513-3.492v4.672a.75.75 0 0 0 1.5 0V5.218a1.218 1.218 0 0 0-2.335-.484L4.98 8.679L3.307 4.732A1.201 1.201 0 0 0 1 5.202v6.048a.75.75 0 1 0 1.5 0m9.5-6.5a.75.75 0 0 0-1.5 0v6.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5H12z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiAbbrMlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiAbbrSqlIcon],svg[gravity-ui-abbr-sql-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiAbbrSql0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 4.75a.75.75 0 0 0-1.5 0v6.5c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5H13.5zM11 8c0 1.32-.257 2.314-.709 2.98l.99.99a.75.75 0 1 1-1.061 1.06l-1.132-1.132Q8.753 12 8.375 12C6.8 12 5.75 10.667 5.75 8S6.8 4 8.375 4S11 5.333 11 8m-1.957 2.15c.222-.322.457-.98.457-2.149c0-1.168-.235-1.826-.457-2.149c-.175-.254-.366-.35-.668-.35s-.493.096-.668.35c-.222.323-.457.981-.457 2.15c0 1.167.235 1.826.457 2.148c.175.254.366.351.668.351s.493-.097.668-.351M2.562 4.002c-.689 0-1.285.249-1.702.713C.453 5.17.277 5.76.277 6.352c0 .732.326 1.28.759 1.658c.41.358.908.561 1.305.684c.398.122.684.217.89.372c.147.113.27.266.27.625c0 .29-.109.468-.253.589a1.08 1.08 0 0 1-.686.222c-.202 0-.438-.093-.658-.293a1.4 1.4 0 0 1-.423-.684a.75.75 0 0 0-1.462.333c.127.557.453 1.079.878 1.463c.426.386 1.006.681 1.665.681c.578 0 1.177-.18 1.647-.57c.485-.405.791-1.006.791-1.74c0-.843-.352-1.433-.864-1.821c-.434-.329-.962-.49-1.306-.596l-.047-.015c-.31-.095-.579-.221-.76-.38a.65.65 0 0 1-.246-.528c0-.304.09-.512.2-.635c.099-.11.27-.215.585-.215c.322 0 .498.099.612.206c.13.123.233.313.3.56a.75.75 0 0 0 1.449-.386c-.113-.42-.325-.892-.719-1.263c-.409-.387-.961-.617-1.642-.617" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiAbbrSql0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiAbbrSqlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiAbbrQlIcon],svg[gravity-ui-abbr-ql-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.75 4a.75.75 0 0 1 .75.75v5.75h2.75a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-6.5a.75.75 0 0 1 .75-.75m-3.21 6.997c.611-.666.96-1.665.96-2.997c0-2.667-1.4-4-3.5-4S1.5 5.333 1.5 8s1.4 4 3.5 4q.674 0 1.24-.182l1.456 1.461a.75.75 0 1 0 1.063-1.058zM7 8c0 1.083-.282 1.675-.567 1.985c-.27.294-.708.515-1.433.515s-1.163-.22-1.433-.515C3.282 9.675 3 9.083 3 8c0-1.082.282-1.675.567-1.985C3.837 5.72 4.275 5.5 5 5.5s1.163.22 1.433.515C6.718 6.325 7 6.918 7 8" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiAbbrQlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiAntennaSignalIcon],svg[gravity-ui-antenna-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.56 4.403c.27.314.223.784-.015 1.123A3 3 0 0 0 5 7.25c0 .642.202 1.237.545 1.724c.238.339.284.809.015 1.123c-.27.315-.75.354-1.015.036A4.48 4.48 0 0 1 3.5 7.25c0-1.097.393-2.102 1.045-2.883c.266-.318.745-.279 1.015.036m4.88 0c-.27.314-.223.784.015 1.123c.344.487.545 1.082.545 1.724s-.201 1.237-.545 1.724c-.238.339-.284.809-.015 1.123c.27.315.75.354 1.015.036A4.48 4.48 0 0 0 12.5 7.25a4.48 4.48 0 0 0-1.045-2.883c-.265-.318-.745-.279-1.015.036m1.953-2.278c-.27.315-.23.785.05 1.092A5.98 5.98 0 0 1 14 7.25c0 1.553-.59 2.968-1.558 4.033c-.278.307-.319.777-.05 1.092c.27.314.747.353 1.033.053A7.47 7.47 0 0 0 15.5 7.25c0-2.008-.79-3.832-2.075-5.178c-.286-.3-.763-.261-1.032.053m-8.786 0c-.27-.314-.746-.353-1.032-.053A7.48 7.48 0 0 0 .5 7.25c0 2.008.79 3.832 2.075 5.178c.286.3.763.261 1.032-.053c.27-.315.23-.785-.05-1.092A5.98 5.98 0 0 1 2 7.25c0-1.553.59-2.968 1.558-4.033c.278-.307.319-.777.05-1.092M8.75 8.55a1.5 1.5 0 1 0-1.5 0v5.701a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiAntennaSignalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiAbbrZipIcon],svg[gravity-ui-abbr-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 4.75A.75.75 0 0 1 1.75 4h3.113a1.137 1.137 0 0 1 .96 1.748L2.797 10.5H5.25a.75.75 0 0 1 0 1.5H2.137a1.137 1.137 0 0 1-.96-1.748L4.203 5.5H1.75A.75.75 0 0 1 1 4.75M7.75 4a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 7.75 4m3 0a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0V9.5h.5A2.75 2.75 0 1 0 12 4zM12 8h-.5V5.5h.5A1.25 1.25 0 1 1 12 8" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiAbbrZipIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiApertureIcon],svg[gravity-ui-aperture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 0 1-.48 2.251a7 7 0 0 0-.897-2.61c-.64-1.109-1.517-1.984-2.467-2.508l-.013-.008a5 5 0 0 0-.19-.098c-.634-.314-1.33-.484-2.006-.428c.464-.575.995-1.002 1.514-1.259c.733-.362 1.356-.353 1.789-.103v-.001A5.5 5.5 0 0 1 13.5 8M7.438 2.528A5.5 5.5 0 0 0 2.5 8c0 .5.304 1.044.984 1.497c.482.322 1.117.568 1.847.682c-.386-.558-.587-1.245-.633-1.951a5 5 0 0 1-.009-.213v-.012c-.022-1.086.298-2.284.938-3.394a7 7 0 0 1 1.811-2.08M6.189 8.002l.006.13c.053.815.372 1.35.805 1.6s1.056.259 1.789-.104l.117-.06l.11-.07C9.696 9.043 10 8.5 10 8s-.304-1.044-.984-1.497l-.11-.071l-.117-.06C8.056 6.009 7.433 6.018 7 6.268s-.752.785-.805 1.6zm3.468 2.865l.011-.007q.091-.055.18-.115c.59-.392 1.084-.91 1.374-1.523c.266.69.37 1.362.333 1.94c-.053.816-.372 1.351-.805 1.601A5.5 5.5 0 0 1 8 13.5a5.5 5.5 0 0 1-4.458-2.278c.8.34 1.73.528 2.708.528c1.28 0 2.477-.322 3.407-.883M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiApertureIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowChevronDownIcon],svg[gravity-ui-arrow-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 2a.75.75 0 0 0-1.5 0v5.69L4.53 4.97a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.06 0l4-4a.75.75 0 0 0-1.06-1.06L8.75 7.69zM4.53 9.47a.75.75 0 0 0-1.06 1.06l4 4a.75.75 0 0 0 1.06 0l4-4a.75.75 0 1 0-1.06-1.06L8 12.94z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowChevronDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArchiveIcon],svg[gravity-ui-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 8h11v3a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 11zm10.697-1.5l-1.851-2.777a.5.5 0 0 0-.416-.223H5.07a.5.5 0 0 0-.416.223L2.803 6.5zM15 7.408V11a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V7.408a3 3 0 0 1 .504-1.664l1.902-2.853A2 2 0 0 1 5.07 2h5.86a2 2 0 0 1 1.664.89l1.902 2.854A3 3 0 0 1 15 7.408M9.25 11a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArchiveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowChevronLeftIcon],svg[gravity-ui-arrow-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 8.75a.75.75 0 0 0 0-1.5H8.31l2.72-2.72a.75.75 0 1 0-1.06-1.06l-4 4a.75.75 0 0 0 0 1.06l4 4a.75.75 0 1 0 1.06-1.06L8.31 8.75zM6.53 4.53a.75.75 0 0 0-1.06-1.06l-4 4a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06-1.06L3.06 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowChevronLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowChevronRightIcon],svg[gravity-ui-arrow-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 7.25a.75.75 0 0 0 0 1.5h5.69l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 0 0-1.06 1.06l2.72 2.72zm7.47 4.22a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 1 0-1.06 1.06L12.94 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowChevronRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowChevronUpIcon],svg[gravity-ui-arrow-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.25 14a.75.75 0 0 0 1.5 0V8.31l2.72 2.72a.75.75 0 1 0 1.06-1.06l-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 1 0 1.06 1.06l2.72-2.72zm4.22-7.47a.75.75 0 1 0 1.06-1.06l-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 1.06 1.06L8 3.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowChevronUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowDownIcon],svg[gravity-ui-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1.25a.75.75 0 0 1 .75.75v10.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V2A.75.75 0 0 1 8 1.25" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowDownFromLineIcon],svg[gravity-ui-arrow-down-from-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.53 14.78a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V4.75a.75.75 0 0 1 1.5 0v7.69l1.22-1.22a.75.75 0 1 1 1.06 1.06zM14.25 2.5a.75.75 0 0 0 0-1.5H1.75a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowDownFromLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowDownToLineIcon],svg[gravity-ui-arrow-down-to-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.53 11.78a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 1.06-1.06l1.22 1.22V1.75a.75.75 0 0 1 1.5 0v7.69l1.22-1.22a.75.75 0 1 1 1.06 1.06zM1.75 13.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowDownToLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowDownToSquareIcon],svg[gravity-ui-arrow-down-to-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.53 11.78a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 1.06-1.06l1.22 1.22V1.75a.75.75 0 0 1 1.5 0v7.69l1.22-1.22a.75.75 0 1 1 1.06 1.06zM4.25 4a.75.75 0 1 1 0 1.5H4A1.5 1.5 0 0 0 2.5 7v5A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 12 5.5h-.25a.75.75 0 0 1 0-1.5H12a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowDownToSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowLeftIcon],svg[gravity-ui-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.75 8a.75.75 0 0 1-.75.75H3.81l2.72 2.72a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06L3.81 7.25H14a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowLeftFromLineIcon],svg[gravity-ui-arrow-left-from-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.22 8.53a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 1.06L3.56 7.25h7.69a.75.75 0 0 1 0 1.5H3.56l1.22 1.22a.75.75 0 1 1-1.06 1.06zm12.28 5.72a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowLeftFromLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowLeftToLineIcon],svg[gravity-ui-arrow-left-to-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.22 8.53a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 1.06L6.56 7.25h7.69a.75.75 0 0 1 0 1.5H6.56l1.22 1.22a.75.75 0 1 1-1.06 1.06zM2.5 1.75a.75.75 0 1 0-1.5 0v12.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowLeftToLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowRightIcon],svg[gravity-ui-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowRightArrowLeftIcon],svg[gravity-ui-arrow-right-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.78 3.72a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06L11.44 5H2.75a.75.75 0 1 1 0-1.5h8.69L9.72 1.78A.75.75 0 0 1 10.78.72zM2 11.75a.75.75 0 0 1 .22-.53l3-3a.75.75 0 1 1 1.06 1.06L4.56 11h8.69a.75.75 0 0 1 0 1.5H4.56l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1-.22-.53" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowRightArrowLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowRightFromLineIcon],svg[gravity-ui-arrow-right-from-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.78 7.47a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H4.75a.75.75 0 0 1 0-1.5h7.69l-1.22-1.22a.75.75 0 0 1 1.06-1.06zM2.5 1.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowRightFromLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowRightFromSquareIcon],svg[gravity-ui-arrow-right-from-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.78 7.47a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H4.75a.75.75 0 0 1 0-1.5h7.69l-1.22-1.22a.75.75 0 0 1 1.06-1.06zM9.5 4.25a.75.75 0 0 1-1.5 0V4a1.5 1.5 0 0 0-1.5-1.5H4A1.5 1.5 0 0 0 2.5 4v8A1.5 1.5 0 0 0 4 13.5h2.5A1.5 1.5 0 0 0 8 12v-.25a.75.75 0 0 1 1.5 0V12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.5a3 3 0 0 1 3 3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowRightFromSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowRightToLineIcon],svg[gravity-ui-arrow-right-to-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.78 7.47a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H1.75a.75.75 0 0 1 0-1.5h7.69L8.22 6.03a.75.75 0 0 1 1.06-1.06zm1.72 6.78a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowRightToLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowRightToSquareIcon],svg[gravity-ui-arrow-right-to-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.78 7.47a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H1.75a.75.75 0 0 1 0-1.5h7.69L8.22 6.03a.75.75 0 0 1 1.06-1.06zM4 11.75a.75.75 0 0 1 1.5 0V12A1.5 1.5 0 0 0 7 13.5h5a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 12 2.5H7A1.5 1.5 0 0 0 5.5 4v.25a.75.75 0 0 1-1.5 0V4a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowRightToSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowRotateLeftIcon],svg[gravity-ui-arrow-rotate-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 1 1-6.445 7.348a.75.75 0 1 1 1.487-.194A5.001 5.001 0 1 0 4.43 4.5h1.32a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 2 5.25v-3a.75.75 0 0 1 1.5 0v1.06A6.48 6.48 0 0 1 8 1.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowRotateLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowRotateRightIcon],svg[gravity-ui-arrow-rotate-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 1 0 6.445 7.348a.75.75 0 1 0-1.487-.194A5.001 5.001 0 1 1 11.57 4.5h-1.32a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v1.06A6.48 6.48 0 0 0 8 1.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowRotateRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowShapeDownIcon],svg[gravity-ui-arrow-shape-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 7.5H3.33a.33.33 0 0 0-.252.542l4.42 5.225a.656.656 0 0 0 1.003 0l4.42-5.225a.33.33 0 0 0-.251-.542H10V3a.5.5 0 0 0-.5-.5h-3A.5.5 0 0 0 6 3zM4.5 3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3h1.17a1.83 1.83 0 0 1 1.397 3.011l-4.421 5.225a2.156 2.156 0 0 1-3.292 0L1.933 9.011A1.83 1.83 0 0 1 3.329 6H4.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowShapeDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowShapeDownFromLineIcon],svg[gravity-ui-arrow-shape-down-from-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 9H4.029l3.499 4.276a.61.61 0 0 0 .944 0L11.971 9H9.5V5.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25zm2.75-5H6.749A1.75 1.75 0 0 0 5 5.75V7.5H3.974a1.474 1.474 0 0 0-1.14 2.407l3.533 4.319a2.11 2.11 0 0 0 3.266 0l3.534-4.319a1.474 1.474 0 0 0-1.14-2.407H11V5.75A1.75 1.75 0 0 0 9.25 4m-7.5-1.5a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowShapeDownFromLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowShapeDownToLineIcon],svg[gravity-ui-arrow-shape-down-to-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 6H4.029l3.499 4.276a.61.61 0 0 0 .944 0L11.971 6H9.5V2.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25zm1.498 7.5H1.75a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zm0-1.5a2.11 2.11 0 0 1-1.631-.774L2.833 6.907A1.474 1.474 0 0 1 3.973 4.5H5V2.75C5 1.784 5.784 1 6.75 1h2.5c.966 0 1.75.784 1.75 1.75V4.5h1.026a1.474 1.474 0 0 1 1.14 2.407l-3.533 4.319c-.4.49-1 .774-1.632.774H8" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowShapeDownToLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowShapeLeftIcon],svg[gravity-ui-arrow-shape-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 6V3.33a.33.33 0 0 0-.543-.252L2.732 7.499a.656.656 0 0 0 0 1.002l5.225 4.421a.33.33 0 0 0 .543-.252V10H13a.5.5 0 0 0 .5-.5v-3A.5.5 0 0 0 13 6zM13 4.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3v1.17a1.83 1.83 0 0 1-3.012 1.397L1.763 9.646a2.156 2.156 0 0 1 0-3.292l5.225-4.421A1.83 1.83 0 0 1 10 3.33V4.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowShapeLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowShapeLeftFromLineIcon],svg[gravity-ui-arrow-shape-left-from-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 6.5V4.029L2.724 7.528a.61.61 0 0 0 0 .944L7 11.971V9.5h3.25a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25zm5 2.75V6.749A1.75 1.75 0 0 0 10.25 5H8.5V3.974a1.474 1.474 0 0 0-2.407-1.14L1.774 6.366a2.11 2.11 0 0 0 0 3.266l4.319 3.534a1.474 1.474 0 0 0 2.407-1.14V11h1.75A1.75 1.75 0 0 0 12 9.25m1.5-7.5a.75.75 0 0 1 1.5 0v12.5a.75.75 0 0 1-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowShapeLeftFromLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowShapeLeftToLineIcon],svg[gravity-ui-arrow-shape-left-to-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 6.5V4.029L5.724 7.528a.61.61 0 0 0 0 .944L10 11.971V9.5h3.25a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25zM2.5 7.998V1.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0zm1.5 0c0-.632.284-1.23.774-1.631l4.319-3.534a1.474 1.474 0 0 1 2.407 1.14V5h1.75c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 13.25 11H11.5v1.026a1.474 1.474 0 0 1-2.407 1.14L4.774 9.634c-.49-.4-.774-1-.774-1.632V8" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowShapeLeftToLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowShapeRightIcon],svg[gravity-ui-arrow-shape-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 10v2.67a.33.33 0 0 0 .542.252l5.225-4.421a.656.656 0 0 0 0-1.002L8.042 3.078a.33.33 0 0 0-.543.252V6H3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5zM3 11.5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3V3.33a1.83 1.83 0 0 1 3.01-1.397l5.226 4.421a2.156 2.156 0 0 1 0 3.292L9.01 14.067a1.83 1.83 0 0 1-3.012-1.397V11.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowShapeRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowShapeRightFromLineIcon],svg[gravity-ui-arrow-shape-right-from-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 9.5v2.471l4.276-3.499a.61.61 0 0 0 0-.944L9 4.029V6.5H5.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25zM4 6.75v2.501A1.75 1.75 0 0 0 5.75 11H7.5v1.026a1.474 1.474 0 0 0 2.407 1.14l4.319-3.533a2.11 2.11 0 0 0 0-3.266L9.907 2.833A1.474 1.474 0 0 0 7.5 3.973V5H5.75A1.75 1.75 0 0 0 4 6.75m-1.5 7.5a.75.75 0 0 1-1.5 0V1.75a.75.75 0 0 1 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowShapeRightFromLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowShapeRightToLineIcon],svg[gravity-ui-arrow-shape-right-to-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 9.5v2.471l4.276-3.499a.61.61 0 0 0 0-.944L6 4.029V6.5H2.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25zm7.5-1.498v6.248a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-1.5 0zm-1.5 0a2.11 2.11 0 0 1-.774 1.631l-4.319 3.534a1.474 1.474 0 0 1-2.407-1.14V11H2.75A1.75 1.75 0 0 1 1 9.25v-2.5C1 5.784 1.784 5 2.75 5H4.5V3.974a1.474 1.474 0 0 1 2.407-1.14l4.319 3.533c.49.4.774 1 .774 1.632V8" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowShapeRightToLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowShapeTurnUpLeftIcon],svg[gravity-ui-arrow-shape-turn-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 9v2.665a.335.335 0 0 1-.55.257L1.73 7.988a.635.635 0 0 1 0-.976l4.72-3.934a.335.335 0 0 1 .55.257V6h1.5c1.584 0 3.182.571 4.241 1.692c.9.951 1.549 2.446 1.31 4.723c-.65-1.026-1.365-1.837-2.201-2.413C10.802 9.279 9.677 9 8.5 9zm3 1.731c1.162.396 2.165 1.337 3.151 3.106c.223.4.64.663 1.098.663c.552 0 1.04-.376 1.143-.917C16.598 7.237 12.322 4.5 8.501 4.5V3.335a1.835 1.835 0 0 0-3.01-1.41L.768 5.86a2.135 2.135 0 0 0 0 3.28l4.721 3.935a1.835 1.835 0 0 0 3.01-1.41V10.5c.533 0 1.03.07 1.5.231" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowShapeTurnUpLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowShapeTurnUpRightIcon],svg[gravity-ui-arrow-shape-turn-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 9v2.665a.335.335 0 0 0 .55.257l4.72-3.934a.635.635 0 0 0 0-.976L9.55 3.078a.335.335 0 0 0-.55.257V6H7.5c-1.584 0-3.182.571-4.241 1.692c-.9.951-1.549 2.446-1.31 4.723c.65-1.026 1.365-1.837 2.201-2.413C5.198 9.279 6.323 9 7.5 9zm-3 1.731c-1.162.396-2.165 1.337-3.151 3.106c-.223.4-.64.663-1.098.663c-.552 0-1.04-.376-1.143-.917C-.598 7.237 3.678 4.5 7.499 4.5V3.335a1.835 1.835 0 0 1 3.01-1.41l4.722 3.935a2.135 2.135 0 0 1 0 3.28l-4.721 3.935a1.835 1.835 0 0 1-3.01-1.41V10.5c-.533 0-1.03.07-1.5.231" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowShapeTurnUpRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowShapeUpIcon],svg[gravity-ui-arrow-shape-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 8.5h2.67a.33.33 0 0 0 .252-.542L8.5 2.733a.656.656 0 0 0-1.002 0l-4.42 5.225a.33.33 0 0 0 .252.542H6V13a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm1.5 4.5a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3H3.33a1.83 1.83 0 0 1-1.398-3.01l4.42-5.225a2.156 2.156 0 0 1 3.293 0l4.42 5.225A1.83 1.83 0 0 1 12.67 10H11.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowShapeUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowShapeUpFromLineIcon],svg[gravity-ui-arrow-shape-up-from-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 7h2.471L8.472 2.724a.61.61 0 0 0-.944 0L4.029 7H6.5v3.25c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25zm-2.75 5h2.501A1.75 1.75 0 0 0 11 10.25V8.5h1.026a1.474 1.474 0 0 0 1.14-2.407L9.634 1.774a2.11 2.11 0 0 0-3.266 0L2.833 6.093A1.474 1.474 0 0 0 3.973 8.5H5v1.75c0 .966.784 1.75 1.75 1.75m7.5 1.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowShapeUpFromLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowShapeUpToLineIcon],svg[gravity-ui-arrow-shape-up-to-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 10h2.471L8.472 5.724a.61.61 0 0 0-.944 0L4.029 10H6.5v3.25c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25zM8.002 2.5h6.248a.75.75 0 0 0 0-1.5H1.75a.75.75 0 0 0 0 1.5zm0 1.5a2.11 2.11 0 0 1 1.631.774l3.534 4.319a1.474 1.474 0 0 1-1.14 2.407H11v1.75A1.75 1.75 0 0 1 9.25 15h-2.5A1.75 1.75 0 0 1 5 13.25V11.5H3.974a1.474 1.474 0 0 1-1.14-2.407l3.533-4.319c.4-.49 1-.774 1.632-.774H8" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowShapeUpToLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowUpIcon],svg[gravity-ui-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 14.75a.75.75 0 0 1-.75-.75V3.81L4.53 6.53a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1-1.06 1.06L8.75 3.81V14a.75.75 0 0 1-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowUpArrowDownIcon],svg[gravity-ui-arrow-up-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.72 2.22a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06L5 4.56v8.69a.75.75 0 0 1-1.5 0V4.56L1.78 6.28A.75.75 0 0 1 .72 5.22zM11.75 14a.75.75 0 0 1-.53-.22l-3-3a.75.75 0 1 1 1.06-1.06L11 11.44V2.75a.75.75 0 0 1 1.5 0v8.69l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-.53.22" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowUpArrowDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowUpFromLineIcon],svg[gravity-ui-arrow-up-from-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.47 1.22a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06L8.75 3.56v7.69a.75.75 0 0 1-1.5 0V3.56L6.03 4.78a.75.75 0 0 1-1.06-1.06zM1.75 13.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowUpFromLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowUpFromSquareIcon],svg[gravity-ui-arrow-up-from-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.47 1.22a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06L8.75 3.56v7.69a.75.75 0 0 1-1.5 0V3.56L6.03 4.78a.75.75 0 0 1-1.06-1.06zM4.25 6.5a.75.75 0 0 1 0 1.5H4a1.5 1.5 0 0 0-1.5 1.5V12A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V9.5A1.5 1.5 0 0 0 12 8h-.25a.75.75 0 0 1 0-1.5H12a3 3 0 0 1 3 3V12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9.5a3 3 0 0 1 3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowUpFromSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowUpFromSquareSlashIcon],svg[gravity-ui-arrow-up-from-square-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.47 1.22a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06L8.75 3.56v3.738l-1.5-1.5V3.56L6.131 4.679l-1.06-1.06zm-.22 8.84v1.19a.75.75 0 0 0 1.453.263l1.986 1.987H4A1.5 1.5 0 0 1 2.5 12V9.5A1.5 1.5 0 0 1 4 8h1.19zM3.704 6.515L1.97 4.78a.75.75 0 0 1 1.06-1.06l11 11a.75.75 0 1 1-1.06 1.06l-.786-.785A3 3 0 0 1 12 15H4a3 3 0 0 1-3-3V9.5a3 3 0 0 1 2.704-2.986m9.795 5.533l1.22 1.22A3 3 0 0 0 15 12V9.5a3 3 0 0 0-3-3h-.25a.75.75 0 0 0 0 1.5H12a1.5 1.5 0 0 1 1.5 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowUpFromSquareSlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowUpRightFromSquareIcon],svg[gravity-ui-arrow-up-right-from-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 1.5A.75.75 0 0 0 10 3h1.94L6.97 7.97a.75.75 0 0 0 1.06 1.06L13 4.06V6a.75.75 0 0 0 1.5 0V2.25a.75.75 0 0 0-.75-.75zM7.5 3.25a.75.75 0 0 0-.75-.75H4.5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9.25a.75.75 0 0 0-1.5 0v2.25a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 3 11.5v-6A1.5 1.5 0 0 1 4.5 4h2.25a.75.75 0 0 0 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowUpRightFromSquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowUpToLineIcon],svg[gravity-ui-arrow-up-to-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.47 4.22a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06L8.75 6.56v7.69a.75.75 0 0 1-1.5 0V6.56L6.03 7.78a.75.75 0 0 1-1.06-1.06zm6.78-1.72a.75.75 0 0 0 0-1.5H1.75a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowUpToLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowUturnCcwDownIcon],svg[gravity-ui-arrow-uturn-ccw-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.72 13.53a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06L6 11.19V7a3.25 3.25 0 0 1 6.5 0v1A.75.75 0 0 0 14 8V7a4.75 4.75 0 1 0-9.5 0v4.19L2.78 9.47a.75.75 0 0 0-1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowUturnCcwDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowUturnCcwLeftIcon],svg[gravity-ui-arrow-uturn-ccw-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.47 4.72a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06L4.81 6H9a3.25 3.25 0 0 1 0 6.5H8A.75.75 0 0 0 8 14h1a4.75 4.75 0 1 0 0-9.5H4.81l1.72-1.72a.75.75 0 0 0-1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowUturnCcwLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowUturnCcwRightIcon],svg[gravity-ui-arrow-uturn-ccw-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.53 11.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06L11.19 10H7a3.25 3.25 0 0 1 0-6.5h1A.75.75 0 0 0 8 2H7a4.75 4.75 0 0 0 0 9.5h4.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowUturnCcwRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowUturnCwDownIcon],svg[gravity-ui-arrow-uturn-cw-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.28 13.53a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L10 11.19V7a3.25 3.25 0 0 0-6.5 0v1A.75.75 0 0 1 2 8V7a4.75 4.75 0 0 1 9.5 0v4.19l1.72-1.72a.75.75 0 1 1 1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowUturnCwDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowUturnCwLeftIcon],svg[gravity-ui-arrow-uturn-cw-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.47 11.28a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 1.06L4.81 10H9a3.25 3.25 0 0 0 0-6.5H8A.75.75 0 0 1 8 2h1a4.75 4.75 0 1 1 0 9.5H4.81l1.72 1.72a.75.75 0 1 1-1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowUturnCwLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowUturnCwRightIcon],svg[gravity-ui-arrow-uturn-cw-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.53 4.72a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06L11.19 6H7a3.25 3.25 0 0 0 0 6.5h1A.75.75 0 0 1 8 14H7a4.75 4.75 0 1 1 0-9.5h4.19L9.47 2.78a.75.75 0 0 1 1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowUturnCwRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrows3RotateLeftIcon],svg[gravity-ui-arrows-3-rotate-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiArrows3RotateLeft0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M11.39 2.503a6.47 6.47 0 0 0-3.383-.984a6.48 6.48 0 0 0-4.515 1.77l.005-.559a.75.75 0 1 0-1.5-.013l-.022 2.5a.75.75 0 0 0 .743.756l2.497.022a.75.75 0 1 0 .013-1.5l-.817-.007a4.98 4.98 0 0 1 3.583-1.469a4.97 4.97 0 0 1 2.602.756a.75.75 0 0 0 .795-1.272m-9.097 8.716a6.47 6.47 0 0 1-.84-3.422a.75.75 0 1 1 1.5.053a4.96 4.96 0 0 0 .646 2.63a4.98 4.98 0 0 0 3.064 2.37l-.403-.712a.75.75 0 0 1 1.306-.738l1.229 2.173a.75.75 0 0 1-.283 1.022l-2.176 1.23a.75.75 0 1 1-.739-1.305l.487-.275a6.48 6.48 0 0 1-3.79-3.026m11.258.099a6.47 6.47 0 0 1-2.544 2.438a.75.75 0 0 1-.704-1.325a4.97 4.97 0 0 0 1.955-1.875a4.98 4.98 0 0 0 .52-3.838l-.415.705a.75.75 0 1 1-1.292-.762l1.267-2.15a.75.75 0 0 1 1.027-.266l2.154 1.268a.75.75 0 1 1-.761 1.293l-.483-.284a6.48 6.48 0 0 1-.724 4.796" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiArrows3RotateLeft0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiArrows3RotateLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrows3RotateLeftLetterAIcon],svg[gravity-ui-arrows-3-rotate-left-letter-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiArrows3RotateLeftLetterA0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M8.007 1.52a6.47 6.47 0 0 1 3.384.983a.75.75 0 1 1-.795 1.272a4.97 4.97 0 0 0-2.602-.756a4.98 4.98 0 0 0-3.583 1.469l.817.007a.75.75 0 1 1-.013 1.5l-2.497-.022a.75.75 0 0 1-.743-.756l.022-2.5a.75.75 0 1 1 1.5.013l-.005.56a6.48 6.48 0 0 1 4.515-1.77M1.453 7.796a6.47 6.47 0 0 0 .84 3.422a6.48 6.48 0 0 0 3.791 3.026l-.487.275a.75.75 0 0 0 .739 1.306l2.176-1.231a.75.75 0 0 0 .283-1.022L7.565 11.4a.75.75 0 0 0-1.305.738l.403.712a4.98 4.98 0 0 1-3.064-2.37a4.97 4.97 0 0 1-.647-2.63a.75.75 0 1 0-1.499-.053m9.554 5.959a6.47 6.47 0 0 0 2.544-2.438a6.48 6.48 0 0 0 .724-4.796l.483.284a.75.75 0 1 0 .761-1.293l-2.154-1.268a.75.75 0 0 0-1.027.265l-1.267 2.151a.75.75 0 0 0 1.292.762l.415-.705a4.98 4.98 0 0 1-.52 3.838a4.97 4.97 0 0 1-1.955 1.876a.75.75 0 1 0 .704 1.324M7.003 5.284a1.056 1.056 0 0 1 1.994 0l1.45 4.142a.75.75 0 0 1-1.416.496L8.9 9.543H7.1l-.132.379a.75.75 0 0 1-1.416-.496zM8 6.975l.374 1.068h-.748z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiArrows3RotateLeftLetterA0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiArrows3RotateLeftLetterAIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrows3RotateRightIcon],svg[gravity-ui-arrows-3-rotate-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiArrows3RotateRight0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M4.61 2.503a6.47 6.47 0 0 1 3.383-.984a6.48 6.48 0 0 1 4.515 1.77l-.004-.559a.75.75 0 1 1 1.5-.013l.021 2.5a.75.75 0 0 1-.743.756l-2.497.022a.75.75 0 1 1-.013-1.5l.817-.007a4.98 4.98 0 0 0-3.583-1.469a4.97 4.97 0 0 0-2.602.756a.75.75 0 0 1-.795-1.272m9.097 8.716a6.5 6.5 0 0 0 .84-3.422a.75.75 0 1 0-1.5.053a4.97 4.97 0 0 1-.646 2.63a4.98 4.98 0 0 1-3.064 2.37l.403-.712a.75.75 0 0 0-1.306-.738l-1.229 2.173a.75.75 0 0 0 .283 1.022l2.176 1.23a.75.75 0 1 0 .739-1.305l-.487-.275a6.48 6.48 0 0 0 3.79-3.026m-11.258.099a6.47 6.47 0 0 0 2.544 2.438a.75.75 0 0 0 .704-1.325a4.97 4.97 0 0 1-1.955-1.875a4.98 4.98 0 0 1-.52-3.838l.415.705a.75.75 0 1 0 1.292-.762L3.66 4.511a.75.75 0 0 0-1.027-.266L.481 5.513a.75.75 0 1 0 .761 1.293l.483-.284a6.48 6.48 0 0 0 .724 4.796" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiArrows3RotateRight0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiArrows3RotateRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowsExpandIcon],svg[gravity-ui-arrows-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M7.47 1.22a.75.75 0 0 1 1.06 0l1.75 1.75a.75.75 0 1 1-1.06 1.06l-.47-.47v8.88l.47-.47a.75.75 0 1 1 1.06 1.06l-1.75 1.75a.75.75 0 0 1-1.06 0l-1.75-1.75a.75.75 0 1 1 1.06-1.06l.47.47V3.56l-.47.47a.75.75 0 0 1-1.06-1.06zM1.22 7.47a.75.75 0 0 0 0 1.06l1.75 1.75a.75.75 0 1 0 1.06-1.06L2.81 8l1.22-1.22a.75.75 0 0 0-1.06-1.06zm13.56 1.06l-1.75 1.75a.75.75 0 1 1-1.06-1.06L13.19 8l-1.22-1.22a.75.75 0 0 1 1.06-1.06l1.75 1.75a.75.75 0 0 1 0 1.06" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 8h11"></svg:path></svg:g>`,
})
export class GravityUiArrowsExpandIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowsExpandHorizontalIcon],svg[gravity-ui-arrows-expand-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.22 8.53a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 1.06L3.56 7.25h8.88l-1.22-1.22a.75.75 0 0 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H3.56l1.22 1.22a.75.75 0 1 1-1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowsExpandHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowsExpandVerticalIcon],svg[gravity-ui-arrows-expand-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.47 1.22a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06L8.75 3.56v8.88l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V3.56L6.03 4.78a.75.75 0 0 1-1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowsExpandVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowsOppositeToDotsIcon],svg[gravity-ui-arrows-opposite-to-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.28 4.78a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06L6.94 3.5H1.75a.75.75 0 1 0 0 1.5h5.19L5.72 6.22a.75.75 0 1 0 1.06 1.06zm-.06 3.94l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L9.06 12.5h5.19a.75.75 0 0 0 0-1.5H9.06l1.22-1.22a.75.75 0 1 0-1.06-1.06M14 4.25a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0M3.75 13.5a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowsOppositeToDotsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowsRotateLeftIcon],svg[gravity-ui-arrows-rotate-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 0 1 6.445 5.649a.75.75 0 1 1-1.488.194A5.001 5.001 0 0 0 4.43 4.5h1.32a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 2 5.25v-3a.75.75 0 1 1 1.5 0v1.06A6.48 6.48 0 0 1 8 1.5m5.25 13a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-3a.75.75 0 1 0 0 1.5h1.32a5.001 5.001 0 0 1-8.528-2.843a.75.75 0 1 0-1.487.194a6.501 6.501 0 0 0 10.945 3.84v1.059c0 .414.336.75.75.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowsRotateLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowsRotateLeftSlashIcon],svg[gravity-ui-arrows-rotate-left-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 0 1 2.709.59L9.552 3.245A5 5 0 0 0 8 3a4.98 4.98 0 0 0-3.57 1.5h1.32a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 2 5.25v-3a.75.75 0 1 1 1.5 0v1.06A6.48 6.48 0 0 1 8 1.5m4.026 3.534l-6.991 6.992C5.865 12.638 6.89 13 8 13a4.98 4.98 0 0 0 3.57-1.5h-1.32a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-1.06A6.48 6.48 0 0 1 8 14.5a6.47 6.47 0 0 1-4.035-1.404l-.935.934a.75.75 0 0 1-1.06-1.06l11-11a.75.75 0 0 1 1.06 1.06l-.934.935a6.47 6.47 0 0 1 1.349 3.184a.75.75 0 1 1-1.488.194a5 5 0 0 0-.93-2.309M3.043 8.657q.061.463.203.895L2.09 10.708a6.5 6.5 0 0 1-.534-1.857a.75.75 0 0 1 1.487-.194" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowsRotateLeftSlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowsRotateRightIcon],svg[gravity-ui-arrows-rotate-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 0 0-6.445 5.649a.75.75 0 1 0 1.488.194A5.001 5.001 0 0 1 11.57 4.5h-1.32a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v1.06A6.48 6.48 0 0 0 8 1.5m-5.25 13a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H4.43a5.001 5.001 0 0 0 8.528-2.843a.75.75 0 1 1 1.487.194A6.501 6.501 0 0 1 3.5 12.691v1.059a.75.75 0 0 1-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowsRotateRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiArrowsRotateRightSlashIcon],svg[gravity-ui-arrows-rotate-right-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.904 3.965a6.47 6.47 0 0 0-1.349 3.184a.75.75 0 1 0 1.488.194a5 5 0 0 1 .93-2.309l6.992 6.992A4.98 4.98 0 0 1 8 13a4.98 4.98 0 0 1-3.57-1.5h1.32a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0v-1.06A6.48 6.48 0 0 0 8 14.5a6.47 6.47 0 0 0 4.035-1.404l.935.934a.75.75 0 1 0 1.06-1.06l-11-11a.75.75 0 0 0-1.06 1.06zm9.85 5.587l1.156 1.156a6.5 6.5 0 0 0 .534-1.857a.75.75 0 1 0-1.487-.194q-.061.463-.203.895M5.291 2.09l1.157 1.157A5 5 0 0 1 8 3a4.98 4.98 0 0 1 3.57 1.5h-1.32a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v1.06A6.48 6.48 0 0 0 8 1.5a6.5 6.5 0 0 0-2.709.59" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiArrowsRotateRightSlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiAtIcon],svg[gravity-ui-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.5a5.5 5.5 0 1 0 3.52 9.727a.75.75 0 0 1 .96 1.152A7 7 0 1 1 15 8a2.5 2.5 0 0 1-4.083 1.935A3.5 3.5 0 1 1 11.5 8a1 1 0 1 0 2 0A5.5 5.5 0 0 0 8 2.5M10 8a2 2 0 1 0-4 0a2 2 0 0 0 4 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiAtIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBanIcon],svg[gravity-ui-ban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.323 12.383a5.5 5.5 0 0 1-7.706-7.706zm1.06-1.06L4.677 3.617a5.5 5.5 0 0 1 7.706 7.706M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBanIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBarsIcon],svg[gravity-ui-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 3.25A.75.75 0 0 1 2 2.5h12A.75.75 0 0 1 14 4H2a.75.75 0 0 1-.75-.75m0 4.75A.75.75 0 0 1 2 7.25h12a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8M2 12a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBarsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBarsAscendingAlignCenterIcon],svg[gravity-ui-bars-ascending-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12.75c0 .414.336.75.75.75h12.5a.75.75 0 0 0 0-1.5H1.75a.75.75 0 0 0-.75.75M3 8c0 .414.336.75.75.75h8.5a.75.75 0 0 0 0-1.5h-8.5A.75.75 0 0 0 3 8m3.75-4a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBarsAscendingAlignCenterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBarsAscendingAlignLeftIcon],svg[gravity-ui-bars-ascending-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 12.75c0 .414.336.75.75.75h12.5a.75.75 0 0 0 0-1.5H1.75a.75.75 0 0 0-.75.75M1 8c0 .414.336.75.75.75h8.5a.75.75 0 0 0 0-1.5h-8.5A.75.75 0 0 0 1 8m.75-4a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBarsAscendingAlignLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBarsAscendingAlignLeftArrowDownIcon],svg[gravity-ui-bars-ascending-align-left-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.22 13.28a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V3.25a.75.75 0 0 0-1.5 0v7.69l-.72-.72a.75.75 0 1 0-1.06 1.06zM7.75 12a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm0-3.25a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 0 1.5zm0-4.75a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBarsAscendingAlignLeftArrowDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBarsAscendingAlignLeftArrowUpIcon],svg[gravity-ui-bars-ascending-align-left-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.22 2.72a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72v7.69a.75.75 0 0 1-1.5 0V5.06l-.72.72A.75.75 0 0 1 .22 4.72zM7 12.75c0 .414.336.75.75.75h7.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0-.75.75m.75-4a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 0 1.5zm0-4.75a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBarsAscendingAlignLeftArrowUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBarsAscendingAlignRightIcon],svg[gravity-ui-bars-ascending-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 12.75a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 .75.75M15 8a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1 0-1.5h8.5A.75.75 0 0 1 15 8m-.75-4a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBarsAscendingAlignRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBarsDescendingAlignCenterIcon],svg[gravity-ui-bars-descending-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 3.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 3.25M3 8a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 8m3.75 4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBarsDescendingAlignCenterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBarsDescendingAlignLeftIcon],svg[gravity-ui-bars-descending-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 3.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 3.25M1 8a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 1 8m.75 4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBarsDescendingAlignLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBarsDescendingAlignLeftArrowDownIcon],svg[gravity-ui-bars-descending-align-left-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.22 13.28a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V3.25a.75.75 0 0 0-1.5 0v7.69l-.72-.72a.75.75 0 1 0-1.06 1.06zM7 3.25a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7 3.25m.75 4a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm0 4.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBarsDescendingAlignLeftArrowDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBarsDescendingAlignLeftArrowUpIcon],svg[gravity-ui-bars-descending-align-left-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.22 2.72a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-.72-.72v7.69a.75.75 0 0 1-1.5 0V5.06l-.72.72A.75.75 0 0 1 .22 4.72zM7.75 4a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zm0 3.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm0 4.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBarsDescendingAlignLeftArrowUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBarsDescendingAlignRightIcon],svg[gravity-ui-bars-descending-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 3.25a.75.75 0 0 0-.75-.75H1.75a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 .75-.75M15 8a.75.75 0 0 0-.75-.75h-8.5a.75.75 0 0 0 0 1.5h8.5A.75.75 0 0 0 15 8m-.75 4a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBarsDescendingAlignRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBarsPlayIcon],svg[gravity-ui-bars-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 3.25a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1-.75-.75m.75 3a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 0-1.5zm0 3.75a.75.75 0 0 0 0 1.5h4.25a.75.75 0 0 0 0-1.5zm11 3.116a1 1 0 0 0 0-1.732l-3-1.732a1 1 0 0 0-1.5.866v3.464a1 1 0 0 0 1.5.866z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBarsPlayIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBarsUnalignedIcon],svg[gravity-ui-bars-unaligned-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.75 2.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zM4 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 8m-4 4.75A.75.75 0 0 1 .75 12h10.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBarsUnalignedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBellIcon],svg[gravity-ui-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.665 7.822l.62-3.096a2.77 2.77 0 0 1 5.43 0l.62 3.096a4.8 4.8 0 0 0 1.305 2.44l.194.193a.567.567 0 0 1-.273.953l-.821.19a16.6 16.6 0 0 1-7.48 0l-.82-.19a.567.567 0 0 1-.274-.953l.194-.193a4.77 4.77 0 0 0 1.305-2.44m-1.47-.294l.619-3.096a4.27 4.27 0 0 1 8.372 0l.62 3.096c.126.634.438 1.216.895 1.673l.194.194a2.066 2.066 0 0 1-.997 3.475l-.821.19q-1.053.24-2.12.358a2 2 0 0 1-3.913 0a18 18 0 0 1-2.12-.359l-.822-.19a2.067 2.067 0 0 1-.997-3.474L2.3 9.2c.457-.457.769-1.04.895-1.673" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBellIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBellDotIcon],svg[gravity-ui-bell-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 2.5a2.77 2.77 0 0 0-2.716 2.226l-.619 3.096a4.77 4.77 0 0 1-1.305 2.44l-.194.193a.566.566 0 0 0 .273.953l.821.19a16.6 16.6 0 0 0 7.48 0l.82-.19a.567.567 0 0 0 .274-.953l-.194-.193a4.77 4.77 0 0 1-1.305-2.44l-.068-.337a.75.75 0 0 1 1.471-.295l.068.338c.126.634.438 1.216.895 1.673l.194.194a2.066 2.066 0 0 1-.997 3.475l-.821.19q-1.053.24-2.12.358a2 2 0 0 1-3.913 0a18 18 0 0 1-2.12-.359l-.822-.19a2.067 2.067 0 0 1-.997-3.474L2.3 9.2c.457-.457.769-1.04.895-1.673l.62-3.096a4.27 4.27 0 0 1 5.4-3.256a.75.75 0 1 1-.427 1.438A2.8 2.8 0 0 0 8 2.5"></svg:path><svg:path d="M12.5 5.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class GravityUiBellDotIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBellSlashIcon],svg[gravity-ui-bell-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.74 4.8L1.97 3.03a.75.75 0 0 1 1.06-1.06l11 11a.75.75 0 1 1-1.06 1.06l-.957-.956q-1.021.231-2.057.344a2 2 0 0 1-3.912 0a18 18 0 0 1-2.12-.359l-.822-.19a2.067 2.067 0 0 1-.997-3.474L2.3 9.2c.457-.457.769-1.04.895-1.673zm6.996 6.997a16.6 16.6 0 0 1-6.476-.2l-.82-.189a.567.567 0 0 1-.274-.953l.194-.193a4.77 4.77 0 0 0 1.305-2.44l.35-1.747zm.599-3.975q.042.21.101.412l3.025 3.024a2.07 2.07 0 0 0-.566-1.863L13.7 9.2a3.27 3.27 0 0 1-.895-1.673l-.62-3.096a4.27 4.27 0 0 0-6.96-2.408L6.292 3.09a2.77 2.77 0 0 1 4.424 1.637z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBellSlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBinocularsIcon],svg[gravity-ui-binoculars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiBinoculars0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M1.522 10.68a2.14 2.14 0 0 0 2.11 1.82a2.125 2.125 0 1 0-2.11-1.82M3.64 14h-.015a3.626 3.626 0 0 1-3.558-2.927a3.6 3.6 0 0 1 .256-2.212L2.98 2.98a2.516 2.516 0 0 1 4.802 1.237L7.673 5.6a1.5 1.5 0 0 1 .655 0l-.11-1.382a2.516 2.516 0 0 1 4.801-1.237l2.658 5.88a3.6 3.6 0 0 1 .256 2.213A3.626 3.626 0 0 1 12.375 14h-.015a3.64 3.64 0 0 1-3.628-3.35l-.174-2.176A.96.96 0 0 0 8 8.312a.96.96 0 0 0-.558.162l-.174 2.176A3.64 3.64 0 0 1 3.64 14m-.015-7.25c.91 0 1.742.336 2.379.89l.283-3.542a1.016 1.016 0 0 0-1.94-.5L2.89 6.825a3.6 3.6 0 0 1 .736-.075m10.853 3.93q.022-.15.022-.305a2.125 2.125 0 1 0-2.132 2.125a2.14 2.14 0 0 0 2.11-1.82m-2.826-7.082l1.459 3.227a3.61 3.61 0 0 0-3.115.815l-.283-3.542a1.016 1.016 0 0 1 1.94-.5" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiBinoculars0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiBinocularsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBoldIcon],svg[gravity-ui-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 2.25A.75.75 0 0 0 3.5 3v10c0 .414.336.75.75.75H9.5a3.25 3.25 0 0 0 1.477-6.146A3.25 3.25 0 0 0 8.5 2.25zm3.5 5a1.75 1.75 0 1 0 0-3.5h-2v3.5zm-2 1.5v3.5h3a1.75 1.75 0 1 0 0-3.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBoldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBookIcon],svg[gravity-ui-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 11.937V13a.5.5 0 0 0 .5.5h7a1.5 1.5 0 0 0 1.5-1.5v-.401A3 3 0 0 1 11 12H4q-.26 0-.5-.063M2 10V3q0-.103.01-.204a2 2 0 0 1 .676-1.304A2 2 0 0 1 4 1h7a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a2 2 0 0 1-2-2zm1.5 0a.5.5 0 0 0 .5.5h7A1.5 1.5 0 0 0 12.5 9V4q0-.156-.03-.302A1.5 1.5 0 0 0 11 2.5H4a.5.5 0 0 0-.5.5zm2-4.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBookIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBookOpenIcon],svg[gravity-ui-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.345 2.634q.136.069.268.145L8 3l.387-.221q.133-.076.268-.145a6.7 6.7 0 0 1 6.052-.03c.486.242.793.74.793 1.283v8.938c0 .65-.526 1.175-1.175 1.175h-.04c-.187 0-.37-.05-.529-.146a4.8 4.8 0 0 0-4.61-.177l-.199.1A2.1 2.1 0 0 1 8 14h-.117a1.6 1.6 0 0 1-.726-.171l-.233-.117a4.94 4.94 0 0 0-4.748.183a.74.74 0 0 1-.381.105h-.12A1.175 1.175 0 0 1 .5 12.825V3.887c0-.543.307-1.04.793-1.284a6.7 6.7 0 0 1 6.052.03m1.405 9.572V4.3l.382-.218A5.2 5.2 0 0 1 14 3.927v8.357a6.3 6.3 0 0 0-5.25-.078m-1.5.005V4.299l-.382-.218A5.2 5.2 0 0 0 2 3.927v8.365a6.44 6.44 0 0 1 5.25-.082" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBookOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBookmarkIcon],svg[gravity-ui-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 9.524l.976.837l2.988 2.56a.325.325 0 0 0 .536-.246V4.5A1.5 1.5 0 0 0 11 3H5a1.5 1.5 0 0 0-1.5 1.5v8.175a.325.325 0 0 0 .536.247l2.988-2.56zM14 4.5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8.175a1.825 1.825 0 0 0 3.013 1.386L8 11.5l2.987 2.56A1.825 1.825 0 0 0 14 12.676z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBookmarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBookmarkFillIcon],svg[gravity-ui-bookmark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1.5a3 3 0 0 1 3 3v8.546a1.454 1.454 0 0 1-2.411 1.094L8 11l-3.589 3.14A1.454 1.454 0 0 1 2 13.046V4.5a3 3 0 0 1 3-3z"></svg:path>`,
})
export class GravityUiBookmarkFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBoxIcon],svg[gravity-ui-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 10.421V5.475l-2 .714V8.25a.75.75 0 0 1-1.5 0V6.725l-2.25.804v6.088l4.777-1.792a1.5 1.5 0 0 0 .973-1.404m-2.254-5.734l1.6-.571a2 2 0 0 0-.175-.104L9.499 2.427a1.5 1.5 0 0 0-1.197-.063l-.941.353l3.724 1.862q.09.045.16.108M5.444 3.435l3.878 1.94l-2.273.811l-3.805-1.903q.108-.063.23-.109zm.806 4.029L2.5 5.589v5.057a1.5 1.5 0 0 0 .83 1.342l2.92 1.46zM1 5.579c0-.436.094-.856.266-1.236a.75.75 0 0 1 .2-.37c.342-.54.855-.968 1.48-1.203L7.777.96a3 3 0 0 1 2.394.125l3.172 1.586A3 3 0 0 1 15 5.354v5.067a3 3 0 0 1-1.947 2.809l-4.828 1.81a3 3 0 0 1-2.395-.125l-3.172-1.586A3 3 0 0 1 1 10.646z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBoxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBoxes3Icon],svg[gravity-ui-boxes-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.25 2H6.5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-.75v1.75a.75.75 0 0 1-1.5 0zM6.5.5A2.5 2.5 0 0 0 4 3v3c0 .356.074.694.208 1H3A2.5 2.5 0 0 0 .5 9.5v3A2.5 2.5 0 0 0 3 15h10a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 13 7h-1.208c.134-.306.208-.644.208-1V3A2.5 2.5 0 0 0 9.5.5zm.75 9a1 1 0 0 0-1-1h-1v1.75a.75.75 0 0 1-1.5 0V8.5H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3.25a1 1 0 0 0 1-1zm1.5 3a1 1 0 0 0 1 1H13a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-.75v1.75a.75.75 0 0 1-1.5 0V8.5h-1a1 1 0 0 0-1 1z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBoxes3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBranchesDownIcon],svg[gravity-ui-branches-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.25 12a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-.75-1.372a2.251 2.251 0 1 0 1.5 0v-.378a3 3 0 0 0-3-3H8.75V5.372a2.25 2.25 0 1 0-1.5 0V7.25H5a3 3 0 0 0-3 3v.378a2.251 2.251 0 1 0 1.5 0v-.378A1.5 1.5 0 0 1 5 8.75h2.25v1.878a2.251 2.251 0 1 0 1.5 0V8.75H11a1.5 1.5 0 0 1 1.5 1.5zM2.75 12a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m4.5.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M8 2.5A.75.75 0 1 0 8 4a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBranchesDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBranchesRightIcon],svg[gravity-ui-branches-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m-1.372.75a2.251 2.251 0 1 0 0-1.5h-.378a3 3 0 0 0-3 3v2.25H5.372a2.25 2.25 0 1 0 0 1.5H7.25V11a3 3 0 0 0 3 3h.378a2.251 2.251 0 1 0 0-1.5h-.378a1.5 1.5 0 0 1-1.5-1.5V8.75h1.878a2.251 2.251 0 1 0 0-1.5H8.75V5a1.5 1.5 0 0 1 1.5-1.5zM12 13.25a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m.75-4.5a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5M2.5 8A.75.75 0 1 0 4 8a.75.75 0 0 0-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBranchesRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBranchesRightArrowRightIcon],svg[gravity-ui-branches-right-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0M12.75.5A2.25 2.25 0 0 0 10.628 2h-.378a3 3 0 0 0-3 3v2.19L5.03 4.97a.75.75 0 0 0-1.06 1.06l1.22 1.22H1.75a.75.75 0 0 0 0 1.5h3.44L3.97 9.97a.75.75 0 1 0 1.06 1.06l2.22-2.22V11a3 3 0 0 0 3 3h.378a2.251 2.251 0 1 0 0-1.5h-.378a1.5 1.5 0 0 1-1.5-1.5V8.75h1.878a2.251 2.251 0 1 0 0-1.5H8.75V5a1.5 1.5 0 0 1 1.5-1.5h.378a2.251 2.251 0 1 0 2.122-3M12 13.25a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m.75-4.5a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBranchesRightArrowRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBriefcaseIcon],svg[gravity-ui-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 2.5H7a.5.5 0 0 0-.5.5v1h3V3a.5.5 0 0 0-.5-.5M5 3v1H4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2m4.5 2.5H12A1.5 1.5 0 0 1 13.5 7v4a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 11V7A1.5 1.5 0 0 1 4 5.5zM4.75 7a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBriefcaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBroadcastSignalIcon],svg[gravity-ui-broadcast-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.442 13.033c-.278.307-.319.777-.05 1.092c.27.314.747.353 1.033.053a7.5 7.5 0 1 0-10.85 0c.286.3.763.261 1.032-.053c.27-.315.23-.785-.05-1.092a6 6 0 1 1 8.884 0m-.987-1.15c-.265.318-.745.279-1.015-.036c-.27-.314-.223-.784.015-1.123a3 3 0 1 0-4.91 0c.238.339.284.809.015 1.123c-.27.315-.75.354-1.015.036a4.5 4.5 0 1 1 6.91 0M8 10.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBroadcastSignalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBroomMotionIcon],svg[gravity-ui-broom-motion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiBroomMotion0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M11.995.667a.75.75 0 1 0-1.49.166L11.19 7h-.867c-1.64 0-2.896 1.449-3.197 3.06a12.6 12.6 0 0 1-1.2 3.44C5.434 14.448 5 15 5 15h8.5s2.08-1.734 2.488-5.49C16.14 8.094 14.91 7 13.488 7H12.7zM3.75 2.5a.75.75 0 1 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM.75 6a.75.75 0 1 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM1 10.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m6.593 3.25c.393-.866.78-1.94 1.008-3.165C8.819 9.167 9.646 8.5 10.322 8.5h3.167c.332 0 .618.13.797.303a.63.63 0 0 1 .21.545c-.175 1.622-.708 2.779-1.173 3.514a6 6 0 0 1-.461.638h-.999c.539-.706.887-1.728.887-2.75H12c-.351 1.229-1.072 2.088-2.162 2.75z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiBroomMotion0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiBroomMotionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBrushIcon],svg[gravity-ui-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.922 9.842q.077.425.078.896c0 1.907-1.387 3.66-3.79 3.894a4.78 4.78 0 0 1-4.208-1.774a2 2 0 0 1-.21-.333c-.231-.461-.292-1-.292-1.528c.312.047.599.045.852 0c.635-.112 1.061-.487 1.148-1C2.73 8.637 3.572 7 5.76 7q.224 0 .435.028l3.417-4.784a2.971 2.971 0 1 1 4.145 4.145zm-.56-1.444l2.819-2.013A2.7 2.7 0 0 0 9.615 4.82L7.626 7.605q.43.324.737.793m4.066-2.904l.457-.326a1.471 1.471 0 1 0-2.052-2.052l-.326.457a4.2 4.2 0 0 1 1.921 1.921M3.98 10.247c.086-.507.272-.962.54-1.264c.225-.254.572-.483 1.242-.483c.517 0 .913.197 1.198.523c.297.34.541.906.541 1.715c0 1.121-.786 2.24-2.435 2.4a3.3 3.3 0 0 1-2.63-.922c.76-.337 1.374-.965 1.544-1.969" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBrushIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBucketIcon],svg[gravity-ui-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.615 4.888c.814-.375.885-.714.885-.888s-.071-.513-.885-.888S9.538 2.5 8 2.5s-2.799.237-3.615.612C3.57 3.487 3.5 3.826 3.5 4s.071.513.885.888S6.462 5.5 8 5.5s2.799-.237 3.615-.612M8 7c1.688 0 3.213-.26 4.304-.779a13 13 0 0 1-.085.431l-1.18 5.51a1 1 0 0 1-.039.094a1.5 1.5 0 0 1-.31.433c-.306.306-1.03.811-2.69.811s-2.384-.505-2.69-.81a1.5 1.5 0 0 1-.31-.434a1 1 0 0 1-.038-.095l-.022-.1q.163-.025.33-.063c1.518-.331 3.284-1.253 5.221-2.931a.75.75 0 1 0-.982-1.134c-1.813 1.572-3.36 2.338-4.56 2.6q-.166.036-.324.06l-.844-3.94q-.046-.215-.085-.432C4.786 6.741 6.312 7 8 7m-4.93 3.496l-.697-3.254c-.28.426-.434.846-.49 1.227c-.107.72.13 1.323.592 1.7c.158.13.356.244.596.327M2.062 5.314Q2.001 4.66 2 4c0-2 2.686-3 6-3s6 1 6 3c0 .997-.105 1.992-.314 2.967L12.5 12.5S12 15 8 15s-4.5-2.5-4.5-2.5l-.084-.394c-.736-.091-1.378-.356-1.89-.775C.611 10.583.223 9.435.398 8.25c.15-1.02.708-2.049 1.662-2.936" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBucketIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBucketPaintIcon],svg[gravity-ui-bucket-paint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.773 7.412c-.064.064-.27.249-1.017-.027c-.75-.277-1.706-.928-2.695-1.918c-.99-.99-1.64-1.945-1.918-2.695c-.276-.746-.091-.953-.027-1.017s.27-.249 1.017.027q.14.052.29.122c.7.323 1.54.93 2.405 1.796c.99.99 1.641 1.945 1.918 2.695c.276.747.091.953.027 1.017M7 6.528c.85.85 1.738 1.535 2.581 1.972H1.694v-.027a1.3 1.3 0 0 1 .1-.507l2.802-4.33l.172-.26C5.16 4.383 5.956 5.485 7 6.529m3.89-3.889c2.147 2.148 3.24 4.537 1.944 5.834a13 13 0 0 1-2.127 1.719L6.352 13.01s-1.945 1.296-4.537-1.296C-.778 9.12.518 7.176.518 7.176l2.818-4.355A13 13 0 0 1 5.056.695C6.351-.602 8.74.49 10.888 2.639M12.75 15c.966 0 1.75-.766 1.75-1.71c0-1.234-1.17-2.76-1.512-3.18a.3.3 0 0 0-.237-.11a.31.31 0 0 0-.24.112c-.34.422-1.511 1.96-1.511 3.178c0 .944.784 1.71 1.75 1.71" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiBucketPaintIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBugIcon],svg[gravity-ui-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiBug0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M5.865.031a.75.75 0 0 1 .918.53l.531 1.981a5.55 5.55 0 0 1 2.384.225a2.5 2.5 0 1 1 3.535 3.535a5.5 5.5 0 0 1 .225 2.384l1.98.53a.75.75 0 0 1-.388 1.45l-1.98-.531q-.271.64-.687 1.188l1.45 1.45a.75.75 0 0 1-1.06 1.06l-1.45-1.45a5.5 5.5 0 0 1-1.188.687l.53 1.98a.75.75 0 1 1-1.448.388l-.531-1.98a5.5 5.5 0 0 1-6.144-6.143l-1.98-.532A.75.75 0 0 1 .95 5.334l1.98.531q.27-.64.687-1.188l-1.45-1.45a.75.75 0 0 1 1.06-1.06l1.45 1.45a5.5 5.5 0 0 1 1.188-.687L5.335.95a.75.75 0 0 1 .53-.919M8 12a4 4 0 1 0-3.309-1.752L8.42 6.52a.75.75 0 0 1 1.06 1.06l-3.728 3.73c.64.435 1.414.69 2.248.69" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiBug0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiBugIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiBulbIcon],svg[gravity-ui-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.26 15.109a4 4 0 0 0 3.48 0l.13-.063a2 2 0 0 0 1.13-1.8v-.468c0-1.352.776-2.557 1.54-3.673a5.5 5.5 0 1 0-9.08 0C4.224 10.221 5 11.426 5 12.779v.467a2 2 0 0 0 1.13 1.801zm2.828-1.35l.13-.064a.5.5 0 0 0 .282-.45v-.467q0-.255.025-.5a5.33 5.33 0 0 1-3.05 0q.024.245.025.5v.467a.5.5 0 0 0 .282.45l.13.063a2.5 2.5 0 0 0 2.176 0m-4.39-5.501c.394.576.891 1.302 1.263 2.148a3.79 3.79 0 0 0 4.078 0c.372-.846.869-1.572 1.264-2.148a4 4 0 1 0-6.605 0" clip-rule="evenodd"></svg:path><svg:path d="M8 3.5A.75.75 0 0 0 8 5a1 1 0 0 1 1 1a.75.75 0 0 0 1.5 0A2.5 2.5 0 0 0 8 3.5"></svg:path></svg:g>`,
})
export class GravityUiBulbIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCalculatorIcon],svg[gravity-ui-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 12V4A1.5 1.5 0 0 1 5 2.5h6A1.5 1.5 0 0 1 12.5 4v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12M5 15a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3zm.5-11a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm1 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-6-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2M9 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1.5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCalculatorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCalendarIcon],svg[gravity-ui-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.25 5.497a.75.75 0 0 1-.75-.75V4A1.5 1.5 0 0 0 3 5.5v1h10v-1A1.5 1.5 0 0 0 11.5 4v.75a.75.75 0 0 1-1.5 0V4H6v.747a.75.75 0 0 1-.75.75M10 2.5H6v-.752a.75.75 0 1 0-1.5 0V2.5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3v-.75a.75.75 0 0 0-1.5 0zM3 8v3.5A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5V8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCalendarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCameraIcon],svg[gravity-ui-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.273 5h1.05l.36-.987l.248-.684A.5.5 0 0 1 6.401 3h3.198a.5.5 0 0 1 .47.33l.249.683l.359.987H12a1.5 1.5 0 0 1 1.5 1.5V11a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 11V6.5A1.5 1.5 0 0 1 4 5zM6.4 1.5a2 2 0 0 0-1.88 1.317l-.248.683H4a3 3 0 0 0-3 3V11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6.5a3 3 0 0 0-3-3h-.273l-.248-.683A2 2 0 0 0 9.599 1.5zm3.099 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m1.5 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCameraIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCarIcon],svg[gravity-ui-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 11H4.419l-.342 1.026l-.158.474H2V9.52c.496.129 1.213.23 2.25.23a.75.75 0 1 0 0-1.5c-1.073 0-1.682-.12-1.998-.217a2 2 0 0 1-.204-.075a1.8 1.8 0 0 1 .485-.87q.11-.11.214-.228C4.272 7.293 6.15 7.5 8 7.5s3.728-.207 5.253-.64q.103.119.214.228c.241.242.408.544.485.87q-.066.032-.204.075c-.316.097-.925.217-1.998.217a.75.75 0 0 0 0 1.5c1.037 0 1.754-.101 2.25-.23v2.98h-1.919l-.158-.474L11.581 11zm6.924-5.472C11.144 5.838 9.584 6 8 6s-3.144-.162-4.424-.472q.046-.112.088-.226l.448-1.257c.18-.505.57-.806.96-.863a20.8 20.8 0 0 1 5.855 0c.392.057.78.358.96.863l.45 1.257q.04.114.087.226m-1.652 7.788L10.5 12.5h-5l-.272.816a1 1 0 0 1-.949.684H1.5a1 1 0 0 1-1-1V8.375c0-.88.35-1.725.972-2.347a3.3 3.3 0 0 0 .43-.528H1.25a.75.75 0 1 1 0-1.5h1.286l.164-.46c.343-.96 1.148-1.696 2.157-1.842a22.3 22.3 0 0 1 6.286 0c1.009.146 1.814.882 2.157 1.843l.164.459h1.286a.75.75 0 0 1 0 1.5h-.651q.187.286.429.528a3.32 3.32 0 0 1 .972 2.347V13a1 1 0 0 1-1 1h-2.78a1 1 0 0 1-.948-.684" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCardClubIcon],svg[gravity-ui-card-club-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 4v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h6A1.5 1.5 0 0 1 12.5 4M11 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3zM9.5 6q-.001.265-.086.502L9.5 6.5a1.5 1.5 0 1 1-1.228 2.361c.08.667.382 1.293.862 1.773L9.5 11v.5h-3V11l.366-.366c.48-.48.782-1.106.862-1.773a1.5 1.5 0 1 1-1.142-2.359A1.5 1.5 0 1 1 9.5 6" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCardClubIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCardDiamondIcon],svg[gravity-ui-card-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 4v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h6A1.5 1.5 0 0 1 12.5 4M11 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3zM5 8.25v-.5A5.56 5.56 0 0 0 7.75 4h.5A5.56 5.56 0 0 0 11 7.75v.5A5.56 5.56 0 0 0 8.25 12h-.5A5.56 5.56 0 0 0 5 8.25" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCardDiamondIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCardHeartIcon],svg[gravity-ui-card-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 4v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h6A1.5 1.5 0 0 1 12.5 4M11 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3zM4.75 7.333c0-1.148.734-2.084 1.846-2.084c.613 0 1.253.595 1.404 1.501c.15-.915.791-1.5 1.404-1.5c1.112 0 1.846.935 1.846 2.083c0 1.895-1.69 3.1-3.1 3.878a.31.31 0 0 1-.3-.001c-1.412-.786-3.1-1.973-3.1-3.877" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCardHeartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCardSpadeIcon],svg[gravity-ui-card-spade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 4v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h6A1.5 1.5 0 0 1 12.5 4M11 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3zM9.296 9.5C10.279 9.5 11 8.803 11 7.855c0-1.308-1.38-2.246-2.464-2.983c-.19-.13-.372-.254-.536-.372c-.162.117-.342.24-.53.368C6.384 5.608 5 6.55 5 7.855C5 8.803 5.721 9.5 6.704 9.5c.388 0 .716-.124.974-.345a3 3 0 0 1-.812 1.479L6.5 11v.5h3V11l-.366-.366a3 3 0 0 1-.812-1.479c.258.221.587.345.974.345" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCardSpadeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCaretDownIcon],svg[gravity-ui-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.177 6.705A.73.73 0 0 1 4.729 5.5h6.542a.73.73 0 0 1 .552 1.205L8.8 10.214a1 1 0 0 1-.757.347h-.084a1 1 0 0 1-.757-.347z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCaretDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCaretLeftIcon],svg[gravity-ui-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.295 4.177a.73.73 0 0 1 1.205.552v6.542a.73.73 0 0 1-1.205.552L5.786 8.8a1 1 0 0 1-.347-.757v-.084a1 1 0 0 1 .347-.757z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCaretLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCaretRightIcon],svg[gravity-ui-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.705 11.823a.73.73 0 0 1-1.205-.552V4.729a.73.73 0 0 1 1.205-.552L10.214 7.2a1 1 0 0 1 .347.757v.084a1 1 0 0 1-.347.757z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCaretRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCaretUpIcon],svg[gravity-ui-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.823 9.295a.73.73 0 0 1-.552 1.205H4.729a.73.73 0 0 1-.552-1.205L7.2 5.786a1 1 0 0 1 .757-.347h.084a1 1 0 0 1 .757.347z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCaretUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCaretsExpandVerticalIcon],svg[gravity-ui-carets-expand-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 6.273a.73.73 0 0 0-.18-.479L8.8 2.342A1 1 0 0 0 8.046 2h-.092a1 1 0 0 0-.753.341L4.18 5.794A.727.727 0 0 0 4.727 7h6.546A.727.727 0 0 0 12 6.273M4 9.727c0 .176.064.346.18.479l3.02 3.453a1 1 0 0 0 .753.341h.092a1 1 0 0 0 .753-.341l3.021-3.453A.727.727 0 0 0 11.273 9H4.727A.727.727 0 0 0 4 9.727" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCaretsExpandVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChartAreaStackedIcon],svg[gravity-ui-chart-area-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiChartAreaStacked0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M10.257 4.2a.86.86 0 0 1-.86.274l-3.103-.776a2.81 2.81 0 0 0-2.796.876L1.242 7.152A3 3 0 0 0 .5 9.127V12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V3.309a1.933 1.933 0 0 0-3.4-1.258l-1.31 1.528zM14 6.48V3.31a.433.433 0 0 0-.762-.282l-1.842 2.15a2.36 2.36 0 0 1-2.362.753L5.93 5.154a1.31 1.31 0 0 0-1.303.408L2.37 8.139a1.5 1.5 0 0 0-.37.988v.685l2.304-1.44a2.59 2.59 0 0 1 2.458-.155l1.923.888a1.58 1.58 0 0 0 1.777-.317l.22-.22l1.575-1.574A1.86 1.86 0 0 1 14 6.479m-12 5.52c0 .277.226.501.5.501h11a.5.5 0 0 0 .5-.5V8.337a.4.4 0 0 0-.683-.283L11.523 9.85a3.08 3.08 0 0 1-3.466.618L6.134 9.58a1.09 1.09 0 0 0-1.035.066L2.353 11.36a.75.75 0 0 0-.353.637" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiChartAreaStacked0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiChartAreaStackedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChartAreaStackedNormalizedIcon],svg[gravity-ui-chart-area-stacked-normalized-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiChartAreaStackedNormalized0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 12.5h-11A.5.5 0 0 1 2 12v-1.611l2.812-1.985a1.25 1.25 0 0 1 1.414-.019l1.753 1.169a2.75 2.75 0 0 0 3.757-.681L14 5.728V12a.5.5 0 0 1-.5.5m.22-8.95l-3.201 4.446a1.25 1.25 0 0 1-1.708.31L7.058 7.137a2.75 2.75 0 0 0-3.111.042L2 8.553V4a.5.5 0 0 1 .5-.5h11q.119.001.22.05M.5 9.992V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V9.991" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiChartAreaStackedNormalized0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiChartAreaStackedNormalizedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChartBarIcon],svg[gravity-ui-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiChartBar0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M6 4v1a.5.5 0 0 1-.5.5h-3A.5.5 0 0 1 2 5V4a.5.5 0 0 1 .5-.5h3A.5.5 0 0 1 6 4M2 7.5v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5M2 11v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5m-1.5.503V4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1q0 .26-.063.5H9.5a2 2 0 0 1 2 2v1q0 .26-.063.5H13.5a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiChartBar0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiChartBarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChartBarStackedIcon],svg[gravity-ui-chart-bar-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiChartBarStacked0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M14 12a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 2 12v-1a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5zm0-3.5a.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 12 7h1.5a.5.5 0 0 1 .5.5zM14 5V4a.5.5 0 0 0-.5-.5H8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5.5A.5.5 0 0 0 14 5M2.5 3.5A.5.5 0 0 0 2 4v1a.5.5 0 0 0 .5.5h3A.5.5 0 0 0 6 5V4a.5.5 0 0 0-.5-.5zm-.5 4v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5M.5 12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiChartBarStacked0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiChartBarStackedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChartColumnIcon],svg[gravity-ui-chart-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiChartColumn0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 3.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5m-2.5 9a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5zm-4.5 0A.5.5 0 0 0 5 12v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5zm-1 1.5h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2q.26 0 .5.063V7a2 2 0 0 1 2-2h2q.26 0 .5.063V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiChartColumn0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiChartColumnIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChartColumnStackedIcon],svg[gravity-ui-chart-column-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiChartColumnStacked0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M11 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm-2 8.5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5zm-4.5 0A.5.5 0 0 0 5 12v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5zM2 7.5V4a.5.5 0 0 1 .5-.5h2A.5.5 0 0 1 5 4v3.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5m5-4h2a.5.5 0 0 1 .5.5v.5A.5.5 0 0 1 9 5H7a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5M7 2H2.5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiChartColumnStacked0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiChartColumnStackedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChartDonutIcon],svg[gravity-ui-chart-donut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.111 2.18a7 7 0 1 1 7.778 11.64A7 7 0 0 1 4.111 2.18M8 6.02a1.98 1.98 0 1 0 0 3.96a1.98 1.98 0 0 0 0-3.96m-.75-3.469a5.5 5.5 0 1 0 6.199 6.199h-2.05a3.481 3.481 0 0 1-5.86 1.71A3.48 3.48 0 0 1 7.25 4.603zm1.5 0v2.05a3.48 3.48 0 0 1 2.648 2.649h2.05A5.5 5.5 0 0 0 8.75 2.551" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChartDonutIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChartLineIcon],svg[gravity-ui-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiChartLine0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M15.326 1.27a.75.75 0 0 1-.096 1.056l-3.674 3.062a2.75 2.75 0 0 1-2.55.522l-2.869-.86a1.25 1.25 0 0 0-1.214.285l-3.16 2.962A.75.75 0 1 1 .737 7.203l3.16-2.963a2.75 2.75 0 0 1 2.671-.628l2.868.86c.402.121.837.032 1.16-.236l3.674-3.062a.75.75 0 0 1 1.056.096m.113 6.185a.75.75 0 0 1-.393.984l-4.398 1.885a2.75 2.75 0 0 1-2.313-.068L6.186 9.182a1.25 1.25 0 0 0-1.238.068l-3.29 2.13a.75.75 0 0 1-.815-1.26l3.29-2.129a2.75 2.75 0 0 1 2.724-.15l2.149 1.073a1.25 1.25 0 0 0 1.051.031l4.398-1.884a.75.75 0 0 1 .984.394M1.25 12.5a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiChartLine0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiChartLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChartLineLabelIcon],svg[gravity-ui-chart-line-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiChartLineLabel0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M16 4a.75.75 0 0 0-1.4-.375l-1.176 2.037l-1.288-2.06A.75.75 0 0 0 10.75 4v4.25a.75.75 0 0 0 1.5 0V6.613l.564.901a.75.75 0 0 0 1.286-.022l.4-.694v1.45a.75.75 0 0 0 1.5 0zM2.828 4a.75.75 0 0 0-1.218-.586L.282 4.477a.75.75 0 1 0 .937 1.171l.11-.088v2.69a.75.75 0 1 0 1.5 0zm4.583.75a.695.695 0 0 0-.656.464l-.085.242a.75.75 0 1 1-1.415-.498l.085-.242A2.195 2.195 0 0 1 7.411 3.25h.257A1.858 1.858 0 0 1 8.776 6.6l-1.213.9h1.375a.75.75 0 1 1 0 1.5H5.975a.975.975 0 0 1-.581-1.758l2.488-1.847a.358.358 0 0 0-.214-.645zm7.44 5.226a.778.778 0 1 1 .598 1.436l-4.717 1.968a2.85 2.85 0 0 1-2.374-.081l-2.263-1.132a1.3 1.3 0 0 0-1.262.057l-3.624 2.243a.778.778 0 1 1-.818-1.323l3.623-2.243a2.85 2.85 0 0 1 2.776-.126l2.264 1.132c.337.169.73.182 1.079.037zM4.75 8.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiChartLineLabel0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiChartLineLabelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChartMixedIcon],svg[gravity-ui-chart-mixed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiChartMixed0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M14.98 1.826a.75.75 0 0 0-.96-1.152L10.376 3.71a1.25 1.25 0 0 1-1.196.225l-2.155-.718a2.75 2.75 0 0 0-2.973.837L.926 7.767a.75.75 0 1 0 1.148.966l3.125-3.712a1.25 1.25 0 0 1 1.352-.38l2.155.718a2.75 2.75 0 0 0 2.63-.496zM13.5 8h-2a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V8.5a.5.5 0 0 0-.5-.5m-4 5a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-2.5A.5.5 0 0 1 7 10h2a.5.5 0 0 1 .5.5zM5 13a.5.5 0 0 1-.5.5h-2A.5.5 0 0 1 2 13v-.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5zm-2.5 2h11a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v.063A2 2 0 0 0 9 8.5H7a2 2 0 0 0-2 2v.063a2 2 0 0 0-.5-.063h-2a2 2 0 0 0-2 2v.5a2 2 0 0 0 2 2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiChartMixed0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiChartMixedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChartPieIcon],svg[gravity-ui-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.45 8.75a5.501 5.501 0 1 1-6.2-6.2V8c0 .414.336.75.75.75zm0-1.5h-4.7v-4.7a5.5 5.5 0 0 1 4.7 4.7M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChartPieIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChartTreemapIcon],svg[gravity-ui-chart-treemap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 3H4.5A1.5 1.5 0 0 0 3 4.5v4h5zm1.5 0v5.5H13v-4A1.5 1.5 0 0 0 11.5 3zM3 11.5V10h3v3H4.5A1.5 1.5 0 0 1 3 11.5m8.25 1.5H7.5v-3h3.75zM4.5 1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChartTreemapIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCheckIcon],svg[gravity-ui-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927l5.473-6.385a.75.75 0 0 1 1.057-.081" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCheckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCheckShapeIcon],svg[gravity-ui-check-shape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.943 8.703L4.301 6.3a.25.25 0 0 0-.355.02L2.299 8.171a.25.25 0 0 0 .023.355l4.785 4.147a.25.25 0 0 0 .36-.032L13.29 5.36a.25.25 0 0 0-.03-.343l-1.856-1.65a.25.25 0 0 0-.364.034zM6.75 6.5l3.104-4.017a1.75 1.75 0 0 1 2.547-.238l1.857 1.651a1.75 1.75 0 0 1 .204 2.401L8.637 13.58a1.75 1.75 0 0 1-2.512.229L1.339 9.66a1.75 1.75 0 0 1-.162-2.486l1.647-1.852A1.75 1.75 0 0 1 5.31 5.19z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCheckShapeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCheckShapeFillIcon],svg[gravity-ui-check-shape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.475 13.782l6.135-7.67a1.5 1.5 0 0 0-.174-2.058L12.2 2.068a1.5 1.5 0 0 0-2.184.204L6.75 6.5L5.122 5.02a1.5 1.5 0 0 0-2.13.114L1.01 7.364a1.5 1.5 0 0 0 .139 2.13l5.173 4.484a1.5 1.5 0 0 0 2.154-.196"></svg:path>`,
})
export class GravityUiCheckShapeFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCherryIcon],svg[gravity-ui-cherry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiCherry0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M7.71.058c-1.62.676-2.758 1.724-3.414 3.04l-.033.066a6.5 6.5 0 0 0-.624 2.516q-.038.74.058 1.51l.002.01l.002.016A4.002 4.002 0 0 0 5 15a3.99 3.99 0 0 0 3.317-1.764q.057-.084.11-.173A4 4 0 0 0 11 14a4 4 0 1 0-1.391-7.752a4 4 0 0 1-.747-.327a3 3 0 0 1-.423-.285a2.8 2.8 0 0 1-.818-1.039c-.303-.67-.355-1.519-.048-2.477q.196.543.48.995q.33.531.772.939a4.5 4.5 0 0 0 1.234.815q.451.203.941.321a6.4 6.4 0 0 0 1.062.163q.541.037 1.1 0l.024-.002a10 10 0 0 0 .937-.111a.75.75 0 0 0 .617-.863a6 6 0 0 0-.267-1.032a4.6 4.6 0 0 0-.965-1.59a4.7 4.7 0 0 0-1.22-.918C11.068.191 9.553.001 8.018 0a.75.75 0 0 0-.307.058m1.605 2.247a3 3 0 0 0 1.113 1.072l.02.01q.341.188.745.303c.546.156 1.174.212 1.87.166l-.034-.091A2.95 2.95 0 0 0 11.825 2.3a4 4 0 0 0-.238-.138a4.5 4.5 0 0 0-.707-.296C10.33 1.69 9.7 1.582 9 1.533l-.045-.003l.028.08q.141.386.332.695M5.867 3.363q0 .3.036.594a4.4 4.4 0 0 0 .365 1.29a4.2 4.2 0 0 0 .679 1.035q.323.365.731.659q.21.15.442.283a4 4 0 0 0-.548.713a4 4 0 0 0-2.387-.933a8 8 0 0 1-.055-.694a7 7 0 0 1 .009-.591a5 5 0 0 1 .466-1.886l.008-.016a4 4 0 0 1 .254-.454M8.608 9.27a4 4 0 0 1 .365 2.193a2.5 2.5 0 1 0 .229-3.201l-.002.002a2.5 2.5 0 0 0-.592 1.006M7.5 11.037V11a2.5 2.5 0 1 0 0 .037" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiCherry0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiCherryIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronDownIcon],svg[gravity-ui-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.97 5.47a.75.75 0 0 1 1.06 0L8 9.44l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronDownWideIcon],svg[gravity-ui-chevron-down-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.867 6.097a.75.75 0 0 1 1.036-.23L8 9.111l5.097-3.244a.75.75 0 0 1 .806 1.266l-5.5 3.5a.75.75 0 0 1-.806 0l-5.5-3.5a.75.75 0 0 1-.23-1.036" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronDownWideIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronLeftIcon],svg[gravity-ui-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.53 2.97a.75.75 0 0 1 0 1.06L6.56 8l3.97 3.97a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronRightIcon],svg[gravity-ui-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.47 13.03a.75.75 0 0 1 0-1.06L9.44 8L5.47 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronUpIcon],svg[gravity-ui-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.03 10.53a.75.75 0 0 1-1.06 0L8 6.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronUpWideIcon],svg[gravity-ui-chevron-up-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.867 9.903a.75.75 0 0 0 1.036.23L8 6.889l5.097 3.244a.75.75 0 0 0 .806-1.266l-5.5-3.5a.75.75 0 0 0-.806 0l-5.5 3.5a.75.75 0 0 0-.23 1.036" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronUpWideIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsCollapseFromLinesIcon],svg[gravity-ui-chevrons-collapse-from-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0zm14.5 0a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0zM3.47 4.97a.75.75 0 0 0 0 1.06L5.44 8L3.47 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0m9.06 1.06a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L10.56 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronsCollapseFromLinesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsCollapseHorizontalIcon],svg[gravity-ui-chevrons-collapse-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.141 3.58a.75.75 0 0 0-1.06 1.061L4.439 8l-3.353 3.354a.75.75 0 1 0 1.06 1.06L6.03 8.53a.75.75 0 0 0 0-1.06zm11.718 8.84a.75.75 0 0 0 1.06-1.061L11.561 8l3.353-3.354a.75.75 0 0 0-1.06-1.06L9.97 7.47a.75.75 0 0 0 0 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronsCollapseHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsCollapseToLineIcon],svg[gravity-ui-chevrons-collapse-to-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 8 2M2.22 4.97a.75.75 0 0 0 0 1.06L4.19 8L2.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0m11.56 1.06a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L11.81 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronsCollapseToLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsCollapseUpRightIcon],svg[gravity-ui-chevrons-collapse-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiChevronsCollapseUpRight0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M15.25 6.993a.75.75 0 0 0 0-1.5H10.5V.75a.75.75 0 1 0-1.5 0v5.493c0 .414.336.75.75.75zM.75 9.007a.75.75 0 1 0 0 1.5H5.5v4.743a.75.75 0 0 0 1.5 0V9.757a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiChevronsCollapseUpRight0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiChevronsCollapseUpRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsCollapseVerticalIcon],svg[gravity-ui-chevrons-collapse-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.42 2.141a.75.75 0 1 0-1.061-1.06L8 4.439L4.646 1.086a.75.75 0 1 0-1.06 1.06L7.47 6.03a.75.75 0 0 0 1.06 0zM3.58 13.86a.75.75 0 0 0 1.061 1.06L8 11.561l3.354 3.353a.75.75 0 0 0 1.06-1.06L8.53 9.97a.75.75 0 0 0-1.06 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronsCollapseVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsDownIcon],svg[gravity-ui-chevrons-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.03 3.47a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8 6.44zm0 5a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8 11.44z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronsDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsDownWideIcon],svg[gravity-ui-chevrons-down-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.903 3.617a.75.75 0 1 0-.806 1.266l5.5 3.5a.75.75 0 0 0 .806 0l5.5-3.5a.75.75 0 1 0-.806-1.266L8 6.861zm0 4.5a.75.75 0 1 0-.806 1.266l5.5 3.5a.75.75 0 0 0 .806 0l5.5-3.5a.75.75 0 1 0-.806-1.266L8 11.361z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronsDownWideIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsExpandFromLineIcon],svg[gravity-ui-chevrons-expand-from-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 8 2M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0m6.44 1.06a.75.75 0 0 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06L13.19 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronsExpandFromLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsExpandHorizontalIcon],svg[gravity-ui-chevrons-expand-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiChevronsExpandHorizontal0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M11.891 3.58a.75.75 0 0 0-1.06 1.061L14.188 8l-3.353 3.354a.75.75 0 1 0 1.06 1.06L15.78 8.53a.75.75 0 0 0 0-1.06zM4.11 12.42a.75.75 0 0 0 1.06-1.061L1.811 8l3.353-3.354a.75.75 0 1 0-1.06-1.06L.22 7.47a.75.75 0 0 0 0 1.06z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiChevronsExpandHorizontal0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiChevronsExpandHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsExpandToLinesIcon],svg[gravity-ui-chevrons-expand-to-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 2.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0zm14.5 0a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0zM6.53 4.97a.75.75 0 0 1 0 1.06L4.56 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0m2.94 1.06a.75.75 0 0 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06L11.44 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronsExpandToLinesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsExpandUpRightIcon],svg[gravity-ui-chevrons-expand-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.754 2.004a.75.75 0 0 0 0 1.5h4.75v4.742a.75.75 0 0 0 1.5 0V2.754a.75.75 0 0 0-.75-.75zm.492 11.992a.75.75 0 0 0 0-1.5h-4.75V7.754a.75.75 0 0 0-1.5 0v5.492a.75.75 0 0 0 .75.75z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronsExpandUpRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsExpandVerticalIcon],svg[gravity-ui-chevrons-expand-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiChevronsExpandVertical0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M3.58 4.109a.75.75 0 0 0 1.061 1.06L8 1.811l3.354 3.353a.75.75 0 0 0 1.06-1.06L8.53.22a.75.75 0 0 0-1.06 0zm8.84 7.782a.75.75 0 1 0-1.061-1.06l-3.36 3.358l-3.353-3.353a.75.75 0 1 0-1.06 1.06L7.47 15.78a.75.75 0 0 0 1.06 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiChevronsExpandVertical0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiChevronsExpandVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsLeftIcon],svg[gravity-ui-chevrons-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.53 5.03a.75.75 0 0 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 1 0 1.06-1.06L9.56 8zm-5 0a.75.75 0 0 0-1.06-1.06l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 0 0 1.06-1.06L4.56 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronsLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsRightIcon],svg[gravity-ui-chevrons-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.47 10.97a.75.75 0 1 0 1.06 1.06l3.5-3.5a.75.75 0 0 0 0-1.06l-3.5-3.5a.75.75 0 0 0-1.06 1.06L6.44 8zm5 0a.75.75 0 1 0 1.06 1.06l3.5-3.5a.75.75 0 0 0 0-1.06l-3.5-3.5a.75.75 0 0 0-1.06 1.06L11.44 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronsRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsUpIcon],svg[gravity-ui-chevrons-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.97 12.53a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06L8 9.56zm0-5a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06L8 4.56z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronsUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsUpWideIcon],svg[gravity-ui-chevrons-up-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.097 12.383a.75.75 0 0 0 .806-1.266l-5.5-3.5a.75.75 0 0 0-.806 0l-5.5 3.5a.75.75 0 1 0 .806 1.266L8 9.139zm0-4.5a.75.75 0 0 0 .806-1.266l-5.5-3.5a.75.75 0 0 0-.806 0l-5.5 3.5a.75.75 0 0 0 .806 1.266L8 4.639z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiChevronsUpWideIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleIcon],svg[gravity-ui-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleArrowDownIcon],svg[gravity-ui-circle-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8.75 5a.75.75 0 0 0-1.5 0v4.19l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleArrowDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleArrowDownFillIcon],svg[gravity-ui-circle-arrow-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m.75-10a.75.75 0 0 0-1.5 0v4.19l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleArrowDownFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleArrowLeftIcon],svg[gravity-ui-circle-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-4 .75a.75.75 0 0 0 0-1.5H6.81l.72-.72a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleArrowLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleArrowLeftFillIcon],svg[gravity-ui-circle-arrow-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m3-6.25a.75.75 0 0 0 0-1.5H6.81l.72-.72a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleArrowLeftFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleArrowRightIcon],svg[gravity-ui-circle-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M5 7.25a.75.75 0 0 0 0 1.5h4.19l-.72.72a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 1.06l.72.72z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleArrowRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleArrowRightFillIcon],svg[gravity-ui-circle-arrow-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M5 7.25a.75.75 0 0 0 0 1.5h4.19l-.72.72a.75.75 0 0 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 1.06l.72.72z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleArrowRightFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleArrowUpIcon],svg[gravity-ui-circle-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-7.75 3a.75.75 0 0 0 1.5 0V6.81l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l.72-.72z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleArrowUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleArrowUpFillIcon],svg[gravity-ui-circle-arrow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m-.75-4a.75.75 0 0 0 1.5 0V6.81l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 1 0 1.06 1.06l.72-.72z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleArrowUpFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleCheckIcon],svg[gravity-ui-circle-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-3.9-1.55a.75.75 0 1 0-1.2-.9L7.419 8.858L6.03 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.13-.08z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleCheckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleCheckFillIcon],svg[gravity-ui-circle-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m3.1-8.55a.75.75 0 1 0-1.2-.9L7.419 8.858L6.03 7.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.13-.08z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleCheckFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleChevronDownIcon],svg[gravity-ui-circle-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 8a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m5.03-1.28a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06L8 8.69z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleChevronDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleChevronDownFillIcon],svg[gravity-ui-circle-chevron-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6.03 6.72a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06L8 8.69z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleChevronDownFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleChevronLeftIcon],svg[gravity-ui-circle-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.5a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m1.28 5.03a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L7.31 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleChevronLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleChevronLeftFillIcon],svg[gravity-ui-circle-chevron-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0M9.28 6.03a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L7.31 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleChevronLeftFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleChevronRightIcon],svg[gravity-ui-circle-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 1 0-11a5.5 5.5 0 0 1 0 11M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14M6.72 9.97a.75.75 0 0 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06L8.69 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleChevronRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleChevronRightFillIcon],svg[gravity-ui-circle-chevron-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m5.72 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06L8.69 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleChevronRightFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleChevronUpIcon],svg[gravity-ui-circle-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M9.97 9.28a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06L8 7.31z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleChevronUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleChevronUpFillIcon],svg[gravity-ui-circle-chevron-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1.97-5.72a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06L8 7.31z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleChevronUpFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleChevronsDownIcon],svg[gravity-ui-circle-chevrons-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M5.72 4.97a.75.75 0 0 1 1.06 0L8 6.19l1.22-1.22a.75.75 0 1 1 1.06 1.06L8.53 7.78a.75.75 0 0 1-1.06 0L5.72 6.03a.75.75 0 0 1 0-1.06m1.06 3.75a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l1.75-1.75a.75.75 0 1 0-1.06-1.06L8 9.94z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleChevronsDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleChevronsLeftIcon],svg[gravity-ui-circle-chevrons-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0m-3.97-2.28a.75.75 0 0 1 0 1.06L9.81 8l1.22 1.22a.75.75 0 1 1-1.06 1.06L8.22 8.53a.75.75 0 0 1 0-1.06l1.75-1.75a.75.75 0 0 1 1.06 0M7.28 6.78a.75.75 0 0 0-1.06-1.06L4.47 7.47a.75.75 0 0 0 0 1.06l1.75 1.75a.75.75 0 1 0 1.06-1.06L6.06 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleChevronsLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleChevronsRightIcon],svg[gravity-ui-circle-chevrons-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 8a5.5 5.5 0 1 0 11 0a5.5 5.5 0 0 0-11 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m3.97 2.28a.75.75 0 0 1 0-1.06L6.19 8L4.97 6.78a.75.75 0 0 1 1.06-1.06l1.75 1.75a.75.75 0 0 1 0 1.06l-1.75 1.75a.75.75 0 0 1-1.06 0m3.75-1.06a.75.75 0 1 0 1.06 1.06l1.75-1.75a.75.75 0 0 0 0-1.06L9.78 5.72a.75.75 0 0 0-1.06 1.06L9.94 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleChevronsRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleChevronsUpIcon],svg[gravity-ui-circle-chevrons-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m2.28-3.97a.75.75 0 0 1-1.06 0L8 9.81l-1.22 1.22a.75.75 0 1 1-1.06-1.06l1.75-1.75a.75.75 0 0 1 1.06 0l1.75 1.75a.75.75 0 0 1 0 1.06M9.22 7.28a.75.75 0 1 0 1.06-1.06L8.53 4.47a.75.75 0 0 0-1.06 0L5.72 6.22a.75.75 0 0 0 1.06 1.06L8 6.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleChevronsUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleDashedIcon],svg[gravity-ui-circle-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.906 1.085a7 7 0 0 1 2.188 0a.75.75 0 0 1-.232 1.482a5.6 5.6 0 0 0-1.724 0a.75.75 0 0 1-.232-1.482M4.933 2.502a.75.75 0 0 1-.166 1.048c-.466.34-.878.75-1.217 1.217a.75.75 0 0 1-1.213-.882a7 7 0 0 1 1.548-1.548a.75.75 0 0 1 1.048.165m6.135 0a.75.75 0 0 1 1.047-.165a7 7 0 0 1 1.548 1.548a.75.75 0 0 1-1.213.882a5.5 5.5 0 0 0-1.217-1.217a.75.75 0 0 1-.165-1.048M1.943 6.28a.75.75 0 0 1 .624.857a5.6 5.6 0 0 0 0 1.724a.75.75 0 0 1-1.482.232a7 7 0 0 1 0-2.188a.75.75 0 0 1 .858-.625m12.115 0a.75.75 0 0 1 .857.625a7 7 0 0 1 0 2.188a.75.75 0 1 1-1.482-.232a5.5 5.5 0 0 0 0-1.724a.75.75 0 0 1 .624-.857M2.502 11.068a.75.75 0 0 1 1.048.165c.34.466.75.878 1.217 1.217a.75.75 0 0 1-.882 1.213a7 7 0 0 1-1.548-1.548a.75.75 0 0 1 .165-1.047m10.996 0a.75.75 0 0 1 .165 1.047a7 7 0 0 1-1.548 1.548a.75.75 0 0 1-.883-1.213a5.5 5.5 0 0 0 1.218-1.217a.75.75 0 0 1 1.048-.165m-7.217 2.99a.75.75 0 0 1 .857-.625a5.5 5.5 0 0 0 1.724 0a.75.75 0 0 1 .232 1.482a7 7 0 0 1-2.188 0a.75.75 0 0 1-.625-.857" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleDashedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleDollarIcon],svg[gravity-ui-circle-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8.75 4.25a.75.75 0 0 0-1.5 0v.339a2.5 2.5 0 0 0-1.007.47a1.95 1.95 0 0 0-.74 1.546c0 .764.474 1.265.94 1.559c.456.287 1.007.448 1.448.547c.462.102.843.191 1.118.341c.228.125.275.224.275.376c0 .102-.04.217-.248.341c-.224.135-.577.229-.982.229c-.344 0-.683-.114-.953-.29c-.281-.184-.42-.388-.457-.506a.75.75 0 1 0-1.43.452c.171.543.591 1 1.068 1.31c.284.185.612.335.968.429v.357a.75.75 0 0 0 1.5 0v-.313c.375-.067.74-.19 1.058-.382c.53-.319.976-.864.976-1.627c0-.864-.51-1.394-1.055-1.692c-.478-.26-1.056-.389-1.46-.478l-.053-.012c-.386-.086-.736-.202-.973-.352c-.227-.142-.24-.236-.24-.29a.45.45 0 0 1 .18-.375c.134-.108.403-.227.87-.227c.47 0 .742.11.9.218a.83.83 0 0 1 .316.41a.75.75 0 0 0 1.407-.52a2.33 2.33 0 0 0-.878-1.13a2.7 2.7 0 0 0-1.048-.417z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleDollarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleExclamationIcon],svg[gravity-ui-circle-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-4.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8.75 5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleExclamationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleExclamationFillIcon],svg[gravity-ui-circle-exclamation-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-6 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8.75 5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleExclamationFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleFillIcon],svg[gravity-ui-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleInfoIcon],svg[gravity-ui-circle-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.25 3a.75.75 0 0 0-1.5 0V11a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleInfoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleInfoFillIcon],svg[gravity-ui-circle-info-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1-9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8 7.75a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-1.5 0V8.5A.75.75 0 0 1 8 7.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleInfoFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterAIcon],svg[gravity-ui-circle-letter-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.791 5.338a1.291 1.291 0 0 1 2.418 0l1.743 4.649a.75.75 0 1 1-1.404.526L9.168 9.5H6.832l-.38 1.013a.75.75 0 1 1-1.404-.526zM8 6.386L8.605 8h-1.21z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterAIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterBIcon],svg[gravity-ui-circle-letter-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.75 4.5a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h2.125a2.125 2.125 0 0 0 1.361-3.757A2 2 0 0 0 8.5 4.5zm.75 5.25V8.5h1.375a.625.625 0 1 1 0 1.25zM9 6.5a.5.5 0 0 1-.5.5h-1V6h1a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterBIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterCIcon],svg[gravity-ui-circle-letter-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.458 8c0-.8.2-1.289.445-1.569C7.136 6.165 7.487 6 8 6c.368 0 .648.086.857.222c.205.134.384.345.51.672a.75.75 0 0 0 1.4-.538c-.226-.59-.593-1.066-1.09-1.39C9.181 4.643 8.604 4.5 8 4.5c-.862 0-1.657.293-2.226.944c-.557.637-.816 1.523-.816 2.556s.259 1.92.816 2.556c.569.65 1.364.944 2.226.944c.605 0 1.182-.143 1.676-.466c.498-.324.865-.8 1.092-1.39a.75.75 0 0 0-1.4-.538c-.127.327-.306.538-.511.672c-.209.136-.49.222-.857.222c-.513 0-.864-.165-1.097-.431c-.245-.28-.445-.77-.445-1.569" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterCIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterDIcon],svg[gravity-ui-circle-letter-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.55 4.75a.75.75 0 0 0-.75.75v5c0 .414.336.75.75.75h1.5a3.25 3.25 0 1 0 0-6.5zm1.5 5H7.3v-3.5h.75a1.75 1.75 0 1 1 0 3.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterDIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterEIcon],svg[gravity-ui-circle-letter-e-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.5 4.75a.75.75 0 0 0-.75.75v5c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H7.25v-1h1.5a.75.75 0 0 0 0-1.5h-1.5v-1H9.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterEIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterFIcon],svg[gravity-ui-circle-letter-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.75 5a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-1.5h1.75a.75.75 0 0 0 0-1.5H7.5V6.5h2.25a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterFIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterGIcon],svg[gravity-ui-circle-letter-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.458 8c0-.8.2-1.289.445-1.569C7.136 6.165 7.487 6 8 6c.602 0 .995.225 1.235.62a.75.75 0 1 0 1.283-.776C9.964 4.93 9.04 4.5 8 4.5c-.862 0-1.657.293-2.226.944c-.557.637-.816 1.523-.816 2.556s.259 1.92.816 2.556c.569.65 1.364.944 2.226.944c.574 0 1.228-.118 1.767-.422c.56-.316 1.05-.877 1.05-1.703c0-.068.003-.132.006-.21l.005-.144a3 3 0 0 0-.012-.473a1.3 1.3 0 0 0-.23-.633A1.02 1.02 0 0 0 9.75 7.5H8.5a.75.75 0 0 0 0 1.5h.828l-.003.07a8 8 0 0 0-.008.305c0 .14-.057.267-.287.397C8.778 9.914 8.398 10 8 10c-.513 0-.864-.165-1.097-.431c-.245-.28-.445-.77-.445-1.569m2.863.69l.002.007z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterGIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterHIcon],svg[gravity-ui-circle-letter-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M7 5.5a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0V8.75h2v1.75a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0v1.75H7z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterHIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterIIcon],svg[gravity-ui-circle-letter-i-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M7 4.75a.75.75 0 0 0 0 1.5h.25v3.5H7a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-.25v-3.5H9a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterIIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterJIcon],svg[gravity-ui-circle-letter-j-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-4.51-2.25a.74.74 0 1 0-1.48 0v2.556c0 .704-.17 1.123-.365 1.355c-.18.214-.45.348-.86.348c-.3 0-.518-.072-.678-.182c-.158-.109-.306-.286-.41-.576a.74.74 0 1 0-1.395.498c.194.543.517.991.966 1.3c.447.306.971.442 1.516.442c.774 0 1.488-.275 1.994-.876c.492-.585.713-1.387.713-2.31z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterJIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterKIcon],svg[gravity-ui-circle-letter-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M7 5.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-1.5h.212l2.286 2.057a.75.75 0 0 0 1.004-1.114L8.589 7.97l1.691-1.69a.75.75 0 1 0-1.06-1.06L7.19 7.25H7z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterKIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterLIcon],svg[gravity-ui-circle-letter-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M7.5 5.75a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H7.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterLIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterMIcon],svg[gravity-ui-circle-letter-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-4-2.084a.916.916 0 0 0-1.656-.539L8 7.225L6.656 5.377A.916.916 0 0 0 5 5.916v4.334a.75.75 0 0 0 1.5 0V7.713l.893 1.228a.75.75 0 0 0 1.214 0L9.5 7.713v2.537a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterMIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterNIcon],svg[gravity-ui-circle-letter-n-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-4.25-2.25a.75.75 0 0 0-1.5 0v2.773L7.22 5.479a1.076 1.076 0 0 0-1.97.597v4.174a.75.75 0 0 0 1.5 0V7.477l2.03 3.044a1.076 1.076 0 0 0 1.97-.597z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterNIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterOIcon],svg[gravity-ui-circle-letter-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.5 8c0-.803.197-1.294.438-1.574C7.165 6.162 7.504 6 8 6c.498 0 .837.162 1.063.427c.24.28.436.77.436 1.573s-.196 1.294-.436 1.573C8.838 9.838 8.5 10 8.001 10c-.497 0-.836-.162-1.063-.426C6.698 9.294 6.5 8.803 6.5 8M8 4.5c-.853 0-1.64.297-2.2.949C5.253 6.086 5 6.969 5 8c0 1.03.253 1.914.8 2.551c.56.652 1.347.949 2.2.949c.858 0 1.644-.298 2.203-.95C10.75 9.91 11 9.027 11 8s-.25-1.911-.797-2.55c-.559-.652-1.345-.95-2.202-.95" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterPIcon],svg[gravity-ui-circle-letter-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.75 5a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0V9.5h1a2.25 2.25 0 0 0 0-4.5zm2.5 2.25A.75.75 0 0 1 8.5 8h-1V6.5h1a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterPIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterQIcon],svg[gravity-ui-circle-letter-q-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.938 6.426c-.24.28-.438.771-.438 1.574s.197 1.294.438 1.574C7.165 9.838 7.504 10 8 10q.231 0 .419-.045l-.158-.136a.75.75 0 1 1 .976-1.138l.175.15C9.468 8.6 9.5 8.326 9.5 8c0-.802-.196-1.294-.436-1.573C8.838 6.162 8.5 6 8.001 6c-.497 0-.836.162-1.063.426M8 11.5c.61 0 1.185-.151 1.668-.475l.343.294a.75.75 0 1 0 .976-1.138l-.355-.305C10.883 9.34 11 8.704 11 8c0-1.028-.25-1.911-.797-2.55c-.559-.652-1.345-.95-2.202-.95c-.854 0-1.64.297-2.2.949C5.252 6.086 5 6.969 5 8c0 1.03.253 1.914.8 2.551c.56.652 1.347.949 2.2.949" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterQIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterRIcon],svg[gravity-ui-circle-letter-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M5.75 5.5a.75.75 0 0 1 .75-.75h1.75a2.25 2.25 0 0 1 1.38 4.028l.771 1.35a.75.75 0 0 1-1.302.744L8.172 9.25H7.25v1.25a.75.75 0 0 1-1.5 0zm1.5 2.25h1a.75.75 0 0 0 0-1.5h-1z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterRIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterSIcon],svg[gravity-ui-circle-letter-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8.054 4.502c-.708 0-1.34.18-1.811.558a1.95 1.95 0 0 0-.74 1.545c0 .764.474 1.265.94 1.559c.457.287 1.007.448 1.448.547c.462.102.844.191 1.119.341c.227.125.274.224.274.376c0 .102-.04.217-.248.341c-.224.135-.577.229-.982.229c-.344 0-.682-.114-.952-.29c-.282-.184-.42-.388-.457-.506a.75.75 0 1 0-1.43.452c.17.543.59 1 1.067 1.31a3.27 3.27 0 0 0 1.772.534c.602 0 1.24-.134 1.754-.443c.53-.319.976-.864.976-1.627c0-.864-.51-1.394-1.055-1.692c-.478-.26-1.056-.389-1.46-.478l-.053-.012c-.386-.086-.736-.202-.973-.352c-.227-.142-.24-.236-.24-.29a.45.45 0 0 1 .18-.375c.134-.108.403-.227.87-.227c.47 0 .742.11.9.218a.83.83 0 0 1 .316.41a.75.75 0 0 0 1.407-.52A2.33 2.33 0 0 0 9.8 4.98c-.455-.31-1.037-.478-1.745-.478" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterSIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterTIcon],svg[gravity-ui-circle-letter-t-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6 5a.75.75 0 0 0 0 1.5h1.25v4.25a.75.75 0 0 0 1.5 0V6.5H10A.75.75 0 0 0 10 5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterTIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterUIcon],svg[gravity-ui-circle-letter-u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.74 5.75a.74.74 0 1 0-1.48 0v2.556c0 .927.227 1.732.728 2.316c.515.598 1.236.869 2.013.869c.78 0 1.5-.272 2.014-.871c.5-.585.726-1.39.726-2.314V5.75a.74.74 0 1 0-1.482 0v2.556c0 .702-.172 1.119-.37 1.35c-.184.216-.463.353-.888.353c-.424 0-.703-.137-.889-.353c-.198-.23-.371-.648-.371-1.35z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterUIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterVIcon],svg[gravity-ui-circle-letter-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.441 5.709a.75.75 0 0 0-1.382.582l1.903 4.52a1.126 1.126 0 0 0 2.076 0l1.903-4.52a.75.75 0 1 0-1.382-.582L8 9.411z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterWIcon],svg[gravity-ui-circle-letter-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M5.712 5.763a.75.75 0 1 0-1.424.474l1.5 4.5a.75.75 0 0 0 1.424 0L8 8.372l.788 2.365a.75.75 0 0 0 1.423 0l1.5-4.5a.75.75 0 1 0-1.422-.474L9.5 8.128l-.788-2.365a.75.75 0 0 0-1.424 0L6.5 8.128z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterWIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterXIcon],svg[gravity-ui-circle-letter-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M5.658 9.79a.75.75 0 0 0 1.184.92L8 9.223l1.158 1.489a.75.75 0 0 0 1.184-.921L8.95 8l1.392-1.79a.75.75 0 0 0-1.184-.92L8 6.778L6.842 5.29a.75.75 0 1 0-1.184.92L7.05 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterXIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterYIcon],svg[gravity-ui-circle-letter-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.586 5.281a.75.75 0 1 0-1.172.938L7.25 8.513v2.237a.75.75 0 0 0 1.5 0V8.513l1.836-2.294a.75.75 0 0 0-1.172-.938L8 7.05z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterYIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterZIcon],svg[gravity-ui-circle-letter-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6 5a.75.75 0 0 0 0 1.5h2.49L5.56 9.284A.995.995 0 0 0 6.245 11H10a.75.75 0 0 0 0-1.5H7.51l2.93-2.784A.995.995 0 0 0 9.755 5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterZIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLinkIcon],svg[gravity-ui-circle-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6.221 7.298a.707.707 0 0 0-1 0A2.461 2.461 0 1 0 8.7 10.78a.707.707 0 0 0 0-1l-.06-.06a.707.707 0 0 0-1 0a.961.961 0 0 1-1.36-1.36a.707.707 0 0 0 0-1zm3.497 1.344a.707.707 0 0 1 0-1.001a.961.961 0 0 0-1.359-1.36a.707.707 0 0 1-1 0l-.06-.06a.707.707 0 0 1 0-1a2.461 2.461 0 1 1 3.48 3.48a.707.707 0 0 1-1 0zm-.781-.518a.75.75 0 0 0-1.061-1.06l-.813.812a.75.75 0 0 0 1.061 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLinkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleMinusIcon],svg[gravity-ui-circle-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-9.5-.75a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleMinusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleMinusFillIcon],svg[gravity-ui-circle-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M5.5 7.25a.75.75 0 1 0 0 1.5h5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleMinusFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleNumber0Icon],svg[gravity-ui-circle-number-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M9.5 8c0 .923-.236 1.396-.44 1.622C8.875 9.828 8.565 10 8 10s-.875-.172-1.06-.378C6.736 9.396 6.5 8.923 6.5 8s.236-1.395.44-1.621C7.125 6.173 7.435 6 8 6s.875.173 1.06.379c.204.226.44.698.44 1.621M11 8c0 2.333-1.2 3.5-3 3.5S5 10.333 5 8s1.2-3.5 3-3.5s3 1.167 3 3.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleNumber0Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleNumber1Icon],svg[gravity-ui-circle-number-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M9 5.5a.75.75 0 0 0-1.23-.576l-1.5 1.25a.75.75 0 1 0 .96 1.152l.27-.225V10.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleNumber1Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleNumber2Icon],svg[gravity-ui-circle-number-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M9.75 9.75H8.269a9 9 0 0 0 .404-.287a5.3 5.3 0 0 0 1.045-1.014c.29-.39.532-.882.532-1.449c0-.596-.203-1.17-.628-1.598c-.427-.43-1.019-.652-1.682-.652c-.958 0-1.811.562-2.143 1.5a.75.75 0 0 0 1.414.5c.11-.31.377-.5.73-.5c.324 0 .512.102.617.209c.108.109.192.284.192.541c0 .131-.057.314-.235.553c-.177.237-.436.48-.746.714c-.62.468-1.33.822-1.654.972c-.37.171-.615.542-.615.96c0 .58.47 1.051 1.05 1.051h3.2a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleNumber2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleNumber3Icon],svg[gravity-ui-circle-number-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.5 4.75a.75.75 0 0 0 0 1.5h1.467l-.809 1.04a.75.75 0 0 0 .715 1.2c.608-.102.952.023 1.123.148a.61.61 0 0 1 .254.512c0 .28-.261.85-1.25.85c-.777 0-1.22-.533-1.288-.737a.75.75 0 1 0-1.424.474C5.554 10.533 6.554 11.5 8 11.5c1.701 0 2.75-1.13 2.75-2.35a2.11 2.11 0 0 0-.871-1.725a2.4 2.4 0 0 0-.665-.335l.878-1.13A.75.75 0 0 0 9.5 4.75z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleNumber3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleNumber4Icon],svg[gravity-ui-circle-number-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8.664 4.5c-.334 0-.649.153-.855.415l-2.57 3.27A1.121 1.121 0 0 0 6.123 10H8.25v.75a.75.75 0 0 0 1.5 0V10a.75.75 0 0 0 0-1.5V5.586c0-.6-.486-1.086-1.086-1.086M8.25 6.782V8.5H6.9z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleNumber4Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleNumber5Icon],svg[gravity-ui-circle-number-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.861 4.75a.75.75 0 0 0-.736.606l-.461 2.35a.75.75 0 0 0 .64.888l.055.997h-.002h.002a.75.75 0 0 0-.718 1.318L6 10.25l-.359.659h.002l.001.001l.005.003l.014.007a3 3 0 0 0 .188.091c.122.056.295.128.506.2a5.3 5.3 0 0 0 1.676.289c1.653 0 2.717-1.311 2.717-2.5c0-.726-.304-1.32-.805-1.714c-.48-.378-1.09-.536-1.678-.536c-.324 0-.629.03-.901.073l.112-.573H9.44a.75.75 0 1 0 0-1.5zM6.36 9.591l-.055-.997a.75.75 0 0 0 .384-.051l.018-.008l.087-.03a4.6 4.6 0 0 1 1.475-.254c.337-.001.594.091.749.213c.133.106.233.262.233.536c0 .37-.403 1-1.217 1c-.45 0-.875-.102-1.194-.21a4 4 0 0 1-.461-.189zm-.055-.997l-.179-3.238z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleNumber5Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleNumber6Icon],svg[gravity-ui-circle-number-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m2.5-5.75c0 1.147-1.048 2.25-2.6 2.25c-.719 0-1.478-.187-2.054-.765S5 9.31 5 8.25c0-2.046 1.781-3.442 3.89-3.742a.75.75 0 1 1 .21 1.484c-1.057.151-1.808.599-2.224 1.161A4 4 0 0 1 8 7c.638 0 1.255.186 1.727.578c.485.402.773.989.773 1.672M8.025 8.5H8c-.65 0-1.02.19-1.187.357a.45.45 0 0 0-.108.525c.063.129.134.224.204.294c.2.202.516.324.991.324c.835 0 1.1-.538 1.1-.75c0-.236-.09-.4-.231-.518c-.15-.125-.4-.227-.744-.232" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleNumber6Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleNumber7Icon],svg[gravity-ui-circle-number-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.5 5a.75.75 0 1 0 0 1.5h2.174l-1.378 3.74a.75.75 0 0 0 1.408.52l1.75-4.75A.75.75 0 0 0 9.75 5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleNumber7Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleNumber8Icon],svg[gravity-ui-circle-number-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1.443-5.436A.7.7 0 0 0 9.5 9.25a.7.7 0 0 0-.057-.314a.4.4 0 0 0-.14-.153C9.124 8.655 8.723 8.5 8 8.5s-1.124.155-1.303.283a.4.4 0 0 0-.14.153a.7.7 0 0 0-.057.314c0 .172.033.265.057.314a.4.4 0 0 0 .14.153c.179.128.58.283 1.303.283s1.124-.155 1.303-.283a.4.4 0 0 0 .14-.153m-3.647-1.98C5.29 7.957 5 8.513 5 9.25c0 1.5 1.2 2.25 3 2.25s3-.75 3-2.25c0-.736-.289-1.292-.796-1.667c.192-.291.296-.652.296-1.083c0-1.333-1-2-2.5-2s-2.5.667-2.5 2c0 .43.104.792.296 1.083M8 7c.556 0 .817-.127.903-.193a.2.2 0 0 0 .06-.069A.6.6 0 0 0 9 6.5a.6.6 0 0 0-.038-.238a.2.2 0 0 0-.059-.069C8.817 6.127 8.556 6 8 6s-.817.127-.903.193a.2.2 0 0 0-.06.069A.6.6 0 0 0 7 6.5c0 .144.026.214.038.238c.01.022.024.042.059.069c.086.066.347.193.903.193" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleNumber8Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleNumber9Icon],svg[gravity-ui-circle-number-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M5.5 6.75c0-1.147 1.048-2.25 2.6-2.25c.719 0 1.478.187 2.054.765S11 6.69 11 7.75c0 2.046-1.781 3.442-3.89 3.742a.75.75 0 1 1-.211-1.485c1.057-.15 1.808-.598 2.224-1.16A4 4 0 0 1 8 9c-.638 0-1.255-.186-1.727-.578A2.13 2.13 0 0 1 5.5 6.75m2.475.75H8c.65 0 1.02-.19 1.187-.357a.45.45 0 0 0 .108-.525a1.1 1.1 0 0 0-.204-.294C8.891 6.122 8.575 6 8.1 6c-.835 0-1.1.538-1.1.75c0 .236.09.4.231.518c.15.125.4.227.744.232" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleNumber9Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCirclePauseIcon],svg[gravity-ui-circle-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m1.75-9.75a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0v-3.5a1 1 0 0 1 1-1m-2.5 1a1 1 0 0 0-2 0v3.5a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCirclePauseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCirclePlayIcon],svg[gravity-ui-circle-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-7.75 3.031L11 8.866a1 1 0 0 0 0-1.732L7.25 4.969a1 1 0 0 0-1.5.866v4.33a1 1 0 0 0 1.5.866" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCirclePlayIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCirclePlusIcon],svg[gravity-ui-circle-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8.75 5.5a.75.75 0 0 0-1.5 0v1.75H5.5a.75.75 0 1 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0V8.75h1.75a.75.75 0 0 0 0-1.5H8.75z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCirclePlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCirclePlusFillIcon],svg[gravity-ui-circle-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m.75-9.5a.75.75 0 0 0-1.5 0v1.75H5.5a.75.75 0 1 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0V8.75h1.75a.75.75 0 0 0 0-1.5H8.75z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCirclePlusFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleQuestionIcon],svg[gravity-ui-circle-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6.44 4.54c.43-.354.994-.565 1.56-.565c1.217 0 2.34.82 2.34 2.14c0 .377-.078.745-.298 1.1c-.208.339-.513.614-.875.867c-.217.153-.325.257-.379.328c-.038.052-.038.07-.038.089a.75.75 0 0 1-1.5 0c0-.794.544-1.286 1.057-1.645c.28-.196.4-.332.458-.426a.54.54 0 0 0 .075-.312c0-.3-.244-.641-.84-.641a1 1 0 0 0-.608.223c-.167.138-.231.287-.231.418a.75.75 0 0 1-1.5 0c0-.674.345-1.22.78-1.577M8 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleQuestionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleQuestionDotIcon],svg[gravity-ui-circle-question-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2.5 8a5.5 5.5 0 0 1 6.38-5.43a.75.75 0 0 0 .24-1.48a7 7 0 1 0 5.792 5.792a.75.75 0 1 0-1.482.237q.07.43.07.881a5.5 5.5 0 1 1-11 0m3.94-3.46c.43-.354.994-.565 1.56-.565c1.217 0 2.34.82 2.34 2.14c0 .377-.079.745-.298 1.1c-.208.339-.513.614-.875.867c-.217.153-.326.257-.379.328c-.038.052-.038.07-.038.089a.75.75 0 0 1-1.5 0c0-.794.544-1.286 1.056-1.645c.28-.196.402-.332.46-.425a.54.54 0 0 0 .073-.313c0-.3-.243-.641-.839-.641a1 1 0 0 0-.608.224c-.167.137-.231.286-.231.417a.75.75 0 1 1-1.5 0c0-.673.345-1.22.78-1.577M9 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path d="M12.5 5.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class GravityUiCircleQuestionDotIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleQuestionFillIcon],svg[gravity-ui-circle-question-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6.44 4.54c.43-.354.994-.565 1.56-.565c1.217 0 2.34.82 2.34 2.14c0 .377-.079.745-.298 1.1c-.208.339-.513.614-.875.867c-.217.153-.326.257-.379.328c-.038.052-.038.07-.038.089a.75.75 0 0 1-1.5 0c0-.794.544-1.286 1.056-1.645c.28-.196.402-.332.46-.425a.54.54 0 0 0 .073-.313c0-.3-.243-.641-.839-.641a1 1 0 0 0-.608.224c-.167.137-.231.286-.231.417a.75.75 0 0 1-1.5 0c0-.673.345-1.22.78-1.577M9 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleQuestionFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleRubleIcon],svg[gravity-ui-circle-ruble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.75 4a.75.75 0 0 0-.75.75v2.5h-.125a.75.75 0 0 0 0 1.5H6v.5h-.125a.75.75 0 0 0 0 1.5H6v.5a.75.75 0 0 0 1.5 0v-.5H9a.75.75 0 0 0 0-1.5H7.5v-.5h1.125a2.375 2.375 0 1 0 0-4.75zm1.875 3.25H7.5V5.5h1.125a.875.875 0 1 1 0 1.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleRubleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleStopIcon],svg[gravity-ui-circle-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M5.25 6.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleStopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleXmarkIcon],svg[gravity-ui-circle-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.53 5.47a.75.75 0 0 0-1.06 1.06L6.94 8L5.47 9.47a.75.75 0 1 0 1.06 1.06L8 9.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L9.06 8l1.47-1.47a.75.75 0 1 0-1.06-1.06L8 6.94z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleXmarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleXmarkFillIcon],svg[gravity-ui-circle-xmark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M6.53 5.47a.75.75 0 0 0-1.06 1.06L6.94 8L5.47 9.47a.75.75 0 1 0 1.06 1.06L8 9.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L9.06 8l1.47-1.47a.75.75 0 1 0-1.06-1.06L8 6.94z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleXmarkFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircles3PlusIcon],svg[gravity-ui-circles-3-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.047 7.125A3 3 0 1 0 4.5 1.5a3 3 0 0 0-1.453 5.625M4.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-1.453 8.125A3 3 0 1 0 4.5 8.5a3 3 0 0 0-1.453 5.625M4.5 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m7 1.5a3 3 0 1 1 0-6a3 3 0 1 1 0 6m1.5-3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-.75-9.25a.75.75 0 0 0-1.5 0v1.501h-1.5a.75.75 0 1 0 0 1.5h1.501v1.502a.75.75 0 0 0 1.5 0V5.25h1.501a.75.75 0 0 0 0-1.5h-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircles3PlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircles4DiamondIcon],svg[gravity-ui-circles-4-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiCircles4Diamond0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M10.502 4.392a2.75 2.75 0 1 0-5.004-2.285a2.75 2.75 0 0 0 5.004 2.285m-4.75 2.466a2.76 2.76 0 0 0-1.36-1.36a2.75 2.75 0 1 0 1.36 1.36m1.106 3.39a2.76 2.76 0 0 0-1.36 1.36a2.75 2.75 0 1 0 1.36-1.36m3.39-1.106a2.75 2.75 0 0 0 1.36 1.36a2.75 2.75 0 1 0-1.36-1.36M8 2a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 8 2m6 6a1.25 1.25 0 1 0-2.5 0A1.25 1.25 0 0 0 14 8m-6 3.5A1.25 1.25 0 1 0 8 14a1.25 1.25 0 0 0 0-2.5M4.5 8A1.25 1.25 0 1 0 2 8a1.25 1.25 0 0 0 2.5 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiCircles4Diamond0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiCircles4DiamondIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircles4SquareIcon],svg[gravity-ui-circles-4-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.047 7.125A3 3 0 1 0 4.5 1.5a3 3 0 0 0-1.453 5.625M4.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m5.547 1.125A3 3 0 1 0 11.5 1.5a3 3 0 0 0-1.453 5.625M11.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-7 8.5a3 3 0 1 1 0-6a3 3 0 0 1 0 6m1.5-3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m4.047 2.625A3 3 0 1 0 11.5 8.5a3 3 0 0 0-1.453 5.625M11.5 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircles4SquareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircles5RandomIcon],svg[gravity-ui-circles-5-random-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.069 5.55A2.497 2.497 0 0 0 5 3.5a2.5 2.5 0 1 0-3.931 2.05M2.5 4.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m11 1.5A2.497 2.497 0 0 1 11 3.5A2.5 2.5 0 1 1 13.5 6m1-2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6.069 8.55A2.497 2.497 0 0 0 10 6.5a2.5 2.5 0 1 0-3.931 2.05M7.5 7.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2M12 14a2.497 2.497 0 0 1-2.5-2.5A2.5 2.5 0 1 1 12 14m1-2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M4.5 16A2.497 2.497 0 0 1 2 13.5A2.5 2.5 0 1 1 4.5 16m1-2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircles5RandomIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCirclesConcentricIcon],svg[gravity-ui-circles-concentric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 8.14-4.827a.75.75 0 1 0 .72-1.315a7 7 0 0 0-9.502 9.502a.75.75 0 0 0 1.315-.72A5.5 5.5 0 0 1 2.5 8m11.642-3.36a.75.75 0 1 0-1.315.72a5.5 5.5 0 0 1-7.466 7.466a.75.75 0 1 0-.722 1.316a7 7 0 0 0 9.502-9.502M9.5 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M11 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCirclesConcentricIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCirclesIntersectionIcon],svg[gravity-ui-circles-intersection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.576 11.854a4 4 0 1 1 0-7.707A5.48 5.48 0 0 0 5 8c0 1.5.601 2.861 1.576 3.854M8 12.9a5.5 5.5 0 1 1 0-9.8a5.5 5.5 0 1 1 0 9.8m1.424-8.754A4.003 4.003 0 0 1 14.5 8a4 4 0 0 1-5.076 3.854A5.48 5.48 0 0 0 11 8c0-1.5-.601-2.861-1.576-3.854M8 4.877C8.914 5.61 9.5 6.737 9.5 8s-.586 2.39-1.5 3.123A4 4 0 0 1 6.5 8c0-1.263.586-2.39 1.5-3.123" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCirclesIntersectionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiClockIcon],svg[gravity-ui-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8.75 4.5a.75.75 0 0 0-1.5 0V8a.75.75 0 0 0 .3.6l2 1.5a.75.75 0 1 0 .9-1.2l-1.7-1.275z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiClockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiClockArrowRotateLeftIcon],svg[gravity-ui-clock-arrow-rotate-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1 1 7.348 6.445a.75.75 0 1 1-.194-1.487A5.001 5.001 0 1 0 4.5 11.57v-1.32a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h1.06A6.48 6.48 0 0 1 1.5 8M8 4.25a.75.75 0 0 1 .75.75v2.625l1.033.775a.75.75 0 1 1-.9 1.2l-1.333-1a.75.75 0 0 1-.3-.6V5A.75.75 0 0 1 8 4.25" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiClockArrowRotateLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiClockFillIcon],svg[gravity-ui-clock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m.75-10.5a.75.75 0 0 0-1.5 0V8a.75.75 0 0 0 .3.6l2 1.5a.75.75 0 1 0 .9-1.2l-1.7-1.275z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiClockFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCloudIcon],svg[gravity-ui-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 6.25a3.25 3.25 0 0 1 6.051-1.65a4.5 4.5 0 0 0-2.35 1.34A.75.75 0 0 0 9.3 6.96a3 3 0 0 1 2.3-.958A3 3 0 0 1 11.5 12H3.75a2.25 2.25 0 0 1-.002-4.5h.03a.75.75 0 0 0 .747-.843A3 3 0 0 1 4.5 6.25M7.75 1.5a4.75 4.75 0 0 0-4.747 4.574A3.751 3.751 0 0 0 3.75 13.5h7.75a4.5 4.5 0 0 0 .687-8.948A4.75 4.75 0 0 0 7.75 1.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCloudIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCloudArrowUpInIcon],svg[gravity-ui-cloud-arrow-up-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiCloudArrowUpIn0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 5.25a3.25 3.25 0 0 1 6.398-.811a.75.75 0 0 0 .702.563A3 3 0 0 1 11.5 11h-.75a.75.75 0 0 0 0 1.5h.75a4.5 4.5 0 0 0 .687-8.948a4.751 4.751 0 0 0-9.184 1.522A3.751 3.751 0 0 0 3.75 12.5h1.5a.75.75 0 0 0 0-1.5H3.751a2.25 2.25 0 0 1-.003-4.5h.03a.75.75 0 0 0 .747-.843A3 3 0 0 1 4.5 5.25m4.25 3.31l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l.72-.72v6.69a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiCloudArrowUpIn0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiCloudArrowUpInIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCloudCheckIcon],svg[gravity-ui-cloud-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 6.25a3.25 3.25 0 0 1 6.398-.811a.75.75 0 0 0 .702.563A3 3 0 0 1 11.5 12H3.75a2.25 2.25 0 0 1-.002-4.5h.03a.75.75 0 0 0 .747-.843A3 3 0 0 1 4.5 6.25M7.75 1.5a4.75 4.75 0 0 0-4.747 4.574A3.751 3.751 0 0 0 3.75 13.5h7.75a4.5 4.5 0 0 0 .687-8.948A4.75 4.75 0 0 0 7.75 1.5m2.85 5.75a.75.75 0 1 0-1.2-.9L7.369 9.058L6.28 7.97a.75.75 0 1 0-1.06 1.06l1.7 1.7a.75.75 0 0 0 1.13-.08z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCloudCheckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCloudGearIcon],svg[gravity-ui-cloud-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 5.25a3.25 3.25 0 0 1 6.398-.811a.75.75 0 0 0 .702.563a3 3 0 0 1 1.94.798c.591.549.96 1.33.96 2.2A.75.75 0 0 0 16 8a4.5 4.5 0 0 0-1.44-3.3a4.5 4.5 0 0 0-2.373-1.148a4.751 4.751 0 0 0-9.184 1.522A3.751 3.751 0 0 0 3.75 12.5h.5a.75.75 0 0 0 0-1.5h-.5a2.25 2.25 0 0 1-.002-4.5h.03a.75.75 0 0 0 .747-.843A3 3 0 0 1 4.5 5.25m8.509 5.939a2.22 2.22 0 0 1-1.66-2.138l-.68-.256a2.38 2.38 0 0 1-2.748.816l-.406.569c.57.788.57 1.87 0 2.657l.406.569a2.38 2.38 0 0 1 2.747.816l.68-.255a2.22 2.22 0 0 1 1.66-2.139zm-.113-2.396a.715.715 0 0 0-.418-.921l-1.798-.674a.865.865 0 0 0-1.114.506a.87.87 0 0 1-1.32.395a.884.884 0 0 0-1.23.2L5.94 9.805a.77.77 0 0 0 .18 1.076c.43.307.43.948 0 1.255a.77.77 0 0 0-.18 1.076l1.076 1.506a.884.884 0 0 0 1.23.2a.87.87 0 0 1 1.32.395a.865.865 0 0 0 1.114.506l1.798-.674a.715.715 0 0 0 .418-.92a.715.715 0 0 1 .67-.966h.134a.81.81 0 0 0 .809-.809v-1.883a.81.81 0 0 0-.809-.808h-.134a.715.715 0 0 1-.67-.966m-1.833 2.709a1.052 1.052 0 1 1-2.103 0a1.052 1.052 0 0 1 2.103 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCloudGearIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCloudNutHexIcon],svg[gravity-ui-cloud-nut-hex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 5.25a3.25 3.25 0 0 1 6.398-.811a.75.75 0 0 0 .702.563a3 3 0 0 1 1.94.798c.591.549.96 1.33.96 2.2A.75.75 0 0 0 16 8a4.5 4.5 0 0 0-1.44-3.3a4.5 4.5 0 0 0-2.373-1.148a4.751 4.751 0 0 0-9.184 1.522A3.751 3.751 0 0 0 3.75 12.5h.5a.75.75 0 0 0 0-1.5h-.5a2.25 2.25 0 0 1-.002-4.5h.03a.75.75 0 0 0 .747-.843A3 3 0 0 1 4.5 5.25m7.123 8.25l1.406-2.5l-1.406-2.5H8.877L7.471 11l1.406 2.5zm2.713-1.765a1.5 1.5 0 0 0 0-1.47l-1.406-2.5A1.5 1.5 0 0 0 11.623 7H8.877a1.5 1.5 0 0 0-1.307.765l-1.406 2.5a1.5 1.5 0 0 0 0 1.47l1.406 2.5A1.5 1.5 0 0 0 8.877 15h2.746a1.5 1.5 0 0 0 1.307-.765zM11.25 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCloudNutHexIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCloudSlashIcon],svg[gravity-ui-cloud-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.364 4.424L1.97 3.03a.75.75 0 0 1 1.06-1.06l11 11a.75.75 0 1 1-1.06 1.06l-.612-.612a4.5 4.5 0 0 1-.858.082H3.75a3.75 3.75 0 0 1-.747-7.426a4.7 4.7 0 0 1 .36-1.65M10.939 12H3.751a2.25 2.25 0 0 1-.003-4.5h.03a.75.75 0 0 0 .747-.843a3.3 3.3 0 0 1 .036-1.036zm-.388-7.4a4.5 4.5 0 0 0-1.863.886l1.07 1.07a3 3 0 0 1 1.842-.554a3 3 0 0 1 2.343 4.74l1.07 1.07a4.5 4.5 0 0 0-2.826-7.26A4.75 4.75 0 0 0 5.351 2.15l1.115 1.115A3.25 3.25 0 0 1 10.55 4.6" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCloudSlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCloudsIcon],svg[gravity-ui-clouds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiClouds0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M4.977 4.563a3 3 0 0 0-.196.053l.062.006A4.06 4.06 0 0 0 2.49 8.06a3.234 3.234 0 0 0 .743 6.38h6.414a3.854 3.854 0 0 0 3.851-3.744a3.855 3.855 0 0 0-.69-7.406a4.061 4.061 0 0 0-7.817 1.267zm8.256 4.611a2.353 2.353 0 0 0-1.008-4.44a.75.75 0 0 1-.702-.563a2.562 2.562 0 0 0-4.979.079a4.06 4.06 0 0 1 3.765 2.54a3.86 3.86 0 0 1 2.924 2.384m-9.25-.864a2.56 2.56 0 0 1 5.04-.639a.75.75 0 0 0 .702.563a2.353 2.353 0 0 1-.078 4.706H3.233a1.733 1.733 0 0 1-.002-3.466h.024a.75.75 0 0 0 .748-.843a3 3 0 0 1-.02-.32m5.72 4.632H9.7zm-.11 1.496H9.59z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiClouds0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiCloudsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCodeIcon],svg[gravity-ui-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.218 3.216a.75.75 0 0 0-1.436-.431l-3 10a.75.75 0 0 0 1.436.43zM4.53 4.97a.75.75 0 0 1 0 1.06L2.56 8l1.97 1.97a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0m6.94 6.06a.75.75 0 0 1 0-1.06L13.44 8l-1.97-1.97a.75.75 0 0 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCodeCommitIcon],svg[gravity-ui-code-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.25 1.75v2.32a4.001 4.001 0 0 0 0 7.86v2.32a.75.75 0 0 0 1.5 0v-2.32a4.001 4.001 0 0 0 0-7.86V1.75a.75.75 0 0 0-1.5 0M8 10.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCodeCommitIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCodeCommitHorizontalIcon],svg[gravity-ui-code-commit-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.25 7.25h-2.32a4.001 4.001 0 0 0-7.86 0H1.75a.75.75 0 0 0 0 1.5h2.32a4.001 4.001 0 0 0 7.86 0h2.32a.75.75 0 0 0 0-1.5M5.5 8a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCodeCommitHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCodeCommitsIcon],svg[gravity-ui-code-commits-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiCodeCommits0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M8 3.25h-.008a1.25 1.25 0 1 0 .016 0zm.75-2.5v1.104a2.751 2.751 0 0 1 0 5.292v1.708a2.751 2.751 0 0 1 0 5.293v1.103a.75.75 0 0 1-1.5 0v-1.104a2.751 2.751 0 0 1 0-5.292V7.147a2.751 2.751 0 0 1 0-5.293V.75a.75.75 0 0 1 1.5 0m-.745 12h-.01a1.25 1.25 0 1 1 .01 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiCodeCommits0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiCodeCommitsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCodeCompareIcon],svg[gravity-ui-code-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.22 14.03a.75.75 0 0 0 1.06-1.06l-.47-.47H10a3 3 0 0 0 1.507-.405A3 3 0 0 0 13 9.5V6.896h.003a2.7 2.7 0 0 0 .785-.366a2.75 2.75 0 1 0-2.288.366V9.5A1.5 1.5 0 0 1 10 11h-.19l.47-.47a.75.75 0 0 0-1.06-1.06l-.47.47l-1.28 1.28a.75.75 0 0 0 0 1.06zM5.72 1.97a.75.75 0 0 1 1.06 0l.47.47l1.28 1.28a.75.75 0 0 1 0 1.06L6.78 6.53a.751.751 0 0 1-1.06-1.06L6.19 5H6a1.5 1.5 0 0 0-1.5 1.5v2.604a2.76 2.76 0 0 1 2 2.646a2.74 2.74 0 0 1-1.212 2.28l-.094.061A2.747 2.747 0 0 1 1 11.75a2.75 2.75 0 0 1 2-2.646V6.5a3 3 0 0 1 3-3h.19l-.47-.47a.75.75 0 0 1 0-1.06m-.908 9.121A1.25 1.25 0 0 1 5 11.75a1.25 1.25 0 1 1-.188-.659M11 4.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCodeCompareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCodeForkIcon],svg[gravity-ui-code-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.504 5.897a2.751 2.751 0 1 1 1.503-.002A1.5 1.5 0 0 0 6.5 7.25h3a1.5 1.5 0 0 0 1.493-1.355a2.751 2.751 0 1 1 1.503.002A3 3 0 0 1 9.5 8.75h-.75v1.354a2.751 2.751 0 1 1-1.5 0V8.75H6.5a3 3 0 0 1-2.996-2.853M3 3.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m3.75 9.5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m3.75-9.5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCodeForkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCodeMergeIcon],svg[gravity-ui-code-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.312 11.091a1.25 1.25 0 1 0-2.123 1.316a1.25 1.25 0 0 0 2.123-1.316M3.188 4.909a1.25 1.25 0 1 1 2.125-1.318a1.25 1.25 0 0 1-2.125 1.318M5 6.896v2.208a2.751 2.751 0 1 1-1.5 0V6.896A2.751 2.751 0 1 1 6.896 3.5H9.5a3 3 0 0 1 3 3v2.604a2.751 2.751 0 1 1-1.5 0V6.5A1.5 1.5 0 0 0 9.5 5H6.896A2.76 2.76 0 0 1 5 6.896m7.812 4.195a1.25 1.25 0 1 1-2.125 1.318a1.25 1.25 0 0 1 2.125-1.318" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCodeMergeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCodePullRequestIcon],svg[gravity-ui-code-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.788 3.121a1.25 1.25 0 1 1-1.076 2.257a1.25 1.25 0 0 1 1.076-2.257M3.5 6.896l-.068-.02a2.751 2.751 0 1 1 3.415-3.533L8.219 1.97A.75.75 0 0 1 9.28 3.03l-.47.47h.69a3 3 0 0 1 1.139.224A3 3 0 0 1 12.5 6.5v2.604l.068.02a2.751 2.751 0 0 1-.818 5.376A2.75 2.75 0 0 1 11 9.104V6.5q0-.116-.017-.225A1.5 1.5 0 0 0 9.5 5h-.69l.47.47a.75.75 0 0 1-1.06 1.06L6.847 5.157a2.74 2.74 0 0 1-.88 1.242c-.282.225-.61.397-.967.497v2.208l.068.02a2.751 2.751 0 1 1-1.568-.02zm-.312 4.195a1.25 1.25 0 0 0-.182.787a1.25 1.25 0 1 0 .182-.787m7.5 0a1.25 1.25 0 0 0-.181.787a1.25 1.25 0 1 0 .18-.787" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCodePullRequestIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCodePullRequestArrowLeftIcon],svg[gravity-ui-code-pull-request-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.967 6.399a2.77 2.77 0 0 0 .88-1.242L8.22 6.53a.75.75 0 1 0 1.06-1.06L8.81 5h.69q.118 0 .232.018A1.5 1.5 0 0 1 11 6.5v2.75a.747.747 0 0 0 .75.75a.75.75 0 0 0 .75-.75V6.5a3 3 0 0 0-3-3h-.69l.47-.47a.75.75 0 0 0-1.06-1.06L6.847 3.343A2.755 2.755 0 0 0 4.25 1.5a2.75 2.75 0 0 0-.753 5.396H3.5V7.5a.75.75 0 0 0 1.5 0v-.603c.357-.101.685-.273.967-.498m-.75 3.133a.75.75 0 0 0-.747.188h-.001l-1.75 1.75a.75.75 0 0 0 0 1.06l1.75 1.75a.75.75 0 0 0 1.061-1.06l-.47-.47h7.69a.75.75 0 0 0 0-1.5H5.06l.47-.469a.75.75 0 0 0-.313-1.249m-.43-6.41a1.25 1.25 0 1 1-1.075 2.256a1.25 1.25 0 0 1 1.076-2.257" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCodePullRequestArrowLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCodePullRequestArrowRightIcon],svg[gravity-ui-code-pull-request-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.53 5.788A2.77 2.77 0 0 1 5 6.896V9.25a.75.75 0 0 1-1.5 0V6.896h-.003a2.7 2.7 0 0 1-.785-.366a2.75 2.75 0 1 1 4.134-3.188L8.22 1.97a.75.75 0 0 1 1.06 1.06l-.47.47h.69a3 3 0 0 1 1.139.224A3 3 0 0 1 12.5 6.5v.75a.75.75 0 0 1-1.5 0V6.5q0-.116-.017-.225A1.5 1.5 0 0 0 9.5 5h-.69l.47.47a.75.75 0 0 1-1.06 1.06L6.847 5.157v.001a2.7 2.7 0 0 1-.317.63M5.5 4.25a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0m4.97 6.53a.75.75 0 1 1 1.06-1.06l1.75 1.75a.75.75 0 0 1 0 1.06l-1.75 1.75a.75.75 0 1 1-1.06-1.06l.47-.47H3.25a.75.75 0 0 1 0-1.5h7.69z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCodePullRequestArrowRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCodePullRequestCheckIcon],svg[gravity-ui-code-pull-request-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.967 6.399a2.77 2.77 0 0 0 .88-1.24v-.002L8.22 6.53a.75.75 0 0 0 1.06-1.06L8.81 5h.69q.118 0 .232.018A1.5 1.5 0 0 1 11 6.5v1.75a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3h-.69l.47-.47a.75.75 0 0 0-1.06-1.06L6.847 3.343A2.755 2.755 0 0 0 4.25 1.5a2.75 2.75 0 0 0-.75 5.396v2.208a2.751 2.751 0 1 0 1.5 0V6.896c.357-.1.685-.272.967-.497m4.063 4.07a.75.75 0 1 0-1.06 1.061l2 2a.75.75 0 0 0 1.13-.08l3-4a.75.75 0 0 0-1.2-.9l-2.481 3.308zm-6.842.622A1.25 1.25 0 0 0 3 11.75a1.25 1.25 0 1 0 .188-.659m1.6-7.97a1.25 1.25 0 1 1-1.076 2.257a1.25 1.25 0 0 1 1.076-2.257" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCodePullRequestCheckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCodePullRequestXmarkIcon],svg[gravity-ui-code-pull-request-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.967 6.399a2.77 2.77 0 0 0 .88-1.24v-.002L8.22 6.53a.75.75 0 0 0 1.06-1.06L8.81 5h.69q.118 0 .232.018A1.5 1.5 0 0 1 11 6.5v1.75a.75.75 0 1 0 1.5 0V6.5a3 3 0 0 0-3-3h-.69l.47-.47a.75.75 0 0 0-1.06-1.06L6.847 3.343A2.755 2.755 0 0 0 4.25 1.5a2.75 2.75 0 0 0-.753 5.396H3.5v2.208a2.751 2.751 0 1 0 1.5 0V6.896c.357-.1.685-.272.967-.497m3.253 6.82a.75.75 0 1 0 1.06 1.061l1.47-1.47l1.47 1.47a.75.75 0 1 0 1.06-1.06l-1.47-1.47l1.47-1.47a.75.75 0 1 0-1.06-1.06l-1.47 1.47l-1.47-1.47a.749.749 0 1 0-1.06 1.06l1.47 1.47zm-6.032-2.128A1.25 1.25 0 0 0 3 11.75a1.25 1.25 0 1 0 .188-.659m1.6-7.97a1.25 1.25 0 1 1-1.076 2.257a1.25 1.25 0 0 1 1.076-2.257" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCodePullRequestXmarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCodeTrunkIcon],svg[gravity-ui-code-trunk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.312 4.909A1.25 1.25 0 1 1 3.19 3.593a1.25 1.25 0 0 1 2.123 1.316m-2.124 6.182a1.25 1.25 0 1 0 2.125 1.318a1.25 1.25 0 0 0-2.125-1.318M5 9.104V6.896a2.751 2.751 0 1 0-1.5 0v2.208A2.751 2.751 0 1 0 6.896 12.5H9.5a3 3 0 0 0 3-2.98V6.895a2.751 2.751 0 1 0-1.5 0V9.5A1.5 1.5 0 0 1 9.5 11H6.896A2.76 2.76 0 0 0 5 9.104m7.812-4.195a1.25 1.25 0 1 0-2.125-1.318a1.25 1.25 0 0 0 2.125 1.318" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCodeTrunkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCommentIcon],svg[gravity-ui-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.843 10.944l-.194 2.335a.204.204 0 0 0 .339.17l2.21-1.964l.589.013L8 11.5c1.695 0 3.087-.44 4.02-1.177c.89-.702 1.48-1.76 1.48-3.323s-.59-2.62-1.48-3.323C11.087 2.94 9.695 2.5 8 2.5s-3.087.44-4.02 1.177C3.09 4.38 2.5 5.437 2.5 7c0 1.648.656 2.742 1.648 3.448zm1.141 3.625l1.77-1.572Q7.875 13 8 13c3.866 0 7-2 7-6s-3.134-6-7-6s-7 2-7 6c0 2.117.878 3.674 2.277 4.67l-.123 1.484a1.704 1.704 0 0 0 2.83 1.415" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCommentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCommentDotIcon],svg[gravity-ui-comment-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.98 3.677C4.913 2.94 6.305 2.5 8 2.5a9 9 0 0 1 .924.046a.75.75 0 0 0 .152-1.492A11 11 0 0 0 8 1c-1.933 0-3.683.5-4.95 1.5C1.784 3.5 1 5 1 7c0 2.117.878 3.674 2.277 4.67l-.123 1.484a1.704 1.704 0 0 0 2.83 1.415l1.77-1.572Q7.875 13 8 13c1.933 0 3.683-.5 4.95-1.5C14.216 10.5 15 9 15 7a.75.75 0 0 0-1.5 0c0 1.563-.59 2.62-1.48 3.323C11.087 11.06 9.695 11.5 8 11.5q-.108 0-.213-.002l-.295-.007l-.295-.006l-.22.195l-1.99 1.768a.204.204 0 0 1-.338-.17l.159-1.909l.035-.425l-.348-.248l-.347-.248C3.156 9.743 2.5 8.648 2.5 7c0-1.563.59-2.62 1.48-3.323M12.5 5.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCommentDotIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCommentFillIcon],svg[gravity-ui-comment-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13c3.866 0 7-2 7-6s-3.134-6-7-6s-7 2-7 6c0 2.16.914 3.737 2.364 4.73l.09 2.161a1.157 1.157 0 0 0 1.857.872l2.322-1.77Q7.816 13 8 13" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCommentFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCommentPlusIcon],svg[gravity-ui-comment-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.772 11.795l.071-.851l-.695-.496C3.156 9.743 2.5 8.648 2.5 7c0-1.563.59-2.62 1.48-3.323C4.913 2.94 6.305 2.5 8 2.5s3.087.44 4.02 1.177c.89.702 1.48 1.76 1.48 3.323s-.59 2.62-1.48 3.323C11.087 11.06 9.695 11.5 8 11.5q-.108 0-.213-.002l-.59-.013l-.44.391l-1.77 1.572a.204.204 0 0 1-.338-.17zm2.981 1.202L5.984 14.57a1.704 1.704 0 0 1-2.83-1.415l.123-1.484C1.877 10.674 1 9.117 1 7c0-4 3.134-6 7-6s7 2 7 6s-3.134 6-7 6q-.124 0-.247-.003M8.75 5a.75.75 0 0 0-1.5 0v1.25H6a.75.75 0 0 0 0 1.5h1.25V9a.75.75 0 0 0 1.5 0V7.75H10a.75.75 0 0 0 0-1.5H8.75z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCommentPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCommentSlashIcon],svg[gravity-ui-comment-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.235 3.296L1.97 3.03a.75.75 0 0 1 1.06-1.06l11 11a.75.75 0 0 1-1.06 1.06l-1.621-1.62c-.995.393-2.136.59-3.349.59q-.124 0-.247-.003L5.984 14.57a1.704 1.704 0 0 1-2.83-1.416l.123-1.484C1.877 10.674 1 9.117 1 7c0-1.526.456-2.76 1.235-3.704m7.93 7.93a8.1 8.1 0 0 1-2.378.272l-.59-.013l-.44.391l-1.77 1.572a.204.204 0 0 1-.338-.169l.123-1.484l.071-.851l-.695-.496C3.156 9.743 2.5 8.648 2.5 7c0-1.12.303-1.98.802-2.637zM13.5 7c0 1.075-.28 1.91-.742 2.556l1.07 1.07C14.568 9.693 15 8.484 15 7c0-4-3.134-6-7-6c-1.172 0-2.276.184-3.247.551l1.194 1.194A8.2 8.2 0 0 1 8 2.5c1.695 0 3.087.44 4.02 1.177c.89.702 1.48 1.76 1.48 3.323" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCommentSlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCommentsIcon],svg[gravity-ui-comments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 9.5h.621l.44.44l1.51 1.51a.174.174 0 0 0 .295-.136l-.112-1.454l-.062-.809l.642-.495C14.037 8.016 14.5 7.211 14.5 6c0-1.214-.465-2.019-1.17-2.56c-.754-.578-1.902-.94-3.33-.94s-2.576.362-3.33.94C5.966 3.98 5.5 4.786 5.5 6s.465 2.019 1.17 2.56c.754.578 1.902.94 3.33.94m.52 2.02l.99.99a1.673 1.673 0 0 0 2.851-1.312l-.111-1.453C15.33 8.91 16 7.663 16 6c0-3.333-2.686-5-6-5c-2.127 0-3.995.687-5.06 2.06C2.131 3.384 0 5.03 0 8c0 1.663.669 2.911 1.75 3.745l-.111 1.453A1.673 1.673 0 0 0 4.49 14.51L6 13c1.803 0 3.42-.493 4.52-1.48M4.143 4.736Q4.001 5.32 4 6c0 2.905 2.04 4.544 4.759 4.918c-.717.366-1.654.582-2.759.582h-.621l-.44.44l-1.51 1.51a.174.174 0 0 1-.295-.136l.112-1.454l.062-.809l-.642-.495C1.963 10.016 1.5 9.211 1.5 8c0-1.214.465-2.019 1.17-2.56c.391-.3.887-.541 1.473-.704" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCommentsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCompassIcon],svg[gravity-ui-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-6.09 2.303l-2.899.805a.909.909 0 0 1-1.12-1.119l.806-2.9A2 2 0 0 1 7.09 5.697l2.9-.805a.909.909 0 0 1 1.12 1.119l-.806 2.9a2 2 0 0 1-1.392 1.392M9 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCompassIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCopyIcon],svg[gravity-ui-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.5H8A1.5 1.5 0 0 0 6.5 4v1H8a3 3 0 0 1 3 3v1.5h1A1.5 1.5 0 0 0 13.5 8V4A1.5 1.5 0 0 0 12 2.5M11 11h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3zM4 6.5h4A1.5 1.5 0 0 1 9.5 8v4A1.5 1.5 0 0 1 8 13.5H4A1.5 1.5 0 0 1 2.5 12V8A1.5 1.5 0 0 1 4 6.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCopyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCopyArrowRightIcon],svg[gravity-ui-copy-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.5h4A1.5 1.5 0 0 1 13.5 4v4A1.5 1.5 0 0 1 12 9.5h-1V8a3 3 0 0 0-3-3H6.5V4A1.5 1.5 0 0 1 8 2.5m4 8.5h-1v1a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1V4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3M8 6.5H4A1.5 1.5 0 0 0 2.5 8v4A1.5 1.5 0 0 0 4 13.5h4A1.5 1.5 0 0 0 9.5 12V8A1.5 1.5 0 0 0 8 6.5m-1.47 6.03a.75.75 0 0 1-1.06-1.06l.72-.72H4a.75.75 0 0 1 0-1.5h2.19l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCopyArrowRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCopyCheckIcon],svg[gravity-ui-copy-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m8 9.076l.085-.107a.751.751 0 1 0-1.171-.937L5.438 9.877L5.03 9.47a.747.747 0 0 0-1.06 0a.75.75 0 0 0 0 1.06l.407.408l.593.592a.75.75 0 0 0 1.116-.061l.522-.654h.001z"></svg:path><svg:path fill-rule="evenodd" d="M12 11a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-1zM4 6.5A1.5 1.5 0 0 0 2.5 8v4A1.5 1.5 0 0 0 4 13.5h4A1.5 1.5 0 0 0 9.5 12V8A1.5 1.5 0 0 0 8 6.5zM13.5 4A1.5 1.5 0 0 0 12 2.5H8A1.5 1.5 0 0 0 6.5 4v1H8a3 3 0 0 1 3 3v1.5h1A1.5 1.5 0 0 0 13.5 8z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GravityUiCopyCheckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCopyCheckXmarkIcon],svg[gravity-ui-copy-check-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 6.5A1.5 1.5 0 0 0 2.5 8v4A1.5 1.5 0 0 0 4 13.5h4A1.5 1.5 0 0 0 9.5 12V8A1.5 1.5 0 0 0 8 6.5zm6-1.56l.97-.97a.75.75 0 0 1 1.06 1.06l-.97.97l.97.97A.75.75 0 0 1 11 8.059V9.5h1A1.5 1.5 0 0 0 13.5 8V4c0-.414-.168-.79-.44-1.06A1.5 1.5 0 0 0 12 2.5H8a1.495 1.495 0 0 0-1.415 1A1.5 1.5 0 0 0 6.5 4v1h1.441A.75.75 0 0 1 8 3.941a.75.75 0 0 1 1.03.028zM8 9.075l.085-.107zm0 0l-1.39 1.738l-.002.001l-.522.654a.75.75 0 0 1-1.116.061l-1-1a.75.75 0 0 1 1.06-1.06l.408.407l1.476-1.845L6.94 8a.75.75 0 0 1 1.144.97M15 8a3 3 0 0 1-3 3h-1v1a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1V4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCopyCheckXmarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCopyChevronRightIcon],svg[gravity-ui-copy-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.5h4A1.5 1.5 0 0 1 13.5 4v4A1.5 1.5 0 0 1 12 9.5h-1V8a3 3 0 0 0-3-3H6.5V4A1.5 1.5 0 0 1 8 2.5m4 8.5h-1v1a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1V4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3M8 6.5H4A1.5 1.5 0 0 0 2.5 8v4A1.5 1.5 0 0 0 4 13.5h4A1.5 1.5 0 0 0 9.5 12V8A1.5 1.5 0 0 0 8 6.5m-1.97 5.78a.75.75 0 0 1-1.06-1.06L6.19 10L4.97 8.78a.75.75 0 0 1 1.06-1.06l1.75 1.75a.75.75 0 0 1 0 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCopyChevronRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCopyMinusIcon],svg[gravity-ui-copy-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.5H8A1.5 1.5 0 0 0 6.5 4v1H8a3 3 0 0 1 3 3v1.5h1A1.5 1.5 0 0 0 13.5 8V4A1.5 1.5 0 0 0 12 2.5M11 11h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3zM8 6.5H4A1.5 1.5 0 0 0 2.5 8v4A1.5 1.5 0 0 0 4 13.5h4A1.5 1.5 0 0 0 9.5 12V8A1.5 1.5 0 0 0 8 6.5M3.75 10a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCopyMinusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCopyPictureIcon],svg[gravity-ui-copy-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.5H8A1.5 1.5 0 0 0 6.5 4v1H8a3 3 0 0 1 3 3v1.5h1A1.5 1.5 0 0 0 13.5 8V4A1.5 1.5 0 0 0 12 2.5M11 11h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3zM4 6.5h4A1.5 1.5 0 0 1 9.5 8v2.041l-.568-.52a1.52 1.52 0 0 0-2.014-.032l-1.719 1.473l-.602-.452a1.52 1.52 0 0 0-1.805-.013l-.292.212V8A1.5 1.5 0 0 1 4 6.5m-1.414 6.001A1.5 1.5 0 0 0 4 13.5h4a1.5 1.5 0 0 0 1.498-1.428L7.92 10.63a.02.02 0 0 0-.026 0l-2.175 1.864l-.457.391l-.481-.36l-1.084-.814a.02.02 0 0 0-.023 0zm3.03-4.04a1.154 1.154 0 1 1-2.308 0a1.154 1.154 0 0 1 2.307 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCopyPictureIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCopyPlusIcon],svg[gravity-ui-copy-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.5H8A1.5 1.5 0 0 0 6.5 4v1H8a3 3 0 0 1 3 3v1.5h1A1.5 1.5 0 0 0 13.5 8V4A1.5 1.5 0 0 0 12 2.5M11 11h1a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3zM8 6.5H4A1.5 1.5 0 0 0 2.5 8v4A1.5 1.5 0 0 0 4 13.5h4A1.5 1.5 0 0 0 9.5 12V8A1.5 1.5 0 0 0 8 6.5M6 7.75a.75.75 0 0 1 .75.75v.75h.75a.75.75 0 0 1 0 1.5h-.75v.75a.75.75 0 0 1-1.5 0v-.75H4.5a.75.75 0 0 1 0-1.5h.75V8.5A.75.75 0 0 1 6 7.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCopyPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCopyTransparentIcon],svg[gravity-ui-copy-transparent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.5h4A1.5 1.5 0 0 1 13.5 4v4A1.5 1.5 0 0 1 12 9.5h-1V8a3 3 0 0 0-3-3H6.5V4A1.5 1.5 0 0 1 8 2.5M5 5V4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1v1a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm4.5 6v1A1.5 1.5 0 0 1 8 13.5H4A1.5 1.5 0 0 1 2.5 12V8A1.5 1.5 0 0 1 4 6.5h1V8a3 3 0 0 0 3 3zm0-1.5H8A1.5 1.5 0 0 1 6.5 8V6.5H8A1.5 1.5 0 0 1 9.5 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCopyTransparentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCopyXmarkIcon],svg[gravity-ui-copy-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 12c0 .414-.168.79-.44 1.06A1.5 1.5 0 0 1 8 13.5H4a1.5 1.5 0 0 1-1.06-.44A1.5 1.5 0 0 1 2.5 12V8c0-.414.168-.79.44-1.06A1.5 1.5 0 0 1 4 6.5h4c.414 0 .79.168 1.06.44c.272.27.44.646.44 1.06zm-1.47-1.03L7.06 10l.97-.97a.75.75 0 0 0-1.06-1.06L6 8.94l-.97-.97a.75.75 0 0 0-1.06 1.06l.97.97l-.97.97a.75.75 0 0 0 1.06 1.06l.97-.97l.97.97a.75.75 0 0 0 1.06-1.06M6.5 5H8a3 3 0 0 1 3 3v1.5h1A1.5 1.5 0 0 0 13.5 8V4A1.5 1.5 0 0 0 12 2.5H8A1.5 1.5 0 0 0 6.5 4zM5 4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1v1a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h1z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCopyXmarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCpuIcon],svg[gravity-ui-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 1.25a.75.75 0 0 0-1.5 0V2.5a3 3 0 0 0-3 3H1.25a.75.75 0 0 0 0 1.5H2.5v2H1.25a.75.75 0 0 0 0 1.5H2.5a3 3 0 0 0 3 3v1.25a.75.75 0 0 0 1.5 0V13.5h2v1.25a.75.75 0 0 0 1.5 0V13.5a3 3 0 0 0 3-3h1.25a.75.75 0 0 0 0-1.5H13.5V7h1.25a.75.75 0 0 0 0-1.5H13.5a3 3 0 0 0-3-3V1.25a.75.75 0 0 0-1.5 0V2.5H7zM10.5 4h-5A1.5 1.5 0 0 0 4 5.5v5A1.5 1.5 0 0 0 5.5 12h5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 10.5 4m0 2.25a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 0 .75.75h3.5a.75.75 0 0 0 .75-.75zM7 7h2v2H7z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCpuIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCpusIcon],svg[gravity-ui-cpus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.75 0a.75.75 0 0 1 .75.75V2h2V.75a.75.75 0 0 1 1.5 0V2a2 2 0 0 1 2 2h1.25a.75.75 0 0 1 0 1.5H14v2h1.25a.75.75 0 0 1 0 1.5H14a2 2 0 0 1-2 2h-1v1a2 2 0 0 1-2 2v1.25a.75.75 0 0 1-1.5 0V14h-2v1.25a.75.75 0 0 1-1.5 0V14a2 2 0 0 1-2-2H.75a.75.75 0 0 1 0-1.5H2v-2H.75a.75.75 0 0 1 0-1.5H2a2 2 0 0 1 2-2h1V4a2 2 0 0 1 2-2V.75A.75.75 0 0 1 7.75 0M6.5 5H9a2 2 0 0 1 2 2v2.5h1a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5zm3 2a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCpusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCreditCardIcon],svg[gravity-ui-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 4h-9A1.5 1.5 0 0 0 2 5.5h12A1.5 1.5 0 0 0 12.5 4M2 10.5V7h12v3.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 10.5m1.5-8a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3zM4.25 9a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCreditCardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCropIcon],svg[gravity-ui-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 0a.75.75 0 0 1 .75.75V2.5h8.25a.75.75 0 0 1 .75.75v8.5h2a.75.75 0 0 1 0 1.5h-2v2a.75.75 0 0 1-1.5 0v-2H3.5a.75.75 0 0 1-.75-.75V4h-2a.75.75 0 0 1 0-1.5h2V.75A.75.75 0 0 1 3.5 0m.75 4v7.75h7.5V4z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCropIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCrownDiamondIcon],svg[gravity-ui-crown-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="m8.427 11.073l1.205-1.205a.4.4 0 0 0 .118-.285a.8.8 0 0 0-.236-.569L8.427 7.927a.603.603 0 0 0-.854 0L6.486 9.014a.8.8 0 0 0-.236.57c0 .106.042.208.118.284l1.205 1.205a.604.604 0 0 0 .854 0"></svg:path><svg:path d="M16 5.796v-.028a1.768 1.768 0 0 0-3.018-1.25l-.76.76l-.024.024l-.374.374l-.415.415a.335.335 0 0 1-.561-.149l-.155-.566l-.139-.51l-.009-.033l-.65-2.386a1.964 1.964 0 0 0-3.79 0l-.65 2.386l-.01.032l-.139.511l-.154.566a.335.335 0 0 1-.56.15l-.416-.416l-.374-.374l-.024-.024l-.76-.76A1.768 1.768 0 0 0 0 5.768v.028q0 .203.046.403l1.3 5.631a1.4 1.4 0 0 0 .778.958a14.02 14.02 0 0 0 11.752 0c.394-.182.681-.535.779-.958l1.299-5.63q.045-.2.046-.404M3.53 7.152c.997.997 2.698.545 3.07-.815l.952-3.495a.464.464 0 0 1 .896 0L9.4 6.337c.37 1.36 2.072 1.812 3.068.815l1.574-1.574a.268.268 0 0 1 .457.19v.028a.3.3 0 0 1-.008.066l-1.288 5.584a12.52 12.52 0 0 1-10.408 0L1.508 5.862a.3.3 0 0 1-.008-.066v-.028a.268.268 0 0 1 .457-.19z"></svg:path></svg:g>`,
})
export class GravityUiCrownDiamondIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCubeIcon],svg[gravity-ui-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 5.475v4.946a1.5 1.5 0 0 1-.973 1.405l-4.777 1.79V7.53zm-.654-1.36a2 2 0 0 0-.175-.103L9.499 2.427a1.5 1.5 0 0 0-1.197-.063l-4.829 1.81q-.12.045-.23.11L7.05 6.185zM2.5 5.59l3.75 1.875v5.984l-2.92-1.46a1.5 1.5 0 0 1-.83-1.342zM1.267 4.343c-.173.38-.267.8-.267 1.236v5.067a3 3 0 0 0 1.658 2.683l3.172 1.586a3 3 0 0 0 2.395.126l4.828-1.811A3 3 0 0 0 15 10.421V5.354a3 3 0 0 0-1.658-2.683L10.17 1.085A3 3 0 0 0 7.775.959L2.947 2.77a3 3 0 0 0-1.48 1.203a.75.75 0 0 0-.2.37" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCubeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCubes3Icon],svg[gravity-ui-cubes-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 2h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1M4 3A2.5 2.5 0 0 1 6.5.5h3A2.5 2.5 0 0 1 12 3v3c0 .356-.074.694-.208 1H13a2.5 2.5 0 0 1 2.5 2.5v3A2.5 2.5 0 0 1 13 15H3a2.5 2.5 0 0 1-2.5-2.5v-3A2.5 2.5 0 0 1 3 7h1.208A2.5 2.5 0 0 1 4 6zm2.25 5.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm3.5 5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1H13a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCubes3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCubes3OverlapIcon],svg[gravity-ui-cubes-3-overlap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 2.5h-3A1.5 1.5 0 0 0 5 4v1h1a3 3 0 0 1 3 3v.5h.5A1.5 1.5 0 0 0 11 7V4a1.5 1.5 0 0 0-1.5-1.5M9 10v1c0 .546-.146 1.059-.401 1.5H13a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 13 6.5h-.5V7a3 3 0 0 1-3 3zm3.5-5V4a3 3 0 0 0-3-3h-3a3 3 0 0 0-3 3v1H3a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zM6 6.5H3A1.5 1.5 0 0 0 1.5 8v3A1.5 1.5 0 0 0 3 12.5h3A1.5 1.5 0 0 0 7.5 11V8A1.5 1.5 0 0 0 6 6.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCubes3OverlapIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCupIcon],svg[gravity-ui-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiCup0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M10.522 5.835c.838-.402.978-.795.978-1.085c0-.272-.123-.634-.83-1.01l-.149-.075C9.667 3.255 8.352 3 6.75 3s-2.916.256-3.772.665C2.14 4.067 2 4.46 2 4.75s.14.683.978 1.085c.856.41 2.171.665 3.772.665s2.916-.256 3.771-.665M6.75 8c1.882 0 3.57-.322 4.715-.966c-.059 1.35-.216 2.595-.634 3.616c-.303.74-.72 1.293-1.296 1.674c-.579.383-1.444.676-2.785.676c-1.34 0-2.206-.293-2.785-.676c-.575-.381-.992-.934-1.296-1.674c-.418-1.021-.575-2.267-.634-3.616C3.18 7.678 4.868 8 6.75 8m6.246-3.388C12.88 2.537 10.128 1.5 6.75 1.5C3.298 1.5.5 2.583.5 4.75C.5 9 .5 14.5 6.75 14.5c3.36 0 4.913-1.589 5.632-3.719q.419-.13.818-.293c.615-.256 1.268-.613 1.79-1.112C15.524 8.865 16 8.12 16 7.158c0-.437-.097-.89-.345-1.304a2.4 2.4 0 0 0-.956-.89c-.563-.293-1.187-.358-1.703-.352m-.003 1.5c-.015.97-.06 1.967-.203 2.92c.963-.432 1.71-1.056 1.71-1.874c0-.808-.656-1.059-1.507-1.046" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiCup0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiCupIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCurlyBracketsIcon],svg[gravity-ui-curly-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.413 3.421A.84.84 0 0 1 4.25 2.5a.75.75 0 0 0 0-1.5a2.34 2.34 0 0 0-2.33 2.563l.199 2.096a.9.9 0 0 1-.677.957l-.139.035a1.39 1.39 0 0 0 0 2.698l.14.035a.9.9 0 0 1 .676.957l-.2 2.096A2.34 2.34 0 0 0 4.25 15a.75.75 0 0 0 0-1.5a.84.84 0 0 1-.837-.921l.2-2.096A2.4 2.4 0 0 0 2.04 8a2.4 2.4 0 0 0 1.571-2.483zm9.175 9.158a.84.84 0 0 1-.838.921a.75.75 0 0 0 0 1.5a2.34 2.34 0 0 0 2.33-2.563l-.199-2.096a.9.9 0 0 1 .677-.957l.139-.035a1.39 1.39 0 0 0 0-2.698l-.14-.035a.9.9 0 0 1-.676-.957l.2-2.096A2.34 2.34 0 0 0 11.75 1a.75.75 0 0 0 0 1.5c.496 0 .884.427.838.921l-.2 2.096A2.4 2.4 0 0 0 13.959 8a2.4 2.4 0 0 0-1.571 2.483z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCurlyBracketsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCurlyBracketsFunctionIcon],svg[gravity-ui-curly-brackets-function-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 2.5a.84.84 0 0 0-.837.921l.2 2.096A2.4 2.4 0 0 1 2.04 8a2.4 2.4 0 0 1 1.571 2.483l-.2 2.096a.84.84 0 0 0 .838.921a.75.75 0 0 1 0 1.5a2.34 2.34 0 0 1-2.33-2.563l.199-2.096a.9.9 0 0 0-.677-.957l-.139-.035a1.39 1.39 0 0 1 0-2.698l.14-.035a.9.9 0 0 0 .676-.957l-.2-2.096A2.34 2.34 0 0 1 4.25 1a.75.75 0 0 1 0 1.5m4.805 2.639a.78.78 0 0 1 .989-.668a.75.75 0 1 0 .412-1.442a2.28 2.28 0 0 0-2.892 1.953L7.456 6H6.5a.75.75 0 0 0 0 1.5h.798l-.353 3.361a.78.78 0 0 1-.989.668a.75.75 0 1 0-.412 1.442a2.28 2.28 0 0 0 2.892-1.953l.37-3.518h.944a.75.75 0 0 0 0-1.5h-.785zm3.533 7.44a.84.84 0 0 1-.838.921a.75.75 0 0 0 0 1.5a2.34 2.34 0 0 0 2.33-2.563l-.199-2.096a.9.9 0 0 1 .677-.957l.139-.035a1.39 1.39 0 0 0 0-2.698l-.14-.035a.9.9 0 0 1-.676-.957l.2-2.096A2.34 2.34 0 0 0 11.75 1a.75.75 0 0 0 0 1.5c.496 0 .884.427.838.921l-.2 2.096A2.4 2.4 0 0 0 13.959 8a2.4 2.4 0 0 0-1.571 2.483z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCurlyBracketsFunctionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiCurlyBracketsLockIcon],svg[gravity-ui-curly-brackets-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.413 3.421A.84.84 0 0 1 4.25 2.5a.75.75 0 0 0 0-1.5a2.34 2.34 0 0 0-2.33 2.563l.199 2.096a.9.9 0 0 1-.677.957l-.139.035a1.39 1.39 0 0 0 0 2.698l.14.035a.9.9 0 0 1 .676.957l-.2 2.096A2.34 2.34 0 0 0 4.25 15a.75.75 0 0 0 0-1.5a.84.84 0 0 1-.837-.921l.2-2.096A2.4 2.4 0 0 0 2.04 8a2.4 2.4 0 0 0 1.571-2.483zm9.175 9.158a.84.84 0 0 1-.838.921a.75.75 0 0 0 0 1.5a2.34 2.34 0 0 0 2.33-2.563l-.199-2.096a.9.9 0 0 1 .677-.957l.139-.035a1.39 1.39 0 0 0 0-2.698l-.14-.035a.9.9 0 0 1-.676-.957l.2-2.096A2.34 2.34 0 0 0 11.75 1a.75.75 0 0 0 0 1.5c.496 0 .884.427.838.921l-.2 2.096A2.4 2.4 0 0 0 13.959 8a2.4 2.4 0 0 0-1.571 2.483zM6 8v1.5h4V8zm-.1-1.5a1.4 1.4 0 0 0-1.4 1.4v1.7A1.4 1.4 0 0 0 5.9 11h4.2a1.4 1.4 0 0 0 1.4-1.4V7.9a1.4 1.4 0 0 0-1.4-1.4H10V6a2 2 0 1 0-4 0v.5zm1.6 0h1V6a.5.5 0 0 0-1 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCurlyBracketsLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDatabaseIcon],svg[gravity-ui-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.615 4.888c.814-.375.885-.714.885-.888s-.071-.513-.885-.888S9.538 2.5 8 2.5s-2.799.237-3.615.612C3.57 3.487 3.5 3.826 3.5 4s.071.513.885.888S6.462 5.5 8 5.5s2.799-.237 3.615-.612m.885 1.235C11.4 6.708 9.792 7 8 7s-3.4-.292-4.5-.877V8c0 .174.071.513.885.888S6.462 9.5 8 9.5s2.799-.237 3.615-.612c.814-.375.885-.714.885-.888zm0 4C11.4 10.708 9.792 11 8 11s-3.4-.293-4.5-.877V12c0 .174.071.513.885.887c.816.377 2.077.613 3.615.613s2.799-.236 3.615-.613c.814-.374.885-.713.885-.887zM14 4c0-2-2.686-3-6-3S2 2 2 4v8c0 2 2.686 3 6 3s6-1 6-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDatabaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDatabaseArrowRightIcon],svg[gravity-ui-database-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 4c0 .174-.071.513-.885.888S8.538 5.5 7 5.5s-2.799-.237-3.615-.612C2.57 4.513 2.5 4.174 2.5 4s.071-.513.885-.888S5.462 2.5 7 2.5s2.799.237 3.615.612c.814.375.885.714.885.888M3.385 8.888C2.578 8.516 2.5 8.179 2.5 8V6.123C3.6 6.708 5.208 7 7 7s3.4-.292 4.5-.877V7.25a.75.75 0 0 0 1.5 0V4c0-2-2.686-3-6-3S1 2 1 4v8c0 .995.665 1.747 1.757 2.25l.314-.681l-.314.681c1.086.5 2.586.75 4.243.75q.132 0 .263-.002a.75.75 0 0 0-.025-1.5L7 13.5c-1.538 0-2.799-.236-3.615-.613c-.807-.371-.885-.708-.885-.887v-1.877q.125.066.257.127c1.086.5 2.586.75 4.243.75q.134 0 .266-.002a.75.75 0 1 0-.024-1.5L7 9.5c-1.538 0-2.799-.237-3.615-.612M13.78 14.53a.75.75 0 1 1-1.06-1.06l.72-.72H10a.75.75 0 0 1 0-1.5h3.44l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDatabaseArrowRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDatabaseFillIcon],svg[gravity-ui-database-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 8.5c1.776 0 3.515-.263 4.87-.888A5.6 5.6 0 0 0 14 6.931V8c0 2-2.686 3-6 3s-6-1-6-3V6.93c.35.275.736.501 1.13.682C4.485 8.237 6.224 8.5 8 8.5M14 4c0 2-2.686 3-6 3S2 6 2 4c0-.336.076-.643.217-.923C2.92 1.692 5.242 1 8 1c.828 0 1.618.063 2.335.188C12.49 1.563 14 2.5 14 4M8 15c3.314 0 6-1 6-3v-1.07c-.35.275-.736.501-1.13.683c-1.355.624-3.094.887-4.87.887s-3.515-.264-4.87-.887A5.7 5.7 0 0 1 2 10.93V12c0 2 2.686 3 6 3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDatabaseFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDatabaseMagnifierIcon],svg[gravity-ui-database-magnifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.615 4.888c.814-.375.885-.714.885-.888s-.071-.513-.885-.888S9.538 2.5 8 2.5s-2.799.237-3.615.612C3.57 3.487 3.5 3.826 3.5 4s.071.513.885.888S6.462 5.5 8 5.5s2.799-.237 3.615-.612m.885 1.235C11.4 6.708 9.792 7 8 7s-3.4-.292-4.5-.877V8c0 .174.071.513.885.888S6.462 9.5 8 9.5h.04c-.187.463-.29.968-.29 1.498c-1.691-.026-3.202-.318-4.25-.875V12c0 .174.071.513.885.887c.816.377 2.077.613 3.615.613q.317 0 .617-.013a4 4 0 0 0 1.848 1.302C9.713 14.93 8.879 15 8 15c-3.314 0-6-1-6-3V4c0-2 2.686-3 6-3s6 1 6 3v3.692a4 4 0 0 0-1.5-.622zm-.75 6.377a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1.5c.556 0 1.077-.152 1.524-.415l1.446 1.445a.75.75 0 1 0 1.06-1.06l-1.445-1.446A3 3 0 1 0 11.75 14" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDatabaseMagnifierIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDatabasesIcon],svg[gravity-ui-databases-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.499 10.04c.492-.252.501-.446.501-.54V5.462c-.796.359-1.848.538-3 .538a9.5 9.5 0 0 1-1.606-.13q.106.293.106.63v3.864c.428.086.932.136 1.5.136c1.107 0 1.971-.19 2.499-.46M8 8.462V12.5c0 .094-.009.288-.501.54c-.528.27-1.392.46-2.499.46s-1.971-.19-2.499-.46C2.01 12.788 2 12.594 2 12.5V8.462C2.796 8.821 3.847 9 5 9s2.204-.18 3-.538M8 6.5c0-.093-.009-.288-.501-.54C6.97 5.69 6.107 5.5 5 5.5s-1.971.19-2.499.46C2.01 6.212 2 6.407 2 6.5s.009.288.501.54c.528.27 1.392.46 2.499.46s1.971-.19 2.499-.46C7.99 6.788 8 6.593 8 6.5m-7.5 0C.5 4.833 2.515 4 5 4c.526 0 1.03.037 1.5.112V3.5C6.5 1.833 8.515 1 11 1s4.5.833 4.5 2.5v6c0 1.667-2.015 2.5-4.5 2.5a9.6 9.6 0 0 1-1.5-.112v.612C9.5 14.167 7.485 15 5 15S.5 14.167.5 12.5zm7.5-3c0 .094.009.288.501.54c.528.27 1.392.46 2.499.46s1.971-.19 2.499-.46c.492-.252.501-.446.501-.54s-.009-.288-.501-.54C12.97 2.69 12.107 2.5 11 2.5s-1.971.19-2.499.46C8.01 3.212 8 3.406 8 3.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDatabasesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDatabasesFillIcon],svg[gravity-ui-databases-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 12c2.485 0 4.5-.833 4.5-2.5V6.322a5 5 0 0 1-.635.388c-1.1.564-2.487.79-3.865.79zm0-6h-.035c-.186-1.3-1.089-2.193-2.1-2.71c-.64-.328-1.376-.541-2.15-.663C7.296 1.542 8.995 1 11 1c2.485 0 4.5.833 4.5 2.5S13.485 6 11 6m-1.5 6.5C9.5 14.167 7.485 15 5 15S.5 14.167.5 12.5V9.322q.305.22.635.388c1.1.564 2.487.79 3.865.79s2.764-.226 3.865-.79q.33-.168.635-.388zM5 9c2.485 0 4.5-.833 4.5-2.5S7.485 4 5 4S.5 4.833.5 6.5S2.515 9 5 9" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDatabasesFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDeleteIcon],svg[gravity-ui-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.442 3.5H12.5A1.5 1.5 0 0 1 14 5v6a1.5 1.5 0 0 1-1.5 1.5H5.442a1.5 1.5 0 0 1-1.171-.563L1.796 8.844a1.35 1.35 0 0 1 0-1.688l2.475-3.093A1.5 1.5 0 0 1 5.44 3.5m-2.343-.374A3 3 0 0 1 5.442 2H12.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.442a3 3 0 0 1-2.343-1.126L.625 9.781a2.85 2.85 0 0 1 0-3.562zM7.28 5.47a.75.75 0 0 0-1.06 1.06L7.69 8L6.22 9.47a.75.75 0 1 0 1.06 1.06l1.47-1.47l1.47 1.47a.75.75 0 1 0 1.06-1.06L9.81 8l1.47-1.47a.75.75 0 0 0-1.06-1.06L8.75 6.94z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDeleteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDiamondIcon],svg[gravity-ui-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiDiamond0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M14.01 6.94L9.06 1.99a1.5 1.5 0 0 0-2.12 0L1.99 6.94a1.5 1.5 0 0 0 0 2.12l4.95 4.95a1.5 1.5 0 0 0 2.12 0l4.95-4.95a1.5 1.5 0 0 0 0-2.12M10.121.928a3 3 0 0 0-4.242 0l-4.95 4.95a3 3 0 0 0 0 4.242l4.95 4.95a3 3 0 0 0 4.242 0l4.95-4.95a3 3 0 0 0 0-4.242z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiDiamond0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiDiamondIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDiamondExclamationIcon],svg[gravity-ui-diamond-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.01 6.94L9.06 1.99a1.5 1.5 0 0 0-2.12 0L1.99 6.94a1.5 1.5 0 0 0 0 2.12l4.95 4.95a1.5 1.5 0 0 0 2.12 0l4.95-4.95a1.5 1.5 0 0 0 0-2.12M10.121.928a3 3 0 0 0-4.242 0l-4.95 4.95a3 3 0 0 0 0 4.242l4.95 4.95a3 3 0 0 0 4.242 0l4.95-4.95a3 3 0 0 0 0-4.242zM9 10.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M8.75 5a.75.75 0 1 0-1.5 0v2.5a.75.75 0 1 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDiamondExclamationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDiamondFillIcon],svg[gravity-ui-diamond-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiDiamondFill0)"><svg:path fill="currentColor" d="M5.879.929a3 3 0 0 1 4.242 0l4.95 4.95a3 3 0 0 1 0 4.242l-4.95 4.95a3 3 0 0 1-4.242 0l-4.95-4.95a3 3 0 0 1 0-4.242z"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiDiamondFill0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiDiamondFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDice1Icon],svg[gravity-ui-dice-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zM8 9.15a1.15 1.15 0 1 0 0-2.3a1.15 1.15 0 0 0 0 2.3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDice1Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDice2Icon],svg[gravity-ui-dice-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3m-7-1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zM11.15 6a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0M6 11.15a1.15 1.15 0 1 0 0-2.3a1.15 1.15 0 0 0 0 2.3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDice2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDice3Icon],svg[gravity-ui-dice-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm9 2.15a1.15 1.15 0 1 0 0-2.3a1.15 1.15 0 0 0 0 2.3M9.15 8a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0M5.5 11.65a1.15 1.15 0 1 0 0-2.3a1.15 1.15 0 0 0 0 2.3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDice3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDice4Icon],svg[gravity-ui-dice-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3m-7-1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zM11.15 6a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0M6 11.15a1.15 1.15 0 1 0 0-2.3a1.15 1.15 0 0 0 0 2.3M11.15 10a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0M6 7.15a1.15 1.15 0 1 0 0-2.3a1.15 1.15 0 0 0 0 2.3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDice4Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDice5Icon],svg[gravity-ui-dice-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm9 2.15a1.15 1.15 0 1 0 0-2.3a1.15 1.15 0 0 0 0 2.3M9.15 8a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0M5.5 11.65a1.15 1.15 0 1 0 0-2.3a1.15 1.15 0 0 0 0 2.3m6.15-1.15a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0M5.5 6.65a1.15 1.15 0 1 0 0-2.3a1.15 1.15 0 0 0 0 2.3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDice5Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDice6Icon],svg[gravity-ui-dice-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3m-7-1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zM11.65 5a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0M5.5 12.15a1.15 1.15 0 1 0 0-2.3a1.15 1.15 0 0 0 0 2.3M11.65 11a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0M5.5 6.15a1.15 1.15 0 1 0 0-2.3a1.15 1.15 0 0 0 0 2.3M11.65 8a1.15 1.15 0 1 1-2.3 0a1.15 1.15 0 0 1 2.3 0M5.5 9.15a1.15 1.15 0 1 0 0-2.3a1.15 1.15 0 0 0 0 2.3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDice6Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDisplayIcon],svg[gravity-ui-display-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3H4a1.5 1.5 0 0 0-1.5 1.5v4A1.5 1.5 0 0 0 4 10h8a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 12 3M4 1.5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h3.25V13h-2.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-2.5v-1.5H12a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDisplayIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDisplayPulseIcon],svg[gravity-ui-display-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3h8a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 12 10H4a1.5 1.5 0 0 1-1.5-1.5v-1h2.25a.75.75 0 0 0 .564-.256l1.057-1.208L7.85 8.622A.75.75 0 0 0 9.1 8.7L10.375 7h1.375a.75.75 0 0 0 0-1.5H10a.75.75 0 0 0-.6.3l-.815 1.087l-1.434-2.51a.75.75 0 0 0-1.215-.12L4.41 6H2.5V4.5A1.5 1.5 0 0 1 4 3M1 6.75V8.5a3 3 0 0 0 3 3h3.25V13h-2.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-2.5v-1.5H12a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDisplayPulseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDots9Icon],svg[gravity-ui-dots-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M3 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M9.5 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M13 4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M4.5 3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M8 14.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m6.5-1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M3 14.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDots9Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiDropletIcon],svg[gravity-ui-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 9a4.5 4.5 0 1 1-9 0c0-1.638.761-3.242 1.789-4.64a16.6 16.6 0 0 1 2.714-2.847c.591.48 1.722 1.483 2.707 2.817c1.024 1.389 1.79 3 1.79 4.67M14 9A6 6 0 0 1 2 9C2 4.819 5.846 1.337 7.106.309C7.359.102 7.676 0 8.003 0c.323 0 .637.1.888.302C10.148 1.312 14 4.759 14 9m-6 3.25a.75.75 0 0 1 0-1.5A1.75 1.75 0 0 0 9.75 9a.75.75 0 0 1 1.5 0A3.25 3.25 0 0 1 8 12.25" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiDropletIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiEarIcon],svg[gravity-ui-ear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 12.372V5.75C4 3.419 5.934 1.5 8.298 1.5c2.31 0 4.202 1.877 4.202 4.156v.459a4.77 4.77 0 0 1-1.667 3.624a11.3 11.3 0 0 0-2.486 3.028l-.364.648A2.128 2.128 0 0 1 4 12.372M2.5 5.75v6.622a3.628 3.628 0 0 0 6.79 1.779l.365-.648a9.8 9.8 0 0 1 2.154-2.625A6.27 6.27 0 0 0 14 6.115v-.46C14 2.533 11.421 0 8.298 0C5.122 0 2.5 2.574 2.5 5.75m4.526-.162a1.242 1.242 0 0 1 2.474.154v.508a.75.75 0 0 0 1.5 0v-.508a2.742 2.742 0 0 0-5.462-.34l-.282 2.255a.75.75 0 0 0 .827.838l.85-.094a.511.511 0 0 1 .383.901l-1.046.872a.75.75 0 0 0 .96 1.152l1.046-.872a2.011 2.011 0 0 0-1.414-3.552z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiEarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiEllipsisIcon],svg[gravity-ui-ellipsis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M9.5 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiEllipsisIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiEllipsisVerticalIcon],svg[gravity-ui-ellipsis-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M9.5 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiEllipsisVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiEnvelopeIcon],svg[gravity-ui-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 4h9c.25 0 .485.06.692.169L8.75 7.5a1.25 1.25 0 0 1-1.5 0L2.808 4.169C3.015 4.06 3.251 4 3.5 4M2.001 5.438L2 5.5v5A1.5 1.5 0 0 0 3.5 12h9a1.5 1.5 0 0 0 1.5-1.5v-5l-.001-.062L9.65 8.7a2.75 2.75 0 0 1-3.3 0zM.5 5.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiEnvelopeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiEnvelopeOpenIcon],svg[gravity-ui-envelope-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 6.498V11.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V6.498l.001-.06L6.35 9.7a2.75 2.75 0 0 0 3.3 0l4.349-3.262zm-.806-1.33L8.74 2.642a1.5 1.5 0 0 0-1.48 0L2.806 5.167L7.25 8.5a1.25 1.25 0 0 0 1.5 0zM.5 6.497a3 3 0 0 1 1.521-2.61l4.5-2.55a3 3 0 0 1 2.958 0l4.5 2.55a3 3 0 0 1 1.521 2.61V11.5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiEnvelopeOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiEnvelopeOpenXmarkIcon],svg[gravity-ui-envelope-open-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 6.498V11.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V6.498c0-.54.29-1.038.76-1.305l4.5-2.55a1.5 1.5 0 0 1 1.48 0l4.5 2.55c.47.267.76.765.76 1.305m-13.5 0a3 3 0 0 1 1.521-2.61l4.5-2.55a3 3 0 0 1 2.958 0l4.5 2.55a3 3 0 0 1 1.521 2.61V11.5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3zm6.03-.528a.75.75 0 0 0-1.06 1.06L6.94 8.5L5.47 9.97a.75.75 0 0 0 1.06 1.06L8 9.56l1.47 1.47a.75.75 0 1 0 1.06-1.06L9.06 8.5l1.47-1.47a.75.75 0 1 0-1.06-1.06L8 7.44z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiEnvelopeOpenXmarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiEqualIcon],svg[gravity-ui-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 11a.75.75 0 0 0 0-1.5h-11a.75.75 0 0 0 0 1.5zm0-4.5a.75.75 0 0 0 0-1.5h-11a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiEqualIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiEraserIcon],svg[gravity-ui-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.646 3.268l2.586 2.586a.914.914 0 0 1 0 1.292L8.72 10.66L4.84 6.78l3.513-3.512a.914.914 0 0 1 1.292 0M3.78 7.84L1.768 9.854a.914.914 0 0 0 0 1.292L3.12 12.5h3.76l.78-.78zm9.513.366L9 12.5h6.25a.75.75 0 0 1 0 1.5H2.5L.707 12.207a2.414 2.414 0 0 1 0-3.414l6.586-6.586a2.414 2.414 0 0 1 3.414 0l2.586 2.586a2.414 2.414 0 0 1 0 3.414" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiEraserIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiExclamationShapeIcon],svg[gravity-ui-exclamation-shape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiExclamationShape0)"><svg:path fill="currentColor" fill-rule="evenodd" d="m9.41 1.762l-.325 6.5a.25.25 0 0 1-.25.238h-1.67a.25.25 0 0 1-.25-.238l-.325-6.5a.25.25 0 0 1 .25-.262h2.32a.25.25 0 0 1 .25.262m1.173 6.575l.325-6.5A1.75 1.75 0 0 0 9.16 0H6.84a1.75 1.75 0 0 0-1.748 1.837l.325 6.5A1.75 1.75 0 0 0 7.165 10h1.67a1.75 1.75 0 0 0 1.748-1.663M8 12.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m2.5 1a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiExclamationShape0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiExclamationShapeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiExclamationShapeFillIcon],svg[gravity-ui-exclamation-shape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiExclamationShapeFill0)"><svg:path fill="currentColor" fill-rule="evenodd" d="m10.921 1.575l-.35 7A1.5 1.5 0 0 1 9.073 10H6.927a1.5 1.5 0 0 1-1.498-1.425l-.35-7A1.5 1.5 0 0 1 6.577 0h2.846a1.5 1.5 0 0 1 1.498 1.575M8 11a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiExclamationShapeFill0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiExclamationShapeFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiEyeIcon],svg[gravity-ui-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.87 8.515L1.641 8l.229-.515a6.708 6.708 0 0 1 12.26 0l.228.515l-.229.515a6.708 6.708 0 0 1-12.259 0M.5 6.876l-.26.585a1.33 1.33 0 0 0 0 1.079l.26.584a8.208 8.208 0 0 0 15 0l.26-.584a1.33 1.33 0 0 0 0-1.08l-.26-.584a8.208 8.208 0 0 0-15 0M9.5 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M11 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiEyeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiEyeSlashIcon],svg[gravity-ui-eye-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.03 1.97a.75.75 0 0 0-1.06 1.06l.83.83A8.2 8.2 0 0 0 .5 6.876l-.26.585a1.33 1.33 0 0 0 0 1.079l.26.585a8.21 8.21 0 0 0 11.434 3.87l1.036 1.035a.75.75 0 1 0 1.06-1.06zm7.788 9.908l-1.294-1.293a3 3 0 0 1-4.109-4.109L3.866 4.927A6.7 6.7 0 0 0 1.87 7.486L1.641 8l.23.515a6.71 6.71 0 0 0 8.947 3.363M6.55 7.611A1.502 1.502 0 0 0 8.389 9.45zm1.658-2.604l2.784 2.784a3 3 0 0 0-2.784-2.784m5.92 3.508a6.7 6.7 0 0 1-.915 1.496l1.065 1.066A8.2 8.2 0 0 0 15.5 9.125l.26-.585a1.33 1.33 0 0 0 0-1.08l-.26-.584A8.21 8.21 0 0 0 5.572 2.37L6.81 3.61a6.71 6.71 0 0 1 7.32 3.877l.228.514z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiEyeSlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiEyesLookLeftIcon],svg[gravity-ui-eyes-look-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 8c0 1.75-.335 3.094-.816 3.944C4.721 12.764 4.217 13 3.75 13s-.97-.237-1.434-1.056c-.272-.48-.496-1.116-.64-1.895c.283.289.647.451 1.074.451C3.826 10.5 4.5 9.47 4.5 8s-.674-2.5-1.75-2.5a1.47 1.47 0 0 0-1.075.45c.145-.778.37-1.415.64-1.894C2.78 3.236 3.284 3 3.75 3s.97.237 1.434 1.056C5.665 4.906 6 6.25 6 8m1.5 0c0 3.822-1.445 6.5-3.75 6.5S0 11.822 0 8s1.445-6.5 3.75-6.5S7.5 4.178 7.5 8m7 0c0 1.75-.335 3.094-.816 3.944c-.463.82-.967 1.056-1.434 1.056s-.97-.237-1.434-1.056c-.272-.48-.496-1.116-.64-1.895c.283.289.647.451 1.074.451C12.326 10.5 13 9.47 13 8s-.674-2.5-1.75-2.5a1.47 1.47 0 0 0-1.075.45c.145-.778.37-1.415.64-1.894C11.28 3.236 11.784 3 12.25 3s.97.237 1.434 1.056c.481.85.816 2.195.816 3.944M16 8c0 3.822-1.445 6.5-3.75 6.5S8.5 11.822 8.5 8s1.445-6.5 3.75-6.5S16 4.178 16 8" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiEyesLookLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiEyesLookRightIcon],svg[gravity-ui-eyes-look-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.75 5.5c.427 0 .791.163 1.075.45c-.145-.778-.37-1.415-.64-1.894C4.72 3.236 4.216 3 3.75 3s-.97.237-1.434 1.056C1.835 4.906 1.5 6.25 1.5 8s.335 3.094.816 3.944c.463.82.967 1.056 1.434 1.056s.97-.237 1.434-1.056c.272-.48.496-1.116.64-1.895a1.47 1.47 0 0 1-1.074.451C3.674 10.5 3 9.47 3 8s.674-2.5 1.75-2.5M7.5 8c0 3.822-1.445 6.5-3.75 6.5S0 11.822 0 8s1.445-6.5 3.75-6.5S7.5 4.178 7.5 8m6.825 2.05c-.145.778-.37 1.415-.64 1.894c-.464.82-.968 1.056-1.435 1.056s-.97-.237-1.434-1.056C10.335 11.094 10 9.75 10 8s.335-3.094.816-3.944C11.279 3.236 11.783 3 12.25 3s.97.237 1.434 1.056c.272.48.496 1.116.64 1.895A1.47 1.47 0 0 0 13.25 5.5c-1.076 0-1.75 1.03-1.75 2.5s.674 2.5 1.75 2.5a1.47 1.47 0 0 0 1.075-.45M16 8c0 3.822-1.445 6.5-3.75 6.5S8.5 11.822 8.5 8s1.445-6.5 3.75-6.5S16 4.178 16 8" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiEyesLookRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFaceAlienIcon],svg[gravity-ui-face-alien-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.072 11.749C12.447 10.539 13.5 8.915 13.5 7c0-1.376-.48-2.45-1.313-3.195C11.34 3.047 9.98 2.5 8 2.5s-3.34.547-4.187 1.305C2.98 4.55 2.5 5.625 2.5 7c0 1.915 1.053 3.539 2.428 4.749a9.5 9.5 0 0 0 2.01 1.36a5.5 5.5 0 0 0 .778.32c.17.054.262.067.284.07c.022-.003.113-.016.284-.07a5.5 5.5 0 0 0 .778-.32a9.5 9.5 0 0 0 2.01-1.36M8 15c1.5 0 7-3 7-8c0-3.5-2.5-6-7-6S1 3.5 1 7c0 5 5.5 8 7 8m1.25-5a.75.75 0 0 1-.75-.75c0-.842.345-1.553.922-2.041C9.986 6.73 10.73 6.5 11.5 6.5a.75.75 0 0 1 .75.75c0 .842-.345 1.553-.922 2.041c-.564.478-1.308.709-2.078.709M7.5 9.25a.75.75 0 0 1-.75.75c-.77 0-1.514-.231-2.078-.709c-.577-.488-.922-1.199-.922-2.041a.75.75 0 0 1 .75-.75c.77 0 1.514.231 2.078.709c.577.488.922 1.199.922 2.041" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFaceAlienIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFaceAngryIcon],svg[gravity-ui-face-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-6 3.5A.75.75 0 0 0 9 10H7a.75.75 0 0 0 0 1.5zm1.5-2a.75.75 0 0 1-.75-.75V7.71l-.068.018a.75.75 0 0 1-.364-1.456l2-.5a.75.75 0 0 1 .364 1.456l-.432.108V8.75a.75.75 0 0 1-.75.75m-5 0a.75.75 0 0 1-.75-.75V7.336l-.432-.108a.75.75 0 0 1 .364-1.456l2 .5a.75.75 0 0 1-.364 1.456L6.25 7.71v1.04a.75.75 0 0 1-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFaceAngryIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFaceFunIcon],svg[gravity-ui-face-fun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M4.75 9.25a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75c0 .686-.43 1.319-.974 1.746c-.57.447-1.358.754-2.276.754s-1.706-.307-2.276-.754c-.543-.427-.974-1.06-.974-1.746M10 7.5a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-.75.75m-4.75-.75a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFaceFunIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFaceNeutralIcon],svg[gravity-ui-face-neutral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-5 3a.75.75 0 0 0 0-1.5H6A.75.75 0 0 0 6 11zm0-3a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1A.75.75 0 0 1 10 8m-4.75-.75a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFaceNeutralIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFaceNeutralDashedIcon],svg[gravity-ui-face-neutral-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1q-.558.001-1.094.085a.75.75 0 0 0 .232 1.482a5.6 5.6 0 0 1 1.724 0a.75.75 0 0 0 .232-1.482A7 7 0 0 0 8 1M4.767 3.55a.75.75 0 1 0-.882-1.213a7 7 0 0 0-1.548 1.548a.75.75 0 0 0 1.213.882c.34-.466.75-.878 1.217-1.217m7.348-1.213a.75.75 0 1 0-.883 1.213c.467.34.879.75 1.218 1.217a.75.75 0 0 0 1.213-.882a7 7 0 0 0-1.548-1.548M2.567 7.138a.75.75 0 0 0-1.482-.232a7 7 0 0 0 0 2.188a.75.75 0 0 0 1.482-.232a5.6 5.6 0 0 1 0-1.724m12.348-.232a.75.75 0 1 0-1.482.232a5.5 5.5 0 0 1 0 1.724a.75.75 0 0 0 1.482.232a7 7 0 0 0 0-2.188M3.55 11.233a.75.75 0 1 0-1.213.882a7 7 0 0 0 1.548 1.548a.75.75 0 0 0 .882-1.213a5.5 5.5 0 0 1-1.217-1.217m10.113.882a.75.75 0 0 0-1.213-.883a5.5 5.5 0 0 1-1.217 1.218a.75.75 0 0 0 .882 1.213a7 7 0 0 0 1.548-1.548m-6.525 1.318a.75.75 0 0 0-.232 1.482a7 7 0 0 0 2.188 0a.75.75 0 1 0-.232-1.482a5.5 5.5 0 0 1-1.724 0M10 11a.75.75 0 0 0 0-1.5H6A.75.75 0 0 0 6 11zm0-3a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1A.75.75 0 0 1 10 8m-4.75-.75a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFaceNeutralDashedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFaceRobotIcon],svg[gravity-ui-face-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.75.75a.75.75 0 0 0-1.5 0V2H5a3 3 0 0 0-3 3A2.19 2.19 0 0 0 .5 7.081V9.42c0 .944.604 1.782 1.5 2.081a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3a2.19 2.19 0 0 0 1.5-2.081V7.08c0-.943-.604-1.78-1.5-2.08a3 3 0 0 0-3-3H8.75zM3.5 10.419V11.5A1.5 1.5 0 0 0 5 13h6a1.5 1.5 0 0 0 1.5-1.5v-1.081l1.026-.342A.69.69 0 0 0 14 9.419V7.08a.69.69 0 0 0-.474-.658L12.5 6.081V5A1.5 1.5 0 0 0 11 3.5H5A1.5 1.5 0 0 0 3.5 5v1.081l-1.026.342A.69.69 0 0 0 2 7.081V9.42c0 .298.191.564.474.658zM9.75 8A.75.75 0 0 1 9 7.25v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-.75.75m.75 2.25a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75m-5-3a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFaceRobotIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFaceSadIcon],svg[gravity-ui-face-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-5.67 2.835a.75.75 0 1 0 1.34-.67C10.268 9.356 9.219 8.75 8 8.75s-2.267.606-2.67 1.415a.75.75 0 1 0 1.34.67c.097-.191.548-.585 1.33-.585s1.233.394 1.33.585M10 8a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1A.75.75 0 0 1 10 8m-4.75-.75a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFaceSadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFaceSmileIcon],svg[gravity-ui-face-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.67 9.665a.75.75 0 0 0-1.34.67c.403.809 1.452 1.415 2.67 1.415s2.267-.606 2.67-1.415a.75.75 0 1 0-1.34-.67c-.097.191-.548.585-1.33.585s-1.233-.394-1.33-.585M10 8a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1A.75.75 0 0 1 10 8m-4.75-.75a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFaceSmileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFaceSurpriseIcon],svg[gravity-ui-face-surprise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-5.75-.75a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-1.5 0zM6 8a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1A.75.75 0 0 1 6 8m2 4c1.37 0 2.5-.5 2.5-1.5S9.5 9 8 9s-2.5.5-2.5 1.5S6.5 12 8 12" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFaceSurpriseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFactoryIcon],svg[gravity-ui-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 5.5v2.803l2.332-1.555L13.5 5.636V12.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h1.5A.5.5 0 0 1 5 3v5.446l2.382-1.733L9.5 5.173zM6.5 3v2.5L8 4.41l.903-.657A1.32 1.32 0 0 1 11 4.82v.68l1.02-.68l.463-.309l.429-.285A1.343 1.343 0 0 1 15 5.343V12.5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1.5a2 2 0 0 1 2 2m-1.75 7a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFactoryIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileIcon],svg[gravity-ui-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 13.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2V5a3 3 0 0 0 3 3h2.5v4a1.5 1.5 0 0 1-1.5 1.5m1.303-7a1.5 1.5 0 0 0-.242-.318L8.818 2.939a1.5 1.5 0 0 0-.318-.242V5A1.5 1.5 0 0 0 10 6.5zm.818-1.379A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileArrowDownIcon],svg[gravity-ui-file-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 12a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06zm.621-6.879A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879zM5.47 9.781A.75.75 0 0 1 6.53 8.72l.72.72V7.25a.75.75 0 0 1 1.5 0v2.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileArrowDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileArrowLeftIcon],svg[gravity-ui-file-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 13.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06V12a1.5 1.5 0 0 1-1.5 1.5m2.121-8.379A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879zm-5.651 6.66a.75.75 0 0 0 1.06-1.061L7.81 10H10a.75.75 0 0 0 0-1.5H7.81l.72-.72a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileArrowLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileArrowRightIcon],svg[gravity-ui-file-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 13.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06V12a1.5 1.5 0 0 1-1.5 1.5m2.121-8.379A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879zm-4.59 6.66A.75.75 0 0 1 7.47 10.72l.72-.72H6a.75.75 0 0 1 0-1.5h2.19l-.72-.72a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileArrowRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileArrowRightOutIcon],svg[gravity-ui-file-arrow-right-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 7.14a3 3 0 0 0-.758-1.992L8.395 2.507A3 3 0 0 0 6.153 1.5H4a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h6.25a.75.75 0 0 0 0-1.5H4a1.5 1.5 0 0 1-1.5-1.5v-7A1.5 1.5 0 0 1 4 3h1.5v2a3 3 0 0 0 3 3h2.25a.75.75 0 0 0 .75-.75zM9.856 6.5H8.5A1.5 1.5 0 0 1 7 5V3.262q.15.103.274.241L9.62 6.144a1.5 1.5 0 0 1 .235.356M13.44 11l-.72.72a.75.75 0 1 0 1.061 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 1 0-1.06 1.06l.72.72H6.75a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileArrowRightOutIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileArrowUpIcon],svg[gravity-ui-file-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 12a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06zm.621-6.879A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879zM5.47 8.72a.75.75 0 0 0 1.06 1.06l.72-.72v2.19a.75.75 0 0 0 1.5 0V9.06l.72.72a.75.75 0 0 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileArrowUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileCheckIcon],svg[gravity-ui-file-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 13.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06V12a1.5 1.5 0 0 1-1.5 1.5m2.121-8.379A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879zM10.85 7.65a.75.75 0 1 0-1.2-.9L7.469 9.658L6.28 8.47a.75.75 0 0 0-1.06 1.06l1.8 1.8a.75.75 0 0 0 1.13-.08z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileCheckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileCodeIcon],svg[gravity-ui-file-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 13.5h6a1.5 1.5 0 0 0 1.5-1.5V7.243a1.5 1.5 0 0 0-.44-1.061L8.819 2.939a1.5 1.5 0 0 0-1.06-.439H5A1.5 1.5 0 0 0 3.5 4v8A1.5 1.5 0 0 0 5 13.5m9-6.257a3 3 0 0 0-.879-2.122L9.88 1.88A3 3 0 0 0 7.757 1H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3zM8.72 10.53a.75.75 0 0 1 0-1.06l.97-.97l-.97-.97a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06 0m-1.44-3a.75.75 0 0 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-.97-.97z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileCodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileDollarIcon],svg[gravity-ui-file-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 13.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06V12a1.5 1.5 0 0 1-1.5 1.5m2.121-8.379A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879zm-6.878.388c.272-.203.596-.343.955-.423V4.75a.75.75 0 0 1 1.5 0v.311c.537.097.973.309 1.309.616a.75.75 0 1 1-1.014 1.106c-.134-.123-.412-.28-.993-.28c-.464 0-.728.11-.857.206c-.112.084-.147.172-.147.274c0 .014 0 .022.016.043a.6.6 0 0 0 .189.152c.23.135.573.242.952.32l.05.011c.394.081.956.197 1.42.434c.523.267 1.057.763 1.057 1.609c0 .75-.468 1.263-.98 1.55c-.302.17-.648.28-1.002.342v.306a.75.75 0 0 1-1.5 0v-.349a3.4 3.4 0 0 1-.915-.383c-.463-.281-.887-.704-1.064-1.226a.75.75 0 1 1 1.421-.48c.027.08.147.257.423.425c.262.16.595.265.937.265c.4 0 .748-.086.966-.209c.208-.116.214-.204.214-.241c0-.08-.008-.155-.239-.273c-.269-.137-.643-.218-1.093-.312c-.428-.089-.963-.235-1.408-.496c-.446-.263-.944-.735-.944-1.488c0-.587.268-1.115.747-1.474" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileDollarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileExclamationIcon],svg[gravity-ui-file-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 12a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06zm.621-6.879A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879zM8 5a.75.75 0 0 1 .75.75V8.5a.75.75 0 0 1-1.5 0V5.75A.75.75 0 0 1 8 5m1 6.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileExclamationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileLetterPIcon],svg[gravity-ui-file-letter-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 13.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06V12a1.5 1.5 0 0 1-1.5 1.5m2.121-8.379A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879zM6.5 6.5a.75.75 0 0 0-.75.75v4a.75.75 0 0 0 1.5 0v-.75H8.5a2 2 0 1 0 0-4zm2 2.5H7.25V8H8.5a.5.5 0 0 1 0 1" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileLetterPIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileLetterWIcon],svg[gravity-ui-file-letter-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 12a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06zm.621-6.879A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879zM5.702 6.987a.75.75 0 0 0-1.404.526l1.5 4a.75.75 0 0 0 1.404 0L8 9.386l.798 2.127a.75.75 0 0 0 1.418-.039l1.253-4a.75.75 0 0 0-1.431-.448l-.602 1.919l-.734-1.958a.75.75 0 0 0-1.404 0L6.5 9.114z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileLetterWIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileLetterXIcon],svg[gravity-ui-file-letter-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 12a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06zm.621-6.879A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879zm-2.807 2.623a.75.75 0 1 0-1.128-.988L8 8.111L6.814 6.756a.75.75 0 1 0-1.128.988L7.003 9.25l-1.317 1.506a.75.75 0 0 0 1.128.988L8 10.389l1.186 1.355a.75.75 0 0 0 1.128-.988L8.997 9.25z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileLetterXIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileMagnifierIcon],svg[gravity-ui-file-magnifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 13.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06V12a1.5 1.5 0 0 1-1.5 1.5m2.121-8.379A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879zM7.5 11.25A2.497 2.497 0 0 1 5 8.75a2.5 2.5 0 1 1 4.717 1.156l.813.814a.75.75 0 1 1-1.06 1.06l-.814-.813a2.5 2.5 0 0 1-1.156.283m1-2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileMagnifierIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileMinusIcon],svg[gravity-ui-file-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 13.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06V12a1.5 1.5 0 0 1-1.5 1.5m2.121-8.379A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879zM5.75 8.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileMinusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFilePlusIcon],svg[gravity-ui-file-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 12a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06zm.621-6.879A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879zM8.75 6.75a.75.75 0 0 0-1.5 0v1.5h-1.5a.75.75 0 0 0 0 1.5h1.5v1.5a.75.75 0 0 0 1.5 0v-1.5h1.5a.75.75 0 0 0 0-1.5h-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFilePlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileQuestionIcon],svg[gravity-ui-file-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 13.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06V12a1.5 1.5 0 0 1-1.5 1.5m2.121-8.379A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879zm-6.533.388C6.978 5.19 7.488 5 8 5c1.092 0 2.125.736 2.125 1.947c0 .34-.07.678-.273 1.004c-.19.308-.467.554-.785.776c-.185.129-.269.211-.305.26l-.012.017A.75.75 0 0 1 7.25 9c0-.741.512-1.192.959-1.503c.236-.165.329-.273.368-.336c.028-.046.048-.097.048-.214a.37.37 0 0 0-.133-.292C8.398 6.575 8.235 6.5 8 6.5a.77.77 0 0 0-.463.17c-.126.104-.162.204-.162.277a.75.75 0 1 1-1.5 0c0-.618.32-1.116.713-1.438M9 11.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileQuestionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileRubleIcon],svg[gravity-ui-file-ruble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 13.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06V12a1.5 1.5 0 0 1-1.5 1.5m2.121-8.379A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879zM6.75 4.5a.75.75 0 0 0-.75.75v2h-.25a.75.75 0 0 0 0 1.5H6v.75h-.25a.75.75 0 0 0 0 1.5H6v.25a.75.75 0 0 0 1.5 0V11h.75a.75.75 0 0 0 0-1.5H7.5v-.75h.875a2.125 2.125 0 0 0 0-4.25zm1.625 2.75H7.5V6h.875a.625.625 0 1 1 0 1.25" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileRubleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileTextIcon],svg[gravity-ui-file-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 13.5h6a1.5 1.5 0 0 0 1.5-1.5V7.243a1.5 1.5 0 0 0-.44-1.061L8.819 2.939a1.5 1.5 0 0 0-1.06-.439H5A1.5 1.5 0 0 0 3.5 4v8A1.5 1.5 0 0 0 5 13.5m9-6.257a3 3 0 0 0-.879-2.122L9.88 1.88A3 3 0 0 0 7.757 1H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3zM5 8.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 8.25m.75 2.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileTextIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileXmarkIcon],svg[gravity-ui-file-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 12a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06zm.621-6.879A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879zM6.781 6.72A.75.75 0 0 0 5.72 7.78L6.94 9l-1.22 1.22a.75.75 0 1 0 1.06 1.06L8 10.06l1.22 1.22a.75.75 0 1 0 1.06-1.06L9.06 9l1.22-1.22a.75.75 0 1 0-1.06-1.06L8 7.94z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileXmarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFileZipperIcon],svg[gravity-ui-file-zipper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 13.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h.5v.75c0 .414.336.75.75.75H7v2h-.75a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75H7v2h-.75a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75H7v-2h.75a.75.75 0 0 0 .75-.75v-.5A.75.75 0 0 0 7.75 8H7V6h.75a.75.75 0 0 0 .75-.75v-.5A.75.75 0 0 0 7.75 4H7V2.5h.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06V12a1.5 1.5 0 0 1-1.5 1.5m2.121-8.379A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFileZipperIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFilesIcon],svg[gravity-ui-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 10.5h4A1.5 1.5 0 0 0 13.5 9V7H12a3 3 0 0 1-3-3V2.5H8A1.5 1.5 0 0 0 6.5 4v5A1.5 1.5 0 0 0 8 10.5m5.06-5.318q.145.145.243.318H12A1.5 1.5 0 0 1 10.5 4V2.697q.174.098.318.242zM15 6.242a3 3 0 0 0-.879-2.12L11.88 1.878A3 3 0 0 0 9.757 1H8a3 3 0 0 0-3 3H4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3h1a3 3 0 0 0 3-3zM9.5 12H8a3 3 0 0 1-3-3V5.5H4A1.5 1.5 0 0 0 2.5 7v5A1.5 1.5 0 0 0 4 13.5h4A1.5 1.5 0 0 0 9.5 12" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFilesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFilmstripIcon],svg[gravity-ui-filmstrip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 3.5h.5A1.5 1.5 0 0 1 13.5 5v.5h-2zm0 3.5v2h2V7zM15 7v4a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3zm-1.5 3.5h-2v2h.5a1.5 1.5 0 0 0 1.5-1.5zm-3.5-7H6v9h4zm-5.5 9v-2h-2v.5A1.5 1.5 0 0 0 4 12.5zm0-5.5v2h-2V7zm0-1.5h-2V5A1.5 1.5 0 0 1 4 3.5h.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFilmstripIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFingerprintIcon],svg[gravity-ui-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.964 1.79a.75.75 0 0 1-.51.93A5.51 5.51 0 0 0 2.72 6.455a.75.75 0 0 1-1.44-.421A7.01 7.01 0 0 1 6.034 1.28a.75.75 0 0 1 .93.51m2.072 0a.75.75 0 0 1 .93-.51a7.003 7.003 0 0 1 4.176 10.08a.75.75 0 1 1-1.315-.72a5.503 5.503 0 0 0-3.281-7.92a.75.75 0 0 1-.51-.93M1.79 9.036a.75.75 0 0 1 .93.51a5.503 5.503 0 0 0 7.92 3.28a.75.75 0 1 1 .72 1.316A7.003 7.003 0 0 1 1.28 9.966a.75.75 0 0 1 .51-.93M8 5.5a2.5 2.5 0 0 0-1.153 4.719a.75.75 0 0 1-.694 1.33A4 4 0 1 1 12 8a.75.75 0 0 1-1.5 0A2.5 2.5 0 0 0 8 5.5m.742 2.392a.75.75 0 1 0-1.484.216c.252 1.726 1.493 3.001 3.18 3.14a.75.75 0 1 0 .123-1.495c-.918-.076-1.657-.751-1.819-1.861" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFingerprintIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFlagIcon],svg[gravity-ui-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.47 3.588a4.45 4.45 0 0 0-4.15-.224a.55.55 0 0 0-.32.499v5.533a6.25 6.25 0 0 1 5.547.439l.344.207a4.02 4.02 0 0 0 3.865.148a.44.44 0 0 0 .244-.395V4.182a6.26 6.26 0 0 1-5.386-.508zm5.957 7.944a5.52 5.52 0 0 1-5.307-.204l-.345-.207a4.75 4.75 0 0 0-4.314-.293L3 11.026v3.255a.75.75 0 0 1-1.5 0V3.863c0-.8.465-1.526 1.19-1.861a5.95 5.95 0 0 1 5.552.3l.144.086a4.76 4.76 0 0 0 4.447.24l.603-.278a.75.75 0 0 1 1.064.681v6.764c0 .735-.416 1.408-1.073 1.737" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFlagIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFlameIcon],svg[gravity-ui-flame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.452 6.864l1.13-2.173a32 32 0 0 1 1.872-3.095c.964 1.045 1.906 2.3 2.612 3.622c.748 1.402 1.184 2.789 1.184 4.032c0 1.427-.904 2.83-2.153 3.613q.088-.398.09-.863c0-1.255-.674-2.336-1.143-2.963a9 9 0 0 0-1.01-1.125l-.024-.02l-.008-.008L9 7.88l-.001-.001C8.996 7.88 8.996 7.878 8 9a7 7 0 0 0 .984 1.133c.37.534.704 1.2.704 1.867c0 .77-.313 1.276-.618 1.587c-.159.162-.279.38-.314.6a.8.8 0 0 0 0 .264q.017.095.06.182c.113.225.343.37.594.35c2.836-.235 5.34-2.87 5.34-5.733c0-3.149-2.177-6.538-4.357-8.845A1.3 1.3 0 0 0 9.435 0A1.32 1.32 0 0 0 8.35.556A34 34 0 0 0 6.25 4l-.955-1.337l-.016-.022a.986.986 0 0 0-1.573.004C2.62 4.123 1.25 6.249 1.25 9.25c0 2.863 2.504 5.498 5.34 5.733c.25.02.481-.125.593-.35a.7.7 0 0 0 .06-.182a.8.8 0 0 0 .001-.263a1.15 1.15 0 0 0-.314-.601c-.305-.31-.617-.817-.617-1.587c0-.666.333-1.333.703-1.867l.09-.128C7.544 9.405 8 9 8 9l-.997-1.12H7l-.003.003l-.008.007l-.024.021l-.073.07a9 9 0 0 0-.937 1.056c-.47.626-1.143 1.707-1.143 2.962c0 .31.033.598.09.863C3.654 12.08 2.75 10.677 2.75 9.25c0-2.171.847-3.812 1.745-5.126l.534.748zM8 9l.997-1.121L8 6.993l-.997.886z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFlameIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFlaskIcon],svg[gravity-ui-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.494 13.2c.837-.482 1.006-.946 1.006-1.2c0-.35-.105-.692-.303-.981L9.072 6.435a1.85 1.85 0 0 1-.322-1.044V2.909C8.518 2.968 8.265 3 8 3s-.518-.032-.75-.09v2.48c0 .373-.112.737-.322 1.045L3.803 11.02c-.198.289-.303.63-.303.981c0 .254.169.718 1.006 1.2c.813.468 2.043.8 3.494.8s2.68-.332 3.494-.8M8 .5c2 0 2.25 1 2.25 1.5v3.39q0 .11.062.2l3.125 4.584c.367.538.563 1.175.563 1.826c0 2-2.686 3.5-6 3.5S2 14 2 12c0-.652.196-1.288.563-1.826L5.69 5.59a.35.35 0 0 0 .061-.2V2C5.75 1.5 6 .5 8 .5m.084 7.626a.75.75 0 0 1 1.04.208l1.5 2.25a.75.75 0 1 1-1.248.832l-1.5-2.25a.75.75 0 0 1 .208-1.04" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFlaskIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFloppyDiskIcon],svg[gravity-ui-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 11.5A1.5 1.5 0 0 0 4.5 13v-2.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V13a1.5 1.5 0 0 0 1.5-1.5V6.036a1 1 0 0 0-.293-.708l-2.035-2.035A1 1 0 0 0 9.964 3H6v1a.5.5 0 0 0 .5.5h3a.75.75 0 0 1 0 1.5h-3a2 2 0 0 1-2-2V3A1.5 1.5 0 0 0 3 4.5zm-1.5 0a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V6.036a2.5 2.5 0 0 0-.732-1.768l-2.036-2.036A2.5 2.5 0 0 0 9.964 1.5H4.5a3 3 0 0 0-3 3zm8.5-1V13H6v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFloppyDiskIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderIcon],svg[gravity-ui-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.44 4.06l.439.44H12.5A1.5 1.5 0 0 1 14 6v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11V4.5A1.5 1.5 0 0 1 3.5 3h1.257a1.5 1.5 0 0 1 1.061.44zM.5 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7.5 3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3zm4.25 2a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderArrowDownIcon],svg[gravity-ui-folder-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.44 4.06l.439.44H12.5A1.5 1.5 0 0 1 14 6v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11V4.5A1.5 1.5 0 0 1 3.5 3h1.257a1.5 1.5 0 0 1 1.061.44zM.5 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7.5 3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3zm10.03 4.53a.75.75 0 1 0-1.06-1.06l-.72.72V6.5a.75.75 0 1 0-1.5 0v2.19l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderArrowDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderArrowLeftIcon],svg[gravity-ui-folder-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.44 4.06l.439.44H12.5A1.5 1.5 0 0 1 14 6v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11V4.5A1.5 1.5 0 0 1 3.5 3h1.257a1.5 1.5 0 0 1 1.061.44zM.5 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7.5 3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3zm6.97 6.53a.75.75 0 1 0 1.06-1.06l-.72-.72H10a.75.75 0 0 0 0-1.5H7.81l.72-.72a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderArrowLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderArrowRightIcon],svg[gravity-ui-folder-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.44 4.06l.439.44H12.5A1.5 1.5 0 0 1 14 6v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11V4.5A1.5 1.5 0 0 1 3.5 3h1.257a1.5 1.5 0 0 1 1.061.44zM.5 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7.5 3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3zm8.03 1.47a.75.75 0 0 0-1.06 1.06l.72.72H6a.75.75 0 1 0 0 1.5h2.19l-.72.72a.75.75 0 1 0 1.06 1.06l2-2a.75.75 0 0 0 0-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderArrowRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderArrowUpIcon],svg[gravity-ui-folder-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.44 4.06l.439.44H12.5A1.5 1.5 0 0 1 14 6v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11V4.5A1.5 1.5 0 0 1 3.5 3h1.257a1.5 1.5 0 0 1 1.061.44zM.5 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7.5 3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3zm4.97 3.47a.75.75 0 0 0 1.06 1.06l.72-.72v2.19a.75.75 0 0 0 1.5 0V8.31l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderArrowUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderArrowUpInIcon],svg[gravity-ui-folder-arrow-up-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.44 3.56l.439.44H12.5A1.5 1.5 0 0 1 14 5.5v5a1.5 1.5 0 0 1-1.5 1.5h-1.75a.75.75 0 0 0 0 1.5h1.75a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3h-5l-.621-.621A3 3 0 0 0 4.757 1H3.5a3 3 0 0 0-3 3v6.5a3 3 0 0 0 3 3h1.75a.75.75 0 0 0 0-1.5H3.5A1.5 1.5 0 0 1 2 10.5V4a1.5 1.5 0 0 1 1.5-1.5h1.257a1.5 1.5 0 0 1 1.061.44zm2.31 5l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l.72-.72v6.69a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderArrowUpInIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderCheckIcon],svg[gravity-ui-folder-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.44 4.06l.439.44H12.5A1.5 1.5 0 0 1 14 6v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11V4.5A1.5 1.5 0 0 1 3.5 3h1.257a1.5 1.5 0 0 1 1.061.44zM.5 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7.5 3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3zm10.35 2.45a.75.75 0 1 0-1.2-.9L7.469 8.958L6.28 7.77a.75.75 0 1 0-1.06 1.06l1.8 1.8a.75.75 0 0 0 1.13-.08z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderCheckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderCodeIcon],svg[gravity-ui-folder-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.44 4.06l.439.44H12.5A1.5 1.5 0 0 1 14 6v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11V4.5A1.5 1.5 0 0 1 3.5 3h1.257a1.5 1.5 0 0 1 1.061.44zM.5 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7.5 3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3zm8.182 1.273a.75.75 0 0 1 .546.91l-1 4a.75.75 0 0 1-1.455-.365l1-4a.75.75 0 0 1 .909-.545M4.97 10.03a.75.75 0 0 0 1.06-1.06l-.47-.47l.47-.47a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 0 1.06zm5-1.06a.75.75 0 1 0 1.06 1.06l1-1a.75.75 0 0 0 0-1.06l-1-1a.75.75 0 1 0-1.06 1.06l.47.47z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderCodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderExclamationIcon],svg[gravity-ui-folder-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.879 4.5l-.44-.44l-.621-.62A1.5 1.5 0 0 0 4.758 3H3.5A1.5 1.5 0 0 0 2 4.5V11a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 14 11V6a1.5 1.5 0 0 0-1.5-1.5zM3.5 1.5a3 3 0 0 0-3 3V11a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-5l-.621-.621A3 3 0 0 0 4.757 1.5zm5.5 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-.25-4.25a.75.75 0 1 0-1.5 0v1.5a.75.75 0 1 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderExclamationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderFillIcon],svg[gravity-ui-folder-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 1.5a3 3 0 0 0-3 3V11a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-5l-.621-.621A3 3 0 0 0 4.757 1.5zm1.25 5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderFlowsIcon],svg[gravity-ui-folder-flows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.44 4.06l.439.44H12.5A1.5 1.5 0 0 1 14 6v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11V4.5A1.5 1.5 0 0 1 3.5 3h1.257a1.5 1.5 0 0 1 1.061.44zM.5 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7.5 3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3zm8.25 2.75A.25.25 0 0 1 9 7h1a.75.75 0 0 0 0-1.5H9a1.75 1.75 0 0 0-1.75 1.75v.5H6a.75.75 0 1 0 0 1.5h1.25v.5c0 .966.784 1.75 1.75 1.75h1a.75.75 0 0 0 0-1.5H9a.25.25 0 0 1-.25-.25v-.5H10a.75.75 0 0 0 0-1.5H8.75z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderFlowsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderHouseIcon],svg[gravity-ui-folder-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.44 4.06l.439.44H12.5A1.5 1.5 0 0 1 14 6v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11V4.5A1.5 1.5 0 0 1 3.5 3h1.257a1.5 1.5 0 0 1 1.061.44zM.5 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7.5 3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3zM8 7.453l1.5 1.25V9.5h-3v-.797zM5 8.468a1 1 0 0 1 .36-.768l2-1.667a1 1 0 0 1 1.28 0l2 1.667a1 1 0 0 1 .36.768V10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderHouseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderKeyholeIcon],svg[gravity-ui-folder-keyhole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.879 4.5l-.44-.44l-.621-.62A1.5 1.5 0 0 0 4.758 3H3.5A1.5 1.5 0 0 0 2 4.5V11a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 14 11V6a1.5 1.5 0 0 0-1.5-1.5zM3.5 1.5a3 3 0 0 0-3 3V11a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-5l-.621-.621A3 3 0 0 0 4.757 1.5zm5.25 7.3a1.5 1.5 0 1 0-1.5 0v1.45a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderKeyholeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderLockIcon],svg[gravity-ui-folder-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.44 4.06l.439.44H12.5A1.5 1.5 0 0 1 14 6v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11V4.5A1.5 1.5 0 0 1 3.5 3h1.257a1.5 1.5 0 0 1 1.061.44zM.5 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7.5 3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3zm8 2.75v.25h-1v-.25a.5.5 0 0 1 1 0m1.6.25H10v-.25a2 2 0 1 0-4 0v.25h-.1a1.4 1.4 0 0 0-1.4 1.4v1.2a1.4 1.4 0 0 0 1.4 1.4h4.2a1.4 1.4 0 0 0 1.4-1.4V8.9a1.4 1.4 0 0 0-1.4-1.4M6 9v1h4V9z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderMagnifierIcon],svg[gravity-ui-folder-magnifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.879 4.5l-.44-.44l-.621-.62A1.5 1.5 0 0 0 4.758 3H3.5A1.5 1.5 0 0 0 2 4.5V11a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 14 11V6a1.5 1.5 0 0 0-1.5-1.5zM3.5 1.5a3 3 0 0 0-3 3V11a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-5l-.621-.621A3 3 0 0 0 4.757 1.5zm6.217 7.656a2.5 2.5 0 1 0-1.06 1.06l.813.814a.75.75 0 1 0 1.06-1.06zM7.5 9a1 1 0 1 1 0-2a1 1 0 0 1 0 2" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderMagnifierIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderOpenIcon],svg[gravity-ui-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.379 4.5l-.44-.44l-.621-.62A1.5 1.5 0 0 0 4.258 3H3a1.5 1.5 0 0 0-1.5 1.5v5.25l1.376-2.293A3 3 0 0 1 5.45 6h7.05A1.5 1.5 0 0 0 11 4.5zM14 6.026V6a3 3 0 0 0-3-3H7l-.621-.621A3 3 0 0 0 4.257 1.5H3a3 3 0 0 0-3 3V11a3 3 0 0 0 3 3h8.301a3 3 0 0 0 2.573-1.457l1.791-2.985A2.35 2.35 0 0 0 14 6.026M10 12.5h1.301a1.5 1.5 0 0 0 1.287-.728l1.791-2.986l1.286.772l-1.286-.772a.85.85 0 0 0-.728-1.286H5.449a1.5 1.5 0 0 0-1.287.728l-1.791 2.986a.85.85 0 0 0 .728 1.286z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderOpenFillIcon],svg[gravity-ui-folder-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7 3h4a3 3 0 0 1 3 3H5.449a3 3 0 0 0-2.573 1.457L1.43 9.867a.75.75 0 0 0 1.287.772l1.446-2.41A1.5 1.5 0 0 1 5.45 7.5h9.376a1.175 1.175 0 0 1 1.008 1.779l-1.96 3.265A3 3 0 0 1 11.302 14H2.94q-.179 0-.35-.028A3 3 0 0 1 0 11z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderOpenFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderPlusIcon],svg[gravity-ui-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.44 4.06l.439.44H12.5A1.5 1.5 0 0 1 14 6v5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11V4.5A1.5 1.5 0 0 1 3.5 3h1.257a1.5 1.5 0 0 1 1.061.44zM.5 4.5a3 3 0 0 1 3-3h1.257a3 3 0 0 1 2.122.879L7.5 3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3zm8.25 2a.75.75 0 1 0-1.5 0v1.25H6a.75.75 0 1 0 0 1.5h1.25v1.25a.75.75 0 0 0 1.5 0V9.25H10a.75.75 0 0 0 0-1.5H8.75z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderPlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFolderTreeIcon],svg[gravity-ui-folder-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 13.5v-3A.5.5 0 0 1 8 10h.672a.5.5 0 0 1 .353.146l.414.415l.44.439H13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5M6 13H4.5a3 3 0 0 1-3-3V1.25a.75.75 0 0 1 1.5 0V2a1.5 1.5 0 0 0 1.5 1.5H6v-1a2 2 0 0 1 2-2h.672a2 2 0 0 1 1.414.586l.414.414H13a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5H4.5A3 3 0 0 1 3 4.599V10a1.5 1.5 0 0 0 1.5 1.5H6v-1a2 2 0 0 1 2-2h.672a2 2 0 0 1 1.414.586l.414.414H13a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm1.5-8.75V5.5A.5.5 0 0 0 8 6h5a.5.5 0 0 0 .5-.5v-2A.5.5 0 0 0 13 3H9.879l-.44-.44l-.414-.414A.5.5 0 0 0 8.672 2H8a.5.5 0 0 0-.5.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFolderTreeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFoldersIcon],svg[gravity-ui-folders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.879 4l-.44-.44l-.767-.767a1 1 0 0 0-.708-.293H6A1.5 1.5 0 0 0 4.5 4v5A1.5 1.5 0 0 0 6 10.5h7A1.5 1.5 0 0 0 14.5 9V5.5A1.5 1.5 0 0 0 13 4zM6 1a3 3 0 0 0-3 3a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3a3 3 0 0 0 3-3V5.5a3 3 0 0 0-3-3H9.5l-.768-.768A2.5 2.5 0 0 0 6.964 1zM1.5 7A1.5 1.5 0 0 1 3 5.5V9a3 3 0 0 0 3 3h5.5a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 12zm10.75 0a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFoldersIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFontIcon],svg[gravity-ui-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.25c-.618 0-1.169.39-1.373.974l-3.335 9.528a.75.75 0 0 0 1.416.496L5.845 10h4.31l1.137 3.248a.75.75 0 0 0 1.416-.496L9.373 3.224A1.455 1.455 0 0 0 8 2.25M9.63 8.5L8 3.842L6.37 8.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFontIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFontCaseIcon],svg[gravity-ui-font-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiFontCase0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M4.75 2.25c-.618 0-1.169.39-1.373.974L.042 12.752a.75.75 0 0 0 1.416.496L2.595 10h4.31l1.137 3.248a.75.75 0 0 0 1.416-.496L6.123 3.224A1.455 1.455 0 0 0 4.75 2.25M6.38 8.5L4.75 3.842L3.12 8.5zm5.135 2.996c0-.223.28-.746 1.152-.746H14.4c-.294 1.024-1.178 1.5-1.9 1.5c-.45 0-.677-.134-.792-.249a.7.7 0 0 1-.193-.505m2.985.754V13a.75.75 0 1 0 1.5 0v-3c0-1.117-.28-2.065-.873-2.744c-.606-.692-1.453-1.006-2.377-1.006c-.53 0-.946.07-1.306.195c-.338.117-.6.274-.804.396l-.025.015a.75.75 0 1 0 .77 1.288c.22-.132.365-.217.55-.281c.178-.062.423-.113.815-.113c.576 0 .978.186 1.248.494c.191.218.354.543.44 1.006h-1.771c-1.462 0-2.658.977-2.652 2.254c.003.542.191 1.116.632 1.557c.447.448 1.085.689 1.853.689c1 0 1.75-.75 1.75-1.5z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiFontCase0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiFontCaseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFontCursorIcon],svg[gravity-ui-font-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 2.25a.75.75 0 0 1 .75-.75c.576 0 1.102.217 1.5.573a2.24 2.24 0 0 1 1.5-.573a.75.75 0 0 1 0 1.5a.75.75 0 0 0-.75.75v8.75c0 .414.336.75.75.75a.75.75 0 0 1 0 1.5a2.24 2.24 0 0 1-1.5-.573a2.24 2.24 0 0 1-1.5.573a.75.75 0 0 1 0-1.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75a.75.75 0 0 1-.75-.75M5.75 3c-.618 0-1.168.39-1.374.972L1.543 12a.75.75 0 1 0 1.414.5L3.84 10h3.822l.882 2.5a.75.75 0 1 0 1.414-.5L7.124 3.972A1.46 1.46 0 0 0 5.75 3m1.381 5.5L5.75 4.587L4.369 8.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFontCursorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFrameIcon],svg[gravity-ui-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.25 1a.75.75 0 0 1 .75.75V3h1.25a.75.75 0 0 1 0 1.5H13v7h1.25a.75.75 0 0 1 0 1.5H13v1.25a.75.75 0 0 1-1.5 0V13h-7v1.25a.75.75 0 0 1-1.5 0V13H1.75a.75.75 0 0 1 0-1.5H3v-7H1.75a.75.75 0 0 1 0-1.5H3V1.75a.75.75 0 0 1 1.5 0V3h7V1.75a.75.75 0 0 1 .75-.75M4.5 4.5v7h7v-7z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFrameIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFramesIcon],svg[gravity-ui-frames-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiFrames0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M13.25.75a.75.75 0 0 1 .75.75V2h.5a.75.75 0 0 1 0 1.5H14v5h.5a.75.75 0 0 1 0 1.5H14v.5a.75.75 0 0 1-1.5 0V10H10v2.5h.5a.75.75 0 0 1 0 1.5H10v.5a.75.75 0 0 1-1.5 0V14h-5v.5a.75.75 0 0 1-1.5 0V14h-.5a.75.75 0 0 1 0-1.5H2v-5h-.5a.75.75 0 0 1 0-1.5H2v-.5a.75.75 0 0 1 1.5 0V6H6V3.5h-.5a.75.75 0 0 1 0-1.5H6v-.5a.75.75 0 0 1 1.5 0V2h5v-.5a.75.75 0 0 1 .75-.75M7.5 6h1v-.5a.75.75 0 0 1 1.5 0V6h.5a.75.75 0 0 1 0 1.5H10v1h2.5v-5h-5zm-4 6.5v-5h5v5z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiFrames0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiFramesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFunctionIcon],svg[gravity-ui-function-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiFunction0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M4.312 4.29a.764.764 0 0 1 1.103-.62a.75.75 0 1 0 .67-1.34a2.264 2.264 0 0 0-3.268 1.836L2.706 5.5H1.75a.75.75 0 0 0 0 1.5h.83l-.392 4.71a.764.764 0 0 1-1.103.62a.75.75 0 0 0-.67 1.34a2.264 2.264 0 0 0 3.268-1.836L4.086 7H5.25a.75.75 0 1 0 0-1.5H4.21zm6.014 2.23a.75.75 0 0 0-1.152.96l.85 1.02l-.85 1.02a.75.75 0 0 0 1.152.96L11 9.672l.674.808a.75.75 0 0 0 1.152-.96l-.85-1.02l.85-1.02a.75.75 0 0 0-1.152-.96L11 7.328zM8.02 4.55a.75.75 0 0 1 .43.969l-.145.378a7.25 7.25 0 0 0 0 5.205l.145.378a.75.75 0 0 1-1.4.539l-.145-.378a8.75 8.75 0 0 1 0-6.282l.145-.378a.75.75 0 0 1 .97-.431m5.961 0a.75.75 0 0 1 .97.43l.145.379a8.75 8.75 0 0 1 0 6.282l-.146.378a.75.75 0 1 1-1.4-.538l.146-.379a7.25 7.25 0 0 0 0-5.205l-.146-.378a.75.75 0 0 1 .431-.97" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiFunction0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiFunctionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFunnelIcon],svg[gravity-ui-funnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 4c0 .174-.071.513-.885.888S9.538 5.5 8 5.5s-2.799-.237-3.615-.612C3.57 4.513 3.5 4.174 3.5 4s.071-.513.885-.888S6.462 2.5 8 2.5s2.799.237 3.615.612c.814.375.885.714.885.888m-1.448 2.66C10.158 6.888 9.115 7 8 7s-2.158-.113-3.052-.34l1.98 2.905c.21.308.322.672.322 1.044v3.37q.088.02.25.021c.422 0 .749-.14.95-.316c.185-.162.3-.38.3-.684v-2.39c0-.373.112-.737.322-1.045zM8 1c3.314 0 6 1 6 3a3.24 3.24 0 0 1-.563 1.826l-3.125 4.584a.35.35 0 0 0-.062.2V13c0 1.5-1.25 2.5-2.75 2.5s-1.75-1-1.75-1v-3.89a.35.35 0 0 0-.061-.2L2.563 5.826A3.24 3.24 0 0 1 2 4c0-2 2.686-3 6-3m-.88 12.936q-.015-.008-.013-.01z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFunnelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiFunnelXmarkIcon],svg[gravity-ui-funnel-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.615 4.888c.814-.375.885-.714.885-.888s-.071-.513-.885-.888S8.538 2.5 7 2.5s-2.799.237-3.615.612C2.57 3.487 2.5 3.826 2.5 4s.071.513.885.888S5.462 5.5 7 5.5s2.799-.237 3.615-.612M7 7c1.114 0 2.158-.113 3.052-.34l-1.98 2.905c-.21.308-.322.672-.322 1.044V13a.86.86 0 0 1-.3.684c-.201.175-.528.316-.95.316a1.3 1.3 0 0 1-.25-.02v-3.37c0-.373-.112-.737-.322-1.045L3.948 6.66C4.842 6.887 5.886 7 7 7m6-3c0-2-2.686-3-6-3S1 2 1 4c0 .652.196 1.288.563 1.826L4.69 10.41q.06.09.061.2v3.89s.25 1 1.75 1s2.75-1 2.75-2.5v-2.39q0-.11.061-.2l3.126-4.584A3.24 3.24 0 0 0 13 4m-6.88 9.936q-.015-.008-.013-.01zm7.13-2.247l-1.22-1.22a.75.75 0 1 0-1.06 1.061l1.22 1.22l-1.22 1.22a.75.75 0 1 0 1.06 1.06l1.22-1.22l1.22 1.22a.75.75 0 1 0 1.06-1.06l-1.22-1.22l1.22-1.22a.75.75 0 1 0-1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiFunnelXmarkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiGearIcon],svg[gravity-ui-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.199 2H8.8a.2.2 0 0 1 .2.2c0 1.808 1.958 2.939 3.524 2.034a.2.2 0 0 1 .271.073l.802 1.388a.2.2 0 0 1-.073.272c-1.566.904-1.566 3.164 0 4.069a.2.2 0 0 1 .073.271l-.802 1.388a.2.2 0 0 1-.271.073C10.958 10.863 9 11.993 9 13.8a.2.2 0 0 1-.199.2H7.2a.2.2 0 0 1-.2-.2c0-1.808-1.958-2.938-3.524-2.034a.2.2 0 0 1-.272-.073l-.8-1.388a.2.2 0 0 1 .072-.271c1.566-.905 1.566-3.165 0-4.07a.2.2 0 0 1-.073-.27l.801-1.389a.2.2 0 0 1 .272-.072C5.042 5.138 7 4.007 7 2.199c0-.11.089-.199.199-.199M5.5 2.2c0-.94.76-1.7 1.699-1.7H8.8c.94 0 1.7.76 1.7 1.7a.85.85 0 0 0 1.274.735a1.7 1.7 0 0 1 2.32.622l.802 1.388c.469.813.19 1.851-.622 2.32a.85.85 0 0 0 0 1.472a1.7 1.7 0 0 1 .622 2.32l-.802 1.388a1.7 1.7 0 0 1-2.32.622a.85.85 0 0 0-1.274.735c0 .939-.76 1.7-1.699 1.7H7.2a1.7 1.7 0 0 1-1.699-1.7a.85.85 0 0 0-1.274-.735a1.7 1.7 0 0 1-2.32-.622l-.802-1.388a1.7 1.7 0 0 1 .622-2.32a.85.85 0 0 0 0-1.471a1.7 1.7 0 0 1-.622-2.32l.801-1.389a1.7 1.7 0 0 1 2.32-.622A.85.85 0 0 0 5.5 2.2m4 5.8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M11 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGearIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiGearBranchesIcon],svg[gravity-ui-gear-branches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiGearBranches0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M7.295 2a.25.25 0 0 0-.243.194l-.131.568a2.35 2.35 0 0 1-3.263 1.611l-.122-.055a.25.25 0 0 0-.323.107l-.696 1.277A.25.25 0 0 0 2.559 6l.971.97a.75.75 0 1 1-1.06 1.06l-.971-.97a1.75 1.75 0 0 1-.3-2.076l.697-1.277a1.75 1.75 0 0 1 2.26-.755l.123.056a.85.85 0 0 0 1.18-.583l.131-.568A1.75 1.75 0 0 1 7.295.5h1.41a1.75 1.75 0 0 1 1.705 1.357l.13.568a.85.85 0 0 0 1.18.583l.123-.056a1.75 1.75 0 0 1 2.26.755l.697 1.277a1.75 1.75 0 0 1-.299 2.075l-.97.971a.75.75 0 0 1-1.061-1.06l.97-.971a.25.25 0 0 0 .043-.297l-.696-1.277a.25.25 0 0 0-.323-.107l-.123.055a2.35 2.35 0 0 1-3.262-1.61l-.131-.57A.25.25 0 0 0 8.704 2zM3.25 12a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 1.5a2.25 2.25 0 0 0 1.978-3.322l.553-.442a1.25 1.25 0 0 0 .469-.976V7.75a.75.75 0 1 0-1.5 0v.89l-.655.524A2.25 2.25 0 1 0 3.25 13.5m5.5-.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m1.5 0a2.25 2.25 0 1 1-3-2.122V7.754a.75.75 0 0 1 1.5 0v3.374a2.25 2.25 0 0 1 1.5 2.122m2.5-1.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 1.5a2.25 2.25 0 1 0-.795-4.356L11.5 8.69v-.94a.75.75 0 1 0-1.5 0v1.043c0 .331.132.65.366.884l.44.44A2.25 2.25 0 0 0 12.75 13.5" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiGearBranches0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiGearBranchesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiGearDotIcon],svg[gravity-ui-gear-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.199 2A.2.2 0 0 0 7 2.199c0 1.808-1.958 2.939-3.524 2.034a.2.2 0 0 0-.272.073l-.8 1.388a.2.2 0 0 0 .072.271c1.566.905 1.566 3.165 0 4.07a.2.2 0 0 0-.073.271l.801 1.388a.2.2 0 0 0 .272.073C5.042 10.862 7 11.993 7 13.8c0 .11.089.199.199.199H8.8c.11 0 .199-.089.199-.199c0-1.808 1.958-2.939 3.524-2.034a.2.2 0 0 0 .271-.073l.802-1.388a.2.2 0 0 0-.073-.271c-1.303-.753-1.516-2.434-.665-3.5a.75.75 0 0 1 1.172.936a.852.852 0 0 0 .243 1.265a1.7 1.7 0 0 1 .622 2.32l-.802 1.388a1.7 1.7 0 0 1-2.32.622a.85.85 0 0 0-1.274.735c0 .938-.76 1.699-1.699 1.699H7.2c-.938 0-1.699-.76-1.699-1.699a.85.85 0 0 0-1.274-.735a1.7 1.7 0 0 1-2.32-.622l-.802-1.388a1.7 1.7 0 0 1 .622-2.32a.85.85 0 0 0 0-1.472a1.7 1.7 0 0 1-.622-2.32l.801-1.388a1.7 1.7 0 0 1 2.32-.622A.85.85 0 0 0 5.5 2.2c0-.94.76-1.7 1.699-1.7H9.3a.75.75 0 1 1 0 1.5zm.8 7.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M8 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path d="M12.5 5.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class GravityUiGearDotIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiGearPlayIcon],svg[gravity-ui-gear-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.199 2H8.8c.11 0 .199.089.199.199c0 1.808 1.958 2.939 3.524 2.034a.2.2 0 0 1 .271.073l.802 1.388a.2.2 0 0 1-.073.271c-1.566.905-1.566 3.165 0 4.07a.2.2 0 0 1 .073.271l-.802 1.388a.2.2 0 0 1-.271.073C10.958 10.862 9 11.993 9 13.8c0 .11-.089.199-.199.199H7.2a.2.2 0 0 1-.2-.198c0-1.808-1.958-2.939-3.524-2.034a.2.2 0 0 1-.272-.073l-.8-1.388a.2.2 0 0 1 .072-.271c1.566-.905 1.566-3.165 0-4.07a.2.2 0 0 1-.073-.271l.801-1.388a.2.2 0 0 1 .272-.073C5.042 5.138 7 4.007 7 2.2c0-.11.089-.199.199-.199M5.5 2.199C5.5 1.26 6.26.5 7.199.5H8.8c.938 0 1.699.76 1.699 1.699a.85.85 0 0 0 1.274.735a1.7 1.7 0 0 1 2.32.622l.802 1.388c.469.812.19 1.851-.622 2.32a.85.85 0 0 0 0 1.472a1.7 1.7 0 0 1 .622 2.32l-.802 1.388a1.7 1.7 0 0 1-2.32.622a.85.85 0 0 0-1.274.735c0 .938-.76 1.699-1.699 1.699H7.2c-.938 0-1.699-.76-1.699-1.699a.85.85 0 0 0-1.274-.735a1.7 1.7 0 0 1-2.32-.622l-.802-1.388a1.7 1.7 0 0 1 .622-2.32a.85.85 0 0 0 0-1.472a1.7 1.7 0 0 1-.622-2.32l.801-1.388a1.7 1.7 0 0 1 2.32-.622A.85.85 0 0 0 5.5 2.2m5 6.667a1 1 0 0 0 0-1.732l-3-1.732a1 1 0 0 0-1.5.866v3.464a1 1 0 0 0 1.5.866z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGearPlayIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiGeoIcon],svg[gravity-ui-geo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.293 3H4.5a1.5 1.5 0 0 0-1.41.987l4.68 2.978zM3 5.707V11.5c0 .648.411 1.2.987 1.41l2.978-4.68zM5.707 13H11.5a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-.987-1.41l-3.38 5.313zM1.5 4.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGeoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiGeoDotsIcon],svg[gravity-ui-geo-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.293 3H4.5a1.5 1.5 0 0 0-1.41.987L7 6.475a2.5 2.5 0 0 1 2.654-2.47zM8.41 8.751a2.5 2.5 0 0 0 2.667-4.19l.935-1.47A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5H5.707zM3 5.707V11.5c0 .648.411 1.2.987 1.41l.963-1.514A1.5 1.5 0 1 1 6.531 8.91l.434-.68zM1.5 4.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGeoDotsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiGeoFillIcon],svg[gravity-ui-geo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.247 1.5H4.5a3 3 0 0 0-2.69 1.672l5.96 3.793zM1.5 4.753V11.5a3 3 0 0 0 1.672 2.69l3.793-5.96zM4.753 14.5H11.5a3 3 0 0 0 3-3v-7a3 3 0 0 0-1.671-2.69L8.633 8.402z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGeoFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiGeoPinIcon],svg[gravity-ui-geo-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.293 3H4.5a1.5 1.5 0 0 0-1.41.987L7 6.475a2.5 2.5 0 0 1 2.654-2.47zm.785 1.56a2.501 2.501 0 0 1-.836 4.328A1 1 0 0 1 10.25 9v2a.75.75 0 0 1-1.5 0V9q0-.057.008-.112a2.5 2.5 0 0 1-.347-.137L5.707 13H11.5a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-.987-1.41zm-7.091 8.35l2.978-4.68L3 5.707V11.5c0 .648.411 1.2.987 1.41M1.5 4.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm9 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGeoPinIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiGeoPolygonsIcon],svg[gravity-ui-geo-polygons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3h5.793L7.77 6.965L3.09 3.987A1.5 1.5 0 0 1 4.5 3m7 10H5.707l2.926-4.597l3.38-5.313A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5m-7-11.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGeoPolygonsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiGhostIcon],svg[gravity-ui-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.277 11.702L13.5 12V8a5.5 5.5 0 1 0-11 0v4.547l1.956-1.63a1.8 1.8 0 0 1 2.537.231l1.935 2.323a.08.08 0 0 0 .125-.001l1.45-1.811a1.755 1.755 0 0 1 2.774.043m-3.052 2.705l.686-.859h.001l.144-.18l.618-.772a.255.255 0 0 1 .402.006l.593.79l.139.185v.001l.392.522a1 1 0 0 0 1.8-.6V8A7 7 0 1 0 1 8v5.399a1.101 1.101 0 0 0 1.806.846l2.61-2.175a.3.3 0 0 1 .424.038l1.936 2.323a1.58 1.58 0 0 0 2.449-.024M7 8a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-1.5 0v1c0 .414.336.75.75.75m4 0a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-1.5 0v1c0 .414.336.75.75.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGhostIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiGiftIcon],svg[gravity-ui-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m9.035 3.863l.182-1.276a.92.92 0 0 1 .818-.783a.914.914 0 0 1 .272 1.805zM7.25 5.5v2H3a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5zM8 1.564A2.415 2.415 0 1 0 3.83 4H3a2 2 0 0 0-2 2v1a2 2 0 0 0 1 1.732V12a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V8.732A2 2 0 0 0 15 7V6a2 2 0 0 0-2-2h-.83A2.415 2.415 0 1 0 8 1.565m.75 4.186V7.5H13a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5H8.75zM7.25 9H3.5v3A1.5 1.5 0 0 0 5 13.5h2.25zm1.5 4.5V9h3.75v3a1.5 1.5 0 0 1-1.5 1.5zM6.783 2.587l.182 1.276l-1.272-.254a.914.914 0 0 1 .272-1.805a.92.92 0 0 1 .818.783" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGiftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiGlobeIcon],svg[gravity-ui-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.208 12.346c-.485 1-.953 1.154-1.208 1.154s-.723-.154-1.208-1.154c-.372-.768-.647-1.858-.749-3.187a21 21 0 0 0 3.914 0c-.102 1.329-.377 2.419-.75 3.187m.788-4.699C9.358 7.714 8.69 7.75 8 7.75s-1.358-.036-1.996-.103c.037-1.696.343-3.075.788-3.993C7.277 2.654 7.745 2.5 8 2.5s.723.154 1.208 1.154c.445.918.75 2.297.788 3.993m1.478 1.306c-.085 1.516-.375 2.848-.836 3.874a5.5 5.5 0 0 0 2.843-4.364c-.621.199-1.295.364-2.007.49m1.918-2.043c-.572.204-1.21.379-1.901.514c-.056-1.671-.354-3.14-.853-4.251a5.5 5.5 0 0 1 2.754 3.737m-8.883.514c.056-1.671.354-3.14.853-4.251A5.5 5.5 0 0 0 2.608 6.91c.572.204 1.21.379 1.901.514M2.52 8.463a5.5 5.5 0 0 0 2.843 4.364c-.46-1.026-.75-2.358-.836-3.874a15.5 15.5 0 0 1-2.007-.49M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGlobeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiGpuIcon],svg[gravity-ui-gpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiGpu0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.25A.75.75 0 0 1 .75.5h.5A2.25 2.25 0 0 1 3.5 2.75V3H13a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H3.5v1.25a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 0 1.25 2h-.5A.75.75 0 0 1 0 1.25M13 4.5H3.5v7H13a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 13 4.5M8.5 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0M10 8a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiGpu0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiGpuIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiGraduationCapIcon],svg[gravity-ui-graduation-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.836 3.202L1.74 5.386a.396.396 0 0 0 0 .728l5.096 2.184a2.5 2.5 0 0 0 .985.202h.358a2.5 2.5 0 0 0 .985-.202l5.096-2.184a.396.396 0 0 0 0-.728L9.164 3.202A2.5 2.5 0 0 0 8.179 3h-.358a2.5 2.5 0 0 0-.985.202M1.5 7.642l1.5.644v3.228a2 2 0 0 0 1.106 1.789l.806.403a7 7 0 0 0 6.193.033l.909-.442a2 2 0 0 0 1.125-1.798V8.226l1.712-.734a1.896 1.896 0 0 0 0-3.484L9.755 1.823A4 4 0 0 0 8.179 1.5h-.358a4 4 0 0 0-1.576.323L1.15 4.008A1.9 1.9 0 0 0 0 5.75v4.5a.75.75 0 0 0 1.5 0zm3 3.872V8.929l1.745.748A4 4 0 0 0 7.821 10h.358a4 4 0 0 0 1.576-.323l1.884-.808v2.63a.5.5 0 0 1-.282.45l-.909.442a5.5 5.5 0 0 1-4.865-.027l-.807-.403a.5.5 0 0 1-.276-.447" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGraduationCapIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiGraphNodeIcon],svg[gravity-ui-graph-node-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.75 2.5h4.5a1.5 1.5 0 0 1 1.269.7a2.5 2.5 0 0 0 .231 4.686V12a1.5 1.5 0 0 1-1.5 1.5h-4.5c-.534 0-1.003-.28-1.269-.7a2.5 2.5 0 0 0-.231-4.686v-.228A2.501 2.501 0 0 0 4.481 3.2c.266-.42.735-.7 1.269-.7m-3 5.614v-.228a2.501 2.501 0 0 1 .146-4.812A3 3 0 0 1 5.75 1h4.5a3 3 0 0 1 2.854 2.074a2.501 2.501 0 0 1 .146 4.812V12a3 3 0 0 1-3 3h-4.5a3 3 0 0 1-2.854-2.073a2.501 2.501 0 0 1-.146-4.813M3.5 11.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-1-6a1 1 0 1 1 2 0a1 1 0 0 1-2 0m10-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGraphNodeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiGripIcon],svg[gravity-ui-grip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M5.5 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m5 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0-5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M7 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m3.5 1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGripIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiGripHorizontalIcon],svg[gravity-ui-grip-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 9a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6.5 1.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m0-5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m-5 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M13 9a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m1.5-3.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiGripHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHammerIcon],svg[gravity-ui-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiHammer0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M11.245 8.884a1.3 1.3 0 0 0-.084-.347A1.25 1.25 0 0 0 10 7.75l-4.424 6.53A2.777 2.777 0 0 1 .5 12.724v-.075c0-.736.285-1.445.796-1.976L6.75 5v-.158A2.17 2.17 0 0 0 5.55 2.9l-.117-.058A1.236 1.236 0 0 1 5.986.5H7.68a5 5 0 0 1 3.535 1.464L12.75 3.5a2 2 0 0 0 2 2l1 1l-1.06 1.06l-1.38 1.38L12.25 10l-1-1q0-.06-.005-.116m-1.091-5.859l1.164 1.164a3.5 3.5 0 0 0 2.081 2.54l-.973.974A2.75 2.75 0 0 0 10 6.25h-.796l-.446.659l-.65.96l-1.098-.975l.821-.854l.419-.436v-.762A3.67 3.67 0 0 0 6.903 2h.776a3.5 3.5 0 0 1 2.475 1.025M5.969 7.976l1.29 1.146l-2.925 4.317A1.277 1.277 0 0 1 2 12.723v-.075c0-.349.135-.684.377-.936z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiHammer0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiHammerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHandIcon],svg[gravity-ui-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiHand0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M6 3.325v5.971l-1.5-.375l-.53-.132l-.672-.168l-.205-.051a.478.478 0 0 0-.409.84l.167.13l.547.425l.43.334l2.142 1.666l2.728-.181L12 11.5l.667-3.557l.108-.579l.455-2.426l.148-.787l.009-.047a.51.51 0 0 0-.993-.234l-.013.046l-.22.77L12 5.25L11.5 7h-1V2.023a.523.523 0 0 0-1.043-.048l-.005.048l-.07.775l-.216 2.381l-.147 1.617L9 7H8l-.019-.093l-.329-1.647L7.5 4.5l-.26-1.298l-.13-.652l-.022-.108A.55.55 0 0 0 6 2.55zm-2.543 3.79l1.043.26V2.55a2.05 2.05 0 0 1 3.617-1.321A2.023 2.023 0 0 1 12 2.023v.182a2.01 2.01 0 0 1 2.861 2.176l-1.387 7.395a1.5 1.5 0 0 1-1.346 1.219l-3.302.283l-.028.002l-2.728.182a1.5 1.5 0 0 1-1.02-.313l-3.287-2.555a1.978 1.978 0 0 1 1.694-3.48m9.346 8.383a.75.75 0 0 0-.106-1.496l-7 .5a.75.75 0 1 0 .106 1.496z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiHand0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiHandIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHandOkIcon],svg[gravity-ui-hand-ok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiHandOk0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 6.963a1.186 1.186 0 0 0-1.652-1.09a1.2 1.2 0 0 0-.271.165l-.207.166l-.081.065l-.02.016a.578.578 0 0 1-.776-.848l.068-.078l.247-.282l.158-.18l.028-.033c.178-.203.38-.366.596-.49c1.175-.677 2.777-.206 3.323 1.16l.174.435l.375.937L8.5 7h1l.038-.415l.076-.839l.268-2.948l.07-.775l.005-.048A.523.523 0 0 1 11 2.023V7h1l.5-1.75l.161-.565l.22-.769l.013-.046a.51.51 0 0 1 .993.235l-.01.046l-.147.787l-.455 2.426l-.108.579L12.5 11.5l-3.302.284l-2.728.181l-.68-.189a4.43 4.43 0 0 1-3.2-3.643a.554.554 0 0 1 .549-.633h.133c.14 0 .27.076.34.2l.102.185l.045.08l.253.454l.128.23a1.258 1.258 0 0 0 2.36-.612zM1.105 8.345a2.05 2.05 0 0 1 .826-1.953a2.07 2.07 0 0 1 .433-1.943l.5-.572C4.34 2.192 6.799 2.19 8.309 3.542l.155-1.702a2.023 2.023 0 0 1 4.037.183v.182a2.01 2.01 0 0 1 2.861 2.176l-1.387 7.396a1.5 1.5 0 0 1-1.346 1.218l-3.302.283l-.028.002l-2.728.182a1.5 1.5 0 0 1-.502-.051l-.68-.19a5.93 5.93 0 0 1-4.283-4.876m12.198 7.153a.75.75 0 0 0-.107-1.496l-7 .5a.75.75 0 1 0 .107 1.496z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiHandOk0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiHandOkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHandPointDownIcon],svg[gravity-ui-hand-point-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiHandPointDown0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M6 2.5L2.263 5.406a1.978 1.978 0 0 0 1.694 3.48L5 8.625v5.433a1.942 1.942 0 0 0 3.838.421L9.5 11.5l2.744-.457A3 3 0 0 0 14.65 7.31L13.5 3zm7.2 5.197l-.872-3.272l-5.858-.39L3.184 6.59a.478.478 0 0 0 .41.84l1.042-.26L6.5 6.704v7.354a.442.442 0 0 0 .874.096l.662-2.98l.22-.987l.997-.167l2.744-.457A1.5 1.5 0 0 0 13.2 7.697m.103-7.195a.75.75 0 0 1-.106 1.496l-7-.5A.75.75 0 1 1 6.303.002z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiHandPointDown0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiHandPointDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHandPointLeftIcon],svg[gravity-ui-hand-point-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiHandPointLeft0)"><svg:path fill="currentColor" fill-rule="evenodd" d="m13.5 6l-2.906-3.737a1.978 1.978 0 0 0-3.48 1.694L7.375 5H1.942a1.942 1.942 0 0 0-.421 3.838L4.5 9.5l.457 2.744A3 3 0 0 0 8.69 14.65L13 13.5zm-5.197 7.2l3.272-.872l.39-5.858L9.41 3.184a.478.478 0 0 0-.84.41l.26 1.042l.466 1.864H1.942a.442.442 0 0 0-.096.874l2.98.662l.987.22l.167.997l.457 2.744A1.5 1.5 0 0 0 8.303 13.2m7.195.103a.75.75 0 0 1-1.496-.106l.5-7a.75.75 0 1 1 1.496.106z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiHandPointLeft0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiHandPointLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHandPointRightIcon],svg[gravity-ui-hand-point-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiHandPointRight0)"><svg:path fill="currentColor" fill-rule="evenodd" d="m2.5 6l2.906-3.737a1.978 1.978 0 0 1 3.48 1.694L8.626 5h5.432a1.942 1.942 0 0 1 .421 3.838L11.5 9.5l-.457 2.744A3 3 0 0 1 7.31 14.65L3 13.5zm5.197 7.2l-3.272-.872l-.39-5.858L6.59 3.184a.478.478 0 0 1 .84.41l-.26 1.042L6.704 6.5h7.354a.442.442 0 0 1 .096.874l-2.98.662l-.987.22l-.166.997l-.458 2.744A1.5 1.5 0 0 1 7.697 13.2m-7.195.103a.75.75 0 0 0 1.496-.106l-.5-7a.75.75 0 1 0-1.496.106z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiHandPointRight0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiHandPointRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHandPointUpIcon],svg[gravity-ui-hand-point-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiHandPointUp0)"><svg:path fill="currentColor" fill-rule="evenodd" d="m6 13.5l-3.737-2.906a1.978 1.978 0 0 1 1.694-3.48L5 7.375V1.942a1.942 1.942 0 0 1 3.838-.421L9.5 4.5l2.744.457A3 3 0 0 1 14.65 8.69L13.5 13zm7.2-5.197l-.872 3.272l-5.858.39L3.184 9.41a.478.478 0 0 1 .41-.84l1.042.26l1.864.466V1.942a.442.442 0 0 1 .874-.096l.662 2.98l.22.987l.997.167l2.744.457A1.5 1.5 0 0 1 13.2 8.303m.103 7.195a.75.75 0 0 0-.106-1.496l-7 .5a.75.75 0 1 0 .106 1.496z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiHandPointUp0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiHandPointUpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHandStopIcon],svg[gravity-ui-hand-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.618 8.405L3.47 8.118a1.988 1.988 0 0 0-1.8 3.417l2.198 1.946a7.9 7.9 0 0 0 6.14 1.932A5.34 5.34 0 0 0 14.72 9.71l-.437-5.83a2.033 2.033 0 0 0-2.511-1.822l-.005-.113a2.02 2.02 0 0 0-3.866-.739A2.04 2.04 0 0 0 4.97 2.91zm1.673-2.64l.126-1.968l.045-.707l.006-.084a.54.54 0 0 1 1.077-.015l.007.084l.064.706l.032.346l.147 1.618l.201 2.216L8 8h1l.004-.091l.146-3.822l.049-1.256l.03-.792l.002-.04A.52.52 0 0 1 10.268 2l.002.04l.03.792l.02.576l.02.524l.153 4.125l.002.063l.003.077l.002.053h1l.002-.037l.04-.762l.139-2.64l.039-.738l.003-.068a.53.53 0 0 1 .533-.505c.278 0 .51.215.531.493l.005.068l.055.737l.198 2.636l.18 2.388a3.84 3.84 0 0 1-3.389 4.1a6.4 6.4 0 0 1-4.974-1.565l-1.259-1.114L3.328 11l-.473-.42l-.19-.168a.488.488 0 0 1 .442-.84l.246.062l.613.154l.357.089l.198.05l1.479.37l.098-1.523z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHandStopIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHandsetIcon],svg[gravity-ui-handset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.125 9.833a3.7 3.7 0 0 0-1.592-1.22l-.032-.012a2.88 2.88 0 0 0-2.795.37l-.36.269a.5.5 0 0 1-.653-.047L6.807 7.307a.5.5 0 0 1-.047-.654l.27-.36A2.88 2.88 0 0 0 7.4 3.5l-.013-.032a3.7 3.7 0 0 0-1.22-1.592l-.19-.143a2.33 2.33 0 0 0-2.135-.346l-.19.063A3.48 3.48 0 0 0 1.45 3.653a4.9 4.9 0 0 0-.105 2.725a9.76 9.76 0 0 0 2.567 4.533l1.178 1.178a9.76 9.76 0 0 0 4.533 2.566c.9.226 1.845.19 2.725-.104a3.48 3.48 0 0 0 2.204-2.203l.063-.19a2.33 2.33 0 0 0-.347-2.135zM5.159 3.219l-.19-.143a.65.65 0 0 0-.596-.096l-.19.063c-.538.18-.96.602-1.14 1.14a3.2 3.2 0 0 0-.069 1.788A8.1 8.1 0 0 0 5.1 9.723l1.178 1.178a8.1 8.1 0 0 0 3.752 2.125c.59.147 1.21.123 1.787-.069c.539-.18.961-.602 1.141-1.14l.063-.19a.65.65 0 0 0-.096-.596l-.143-.19a2.03 2.03 0 0 0-.872-.668l-.032-.013a1.2 1.2 0 0 0-1.163.154l-.36.27a2.18 2.18 0 0 1-2.849-.203L5.62 8.495a2.18 2.18 0 0 1-.203-2.85l.27-.36c.25-.334.309-.774.154-1.162l-.013-.032a2.03 2.03 0 0 0-.668-.872" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHandsetIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHandsetArrowInIcon],svg[gravity-ui-handset-arrow-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11 3.94V2.75a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5h-1.19l2.72-2.72a.75.75 0 0 0-1.06-1.06z"></svg:path><svg:path d="M14.125 9.833a3.7 3.7 0 0 0-1.591-1.22l-.033-.012a2.88 2.88 0 0 0-2.794.37l-.36.269a.5.5 0 0 1-.654-.047L6.807 7.307a.5.5 0 0 1-.047-.654l.27-.36A2.88 2.88 0 0 0 7.4 3.5l-.013-.032a3.7 3.7 0 0 0-1.22-1.592l-.19-.142a2.33 2.33 0 0 0-2.135-.347l-.19.063A3.48 3.48 0 0 0 1.45 3.653a4.9 4.9 0 0 0-.104 2.725a9.76 9.76 0 0 0 2.566 4.533L5.09 12.09a9.76 9.76 0 0 0 4.533 2.567c.9.225 1.845.188 2.726-.105a3.48 3.48 0 0 0 2.203-2.203l.063-.19a2.33 2.33 0 0 0-.346-2.134zM5.159 3.219l-.19-.142a.65.65 0 0 0-.596-.097l-.19.063c-.538.18-.96.602-1.14 1.14a3.2 3.2 0 0 0-.069 1.788A8.1 8.1 0 0 0 5.1 9.723l1.178 1.178a8.1 8.1 0 0 0 3.753 2.125c.59.147 1.21.123 1.786-.069c.539-.18.962-.602 1.141-1.14l.063-.19a.65.65 0 0 0-.096-.596l-.143-.19a2.03 2.03 0 0 0-.871-.668l-.033-.013a1.2 1.2 0 0 0-1.162.154l-.36.27a2.18 2.18 0 0 1-2.85-.203L5.62 8.495a2.18 2.18 0 0 1-.203-2.85l.27-.36c.25-.334.309-.774.154-1.162l-.013-.032a2.03 2.03 0 0 0-.668-.872"></svg:path></svg:g>`,
})
export class GravityUiHandsetArrowInIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHandsetArrowOutIcon],svg[gravity-ui-handset-arrow-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.25 1a.75.75 0 0 0 0 1.5h1.19L9.97 4.97a.75.75 0 0 0 1.06 1.06l2.47-2.47v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75z"></svg:path><svg:path d="M14.125 9.833a3.7 3.7 0 0 0-1.591-1.22l-.033-.012a2.88 2.88 0 0 0-2.794.37l-.36.269a.5.5 0 0 1-.654-.047L6.807 7.307a.5.5 0 0 1-.047-.654l.27-.36A2.88 2.88 0 0 0 7.4 3.5l-.013-.032a3.7 3.7 0 0 0-1.22-1.592l-.19-.142a2.33 2.33 0 0 0-2.135-.347l-.19.063A3.48 3.48 0 0 0 1.45 3.653a4.9 4.9 0 0 0-.104 2.725a9.76 9.76 0 0 0 2.566 4.533L5.09 12.09a9.76 9.76 0 0 0 4.533 2.567c.9.225 1.845.188 2.726-.105a3.48 3.48 0 0 0 2.203-2.203l.063-.19a2.33 2.33 0 0 0-.346-2.134zM5.159 3.219l-.19-.142a.65.65 0 0 0-.596-.097l-.19.063c-.538.18-.96.602-1.14 1.14a3.2 3.2 0 0 0-.069 1.788A8.1 8.1 0 0 0 5.1 9.723l1.178 1.178a8.1 8.1 0 0 0 3.753 2.125c.59.147 1.21.123 1.786-.069c.539-.18.962-.602 1.141-1.14l.063-.19a.65.65 0 0 0-.096-.596l-.143-.19a2.03 2.03 0 0 0-.871-.668l-.033-.013a1.2 1.2 0 0 0-1.162.154l-.36.27a2.18 2.18 0 0 1-2.85-.203L5.62 8.495a2.18 2.18 0 0 1-.203-2.85l.27-.36c.25-.334.309-.774.154-1.162l-.013-.032a2.03 2.03 0 0 0-.668-.872"></svg:path></svg:g>`,
})
export class GravityUiHandsetArrowOutIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHardDriveIcon],svg[gravity-ui-hard-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 8.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 11v-1A1.5 1.5 0 0 1 4 8.5zm.89-1.366L11.488 4.33a1.5 1.5 0 0 0-1.342-.829H5.854a1.5 1.5 0 0 0-1.342.83L3.11 7.133A3 3 0 0 1 4 7h8a3 3 0 0 1 .89.134M15 9.18V11a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9.18a5 5 0 0 1 .528-2.236L3.17 3.658A3 3 0 0 1 5.854 2h4.292a3 3 0 0 1 2.683 1.658l1.643 3.286A5 5 0 0 1 15 9.18m-6 .57a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHardDriveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHashtagIcon],svg[gravity-ui-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.238 2.634a.75.75 0 1 0-1.476-.268L5.283 5H3a.75.75 0 1 0 0 1.5h2.01l-.545 3H2A.75.75 0 1 0 2 11h2.192l-.43 2.366a.75.75 0 1 0 1.476.268L5.717 11h3.475l-.43 2.366a.75.75 0 1 0 1.476.268L10.717 11H13a.75.75 0 0 0 0-1.5h-2.01l.545-3H14A.75.75 0 0 0 14 5h-2.192l.43-2.366a.75.75 0 1 0-1.476-.268L10.283 5H6.808zM9.465 9.5l.545-3H6.535l-.545 3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHashtagIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHeadingIcon],svg[gravity-ui-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 2.25A.75.75 0 0 1 5 3v4.25h6V3a.75.75 0 0 1 1.5 0v10a.75.75 0 0 1-1.5 0V8.75H5V13a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHeadingIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHeading1Icon],svg[gravity-ui-heading-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 4.25a.75.75 0 0 0-1.248-.56l-2.25 2a.75.75 0 0 0 .996 1.12l1.002-.89v5.83a.75.75 0 0 0 1.5 0zm-11.5 0a.75.75 0 0 0-1.5 0v7.496a.75.75 0 0 0 1.5 0V8.75h4v2.996a.75.75 0 0 0 1.5 0V4.25a.75.75 0 0 0-1.5 0v3h-4z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHeading1Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHeading2Icon],svg[gravity-ui-heading-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 4.25a.75.75 0 0 0-1.5 0v7.496a.75.75 0 0 0 1.5 0V8.75h4v2.996a.75.75 0 0 0 1.5 0V4.25a.75.75 0 0 0-1.5 0v3h-4zm8.403 1.783A1.364 1.364 0 0 1 12.226 5h.226a1.071 1.071 0 0 1 .672 1.906l-3.61 2.906a1.51 1.51 0 0 0 .947 2.688h3.789a.75.75 0 0 0 0-1.5h-3.793l-.003-.003l-.003-.004v-.004a.01.01 0 0 1 .004-.008l3.61-2.907A2.571 2.571 0 0 0 12.452 3.5h-.226c-1.314 0-2.46.894-2.778 2.17l-.038.148a.75.75 0 1 0 1.456.364z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHeading2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHeading3Icon],svg[gravity-ui-heading-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 4.25a.75.75 0 0 0-1.5 0v7.496a.75.75 0 0 0 1.5 0V8.75h4v2.996a.75.75 0 0 0 1.5 0V4.25a.75.75 0 0 0-1.5 0v3h-4zm8.114 1.496c.202-.504.69-.834 1.232-.834h.28a.94.94 0 0 1 .929.796l.027.18a1.15 1.15 0 0 1-.911 1.303l-.8.16a.662.662 0 0 0 .129 1.31h1.21a.89.89 0 0 1 .882 1.017a1.67 1.67 0 0 1-1.414 1.414l-.103.015a1.81 1.81 0 0 1-1.828-.9l-.018-.033a.662.662 0 0 0-1.152.652l.018.032a3.13 3.13 0 0 0 3.167 1.559l.103-.015a2.99 2.99 0 0 0 2.537-2.537a2.21 2.21 0 0 0-1.058-2.216a2.47 2.47 0 0 0 .547-1.963l-.028-.179a2.26 2.26 0 0 0-2.237-1.919h-.28a2.65 2.65 0 0 0-2.46 1.666a.662.662 0 1 0 1.228.492" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHeading3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHeading4Icon],svg[gravity-ui-heading-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.25 4.25a.75.75 0 0 0-1.347-.454l-4 5.25A.75.75 0 0 0 9.5 10.25h3.25v1.496a.75.75 0 0 0 1.5 0V10.25h.25a.75.75 0 1 0 0-1.5h-.25zm-1.5 2.222V8.75h-1.736zM2.5 4.25a.75.75 0 1 0-1.5 0v7.496a.75.75 0 0 0 1.5 0V8.75h4v2.996a.75.75 0 0 0 1.5 0V4.25a.75.75 0 1 0-1.5 0v3h-4z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHeading4Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHeading5Icon],svg[gravity-ui-heading-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 4.25a.75.75 0 0 0-1.5 0v7.496a.75.75 0 0 0 1.5 0V8.75h4v2.996a.75.75 0 0 0 1.5 0V4.25a.75.75 0 0 0-1.5 0v3h-4zm8-.75a1.25 1.25 0 0 0-1.25 1.25V7.5a.75.75 0 0 0 1.221.584l.033-.022c.04-.024.118-.067.236-.112c.235-.091.643-.2 1.26-.2c.892 0 1.534.751 1.534 1.75c0 .366-.139.735-.413 1.01c-.265.268-.7.49-1.371.49c-.568 0-.905-.184-1.094-.336a1.2 1.2 0 0 1-.24-.26l-.002-.003a.75.75 0 0 0-1.335.684l.671-.335l-.67.336v.003l.003.003l.004.01l.012.02l.034.06q.042.071.119.174c.102.136.254.31.467.48c.436.348 1.099.664 2.031.664c1.027 0 1.86-.352 2.437-.933a2.94 2.94 0 0 0 .847-2.067c0-1.591-1.096-3.25-3.034-3.25a5.6 5.6 0 0 0-1.25.133V5H14a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHeading5Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHeading6Icon],svg[gravity-ui-heading-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 4.25a.75.75 0 0 0-1.5 0v7.496a.75.75 0 0 0 1.5 0V8.75h4v2.996a.75.75 0 0 0 1.5 0V4.25a.75.75 0 0 0-1.5 0v3h-4zm9.9 2.532a4.9 4.9 0 0 0-1.843.293L12.273 5c.888 0 1.293.251 1.801.566l.006.003a.75.75 0 0 0 .79-1.275c-.59-.365-1.286-.794-2.597-.794c-.992 0-1.855.424-2.442 1.255C9.267 5.553 9 6.665 9 8c0 1.326.246 2.438.802 3.24c.583.842 1.453 1.26 2.47 1.26c1.918 0 3.228-1.236 3.228-2.795c0-.984-.388-1.74-1.024-2.237c-.607-.474-1.372-.661-2.076-.686M11.056 5.62c-.225.32-.41.794-.498 1.455L12.272 5c-.522 0-.92.201-1.217.62m-.021 4.765c-.233-.336-.418-.849-.495-1.58c.048-.056.165-.165.436-.282c.372-.16.873-.26 1.371-.242c.503.018.926.15 1.206.369c.25.195.447.504.447 1.055c0 .58-.48 1.295-1.727 1.295c-.564 0-.956-.207-1.238-.615" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHeading6Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHeadphonesIcon],svg[gravity-ui-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 8A7 7 0 1 0 1 8v4h.01a3.25 3.25 0 0 0 3.24 3h.083C5.253 15 6 14.254 6 13.333v-3.166C6 9.247 5.254 8.5 4.333 8.5H4.25c-.644 0-1.245.188-1.75.51V8a5.5 5.5 0 1 1 11 0v1.01a3.24 3.24 0 0 0-1.75-.51h-.083c-.92 0-1.667.746-1.667 1.667v3.166c0 .92.746 1.667 1.667 1.667h.083a3.25 3.25 0 0 0 3.24-3H15zm-1.5 3.75A1.75 1.75 0 0 0 11.75 10h-.083a.167.167 0 0 0-.167.167v3.166c0 .092.075.167.167.167h.083a1.75 1.75 0 0 0 1.75-1.75M4.25 13.5a1.75 1.75 0 1 1 0-3.5h.083c.092 0 .167.075.167.167v3.166a.167.167 0 0 1-.167.167z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHeadphonesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHeartIcon],svg[gravity-ui-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.633 2.796c.762-.837 1.85-1.297 3.127-1.297c1.164 0 2.407.55 3.24 1.626c.828-1.075 2.066-1.626 3.24-1.626c1.274 0 2.36.458 3.124 1.293c.756.828 1.136 1.962 1.136 3.22c0 2.166-1.113 3.909-2.522 5.264c-1.405 1.352-3.17 2.383-4.633 3.14a.75.75 0 0 1-.693-.002c-1.463-.765-3.228-1.788-4.633-3.133C1.61 9.93.5 8.193.5 6.013c0-1.255.378-2.389 1.133-3.217m1.109 1.01C2.287 4.306 2 5.053 2 6.013c0 1.624.816 2.996 2.057 4.184c1.146 1.098 2.6 1.985 3.945 2.705c1.335-.71 2.79-1.604 3.937-2.707C13.182 8.998 14 7.62 14 6.013c0-.963-.288-1.71-.744-2.21C12.808 3.314 12.14 3 11.24 3c-.976 0-2.093.628-2.527 1.95a.75.75 0 0 1-1.426 0C6.854 3.63 5.725 3 4.76 3c-.903 0-1.57.315-2.018.807" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHeartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHeartCrackIcon],svg[gravity-ui-heart-crack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.76 1.5c-1.278 0-2.365.459-3.127 1.296C.878 3.624.5 4.758.5 6.013c0 2.18 1.11 3.917 2.52 5.268c1.404 1.345 3.17 2.368 4.632 3.133a.75.75 0 0 0 .693.002c1.463-.757 3.228-1.788 4.633-3.14c1.41-1.355 2.522-3.098 2.522-5.263c0-1.26-.38-2.393-1.136-3.221c-.764-.835-1.85-1.293-3.124-1.293c-1.174 0-2.412.551-3.24 1.626c-.833-1.075-2.076-1.626-3.24-1.626M2 6.012c0-.96.287-1.708.742-2.207c.447-.492 1.115-.807 2.018-.807c.9 0 1.94.547 2.43 1.69L6.066 7.192a.75.75 0 0 0 .298.95l2.01 1.206l-.905 3.261c-1.187-.664-2.416-1.458-3.412-2.413C2.817 9.01 2 7.637 2 6.013m7.119 6.262c.993-.59 1.987-1.28 2.82-2.08C13.182 8.998 14 7.62 14 6.013c0-.963-.288-1.71-.744-2.21C12.808 3.314 12.14 3 11.24 3c-.974 0-2.088.625-2.525 1.94a1 1 0 0 1-.034.088L7.708 7.2l1.929 1.158a.75.75 0 0 1 .337.844z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHeartCrackIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHeartFillIcon],svg[gravity-ui-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.76 1.5c-1.278 0-2.365.459-3.127 1.296C.878 3.624.5 4.758.5 6.013c0 2.18 1.11 3.917 2.52 5.268c1.404 1.345 3.17 2.368 4.632 3.133a.75.75 0 0 0 .693.002c1.463-.757 3.228-1.788 4.633-3.14c1.41-1.355 2.522-3.098 2.522-5.263c0-1.26-.38-2.393-1.136-3.221c-.763-.835-1.85-1.293-3.124-1.293c-1.076 0-1.966.399-2.643 1.151A4.5 4.5 0 0 0 8 3.504a4.5 4.5 0 0 0-.597-.854C6.726 1.898 5.836 1.5 4.76 1.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHeartFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHeartPulseIcon],svg[gravity-ui-heart-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.76 1.5c-1.123 0-2.102.354-2.844 1.015C1.177 3.174.723 4.092.564 5.138a.75.75 0 1 0 1.483.225c.115-.754.428-1.336.867-1.728c.437-.39 1.048-.636 1.846-.636c.965 0 2.094.63 2.528 1.95a.75.75 0 0 0 1.425 0c.434-1.322 1.551-1.95 2.527-1.95c.9 0 1.568.314 2.016.805c.456.498.744 1.246.744 2.209c0 1.607-.818 2.985-2.061 4.182c-1.147 1.103-2.602 1.996-3.937 2.707c-1.339-.717-2.788-1.6-3.932-2.692a.75.75 0 1 0-1.036 1.085c1.402 1.338 3.16 2.357 4.618 3.12a.75.75 0 0 0 .693 0c1.463-.756 3.228-1.787 4.633-3.139c1.41-1.355 2.522-3.098 2.522-5.263c0-1.26-.38-2.393-1.136-3.221c-.764-.835-1.85-1.293-3.124-1.293c-1.174 0-2.412.551-3.24 1.626c-.833-1.075-2.076-1.626-3.24-1.626m.85 4.314a.75.75 0 0 0-1.108-.125L2.465 7.5H.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 .498-.19l1.627-1.445l2.015 2.821a.75.75 0 0 0 1.21.014l1.275-1.7H11A.75.75 0 0 0 11 7H9a.75.75 0 0 0-.6.3l-.885 1.18z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHeartPulseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHierarchyIcon],svg[gravity-ui-hierarchy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.25 2.5h-8.5a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75m0 4.5H5v3.13c0 .69.56 1.25 1.25 1.25H7v-.13A2.25 2.25 0 0 1 9.25 9h3a2.25 2.25 0 0 1 2.25 2.25v1.5A2.25 2.25 0 0 1 12.25 15h-3a2.25 2.25 0 0 1-2.246-2.12H6.25a2.75 2.75 0 0 1-2.75-2.75V6.986a2.25 2.25 0 0 1-2-2.236v-1.5A2.25 2.25 0 0 1 3.75 1h8.5a2.25 2.25 0 0 1 2.25 2.25v1.5A2.25 2.25 0 0 1 12.25 7m-3 3.5h3a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHierarchyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiHouseIcon],svg[gravity-ui-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 12.618c.307-.275.5-.674.5-1.118V6.977a1.5 1.5 0 0 0-.585-1.189l-3.5-2.692a1.5 1.5 0 0 0-1.83 0l-3.5 2.692A1.5 1.5 0 0 0 3 6.978V11.5A1.496 1.496 0 0 0 4.493 13H5V9.5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2V13h.507c.381-.002.73-.146.993-.382m2-1.118a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3V6.977A3 3 0 0 1 2.67 4.6l3.5-2.692a3 3 0 0 1 3.66 0l3.5 2.692a3 3 0 0 1 1.17 2.378zm-5-2A.5.5 0 0 0 9 9H7a.5.5 0 0 0-.5.5V13h3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHouseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiItalicIcon],svg[gravity-ui-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.25 2a.75.75 0 0 0 0 1.5h1.317l-2.7 9H4.25a.75.75 0 1 0 0 1.5h4.5a.75.75 0 0 0 0-1.5H7.433l2.7-9h1.617a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiItalicIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiKeyIcon],svg[gravity-ui-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.313 7.488L9 7.653v5.37a.5.5 0 0 1-.353.478l-1.62.498l-.006.001h-.008l-.007-.006l-.005-.007v-.003L7 13.979V7.653l-1.313-.165a1.5 1.5 0 0 1-1.271-1.144l-.588-2.5A1.5 1.5 0 0 1 5.288 2h5.424a1.5 1.5 0 0 1 1.46 1.844l-.588 2.5a1.5 1.5 0 0 1-1.271 1.144m2.731-.8A3 3 0 0 1 10.5 8.976v4.046a2 2 0 0 1-1.412 1.911l-1.62.499A1.52 1.52 0 0 1 5.5 13.979V8.977a3 3 0 0 1-2.544-2.29l-.588-2.5A3 3 0 0 1 5.288.5h5.424a3 3 0 0 1 2.92 3.687zM6.75 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiKeyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiKeyboardIcon],svg[gravity-ui-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4h10a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 13 12H3a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 3 4M0 5.5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3zm6.25 3.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM4.5 6.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-8 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m8 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiKeyboardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayersIcon],svg[gravity-ui-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m2.789 5.283l4.037-2.02A2.5 2.5 0 0 1 7.944 3h.112c.388 0 .77.09 1.118.264l4.037 2.019a.522.522 0 0 1 0 .934l-4.037 2.02a2.5 2.5 0 0 1-1.118.263h-.112a2.5 2.5 0 0 1-1.118-.264L2.79 6.217a.523.523 0 0 1 0-.934M1 5.75c0-.766.433-1.466 1.118-1.809l4.037-2.019a4 4 0 0 1 1.79-.422h.11a4 4 0 0 1 1.79.422l4.037 2.019a2.023 2.023 0 0 1 0 3.618l-.882.44l.882.442a2.023 2.023 0 0 1 0 3.618l-4.037 2.019a4 4 0 0 1-1.79.422h-.11a4 4 0 0 1-1.79-.422l-4.037-2.02a2.023 2.023 0 0 1 0-3.617L3 8l-.882-.441A2.02 2.02 0 0 1 1 5.75m3.677 3.088l-1.888.945a.523.523 0 0 0 0 .934l4.037 2.019A2.5 2.5 0 0 0 7.944 13h.112a2.5 2.5 0 0 0 1.118-.264l4.037-2.019a.523.523 0 0 0 0-.934l-1.888-.945l-1.478.74a4 4 0 0 1-1.79.422h-.11a4 4 0 0 1-1.79-.422z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayersIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayers3DiagonalIcon],svg[gravity-ui-layers-3-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiLayers3Diagonal0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M6.702 3.013L8 3.5V2.386A2 2 0 0 1 10.702.513l3.351 1.257A3 3 0 0 1 16 4.579v4.035a2 2 0 0 1-2.702 1.873L12 10v1.114a2 2 0 0 1-2.702 1.873L8 12.5v1.114a2 2 0 0 1-2.702 1.873L1.947 14.23A3 3 0 0 1 0 11.421V7.386a2 2 0 0 1 2.702-1.873L4 6V4.886a2 2 0 0 1 2.702-1.873M5.5 6.563l.553.207A3 3 0 0 1 8 9.579v1.319l1.824.684a.5.5 0 0 0 .676-.468V7.079a1.5 1.5 0 0 0-.973-1.405L6.176 4.418a.5.5 0 0 0-.676.468zm4.553-2.293L9.5 4.062V2.386a.5.5 0 0 1 .676-.468l3.35 1.256c.586.22.974.78.974 1.405v4.035a.5.5 0 0 1-.676.468L12 8.398V7.079a3 3 0 0 0-1.947-2.809M1.5 11.421V7.386a.5.5 0 0 1 .676-.468l3.35 1.257c.586.219.974.779.974 1.404v4.035a.5.5 0 0 1-.676.468l-3.35-1.257a1.5 1.5 0 0 1-.974-1.404" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiLayers3Diagonal0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiLayers3DiagonalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayersVerticalIcon],svg[gravity-ui-layers-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.283 13.211l-2.02-4.037A2.5 2.5 0 0 1 3 8.056v-.112c0-.388.09-.77.264-1.118L5.283 2.79a.523.523 0 0 1 .934 0l2.02 4.037A2.5 2.5 0 0 1 8.5 7.944v.112c0 .388-.09.77-.264 1.118L6.217 13.21a.523.523 0 0 1-.934 0M5.75 15a2.02 2.02 0 0 1-1.809-1.118L1.922 9.845a4 4 0 0 1-.422-1.79v-.11a4 4 0 0 1 .422-1.79l2.019-4.037a2.023 2.023 0 0 1 3.618 0l.44.882l.442-.882a2.023 2.023 0 0 1 3.618 0l2.019 4.037a4 4 0 0 1 .422 1.79v.11a4 4 0 0 1-.422 1.79l-2.02 4.037a2.022 2.022 0 0 1-3.617 0L8 13l-.441.882A2.02 2.02 0 0 1 5.75 15m3.088-3.677l.945 1.888a.523.523 0 0 0 .934 0l2.019-4.037A2.5 2.5 0 0 0 13 8.056v-.112a2.5 2.5 0 0 0-.264-1.118L10.717 2.79a.523.523 0 0 0-.934 0l-.945 1.888l.74 1.478A4 4 0 0 1 10 7.945v.11a4 4 0 0 1-.422 1.79z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayersVerticalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutCellsIcon],svg[gravity-ui-layout-cells-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 3.5h-2.5v2h2.5zM4 3.5h1.25v2H2.5V5A1.5 1.5 0 0 1 4 3.5M2.5 7h2.75v2H2.5zm0 3.5v.5A1.5 1.5 0 0 0 4 12.5h1.25v-2zm4.25 0v2h2.5v-2zm4 0v2H12a1.5 1.5 0 0 0 1.5-1.5v-.5zM13.5 9h-2.75V7h2.75zM9.25 9h-2.5V7h2.5zm1.5-5.5v2h2.75V5A1.5 1.5 0 0 0 12 3.5zM4 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutCellsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutCellsLargeIcon],svg[gravity-ui-layout-cells-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.5H8.75v3.75h4.75V5A1.5 1.5 0 0 0 12 3.5m1.5 5.25H8.75v3.75H12a1.5 1.5 0 0 0 1.5-1.5zm-6.25-1.5V3.5H4A1.5 1.5 0 0 0 2.5 5v2.25zM2.5 8.75h4.75v3.75H4A1.5 1.5 0 0 1 2.5 11zM4 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutCellsLargeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutColumnsIcon],svg[gravity-ui-layout-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 3.5H12A1.5 1.5 0 0 1 13.5 5v6a1.5 1.5 0 0 1-1.5 1.5H8.75zm-1.5 0H4A1.5 1.5 0 0 0 2.5 5v6A1.5 1.5 0 0 0 4 12.5h3.25zM1 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutColumnsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutColumns3Icon],svg[gravity-ui-layout-columns-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.5h-1.25v9H12a1.5 1.5 0 0 0 1.5-1.5V5A1.5 1.5 0 0 0 12 3.5m-5.25 0h2.5v9h-2.5zm-1.5 0H4A1.5 1.5 0 0 0 2.5 5v6A1.5 1.5 0 0 0 4 12.5h1.25zM4 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutColumns3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutFooterIcon],svg[gravity-ui-layout-footer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 12.5h8a1.5 1.5 0 0 0 1.5-1.5v-.5h-11v.5A1.5 1.5 0 0 0 4 12.5M2.5 9V5A1.5 1.5 0 0 1 4 3.5h8A1.5 1.5 0 0 1 13.5 5v4zM1 11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutFooterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutHeaderIcon],svg[gravity-ui-layout-header-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3.5h8A1.5 1.5 0 0 1 13.5 5v.5h-11V5A1.5 1.5 0 0 1 4 3.5M2.5 7v4A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5V7zM1 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutHeaderIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutHeaderCellsIcon],svg[gravity-ui-layout-header-cells-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.5H4A1.5 1.5 0 0 0 2.5 5v.5h11V5A1.5 1.5 0 0 0 12 3.5M2.5 9V7h2.75v2zm0 1.5v.5A1.5 1.5 0 0 0 4 12.5h1.25v-2zm4.25 0v2h2.5v-2zm4 0v2H12a1.5 1.5 0 0 0 1.5-1.5v-.5zM13.5 9h-2.75V7h2.75zM9.25 9h-2.5V7h2.5zM4 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutHeaderCellsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutHeaderCellsLargeIcon],svg[gravity-ui-layout-header-cells-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3.5h8A1.5 1.5 0 0 1 13.5 5v.5h-11V5A1.5 1.5 0 0 1 4 3.5m-1.5 7v.5A1.5 1.5 0 0 0 4 12.5h3.25v-2zm0-1.5h4.75V7H2.5zm6.25 1.5v2H12a1.5 1.5 0 0 0 1.5-1.5v-.5zM13.5 9H8.75V7h4.75zM1 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutHeaderCellsLargeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutHeaderCellsLargeFillIcon],svg[gravity-ui-layout-header-cells-large-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 6H8.75v2.5h4.75zM7.25 6H2.5v2.5h4.75zM1 6V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm7.75 4h4.75v1a1.5 1.5 0 0 1-1.5 1.5H8.75zM2.5 10h4.75v2.5H4A1.5 1.5 0 0 1 2.5 11z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutHeaderCellsLargeFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutHeaderCellsLargeLetterDIcon],svg[gravity-ui-layout-header-cells-large-letter-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3.5h8A1.5 1.5 0 0 1 13.5 5v.5h-11V5A1.5 1.5 0 0 1 4 3.5m-1.5 7v.5A1.5 1.5 0 0 0 4 12.5h3.25v-2zm0-1.5h4.75V7H2.5zm6.25 1.5V14H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2H8.75zm3.67-1.995a3.25 3.25 0 0 1 0 6.5h-1.17a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 .75-.75zm0 5a1.75 1.75 0 1 0 0-3.5H12v3.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutHeaderCellsLargeLetterDIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutHeaderCellsLargeThunderboltIcon],svg[gravity-ui-layout-header-cells-large-thunderbolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3.5h8A1.5 1.5 0 0 1 13.5 5v.5h-11V5A1.5 1.5 0 0 1 4 3.5m-1.5 7v.5A1.5 1.5 0 0 0 4 12.5h3.25v-2zm0-1.5h4.75V7H2.5zm6.25 1.5V14H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2H8.75zm4.592-.91A.75.75 0 0 0 12 8.92l-1.25 2.5a.75.75 0 0 0 .67 1.085h1.287L12 13.92a.75.75 0 0 0 1.342.67l1.25-2.5a.75.75 0 0 0-.671-1.085h-1.287z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutHeaderCellsLargeThunderboltIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutHeaderColumnsIcon],svg[gravity-ui-layout-header-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.5H4A1.5 1.5 0 0 0 2.5 5v.5h11V5A1.5 1.5 0 0 0 12 3.5M2.5 11V7h4.75v5.5H4A1.5 1.5 0 0 1 2.5 11m6.25 1.5H12a1.5 1.5 0 0 0 1.5-1.5V7H8.75zM4 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutHeaderColumnsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutHeaderCursorIcon],svg[gravity-ui-layout-header-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3h8a1.5 1.5 0 0 1 1.5 1.5V5h-11v-.5A1.5 1.5 0 0 1 4 3m9.5 5.25V6.5h-11V10A1.5 1.5 0 0 0 4 11.5h2.75a.75.75 0 0 1 0 1.5H4a3 3 0 0 1-3-3V4.5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.75a.75.75 0 0 1-1.5 0m-3.272-.078A.75.75 0 0 0 9 8.75v5.544a.75.75 0 0 0 1.335.469l.898-1.12l.846 1.692a.75.75 0 1 0 1.342-.67l-.827-1.654H14a.75.75 0 0 0 .478-1.328z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutHeaderCursorIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutHeaderSideContentIcon],svg[gravity-ui-layout-header-side-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.5H4A1.5 1.5 0 0 0 2.5 5v.5h11V5A1.5 1.5 0 0 0 12 3.5M2.5 11V7h2v5.5H4A1.5 1.5 0 0 1 2.5 11M6 12.5h6a1.5 1.5 0 0 0 1.5-1.5V7H6zM4 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutHeaderSideContentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutListIcon],svg[gravity-ui-layout-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3.5h1.25v2H2.5V5A1.5 1.5 0 0 1 4 3.5m2.75 2v-2H12A1.5 1.5 0 0 1 13.5 5v.5zM2.5 7h2.75v2H2.5zm0 3.5v.5A1.5 1.5 0 0 0 4 12.5h1.25v-2zm4.25 0v2H12a1.5 1.5 0 0 0 1.5-1.5v-.5zM13.5 9V7H6.75v2zM1 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutListIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutRowsIcon],svg[gravity-ui-layout-rows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3.5h8A1.5 1.5 0 0 1 13.5 5v2.25h-11V5A1.5 1.5 0 0 1 4 3.5M2.5 8.75V11A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5V8.75zM1 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutRowsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutRows3Icon],svg[gravity-ui-layout-rows-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.5H4A1.5 1.5 0 0 0 2.5 5v.5h11V5A1.5 1.5 0 0 0 12 3.5M2.5 9V7h11v2zm0 1.5v.5A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5v-.5zM4 2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutRows3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutSideContentIcon],svg[gravity-ui-layout-side-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 3.5h6A1.5 1.5 0 0 1 13.5 5v6a1.5 1.5 0 0 1-1.5 1.5H6zm-1.5 0H4A1.5 1.5 0 0 0 2.5 5v6A1.5 1.5 0 0 0 4 12.5h.5zM1 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutSideContentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutSideContentLeftIcon],svg[gravity-ui-layout-side-content-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 3.5h6A1.5 1.5 0 0 1 13.5 5v6a1.5 1.5 0 0 1-1.5 1.5H6zm-1.5 0H4A1.5 1.5 0 0 0 2.5 5v6A1.5 1.5 0 0 0 4 12.5h.5zM1 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutSideContentLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutSideContentRightIcon],svg[gravity-ui-layout-side-content-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 3.5H4A1.5 1.5 0 0 0 2.5 5v6A1.5 1.5 0 0 0 4 12.5h6zm1.5 0h.5A1.5 1.5 0 0 1 13.5 5v6a1.5 1.5 0 0 1-1.5 1.5h-.5zM15 5a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutSideContentRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutSplitColumnsIcon],svg[gravity-ui-layout-split-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiLayoutSplitColumns0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M5 12.5H3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1M3 14h2a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 5 2H3A2.5 2.5 0 0 0 .5 4.5v7A2.5 2.5 0 0 0 3 14m10-1.5h-2a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1M11 14h2a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 13 2h-2a2.5 2.5 0 0 0-2.5 2.5v7A2.5 2.5 0 0 0 11 14" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiLayoutSplitColumns0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiLayoutSplitColumnsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutSplitColumns3Icon],svg[gravity-ui-layout-split-columns-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiLayoutSplitColumns30)"><svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 12.5H3a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5h-.5A.5.5 0 0 0 2 4v8a.5.5 0 0 0 .5.5M3 14h-.5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2H3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2m4.75-1.5h.5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5m.5 1.5h-.5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2m5.25-1.5H13a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5M13 14h.5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H13a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiLayoutSplitColumns30"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiLayoutSplitColumns3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutSplitRowsIcon],svg[gravity-ui-layout-split-rows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 4v1a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1M15 5V4a2.5 2.5 0 0 0-2.5-2.5h-9A2.5 2.5 0 0 0 1 4v1a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 15 5m-1.5 6v1a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1m1.5 1v-1a2.5 2.5 0 0 0-2.5-2.5h-9A2.5 2.5 0 0 0 1 11v1a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 15 12" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutSplitRowsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutSplitSideContentLeftIcon],svg[gravity-ui-layout-split-side-content-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiLayoutSplitSideContentLeft0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M3 12.5h-.5A.5.5 0 0 1 2 12V4a.5.5 0 0 1 .5-.5H3a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5M2.5 14H3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-.5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2M13 12.5H8.5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1H13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1M8.5 14H13a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 13 2H8.5A2.5 2.5 0 0 0 6 4.5v7A2.5 2.5 0 0 0 8.5 14" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiLayoutSplitSideContentLeft0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiLayoutSplitSideContentLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutSplitSideContentRightIcon],svg[gravity-ui-layout-split-side-content-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiLayoutSplitSideContentRight0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M3 12.5h4.5a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1M7.5 14H3a2.5 2.5 0 0 1-2.5-2.5v-7A2.5 2.5 0 0 1 3 2h4.5A2.5 2.5 0 0 1 10 4.5v7A2.5 2.5 0 0 1 7.5 14m5.5-1.5h.5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H13a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5m.5 1.5H13a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiLayoutSplitSideContentRight0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiLayoutSplitSideContentRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutTabsIcon],svg[gravity-ui-layout-tabs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.999 3.5h.242c.559 0 1.049.37 1.202.907l.171.598A2.75 2.75 0 0 0 8.26 7h5.24v4a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 11V5a1.5 1.5 0 0 1 1.499-1.5m9.501 2h-1.242a1.25 1.25 0 0 1-1.201-.907l-.171-.598a3 3 0 0 0-.195-.495H12A1.5 1.5 0 0 1 13.5 5zM8.241 2H4a3 3 0 0 0-.457.035A3 3 0 0 0 2 2.764A3 3 0 0 0 1 5v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM7 3.5h1.242c.559 0 1.049.37 1.202.907l.171.598q.075.261.195.495H8.26a1.25 1.25 0 0 1-1.202-.907l-.171-.598A3 3 0 0 0 6.69 3.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLayoutTabsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLetterGroupIcon],svg[gravity-ui-letter-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 2.75a.75.75 0 0 0-1.5 0v7.506a.75.75 0 0 0 1.388.395c.38.223.834.349 1.362.349C13.045 11 14 9.545 14 7.75s-.955-3.25-2.75-3.25a2.7 2.7 0 0 0-1.25.287zm0 5c0 .65.175 1.109.38 1.37c.174.22.424.38.87.38s.696-.16.87-.38c.205-.261.38-.72.38-1.37s-.175-1.109-.38-1.37c-.174-.22-.424-.38-.87-.38s-.696.16-.87.38c-.205.261-.38.72-.38 1.37M3.58 6.339a2.3 2.3 0 0 1 .432-.222c.132-.046.321-.086.634-.086c.447 0 .743.143.938.365c.12.138.23.338.302.622h-1.31c-1.262 0-2.332.849-2.326 1.998c.003.478.168.988.561 1.381c.4.4.963.61 1.627.61c.53 0 1.091-.16 1.584-.472a.75.75 0 0 0 1.447-.279V7.768c0-.946-.237-1.766-.756-2.36c-.53-.606-1.271-.877-2.067-.877c-.452 0-.811.06-1.125.169c-.293.101-.52.237-.689.338l-.022.013a.75.75 0 1 0 .77 1.288m.17 2.67c0-.095.154-.49.827-.49h1.258c-.268.677-.89.987-1.397.987c-.345 0-.499-.102-.566-.169a.46.46 0 0 1-.122-.329M0 11.75A2.25 2.25 0 0 0 2.25 14h11.5A2.25 2.25 0 0 0 16 11.75v-1a.75.75 0 0 0-1.5 0v1a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLetterGroupIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLetterMIcon],svg[gravity-ui-letter-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.062 2c.454 0 .876.234 1.115.62L8 7.162l2.823-4.542a1.312 1.312 0 0 1 2.427.692v9.938a.75.75 0 0 1-1.5 0V3.97L8.637 8.98a.75.75 0 0 1-1.274 0L4.25 3.97v9.28a.75.75 0 0 1-1.5 0V3.312C2.75 2.588 3.338 2 4.062 2" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLetterMIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLifeRingIcon],svg[gravity-ui-life-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 13.5c1.248 0 2.4-.416 3.323-1.117l-1.436-1.435A3.5 3.5 0 0 1 8 11.5a3.5 3.5 0 0 1-1.887-.552l-1.436 1.435A5.48 5.48 0 0 0 8 13.5M5.052 9.887A3.5 3.5 0 0 1 4.5 8c0-.695.203-1.343.552-1.887L3.617 4.677A5.48 5.48 0 0 0 2.5 8c0 1.248.416 2.4 1.117 3.323zm1.06-4.835L4.678 3.617A5.48 5.48 0 0 1 8 2.5c1.248 0 2.4.416 3.323 1.117L9.887 5.052A3.5 3.5 0 0 0 8 4.5c-.695 0-1.343.203-1.887.552m4.836 1.06c.35.545.552 1.193.552 1.888s-.203 1.343-.552 1.887l1.435 1.436A5.48 5.48 0 0 0 13.5 8c0-1.248-.416-2.4-1.117-3.323zM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m2-7a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLifeRingIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLinkIcon],svg[gravity-ui-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.47 6.53a.75.75 0 0 1 1.06 1.061l-.727.727a2.743 2.743 0 0 0 3.879 3.879l.727-.727a.75.75 0 0 1 1.06 1.06l-.726.727a4.243 4.243 0 0 1-6-6zm8 1.879a.75.75 0 0 0 1.06 1.06l.727-.726a4.243 4.243 0 0 0-6-6l-.727.727a.75.75 0 0 0 1.061 1.06l.727-.727a2.743 2.743 0 0 1 3.879 3.879zm-.94-1.879a.75.75 0 1 0-1.06-1.06l-4 4a.75.75 0 1 0 1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLinkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLinkSlashIcon],svg[gravity-ui-link-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 9.06l4.97 4.97a.75.75 0 1 0 1.06-1.06l-11-11a.75.75 0 0 0-1.06 1.06L6.94 8L5.47 9.47a.75.75 0 1 0 1.06 1.06zm3.54-.722L12.601 9.4l.656-.656a4.243 4.243 0 0 0-6-6l-.656.656l1.06 1.06l.657-.656a2.743 2.743 0 0 1 3.879 3.879zM9.47 5.47l-.4.399l1.061 1.06l.4-.399A.75.75 0 1 0 9.47 5.47M3.22 6.78a.75.75 0 0 1 1.06 1.061l-.477.477a2.743 2.743 0 0 0 3.879 3.879l.477-.477a.75.75 0 0 1 1.06 1.06l-.476.477a4.243 4.243 0 0 1-6-6z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLinkSlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiListCheckIcon],svg[gravity-ui-list-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.28 2.22a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 0 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0M6.5 3.75c0 .414.336.75.75.75h7a.75.75 0 0 0 0-1.5h-7a.75.75 0 0 0-.75.75m.75 3.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm-1.97.03a.75.75 0 0 0-1.06-1.06L2.75 7.69l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zm0 3.19a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0m1.97 1.03a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiListCheckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiListCheckLockIcon],svg[gravity-ui-list-check-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.28 2.22a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 0 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0M7.25 3h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5M5.28 7.28a.75.75 0 0 0-1.06-1.06L2.75 7.69l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zm0 3.19a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0M8.4 9h.1a2.5 2.5 0 0 1 5 0h.1a1.4 1.4 0 0 1 1.4 1.4v2.2a1.4 1.4 0 0 1-1.4 1.4H8.4A1.4 1.4 0 0 1 7 12.6v-2.2A1.4 1.4 0 0 1 8.4 9M11 8a1 1 0 0 1 1 1h-2a1 1 0 0 1 1-1m-2.5 2.5v2h5v-2z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiListCheckLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiListOlIcon],svg[gravity-ui-list-ol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.21 2.5a.5.5 0 0 0-.796-.403l-.71.524a.5.5 0 0 0 .507.856V5a.5.5 0 0 0 1 0zm2.54.5a.75.75 0 1 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zm0 8.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM5 8a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 8m-2.596-.67c-.07.051-.087.097-.09.116a.5.5 0 0 1-.988-.149c.051-.345.26-.61.495-.779c.236-.169.531-.268.83-.268c.345 0 .666.109.902.343s.337.543.337.85c0 .51-.321.855-.76 1.278l-.02.018l-.013.011h.493a.5.5 0 0 1 0 1H1.75a.5.5 0 0 1-.326-.879l1.022-.88c.223-.216.338-.344.398-.434c.046-.069.046-.092.046-.111v-.002c0-.09-.027-.127-.041-.141c-.013-.013-.062-.053-.199-.053a.44.44 0 0 0-.246.08M1.9 10.5a.5.5 0 0 0 0 1h.38l-.15.18a.5.5 0 0 0 .383.82c.259 0 .365.077.407.122c.051.054.08.133.08.218a.02.02 0 0 1-.004.014a.2.2 0 0 1-.057.052a.7.7 0 0 1-.371.094a.55.55 0 0 1-.258-.057c-.059-.032-.075-.061-.076-.064a.5.5 0 0 0-.91.416c.213.464.728.705 1.244.705c.319 0 .651-.082.92-.258c.275-.181.512-.487.512-.902c0-.293-.096-.634-.355-.906a1.3 1.3 0 0 0-.252-.206l.34-.407a.5.5 0 0 0-.383-.821z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiListOlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiListTimelineIcon],svg[gravity-ui-list-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.75.5a.75.75 0 0 0-.75.75v13.5a.75.75 0 0 0 1.5 0V1.25A.75.75 0 0 0 5.75.5m-2 3.5a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m4 0a.75.75 0 0 1 .75-.75h5.75a.75.75 0 0 1 0 1.5H8.5A.75.75 0 0 1 7.75 4m0 8a.75.75 0 0 1 .75-.75h5.75a.75.75 0 0 1 0 1.5H8.5a.75.75 0 0 1-.75-.75m.75-4.75a.75.75 0 0 0 0 1.5h5.75a.75.75 0 0 0 0-1.5zm-6 2a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M3.75 12a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiListTimelineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiListUlIcon],svg[gravity-ui-list-ul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m3.25-2a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zm0 8.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM5 8a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 8M3.75 8a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M2.5 13.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiListUlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLocationArrowIcon],svg[gravity-ui-location-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.16 13.134L6.5 9.5l-3.634-.66a2.272 2.272 0 0 1-.355-4.377l9.358-3.327a2.346 2.346 0 0 1 2.996 2.995l-3.328 9.358a2.272 2.272 0 0 1-4.376-.355m2.964-.148L13.45 3.63a.844.844 0 0 0-1.08-1.08L3.014 5.876a.772.772 0 0 0 .12 1.487l3.634.661l1.022.186l.186 1.022l.66 3.634a.772.772 0 0 0 1.488.12" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLocationArrowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLocationArrowFillIcon],svg[gravity-ui-location-arrow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.924 13.894l3.95-10.316a1.9 1.9 0 0 0-2.452-2.452L2.106 5.076a1.722 1.722 0 0 0 .163 3.27L6.5 9.5l1.154 4.231a1.722 1.722 0 0 0 3.27.163"></svg:path>`,
})
export class GravityUiLocationArrowFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLockIcon],svg[gravity-ui-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 6V5a2.5 2.5 0 0 0-5 0v1zM4 5v1a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3V5a4 4 0 0 0-8 0m6.5 2.5H12A1.5 1.5 0 0 1 13.5 9v3a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 12V9A1.5 1.5 0 0 1 4 7.5zm-1.75 2a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLockOpenIcon],svg[gravity-ui-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 5a2.5 2.5 0 0 0-4.532-1.456c-.242.336-.66.559-1.052.428c-.393-.131-.611-.56-.41-.922A4 4 0 0 1 12 5v1h.001a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6.5zm.75 2.5H4A1.5 1.5 0 0 0 2.5 9v3A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 12 7.5zM8 8.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 8.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLockOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoAcrobatIcon],svg[gravity-ui-logo-acrobat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiLogoAcrobat0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M7.363 1.5c-.094.007-.377.122-.377.622c0 .593.12 1.248.337 1.927c.209-.799.319-1.463.319-1.927c0-.359-.097-.513-.144-.565a.16.16 0 0 0-.135-.057m.885 4.637q.092-.262.174-.518c.431-1.326.72-2.587.72-3.497c0-.625-.173-1.173-.53-1.57A1.65 1.65 0 0 0 7.265.004c-.984.064-1.779.933-1.779 2.118c0 1.314.44 2.758 1.126 4.13a31 31 0 0 1-1.465 3.305c-.9.302-1.745.648-2.475 1.025c-.714.368-1.352.783-1.822 1.24c-.46.448-.85 1.027-.85 1.715c0 .465.157.91.488 1.243c.33.332.776.491 1.242.491c.541 0 1.038-.242 1.458-.547c.428-.311.844-.738 1.24-1.225c.604-.744 1.203-1.683 1.758-2.699a24.5 24.5 0 0 1 3.143-.739a11.3 11.3 0 0 0 1.606 1.369c.925.639 1.945 1.086 2.943 1.086c.507 0 1.034-.126 1.45-.46c.438-.353.672-.871.672-1.47c0-.758-.412-1.313-.983-1.66c-.535-.327-1.231-.49-1.958-.563c-.925-.092-2.02-.047-3.167.1a14 14 0 0 1-1.644-2.325m-.675 1.76a33 33 0 0 1-.481 1.095a26 26 0 0 1 1.093-.246a16 16 0 0 1-.612-.849m3.734 1.938q.24.195.481.36c.802.554 1.521.82 2.09.82c.277 0 .436-.07.51-.13c.052-.041.112-.113.112-.3c0-.129-.04-.244-.263-.38c-.258-.156-.695-.288-1.327-.35a10.5 10.5 0 0 0-1.603-.02m-7.374 1.803q-.3.135-.574.277c-.645.333-1.14.668-1.463.982c-.334.326-.396.54-.396.639c0 .126.039.172.05.184c.013.012.057.05.18.05c.095 0 .284-.047.576-.26c.285-.207.608-.528.957-.957q.333-.411.67-.915" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiLogoAcrobat0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiLogoAcrobatIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoAndroidIcon],svg[gravity-ui-logo-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.48 9.83c-.39-2.392-1.768-4.268-3.653-5.338l1.106-2.432a.75.75 0 1 0-1.366-.62l-1.112 2.446A7.9 7.9 0 0 0 8 3.5a7.9 7.9 0 0 0-2.455.386L4.433 1.44a.75.75 0 1 0-1.366.62l1.106 2.432C2.288 5.562.909 7.438.52 9.83c-.13.798-.178 1.655.107 2.433c.325.89.989 1.441 1.768 1.75c.701.28 1.54.383 2.404.433c.887.052 1.963.054 3.201.054s2.314-.002 3.2-.054c.864-.05 1.704-.154 2.405-.432c.78-.31 1.443-.86 1.768-1.75c.285-.78.237-1.636.107-2.434M2 10.071C1.53 12.961 3 13 8 13s6.47-.038 6-2.929C13.5 7 11 5 8 5s-5.5 2-6 5.071m8.5 1.179a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-.75.75m-5.75-.75a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLogoAndroidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoDockerIcon],svg[gravity-ui-logo-docker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiLogoDocker0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 0c-.69 0-1.25.56-1.25 1.25v2h-2C1.56 3.25 1 3.81 1 4.5v2.382l-.06.057L1 7v.002l-.062-.06l-.002.001l-.003.004l-.006.006l-.014.014a2 2 0 0 0-.092.105q-.068.082-.147.198a3.3 3.3 0 0 0-.317.611C.154 8.39 0 9.08 0 10v.009a4.9 4.9 0 0 0 1.455 3.46C2.434 14.437 3.825 15 5.5 15c2.071 0 3.785-.59 5.107-1.637c.997-.79 1.713-1.796 2.195-2.886a5.3 5.3 0 0 0 .99-.153c.819-.218 1.579-.711 2.05-1.653a1.5 1.5 0 0 0 .081-1.146c-.321-.962-1.12-1.636-2.071-1.877c-.24-.95-.915-1.75-1.877-2.071a1.5 1.5 0 0 0-1.146.081c-1.092.546-1.502 1.583-1.668 2.329q-.056.256-.089.513H9V1.25C9 .56 8.44 0 7.75 0zm2 6.5V4.75H5.75V6.5zm-3.25 0V4.75H2.5V6.5zM2 8s-.5.5-.5 2c.01 1.738 1.344 3.5 4 3.5c3.55 0 5.5-2 6.25-4.5C13 9 14 9 14.5 8a1.37 1.37 0 0 0-.655-.756c-.434-.237-1.014-.284-1.595.006c.29-.58.243-1.161.006-1.595A1.37 1.37 0 0 0 11.5 5c-1 .5-1 2-1 3zm3.75-4.75H7.5V1.5H5.75zM4.25 9a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 4.25 9" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiLogoDocker0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiLogoDockerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoDrawIoIcon],svg[gravity-ui-logo-draw-io-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 12.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5m2 1.5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1.85l-.847-1.482A2 2 0 0 0 11 5V3a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2c0 .607.27 1.151.697 1.518L4.85 8H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2c0-.607-.27-1.151-.697-1.518L7.15 7h1.7l.848 1.482C9.27 8.85 9 9.392 9 10v2a2 2 0 0 0 2 2zM3 12.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5m6-7H7a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLogoDrawIoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoFacebookIcon],svg[gravity-ui-logo-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 13.478a5.5 5.5 0 1 0-1.5-.069V9.75H5.75a.75.75 0 0 1 0-1.5H7V7.24c0-.884.262-1.568.722-2.032S8.843 4.5 9.644 4.5c.273 0 .612.04.948.213a.75.75 0 0 1-.685 1.334A.6.6 0 0 0 9.644 6c-.493 0-.737.144-.857.265c-.12.12-.287.39-.287.975v1.01h1.25a.75.75 0 0 1 0 1.5H8.5zM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLogoFacebookIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoGitlabIcon],svg[gravity-ui-logo-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.357 7H6.643l1.08 6.267a.28.28 0 0 0 .554 0zM4.511 3.465l-.153-.691a.35.35 0 0 0-.684.007L2.522 8.537a1.14 1.14 0 0 0 .39 1.103l3.11 2.593zm5.466 8.768l3.111-2.593a1.14 1.14 0 0 0 .39-1.103l-1.152-5.756a.35.35 0 0 0-.684-.007l-.153.692zm-8.026-1.44l4.493 3.743a2 2 0 0 0 1.28.464h.552a2 2 0 0 0 1.28-.464l4.493-3.743a2.64 2.64 0 0 0 .9-2.55l-1.152-5.756a1.85 1.85 0 0 0-3.619-.039L9.5 5.5h-3l-.678-3.052a1.85 1.85 0 0 0-3.62.039l-1.15 5.756a2.64 2.64 0 0 0 .9 2.55" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLogoGitlabIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoLinuxIcon],svg[gravity-ui-logo-linux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.854 3.47a2.7 2.7 0 0 1 1.934.102l.618.275q.108.048.205.11q.004-.188.023-.377l.05-.495a1.441 1.441 0 1 0-2.868 0zm3.243 2.725a1.6 1.6 0 0 1-.423.433L7.95 7.835a1 1 0 0 1-1.468-.372l-.23-.46l-.99 2.226a3.04 3.04 0 0 0-.217 1.758c.46.333.81.817.968 1.393l.123.451c.52.419 1.181.669 1.901.669h.54q.053 0 .105-.002l.305-1.118a2.564 2.564 0 0 1 2.98-1.829q.033-.233.033-.473c0-.714-.223-1.41-.637-1.99l-.842-1.177a5 5 0 0 1-.424-.716m3.242 5.135a4.93 4.93 0 0 0-.756-4.114l-.841-1.177a3.4 3.4 0 0 1-.615-2.31l.05-.495a2.941 2.941 0 1 0-5.854 0l.08.8a3.67 3.67 0 0 1-.298 1.854L3.891 8.62a4.5 4.5 0 0 0-.39 1.88A2.54 2.54 0 0 0 1 13.027c0 1.16.79 2.17 1.914 2.452l1.92.48a1.396 1.396 0 0 0 1.727-1.204c.463.159.96.245 1.476.245h.451a1.396 1.396 0 0 0 1.679.958l1.919-.48A2.53 2.53 0 0 0 14 13.028c0-.653-.25-1.248-.66-1.697M8.18 4.943l.617.275c.03.013.04.025.044.032q.013.016.018.053a.1.1 0 0 1-.007.056c-.004.008-.01.022-.037.04l-1.25.875l-.549-1.097a.127.127 0 0 1 .048-.166a1.21 1.21 0 0 1 1.115-.068m-4.901 9.08l1.747.437l-.46-1.685A1.064 1.064 0 0 0 3.542 12c-.578 0-1.041.47-1.041 1.027c0 .471.32.882.778.996m6.697.437l1.747-.437c.457-.114.778-.525.778-.996c0-.557-.463-1.027-1.04-1.027c-.482 0-.903.324-1.026.775z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLogoLinuxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoMacosIcon],svg[gravity-ui-logo-macos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.063 3.5H12A1.5 1.5 0 0 1 13.5 5v6a1.5 1.5 0 0 1-1.5 1.5h-1.441l-.029-.03c-.75-.75-.78-1.425-.78-3.22A.75.75 0 0 0 9 8.5H7.753c.018-1.895.162-3.441 1.31-5m-1.777 0H4A1.5 1.5 0 0 0 2.5 5v6A1.5 1.5 0 0 0 4 12.5h4.714c-.38-.76-.45-1.574-.462-2.5H7a.75.75 0 0 1-.75-.75v-.07c0-1.89 0-3.791 1.036-5.68M1 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm9.25 2.25a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-1.5 0zM4.75 8A.75.75 0 0 1 4 7.25v-1a.75.75 0 0 1 1.5 0v1a.75.75 0 0 1-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLogoMacosIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoMarkdownIcon],svg[gravity-ui-logo-markdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.443 4.699A1.294 1.294 0 0 0 1 5.294v5.956a.75.75 0 0 0 1.5 0V6.139l1.834 3.54a.75.75 0 0 0 1.332 0L7.5 6.138v5.111a.75.75 0 0 0 1.5 0V5.294A1.294 1.294 0 0 0 6.557 4.7L5 7.703zm9.807.051a.75.75 0 0 0-1.5 0v4.69l-.47-.47a.75.75 0 1 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l1.75-1.75a.75.75 0 1 0-1.06-1.06l-.47.47z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLogoMarkdownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoMermaidIcon],svg[gravity-ui-logo-mermaid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 12.5A1.5 1.5 0 0 1 10 14H6a1.5 1.5 0 0 1-1.5-1.5v-.823a3.11 3.11 0 0 0-1.35-2.566A6.11 6.11 0 0 1 .5 4.073V3A1.5 1.5 0 0 1 2 1.5h.666A6.43 6.43 0 0 1 8 4.343A6.43 6.43 0 0 1 13.334 1.5H14A1.5 1.5 0 0 1 15.5 3v1.073a6.11 6.11 0 0 1-2.65 5.038a3.11 3.11 0 0 0-1.35 2.566zm-8-9.43a4.92 4.92 0 0 1 3.738 3.025c.275.688 1.249.688 1.524 0A4.92 4.92 0 0 1 13.334 3H14v1.073q0 .215-.02.427A4.61 4.61 0 0 1 12 7.875c-1.252.86-2 2.283-2 3.802v.823H6v-.823c0-1.52-.748-2.941-2-3.802a4.61 4.61 0 0 1-2-3.802V3h.666q.425 0 .834.07" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLogoMermaidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoNotionIcon],svg[gravity-ui-logo-notion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 2.5h4.98a2.5 2.5 0 0 1 1.66.631l.977.869h-5.93a1.5 1.5 0 0 1-1.069-.443l-.092-.091l-.915-.915Q3.798 2.5 4 2.5M2.55 3.611q-.049.187-.05.389v4.98a2.5 2.5 0 0 0 .631 1.66l.869.977v-5.8a1.83 1.83 0 0 0-.535-1.291zM7 5.5A1.5 1.5 0 0 0 5.5 7v5A1.5 1.5 0 0 0 7 13.5h5a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 12 5.5zM7 15h-.653a3 3 0 0 1-2.242-1.007L2.01 11.637A4 4 0 0 1 1 8.979V4a3 3 0 0 1 3-3h4.98a4 4 0 0 1 2.657 1.01l2.356 2.095A3 3 0 0 1 15 6.347V12a3 3 0 0 1-3 3zm.75-3a.75.75 0 0 1-.75-.75V8.08a1.08 1.08 0 0 1 1.96-.627l1.54 2.16V7.75a.75.75 0 0 1 1.5 0v3.168a1.082 1.082 0 0 1-1.963.628L8.5 9.392v1.858a.75.75 0 0 1-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLogoNotionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoOsiIcon],svg[gravity-ui-logo-osi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.5a5.5 5.5 0 0 0-2.977 10.126l.79-2.571a3 3 0 1 1 4.372 0l.792 2.57A5.5 5.5 0 0 0 8 2.5M1 8a7 7 0 1 1 9.832 6.403a.75.75 0 0 1-1.02-.465l-1.2-3.901a.75.75 0 0 1 .273-.826a1.5 1.5 0 1 0-1.77 0a.75.75 0 0 1 .274.826l-1.2 3.901a.75.75 0 0 1-1.021.465A7 7 0 0 1 1 8" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLogoOsiIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoPythonIcon],svg[gravity-ui-logo-python-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5.5h3.752a.75.75 0 0 0 0-1.5H5.5A1.5 1.5 0 0 1 7 2.5h2A1.5 1.5 0 0 1 10.5 4v2c0 .69-.56 1.25-1.25 1.25h-2.5A2.75 2.75 0 0 0 4 10v.5A1.5 1.5 0 0 1 2.5 9V7A1.5 1.5 0 0 1 4 5.5m1.5 5V12A1.5 1.5 0 0 0 7 13.5h2a1.5 1.5 0 0 0 1.5-1.5H8.25a.75.75 0 0 1 0-1.5H12A1.5 1.5 0 0 0 13.5 9V7A1.5 1.5 0 0 0 12 5.5V6a2.75 2.75 0 0 1-2.75 2.75h-2.5c-.69 0-1.25.56-1.25 1.25zM7 1a3 3 0 0 0-3 3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLogoPythonIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoStackOverflowIcon],svg[gravity-ui-logo-stack-overflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.849.33a.75.75 0 0 0-1.115 1.003l3.68 4.088a.75.75 0 1 0 1.115-1.004zM7.6 2.443a.75.75 0 0 1 1.048-.166L13.1 5.51a.75.75 0 1 1-.882 1.213L7.767 3.49a.75.75 0 0 1-.166-1.047m-.589 2.424a.75.75 0 1 0-.61 1.37l5.025 2.238a.75.75 0 1 0 .61-1.37zM4.82 8.11a.75.75 0 0 1 .89-.577l5.38 1.143a.75.75 0 0 1-.313 1.467L5.396 9a.75.75 0 0 1-.577-.89M2 10.25a.75.75 0 0 1 1.5 0V12A1.5 1.5 0 0 0 5 13.5h6a1.5 1.5 0 0 0 1.5-1.5v-1.75a.75.75 0 0 1 1.5 0V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3.25.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLogoStackOverflowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoTelegramIcon],svg[gravity-ui-logo-telegram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.254 8.521L9.61 5.86a.75.75 0 0 1 .782 1.28L6.586 9.465L9.77 12.65a1.2 1.2 0 0 0 1.973-.433l2.692-7.308a1.045 1.045 0 0 0-.98-1.408h-.105q-.151 0-.298.04L2.022 6.509a.707.707 0 0 0 .046 1.375zm-3.48.834L5 10l3.71 3.71a2.7 2.7 0 0 0 4.44-.976l2.693-7.308A2.544 2.544 0 0 0 13.454 2h-.104c-.232 0-.464.03-.688.091l-11.03 2.97a2.207 2.207 0 0 0 .142 4.294" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLogoTelegramIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoUbuntuIcon],svg[gravity-ui-logo-ubuntu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.034 3.902a1.5 1.5 0 1 0-2.03-1.293A5.7 5.7 0 0 0 9 2.25a5.8 5.8 0 0 0-1.681.25c-.427.13-.58.63-.356 1.017c.195.333.607.46.982.365a4.26 4.26 0 0 1 5.144 2.954c.105.372.423.664.81.664c.446 0 .801-.384.699-.82a5.74 5.74 0 0 0-1.564-2.778m-5.09 8.216c-.373-.096-.786.032-.98.365c-.226.386-.072.887.355 1.017A5.8 5.8 0 0 0 9 13.75c.705 0 1.38-.127 2.004-.359L11 13.5a1.5 1.5 0 1 0 2.034-1.402a5.74 5.74 0 0 0 1.564-2.779c.102-.435-.253-.819-.7-.819c-.386 0-.704.292-.81.664a4.25 4.25 0 0 1-5.143 2.954M5.937 5.055c.268-.278.359-.7.165-1.033c-.226-.386-.737-.499-1.061-.19A5.74 5.74 0 0 0 3.38 6.784a1.5 1.5 0 1 0 0 2.432a5.74 5.74 0 0 0 1.66 2.953c.325.308.836.195 1.062-.191c.194-.333.103-.755-.165-1.033A4.24 4.24 0 0 1 4.75 8c0-1.143.452-2.181 1.186-2.945" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLogoUbuntuIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoWindowsIcon],svg[gravity-ui-logo-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.788 2.974l-3.038.434V7.25h4.75V4.459a1.5 1.5 0 0 0-1.712-1.485M13.5 8.75H8.75v3.842l3.038.434A1.5 1.5 0 0 0 13.5 11.54zm-6.25-1.5V3.622l-3.462.495A1.5 1.5 0 0 0 2.5 5.602V7.25zM2.5 8.75h4.75v3.628l-3.462-.495A1.5 1.5 0 0 1 2.5 10.398zm1.076-6.118A3 3 0 0 0 1 5.602v4.796a3 3 0 0 0 2.576 2.97l8 1.143A3 3 0 0 0 15 11.54V4.459a3 3 0 0 0-3.424-2.97z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLogoWindowsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoYandexIcon],svg[gravity-ui-logo-yandex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.136 5.103a.75.75 0 0 0-1.272.795l2.044 3.27c.223.357.342.77.342 1.192v1.14a.75.75 0 0 0 1.5 0v-1.14a3.75 3.75 0 0 0-.57-1.987zm5 .795a.75.75 0 1 0-1.272-.795L8.77 6.853a.75.75 0 0 0 1.272.795z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLogoYandexIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[gravityUiLogoYandexCloudIcon],svg[gravity-ui-logo-yandex-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 5.492-5.5c1.318.032 1.88.796 2.02 1.48c.027.137.02.389-.027.713a7 7 0 0 1-.042.26l-1.759.308h-.001c-.838.144-1.537.432-2.068.933c-.535.504-.829 1.155-.98 1.887l-.444 2.146l-.009.043l-.02.098c-.034.168-.091.444-.132.725c-.047.325-.09.763-.025 1.154A5.49 5.49 0 0 1 2.5 8m5.501 7a7 7 0 0 0 .002-14h-.006a7 7 0 0 0 .001 14zm.007-1.5c-1.318-.032-1.88-.796-2.02-1.48c-.027-.137-.02-.389.027-.713a7 7 0 0 1 .042-.26l1.759-.308h.001c.838-.144 1.537-.432 2.068-.933c.535-.504.829-1.155.98-1.887l.444-2.146l.009-.043q.007-.04.02-.097c.034-.17.092-.445.132-.726c.047-.325.09-.763.024-1.154A5.5 5.5 0 0 1 8.009 13.5M9.62 6.532l-1.18.207h-.002c-.652.112-1.044.31-1.295.547c-.247.233-.43.57-.539 1.098L6.38 9.468l1.18-.207h.002c.652-.112 1.044-.31 1.295-.547c.247-.233.43-.57.539-1.098z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLogoYandexCloudIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
